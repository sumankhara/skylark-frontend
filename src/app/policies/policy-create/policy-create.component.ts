import { Component } from '@angular/core';
import { PolicyService } from '../policy.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-policy-create',
  templateUrl: './policy-create.component.html',
  styleUrls: ['./policy-create.component.css']
})
export class PolicyCreateComponent {

  constructor(public policyService: PolicyService) {}

  onAddPolicy(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.policyService.addPolicy(
      form.value.policyName,
      form.value.policyNumber,
      form.value.premiumAmount,
      form.value.premiumMode,
      form.value.sumAssured,
      form.value.bonusAccrued,
      form.value.startDate,
      form.value.endDate,
      form.value.policyTerm,
      form.value.nextDueDate,
      form.value.agentName,
      form.value.branchName,
      form.value.agentPhone,
      form.value.premiumPaid
    );
    form.resetForm();
  }
}
