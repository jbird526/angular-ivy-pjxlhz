import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GanttChartControlComponent } from './gantt-chart-control/gantt-chart-control.component';
import { MaterialsModule } from '../../materials.module';

@NgModule({
  declarations: [GanttChartControlComponent],
  imports: [CommonModule, MaterialsModule],
  exports: [GanttChartControlComponent],
})
export class GanttChartModule {}
