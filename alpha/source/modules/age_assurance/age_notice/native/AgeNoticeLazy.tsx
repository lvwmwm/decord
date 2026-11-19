// Module ID: 15926
// Function ID: 15927
// Name: AgeNoticeLazy
// Dependencies: [2, 15927, 15928]

// Module 15926 (AgeNoticeLazy)
import AgeNoticeVisibility from "AgeNoticeVisibility" /* 15927 */;
import useShowAgeNoticePromoSheet from "useShowAgeNoticePromoSheet" /* 15928 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeLazy.tsx");
const useShowAgeNoticePromoSheet_export = useShowAgeNoticePromoSheet.useShowAgeNoticePromoSheet;

export const useShouldShowAgeNotice = AgeNoticeVisibility.useShouldShowAgeNotice;
export const useIsAgeNoticeEligible = useShowAgeNoticePromoSheet.useIsAgeNoticeEligible;
export { useShowAgeNoticePromoSheet_export as useShowAgeNoticePromoSheet };
