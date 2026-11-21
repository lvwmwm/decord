// Module ID: 12455
// Function ID: 12456
// Name: useShouldRenderReportFalsePositiveButton
// Dependencies: [8225, 563, 2]
// Exports: shouldRenderReportFalsePositiveButton, useShouldRenderReportFalsePositiveButton

// Module 12455 (useShouldRenderReportFalsePositiveButton)
import ExplicitMediaStore from "ExplicitMediaStore" /* 8225 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useShouldRenderReportFalsePositiveButton.tsx");

export function shouldRenderReportFalsePositiveButton(id) {
  return null != ExplicitMediaStore.getFpMessageInfo(id);
}
export function useShouldRenderReportFalsePositiveButton(arg0) {
  let closure_0;
  _require = arg0;
  const items = [ExplicitMediaStore];
  const obj = require("useStateFromStores");
  return null != obj.useStateFromStores(items, () => ExplicitMediaStore.getFpMessageInfo(closure_0));
}
