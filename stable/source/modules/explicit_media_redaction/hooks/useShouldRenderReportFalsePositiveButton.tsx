// Module ID: 12046
// Function ID: 12047
// Name: useShouldRenderReportFalsePositiveButton
// Dependencies: [7396, 563, 2]
// Exports: shouldRenderReportFalsePositiveButton, useShouldRenderReportFalsePositiveButton

// Module 12046 (useShouldRenderReportFalsePositiveButton)
import ExplicitMediaStore from "ExplicitMediaStore" /* 7396 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useShouldRenderReportFalsePositiveButton.tsx");

export const shouldRenderReportFalsePositiveButton = function shouldRenderReportFalsePositiveButton(id) {
  return null != ExplicitMediaStore.getFpMessageInfo(id);
};
export const useShouldRenderReportFalsePositiveButton = function useShouldRenderReportFalsePositiveButton(id) {
  _require = id;
  const items = [ExplicitMediaStore];
  return null != require("useStateFromStores").useStateFromStores(items, () => ExplicitMediaStore.getFpMessageInfo(closure_0));
};
