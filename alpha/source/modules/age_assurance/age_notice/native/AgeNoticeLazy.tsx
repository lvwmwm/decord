// Module ID: 16922
// Function ID: 16923
// Name: AgeNoticeLazy
// Dependencies: [2, 16923, 16924]

// Module 16922 (AgeNoticeLazy)
import AgeNoticeVisibility from "AgeNoticeVisibility" /* 16923 */;
import useShowAgeNoticePromoSheet from "useShowAgeNoticePromoSheet" /* 16924 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeLazy.tsx");
const useShowAgeNoticePromoSheet_export = useShowAgeNoticePromoSheet.useShowAgeNoticePromoSheet;

export const useShouldShowAgeNotice = AgeNoticeVisibility.useShouldShowAgeNotice;
export const useIsAgeNoticeEligible = useShowAgeNoticePromoSheet.useIsAgeNoticeEligible;
export { useShowAgeNoticePromoSheet_export as useShowAgeNoticePromoSheet };
