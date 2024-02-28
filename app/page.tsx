import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="relative flex flex-col gap-7 text-center items-center text-gray-950">
        <h1 className="font-extrabold text-7xl">What The Hook?</h1>
        <p className=" text-xl font-normal text-gray-800">
          Your interactive guide to mastering{" "}
          <span className="font-bold">React Hooks</span>
        </p>
        <button className="px-5 py-2 mt-5 text-amber-50 text-center  bg-neutral-900 rounded-full text-lg font-bold w-fit">
          Begin Learing
        </button>
      </div>
    </main>
  );
}
