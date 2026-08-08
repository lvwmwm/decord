// Module ID: 5789
// Function ID: 5790
// Name: PanGestureHandler
// Dependencies: [19, 21, 5790, 5427]
// Exports: PanGestureHandler

// Module 5789 (PanGestureHandler)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;

export const PanGestureHandler = function PanGestureHandler(arg0) {
  const ref = React.useRef(null);
  let obj = { value: ref, children: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj.ref = ref;
  obj[1] = jsx(require(5427) /* LegacyBaseButton */.PanGestureHandler, {});
  return jsx(require(5790) /* GestureHandlerRefContext */.GestureHandlerRefContext.Provider, {});
};
export const GestureHandlerRootView = require("LegacyBaseButton").GestureHandlerRootView;
export const GestureState = require("LegacyBaseButton").State;
