// Module ID: 12643
// Function ID: 12644
// Name: useConjureTurnTraceId
// Dependencies: [10857, 12543, 10852, 504, 2]
// Exports: default

// Module 12643 (useConjureTurnTraceId)
import ConjureDebugStore from "ConjureDebugStore" /* 10857 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, spans;

const result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/useConjureTurnTraceId.tsx");

export default function useConjureTurnTraceId(arg0, role) {
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
      const tmpResult = tmp(turn_id[2]);
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
  const tmpResult2 = tmp(turn_id[3]);
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
};
