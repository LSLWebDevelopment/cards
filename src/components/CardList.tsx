import { Card } from "./Card";

interface CardProps {
  img: string;
  title: string;
  handle: string;
  text: string;
}

interface CardListProps {
  items: CardProps[];
}

export function CardList({ items }: CardListProps) {
  const itemsRendered = items.map((item: CardProps) => {
    return (
      <Card
        key={item.title}
        handle={item.handle}
        title={item.title}
        img={item.img}
        text={item.text}
      />
    );
  });

  return <div className="flex flex-row justify-between">{itemsRendered}</div>;
}
