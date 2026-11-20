// Module ID: 15892
// Function ID: 15893
// Name: useShowAgeNoticePromoSheet
// Dependencies: [19, 15891, 4627, 15893, 2]
// Exports: useIsAgeNoticeEligible, useShowAgeNoticePromoSheet

// Module 15892 (useShowAgeNoticePromoSheet)
import dismissible_content from "dismissible_content" /* 4627 */;
import AgeNoticeVisibility from "AgeNoticeVisibility" /* 15891 */;
import openAgeNoticePromoSheetDefault from "openAgeNoticePromoSheet" /* 15893 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/useShowAgeNoticePromoSheet.tsx");

export function useIsAgeNoticeEligible() {
  const obj = AgeNoticeVisibility;
  return obj.useShouldShowAgeNoticePromo();
}
export function useShowAgeNoticePromoSheet(visibleContent) {
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
