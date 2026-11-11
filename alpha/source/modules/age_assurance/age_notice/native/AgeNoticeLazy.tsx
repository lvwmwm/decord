// Module ID: 17123
// Function ID: 17124
// Name: AgeNoticeLazy
// Dependencies: [2, 17124, 17125]

// Module 17123 (AgeNoticeLazy)
import AgeNoticeVisibility from "AgeNoticeVisibility" /* 17124 */;
import useShowAgeNoticePromoSheet from "useShowAgeNoticePromoSheet" /* 17125 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeLazy.tsx");
const useShowAgeNoticePromoSheet_export = useShowAgeNoticePromoSheet.useShowAgeNoticePromoSheet;

export const useShouldShowAgeNotice = AgeNoticeVisibility.useShouldShowAgeNotice;
export const useIsAgeNoticeEligible = useShowAgeNoticePromoSheet.useIsAgeNoticeEligible;
export { useShowAgeNoticePromoSheet_export as useShowAgeNoticePromoSheet };
