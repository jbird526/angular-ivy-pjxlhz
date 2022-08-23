import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  APP_INITIALIZER,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GanttChartModule } from './gantt-chart/gantt-chart.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from '../materials.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    GanttChartModule,
    MaterialsModule,
    BrowserAnimationsModule,
  ],
  declarations: [AppComponent, HelloComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
