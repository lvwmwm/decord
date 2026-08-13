// Module ID: 5829
// Function ID: 5830
// Name: PanGestureHandler
// Dependencies: [19, 21, 5830, 5467]
// Exports: PanGestureHandler

// Module 5829 (PanGestureHandler)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;

export const PanGestureHandler = function PanGestureHandler(arg0) {
  const ref = React.useRef(null);
  let obj = { value: ref, children: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj.ref = ref;
  obj[1] = jsx(require(5467) /* LegacyBaseButton */.PanGestureHandler, {});
  return jsx(require(5830) /* GestureHandlerRefContext */.GestureHandlerRefContext.Provider, {});
};
export const GestureHandlerRootView = require("LegacyBaseButton").GestureHandlerRootView;
export const GestureState = require("LegacyBaseButton").State;
