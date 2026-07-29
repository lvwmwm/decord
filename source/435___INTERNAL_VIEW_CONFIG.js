// Module ID: 435
// Function ID: 436
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [106, 65]

// Module 435 (__INTERNAL_VIEW_CONFIG)
import weakSet from "weakSet";
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

let obj = { uiViewClassName: "VirtualViewExperimental", directEventTypes: { topModeChange: { registrationName: "onModeChange" } }, validAttributes: null };
obj = { initialHidden: true, removeClippedSubviews: true, renderState: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onModeChange: true }));
obj[2] = obj;

export default setRuntimeConfigProvider.get("VirtualViewExperimental", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
