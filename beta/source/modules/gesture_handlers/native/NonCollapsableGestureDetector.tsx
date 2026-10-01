// Module ID: 15999
// Function ID: 16000
// Name: NonCollapsableGestureDetector
// Dependencies: [109, 19, 17, 21, 6073, 2]
// Exports: NonCollapsableGestureDetector

// Module 15999 (NonCollapsableGestureDetector)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6073 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_2 = ["children"];
const View = react_native.View;
const jsx = Fragment.jsx;
const style = { flex: 1 };
const result = size.fileFinishedImporting("modules/gesture_handlers/native/NonCollapsableGestureDetector.tsx");

export const NonCollapsableGestureDetector = function NonCollapsableGestureDetector(children) {
  children = children.children;
  const tmp = _objectWithoutProperties(children, closure_2);
  const GestureDetector = LegacyBaseButton.GestureDetector;
  const merged = Object.assign(tmp);
  return <GestureDetector><View style={style} collapsable={false}>{children}</View></GestureDetector>;
};
