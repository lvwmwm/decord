// Module ID: 12439
// Function ID: 12440
// Name: ConjureSmartContext
// Dependencies: [32, 19, 10831, 10830, 10841, 504, 10947, 1114, 3865, 10871, 2]
// Exports: useConjureContextSwitchRow, useConjureSmartContextSetting

// Module 12439 (ConjureSmartContext)
import conjureSmartContextConnection from "conjureSmartContextConnection" /* 10947 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConjureChatStore from "ConjureChatStore" /* 10831 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10830 */;
import ConjureSmartContextStore from "ConjureSmartContextStore" /* 10841 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

const result = size.fileFinishedImporting("modules/conjure/contexts/ConjureSmartContext.tsx");

export function useConjureContextSwitchRow(projectId, contextSwitch) {
  let error;
  let intl;
  let intl2;
  let intl5;
  let intl6;
  let status;
  let stringResult;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp6;
  _require = projectId;
  importDefault = contextSwitch;
  const id = contextSwitch.id;
  ({ status, error } = contextSwitch);
  let obj = require("get initialized");
  const items = [ConjureConnectionStore];
  const items1 = [projectId];
  const stateFromStores = obj.useStateFromStores(items, () => "open" === ConjureConnectionStore.getConnState(projectId), items1);
  let obj2 = require("get initialized");
  const items2 = [ConjureChatStore];
  const items3 = [projectId];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => {
    const isThinkingResult = ConjureChatStore.isThinking(projectId);
    const tmp3 = !isThinkingResult && !ConjureChatStore.isCompacting(projectId);
    return tmp3;
  }, items3);
  const tmp5 = _slicedToArray(react.useState(null), 2);
  [tmp6, _slicedToArray] = tmp5;
  const items4 = [contextSwitch, projectId, id];
  let frame;
  const callback = react.useCallback(() => {
    let obj2;
    const obj = { frame, ok: obj2.undoContextSwitch(projectId, id) };
    obj2 = conjureSmartContextConnection;
    return _slicedToArray(obj);
  }, items4);
  if (tmp6 != null) {
    frame = tmp6.frame;
  }
  let tmp9 = null;
  if (frame === contextSwitch) {
    tmp9 = tmp6;
  }
  let ok;
  if (tmp9 != null) {
    ok = tmp9.ok;
  }
  const tmp11 = true === ok && stateFromStores;
  if ("undone" === status) {
    return null;
  } else if ("reverted" === status) {
    const obj3 = { label: intl5.string(require("module_3865").uQRAzS), body: intl6.string(require("module_3865")["24OcbD"]), note: null, action: null };
    intl5 = tmp(tmp2[7]).intl;
    intl6 = tmp(tmp2[7]).intl;
    return obj3;
  } else {
    let tmp13 = "failed" === error;
    if (!tmp13) {
      let ok1;
      if (tmp9 != null) {
        ok1 = tmp9.ok;
      }
      tmp13 = false === ok1;
    }
    const obj4 = { label: intl.string(require("module_3865").iBrh0c), body: intl2.string(require("module_3865").sRY8wn), note: stringResult, action: tmp16 };
    intl = tmp(tmp2[7]).intl;
    intl2 = tmp(tmp2[7]).intl;
    if ("busy" === error) {
      const intl4 = tmp(tmp2[7]).intl;
      stringResult = intl4.string(tmp14(tmp2[8]).QoixaY);
    } else {
      stringResult = null;
      if (tmp13) {
        const intl3 = tmp(tmp2[7]).intl;
        stringResult = intl3.string(tmp14(tmp2[8])["9fvHNe"]);
      }
    }
    tmp16 = null;
    if ("expired" !== status) {
      let FzX9h8;
      const intl7 = tmp(tmp2[7]).intl;
      const string = intl7.string;
      if ("active" === status) {
        FzX9h8 = tmp14(tmp2[8])["7q2YyD"];
      } else {
        FzX9h8 = tmp14(tmp2[8]).FzX9h8;
      }
      const obj5 = { text: string(FzX9h8), confirm: tmp17, disabled: tmp18, onPress: callback };
      tmp17 = "committed" === status;
      tmp18 = !stateFromStores;
      if (stateFromStores) {
        tmp18 = tmp11;
      }
      if (!tmp18) {
        if (tmp17) {
          tmp17 = !stateFromStores1;
        }
        tmp18 = tmp17;
      }
      tmp16 = obj5;
    }
    return obj4;
  }
}
export function useConjureSmartContextSetting(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ConjureSmartContextStore];
  const items1 = [arg0];
  const items2 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => ConjureSmartContextStore.getSmartContext(closure_0), items1);
  const callback = react.useCallback((arg0) => {
    const obj = conjureSmartContextConnection;
    return obj.sendSmartContext(closure_0, arg0);
  }, items2);
  const obj2 = require("useToggleDraft");
  return obj2.useToggleDraft(stateFromStores, callback);
}
