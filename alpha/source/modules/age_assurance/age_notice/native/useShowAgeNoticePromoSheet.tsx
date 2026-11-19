// Module ID: 15928
// Function ID: 15929
// Name: useShowAgeNoticePromoSheet
// Dependencies: [19, 15927, 4625, 15929, 2]
// Exports: useIsAgeNoticeEligible, useShowAgeNoticePromoSheet

// Module 15928 (useShowAgeNoticePromoSheet)
import dismissible_content from "dismissible_content" /* 4625 */;
import AgeNoticeVisibility from "AgeNoticeVisibility" /* 15927 */;
import openAgeNoticePromoSheetDefault from "openAgeNoticePromoSheet" /* 15929 */;
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
