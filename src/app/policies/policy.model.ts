export interface Policy {
  id: string;
  policyName: string;
  policyNumber: string;
  premiumAmount: number;
  premiumMode: string;
  sumAssured: number;
  bonusAccrued: number;
  startDate: Date;
  endDate: Date;
  policyTerm: number;
  nextDueDate: Date;
  agentName: string;
  branchName: string;
  agentPhone: string;
  premiumPaid: string;
}
