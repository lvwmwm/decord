// Module ID: 18211
// Function ID: 18212
// Name: useTrialActiveUserLimitOptions
// Dependencies: [19, 558, 568, 1119, 2]

// Module 18211 (useTrialActiveUserLimitOptions)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useTrialActiveUserLimitOptions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { value: null, label: null };
    const intl = tmp(1119).intl;
    obj2.label = intl.string(tmp(1119).t.zHfL6o);
    const items = [obj2, { value: 10, label: "10" }, { value: 25, label: "25" }, { value: 50, label: "50" }, { value: 100, label: "100" }];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => noop.useMemo(() => {
  const obj = { value: null, label: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.zHfL6o);
  const items = [obj, { value: 10, label: "10" }, { value: 25, label: "25" }, { value: 50, label: "50" }, { value: 100, label: "100" }];
  return items;
}, []));
