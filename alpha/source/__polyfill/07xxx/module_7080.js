// Module ID: 7080
// Function ID: 7081
// Dependencies: [19, 21, 7081, 5279]
// Exports: PanGestureHandler

// Module 7080
import Fragment from "Fragment" /* 21 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5279 */;
import react2 from "react" /* 7081 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export const PanGestureHandler = function PanGestureHandler(arg0) {
  const ref = react.useRef(null);
  const Provider = react2.GestureHandlerRefContext.Provider;
  LegacyBaseButton.PanGestureHandler;
  const merged = Object.assign(arg0);
  return <Provider value={ref}>{null}</Provider>;
};
export const GestureHandlerRootView = LegacyBaseButton.GestureHandlerRootView;
export const GestureState = LegacyBaseButton.State;
