// Module ID: 13614
// Function ID: 13615
// Name: apexExperiment
// Dependencies: [1468, 2]
// Exports: useDebugExperiment

// Module 13614 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1468 */;

const obj = { 1: null, 2: {} };
obj[2] = {};
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-03-debug-experiment", kind: "user", defaultConfig: {}, variations: obj });
const result = set.fileFinishedImporting("modules/experiments/apex/DebugExperiment.tsx");

export default apexExperiment;
export const DebugExperiment = apexExperiment;
export const useDebugExperiment = function useDebugExperiment() {
  return apexExperiment.useConfig({ location: "debug_experiment" });
};
