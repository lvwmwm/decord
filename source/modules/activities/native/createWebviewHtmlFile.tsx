// Module ID: 10599
// Function ID: 82703
// Name: safeAreaInitJs
// Dependencies: []
// Exports: createInjectedJavascriptForIOS, default

// Module 10599 (safeAreaInitJs)
function safeAreaInitJs(arg0) {
  let iframeWindowVarName;
  let insets;
  let isIframeLoadedVarName;
  ({ insets, iframeWindowVarName, isIframeLoadedVarName } = arg0);
  if (null == insets) {
    insets = {};
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
  const _createWebviewHtmlFile = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
const NativeModules = arg1(dependencyMap[1]).NativeModules;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/activities/native/createWebviewHtmlFile.tsx");

export default function createWebviewHtmlFile() {
  return _createWebviewHtmlFile(...arguments);
};
export const createInjectedJavascriptForIOS = function createInjectedJavascriptForIOS(insets) {
  return "\nvar iframeWindow = window;\nvar isIframeLoaded = false;\n" + safeAreaInitJs({ insets }) + "\n" + safeAreasUpdateListenerJs({}) + "\n";
};
