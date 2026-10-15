// Module ID: 6914
// Function ID: 6915
// Dependencies: [19, 21, 6915, 6555]
// Exports: PanGestureHandler

// Module 6914
import Fragment from "Fragment" /* 21 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6555 */;
import react2 from "react" /* 6915 */;
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
