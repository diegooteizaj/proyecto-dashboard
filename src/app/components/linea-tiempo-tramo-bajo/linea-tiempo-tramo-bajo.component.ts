import { Component, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  tooltip: any; // ApexTooltip;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};


@Component({
  selector: 'app-linea-tiempo-tramo-bajo',
  templateUrl: './linea-tiempo-tramo-bajo.component.html',
  styleUrls: ['./linea-tiempo-tramo-bajo.component.scss']
})
export class LineaTiempoTramoBajoComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        
        {
          name: "Minimo",
          data: [35, 41, 50, 42, 13, 18, 29, 37, 36, 50, 32, 35]
        },
        {
          name: "Nominal",
          data: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]
        },
        {
          name: "Alerta",
          data: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
        },
        {
          name: "Limite técnico",
          data: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15]
        },
        {
          name:"Proyectado",
          data:[50, 48, 43, 40, 40, 39, 35, 36, 34, 31, 30, 29]
        }
        
      ],
      chart: {
        height: 350,
        type: "line"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 5,
        curve: "straight",
        dashArray: [0, 8, 5]
      },
      title: {
        text: "Page Statistics",
        align: "left"
      },
      legend: {
        tooltipHoverFormatter: function(val, opts) {
          return (
            val +
            " - <strong>" +
            opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
            "</strong>"
          );
        }
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6
        }
      },
      xaxis: {
        labels: {
          trim: false
        },
        title:{
          text:"Horas Operativas"
        },
        categories: [
          "2000",
          "4000",
          "6000",
          "8000",
          "10000",
          "12000",
          "14000",
          "16000",
          "18000",
          "20000",
          "22000",
          "24000"
        ]
      },
      yaxis:{
        title:{
          text:"mm"
        }
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: function(val: string) {
                return val + " (mm)";
              }
            }
          },
          {
            title: {
              formatter: function(val: string) {
                return val;
              }
            }
          },
          {
            title: {
              formatter: function(val: string) {
                return val;
              }
            }
          }
        ]
      },
      grid: {
        borderColor: "#f1f1f1"
      }
    };
  }
}
