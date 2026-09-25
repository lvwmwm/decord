// Module ID: 14251
// Function ID: 14252
// Name: TinyBroncoLazy
// Dependencies: [2, 14252, 14253]

// Module 14251 (TinyBroncoLazy)
import TinyBroncoNoticeVisibility from "TinyBroncoNoticeVisibility" /* 14252 */;
import useShowTinyBroncoPromoSheet from "useShowTinyBroncoPromoSheet" /* 14253 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoLazy.tsx");

export const useShouldShowAgeNotice = TinyBroncoNoticeVisibility.useShouldShowAgeNotice;
export const useIsTinyBroncoEligible = useShowTinyBroncoPromoSheet.useIsTinyBroncoEligible;
export const useShowTinyBroncoPromoSheet = useShowTinyBroncoPromoSheet.useShowTinyBroncoPromoSheet;
