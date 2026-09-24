// Module ID: 15016
// Function ID: 15017
// Name: TinyBroncoLazy
// Dependencies: [2, 15017, 15018]

// Module 15016 (TinyBroncoLazy)
import TinyBroncoNoticeVisibility from "TinyBroncoNoticeVisibility" /* 15017 */;
import useShowTinyBroncoPromoSheet from "useShowTinyBroncoPromoSheet" /* 15018 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoLazy.tsx");

export const useShouldShowAgeNotice = TinyBroncoNoticeVisibility.useShouldShowAgeNotice;
export const useIsTinyBroncoEligible = useShowTinyBroncoPromoSheet.useIsTinyBroncoEligible;
export const useShowTinyBroncoPromoSheet = useShowTinyBroncoPromoSheet.useShowTinyBroncoPromoSheet;
