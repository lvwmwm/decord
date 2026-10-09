// Module ID: 10891
// Function ID: 10892
// Name: getPostMessageJavaScript
// Dependencies: [2]
// Exports: default

// Module 10891 (getPostMessageJavaScript)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/embedded_apps/native/utils/getPostMessageJavaScript.tsx");

export default function getPostMessageJavaScript(arg0) {
  return "\n    (function() {\n      const iFrame = document.getElementById('activityFrame');\n      iFrame.contentWindow.postMessage(" + JSON.stringify(arg0) + ", '*');\n    })()\n  ";
};
