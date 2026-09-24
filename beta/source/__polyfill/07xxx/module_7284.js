// Module ID: 7284
// Function ID: 7285
// Dependencies: [19, 21, 7285, 6923]
// Exports: PanGestureHandler

// Module 7284
import LegacyBaseButton from "LegacyBaseButton" /* 6923 */;
import GestureHandlerRefContext from "GestureHandlerRefContext" /* 7285 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export const PanGestureHandler = function PanGestureHandler(arg0) {
  const ref = noop.useRef(null);
  const obj = { value: ref, children: null };
  const obj2 = {};
  const merged = Object.assign(arg0);
  obj2.ref = ref;
  obj.children = jsx(LegacyBaseButton.PanGestureHandler, {});
  return jsx(GestureHandlerRefContext.GestureHandlerRefContext.Provider, { value: ref, children: null });
};
export const GestureHandlerRootView = fn(6923).GestureHandlerRootView;
export const GestureState = fn(6923).State;
