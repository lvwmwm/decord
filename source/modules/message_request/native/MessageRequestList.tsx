// Module ID: 15434
// Function ID: 117786
// Name: PendingMessageRequestRow
// Dependencies: []
// Exports: default

// Module 15434 (PendingMessageRequestRow)
function PendingMessageRequestRow(isRestricted) {
  let hasSingleMessageRequest;
  let isAcceptLoading;
  let isOptimisticAccepted;
  let isOptimisticRejected;
  let isRejectLoading;
  let isUserProfileLoading;
  let messageRequest;
  ({ messageRequest, goToMessageRequestPreview: closure_0, hasSingleMessageRequest } = isRestricted);
  const importDefault = hasSingleMessageRequest;
  let flag = isRestricted.isRestricted;
  if (flag === undefined) {
    flag = false;
  }
  let dependencyMap;
  let React;
  let id;
  let closure_5;
  let closure_6;
  function handleRejectMessageRequest() {
    _undefined2(channel.id);
  }
  const AnalyticEvents = handleRejectMessageRequest;
  function handleAcceptMessageRequest(Icon, arg1) {
    _undefined(channel.id);
  }
  function handleSelectRow() {
    let obj = hasSingleMessageRequest(str[12]);
    obj = { is_spam: false, channel_id: channel.id, other_user_id: str.id };
    obj.track(handleRejectMessageRequest.MESSAGE_REQUEST_PREVIEW_VIEWED, obj);
    callback();
  }
  const tmp = callback2();
  let str = messageRequest.user;
  dependencyMap = str;
  const channel = messageRequest.channel;
  React = channel;
  id = channel.id;
  const items = [id, hasSingleMessageRequest];
  const callback = React.useCallback(() => {
    let obj = hasSingleMessageRequest(str[7]);
    obj = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE" };
    const intl = callback(str[6]).intl;
    obj.content = intl.string(callback(str[6]).t.EDYbS+);
    obj.icon = hasSingleMessageRequest(str[8]);
    obj.open(obj);
  }, []);
  const callback1 = React.useCallback(() => {
    if (hasSingleMessageRequest) {
      callback(str[9]).transitionToChannel(id);
      let arr = hasSingleMessageRequest(str[10]);
      arr = arr.pop();
      const obj = callback(str[9]);
    }
  }, items);
  let obj = arg1(dependencyMap[11]);
  const messageRequestActions = obj.useMessageRequestActions({ user: str, onAcceptSuccess: callback1, onError: callback });
  ({ acceptMessageRequest: closure_5, rejectMessageRequest: closure_6, isAcceptLoading, isRejectLoading, isUserProfileLoading, isOptimisticAccepted, isOptimisticRejected } = messageRequestActions);
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
  obj = { name: constants.ACCEPT_MESSAGE_REQUEST };
  const intl = arg1(dependencyMap[6]).intl;
  obj.label = intl.string(arg1(dependencyMap[6]).t.hSLLWi);
  const items1 = [obj, , ];
  const obj1 = { name: constants.IGNORE_MESSAGE_REQUEST };
  const intl2 = arg1(dependencyMap[6]).intl;
  obj1.label = intl2.string(arg1(dependencyMap[6]).t.fIBuSD);
  items1[1] = obj1;
  const obj2 = { name: constants.PREVIEW_MESSAGE_REQUEST };
  const intl3 = arg1(dependencyMap[6]).intl;
  obj2.label = intl3.string(arg1(dependencyMap[6]).t.HjgsKJ);
  items1[2] = obj2;
  obj.accessibilityActions = items1;
  obj.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
    const actionName = nativeEvent.nativeEvent.actionName;
    if (constants.ACCEPT_MESSAGE_REQUEST === actionName) {
      handleAcceptMessageRequest();
    } else if (constants.IGNORE_MESSAGE_REQUEST === actionName) {
      handleRejectMessageRequest();
    } else if (constants.PREVIEW_MESSAGE_REQUEST === actionName) {
      handleSelectRow();
    }
  };
  obj.style = tmp.pressableRow;
  const obj3 = { style: tmp.rowContainer };
  const obj4 = { channel: messageRequest.channel, otherUser: messageRequest.user, isRestricted: flag };
  const items2 = [handleAcceptMessageRequest(importDefault(dependencyMap[14]), obj4), ];
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
  const items3 = [tmp.actionButton, flag ? tmp.acceptButtonRestricted : tmp.acceptButton];
  obj6.style = items3;
  if (!isAcceptLoading) {
    if (!isUserProfileLoading) {
      if (!isOptimisticAccepted) {
        const obj8 = { size: arg1(dependencyMap[15]).Icon.Sizes.SMALL, disableColor: true, source: importDefault(dependencyMap[16]) };
        let tmp17 = handleAcceptMessageRequest(arg1(dependencyMap[15]).Icon, obj8);
      }
      obj6.children = tmp17;
      const items4 = [handleAcceptMessageRequest(arg1(dependencyMap[13]).PressableOpacity, obj6), ];
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
          const obj11 = { size: arg1(dependencyMap[15]).Icon.Sizes.SMALL, disableColor: true, source: importDefault(dependencyMap[17]) };
          let tmp26 = handleAcceptMessageRequest(arg1(dependencyMap[15]).Icon, obj11);
        }
        obj9.children = tmp26;
        items4[1] = tmp18(arg1(dependencyMap[13]).PressableOpacity, obj9);
        obj5.children = items4;
        items2[1] = handleSelectRow(closure_5, obj5);
        obj3.children = items2;
        const items5 = [handleSelectRow(closure_5, obj3), ];
        let tmp29 = null;
        if (!isRestricted.isLastRow) {
          tmp29 = handleAcceptMessageRequest(arg1(dependencyMap[18]).FormDivider, { justifyContent: null, alignItems: null });
        }
        items5[1] = tmp29;
        obj.children = items5;
        return handleSelectRow(arg1(dependencyMap[13]).PressableOpacity, obj);
      }
      const obj12 = { style: tmp.activityIndicator };
      tmp26 = handleAcceptMessageRequest(id, obj12);
      const tmp18 = handleAcceptMessageRequest;
    }
  }
  tmp17 = handleAcceptMessageRequest(id, { style: tmp.activityIndicator });
}
let closure_3 = importAll(dependencyMap[0]);
({ ActivityIndicator: closure_4, View: closure_5, FlatList: closure_6 } = arg1(dependencyMap[1]));
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { "Bool(true)": false, "Bool(true)": false, "Bool(true)": false, "Bool(true)": false, "Bool(true)": false, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW };
obj.sectionContainer = obj;
obj.rowContainer = {};
obj.actionContainer = { width: "k", resizeMode: "r", paddingRight: "isArray" };
const tmp3 = arg1(dependencyMap[3]);
obj.actionButton = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH, tintColor: importDefault(dependencyMap[5]).colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: importDefault(dependencyMap[5]).radii.lg };
obj.acceptButton = { marginRight: 16 };
obj.acceptButtonRestricted = { marginRight: 12 };
const obj1 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH, tintColor: importDefault(dependencyMap[5]).colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: importDefault(dependencyMap[5]).radii.lg };
obj.pressableRow = { borderRadius: importDefault(dependencyMap[5]).radii.md };
obj.activityIndicator = {};
const obj2 = { borderRadius: importDefault(dependencyMap[5]).radii.md };
obj.list = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW };
let closure_10 = obj.createStyles(obj);
let closure_11 = { ACCEPT_MESSAGE_REQUEST: "accept-message-request", IGNORE_MESSAGE_REQUEST: "ignore-message-request", PREVIEW_MESSAGE_REQUEST: "preview-message-request" };
const obj3 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW };
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/message_request/native/MessageRequestList.tsx");

export default function MessageRequestList(goToMessageRequestPreview) {
  const arg1 = goToMessageRequestPreview.goToMessageRequestPreview;
  const tmp = callback2();
  const importDefault = tmp;
  const bottom = importDefault(dependencyMap[19])().bottom;
  const arr = importDefault(dependencyMap[20])();
  const dependencyMap = arr;
  let obj = arg1(dependencyMap[21]);
  let closure_3 = obj.useListHasSingleMessageRequest();
  let obj1 = arg1(dependencyMap[22]);
  let closure_4 = obj1.useIsMessageRequestRestrictedViewer("MessageRequestList");
  if (0 === arr.length) {
    obj = {};
    const intl = arg1(dependencyMap[6]).intl;
    obj.bodyText = intl.string(arg1(dependencyMap[6]).t.SXrqTf);
    return callback(importDefault(dependencyMap[23]), obj);
  } else {
    const items = ["<string:4166254596>"];
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
        obj = { hasMaxConnections: "/assets/images/native/premium/illustrations", isBoostOnlySubscription: 51 };
        const intl = goToMessageRequestPreview(arr[6]).intl;
        const obj1 = { pendingRequestNumber: arr.length };
        obj.children = intl.format(goToMessageRequestPreview(arr[6]).t.evH4Yb, obj1);
        obj.children = callback(goToMessageRequestPreview(arr[25]).Text, obj);
        return callback(closure_5, obj);
      } else {
        let id;
        if (null != arr[closure_2.length - 1]) {
          id = tmp14.channel.id;
        }
        obj = {
          messageRequest: item,
          goToMessageRequestPreview() {
              return item(item.channel.id);
            },
          isLastRow: item.channel.id === id,
          hasSingleMessageRequest: closure_3,
          isRestricted: closure_4
        };
        return callback(closure_12, obj, item.channel.id);
      }
    };
    obj.data = items;
    return callback(closure_6, obj);
  }
};
