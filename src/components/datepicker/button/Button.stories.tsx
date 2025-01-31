import type { Meta, StoryObj } from '@storybook/react';
import { classNames } from '../../../utils/class-names';
import { Items } from '../items/Items';
import { DateItems } from '../items/Items.stories';
import { Picker } from '../picker/Picker';
import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Datepicker/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    as: {
      table: {
        defaultValue: {
          summary: 'button',
        },
      },
    },
    action: {
      control: 'select',
      options: [
        'open',
        'close',
        'toggle',
        'next',
        'prev',
        'year',
        'month',
        'day',
        'today',
        'todayHour',
      ],
    },
  },
  parameters: {
    showDatepicker: true,
  },
  decorators: [
    (Story, { args }) => {
      return (
        <div
          className={classNames(
            'text-gray-200 overflow-hidden',
            args.action !== 'toggle' && 'bg-gray-800',
            args.action !== 'toggle' &&
              (args.className?.toString().includes('rounded-full')
                ? 'rounded-full'
                : 'rounded-md'),
          )}
        >
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Toggle = {
  parameters: {
    showDatepicker: false,
  },
  args: {
    action: 'toggle',
    className:
      'leading-2 p-2 text-lg font-semibold hover:bg-gray-700 hover:text-white flex items-center space-x-2',
    children: 'Toggle picker state',
  },
  decorators: [
    (Story) => (
      <div className="flex flex-col space-y-4 items-center">
        <div className="bg-gray-800 rounded-md overflow-hidden">
          <Story />
        </div>
        <Picker
          onClose={() => {
            console.log('close');
          }}
          defaultType="day"
          className="rounded-md bg-white p-4 shadow-md dark:bg-gray-800 dark:text-gray-300 w-[352px]"
          defaultOpen
          // disableClickOutside
          attachTo={false}
        >
          <Items {...DateItems.args} type={undefined} />
        </Picker>
      </div>
    ),
  ],
} satisfies Story;

export const ShowYear = {
  args: {
    action: 'showYear',
    className:
      'leading-2 p-2 text-lg font-semibold hover:bg-gray-700 hover:text-white',
    children: 'Show year',
  },
} satisfies Story;

export const ToggleYear = {
  args: {
    action: 'toggleYear',
    className:
      'leading-2 p-2 text-lg font-semibold hover:bg-gray-700 hover:text-white',
    children: 'Toggle year',
  },
} satisfies Story;

export const ShowMonth = {
  args: {
    action: 'showMonth',
    className:
      'leading-2 p-2 text-lg font-semibold hover:bg-gray-700 hover:text-white',
    children: 'Show month',
  },
} satisfies Story;

export const ToggleMonth = {
  args: {
    action: 'toggleMonth',
    className:
      'leading-2 p-2 text-lg font-semibold hover:bg-gray-700 hover:text-white',
    children: 'Toggle month',
  },
} satisfies Story;

export const Prev = {
  parameters: {
    override: {
      children: 'Prev',
    },
  },
  args: {
    action: 'prev',
    className:
      'rounded-full p-2 text-sm font-medium hover:bg-gray-700 hover:text-white rtl:rotate-180',
    children: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        className="h-4 w-4 fill-current"
      >
        <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
      </svg>
    ),
  },
} satisfies Story;

export const Next = {
  parameters: {
    override: {
      children: 'Next',
    },
  },
  args: {
    action: 'next',
    className:
      'rounded-full p-2 text-sm font-medium hover:bg-gray-700 hover:text-white rtl:rotate-180',
    children: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        className="h-4 w-4 fill-current"
      >
        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
      </svg>
    ),
  },
} satisfies Story;

export const Today = {
  args: {
    action: 'today',
    className: 'w-full bg-blue-700 p-2 text-sm font-medium hover:bg-blue-600',
    children: 'Today',
  },
} satisfies Story;

export const TodayHour = {
  args: {
    action: 'todayHour',
    className: 'w-full bg-blue-700 p-2 text-sm font-medium hover:bg-blue-600',
    children: 'Today with hour',
  },
} satisfies Story;
