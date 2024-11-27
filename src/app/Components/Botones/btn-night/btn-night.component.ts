import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn-night',
  standalone: true,
  templateUrl: './btn-night.component.html',
  styleUrls: ['./btn-night.component.css']
})
export class BtnNightComponent {
  @Output() toggleDarkMode = new EventEmitter<void>(); // Emite un evento al hacer clic
  isDarkMode: boolean = false; // Variable que indica si el modo oscuro está activado

  onClick(): void {
    this.isDarkMode = !this.isDarkMode; // Cambia el estado de isDarkMode a su valor opuesto
    this.toggleDarkMode.emit(); // Emitir el evento al hacer clic
  }

  get buttonText(): string {
    return this.isDarkMode ? 'Modo noche' : 'Modo diurno'; // Cambia el texto del botón según el estado
  }

  get buttonBackgroundColor(): string {
    return this.isDarkMode ? '#707070' : '#ff5733'; // Cambia el color de fondo según el modo
  }
}
