// Module ID: 12327
// Function ID: 12328
// Name: useConjureRemixSettingsRequest
// Dependencies: [10693, 558, 576, 12328, 504, 1128, 3830, 2]

// Module 12327 (useConjureRemixSettingsRequest)
import conjureSettingsRequest from "conjureSettingsRequest" /* 12328 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 10693 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureRemixSettingsRequest(arg0, type) {
  let closure_0;
  let first;
  let intl;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(8);
  let settings_keys;
  if ("remixed" === type.type) {
    settings_keys = type.settings_keys;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureSettingsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === settings_keys) {
    let tmp7;
    let tmp8;
    if (cResult[2] === arg0) {
      tmp7 = cResult[3];
      tmp8 = cResult[4];
    }
    const tmpResult = require("get initialized");
    const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
    if (cResult[5] === stateFromStores) {
      let tmp10;
      if (cResult[6] === settings_keys) {
        tmp10 = cResult[7];
      }
      return tmp10;
    }
    let tmp12 = null;
    if (stateFromStores) {
      tmp12 = null;
      if (null != settings_keys) {
        let obj2 = { keys: settings_keys, note: intl.string(settings_keys(3830).F2yVHg) };
        intl = tmp(1128).intl;
        tmp12 = obj2;
      }
    }
    cResult[5] = stateFromStores;
    cResult[6] = settings_keys;
    cResult[7] = tmp12;
    tmp10 = tmp12;
  }
  const fn = function l() {
    let result = null != settings_keys && arr.length > 0;
    if (result) {
      const obj2 = { keys: settings_keys };
      const obj = conjureSettingsRequest;
      result = obj.conjureSettingsRequestBlocks(obj2, ConjureSettingsStore.getSettings(closure_0));
    }
    return result;
  };
  const items1 = [settings_keys, arg0];
  cResult[1] = settings_keys;
  cResult[2] = arg0;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp8 = items1;
  tmp7 = fn;
}) : (function useConjureRemixSettingsRequest(arg0, type) {
  let closure_0;
  let intl;
  _require = arg0;
  let settings_keys;
  if ("remixed" === type.type) {
    settings_keys = type.settings_keys;
  }
  let obj = require("get initialized");
  const items = [ConjureSettingsStore];
  const items1 = [settings_keys, arg0];
  let tmp4 = null;
  const tmp2 = _require;
  if (obj.useStateFromStores(items, () => {
    let result = null != settings_keys && arr.length > 0;
    if (result) {
      const obj2 = { keys: settings_keys };
      const obj = conjureSettingsRequest;
      result = obj.conjureSettingsRequestBlocks(obj2, ConjureSettingsStore.getSettings(closure_0));
    }
    return result;
  }, items1)) {
    tmp4 = null;
    if (null != settings_keys) {
      let obj2 = { keys: settings_keys, note: intl.string(settings_keys(3830).F2yVHg) };
      intl = tmp2(1128).intl;
      tmp4 = obj2;
    }
  }
  return tmp4;
});
let result = size.fileFinishedImporting("modules/conjure/remix/useConjureRemixSettingsRequest.tsx");

export default tmp2;
