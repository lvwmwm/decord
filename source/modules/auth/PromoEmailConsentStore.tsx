// Module ID: 5588
// Function ID: 47469
// Name: setPromoEmailConsentState
// Dependencies: []
// Exports: setPromoEmailConsentChecked, setPromoEmailConsentState

// Module 5588 (setPromoEmailConsentState)
const _module = require(dependencyMap[0]);
const obj = _module.create(() => ({ È: true, É: false, Ê: false }));
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/auth/PromoEmailConsentStore.tsx");

export const setPromoEmailConsentState = function setPromoEmailConsentState(arg0) {
  const require = arg0;
  require(dependencyMap[1]).batchUpdates(() => state.setState(arg0));
};
export const setPromoEmailConsentChecked = function setPromoEmailConsentChecked(arg0) {
  const require = arg0;
  require(dependencyMap[1]).batchUpdates(() => state.setState({ checked: arg0 }));
};
export const usePromoEmailConsentStore = obj;
