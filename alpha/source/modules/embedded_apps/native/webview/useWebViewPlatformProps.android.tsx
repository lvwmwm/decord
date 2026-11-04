// Module ID: 12031
// Function ID: 12032
// Name: useWebViewPlatformProps
// Dependencies: [12032, 2]
// Exports: default

// Module 12031 (useWebViewPlatformProps)
import createEmbeddedAppFrameScript from "createEmbeddedAppFrameScript" /* 12032 */;
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
