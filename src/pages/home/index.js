// ** MUI Import
import Grid from '@mui/material/Grid'

// ** Demo Component Imports
import CrmBrowserStates from 'src/views/dashboards/crm/CrmBrowserStates'
import CrmProjectStatus from 'src/views/dashboards/crm/CrmProjectStatus'
import CrmActiveProjects from 'src/views/dashboards/crm/CrmActiveProjects'
import CrmLastTransaction from 'src/views/dashboards/crm/CrmLastTransaction'
import CrmActivityTimeline from 'src/views/dashboards/crm/CrmActivityTimeline'
import CrmSalesWithRadarChart from 'src/views/dashboards/crm/CrmSalesWithRadarChart'
import CrmEarningReportsWithTabs from 'src/views/dashboards/crm/CrmEarningReportsWithTabs'
import EcommerceStatistics from 'src/views/dashboards/ecommerce/EcommerceStatistics'
import ApexDonutChart from 'src/views/charts/apex-charts/ApexDonutChart'

// ** Custom Component Imports
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import CardStatsVertical from 'src/@core/components/card-statistics/card-stats-vertical'

const Home = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <EcommerceStatistics />
        </Grid>
        {/* <Grid item xs={6} sm={4} lg={2}>
          <CrmSalesWithAreaChart />
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
          <CrmSessions />
        </Grid> */}
        <Grid item xs={12} lg={2}>
          <CardStatsVertical
            stats='7.567'
            chipText='+25.2%'
            avatarColor='info'
            chipColor='success'
            title='Total'
            avatarIcon='tabler:chart-bar'
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <ApexDonutChart />
        </Grid>
        {/* <Grid item xs={12} lg={8}>
          <CrmEarningReportsWithTabs />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CrmSalesWithRadarChart />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CrmBrowserStates />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CrmProjectStatus />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CrmActiveProjects />
        </Grid>
        <Grid item xs={12} md={6}>
          <CrmLastTransaction />
        </Grid>
        <Grid item xs={12} md={6}>
          <CrmActivityTimeline />
        </Grid> */}
      </Grid>
    </ApexChartWrapper>
  )
}

export default Home
