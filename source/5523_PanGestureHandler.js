// Module ID: 5523
// Function ID: 47080
// Name: PanGestureHandler
// Dependencies: [31, 33, 5524, 5217]
// Exports: PanGestureHandler

// Module 5523 (PanGestureHandler)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;

export const PanGestureHandler = function PanGestureHandler(arg0) {
  const ref = React.useRef(null);
  const obj = { value: ref, children: jsx(require(5217) /* Directions */.PanGestureHandler, Object.assign({}, arg0, { ref })) };
  return jsx(importDefault(5524).Provider, { value: ref, children: jsx(require(5217) /* Directions */.PanGestureHandler, Object.assign({}, arg0, { ref })) });
};
export const GestureHandlerRootView = require("Directions").GestureHandlerRootView;
export const GestureState = require("Directions").State;
