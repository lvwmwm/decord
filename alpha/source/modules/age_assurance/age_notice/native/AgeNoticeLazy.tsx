// Module ID: 15890
// Function ID: 15891
// Name: AgeNoticeLazy
// Dependencies: [2, 15891, 15892]

// Module 15890 (AgeNoticeLazy)
import AgeNoticeVisibility from "AgeNoticeVisibility" /* 15891 */;
import useShowAgeNoticePromoSheet from "useShowAgeNoticePromoSheet" /* 15892 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeLazy.tsx");
const useShowAgeNoticePromoSheet_export = useShowAgeNoticePromoSheet.useShowAgeNoticePromoSheet;

export const useShouldShowAgeNotice = AgeNoticeVisibility.useShouldShowAgeNotice;
export const useIsAgeNoticeEligible = useShowAgeNoticePromoSheet.useIsAgeNoticeEligible;
export { useShowAgeNoticePromoSheet_export as useShowAgeNoticePromoSheet };
