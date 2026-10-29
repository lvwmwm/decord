// Module ID: 12347
// Function ID: 12348
// Name: ConjureMcpUiExperiment
// Dependencies: [1453, 558, 576, 2]

// Module 12347 (ConjureMcpUiExperiment)
import react from "react" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1453 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-10-conjure-mcp-ui", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null, 2: { enabled: false } };
obj2[2] = { enabled: true };
let closure_2 = ApexExperiment.createApexExperiment(obj);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsConjureMcpUiEnabled(location) {
  let tmp2;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return closure_2.useConfig(tmp2).enabled;
}) : (function useIsConjureMcpUiEnabled(location) {
  const obj = { location };
  return closure_2.useConfig(obj).enabled;
});
const result = size.fileFinishedImporting("modules/conjure/experiments/ConjureMcpUiExperiment.tsx");

export const useIsConjureMcpUiEnabled = tmp2;
