// Module ID: 806
// Function ID: 807
// Name: addSentryBreadcrumb
// Dependencies: [807, 2]
// Exports: default

// Module 806 (addSentryBreadcrumb)
import set from "set" /* 2 */;
import addBreadcrumbAll from "addBreadcrumb" /* 807 */;

const result = set.fileFinishedImporting("modules/sentry/addSentryBreadcrumb.native.tsx");

export default function addSentryBreadcrumb(category) {
  let obj = addBreadcrumbAll;
  obj = { type: "default", level: "info", category: category.category, message: category.message, data: category.data, timestamp: Date.now() };
  obj.addBreadcrumb(obj);
};
