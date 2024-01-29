import { Component, ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-girados-por-linea',
  templateUrl: './girados-por-linea.component.html',
  styleUrls: ['./girados-por-linea.component.scss']
})
export class GiradosPorLineaComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [30, 50, 21, 20],
      chart: {
        height: 350,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px"
            },
            value: {
              fontSize: "16px"
            },
            total: {
              show: true,
              label: "Total Girados",
              formatter: function(w) {
                return "121";
              }
            }
          }
        }
      },
      labels: ["Linea Principal", "Linea Bypass", "Linea Muro", "Linea Lateral"]
    };
  }
}
