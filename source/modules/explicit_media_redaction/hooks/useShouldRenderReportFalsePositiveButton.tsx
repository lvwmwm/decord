// Module ID: 11708
// Function ID: 11709
// Name: shouldRenderReportFalsePositiveButton
// Dependencies: [6147, 644, 2]
// Exports: shouldRenderReportFalsePositiveButton, useShouldRenderReportFalsePositiveButton

// Module 11708 (shouldRenderReportFalsePositiveButton)
import closure_2 from "getFpMessageInfo" /* 6147 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/hooks/useShouldRenderReportFalsePositiveButton.tsx");

export const shouldRenderReportFalsePositiveButton = function shouldRenderReportFalsePositiveButton(id) {
  return null != fpMessageInfo.getFpMessageInfo(id);
};
export const useShouldRenderReportFalsePositiveButton = function useShouldRenderReportFalsePositiveButton(id) {
  const _require = id;
  const items = [closure_2];
  return null != _require(644).useStateFromStores(items, () => closure_1_2.getFpMessageInfo(closure_0));
};
