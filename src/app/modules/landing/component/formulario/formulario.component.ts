import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, NgForm, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})

export class FormularioComponent implements OnInit {

  form: FormGroup = this.fb.group({
    rut: ['', [Validators.required]],
    celular: ['', [Validators.required]],
    correo: ['', [Validators.required, Validators.email]],
  });

  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
  }

  enviar( ) {
    localStorage.setItem(btoa('rut'), btoa(this.form.value.rut));
    localStorage.setItem(btoa('celular'), btoa(this.form.value.celular));
    localStorage.setItem(btoa('correo'), btoa(this.form.value.correo));
    this.router.navigateByUrl('renta');
  }

  get FormControls(): any {
    return this.form.controls;
  }

}
