// Module ID: 13351
// Function ID: 13352
// Name: useShouldRenderReportFalsePositiveButton
// Dependencies: [7464, 563, 2]
// Exports: shouldRenderReportFalsePositiveButton, useShouldRenderReportFalsePositiveButton

// Module 13351 (useShouldRenderReportFalsePositiveButton)
import ExplicitMediaStore from "ExplicitMediaStore" /* 7464 */;
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
