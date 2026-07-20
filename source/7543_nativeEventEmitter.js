// Module ID: 7543
// Function ID: 60392
// Name: nativeEventEmitter
// Dependencies: []

// Module 7543 (nativeEventEmitter)
let NativeEventEmitter;
const _module = require(dependencyMap[0]);
({ NativeModules: closure_0, NativeEventEmitter } = _module);
const nativeEventEmitter = new NativeEventEmitter(undefined);

export default () => {
  class WebViewProxy {
    constructor(arg0) {
      this.webViewKey = arg0;
      return;
    }
    injectJavaScript(arg0) {
      RNCWebView = closure_0.RNCWebView;
      return RNCWebView.injectJavaScriptWithWebViewKey(this.webViewKey, arg0);
    }
    addOnMessageListener(arg0) {
      arg0 = arg0;
      self = this;
      return self.addListener("ReactNativeWebViewOnMessageWithWebViewKey", (webViewKey) => {
        if (webViewKey.webViewKey === self.webViewKey) {
          webViewKey(webViewKey);
        }
      });
    }
    releaseWebView() {
      RNCWebView = closure_0.RNCWebView;
      releaseWebViewResult = RNCWebView.releaseWebView(this.webViewKey);
      return;
    }
  }
  return WebViewProxy;
}();
