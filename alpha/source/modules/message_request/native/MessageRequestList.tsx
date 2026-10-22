// Module ID: 18250
// Function ID: 18251
// Name: MessageRequestList
// Dependencies: [19, 17, 1087, 21, 4969, 587, 1128, 558, 576, 5649, 5693, 6657, 13285, 1267, 18251, 1202, 14486, 6893, 16155, 8926, 1633, 18256, 18258, 13284, 18261, 1384, 5220, 7205, 2]

// Module 18250 (MessageRequestList)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import transitionToChannel from "transitionToChannel" /* 5693 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6657 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4969 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
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
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function PendingMessageRequestRow(isRestricted) {
  let first;
  let goToMessageRequestPreview;
  let hasSingleMessageRequest;
  let intl;
  let intl2;
  let intl3;
  let isAcceptLoading;
  let isLastRow;
  let isOptimisticAccepted;
  let isOptimisticRejected;
  let isRejectLoading;
  let isUserProfileLoading;
  let items1;
  let items2;
  let items3;
  let messageRequest;
  let str;
  let tmp = goToMessageRequestPreview;
  let obj = goToMessageRequestPreview(str[8]);
  const cResult = obj.c(70);
  ({ messageRequest, goToMessageRequestPreview } = isRestricted);
  ({ isLastRow, hasSingleMessageRequest } = isRestricted);
  isRestricted = isRestricted.isRestricted;
  const tmp5 = closure_9();
  str = messageRequest.user;
  const channel = messageRequest.channel;
  const id = channel.id;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      let intl;
      const obj = { text: intl.string(goToMessageRequestPreview(str[6]).t["EDYbS+"]), variant: "critical" };
      const open = hasSingleMessageRequest(str[9]).open;
      hasSingleMessageRequest(str[9]);
      intl = goToMessageRequestPreview(str[6]).intl;
      open("MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", obj);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === id) {
    let tmp7;
    if (cResult[2] === hasSingleMessageRequest) {
      tmp7 = cResult[3];
    }
    if (cResult[4] === tmp7) {
      let tmp8;
      if (cResult[5] === str) {
        tmp8 = cResult[6];
      }
      const tmpResult = tmp(str[12]);
      const messageRequestActions = tmpResult.useMessageRequestActions(tmp8);
      const acceptMessageRequest = messageRequestActions.acceptMessageRequest;
      const rejectMessageRequest = messageRequestActions.rejectMessageRequest;
      ({ isAcceptLoading, isRejectLoading, isUserProfileLoading, isOptimisticAccepted, isOptimisticRejected } = messageRequestActions);
      if (cResult[7] === channel.id) {
        let tmp10;
        if (cResult[8] === rejectMessageRequest) {
          tmp10 = cResult[9];
        }
        let closure_7 = tmp10;
        if (cResult[10] === acceptMessageRequest) {
          let tmp11;
          if (cResult[11] === channel.id) {
            tmp11 = cResult[12];
          }
          let closure_8 = tmp11;
          if (cResult[13] === channel.id) {
            if (cResult[14] === goToMessageRequestPreview) {
              let tmp12;
              if (cResult[15] === str.id) {
                tmp12 = cResult[16];
              }
              closure_9 = tmp12;
              if (cResult[17] === tmp11) {
                if (cResult[18] === tmp10) {
                  let tmp13;
                  let tmp15;
                  if (cResult[19] === tmp12) {
                    tmp13 = cResult[20];
                  }
                  const _Symbol = Symbol;
                  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                    let obj2 = { name: constants.ACCEPT_MESSAGE_REQUEST, label: intl.string(tmp(tmp2[6]).t.hSLLWi) };
                    intl = tmp(tmp2[6]).intl;
                    const items = [obj2, , ];
                    const obj3 = { name: constants.IGNORE_MESSAGE_REQUEST, label: intl2.string(tmp(str[6]).t.fIBuSD) };
                    intl2 = tmp(tmp2[6]).intl;
                    items[1] = obj3;
                    const obj4 = { name: constants.PREVIEW_MESSAGE_REQUEST, label: intl3.string(tmp(str[6]).t.HjgsKJ) };
                    intl3 = tmp(tmp2[6]).intl;
                    items[2] = obj4;
                    cResult[21] = items;
                    tmp15 = items;
                  } else {
                    tmp15 = cResult[21];
                  }
                  if (cResult[22] === (undefined !== isRestricted && isRestricted)) {
                    if (cResult[23] === messageRequest.channel) {
                      let tmp19;
                      let tmp23;
                      if (cResult[24] === messageRequest.user) {
                        tmp19 = cResult[25];
                      }
                      const actionContainer = tmp5.actionContainer;
                      if (cResult[26] !== str) {
                        const intl4 = tmp(tmp2[6]).intl;
                        const formatToPlainString = intl4.formatToPlainString;
                        let str1;
                        const v6p0yBo = tmp(tmp2[6]).t["6p0yBo"];
                        if (str != null) {
                          str1 = str.toString();
                        }
                        const obj5 = { name: str1 };
                        const formatToPlainStringResult = formatToPlainString(v6p0yBo, obj5);
                        cResult[26] = str;
                        cResult[27] = formatToPlainStringResult;
                        tmp23 = formatToPlainStringResult;
                      } else {
                        tmp23 = cResult[27];
                      }
                      const tmp28 = undefined !== isRestricted && isRestricted ? tmp5.acceptButtonRestricted : tmp5.acceptButton;
                      if (cResult[28] === tmp5.actionButton) {
                        let tmp29;
                        let tmp30;
                        if (cResult[29] === tmp28) {
                          tmp29 = cResult[30];
                        }
                        if (cResult[31] === isAcceptLoading) {
                          if (cResult[32] === isOptimisticAccepted) {
                            if (cResult[33] === isUserProfileLoading) {
                              if (cResult[34] === tmp5.activityIndicator) {
                                tmp30 = cResult[35];
                              }
                              if (cResult[36] === (isAcceptLoading || isRejectLoading || isUserProfileLoading || isOptimisticAccepted || isOptimisticRejected)) {
                                if (cResult[37] === tmp11) {
                                  if (cResult[38] === tmp23) {
                                    if (cResult[39] === tmp29) {
                                      let tmp36;
                                      let tmp39;
                                      let tmp44;
                                      if (cResult[40] === tmp30) {
                                        tmp36 = cResult[41];
                                      }
                                      if (cResult[42] !== str) {
                                        const intl5 = tmp(tmp2[6]).intl;
                                        const formatToPlainString2 = intl5.formatToPlainString;
                                        let str2;
                                        const prop = tmp(tmp2[6]).t["C9Xe6+"];
                                        if (str != null) {
                                          str2 = str.toString();
                                        }
                                        const obj6 = { name: str2 };
                                        const formatToPlainString2Result = formatToPlainString2(prop, obj6);
                                        cResult[42] = str;
                                        cResult[43] = formatToPlainString2Result;
                                        tmp39 = formatToPlainString2Result;
                                      } else {
                                        tmp39 = cResult[43];
                                      }
                                      if (cResult[44] === isOptimisticRejected) {
                                        if (cResult[45] === isRejectLoading) {
                                          if (cResult[46] === tmp5.activityIndicator) {
                                            tmp44 = cResult[47];
                                          }
                                          if (cResult[48] === (isAcceptLoading || isRejectLoading || isUserProfileLoading || isOptimisticAccepted || isOptimisticRejected)) {
                                            if (cResult[49] === tmp10) {
                                              if (cResult[50] === tmp5.actionButton) {
                                                if (cResult[51] === tmp39) {
                                                  let tmp50;
                                                  if (cResult[52] === tmp44) {
                                                    tmp50 = cResult[53];
                                                  }
                                                  if (cResult[54] === tmp5.actionContainer) {
                                                    if (cResult[55] === tmp36) {
                                                      let tmp53;
                                                      if (cResult[56] === tmp50) {
                                                        tmp53 = cResult[57];
                                                      }
                                                      if (cResult[58] === tmp5.rowContainer) {
                                                        if (cResult[59] === tmp19) {
                                                          let tmp57;
                                                          let tmp61;
                                                          if (cResult[60] === tmp53) {
                                                            tmp57 = cResult[61];
                                                          }
                                                          if (cResult[62] !== isLastRow) {
                                                            let tmp62 = null;
                                                            if (!isLastRow) {
                                                              tmp62 = closure_7(tmp(tmp2[19]).FormDivider, { iconPush: true, outer: true });
                                                            }
                                                            cResult[62] = isLastRow;
                                                            cResult[63] = tmp62;
                                                            tmp61 = tmp62;
                                                          } else {
                                                            tmp61 = cResult[63];
                                                          }
                                                          if (cResult[64] === tmp13) {
                                                            if (cResult[65] === tmp12) {
                                                              if (cResult[66] === tmp5.pressableRow) {
                                                                if (cResult[67] === tmp57) {
                                                                  let tmp64;
                                                                  if (cResult[68] === tmp61) {
                                                                    tmp64 = cResult[69];
                                                                  }
                                                                  return tmp64;
                                                                }
                                                              }
                                                            }
                                                          }
                                                          const obj8 = { onPress: tmp12, accessibilityRole: "button", accessibilityActions: tmp15, onAccessibilityAction: tmp13, style: tmp17, children: items1 };
                                                          items1 = [tmp57, tmp61];
                                                          const tmp66 = closure_8(tmp(str[17]).PressableOpacity, obj8);
                                                          cResult[64] = tmp13;
                                                          cResult[65] = tmp12;
                                                          cResult[66] = tmp5.pressableRow;
                                                          cResult[67] = tmp57;
                                                          cResult[68] = tmp61;
                                                          cResult[69] = tmp66;
                                                          tmp64 = tmp66;
                                                        }
                                                      }
                                                      const obj9 = { style: tmp18, children: items2 };
                                                      items2 = [tmp19, tmp53];
                                                      const tmp60 = closure_8(acceptMessageRequest, obj9);
                                                      cResult[58] = tmp5.rowContainer;
                                                      cResult[59] = tmp19;
                                                      cResult[60] = tmp53;
                                                      cResult[61] = tmp60;
                                                      tmp57 = tmp60;
                                                    }
                                                  }
                                                  const obj10 = { style: actionContainer, children: items3 };
                                                  items3 = [tmp36, tmp50];
                                                  const tmp56 = closure_8(acceptMessageRequest, obj10);
                                                  cResult[54] = tmp5.actionContainer;
                                                  cResult[55] = tmp36;
                                                  cResult[56] = tmp50;
                                                  cResult[57] = tmp56;
                                                  tmp53 = tmp56;
                                                }
                                              }
                                            }
                                          }
                                          const obj11 = { accessibilityRole: "button", accessibilityLabel: tmp39, onPress: tmp10, disabled: isAcceptLoading || isRejectLoading || isUserProfileLoading || isOptimisticAccepted || isOptimisticRejected, style: tmp5.actionButton, children: tmp44 };
                                          const tmp52 = closure_7(tmp(str[17]).PressableOpacity, obj11);
                                          cResult[48] = isAcceptLoading || isRejectLoading || isUserProfileLoading || isOptimisticAccepted || isOptimisticRejected;
                                          cResult[49] = tmp10;
                                          cResult[50] = tmp5.actionButton;
                                          cResult[51] = tmp39;
                                          cResult[52] = tmp44;
                                          cResult[53] = tmp52;
                                          tmp50 = tmp52;
                                        }
                                      }
                                      if (!isRejectLoading) {
                                        let tmp47;
                                        if (!isOptimisticRejected) {
                                          const obj12 = { size: tmp(str[15]).Icon.Sizes.SMALL, disableColor: true, source: hasSingleMessageRequest(str[18]) };
                                          const Icon2 = tmp(tmp2[15]).Icon;
                                          tmp47 = closure_7(Icon2, obj12);
                                        }
                                        cResult[44] = isOptimisticRejected;
                                        cResult[45] = isRejectLoading;
                                        cResult[46] = tmp5.activityIndicator;
                                        cResult[47] = tmp47;
                                        tmp44 = tmp47;
                                      }
                                      const obj13 = { style: tmp5.activityIndicator };
                                      tmp47 = closure_7(id, obj13);
                                    }
                                  }
                                }
                              }
                              const obj14 = { accessibilityRole: "button", accessibilityLabel: tmp23, onPress: tmp11, disabled: isAcceptLoading || isRejectLoading || isUserProfileLoading || isOptimisticAccepted || isOptimisticRejected, style: tmp29, children: tmp30 };
                              const tmp38 = closure_7(tmp(str[17]).PressableOpacity, obj14);
                              cResult[36] = isAcceptLoading || isRejectLoading || isUserProfileLoading || isOptimisticAccepted || isOptimisticRejected;
                              cResult[37] = tmp11;
                              cResult[38] = tmp23;
                              cResult[39] = tmp29;
                              cResult[40] = tmp30;
                              cResult[41] = tmp38;
                              tmp36 = tmp38;
                            }
                          }
                        }
                        if (!isAcceptLoading) {
                          if (!isUserProfileLoading) {
                            let tmp33;
                            if (!isOptimisticAccepted) {
                              const obj15 = { size: tmp(str[15]).Icon.Sizes.SMALL, disableColor: true, source: hasSingleMessageRequest(str[16]) };
                              const Icon = tmp(tmp2[15]).Icon;
                              tmp33 = closure_7(Icon, obj15);
                            }
                            cResult[31] = isAcceptLoading;
                            cResult[32] = isOptimisticAccepted;
                            cResult[33] = isUserProfileLoading;
                            cResult[34] = tmp5.activityIndicator;
                            cResult[35] = tmp33;
                            tmp30 = tmp33;
                          }
                        }
                        const obj16 = { style: tmp5.activityIndicator };
                        tmp33 = closure_7(id, obj16);
                      }
                      const items4 = [tmp5.actionButton, tmp28];
                      cResult[28] = tmp5.actionButton;
                      cResult[29] = tmp28;
                      cResult[30] = items4;
                      tmp29 = items4;
                    }
                  }
                  const obj17 = { channel: null, otherUser: null, isRestricted: undefined !== isRestricted && isRestricted };
                  ({ channel: obj7.channel, user: obj7.otherUser } = messageRequest);
                  const tmp22 = closure_7(hasSingleMessageRequest(str[14]), obj17);
                  cResult[22] = undefined !== isRestricted && isRestricted;
                  cResult[23] = messageRequest.channel;
                  cResult[24] = messageRequest.user;
                  cResult[25] = tmp22;
                  tmp19 = tmp22;
                }
              }
              function handleAccessibilityAction(nativeEvent) {
                const actionName = nativeEvent.nativeEvent.actionName;
                if (constants.ACCEPT_MESSAGE_REQUEST === actionName) {
                  return closure_8();
                } else if (constants.IGNORE_MESSAGE_REQUEST === actionName) {
                  return closure_7();
                } else if (constants.PREVIEW_MESSAGE_REQUEST === actionName) {
                  return closure_9();
                }
              }
              cResult[17] = tmp11;
              cResult[18] = tmp10;
              cResult[19] = tmp12;
              cResult[20] = handleAccessibilityAction;
              tmp13 = handleAccessibilityAction;
            }
          }
          function handleSelectRow() {
            const obj = AnalyticsUtilsDefault;
            const obj2 = { is_spam: false, channel_id: channel.id, other_user_id: str.id };
            obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj2);
            goToMessageRequestPreview();
          }
          cResult[13] = channel.id;
          cResult[14] = goToMessageRequestPreview;
          cResult[15] = str.id;
          cResult[16] = handleSelectRow;
          tmp12 = handleSelectRow;
        }
        function handleAcceptMessageRequest() {
          acceptMessageRequest(channel.id);
        }
        cResult[10] = acceptMessageRequest;
        cResult[11] = channel.id;
        cResult[12] = handleAcceptMessageRequest;
        tmp11 = handleAcceptMessageRequest;
      }
      function handleRejectMessageRequest() {
        rejectMessageRequest(channel.id);
      }
      cResult[7] = channel.id;
      cResult[8] = rejectMessageRequest;
      cResult[9] = handleRejectMessageRequest;
      tmp10 = handleRejectMessageRequest;
    }
    const obj18 = { user: str, onAcceptSuccess: tmp7, onError: first };
    cResult[4] = tmp7;
    cResult[5] = str;
    cResult[6] = obj18;
    tmp8 = obj18;
  }
  const fn2 = function f() {
    const tmp = hasSingleMessageRequest;
    if (tmp) {
      const obj = transitionToChannel;
      obj.transitionToChannel(id);
      const arr = ModalActionCreatorsDefault;
      arr.pop();
    }
  };
  cResult[1] = id;
  cResult[2] = hasSingleMessageRequest;
  cResult[3] = fn2;
  tmp7 = fn2;
}) : (function PendingMessageRequestRow(isRestricted) {
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
    const open = hasSingleMessageRequest(str[9]).open;
    hasSingleMessageRequest(str[9]);
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
  const PressableOpacity = tmp4(tmp5[17]).PressableOpacity;
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
  items2[0] = closure_7(hasSingleMessageRequest(str[14]), obj7);
  const obj8 = { style: tmp.actionContainer, children: null };
  const PressableOpacity2 = tmp4(tmp5[17]).PressableOpacity;
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
      const PressableOpacity3 = tmp4(tmp5[17]).PressableOpacity;
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
          const obj13 = { size: require("native").Icon.Sizes.SMALL, disableColor: true, source: hasSingleMessageRequest(str[18]) };
          const Icon2 = tmp4(tmp5[15]).Icon;
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
          tmp10Result4 = tmp10(tmp4(tmp5[19]).FormDivider, { iconPush: true, outer: true });
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function MessageRequestList(goToMessageRequestPreview) {
  let data;
  let intl;
  let listHasSingleMessageRequest;
  let tmp = goToMessageRequestPreview;
  let tmp2 = listHasSingleMessageRequest;
  let obj = goToMessageRequestPreview(listHasSingleMessageRequest[8]);
  const cResult = obj.c(30);
  goToMessageRequestPreview = goToMessageRequestPreview.goToMessageRequestPreview;
  const tmp4 = closure_9();
  const bottom = data(listHasSingleMessageRequest[20])().bottom;
  const tmp5 = data;
  data = data(listHasSingleMessageRequest[21])();
  const obj2 = goToMessageRequestPreview(listHasSingleMessageRequest[22]);
  listHasSingleMessageRequest = obj2.useListHasSingleMessageRequest();
  const obj3 = goToMessageRequestPreview(listHasSingleMessageRequest[23]);
  const isMessageRequestRestrictedViewer = obj3.useIsMessageRequestRestrictedViewer();
  if (0 === data.length) {
    let first;
    const _Symbol3 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { bodyText: intl.string(tmp(tmp2[6]).t.SXrqTf) };
      const tmp5Result = tmp5(tmp2[24]);
      intl = tmp(tmp2[6]).intl;
      const tmp31 = closure_7(tmp5Result, obj4);
      cResult[0] = tmp31;
      first = tmp31;
    } else {
      first = cResult[0];
    }
    return first;
  } else {
    if (cResult[1] === goToMessageRequestPreview) {
      if (cResult[2] === listHasSingleMessageRequest) {
        if (cResult[3] === isMessageRequestRestrictedViewer) {
          let tmp8;
          let tmp9;
          let tmp10;
          if (cResult[4] === data) {
            tmp8 = cResult[5];
          }
          if (cResult[6] !== bottom) {
            let num6 = 0;
            const tmpResult = tmp(tmp2[25]);
            if (tmpResult.isAndroid()) {
              num6 = bottom;
            }
            cResult[6] = bottom;
            cResult[7] = num6;
            tmp9 = num6;
          } else {
            tmp9 = cResult[7];
          }
          if (cResult[8] !== tmp9) {
            const obj5 = { marginBottom: tmp9 };
            cResult[8] = tmp9;
            cResult[9] = obj5;
            tmp10 = obj5;
          } else {
            tmp10 = cResult[9];
          }
          if (cResult[10] === tmp4.list) {
            let tmp11;
            let tmp13;
            let tmp14;
            let tmp15;
            if (cResult[11] === tmp10) {
              tmp11 = cResult[12];
            }
            const _Symbol = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const obj6 = { right: 0.01 };
              cResult[13] = obj6;
              tmp13 = obj6;
            } else {
              tmp13 = cResult[13];
            }
            if (cResult[14] !== bottom) {
              const obj7 = { paddingHorizontal: 16, paddingBottom: bottom, paddingTop: 12 };
              cResult[14] = bottom;
              cResult[15] = obj7;
              tmp14 = obj7;
            } else {
              tmp14 = cResult[15];
            }
            const _Symbol2 = Symbol;
            if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
              class C {
                constructor(channel) {
                  return channel.channel.id;
                }
              }
              cResult[16] = C;
              tmp15 = C;
            } else {
              class C {
                constructor(channel) {
                  return channel.channel.id;
                }
              }
            }
            const sectionContainer = tmp4.sectionContainer;
            if (cResult[17] !== data.length) {
              class C {
                constructor(channel) {
                  return channel.channel.id;
                }
              }
              const obj9 = { pendingRequestNumber: data.length };
              cResult[17] = data.length;
              cResult[18] = obj8.format(tmp(tmp2[6]).t.evH4Yb, obj9);
              const formatResult = obj8.format(tmp(tmp2[6]).t.evH4Yb, obj9);
            } else {
              class C {
                constructor(channel) {
                  return channel.channel.id;
                }
              }
            }
            if (cResult[19] !== tmp16) {
              class C {
                constructor(channel) {
                  return channel.channel.id;
                }
              }
              const obj10 = { variant: "eyebrow", color: "text-default", children: tmp16 };
              cResult[19] = tmp16;
              cResult[20] = closure_7(tmp(tmp2[26]).Text, obj10);
              const tmp19 = closure_7(tmp(tmp2[26]).Text, obj10);
            } else {
              class C {
                constructor(channel) {
                  return channel.channel.id;
                }
              }
            }
            if (cResult[21] === tmp4.sectionContainer) {
              class C {
                constructor(channel) {
                  return channel.channel.id;
                }
              }
              if (cResult[24] === data) {
                class C {
                  constructor(channel) {
                    return channel.channel.id;
                  }
                }
              }
              const obj11 = { style: tmp11, scrollIndicatorInsets: tmp13, contentContainerStyle: tmp14, renderItem: tmp8, data, keyExtractor: tmp15, ListHeaderComponent: tmp20 };
              cResult[24] = data;
              cResult[25] = tmp8;
              cResult[26] = tmp20;
              cResult[27] = tmp11;
              cResult[28] = tmp14;
              cResult[29] = closure_7(tmp(tmp2[27]).FlashList, obj11);
              const tmp26 = closure_7(tmp(tmp2[27]).FlashList, obj11);
            }
            const obj12 = { style: sectionContainer, children: tmp18 };
            cResult[21] = tmp4.sectionContainer;
            cResult[22] = tmp18;
            cResult[23] = closure_7(closure_5, obj12);
            const tmp23 = closure_7(closure_5, obj12);
          }
          const items = [tmp4.list, tmp10];
          cResult[10] = tmp4.list;
          cResult[11] = tmp10;
          cResult[12] = items;
          tmp11 = items;
        }
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
        hasSingleMessageRequest: listHasSingleMessageRequest,
        isRestricted: isMessageRequestRestrictedViewer
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
    cResult[1] = goToMessageRequestPreview;
    cResult[2] = listHasSingleMessageRequest;
    cResult[3] = isMessageRequestRestrictedViewer;
    cResult[4] = data;
    cResult[5] = renderData;
    tmp8 = renderData;
  }
}) : (function MessageRequestList(goToMessageRequestPreview) {
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
  const bottom = data(1633)().bottom;
  data = data(18256)();
  let obj = goToMessageRequestPreview(18258);
  dependencyMap = obj.useListHasSingleMessageRequest();
  const obj2 = goToMessageRequestPreview(13284);
  const isRestricted = obj2.useIsMessageRequestRestrictedViewer();
  if (0 === data.length) {
    const obj3 = { bodyText: intl2.string(goToMessageRequestPreview(1128).t.SXrqTf) };
    const tmp2Result = tmp2(18261);
    intl2 = tmp4(1128).intl;
    tmp9Result = closure_7(tmp2Result, obj3);
  } else {
    const items = [tmp.list, ];
    const FlashList = tmp4(7205).FlashList;
    let num = 0;
    const tmp4Result = goToMessageRequestPreview(1384);
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
    obj6 = { paddingHorizontal: 16, paddingBottom: bottom, paddingTop: 12 };
    obj7 = { style: tmp.sectionContainer, children: closure_7(Text, obj8) };
    obj8 = { variant: "eyebrow", color: "text-default", children: intl.format(goToMessageRequestPreview(1128).t.evH4Yb, obj9) };
    Text = tmp4(5220).Text;
    intl = tmp4(1128).intl;
    obj9 = { pendingRequestNumber: data.length };
    tmp9Result = tmp9(FlashList, obj4);
  }
  return tmp9Result;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestList.tsx");

export default tmp5;
