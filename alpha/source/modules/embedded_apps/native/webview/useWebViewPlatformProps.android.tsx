// Module ID: 11503
// Function ID: 11504
// Name: useWebViewPlatformProps
// Dependencies: [2023, 11504, 2]
// Exports: default

// Module 11503 (useWebViewPlatformProps)
import Constants from "Constants" /* 2023 */;
import createEmbeddedAppFrameScript from "createEmbeddedAppFrameScript" /* 11504 */;
import size from "module_2" /* 2 */;

const messageForDisallowedNavigationError = Constants.DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY;
const result = size.fileFinishedImporting("modules/embedded_apps/native/webview/useWebViewPlatformProps.android.tsx");

export default function useWebViewPlatformProps(iframeUrl) {
  let items;
  let obj2;
  let obj3;
  let obj4;
  iframeUrl = iframeUrl.iframeUrl;
  let tmp2 = null;
  if (null != iframeUrl) {
    const obj = { androidInjectedJavaScriptForOrigins: obj2 };
    obj2 = { script: obj3.createEmbeddedAppFrameScript(obj4), allowedOriginRules: items };
    obj4 = { embeddedAppOrigin: iframeUrl.origin, insets: tmp, messageForDisallowedNavigationError };
    items = [iframeUrl.origin];
    tmp2 = obj;
    obj3 = createEmbeddedAppFrameScript;
  }
  return tmp2;
};
