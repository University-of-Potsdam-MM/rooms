import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import {DynamicModule} from 'ng-dynamic-component';
import {componentsList} from '../services/pages/pages.service';
import {TranslateModule} from '@ngx-translate/core';
import {HeaderComponent} from './home-components/header/header.component';
import {MenuComponent} from './home-components/menu/menu.component';
import {TimeoutModalComponent} from './home-components/timeout-modal/timeout-modal.component';
import {ResultsComponent} from '../components/results/results';
import {HintComponent} from '../components/hint/hint';
import {NewsComponent} from '../components/news/news.component';
import {PipesModule} from '../pipes/pipes.module';
import {LayoutModule} from '@angular/cdk/layout';
import {InfoBarComponent} from './home-components/info-bar/info-bar.component';
import {EventComponent} from '../components/event/event.component';
import {ScreenSaverComponent} from './home-components/screen-saver/screen-saver.component';

@NgModule({
  imports: [
    LayoutModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },
    ]),
    TranslateModule,
    DynamicModule.withComponents(componentsList()),
    PipesModule
  ],
  declarations: [
    HomePage,
    HeaderComponent,
    MenuComponent,
    TimeoutModalComponent,
    ScreenSaverComponent,
    ResultsComponent,
    HintComponent,
    NewsComponent,
    EventComponent,
    InfoBarComponent,
    ...componentsList()
  ],
  entryComponents: [
    HeaderComponent,
    MenuComponent,
    TimeoutModalComponent,
    ScreenSaverComponent,
    ResultsComponent,
    HintComponent,
    NewsComponent,
    EventComponent,
    InfoBarComponent,
    ...componentsList()
  ]
})
export class HomePageModule {}
