// Module ID: 17243
// Function ID: 17244
// Name: AgeNoticeLazy
// Dependencies: [2, 17244, 17245]

// Module 17243 (AgeNoticeLazy)
import AgeNoticeVisibility from "AgeNoticeVisibility" /* 17244 */;
import useShowAgeNoticePromoSheet from "useShowAgeNoticePromoSheet" /* 17245 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeLazy.tsx");
const useShowAgeNoticePromoSheet_export = useShowAgeNoticePromoSheet.useShowAgeNoticePromoSheet;

export const useShouldShowAgeNotice = AgeNoticeVisibility.useShouldShowAgeNotice;
export const useIsAgeNoticeEligible = useShowAgeNoticePromoSheet.useIsAgeNoticeEligible;
export { useShowAgeNoticePromoSheet_export as useShowAgeNoticePromoSheet };
