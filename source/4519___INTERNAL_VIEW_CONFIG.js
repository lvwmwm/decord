// Module ID: 4519
// Function ID: 39745
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [27, 110, 42]

// Module 4519 (__INTERNAL_VIEW_CONFIG)
import { codegenNativeComponent } from "get ActivityIndicator";
import weakSet from "weakSet";
import get from "get";

const obj = { uiViewClassName: "RNSTabsBottomAccessory", directEventTypes: { topEnvironmentChange: { registrationName: "onEnvironmentChange" } } };
obj.validAttributes = Object.assign({}, weakSet.ConditionallyIgnoredEventHandlers({ onEnvironmentChange: true }));

export default get.get("RNSTabsBottomAccessory", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
