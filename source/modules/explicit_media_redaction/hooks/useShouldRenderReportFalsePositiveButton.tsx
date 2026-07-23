// Module ID: 11057
// Function ID: 86034
// Name: shouldRenderReportFalsePositiveButton
// Dependencies: [5671, 624, 2]
// Exports: shouldRenderReportFalsePositiveButton, useShouldRenderReportFalsePositiveButton

// Module 11057 (shouldRenderReportFalsePositiveButton)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/hooks/useShouldRenderReportFalsePositiveButton.tsx");

export const shouldRenderReportFalsePositiveButton = function shouldRenderReportFalsePositiveButton(id) {
  return null != fpMessageInfo.getFpMessageInfo(id);
};
export const useShouldRenderReportFalsePositiveButton = function useShouldRenderReportFalsePositiveButton(id) {
  const _require = id;
  const items = [_isNativeReflectConstruct];
  return null != _require(624).useStateFromStores(items, () => outer1_2.getFpMessageInfo(closure_0));
};
