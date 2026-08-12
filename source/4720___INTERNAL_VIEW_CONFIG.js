// Module ID: 4720
// Function ID: 4721
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [17, 65]

// Module 4720 (__INTERNAL_VIEW_CONFIG)
import { codegenNativeComponent } from "get ActivityIndicator";
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "RNSScreenContentWrapper", validAttributes: {} };

export default setRuntimeConfigProvider.get("RNSScreenContentWrapper", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
