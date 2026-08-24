// Module ID: 1635
// Function ID: 1636
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [106, 65]

// Module 1635 (__INTERNAL_VIEW_CONFIG)
import weakSet from "weakSet" /* 106 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

let obj = { uiViewClassName: "RNCSafeAreaProvider", directEventTypes: { topInsetsChange: { registrationName: "onInsetsChange" } }, validAttributes: null };
obj = {};
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onInsetsChange: true }));
obj[2] = obj;

export default setRuntimeConfigProvider.get("RNCSafeAreaProvider", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
