import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

const { email, required } = Validators;

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserloginComponent {
  public userLoginForm = new FormGroup({
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
}
