import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/${name}.png`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'ตารางเวร',
    path: '/',
    icon: icon("calendarPlan"),
  },
  {
    title: 'แลกเวร',
    path: '/exchange',
    icon: icon('calendarSwap'),
  },
  {
    title: 'การลา',
    path: '/leave',
    icon: icon('calendarLeave'),
  },
  {
    title: 'จัดตารางเวร',
    path: '/user',
    icon: icon('calendarMakeplan'),
  },
  {
    title: 'การอนุมัติ',
    path: '/approve',
    icon: icon('calendarAccept'),
  },
  
];

export default navConfig;
