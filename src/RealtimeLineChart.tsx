import React from "react";
import Chart from "react-apexcharts";

export default (props: { dataList: any[] | undefined; range: any }) => {
  const options = {
    chart: {
      id: "chart1",
      zoom: {
        enabled: false,
      },
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000,
        },
      },
    },
    tooltip: {
      x: {
        format: "yyyy/MM/dd HH:mm:ss.f",
      },
    },
    xaxis: {
      type: "datetime",
      range: props.range,
    },
    yaxis: {
      labels: {
        formatter: (val: number) => val.toFixed(0),
      },
      title: { text: "Value" },
    },
  };
  const brushOptions = {
    chart: {
      id: "chart2",
      height: 200,
      width: "100%",
      type: "area",
      brush: {
        target: "chart1",
        enabled: true,
        autoScaleYaxis: true,
      },
      selection: {
        enabled: true,
      },
    },
   
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.91,
        opacityTo: 0.1,
      },
    },
    xaxis: {
      type: "datetime",
      tooltip: {
        enabled: false,
      },
    },
    legend: {
      show: false,
    },
    yaxis: {
      tickAmount: 4,
      labels: {
        formatter: (val:any) => val.toFixed(0),
      },
    },
  };

  return (
    <>
     {/* type="scatter" */}
     {/* type="area" */}
     {/* type="line" */}

      <Chart
        type="line"
        options={options}
        series={props.dataList}
        height={500}
      />
      <Chart
        type="area"
        options={brushOptions}
        series={props.dataList}
        height={200}
      />
    </>
  );
};
