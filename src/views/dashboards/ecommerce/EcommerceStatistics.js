// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

const data = [
  {
    stats: '2.589',
    title: 'Baregbeg',
    color: 'success',
    icon: 'material-symbols:person-outline'
  },
  {
    color: 'success',
    stats: '2.938',
    title: 'Cijeungjing',
    icon: 'material-symbols:person-outline'
  },
  {
    color: 'success',
    stats: '1.423',
    title: 'Cidolog',
    icon: 'material-symbols:person-outline'
  },
  {
    stats: '572',
    color: 'success',
    title: 'Pamarican',
    icon: 'material-symbols:person-outline'
  },
  {
    stats: '45',
    color: 'success',
    title: 'Cimaragas',
    icon: 'material-symbols:person-outline'
  },
  {
    stats: '7567',
    color: 'info',
    title: 'Total',
    icon: 'tabler:chart-bar'
  }
]

const renderStats = () => {
  return data.map((sale, index) => (
    <Grid item xs={6} md={2} key={index}>
      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
        <CustomAvatar skin='light' color={sale.color} sx={{ mr: 4, width: 42, height: 42 }}>
          <Icon icon={sale.icon} fontSize='1.5rem' />
        </CustomAvatar>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h5'>{sale.stats}</Typography>
          <Typography variant='body2'>{sale.title}</Typography>
        </Box>
      </Box>
    </Grid>
  ))
}

const EcommerceStatistics = () => {
  return (
    <Card>
      <CardHeader title='Data per Kecamatan' sx={{ '& .MuiCardHeader-action': { m: 0, alignSelf: 'center' } }} />
      <CardContent
        sx={{ pt: theme => `${theme.spacing(7)} !important`, pb: theme => `${theme.spacing(7.5)} !important` }}
      >
        <Grid container spacing={6}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default EcommerceStatistics
