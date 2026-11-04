// Module ID: 7175
// Function ID: 7176
// Dependencies: [19, 21, 7176, 5303]
// Exports: PanGestureHandler

// Module 7175
import Fragment from "Fragment" /* 21 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5303 */;
import react2 from "react" /* 7176 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export function PanGestureHandler(arg0) {
  const ref = react.useRef(null);
  const Provider = react2.GestureHandlerRefContext.Provider;
  LegacyBaseButton.PanGestureHandler;
  const merged = Object.assign(arg0);
  return <Provider value={ref}>{null}</Provider>;
}
export const GestureHandlerRootView = LegacyBaseButton.GestureHandlerRootView;
export const GestureState = LegacyBaseButton.State;
