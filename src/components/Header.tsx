interface HeaderProps {
  header: string;
}

export function Header({ header }: HeaderProps) {
  return (
    <header className="mt-10 border-5 border-emerald-500 p-6 bg-emerald-200">
      <h1 className="text-4xl font-semibold text-gray-700">{header}</h1>
    </header>
  );
}
