// Module ID: 16886
// Function ID: 16887
// Name: AgeNoticeLazy
// Dependencies: [2, 16887, 16888]

// Module 16886 (AgeNoticeLazy)
import AgeNoticeVisibility from "AgeNoticeVisibility" /* 16887 */;
import useShowAgeNoticePromoSheet from "useShowAgeNoticePromoSheet" /* 16888 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeLazy.tsx");
const useShowAgeNoticePromoSheet_export = useShowAgeNoticePromoSheet.useShowAgeNoticePromoSheet;

export const useShouldShowAgeNotice = AgeNoticeVisibility.useShouldShowAgeNotice;
export const useIsAgeNoticeEligible = useShowAgeNoticePromoSheet.useIsAgeNoticeEligible;
export { useShowAgeNoticePromoSheet_export as useShowAgeNoticePromoSheet };
