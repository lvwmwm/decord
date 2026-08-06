// Module ID: 1626
// Function ID: 1627
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [65]

// Module 1626 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "KeyboardGestureArea", validAttributes: { interpolator: true, showOnSwipeUp: true, enableSwipeToDismiss: true, offset: true, textInputNativeID: true } };

export default setRuntimeConfigProvider.get("KeyboardGestureArea", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
