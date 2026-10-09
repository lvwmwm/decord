// Module ID: 14913
// Function ID: 14914
// Name: useShowTinyBroncoPromoSheet
// Dependencies: [19, 558, 14912, 576, 2049, 14914, 2]
// Exports: useIsTinyBroncoEligible

// Module 14913 (useShowTinyBroncoPromoSheet)
import dismissible_content from "dismissible_content" /* 2049 */;
import TinyBroncoNoticeVisibility from "TinyBroncoNoticeVisibility" /* 14912 */;
import openTinyBroncoPromoSheetDefault from "openTinyBroncoPromoSheet" /* 14914 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useShowTinyBroncoPromoSheet(visibleContent) {
  let ref;
  let obj = visibleContent(576);
  const cResult = obj.c(4);
  visibleContent = visibleContent.visibleContent;
  const markAsDismissed = visibleContent.markAsDismissed;
  dependencyMap = react.useRef(false);
  const obj2 = react;
  if (cResult[0] === markAsDismissed) {
    let tmp2;
    let tmp3;
    if (cResult[1] === visibleContent) {
      tmp2 = cResult[2];
      tmp3 = cResult[3];
    }
    const effect = obj2.useEffect(tmp2, tmp3);
  }
  const fn = function n() {
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
  };
  const items = [markAsDismissed, visibleContent];
  cResult[0] = markAsDismissed;
  cResult[1] = visibleContent;
  cResult[2] = fn;
  cResult[3] = items;
  tmp3 = items;
  tmp2 = fn;
}) : (function useShowTinyBroncoPromoSheet(visibleContent) {
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
});
function useIsTinyBroncoEligible() {
  const obj = TinyBroncoNoticeVisibility;
  return obj.useShouldShowAgeNoticePromo();
}
const result1 = size.fileFinishedImporting("modules/tiny_bronco/native/useShowTinyBroncoPromoSheet.tsx");

export { useIsTinyBroncoEligible };
export const useShowTinyBroncoPromoSheet = tmp3;
