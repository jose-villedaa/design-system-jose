import { Input, Label } from '@/components/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A text label associated with a form control.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Correo electrónico',
  },
};

export const WithInput: Story = {
  args: {
    children: 'Correo electrónico',
  },
  render: (args) => (
    <div className="flex flex-col gap-1.5">
      <Label {...args} htmlFor="email-with-label" />
      <Input id="email-with-label" type="email" placeholder="nombre@dominio.com" />
    </div>
  ),
};
