// Module ID: 16572
// Function ID: 16573
// Name: ManaTypeConsolidationExperiment
// Dependencies: [1449, 2]
// Exports: useManaTypeConsolidationExperiment

// Module 16572 (ManaTypeConsolidationExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-05-mana-type-consolidation", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/design/ManaTypeConsolidationExperiment.tsx");

export default apexExperiment;
export function useManaTypeConsolidationExperiment(RootThemeContextProvider) {
  const obj = { location: RootThemeContextProvider };
  return apexExperiment.useConfig(obj).enabled;
}
