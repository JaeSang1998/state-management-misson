interface Props {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export default function SubTheme({ theme, toggleTheme }: Props) {
  return (
    <div>
      <p>현재 테마: {theme}</p>
      <button
        data-testid="theme-toggle"
        className="bg-gray-600 text-white px-2 py-1 rounded"
        onClick={toggleTheme}
      >
        테마 토글
      </button>
    </div>
  );
}
