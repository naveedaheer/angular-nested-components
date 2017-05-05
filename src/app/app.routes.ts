import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MainHeaderComponent} from './containers/main-header/main-header.component';
import {DesktopComponent} from './containers/desktop/desktop.component';
import {WebComponent} from './containers/web/web.component';
import {MobileComponent} from './containers/mobile/mobile.component';


export const router: Routes =[
    {path: '', redirectTo:'main-header', pathMatch: 'full'},
    {path: 'main-header', children:[
        {path:'', component:MainHeaderComponent, pathMatch:'full'},
        {path: 'desktop', component:DesktopComponent},
        {path: 'web', component: WebComponent},
        {path: 'mobile', component: MobileComponent}
    ]}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);