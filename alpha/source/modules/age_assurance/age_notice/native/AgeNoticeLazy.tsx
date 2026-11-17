// Module ID: 17278
// Function ID: 17279
// Name: AgeNoticeLazy
// Dependencies: [2, 17279, 17280]

// Module 17278 (AgeNoticeLazy)
import AgeNoticeVisibility from "AgeNoticeVisibility" /* 17279 */;
import useShowAgeNoticePromoSheet from "useShowAgeNoticePromoSheet" /* 17280 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeLazy.tsx");
const useShowAgeNoticePromoSheet_export = useShowAgeNoticePromoSheet.useShowAgeNoticePromoSheet;

export const useShouldShowAgeNotice = AgeNoticeVisibility.useShouldShowAgeNotice;
export const useIsAgeNoticeEligible = useShowAgeNoticePromoSheet.useIsAgeNoticeEligible;
export { useShowAgeNoticePromoSheet_export as useShowAgeNoticePromoSheet };
