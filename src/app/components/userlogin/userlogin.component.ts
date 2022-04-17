import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { FormGroupSubmit } from '@ngserveio/form-services';
import { ValidationMessageService } from '@ngserveio/validation-messages';
import { BehaviorSubject, timer } from 'rxjs';

const { email, required, minLength } = Validators

const isBetween = (min: number, max: number): ValidatorFn => {
  return (ctrl: AbstractControl): ValidationErrors | null => {
    const value = !isNaN(ctrl.value)
      ? parseInt(ctrl.value)
      : null;

    return value !== null && (value >= min && value <= max)
      ? null
      : { isBetween: { min, max } } as ValidationErrors | null;
  }
}

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserloginComponent {
  public saving$ = new BehaviorSubject<boolean>(false);

  public formGroup = new FormGroupSubmit({
    email: new FormControl('', [ email, required ]),
    firstName: new FormControl('', [ required, minLength(5) ]),
    password: new FormControl('', [ required, minLength(8) ]),
    numericField: new FormControl(0, [ required, isBetween(1, 10) ])
  });

  constructor(messageService: ValidationMessageService) {
    messageService.addMessages({
      isBetween: '{{fieldName}} must be between {{min}} and {{max}}.',
      required: 'Please enter {{fieldName}}.'
    })
  }

  public save(): void {
    this.saving$.next(true);

    timer(2000).subscribe(() => {
      this.saving$.next(false);
    });
  }

  public get email(): FormControl {
    return this.formGroup.get('email') as FormControl;
  }

  public get password(): FormControl {
    return this.formGroup.get('password') as FormControl;
  }

  public get firstName(): FormControl {
    return this.formGroup.get('firstName') as FormControl;
  }

  public get numericField(): FormControl {
    return this.formGroup.get('numericField') as FormControl;
  }
}
