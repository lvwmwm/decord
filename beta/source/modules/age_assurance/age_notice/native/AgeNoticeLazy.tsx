// Module ID: 16025
// Function ID: 16026
// Name: AgeNoticeLazy
// Dependencies: [2, 16026, 16027]

// Module 16025 (AgeNoticeLazy)
import AgeNoticeVisibility from "AgeNoticeVisibility" /* 16026 */;
import useShowAgeNoticePromoSheet from "useShowAgeNoticePromoSheet" /* 16027 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeLazy.tsx");
const useShowAgeNoticePromoSheet_export = useShowAgeNoticePromoSheet.useShowAgeNoticePromoSheet;

export const useShouldShowAgeNotice = AgeNoticeVisibility.useShouldShowAgeNotice;
export const useIsAgeNoticeEligible = useShowAgeNoticePromoSheet.useIsAgeNoticeEligible;
export { useShowAgeNoticePromoSheet_export as useShowAgeNoticePromoSheet };
