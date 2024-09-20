import type { Meta, StoryObj } from '@storybook/vue3'

import NuxtI18nComponent from './NuxtI18n.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: 'Modules/Nuxt i18n',
  component: NuxtI18nComponent,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof NuxtI18nComponent>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */

export const NuxtI18n: Story = {
  args: {},
}
