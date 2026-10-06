// Module ID: 11344
// Function ID: 11345
// Name: ScheduledMessageDraftCoachmarkHooks
// Dependencies: [32, 19, 5590, 5201, 2048, 2035, 558, 576, 4656, 504, 2037, 2]

// Module 11344 (ScheduledMessageDraftCoachmarkHooks)
import dismissible_content from "dismissible_content" /* 2035 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 2037 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4656 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5590 */;
import DraftStore from "DraftStore" /* 5201 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channel, dependencyMap;

const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let closure_7 = dismissible_content.DismissibleContent.SCHEDULED_MESSAGES_DRAFT_COACHMARK;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let connected;
  let draftText;
  let first;
  let isEligible;
  let tmp10;
  let tmp7;
  let tmp9;
  let tmp = channel;
  let tmp2 = dependencyMap;
  let obj = channel(576);
  const cResult = obj.c(25);
  channel = channel.channel;
  ({ draftText, isEligible } = channel);
  let obj2 = channel(4656);
  let result = obj2.useIsDismissibleContentDismissed_UNSAFE(closure_7);
  dependencyMap = result;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DraftStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel.id) {
    class C {
      constructor() {
        return null != closure_5.getScheduledMessage(channel.id);
      }
    }
    cResult[1] = channel.id;
    cResult[2] = C;
    tmp7 = C;
  } else {
    class C {
      constructor() {
        return null != closure_5.getScheduledMessage(channel.id);
      }
    }
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        return null != closure_5.getScheduledMessage(channel.id);
      }
    }
    const items1 = [GatewayConnectionStore];
    class E {
      constructor() {
        return closure_4.isConnected();
      }
    }
    cResult[3] = items1;
    cResult[4] = E;
    tmp10 = E;
    tmp9 = items1;
  } else {
    class C {
      constructor() {
        return null != closure_5.getScheduledMessage(channel.id);
      }
    }
    tmp10 = cResult[4];
  }
  const tmpResult2 = tmp(504);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp9, tmp10);
  if (cResult[5] === draftText) {
    class C {
      constructor() {
        return null != closure_5.getScheduledMessage(channel.id);
      }
    }
  }
  let tmp12 = isEligible;
  if (tmp12) {
    class C {
      constructor() {
        return null != closure_5.getScheduledMessage(channel.id);
      }
    }
    tmp12 = draftText.trim().length > 10;
  }
  if (tmp12) {
    class C {
      constructor() {
        return null != closure_5.getScheduledMessage(channel.id);
      }
    }
  }
  if (tmp12) {
    class C {
      constructor() {
        return null != closure_5.getScheduledMessage(channel.id);
      }
    }
  }
  cResult[5] = draftText;
  cResult[6] = stateFromStores;
  cResult[7] = stateFromStores1;
  cResult[8] = isEligible;
  cResult[9] = tmp12;
}) : ((channel) => {
  let c1;
  let draftText;
  let isEligible;
  channel = channel.channel;
  ({ draftText, isEligible } = channel);
  isEligible = undefined;
  let first;
  let connected;
  let isCoachmarkVisible;
  let obj = channel(4656);
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
});
let result = size.fileFinishedImporting("modules/scheduled_messages/ScheduledMessageDraftCoachmarkHooks.tsx");

export const useScheduledMessageDraftCoachmarkState = tmp2;
