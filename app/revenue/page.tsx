import Nav from "@/components/common/nav";
import Image from "next/image";
import Wallet from "./components/wallet";
import Transactions from "./components/transactions";

export default function Revenue() {
  return (
    <main>
      <Nav />
      <div className="m-auto max-w-6xl">
        <Wallet />
        <Transactions />
      </div>
    </main>
  );
}
