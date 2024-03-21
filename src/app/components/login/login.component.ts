import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  togglePasswordVisibility() {
    const passwordInput = document.getElementById(
      'password'
    ) as HTMLInputElement;

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  }

  constructor(private router: Router) {}

  iniciarSesion(usuario: string, contrasena: string) {
    if (usuario === 'papas' && contrasena === 'con ketchup') {
      this.router.navigate(['/inicio']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}
