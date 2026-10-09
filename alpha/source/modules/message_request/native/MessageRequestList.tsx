// Module ID: 17510
// Function ID: 17511
// Name: MessageRequestList
// Dependencies: [19, 17, 1085, 21, 5091, 587, 1126, 558, 576, 4768, 5008, 5102, 5941, 12116, 1265, 17511, 1200, 5006, 6191, 15120, 8563, 1631, 17516, 17518, 12115, 17521, 5087, 1382, 2]

// Module 17510 (MessageRequestList)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import transitionToChannel from "transitionToChannel" /* 5102 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
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
({ ActivityIndicator: closure_4, View: hasOwnProperty, FlatList: metroRequire } = react_native);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let c10 = "header-section";
let createStyles = createStyles_mod;
let obj = { sectionContainer: obj2, rowContainer: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 14, marginBottom: 12 }, actionContainer: { flexDirection: "row", alignItems: "flex-start", height: "100%" }, actionButton: size, acceptButton: { marginRight: 16 }, acceptButtonRestricted: { marginRight: 12 }, pressableRow: obj3, activityIndicator: { height: 16, width: 16 }, list: obj4 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "row", justifyContent: "space-between", marginTop: 6, marginBottom: 10 };
createStyles = createStyles.createStyles;
size = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "center", height: 32, width: 32 };
obj3 = { borderRadius: nativeDefault.radii.md };
obj4 = { flex: 1, paddingHorizontal: 16, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_11 = createStyles(obj);
const constants = { ACCEPT_MESSAGE_REQUEST: "accept-message-request", IGNORE_MESSAGE_REQUEST: "ignore-message-request", PREVIEW_MESSAGE_REQUEST: "preview-message-request" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function PendingMessageRequestRow(isRestricted) {
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
  const tmp5 = closure_11();
  str = messageRequest.user;
  const channel = messageRequest.channel;
  const id = channel.id;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      let intl;
      const obj = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", content: intl.string(goToMessageRequestPreview(str[6]).t["EDYbS+"]), icon: hasSingleMessageRequest(str[10]) };
      const open = hasSingleMessageRequest(str[9]).open;
      hasSingleMessageRequest(str[9]);
      intl = goToMessageRequestPreview(str[6]).intl;
      open(obj);
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
      const tmpResult = tmp(str[13]);
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
              let closure_9 = tmp12;
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
                                                              tmp62 = closure_8(tmp(tmp2[20]).FormDivider, { iconPush: true, outer: true });
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
                                                          const tmp66 = closure_9(tmp(str[18]).PressableOpacity, obj8);
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
                                                      const tmp60 = closure_9(acceptMessageRequest, obj9);
                                                      cResult[58] = tmp5.rowContainer;
                                                      cResult[59] = tmp19;
                                                      cResult[60] = tmp53;
                                                      cResult[61] = tmp60;
                                                      tmp57 = tmp60;
                                                    }
                                                  }
                                                  const obj10 = { style: actionContainer, children: items3 };
                                                  items3 = [tmp36, tmp50];
                                                  const tmp56 = closure_9(acceptMessageRequest, obj10);
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
                                          const tmp52 = closure_8(tmp(str[18]).PressableOpacity, obj11);
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
                                          const obj12 = { size: tmp(str[16]).Icon.Sizes.SMALL, disableColor: true, source: hasSingleMessageRequest(str[19]) };
                                          const Icon2 = tmp(tmp2[16]).Icon;
                                          tmp47 = closure_8(Icon2, obj12);
                                        }
                                        cResult[44] = isOptimisticRejected;
                                        cResult[45] = isRejectLoading;
                                        cResult[46] = tmp5.activityIndicator;
                                        cResult[47] = tmp47;
                                        tmp44 = tmp47;
                                      }
                                      const obj13 = { style: tmp5.activityIndicator };
                                      tmp47 = closure_8(id, obj13);
                                    }
                                  }
                                }
                              }
                              const obj14 = { accessibilityRole: "button", accessibilityLabel: tmp23, onPress: tmp11, disabled: isAcceptLoading || isRejectLoading || isUserProfileLoading || isOptimisticAccepted || isOptimisticRejected, style: tmp29, children: tmp30 };
                              const tmp38 = closure_8(tmp(str[18]).PressableOpacity, obj14);
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
                              const obj15 = { size: tmp(str[16]).Icon.Sizes.SMALL, disableColor: true, source: hasSingleMessageRequest(str[17]) };
                              const Icon = tmp(tmp2[16]).Icon;
                              tmp33 = closure_8(Icon, obj15);
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
                        tmp33 = closure_8(id, obj16);
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
                  const tmp22 = closure_8(hasSingleMessageRequest(str[15]), obj17);
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
  class C {
    constructor() {
      const tmp = hasSingleMessageRequest;
      if (tmp) {
        const obj = transitionToChannel;
        obj.transitionToChannel(id);
        const arr = ModalActionCreatorsDefault;
        arr.pop();
      }
    }
  }
  cResult[1] = id;
  cResult[2] = hasSingleMessageRequest;
  cResult[3] = C;
  tmp7 = C;
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
  let require;
  ({ messageRequest, goToMessageRequestPreview: require, hasSingleMessageRequest } = isRestricted);
  let flag = isRestricted.isRestricted;
  const isLastRow = isRestricted.isLastRow;
  if (flag === undefined) {
    flag = false;
  }
  c5 = undefined;
  c6 = undefined;
  let tmp = closure_11();
  const str = messageRequest.user;
  const channel = messageRequest.channel;
  const id = channel.id;
  const items = [id, hasSingleMessageRequest];
  const callback = channel.useCallback(() => {
    let intl;
    const obj = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", content: intl.string(require("intl").t["EDYbS+"]), icon: hasSingleMessageRequest(str[10]) };
    const open = hasSingleMessageRequest(str[9]).open;
    hasSingleMessageRequest(str[9]);
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
    _require();
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
        _require();
      }
    },
    style: tmp.pressableRow,
    children: null
  };
  const obj3 = { name: constants.ACCEPT_MESSAGE_REQUEST, label: intl.string(require("intl").t.hSLLWi) };
  const PressableOpacity = tmp4(tmp5[18]).PressableOpacity;
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
  items2[0] = closure_8(hasSingleMessageRequest(str[15]), obj7);
  const obj8 = { style: tmp.actionContainer, children: null };
  const PressableOpacity2 = tmp4(tmp5[18]).PressableOpacity;
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
        const obj10 = { size: require("native").Icon.Sizes.SMALL, disableColor: true, source: hasSingleMessageRequest(str[17]) };
        const Icon = tmp4(tmp5[16]).Icon;
        tmp10Result = tmp10(Icon, obj10);
      }
      obj9.children = tmp10Result;
      const items4 = [tmp10(PressableOpacity2, obj9), ];
      const PressableOpacity3 = tmp4(tmp5[18]).PressableOpacity;
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
          const obj13 = { size: require("native").Icon.Sizes.SMALL, disableColor: true, source: hasSingleMessageRequest(str[19]) };
          const Icon2 = tmp4(tmp5[16]).Icon;
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
          tmp10Result4 = tmp10(tmp4(tmp5[20]).FormDivider, { iconPush: true, outer: true });
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function MessageRequestList(goToMessageRequestPreview) {
  let arr;
  let intl;
  let sectionContainer;
  let obj = goToMessageRequestPreview(arr[8]);
  const cResult = obj.c(24);
  goToMessageRequestPreview = goToMessageRequestPreview.goToMessageRequestPreview;
  const tmp5 = closure_11();
  importDefault = tmp5;
  const bottom = require("useSafeAreaInsets")().bottom;
  arr = require("useSortedMessageRequests")();
  let obj2 = goToMessageRequestPreview(arr[23]);
  const listHasSingleMessageRequest = obj2.useListHasSingleMessageRequest();
  let obj3 = goToMessageRequestPreview(arr[24]);
  const isMessageRequestRestrictedViewer = obj3.useIsMessageRequestRestrictedViewer();
  const tmp6 = importDefault;
  if (0 === arr.length) {
    let first;
    const _Symbol2 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      let obj4 = { bodyText: intl.string(tmp2(tmp3[6]).t.SXrqTf) };
      const tmp6Result = tmp6(arr[25]);
      intl = tmp2(tmp3[6]).intl;
      const tmp29 = closure_8(tmp6Result, obj4);
      cResult[0] = tmp29;
      first = tmp29;
    } else {
      first = cResult[0];
    }
    return first;
  } else {
    let tmp9;
    if (cResult[1] !== arr) {
      const items = [c10];
      HermesBuiltin.arraySpread(items, arr, 1);
      cResult[1] = arr;
      cResult[2] = items;
      tmp9 = items;
    } else {
      tmp9 = cResult[2];
    }
    if (cResult[3] === goToMessageRequestPreview) {
      if (cResult[4] === listHasSingleMessageRequest) {
        if (cResult[5] === isMessageRequestRestrictedViewer) {
          if (cResult[6] === arr) {
            let tmp14;
            let tmp15;
            let tmp16;
            if (cResult[7] === tmp5.sectionContainer) {
              tmp14 = cResult[8];
            }
            if (cResult[9] !== bottom) {
              let num10 = 0;
              const tmp2Result = goToMessageRequestPreview(arr[27]);
              if (tmp2Result.isAndroid()) {
                num10 = bottom;
              }
              cResult[9] = bottom;
              cResult[10] = num10;
              tmp15 = num10;
            } else {
              tmp15 = cResult[10];
            }
            if (cResult[11] !== tmp15) {
              const obj5 = { marginBottom: tmp15 };
              cResult[11] = tmp15;
              cResult[12] = obj5;
              tmp16 = obj5;
            } else {
              tmp16 = cResult[12];
            }
            if (cResult[13] === tmp5.list) {
              let tmp17;
              let tmp19;
              let tmp20;
              if (cResult[14] === tmp16) {
                tmp17 = cResult[15];
              }
              const _Symbol = Symbol;
              if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                const obj6 = { right: 0.01 };
                cResult[16] = obj6;
                tmp19 = obj6;
              } else {
                tmp19 = cResult[16];
              }
              if (cResult[17] !== bottom) {
                const obj7 = { paddingBottom: bottom, paddingTop: 12 };
                cResult[17] = bottom;
                cResult[18] = obj7;
                tmp20 = obj7;
              } else {
                tmp20 = cResult[18];
              }
              if (cResult[19] === tmp9) {
                if (cResult[20] === tmp14) {
                  if (cResult[21] === tmp17) {
                    let tmp21;
                    if (cResult[22] === tmp20) {
                      tmp21 = cResult[23];
                    }
                    return tmp21;
                  }
                }
              }
              const obj8 = { style: tmp17, scrollIndicatorInsets: tmp19, contentContainerStyle: tmp20, renderItem: tmp14, data: tmp9 };
              const tmp24 = closure_8(closure_6, obj8);
              cResult[19] = tmp9;
              cResult[20] = tmp14;
              cResult[21] = tmp17;
              cResult[22] = tmp20;
              cResult[23] = tmp24;
              tmp21 = tmp24;
            }
            const items1 = [tmp5.list, tmp16];
            cResult[13] = tmp5.list;
            cResult[14] = tmp16;
            cResult[15] = items1;
            tmp17 = items1;
          }
        }
      }
    }
    function renderData(item) {
      let Text;
      let intl;
      let obj3;
      let obj4;
      item = item.item;
      if (typeof item === "string") {
        const obj2 = { style: sectionContainer.sectionContainer, children: closure_1_8(Text, obj3) };
        obj3 = { variant: "eyebrow", color: "text-default", children: intl.format(goToMessageRequestPreview(arr[6]).t.evH4Yb, obj4) };
        Text = goToMessageRequestPreview(arr[26]).Text;
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
          hasSingleMessageRequest: listHasSingleMessageRequest,
          isRestricted: isMessageRequestRestrictedViewer
        };
        return closure_1_8(closure_1_13, obj, item.channel.id);
      }
    }
    cResult[3] = goToMessageRequestPreview;
    cResult[4] = listHasSingleMessageRequest;
    cResult[5] = isMessageRequestRestrictedViewer;
    cResult[6] = arr;
    cResult[7] = tmp5.sectionContainer;
    cResult[8] = renderData;
    tmp14 = renderData;
  }
}) : (function MessageRequestList(goToMessageRequestPreview) {
  let intl;
  let obj6;
  let sectionContainer;
  goToMessageRequestPreview = goToMessageRequestPreview.goToMessageRequestPreview;
  let arr;
  const tmp2 = closure_11();
  importDefault = tmp2;
  const bottom = require("useSafeAreaInsets")().bottom;
  arr = require("useSortedMessageRequests")();
  let obj = goToMessageRequestPreview(arr[23]);
  const hasSingleMessageRequest = obj.useListHasSingleMessageRequest();
  let obj2 = goToMessageRequestPreview(arr[24]);
  const isRestricted = obj2.useIsMessageRequestRestrictedViewer();
  const tmp3 = importDefault;
  if (0 === arr.length) {
    let obj3 = { bodyText: intl.string(tmp5(tmp4[6]).t.SXrqTf) };
    const tmp3Result = tmp3(arr[25]);
    intl = tmp5(tmp4[6]).intl;
    return closure_8(tmp3Result, obj3);
  } else {
    const items = [c10];
    HermesBuiltin.arraySpread(items, arr, 1);
    const items1 = [tmp2.list, ];
    let num = 0;
    const tmp12 = closure_8;
    const tmp13 = closure_6;
    const tmp5Result = goToMessageRequestPreview(arr[27]);
    if (tmp5Result.isAndroid()) {
      num = bottom;
    }
    let obj4 = {
      style: items1,
      scrollIndicatorInsets: { right: 0.01 },
      contentContainerStyle: obj6,
      renderItem: function renderData(item) {
          let Text;
          let intl;
          let obj3;
          let obj4;
          item = item.item;
          if (typeof item === "string") {
            const obj2 = { style: sectionContainer.sectionContainer, children: closure_1_8(Text, obj3) };
            obj3 = { variant: "eyebrow", color: "text-default", children: intl.format(goToMessageRequestPreview(arr[6]).t.evH4Yb, obj4) };
            Text = goToMessageRequestPreview(arr[26]).Text;
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
            return closure_1_8(closure_1_13, obj, item.channel.id);
          }
        },
      data: items
    };
    const obj5 = { marginBottom: num };
    items1[1] = obj5;
    obj6 = { paddingBottom: bottom, paddingTop: 12 };
    return tmp12(tmp13, obj4);
  }
});
size = size_mod;
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestList.tsx");

export default tmp5;
