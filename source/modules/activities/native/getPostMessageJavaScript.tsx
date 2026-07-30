// Module ID: 10607
// Function ID: 10608
// Name: getPostMessageJavaScript
// Dependencies: [2]
// Exports: default

// Module 10607 (getPostMessageJavaScript)
const result = require("set").fileFinishedImporting("modules/activities/native/getPostMessageJavaScript.tsx");

export default function getPostMessageJavaScript(arg0) {
  return "\n    (function() {\n      const iFrame = document.getElementById('activityFrame');\n      iFrame.contentWindow.postMessage(" + JSON.stringify(arg0) + ", '*');\n    })()\n  ";
};
