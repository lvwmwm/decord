// Module ID: 6692
// Function ID: 6693
// Dependencies: [19, 21, 6693, 6333]
// Exports: PanGestureHandler

// Module 6692
import Fragment from "Fragment" /* 21 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6333 */;
import react2 from "react" /* 6693 */;
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
