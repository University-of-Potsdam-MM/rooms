import {MensaPageComponent} from './pages/mensa-page/mensa-page.component';
import {PageItem} from '../types/PageItem';
import {EventsPageComponent} from './pages/events-page/events-page.component';
import {CampusMapPageComponent} from './pages/campus-map-page/campus-map-page.component';
import {NewsPageComponent} from './pages/news-page/news-page.component';
import {RoomsPageComponent} from './pages/rooms-page/rooms-page.component';
import {LecturesPageComponent} from './pages/lectures-page/lectures-page.component';
import {TwitterPageComponent} from './pages/twitter-page/twitter-page.component';
import {PublicTransportPageComponent} from './pages/public-transport-page/public-transport-page.component';
import {AdsPageComponent} from './pages/ads-page/ads-page.component';
import {GamePageComponent} from './pages/game-page/game-page.component';

// This list contains the pages that will be available in the application
// See the definition of the PageItem type for further documentation.
export const pagesList: PageItem[] = [
  {
    component: MensaPageComponent,
    name: 'mensa',
    icon: 'pizza',
    interactiveModes: [true, false]
  },
  {
    component: EventsPageComponent,
    name: 'events',
    icon: 'calendar',
    interactiveModes: [true, false]
  },
  {
    component: CampusMapPageComponent,
    name: 'campusMap',
    icon: 'map',
    interactiveModes: [true]
  },
  {
    component: NewsPageComponent,
    name: 'news',
    icon: 'paper',
    interactiveModes: [true, false]
  },
  {
    component: RoomsPageComponent,
    name: 'rooms',
    icon: 'book',
    interactiveModes: [true, false]
  },
  {
    component: LecturesPageComponent,
    name: 'lectures',
    icon: 'time',
    interactiveModes: [true, false]
  },
  {
    component: TwitterPageComponent,
    name: 'twitter',
    icon: 'logo-twitter',
    interactiveModes: [false, true]
  },
  {
    component: PublicTransportPageComponent,
    name: 'transport',
    icon: 'train',
    interactiveModes: [true, false]
  },
  {
    component: AdsPageComponent,
    name: 'ads',
    icon: 'paper',
    interactiveModes: [false]
  },
  {
    component: GamePageComponent,
    name: 'game',
    icon: 'ribbon',
    interactiveModes: [true]
  }
];
