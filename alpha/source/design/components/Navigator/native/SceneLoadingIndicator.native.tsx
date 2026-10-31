// Module ID: 7208
// Function ID: 7209
// Name: SceneLoadingIndicator
// Dependencies: [19, 17, 21, 5014, 6953, 5606, 2]
// Exports: SceneLoadingIndicator

// Module 7208 (SceneLoadingIndicator)
import react_native from "react-native" /* 17 */;
import NavScrim from "NavScrim" /* 5606 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 6953 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles({ loadingContainer: { flex: 1, paddingTop: 40 } });
const result = size.fileFinishedImporting("design/components/Navigator/native/SceneLoadingIndicator.native.tsx");

export function SceneLoadingIndicator() {
  let items;
  const obj = { style: closure_5().loadingContainer, children: items };
  items = [_false(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}), _false(NavScrim.NavScrim, {})];
  return React3(View, obj);
}
