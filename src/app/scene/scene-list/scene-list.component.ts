import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Scene, SceneApi } from '../scene-api.service';

@Component({
  selector: 'app-scene-list',
  templateUrl: './scene-list.component.html',
  styleUrls: ['./scene-list.component.scss']
})
export class SceneListComponent implements OnInit {
  @ViewChildren('randomPicture')
  randomPicture: QueryList<HTMLImageElement>;

  scenes: Scene[];

  constructor(private sceneApi: SceneApi) {}

  ngOnInit() {
    this.sceneApi.loadScenes().subscribe(scenes => (this.scenes = scenes));
  }

  notifyDropped(event: CdkDragDrop<string[]>) {
    console.log(event);
  }
}
