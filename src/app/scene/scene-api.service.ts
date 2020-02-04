import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Image {
  source: string;
  width: number;
  height: number;
}

export interface Scene {
  name: string;
  images: Image[];
}

@Injectable({ providedIn: 'root' })
export class SceneApi {
  constructor(private http: HttpClient) {}

  loadScenes(): Observable<Scene[]> {
    return this.http
      .get<{ results: Scene[] }>('https://swapi.co/api/people/')
      .pipe(
        map(apiResult =>
          apiResult.results.map(scene => ({
            ...scene,
            images: [
              {
                source: 'https://picsum.photos/200/300',
                width: 200,
                height: 200
              }
            ]
          }))
        )
      );
  }

  updateScene(scene: Scene) {
    return this.http.put('some url', scene);
  }
}
