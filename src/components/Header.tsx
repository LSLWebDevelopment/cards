interface HeaderProps {
  header: string;
}

export function Header({ header }: HeaderProps) {
  return (
    <header className="mt-10 border-3 text-center border-emerald-300 p-6 bg-emerald-100">
      <h1 className="text-4xl font-semibold text-gray-700">{header}</h1>
    </header>
  );
}
