// Module ID: 16167
// Function ID: 16168
// Name: AgeNoticeLazy
// Dependencies: [2, 16168, 16169]

// Module 16167 (AgeNoticeLazy)
import AgeNoticeVisibility from "AgeNoticeVisibility" /* 16168 */;
import useShowAgeNoticePromoSheet from "useShowAgeNoticePromoSheet" /* 16169 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeLazy.tsx");
const useShowAgeNoticePromoSheet_export = useShowAgeNoticePromoSheet.useShowAgeNoticePromoSheet;

export const useShouldShowAgeNotice = AgeNoticeVisibility.useShouldShowAgeNotice;
export const useIsAgeNoticeEligible = useShowAgeNoticePromoSheet.useIsAgeNoticeEligible;
export { useShowAgeNoticePromoSheet_export as useShowAgeNoticePromoSheet };
