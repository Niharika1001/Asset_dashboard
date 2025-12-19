import { motion } from "framer-motion";

interface DrawerProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

export default function Drawer({ title, children, onClose }: DrawerProps) {
  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div
        className="flex-1 bg-black/40"
        onClick={onClose}
      />

      {/* Drawer */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.25 }}
        className="w-[400px] bg-white dark:bg-gray-800 p-6 shadow-xl"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-lg text-gray-800 dark:text-white">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {children}
      </motion.div>
    </div>
  );
}
