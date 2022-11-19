import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentComponent } from './component/component.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ComponentComponent],
  exports: [ComponentComponent]
})
export class EntryPointsFeatureModule {}
