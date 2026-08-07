// Module ID: 13762
// Function ID: 13763
// Name: apexExperiment
// Dependencies: [1452, 2]
// Exports: useManaTypeConsolidationExperiment

// Module 13762 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-05-mana-type-consolidation", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/design/ManaTypeConsolidationExperiment.tsx");

export default apexExperiment;
export const useManaTypeConsolidationExperiment = function useManaTypeConsolidationExperiment(RootThemeContextProvider) {
  return apexExperiment.useConfig({ location: RootThemeContextProvider }).enabled;
};
