import { Box } from '@mui/material'
import ChartjsLineChart from 'src/views/charts/chartjs/ChartjsLineChart'

export default function Home() {
  return (
    <Box width={'600px'} height={'auto'} padding={'20px'} bgcolor={'white'} borderRadius={'30px'} boxShadow={'2'}>
      <ChartjsLineChart
        white={'white'}
        borderColor={'black'}
        labelColor={'yellow'}
        legendColor={'blue'}
        primary={'black'}
        success={'green'}
        warning={'red'}
      />
    </Box>
  )
}
