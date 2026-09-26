// Module ID: 16001
// Function ID: 16002
// Name: NonCollapsableGestureDetector
// Dependencies: [109, 19, 17, 21, 6073, 2]
// Exports: NonCollapsableGestureDetector

// Module 16001 (NonCollapsableGestureDetector)
import LegacyBaseButton from "LegacyBaseButton" /* 6073 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["children"];
const View = fn(17).View;
const jsx = fn(21).jsx;
const style = { flex: 1 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/gesture_handlers/native/NonCollapsableGestureDetector.tsx");

export const NonCollapsableGestureDetector = function NonCollapsableGestureDetector(children) {
  const obj = {};
  const merged = Object.assign(_objectWithoutProperties(children, closure_2));
  obj.children = <View style={style} collapsable={false}>{arg0.children}</View>;
  return jsx(LegacyBaseButton.GestureDetector, {});
};
