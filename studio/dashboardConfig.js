export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60b4dc1945107b2f6deca266',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-f2j22mx5',
                  apiId: '3de7f3cd-cd69-44d9-b33c-4eeb034debf4'
                },
                {
                  buildHookId: '60b4dc1aebf3ca9644f89ec0',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-mnyyidg8',
                  apiId: '4d19c316-036f-4de4-b282-f28c296dea53'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tormodu/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-mnyyidg8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
