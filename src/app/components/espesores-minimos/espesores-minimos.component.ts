import { Component, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexMarkers,
  ApexXAxis,
  ApexPlotOptions
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  labels: string[];
  stroke: any; // ApexStroke;
  markers: ApexMarkers;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  tooltip: ApexTooltip;
};


@Component({
  selector: 'app-espesores-minimos',
  templateUrl: './espesores-minimos.component.html',
  styleUrls: ['./espesores-minimos.component.scss']
})
export class EspesoresMinimosComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Espesor",
          type: "column",
          data: [50, 48, 47, 40, 50, 30, 20, 30, 38, 50, 30]
        },
        {
          name: "Espesor Nominal",
          type: "area",
          data: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]
        },
        {
          name: "Alerta",
          type: "line",
          data: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
        },
        {
          name: "Inaceptable",
          type: "line",
          data: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        stacked: false
      },
      stroke: {
        width: [0, 2, 5],
        curve: "smooth"
      },
      plotOptions: {
        bar: {
          columnWidth: "50%"
        }
      },

      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: "light",
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100]
        }
      },
      labels: [
        "000",
        "001",
        "002",
        "003",
        "004",
        "005",
        "006",
        "007",
        "008",
        "009",
        "010"
      ],
      markers: {
        size: 0
      },
      xaxis: {
       title:{
        text:"Tramos"
       }
      },
      yaxis: {
        title: {
          text: "mm"
        },
        min: 0
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function(y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " mm";
            }
            return y;
          }
        }
      }
    };
  }

  public generateData(count:any, yrange:any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = "w" + (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }
}
