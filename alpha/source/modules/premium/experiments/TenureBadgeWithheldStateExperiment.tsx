// Module ID: 11205
// Function ID: 11206
// Name: TenureBadgeWithheldStateExperiment
// Dependencies: [1453, 2]
// Exports: shouldShowWithheldTenureBadge

// Module 11205 (TenureBadgeWithheldStateExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2026-08-nitro-tenure-badge-withheld-state", defaultConfig: { showWithheldBadge: false }, variations: { 0: { showWithheldBadge: false }, 1: { showWithheldBadge: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/experiments/TenureBadgeWithheldStateExperiment.tsx");

export default apexExperiment;
export function shouldShowWithheldTenureBadge(useTieredTenureBadgeData) {
  const obj = { location: useTieredTenureBadgeData };
  return apexExperiment.getConfig(obj).showWithheldBadge;
}
