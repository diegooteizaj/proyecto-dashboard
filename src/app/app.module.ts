import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GiradosPorLineaComponent } from './components/girados-por-linea/girados-por-linea.component';
import { GiradosPorZonaComponent } from './components/girados-por-zona/girados-por-zona.component';
import { LineaTiempoTramoBajoComponent } from './components/linea-tiempo-tramo-bajo/linea-tiempo-tramo-bajo.component';
import { EspesoresMinimosComponent } from './components/espesores-minimos/espesores-minimos.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GiradosPorLineaComponent,
    GiradosPorZonaComponent,
    LineaTiempoTramoBajoComponent,
    EspesoresMinimosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
