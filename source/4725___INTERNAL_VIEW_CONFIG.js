// Module ID: 4725
// Function ID: 4726
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [17, 65]

// Module 4725 (__INTERNAL_VIEW_CONFIG)
import { codegenNativeComponent } from "get ActivityIndicator";
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "RNSFullWindowOverlay", validAttributes: { accessibilityContainerViewIsModal: true } };

export default setRuntimeConfigProvider.get("RNSFullWindowOverlay", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
