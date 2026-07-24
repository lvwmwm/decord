// Module ID: 7603
// Function ID: 60595
// Name: useIsExpressiveModalV2Enabled
// Dependencies: [1428, 2]
// Exports: isExpressiveModalV2Enabled, useIsExpressiveModalV2Enabled

// Module 7603 (useIsExpressiveModalV2Enabled)
import ApexExperiment from "ApexExperiment";

const obj = { kind: "user", name: "2026-07-expressive-modal-v2", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/age_assurance/ExpressiveModalV2Experiment.tsx");

export const useIsExpressiveModalV2Enabled = function useIsExpressiveModalV2Enabled(location) {
  return closure_0.useConfig({ location }).enabled;
};
export const isExpressiveModalV2Enabled = function isExpressiveModalV2Enabled(entryPoint) {
  return closure_0.getConfig({ location: entryPoint }).enabled;
};
