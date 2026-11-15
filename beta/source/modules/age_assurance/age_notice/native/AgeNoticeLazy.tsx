// Module ID: 16965
// Function ID: 16966
// Name: AgeNoticeLazy
// Dependencies: [2, 16966, 16967]

// Module 16965 (AgeNoticeLazy)
import AgeNoticeVisibility from "AgeNoticeVisibility" /* 16966 */;
import useShowAgeNoticePromoSheet from "useShowAgeNoticePromoSheet" /* 16967 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeLazy.tsx");
const useShowAgeNoticePromoSheet_export = useShowAgeNoticePromoSheet.useShowAgeNoticePromoSheet;

export const useShouldShowAgeNotice = AgeNoticeVisibility.useShouldShowAgeNotice;
export const useIsAgeNoticeEligible = useShowAgeNoticePromoSheet.useIsAgeNoticeEligible;
export { useShowAgeNoticePromoSheet_export as useShowAgeNoticePromoSheet };
