// Module ID: 15577
// Function ID: 15578
// Name: DebugExperiment
// Dependencies: [1447, 2]
// Exports: useDebugExperiment

// Module 15577 (DebugExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-03-debug-experiment", kind: "user", defaultConfig: {}, variations: obj2 };
obj2 = { 1: null, 2: {} };
obj2[2] = {};
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/experiments/apex/DebugExperiment.tsx");

export default apexExperiment;
export const DebugExperiment = apexExperiment;
export function useDebugExperiment() {
  return apexExperiment.useConfig({ location: "debug_experiment" });
}
