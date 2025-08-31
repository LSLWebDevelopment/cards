interface CardProps {
  img: string;
  title: string;
  handle: string;
  text: string;
}

export function Card({ handle, img, text, title }: CardProps) {
  return (
    <div className="border-3 border-gray-800 mt-10 w-60">
      <figure className="border-b-3 border-gray-800 w-full text-center">
        <img src={img} alt={title} className="mx-auto inline-block w-60" />
      </figure>

      <h2 className="pt-5 pl-5 text-4xl font-semibold text-gray-800 mb-0">
        {title}
      </h2>
      <em className="px-5 -mt-5 inline-block text-gray-600">{handle}</em>
      <p className="p-5 text-2xl">{text}</p>
    </div>
  );
}
