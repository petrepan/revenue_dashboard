import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import ChevronDown from "../assets/chevron_down";
import Checkbox from "../assets/checkbox";
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

interface ISelectField {
  label: string;
  options: Array<{ name: string, value: string }>;
  onChange?: (e: any) => void;
  value: Array<{ name: string, value: string }> | null
}

export default function SelectField({ label, options, onChange, value }: ISelectField) {
  return (
    <div>
      {label && (
        <div className="flex gap-[.5px] items-center mb-2">
          <label className="text-[14px] inline-block" htmlFor={label}>
            {label}
          </label>
        </div>
      )}
      <Listbox value={value || []} onChange={onChange} multiple>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-[#EFF1F6] border border-[#EFF1F6] hover:border-[3px] hover:border-pry-dark focus:border-[3px] focus:border-pry-dark h-12 pl-3 pr-10 text-left focus:outline-none focus-visible:border-pry-dark focus-visible:ring-2 focus-visible:ring-pry-dark focus-visible:ring-offset-2 focus-visible:ring-offset-pry-dark sm:text-sm">
            <span className="block truncate text-pry-dark">
              {value?.map((option) => option.name).join(", ") || label}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
              <ChevronDown />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-30">
              {options.map((option, optionIdx) => (
                <Listbox.Option
                  key={optionIdx}
                  className={({ active }) =>
                    `relative cursor-pointer select-none mx-2 py-2 pl-3.5 pr-4 ${
                      active
                        ? "bg-[#EFF1F6] rounded text-pry-dark"
                        : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {() => (
                    <>
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <input
                          type="checkbox"
                          className="accent-black"
                          name=""
                          id=""
                          onChange={() => null}
                          checked={
                            value?.find(
                              (item) => item.name === option.name
                            )
                              ? true
                              : false
                          }
                        />
                      </span>
                      <span className={`block truncate ml-5 text-pry-dark font-bold`}>
                        {option.name}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
