// Module ID: 16613
// Function ID: 16614
// Name: useShowTinyBroncoPromoSheet
// Dependencies: [19, 16612, 4847, 16614, 2]
// Exports: useIsTinyBroncoEligible, useShowTinyBroncoPromoSheet

// Module 16613 (useShowTinyBroncoPromoSheet)
import dismissible_content from "dismissible_content" /* 4847 */;
import TinyBroncoNoticeVisibility from "TinyBroncoNoticeVisibility" /* 16612 */;
import openTinyBroncoPromoSheetDefault from "openTinyBroncoPromoSheet" /* 16614 */;
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
