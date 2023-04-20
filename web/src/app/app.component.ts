/*
* File: app.component.ts
* Author: Juhász Roland
* Copyright: 2023, Juhász Roland
* Group: Szoft II N
* Date: 2023-04-20
* Github: https://github.com/Roleeygit/
* Licenc: GNU GPL
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web';
  name = "Juhász Roland";
  class = "Szoft II N";
  date = "2023-04-20";
}
