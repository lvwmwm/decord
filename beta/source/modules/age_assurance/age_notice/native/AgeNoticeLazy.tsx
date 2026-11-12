// Module ID: 16967
// Function ID: 16968
// Name: AgeNoticeLazy
// Dependencies: [2, 16968, 16969]

// Module 16967 (AgeNoticeLazy)
import AgeNoticeVisibility from "AgeNoticeVisibility" /* 16968 */;
import useShowAgeNoticePromoSheet from "useShowAgeNoticePromoSheet" /* 16969 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeLazy.tsx");
const useShowAgeNoticePromoSheet_export = useShowAgeNoticePromoSheet.useShowAgeNoticePromoSheet;

export const useShouldShowAgeNotice = AgeNoticeVisibility.useShouldShowAgeNotice;
export const useIsAgeNoticeEligible = useShowAgeNoticePromoSheet.useIsAgeNoticeEligible;
export { useShowAgeNoticePromoSheet_export as useShowAgeNoticePromoSheet };
