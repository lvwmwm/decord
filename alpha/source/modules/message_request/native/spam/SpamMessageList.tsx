// Module ID: 18346
// Function ID: 18347
// Name: SpamMessageList
// Dependencies: [19, 17, 1087, 21, 4971, 587, 1128, 558, 576, 13357, 5663, 5707, 6672, 13349, 1267, 18331, 1202, 14538, 6908, 16216, 8951, 1633, 18340, 18347, 18338, 6468, 6473, 5263, 18341, 1384, 5234, 7220, 2]

// Module 18346 (SpamMessageList)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import transitionToChannel from "transitionToChannel" /* 5707 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 6468 */;
import MetricEvents from "MetricEvents" /* 6473 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let size;
({ ActivityIndicator: closure_4, View: hasOwnProperty } = react_native);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { sectionContainer: obj2, rowContainer: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 14, marginBottom: 12 }, actionContainer: { flexDirection: "row", alignItems: "flex-start", height: "100%" }, actionButton: size, acceptButton: { marginRight: 16 }, pressableRow: obj3, activityIndicator: { height: 16, width: 16 }, list: obj4 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "row", justifyContent: "space-between", marginTop: 6, marginBottom: 10 };
createStyles = createStyles.createStyles;
size = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "center", height: 32, width: 32 };
obj3 = { borderRadius: nativeDefault.radii.md };
obj4 = { flex: 1, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_9 = createStyles(obj);
const constants = { ACCEPT_SPAM_MESSAGE: "accept-spam-message-request", IGNORE_SPAM_MESSAGE: "ignore-spam-message-request", PREVIEW_SPAM_MESSAGE: "preview-spam-message-request" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function PendingSpamMessageRequestRow(arg0) {
  let closure_8;
  let goToMessageRequestPreview;
  let hasSingleMessageRequest;
  let isAcceptLoading;
  let isLastRow;
  let isOptimisticAccepted;
  let isOptimisticRejected;
  let isRejectLoading;
  let isUserProfileLoading;
  let markAsNotSpam;
  let messageRequest;
  let tmp10;
  let tmp5;
  let tmp8;
  let user;
  let tmp = goToMessageRequestPreview;
  let obj = goToMessageRequestPreview(user[8]);
  const cResult = obj.c(72);
  ({ messageRequest, goToMessageRequestPreview } = arg0);
  ({ isLastRow, hasSingleMessageRequest } = arg0);
  closure_9();
  user = messageRequest.user;
  const channel = messageRequest.channel;
  const id = channel.id;
  if (cResult[0] !== channel) {
    const recipientId = channel.getRecipientId();
    cResult[0] = channel;
    cResult[1] = recipientId;
    tmp5 = recipientId;
  } else {
    tmp5 = cResult[1];
  }
  const tmpResult = tmp(user[9]);
  const longestChannelMessageBeforeReply = tmpResult.useLongestChannelMessageBeforeReply(id, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        let intl;
        const obj = { text: intl.string(goToMessageRequestPreview(user[6]).t.pIQ3h4), variant: "critical" };
        const open = hasSingleMessageRequest(user[10]).open;
        hasSingleMessageRequest(user[10]);
        intl = goToMessageRequestPreview(user[6]).intl;
        open("MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE", obj);
      }
    }
    cResult[2] = C;
    tmp8 = C;
  } else {
    class C {
      constructor() {
        let intl;
        const obj = { text: intl.string(goToMessageRequestPreview(user[6]).t.pIQ3h4), variant: "critical" };
        const open = hasSingleMessageRequest(user[10]).open;
        hasSingleMessageRequest(user[10]);
        intl = goToMessageRequestPreview(user[6]).intl;
        open("MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE", obj);
      }
    }
  }
  if (cResult[3] === id) {
    class C {
      constructor() {
        let intl;
        const obj = { text: intl.string(goToMessageRequestPreview(user[6]).t.pIQ3h4), variant: "critical" };
        const open = hasSingleMessageRequest(user[10]).open;
        hasSingleMessageRequest(user[10]);
        intl = goToMessageRequestPreview(user[6]).intl;
        open("MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE", obj);
      }
    }
    if (cResult[6] === tmp9) {
      class C {
        constructor() {
          let intl;
          const obj = { text: intl.string(goToMessageRequestPreview(user[6]).t.pIQ3h4), variant: "critical" };
          const open = hasSingleMessageRequest(user[10]).open;
          hasSingleMessageRequest(user[10]);
          intl = goToMessageRequestPreview(user[6]).intl;
          open("MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE", obj);
        }
      }
      const tmpResult2 = tmp(user[13]);
      const messageRequestActions = tmpResult2.useMessageRequestActions(tmp10);
      const rejectMessageRequest = messageRequestActions.rejectMessageRequest;
      ({ isAcceptLoading, isRejectLoading, isUserProfileLoading, isOptimisticAccepted, isOptimisticRejected, markAsNotSpam } = messageRequestActions);
      if (cResult[9] === channel.id) {
        class C {
          constructor() {
            let intl;
            const obj = { text: intl.string(goToMessageRequestPreview(user[6]).t.pIQ3h4), variant: "critical" };
            const open = hasSingleMessageRequest(user[10]).open;
            hasSingleMessageRequest(user[10]);
            intl = goToMessageRequestPreview(user[6]).intl;
            open("MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE", obj);
          }
        }
        if (cResult[12] === channel) {
          class C {
            constructor() {
              let intl;
              const obj = { text: intl.string(goToMessageRequestPreview(user[6]).t.pIQ3h4), variant: "critical" };
              const open = hasSingleMessageRequest(user[10]).open;
              hasSingleMessageRequest(user[10]);
              intl = goToMessageRequestPreview(user[6]).intl;
              open("MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE", obj);
            }
          }
        }
        function handleAcceptMessageRequest() {
          markAsNotSpam(channel, longestChannelMessageBeforeReply);
        }
        cResult[12] = channel;
        cResult[13] = markAsNotSpam;
        cResult[14] = longestChannelMessageBeforeReply;
        cResult[15] = handleAcceptMessageRequest;
      }
      function handleRejectMessageRequest() {
        rejectMessageRequest(channel.id);
      }
      cResult[9] = channel.id;
      cResult[10] = rejectMessageRequest;
      cResult[11] = handleRejectMessageRequest;
      const tmp12 = handleRejectMessageRequest;
    }
    let obj2 = { user, onAcceptSuccess: tmp9, onError: tmp8 };
    cResult[6] = tmp9;
    cResult[7] = user;
    cResult[8] = obj2;
    tmp10 = obj2;
  }
  const fn = function v() {
    const tmp = hasSingleMessageRequest;
    if (tmp) {
      const obj = transitionToChannel;
      obj.transitionToChannel(id);
      const arr = ModalActionCreatorsDefault;
      arr.pop();
    }
  };
  cResult[3] = id;
  cResult[4] = hasSingleMessageRequest;
  cResult[5] = fn;
}) : (function PendingSpamMessageRequestRow(isLastRow) {
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
  let tmp = closure_9();
  const str = messageRequest.user;
  const channel = messageRequest.channel;
  const id = channel.id;
  let obj = require("useLongestChannelMessageBeforeReply");
  let closure_5 = obj.useLongestChannelMessageBeforeReply(id, channel.getRecipientId());
  const items = [id, hasSingleMessageRequest];
  const callback = channel.useCallback(() => {
    let intl;
    const obj = { text: intl.string(require("intl").t.pIQ3h4), variant: "critical" };
    const open = hasSingleMessageRequest(str[10]).open;
    hasSingleMessageRequest(str[10]);
    intl = require("intl").intl;
    open("MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE", obj);
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
    onAccessibilityAction: function handleAccessibilityAction(nativeEvent) {
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
  const PressableOpacity = tmp2(tmp3[18]).PressableOpacity;
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
  items2[0] = c7(hasSingleMessageRequest(str[15]), obj8);
  const obj9 = { style: tmp.actionContainer, children: null };
  const PressableOpacity2 = tmp2(tmp3[18]).PressableOpacity;
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
      const PressableOpacity3 = tmp2(tmp3[18]).PressableOpacity;
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
          const obj14 = { size: require("native").Icon.Sizes.SMALL, disableColor: true, source: hasSingleMessageRequest(str[19]) };
          const Icon2 = tmp2(tmp3[16]).Icon;
          tmp10Result3 = tmp10(Icon2, obj14);
        }
        obj12.children = tmp10Result3;
        items4[1] = c7(PressableOpacity3, obj12);
        obj9.children = items4;
        items2[1] = closure_8(closure_5, obj9);
        obj7.children = items2;
        const items5 = [tmp8(tmp9, obj7), ];
        let tmp10Result4 = null;
        if (!isLastRow) {
          tmp10Result4 = tmp10(tmp2(tmp3[20]).FormDivider, { iconPush: true, outer: true });
        }
        items5[1] = tmp10Result4;
        obj3.children = items5;
        return closure_8(PressableOpacity, obj3);
      }
      const obj15 = { style: tmp.activityIndicator };
      tmp10Result3 = tmp10(id, obj15);
    }
  }
  const obj16 = { style: tmp.activityIndicator };
  tmp10Result = tmp10(id, obj16);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function SpamMessageList(goToMessageRequestPreview) {
  let data;
  let intl2;
  let spamMessageRequestCount;
  let tmp8;
  let tmp = goToMessageRequestPreview;
  let tmp2 = data;
  let obj = goToMessageRequestPreview(data[8]);
  const cResult = obj.c(31);
  goToMessageRequestPreview = goToMessageRequestPreview.goToMessageRequestPreview;
  const tmp4 = closure_9();
  const bottom = spamMessageRequestCount(data[21])().bottom;
  let obj2 = goToMessageRequestPreview(data[22]);
  spamMessageRequestCount = obj2.useSpamMessageRequestCount();
  data = spamMessageRequestCount(data[23])();
  let obj3 = goToMessageRequestPreview(data[24]);
  const listHasSingleSpamMessageRequest = obj3.useListHasSingleSpamMessageRequest();
  if (cResult[0] !== spamMessageRequestCount) {
    const fn = function n() {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { num_spam_message_requests: spamMessageRequestCount };
      obj.track(AnalyticEvents.SPAM_MESSAGE_REQUESTS_VIEWED, obj2);
      const obj3 = MonitoringAgentDefault;
      const obj4 = { name: MetricEvents.MetricEvents.SPAM_MESSAGE_REQUEST_VIEW };
      obj3.increment(obj4);
    };
    cResult[0] = spamMessageRequestCount;
    cResult[1] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[1];
  }
  spamMessageRequestCount(tmp2[27])(tmp8);
  if (0 === data.length) {
    let tmp31;
    const _Symbol3 = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      let obj4 = { bodyText: intl2.string(tmp(tmp2[6]).t.hasFPQ) };
      const tmp5Result = spamMessageRequestCount(tmp2[28]);
      intl2 = tmp(tmp2[6]).intl;
      const tmp34 = closure_7(tmp5Result, obj4);
      cResult[2] = tmp34;
      tmp31 = tmp34;
    } else {
      tmp31 = cResult[2];
    }
    return tmp31;
  } else {
    if (cResult[3] === goToMessageRequestPreview) {
      if (cResult[4] === listHasSingleSpamMessageRequest) {
        let tmp10;
        let tmp11;
        let tmp12;
        if (cResult[5] === data) {
          tmp10 = cResult[6];
        }
        if (cResult[7] !== bottom) {
          let num7 = 0;
          const tmpResult = tmp(tmp2[29]);
          if (tmpResult.isAndroid()) {
            num7 = bottom;
          }
          cResult[7] = bottom;
          cResult[8] = num7;
          tmp11 = num7;
        } else {
          tmp11 = cResult[8];
        }
        if (cResult[9] !== tmp11) {
          const obj5 = { marginBottom: tmp11 };
          cResult[9] = tmp11;
          cResult[10] = obj5;
          tmp12 = obj5;
        } else {
          tmp12 = cResult[10];
        }
        if (cResult[11] === tmp4.list) {
          let tmp13;
          let tmp15;
          let tmp16;
          let tmp17;
          let tmp18;
          let tmp20;
          if (cResult[12] === tmp12) {
            tmp13 = cResult[13];
          }
          const _Symbol = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const obj6 = { right: 0.01 };
            cResult[14] = obj6;
            tmp15 = obj6;
          } else {
            tmp15 = cResult[14];
          }
          if (cResult[15] !== bottom) {
            const obj7 = { paddingHorizontal: 16, paddingBottom: bottom, paddingTop: 12 };
            cResult[15] = bottom;
            cResult[16] = obj7;
            tmp16 = obj7;
          } else {
            tmp16 = cResult[16];
          }
          const _Symbol2 = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            const fn2 = function f(channel) {
              return channel.channel.id;
            };
            cResult[17] = fn2;
            tmp17 = fn2;
          } else {
            tmp17 = cResult[17];
          }
          const sectionContainer = tmp4.sectionContainer;
          if (cResult[18] !== data.length) {
            const intl = tmp(tmp2[6]).intl;
            const obj8 = { count: data.length };
            const formatResult = intl.format(tmp(tmp2[6]).t.aNh5Kf, obj8);
            cResult[18] = data.length;
            cResult[19] = formatResult;
            tmp18 = formatResult;
          } else {
            tmp18 = cResult[19];
          }
          if (cResult[20] !== tmp18) {
            const obj9 = { variant: "eyebrow", color: "text-default", children: tmp18 };
            const tmp22 = closure_7(tmp(tmp2[30]).Text, obj9);
            cResult[20] = tmp18;
            cResult[21] = tmp22;
            tmp20 = tmp22;
          } else {
            tmp20 = cResult[21];
          }
          if (cResult[22] === tmp4.sectionContainer) {
            let tmp23;
            if (cResult[23] === tmp20) {
              tmp23 = cResult[24];
            }
            if (cResult[25] === tmp10) {
              if (cResult[26] === data) {
                if (cResult[27] === tmp23) {
                  if (cResult[28] === tmp13) {
                    let tmp27;
                    if (cResult[29] === tmp16) {
                      tmp27 = cResult[30];
                    }
                    return tmp27;
                  }
                }
              }
            }
            const obj10 = { style: tmp13, scrollIndicatorInsets: tmp15, contentContainerStyle: tmp16, renderItem: tmp10, data, keyExtractor: tmp17, ListHeaderComponent: tmp23 };
            const tmp29 = closure_7(tmp(tmp2[31]).FlashList, obj10);
            cResult[25] = tmp10;
            cResult[26] = data;
            cResult[27] = tmp23;
            cResult[28] = tmp13;
            cResult[29] = tmp16;
            cResult[30] = tmp29;
            tmp27 = tmp29;
          }
          const obj11 = { style: sectionContainer, children: tmp20 };
          const tmp26 = closure_7(closure_5, obj11);
          cResult[22] = tmp4.sectionContainer;
          cResult[23] = tmp20;
          cResult[24] = tmp26;
          tmp23 = tmp26;
        }
        const items = [tmp4.list, tmp12];
        cResult[11] = tmp4.list;
        cResult[12] = tmp12;
        cResult[13] = items;
        tmp13 = items;
      }
    }
    function renderData(item) {
      let id;
      let id1;
      item = item.item;
      const obj = {
        messageRequest: item,
        goToMessageRequestPreview() {
          return goToMessageRequestPreview(item.channel.id);
        },
        isLastRow: id === id1,
        hasSingleMessageRequest: listHasSingleSpamMessageRequest
      };
      id1 = undefined;
      id = item.channel.id;
      const tmp = closure_1_7;
      const tmp2 = closure_1_11;
      if (arr[arr.length - 1] != null) {
        id1 = tmp3.channel.id;
      }
      return tmp(tmp2, obj, item.channel.id);
    }
    cResult[3] = goToMessageRequestPreview;
    cResult[4] = listHasSingleSpamMessageRequest;
    cResult[5] = data;
    cResult[6] = renderData;
    tmp10 = renderData;
  }
}) : (function SpamMessageList(goToMessageRequestPreview) {
  let Text;
  let intl;
  let intl2;
  let num_spam_message_requests;
  let obj6;
  let obj7;
  let obj8;
  let obj9;
  let tmp10Result;
  goToMessageRequestPreview = goToMessageRequestPreview.goToMessageRequestPreview;
  importDefault = undefined;
  let data;
  let tmp = closure_9();
  const tmp3 = data;
  let tmp2 = importDefault;
  const bottom = require("useSafeAreaInsets")().bottom;
  let obj = goToMessageRequestPreview(data[22]);
  importDefault = obj.useSpamMessageRequestCount();
  data = require("useSortedSpamMessageRequests")();
  let obj2 = goToMessageRequestPreview(data[24]);
  const hasSingleMessageRequest = obj2.useListHasSingleSpamMessageRequest();
  require("useMountEffect")(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { num_spam_message_requests };
    obj.track(AnalyticEvents.SPAM_MESSAGE_REQUESTS_VIEWED, obj2);
    const obj3 = MonitoringAgentDefault;
    const obj4 = { name: MetricEvents.MetricEvents.SPAM_MESSAGE_REQUEST_VIEW };
    obj3.increment(obj4);
  });
  if (0 === data.length) {
    let obj3 = { bodyText: intl2.string(goToMessageRequestPreview(tmp3[6]).t.hasFPQ) };
    const tmp2Result = tmp2(tmp3[28]);
    intl2 = tmp4(tmp3[6]).intl;
    tmp10Result = closure_7(tmp2Result, obj3);
  } else {
    const items = [tmp.list, ];
    const FlashList = tmp4(tmp3[31]).FlashList;
    let num = 0;
    const tmp4Result = goToMessageRequestPreview(tmp3[29]);
    if (tmp4Result.isAndroid()) {
      num = bottom;
    }
    let obj4 = {
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
            hasSingleMessageRequest
          };
          id1 = undefined;
          id = item.channel.id;
          const tmp = closure_1_7;
          const tmp2 = closure_1_11;
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
    const obj5 = { marginBottom: num };
    items[1] = obj5;
    obj6 = { paddingHorizontal: 16, paddingBottom: bottom, paddingTop: 12 };
    obj7 = { style: tmp.sectionContainer, children: closure_7(Text, obj8) };
    obj8 = { variant: "eyebrow", color: "text-default", children: intl.format(goToMessageRequestPreview(tmp3[6]).t.aNh5Kf, obj9) };
    Text = tmp4(tmp3[30]).Text;
    intl = tmp4(tmp3[6]).intl;
    obj9 = { count: data.length };
    tmp10Result = tmp10(FlashList, obj4);
  }
  return tmp10Result;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/message_request/native/spam/SpamMessageList.tsx");

export default tmp5;
