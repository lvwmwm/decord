// Module ID: 16021
// Function ID: 16022
// Name: AgeNoticeLazy
// Dependencies: [2, 16022, 16023]

// Module 16021 (AgeNoticeLazy)
import AgeNoticeVisibility from "AgeNoticeVisibility" /* 16022 */;
import useShowAgeNoticePromoSheet from "useShowAgeNoticePromoSheet" /* 16023 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeLazy.tsx");
const useShowAgeNoticePromoSheet_export = useShowAgeNoticePromoSheet.useShowAgeNoticePromoSheet;

export const useShouldShowAgeNotice = AgeNoticeVisibility.useShouldShowAgeNotice;
export const useIsAgeNoticeEligible = useShowAgeNoticePromoSheet.useIsAgeNoticeEligible;
export { useShowAgeNoticePromoSheet_export as useShowAgeNoticePromoSheet };
