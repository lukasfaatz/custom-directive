import { Component } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html'
})
export class ValidationComponent {
  title = 'customDirective';

  name = new FormControl('', [Validators.required, Validators.minLength(3)]);

}
