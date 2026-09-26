// Module ID: 674
// Function ID: 675
// Name: addSentryBreadcrumb
// Dependencies: [675, 2]
// Exports: default

// Module 674 (addSentryBreadcrumb)
import _modAll675 from "module_675" /* 675 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/sentry/addSentryBreadcrumb.native.tsx");

export default function addSentryBreadcrumb(category) {
  const obj = _modAll675;
  obj.addBreadcrumb({ type: "default", level: "info", category: category.category, message: category.message, data: category.data, timestamp: Date.now() });
};
