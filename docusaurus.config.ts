import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: ' ',
  tagline: 'Clear technical documentation that simplifies complex products and helps your business to scale.',
  favicon: 'img/favicon.ico',
  customFields: {
    heroDescription:
      'Documentation built for real users, real products, and growing organisations.',
  },

  stylesheets: [
  {
    href:
      'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Nunito:wght@400;500;600;700&family=Roboto:wght@400;500;700&family=Lato:wght@400;700&display=swap',
    rel: 'stylesheet',
  },
],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://www.technicallywrite.co.uk',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Technically-Write', // Usually your GitHub org/user name.
  projectName: 'company-website-docs', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
  [
    'classic',
    {
      docs: {
        sidebarPath: './sidebars.ts',
        // editUrl:
        //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
      },
      blog: {
        showReadingTime: true,
        blogSidebarCount: 'ALL',
        feedOptions: {
          type: ['rss', 'atom'],
          xslt: true,
        },
        onInlineTags: 'warn',
        onInlineAuthors: 'warn',
        onUntruncatedBlogPosts: 'warn',
        // editUrl:
        //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
      },
      theme: {
        customCss: './src/css/custom.css',
      },

      // Google Analytics 4 (gtag.js)
      gtag: {
        trackingID: 'G-BBQ1ZJ5T6F',
        anonymizeIP: true, // optional
      },
    } satisfies Preset.Options,
  ],
],

  themeConfig: {
    // Replace with your project's social card
    announcementBar: {
    id: 'free-review-2026-02', // change when you change the message
    content:
      '🛠️ Excuse the gaps and scaffolding — this site is still taking shape.<a href="/docs/contact">request yours</a>.',
    backgroundColor: '#113250',
    textColor: '#fff',
    isCloseable: true,
    },
    image: '/img/social-card.jpg',
    colorMode: {
    defaultMode: 'light',
    disableSwitch: false,          // keep the toggle (set true to remove it)
    respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Home',
      logo: {
        alt: 'My Site Logo',
        src: 'img/tw-icon.jpg',
      },
      items: [
        {
          type: 'doc',
          docId: 'services',
          position: 'left',
          label: 'Services',
        },
        {
          type: 'doc',
          docId: 'about',
          position: 'left',
          label: 'About',
        },
        {
          type: 'doc',
          docId: 'portfolio',
          position: 'left',
          label: 'Portfolio',
        },
        {
          type: 'doc',
          docId: 'prices',
          position: 'left',
          label: 'Prices',
        },
        {
          type: 'doc',
          docId: 'contact',
          position: 'left',
          label: 'Contact',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        //{
          //href: 'https://github.com/facebook/docusaurus',
          //label: 'GitHubs',
          //position: 'right',
        //},
      ],
    },
    footer: {
      style: 'dark',
      /*links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      */
      copyright: `Copyright © ${new Date().getFullYear()} Technically Write Ltd., <br /> Company Reg. No.: NI720408. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

