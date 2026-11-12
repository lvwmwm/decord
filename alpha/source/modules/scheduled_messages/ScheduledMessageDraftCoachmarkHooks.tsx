// Module ID: 14487
// Function ID: 14488
// Name: ScheduledMessageDraftCoachmarkHooks
// Dependencies: [32, 5076, 9493, 2]
// Exports: useScheduledMessageDraftCoachmarkState

// Module 14487 (ScheduledMessageDraftCoachmarkHooks)
import dismissible_content from "dismissible_content" /* 5076 */;
import useSelectedDismissibleContent2 from "useSelectedDismissibleContent" /* 9493 */;
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
