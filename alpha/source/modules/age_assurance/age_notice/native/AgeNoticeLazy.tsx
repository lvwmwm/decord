// Module ID: 16225
// Function ID: 16226
// Name: AgeNoticeLazy
// Dependencies: [2, 16226, 16227]

// Module 16225 (AgeNoticeLazy)
import AgeNoticeVisibility from "AgeNoticeVisibility" /* 16226 */;
import useShowAgeNoticePromoSheet from "useShowAgeNoticePromoSheet" /* 16227 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeLazy.tsx");
const useShowAgeNoticePromoSheet_export = useShowAgeNoticePromoSheet.useShowAgeNoticePromoSheet;

export const useShouldShowAgeNotice = AgeNoticeVisibility.useShouldShowAgeNotice;
export const useIsAgeNoticeEligible = useShowAgeNoticePromoSheet.useIsAgeNoticeEligible;
export { useShowAgeNoticePromoSheet_export as useShowAgeNoticePromoSheet };
