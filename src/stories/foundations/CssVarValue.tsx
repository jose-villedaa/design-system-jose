import { useEffect, useState } from 'react';

/** Reads the live, computed value of a CSS custom property from :root or .dark. */
function useCssVar(name: string) {
  const [value, setValue] = useState('');

  useEffect(() => {
    const read = () =>
      setValue(getComputedStyle(document.documentElement).getPropertyValue(name).trim());

    read();

    const observer = new MutationObserver(read);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, [name]);

  return value;
}

type CssVarValueProps = {
  name: string;
}

export function CssVarValue({ name }: Readonly<CssVarValueProps>) {
  const value = useCssVar(name);
  return <code className="text-xs text-muted-foreground">{value || '—'}</code>;
}
