// Module ID: 16698
// Function ID: 16699
// Name: MessageRequestList
// Dependencies: [19, 17, 1074, 21, 4836, 576, 1115, 4528, 5909, 4847, 5039, 11935, 1241, 5435, 16699, 1177, 8810, 14459, 8053, 1613, 16704, 16706, 11933, 16709, 1364, 4832, 2]
// Exports: default

// Module 16698 (MessageRequestList)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import transitionToChannel from "transitionToChannel" /* 4847 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let obj4;
let size;
function PendingMessageRequestRow(isRestricted) {
  let _undefined;
  let _undefined2;
  let c5;
  let c6;
  let handleAcceptMessageRequest;
  let handleRejectMessageRequest;
  let hasSingleMessageRequest;
  let intl;
  let intl2;
  let intl3;
  let isAcceptLoading;
  let isOptimisticAccepted;
  let isOptimisticRejected;
  let isRejectLoading;
  let isUserProfileLoading;
  let items1;
  let items3;
  let messageRequest;
  let obj12;
  ({ messageRequest, goToMessageRequestPreview: require, hasSingleMessageRequest } = isRestricted);
  let flag = isRestricted.isRestricted;
  const isLastRow = isRestricted.isLastRow;
  if (flag === undefined) {
    flag = false;
  }
  c5 = undefined;
  c6 = undefined;
  let tmp = closure_10();
  const str = messageRequest.user;
  const channel = messageRequest.channel;
  const id = channel.id;
  const items = [id, hasSingleMessageRequest];
  const callback = channel.useCallback(() => {
    let intl;
    const obj = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", content: intl.string(require("intl").t["EDYbS+"]), icon: hasSingleMessageRequest(str[8]) };
    const open = hasSingleMessageRequest(str[7]).open;
    hasSingleMessageRequest(str[7]);
    intl = require("intl").intl;
    open(obj);
  }, []);
  const callback1 = channel.useCallback(() => {
    const tmp = hasSingleMessageRequest;
    if (tmp) {
      const obj = transitionToChannel;
      obj.transitionToChannel(id);
      const arr = ModalActionCreatorsDefault;
      arr.pop();
    }
  }, items);
  let obj = require("useMessageRequestActions");
  const messageRequestActions = obj.useMessageRequestActions({ user: str, onAcceptSuccess: callback1, onError: callback });
  ({ acceptMessageRequest: c5, rejectMessageRequest: c6, isAcceptLoading, isRejectLoading, isUserProfileLoading, isOptimisticAccepted, isOptimisticRejected } = messageRequestActions);
  function handleSelectRow() {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { is_spam: false, channel_id: channel.id, other_user_id: str.id };
    obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj2);
    require();
  }
  let obj2 = {
    onPress: handleSelectRow,
    accessibilityRole: "button",
    accessibilityActions: items1,
    onAccessibilityAction(nativeEvent) {
      const actionName = nativeEvent.nativeEvent.actionName;
      if (constants.ACCEPT_MESSAGE_REQUEST === actionName) {
        _undefined(channel.id);
      } else if (constants.IGNORE_MESSAGE_REQUEST === actionName) {
        _undefined2(channel.id);
      } else if (constants.PREVIEW_MESSAGE_REQUEST === actionName) {
        const obj2 = { is_spam: false, channel_id: channel.id, other_user_id: str.id };
        const obj = AnalyticsUtilsDefault;
        obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj2);
        require();
      }
    },
    style: tmp.pressableRow,
    children: null
  };
  const obj3 = { name: constants.ACCEPT_MESSAGE_REQUEST, label: intl.string(require("intl").t.hSLLWi) };
  const PressableOpacity = tmp4(tmp5[13]).PressableOpacity;
  intl = tmp4(tmp5[6]).intl;
  items1 = [obj3, , ];
  const obj4 = { name: constants.IGNORE_MESSAGE_REQUEST, label: intl2.string(require("intl").t.fIBuSD) };
  intl2 = tmp4(tmp5[6]).intl;
  items1[1] = obj4;
  const obj5 = { name: constants.PREVIEW_MESSAGE_REQUEST, label: intl3.string(require("intl").t.HjgsKJ) };
  intl3 = tmp4(tmp5[6]).intl;
  items1[2] = obj5;
  const obj6 = { style: tmp.rowContainer, children: null };
  const items2 = [, ];
  const obj7 = { channel: messageRequest.channel, otherUser: messageRequest.user, isRestricted: flag };
  items2[0] = closure_8(hasSingleMessageRequest(str[14]), obj7);
  const obj8 = { style: tmp.actionContainer, children: null };
  const PressableOpacity2 = tmp4(tmp5[13]).PressableOpacity;
  const intl4 = tmp4(tmp5[6]).intl;
  const formatToPlainString = intl4.formatToPlainString;
  let str1;
  const v6p0yBo = tmp4(tmp5[6]).t["6p0yBo"];
  if (str != null) {
    str1 = str.toString();
  }
  const obj9 = { accessibilityRole: "button", accessibilityLabel: formatToPlainString(v6p0yBo, { name: str1 }), onPress: handleAcceptMessageRequest, disabled: isAcceptLoading || isRejectLoading || isUserProfileLoading || isOptimisticAccepted || isOptimisticRejected, style: items3, children: null };
  handleAcceptMessageRequest = function handleAcceptMessageRequest() {
    _undefined(channel.id);
  };
  items3 = [tmp.actionButton, flag ? tmp.acceptButtonRestricted : tmp.acceptButton];
  if (!isAcceptLoading) {
    if (!isUserProfileLoading) {
      let tmp10Result;
      if (!isOptimisticAccepted) {
        const obj10 = { size: require("native").Icon.Sizes.SMALL, disableColor: true, source: hasSingleMessageRequest(str[16]) };
        const Icon = tmp4(tmp5[15]).Icon;
        tmp10Result = tmp10(Icon, obj10);
      }
      obj9.children = tmp10Result;
      const items4 = [tmp10(PressableOpacity2, obj9), ];
      const PressableOpacity3 = tmp4(tmp5[13]).PressableOpacity;
      const intl5 = tmp4(tmp5[6]).intl;
      const formatToPlainString2 = intl5.formatToPlainString;
      let str2;
      const prop = tmp4(tmp5[6]).t["C9Xe6+"];
      if (str != null) {
        str2 = str.toString();
      }
      const obj11 = { accessibilityRole: "button", accessibilityLabel: formatToPlainString2(prop, obj12), onPress: handleRejectMessageRequest, disabled: isAcceptLoading || isRejectLoading || isUserProfileLoading || isOptimisticAccepted || isOptimisticRejected, style: tmp.actionButton, children: null };
      handleRejectMessageRequest = function handleRejectMessageRequest() {
        _undefined2(channel.id);
      };
      obj12 = { name: str2 };
      if (!isRejectLoading) {
        let tmp10Result3;
        if (!isOptimisticRejected) {
          const obj13 = { size: require("native").Icon.Sizes.SMALL, disableColor: true, source: hasSingleMessageRequest(str[17]) };
          const Icon2 = tmp4(tmp5[15]).Icon;
          tmp10Result3 = tmp10(Icon2, obj13);
        }
        obj11.children = tmp10Result3;
        items4[1] = closure_8(PressableOpacity3, obj11);
        obj8.children = items4;
        items2[1] = closure_9(c5, obj8);
        obj6.children = items2;
        const items5 = [tmp8(tmp9, obj6), ];
        let tmp10Result4 = null;
        if (!isLastRow) {
          tmp10Result4 = tmp10(tmp4(tmp5[18]).FormDivider, { iconPush: true, outer: true });
        }
        items5[1] = tmp10Result4;
        obj2.children = items5;
        return closure_9(PressableOpacity, obj2);
      }
      const obj14 = { style: tmp.activityIndicator };
      tmp10Result3 = tmp10(id, obj14);
    }
  }
  const obj15 = { style: tmp.activityIndicator };
  tmp10Result = tmp10(id, obj15);
}
({ ActivityIndicator: closure_4, View: hasOwnProperty, FlatList: metroRequire } = react_native);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { sectionContainer: obj2, rowContainer: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 14, marginBottom: 12 }, actionContainer: { flexDirection: "row", alignItems: "flex-start", height: "100%" }, actionButton: size, acceptButton: { marginRight: 16 }, acceptButtonRestricted: { marginRight: 12 }, pressableRow: obj3, activityIndicator: { height: 16, width: 16 }, list: obj4 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "row", justifyContent: "space-between", marginTop: 6, marginBottom: 10 };
createStyles = createStyles.createStyles;
size = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "center", height: 32, width: 32 };
obj3 = { borderRadius: nativeDefault.radii.md };
obj4 = { flex: 1, paddingHorizontal: 16, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_10 = createStyles(obj);
const constants = { ACCEPT_MESSAGE_REQUEST: "accept-message-request", IGNORE_MESSAGE_REQUEST: "ignore-message-request", PREVIEW_MESSAGE_REQUEST: "preview-message-request" };
size = size_mod;
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestList.tsx");

export default function MessageRequestList(goToMessageRequestPreview) {
  let intl;
  let obj6;
  let sectionContainer;
  goToMessageRequestPreview = goToMessageRequestPreview.goToMessageRequestPreview;
  let arr;
  const tmp2 = closure_10();
  importDefault = tmp2;
  const bottom = require("useSafeAreaInsets")().bottom;
  arr = require("useSortedMessageRequests")();
  let obj = goToMessageRequestPreview(arr[21]);
  const hasSingleMessageRequest = obj.useListHasSingleMessageRequest();
  let obj2 = goToMessageRequestPreview(arr[22]);
  const isRestricted = obj2.useIsMessageRequestRestrictedViewer("MessageRequestList");
  const tmp3 = importDefault;
  if (0 === arr.length) {
    let obj3 = { bodyText: intl.string(tmp5(tmp4[6]).t.SXrqTf) };
    const tmp3Result = tmp3(arr[23]);
    intl = tmp5(tmp4[6]).intl;
    return closure_8(tmp3Result, obj3);
  } else {
    const items = ["header-section"];
    HermesBuiltin.arraySpread(items, arr, 1);
    const items1 = [tmp2.list, ];
    let num = 0;
    const tmp11 = closure_8;
    const tmp12 = closure_6;
    const tmp5Result = goToMessageRequestPreview(arr[24]);
    if (tmp5Result.isAndroid()) {
      num = bottom;
    }
    let obj4 = {
      style: items1,
      scrollIndicatorInsets: { right: 0.01 },
      contentContainerStyle: obj6,
      renderItem(item) {
          let Text;
          let intl;
          let obj3;
          let obj4;
          item = item.item;
          if (typeof item === "string") {
            const obj2 = { style: sectionContainer.sectionContainer, children: closure_1_8(Text, obj3) };
            obj3 = { variant: "eyebrow", color: "text-default", children: intl.format(goToMessageRequestPreview(arr[6]).t.evH4Yb, obj4) };
            Text = goToMessageRequestPreview(arr[25]).Text;
            intl = goToMessageRequestPreview(arr[6]).intl;
            obj4 = { pendingRequestNumber: arr.length };
            return closure_1_8(closure_1_5, obj2);
          } else {
            let id1;
            const id = item.channel.id;
            if (arr[arr.length - 1] != null) {
              id1 = tmp14.channel.id;
            }
            const obj = {
              messageRequest: item,
              goToMessageRequestPreview() {
                  return goToMessageRequestPreview(item.channel.id);
                },
              isLastRow: id === id1,
              hasSingleMessageRequest,
              isRestricted
            };
            return closure_1_8(PendingMessageRequestRow, obj, item.channel.id);
          }
        },
      data: items
    };
    const obj5 = { marginBottom: num };
    items1[1] = obj5;
    obj6 = { paddingBottom: bottom, paddingTop: 12 };
    return tmp11(tmp12, obj4);
  }
};
