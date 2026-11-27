// Module ID: 18683
// Function ID: 18684
// Name: useConjureRemixSettingsRequest
// Dependencies: [19, 7710, 18657, 18656, 504, 18655, 2]
// Exports: default

// Module 18683 (useConjureRemixSettingsRequest)
import conjureSetupAsk from "conjureSetupAsk" /* 18655 */;
import conjureRemixSettingsRequest from "conjureRemixSettingsRequest" /* 18657 */;
import react_mod from "react" /* 19 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 7710 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let react = react_mod;
const result = size.fileFinishedImporting("modules/conjure/remix/useConjureRemixSettingsRequest.tsx");

export default function useConjureRemixSettingsRequest(projectId, arg1, askId) {
  let closure_1;
  _require = projectId;
  dependencyMap = arg1;
  react = askId;
  const items = [arg1];
  const memo = react.useMemo(() => {
    const obj = conjureRemixSettingsRequest;
    return obj.conjureRemixSettingsRequest(closure_1);
  }, items);
  let obj = require("conjureSettingsAsks");
  const conjureSettingsAskSource = obj.useConjureSettingsAskSource(projectId, memo, askId);
  const saved = conjureSettingsAskSource.saved;
  const superseded = conjureSettingsAskSource.superseded;
  let obj2 = require("get initialized");
  const items1 = [memo];
  const items2 = [memo, askId, projectId, saved, superseded];
  const stateFromStores = obj2.useStateFromStores(items1, () => {
    const settings = ConjureSettingsStore.getSettings(projectId);
    let status = null;
    if (null != memo) {
      status = null;
      if (null != askId) {
        status = null;
        if (null != settings) {
          const obj2 = { kind: "settings", request: tmp2, askId: tmp4, saved, superseded };
          const obj = conjureSetupAsk;
          status = obj.conjureSetupAskState(obj2, settings).status;
        }
      }
    }
    return status;
  }, items2);
  const items3 = [memo, stateFromStores];
  return react.useMemo(() => {
    let tmp2 = null;
    if (null != memo) {
      tmp2 = null;
      if (null != stateFromStores) {
        tmp2 = { request: tmp, open: "open" === tmp3 };
        const obj = { request: tmp, open: "open" === tmp3 };
      }
    }
    return tmp2;
  }, items3);
};
