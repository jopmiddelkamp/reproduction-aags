import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  constructor(private apollo: Apollo) { }

  getAll(): Observable<any> {
    return this.apollo.query({
      query: gql`
      query {
        portfolios {
          Title
          projects {
            Title
            client {
              Name
              testimonials {
                Description
              }
            }
          }
        }
      }`
    });
  }
}
