export const navItem = [
  {
    sectionTitle: 'Dashboards'
  },
  {
    title: 'Sekolah',
    icon: 'teenyicons:school-outline',
    children: [
      {
        title: 'Informasi Umum',
        path: '/sekolah/informasi'
      },
      {
        title: 'Data Guru',
        path: '/sekolah/guru'
      },
      {
        title: 'Sejarah & Visi Misi',
        path: '/sekolah/sejarah'
      },
      {
        title: 'Jurusan',
        path: '/sekolah/jurusan'
      }
    ]
  },
  {
    title: 'Siswa',
    icon: 'ph:student',
    children: [
      {
        title: 'Data Siswa',
        path: '/siswa/data'
      },
      {
        title: 'Kelas',
        path: '/siswa/kelas'
      }
    ]
  },
  {
    title: 'Pembayaran',
    icon: 'vaadin:cash',
    children: [
      {
        title: 'SPP',
        path: '/pembayaran/spp'
      },
      {
        title: 'Tabungan Siswa',
        path: '/pembayaran/tabungan'
      },
      {
        title: 'Lainnya',
        path: '/pembayaran/lainnya',
        disabled: true
      }
    ]
  },
  {
    sectionTitle: 'Add Ons'
  },
  {
    title: 'PPDB',
    icon: 'bi:people'
  },
  {
    title: 'Alumni',
    icon: 'material-symbols:school-outline-rounded'
  },
  {
    title: 'Absensi',
    icon: 'bi:qr-code-scan'
  },
  {
    title: 'Agenda Guru',
    icon: 'mdi:teach'
  }
]
