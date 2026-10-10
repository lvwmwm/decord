// Module ID: 17218
// Function ID: 17219
// Name: useConjureTurnTraceId
// Dependencies: [12996, 13214, 558, 576, 17124, 504, 2]

// Module 17218 (useConjureTurnTraceId)
import ConjureChatStore from "ConjureChatStore" /* 12996 */;
import ConjureDebugStore from "ConjureDebugStore" /* 13214 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, spans, tmp3;

const turnSettled = ConjureChatStore.turnSettled;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureTurnTraceId(arg0, role) {
  let closure_0;
  let closure_1;
  _require = arg0;
  let tmp = _require;
  const obj = require("react");
  const cResult = obj.c(9);
  const obj2 = require("useConjureDebugAccess");
  const conjureDebugPaneEnabled = obj2.useConjureDebugPaneEnabled();
  const obj3 = require("useConjureDebugAccess");
  const conjureTraceTabEnabled = obj3.useConjureTraceTabEnabled();
  if (cResult[0] === role) {
    if (cResult[1] === conjureDebugPaneEnabled) {
      let tmp6;
      let tmp12;
      if (cResult[2] === conjureTraceTabEnabled) {
        tmp6 = cResult[3];
      }
      dependencyMap = tmp6;
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConjureDebugStore];
        cResult[4] = items;
        tmp12 = items;
      } else {
        tmp12 = cResult[4];
      }
      if (cResult[5] === arg0) {
        let tmp14;
        let tmp15;
        if (cResult[6] === tmp6) {
          tmp14 = cResult[7];
          tmp15 = cResult[8];
        }
        const tmpResult = tmp(504);
        return tmpResult.useStateFromStores(tmp12, tmp14, tmp15);
      }
      class T {
        constructor() {
          findLastResult = null;
          if (null != closure_1) {
            tmp2 = closure_3;
            tmp3 = closure_0;
            timingTraces = closure_3.getTimingTraces(closure_0);
            findLastResult = timingTraces.findLast((spans) => {
              spans = spans.spans;
              let tmp = "turn" === spans.name;
              if (tmp) {
                const found = spans.find(() => { /* body not rendered: F156046 */ });
                let turn_id;
                if (found != null) {
                  const attrs = found.attrs;
                  if (attrs != null) {
                    turn_id = attrs.turn_id;
                  }
                }
                tmp = turn_id === closure_1_1;
              }
              return tmp;
            });
          }
          id = null;
          if (null != findLastResult) {
            id = null;
            if (!findLastResult.live) {
              id = findLastResult.id;
            }
          }
          return id;
        }
      }
      const items1 = [arg0, tmp6];
      cResult[5] = arg0;
      cResult[6] = tmp6;
      cResult[7] = T;
      cResult[8] = items1;
      tmp15 = items1;
      tmp14 = T;
    }
  }
  let tmp7 = null;
  if (conjureDebugPaneEnabled) {
    tmp7 = null;
    if (conjureTraceTabEnabled) {
      tmp7 = null;
      if ("assistant" === role.role) {
        tmp7 = null;
        if (turnSettled(role)) {
          let turn_id = role.turn_id;
          if (turn_id == null) {
            const steps = role.steps;
            let found = steps.find((turn_id) => null != turn_id.turn_id);
            let turn_id1;
            if (found != null) {
              turn_id1 = found.turn_id;
            }
            turn_id = turn_id1;
          }
          if (turn_id == null) {
            const str2 = role.id;
            turn_id = str2.replace(/^turn:/, "");
          }
          tmp7 = turn_id;
        }
      }
    }
  }
  cResult[0] = role;
  cResult[1] = conjureDebugPaneEnabled;
  cResult[2] = conjureTraceTabEnabled;
  cResult[3] = tmp7;
  tmp6 = tmp7;
}) : (function useConjureTurnTraceId(arg0, role) {
  let closure_0;
  let turn_id;
  _require = arg0;
  let tmp = _require;
  const obj = require("useConjureDebugAccess");
  const conjureDebugPaneEnabled = obj.useConjureDebugPaneEnabled();
  require("useConjureDebugAccess");
  let tmp6 = null;
  const tmp2 = turn_id;
  if (conjureDebugPaneEnabled) {
    tmp6 = null;
    if (tmp5) {
      tmp6 = null;
      if ("assistant" === role.role) {
        tmp6 = null;
        if (turnSettled(role)) {
          turn_id = role.turn_id;
          if (turn_id == null) {
            const steps = role.steps;
            let found = steps.find((turn_id) => null != turn_id.turn_id);
            let turn_id1;
            if (found != null) {
              turn_id1 = found.turn_id;
            }
            turn_id = turn_id1;
          }
          if (turn_id == null) {
            const str2 = role.id;
            turn_id = str2.replace(/^turn:/, "");
          }
          tmp6 = turn_id;
        }
      }
    }
  }
  turn_id = tmp6;
  const items = [ConjureDebugStore];
  const items1 = [arg0, tmp6];
  const tmpResult = tmp(tmp2[5]);
  return tmpResult.useStateFromStores(items, () => {
    let findLastResult = null;
    if (null != turn_id) {
      const timingTraces = ConjureDebugStore.getTimingTraces(closure_0);
      findLastResult = timingTraces.findLast((spans) => {
        spans = spans.spans;
        let tmp = "turn" === spans.name;
        if (tmp) {
          const found = spans.find((parent) => null == parent.parent);
          turn_id = undefined;
          if (found != null) {
            const attrs = found.attrs;
            if (attrs != null) {
              turn_id = attrs.turn_id;
            }
          }
          tmp = turn_id === closure_1_1;
        }
        return tmp;
      });
    }
    let id = null;
    if (null != findLastResult) {
      id = null;
      if (!findLastResult.live) {
        id = findLastResult.id;
      }
    }
    return id;
  }, items1);
});
const result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/useConjureTurnTraceId.tsx");

export default tmp2;
