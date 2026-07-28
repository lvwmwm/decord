// Module ID: 5558
// Function ID: 47213
// Name: PanGestureHandler
// Dependencies: [31, 33, 5559, 5251]
// Exports: PanGestureHandler

// Module 5558 (PanGestureHandler)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;

export const PanGestureHandler = function PanGestureHandler(arg0) {
  const ref = React.useRef(null);
  const obj = { value: ref, children: jsx(require(5251) /* Directions */.PanGestureHandler, Object.assign({}, arg0, { ref })) };
  return jsx(importDefault(5559).Provider, { value: ref, children: jsx(require(5251) /* Directions */.PanGestureHandler, Object.assign({}, arg0, { ref })) });
};
export const GestureHandlerRootView = require("Directions").GestureHandlerRootView;
export const GestureState = require("Directions").State;
