// Module ID: 9446
// Function ID: 9447
// Name: getPostMessageJavaScript
// Dependencies: [2]
// Exports: default

// Module 9446 (getPostMessageJavaScript)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/activities/native/getPostMessageJavaScript.tsx");

export default function getPostMessageJavaScript(arg0) {
  return "\n    (function() {\n      const iFrame = document.getElementById('activityFrame');\n      iFrame.contentWindow.postMessage(" + JSON.stringify(arg0) + ", '*');\n    })()\n  ";
};
