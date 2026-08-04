// Module ID: 11229
// Function ID: 11230
// Name: shouldRenderReportFalsePositiveButton
// Dependencies: [5819, 647, 2]
// Exports: shouldRenderReportFalsePositiveButton, useShouldRenderReportFalsePositiveButton

// Module 11229 (shouldRenderReportFalsePositiveButton)
import getFpMessageInfo from "getFpMessageInfo";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/hooks/useShouldRenderReportFalsePositiveButton.tsx");

export const shouldRenderReportFalsePositiveButton = function shouldRenderReportFalsePositiveButton(id) {
  return null != fpMessageInfo.getFpMessageInfo(id);
};
export const useShouldRenderReportFalsePositiveButton = function useShouldRenderReportFalsePositiveButton(id) {
  const _require = id;
  const items = [getFpMessageInfo];
  return null != _require(647).useStateFromStores(items, () => outer1_2.getFpMessageInfo(closure_0));
};
