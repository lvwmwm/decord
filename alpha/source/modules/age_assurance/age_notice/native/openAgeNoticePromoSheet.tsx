// Module ID: 16889
// Function ID: 16890
// Name: openAgeNoticePromoSheet
// Dependencies: [5384, 16890, 2123, 2]
// Exports: default

// Module 16889 (openAgeNoticePromoSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import size from "module_2" /* 2 */;

const AGE_NOTICE_PROMO_SHEET_KEY = "AGE_NOTICE_PROMO_SHEET_KEY";
const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/openAgeNoticePromoSheet.tsx");
const AGE_NOTICE_PROMO_SHEET_KEY_export = "AGE_NOTICE_PROMO_SHEET_KEY";

export default function openAgeNoticePromoSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16890, dependencyMap.paths), AGE_NOTICE_PROMO_SHEET_KEY, arg0);
};
export { AGE_NOTICE_PROMO_SHEET_KEY_export as AGE_NOTICE_PROMO_SHEET_KEY };
