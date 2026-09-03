// Module ID: 9472
// Function ID: 9473
// Name: getPostMessageJavaScript
// Dependencies: [2]
// Exports: default

// Module 9472 (getPostMessageJavaScript)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/activities/native/getPostMessageJavaScript.tsx");

export default function getPostMessageJavaScript(arg0) {
  return "\n    (function() {\n      const iFrame = document.getElementById('activityFrame');\n      iFrame.contentWindow.postMessage(" + JSON.stringify(arg0) + ", '*');\n    })()\n  ";
};
