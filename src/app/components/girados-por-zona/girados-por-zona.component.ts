import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};


@Component({
  selector: 'app-girados-por-zona',
  templateUrl: './girados-por-zona.component.html',
  styleUrls: ['./girados-por-zona.component.scss']
})
export class GiradosPorZonaComponent implements OnInit{

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22,5],
      chart: {
        type: "donut"
      },
      labels: ["Zona A", "Zona B", "Zona C", "Zona C1", "Zona C2","Zona C3"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  ngOnInit(): void {
    
  }

}
