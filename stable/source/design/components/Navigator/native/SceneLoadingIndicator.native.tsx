// Module ID: 7316
// Function ID: 7317
// Name: SceneLoadingIndicator
// Dependencies: [19, 17, 21, 4788, 5826, 7317, 2]
// Exports: SceneLoadingIndicator

// Module 7316 (SceneLoadingIndicator)
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 5826 */;
import NavScrim from "NavScrim" /* 7317 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4788);
let closure_5 = createStyles.createStyles({ loadingContainer: { flex: 1, paddingTop: 40 } });
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/SceneLoadingIndicator.native.tsx");

export const SceneLoadingIndicator = function SceneLoadingIndicator() {
  const obj = { style: closure_5().loadingContainer, children: null };
  const items = [React3(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}), React3(NavScrim.NavScrim, {})];
  obj.children = items;
  return React4(View, obj);
};
