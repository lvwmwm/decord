// Module ID: 15937
// Function ID: 15938
// Name: useShowAgeNoticePromoSheet
// Dependencies: [19, 15936, 4656, 15938, 2]
// Exports: useIsAgeNoticeEligible, useShowAgeNoticePromoSheet

// Module 15937 (useShowAgeNoticePromoSheet)
import dismissible_content from "dismissible_content" /* 4656 */;
import AgeNoticeVisibility from "AgeNoticeVisibility" /* 15936 */;
import openAgeNoticePromoSheetDefault from "openAgeNoticePromoSheet" /* 15938 */;
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
