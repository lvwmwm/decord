// Module ID: 12579
// Function ID: 12580
// Name: useConjureRemixSettingsRequest
// Dependencies: [10849, 504, 12580, 1114, 3865, 2]
// Exports: default

// Module 12579 (useConjureRemixSettingsRequest)
import conjureSettingsRequest from "conjureSettingsRequest" /* 12580 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 10849 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let result = size.fileFinishedImporting("modules/conjure/remix/useConjureRemixSettingsRequest.tsx");

export default function useConjureRemixSettingsRequest(arg0, type) {
  let closure_0;
  let intl;
  _require = arg0;
  type = undefined;
  if (type != null) {
    type = type.type;
  }
  let settings_keys;
  if ("remixed" === type) {
    settings_keys = type.settings_keys;
  }
  let obj = require("get initialized");
  const items = [ConjureSettingsStore];
  const items1 = [settings_keys, arg0];
  let tmp5 = null;
  const tmp3 = _require;
  if (obj.useStateFromStores(items, () => {
    let result = null != settings_keys && arr.length > 0;
    if (result) {
      const obj2 = { keys: settings_keys };
      const obj = conjureSettingsRequest;
      result = obj.conjureSettingsRequestBlocks(obj2, ConjureSettingsStore.getSettings(closure_0));
    }
    return result;
  }, items1)) {
    tmp5 = null;
    if (null != settings_keys) {
      let obj2 = { keys: settings_keys, note: intl.string(settings_keys(3865).F2yVHg) };
      intl = tmp3(1114).intl;
      tmp5 = obj2;
    }
  }
  return tmp5;
};
