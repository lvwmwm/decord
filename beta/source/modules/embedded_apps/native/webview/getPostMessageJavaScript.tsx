// Module ID: 12858
// Function ID: 12859
// Name: getPostMessageJavaScript
// Dependencies: [12857, 2]
// Exports: default

// Module 12858 (getPostMessageJavaScript)
import EmbeddedAppConstants from "EmbeddedAppConstants" /* 12857 */;
import size from "module_2" /* 2 */;

let closure_0 = EmbeddedAppConstants.EMBEDDED_APP_FRAME_ELEMENT_ID;
const result = size.fileFinishedImporting("modules/embedded_apps/native/webview/getPostMessageJavaScript.tsx");

export default function getPostMessageJavaScript(arg0, arg1) {
  const json = JSON.stringify(closure_0);
  const json1 = JSON.stringify(arg0);
  return "\n    (function() {\n      const iFrame = document.getElementById(" + json + ");\n      iFrame.contentWindow.postMessage(" + json1 + ", " + JSON.stringify(arg1) + ");\n    })()\n  ";
};
export const ANY_ORIGIN = "*";
