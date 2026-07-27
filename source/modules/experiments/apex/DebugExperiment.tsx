// Module ID: 12679
// Function ID: 98427
// Name: apexExperiment
// Dependencies: [1428, 2]
// Exports: useDebugExperiment

// Module 12679 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-03-debug-experiment", kind: "user", defaultConfig: {}, variations: { [1]: {}, [2]: {} } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/experiments/apex/DebugExperiment.tsx");

export default apexExperiment;
export const DebugExperiment = apexExperiment;
export const useDebugExperiment = function useDebugExperiment() {
  return apexExperiment.useConfig({ location: "debug_experiment" });
};
