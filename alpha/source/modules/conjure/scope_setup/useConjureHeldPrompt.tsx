// Module ID: 12309
// Function ID: 12310
// Name: useConjureHeldPrompt
// Dependencies: [32, 19, 10699, 10698, 6773, 558, 576, 504, 11754, 2]

// Module 12309 (useConjureHeldPrompt)
import conjureScopeSetup from "conjureScopeSetup" /* 11754 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConjureChatStore from "ConjureChatStore" /* 10699 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10698 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6773 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureScopeSetupPending(arg0) {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      const project = ConjureProjectStore.getProject(closure_0);
      let install_scope_setup;
      if (project != null) {
        install_scope_setup = project.install_scope_setup;
      }
      return null != install_scope_setup;
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
  return tmpResult.useStateFromStores(first, tmp6, tmp7);
}) : (function useConjureScopeSetupPending(arg0) {
  let closure_0;
  _require = arg0;
  const items = [ConjureProjectStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const project = ConjureProjectStore.getProject(closure_0);
    let install_scope_setup;
    if (project != null) {
      install_scope_setup = project.install_scope_setup;
    }
    return null != install_scope_setup;
  }, items1);
});
let closure_7 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureHeldPrompt(arg0) {
  let closure_0;
  let first;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp7;
  let tmp8;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(25);
  const tmp4 = closure_7(arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function p() {
      return null != ConjureProjectStore.getProject(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ConjureChatStore];
    cResult[4] = items2;
    tmp10 = items2;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== arg0) {
    class C {
      constructor() {
        return ConjureChatStore.hasLoadedHistory(closure_0);
      }
    }
    const items3 = [arg0];
    cResult[5] = arg0;
    cResult[6] = C;
    cResult[7] = items3;
    tmp13 = items3;
    tmp12 = C;
  } else {
    class C {
      constructor() {
        return ConjureChatStore.hasLoadedHistory(closure_0);
      }
    }
    tmp13 = cResult[7];
  }
  const tmpResult4 = require("get initialized");
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp10, tmp12, tmp13);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        return ConjureChatStore.hasLoadedHistory(closure_0);
      }
    }
    const items4 = [ConjureChatStore];
    cResult[8] = items4;
    tmp15 = items4;
  } else {
    class C {
      constructor() {
        return ConjureChatStore.hasLoadedHistory(closure_0);
      }
    }
  }
  if (cResult[9] !== arg0) {
    class C {
      constructor() {
        return ConjureChatStore.hasLoadedHistory(closure_0);
      }
    }
    const items5 = [arg0];
    cResult[9] = arg0;
    cResult[10] = tmp18;
    cResult[11] = items5;
    tmp17 = items5;
    tmp16 = tmp18;
  } else {
    class C {
      constructor() {
        return ConjureChatStore.hasLoadedHistory(closure_0);
      }
    }
    tmp17 = cResult[11];
  }
  const tmpResult5 = require("get initialized");
  const stateFromStores2 = tmpResult5.useStateFromStores(tmp15, tmp16, tmp17);
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        return ConjureChatStore.hasLoadedHistory(closure_0);
      }
    }
    const items6 = [ConjureConnectionStore];
    cResult[12] = items6;
    tmp20 = items6;
  } else {
    class C {
      constructor() {
        return ConjureChatStore.hasLoadedHistory(closure_0);
      }
    }
  }
  if (cResult[13] !== arg0) {
    class L {
      constructor() {
        return ConjureConnectionStore.getConnState(closure_0);
      }
    }
    const items7 = [arg0];
    cResult[13] = arg0;
    cResult[14] = L;
    cResult[15] = items7;
    tmp22 = items7;
    tmp21 = L;
  } else {
    class L {
      constructor() {
        return ConjureConnectionStore.getConnState(closure_0);
      }
    }
    tmp22 = cResult[15];
  }
  const tmpResult6 = require("get initialized");
  const stateFromStores3 = tmpResult6.useStateFromStores(tmp20, tmp21, tmp22);
  [r10100, dependencyMap] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  if (cResult[16] !== arg0) {
    class L {
      constructor() {
        return ConjureConnectionStore.getConnState(closure_0);
      }
    }
    cResult[16] = arg0;
    cResult[17] = tmp26;
  } else {
    class L {
      constructor() {
        return ConjureConnectionStore.getConnState(closure_0);
      }
    }
  }
  if (cResult[18] === stateFromStores3) {
    class L {
      constructor() {
        return ConjureConnectionStore.getConnState(closure_0);
      }
    }
  }
  const items8 = [arg0, stateFromStores, stateFromStores1, stateFromStores2, tmp4, stateFromStores3];
  cResult[18] = stateFromStores3;
  cResult[19] = stateFromStores1;
  cResult[20] = stateFromStores2;
  cResult[21] = arg0;
  cResult[22] = stateFromStores;
  cResult[23] = tmp4;
  cResult[24] = items8;
}) : (function useConjureHeldPrompt(arg0) {
  let closure_0;
  let closure_1;
  let first;
  _require = arg0;
  const tmp = closure_7(arg0);
  let obj = require("get initialized");
  const items = [ConjureProjectStore];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => null != ConjureProjectStore.getProject(closure_0), items1);
  const items2 = [ConjureChatStore];
  const items3 = [arg0];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items2, () => ConjureChatStore.hasLoadedHistory(closure_0), items3);
  const items4 = [ConjureChatStore];
  const items5 = [arg0];
  const obj3 = require("get initialized");
  const stateFromStores2 = obj3.useStateFromStores(items4, () => ConjureChatStore.getMessages(closure_0), items5);
  const items6 = [ConjureConnectionStore];
  const items7 = [arg0];
  const obj4 = require("get initialized");
  const stateFromStores3 = obj4.useStateFromStores(items6, () => ConjureConnectionStore.getConnState(closure_0), items7);
  [first, dependencyMap] = react.useState(0);
  const items8 = [arg0, stateFromStores, stateFromStores1, stateFromStores2, tmp, stateFromStores3];
  const layoutEffect = react.useLayoutEffect(() => {
    const obj = conjureScopeSetup;
    const result = obj.reconcileHeldConjurePrompt(closure_0, () => closure_1_1((arg0) => arg0 + 1));
  }, items8);
  return first;
});
let result = size.fileFinishedImporting("modules/conjure/scope_setup/useConjureHeldPrompt.tsx");

export const useConjureScopeSetupPending = tmp2;
export const useConjureHeldPrompt = tmp3;
