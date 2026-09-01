// Module ID: 4888
// Function ID: 4889
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [17, 65]

// Module 4888 (__INTERNAL_VIEW_CONFIG)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

const codegenNativeComponent = get_ActivityIndicator.codegenNativeComponent;
const obj = { uiViewClassName: "RNSScreenContainer", validAttributes: {} };

export default setRuntimeConfigProvider.get("RNSScreenContainer", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
