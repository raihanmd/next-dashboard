export const navItem = [
  {
    sectionTitle: 'Dashboards'
  },
  {
    title: 'Home',
    icon: 'teenyicons:home-outline',
    path: '/home'
  },
  {
    title: 'Data Pemilu',
    icon: 'majesticons:data-line',
    children: [
      {
        title: 'Saksi',
        path: '/data/saksi'
      },
      {
        title: 'Relawan',
        path: '/data/relawan'
      },
      {
        title: 'Kordes',
        path: '/data/kordes'
      },
      {
        title: 'Kordus',
        path: '/data/kordus'
      },
      {
        title: 'DPT',
        path: '/data/dpt'
      }
    ]
  },
  {
    title: 'Input Data',
    icon: 'radix-icons:input',
    path: '/input'
  },
  {
    title: 'Menu',
    icon: 'ep:menu',
    path: '/menu'
  }
]
