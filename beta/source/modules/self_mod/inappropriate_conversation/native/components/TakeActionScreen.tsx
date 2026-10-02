// Module ID: 15312
// Function ID: 15313
// Name: TakeActionScreen
// Dependencies: [5, 32, 19, 17, 4482, 1378, 9557, 21, 4837, 588, 558, 576, 504, 9597, 9600, 1491, 9207, 7856, 9571, 8086, 4531, 1127, 4793, 4530, 5282, 9610, 8122, 5356, 8042, 4528, 4833, 2]

// Module 15312 (TakeActionScreen)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 19 */;
import nativeDefault from "native" /* 588 */;
import LinkingDefault from "Linking" /* 4528 */;
import SafetyToastsActionCreatorsDefault from "SafetyToastsActionCreators" /* 7856 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9207 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 9571 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import RelationshipStore_mod from "RelationshipStore" /* 4482 */;
import UserStore from "UserStore" /* 1378 */;
import Constants from "Constants" /* 9557 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const react = react2;
let c1, navigation, senderId;

let c10;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let map1;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
let useState = react2.useState;
const View = react_native.View;
let RelationshipStore = RelationshipStore_mod;
({ MODAL_LOCATION_CONTEXT_MOBILE: c10, NOFILTR_URL: unpackModuleId, THROUGHLINE_URL: closure_12, REPORTED_USER_CONFIRMATION_TOAST_KEY: map1, TOAST_CHECKMARK_ICON_COLOR: closure_14 } = Constants);
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, toastContainer: obj3, helplineGroup: obj4, textCenter: { textAlign: "center" } };
obj2 = { display: "flex", alignItems: "center", alignSelf: "stretch", gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_12 };
obj4 = { display: "flex", alignSelf: "stretch", gap: nativeDefault.space.PX_4 };
let closure_17 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((senderId) => {
  let closure_4;
  let closure_8;
  let first;
  let isReported;
  let setReported;
  let tmp13;
  let tmp7;
  let tmp8;
  const tmp = senderId;
  const tmp2 = setReported;
  let obj = senderId(setReported[11]);
  const cResult = obj.c(45);
  senderId = senderId.senderId;
  const channelId = senderId.channelId;
  ({ isReported, setReported } = senderId);
  const trackAnalyticsEvent = senderId.trackAnalyticsEvent;
  const tmp4 = closure_17();
  _slicedToArray = tmp4;
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
  const tmp12 = _slicedToArray(useState(false), 2);
  [tmp13, useState] = tmp12;
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
                  if (cResult[16] === tmp4.toastContainer) {
                    let tmp18;
                    let tmp20;
                    if (cResult[17] === trackAnalyticsEvent) {
                      tmp18 = cResult[18];
                    }
                    RelationshipStore = tmp18;
                    if (cResult[19] !== stateFromStores) {
                      let stringResult;
                      let intl = tmp(tmp2[21]).intl;
                      const string = intl.string;
                      const t = tmp(tmp2[21]).t;
                      if (stateFromStores) {
                        stringResult = string(t.Hro40y);
                      } else {
                        stringResult = string(t.VTIBaD);
                      }
                      cResult[19] = stateFromStores;
                      cResult[20] = stringResult;
                      tmp20 = stringResult;
                    } else {
                      tmp20 = cResult[20];
                    }
                    if (stateFromStores) {
                      tmp16 = tmp17;
                    }
                    if (cResult[21] === tmp20) {
                      let tmp26;
                      if (cResult[24] !== isReported) {
                        let string2Result;
                        const intl2 = tmp(tmp2[21]).intl;
                        const string2 = intl2.string;
                        const t2 = tmp(tmp2[21]).t;
                        if (isReported) {
                          string2Result = string2(t2.QvwOJ6);
                        } else {
                          string2Result = string2(t2["7fHyE6"]);
                        }
                        cResult[24] = isReported;
                        cResult[25] = string2Result;
                        tmp26 = string2Result;
                      } else {
                        tmp26 = cResult[25];
                      }
                      if (cResult[26] !== tmp18) {
                        class Z {
                          constructor() {
                            closure_8();
                          }
                        }
                        cResult[26] = tmp18;
                        cResult[27] = Z;
                      } else {
                        class Z {
                          constructor() {
                            closure_8();
                          }
                        }
                      }
                      if (cResult[28] === tmp13) {
                        class Z {
                          constructor() {
                            closure_8();
                          }
                        }
                      }
                      let obj2 = { variant: "secondary", size: "lg", icon: channelId(tmp2[26]), loading: tmp13, disabled: isReported, text: tmp26, grow: true, onPress: tmp28 };
                      const Button2 = tmp(tmp2[24]).Button;
                      cResult[28] = tmp13;
                      cResult[29] = isReported;
                      cResult[30] = tmp26;
                      cResult[31] = tmp28;
                      cResult[32] = closure_15(Button2, obj2);
                      const tmp32 = closure_15(Button2, obj2);
                    }
                    let obj3 = { variant: "primary", size: "lg", icon: channelId(tmp2[25]), text: tmp20, grow: true, onPress: tmp16 };
                    const Button = tmp(tmp2[24]).Button;
                    const tmp25 = closure_15(Button, obj3);
                    cResult[21] = tmp20;
                    cResult[22] = tmp16;
                    cResult[23] = tmp25;
                  }
                }
              }
            }
          }
          let closure_0 = trackAnalyticsEvent(function*(arg0, value) {
            let iconColor;
            let key;
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
                return { value: "IconComponent", done: null };
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
                    closure_1_6(true);
                    c1 = 1;
                    c2 = 1;
                    const obj5 = {
                      value: obj3.submitReportForInappropriateConversationSafetyAlert(lastChannelMessage, () => {
                                let intl;
                                closure_1_2(true);
                                const obj = { key, content: intl.string(closure_0(c2[21]).t.gn2c6X), IconComponent: closure_0(c2[22]).CircleCheckIcon, iconColor, containerStyle: toastContainer.toastContainer };
                                const open = c1(c2[20]).open;
                                c1(c2[20]);
                                intl = closure_0(c2[21]).intl;
                                open(obj);
                              }, () => {
                                const presentFailedToast = closure_1_0(closure_1_2[23]).presentFailedToast;
                                closure_1_0(closure_1_2[23]);
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
                  closure_1_6(false);
                  let obj = channelId(setReported[17]);
                  const result = obj.showReportSuccessToast(tmp3, c1);
                  trackAnalyticsEvent(tmp3(setReported[18]).CtaEventTypes.USER_TAKEOVER_MODAL_REPORT);
                }
                c2 = 3;
                return { value: "IconComponent", done: null };
              } catch (tmp21) {
                c2 = 3;
                throw tmp21;
              }
            }
          });
          const fn4 = function() {
            return closure_0(...arguments);
          };
          cResult[12] = channelId;
          cResult[13] = lastChannelMessage;
          cResult[14] = senderId;
          cResult[15] = setReported;
          cResult[16] = tmp4.toastContainer;
          cResult[17] = trackAnalyticsEvent;
          cResult[18] = fn4;
          tmp18 = fn4;
        }
      }
      const fn3 = function z() {
        const obj = RelationshipActionCreatorsDefault;
        const obj2 = { location: _location };
        obj.unblockUser(senderId, obj2);
        const obj3 = SafetyToastsActionCreatorsDefault;
        const result = obj3.showUnblockSuccessToast(senderId, channelId);
        trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_UNBLOCK);
      };
      cResult[8] = channelId;
      cResult[9] = senderId;
      cResult[10] = trackAnalyticsEvent;
      cResult[11] = fn3;
      tmp17 = fn3;
    }
  }
  const fn2 = function k() {
    let obj = RelationshipActionCreatorsDefault;
    const obj2 = { location: _location };
    const blockUserResult = obj.blockUser(senderId, obj2);
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
}) : ((senderId) => {
  let _undefined;
  let c6;
  let closure_4;
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
  useState = undefined;
  let closure_8;
  const tmp = closure_17();
  _slicedToArray = tmp;
  const tmp2 = senderId;
  const tmp3 = setReported;
  let obj = senderId(setReported[12]);
  const items = [closure_8];
  const items1 = [senderId];
  const stateFromStores = obj.useStateFromStores(items, () => RelationshipStore.isBlocked(senderId), items1);
  let obj2 = senderId(setReported[13]);
  const lastChannelMessage = obj2.useLastChannelMessage(channelId);
  let obj3 = senderId(setReported[14]);
  const shouldShowHelplineLink = obj3.useShouldShowHelplineLink();
  [tmp8, c6] = _slicedToArray(useState(false), 2);
  const tmp7 = _slicedToArray(useState(false), 2);
  let obj4 = senderId(setReported[15]);
  let closure_7 = obj4.useNavigation();
  let obj5 = senderId(setReported[14]);
  const items2 = [senderId, channelId, trackAnalyticsEvent];
  const shouldShowThroughlineLink = obj5.useShouldShowThroughlineLink();
  let callback = lastChannelMessage.useCallback(() => {
    let obj = RelationshipActionCreatorsDefault;
    const obj2 = { location: _location };
    const blockUserResult = obj.blockUser(senderId, obj2);
    blockUserResult.then(() => {
      const obj = channelId(setReported[17]);
      const result = obj.showBlockSuccessToast(senderId, closure_1_1);
    });
    trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_BLOCK);
  }, items2);
  const items3 = [senderId, channelId, trackAnalyticsEvent];
  const callback1 = lastChannelMessage.useCallback(() => {
    const obj = RelationshipActionCreatorsDefault;
    const obj2 = { location: _location };
    obj.unblockUser(senderId, obj2);
    const obj3 = SafetyToastsActionCreatorsDefault;
    const result = obj3.showUnblockSuccessToast(senderId, channelId);
    trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_UNBLOCK);
  }, items3);
  const items4 = [senderId, channelId, tmp.toastContainer, setReported, lastChannelMessage, trackAnalyticsEvent];
  closure_8 = lastChannelMessage.useCallback(trackAnalyticsEvent(function*(arg0, value) {
    let c2;
    let closure_0;
    let iconColor;
    let key;
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
        return { value: "IconComponent", done: null };
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
                        const obj = { key, content: intl.string(senderId(c2[21]).t.gn2c6X), IconComponent: senderId(c2[22]).CircleCheckIcon, iconColor, containerStyle: toastContainer.toastContainer };
                        const open = c1(c2[20]).open;
                        c1(c2[20]);
                        intl = senderId(c2[21]).intl;
                        open(obj);
                      }, () => {
                        const presentFailedToast = closure_1_0(closure_1_2[23]).presentFailedToast;
                        closure_1_0(closure_1_2[23]);
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
          closure_128_6(false);
          let obj = channelId(setReported[17]);
          const result = obj.showReportSuccessToast(closure_128_0, closure_128_1);
          closure_128_3(tmp3(setReported[18]).CtaEventTypes.USER_TAKEOVER_MODAL_REPORT);
        }
        setReported = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp21) {
        setReported = 3;
        throw tmp21;
      }
    }
  }), items4);
  let obj6 = { style: tmp.container, children: items5 };
  const obj7 = { variant: "primary", size: "lg", icon: channelId(setReported[25]), text: stringResult, grow: true, onPress: callback };
  const Button = senderId(setReported[24]).Button;
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
    icon: channelId(tmp3[26]),
    loading: tmp8,
    disabled: isReported,
    text: string2Result,
    grow: true,
    onPress() {
      closure_8();
    }
  };
  const Button2 = tmp2(tmp3[24]).Button;
  const intl2 = tmp2(tmp3[21]).intl;
  const string2 = intl2.string;
  const t2 = tmp2(tmp3[21]).t;
  if (isReported) {
    string2Result = string2(t2.QvwOJ6);
  } else {
    string2Result = string2(t2["7fHyE6"]);
  }
  items5[1] = closure_15(Button2, obj8);
  if (shouldShowHelplineLink) {
    const obj9 = {
      variant: "secondary",
      size: "lg",
      icon: channelId(tmp3[27]),
      text: intl6.string(tmp2(tmp3[21]).t.sZf6cz),
      grow: true,
      onPress() {
          closure_7.push("CRISIS_TEXT_LINE");
          trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_CTL);
        }
    };
    const Button4 = tmp2(tmp3[24]).Button;
    intl6 = tmp2(tmp3[21]).intl;
    tmp12Result = tmp14(Button4, obj9);
  } else {
    let tmp18;
    const obj10 = { style: tmp.helplineGroup, children: null };
    const Button3 = tmp2(tmp3[24]).Button;
    const obj11 = { variant: "secondary", size: "lg", icon: channelId(tmp3[28]), text: null, grow: true, onPress: null };
    const intl3 = tmp2(tmp3[21]).intl;
    const string3 = intl3.string;
    const t3 = tmp2(tmp3[21]).t;
    if (shouldShowThroughlineLink) {
      obj11.text = string3(t3.HQ2nKl);
      obj11.onPress = function onPress() {
        const obj = LinkingDefault;
        obj.openURL(closure_12);
        trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_THROUGHLINE);
      };
      const items6 = [tmp14(Button3, obj11), ];
      const obj12 = { variant: "text-xs/medium", color: "text-default", style: tmp.textCenter, children: intl5.string(tmp2(tmp3[21]).t["PMeb/r"]) };
      const Text2 = tmp2(tmp3[30]).Text;
      intl5 = tmp2(tmp3[21]).intl;
      items6[1] = closure_15(Text2, obj12);
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
      const Text = tmp2(tmp3[30]).Text;
      intl4 = tmp2(tmp3[21]).intl;
      items7[1] = closure_15(Text, obj13);
      obj10.children = items7;
      tmp18 = obj10;
    }
    tmp12Result = tmp12(tmp13, tmp18);
  }
  items5[2] = tmp12Result;
  return closure_16(closure_7, obj6);
});
let result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/components/TakeActionScreen.tsx");

export default tmp5;
