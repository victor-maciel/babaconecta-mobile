import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InformeEnvioCadastroPage } from '../informe-envio-cadastro/informe-envio-cadastro';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  baba = {nome : null, CPF : null, RG:null, endereco:null, email:null}
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  confirmarCadastro(){
    this.navCtrl.setRoot(InformeEnvioCadastroPage)
  }

 
}
