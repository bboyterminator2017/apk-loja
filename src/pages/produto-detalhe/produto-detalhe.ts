import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Produto } from '../../model/produto';

@IonicPage()
@Component({
  selector: 'page-produto-detalhe',
  templateUrl: 'produto-detalhe.html',
})
export class ProdutoDetalhePage {

  produto : Produto;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.produto = this.navParams.get('produto');
  }

}
