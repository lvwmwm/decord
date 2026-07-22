// Module ID: 786
// Function ID: 8905
// Name: addSentryBreadcrumb
// Dependencies: []
// Exports: default

// Module 786 (addSentryBreadcrumb)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/sentry/addSentryBreadcrumb.native.tsx");

export default function addSentryBreadcrumb(category) {
  let obj = importAll(dependencyMap[0]);
  obj = { category: category.category, message: category.message, data: category.data, timestamp: Date.now() };
  obj.addBreadcrumb(obj);
};
