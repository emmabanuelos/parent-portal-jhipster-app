import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { ParentPortalSharedModule } from 'app/shared/shared.module';
import { ParentPortalCoreModule } from 'app/core/core.module';
import { ParentPortalAppRoutingModule } from './app-routing.module';
import { ParentPortalHomeModule } from './home/home.module';
import { ParentPortalEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    ParentPortalSharedModule,
    ParentPortalCoreModule,
    ParentPortalHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    ParentPortalEntityModule,
    ParentPortalAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class ParentPortalAppModule {}
