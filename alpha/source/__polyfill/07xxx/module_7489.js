// Module ID: 7489
// Function ID: 7490
// Dependencies: [19, 21, 7490, 5535]
// Exports: PanGestureHandler

// Module 7489
import Fragment from "Fragment" /* 21 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5535 */;
import react2 from "react" /* 7490 */;
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
