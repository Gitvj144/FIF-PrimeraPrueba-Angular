import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RentaService } from '../../../services/renta.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./../../../../landing/component/formulario/formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  loading = false;
  error = null;
  message = null;
  form: FormGroup = this.fb.group({
    renta: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, private router: Router, private rentaService: RentaService) {
  }

  ngOnInit(): void {
  }

  submit( ) {
    this.message = null;
    this.error = null;
    this.loading = true;
    localStorage.setItem(btoa('renta'), btoa(this.form.value.renta));

    if ( this.verificaDatos() ) {
      const rut = atob(localStorage.getItem(btoa('rut')));
      const number = atob(localStorage.getItem(btoa('celular')));
      const mail = atob(localStorage.getItem(btoa('correo')));
      const rent = atob(localStorage.getItem(btoa('renta')));
      try {
        this.rentaService.createRegistro(rut, number, mail, rent)
        .then((res: any) => {
          if ( res.Status === 200) {
            // localStorage.clear();
            this.message = 'Solicitud enviada exitosamente';
          } else {
            this.error = 'Ha ocurrido un problema';
          }
          this.loading = false;
        }).catch(e => {
          this.loading = false;
          this.error = 'Ha ocurrido un problema';
        });
      } catch {
        this.loading = false;
        this.error = 'Ha ocurrido un problema';
      }
    } else {
      this.loading = false;
      this.error = 'Falta completar información del formulario, revisar';
    }
  }


  verificaDatos() {
    let verify = false;
    // tslint:disable-next-line:max-line-length
    if (!localStorage.getItem(btoa('rut')) || !localStorage.getItem(btoa('celular')) || !localStorage.getItem(btoa('correo')) || !localStorage.getItem(btoa('renta'))) {
      verify = true;
    }

    return !verify;
  }
}
