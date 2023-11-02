import { Dialog, Transition } from "@headlessui/react";
import { Dispatch, Fragment, SetStateAction, useState } from "react";
import Close from "../assets/close";
import { DatePickerDialog } from "../ui/daypicker";
import SelectField from "../ui/selectfield";
import { TRANSACTION_STATUS, TRANSACTION_TYPE } from "../../data";
import { Options } from "@/types/revenue";
import { getDatePeriod } from "@/lib/utils";

interface ITransactionFilter {
  toggleModal: () => void;
  isOpen: boolean;
  startDate: Date | undefined;
  endDate: Date | undefined;
  transactionType: Array<Options> | null;
  transactionStatus: Array<Options> | null;
  setStartDate: Dispatch<SetStateAction<Date | undefined>>;
  setEndDate: Dispatch<SetStateAction<Date | undefined>>;
  setTransactionType: Dispatch<React.SetStateAction<Options[] | null>>;
  setTransactionStatus: Dispatch<React.SetStateAction<Options[] | null>>;
  resetFilter: () => void;
  applyFilter: () => void;
}

export default function TransactionFilter({
  toggleModal,
  isOpen,
  startDate,
  endDate,
  transactionType,
  transactionStatus,
  setStartDate,
  setEndDate,
  setTransactionType,
  setTransactionStatus,
  resetFilter,
  applyFilter,
}: ITransactionFilter) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={toggleModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full justify-end p-2 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[466px] flex flex-col justify-between transform overflow-hidden rounded-2xl bg-white py-5 px-[22px] text-left align-middle shadow-xl transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-[30px]">
                      <Dialog.Title
                        as="h3"
                        className="text-2xl font-bold leading-7 text-pry-dark"
                      >
                        Filter
                      </Dialog.Title>
                      <button onClick={toggleModal}>
                        <Close />
                      </button>
                    </div>
                    <div className="flex items-center gap-3 whitespace-nowrap">
                      <button
                        onClick={() => {
                          setStartDate(getDatePeriod(1, "days"));
                          setEndDate(new Date());
                        }}
                        className="w-[70px] py-2.5 border border-[#EFF1F6] rounded-[100px] text-sm font-semibold tracking-[-0.4px]"
                      >
                        Today
                      </button>
                      <button
                        onClick={() => {
                          setStartDate(getDatePeriod(7, "days"));
                          setEndDate(new Date());
                        }}
                        className="w-[98px] py-2.5 border border-[#EFF1F6] rounded-[100px] text-sm font-semibold tracking-[-0.4px]"
                      >
                        Last 7 days
                      </button>
                      <button
                        onClick={() => {
                          setStartDate(getDatePeriod(1, "months"));
                          setEndDate(new Date());
                        }}
                        className="w-[99px] py-2.5 border border-[#EFF1F6] rounded-[100px] text-sm font-semibold tracking-[-0.4px]"
                      >
                        This month
                      </button>
                      <button
                        onClick={() => {
                          setStartDate(getDatePeriod(3, "months"));
                          setEndDate(new Date());
                        }}
                        className="w-[116px] py-2.5 border border-[#EFF1F6] rounded-[100px] text-sm font-semibold tracking-[-0.4px]"
                      >
                        Last 3 months
                      </button>
                    </div>
                    <div className="mt-6">
                      <label className="font-semibold mb-3 inline-block">
                        Date Range
                      </label>
                      <div className="flex gap-[6px] relative">
                        <div className="w-full">
                          <DatePickerDialog
                            name="Start date"
                            date={startDate}
                            setDate={setStartDate}
                            offset="absolute -left-[100px]"
                          />
                        </div>
                        <div className="w-full">
                          <DatePickerDialog
                            name="End date"
                            date={endDate}
                            setDate={setEndDate}
                            offset="absolute -left-[315px]"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <SelectField
                        value={transactionType}
                        label="Transaction Type"
                        options={TRANSACTION_TYPE}
                        onChange={setTransactionType}
                      />
                    </div>
                    <div className="mt-6">
                      <SelectField
                        value={transactionStatus}
                        label="Transaction Status"
                        options={TRANSACTION_STATUS}
                        onChange={setTransactionStatus}
                      />
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={resetFilter}
                      type="button"
                      className="inline-flex justify-center w-full rounded-[100px] bg-white border border-[#EFF1F6] px-4 py-3 text-sm font-medium text-pry-dark focus:outline-none"
                    >
                      Clear
                    </button>
                    <button
                      onClick={applyFilter}
                      type="button"
                      className="inline-flex justify-center w-full rounded-[100px] border border-transparent text-white bg-pry-dark px-4 py-3 text-sm font-medium text-whitefocus:outline-none"
                    >
                      Apply
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
