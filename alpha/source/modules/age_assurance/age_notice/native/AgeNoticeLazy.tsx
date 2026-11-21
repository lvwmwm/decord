// Module ID: 16013
// Function ID: 16014
// Name: AgeNoticeLazy
// Dependencies: [2, 16014, 16015]

// Module 16013 (AgeNoticeLazy)
import AgeNoticeVisibility from "AgeNoticeVisibility" /* 16014 */;
import useShowAgeNoticePromoSheet from "useShowAgeNoticePromoSheet" /* 16015 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeLazy.tsx");
const useShowAgeNoticePromoSheet_export = useShowAgeNoticePromoSheet.useShowAgeNoticePromoSheet;

export const useShouldShowAgeNotice = AgeNoticeVisibility.useShouldShowAgeNotice;
export const useIsAgeNoticeEligible = useShowAgeNoticePromoSheet.useIsAgeNoticeEligible;
export { useShowAgeNoticePromoSheet_export as useShowAgeNoticePromoSheet };
