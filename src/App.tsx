import React, { useEffect } from "react";
import RealtimeLineChart from "./RealtimeLineChart";
import series from "./data";

const TIME_RANGE_IN_MILLISECONDS = 30 * 1000; // 30sek 
const ADDING_DATA_INTERVAL_IN_MILLISECONDS = 1000;
const ADDING_DATA_RATIO = 0.8;

export default () => {
  const nameList = ["a", "b", "c"];
  const defaultDataList = nameList.map((name) => ({
    name: name,
    data: [],
  }));
  const [dataList, setDataList] = React.useState(defaultDataList);

  let interval: any = undefined;

  useEffect(() => {
    const addDataRandomly = (data: any) => {
      if (Math.random() < 1 - ADDING_DATA_RATIO) {
        return data;
      }
      return [
        ...data,
        {
          x: new Date(),
          y: data.length * Math.random(),
        },
      ];
    };
    interval = setInterval(() => {
      setDataList(
        dataList.map((val:any) => {
          return {
            name: val.name,
            data: addDataRandomly(val.data),
          };
        })
      );
    }, ADDING_DATA_INTERVAL_IN_MILLISECONDS);

    return () => clearInterval(interval);
  });

  return (
    <div>
      <RealtimeLineChart
        dataList={dataList}
        range={TIME_RANGE_IN_MILLISECONDS} 
        // range={undefined} // set range or pass undefined for static data
      />
      <button
        onClick={() => {
          clearInterval(interval);
        }}
      >
        Stop
      </button>
      
    </div>
  );
};
