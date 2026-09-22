// Module ID: 11457
// Function ID: 11458
// Name: TenureBadgeWithheldStateExperiment
// Dependencies: [1434, 2]
// Exports: shouldShowWithheldTenureBadge

// Module 11457 (TenureBadgeWithheldStateExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-08-nitro-tenure-badge-withheld-state", defaultConfig: { showWithheldBadge: false }, variations: { 0: { showWithheldBadge: false }, 1: { showWithheldBadge: true } } });
const result = size.fileFinishedImporting("modules/premium/experiments/TenureBadgeWithheldStateExperiment.tsx");

export default apexExperiment;
export const shouldShowWithheldTenureBadge = function shouldShowWithheldTenureBadge(useTieredTenureBadgeData) {
  return apexExperiment.getConfig({ location: useTieredTenureBadgeData }).showWithheldBadge;
};
