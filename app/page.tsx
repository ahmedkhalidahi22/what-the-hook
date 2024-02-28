import Image from "next/image";
import HooksList from "./components/HooksList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-10">
      <div className="relative flex flex-col min-h-screen  justify-center gap-7 text-center items-center text-gray-950">
        <h1 className="font-extrabold text-7xl">What The Hook?</h1>
        <p className=" text-xl font-normal text-gray-800">
          Your interactive guide to mastering{" "}
          <span className="font-bold">React Hooks</span>
        </p>
        <button className="px-6 py-3 mt-5 text-neutral-900 text-center  bg-[#ffc445]  rounded-full text-md font-bold w-fit border-2 border-neutral-900">
          BEGIN LEARNING
        </button>
      </div>
      <section className="flex flex-col gap-10">
        <h1 className="text-center text-5xl text-gray-900 font-bold">Hooks</h1>
        <HooksList
          hooks={[
            {
              title: "useState",
              description: "used to add state to your component",
            },
            {
              title: "useState",
              description: "used to add state to your component",
            },
            {
              title: "useState",
              description: "used to add state to your component",
            },
            {
              title: "useState",
              description: "used to add state to your component",
            },
          ]}
        />
      </section>
    </main>
  );
}
