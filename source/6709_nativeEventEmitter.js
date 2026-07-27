// Module ID: 6709
// Function ID: 59232
// Name: nativeEventEmitter
// Dependencies: [27]

// Module 6709 (nativeEventEmitter)
import get_ActivityIndicator from "get ActivityIndicator";

let NativeEventEmitter;
let closure_0;
({ NativeModules: closure_0, NativeEventEmitter } = get_ActivityIndicator);
const nativeEventEmitter = new NativeEventEmitter(undefined);

export default (() => {
  class WebViewProxy {
    constructor(arg0) {
      this.webViewKey = arg0;
      return;
    }
    injectJavaScript(arg0) {
      RNCWebView = outer1_0.RNCWebView;
      return RNCWebView.injectJavaScriptWithWebViewKey(this.webViewKey, arg0);
    }
    addOnMessageListener(arg0) {
      closure_0 = arg0;
      self = this;
      return outer1_1.addListener("ReactNativeWebViewOnMessageWithWebViewKey", (webViewKey) => {
        if (webViewKey.webViewKey === self.webViewKey) {
          callback(webViewKey);
        }
      });
    }
    releaseWebView() {
      RNCWebView = outer1_0.RNCWebView;
      releaseWebViewResult = RNCWebView.releaseWebView(this.webViewKey);
      return;
    }
  }
  return WebViewProxy;
})();
