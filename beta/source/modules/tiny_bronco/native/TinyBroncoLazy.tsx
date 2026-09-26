// Module ID: 15020
// Function ID: 15021
// Name: TinyBroncoLazy
// Dependencies: [2, 15021, 15022]

// Module 15020 (TinyBroncoLazy)
import TinyBroncoNoticeVisibility from "TinyBroncoNoticeVisibility" /* 15021 */;
import useShowTinyBroncoPromoSheet from "useShowTinyBroncoPromoSheet" /* 15022 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoLazy.tsx");

export const useShouldShowAgeNotice = TinyBroncoNoticeVisibility.useShouldShowAgeNotice;
export const useIsTinyBroncoEligible = useShowTinyBroncoPromoSheet.useIsTinyBroncoEligible;
export const useShowTinyBroncoPromoSheet = useShowTinyBroncoPromoSheet.useShowTinyBroncoPromoSheet;
