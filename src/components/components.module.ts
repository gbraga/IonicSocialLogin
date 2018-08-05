import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [SigninComponent],
	imports: [IonicModule],
	exports: [SigninComponent]
})
export class ComponentsModule {}
