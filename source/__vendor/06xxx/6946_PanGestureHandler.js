// Module ID: 6946
// Function ID: 6947
// Name: PanGestureHandler
// Dependencies: [19, 21, 6947, 6595]
// Exports: PanGestureHandler

// Module 6946 (PanGestureHandler)
import LegacyBaseButton from "LegacyBaseButton" /* 6595 */;
import GestureHandlerRefContext from "GestureHandlerRefContext" /* 6947 */;
import closure_2 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;

export const PanGestureHandler = function PanGestureHandler(arg0) {
  const ref = React.useRef(null);
  let obj = { value: ref, children: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj.ref = ref;
  obj[1] = jsx(LegacyBaseButton.PanGestureHandler, {});
  return jsx(GestureHandlerRefContext.GestureHandlerRefContext.Provider, {});
};
export const GestureHandlerRootView = require("LegacyBaseButton").GestureHandlerRootView;
export const GestureState = require("LegacyBaseButton").State;
