// Module ID: 18957
// Function ID: 18958
// Name: MessageRequestList
// Dependencies: [19, 17, 1072, 21, 5014, 575, 1113, 5712, 5756, 6744, 14000, 1252, 6980, 18958, 1187, 15114, 16816, 8177, 1625, 18963, 18965, 13999, 18968, 7294, 1375, 5624, 2]
// Exports: default

// Module 18957 (MessageRequestList)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import transitionToChannel from "transitionToChannel" /* 5756 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
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
  let tmp = closure_9();
  const str = messageRequest.user;
  const channel = messageRequest.channel;
  const id = channel.id;
  const items = [id, hasSingleMessageRequest];
  const callback = channel.useCallback(() => {
    let intl;
    const obj = { text: intl.string(require("intl").t["EDYbS+"]), variant: "critical" };
    const open = hasSingleMessageRequest(str[7]).open;
    hasSingleMessageRequest(str[7]);
    intl = require("intl").intl;
    open("MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", obj);
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
    onAccessibilityAction: function handleAccessibilityAction(nativeEvent) {
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
  const PressableOpacity = tmp4(tmp5[12]).PressableOpacity;
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
  items2[0] = closure_7(hasSingleMessageRequest(str[13]), obj7);
  const obj8 = { style: tmp.actionContainer, children: null };
  const PressableOpacity2 = tmp4(tmp5[12]).PressableOpacity;
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
        const obj10 = { size: require("native").Icon.Sizes.SMALL, disableColor: true, source: hasSingleMessageRequest(str[15]) };
        const Icon = tmp4(tmp5[14]).Icon;
        tmp10Result = tmp10(Icon, obj10);
      }
      obj9.children = tmp10Result;
      const items4 = [tmp10(PressableOpacity2, obj9), ];
      const PressableOpacity3 = tmp4(tmp5[12]).PressableOpacity;
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
          const obj13 = { size: require("native").Icon.Sizes.SMALL, disableColor: true, source: hasSingleMessageRequest(str[16]) };
          const Icon2 = tmp4(tmp5[14]).Icon;
          tmp10Result3 = tmp10(Icon2, obj13);
        }
        obj11.children = tmp10Result3;
        items4[1] = closure_7(PressableOpacity3, obj11);
        obj8.children = items4;
        items2[1] = closure_8(c5, obj8);
        obj6.children = items2;
        const items5 = [tmp8(tmp9, obj6), ];
        let tmp10Result4 = null;
        if (!isLastRow) {
          tmp10Result4 = tmp10(tmp4(tmp5[17]).FormDivider, { iconPush: true, outer: true });
        }
        items5[1] = tmp10Result4;
        obj2.children = items5;
        return closure_8(PressableOpacity, obj2);
      }
      const obj14 = { style: tmp.activityIndicator };
      tmp10Result3 = tmp10(id, obj14);
    }
  }
  const obj15 = { style: tmp.activityIndicator };
  tmp10Result = tmp10(id, obj15);
}
({ ActivityIndicator: closure_4, View: hasOwnProperty } = react_native);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { sectionContainer: obj2, rowContainer: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 14, marginBottom: 12 }, actionContainer: { flexDirection: "row", alignItems: "flex-start", height: "100%" }, actionButton: size, acceptButton: { marginRight: 16 }, acceptButtonRestricted: { marginRight: 12 }, pressableRow: obj3, activityIndicator: { height: 16, width: 16 }, list: obj4 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "row", justifyContent: "space-between", marginTop: 6, marginBottom: 10 };
createStyles = createStyles.createStyles;
size = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "center", height: 32, width: 32 };
obj3 = { borderRadius: nativeDefault.radii.md };
obj4 = { flex: 1, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_9 = createStyles(obj);
const constants = { ACCEPT_MESSAGE_REQUEST: "accept-message-request", IGNORE_MESSAGE_REQUEST: "ignore-message-request", PREVIEW_MESSAGE_REQUEST: "preview-message-request" };
size = size_mod;
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestList.tsx");

export default function MessageRequestList(goToMessageRequestPreview) {
  let Text;
  let hasSingleMessageRequest;
  let intl;
  let intl2;
  let obj6;
  let obj7;
  let obj8;
  let obj9;
  let tmp9Result;
  goToMessageRequestPreview = goToMessageRequestPreview.goToMessageRequestPreview;
  let data;
  dependencyMap = undefined;
  let tmp = closure_9();
  const tmp3 = dependencyMap;
  let tmp2 = data;
  const bottom = data(1625)().bottom;
  data = data(18963)();
  let obj = goToMessageRequestPreview(18965);
  dependencyMap = obj.useListHasSingleMessageRequest();
  const obj2 = goToMessageRequestPreview(13999);
  const isRestricted = obj2.useIsMessageRequestRestrictedViewer();
  if (0 === data.length) {
    const obj3 = { bodyText: intl2.string(goToMessageRequestPreview(1113).t.SXrqTf) };
    const tmp2Result = tmp2(18968);
    intl2 = tmp4(1113).intl;
    tmp9Result = closure_7(tmp2Result, obj3);
  } else {
    const items = [tmp.list, ];
    const FlashList = tmp4(7294).FlashList;
    let num = 0;
    const tmp4Result = goToMessageRequestPreview(1375);
    if (tmp4Result.isAndroid()) {
      num = bottom;
    }
    const obj5 = { marginBottom: num };
    items[1] = obj5;
    const obj4 = {
      style: items,
      scrollIndicatorInsets: { right: 0.01 },
      contentContainerStyle: obj6,
      renderItem: function renderData(item) {
          let id;
          let id1;
          item = item.item;
          const obj = {
            messageRequest: item,
            goToMessageRequestPreview() {
              return goToMessageRequestPreview(item.channel.id);
            },
            isLastRow: id === id1,
            hasSingleMessageRequest,
            isRestricted
          };
          id1 = undefined;
          id = item.channel.id;
          const tmp = closure_1_7;
          const tmp2 = PendingMessageRequestRow;
          if (arr[arr.length - 1] != null) {
            id1 = tmp3.channel.id;
          }
          return tmp(tmp2, obj, item.channel.id);
        },
      data,
      keyExtractor(channel) {
          return channel.channel.id;
        },
      ListHeaderComponent: closure_7(closure_5, obj7)
    };
    obj6 = { paddingHorizontal: 16, paddingBottom: bottom, paddingTop: 12 };
    obj7 = { style: tmp.sectionContainer, children: closure_7(Text, obj8) };
    obj8 = { variant: "eyebrow", color: "text-default", children: intl.format(goToMessageRequestPreview(1113).t.evH4Yb, obj9) };
    Text = tmp4(5624).Text;
    intl = tmp4(1113).intl;
    obj9 = { pendingRequestNumber: data.length };
    tmp9Result = tmp9(FlashList, obj4);
  }
  return tmp9Result;
};
