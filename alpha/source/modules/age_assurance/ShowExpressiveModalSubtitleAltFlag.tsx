// Module ID: 8009
// Function ID: 8010
// Name: ShowExpressiveModalSubtitleAltFlag
// Dependencies: [7986, 1448, 7961, 504, 2]
// Exports: shouldShowExpressiveModalSubtitleAlt, useShouldShowExpressiveModalSubtitleAlt

// Module 8009 (ShowExpressiveModalSubtitleAltFlag)
import get_initialized from "get initialized" /* 504 */;
import SafetyHubUtils from "SafetyHubUtils" /* 7961 */;
import SafetyHubStore from "SafetyHubStore" /* 7986 */;
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { kind: "user", name: "2026-08-show-expressive-modal-subtitle-alt", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_3 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/age_assurance/ShowExpressiveModalSubtitleAltFlag.tsx");

export function useShouldShowExpressiveModalSubtitleAlt(age_verification_expressive_v2_modal) {
  let showExpressiveModalSubtitleAlt;
  const obj = SafetyHubUtils;
  const isSuspendedUser = obj.useIsSuspendedUser();
  const items = [SafetyHubStore];
  const obj2 = get_initialized;
  const obj3 = { location: age_verification_expressive_v2_modal };
  const stateFromStores = obj2.useStateFromStores(items, () => showExpressiveModalSubtitleAlt.getShowExpressiveModalSubtitleAlt());
  let enabled = closure_3.useConfig(obj3).enabled;
  if (isSuspendedUser) {
    enabled = stateFromStores;
  }
  return enabled;
}
export function shouldShowExpressiveModalSubtitleAlt(location) {
  let enabled;
  const obj = SafetyHubUtils;
  if (obj.isCurrentUserSuspended()) {
    enabled = SafetyHubStore.getShowExpressiveModalSubtitleAlt();
  } else {
    const obj2 = { location };
    enabled = closure_3.getConfig(obj2).enabled;
  }
  return enabled;
}
