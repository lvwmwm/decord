// Module ID: 5525
// Function ID: 47083
// Name: PanGestureHandler
// Dependencies: [31, 33, 5526, 5217]
// Exports: PanGestureHandler

// Module 5525 (PanGestureHandler)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;

export const PanGestureHandler = function PanGestureHandler(arg0) {
  const ref = React.useRef(null);
  const obj = { value: ref, children: jsx(require(5217) /* Directions */.PanGestureHandler, Object.assign({}, arg0, { ref })) };
  return jsx(importDefault(5526).Provider, { value: ref, children: jsx(require(5217) /* Directions */.PanGestureHandler, Object.assign({}, arg0, { ref })) });
};
export const GestureHandlerRootView = require("Directions").GestureHandlerRootView;
export const GestureState = require("Directions").State;
