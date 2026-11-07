// Module ID: 11998
// Function ID: 11999
// Name: useWebViewPlatformProps
// Dependencies: [11999, 2]
// Exports: default

// Module 11998 (useWebViewPlatformProps)
import createEmbeddedAppFrameScript from "createEmbeddedAppFrameScript" /* 11999 */;
import size from "module_2" /* 2 */;

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
    obj4 = { embeddedAppOrigin: iframeUrl.origin, insets: tmp };
    items = [iframeUrl.origin];
    tmp2 = obj;
    obj3 = createEmbeddedAppFrameScript;
  }
  return tmp2;
};
