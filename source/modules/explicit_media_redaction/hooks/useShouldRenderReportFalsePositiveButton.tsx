// Module ID: 11046
// Function ID: 85971
// Name: shouldRenderReportFalsePositiveButton
// Dependencies: []
// Exports: shouldRenderReportFalsePositiveButton, useShouldRenderReportFalsePositiveButton

// Module 11046 (shouldRenderReportFalsePositiveButton)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/explicit_media_redaction/hooks/useShouldRenderReportFalsePositiveButton.tsx");

export const shouldRenderReportFalsePositiveButton = function shouldRenderReportFalsePositiveButton(id) {
  return null != fpMessageInfo.getFpMessageInfo(id);
};
export const useShouldRenderReportFalsePositiveButton = function useShouldRenderReportFalsePositiveButton(id) {
  const arg1 = id;
  const items = [closure_2];
  return null != arg1(dependencyMap[1]).useStateFromStores(items, () => fpMessageInfo.getFpMessageInfo(arg0));
};
