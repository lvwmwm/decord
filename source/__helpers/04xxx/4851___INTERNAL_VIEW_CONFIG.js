// Module ID: 4851
// Function ID: 4852
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [17, 65]

// Module 4851 (__INTERNAL_VIEW_CONFIG)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

const codegenNativeComponent = get_ActivityIndicator.codegenNativeComponent;
const obj = { uiViewClassName: "RNSFullWindowOverlay", validAttributes: { accessibilityContainerViewIsModal: true } };

export default setRuntimeConfigProvider.get("RNSFullWindowOverlay", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
