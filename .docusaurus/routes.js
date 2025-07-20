import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/syde/blog',
    component: ComponentCreator('/syde/blog', '11c'),
    exact: true
  },
  {
    path: '/syde/blog/archive',
    component: ComponentCreator('/syde/blog/archive', 'bcb'),
    exact: true
  },
  {
    path: '/syde/blog/authors',
    component: ComponentCreator('/syde/blog/authors', '847'),
    exact: true
  },
  {
    path: '/syde/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/syde/blog/authors/all-sebastien-lorber-articles', 'd72'),
    exact: true
  },
  {
    path: '/syde/blog/authors/yangshun',
    component: ComponentCreator('/syde/blog/authors/yangshun', '058'),
    exact: true
  },
  {
    path: '/syde/blog/first-blog-post',
    component: ComponentCreator('/syde/blog/first-blog-post', 'd95'),
    exact: true
  },
  {
    path: '/syde/blog/long-blog-post',
    component: ComponentCreator('/syde/blog/long-blog-post', '6b1'),
    exact: true
  },
  {
    path: '/syde/blog/mdx-blog-post',
    component: ComponentCreator('/syde/blog/mdx-blog-post', 'cbb'),
    exact: true
  },
  {
    path: '/syde/blog/tags',
    component: ComponentCreator('/syde/blog/tags', '393'),
    exact: true
  },
  {
    path: '/syde/blog/tags/docusaurus',
    component: ComponentCreator('/syde/blog/tags/docusaurus', 'a47'),
    exact: true
  },
  {
    path: '/syde/blog/tags/facebook',
    component: ComponentCreator('/syde/blog/tags/facebook', 'a07'),
    exact: true
  },
  {
    path: '/syde/blog/tags/hello',
    component: ComponentCreator('/syde/blog/tags/hello', '5eb'),
    exact: true
  },
  {
    path: '/syde/blog/tags/hola',
    component: ComponentCreator('/syde/blog/tags/hola', '0e0'),
    exact: true
  },
  {
    path: '/syde/blog/welcome',
    component: ComponentCreator('/syde/blog/welcome', 'd45'),
    exact: true
  },
  {
    path: '/syde/markdown-page',
    component: ComponentCreator('/syde/markdown-page', '3c3'),
    exact: true
  },
  {
    path: '/syde/docs',
    component: ComponentCreator('/syde/docs', 'a22'),
    routes: [
      {
        path: '/syde/docs',
        component: ComponentCreator('/syde/docs', 'd19'),
        routes: [
          {
            path: '/syde/docs',
            component: ComponentCreator('/syde/docs', 'c2d'),
            routes: [
              {
                path: '/syde/docs/category/initialize',
                component: ComponentCreator('/syde/docs/category/initialize', 'f89'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/syde/docs/category/interactions',
                component: ComponentCreator('/syde/docs/category/interactions', 'bee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/syde/docs/Example',
                component: ComponentCreator('/syde/docs/Example', 'c4e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/syde/docs/Initialize/Loading',
                component: ComponentCreator('/syde/docs/Initialize/Loading', '4a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/syde/docs/Initialize/Window',
                component: ComponentCreator('/syde/docs/Initialize/Window', 'c5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/syde/docs/Interactions/Binding',
                component: ComponentCreator('/syde/docs/Interactions/Binding', '8bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/syde/docs/Interactions/Elements',
                component: ComponentCreator('/syde/docs/Interactions/Elements', '080'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/syde/docs/Interactions/Textual Elements',
                component: ComponentCreator('/syde/docs/Interactions/Textual Elements', '99b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/syde/docs/intro',
                component: ComponentCreator('/syde/docs/intro', '8aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/syde/',
    component: ComponentCreator('/syde/', '230'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
