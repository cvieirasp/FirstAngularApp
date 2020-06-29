import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe_produto.component.html'
})

export class DetalheProdutoComponent implements OnInit {

  constructor(private produtoService: ProdutoService, private route: ActivatedRoute) { }

  public produto: Produto;

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.produtoService.getProdutoPorId(id)
      .subscribe(
        produto => this.produto = produto,
        error => console.log(error)
      );
  }
}