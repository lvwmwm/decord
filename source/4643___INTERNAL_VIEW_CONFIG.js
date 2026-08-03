// Module ID: 4643
// Function ID: 4644
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [17, 106, 65]

// Module 4643 (__INTERNAL_VIEW_CONFIG)
import { codegenNativeComponent } from "get ActivityIndicator";
import weakSet from "weakSet";
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

let obj = { uiViewClassName: "RNSTabsBottomAccessory", directEventTypes: { topEnvironmentChange: { registrationName: "onEnvironmentChange" } }, validAttributes: null };
obj = {};
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onEnvironmentChange: true }));
obj[2] = obj;

export default setRuntimeConfigProvider.get("RNSTabsBottomAccessory", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
