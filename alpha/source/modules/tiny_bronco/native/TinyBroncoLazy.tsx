// Module ID: 15944
// Function ID: 15945
// Name: TinyBroncoLazy
// Dependencies: [2, 15945, 15946]

// Module 15944 (TinyBroncoLazy)
import TinyBroncoNoticeVisibility from "TinyBroncoNoticeVisibility" /* 15945 */;
import useShowTinyBroncoPromoSheet from "useShowTinyBroncoPromoSheet" /* 15946 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoLazy.tsx");
const useShowTinyBroncoPromoSheet_export = useShowTinyBroncoPromoSheet.useShowTinyBroncoPromoSheet;

export const useShouldShowAgeNotice = TinyBroncoNoticeVisibility.useShouldShowAgeNotice;
export const useIsTinyBroncoEligible = useShowTinyBroncoPromoSheet.useIsTinyBroncoEligible;
export { useShowTinyBroncoPromoSheet_export as useShowTinyBroncoPromoSheet };
