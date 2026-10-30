// Module ID: 7169
// Function ID: 7170
// Dependencies: [19, 21, 7170, 5298]
// Exports: PanGestureHandler

// Module 7169
import Fragment from "Fragment" /* 21 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5298 */;
import react2 from "react" /* 7170 */;
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
