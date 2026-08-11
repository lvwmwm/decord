// Module ID: 1645
// Function ID: 1646
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [65]

// Module 1645 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "KeyboardGestureArea", validAttributes: { interpolator: true, showOnSwipeUp: true, enableSwipeToDismiss: true, offset: true, textInputNativeID: true } };

export default setRuntimeConfigProvider.get("KeyboardGestureArea", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
