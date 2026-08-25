// Module ID: 4782
// Function ID: 4783
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [17, 65]

// Module 4782 (__INTERNAL_VIEW_CONFIG)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

const codegenNativeComponent = get_ActivityIndicator.codegenNativeComponent;
const obj = { uiViewClassName: "RNSScreenContentWrapper", validAttributes: {} };

export default setRuntimeConfigProvider.get("RNSScreenContentWrapper", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
