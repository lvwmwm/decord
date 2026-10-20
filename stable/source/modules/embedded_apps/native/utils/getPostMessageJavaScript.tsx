// Module ID: 10932
// Function ID: 10933
// Name: getPostMessageJavaScript
// Dependencies: [2]
// Exports: default

// Module 10932 (getPostMessageJavaScript)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/embedded_apps/native/utils/getPostMessageJavaScript.tsx");

export default function getPostMessageJavaScript(arg0, arg1) {
  const json = JSON.stringify(arg0);
  return "\n    (function() {\n      const iFrame = document.getElementById('activityFrame');\n      iFrame.contentWindow.postMessage(" + json + ", " + JSON.stringify(arg1) + ");\n    })()\n  ";
};
export const ANY_ORIGIN = "*";
