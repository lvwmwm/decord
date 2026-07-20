// Module ID: 10474
// Function ID: 81161
// Name: getPostMessageJavaScript
// Dependencies: []
// Exports: default

// Module 10474 (getPostMessageJavaScript)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/activities/native/getPostMessageJavaScript.tsx");

export default function getPostMessageJavaScript(arg0) {
  return "\n    (function() {\n      const iFrame = document.getElementById('activityFrame');\n      iFrame.contentWindow.postMessage(" + JSON.stringify(arg0) + ", '*');\n    })()\n  ";
};
