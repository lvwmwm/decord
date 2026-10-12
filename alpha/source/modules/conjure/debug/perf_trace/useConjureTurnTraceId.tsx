// Module ID: 17206
// Function ID: 17207
// Name: useConjureTurnTraceId
// Dependencies: [13219, 558, 576, 17163, 12999, 504, 2]

// Module 17206 (useConjureTurnTraceId)
import ConjureDebugStore from "ConjureDebugStore" /* 13219 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, spans;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureTurnTraceId(arg0, role) {
  let closure_0;
  let closure_1;
  _require = arg0;
  let tmp = _require;
  const obj = require("react");
  const cResult = obj.c(8);
  const obj2 = require("useConjureDebugAccess");
  const conjureTraceTabEnabled = obj2.useConjureTraceTabEnabled();
  if (cResult[0] === role) {
    let tmp5;
    let tmp10;
    if (cResult[1] === conjureTraceTabEnabled) {
      tmp5 = cResult[2];
    }
    dependencyMap = tmp5;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [ConjureDebugStore];
      cResult[3] = items;
      tmp10 = items;
    } else {
      tmp10 = cResult[3];
    }
    if (cResult[4] === arg0) {
      let tmp12;
      let tmp13;
      if (cResult[5] === tmp5) {
        tmp12 = cResult[6];
        tmp13 = cResult[7];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(tmp10, tmp12, tmp13);
    }
    const fn = function _() {
      let findLastResult = null;
      if (null != closure_1) {
        const timingTraces = ConjureDebugStore.getTimingTraces(closure_0);
        findLastResult = timingTraces.findLast((spans) => {
          spans = spans.spans;
          let tmp = "turn" === spans.name;
          if (tmp) {
            const found = spans.find((parent) => null == parent.parent);
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
      let id = null;
      if (null != findLastResult) {
        id = null;
        if (!findLastResult.live) {
          id = findLastResult.id;
        }
      }
      return id;
    };
    const items1 = [arg0, tmp5];
    cResult[4] = arg0;
    cResult[5] = tmp5;
    cResult[6] = fn;
    cResult[7] = items1;
    tmp13 = items1;
    tmp12 = fn;
  }
  let tmp6 = null;
  if (conjureTraceTabEnabled) {
    tmp6 = null;
    if ("assistant" === role.role) {
      tmp6 = null;
      const tmpResult2 = tmp(12999);
      if (tmpResult2.turnSettled(role)) {
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
        tmp6 = turn_id;
      }
    }
  }
  cResult[0] = role;
  cResult[1] = conjureTraceTabEnabled;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function useConjureTurnTraceId(arg0, role) {
  let closure_0;
  let turn_id;
  _require = arg0;
  let tmp = _require;
  let tmp3 = null;
  const obj = require("useConjureDebugAccess");
  if (obj.useConjureTraceTabEnabled()) {
    tmp3 = null;
    if ("assistant" === role.role) {
      tmp3 = null;
      const tmpResult = tmp(turn_id[4]);
      if (tmpResult.turnSettled(role)) {
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
        tmp3 = turn_id;
      }
    }
  }
  turn_id = tmp3;
  const items = [ConjureDebugStore];
  const items1 = [arg0, tmp3];
  const tmpResult2 = tmp(turn_id[5]);
  return tmpResult2.useStateFromStores(items, () => {
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
