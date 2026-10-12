// Module ID: 14993
// Function ID: 14994
// Name: TinyBroncoLazy
// Dependencies: [2, 14994, 14995]

// Module 14993 (TinyBroncoLazy)
import TinyBroncoNoticeVisibility from "TinyBroncoNoticeVisibility" /* 14994 */;
import useShowTinyBroncoPromoSheet from "useShowTinyBroncoPromoSheet" /* 14995 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoLazy.tsx");
const useShowTinyBroncoPromoSheet_export = useShowTinyBroncoPromoSheet.useShowTinyBroncoPromoSheet;

export const useShouldShowAgeNotice = TinyBroncoNoticeVisibility.useShouldShowAgeNotice;
export const useIsTinyBroncoEligible = useShowTinyBroncoPromoSheet.useIsTinyBroncoEligible;
export { useShowTinyBroncoPromoSheet_export as useShowTinyBroncoPromoSheet };
