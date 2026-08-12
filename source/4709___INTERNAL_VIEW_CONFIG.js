// Module ID: 4709
// Function ID: 4710
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [17, 65]

// Module 4709 (__INTERNAL_VIEW_CONFIG)
import { codegenNativeComponent } from "get ActivityIndicator";
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "RNSScreenStackHeaderSubview", validAttributes: { type: true, hidesSharedBackground: true, synchronousShadowStateUpdatesEnabled: true } };

export default setRuntimeConfigProvider.get("RNSScreenStackHeaderSubview", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
