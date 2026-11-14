// Module ID: 17241
// Function ID: 17242
// Name: AgeNoticeLazy
// Dependencies: [2, 17242, 17243]

// Module 17241 (AgeNoticeLazy)
import AgeNoticeVisibility from "AgeNoticeVisibility" /* 17242 */;
import useShowAgeNoticePromoSheet from "useShowAgeNoticePromoSheet" /* 17243 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeLazy.tsx");
const useShowAgeNoticePromoSheet_export = useShowAgeNoticePromoSheet.useShowAgeNoticePromoSheet;

export const useShouldShowAgeNotice = AgeNoticeVisibility.useShouldShowAgeNotice;
export const useIsAgeNoticeEligible = useShowAgeNoticePromoSheet.useIsAgeNoticeEligible;
export { useShowAgeNoticePromoSheet_export as useShowAgeNoticePromoSheet };
