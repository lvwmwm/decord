// Module ID: 16964
// Function ID: 16965
// Name: AgeNoticeLazy
// Dependencies: [2, 16965, 16966]

// Module 16964 (AgeNoticeLazy)
import AgeNoticeVisibility from "AgeNoticeVisibility" /* 16965 */;
import useShowAgeNoticePromoSheet from "useShowAgeNoticePromoSheet" /* 16966 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeLazy.tsx");
const useShowAgeNoticePromoSheet_export = useShowAgeNoticePromoSheet.useShowAgeNoticePromoSheet;

export const useShouldShowAgeNotice = AgeNoticeVisibility.useShouldShowAgeNotice;
export const useIsAgeNoticeEligible = useShowAgeNoticePromoSheet.useIsAgeNoticeEligible;
export { useShowAgeNoticePromoSheet_export as useShowAgeNoticePromoSheet };
