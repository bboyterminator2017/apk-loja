import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Produto } from '../../model/produto';
import { PRODUTOS } from '../../config/api.config';

@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  produtos: Produto[] = PRODUTOS;

  navProdutoDetalhe(produto : Produto){
    this.navCtrl.push("ProdutoDetalhePage",{produto : produto});
  }

}
