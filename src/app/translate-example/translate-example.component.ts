import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translate-example',
  templateUrl: './translate-example.component.html',
  styleUrls: ['./translate-example.component.css']
})
export class TranslateExampleComponent implements OnInit {

  constructor(public translateService: TranslateService) {
    translateService.addLangs (['en', 'pt']);
    translateService.setDefaultLang ('en');
  }

  ngOnInit() {}

  switchLanguage(language: string) {
    this.translateService.use (language);
  }
}
