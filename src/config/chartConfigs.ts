import { ChartOptions, TooltipOptions } from "chart.js";

const toolTipOptions = {
  backgroundColor: "#4d4c4c",
  titleFont: {
    size: 14,
  },
  bodyFont: {
    weight: "bold",
  },
} as TooltipOptions;

export const getBarCharOptions = ({
  title,
  xAxisTitle,
  yAxisTitle,
}: {
  title: string;
  xAxisTitle: string;
  yAxisTitle: string;
}): ChartOptions<"bar"> => ({
  responsive: true,
  scales: {
    x: {
      border: {
        color: "#787878",
      },
      title: {
        color: "#d0d0d0",
        display: true,
        text: xAxisTitle,
        font: {
          weight: "bold",
        },
      },
      ticks: {
        color: "#fff",
        font: {
          weight: "bold",
        },
      },
    },
    y: {
      border: {
        color: "#787878",
      },
      title: {
        color: "#d0d0d0",
        display: true,
        text: yAxisTitle,
        font: {
          weight: "bold",
        },
      },
      ticks: {
        color: "#fff",
        font: {
          weight: "bold",
        },
      },
    },
  },
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        color: "#fff",
        font: {
          size: 15,
        },
      },
    },
    title: {
      display: true,
      text: title,
      color: "#fff",
      font: {
        size: 18,
      },
    },
    tooltip: toolTipOptions,
  },
});

export const horizontalBarCharOptions: ChartOptions<"bar"> = {
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  scales: {
    x: {
      border: {
        color: "#787878",
      },
      title: {
        color: "#d0d0d0",
        display: true,
        text: "Goals",
        font: {
          weight: "bold",
        },
      },
      ticks: {
        color: "#fff",
        font: {
          weight: "bold",
        },
      },
    },
    y: {
      border: {
        color: "#787878",
      },
      title: {
        color: "#d0d0d0",
        display: true,
        text: "Team names",
        font: {
          weight: "bold",
        },
      },
      ticks: {
        color: "#fff",
        font: {
          weight: "bold",
        },
      },
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right" as const,
      labels: {
        color: "#fff",
        font: {
          size: 15,
        },
      },
    },
    title: {
      display: true,
      text: "Top 10 Teams to Score",
      color: "#fff",
      font: {
        size: 18,
      },
    },
    tooltip: toolTipOptions,
  },
};
