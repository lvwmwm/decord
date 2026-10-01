// Module ID: 11468
// Function ID: 11469
// Name: ScheduledMessageDraftCoachmarkHooks
// Dependencies: [32, 19, 5589, 5200, 2042, 2029, 4654, 504, 2031, 2]
// Exports: useScheduledMessageDraftCoachmarkState

// Module 11468 (ScheduledMessageDraftCoachmarkHooks)
import dismissible_content from "dismissible_content" /* 2029 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 2031 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4654 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5589 */;
import DraftStore from "DraftStore" /* 5200 */;
import size from "module_2" /* 2 */;

let dependencyMap;

const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let closure_7 = dismissible_content.DismissibleContent.SCHEDULED_MESSAGES_DRAFT_COACHMARK;
let result = size.fileFinishedImporting("modules/scheduled_messages/ScheduledMessageDraftCoachmarkHooks.tsx");

export const useScheduledMessageDraftCoachmarkState = function useScheduledMessageDraftCoachmarkState(channel) {
  let c1;
  let draftText;
  let isEligible;
  channel = channel.channel;
  ({ draftText, isEligible } = channel);
  isEligible = undefined;
  let first;
  let connected;
  let isCoachmarkVisible;
  let obj = channel(4654);
  let result = obj.useIsDismissibleContentDismissed_UNSAFE(closure_7);
  dependencyMap = result;
  let obj2 = channel(504);
  const items = [isCoachmarkVisible];
  const stateFromStores = obj2.useStateFromStores(items, () => null != DraftStore.getScheduledMessage(channel.id));
  let obj3 = channel(504);
  const items1 = [connected];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => connected.isConnected());
  if (isEligible) {
    isEligible = draftText.trim().length > 10;
  }
  if (isEligible) {
    isEligible = !stateFromStores;
  }
  if (isEligible) {
    isEligible = stateFromStores1;
  }
  const tmp5 = isEligible(first.useState(false), 2);
  first = tmp5[0];
  connected = tmp7;
  isCoachmarkVisible = first && isEligible;
  const tmp4Result = isEligible(first.useState("0"), 2);
  if (tmp4Result[0] !== channel.id) {
    tmp10(channel.id);
    const tmp12 = isEligible && !result;
    tmp5[1](tmp12);
  }
  const items2 = [isEligible, result, first, draftText];
  const effect = obj4.useEffect(() => {
    let closure_0;
    const tmp = isEligible;
    if (tmp) {
      const tmp2 = c1;
      if (!tmp2) {
        const tmp3 = first;
        if (!tmp3) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => connected(true), 60000);
          return () => clearTimeout(closure_0);
        }
      }
    }
  }, items2);
  const tmp15 = !isEligible && first;
  if (tmp15) {
    tmp5[1](false);
  }
  const items3 = [isCoachmarkVisible];
  const dismissCoachmark = obj4.useCallback((dismissAction) => {
    connected(false);
    const obj = DismissibleContentUnsafeUtils;
    const obj2 = { dismissAction };
    const result = obj.UNSAFE_markDismissibleContentAsDismissed(closure_7, obj2);
  }, []);
  const effect1 = obj4.useEffect(() => {
    const tmp = isCoachmarkVisible;
    if (tmp) {
      const obj = DismissibleContentUtils;
      const result = obj.trackDismissibleContentShown(closure_7);
      const obj3 = { dismissAction: ContentDismissActionType.AUTO_DISMISS };
      const obj2 = DismissibleContentUnsafeUtils;
      const result1 = obj2.UNSAFE_markDismissibleContentAsDismissed(closure_7, obj3);
    }
  }, items3);
  return { isCoachmarkVisible, dismissCoachmark };
};
