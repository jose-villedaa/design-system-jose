import { Badge } from '@/components/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A compact label for status, category, or count. Renders as a `<span>` by default.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'],
      description: 'Visual style of the badge.',
      table: { defaultValue: { summary: 'default' } },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Nuevo',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Beta',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Vencido',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Borrador',
  },
};
