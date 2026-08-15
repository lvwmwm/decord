// Module ID: 6375
// Function ID: 6376
// Name: PanGestureHandler
// Dependencies: [19, 21, 6376, 6377]
// Exports: PanGestureHandler

// Module 6375 (PanGestureHandler)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;

export const PanGestureHandler = function PanGestureHandler(arg0) {
  const ref = React.useRef(null);
  let obj = { value: ref, children: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj.ref = ref;
  obj[1] = jsx(require(6377) /* LegacyBaseButton */.PanGestureHandler, {});
  return jsx(require(6376) /* GestureHandlerRefContext */.GestureHandlerRefContext.Provider, {});
};
export const GestureHandlerRootView = require("LegacyBaseButton").GestureHandlerRootView;
export const GestureState = require("LegacyBaseButton").State;
