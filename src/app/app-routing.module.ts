import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: HomeComponent },
  { path: 'room', component: ChatRoomComponent },
  { path: 'chat', component: ChatWindowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
