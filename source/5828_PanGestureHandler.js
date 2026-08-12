// Module ID: 5828
// Function ID: 5829
// Name: PanGestureHandler
// Dependencies: [19, 21, 5829, 5466]
// Exports: PanGestureHandler

// Module 5828 (PanGestureHandler)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;

export const PanGestureHandler = function PanGestureHandler(arg0) {
  const ref = React.useRef(null);
  let obj = { value: ref, children: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj.ref = ref;
  obj[1] = jsx(require(5466) /* LegacyBaseButton */.PanGestureHandler, {});
  return jsx(require(5829) /* GestureHandlerRefContext */.GestureHandlerRefContext.Provider, {});
};
export const GestureHandlerRootView = require("LegacyBaseButton").GestureHandlerRootView;
export const GestureState = require("LegacyBaseButton").State;
