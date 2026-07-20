// Module ID: 11454
// Function ID: 89253
// Dependencies: []

// Module 11454
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
const importAllResult = importAll(dependencyMap[1]);
const memoResult = importAll(dependencyMap[1]).memo(function ChatInputGuardMessageRequest(channel) {
  let isAcceptLoading;
  let isOptimisticAccepted;
  let isOptimisticRejected;
  let isRejectLoading;
  let isUserProfileLoading;
  const arg1 = channel.channel;
  let closure_2;
  let closure_3;
  function _onAcceptClick() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = _undefined(tmp);
    const _onAcceptClick = obj;
    return obj(...arguments);
  }
  function _onRejectClick() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = _undefined(tmp);
    const _onRejectClick = obj;
    return obj(...arguments);
  }
  let obj = arg1(closure_2[4]);
  const importDefault = obj.useNavigation();
  const isMessageRequestRestrictedViewer = arg1(closure_2[5]).useIsMessageRequestRestrictedViewer("ChatInputGuardMessageRequest");
  const obj2 = arg1(closure_2[5]);
  const items = [_onAcceptClick];
  const stateFromStores = arg1(closure_2[6]).useStateFromStores(items, () => _onAcceptClick.getUser(channel.getRecipientId()));
  const obj3 = arg1(closure_2[6]);
  obj = {
    user: stateFromStores,
    onError: function handleRequestError() {
      let obj = arr(closure_2[8]);
      obj = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE" };
      const intl = channel(closure_2[9]).intl;
      obj.content = intl.string(channel(closure_2[9]).t.EDYbS+);
      obj.icon = arr(closure_2[10]);
      obj.open(obj);
    },
    onRejectSuccess: function handleRejectSuccess() {

    }
  };
  const messageRequestActions = arg1(closure_2[7]).useMessageRequestActions(obj);
  ({ acceptMessageRequest: closure_2, rejectMessageRequest: closure_3, isAcceptLoading, isRejectLoading, isUserProfileLoading, isOptimisticAccepted, isOptimisticRejected } = messageRequestActions);
  let tmp4 = isAcceptLoading;
  if (!isAcceptLoading) {
    tmp4 = isRejectLoading;
  }
  if (!tmp4) {
    tmp4 = isUserProfileLoading;
  }
  if (!tmp4) {
    tmp4 = isOptimisticAccepted;
  }
  if (!tmp4) {
    tmp4 = isOptimisticRejected;
  }
  obj = { type: "button-action" };
  const obj4 = arg1(closure_2[7]);
  const tmp5 = _onRejectClick;
  const intl = arg1(closure_2[9]).intl;
  obj.message = intl.string(arg1(closure_2[9]).t.e/eQVB);
  const intl2 = arg1(closure_2[9]).intl;
  const t = arg1(closure_2[9]).t;
  obj.subtext = intl2.string(isMessageRequestRestrictedViewer ? t.YQ0uUE : t.HcVzGI);
  const intl3 = arg1(closure_2[9]).intl;
  obj.buttonPrimaryText = intl3.string(arg1(closure_2[9]).t.Kz8Pwr);
  obj.buttonPrimaryOnPress = function onAcceptClick(arg0) {
    return _onAcceptClick(...arguments);
  };
  obj.buttonPrimaryDisabled = tmp4;
  if (!isAcceptLoading) {
    isAcceptLoading = isUserProfileLoading;
  }
  if (!isAcceptLoading) {
    isAcceptLoading = isOptimisticAccepted;
  }
  obj.buttonPrimaryLoading = isAcceptLoading;
  const intl4 = arg1(closure_2[9]).intl;
  const t2 = arg1(closure_2[9]).t;
  obj.buttonSecondaryText = intl4.string(isMessageRequestRestrictedViewer ? t2.BVN4pL : t2.B2nygW);
  obj.buttonSecondaryOnPress = function onRejectClick(arg0) {
    return _onRejectClick(...arguments);
  };
  obj.buttonSecondaryDisabled = tmp4;
  if (!isRejectLoading) {
    isRejectLoading = isOptimisticRejected;
  }
  obj.buttonSecondaryLoading = isRejectLoading;
  return tmp5(importDefault(closure_2[12]), obj);
});
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardMessageRequest.tsx");

export default memoResult;
