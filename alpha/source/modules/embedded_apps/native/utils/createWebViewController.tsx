// Module ID: 11339
// Function ID: 11340
// Name: createWebViewController
// Dependencies: [5, 1087, 2026, 6332, 7851, 11049, 1257, 11340, 11343, 1123, 11359, 2]
// Exports: default

// Module 11339 (createWebViewController)
import Constants from "Constants" /* 1087 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1123 */;
import Constants2 from "Constants" /* 2026 */;
import Constants3 from "Constants" /* 6332 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11343 */;
import createWebViewHtmlFile from "createWebViewHtmlFile" /* 11359 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c6, c7, closure_4;

const ComponentActions = Constants.ComponentActions;
let closure_5 = Constants2.DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY;
const TransportTypes = Constants3.TransportTypes;
let result = size.fileFinishedImporting("modules/embedded_apps/native/utils/createWebViewController.tsx");

export default function createWebViewController(id, contextSource) {
  let shellBridgeSecret;
  _require = id;
  ({ getOrigin: importDefault, onDisallowedNavigation: dependencyMap, shellBridgeSecret } = contextSource);
  function postMessageToWebView(arg0, arg1) {
    return obj(...arguments);
  }
  let obj = function _postMessageToWebView() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0 = arg0;
      let closure_1 = value;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c5;
        try {
          let closure_2;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_3 = tmp;
              closure_2 = tmp4;
              c5 = 1;
              c6 = 2;
              c7 = 1;
              const obj5 = { value: webViewProxy.injectJavaScript(closure_1(closure_2[5])(closure_0, closure_1)), done: false };
              return obj5;
            }
          } else {
            if (1 === c6) {
              c5 = 0;
              closure_0 = closure_4;
              const obj2 = closure_1(closure_2[6]);
              obj2.captureException(closure_0);
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c5 = 0;
            }
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp18) {
          closure_4 = tmp18;
          if (0 === c5) {
            c7 = 3;
            throw tmp18;
          } else {
            c6 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  contextSource = contextSource.contextSource;
  obj = require("WebView");
  const webViewProxy = obj.getWebViewProxy(id);
  let obj3 = require("createEmbeddedAppShimMessageHandler");
  let closure_6 = obj3.createEmbeddedAppShimMessageHandler(id, shellBridgeSecret, (PLAYER_FUNCTIONS) => {
    const injectJavaScriptResult = webViewProxy.injectJavaScript(PLAYER_FUNCTIONS);
    injectJavaScriptResult.catch((error) => {
      obj = closure_1_1(closure_1_2[6]);
      return obj.captureException(error);
    });
  });
  let closure_7 = webViewProxy.addOnMessageListener((data) => {
    try {
      const _JSON = JSON;
      const parsed = JSON.parse(data.data);
      if (!closure_6.handleMessage(parsed)) {
        const tmp6 = importDefault();
        const tmp8 = typeof tmp3 === "object" && null != tmp6;
        if (tmp8) {
          const obj2 = { type: TransportTypes.POST_MESSAGE, origin: tmp6, iframeId: id };
          obj = WebViewPostMessageTransportDefault;
          obj.handleMessage(parsed, obj2, postMessageToWebView);
        }
      }
    } catch (tmp16) {
      const _SyntaxError = SyntaxError;
      if (tmp16 instanceof SyntaxError) {
        if (data.data === closure_5) {
          dependencyMap();
        }
      } else {
        throw tmp16;
      }
    }
  });
  let ComponentDispatch = require("ComponentDispatchUtils").ComponentDispatch;
  let obj2 = { id, data: { contextSource } };
  ComponentDispatch.dispatch(postMessageToWebView.IFRAME_MOUNT, obj2);
  let obj4 = {
    iframeId: id,
    shellBridgeSecret,
    release() {
      closure_7.remove();
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      obj = { id };
      ComponentDispatch.dispatch(ComponentActions.IFRAME_UNMOUNT, obj);
      closure_6.close();
      webViewProxy.releaseWebView();
      const obj2 = createWebViewHtmlFile;
      const result = obj2.deleteWebViewHtmlFile(id);
    }
  };
  return obj4;
};
