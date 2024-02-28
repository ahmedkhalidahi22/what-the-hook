import React from "react";
type cardProps = {
  title: string;
  description: string;
};
export default function Card({ title, description }: cardProps) {
  return (
    <div className="p-4 flex flex-col gap-5 text-left bg-amber-100 rounded-lg ">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{description}</p>
      <button className="text-right">Check Out</button>
    </div>
  );
}
