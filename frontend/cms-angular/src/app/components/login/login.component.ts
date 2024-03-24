import {Component, OnDestroy} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {debounceTime, Subscription} from "rxjs";
import {FormErrorModel} from "../../models/form-error.model";

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrl: 'login.component.css'
})
export class LoginComponent implements OnDestroy {

  private errorMessages: { [key: string]: string } = {
    'required': 'Pole jest wymagane'
  }

  loginForm: FormGroup;
  formControlErrors: FormErrorModel[] = [];

  private formValidationSubscription: Subscription;


  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

    this.formValidationSubscription = this.loginForm.valueChanges
      .pipe(
        debounceTime(300)
      ).subscribe((): void => {
        this.checkForErrors();
      })
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.getControl(controlName);
    return control && control.touched && control.errors !== null;
  }

  private checkForErrors(): void {
    this.formControlErrors = [];
    Object.keys(this.loginForm.controls).forEach((controlName: string): void => {
      const control: FormControl = this.getControl(controlName);
      if (control && control.touched && control.errors) {
        this.handleErrors(control.errors, controlName);
      }
    })
  }

  getControl(controlName: string): FormControl {
    return this.loginForm.get(controlName) as FormControl;
  }

  private handleErrors(errors: ValidationErrors, controlName: string): void {
    for (let errorsKey in errors) {
      const errorModel: FormErrorModel = {
        message: this.errorMessages[errorsKey],
        field: controlName
      }
      if (!this.formControlErrors.some((err: FormErrorModel): boolean => JSON.stringify(err) === JSON.stringify(errorModel))) {
        this.formControlErrors.push(errorModel)
      }
    }
  }

  onSubmit(): void {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) {
      this.checkForErrors();
      return;
    }
  }

  ngOnDestroy(): void {
    this.formValidationSubscription.unsubscribe();
  }
}


