import { Transaction } from "@/types/revenue";
import { type ClassValue, clsx } from "clsx";
import { format, parse, sub, subMonths } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertDate = (d: Date | undefined) => {
  const formatD = `${d}`;
  if (!d) {
    return d;
  }
  const inputDate = new Date(d);

  // Extract date components
  const year = inputDate.getFullYear();
  const month = inputDate.getMonth() + 1; // Months are zero-based
  const day = inputDate.getDate();

  // Format the date
  const formattedDate = format(new Date(year, month - 1, day), "yyyy-MM-dd");

  return formattedDate;
};

export function filterTransactions(
  transactions: Transaction[],
  filterCriteria: any
) {
  const { type, startDate, endDate, status } = filterCriteria;

  if (type?.length === 0 && status?.length === 0 && !startDate && !endDate) {
    return transactions;
  }

  return transactions?.filter((transaction) => {
    if (type?.length > 0 && !type?.includes(transaction.type)) {
      return false;
    }
    if (startDate && new Date(transaction.date) < new Date(startDate)) {
      return false;
    }
    if (endDate && new Date(transaction.date) > new Date(endDate)) {
      return false;
    }
    if (status?.length > 0 && !status?.includes(transaction.status)) {
      return false;
    }
    return true;
  });
}

export const getDatePeriod = (period: number, duration: "months" | "days") => {
  const currentDate = new Date();
  return sub(
    currentDate,
    duration === "months" ? { months: period } : { days: period }
  );
};

export function countTruthyKeys(object: any) {
  let count = 0;

  for (const key in object) {
    if (object.hasOwnProperty(key) && object[key]) {
      count++;
    }

    if (
      (Array.isArray(object[key]) && object[key].length === 0) ||
      (typeof object[key] === "object" && Object.keys(object[key]).length === 0)
    ) {
      count--;
    }
  }

  return count < 0 ? 0 : count;
}

export const typeColorPallet: any = {
  withdrawal: "text-[#0EA163]",
  deposit: "text-[#56616B]",
};
