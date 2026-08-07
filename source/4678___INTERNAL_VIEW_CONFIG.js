// Module ID: 4678
// Function ID: 4679
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [17, 65]

// Module 4678 (__INTERNAL_VIEW_CONFIG)
import { codegenNativeComponent } from "get ActivityIndicator";
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "RNSScreenContentWrapper", validAttributes: {} };

export default setRuntimeConfigProvider.get("RNSScreenContentWrapper", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
