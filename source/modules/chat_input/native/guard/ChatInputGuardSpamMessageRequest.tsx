// Module ID: 11512
// Function ID: 89666
// Dependencies: [31, 1849, 33, 1456, 566, 11513, 11505, 3831, 1212, 9212, 11511, 4138, 2]

// Module 11512
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
const memoResult = importAllResult.memo(function ChatInputGuardSpamMessageRequest(channel) {
  let closure_3;
  let _isNativeReflectConstruct;
  let isOptimisticRejected;
  let isRejectLoading;
  let isUserProfileLoading;
  channel = channel.channel;
  let obj = channel(1456);
  const navigation = obj.useNavigation();
  const items = [_isNativeReflectConstruct];
  const stateFromStores = channel(566).useStateFromStores(items, () => outer1_4.getUser(channel.getRecipientId()));
  const obj2 = channel(566);
  const dependencyMap = channel(11513).useLongestChannelMessageBeforeReply(channel.id, channel.getRecipientId());
  const items1 = [navigation];
  const callback = importAllResult.useCallback(() => {
    navigation.pop();
  }, items1);
  const obj3 = channel(11513);
  obj = {
    user: stateFromStores,
    onError() {
      let obj = navigation(3831);
      obj = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE" };
      const intl = channel(1212).intl;
      obj.content = intl.string(channel(1212).t["EDYbS+"]);
      obj.icon = navigation(9212);
      obj.open(obj);
    },
    onRejectSuccess: callback
  };
  const messageRequestActions = channel(11505).useMessageRequestActions(obj);
  ({ rejectMessageRequest: closure_3, isRejectLoading, isUserProfileLoading, isOptimisticRejected, markAsNotSpam: _isNativeReflectConstruct } = messageRequestActions);
  let tmp5 = isRejectLoading;
  if (!isRejectLoading) {
    tmp5 = isUserProfileLoading;
  }
  if (!tmp5) {
    tmp5 = isOptimisticRejected;
  }
  obj = { type: "button-action" };
  const obj4 = channel(11505);
  const tmp6 = jsx;
  let intl = channel(1212).intl;
  obj.message = intl.string(channel(1212).t.fS08qB);
  const intl2 = channel(1212).intl;
  obj.subtext = intl2.string(channel(1212).t["8U5OXE"]);
  const intl3 = channel(1212).intl;
  obj.buttonPrimaryText = intl3.string(channel(1212).t.cpT0Cq);
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
  const intl4 = channel(1212).intl;
  obj.buttonSecondaryText = intl4.string(channel(1212).t.olZgw5);
  obj.buttonSecondaryOnPress = function buttonSecondaryOnPress(stopPropagation) {
    stopPropagation.stopPropagation();
    callback2(channel, closure_2, () => channel(table[11]).transitionToChannel(outer1_0.id, { navigationReplace: true }));
  };
  obj.buttonSecondaryDisabled = tmp5;
  obj.buttonSecondaryLoading = isUserProfileLoading;
  return tmp6(navigation(11511), obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardSpamMessageRequest.tsx");

export default memoResult;
