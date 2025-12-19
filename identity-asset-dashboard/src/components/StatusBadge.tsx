import clsx from "clsx";

type Status = "active" | "expiring" | "expired";

interface StatusBadgeProps {
  status: Status;
}

export default function StatusBadge({
  status,
}: StatusBadgeProps) {
  return (
    <span
      className={clsx(
        "px-2 py-1 rounded text-xs font-semibold",
        status === "active" && "bg-green-100 text-green-700",
        status === "expiring" &&
          "bg-yellow-100 text-yellow-700",
        status === "expired" && "bg-red-100 text-red-700"
      )}
    >
      {status}
    </span>
  );
}
