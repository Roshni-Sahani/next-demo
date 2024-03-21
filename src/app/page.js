import Common from "@/components/Common";
import Page from "@/components/Page";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Page />
        <Common/>
      </div>
    </main>
  );
}
