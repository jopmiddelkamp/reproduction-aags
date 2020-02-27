import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/providers/portolio/portfolio.service';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss']
})
export class PortfolioListComponent implements OnInit {

  portfolios: any[];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.portfolioService.getAll().toPromise().then(response => {
      this.portfolios = response.data.portfolios;
      console.log(this.portfolios);
    });
  }
}
