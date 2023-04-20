/*
* File: app-routing.module.ts
* Author: Juhász Roland
* Copyright: 2023, Juhász Roland
* Group: Szoft II N
* Date: 2023-04-20
* Github: https://github.com/Roleeygit/
* Licenc: GNU GPL
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipComponent } from './ship/ship.component';

const routes: Routes = 
[
  {path: 'ship', component: ShipComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
