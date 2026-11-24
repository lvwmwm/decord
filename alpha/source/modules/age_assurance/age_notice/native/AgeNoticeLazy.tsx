// Module ID: 16046
// Function ID: 16047
// Name: AgeNoticeLazy
// Dependencies: [2, 16047, 16048]

// Module 16046 (AgeNoticeLazy)
import AgeNoticeVisibility from "AgeNoticeVisibility" /* 16047 */;
import useShowAgeNoticePromoSheet from "useShowAgeNoticePromoSheet" /* 16048 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeLazy.tsx");
const useShowAgeNoticePromoSheet_export = useShowAgeNoticePromoSheet.useShowAgeNoticePromoSheet;

export const useShouldShowAgeNotice = AgeNoticeVisibility.useShouldShowAgeNotice;
export const useIsAgeNoticeEligible = useShowAgeNoticePromoSheet.useIsAgeNoticeEligible;
export { useShowAgeNoticePromoSheet_export as useShowAgeNoticePromoSheet };
