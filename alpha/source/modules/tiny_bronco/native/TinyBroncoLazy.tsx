// Module ID: 14803
// Function ID: 14804
// Name: TinyBroncoLazy
// Dependencies: [2, 14804, 14805]

// Module 14803 (TinyBroncoLazy)
import TinyBroncoNoticeVisibility from "TinyBroncoNoticeVisibility" /* 14804 */;
import useShowTinyBroncoPromoSheet from "useShowTinyBroncoPromoSheet" /* 14805 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoLazy.tsx");
const useShowTinyBroncoPromoSheet_export = useShowTinyBroncoPromoSheet.useShowTinyBroncoPromoSheet;

export const useShouldShowAgeNotice = TinyBroncoNoticeVisibility.useShouldShowAgeNotice;
export const useIsTinyBroncoEligible = useShowTinyBroncoPromoSheet.useIsTinyBroncoEligible;
export { useShowTinyBroncoPromoSheet_export as useShowTinyBroncoPromoSheet };
