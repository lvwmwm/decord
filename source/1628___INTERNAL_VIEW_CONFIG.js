// Module ID: 1628
// Function ID: 1629
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [65]

// Module 1628 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "OverKeyboardView", validAttributes: { visible: true } };

export default setRuntimeConfigProvider.get("OverKeyboardView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
