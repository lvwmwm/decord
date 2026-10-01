// Module ID: 8929
// Function ID: 8930
// Name: createWebviewHtmlFile
// Dependencies: [5, 1364, 1151, 1231, 2]
// Exports: createInjectedJavascriptForIOS, default

// Module 8929 (createWebviewHtmlFile)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_3, iFrameAllowAttributes, iFrameSandboxAttributes, iFrameUri, messageForDisallowedNavigationError, referrerPolicy;

let obj = function _createWebviewHtmlFile() {
  obj = _asyncToGenerator(async (iFrameUri) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (async (arg0, value) => {
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      function generateWebviewHtml(arg0) {
        ({ iFrameUri, iFrameAllowAttributes, iFrameSandboxAttributes, referrerPolicy, insets, messageForDisallowedNavigationError } = arg0);
        let str = "";
        let str2 = "";
        obj = closure_1_0(closure_1_2[1]);
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
        return "\n  <html>\n  <head>\n      <style>\n      body {\n          padding: 0;\n          margin: 0;\n          width: 100vw;\n          min-height: 100vh; /* This keeps a small white gap at the bottom of the screen, the options below help prevent this. */\n          min-height: -moz-available; /* See: https://ilxanlar.medium.com/you-shouldnt-rely-on-css-100vh-and-here-s-why-1b4721e74487 for more info */\n          min-height: -webkit-fill-available;\n          min-height: fill-available;\n      }\n      </style>\n      <meta\n      name=\"viewport\"\n      content=\"width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover\"\n      />\n  </head>\n  <body>\n      <script type=\"text/javascript\">\n          window.addEventListener('message', e => {\n            window.ReactNativeWebView.postMessage(JSON.stringify(e.data));\n          });\n      </script>\n      <iframe id=\"activityFrame\" width=\"100%\" height=\"100%\" src=\"" + iFrameUri + "\" frameborder=\"0\" allow=\"" + iFrameAllowAttributes + "\" allowfullscreen sandbox=\"" + iFrameSandboxAttributes + "\" referrerPolicy=\"" + referrerPolicy + "\">\n      </iframe>\n      " + str2 + "\n      " + str + "\n  </body>\n  </html>\n";
      }
      if (c6 === 2) {
        c6 = 3;
        let str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else {
        let str2 = "utf8";
        if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            let closure_6;
            c6 = 2;
            if (0 === messageForDisallowedNavigationError) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                return { value, done: true };
              } else {
                let closure_2 = tmp;
                let closure_1 = tmp4;
                iFrameUri = undefined;
                iFrameAllowAttributes = undefined;
                iFrameSandboxAttributes = undefined;
                referrerPolicy = undefined;
                insets = undefined;
                ({ iFrameUri: c0, iFrameAllowAttributes: c1, iFrameSandboxAttributes: c2, referrerPolicy: c3, insets: c4, messageForDisallowedNavigationError: c5 } = closure_0);
                closure_6 = undefined;
                messageForDisallowedNavigationError = 1;
                c6 = 1;
                return { value: "flex", done: true };
              }
            } else if (1 === messageForDisallowedNavigationError) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                return { value, done: true };
              } else {
                const obj6 = { iFrameUri, iFrameAllowAttributes, iFrameSandboxAttributes, referrerPolicy, insets, messageForDisallowedNavigationError };
                closure_6 = generateWebviewHtml(obj6);
                insets = 1;
                messageForDisallowedNavigationError = 3;
                c6 = 1;
                const obj9 = closure_130_1(closure_130_2[2]);
                const obj7 = { value: obj9.writeFile("cache", "discord_activity_data/activity.html", closure_6, "utf8"), done: false };
                return obj7;
              }
            } else if (2 === messageForDisallowedNavigationError) {
              insets = 0;
              let closure_7 = closure_3;
              const obj3 = closure_130_1(closure_130_2[3]);
              obj3.captureException(closure_7);
              c6 = 3;
              return { value: null, done: true };
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              insets = 0;
              c6 = 3;
              return { value, done: true };
            } else {
              insets = 0;
              c6 = 3;
              obj = { value, done: true };
              return obj;
            }
          } catch (tmp13) {
            closure_3 = tmp13;
            if (0 === insets) {
              c6 = 3;
              throw tmp13;
            } else {
              messageForDisallowedNavigationError = 2;
            }
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/activities/native/createWebviewHtmlFile.tsx");

export default function createWebviewHtmlFile() {
  return obj(...arguments);
};
export const createInjectedJavascriptForIOS = function createInjectedJavascriptForIOS(rect1) {
  let rect = rect1;
  if (rect1 == null) {
    rect = { top: 0, bottom: 0, left: 0, right: 0 };
  }
  const combined = "\n  " + "iframeWindow" + ".addEventListener(\"load\", () => {\n    var iframeDoc = " + "iframeWindow" + ".document;\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-left', '" + rect.left + "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-right', '" + rect.right + "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-top', '" + rect.top + "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-bottom', '" + rect.bottom + "px');\n    " + "isIframeLoaded" + " = true;\n  });\n";
  return "\nvar iframeWindow = window;\nvar isIframeLoaded = false;\n" + combined + "\n" + "\n  function updateSafeAreaVars(insets) {\n    var iframeDoc = " + "iframeWindow" + ".document;\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-left', `${insets.left}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-right', `${insets.right}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-top', `${insets.top}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-bottom', `${insets.bottom}px`);\n    " + "iframeWindow" + ".dispatchEvent(new Event('resize'));\n    // Force redraw\n    iframeDoc.documentElement.offsetHeight;\n  }\n  " + "iframeWindow" + ".addEventListener('message', function (e) {\n    const messageData = e.data;\n    const {type, data} = messageData;\n    if (type === 'safeAreaUpdateEvent') {\n      const {insets} = data;\n      if (" + "isIframeLoaded" + ") {\n        updateSafeAreaVars(insets);\n      } else {\n        " + "iframeWindow" + ".addEventListener(\"load\", () => {\n          updateSafeAreaVars(insets);\n        });\n      }\n    }\n  });\n" + "\n";
};
