// Module ID: 13972
// Function ID: 13973
// Name: ChatInputGuardSpamMessageRequest
// Dependencies: [19, 1384, 21, 1498, 504, 13973, 13965, 5707, 1114, 13971, 5751, 2]

// Module 13972 (ChatInputGuardSpamMessageRequest)
import Fragment from "Fragment" /* 21 */;
import react_mod from "react" /* 19 */;
import UserStore from "UserStore" /* 1384 */;
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
  let obj = channel(1498);
  navigation = obj.useNavigation();
  const items = [c4];
  const obj2 = channel(504);
  const stateFromStores = obj2.useStateFromStores(items, () => UserStore.getUser(channel.getRecipientId()));
  const obj3 = channel(13973);
  dependencyMap = obj3.useLongestChannelMessageBeforeReply(channel.id, channel.getRecipientId());
  const items1 = [navigation];
  const callback = react.useCallback(() => {
    navigation.pop();
  }, items1);
  const obj4 = channel(13965);
  const obj5 = {
    user: stateFromStores,
    onError: function handleRequestError() {
      let intl;
      const obj = { text: intl.string(channel(closure_2[8]).t["EDYbS+"]), variant: "critical" };
      const open = navigation(closure_2[7]).open;
      navigation(closure_2[7]);
      intl = channel(closure_2[8]).intl;
      open("MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", obj);
    },
    onRejectSuccess: callback
  };
  const messageRequestActions = obj4.useMessageRequestActions(obj5);
  ({ rejectMessageRequest: c3, isRejectLoading, isUserProfileLoading, isOptimisticRejected, markAsNotSpam: c4 } = messageRequestActions);
  const obj6 = {
    type: "button-action",
    message: intl.string(tmp(1114).t.fS08qB),
    subtext: intl2.string(tmp(1114).t["8U5OXE"]),
    buttonPrimaryText: intl3.string(tmp(1114).t.cpT0Cq),
    buttonPrimaryOnPress: function handleRejectClick(stopPropagation) {
      stopPropagation.stopPropagation();
      _undefined(channel.id);
    },
    buttonPrimaryDisabled: isRejectLoading || isUserProfileLoading || isOptimisticRejected,
    buttonPrimaryLoading: isRejectLoading,
    buttonPrimaryVariant: "destructive",
    buttonSecondaryText: intl4.string(tmp(1114).t.olZgw5),
    buttonSecondaryOnPress: function handleAcceptClick(stopPropagation) {
      let id;
      stopPropagation.stopPropagation();
      _undefined2(channel, closure_2, () => {
        const obj = channel(closure_2[10]);
        return obj.transitionToChannel(id.id, { navigationReplace: true });
      });
    },
    buttonSecondaryDisabled: isRejectLoading || isUserProfileLoading || isOptimisticRejected,
    buttonSecondaryLoading: isUserProfileLoading
  };
  const tmp9 = navigation(13971);
  intl = tmp(1114).intl;
  intl2 = tmp(1114).intl;
  intl3 = tmp(1114).intl;
  const tmp8 = jsx;
  if (!isRejectLoading) {
    isRejectLoading = isOptimisticRejected;
  }
  intl4 = tmp(1114).intl;
  return tmp8(tmp9, obj6);
});
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardSpamMessageRequest.tsx");

export default memoResult;
