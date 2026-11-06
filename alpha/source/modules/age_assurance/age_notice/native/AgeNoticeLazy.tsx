// Module ID: 16874
// Function ID: 16875
// Name: AgeNoticeLazy
// Dependencies: [2, 16875, 16876]

// Module 16874 (AgeNoticeLazy)
import AgeNoticeVisibility from "AgeNoticeVisibility" /* 16875 */;
import useShowAgeNoticePromoSheet from "useShowAgeNoticePromoSheet" /* 16876 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeLazy.tsx");
const useShowAgeNoticePromoSheet_export = useShowAgeNoticePromoSheet.useShowAgeNoticePromoSheet;

export const useShouldShowAgeNotice = AgeNoticeVisibility.useShouldShowAgeNotice;
export const useIsAgeNoticeEligible = useShowAgeNoticePromoSheet.useIsAgeNoticeEligible;
export { useShowAgeNoticePromoSheet_export as useShowAgeNoticePromoSheet };
