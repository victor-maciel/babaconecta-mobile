import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  carregarPerfilBaba(){
    
      this.navCtrl.push(CadastroPage)
    
  }

  sho(){
    this.navCtrl.push(CadastroPage);
  }

}
