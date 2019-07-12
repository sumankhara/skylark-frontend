import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Policy } from '../policy.model';
import { PolicyService } from '../policy.service';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.css']
})
export class PolicyListComponent implements OnInit, OnDestroy {

  policies: Policy[] = [];
  private policySub: Subscription;

  constructor(public policyService: PolicyService) {}

  ngOnInit() {
    this.policyService.getPolicies();
    this.policySub = this.policyService.getPolicyUpdateListener()
      .subscribe((policies: Policy[]) => {
        this.policies = policies;
      });
  }

  ngOnDestroy() {
    this.policySub.unsubscribe();
  }
}
