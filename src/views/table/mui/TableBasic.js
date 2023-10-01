// ** MUI Imports
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import { alpha } from '@mui/material/styles'

const createData = (kelompokUsia, jumlah) => {
  return { kelompokUsia, jumlah }
}

const rows = [
  createData('<17 Tahun', 7),
  createData('17-20 Tahun', 856),
  createData('21-30 Tahun', 1298),
  createData('31-40 Tahun', 2070),
  createData('41-50 Tahun', 1554),
  createData('51-60 Tahun', 1055),
  createData('>60 Tahun', 736)
]

const TableBasic = () => {
  const tableSeparatorColor = alpha('#000', 0.12) // Warna pemisah dengan opasitas

  return (
    <TableContainer component={Paper} sx={{ border: `1px solid ${tableSeparatorColor}`, borderRadius: '2000px' }}>
      <Table sx={{ minWidth: 300 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Kel. Usia</TableCell>
            <TableCell align='right'>Jumlah</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow
              key={row.kelompokUsia}
              sx={{
                '&:last-of-type td, &:last-of-type th': {
                  border: 0
                }
              }}
            >
              <TableCell component='th' scope='row'>
                {row.kelompokUsia}
              </TableCell>
              <TableCell align='right'>{row.jumlah}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableBasic
