import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';
import { AppComponent } from './app.component';
import { Ng2DemoComponent } from "./demo/ng2-demo.component";
import { phoneServiceProvider } from "./phone.service";

declare var angular: any;

angular.module('phonecatApp')
  .directive(
    'ng2Demo',
    downgradeComponent({component: Ng2DemoComponent})
  );

@NgModule({
  declarations: [
    AppComponent,
    Ng2DemoComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  entryComponents: [
    Ng2DemoComponent 
  ],
  providers: [
    phoneServiceProvider
  ],
  // bootstrap: [AppComponent] 
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['phonecatApp'], { strictDi: true });
  }
}