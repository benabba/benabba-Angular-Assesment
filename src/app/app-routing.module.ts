import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PlaylistContainerComponent } from './playlist-container/playlist-container.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'playlist/:id',
        component: PlaylistContainerComponent
      },     
      { path: '**', redirectTo: '/' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


