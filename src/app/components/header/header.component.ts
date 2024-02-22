import { Component, OnInit , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  @Output() mensajeParaPadre = new EventEmitter<string>();


  ngOnInit(): void {
    
  }

  clickLaBrea(){
    this.mensajeParaPadre.emit('LaBrea');
  }

  clickLaArena(){
    this.mensajeParaPadre.emit('LaArena');
  }

  clickLamaDucto(){
    this.mensajeParaPadre.emit('LamaDucto');
  }


}
