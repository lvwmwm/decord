// Module ID: 18421
// Function ID: 18422
// Name: NonCollapsableGestureDetector
// Dependencies: [109, 19, 17, 21, 5303, 2]
// Exports: NonCollapsableGestureDetector

// Module 18421 (NonCollapsableGestureDetector)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5303 */;
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
