// Module ID: 13296
// Function ID: 13297
// Name: ConjureMcpUiExperiment
// Dependencies: [1452, 2]
// Exports: useIsConjureMcpUiEnabled

// Module 13296 (ConjureMcpUiExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-10-conjure-mcp-ui", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null, 2: { enabled: false } };
obj2[2] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/conjure/experiments/ConjureMcpUiExperiment.tsx");

export function useIsConjureMcpUiEnabled(ConjureChatScene) {
  const obj = { location: ConjureChatScene };
  return closure_0.useConfig(obj).enabled;
}
