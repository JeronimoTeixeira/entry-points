import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryPointsFeatureModule } from '@entry-points/feature';
import { ComponentPrincipalComponent } from './component-principal/component-principal.component';

@NgModule({
  imports: [CommonModule, EntryPointsFeatureModule],
  declarations: [ComponentPrincipalComponent],
})
export class EntryPointsModule {}
