// Module ID: 10610
// Function ID: 82777
// Name: safeAreaInitJs
// Dependencies: [5, 27, 477, 1247, 1184, 2]
// Exports: createInjectedJavascriptForIOS, default

// Module 10610 (safeAreaInitJs)
import set from "set";
import { NativeModules } from "get ActivityIndicator";

const require = arg1;
function safeAreaInitJs(arg0) {
  let iframeWindowVarName;
  let insets;
  let isIframeLoadedVarName;
  ({ insets, iframeWindowVarName, isIframeLoadedVarName } = arg0);
  if (null == insets) {
    insets = { top: 0, bottom: 0, left: 0, right: 0 };
  }
  return "\n  " + iframeWindowVarName + ".addEventListener(\"load\", () => {\n    var iframeDoc = " + iframeWindowVarName + ".document;\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-left', '" + insets.left + "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-right', '" + insets.right + "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-top', '" + insets.top + "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-bottom', '" + insets.bottom + "px');\n    " + isIframeLoadedVarName + " = true;\n  });\n";
}
function safeAreasUpdateListenerJs(iframeWindowVarName) {
  iframeWindowVarName = iframeWindowVarName.iframeWindowVarName;
  return "\n  function updateSafeAreaVars(insets) {\n    var iframeDoc = " + iframeWindowVarName + ".document;\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-left', `${insets.left}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-right', `${insets.right}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-top', `${insets.top}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-bottom', `${insets.bottom}px`);\n    " + iframeWindowVarName + ".dispatchEvent(new Event('resize'));\n    // Force redraw\n    iframeDoc.documentElement.offsetHeight;\n  }\n  " + iframeWindowVarName + ".addEventListener('message', function (e) {\n    const messageData = e.data;\n    const {type, data} = messageData;\n    if (type === 'safeAreaUpdateEvent') {\n      const {insets} = data;\n      if (" + iframeWindowVarName.isIframeLoadedVarName + ") {\n        updateSafeAreaVars(insets);\n      } else {\n        " + iframeWindowVarName + ".addEventListener(\"load\", () => {\n          updateSafeAreaVars(insets);\n        });\n      }\n    }\n  });\n";
}
function _createWebviewHtmlFile() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("set").fileFinishedImporting("modules/activities/native/createWebviewHtmlFile.tsx");

export default function createWebviewHtmlFile() {
  return _createWebviewHtmlFile(...arguments);
};
export const createInjectedJavascriptForIOS = function createInjectedJavascriptForIOS(insets) {
  const obj = { insets, iframeWindowVarName: "iframeWindow", isIframeLoadedVarName: "isIframeLoaded" };
  return "\nvar iframeWindow = window;\nvar isIframeLoaded = false;\n" + safeAreaInitJs(obj) + "\n" + safeAreasUpdateListenerJs({ iframeWindowVarName: "iframeWindow", isIframeLoadedVarName: "isIframeLoaded" }) + "\n";
};
