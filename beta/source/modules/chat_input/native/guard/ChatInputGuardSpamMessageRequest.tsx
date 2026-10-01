// Module ID: 11942
// Function ID: 11943
// Name: ChatInputGuardSpamMessageRequest
// Dependencies: [19, 1372, 21, 1485, 504, 11943, 11935, 4528, 1115, 5909, 11941, 4847, 2]

// Module 11942 (ChatInputGuardSpamMessageRequest)
import Fragment from "Fragment" /* 21 */;
import react_mod from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

let dependencyMap, navigation;

let react = react_mod;
const jsx = Fragment.jsx;
const memoResult = react.memo(function ChatInputGuardSpamMessageRequest(channel) {
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
  let obj = channel(1485);
  navigation = obj.useNavigation();
  const items = [c4];
  const obj2 = channel(504);
  const stateFromStores = obj2.useStateFromStores(items, () => UserStore.getUser(channel.getRecipientId()));
  const obj3 = channel(11943);
  dependencyMap = obj3.useLongestChannelMessageBeforeReply(channel.id, channel.getRecipientId());
  const items1 = [navigation];
  const callback = react.useCallback(() => {
    navigation.pop();
  }, items1);
  const obj4 = channel(11935);
  const obj5 = {
    user: stateFromStores,
    onError() {
      let intl;
      const obj = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", content: intl.string(channel(closure_2[8]).t["EDYbS+"]), icon: navigation(closure_2[9]) };
      const open = navigation(closure_2[7]).open;
      navigation(closure_2[7]);
      intl = channel(closure_2[8]).intl;
      open(obj);
    },
    onRejectSuccess: callback
  };
  const messageRequestActions = obj4.useMessageRequestActions(obj5);
  ({ rejectMessageRequest: c3, isRejectLoading, isUserProfileLoading, isOptimisticRejected, markAsNotSpam: c4 } = messageRequestActions);
  const obj6 = {
    type: "button-action",
    message: intl.string(tmp(1115).t.fS08qB),
    subtext: intl2.string(tmp(1115).t["8U5OXE"]),
    buttonPrimaryText: intl3.string(tmp(1115).t.cpT0Cq),
    buttonPrimaryOnPress(stopPropagation) {
      stopPropagation.stopPropagation();
      _undefined(channel.id);
    },
    buttonPrimaryDisabled: isRejectLoading || isUserProfileLoading || isOptimisticRejected,
    buttonPrimaryLoading: isRejectLoading,
    buttonPrimaryVariant: "destructive",
    buttonSecondaryText: intl4.string(tmp(1115).t.olZgw5),
    buttonSecondaryOnPress(stopPropagation) {
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
  const tmp9 = navigation(11941);
  intl = tmp(1115).intl;
  intl2 = tmp(1115).intl;
  intl3 = tmp(1115).intl;
  const tmp8 = jsx;
  if (!isRejectLoading) {
    isRejectLoading = isOptimisticRejected;
  }
  intl4 = tmp(1115).intl;
  return tmp8(tmp9, obj6);
});
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardSpamMessageRequest.tsx");

export default memoResult;
