// Module ID: 14219
// Function ID: 14220
// Name: useShouldRenderReportFalsePositiveButton
// Dependencies: [8635, 563, 2]
// Exports: shouldRenderReportFalsePositiveButton, useShouldRenderReportFalsePositiveButton

// Module 14219 (useShouldRenderReportFalsePositiveButton)
import ExplicitMediaStore from "ExplicitMediaStore" /* 8635 */;
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
