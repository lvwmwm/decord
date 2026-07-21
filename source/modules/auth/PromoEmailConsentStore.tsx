// Module ID: 5589
// Function ID: 47453
// Name: setPromoEmailConsentState
// Dependencies: []
// Exports: setPromoEmailConsentChecked, setPromoEmailConsentState

// Module 5589 (setPromoEmailConsentState)
const _module = require(dependencyMap[0]);
const obj = _module.create(() => ({ 1191121919: true, 315722: false, 315679: false }));
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
