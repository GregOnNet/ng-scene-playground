import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Scene {
  name: string;
}

@Injectable({ providedIn: 'root' })
export class SceneApi {
  constructor(private http: HttpClient) {}

  loadScenes(): Observable<Scene[]> {
    return this.http
      .get<{ results: Scene[] }>('https://swapi.co/api/people')
      .pipe(map(apiResult => apiResult.results));
  }
}
