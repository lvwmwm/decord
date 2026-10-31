// Module ID: 7993
// Function ID: 7994
// Name: ExpressiveModalV2Experiment
// Dependencies: [7994, 1447, 7969, 504, 2]
// Exports: isExpressiveModalV2Enabled, useIsExpressiveModalV2Enabled

// Module 7993 (ExpressiveModalV2Experiment)
import get_initialized from "get initialized" /* 504 */;
import SafetyHubUtils from "SafetyHubUtils" /* 7969 */;
import SafetyHubStore from "SafetyHubStore" /* 7994 */;
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { kind: "user", name: "2026-07-expressive-modal-v2", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null, 2: { enabled: true } };
obj2[2] = { enabled: true };
let closure_3 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/age_assurance/ExpressiveModalV2Experiment.tsx");

export function useIsExpressiveModalV2Enabled(AUTOMATED_UNDERAGE_APPEALS) {
  let isExpressiveModalV2Enabled;
  const obj = SafetyHubUtils;
  const isSuspendedUser = obj.useIsSuspendedUser();
  const items = [SafetyHubStore];
  const obj2 = get_initialized;
  const obj3 = { location: AUTOMATED_UNDERAGE_APPEALS };
  const stateFromStores = obj2.useStateFromStores(items, () => isExpressiveModalV2Enabled.getIsExpressiveModalV2Enabled());
  let enabled = closure_3.useConfig(obj3).enabled;
  if (isSuspendedUser) {
    enabled = stateFromStores;
  }
  return enabled;
}
export function isExpressiveModalV2Enabled(AUTOMATED_UNDERAGE_APPEALS) {
  let enabled;
  const obj = SafetyHubUtils;
  if (obj.isCurrentUserSuspended()) {
    enabled = SafetyHubStore.getIsExpressiveModalV2Enabled();
  } else {
    const obj2 = { location: AUTOMATED_UNDERAGE_APPEALS };
    enabled = closure_3.getConfig(obj2).enabled;
  }
  return enabled;
}
