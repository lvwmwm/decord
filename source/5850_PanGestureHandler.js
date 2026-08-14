// Module ID: 5850
// Function ID: 5851
// Name: PanGestureHandler
// Dependencies: [19, 21, 5851, 5488]
// Exports: PanGestureHandler

// Module 5850 (PanGestureHandler)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;

export const PanGestureHandler = function PanGestureHandler(arg0) {
  const ref = React.useRef(null);
  let obj = { value: ref, children: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj.ref = ref;
  obj[1] = jsx(require(5488) /* LegacyBaseButton */.PanGestureHandler, {});
  return jsx(require(5851) /* GestureHandlerRefContext */.GestureHandlerRefContext.Provider, {});
};
export const GestureHandlerRootView = require("LegacyBaseButton").GestureHandlerRootView;
export const GestureState = require("LegacyBaseButton").State;
