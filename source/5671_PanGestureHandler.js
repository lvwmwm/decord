// Module ID: 5671
// Function ID: 5672
// Name: PanGestureHandler
// Dependencies: [19, 21, 5672, 5368]
// Exports: PanGestureHandler

// Module 5671 (PanGestureHandler)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;

export const PanGestureHandler = function PanGestureHandler(arg0) {
  const ref = React.useRef(null);
  let obj = { value: ref, children: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj.ref = ref;
  obj[1] = jsx(require(5368) /* Directions */.PanGestureHandler, {});
  return jsx(importDefault(5672).Provider, {});
};
export const GestureHandlerRootView = require("Directions").GestureHandlerRootView;
export const GestureState = require("Directions").State;
