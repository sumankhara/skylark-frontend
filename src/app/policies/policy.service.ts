import { Policy } from './policy.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class PolicyService {
  private policies: Policy[] = [
    { id: null,
      policyName: 'Jeevan Saral',
      policyNumber: '3746171346',
      premiumAmount: 36551,
      premiumMode: 'HLY',
      sumAssured: 800000,
      bonusAccrued: 123456,
      startDate: new Date(),
      endDate: new Date(),
      policyTerm: 25,
      agentName: 'abcxyz',
      branchName: 'kolkata',
      nextDueDate: new Date(),
      premiumPaid: 'paid',
      agentPhone: '812364'
    }
  ];
  private policiesUpdated = new Subject<Policy[]>();

  constructor(private http: HttpClient) {}

  getPolicies() {
    this.http.get<{message: string, policies: Policy[]}>('http://localhost:3000/api/policies')
      .subscribe((postData) => {
        this.policies = postData.policies;
        this.policiesUpdated.next([...this.policies]);
      });
  }

  getPolicyUpdateListener() {
    return this.policiesUpdated.asObservable();
  }

  addPolicy(
    newPolicyName: string,
    newPolicyNumber: string,
    newPremiumAmount: number,
    newPremiumMode: string,
    newSumAssured: number,
    newBonusAccrued: number,
    newStartDate: Date,
    newEndDate: Date,
    newPolicyTerm: number,
    newNextDueDate: Date,
    newAgentName: string,
    newBranchName: string,
    newAgentPhone: string,
    newPremiumPaid: string
  ) {
    const policy: Policy = {
      id: null,
      policyName: newPolicyName,
      policyNumber: newPolicyNumber,
      premiumAmount: newPremiumAmount,
      premiumMode: newPremiumMode,
      sumAssured: newSumAssured,
      bonusAccrued: newBonusAccrued,
      startDate: newStartDate,
      endDate: newEndDate,
      policyTerm: newPolicyTerm,
      agentName: newAgentName,
      branchName: newBranchName,
      nextDueDate: newNextDueDate,
      premiumPaid: newPremiumPaid,
      agentPhone: newAgentPhone
    };
    this.http.post<{message: string}>('http://localhost:3000/api/policies', policy)
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.policies.push(policy);
        this.policiesUpdated.next([...this.policies]);
      });
  }
}
