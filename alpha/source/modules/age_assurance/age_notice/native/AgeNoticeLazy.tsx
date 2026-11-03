// Module ID: 16759
// Function ID: 16760
// Name: AgeNoticeLazy
// Dependencies: [2, 16760, 16761]

// Module 16759 (AgeNoticeLazy)
import AgeNoticeVisibility from "AgeNoticeVisibility" /* 16760 */;
import useShowAgeNoticePromoSheet from "useShowAgeNoticePromoSheet" /* 16761 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeLazy.tsx");

export const useShouldShowAgeNotice = AgeNoticeVisibility.useShouldShowAgeNotice;
export const useIsTinyBroncoEligible = useShowAgeNoticePromoSheet.useIsTinyBroncoEligible;
export const useShowTinyBroncoPromoSheet = useShowAgeNoticePromoSheet.useShowTinyBroncoPromoSheet;
