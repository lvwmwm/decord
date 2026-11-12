// Module ID: 20190
// Function ID: 20191
// Name: InterestGuildProfileSheetLayout
// Dependencies: [2]
// Exports: getInterestGuildProfileSheetLayout

// Module 20190 (InterestGuildProfileSheetLayout)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGuildProfileSheetLayout.tsx");

export function getInterestGuildProfileSheetLayout(footerHeight) {
  let contentHeight;
  let windowHeight;
  ({ windowHeight, contentHeight } = footerHeight);
  const sum = footerHeight.footerHeight + footerHeight.safeAreaBottom;
  const rounded = Math.floor(0.9 * windowHeight);
  const rounded1 = Math.ceil(0.45 * windowHeight);
  const minResult = min(rounded, max(rounded1, Math.ceil(contentHeight + sum)));
  const bound = Math.max(0, minResult - sum);
  return { height: minResult, reservedBottom: sum, viewportHeight: bound, scrollable: contentHeight > bound };
}
