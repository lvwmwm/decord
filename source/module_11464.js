// Module ID: 11464
// Function ID: 89322
// Dependencies: []

// Module 11464
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const memoResult = importAllResult.memo(function ChatInputGuardSpamMessageRequest(channel) {
  let isOptimisticRejected;
  let isRejectLoading;
  let isUserProfileLoading;
  channel = channel.channel;
  const arg1 = channel;
  let obj = arg1(closure_2[3]);
  const navigation = obj.useNavigation();
  const importDefault = navigation;
  const items = [closure_4];
  const stateFromStores = arg1(closure_2[4]).useStateFromStores(items, () => user.getUser(channel.getRecipientId()));
  const obj2 = arg1(closure_2[4]);
  closure_2 = arg1(closure_2[5]).useLongestChannelMessageBeforeReply(channel.id, channel.getRecipientId());
  const items1 = [navigation];
  const callback = importAllResult.useCallback(() => {
    navigation.pop();
  }, items1);
  const obj3 = arg1(closure_2[5]);
  obj = {
    user: stateFromStores,
    onError() {
      let obj = navigation(closure_2[7]);
      obj = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE" };
      const intl = channel(closure_2[8]).intl;
      obj.content = intl.string(channel(closure_2[8]).t.EDYbS+);
      obj.icon = navigation(closure_2[9]);
      obj.open(obj);
    },
    onRejectSuccess: callback
  };
  const messageRequestActions = arg1(closure_2[6]).useMessageRequestActions(obj);
  ({ rejectMessageRequest: closure_3, isRejectLoading, isUserProfileLoading, isOptimisticRejected, markAsNotSpam: closure_4 } = messageRequestActions);
  let tmp5 = isRejectLoading;
  if (!isRejectLoading) {
    tmp5 = isUserProfileLoading;
  }
  if (!tmp5) {
    tmp5 = isOptimisticRejected;
  }
  obj = { type: "button-action" };
  const obj4 = arg1(closure_2[6]);
  const tmp6 = jsx;
  const intl = arg1(closure_2[8]).intl;
  obj.message = intl.string(arg1(closure_2[8]).t.fS08qB);
  const intl2 = arg1(closure_2[8]).intl;
  obj.subtext = intl2.string(arg1(closure_2[8]).t.8U5OXE);
  const intl3 = arg1(closure_2[8]).intl;
  obj.buttonPrimaryText = intl3.string(arg1(closure_2[8]).t.cpT0Cq);
  obj.buttonPrimaryOnPress = function buttonPrimaryOnPress(stopPropagation) {
    stopPropagation.stopPropagation();
    callback(channel.id);
  };
  obj.buttonPrimaryDisabled = tmp5;
  if (!isRejectLoading) {
    isRejectLoading = isOptimisticRejected;
  }
  obj.buttonPrimaryLoading = isRejectLoading;
  obj.buttonPrimaryVariant = "destructive";
  const intl4 = arg1(closure_2[8]).intl;
  obj.buttonSecondaryText = intl4.string(arg1(closure_2[8]).t.olZgw5);
  obj.buttonSecondaryOnPress = function buttonSecondaryOnPress(stopPropagation) {
    stopPropagation.stopPropagation();
    user(channel, closure_2, () => lib(closure_2[11]).transitionToChannel(lib.id, { navigationReplace: true }));
  };
  obj.buttonSecondaryDisabled = tmp5;
  obj.buttonSecondaryLoading = isUserProfileLoading;
  return tmp6(importDefault(closure_2[10]), obj);
});
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardSpamMessageRequest.tsx");

export default memoResult;
