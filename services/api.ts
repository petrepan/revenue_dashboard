import { useQuery } from "@tanstack/react-query";

export const useCreatorData = () => {
  const query = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const res = await fetch("https://fe-task-api.mainstack.io/user");
        return await res.json();
      } catch (error) {
        throw error;
      }
    },
  });

  return query;
};

export const useTransactionList = () => {
  const query = useQuery({
    queryKey: ["transaction_list"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "https://fe-task-api.mainstack.io/transactions"
        );
        return await res.json();
      } catch (error) {
        throw error;
      }
    },
  });

  return query;
};

export const useCreatorWallet = () => {
  const query = useQuery({
    queryKey: ["wallet"],
    queryFn: async () => {
      try {
        const res = await fetch("https://fe-task-api.mainstack.io/wallet");
        return await res.json();
      } catch (error) {
        throw error;
      }
    },
  });

  return query;
};
