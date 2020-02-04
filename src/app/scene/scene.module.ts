import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SceneListComponent } from './scene-list/scene-list.component';
@NgModule({
  declarations: [SceneListComponent],
  imports: [CommonModule, HttpClientModule, DragDropModule],
  exports: [SceneListComponent]
})
export class SceneModule {}
