import { BrowserModule  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ToastModule} from 'ng2-toastr';
import { ToastsManager } from 'ng2-toastr';
import { ToastOptions } from 'ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ToastModule
  ],
  exports: [ToastModule],

  providers: [ ToastModule, ToastsManager, ToastOptions, BrowserAnimationsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
