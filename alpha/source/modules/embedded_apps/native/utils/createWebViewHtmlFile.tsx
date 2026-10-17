// Module ID: 11324
// Function ID: 11325
// Name: createWebViewHtmlFile
// Dependencies: [5, 1164, 1257, 2]
// Exports: createActivityFrameInjectedJavaScript, default, deleteWebViewHtmlFile

// Module 11324 (createWebViewHtmlFile)
import react_nativeDefault from "react-native" /* 1164 */;
import SentryUtilsDefault from "SentryUtils" /* 1257 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c6, closure_3, closure_5;

function webViewShellFileName(arg0) {
  return "iframe--" + arg0 + ".html";
}
let obj = function _createWebViewHtmlFile() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let c0;
    let c1;
    let c2;
    let c3;
    let tmp;
    function generateWebViewHtml(iframeUri) {
      return "\n  <html>\n  <head>\n      <style>\n      body {\n          padding: 0;\n          margin: 0;\n          width: 100vw;\n          min-height: 100vh; /* This keeps a small white gap at the bottom of the screen, the options below help prevent this. */\n          min-height: -moz-available; /* See: https://ilxanlar.medium.com/you-shouldnt-rely-on-css-100vh-and-here-s-why-1b4721e74487 for more info */\n          min-height: -webkit-fill-available;\n          min-height: fill-available;\n      }\n      </style>\n      <meta\n      name=\"viewport\"\n      content=\"width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover\"\n      />\n  </head>\n  <body>\n      <script type=\"text/javascript\">\n          window.addEventListener('message', e => {\n            window.ReactNativeWebView.postMessage(JSON.stringify(e.data));\n          });\n      </script>\n      <iframe id=\"activityFrame\" width=\"100%\" height=\"100%\" src=\"" + iframeUri.iframeUri + "\" frameborder=\"0\" allow=\"autoplay; encrypted-media; accelerometer; gyroscope; camera 'none'; microphone 'none'; display-capture 'none'\" allowfullscreen sandbox=\"" + iframeUri.iframeSandboxAttributes + "\" referrerPolicy=\"" + iframeUri.referrerPolicy + "\">\n      </iframe>\n  </body>\n  </html>\n";
    }
    function sweepStaleWebViewHtmlFilesOnce() {
      if (closure_5 == null) {
        const tmp = iframeSandboxAttributes;
        closure_5 = iframeSandboxAttributes(function*(arg0, value) {
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
              return { value: "IconComponent", done: null };
            }
          } else {
            let c3;
            try {
              let closure_1;
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
                  closure_1 = tmp;
                  closure_0 = tmp4;
                  c3 = 1;
                  c4 = 2;
                  c5 = 1;
                  const obj6 = { value: obj3.clearFolder("cache", c3), done: false };
                  obj3 = closure_0(closure_1[1]);
                  return obj6;
                }
              } else {
                if (1 === c4) {
                  c3 = 0;
                  closure_0 = closure_2;
                  const obj2 = closure_0(closure_1[2]);
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
                return { value: "IconComponent", done: null };
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
      return closure_5;
    }
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        let iframeUri;
        let iframeSandboxAttributes;
        let referrerPolicy;
        let closure_4;
        c6 = 2;
        const tmp4 = closure_5;
        if (0 === closure_5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            let obj5 = { value, done: true };
            return obj5;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            c0 = undefined;
            iframeUri = undefined;
            iframeSandboxAttributes = undefined;
            referrerPolicy = undefined;
            ({ iframeId: c0, iframeUri: c1, iframeSandboxAttributes: c2, referrerPolicy: c3 } = closure_0);
            closure_4 = undefined;
            closure_5 = 1;
            c6 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            let obj6 = { value, done: true };
            return obj6;
          } else {
            const _HermesInternal = HermesInternal;
            closure_4 = "" + closure_130_3 + "/" + closure_130_4(c0);
            const obj7 = { iframeUri, iframeSandboxAttributes, referrerPolicy };
            generateWebViewHtml(obj7);
            closure_5 = 2;
            c6 = 1;
            const obj8 = { value: sweepStaleWebViewHtmlFilesOnce(), done: false };
            return obj8;
          }
        } else if (2 === tmp4) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            c4 = 1;
            const tmp16 = closure_130_1;
            let obj4 = closure_130_0(closure_130_1[1]);
            const str = "cache";
            const str2 = "utf8";
            closure_5 = 4;
            c6 = 1;
            const obj10 = { value: obj4.writeFile("cache", closure_4, closure_5, "utf8"), done: false };
            return obj10;
          }
        } else if (3 === tmp4) {
          c4 = 0;
          let closure_6 = closure_3;
          let obj3 = closure_130_0(closure_130_1[2]);
          const captureExceptionResult = obj3.captureException(closure_6);
          c6 = 3;
          return { value: null, done: true };
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          c4 = 0;
          c6 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp21) {
        closure_3 = tmp21;
        if (0 === c4) {
          c6 = 3;
          throw tmp21;
        } else {
          closure_5 = 3;
        }
      }
    }
  });
  return obj(...arguments);
};
const discord_activity_data = "discord_activity_data";
let c5 = null;
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
