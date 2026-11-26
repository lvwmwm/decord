// Module ID: 16218
// Function ID: 16219
// Name: AgeNoticeLazy
// Dependencies: [2, 16219, 16220]

// Module 16218 (AgeNoticeLazy)
import AgeNoticeVisibility from "AgeNoticeVisibility" /* 16219 */;
import useShowAgeNoticePromoSheet from "useShowAgeNoticePromoSheet" /* 16220 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeLazy.tsx");
const useShowAgeNoticePromoSheet_export = useShowAgeNoticePromoSheet.useShowAgeNoticePromoSheet;

export const useShouldShowAgeNotice = AgeNoticeVisibility.useShouldShowAgeNotice;
export const useIsAgeNoticeEligible = useShowAgeNoticePromoSheet.useIsAgeNoticeEligible;
export { useShowAgeNoticePromoSheet_export as useShowAgeNoticePromoSheet };
