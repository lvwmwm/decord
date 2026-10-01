// Module ID: 16714
// Function ID: 16715
// Name: SpamMessageList
// Dependencies: [19, 17, 1074, 21, 4836, 576, 1115, 11943, 4528, 5909, 4847, 5039, 11935, 1241, 5435, 16699, 1177, 8810, 14459, 8053, 1613, 16708, 16715, 16706, 5298, 5179, 5184, 16709, 1364, 4832, 2]
// Exports: default

// Module 16714 (SpamMessageList)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import transitionToChannel from "transitionToChannel" /* 4847 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 5179 */;
import MetricEvents from "MetricEvents" /* 5184 */;
import useMountEffectDefault from "useMountEffect" /* 5298 */;
import useSortedSpamMessageRequestsDefault from "useSortedSpamMessageRequests" /* 16715 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, importDefault;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let obj4;
let size;
let tmp3;
const MessageRequestEmptyDefault = tmp3(16709);
function PendingSpamMessageRequestRow(isLastRow) {
  let _undefined;
  let _undefined2;
  let c6;
  let c7;
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
  let obj13;
  ({ messageRequest, goToMessageRequestPreview: require, hasSingleMessageRequest } = isLastRow);
  c6 = undefined;
  c7 = undefined;
  isLastRow = isLastRow.isLastRow;
  let tmp = closure_10();
  const str = messageRequest.user;
  const channel = messageRequest.channel;
  const id = channel.id;
  let obj = require("useLongestChannelMessageBeforeReply");
  let closure_5 = obj.useLongestChannelMessageBeforeReply(id, channel.getRecipientId());
  const items = [id, hasSingleMessageRequest];
  const callback = channel.useCallback(() => {
    let intl;
    const obj = { key: "MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE", content: intl.string(require("intl").t.pIQ3h4), icon: hasSingleMessageRequest(str[9]) };
    const open = hasSingleMessageRequest(str[8]).open;
    hasSingleMessageRequest(str[8]);
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
  let obj2 = require("useMessageRequestActions");
  const messageRequestActions = obj2.useMessageRequestActions({ user: str, onAcceptSuccess: callback1, onError: callback });
  ({ rejectMessageRequest: c6, isAcceptLoading, isRejectLoading, isUserProfileLoading, isOptimisticAccepted, isOptimisticRejected, markAsNotSpam: c7 } = messageRequestActions);
  function handleSelectRow() {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { is_spam: true, channel_id: channel.id, other_user_id: str.id };
    obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj2);
    require();
  }
  const obj3 = {
    onPress: handleSelectRow,
    accessibilityRole: "button",
    accessibilityActions: items1,
    onAccessibilityAction(nativeEvent) {
      const actionName = nativeEvent.nativeEvent.actionName;
      if (constants.ACCEPT_SPAM_MESSAGE === actionName) {
        _undefined2(channel, closure_5);
      } else if (constants.IGNORE_SPAM_MESSAGE === actionName) {
        _undefined(channel.id);
      } else if (constants.PREVIEW_SPAM_MESSAGE === actionName) {
        const obj2 = { is_spam: true, channel_id: channel.id, other_user_id: str.id };
        const obj = AnalyticsUtilsDefault;
        obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj2);
        require();
      }
    },
    style: tmp.pressableRow,
    children: null
  };
  const obj4 = { name: constants.ACCEPT_SPAM_MESSAGE, label: intl.string(require("intl").t.apePSa) };
  const PressableOpacity = tmp2(tmp3[14]).PressableOpacity;
  intl = tmp2(tmp3[6]).intl;
  items1 = [obj4, , ];
  const obj5 = { name: constants.IGNORE_SPAM_MESSAGE, label: intl2.string(require("intl").t.MWOV9D) };
  intl2 = tmp2(tmp3[6]).intl;
  items1[1] = obj5;
  const obj6 = { name: constants.PREVIEW_SPAM_MESSAGE, label: intl3.string(require("intl").t.I6PFLB) };
  intl3 = tmp2(tmp3[6]).intl;
  items1[2] = obj6;
  const obj7 = { style: tmp.rowContainer, children: null };
  const items2 = [, ];
  const obj8 = { channel: messageRequest.channel, otherUser: messageRequest.user };
  items2[0] = closure_8(hasSingleMessageRequest(str[15]), obj8);
  const obj9 = { style: tmp.actionContainer, children: null };
  const PressableOpacity2 = tmp2(tmp3[14]).PressableOpacity;
  const intl4 = tmp2(tmp3[6]).intl;
  const formatToPlainString = intl4.formatToPlainString;
  let str1;
  const v6p0yBo = tmp2(tmp3[6]).t["6p0yBo"];
  if (str != null) {
    str1 = str.toString();
  }
  const obj10 = { accessibilityRole: "button", accessibilityLabel: formatToPlainString(v6p0yBo, { name: str1 }), onPress: handleAcceptMessageRequest, disabled: isAcceptLoading || isRejectLoading || isUserProfileLoading || isOptimisticAccepted || isOptimisticRejected, style: items3, children: null };
  handleAcceptMessageRequest = function handleAcceptMessageRequest() {
    _undefined2(channel, closure_5);
  };
  items3 = [, ];
  ({ actionButton: arr4[0], acceptButton: arr4[1] } = tmp);
  if (!isAcceptLoading) {
    if (!isUserProfileLoading) {
      let tmp10Result;
      if (!isOptimisticAccepted) {
        const obj11 = { size: require("native").Icon.Sizes.SMALL, disableColor: true, source: hasSingleMessageRequest(str[17]) };
        const Icon = tmp2(tmp3[16]).Icon;
        tmp10Result = tmp10(Icon, obj11);
      }
      obj10.children = tmp10Result;
      const items4 = [tmp10(PressableOpacity2, obj10), ];
      const PressableOpacity3 = tmp2(tmp3[14]).PressableOpacity;
      const intl5 = tmp2(tmp3[6]).intl;
      const formatToPlainString2 = intl5.formatToPlainString;
      let str2;
      const prop = tmp2(tmp3[6]).t["C9Xe6+"];
      if (str != null) {
        str2 = str.toString();
      }
      const obj12 = { accessibilityRole: "button", accessibilityLabel: formatToPlainString2(prop, obj13), onPress: handleRejectMessageRequest, disabled: isAcceptLoading || isRejectLoading || isUserProfileLoading || isOptimisticAccepted || isOptimisticRejected, style: tmp.actionButton, children: null };
      handleRejectMessageRequest = function handleRejectMessageRequest() {
        _undefined(channel.id);
      };
      obj13 = { name: str2 };
      if (!isRejectLoading) {
        let tmp10Result3;
        if (!isOptimisticRejected) {
          const obj14 = { size: require("native").Icon.Sizes.SMALL, disableColor: true, source: hasSingleMessageRequest(str[18]) };
          const Icon2 = tmp2(tmp3[16]).Icon;
          tmp10Result3 = tmp10(Icon2, obj14);
        }
        obj12.children = tmp10Result3;
        items4[1] = closure_8(PressableOpacity3, obj12);
        obj9.children = items4;
        items2[1] = closure_9(closure_5, obj9);
        obj7.children = items2;
        const items5 = [tmp8(tmp9, obj7), ];
        let tmp10Result4 = null;
        if (!isLastRow) {
          tmp10Result4 = tmp10(tmp2(tmp3[19]).FormDivider, { iconPush: true, outer: true });
        }
        items5[1] = tmp10Result4;
        obj3.children = items5;
        return closure_9(PressableOpacity, obj3);
      }
      const obj15 = { style: tmp.activityIndicator };
      tmp10Result3 = tmp10(id, obj15);
    }
  }
  const obj16 = { style: tmp.activityIndicator };
  tmp10Result = tmp10(id, obj16);
}
({ ActivityIndicator: closure_4, View: hasOwnProperty, FlatList: metroRequire } = react_native);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { sectionContainer: obj2, rowContainer: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 14, marginBottom: 12 }, actionContainer: { flexDirection: "row", alignItems: "flex-start", height: "100%" }, actionButton: size, acceptButton: { marginRight: 16 }, pressableRow: obj3, activityIndicator: { height: 16, width: 16 }, list: obj4 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "row", justifyContent: "space-between", marginTop: 6, marginBottom: 10 };
createStyles = createStyles.createStyles;
size = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "center", height: 32, width: 32 };
obj3 = { borderRadius: nativeDefault.radii.md };
obj4 = { flex: 1, paddingHorizontal: 16, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_10 = createStyles(obj);
const constants = { ACCEPT_SPAM_MESSAGE: "accept-spam-message-request", IGNORE_SPAM_MESSAGE: "ignore-spam-message-request", PREVIEW_SPAM_MESSAGE: "preview-spam-message-request" };
size = size_mod;
const result = size.fileFinishedImporting("modules/message_request/native/spam/SpamMessageList.tsx");

export default function SpamMessageList(goToMessageRequestPreview) {
  let intl;
  let num_spam_message_requests;
  let obj6;
  let sectionContainer;
  goToMessageRequestPreview = goToMessageRequestPreview.goToMessageRequestPreview;
  const tmp2 = closure_10();
  importDefault = tmp2;
  const bottom = useSafeAreaInsetsDefault().bottom;
  let obj = goToMessageRequestPreview(16708);
  dependencyMap = obj.useSpamMessageRequestCount();
  const arr = useSortedSpamMessageRequestsDefault();
  let obj2 = goToMessageRequestPreview(16706);
  const hasSingleMessageRequest = obj2.useListHasSingleSpamMessageRequest();
  useMountEffectDefault(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { num_spam_message_requests };
    obj.track(AnalyticEvents.SPAM_MESSAGE_REQUESTS_VIEWED, obj2);
    const obj3 = MonitoringAgentDefault;
    const obj4 = { name: MetricEvents.MetricEvents.SPAM_MESSAGE_REQUEST_VIEW };
    obj3.increment(obj4);
  });
  if (0 === arr.length) {
    let obj3 = { bodyText: intl.string(tmp5(1115).t.hasFPQ) };
    const tmp3Result = MessageRequestEmptyDefault;
    intl = tmp5(1115).intl;
    return closure_8(tmp3Result, obj3);
  } else {
    const items = ["header-section"];
    HermesBuiltin.arraySpread(items, arr, 1);
    const items1 = [tmp2.list, ];
    let tmp12 = closure_8;
    let num = 0;
    const tmp13 = closure_6;
    const tmp5Result = goToMessageRequestPreview(1364);
    if (tmp5Result.isAndroid()) {
      num = bottom;
    }
    let obj4 = {
      style: items1,
      scrollIndicatorInsets: { right: 0.01 },
      contentContainerStyle: obj6,
      renderItem(item) {
          let Text;
          let id;
          let id1;
          let intl;
          let obj2;
          let obj3;
          let tmp11Result;
          item = item.item;
          if (typeof item === "string") {
            const obj = { style: sectionContainer.sectionContainer, children: closure_1_8(Text, obj2) };
            obj2 = { variant: "eyebrow", color: "text-default", children: intl.format(goToMessageRequestPreview(num_spam_message_requests[6]).t.aNh5Kf, obj3) };
            Text = goToMessageRequestPreview(num_spam_message_requests[29]).Text;
            intl = goToMessageRequestPreview(num_spam_message_requests[6]).intl;
            obj3 = { count: arr.length };
            tmp11Result = closure_1_8(closure_1_5, obj);
          } else {
            const obj4 = {
              messageRequest: item,
              goToMessageRequestPreview() {
                  return goToMessageRequestPreview(item.channel.id);
                },
              isLastRow: id === id1,
              hasSingleMessageRequest
            };
            id1 = undefined;
            id = item.channel.id;
            const tmp11 = closure_1_8;
            const tmp12 = PendingSpamMessageRequestRow;
            if (arr[arr.length - 1] != null) {
              id1 = tmp14.channel.id;
            }
            tmp11Result = tmp11(tmp12, obj4, item.channel.id);
          }
          return tmp11Result;
        },
      data: items
    };
    const obj5 = { marginBottom: num };
    items1[1] = obj5;
    obj6 = { paddingBottom: bottom, paddingTop: 12 };
    return tmp12(tmp13, obj4);
  }
};
