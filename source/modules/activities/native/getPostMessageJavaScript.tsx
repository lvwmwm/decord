// Module ID: 10491
// Function ID: 81258
// Name: getPostMessageJavaScript
// Dependencies: [2]
// Exports: default

// Module 10491 (getPostMessageJavaScript)
const result = require("set").fileFinishedImporting("modules/activities/native/getPostMessageJavaScript.tsx");

export default function getPostMessageJavaScript(arg0) {
  return "\n    (function() {\n      const iFrame = document.getElementById('activityFrame');\n      iFrame.contentWindow.postMessage(" + JSON.stringify(arg0) + ", '*');\n    })()\n  ";
};
