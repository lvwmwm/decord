// Module ID: 10541
// Function ID: 10542
// Name: TenureBadgeWithheldStateExperiment
// Dependencies: [1452, 2]
// Exports: shouldShowWithheldTenureBadge

// Module 10541 (TenureBadgeWithheldStateExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2026-08-nitro-tenure-badge-withheld-state", defaultConfig: { showWithheldBadge: false }, variations: { 0: { showWithheldBadge: false }, 1: { showWithheldBadge: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/experiments/TenureBadgeWithheldStateExperiment.tsx");

export default apexExperiment;
export const shouldShowWithheldTenureBadge = function shouldShowWithheldTenureBadge(useTieredTenureBadgeData) {
  const obj = { location: useTieredTenureBadgeData };
  return apexExperiment.getConfig(obj).showWithheldBadge;
};
