// Module ID: 5729
// Function ID: 5730
// Name: PanGestureHandler
// Dependencies: [19, 21, 5730, 5426]
// Exports: PanGestureHandler

// Module 5729 (PanGestureHandler)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;

export const PanGestureHandler = function PanGestureHandler(arg0) {
  const ref = React.useRef(null);
  let obj = { value: ref, children: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj.ref = ref;
  obj[1] = jsx(require(5426) /* Directions */.PanGestureHandler, {});
  return jsx(require(5730) /* GestureHandlerRefContext */.GestureHandlerRefContext.Provider, {});
};
export const GestureHandlerRootView = require("Directions").GestureHandlerRootView;
export const GestureState = require("Directions").State;
