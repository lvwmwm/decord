// Module ID: 10207
// Function ID: 10208
// Name: createWebViewController
// Dependencies: [5, 10208, 1071, 5797, 7896, 10209, 1242, 10210, 10213, 1107, 2]
// Exports: default

// Module 10207 (createWebViewController)
import Constants2 from "Constants" /* 1071 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1107 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import EmbeddedAppConstants from "EmbeddedAppConstants" /* 10208 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 10213 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import Constants from "Constants" /* 5797 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c6, c7;

let metroImportDefault;
let metroRequire;
let closure_4 = EmbeddedAppConstants.EMBEDDED_APP_DISALLOWED_NAVIGATION_MESSAGE;
const ComponentActions = Constants2.ComponentActions;
({ MAX_POST_MESSAGE_STRING_LENGTH: metroRequire, TransportTypes: metroImportDefault } = Constants);
let result = size.fileFinishedImporting("modules/embedded_apps/native/webview/createWebViewController.tsx");

export default function createWebViewController(id, contextSource) {
  let shellBridgeSecret;
  _require = id;
  ({ getOrigin: importDefault, onDisallowedNavigation: dependencyMap, shellBridgeSecret } = contextSource);
  function postMessageToWebView() {
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
          return { value: "HermesInternal", done: null };
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
            return { value: "HermesInternal", done: null };
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
  let tmp = require("createEmbeddedAppShimMessageHandler");
  const createEmbeddedAppShimMessageHandler = tmp.createEmbeddedAppShimMessageHandler;
  _require = webViewProxy(function*(arg0, value) {
    let closure_3;
    closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c4;
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            c4 = 1;
            c5 = 2;
            c6 = 1;
            const obj5 = { value: tmp15.injectJavaScript(closure_0), done: false };
            return obj5;
          }
        } else {
          if (1 === c5) {
            c4 = 0;
            closure_0 = tmp15;
            const obj2 = SentryUtilsDefault;
            obj2.captureException(closure_0);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c4 = 0;
          }
          c6 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp15) {
        if (0 === c4) {
          c6 = 3;
          throw tmp15;
        } else {
          c5 = 1;
        }
      }
    }
  });
  let closure_6 = createEmbeddedAppShimMessageHandler(id, shellBridgeSecret, function() {
    return closure_0(...arguments);
  });
  let closure_7 = webViewProxy.addOnMessageListener((data) => {
    const tmp = importDefault();
    if (null != tmp) {
      const obj2 = { type: metroImportDefault.POST_MESSAGE, origin: tmp, iframeId: id };
      if (typeof data.data === "string") {
        if (data.data.length > metroRequire) {
          obj = WebViewPostMessageTransportDefault;
          const result = obj.rejectOversizedMessage(obj2, postMessageToWebView);
        }
      }
      try {
        const _JSON = JSON;
        const parsed = JSON.parse(data.data);
        if (!metroRequire.handleMessage(parsed)) {
          if (typeof parsed === "object") {
            const obj3 = WebViewPostMessageTransportDefault;
            obj3.handleMessage(parsed, obj2, postMessageToWebView);
          }
        }
      } catch (tmp7) {
        const _SyntaxError = SyntaxError;
        if (tmp7 instanceof SyntaxError) {
          if (data.data === closure_4) {
            dependencyMap();
          }
        } else {
          throw tmp7;
        }
      }
    }
  });
  let ComponentDispatch = require("ComponentDispatchUtils").ComponentDispatch;
  let obj2 = { id, data: { contextSource } };
  ComponentDispatch.dispatch(obj.IFRAME_MOUNT, obj2);
  let obj3 = {
    iframeId: id,
    shellBridgeSecret,
    release() {
      closure_7.remove();
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      obj = { id };
      ComponentDispatch.dispatch(ComponentActions.IFRAME_UNMOUNT, obj);
      closure_6.close();
      webViewProxy.releaseWebView();
    }
  };
  return obj3;
};
