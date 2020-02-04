import {
  AfterViewChecked,
  Component,
  OnInit,
  QueryList,
  ViewChildren
} from '@angular/core';
import { Scene, SceneApi } from '../scene-api.service';

@Component({
  selector: 'app-scene-list',
  templateUrl: './scene-list.component.html',
  styleUrls: ['./scene-list.component.scss']
})
export class SceneListComponent implements OnInit, AfterViewChecked {
  @ViewChildren('randomPicture')
  randomPicture: QueryList<HTMLImageElement>;

  scenes: Scene[];

  constructor(private sceneApi: SceneApi) {}

  ngOnInit() {
    this.sceneApi.loadScenes().subscribe(scenes => (this.scenes = scenes));
  }

  ngAfterViewChecked(): void {
    this.randomPicture.toArray().map(pic => console.log(pic));
  }
}
