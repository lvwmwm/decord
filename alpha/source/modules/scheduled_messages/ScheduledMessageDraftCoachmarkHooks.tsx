// Module ID: 11614
// Function ID: 11615
// Name: ScheduledMessageDraftCoachmarkHooks
// Dependencies: [32, 2049, 558, 576, 7093, 2]

// Module 11614 (ScheduledMessageDraftCoachmarkHooks)
import react from "react" /* 576 */;
import dismissible_content from "dismissible_content" /* 2049 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const useSelectedDismissibleContent2 = tmp(7093);
let closure_3 = dismissible_content.DismissibleContent.SCHEDULED_MESSAGES_DRAFT_COACHMARK;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useScheduledMessageDraftCoachmarkState(isEligible) {
  let tmp4;
  const obj = react;
  const cResult = obj.c(5);
  isEligible = isEligible.isEligible;
  if (cResult[0] !== isEligible) {
    let items1;
    if (isEligible) {
      const items = [closure_3];
      items1 = items;
    } else {
      items1 = [];
    }
    cResult[0] = isEligible;
    cResult[1] = items1;
    tmp4 = items1;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult = useSelectedDismissibleContent2;
  const tmp6 = _slicedToArray(tmpResult.useSelectedDismissibleContent(tmp4), 2);
  if (cResult[2] === tmp6[1]) {
    let tmp9;
    if (cResult[3] === tmp6[0] === closure_3) {
      tmp9 = cResult[4];
    }
    return tmp9;
  }
  const obj2 = { isCoachmarkVisible: tmp6[0] === closure_3, dismissCoachmark: tmp6[1] };
  cResult[2] = tmp6[1];
  cResult[3] = tmp6[0] === closure_3;
  cResult[4] = obj2;
  tmp9 = obj2;
}) : (function useScheduledMessageDraftCoachmarkState(isEligible) {
  let items1;
  isEligible = isEligible.isEligible;
  const useSelectedDismissibleContent = useSelectedDismissibleContent2.useSelectedDismissibleContent;
  useSelectedDismissibleContent2;
  if (isEligible) {
    const items = [closure_3];
    items1 = items;
  } else {
    items1 = [];
  }
  const tmp3 = _slicedToArray(useSelectedDismissibleContent(items1), 2);
  return { isCoachmarkVisible: tmp3[0] === closure_3, dismissCoachmark: tmp3[1] };
});
const result = size.fileFinishedImporting("modules/scheduled_messages/ScheduledMessageDraftCoachmarkHooks.tsx");

export const useScheduledMessageDraftCoachmarkState = tmp2;
