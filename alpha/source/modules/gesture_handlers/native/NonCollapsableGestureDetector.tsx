// Module ID: 18378
// Function ID: 18379
// Name: NonCollapsableGestureDetector
// Dependencies: [109, 19, 17, 21, 5298, 2]
// Exports: NonCollapsableGestureDetector

// Module 18378 (NonCollapsableGestureDetector)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5298 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_2 = ["children"];
const View = react_native.View;
const jsx = Fragment.jsx;
const style = { flex: 1 };
const result = size.fileFinishedImporting("modules/gesture_handlers/native/NonCollapsableGestureDetector.tsx");

export function NonCollapsableGestureDetector(children) {
  children = children.children;
  const tmp = _objectWithoutProperties(children, closure_2);
  const GestureDetector = LegacyBaseButton.GestureDetector;
  const merged = Object.assign(tmp);
  return <GestureDetector><View style={style} collapsable={false}>{children}</View></GestureDetector>;
}
