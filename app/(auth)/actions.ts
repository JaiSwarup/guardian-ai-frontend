"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { validatedAction } from "@/lib/auth/middleware";

// async function logActivity(
//   teamId: number | null | undefined,
//   userId: number,
//   type: ActivityType,
//   ipAddress?: string
// ) {
//   if (teamId === null || teamId === undefined) {
//     return;
//   }
//   const newActivity: NewActivityLog = {
//     teamId,
//     userId,
//     action: type,
//     ipAddress: ipAddress || "",
//   };
//   await db.insert(activityLogs).values(newActivity);
// }

const signInSchema = z.object({
  email: z.string().email().min(3).max(255),
  password: z.string().min(8).max(100),
});

export const signIn = validatedAction(signInSchema, async (data, formData) => {
  const { email, password } = data;
  console.log(formData);
  redirect("/dashboard");
});

const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  inviteId: z.string().optional(),
});

export const signUp = validatedAction(signUpSchema, async (data, formData) => {
  const { email, password, inviteId } = data;
  console.log(formData);
  redirect("/dashboard");
});

export async function signOut() {
  //   const user = (await getUser()) as User;
  //   const userWithTeam = await getUserWithTeam(user.id);
  //   await logActivity(userWithTeam?.teamId, user.id, ActivityType.SIGN_OUT);
  (await cookies()).delete("session");
}
