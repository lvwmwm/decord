// Module ID: 786
// Function ID: 8906
// Name: addSentryBreadcrumb
// Dependencies: [787, 2]
// Exports: default

// Module 786 (addSentryBreadcrumb)
const result = require("set").fileFinishedImporting("modules/sentry/addSentryBreadcrumb.native.tsx");

export default function addSentryBreadcrumb(arg0) {
  let obj = importAll(787);
  obj = { type: "default", level: "info" };
  ({ category: obj2.category, message: obj2.message, data: obj2.data } = arg0);
  obj.timestamp = Date.now();
  obj.addBreadcrumb(obj);
};
