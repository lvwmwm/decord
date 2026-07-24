// Module ID: 5589
// Function ID: 47489
// Name: setPromoEmailConsentState
// Dependencies: [621, 682, 2]
// Exports: setPromoEmailConsentChecked, setPromoEmailConsentState

// Module 5589 (setPromoEmailConsentState)
import keys from "keys";

const obj = keys.create(() => ({ required: false, checked: false, preChecked: false }));
const result = require("set").fileFinishedImporting("modules/auth/PromoEmailConsentStore.tsx");

export const setPromoEmailConsentState = function setPromoEmailConsentState(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => outer1_2.setState(closure_0));
};
export const setPromoEmailConsentChecked = function setPromoEmailConsentChecked(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => outer1_2.setState({ checked: closure_0 }));
};
export const usePromoEmailConsentStore = obj;
