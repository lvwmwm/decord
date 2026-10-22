// Module ID: 7086
// Function ID: 7087
// Dependencies: [19, 21, 7087, 5283]
// Exports: PanGestureHandler

// Module 7086
import Fragment from "Fragment" /* 21 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5283 */;
import react2 from "react" /* 7087 */;
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
