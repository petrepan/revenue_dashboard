"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Info from "@/components/assets/info";
import { useCreatorWallet } from "@/services/api";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false, // Set to false to hide the legend (header)
    },
    title: {
      display: false, // Set to false to hide the title
    },
  },
  elements: {
    line: {
      tension: 0.4, // Adjust the tension to control the curve
    },
  },
  scales: {
    x: {
      ticks: {
        maxRotation: 0,
        minRotation: 0,
      },
      grid: {
        display: false, // Remove vertical gridlines
        beginAtZero: true,
      },
    },
    y: {
      grid: {
        display: true, // Optionally, hide horizontal gridlines
      },
      beginAtZero: true,
      display: false, // Set to false to remove the main vertical axis line
    },
  },
};

const labels = ["Apr 1,  2022", "", "", "", "", "", "Apr 30,  2022"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [300, 1000, 900, 500, 1400, 1500, 250],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "#FF5403",
      borderWidth: 1,
      pointRadius: 0,
    },
  ],
};

const Wallet = () => {
  const { data: creatorWallet } = useCreatorWallet();

  return (
    <div className="flex gap-[124px] mt-[64px] pt-[67px]">
      <div className="w-full">
        <div className="flex items-center gap-[64px]">
          <div>
            <div className="text-xs font-medium mb-0.5 text-[#56616B]">
              Available Balance
            </div>
            <div className="text-[36px] font-bold leading-[48px] tracking-[-1.5px]">
              {creatorWallet?.balance ? "USD" : ""}{" "}
              {creatorWallet?.balance || ""}
              {creatorWallet?.balance === 0 && "USD 0.00"}
            </div>
          </div>
          <button className="font-semibold w-[167px] bg-pry-dark py-3.5 rounded-[100px] text-white">
            Withdraw
          </button>
        </div>
        <div className="h-[300px] pt-10 w-full">
          <Line options={options} data={data} />
        </div>
      </div>
      <div className="grid-cols-[271px] text-[#56616B] grid gap-8">
        <div>
          <div className="flex justify-between items-center mb-2.5">
            <div className="text-sm font-medium">Ledger Balance</div>
            <Info />
          </div>
          <div className="font-bold text-[28px] tracking-[-0.6px] text-pry-dark">
            {creatorWallet?.ledger_balance ? "USD" : ""}{" "}
            {creatorWallet?.ledger_balance || ""}
            {creatorWallet?.ledger_balance === 0 && "USD 0.00"}
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mb-2.5">
            <div className="text-sm font-medium">Total Payout</div>
            <Info />
          </div>
          <div className="font-bold text-[28px] tracking-[-0.6px] text-pry-dark">
            {creatorWallet?.total_payout ? "USD" : ""}{" "}
            {creatorWallet?.total_payout || ""}
            {creatorWallet?.total_payout === 0 && "USD 0.00"}
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mb-2.5">
            <div className="text-sm font-medium">Total Revenue</div>
            <Info />
          </div>
          <div className="font-bold text-[28px] tracking-[-0.6px] text-pry-dark">
            {creatorWallet?.total_revenue ? "USD" : ""}{" "}
            {creatorWallet?.total_revenue || ""}
            {creatorWallet?.total_revenue === 0 && "USD 0.00"}
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mb-2.5">
            <div className="text-sm font-medium">Pending Payout</div>
            <Info />
          </div>
          <div className="font-bold text-[28px] tracking-[-0.6px] text-pry-dark">
            {creatorWallet?.pending_payout ? "USD" : ""}{" "}
            {creatorWallet?.pending_payout || ""}
            {creatorWallet?.pending_payout === 0 && "USD 0.00"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
