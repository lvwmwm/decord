// Module ID: 786
// Function ID: 8905
// Name: addSentryBreadcrumb
// Dependencies: []
// Exports: default

// Module 786 (addSentryBreadcrumb)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/sentry/addSentryBreadcrumb.native.tsx");

export default function addSentryBreadcrumb(arg0) {
  let obj = importAll(dependencyMap[0]);
  obj = { "Null": true, "Null": true };
  ({ category: obj2.category, message: obj2.message, data: obj2.data } = arg0);
  obj.timestamp = Date.now();
  obj.addBreadcrumb(obj);
};
