// Module ID: 8026
// Function ID: 8027
// Name: apexExperiment
// Dependencies: [1468, 2]
// Exports: useManaTypeConsolidationExperiment

// Module 8026 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1468 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-05-mana-type-consolidation", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/design/ManaTypeConsolidationExperiment.tsx");

export default apexExperiment;
export const useManaTypeConsolidationExperiment = function useManaTypeConsolidationExperiment(ChangeLogStrong) {
  return apexExperiment.useConfig({ location: ChangeLogStrong }).enabled;
};
