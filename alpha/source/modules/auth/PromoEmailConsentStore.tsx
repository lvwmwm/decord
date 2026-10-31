// Module ID: 6741
// Function ID: 6742
// Name: PromoEmailConsentStore
// Dependencies: [560, 1259, 2]
// Exports: setPromoEmailConsentChecked, setPromoEmailConsentState

// Module 6741 (PromoEmailConsentStore)
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const usePromoEmailConsentStore = module_560.create(() => ({ required: false, checked: false, preChecked: false }));
const result = size.fileFinishedImporting("modules/auth/PromoEmailConsentStore.tsx");

export function setPromoEmailConsentState(arg0) {
  let closure_0;
  _require = arg0;
  const obj = require("react-native");
  obj.batchUpdates(() => obj.setState(closure_0));
}
export function setPromoEmailConsentChecked(checked) {
  _require = checked;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { checked };
    return obj.setState(obj);
  });
}
export { usePromoEmailConsentStore };
