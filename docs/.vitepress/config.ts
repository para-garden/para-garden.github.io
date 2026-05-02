import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'para',
  description: 'Worlds, tended not finished',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Projects', link: '/projects/' },
    ],

    sidebar: {
      '/': [
        {
          text: 'Overview',
          items: [
            { text: 'About', link: '/about' },
          ]
        },
        {
          text: 'Projects',
          items: [
            { text: 'Existence', link: '/projects/existence' },
            { text: 'Legacy', link: '/projects/legacy' },
            { text: 'Divergence', link: '/projects/divergence' },
            { text: 'Solarium', link: '/projects/solarium' },
          ]
        },
        {
          text: 'Community',
          items: [
            { text: 'Contributing', link: '/contributing' },
          ]
        },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/para-garden' }
    ],

    search: {
      provider: 'local'
    },
  },
})
