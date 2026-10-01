// Module ID: 6401
// Function ID: 6402
// Name: ManaTypeConsolidationExperiment
// Dependencies: [1435, 2]
// Exports: useManaTypeConsolidationExperiment

// Module 6401 (ManaTypeConsolidationExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-05-mana-type-consolidation", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/design/ManaTypeConsolidationExperiment.tsx");

export default apexExperiment;
export const useManaTypeConsolidationExperiment = function useManaTypeConsolidationExperiment(ChangeLogStrong) {
  const obj = { location: ChangeLogStrong };
  return apexExperiment.useConfig(obj).enabled;
};
