// Module ID: 13545
// Function ID: 104168
// Name: apexExperiment
// Dependencies: [1428, 2]
// Exports: useManaTypeConsolidationExperiment

// Module 13545 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-05-mana-type-consolidation", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/design/ManaTypeConsolidationExperiment.tsx");

export default apexExperiment;
export const useManaTypeConsolidationExperiment = function useManaTypeConsolidationExperiment(RootThemeContextProvider) {
  return apexExperiment.useConfig({ location: RootThemeContextProvider }).enabled;
};
