import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Account } from '../account';
import { AccountService }  from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {

  @Input() account: Account;

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getAccount();
  }

  getAccount(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    // this.accountService.getUser(id);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    console.log("in save");
    this.accountService.updateAccount(this.account)
      .subscribe(() => this.goBack());
  }

}
