import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { TranslateExampleComponent } from './translate-example.component';

@NgModule({
  declarations: [TranslateExampleComponent],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [TranslateExampleComponent]
})
export class TranslateExampleModule { }
