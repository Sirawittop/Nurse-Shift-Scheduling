import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';


// ----------------------------------------------------------------------

export default function UserTableRow({
  id,
  avatarUrl,
  name,
  day1,
  day2,
  day3,
  day4,
  day5,
  day6,
  day7,
  day8,
  day9,
  day10,
  day11,
  day12,
  day13,
  day14,
  day15,
  day16,
  day17,
  day18,
  day19,
  day20,
  day21,
  day22,
  day23,
  day24,
  day25,
  day26,
  day27,
  day28,
  day29,
  day30,
  day31,

}) {

  return (
    <TableRow>

      <TableCell>{id}</TableCell>

      <TableCell component="th" scope="row" padding="none">
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>
        </Stack>
      </TableCell>
      <TableCell>
        <Stack direction="row" alignItems="center">
        <Typography variant="inherit" noWrap>
          {day1}
          </Typography>
        </Stack>
      </TableCell>
      <TableCell>{day2}</TableCell>
      <TableCell>{day3}</TableCell>
      <TableCell>{day4}</TableCell>
      <TableCell>{day5}</TableCell>
      <TableCell>{day6}</TableCell>
      <TableCell>{day7}</TableCell>
      <TableCell>{day8}</TableCell>
      <TableCell>{day9}</TableCell>
      <TableCell>{day10}</TableCell>
      <TableCell>{day11}</TableCell>
      <TableCell>{day12}</TableCell>
      <TableCell>{day13}</TableCell>
      <TableCell>{day14}</TableCell>
      <TableCell>{day15}</TableCell>
      <TableCell>{day16}</TableCell>
      <TableCell>{day17}</TableCell>
      <TableCell>{day18}</TableCell>
      <TableCell>{day19}</TableCell>
      <TableCell>{day20}</TableCell>
      <TableCell>{day21}</TableCell>
      <TableCell>{day22}</TableCell>
      <TableCell>{day23}</TableCell>
      <TableCell>{day24}</TableCell>
      <TableCell>{day25}</TableCell>
      <TableCell>{day26}</TableCell>
      <TableCell>{day27}</TableCell>
      <TableCell>{day28}</TableCell>
      <TableCell>{day29}</TableCell>
      <TableCell>{day30}</TableCell>
      <TableCell>{day31}</TableCell>

    </TableRow>

  );
}

UserTableRow.propTypes = {
  id: PropTypes.any,
  avatarUrl: PropTypes.any,
  name: PropTypes.any,
  day1: PropTypes.any,
  day2: PropTypes.any,
  day3: PropTypes.any,
  day4: PropTypes.any,
  day5: PropTypes.any,
  day6: PropTypes.any,
  day7: PropTypes.any,
  day8: PropTypes.any,
  day9: PropTypes.any,
  day10: PropTypes.any,
  day11: PropTypes.any,
  day12: PropTypes.any,
  day13: PropTypes.any,
  day14: PropTypes.any,
  day15: PropTypes.any,
  day16: PropTypes.any,
  day17: PropTypes.any,
  day18: PropTypes.any,
  day19: PropTypes.any,
  day20: PropTypes.any,
  day21: PropTypes.any,
  day22: PropTypes.any,
  day23: PropTypes.any,
  day24: PropTypes.any,
  day25: PropTypes.any,
  day26: PropTypes.any,
  day27: PropTypes.any,
  day28: PropTypes.any,
  day29: PropTypes.any,
  day30: PropTypes.any,
  day31: PropTypes.any,
};
