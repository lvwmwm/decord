// Module ID: 10951
// Function ID: 10952
// Name: createWebViewHtmlFile
// Dependencies: [5, 1162, 1255, 1382, 2]
// Exports: createInjectedJavascriptForIOS, default, deleteWebViewHtmlFile

// Module 10951 (createWebViewHtmlFile)
import react_nativeDefault from "react-native" /* 1162 */;
import SentryUtilsDefault from "SentryUtils" /* 1255 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_3, closure_6;

function webViewShellFileName(iframeId) {
  return "iframe--" + iframeId + ".html";
}
let obj = function _createWebViewHtmlFile() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let messageForDisallowedNavigationError;
    let tmp;
    function generateWebViewHtml(arg0) {
      ({ iframeUri, iframeSandboxAttributes, referrerPolicy, insets, messageForDisallowedNavigationError } = arg0);
      let str = "";
      let str2 = "";
      obj = closure_1_0(closure_1_2[3]);
      if (obj.isAndroid()) {
        if (insets == null) {
          insets = { top: 0, bottom: 0, left: 0, right: 0 };
        }
        const _HermesInternal = HermesInternal;
        const combined = "\n  " + "iframeWindow" + ".addEventListener(\"load\", () => {\n    var iframeDoc = " + "iframeWindow" + ".document;\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-left', '" + insets.left + "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-right', '" + insets.right + "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-top', '" + insets.top + "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-bottom', '" + insets.bottom + "px');\n    " + "isIframeLoaded" + " = true;\n  });\n";
        const _HermesInternal2 = HermesInternal;
        const _HermesInternal3 = HermesInternal;
        str2 = "\n      <script type=\"text/javascript\">\n        var iframe = document.getElementById(\"activityFrame\");\n        var iframeWindow = iframe.contentWindow;\n        var isIframeLoaded = false;\n        " + combined + "\n        " + "\n  function updateSafeAreaVars(insets) {\n    var iframeDoc = " + "iframeWindow" + ".document;\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-left', `${insets.left}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-right', `${insets.right}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-top', `${insets.top}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-bottom', `${insets.bottom}px`);\n    " + "iframeWindow" + ".dispatchEvent(new Event('resize'));\n    // Force redraw\n    iframeDoc.documentElement.offsetHeight;\n  }\n  " + "iframeWindow" + ".addEventListener('message', function (e) {\n    const messageData = e.data;\n    const {type, data} = messageData;\n    if (type === 'safeAreaUpdateEvent') {\n      const {insets} = data;\n      if (" + "isIframeLoaded" + ") {\n        updateSafeAreaVars(insets);\n      } else {\n        " + "iframeWindow" + ".addEventListener(\"load\", () => {\n          updateSafeAreaVars(insets);\n        });\n      }\n    }\n  });\n" + "\n      </script>\n      ";
      }
      if (null != messageForDisallowedNavigationError) {
        const _HermesInternal4 = HermesInternal;
        const _HermesInternal5 = HermesInternal;
        str = "\n      <script type=\"text/javascript\">\n        var iframe = document.getElementById(\"activityFrame\");\n        var iframeWindow = iframe.contentWindow;\n        " + "\n  " + "iframeWindow" + ".addEventListener('beforeunload', function (e) {\n    window.ReactNativeWebView.postMessage('" + messageForDisallowedNavigationError + "');\n    e.preventDefault();\n  });\n" + "\n      </script>\n      ";
      }
      return "\n  <html>\n  <head>\n      <style>\n      body {\n          padding: 0;\n          margin: 0;\n          width: 100vw;\n          min-height: 100vh; /* This keeps a small white gap at the bottom of the screen, the options below help prevent this. */\n          min-height: -moz-available; /* See: https://ilxanlar.medium.com/you-shouldnt-rely-on-css-100vh-and-here-s-why-1b4721e74487 for more info */\n          min-height: -webkit-fill-available;\n          min-height: fill-available;\n      }\n      </style>\n      <meta\n      name=\"viewport\"\n      content=\"width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover\"\n      />\n  </head>\n  <body>\n      <script type=\"text/javascript\">\n          window.addEventListener('message', e => {\n            window.ReactNativeWebView.postMessage(JSON.stringify(e.data));\n          });\n      </script>\n      <iframe id=\"activityFrame\" width=\"100%\" height=\"100%\" src=\"" + iframeUri + "\" frameborder=\"0\" allow=\"autoplay; encrypted-media; accelerometer; gyroscope; camera 'none'; microphone 'none'; display-capture 'none'\" allowfullscreen sandbox=\"" + iframeSandboxAttributes + "\" referrerPolicy=\"" + referrerPolicy + "\">\n      </iframe>\n      " + str2 + "\n      " + str + "\n  </body>\n  </html>\n";
    }
    function sweepStaleWebViewHtmlFilesOnce() {
      if (closure_6 == null) {
        const tmp = referrerPolicy;
        closure_6 = referrerPolicy(function*(arg0, value) {
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
              return { value: "IconComponent", done: "+51" };
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
                  const obj6 = { value: obj3.clearFolder("cache", c4), done: false };
                  obj3 = tmp(closure_2[1]);
                  return obj6;
                }
              } else {
                if (1 === c4) {
                  c3 = 0;
                  closure_0 = closure_2;
                  const obj2 = tmp(closure_2[2]);
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
                return { value: "IconComponent", done: "+51" };
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
      return closure_6;
    }
    let closure_0 = arg0;
    if (closure_6 === 2) {
      closure_6 = 3;
      const str3 = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else {
      const str4 = "/";
      const str5 = "";
      const str6 = "utf8";
      const str7 = "cache";
      if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        let insets;
        try {
          let iframeUri;
          let iframeSandboxAttributes;
          let referrerPolicy;
          let closure_7;
          closure_6 = 2;
          const tmp4 = messageForDisallowedNavigationError;
          if (0 === messageForDisallowedNavigationError) {
            if (arg0 === 1) {
              closure_6 = 3;
              throw value;
            } else if (arg0 === 2) {
              closure_6 = 3;
              let obj5 = { value, done: true };
              return obj5;
            } else {
              let closure_2 = tmp;
              let closure_1 = tmp4;
              c0 = undefined;
              iframeUri = undefined;
              iframeSandboxAttributes = undefined;
              referrerPolicy = undefined;
              insets = undefined;
              ({ iframeId: c0, iframeUri: c1, iframeSandboxAttributes: c2, referrerPolicy: c3, insets: c4, messageForDisallowedNavigationError: c5 } = closure_0);
              closure_7 = undefined;
              messageForDisallowedNavigationError = 1;
              closure_6 = 1;
              return { value: "Set", done: true };
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              closure_6 = 3;
              throw value;
            } else if (arg0 === 2) {
              closure_6 = 3;
              let obj6 = { value, done: true };
              return obj6;
            } else {
              let _HermesInternal = HermesInternal;
              "" + closure_130_4 + "/" + closure_130_5(c0);
              const obj7 = { iframeUri, iframeSandboxAttributes, referrerPolicy, insets, messageForDisallowedNavigationError };
              closure_7 = generateWebViewHtml(obj7);
              messageForDisallowedNavigationError = 2;
              closure_6 = 1;
              const obj8 = { value: sweepStaleWebViewHtmlFilesOnce(), done: false };
              return obj8;
            }
          } else if (2 === tmp4) {
            if (arg0 === 1) {
              closure_6 = 3;
              throw value;
            } else if (arg0 === 2) {
              closure_6 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              insets = 1;
              const tmp16 = closure_130_2;
              let obj4 = closure_130_1(closure_130_2[1]);
              let str = "cache";
              let str2 = "utf8";
              messageForDisallowedNavigationError = 4;
              closure_6 = 1;
              const obj10 = { value: obj4.writeFile("cache", closure_6, closure_7, "utf8"), done: false };
              return obj10;
            }
          } else if (3 === tmp4) {
            insets = 0;
            let closure_8 = closure_3;
            let obj3 = closure_130_1(closure_130_2[2]);
            const captureExceptionResult = obj3.captureException(closure_8);
            closure_6 = 3;
            return { value: null, done: true };
          } else if (arg0 === 1) {
            closure_6 = 3;
            throw value;
          } else if (arg0 === 2) {
            insets = 0;
            closure_6 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            insets = 0;
            closure_6 = 3;
            obj = { value, done: true };
            return obj;
          }
        } catch (tmp20) {
          closure_3 = tmp20;
          if (0 === insets) {
            closure_6 = 3;
            throw tmp20;
          } else {
            messageForDisallowedNavigationError = 3;
          }
        }
      }
    }
  });
  return obj(...arguments);
};
const discord_activity_data = "discord_activity_data";
let c6 = null;
const result = size.fileFinishedImporting("modules/embedded_apps/native/utils/createWebViewHtmlFile.tsx");

export default function createWebViewHtmlFile() {
  return obj(...arguments);
};
export { webViewShellFileName };
export const createInjectedJavascriptForIOS = function createInjectedJavascriptForIOS(rect1) {
  let rect = rect1;
  if (rect1 == null) {
    rect = { top: 0, bottom: 0, left: 0, right: 0 };
  }
  const combined = "\n  " + "iframeWindow" + ".addEventListener(\"load\", () => {\n    var iframeDoc = " + "iframeWindow" + ".document;\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-left', '" + rect.left + "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-right', '" + rect.right + "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-top', '" + rect.top + "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-bottom', '" + rect.bottom + "px');\n    " + "isIframeLoaded" + " = true;\n  });\n";
  return "\nvar iframeWindow = window;\nvar isIframeLoaded = false;\n" + combined + "\n" + "\n  function updateSafeAreaVars(insets) {\n    var iframeDoc = " + "iframeWindow" + ".document;\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-left', `${insets.left}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-right', `${insets.right}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-top', `${insets.top}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-bottom', `${insets.bottom}px`);\n    " + "iframeWindow" + ".dispatchEvent(new Event('resize'));\n    // Force redraw\n    iframeDoc.documentElement.offsetHeight;\n  }\n  " + "iframeWindow" + ".addEventListener('message', function (e) {\n    const messageData = e.data;\n    const {type, data} = messageData;\n    if (type === 'safeAreaUpdateEvent') {\n      const {insets} = data;\n      if (" + "isIframeLoaded" + ") {\n        updateSafeAreaVars(insets);\n      } else {\n        " + "iframeWindow" + ".addEventListener(\"load\", () => {\n          updateSafeAreaVars(insets);\n        });\n      }\n    }\n  });\n" + "\n";
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
