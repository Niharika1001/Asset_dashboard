import type { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

export default function Modal({
  children,
  onClose,
}: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white dark:bg-gray-800 p-6 rounded w-96">
        {children}
        <button
          onClick={onClose}
          className="mt-4 text-sm text-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}
