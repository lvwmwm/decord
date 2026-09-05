// Module ID: 11186
// Function ID: 11187
// Name: apexExperiment
// Dependencies: [1433, 2]
// Exports: shouldShowWithheldTenureBadge

// Module 11186 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-08-nitro-tenure-badge-withheld-state", defaultConfig: { showWithheldBadge: false }, variations: { 0: { showWithheldBadge: false }, 1: { showWithheldBadge: true } } });
const result = set.fileFinishedImporting("modules/premium/experiments/TenureBadgeWithheldStateExperiment.tsx");

export default apexExperiment;
export const shouldShowWithheldTenureBadge = function shouldShowWithheldTenureBadge(useTieredTenureBadgeData) {
  return apexExperiment.getConfig({ location: useTieredTenureBadgeData }).showWithheldBadge;
};
