// Module ID: 678
// Function ID: 679
// Name: addSentryBreadcrumb
// Dependencies: [679, 2]
// Exports: default

// Module 678 (addSentryBreadcrumb)
import _modAll679 from "module_679" /* 679 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/sentry/addSentryBreadcrumb.native.tsx");

export default function addSentryBreadcrumb(category) {
  const obj = _modAll679;
  obj.addBreadcrumb({ type: "default", level: "info", category: category.category, message: category.message, data: category.data, timestamp: Date.now() });
};
