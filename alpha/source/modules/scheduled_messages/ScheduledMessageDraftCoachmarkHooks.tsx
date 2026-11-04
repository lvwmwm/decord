// Module ID: 13970
// Function ID: 13971
// Name: ScheduledMessageDraftCoachmarkHooks
// Dependencies: [32, 4974, 7709, 2]
// Exports: useScheduledMessageDraftCoachmarkState

// Module 13970 (ScheduledMessageDraftCoachmarkHooks)
import dismissible_content from "dismissible_content" /* 4974 */;
import useSelectedDismissibleContent2 from "useSelectedDismissibleContent" /* 7709 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let closure_3 = dismissible_content.DismissibleContent.SCHEDULED_MESSAGES_DRAFT_COACHMARK;
const result = size.fileFinishedImporting("modules/scheduled_messages/ScheduledMessageDraftCoachmarkHooks.tsx");

export function useScheduledMessageDraftCoachmarkState(isEligible) {
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
}
