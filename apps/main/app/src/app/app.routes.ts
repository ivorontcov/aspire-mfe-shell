import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
export const appRoutes: Route[] = [
  {
    path: 'remote',
    loadChildren: () =>
      import('./remote-entry/entry.module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'react',
    component: WebComponentWrapper,
    data: {
      type: 'script',
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      remoteName: 'reactChild',
      exposedModule: './web-components',
      elementName: 'child-react-element',
    } as WebComponentWrapperOptions,
  },
  {
    path: 'visualizer',
    component: WebComponentWrapper,
    data: {
      type: 'script',
      remoteEntry: 'http://localhost:4204/remoteEntry.js',
      remoteName: 'reactChild',
      exposedModule: './web-components',
      elementName: 'child-react-element',
    } as WebComponentWrapperOptions,
  },
  {
    path: 'reactions',
    component: WebComponentWrapper,
    data: {
      type: 'script',
      remoteEntry: 'http://localhost:4205/remoteEntry.js',
      remoteName: 'reactReactions',
      exposedModule: './web-components',
      elementName: 'react-reactions',
    } as WebComponentWrapperOptions,
  },
  {
    path: 'external',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.mjs',
        exposedModule: './ExternalModule',
      }).then((m) => m.RemoteEntryModule),
  },
  {
    path: 'external-feed',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.mjs',
        exposedModule: './ExternalFeedModule',
      }).then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
