// Module ID: 11578
// Function ID: 11579
// Name: ConjureSmartContext
// Dependencies: [32, 19, 10899, 10898, 10907, 558, 576, 504, 10989, 1128, 3865, 2]

// Module 11578 (ConjureSmartContext)
import conjureSmartContextConnection from "conjureSmartContextConnection" /* 10989 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConjureChatStore from "ConjureChatStore" /* 10899 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10898 */;
import ConjureSmartContextStore from "ConjureSmartContextStore" /* 10907 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureContextSwitchRow(arg0, id) {
  let closure_0;
  let error;
  let first;
  let status;
  let tmp10;
  let tmp11;
  let tmp6;
  let tmp7;
  let tmp9;
  _require = arg0;
  const frame = id;
  let obj = require("react");
  const cResult = obj.c(27);
  id = id.id;
  ({ status, error } = id);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureConnectionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    class S {
      constructor() {
        return "open" === ConjureConnectionStore.getConnState(closure_0);
      }
    }
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = S;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = S;
  } else {
    class S {
      constructor() {
        return "open" === ConjureConnectionStore.getConnState(closure_0);
      }
    }
    tmp7 = cResult[3];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return "open" === ConjureConnectionStore.getConnState(closure_0);
      }
    }
    const items2 = [ConjureChatStore];
    cResult[4] = items2;
    tmp9 = items2;
  } else {
    class S {
      constructor() {
        return "open" === ConjureConnectionStore.getConnState(closure_0);
      }
    }
  }
  if (cResult[5] !== arg0) {
    class S {
      constructor() {
        return "open" === ConjureConnectionStore.getConnState(closure_0);
      }
    }
    const items3 = [arg0];
    cResult[5] = arg0;
    cResult[6] = tmp12;
    cResult[7] = items3;
    tmp11 = items3;
    tmp10 = tmp12;
  } else {
    class S {
      constructor() {
        return "open" === ConjureConnectionStore.getConnState(closure_0);
      }
    }
    tmp11 = cResult[7];
  }
  const tmpResult2 = require("get initialized");
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp9, tmp10, tmp11);
  const tmp14 = _slicedToArray(react.useState(null), 2);
  [r10062, _slicedToArray] = tmp14;
  if (cResult[8] === id) {
    class S {
      constructor() {
        return "open" === ConjureConnectionStore.getConnState(closure_0);
      }
    }
  }
  const fn = function p() {
    let obj2;
    const obj = { frame, ok: obj2.undoContextSwitch(closure_0, id) };
    obj2 = conjureSmartContextConnection;
    return _slicedToArray(obj);
  };
  cResult[8] = id;
  cResult[9] = id;
  cResult[10] = arg0;
  cResult[11] = fn;
}) : (function useConjureContextSwitchRow(arg0, id) {
  let closure_0;
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
  _require = arg0;
  importDefault = id;
  id = id.id;
  ({ status, error } = id);
  let obj = require("get initialized");
  const items = [ConjureConnectionStore];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => "open" === ConjureConnectionStore.getConnState(closure_0), items1);
  let obj2 = require("get initialized");
  const items2 = [ConjureChatStore];
  const items3 = [arg0];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => {
    const isThinkingResult = ConjureChatStore.isThinking(closure_0);
    const tmp3 = !isThinkingResult && !ConjureChatStore.isCompacting(closure_0);
    return tmp3;
  }, items3);
  const tmp5 = _slicedToArray(react.useState(null), 2);
  [tmp6, _slicedToArray] = tmp5;
  const items4 = [id, arg0, id];
  let frame;
  const callback = react.useCallback(() => {
    let obj2;
    const obj = { frame, ok: obj2.undoContextSwitch(closure_0, id) };
    obj2 = conjureSmartContextConnection;
    return _slicedToArray(obj);
  }, items4);
  if (tmp6 != null) {
    frame = tmp6.frame;
  }
  let tmp9 = null;
  if (frame === id) {
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
    intl5 = tmp(tmp2[9]).intl;
    intl6 = tmp(tmp2[9]).intl;
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
    intl = tmp(tmp2[9]).intl;
    intl2 = tmp(tmp2[9]).intl;
    if ("busy" === error) {
      const intl4 = tmp(tmp2[9]).intl;
      stringResult = intl4.string(tmp14(tmp2[10]).QoixaY);
    } else {
      stringResult = null;
      if (tmp13) {
        const intl3 = tmp(tmp2[9]).intl;
        stringResult = intl3.string(tmp14(tmp2[10])["9fvHNe"]);
      }
    }
    tmp16 = null;
    if ("expired" !== status) {
      let FzX9h8;
      const intl7 = tmp(tmp2[9]).intl;
      const string = intl7.string;
      if ("active" === status) {
        FzX9h8 = tmp14(tmp2[10])["7q2YyD"];
      } else {
        FzX9h8 = tmp14(tmp2[10]).FzX9h8;
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureSmartContextSetting(arg0) {
  let closure_0;
  let closure_2;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(12);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureSmartContextStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      return ConjureSmartContextStore.getSmartContext(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  const tmp9 = _slicedToArray(react.useState(null), 2);
  let flag = tmp9[0];
  const tmp11 = null != flag && flag === stateFromStores;
  if (tmp11) {
    tmp9[1](null);
  }
  let tmp13 = null != flag;
  if (tmp13) {
    let flag2 = stateFromStores;
    if (stateFromStores == null) {
      flag2 = false;
    }
    tmp13 = flag !== flag2;
  }
  dependencyMap = tmp13;
  if (cResult[4] === tmp13) {
    if (cResult[5] === flag) {
      let tmp14;
      if (cResult[6] === arg0) {
        tmp14 = cResult[7];
      }
      if (flag == null) {
        flag = stateFromStores;
      }
      if (flag == null) {
        flag = false;
      }
      if (cResult[8] === tmp13) {
        if (cResult[9] === tmp14) {
          let tmp15;
          if (cResult[10] === flag) {
            tmp15 = cResult[11];
          }
          return tmp15;
        }
      }
      const obj2 = { checked: flag, changed: tmp13, setChecked: tmp9[1], save: tmp14 };
      cResult[8] = tmp13;
      cResult[9] = tmp14;
      cResult[10] = flag;
      cResult[11] = obj2;
      tmp15 = obj2;
    }
  }
  const fn2 = function x() {
    let sendSmartContextResult = !closure_2;
    if (closure_2) {
      sendSmartContextResult = null == flag;
    }
    if (!sendSmartContextResult) {
      const obj = conjureSmartContextConnection;
      sendSmartContextResult = obj.sendSmartContext(closure_0, flag);
    }
    return sendSmartContextResult;
  };
  cResult[4] = tmp13;
  cResult[5] = flag;
  cResult[6] = arg0;
  cResult[7] = fn2;
  tmp14 = fn2;
}) : (function useConjureSmartContextSetting(arg0) {
  let changed;
  let checked;
  let closure_0;
  let setChecked;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ConjureSmartContextStore];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => ConjureSmartContextStore.getSmartContext(closure_0), items1);
  [checked, setChecked] = react.useState(null);
  const obj2 = react;
  const tmp4 = null != checked && checked === stateFromStores;
  if (tmp4) {
    setChecked(null);
  }
  changed = null != checked;
  if (changed) {
    let flag2 = stateFromStores;
    if (stateFromStores == null) {
      flag2 = false;
    }
    changed = checked !== flag2;
  }
  const items2 = [changed, checked, arg0];
  const save = obj2.useCallback(() => {
    let sendSmartContextResult = !changed;
    if (changed) {
      sendSmartContextResult = null == checked;
    }
    if (!sendSmartContextResult) {
      const obj = conjureSmartContextConnection;
      sendSmartContextResult = obj.sendSmartContext(closure_0, checked);
    }
    return sendSmartContextResult;
  }, items2);
  if (checked == null) {
    checked = stateFromStores;
  }
  if (checked == null) {
    checked = false;
  }
  return { checked, changed, setChecked, save };
});
const result = size.fileFinishedImporting("modules/conjure/contexts/ConjureSmartContext.tsx");

export const useConjureContextSwitchRow = tmp2;
export const useConjureSmartContextSetting = tmp3;
