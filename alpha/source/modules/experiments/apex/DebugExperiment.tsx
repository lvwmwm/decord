// Module ID: 13814
// Function ID: 13815
// Name: DebugExperiment
// Dependencies: [1452, 558, 576, 2]

// Module 13814 (DebugExperiment)
import react from "react" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1452 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-03-debug-experiment", kind: "user", defaultConfig: {}, variations: obj2 };
obj2 = { 1: null, 2: {} };
obj2[2] = {};
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDebugExperiment() {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "debug_experiment" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  return apexExperiment.useConfig(first);
}) : (function useDebugExperiment() {
  return apexExperiment.useConfig({ location: "debug_experiment" });
});
const result = size.fileFinishedImporting("modules/experiments/apex/DebugExperiment.tsx");

export default apexExperiment;
export const DebugExperiment = apexExperiment;
export const useDebugExperiment = tmp3;
