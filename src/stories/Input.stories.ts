import { Input } from '@/components/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A single-line text field for user input. Forwards all native input props.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search'],
      description: 'Native HTML input type.',
      table: { defaultValue: { summary: 'text' } },
    },
    disabled: { control: 'boolean' },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Nombre completo',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'nombre@dominio.com',
  },
};

export const Disabled: Story = {
  args: {
    type: 'text',
    placeholder: 'No disponible',
    disabled: true,
  },
};
