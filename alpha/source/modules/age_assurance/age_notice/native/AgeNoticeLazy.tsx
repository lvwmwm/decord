// Module ID: 15935
// Function ID: 15936
// Name: AgeNoticeLazy
// Dependencies: [2, 15936, 15937]

// Module 15935 (AgeNoticeLazy)
import AgeNoticeVisibility from "AgeNoticeVisibility" /* 15936 */;
import useShowAgeNoticePromoSheet from "useShowAgeNoticePromoSheet" /* 15937 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeLazy.tsx");
const useShowAgeNoticePromoSheet_export = useShowAgeNoticePromoSheet.useShowAgeNoticePromoSheet;

export const useShouldShowAgeNotice = AgeNoticeVisibility.useShouldShowAgeNotice;
export const useIsAgeNoticeEligible = useShowAgeNoticePromoSheet.useIsAgeNoticeEligible;
export { useShowAgeNoticePromoSheet_export as useShowAgeNoticePromoSheet };
