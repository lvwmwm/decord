// Module ID: 6083
// Function ID: 6084
// Name: PromoEmailConsentStore
// Dependencies: [570, 1259, 2]
// Exports: setPromoEmailConsentChecked, setPromoEmailConsentState

// Module 6083 (PromoEmailConsentStore)
import module_570 from "module_570" /* 570 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const usePromoEmailConsentStore = module_570.create(() => ({ required: false, checked: false, preChecked: false }));
const result = size.fileFinishedImporting("modules/auth/PromoEmailConsentStore.tsx");

export const setPromoEmailConsentState = function setPromoEmailConsentState(arg0) {
  let closure_0;
  _require = arg0;
  const obj = require("react-native");
  obj.batchUpdates(() => obj.setState(closure_0));
};
export const setPromoEmailConsentChecked = function setPromoEmailConsentChecked(checked) {
  _require = checked;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { checked };
    return obj.setState(obj);
  });
};
export { usePromoEmailConsentStore };
