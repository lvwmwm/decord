// Module ID: 12833
// Function ID: 12834
// Name: useConjureDebugAgentState
// Dependencies: [19, 10808, 10814, 558, 576, 504, 10845, 2]

// Module 12833 (useConjureDebugAgentState)
import conjureDebugConnection from "conjureDebugConnection" /* 10845 */;
import react from "react" /* 19 */;
import ConjureChatStore from "ConjureChatStore" /* 10808 */;
import ConjureDebugStore from "ConjureDebugStore" /* 10814 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureDebugAgentState(arg0, arg1) {
  let closure_0;
  let first;
  let tmp11;
  let tmp12;
  let tmp14;
  let tmp16;
  let tmp17;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp6;
  let tmp7;
  let tmp9;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(44);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureDebugStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      return ConjureDebugStore.getLastTurnUsage(closure_0);
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
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ConjureDebugStore];
    cResult[4] = items2;
    tmp9 = items2;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] !== arg0) {
    const fn2 = function p() {
      return ConjureDebugStore.getLastCompaction(closure_0);
    };
    const items3 = [arg0];
    cResult[5] = arg0;
    cResult[6] = fn2;
    cResult[7] = items3;
    tmp12 = items3;
    tmp11 = fn2;
  } else {
    tmp11 = cResult[6];
    tmp12 = cResult[7];
  }
  const tmpResult6 = require("get initialized");
  const stateFromStores1 = tmpResult6.useStateFromStores(tmp9, tmp11, tmp12);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [ConjureDebugStore];
    cResult[8] = items4;
    tmp14 = items4;
  } else {
    tmp14 = cResult[8];
  }
  if (cResult[9] !== arg0) {
    class F {
      constructor() {
        return ConjureDebugStore.getLastCompactionDecline(closure_0);
      }
    }
    const items5 = [arg0];
    cResult[9] = arg0;
    cResult[10] = F;
    cResult[11] = items5;
    tmp17 = items5;
    tmp16 = F;
  } else {
    class F {
      constructor() {
        return ConjureDebugStore.getLastCompactionDecline(closure_0);
      }
    }
    tmp17 = cResult[11];
  }
  const tmpResult7 = require("get initialized");
  const stateFromStores2 = tmpResult7.useStateFromStores(tmp14, tmp16, tmp17);
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor() {
        return ConjureDebugStore.getLastCompactionDecline(closure_0);
      }
    }
    const items6 = [ConjureDebugStore];
    cResult[12] = items6;
    tmp19 = items6;
  } else {
    class F {
      constructor() {
        return ConjureDebugStore.getLastCompactionDecline(closure_0);
      }
    }
  }
  if (cResult[13] !== arg0) {
    class F {
      constructor() {
        return ConjureDebugStore.getLastCompactionDecline(closure_0);
      }
    }
    const items7 = [arg0];
    cResult[13] = arg0;
    cResult[14] = tmp22;
    cResult[15] = items7;
    tmp21 = items7;
    tmp20 = tmp22;
  } else {
    class F {
      constructor() {
        return ConjureDebugStore.getLastCompactionDecline(closure_0);
      }
    }
    tmp21 = cResult[15];
  }
  const tmpResult8 = require("get initialized");
  const stateFromStores3 = tmpResult8.useStateFromStores(tmp19, tmp20, tmp21);
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor() {
        return ConjureDebugStore.getLastCompactionDecline(closure_0);
      }
    }
    const items8 = [ConjureDebugStore];
    cResult[16] = items8;
    tmp24 = items8;
  } else {
    class F {
      constructor() {
        return ConjureDebugStore.getLastCompactionDecline(closure_0);
      }
    }
  }
  if (cResult[17] !== arg0) {
    class R {
      constructor() {
        return ConjureDebugStore.getSandboxRestartState(closure_0);
      }
    }
    const items9 = [arg0];
    cResult[17] = arg0;
    cResult[18] = R;
    cResult[19] = items9;
    tmp26 = items9;
    tmp25 = R;
  } else {
    class R {
      constructor() {
        return ConjureDebugStore.getSandboxRestartState(closure_0);
      }
    }
    tmp26 = cResult[19];
  }
  const tmpResult9 = require("get initialized");
  const stateFromStores4 = tmpResult9.useStateFromStores(tmp24, tmp25, tmp26);
  if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        return ConjureDebugStore.getSandboxRestartState(closure_0);
      }
    }
    const items10 = [ConjureChatStore];
    cResult[20] = items10;
    tmp28 = items10;
  } else {
    class R {
      constructor() {
        return ConjureDebugStore.getSandboxRestartState(closure_0);
      }
    }
  }
  if (cResult[21] !== arg0) {
    class A {
      constructor() {
        return ConjureChatStore.isThinking(closure_0);
      }
    }
    const items11 = [arg0];
    cResult[21] = arg0;
    cResult[22] = A;
    cResult[23] = items11;
    tmp30 = items11;
    tmp29 = A;
  } else {
    class A {
      constructor() {
        return ConjureChatStore.isThinking(closure_0);
      }
    }
    tmp30 = cResult[23];
  }
  const tmpResult10 = require("get initialized");
  const stateFromStores5 = tmpResult10.useStateFromStores(tmp28, tmp29, tmp30);
  if (cResult[24] !== arg0) {
    class W {
      constructor() {
        const obj = conjureDebugConnection;
        return obj.forceCompaction(closure_0);
      }
    }
    cResult[24] = arg0;
    cResult[25] = W;
  } else {
    class W {
      constructor() {
        const obj = conjureDebugConnection;
        return obj.forceCompaction(closure_0);
      }
    }
  }
  if (cResult[26] !== arg0) {
    class I {
      constructor() {
        const obj = conjureDebugConnection;
        return obj.forceCompaction(closure_0, true);
      }
    }
    cResult[26] = arg0;
    cResult[27] = I;
  } else {
    class I {
      constructor() {
        const obj = conjureDebugConnection;
        return obj.forceCompaction(closure_0, true);
      }
    }
  }
  if (cResult[28] !== arg0) {
    class P {
      constructor() {
        const obj = conjureDebugConnection;
        return obj.restartConjureSandbox(closure_0);
      }
    }
    cResult[28] = arg0;
    cResult[29] = P;
  } else {
    class P {
      constructor() {
        const obj = conjureDebugConnection;
        return obj.restartConjureSandbox(closure_0);
      }
    }
  }
  if (arg1 != null) {
    class P {
      constructor() {
        const obj = conjureDebugConnection;
        return obj.restartConjureSandbox(closure_0);
      }
    }
    if (tmp36 != null) {
      class P {
        constructor() {
          const obj = conjureDebugConnection;
          return obj.restartConjureSandbox(closure_0);
        }
      }
    }
  }
  if (undefined == null) {
    class P {
      constructor() {
        const obj = conjureDebugConnection;
        return obj.restartConjureSandbox(closure_0);
      }
    }
  }
  if (arg1 != null) {
    class P {
      constructor() {
        const obj = conjureDebugConnection;
        return obj.restartConjureSandbox(closure_0);
      }
    }
    if (tmp38 != null) {
      class P {
        constructor() {
          const obj = conjureDebugConnection;
          return obj.restartConjureSandbox(closure_0);
        }
      }
    }
  }
  if (undefined == null) {
    class P {
      constructor() {
        const obj = conjureDebugConnection;
        return obj.restartConjureSandbox(closure_0);
      }
    }
  }
  if (arg1 != null) {
    class P {
      constructor() {
        const obj = conjureDebugConnection;
        return obj.restartConjureSandbox(closure_0);
      }
    }
    if (tmp40 != null) {
      class P {
        constructor() {
          const obj = conjureDebugConnection;
          return obj.restartConjureSandbox(closure_0);
        }
      }
    }
  }
  if (undefined == null) {
    class P {
      constructor() {
        const obj = conjureDebugConnection;
        return obj.restartConjureSandbox(closure_0);
      }
    }
  }
  let tmp41;
  if (stateFromStores1 != null) {
    class P {
      constructor() {
        const obj = conjureDebugConnection;
        return obj.restartConjureSandbox(closure_0);
      }
    }
  }
  if (tmp41 == null) {
    class P {
      constructor() {
        const obj = conjureDebugConnection;
        return obj.restartConjureSandbox(closure_0);
      }
    }
    if (undefined != null) {
      class P {
        constructor() {
          const obj = conjureDebugConnection;
          return obj.restartConjureSandbox(closure_0);
        }
      }
    }
    tmp41 = tmp42;
  }
  if (tmp41 == null) {
    class P {
      constructor() {
        const obj = conjureDebugConnection;
        return obj.restartConjureSandbox(closure_0);
      }
    }
  }
  if (cResult[30] === stateFromStores3) {
    class P {
      constructor() {
        const obj = conjureDebugConnection;
        return obj.restartConjureSandbox(closure_0);
      }
    }
  }
  const obj2 = { lastTurn: stateFromStores, lastCompaction: stateFromStores1, lastDecline: stateFromStores2, forceState: stateFromStores3, restartState: stateFromStores4, turnRunning: stateFromStores5, handleForceCompaction: tmp32, handleForceCompactionOverride: tmp33, handleRestartWorkspace: tmp34, lifetime: undefined, limits: undefined, session: undefined, contextCeiling: tmp41 };
  cResult[30] = stateFromStores3;
  cResult[31] = tmp32;
  cResult[32] = tmp33;
  cResult[33] = tmp34;
  cResult[34] = stateFromStores1;
  cResult[35] = stateFromStores2;
  cResult[36] = stateFromStores;
  cResult[37] = undefined;
  cResult[38] = stateFromStores4;
  cResult[39] = undefined;
  cResult[40] = undefined;
  cResult[41] = tmp41;
  cResult[42] = stateFromStores5;
  cResult[43] = obj2;
}) : (function useConjureDebugAgentState(arg0, agent) {
  let closure_0;
  let lifetime;
  let promptCeiling;
  let session;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ConjureDebugStore];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => ConjureDebugStore.getLastTurnUsage(closure_0), items1);
  const items2 = [ConjureDebugStore];
  const items3 = [arg0];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items2, () => ConjureDebugStore.getLastCompaction(closure_0), items3);
  const items4 = [ConjureDebugStore];
  const items5 = [arg0];
  const obj3 = require("get initialized");
  const stateFromStores2 = obj3.useStateFromStores(items4, () => ConjureDebugStore.getLastCompactionDecline(closure_0), items5);
  const items6 = [ConjureDebugStore];
  const items7 = [arg0];
  const obj4 = require("get initialized");
  const stateFromStores3 = obj4.useStateFromStores(items6, () => ConjureDebugStore.getForceCompactionState(closure_0), items7);
  const items8 = [ConjureDebugStore];
  const items9 = [arg0];
  const obj5 = require("get initialized");
  const stateFromStores4 = obj5.useStateFromStores(items8, () => ConjureDebugStore.getSandboxRestartState(closure_0), items9);
  const items10 = [ConjureChatStore];
  const items11 = [arg0];
  const items12 = [arg0];
  const obj6 = require("get initialized");
  const stateFromStores5 = obj6.useStateFromStores(items10, () => ConjureChatStore.isThinking(closure_0), items11);
  const items13 = [arg0];
  const callback = react.useCallback(() => {
    const obj = conjureDebugConnection;
    return obj.forceCompaction(closure_0);
  }, items12);
  const items14 = [arg0];
  const callback1 = react.useCallback(() => {
    const obj = conjureDebugConnection;
    return obj.forceCompaction(closure_0, true);
  }, items13);
  let limits;
  const callback2 = react.useCallback(() => {
    const obj = conjureDebugConnection;
    return obj.restartConjureSandbox(closure_0);
  }, items14);
  if (agent != null) {
    agent = agent.agent;
    if (agent != null) {
      limits = agent.limits;
    }
  }
  if (limits == null) {
    limits = null;
  }
  const obj7 = { lastTurn: stateFromStores, lastCompaction: stateFromStores1, lastDecline: stateFromStores2, forceState: stateFromStores3, restartState: stateFromStores4, turnRunning: stateFromStores5, handleForceCompaction: callback, handleForceCompactionOverride: callback1, handleRestartWorkspace: callback2, lifetime, limits, session, contextCeiling: promptCeiling };
  lifetime = undefined;
  if (agent != null) {
    const agent2 = agent.agent;
    if (agent2 != null) {
      lifetime = agent2.lifetime;
    }
  }
  if (lifetime == null) {
    lifetime = null;
  }
  session = undefined;
  if (agent != null) {
    const agent3 = agent.agent;
    if (agent3 != null) {
      session = agent3.session;
    }
  }
  if (session == null) {
    session = null;
  }
  promptCeiling = undefined;
  if (stateFromStores1 != null) {
    promptCeiling = stateFromStores1.promptCeiling;
  }
  if (promptCeiling == null) {
    let prop;
    if (limits != null) {
      prop = limits.context_window_tokens;
    }
    promptCeiling = prop;
  }
  if (promptCeiling == null) {
    promptCeiling = null;
  }
  return obj7;
});
const result = size.fileFinishedImporting("modules/conjure/debug/useConjureDebugAgentState.tsx");

export default tmp2;
