import {
  Badge,
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A container for grouping related content, composed with Header, Title, Description, Action, Content, and Footer parts.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'sm'],
      description: 'Controls internal spacing density.',
      table: { defaultValue: { summary: 'default' } },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { size: 'default' },
  render: (args) => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle>Plan Pro</CardTitle>
        <CardDescription>Facturación mensual, cancela cuando quieras.</CardDescription>
        <CardAction>
          <Badge variant="secondary">Popular</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Incluye componentes ilimitados, soporte prioritario y acceso anticipado a nuevas features.
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Suscribirse</Button>
      </CardFooter>
    </Card>
  ),
};
