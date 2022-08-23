import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GanttChartModule } from './gantt-chart/gantt-chart.module';

// import { MatExpansionModule } from '@angular/material/expansion';

import { MaterialsModule } from './materials.module';

@NgModule({
  imports: [BrowserModule, FormsModule, GanttChartModule, MaterialsModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
