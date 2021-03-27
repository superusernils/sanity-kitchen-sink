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
                  buildHookId: '605f2b5fa70a45c6cdce8fcf',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-qm2xp7nf',
                  apiId: 'cab04396-d88f-407f-970d-f5b1027573a5'
                },
                {
                  buildHookId: '605f2b5fc78bfb93c0a56cec',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-2p6uy633',
                  apiId: '796b33f6-9762-4880-93fa-8dc53cf43495'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/superusernils/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-2p6uy633.netlify.app', category: 'apps'}
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
