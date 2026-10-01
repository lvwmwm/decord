// Module ID: 14277
// Function ID: 14278
// Name: useShowTinyBroncoPromoSheet
// Dependencies: [19, 14276, 2029, 14278, 2]
// Exports: useIsTinyBroncoEligible, useShowTinyBroncoPromoSheet

// Module 14277 (useShowTinyBroncoPromoSheet)
import dismissible_content from "dismissible_content" /* 2029 */;
import TinyBroncoNoticeVisibility from "TinyBroncoNoticeVisibility" /* 14276 */;
import openTinyBroncoPromoSheetDefault from "openTinyBroncoPromoSheet" /* 14278 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tiny_bronco/native/useShowTinyBroncoPromoSheet.tsx");

export const useIsTinyBroncoEligible = function useIsTinyBroncoEligible() {
  const obj = TinyBroncoNoticeVisibility;
  return obj.useShouldShowAgeNoticePromo();
};
export const useShowTinyBroncoPromoSheet = function useShowTinyBroncoPromoSheet(visibleContent) {
  visibleContent = visibleContent.visibleContent;
  const markAsDismissed = visibleContent.markAsDismissed;
  const ref = react.useRef(false);
  const items = [markAsDismissed, visibleContent];
  const effect = react.useEffect(() => {
    let current = ref.current;
    const tmp = ref;
    if (!current) {
      current = visibleContent !== dismissible_content.DismissibleContent.TINY_BRONCO;
    }
    if (!current) {
      tmp.current = true;
      const obj = { markAsDismissed };
      openTinyBroncoPromoSheetDefault(obj);
    }
  }, items);
};
