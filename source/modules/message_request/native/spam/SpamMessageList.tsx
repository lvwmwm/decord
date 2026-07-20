// Module ID: 15440
// Function ID: 117796
// Name: PendingSpamMessageRequestRow
// Dependencies: []
// Exports: default

// Module 15440 (PendingSpamMessageRequestRow)
function PendingSpamMessageRequestRow(isLastRow) {
  let hasSingleMessageRequest;
  let isAcceptLoading;
  let isOptimisticAccepted;
  let isOptimisticRejected;
  let isRejectLoading;
  let isUserProfileLoading;
  let messageRequest;
  ({ messageRequest, goToMessageRequestPreview: closure_0, hasSingleMessageRequest } = isLastRow);
  const importDefault = hasSingleMessageRequest;
  let dependencyMap;
  let React;
  let closure_5;
  let closure_6;
  let closure_7;
  function handleRejectMessageRequest(Icon, arg1) {
    _undefined(channel.id);
  }
  function handleAcceptMessageRequest() {
    _undefined2(channel, closure_5);
  }
  function handleSelectRow() {
    let obj = hasSingleMessageRequest(str[13]);
    obj = { is_spam: true, channel_id: channel.id, other_user_id: str.id };
    obj.track(_undefined2.MESSAGE_REQUEST_PREVIEW_VIEWED, obj);
    callback();
  }
  const callback2 = handleSelectRow;
  const tmp = callback2();
  let str = messageRequest.user;
  dependencyMap = str;
  const channel = messageRequest.channel;
  React = channel;
  const id = channel.id;
  let obj = arg1(dependencyMap[7]);
  closure_5 = obj.useLongestChannelMessageBeforeReply(id, channel.getRecipientId());
  const items = [id, hasSingleMessageRequest];
  const callback = React.useCallback(() => {
    let obj = hasSingleMessageRequest(str[8]);
    obj = { key: "MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE" };
    const intl = callback(str[6]).intl;
    obj.content = intl.string(callback(str[6]).t.pIQ3h4);
    obj.icon = hasSingleMessageRequest(str[9]);
    obj.open(obj);
  }, []);
  const callback1 = React.useCallback(() => {
    if (hasSingleMessageRequest) {
      callback(str[10]).transitionToChannel(id);
      let arr = hasSingleMessageRequest(str[11]);
      arr = arr.pop();
      const obj = callback(str[10]);
    }
  }, items);
  let obj1 = arg1(dependencyMap[12]);
  const messageRequestActions = obj1.useMessageRequestActions({ user: str, onAcceptSuccess: callback1, onError: callback });
  ({ rejectMessageRequest: closure_6, isAcceptLoading, isRejectLoading, isUserProfileLoading, isOptimisticAccepted, isOptimisticRejected, markAsNotSpam: closure_7 } = messageRequestActions);
  let tmp5 = isAcceptLoading;
  if (!isAcceptLoading) {
    tmp5 = isRejectLoading;
  }
  if (!tmp5) {
    tmp5 = isUserProfileLoading;
  }
  if (!tmp5) {
    tmp5 = isOptimisticAccepted;
  }
  if (!tmp5) {
    tmp5 = isOptimisticRejected;
  }
  obj = { onPress: handleSelectRow, accessibilityRole: "button" };
  obj = { name: constants.ACCEPT_SPAM_MESSAGE };
  const intl = arg1(dependencyMap[6]).intl;
  obj.label = intl.string(arg1(dependencyMap[6]).t.apePSa);
  const items1 = [obj, , ];
  obj1 = { name: constants.IGNORE_SPAM_MESSAGE };
  const intl2 = arg1(dependencyMap[6]).intl;
  obj1.label = intl2.string(arg1(dependencyMap[6]).t.MWOV9D);
  items1[1] = obj1;
  const obj2 = { name: constants.PREVIEW_SPAM_MESSAGE };
  const intl3 = arg1(dependencyMap[6]).intl;
  obj2.label = intl3.string(arg1(dependencyMap[6]).t.I6PFLB);
  items1[2] = obj2;
  obj.accessibilityActions = items1;
  obj.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
    const actionName = nativeEvent.nativeEvent.actionName;
    if (constants.ACCEPT_SPAM_MESSAGE === actionName) {
      handleAcceptMessageRequest();
    } else if (constants.IGNORE_SPAM_MESSAGE === actionName) {
      handleRejectMessageRequest();
    } else if (constants.PREVIEW_SPAM_MESSAGE === actionName) {
      handleSelectRow();
    }
  };
  obj.style = tmp.pressableRow;
  const obj3 = { style: tmp.rowContainer };
  const items2 = [handleRejectMessageRequest(importDefault(dependencyMap[15]), { channel: messageRequest.channel, otherUser: messageRequest.user }), ];
  const obj5 = { style: tmp.actionContainer };
  const obj6 = { accessibilityRole: "button" };
  const intl4 = arg1(dependencyMap[6]).intl;
  const obj7 = {};
  str = undefined;
  if (null != str) {
    str = str.toString();
  }
  obj7.name = str;
  obj6.accessibilityLabel = intl4.formatToPlainString(arg1(dependencyMap[6]).t.6p0yBo, obj7);
  obj6.onPress = handleAcceptMessageRequest;
  obj6.disabled = tmp5;
  const items3 = [, ];
  ({ actionButton: arr4[0], acceptButton: arr4[1] } = tmp);
  obj6.style = items3;
  if (!isAcceptLoading) {
    if (!isUserProfileLoading) {
      if (!isOptimisticAccepted) {
        const obj8 = { size: arg1(dependencyMap[16]).Icon.Sizes.SMALL, disableColor: true, source: importDefault(dependencyMap[17]) };
        let tmp17 = handleRejectMessageRequest(arg1(dependencyMap[16]).Icon, obj8);
      }
      obj6.children = tmp17;
      const items4 = [handleRejectMessageRequest(arg1(dependencyMap[14]).PressableOpacity, obj6), ];
      const obj9 = { accessibilityRole: "button" };
      const intl5 = arg1(dependencyMap[6]).intl;
      const obj10 = {};
      let str1;
      if (null != str) {
        str1 = str.toString();
      }
      obj10.name = str1;
      obj9.accessibilityLabel = intl5.formatToPlainString(arg1(dependencyMap[6]).t.C9Xe6+, obj10);
      obj9.onPress = handleRejectMessageRequest;
      obj9.disabled = tmp5;
      obj9.style = tmp.actionButton;
      if (!isRejectLoading) {
        if (!isOptimisticRejected) {
          const obj11 = { size: arg1(dependencyMap[16]).Icon.Sizes.SMALL, disableColor: true, source: importDefault(dependencyMap[18]) };
          let tmp26 = handleRejectMessageRequest(arg1(dependencyMap[16]).Icon, obj11);
        }
        obj9.children = tmp26;
        items4[1] = tmp18(arg1(dependencyMap[14]).PressableOpacity, obj9);
        obj5.children = items4;
        items2[1] = handleAcceptMessageRequest(closure_5, obj5);
        obj3.children = items2;
        const items5 = [handleAcceptMessageRequest(closure_5, obj3), ];
        let tmp29 = null;
        if (!isLastRow.isLastRow) {
          tmp29 = handleRejectMessageRequest(arg1(dependencyMap[19]).FormDivider, { 1372348835: null, -1436417275: null });
        }
        items5[1] = tmp29;
        obj.children = items5;
        return handleAcceptMessageRequest(arg1(dependencyMap[14]).PressableOpacity, obj);
      }
      const obj12 = { style: tmp.activityIndicator };
      tmp26 = handleRejectMessageRequest(id, obj12);
      const tmp18 = handleRejectMessageRequest;
    }
  }
  tmp17 = handleRejectMessageRequest(id, { style: tmp.activityIndicator });
}
let closure_3 = importAll(dependencyMap[0]);
({ ActivityIndicator: closure_4, View: closure_5, FlatList: closure_6 } = arg1(dependencyMap[1]));
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW };
obj.sectionContainer = obj;
obj.rowContainer = {};
obj.actionContainer = {};
const tmp3 = arg1(dependencyMap[3]);
obj.actionButton = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH, tintColor: importDefault(dependencyMap[5]).colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: importDefault(dependencyMap[5]).radii.lg };
obj.acceptButton = { marginRight: 16 };
const obj1 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH, tintColor: importDefault(dependencyMap[5]).colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: importDefault(dependencyMap[5]).radii.lg };
obj.pressableRow = { borderRadius: importDefault(dependencyMap[5]).radii.md };
obj.activityIndicator = { <string:1140607356>: "<string:16777479>", <string:1751293292>: "<string:36295491>" };
const obj2 = { borderRadius: importDefault(dependencyMap[5]).radii.md };
obj.list = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW };
let closure_10 = obj.createStyles(obj);
let closure_11 = { ACCEPT_SPAM_MESSAGE: "accept-spam-message-request", IGNORE_SPAM_MESSAGE: "ignore-spam-message-request", PREVIEW_SPAM_MESSAGE: "preview-spam-message-request" };
const obj3 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW };
const result = arg1(dependencyMap[30]).fileFinishedImporting("modules/message_request/native/spam/SpamMessageList.tsx");

export default function SpamMessageList(goToMessageRequestPreview) {
  const arg1 = goToMessageRequestPreview.goToMessageRequestPreview;
  const tmp = callback2();
  const importDefault = tmp;
  const bottom = importDefault(closure_2[20])().bottom;
  let obj = arg1(closure_2[21]);
  closure_2 = obj.useSpamMessageRequestCount();
  const arr = importDefault(closure_2[22])();
  let closure_3 = arr;
  let obj1 = arg1(closure_2[23]);
  let closure_4 = obj1.useListHasSingleSpamMessageRequest();
  importDefault(closure_2[24])(() => {
    let obj = tmp(closure_2[13]);
    obj = { num_spam_message_requests: closure_2 };
    obj.track(constants.SPAM_MESSAGE_REQUESTS_VIEWED, obj);
    obj = { name: goToMessageRequestPreview(closure_2[26]).MetricEvents.SPAM_MESSAGE_REQUEST_VIEW };
    tmp(closure_2[25]).increment(obj);
  });
  if (0 === arr.length) {
    obj = {};
    const intl = arg1(closure_2[6]).intl;
    obj.bodyText = intl.string(arg1(closure_2[6]).t.hasFPQ);
    return callback(importDefault(closure_2[27]), obj);
  } else {
    const items = [];
    HermesBuiltin.arraySpread(arr, 1);
    obj = {};
    const items1 = [tmp.list, ];
    obj1 = {};
    let num = 0;
    if (obj8.isAndroid()) {
      num = bottom;
    }
    obj1.marginBottom = num;
    items1[1] = obj1;
    obj.style = items1;
    const obj2 = { right: 0.01 };
    obj.scrollIndicatorInsets = obj2;
    const obj3 = { paddingBottom: bottom, paddingTop: 12 };
    obj.contentContainerStyle = obj3;
    obj.renderItem = function renderItem(item) {
      item = item.item;
      const goToMessageRequestPreview = item;
      if ("string" === typeof item) {
        let obj = { style: tmp.sectionContainer };
        obj = { INTEGRATION_CREATE: "/assets/images/native/premium/illustrations", ConstraintReasonCode: 51 };
        const intl = goToMessageRequestPreview(closure_2[6]).intl;
        obj = { count: arr.length };
        obj.children = intl.format(goToMessageRequestPreview(closure_2[6]).t.aNh5Kf, obj);
        obj.children = callback(goToMessageRequestPreview(closure_2[29]).Text, obj);
        let tmp11Result = callback(closure_5, obj);
      } else {
        const obj1 = {
          messageRequest: item,
          goToMessageRequestPreview() {
              return item(item.channel.id);
            }
        };
        let id;
        if (null != arr[closure_3.length - 1]) {
          id = tmp14.channel.id;
        }
        obj1.isLastRow = item.channel.id === id;
        obj1.hasSingleMessageRequest = closure_4;
        tmp11Result = callback(closure_12, obj1, item.channel.id);
        const tmp11 = callback;
        const tmp12 = closure_12;
      }
      return tmp11Result;
    };
    obj.data = items;
    return callback(closure_6, obj);
  }
};
