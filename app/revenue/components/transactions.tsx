"use client";
import React, { useState } from "react";
import ArrowDown from "@/components/assets/arrow_down";
import ArrowUp from "@/components/assets/arrow_up";
import ChevronDown from "@/components/assets/chevron_down";
import Download from "@/components/assets/download";
import TransactionFilter from "@/components/modals/transaction_filter";
import { useTransactionList } from "@/services/api";
import { Options, Transaction } from "@/types/revenue";
import { format, parse, parseISO } from "date-fns";
import {
  convertDate,
  countTruthyKeys,
  filterTransactions,
  typeColorPallet,
} from "@/lib/utils";
import Receipt from "@/components/assets/receipt";

const Transactions = () => {
  const { data } = useTransactionList();
  let [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [transactionType, setTransactionType] = useState<Array<Options> | null>(
    null
  );
  const [transactionStatus, setTransactionStatus] =
    useState<Array<Options> | null>(null);
  const [filterCriteria, setFilterCriteria] = useState({});

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const resetFilter = () => {
    setStartDate(undefined);
    setEndDate(undefined);
    setTransactionStatus(null);
    setTransactionType(null);
    setFilterCriteria({});
  };

  const filterCriteriaPayload = {
    type: transactionType?.map((item) => item.name.toLowerCase()),
    startDate: convertDate(startDate),
    endDate: convertDate(endDate),
    status: transactionStatus?.map((item) => item.name.toLowerCase()),
  };

  const applyFilter = () => {
    setFilterCriteria(filterCriteriaPayload);
  };

  return (
    <div className="mt-[86px]">
      <TransactionFilter
        isOpen={isOpen}
        toggleModal={toggleModal}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        transactionType={transactionType}
        setTransactionType={setTransactionType}
        transactionStatus={transactionStatus}
        setTransactionStatus={setTransactionStatus}
        resetFilter={resetFilter}
        applyFilter={applyFilter}
      />
      <div className="text-pry-dark flex justify-between pb-6 border-b border-b-[#EFF1F6] mb-[33px]">
        <div>
          <div className="font-bold text-2xl">
            {filterTransactions(data, filterCriteria)?.length || 0} Transactions
          </div>
          <div className="text-[#56616B] text-sm font-medium">
            Your transactions{" "}
            {!countTruthyKeys(filterCriteria) && `for all Time`}
            {filterCriteriaPayload.startDate &&
              filterCriteriaPayload.endDate &&
              countTruthyKeys(filterCriteria) ?
              `between ${filterCriteriaPayload.startDate} and ${filterCriteriaPayload.endDate}`: ""}
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <button
            onClick={toggleModal}
            className="flex items-center gap-1 font-semibold tracking-[-0.6px] bg-[#EFF1F6] rounded-[100px] py-3 pl-[30px] pr-5"
          >
            <span>Filter</span>
            {countTruthyKeys(filterCriteria) ? (
              <span className="bg-pry-dark text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {countTruthyKeys(filterCriteria)}
              </span>
            ) : (
              ""
            )}
            <ChevronDown />
          </button>
          <button className="flex items-center gap-1 font-semibold tracking-[-0.6px] bg-[#EFF1F6] rounded-[100px] py-3 pl-[30px] pr-5">
            <span>Export list</span>
            <Download />
          </button>
        </div>
      </div>
      {filterTransactions(data, filterCriteria)?.length === 0 && (
        <div className="flex justify-center">
          <div className="w-[400px]">
            <div className="w-[48px] h-[48px] rounded-[16px] flex justify-center items-center bg-[#F6F7F9] mb-5">
              <Receipt />
            </div>
            <div className="font-bold text-[26px] mb-2.5">
              No matching transaction found for the selected filter
            </div>
            <div className="text-[#56616B] mb-8">
              Change your filters to see more results, or add a new product.
            </div>
            <button
              onClick={resetFilter}
              className="flex items-center font-semibold tracking-[-0.6px] bg-[#EFF1F6] rounded-[100px] py-3 px-6"
            >
              <span>Clear Filter</span>
            </button>
          </div>
        </div>
      )}
      <div className="grid gap-6 text-pry-dark font-medium pb-[70px]">
        {filterTransactions(data, filterCriteria)?.map(
          (item: Transaction, i: number) => (
            <div key={i + 1} className="flex justify-between">
              <div className="flex items-center gap-[14.5px]">
                {item.type === "withdrawal" ? (
                  <div className="w-[48px] h-[48px] flex justify-center items-center bg-[#F9E3E0] rounded-full">
                    <ArrowUp />
                  </div>
                ) : (
                  <div className="w-[48px] h-[48px] flex justify-center items-center bg-[#E3FCF2] rounded-full">
                    <ArrowDown />
                  </div>
                )}
                <div>
                  <div className="mb-[9px]">
                    {item?.metadata?.product_name ||
                      item?.metadata?.name ||
                      "Cash withdrawal"}
                  </div>
                  <div
                    className={`${
                      typeColorPallet[item.type] || "text-[#56616B]"
                    } text-sm capitalize`}
                  >
                    {item?.metadata?.name || item.status}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold mb-1">
                  USD {item.amount || "0.00"}
                </div>
                <div className="text-[#56616B] text-sm">
                  {format(new Date(item.date), "MMMM dd, yyyy") || "-"}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Transactions;
