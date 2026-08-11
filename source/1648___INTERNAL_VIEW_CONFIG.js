// Module ID: 1648
// Function ID: 1649
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [65]

// Module 1648 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "KeyboardBackgroundView", validAttributes: {} };

export default setRuntimeConfigProvider.get("KeyboardBackgroundView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
