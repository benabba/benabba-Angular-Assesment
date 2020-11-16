import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { PlaylistToolbarComponent } from './playlist-container/playlist-toolbar/playlist-toolbar.component';
import { PlaylistContainerComponent } from './playlist-container/playlist-container.component';
import { SlideComponent } from './playlist-container/playlist/slide/slide.component';
import { PlaylistComponent } from './playlist-container/playlist/playlist.component';
import { AddSlidesCardComponent } from './playlist-container/playlist/add-slides-card/add-slides-card.component';

import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button'



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MenuComponent,
    PlaylistToolbarComponent,
    PlaylistContainerComponent,
    PlaylistComponent,
    SlideComponent,
    AddSlidesCardComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }