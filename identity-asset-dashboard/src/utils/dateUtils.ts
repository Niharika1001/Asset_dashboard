import { differenceInDays } from "date-fns";

export function getStatus(expiry: string) {
  const days = differenceInDays(new Date(expiry), new Date());
  if (days < 0) return "expired";
  if (days <= 30) return "expiring";
  return "active";
}
