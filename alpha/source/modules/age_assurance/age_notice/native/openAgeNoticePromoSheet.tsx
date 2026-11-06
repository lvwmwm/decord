// Module ID: 16877
// Function ID: 16878
// Name: openAgeNoticePromoSheet
// Dependencies: [5404, 16878, 2118, 2]
// Exports: default

// Module 16877 (openAgeNoticePromoSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import size from "module_2" /* 2 */;

const AGE_NOTICE_PROMO_SHEET_KEY = "AGE_NOTICE_PROMO_SHEET_KEY";
const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/openAgeNoticePromoSheet.tsx");
const AGE_NOTICE_PROMO_SHEET_KEY_export = "AGE_NOTICE_PROMO_SHEET_KEY";

export default function openAgeNoticePromoSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16878, dependencyMap.paths), AGE_NOTICE_PROMO_SHEET_KEY, arg0);
};
export { AGE_NOTICE_PROMO_SHEET_KEY_export as AGE_NOTICE_PROMO_SHEET_KEY };
