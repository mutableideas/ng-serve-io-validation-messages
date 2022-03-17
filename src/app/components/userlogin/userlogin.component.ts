import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ValidationMessageService } from '@ngserveio/validation-messages';

const { email, required } = Validators;

const customError = (ctrl: AbstractControl): ValidationErrors | null => {
  return ctrl.value.trim().length > 0
    ? null
    : { customError: { prop1: 'any value' } };
}

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserloginComponent {
  constructor(messageService: ValidationMessageService) {
    messageService.addMessages({
      customError: '{{fieldName}} for a custom error {{prop1}}.'
    });
  }

  public userLoginForm = new FormGroup({
    firstName: new FormControl('', [ customError ]),
    email: new FormControl('', [ required, email ]),
    password: new FormControl('', [ required ])
  });

  public submitForm(): void {
    console.log(this.userLoginForm.value);
  }

  public get email(): FormControl {
    return this.userLoginForm.get('email') as FormControl;
  }

  public get password(): FormControl {
    return this.userLoginForm.get('password') as FormControl;
  }

  public get firstName(): FormControl {
    return this.userLoginForm.get('firstName') as FormControl;
  }
}
