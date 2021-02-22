import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CanvasJSReact from '../lib/canvasjs.react';


const Chart = props => {

  const [data, setData] = useState([]);
  useEffect(() => {
    const url = `https://www.fxempire.com/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=${props.period}&Precision=${props.precision}&StartTime=8/28/2020%2016:0&EndTime=9/4/2020%2023:59&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume`;
    axios.get(url)
      .then(res => setData(res.data))
      .catch(err => console.error(err));

  }, [props.period, props.precision]);

  const CanvasJSChart = CanvasJSReact.CanvasJSChart;


  const options = {
    animationEnabled: true,
    title: {
      fontFamily: "tahoma",
      fontWeight: "bold",
      text: `Apple Inc for ${props.timestamps}`
    },
    axisY: {
      minimum: 110
    },
    toolTip: {
      shared: true
    },
    data: [{
      type: "spline",
      name: "Open",
      showInLegend: true,
      color: '#0689E1',
      dataPoints: data.map(el => {
        return {
          y: el.Open,
          label: el.Date
        }
      })
    },
    {
      type: "spline",
      name: "Close",
      showInLegend: true,
      color: '#034A7A',
      dataPoints: data.map(el => {
        return {
          y: el.Close,
          label: el.Date
        }
      })
    },
    {
      type: "spline",
      name: "High",
      showInLegend: true,
      color: '#04B913',
      dataPoints: data.map(el => {
        return {
          y: el.High,
          label: el.Date
        }
      })
    },
    {
      type: "spline",
      name: "Low",
      showInLegend: true,
      color: '#BD161B',
      dataPoints: data.map(el => {
        return {
          y: el.Low,
          label: el.Date
        }
      })
    }
    ]
  }
  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  )
}

export default Chart;