// Module ID: 686
// Function ID: 687
// Name: addSentryBreadcrumb
// Dependencies: [687, 2]
// Exports: default

// Module 686 (addSentryBreadcrumb)
import _modAll687 from "module_687" /* 687 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/sentry/addSentryBreadcrumb.native.tsx");

export default function addSentryBreadcrumb(category) {
  const obj = _modAll687;
  const obj2 = { type: "default", level: "info", category: category.category, message: category.message, data: category.data, timestamp: Date.now() };
  obj.addBreadcrumb(obj2);
};
