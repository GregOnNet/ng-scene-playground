import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SceneApi } from '../scene-api.service';

@Component({
  selector: 'app-scene-list',
  templateUrl: './scene-list.component.html',
  styleUrls: ['./scene-list.component.scss']
})
export class SceneListComponent implements OnInit {
  scenes: Observable<any>;

  constructor(private sceneApi: SceneApi) {}

  ngOnInit() {
    this.sceneApi.loadScenes().subscribe(scenes => (this.scenes = scenes));
  }
}
