// Module ID: 10653
// Function ID: 10654
// Name: BadgeManagementExperiment
// Dependencies: [1435, 2]
// Exports: useIsBadgeManagementEnabled

// Module 10653 (BadgeManagementExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-08-badge-management", kind: "user", defaultConfig: { enabled: false, tenureBadgeHideable: false }, variations: obj2 };
obj2 = { 1: null, 2: { enabled: true, tenureBadgeHideable: true } };
obj2[2] = { enabled: true, tenureBadgeHideable: false };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/badges/BadgeManagementExperiment.tsx");

export default apexExperiment;
export const useIsBadgeManagementEnabled = function useIsBadgeManagementEnabled(location) {
  const obj = { location: location.location };
  return apexExperiment.useConfig(obj).enabled;
};
