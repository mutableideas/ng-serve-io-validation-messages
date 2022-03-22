import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

const { email, required, min } = Validators

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserloginComponent {
  public formGroup = new FormGroup({
    email: new FormControl('', [ email, required ]),
    firstName: new FormControl('', [ required, min(5) ]),
    password: new FormControl('', [ required, min(8) ])
  });

  public get email(): FormControl {
    return this.formGroup.get('email') as FormControl;
  }

  public get password(): FormControl {
    return this.formGroup.get('password') as FormControl;
  }

  public get firstName(): FormControl {
    return this.formGroup.get('firstName') as FormControl;
  }
}
