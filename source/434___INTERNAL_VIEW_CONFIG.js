// Module ID: 434
// Function ID: 435
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [106, 65]

// Module 434 (__INTERNAL_VIEW_CONFIG)
import weakSet from "weakSet";
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

let obj = { uiViewClassName: "VirtualView", directEventTypes: { topModeChange: { registrationName: "onModeChange" } }, validAttributes: null };
obj = { initialHidden: true, removeClippedSubviews: true, renderState: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onModeChange: true }));
obj[2] = obj;

export default setRuntimeConfigProvider.get("VirtualView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
