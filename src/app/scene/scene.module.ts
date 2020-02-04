import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SceneListComponent } from './scene-list/scene-list.component';

@NgModule({
  declarations: [SceneListComponent],
  imports: [CommonModule],
  exports: [SceneListComponent]
})
export class SceneModule {}
