// Module ID: 16925
// Function ID: 16926
// Name: openAgeNoticePromoSheet
// Dependencies: [5374, 16926, 2118, 2]
// Exports: default

// Module 16925 (openAgeNoticePromoSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const AGE_NOTICE_PROMO_SHEET_KEY = "AGE_NOTICE_PROMO_SHEET_KEY";
const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/openAgeNoticePromoSheet.tsx");
const AGE_NOTICE_PROMO_SHEET_KEY_export = "AGE_NOTICE_PROMO_SHEET_KEY";

export default function openAgeNoticePromoSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16926, dependencyMap.paths), AGE_NOTICE_PROMO_SHEET_KEY, arg0);
};
export { AGE_NOTICE_PROMO_SHEET_KEY_export as AGE_NOTICE_PROMO_SHEET_KEY };
