// Module ID: 6685
// Function ID: 6686
// Dependencies: [19, 21, 6686, 6326]
// Exports: PanGestureHandler

// Module 6685
import Fragment from "Fragment" /* 21 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6326 */;
import react2 from "react" /* 6686 */;
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
