// Module ID: 16853
// Function ID: 16854
// Name: useShowAgeNoticePromoSheet
// Dependencies: [19, 16852, 4974, 16854, 2]
// Exports: useIsTinyBroncoEligible, useShowTinyBroncoPromoSheet

// Module 16853 (useShowAgeNoticePromoSheet)
import dismissible_content from "dismissible_content" /* 4974 */;
import AgeNoticeVisibility from "AgeNoticeVisibility" /* 16852 */;
import openAgeNoticePromoSheetDefault from "openAgeNoticePromoSheet" /* 16854 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/useShowAgeNoticePromoSheet.tsx");

export function useIsTinyBroncoEligible() {
  const obj = AgeNoticeVisibility;
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
      openAgeNoticePromoSheetDefault(obj);
    }
  }, items);
}
