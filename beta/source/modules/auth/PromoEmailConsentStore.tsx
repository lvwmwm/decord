// Module ID: 6833
// Function ID: 6834
// Name: PromoEmailConsentStore
// Dependencies: [562, 1252, 2]
// Exports: setPromoEmailConsentChecked, setPromoEmailConsentState

// Module 6833 (PromoEmailConsentStore)
import module_562 from "module_562" /* 562 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const usePromoEmailConsentStore = module_562.create(() => ({ required: false, checked: false, preChecked: false }));
const result = size.fileFinishedImporting("modules/auth/PromoEmailConsentStore.tsx");

export const setPromoEmailConsentState = function setPromoEmailConsentState(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => obj.setState(closure_0));
};
export const setPromoEmailConsentChecked = function setPromoEmailConsentChecked(checked) {
  _require = checked;
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj = { checked };
    return obj.setState(obj);
  });
};
export { usePromoEmailConsentStore };
