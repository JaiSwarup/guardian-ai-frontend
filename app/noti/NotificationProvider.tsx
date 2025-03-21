"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";

interface NotificationProps {
  message: string;
  onClose: () => void;
}

export function Notification({ message, onClose }: NotificationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg flex items-center gap-3"
    >
      <span>{message}</span>
      <button onClick={onClose}>
        <X size={18} />
      </button>
    </motion.div>
  );
}