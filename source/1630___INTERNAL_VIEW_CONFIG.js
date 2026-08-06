// Module ID: 1630
// Function ID: 1631
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [17, 65]

// Module 1630 (__INTERNAL_VIEW_CONFIG)
import { codegenNativeComponent } from "get ActivityIndicator";
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "ClippingScrollViewDecoratorView", validAttributes: { contentInsetBottom: true, contentInsetTop: true, applyWorkaroundForContentInsetHitTestBug: true } };

export default setRuntimeConfigProvider.get("ClippingScrollViewDecoratorView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
