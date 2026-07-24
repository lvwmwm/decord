// Module ID: 15622
// Function ID: 120398
// Name: PendingSpamMessageRequestRow
// Dependencies: [31, 27, 653, 33, 4130, 689, 1212, 11513, 3831, 9212, 4138, 4337, 11505, 675, 4660, 15607, 1273, 10361, 13877, 7636, 1557, 15616, 15623, 15614, 4559, 6836, 6841, 15617, 477, 4126, 2]
// Exports: default

// Module 15622 (PendingSpamMessageRequestRow)
import result from "result";
import get_ActivityIndicator from "MessageRequestEmpty";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
function PendingSpamMessageRequestRow(isLastRow) {
  let c6;
  let c7;
  let hasSingleMessageRequest;
  let isAcceptLoading;
  let isOptimisticAccepted;
  let isOptimisticRejected;
  let isRejectLoading;
  let isUserProfileLoading;
  let messageRequest;
  let require;
  ({ messageRequest, goToMessageRequestPreview: require, hasSingleMessageRequest } = isLastRow);
  let str;
  let channel;
  let closure_5;
  c6 = undefined;
  c7 = undefined;
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
  const tmp = handleSelectRow();
  str = messageRequest.user;
  channel = messageRequest.channel;
  const id = channel.id;
  let obj = require(str[7]);
  closure_5 = obj.useLongestChannelMessageBeforeReply(id, channel.getRecipientId());
  const items = [id, hasSingleMessageRequest];
  const callback = channel.useCallback(() => {
    let obj = hasSingleMessageRequest(str[8]);
    obj = { key: "MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE" };
    const intl = outer1_0(str[6]).intl;
    obj.content = intl.string(outer1_0(str[6]).t.pIQ3h4);
    obj.icon = hasSingleMessageRequest(str[9]);
    obj.open(obj);
  }, []);
  const callback1 = channel.useCallback(() => {
    if (hasSingleMessageRequest) {
      outer1_0(str[10]).transitionToChannel(id);
      let arr = hasSingleMessageRequest(str[11]);
      arr = arr.pop();
      const obj = outer1_0(str[10]);
    }
  }, items);
  let obj1 = require(str[12]);
  const messageRequestActions = obj1.useMessageRequestActions({ user: str, onAcceptSuccess: callback1, onError: callback });
  ({ rejectMessageRequest: c6, isAcceptLoading, isRejectLoading, isUserProfileLoading, isOptimisticAccepted, isOptimisticRejected, markAsNotSpam: c7 } = messageRequestActions);
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
  let intl = require(str[6]).intl;
  obj.label = intl.string(require(str[6]).t.apePSa);
  const items1 = [obj, , ];
  obj1 = { name: constants.IGNORE_SPAM_MESSAGE };
  const intl2 = require(str[6]).intl;
  obj1.label = intl2.string(require(str[6]).t.MWOV9D);
  items1[1] = obj1;
  const obj2 = { name: constants.PREVIEW_SPAM_MESSAGE };
  const intl3 = require(str[6]).intl;
  obj2.label = intl3.string(require(str[6]).t.I6PFLB);
  items1[2] = obj2;
  obj.accessibilityActions = items1;
  obj.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
    const actionName = nativeEvent.nativeEvent.actionName;
    if (outer1_11.ACCEPT_SPAM_MESSAGE === actionName) {
      handleAcceptMessageRequest();
    } else if (outer1_11.IGNORE_SPAM_MESSAGE === actionName) {
      handleRejectMessageRequest();
    } else if (outer1_11.PREVIEW_SPAM_MESSAGE === actionName) {
      handleSelectRow();
    }
  };
  obj.style = tmp.pressableRow;
  const obj3 = { style: tmp.rowContainer };
  const items2 = [handleRejectMessageRequest(hasSingleMessageRequest(str[15]), { channel: messageRequest.channel, otherUser: messageRequest.user }), ];
  const obj5 = { style: tmp.actionContainer };
  const obj6 = { accessibilityRole: "button" };
  const intl4 = require(str[6]).intl;
  const obj7 = {};
  str = undefined;
  if (null != str) {
    str = str.toString();
  }
  obj7.name = str;
  obj6.accessibilityLabel = intl4.formatToPlainString(require(str[6]).t["6p0yBo"], obj7);
  obj6.onPress = handleAcceptMessageRequest;
  obj6.disabled = tmp5;
  const items3 = [, ];
  ({ actionButton: arr4[0], acceptButton: arr4[1] } = tmp);
  obj6.style = items3;
  if (!isAcceptLoading) {
    if (!isUserProfileLoading) {
      if (!isOptimisticAccepted) {
        const obj8 = { size: require(str[16]).Icon.Sizes.SMALL, disableColor: true, source: hasSingleMessageRequest(str[17]) };
        let tmp17 = handleRejectMessageRequest(require(str[16]).Icon, obj8);
      }
      obj6.children = tmp17;
      const items4 = [handleRejectMessageRequest(require(str[14]).PressableOpacity, obj6), ];
      const obj9 = { accessibilityRole: "button" };
      const intl5 = require(str[6]).intl;
      const obj10 = {};
      let str1;
      if (null != str) {
        str1 = str.toString();
      }
      obj10.name = str1;
      obj9.accessibilityLabel = intl5.formatToPlainString(require(str[6]).t["C9Xe6+"], obj10);
      obj9.onPress = handleRejectMessageRequest;
      obj9.disabled = tmp5;
      obj9.style = tmp.actionButton;
      if (!isRejectLoading) {
        if (!isOptimisticRejected) {
          const obj11 = { size: require(str[16]).Icon.Sizes.SMALL, disableColor: true, source: hasSingleMessageRequest(str[18]) };
          let tmp26 = handleRejectMessageRequest(require(str[16]).Icon, obj11);
        }
        obj9.children = tmp26;
        items4[1] = tmp18(require(str[14]).PressableOpacity, obj9);
        obj5.children = items4;
        items2[1] = handleAcceptMessageRequest(closure_5, obj5);
        obj3.children = items2;
        const items5 = [handleAcceptMessageRequest(closure_5, obj3), ];
        let tmp29 = null;
        if (!isLastRow.isLastRow) {
          tmp29 = handleRejectMessageRequest(require(str[19]).FormDivider, { iconPush: true, outer: true });
        }
        items5[1] = tmp29;
        obj.children = items5;
        return handleAcceptMessageRequest(require(str[14]).PressableOpacity, obj);
      }
      const obj12 = { style: tmp.activityIndicator };
      tmp26 = handleRejectMessageRequest(id, obj12);
      tmp18 = handleRejectMessageRequest;
    }
  }
  tmp17 = handleRejectMessageRequest(id, { style: tmp.activityIndicator });
}
({ ActivityIndicator: closure_4, View: closure_5, FlatList: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, flexDirection: "row", justifyContent: "space-between", marginTop: 6, marginBottom: 10 };
_createForOfIteratorHelperLoose.sectionContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.rowContainer = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 14, marginBottom: 12 };
_createForOfIteratorHelperLoose.actionContainer = { flexDirection: "row", alignItems: "flex-start", height: "100%" };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, alignItems: "center", justifyContent: "center", height: 32, width: 32 };
_createForOfIteratorHelperLoose.actionButton = obj1;
_createForOfIteratorHelperLoose.acceptButton = { marginRight: 16 };
_createForOfIteratorHelperLoose.pressableRow = { borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
_createForOfIteratorHelperLoose.activityIndicator = { height: 16, width: 16 };
let obj3 = { flex: 1, paddingHorizontal: 16, alignSelf: "stretch", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.list = obj3;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_11 = { ACCEPT_SPAM_MESSAGE: "accept-spam-message-request", IGNORE_SPAM_MESSAGE: "ignore-spam-message-request", PREVIEW_SPAM_MESSAGE: "preview-spam-message-request" };
let obj2 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
const result = require("ME").fileFinishedImporting("modules/message_request/native/spam/SpamMessageList.tsx");

export default function SpamMessageList(goToMessageRequestPreview) {
  goToMessageRequestPreview = goToMessageRequestPreview.goToMessageRequestPreview;
  const tmp = _createForOfIteratorHelperLoose();
  const importDefault = tmp;
  const bottom = importDefault(1557)().bottom;
  let obj = goToMessageRequestPreview(15616);
  const dependencyMap = obj.useSpamMessageRequestCount();
  const arr = importDefault(15623)();
  let obj1 = goToMessageRequestPreview(15614);
  let closure_4 = obj1.useListHasSingleSpamMessageRequest();
  importDefault(4559)(() => {
    let obj = tmp(675);
    obj = { num_spam_message_requests: dependencyMap };
    obj.track(outer1_7.SPAM_MESSAGE_REQUESTS_VIEWED, obj);
    obj = { name: goToMessageRequestPreview(6841).MetricEvents.SPAM_MESSAGE_REQUEST_VIEW };
    tmp(6836).increment(obj);
  });
  if (0 === arr.length) {
    obj = {};
    let intl = goToMessageRequestPreview(1212).intl;
    obj.bodyText = intl.string(goToMessageRequestPreview(1212).t.hasFPQ);
    return callback(importDefault(15617), obj);
  } else {
    const items = ["header-section"];
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
      if ("string" === typeof item) {
        let obj = { style: tmp.sectionContainer };
        obj = { variant: "eyebrow", color: "text-default" };
        const intl = goToMessageRequestPreview(1212).intl;
        obj = { count: arr.length };
        obj.children = intl.format(goToMessageRequestPreview(1212).t.aNh5Kf, obj);
        obj.children = outer1_8(goToMessageRequestPreview(4126).Text, obj);
        let tmp11Result = outer1_8(outer1_5, obj);
      } else {
        const obj1 = {
          messageRequest: item,
          goToMessageRequestPreview() {
              return item(item.channel.id);
            }
        };
        let id;
        if (null != arr[arr.length - 1]) {
          id = tmp14.channel.id;
        }
        obj1.isLastRow = item.channel.id === id;
        obj1.hasSingleMessageRequest = closure_4;
        tmp11Result = outer1_8(outer1_12, obj1, item.channel.id);
        const tmp11 = outer1_8;
        const tmp12 = outer1_12;
      }
      return tmp11Result;
    };
    obj.data = items;
    return callback(closure_6, obj);
  }
};
