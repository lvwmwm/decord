// Module ID: 6535
// Function ID: 6536
// Name: setPromoEmailConsentState
// Dependencies: [641, 702, 2]
// Exports: setPromoEmailConsentChecked, setPromoEmailConsentState

// Module 6535 (setPromoEmailConsentState)
import set from "set" /* 2 */;
import keys from "keys" /* 641 */;

const obj = keys.create(() => ({ required: false, checked: false, preChecked: false }));
const result = set.fileFinishedImporting("modules/auth/PromoEmailConsentStore.tsx");

export const setPromoEmailConsentState = function setPromoEmailConsentState(arg0) {
  const _require = arg0;
  _require(702).batchUpdates(() => closure_1_2.setState(closure_0));
};
export const setPromoEmailConsentChecked = function setPromoEmailConsentChecked(arg0) {
  const _require = arg0;
  _require(702).batchUpdates(() => closure_1_2.setState({ checked: closure_0 }));
};
export const usePromoEmailConsentStore = obj;
