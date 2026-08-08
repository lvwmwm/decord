// Module ID: 4673
// Function ID: 4674
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [17, 65]

// Module 4673 (__INTERNAL_VIEW_CONFIG)
import { codegenNativeComponent } from "get ActivityIndicator";
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "RNSScreenContainer", validAttributes: {} };

export default setRuntimeConfigProvider.get("RNSScreenContainer", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
