// Module ID: 11485
// Function ID: 11486
// Name: createWebViewHtmlFile
// Dependencies: [5, 10760, 1164, 1257, 11486, 11468, 2]
// Exports: createActivityFrameInjectedJavaScript, default, deleteWebViewHtmlFile

// Module 11485 (createWebViewHtmlFile)
import react_nativeDefault from "react-native" /* 1164 */;
import SentryUtilsDefault from "SentryUtils" /* 1257 */;
import EmbeddedAppConstants from "EmbeddedAppConstants" /* 10760 */;
import bridgeProtocol from "bridgeProtocol" /* 11468 */;
import _modDef11486 from "module_11486" /* 11486 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_3;

function webViewShellFileName(arg0) {
  return "iframe--" + arg0 + ".html";
}
function generateWebViewHtml(arg0) {
  let iframeCsp;
  let iframeSandboxAttributes;
  let iframeUri;
  let referrerPolicy;
  let shimBridgeSecret;
  ({ iframeUri, iframeSandboxAttributes, referrerPolicy, shimBridgeSecret, iframeCsp } = arg0);
  let str = "";
  let str2 = "";
  if (null != iframeCsp) {
    const _HermesInternal = HermesInternal;
    str2 = " csp=\"" + iframeCsp + "\"";
  }
  if (null != shimBridgeSecret) {
    const _JSON = JSON;
    const tmp4 = _modDef11486;
    const SHELL_BRIDGE_GLOBAL = bridgeProtocol.SHELL_BRIDGE_GLOBAL;
    const _JSON2 = JSON;
    const json = JSON.stringify(shimBridgeSecret);
    const _HermesInternal2 = HermesInternal;
    str = "<script type=\"text/javascript\">" + tmp4 + "</script>\n      <script type=\"text/javascript\">" + SHELL_BRIDGE_GLOBAL + ".start(" + json + ", " + JSON.stringify(closure_4) + ");</script>";
  }
  return "\n  <html>\n  <head>\n      <style>\n      body {\n          padding: 0;\n          margin: 0;\n          width: 100vw;\n          min-height: 100vh; /* This keeps a small white gap at the bottom of the screen, the options below help prevent this. */\n          min-height: -moz-available; /* See: https://ilxanlar.medium.com/you-shouldnt-rely-on-css-100vh-and-here-s-why-1b4721e74487 for more info */\n          min-height: -webkit-fill-available;\n          min-height: fill-available;\n      }\n      </style>\n      <meta\n      name=\"viewport\"\n      content=\"width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover\"\n      />\n  </head>\n  <body>\n      " + str + "\n      <script type=\"text/javascript\">\n          window.addEventListener('message', e => {\n            window.ReactNativeWebView.postMessage(JSON.stringify(e.data));\n          });\n      </script>\n      <iframe id=\"" + closure_4 + "\" width=\"100%\" height=\"100%\" src=\"" + iframeUri + "\" frameborder=\"0\" allow=\"autoplay; encrypted-media; accelerometer; gyroscope; camera 'none'; microphone 'none'; display-capture 'none'\" allowfullscreen sandbox=\"" + iframeSandboxAttributes + "\" referrerPolicy=\"" + referrerPolicy + "\"" + str2 + ">\n      </iframe>\n  </body>\n  </html>\n";
}
let obj = function _createWebViewHtmlFile() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    let iframeCsp;
    let tmp;
    let tmp21;
    function sweepStaleWebViewHtmlFilesOnce() {
      if (closure_7 == null) {
        const tmp = referrerPolicy;
        closure_7 = referrerPolicy(function*(arg0, value) {
          let closure_1;
          let obj3;
          if (c5 === 2) {
            c5 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj4 = { value, done: true };
              return obj4;
            } else {
              return { value: "IconComponent", done: "+352" };
            }
          } else {
            let c3;
            try {
              c5 = 2;
              if (0 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else {
                  closure_0 = tmp4;
                  c3 = 1;
                  c4 = 2;
                  c5 = 1;
                  const obj6 = { value: obj3.clearFolder("cache", c5), done: false };
                  obj3 = tmp(closure_2[2]);
                  return obj6;
                }
              } else {
                if (1 === c4) {
                  c3 = 0;
                  closure_0 = closure_2;
                  const obj2 = tmp(closure_2[3]);
                  obj2.captureException(closure_0);
                } else if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  c5 = 3;
                  obj = { value, done: true };
                  return obj;
                } else {
                  c3 = 0;
                }
                c5 = 3;
                return { value: "IconComponent", done: "+352" };
              }
            } catch (tmp16) {
              closure_2 = tmp16;
              if (0 === c3) {
                c5 = 3;
                throw tmp16;
              } else {
                c4 = 1;
              }
            }
          }
        })();
      }
      return closure_7;
    }
    let closure_0 = arg0;
    if (iframeCsp === 2) {
      iframeCsp = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+352" };
      }
    } else {
      try {
        let iframeUri;
        let iframeSandboxAttributes;
        let referrerPolicy;
        let closure_7;
        let closure_8;
        iframeCsp = 2;
        const tmp4 = c5;
        if (0 === c5) {
          if (arg0 === 1) {
            iframeCsp = 3;
            throw value;
          } else if (arg0 === 2) {
            iframeCsp = 3;
            let obj5 = { value, done: true };
            return obj5;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            c0 = undefined;
            iframeUri = undefined;
            iframeSandboxAttributes = undefined;
            referrerPolicy = undefined;
            c4 = undefined;
            ({ iframeId: c0, iframeUri: c1, iframeSandboxAttributes: c2, referrerPolicy: c3, shimVersion: c4, shellBridgeSecret: c5, iframeCsp: c6 } = closure_0);
            closure_7 = undefined;
            closure_8 = undefined;
            c5 = 1;
            iframeCsp = 1;
            return { value: "Reflect", done: null };
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            iframeCsp = 3;
            throw value;
          } else if (arg0 === 2) {
            iframeCsp = 3;
            let obj6 = { value, done: true };
            return obj6;
          } else {
            const _HermesInternal = HermesInternal;
            closure_7 = "" + closure_130_5 + "/" + closure_130_6(c0);
            const obj7 = { iframeUri, iframeSandboxAttributes, referrerPolicy, shimBridgeSecret: tmp21, iframeCsp };
            tmp21 = null;
            const tmp36 = closure_130_8;
            if (2 === c4) {
              tmp21 = c5;
            }
            closure_8 = tmp36(obj7);
            c5 = 2;
            iframeCsp = 1;
            const obj8 = { value: sweepStaleWebViewHtmlFilesOnce(), done: false };
            return obj8;
          }
        } else if (2 === tmp4) {
          if (arg0 === 1) {
            iframeCsp = 3;
            throw value;
          } else if (arg0 === 2) {
            iframeCsp = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            c4 = 1;
            const tmp16 = closure_130_2;
            let obj4 = closure_130_1(closure_130_2[2]);
            const str = "cache";
            const str2 = "utf8";
            c5 = 4;
            iframeCsp = 1;
            const obj10 = { value: obj4.writeFile("cache", closure_7, closure_8, "utf8"), done: false };
            return obj10;
          }
        } else if (3 === tmp4) {
          c4 = 0;
          let closure_9 = closure_3;
          let obj3 = closure_130_1(closure_130_2[3]);
          const captureExceptionResult = obj3.captureException(closure_9);
          iframeCsp = 3;
          return { value: null, done: true };
        } else if (arg0 === 1) {
          iframeCsp = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          iframeCsp = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          c4 = 0;
          iframeCsp = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp24) {
        closure_3 = tmp24;
        if (0 === c4) {
          iframeCsp = 3;
          throw tmp24;
        } else {
          c5 = 3;
        }
      }
    }
  });
  return obj(...arguments);
};
let closure_4 = EmbeddedAppConstants.EMBEDDED_APP_FRAME_ELEMENT_ID;
const discord_activity_data = "discord_activity_data";
let c7 = null;
const result = size.fileFinishedImporting("modules/embedded_apps/native/utils/createWebViewHtmlFile.tsx");

export default function createWebViewHtmlFile() {
  return obj(...arguments);
};
export const createActivityFrameInjectedJavaScript = function createActivityFrameInjectedJavaScript(arg0) {
  let insets;
  let messageForDisallowedNavigationError;
  ({ insets, messageForDisallowedNavigationError } = arg0);
  if (insets == null) {
    insets = { top: 0, bottom: 0, left: 0, right: 0 };
  }
  const rect = { top: insets.top, bottom: insets.bottom, left: insets.left, right: insets.right };
  const combined = "\n  var insets = " + JSON.stringify(rect) + ";\n  function writeSafeAreaVars() {\n    var root = document.documentElement;\n    if (root == null) return false;\n    root.style.setProperty('--discord-safe-area-inset-left', insets.left + 'px');\n    root.style.setProperty('--discord-safe-area-inset-right', insets.right + 'px');\n    root.style.setProperty('--discord-safe-area-inset-top', insets.top + 'px');\n    root.style.setProperty('--discord-safe-area-inset-bottom', insets.bottom + 'px');\n    return true;\n  }\n\n  if (!writeSafeAreaVars()) {\n    var observer = new MutationObserver(function () {\n      if (writeSafeAreaVars()) observer.disconnect();\n    });\n    observer.observe(document, {childList: true});\n  }\n  window.addEventListener('load', writeSafeAreaVars);\n\n  window.addEventListener('message', function (e) {\n    var message = e.data;\n    if (e.source !== window.parent || message == null || message.type !== 'safeAreaUpdateEvent') return;\n    insets = message.data.insets;\n    if (writeSafeAreaVars()) {\n      window.dispatchEvent(new Event('resize'));\n      document.documentElement.offsetHeight;\n    }\n  });\n";
  let str = "";
  if (null != messageForDisallowedNavigationError) {
    const _JSON = JSON;
    const _HermesInternal = HermesInternal;
    str = "\n  var bridge = window.ReactNativeWebView;\n  if (window !== window.top && window.parent === window.top && bridge != null) {\n    var notifyNative = bridge.postMessage.bind(bridge, " + JSON.stringify(messageForDisallowedNavigationError) + ");\n    window.addEventListener(\n      'beforeunload',\n      function (e) {\n        notifyNative();\n        e.preventDefault();\n      },\n      true,\n    );\n  }\n";
  }
  return "\n(function () {\n" + combined + "\n" + str + "\n})();\n";
};
export const deleteWebViewHtmlFile = function deleteWebViewHtmlFile(arg0) {
  const combined = "" + discord_activity_data + "/" + "iframe--" + arg0 + ".html";
  obj = react_nativeDefault;
  const removeFileResult = obj.removeFile("cache", combined);
  removeFileResult.catch((error) => {
    obj = SentryUtilsDefault;
    return obj.captureException(error);
  });
};
