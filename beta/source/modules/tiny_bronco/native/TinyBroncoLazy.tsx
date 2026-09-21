// Module ID: 14992
// Function ID: 14993
// Name: TinyBroncoLazy
// Dependencies: [2]
// Exports: useIsTinyBroncoEligible, useShouldShowAgeNotice, useShowTinyBroncoPromoSheet

// Module 14992 (TinyBroncoLazy)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoLazy.tsx");

export function useShouldShowAgeNotice() {
  return false;
}
export function useIsTinyBroncoEligible() {
  return false;
}
export const useShowTinyBroncoPromoSheet = function useShowTinyBroncoPromoSheet(arg0) {
  ({ visibleContent, markAsDismissed } = arg0);
};
