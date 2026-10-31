// Module ID: 16605
// Function ID: 16606
// Name: useShowTinyBroncoPromoSheet
// Dependencies: [19, 16604, 4847, 16606, 2]
// Exports: useIsTinyBroncoEligible, useShowTinyBroncoPromoSheet

// Module 16605 (useShowTinyBroncoPromoSheet)
import dismissible_content from "dismissible_content" /* 4847 */;
import TinyBroncoNoticeVisibility from "TinyBroncoNoticeVisibility" /* 16604 */;
import openTinyBroncoPromoSheetDefault from "openTinyBroncoPromoSheet" /* 16606 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tiny_bronco/native/useShowTinyBroncoPromoSheet.tsx");

export function useIsTinyBroncoEligible() {
  const obj = TinyBroncoNoticeVisibility;
  return obj.useShouldShowAgeNoticePromo();
}
export function useShowTinyBroncoPromoSheet(visibleContent) {
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
}
