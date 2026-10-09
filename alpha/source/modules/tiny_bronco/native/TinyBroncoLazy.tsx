// Module ID: 14911
// Function ID: 14912
// Name: TinyBroncoLazy
// Dependencies: [2, 14912, 14913]

// Module 14911 (TinyBroncoLazy)
import TinyBroncoNoticeVisibility from "TinyBroncoNoticeVisibility" /* 14912 */;
import useShowTinyBroncoPromoSheet from "useShowTinyBroncoPromoSheet" /* 14913 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoLazy.tsx");
const useShowTinyBroncoPromoSheet_export = useShowTinyBroncoPromoSheet.useShowTinyBroncoPromoSheet;

export const useShouldShowAgeNotice = TinyBroncoNoticeVisibility.useShouldShowAgeNotice;
export const useIsTinyBroncoEligible = useShowTinyBroncoPromoSheet.useIsTinyBroncoEligible;
export { useShowTinyBroncoPromoSheet_export as useShowTinyBroncoPromoSheet };
