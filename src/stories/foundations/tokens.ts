export const colorTokens = [
  { name: 'background', label: 'Background', bg: 'bg-background', fg: 'text-foreground' },
  { name: 'foreground', label: 'Foreground', bg: 'bg-foreground', fg: 'text-background' },
  { name: 'card', label: 'Card', bg: 'bg-card', fg: 'text-card-foreground' },
  { name: 'popover', label: 'Popover', bg: 'bg-popover', fg: 'text-popover-foreground' },
  { name: 'primary', label: 'Primary', bg: 'bg-primary', fg: 'text-primary-foreground' },
  { name: 'secondary', label: 'Secondary', bg: 'bg-secondary', fg: 'text-secondary-foreground' },
  { name: 'muted', label: 'Muted', bg: 'bg-muted', fg: 'text-muted-foreground' },
  { name: 'accent', label: 'Accent', bg: 'bg-accent', fg: 'text-accent-foreground' },
  { name: 'destructive', label: 'Destructive', bg: 'bg-destructive', fg: 'text-destructive-foreground' },
  { name: 'border', label: 'Border', bg: 'bg-border', fg: 'text-foreground' },
  { name: 'input', label: 'Input', bg: 'bg-input', fg: 'text-foreground' },
  { name: 'ring', label: 'Ring', bg: 'bg-ring', fg: 'text-primary-foreground' },
] as const;

export const chartTokens = [
  { name: 'chart-1', bg: 'bg-chart-1' },
  { name: 'chart-2', bg: 'bg-chart-2' },
  { name: 'chart-3', bg: 'bg-chart-3' },
  { name: 'chart-4', bg: 'bg-chart-4' },
  { name: 'chart-5', bg: 'bg-chart-5' },
] as const;

export const sidebarTokens = [
  { name: 'sidebar', label: 'Sidebar', bg: 'bg-sidebar', fg: 'text-sidebar-foreground' },
  { name: 'sidebar-primary', label: 'Sidebar Primary', bg: 'bg-sidebar-primary', fg: 'text-sidebar-primary-foreground' },
  { name: 'sidebar-accent', label: 'Sidebar Accent', bg: 'bg-sidebar-accent', fg: 'text-sidebar-accent-foreground' },
  { name: 'sidebar-border', label: 'Sidebar Border', bg: 'bg-sidebar-border', fg: 'text-sidebar-foreground' },
] as const;

export const fontTokens = [
  { name: '--font-sans', className: 'font-sans', label: 'Sans' },
  { name: '--font-serif', className: 'font-serif', label: 'Serif' },
  { name: '--font-mono', className: 'font-mono', label: 'Mono' },
] as const;

export const radiusTokens = [
  { name: '--radius-sm', className: 'rounded-sm', label: 'sm' },
  { name: '--radius-md', className: 'rounded-md', label: 'md' },
  { name: '--radius-lg', className: 'rounded-lg', label: 'lg' },
  { name: '--radius-xl', className: 'rounded-xl', label: 'xl' },
] as const;

export const shadowTokens = [
  { className: 'shadow-2xs', label: '2xs' },
  { className: 'shadow-xs', label: 'xs' },
  { className: 'shadow-sm', label: 'sm' },
  { className: 'shadow-md', label: 'md' },
  { className: 'shadow-lg', label: 'lg' },
  { className: 'shadow-xl', label: 'xl' },
  { className: 'shadow-2xl', label: '2xl' },
] as const;

export const spacingTokens = [1, 2, 3, 4, 6, 8, 12, 16, 24] as const;
