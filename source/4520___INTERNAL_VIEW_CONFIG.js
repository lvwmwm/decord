// Module ID: 4520
// Function ID: 39757
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [27, 110, 42]

// Module 4520 (__INTERNAL_VIEW_CONFIG)
import { codegenNativeComponent } from "get ActivityIndicator";
import weakSet from "weakSet";
import get from "get";

const obj = { uiViewClassName: "RNSTabsBottomAccessory", directEventTypes: { topEnvironmentChange: { registrationName: "onEnvironmentChange" } } };
obj.validAttributes = Object.assign({}, weakSet.ConditionallyIgnoredEventHandlers({ onEnvironmentChange: true }));

export default get.get("RNSTabsBottomAccessory", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
