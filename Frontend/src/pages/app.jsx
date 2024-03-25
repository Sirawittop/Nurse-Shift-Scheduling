import { Helmet } from 'react-helmet-async';

import { AppView } from 'src/sections/overview/view';

// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title> ตารางเวร | NurseRoster </title>
      </Helmet>

      <AppView />
    </>
  );
}
