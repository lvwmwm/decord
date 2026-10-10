// Module ID: 16074
// Function ID: 16075
// Name: TakeActionScreen
// Dependencies: [5, 32, 19, 17, 4760, 1390, 10381, 21, 5092, 587, 558, 576, 504, 10422, 10425, 1503, 7017, 7025, 10394, 7721, 4809, 1126, 4808, 5379, 10433, 9575, 8178, 7706, 4806, 5088, 2]

// Module 16074 (TakeActionScreen)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 19 */;
import nativeDefault from "native" /* 587 */;
import LinkingDefault from "Linking" /* 4806 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 7017 */;
import SafetyToastsActionCreatorsDefault from "SafetyToastsActionCreators" /* 7025 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 10394 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import RelationshipStore from "RelationshipStore" /* 4760 */;
import UserStore from "UserStore" /* 1390 */;
import Constants from "Constants" /* 10381 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const react_mod = react2;
let _require, c1, navigation;

let c10;
let closure_12;
let closure_14;
let closure_15;
let map1;
let obj2;
let obj3;
let unpackModuleId;
let react = react_mod;
let useState = react2.useState;
const View = react_native.View;
({ MODAL_LOCATION_CONTEXT_MOBILE: c10, NOFILTR_URL: unpackModuleId, THROUGHLINE_URL: closure_12, REPORTED_USER_CONFIRMATION_TOAST_KEY: map1 } = Constants);
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, helplineGroup: obj3, textCenter: { textAlign: "center" } };
obj2 = { display: "flex", alignItems: "center", alignSelf: "stretch", gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", alignSelf: "stretch", gap: nativeDefault.space.PX_4 };
let closure_16 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function TakeActionButtons(senderId) {
  let first;
  let isReported;
  let items2;
  let setReported;
  let tmp13;
  let tmp7;
  let tmp8;
  const tmp = senderId;
  const tmp2 = setReported;
  let obj = senderId(setReported[11]);
  const cResult = obj.c(44);
  senderId = senderId.senderId;
  const channelId = senderId.channelId;
  ({ isReported, setReported } = senderId);
  const trackAnalyticsEvent = senderId.trackAnalyticsEvent;
  const tmp4 = closure_16();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RelationshipStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== senderId) {
    const fn = function h() {
      return RelationshipStore.isBlocked(senderId);
    };
    const items1 = [senderId];
    cResult[1] = senderId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(tmp2[12]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  const tmpResult5 = tmp(tmp2[13]);
  const lastChannelMessage = tmpResult5.useLastChannelMessage(channelId);
  const tmpResult6 = tmp(tmp2[14]);
  const shouldShowHelplineLink = tmpResult6.useShouldShowHelplineLink();
  [tmp13, react] = lastChannelMessage(navigation(false), 2);
  const tmp12 = lastChannelMessage(navigation(false), 2);
  const tmpResult7 = tmp(tmp2[15]);
  navigation = tmpResult7.useNavigation();
  const tmpResult8 = tmp(tmp2[14]);
  const shouldShowThroughlineLink = tmpResult8.useShouldShowThroughlineLink();
  if (cResult[4] === channelId) {
    if (cResult[5] === senderId) {
      let tmp16;
      if (cResult[6] === trackAnalyticsEvent) {
        tmp16 = cResult[7];
      }
      if (cResult[8] === channelId) {
        if (cResult[9] === senderId) {
          let tmp17;
          if (cResult[10] === trackAnalyticsEvent) {
            tmp17 = cResult[11];
          }
          if (cResult[12] === channelId) {
            if (cResult[13] === lastChannelMessage) {
              if (cResult[14] === senderId) {
                if (cResult[15] === setReported) {
                  let tmp18;
                  if (cResult[16] === trackAnalyticsEvent) {
                    tmp18 = cResult[17];
                  }
                  let closure_7 = tmp18;
                  class H {
                    constructor() {
                      const obj = RelationshipActionCreatorsDefault;
                      const obj2 = { location: _location };
                      obj.unblockUser(senderId, obj2, channelId);
                      const obj3 = SafetyToastsActionCreatorsDefault;
                      const result = obj3.showUnblockSuccessToast(senderId, channelId);
                      trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_UNBLOCK);
                    }
                  }
                  if (stateFromStores) {
                    tmp16 = tmp17;
                  }
                  if (cResult[20] === tmp19) {
                    let tmp20;
                    let tmp24;
                    if (cResult[21] === tmp16) {
                      tmp20 = cResult[22];
                    }
                    if (cResult[23] !== isReported) {
                      let stringResult;
                      let intl = tmp(tmp2[21]).intl;
                      const string = intl.string;
                      class H {
                        constructor() {
                          const obj = RelationshipActionCreatorsDefault;
                          const obj2 = { location: _location };
                          obj.unblockUser(senderId, obj2, channelId);
                          const obj3 = SafetyToastsActionCreatorsDefault;
                          const result = obj3.showUnblockSuccessToast(senderId, channelId);
                          trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_UNBLOCK);
                        }
                      }
                      if (isReported) {
                        stringResult = string(tmp25.QvwOJ6);
                      } else {
                        stringResult = string(tmp25["7fHyE6"]);
                      }
                      cResult[23] = isReported;
                      cResult[24] = stringResult;
                      tmp24 = stringResult;
                    } else {
                      tmp24 = cResult[24];
                    }
                    class H {
                      constructor() {
                        const obj = RelationshipActionCreatorsDefault;
                        const obj2 = { location: _location };
                        obj.unblockUser(senderId, obj2, channelId);
                        const obj3 = SafetyToastsActionCreatorsDefault;
                        const result = obj3.showUnblockSuccessToast(senderId, channelId);
                        trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_UNBLOCK);
                      }
                    }
                    if (cResult[27] === tmp13) {
                      if (cResult[28] === isReported) {
                        if (cResult[29] === tmp24) {
                          let tmp28;
                          if (cResult[30] === tmp27) {
                            tmp28 = cResult[31];
                          }
                          if (cResult[32] === navigation) {
                            if (cResult[33] === shouldShowHelplineLink) {
                              if (cResult[34] === shouldShowThroughlineLink) {
                                if (cResult[35] === tmp4.helplineGroup) {
                                  if (cResult[36] === tmp4.textCenter) {
                                    let tmp32;
                                    if (cResult[37] === trackAnalyticsEvent) {
                                      tmp32 = cResult[38];
                                    }
                                    if (cResult[39] === tmp4.container) {
                                      if (cResult[40] === tmp28) {
                                        if (cResult[41] === tmp32) {
                                          let tmp34;
                                          if (cResult[42] === tmp20) {
                                            tmp34 = cResult[43];
                                          }
                                          return tmp34;
                                        }
                                      }
                                    }
                                    class H {
                                      constructor() {
                                        const obj = RelationshipActionCreatorsDefault;
                                        const obj2 = { location: _location };
                                        obj.unblockUser(senderId, obj2, channelId);
                                        const obj3 = SafetyToastsActionCreatorsDefault;
                                        const result = obj3.showUnblockSuccessToast(senderId, channelId);
                                        trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_UNBLOCK);
                                      }
                                    }
                                    let obj2 = { style: tmp4.container, children: items2 };
                                    items2 = [tmp20, tmp28, tmp32];
                                    const tmp36 = closure_15(closure_7, obj2);
                                    cResult[39] = tmp4.container;
                                    cResult[40] = tmp28;
                                    cResult[41] = tmp32;
                                    cResult[42] = tmp20;
                                    cResult[43] = tmp36;
                                    tmp34 = tmp36;
                                  }
                                }
                              }
                            }
                          }
                          class H {
                            constructor() {
                              const obj = RelationshipActionCreatorsDefault;
                              const obj2 = { location: _location };
                              obj.unblockUser(senderId, obj2, channelId);
                              const obj3 = SafetyToastsActionCreatorsDefault;
                              const result = obj3.showUnblockSuccessToast(senderId, channelId);
                              trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_UNBLOCK);
                            }
                          }
                          cResult[32] = navigation;
                          cResult[33] = shouldShowHelplineLink;
                          cResult[34] = shouldShowThroughlineLink;
                          cResult[35] = tmp4.helplineGroup;
                          cResult[36] = tmp4.textCenter;
                          cResult[37] = trackAnalyticsEvent;
                          cResult[38] = tmp33;
                          tmp32 = tmp33;
                        }
                      }
                    }
                    let obj3 = { variant: "secondary", size: "lg", icon: channelId(tmp2[25]), loading: tmp13, disabled: isReported, text: tmp24, grow: true, onPress: tmp27 };
                    const Button2 = tmp(tmp2[23]).Button;
                    const tmp31 = closure_14(Button2, obj3);
                    cResult[27] = tmp13;
                    cResult[28] = isReported;
                    cResult[29] = tmp24;
                    cResult[30] = tmp27;
                    cResult[31] = tmp31;
                    tmp28 = tmp31;
                  }
                  const tmp21 = closure_14;
                  let obj4 = { variant: "primary", size: "lg", icon: channelId(tmp2[24]), text: tmp19, grow: true, onPress: tmp16 };
                  const Button = tmp(tmp2[23]).Button;
                  const tmp23 = closure_14(Button, obj4);
                  cResult[20] = tmp19;
                  cResult[21] = tmp16;
                  cResult[22] = tmp23;
                  tmp20 = tmp23;
                }
              }
            }
          }
          class H {
            constructor() {
              const obj = RelationshipActionCreatorsDefault;
              const obj2 = { location: _location };
              obj.unblockUser(senderId, obj2, channelId);
              const obj3 = SafetyToastsActionCreatorsDefault;
              const result = obj3.showUnblockSuccessToast(senderId, channelId);
              trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_UNBLOCK);
            }
          }
          _require = trackAnalyticsEvent(function*(arg0, value) {
            let obj3;
            if (c2 === 2) {
              c2 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp2 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: "+51" };
              }
            } else {
              try {
                c2 = 2;
                if (0 === c1) {
                  if (arg0 === 1) {
                    c2 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c2 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else if (null != user.getUser(tmp3)) {
                    closure_1_5(true);
                    c1 = 1;
                    c2 = 1;
                    const obj5 = {
                      value: obj3.submitReportForInappropriateConversationSafetyAlert(lastChannelMessage, () => {
                                let intl;
                                closure_1_2(true);
                                const obj = { text: intl.string(closure_0(c2[21]).t.gn2c6X), variant: "success" };
                                const open = c1(c2[20]).open;
                                c1(c2[20]);
                                intl = closure_0(c2[21]).intl;
                                open(closure_2_13, obj);
                              }, () => {
                                const presentFailedToast = closure_1_0(closure_1_2[22]).presentFailedToast;
                                closure_1_0(closure_1_2[22]);
                                const intl = closure_1_0(closure_1_2[21]).intl;
                                presentFailedToast(intl.string(closure_1_0(closure_1_2[21]).t["0YV04/"]));
                              }),
                      done: false
                    };
                    obj3 = tmp3(setReported[19]);
                    return obj5;
                  }
                } else if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  const obj6 = { value, done: true };
                  return obj6;
                } else {
                  closure_1_5(false);
                  let obj = channelId(setReported[17]);
                  const result = obj.showReportSuccessToast(tmp3, c1);
                  trackAnalyticsEvent(tmp3(setReported[18]).CtaEventTypes.USER_TAKEOVER_MODAL_REPORT);
                }
                c2 = 3;
                return { value: "IconComponent", done: "+51" };
              } catch (tmp21) {
                c2 = 3;
                throw tmp21;
              }
            }
          });
          function t6() {
            return closure_0(...arguments);
          }
          cResult[12] = channelId;
          cResult[13] = lastChannelMessage;
          cResult[14] = senderId;
          cResult[15] = setReported;
          cResult[16] = trackAnalyticsEvent;
          cResult[17] = t6;
          tmp18 = t6;
        }
      }
      class H {
        constructor() {
          const obj = RelationshipActionCreatorsDefault;
          const obj2 = { location: _location };
          obj.unblockUser(senderId, obj2, channelId);
          const obj3 = SafetyToastsActionCreatorsDefault;
          const result = obj3.showUnblockSuccessToast(senderId, channelId);
          trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_UNBLOCK);
        }
      }
      cResult[8] = channelId;
      cResult[9] = senderId;
      cResult[10] = trackAnalyticsEvent;
      cResult[11] = H;
      tmp17 = H;
    }
  }
  const fn2 = function w() {
    let obj = RelationshipActionCreatorsDefault;
    const obj2 = { location: _location };
    const blockUserResult = obj.blockUser(senderId, obj2, channelId);
    blockUserResult.then(() => {
      const obj = channelId(setReported[17]);
      const result = obj.showBlockSuccessToast(senderId, closure_1_1);
    });
    trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_BLOCK);
  };
  cResult[4] = channelId;
  cResult[5] = senderId;
  cResult[6] = trackAnalyticsEvent;
  cResult[7] = fn2;
  tmp16 = fn2;
}) : (function TakeActionButtons(senderId) {
  let _undefined;
  let c5;
  let closure_6;
  let intl4;
  let intl5;
  let intl6;
  let isReported;
  let items5;
  let setReported;
  let string2Result;
  let stringResult;
  let tmp12Result;
  let tmp8;
  senderId = senderId.senderId;
  let channelId = senderId.channelId;
  ({ isReported, setReported } = senderId);
  const trackAnalyticsEvent = senderId.trackAnalyticsEvent;
  react = undefined;
  useState = undefined;
  const tmp = closure_16();
  const tmp2 = senderId;
  const tmp3 = setReported;
  let obj = senderId(setReported[12]);
  const items = [RelationshipStore];
  const items1 = [senderId];
  const stateFromStores = obj.useStateFromStores(items, () => RelationshipStore.isBlocked(senderId), items1);
  let obj2 = senderId(setReported[13]);
  const lastChannelMessage = obj2.useLastChannelMessage(channelId);
  let obj3 = senderId(setReported[14]);
  const shouldShowHelplineLink = obj3.useShouldShowHelplineLink();
  [tmp8, c5] = lastChannelMessage(useState(false), 2);
  const tmp7 = lastChannelMessage(useState(false), 2);
  let obj4 = senderId(setReported[15]);
  useState = obj4.useNavigation();
  let obj5 = senderId(setReported[14]);
  const items2 = [senderId, channelId, trackAnalyticsEvent];
  const shouldShowThroughlineLink = obj5.useShouldShowThroughlineLink();
  let callback = react.useCallback(() => {
    let obj = RelationshipActionCreatorsDefault;
    const obj2 = { location: _location };
    const blockUserResult = obj.blockUser(senderId, obj2, channelId);
    blockUserResult.then(() => {
      const obj = channelId(setReported[17]);
      const result = obj.showBlockSuccessToast(senderId, closure_1_1);
    });
    trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_BLOCK);
  }, items2);
  const items3 = [senderId, channelId, trackAnalyticsEvent];
  const callback1 = react.useCallback(() => {
    const obj = RelationshipActionCreatorsDefault;
    const obj2 = { location: _location };
    obj.unblockUser(senderId, obj2, channelId);
    const obj3 = SafetyToastsActionCreatorsDefault;
    const result = obj3.showUnblockSuccessToast(senderId, channelId);
    trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_UNBLOCK);
  }, items3);
  const items4 = [senderId, channelId, setReported, lastChannelMessage, trackAnalyticsEvent];
  let closure_7 = react.useCallback(trackAnalyticsEvent(function*(arg0, value) {
    let c2;
    let closure_0;
    let v1;
    if (setReported === 2) {
      setReported = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      try {
        setReported = 2;
        if (0 === channelId) {
          if (arg0 === 1) {
            setReported = 3;
            throw value;
          } else if (arg0 === 2) {
            setReported = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else if (null != user.getUser(senderId)) {
            _undefined(true);
            channelId = 1;
            const obj3 = tmp3(setReported[19]);
            setReported = 1;
            const obj5 = {
              value: obj3.submitReportForInappropriateConversationSafetyAlert(lastChannelMessage, () => {
                        let intl;
                        closure_1_2(true);
                        const obj = { text: intl.string(senderId(c2[21]).t.gn2c6X), variant: "success" };
                        const open = c1(c2[20]).open;
                        c1(c2[20]);
                        intl = senderId(c2[21]).intl;
                        open(closure_2_13, obj);
                      }, () => {
                        const presentFailedToast = closure_1_0(closure_1_2[22]).presentFailedToast;
                        closure_1_0(closure_1_2[22]);
                        const intl = closure_1_0(closure_1_2[21]).intl;
                        presentFailedToast(intl.string(closure_1_0(closure_1_2[21]).t["0YV04/"]));
                      }),
              done: false
            };
            return obj5;
          }
        } else if (arg0 === 1) {
          setReported = 3;
          throw value;
        } else if (arg0 === 2) {
          setReported = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_128_5(false);
          let obj = channelId(setReported[17]);
          const result = obj.showReportSuccessToast(closure_128_0, closure_128_1);
          closure_128_3(tmp3(setReported[18]).CtaEventTypes.USER_TAKEOVER_MODAL_REPORT);
        }
        setReported = 3;
        return { value: "IconComponent", done: "+51" };
      } catch (tmp21) {
        setReported = 3;
        throw tmp21;
      }
    }
  }), items4);
  let obj6 = { style: tmp.container, children: items5 };
  const obj7 = { variant: "primary", size: "lg", icon: channelId(setReported[24]), text: stringResult, grow: true, onPress: callback };
  const Button = senderId(setReported[23]).Button;
  let intl = senderId(setReported[21]).intl;
  const string = intl.string;
  const t = senderId(setReported[21]).t;
  if (stateFromStores) {
    stringResult = string(t.Hro40y);
  } else {
    stringResult = string(t.VTIBaD);
  }
  if (stateFromStores) {
    callback = callback1;
  }
  items5 = [tmp14(Button, obj7), , ];
  const obj8 = {
    variant: "secondary",
    size: "lg",
    icon: channelId(tmp3[25]),
    loading: tmp8,
    disabled: isReported,
    text: string2Result,
    grow: true,
    onPress() {
      closure_7();
    }
  };
  const Button2 = tmp2(tmp3[23]).Button;
  const intl2 = tmp2(tmp3[21]).intl;
  const string2 = intl2.string;
  const t2 = tmp2(tmp3[21]).t;
  if (isReported) {
    string2Result = string2(t2.QvwOJ6);
  } else {
    string2Result = string2(t2["7fHyE6"]);
  }
  items5[1] = closure_14(Button2, obj8);
  if (shouldShowHelplineLink) {
    const obj9 = {
      variant: "secondary",
      size: "lg",
      icon: channelId(tmp3[26]),
      text: intl6.string(tmp2(tmp3[21]).t.sZf6cz),
      grow: true,
      onPress() {
          closure_6.push("CRISIS_TEXT_LINE");
          trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_CTL);
        }
    };
    const Button4 = tmp2(tmp3[23]).Button;
    intl6 = tmp2(tmp3[21]).intl;
    tmp12Result = tmp14(Button4, obj9);
  } else {
    let tmp18;
    const obj10 = { style: tmp.helplineGroup, children: null };
    const Button3 = tmp2(tmp3[23]).Button;
    const obj11 = { variant: "secondary", size: "lg", icon: channelId(tmp3[27]), text: null, grow: true, onPress: null };
    const intl3 = tmp2(tmp3[21]).intl;
    const string3 = intl3.string;
    const t3 = tmp2(tmp3[21]).t;
    if (shouldShowThroughlineLink) {
      obj11.text = string3(t3.HQ2nKl);
      obj11.onPress = function onPress() {
        const obj = LinkingDefault;
        obj.openURL(authStore2);
        trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_THROUGHLINE);
      };
      const items6 = [tmp14(Button3, obj11), ];
      const obj12 = { variant: "text-xs/medium", color: "text-default", style: tmp.textCenter, children: intl5.string(tmp2(tmp3[21]).t["PMeb/r"]) };
      const Text2 = tmp2(tmp3[29]).Text;
      intl5 = tmp2(tmp3[21]).intl;
      items6[1] = closure_14(Text2, obj12);
      obj10.children = items6;
      tmp18 = obj10;
    } else {
      obj11.text = string3(t3["65XQar"]);
      obj11.onPress = function onPress() {
        const obj = LinkingDefault;
        obj.openURL(unpackModuleId);
        trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_NO_FILTR);
      };
      const items7 = [tmp14(Button3, obj11), ];
      const obj13 = { variant: "text-xs/medium", color: "text-default", style: tmp.textCenter, children: intl4.string(tmp2(tmp3[21]).t.XNwhxC) };
      const Text = tmp2(tmp3[29]).Text;
      intl4 = tmp2(tmp3[21]).intl;
      items7[1] = closure_14(Text, obj13);
      obj10.children = items7;
      tmp18 = obj10;
    }
    tmp12Result = tmp12(tmp13, tmp18);
  }
  items5[2] = tmp12Result;
  return closure_15(closure_7, obj6);
});
let result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/components/TakeActionScreen.tsx");

export default tmp5;
