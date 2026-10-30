// Module ID: 16561
// Function ID: 16562
// Name: TinyBroncoLazy
// Dependencies: [2, 16562, 16563]

// Module 16561 (TinyBroncoLazy)
import TinyBroncoNoticeVisibility from "TinyBroncoNoticeVisibility" /* 16562 */;
import useShowTinyBroncoPromoSheet from "useShowTinyBroncoPromoSheet" /* 16563 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoLazy.tsx");
const useShowTinyBroncoPromoSheet_export = useShowTinyBroncoPromoSheet.useShowTinyBroncoPromoSheet;

export const useShouldShowAgeNotice = TinyBroncoNoticeVisibility.useShouldShowAgeNotice;
export const useIsTinyBroncoEligible = useShowTinyBroncoPromoSheet.useIsTinyBroncoEligible;
export { useShowTinyBroncoPromoSheet_export as useShowTinyBroncoPromoSheet };
