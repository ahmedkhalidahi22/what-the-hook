import Card from "./Card";

type HooksListProps = {
  hooks: {
    title: string;
    description: string;
  }[];
};
const HooksList = ({ hooks }: HooksListProps) => {
  return (
    <section className="flex flex-col gap-8 p-8 border border-gray-800 rounded-lg w-1/2 mx-auto">
      {hooks.map((hook, index) => {
        return (
          <Card key={index} description={hook.description} title={hook.title} />
        );
      })}
    </section>
  );
};

export default HooksList;
