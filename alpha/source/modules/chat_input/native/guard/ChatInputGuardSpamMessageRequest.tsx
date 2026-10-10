// Module ID: 12167
// Function ID: 12168
// Name: ChatInputGuardSpamMessageRequest
// Dependencies: [19, 1390, 21, 558, 576, 1503, 504, 12168, 4809, 1126, 12160, 5103, 12166, 2]

// Module 12167 (ChatInputGuardSpamMessageRequest)
import Fragment from "Fragment" /* 21 */;
import react_mod from "react" /* 19 */;
import UserStore from "UserStore" /* 1390 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, navigation;

let react = react_mod;
const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChatInputGuardSpamMessageRequest(channel) {
  let first;
  let isOptimisticRejected;
  let isRejectLoading;
  let isUserProfileLoading;
  let longestChannelMessageBeforeReply;
  let markAsNotSpam;
  let obj3;
  let tmp12;
  let tmp7;
  let tmp9;
  const tmp = channel;
  let obj = channel(longestChannelMessageBeforeReply[4]);
  const cResult = obj.c(28);
  channel = channel.channel;
  const obj2 = channel(longestChannelMessageBeforeReply[5]);
  navigation = obj2.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [markAsNotSpam];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel) {
    const fn = function s() {
      return UserStore.getUser(channel.getRecipientId());
    };
    cResult[1] = channel;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(longestChannelMessageBeforeReply[6]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  const id = channel.id;
  if (cResult[3] !== channel) {
    const recipientId = channel.getRecipientId();
    cResult[3] = channel;
    cResult[4] = recipientId;
    tmp9 = recipientId;
  } else {
    tmp9 = cResult[4];
  }
  const tmpResult3 = tmp(longestChannelMessageBeforeReply[7]);
  longestChannelMessageBeforeReply = tmpResult3.useLongestChannelMessageBeforeReply(id, tmp9);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    function handleRequestError() {
      let intl;
      const obj = { text: intl.string(channel(longestChannelMessageBeforeReply[9]).t["EDYbS+"]), variant: "critical" };
      const open = navigation(longestChannelMessageBeforeReply[8]).open;
      navigation(longestChannelMessageBeforeReply[8]);
      intl = channel(longestChannelMessageBeforeReply[9]).intl;
      open("MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", obj);
    }
    cResult[5] = handleRequestError;
    tmp12 = handleRequestError;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] !== navigation) {
    class E {
      constructor() {
        navigation.pop();
      }
    }
    cResult[6] = navigation;
    cResult[7] = E;
  } else {
    class E {
      constructor() {
        navigation.pop();
      }
    }
  }
  if (cResult[8] === tmp13) {
    class E {
      constructor() {
        navigation.pop();
      }
    }
    const tmpResult4 = tmp(longestChannelMessageBeforeReply[10]);
    const messageRequestActions = tmpResult4.useMessageRequestActions(obj3);
    const rejectMessageRequest = messageRequestActions.rejectMessageRequest;
    ({ isRejectLoading, isUserProfileLoading, isOptimisticRejected, markAsNotSpam } = messageRequestActions);
    if (cResult[11] === channel) {
      class E {
        constructor() {
          navigation.pop();
        }
      }
    }
    function handleAcceptClick(stopPropagation) {
      let id;
      stopPropagation.stopPropagation();
      markAsNotSpam(channel, longestChannelMessageBeforeReply, () => {
        const obj = channel(longestChannelMessageBeforeReply[11]);
        return obj.transitionToChannel(id.id, { navigationReplace: true });
      });
    }
    cResult[11] = channel;
    cResult[12] = markAsNotSpam;
    cResult[13] = longestChannelMessageBeforeReply;
    cResult[14] = handleAcceptClick;
  }
  obj3 = { user: stateFromStores, onError: tmp12, onRejectSuccess: tmp13 };
  cResult[8] = tmp13;
  cResult[9] = stateFromStores;
  cResult[10] = obj3;
}) : (function ChatInputGuardSpamMessageRequest(channel) {
  let _undefined;
  let _undefined2;
  let c3;
  let c4;
  let closure_2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let isOptimisticRejected;
  let isRejectLoading;
  let isUserProfileLoading;
  channel = channel.channel;
  react = undefined;
  c4 = undefined;
  const tmp = channel;
  let obj = channel(1503);
  navigation = obj.useNavigation();
  const items = [c4];
  const obj2 = channel(504);
  const stateFromStores = obj2.useStateFromStores(items, () => UserStore.getUser(channel.getRecipientId()));
  const obj3 = channel(12168);
  dependencyMap = obj3.useLongestChannelMessageBeforeReply(channel.id, channel.getRecipientId());
  const items1 = [navigation];
  const callback = react.useCallback(() => {
    navigation.pop();
  }, items1);
  const obj4 = channel(12160);
  const obj5 = {
    user: stateFromStores,
    onError: function handleRequestError() {
      let intl;
      const obj = { text: intl.string(channel(closure_2[9]).t["EDYbS+"]), variant: "critical" };
      const open = navigation(closure_2[8]).open;
      navigation(closure_2[8]);
      intl = channel(closure_2[9]).intl;
      open("MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", obj);
    },
    onRejectSuccess: callback
  };
  const messageRequestActions = obj4.useMessageRequestActions(obj5);
  ({ rejectMessageRequest: c3, isRejectLoading, isUserProfileLoading, isOptimisticRejected, markAsNotSpam: c4 } = messageRequestActions);
  const obj6 = {
    type: "button-action",
    message: intl.string(tmp(1126).t.fS08qB),
    subtext: intl2.string(tmp(1126).t["8U5OXE"]),
    buttonPrimaryText: intl3.string(tmp(1126).t.cpT0Cq),
    buttonPrimaryOnPress: function handleRejectClick(stopPropagation) {
      stopPropagation.stopPropagation();
      _undefined(channel.id);
    },
    buttonPrimaryDisabled: isRejectLoading || isUserProfileLoading || isOptimisticRejected,
    buttonPrimaryLoading: isRejectLoading,
    buttonPrimaryVariant: "destructive",
    buttonSecondaryText: intl4.string(tmp(1126).t.olZgw5),
    buttonSecondaryOnPress: function handleAcceptClick(stopPropagation) {
      let id;
      stopPropagation.stopPropagation();
      _undefined2(channel, closure_2, () => {
        const obj = channel(closure_2[11]);
        return obj.transitionToChannel(id.id, { navigationReplace: true });
      });
    },
    buttonSecondaryDisabled: isRejectLoading || isUserProfileLoading || isOptimisticRejected,
    buttonSecondaryLoading: isUserProfileLoading
  };
  const tmp9 = navigation(12166);
  intl = tmp(1126).intl;
  intl2 = tmp(1126).intl;
  intl3 = tmp(1126).intl;
  const tmp8 = jsx;
  if (!isRejectLoading) {
    isRejectLoading = isOptimisticRejected;
  }
  intl4 = tmp(1126).intl;
  return tmp8(tmp9, obj6);
}));
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardSpamMessageRequest.tsx");

export default memoResult;
