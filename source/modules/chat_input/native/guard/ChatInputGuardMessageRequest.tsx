// Module ID: 11472
// Function ID: 89352
// Dependencies: [5, 31, 1849, 33, 1456, 11473, 566, 11475, 3831, 1212, 9176, 4138, 11481, 2]

// Module 11472
import useIsMessageRequestRestrictedViewer from "useIsMessageRequestRestrictedViewer";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const memoResult = require("result").memo(function ChatInputGuardMessageRequest(channel) {
  let c2;
  let c3;
  let isAcceptLoading;
  let isOptimisticAccepted;
  let isOptimisticRejected;
  let isRejectLoading;
  let isUserProfileLoading;
  channel = channel.channel;
  let dependencyMap;
  c3 = undefined;
  function _onAcceptClick() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = _undefined2(tmp);
    return obj(...arguments);
  }
  function _onRejectClick() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = _undefined2(tmp);
    return obj(...arguments);
  }
  let obj = channel(1456);
  const importDefault = obj.useNavigation();
  const isMessageRequestRestrictedViewer = channel(11473).useIsMessageRequestRestrictedViewer("ChatInputGuardMessageRequest");
  const obj2 = channel(11473);
  const items = [_onAcceptClick];
  const stateFromStores = channel(566).useStateFromStores(items, () => _onAcceptClick.getUser(channel.getRecipientId()));
  const obj3 = channel(566);
  obj = {
    user: stateFromStores,
    onError: function handleRequestError() {
      let obj = arr(_undefined[8]);
      obj = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE" };
      const intl = channel(_undefined[9]).intl;
      obj.content = intl.string(channel(_undefined[9]).t["EDYbS+"]);
      obj.icon = arr(_undefined[10]);
      obj.open(obj);
    },
    onRejectSuccess: function handleRejectSuccess() {

    }
  };
  const messageRequestActions = channel(11475).useMessageRequestActions(obj);
  ({ acceptMessageRequest: c2, rejectMessageRequest: c3, isAcceptLoading, isRejectLoading, isUserProfileLoading, isOptimisticAccepted, isOptimisticRejected } = messageRequestActions);
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
  const obj4 = channel(11475);
  const tmp5 = _onRejectClick;
  let intl = channel(1212).intl;
  obj.message = intl.string(channel(1212).t["e/eQVB"]);
  const intl2 = channel(1212).intl;
  const t = channel(1212).t;
  obj.subtext = intl2.string(isMessageRequestRestrictedViewer ? t.YQ0uUE : t.HcVzGI);
  const intl3 = channel(1212).intl;
  obj.buttonPrimaryText = intl3.string(channel(1212).t.Kz8Pwr);
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
  const intl4 = channel(1212).intl;
  const t2 = channel(1212).t;
  obj.buttonSecondaryText = intl4.string(isMessageRequestRestrictedViewer ? t2.BVN4pL : t2.B2nygW);
  obj.buttonSecondaryOnPress = function onRejectClick(arg0) {
    return _onRejectClick(...arguments);
  };
  obj.buttonSecondaryDisabled = tmp4;
  if (!isRejectLoading) {
    isRejectLoading = isOptimisticRejected;
  }
  obj.buttonSecondaryLoading = isRejectLoading;
  return tmp5(importDefault(11481), obj);
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardMessageRequest.tsx");

export default memoResult;
