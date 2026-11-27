// Module ID: 16227
// Function ID: 16228
// Name: useShowAgeNoticePromoSheet
// Dependencies: [19, 16226, 4876, 16228, 2]
// Exports: useIsAgeNoticeEligible, useShowAgeNoticePromoSheet

// Module 16227 (useShowAgeNoticePromoSheet)
import dismissible_content from "dismissible_content" /* 4876 */;
import AgeNoticeVisibility from "AgeNoticeVisibility" /* 16226 */;
import openAgeNoticePromoSheetDefault from "openAgeNoticePromoSheet" /* 16228 */;
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
