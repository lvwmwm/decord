// Module ID: 7285
// Function ID: 7286
// Name: SceneLoadingIndicator
// Dependencies: [19, 17, 21, 4758, 558, 568, 5796, 7286, 2]

// Module 7285 (SceneLoadingIndicator)
import c from "c" /* 568 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 5796 */;
import NavScrim from "NavScrim" /* 7286 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4758);
let closure_5 = createStyles.createStyles({ loadingContainer: { flex: 1, paddingTop: 40 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/SceneLoadingIndicator.native.tsx");

export const SceneLoadingIndicator = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(4);
  const tmp4 = closure_5();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = React3(tmp(5796).ActivityIndicator, {});
    const tmp9 = React3(tmp(7286).NavScrim, {});
    cResult[0] = tmp8;
    cResult[1] = tmp9;
    tmp5 = tmp8;
    tmp6 = tmp9;
  } else {
    [tmp5, tmp6] = cResult;
  }
  if (cResult[2] !== tmp4.loadingContainer) {
    const obj2 = { style: tmp4.loadingContainer, children: null };
    const items = [tmp5, tmp6];
    obj2.children = items;
    const tmp13 = React4(View, obj2);
    cResult[2] = tmp4.loadingContainer;
    cResult[3] = tmp13;
    let tmp10 = tmp13;
  } else {
    tmp10 = cResult[3];
  }
  return tmp10;
}) : (() => {
  const obj = { style: closure_5().loadingContainer, children: null };
  const items = [React3(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}), React3(NavScrim.NavScrim, {})];
  obj.children = items;
  return React4(View, obj);
});
