// Module ID: 15606
// Function ID: 120325
// Name: PendingMessageRequestRow
// Dependencies: [31, 27, 653, 33, 4130, 689, 1212, 3831, 9212, 4138, 4337, 11505, 675, 4660, 15607, 1273, 10361, 13877, 7636, 1557, 15612, 15614, 11503, 15617, 477, 4126, 2]
// Exports: default

// Module 15606 (PendingMessageRequestRow)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
function PendingMessageRequestRow(isRestricted) {
  let c5;
  let c6;
  let hasSingleMessageRequest;
  let isAcceptLoading;
  let isOptimisticAccepted;
  let isOptimisticRejected;
  let isRejectLoading;
  let isUserProfileLoading;
  let messageRequest;
  let require;
  ({ messageRequest, goToMessageRequestPreview: require, hasSingleMessageRequest } = isRestricted);
  let flag = isRestricted.isRestricted;
  if (flag === undefined) {
    flag = false;
  }
  let str;
  let channel;
  let id;
  c5 = undefined;
  c6 = undefined;
  function handleRejectMessageRequest() {
    _undefined2(channel.id);
  }
  function handleAcceptMessageRequest(Icon, arg1) {
    _undefined(channel.id);
  }
  function handleSelectRow() {
    let obj = hasSingleMessageRequest(str[12]);
    obj = { is_spam: false, channel_id: channel.id, other_user_id: str.id };
    obj.track(handleRejectMessageRequest.MESSAGE_REQUEST_PREVIEW_VIEWED, obj);
    callback();
  }
  const tmp = _createForOfIteratorHelperLoose();
  str = messageRequest.user;
  channel = messageRequest.channel;
  id = channel.id;
  const items = [id, hasSingleMessageRequest];
  const callback = channel.useCallback(() => {
    let obj = hasSingleMessageRequest(str[7]);
    obj = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE" };
    const intl = outer1_0(str[6]).intl;
    obj.content = intl.string(outer1_0(str[6]).t["EDYbS+"]);
    obj.icon = hasSingleMessageRequest(str[8]);
    obj.open(obj);
  }, []);
  const callback1 = channel.useCallback(() => {
    if (hasSingleMessageRequest) {
      outer1_0(str[9]).transitionToChannel(id);
      let arr = hasSingleMessageRequest(str[10]);
      arr = arr.pop();
      const obj = outer1_0(str[9]);
    }
  }, items);
  let obj = require(str[11]);
  const messageRequestActions = obj.useMessageRequestActions({ user: str, onAcceptSuccess: callback1, onError: callback });
  ({ acceptMessageRequest: c5, rejectMessageRequest: c6, isAcceptLoading, isRejectLoading, isUserProfileLoading, isOptimisticAccepted, isOptimisticRejected } = messageRequestActions);
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
  let intl = require(str[6]).intl;
  obj.label = intl.string(require(str[6]).t.hSLLWi);
  const items1 = [obj, , ];
  const obj1 = { name: constants.IGNORE_MESSAGE_REQUEST };
  const intl2 = require(str[6]).intl;
  obj1.label = intl2.string(require(str[6]).t.fIBuSD);
  items1[1] = obj1;
  const obj2 = { name: constants.PREVIEW_MESSAGE_REQUEST };
  const intl3 = require(str[6]).intl;
  obj2.label = intl3.string(require(str[6]).t.HjgsKJ);
  items1[2] = obj2;
  obj.accessibilityActions = items1;
  obj.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
    const actionName = nativeEvent.nativeEvent.actionName;
    if (outer1_11.ACCEPT_MESSAGE_REQUEST === actionName) {
      handleAcceptMessageRequest();
    } else if (outer1_11.IGNORE_MESSAGE_REQUEST === actionName) {
      handleRejectMessageRequest();
    } else if (outer1_11.PREVIEW_MESSAGE_REQUEST === actionName) {
      handleSelectRow();
    }
  };
  obj.style = tmp.pressableRow;
  const obj3 = { style: tmp.rowContainer };
  const obj4 = { channel: messageRequest.channel, otherUser: messageRequest.user, isRestricted: flag };
  const items2 = [handleAcceptMessageRequest(hasSingleMessageRequest(str[14]), obj4), ];
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
  const items3 = [tmp.actionButton, flag ? tmp.acceptButtonRestricted : tmp.acceptButton];
  obj6.style = items3;
  if (!isAcceptLoading) {
    if (!isUserProfileLoading) {
      if (!isOptimisticAccepted) {
        const obj8 = { size: require(str[15]).Icon.Sizes.SMALL, disableColor: true, source: hasSingleMessageRequest(str[16]) };
        let tmp17 = handleAcceptMessageRequest(require(str[15]).Icon, obj8);
      }
      obj6.children = tmp17;
      const items4 = [handleAcceptMessageRequest(require(str[13]).PressableOpacity, obj6), ];
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
          const obj11 = { size: require(str[15]).Icon.Sizes.SMALL, disableColor: true, source: hasSingleMessageRequest(str[17]) };
          let tmp26 = handleAcceptMessageRequest(require(str[15]).Icon, obj11);
        }
        obj9.children = tmp26;
        items4[1] = tmp18(require(str[13]).PressableOpacity, obj9);
        obj5.children = items4;
        items2[1] = handleSelectRow(c5, obj5);
        obj3.children = items2;
        const items5 = [handleSelectRow(c5, obj3), ];
        let tmp29 = null;
        if (!isRestricted.isLastRow) {
          tmp29 = handleAcceptMessageRequest(require(str[18]).FormDivider, { iconPush: true, outer: true });
        }
        items5[1] = tmp29;
        obj.children = items5;
        return handleSelectRow(require(str[13]).PressableOpacity, obj);
      }
      const obj12 = { style: tmp.activityIndicator };
      tmp26 = handleAcceptMessageRequest(id, obj12);
      tmp18 = handleAcceptMessageRequest;
    }
  }
  tmp17 = handleAcceptMessageRequest(id, { style: tmp.activityIndicator });
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
_createForOfIteratorHelperLoose.acceptButtonRestricted = { marginRight: 12 };
_createForOfIteratorHelperLoose.pressableRow = { borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
_createForOfIteratorHelperLoose.activityIndicator = { height: 16, width: 16 };
let obj3 = { flex: 1, paddingHorizontal: 16, alignSelf: "stretch", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.list = obj3;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_11 = { ACCEPT_MESSAGE_REQUEST: "accept-message-request", IGNORE_MESSAGE_REQUEST: "ignore-message-request", PREVIEW_MESSAGE_REQUEST: "preview-message-request" };
let obj2 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
const result = require("ME").fileFinishedImporting("modules/message_request/native/MessageRequestList.tsx");

export default function MessageRequestList(goToMessageRequestPreview) {
  goToMessageRequestPreview = goToMessageRequestPreview.goToMessageRequestPreview;
  const tmp = _createForOfIteratorHelperLoose();
  const importDefault = tmp;
  const bottom = importDefault(arr[19])().bottom;
  arr = importDefault(arr[20])();
  let obj = goToMessageRequestPreview(arr[21]);
  let result = obj.useListHasSingleMessageRequest();
  let obj1 = goToMessageRequestPreview(arr[22]);
  let closure_4 = obj1.useIsMessageRequestRestrictedViewer("MessageRequestList");
  if (0 === arr.length) {
    obj = {};
    let intl = goToMessageRequestPreview(arr[6]).intl;
    obj.bodyText = intl.string(goToMessageRequestPreview(arr[6]).t.SXrqTf);
    return callback(importDefault(arr[23]), obj);
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
        const intl = goToMessageRequestPreview(arr[6]).intl;
        const obj1 = { pendingRequestNumber: arr.length };
        obj.children = intl.format(goToMessageRequestPreview(arr[6]).t.evH4Yb, obj1);
        obj.children = outer1_8(goToMessageRequestPreview(arr[25]).Text, obj);
        return outer1_8(outer1_5, obj);
      } else {
        let id;
        if (null != arr[arr.length - 1]) {
          id = tmp14.channel.id;
        }
        obj = {
          messageRequest: item,
          goToMessageRequestPreview() {
              return item(item.channel.id);
            },
          isLastRow: item.channel.id === id,
          hasSingleMessageRequest: result,
          isRestricted: closure_4
        };
        return outer1_8(outer1_12, obj, item.channel.id);
      }
    };
    obj.data = items;
    return callback(closure_6, obj);
  }
};
