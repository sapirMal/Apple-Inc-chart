import React, {useState, useEffect} from 'react';

import style from './App.module.css';

import Chart from './chart/Chart';
import Controller from './controller/Controller';
function App() {

  const [timestamps, setTimestamps] = useState('1 week');
  const [period, setPeriod] = useState(24);
  const [precision, setPrecision] = useState('hours');

  useEffect(() => {
    switch (timestamps) {
      case '1 week':
        setPeriod(24);
        setPrecision('hours');
        break;

      case '1 hour':
        setPeriod(1);
        setPrecision('hours');
        break;

      case '5 minutes':
        setPeriod(5);
        setPrecision('minutes');
        break;

      case '1 minute':
        setPeriod(1);
        setPrecision('minutes');
        break;

      default:
        break;
    }
  }, [timestamps])

  return (
    <div className={style.App}>
      <Chart
        timestamps={timestamps}
        period={period}
        precision={precision} />
      <Controller buttonClick={setTimestamps} />
    </div>
  );
}

export default App;
