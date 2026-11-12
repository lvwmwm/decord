// Module ID: 17118
// Function ID: 17119
// Name: AgeNoticeLazy
// Dependencies: [2, 17119, 17120]

// Module 17118 (AgeNoticeLazy)
import AgeNoticeVisibility from "AgeNoticeVisibility" /* 17119 */;
import useShowAgeNoticePromoSheet from "useShowAgeNoticePromoSheet" /* 17120 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeLazy.tsx");
const useShowAgeNoticePromoSheet_export = useShowAgeNoticePromoSheet.useShowAgeNoticePromoSheet;

export const useShouldShowAgeNotice = AgeNoticeVisibility.useShouldShowAgeNotice;
export const useIsAgeNoticeEligible = useShowAgeNoticePromoSheet.useIsAgeNoticeEligible;
export { useShowAgeNoticePromoSheet_export as useShowAgeNoticePromoSheet };
