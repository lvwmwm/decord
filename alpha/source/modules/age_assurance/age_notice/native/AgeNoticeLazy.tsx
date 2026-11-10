// Module ID: 16960
// Function ID: 16961
// Name: AgeNoticeLazy
// Dependencies: [2, 16961, 16962]

// Module 16960 (AgeNoticeLazy)
import AgeNoticeVisibility from "AgeNoticeVisibility" /* 16961 */;
import useShowAgeNoticePromoSheet from "useShowAgeNoticePromoSheet" /* 16962 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeLazy.tsx");
const useShowAgeNoticePromoSheet_export = useShowAgeNoticePromoSheet.useShowAgeNoticePromoSheet;

export const useShouldShowAgeNotice = AgeNoticeVisibility.useShouldShowAgeNotice;
export const useIsAgeNoticeEligible = useShowAgeNoticePromoSheet.useIsAgeNoticeEligible;
export { useShowAgeNoticePromoSheet_export as useShowAgeNoticePromoSheet };
