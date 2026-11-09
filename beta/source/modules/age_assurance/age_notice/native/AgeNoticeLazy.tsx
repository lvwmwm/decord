// Module ID: 16933
// Function ID: 16934
// Name: AgeNoticeLazy
// Dependencies: [2, 16934, 16935]

// Module 16933 (AgeNoticeLazy)
import AgeNoticeVisibility from "AgeNoticeVisibility" /* 16934 */;
import useShowAgeNoticePromoSheet from "useShowAgeNoticePromoSheet" /* 16935 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeLazy.tsx");
const useShowAgeNoticePromoSheet_export = useShowAgeNoticePromoSheet.useShowAgeNoticePromoSheet;

export const useShouldShowAgeNotice = AgeNoticeVisibility.useShouldShowAgeNotice;
export const useIsAgeNoticeEligible = useShowAgeNoticePromoSheet.useIsAgeNoticeEligible;
export { useShowAgeNoticePromoSheet_export as useShowAgeNoticePromoSheet };
