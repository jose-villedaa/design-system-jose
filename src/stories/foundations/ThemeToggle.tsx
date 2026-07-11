import { useState } from 'react';

/** Toggles the `.dark` class on <html> so token swatches reflect both themes. */
export function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));

  const toggle = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(document.documentElement.classList.contains('dark'));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="rounded-md border border-border bg-card px-3 py-1.5 text-sm text-foreground hover:bg-muted"
    >
      {isDark ? 'Switch to light' : 'Switch to dark'}
    </button>
  );
}
