// Module ID: 5710
// Function ID: 5711
// Name: PanGestureHandler
// Dependencies: [19, 21, 5711, 5407]
// Exports: PanGestureHandler

// Module 5710 (PanGestureHandler)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;

export const PanGestureHandler = function PanGestureHandler(arg0) {
  const ref = React.useRef(null);
  let obj = { value: ref, children: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj.ref = ref;
  obj[1] = jsx(require(5407) /* Directions */.PanGestureHandler, {});
  return jsx(require(5711) /* GestureHandlerRefContext */.GestureHandlerRefContext.Provider, {});
};
export const GestureHandlerRootView = require("Directions").GestureHandlerRootView;
export const GestureState = require("Directions").State;
