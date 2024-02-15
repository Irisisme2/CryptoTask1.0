// variables/charts.js

export const lineChartDataTimeSpent = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [
      {
        label: "Time Spent on Tasks",
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.4)",
        data: [2, 3, 4, 2.5, 5, 3.5, 4],
      },
    ],
  };
  
  export const lineChartOptionsTimeSpent = {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
      },
      y: {
        min: 0,
        max: 6,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };
  