// Module ID: 16036
// Function ID: 16037
// Name: TakeActionScreen
// Dependencies: [5, 32, 19, 17, 4441, 1376, 10394, 21, 4790, 580, 558, 568, 504, 10432, 10435, 1488, 10048, 8712, 10408, 8937, 4490, 1119, 4749, 4489, 5220, 10445, 8973, 5293, 8893, 4487, 4786, 2]

// Module 16036 (TakeActionScreen)
import nativeDefault from "native" /* 580 */;
import LinkingDefault from "Linking" /* 4487 */;
import SafetyToastsActionCreatorsDefault from "SafetyToastsActionCreators" /* 8712 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 10048 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 10408 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4441 */;
import UserStore from "UserStore" /* 1376 */;

const require = globalThis.__r;

require = fn;
let useState = fn(19).useState;
const View = fn(17).View;
const Constants = fn(10394);
({ MODAL_LOCATION_CONTEXT_MOBILE: c10, NOFILTR_URL: closure_11, THROUGHLINE_URL: closure_12, REPORTED_USER_CONFIRMATION_TOAST_KEY: map1, TOAST_CHECKMARK_ICON_COLOR: closure_14 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(4790);
let obj2 = { container: { display: "flex", alignItems: "center", alignSelf: "stretch", gap: nativeDefault.space.PX_16 }, toastContainer: null, helplineGroup: null, textCenter: null };
let obj3 = { display: "flex", alignItems: "center", alignSelf: "stretch", gap: nativeDefault.space.PX_16 };
obj2.toastContainer = { paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_12 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_12 };
obj2.helplineGroup = { display: "flex", alignSelf: "stretch", gap: nativeDefault.space.PX_4 };
obj2.textCenter = { textAlign: "center" };
let closure_17 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { display: "flex", alignSelf: "stretch", gap: nativeDefault.space.PX_4 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/components/TakeActionScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((senderId) => {
  const cResult = require("c").c(45);
  senderId = senderId.senderId;
  _require = senderId;
  const channelId = senderId.channelId;
  ({ isReported, setReported } = senderId);
  const trackAnalyticsEvent = senderId.trackAnalyticsEvent;
  const tmp4 = closure_17();
  _slicedToArray = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RelationshipStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== senderId) {
    const fn = function h() {
      return RelationshipStore.isBlocked(closure_0);
    };
    const items1 = [senderId];
    cResult[1] = senderId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp7, tmp8);
  const tmpResult = require("initialize");
  const lastChannelMessage = require("useLastChannelMessage").useLastChannelMessage(channelId);
  const tmpResult5 = require("useLastChannelMessage");
  const shouldShowHelplineLink = require("useHelpLineVisibility").useShouldShowHelplineLink();
  const tmpResult6 = require("useHelpLineVisibility");
  [tmp13, useState] = useState(false);
  const tmp12 = _slicedToArray(useState(false), 2);
  const navigation = require("useNavigation").useNavigation();
  const tmpResult7 = require("useNavigation");
  const shouldShowThroughlineLink = require("useHelpLineVisibility").useShouldShowThroughlineLink();
  if (cResult[4] === channelId) {
    if (cResult[5] === senderId) {
      if (cResult[6] === trackAnalyticsEvent) {
        let tmp16 = cResult[7];
      }
      if (cResult[8] === channelId) {
        if (cResult[9] === senderId) {
          if (cResult[10] === trackAnalyticsEvent) {
            let tmp17 = cResult[11];
          }
          if (cResult[12] === channelId) {
            if (cResult[13] === lastChannelMessage) {
              if (cResult[14] === senderId) {
                if (cResult[15] === setReported) {
                  if (cResult[16] === tmp4.toastContainer) {
                    if (cResult[17] === trackAnalyticsEvent) {
                      let tmp18 = cResult[18];
                    }
                    RelationshipStore = tmp18;
                    if (cResult[19] !== stateFromStores) {
                      let intl = tmp(tmp2[21]).intl;
                      const string = intl.string;
                      let Hro40y = tmp(tmp2[21]).t;
                      if (stateFromStores) {
                        Hro40y = Hro40y.Hro40y;
                        let stringResult = string(Hro40y);
                      } else {
                        stringResult = string(Hro40y.VTIBaD);
                      }
                      cResult[19] = stateFromStores;
                      cResult[20] = stringResult;
                    } else {
                      if (stateFromStores) {
                        tmp16 = tmp17;
                      }
                      if (cResult[21] === cResult[20]) {
                        if (cResult[24] !== isReported) {
                          const intl2 = tmp(tmp2[21]).intl;
                          const string2 = intl2.string;
                          let QvwOJ6 = tmp(tmp2[21]).t;
                          if (isReported) {
                            QvwOJ6 = QvwOJ6.QvwOJ6;
                            let string2Result = string2(QvwOJ6);
                          } else {
                            string2Result = string2(QvwOJ6["7fHyE6"]);
                          }
                          cResult[24] = isReported;
                          cResult[25] = string2Result;
                        } else {
                          if (cResult[26] !== tmp18) {
                            class Z {
                              constructor() {
                                tmp = closure_8();
                                return;
                              }
                            }
                            cResult[26] = tmp18;
                            cResult[27] = Z;
                          } else {
                            class Z {
                              constructor() {
                                tmp = closure_8();
                                return;
                              }
                            }
                          }
                          if (cResult[28] === tmp13) {
                            class Z {
                              constructor() {
                                tmp = closure_8();
                                return;
                              }
                            }
                          }
                          let obj2 = { variant: "secondary", size: "lg", icon: channelId(tmp2[26]), loading: tmp13, disabled: isReported, text: cResult[25], grow: true, onPress: tmp30 };
                          const tmp34 = closure_15(tmp(tmp2[24]).Button, obj2);
                          cResult[28] = tmp13;
                          cResult[29] = isReported;
                          cResult[30] = cResult[25];
                          cResult[31] = tmp30;
                          cResult[32] = tmp34;
                        }
                      }
                      const obj3 = { variant: "primary", size: "lg", icon: channelId(tmp2[25]), text: cResult[20], grow: true, onPress: tmp16 };
                      const tmp26 = closure_15(tmp(tmp2[24]).Button, obj3);
                      cResult[21] = cResult[20];
                      cResult[22] = tmp16;
                      cResult[23] = tmp26;
                    }
                  }
                }
              }
            }
          }
          _require = trackAnalyticsEvent(function*(arg0, value) {
            if (c2 === 2) {
              c2 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                let obj2 = { value, done: true };
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
                  } else if (null != user.getUser(tmp4)) {
                    useState(true);
                    c1 = 1;
                    c2 = 1;
                    const obj5 = {
                      value: tmp4(setReported[19]).submitReportForInappropriateConversationSafetyAlert(lastChannelMessage, () => {
                                dependencyMap(true);
                                const obj2 = { key, content: null, IconComponent: null, iconColor: null, containerStyle: null };
                                const intl = closure_0(1119).intl;
                                obj2.content = intl.string(closure_0(1119).t.gn2c6X);
                                obj2.IconComponent = closure_0(4749).CircleCheckIcon;
                                obj2.iconColor = iconColor;
                                obj2.containerStyle = toastContainer.toastContainer;
                                c1(4490).open(obj2);
                              }, () => {
                                const intl = closure_1_0(1119).intl;
                                closure_1_0(4489).presentFailedToast(intl.string(closure_1_0(1119).t["0YV04/"]));
                              }),
                      done: false
                    };
                    return obj5;
                  } else {
                    c2 = 3;
                  }
                } else if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 !== 2) {
                  useState(false);
                  const result = channelId(setReported[17]).showReportSuccessToast(tmp4, c1);
                  trackAnalyticsEvent(tmp4(setReported[18]).CtaEventTypes.USER_TAKEOVER_MODAL_REPORT);
                  const obj = channelId(setReported[17]);
                }
                c2 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } catch (tmp22) {
                c2 = tmp;
                throw tmp22;
              }
            }
          });
          const fn4 = function() {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
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
        RelationshipActionCreatorsDefault.unblockUser(closure_0, { location: _location });
        const obj2 = { location: _location };
        const result = SafetyToastsActionCreatorsDefault.showUnblockSuccessToast(closure_0, channelId);
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
    const obj2 = { location: _location };
    RelationshipActionCreatorsDefault.blockUser(closure_0, { location: _location }).then(() => {
      const result = channelId(setReported[17]).showBlockSuccessToast(closure_1_0, closure_1_1);
    });
    trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_BLOCK);
  };
  cResult[4] = channelId;
  cResult[5] = senderId;
  cResult[6] = trackAnalyticsEvent;
  cResult[7] = fn2;
  tmp16 = fn2;
}) : ((senderId) => {
  senderId = senderId.senderId;
  const channelId = senderId.channelId;
  ({ isReported, setReported } = senderId);
  const trackAnalyticsEvent = senderId.trackAnalyticsEvent;
  useState = undefined;
  closure_8 = undefined;
  const tmp = closure_17();
  _slicedToArray = tmp;
  const items = [closure_8];
  const items1 = [senderId];
  const stateFromStores = senderId(setReported[12]).useStateFromStores(items, () => RelationshipStore.isBlocked(senderId), items1);
  let obj = senderId(setReported[12]);
  const lastChannelMessage = senderId(setReported[13]).useLastChannelMessage(channelId);
  let obj2 = senderId(setReported[13]);
  const shouldShowHelplineLink = senderId(setReported[14]).useShouldShowHelplineLink();
  const obj3 = senderId(setReported[14]);
  [tmp8, c6] = useState(false);
  const tmp7 = _slicedToArray(useState(false), 2);
  closure_7 = senderId(setReported[15]).useNavigation();
  let obj4 = senderId(setReported[15]);
  const items2 = [senderId, channelId, trackAnalyticsEvent];
  const shouldShowThroughlineLink = senderId(setReported[14]).useShouldShowThroughlineLink();
  let callback = lastChannelMessage.useCallback(() => {
    const obj2 = { location: _location };
    RelationshipActionCreatorsDefault.blockUser(senderId, { location: _location }).then(() => {
      const result = channelId(setReported[17]).showBlockSuccessToast(senderId, closure_1_1);
    });
    trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_BLOCK);
  }, items2);
  const items3 = [senderId, channelId, trackAnalyticsEvent];
  const callback1 = lastChannelMessage.useCallback(() => {
    RelationshipActionCreatorsDefault.unblockUser(senderId, { location: _location });
    const obj2 = { location: _location };
    const result = SafetyToastsActionCreatorsDefault.showUnblockSuccessToast(senderId, channelId);
    trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_UNBLOCK);
  }, items3);
  const items4 = [senderId, channelId, tmp.toastContainer, setReported, lastChannelMessage, trackAnalyticsEvent];
  closure_8 = lastChannelMessage.useCallback(trackAnalyticsEvent(function*(arg0, value) {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else if (null != user.getUser(senderId)) {
            _undefined(true);
            v1 = 1;
            dependencyMap = 1;
            const obj5 = {
              value: tmp4(8937).submitReportForInappropriateConversationSafetyAlert(lastChannelMessage, () => {
                        dependencyMap(true);
                        const obj2 = { key, content: null, IconComponent: null, iconColor: null, containerStyle: null };
                        const intl = closure_0(1119).intl;
                        obj2.content = intl.string(closure_0(1119).t.gn2c6X);
                        obj2.IconComponent = closure_0(4749).CircleCheckIcon;
                        obj2.iconColor = iconColor;
                        obj2.containerStyle = toastContainer.toastContainer;
                        c1(4490).open(obj2);
                      }, () => {
                        const intl = closure_1_0(1119).intl;
                        closure_1_0(4489).presentFailedToast(intl.string(closure_1_0(1119).t["0YV04/"]));
                      }),
              done: false
            };
            return obj5;
          } else {
            dependencyMap = 3;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_128_6(false);
          const result = v1(8712).showReportSuccessToast(closure_128_0, closure_128_1);
          closure_128_3(tmp4(10408).CtaEventTypes.USER_TAKEOVER_MODAL_REPORT);
          const obj = v1(8712);
        }
        dependencyMap = 3;
        const obj6 = { value, done: true };
        return obj6;
      } catch (tmp22) {
        dependencyMap = tmp;
        throw tmp22;
      }
    }
  }), items4);
  let obj6 = { style: tmp.container, children: null };
  const obj7 = { variant: "primary", size: "lg", icon: channelId(setReported[25]), text: null, grow: true, onPress: null };
  let intl = senderId(setReported[21]).intl;
  const string = intl.string;
  const t = senderId(setReported[21]).t;
  if (stateFromStores) {
    let stringResult = string(t.Hro40y);
  } else {
    stringResult = string(t.VTIBaD);
  }
  obj7.text = stringResult;
  if (stateFromStores) {
    callback = callback1;
  }
  obj7.onPress = callback;
  const items5 = [closure_15(senderId(setReported[24]).Button, obj7), , ];
  const obj8 = { variant: "secondary", size: "lg", icon: channelId(setReported[26]), loading: tmp8, disabled: isReported, text: null, grow: true, onPress: null };
  const intl2 = tmp2(tmp3[21]).intl;
  const string2 = intl2.string;
  const t2 = tmp2(tmp3[21]).t;
  if (isReported) {
    let string2Result = string2(t2.QvwOJ6);
  } else {
    string2Result = string2(t2["7fHyE6"]);
  }
  obj8.text = string2Result;
  obj8.onPress = function onPress() {
    closure_8();
  };
  items5[1] = closure_15(senderId(setReported[24]).Button, obj8);
  if (shouldShowHelplineLink) {
    const obj9 = { variant: "secondary", size: "lg", icon: tmp15(tmp3[27]), text: null, grow: true, onPress: null };
    const intl6 = tmp2(tmp3[21]).intl;
    obj9.text = intl6.string(tmp2(tmp3[21]).t.sZf6cz);
    obj9.onPress = function onPress() {
      closure_7.push("CRISIS_TEXT_LINE");
      trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_CTL);
    };
    let tmp12Result = tmp14(tmp2(tmp3[24]).Button, obj9);
  } else {
    const obj10 = { style: tmp.helplineGroup, children: null };
    const Button = tmp2(tmp3[24]).Button;
    const obj11 = { variant: "secondary", size: "lg", icon: tmp15(tmp3[28]), text: null, grow: true, onPress: null };
    const intl3 = tmp2(tmp3[21]).intl;
    const string3 = intl3.string;
    const t3 = tmp2(tmp3[21]).t;
    if (shouldShowThroughlineLink) {
      obj11.text = string3(t3.HQ2nKl);
      obj11.onPress = function onPress() {
        LinkingDefault.openURL(__initData);
        trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_THROUGHLINE);
      };
      const items6 = [tmp14(Button, obj11), ];
      const obj12 = { variant: "text-xs/medium", color: "text-default", style: tmp.textCenter, children: null };
      const intl5 = tmp2(tmp3[21]).intl;
      obj12.children = intl5.string(tmp2(tmp3[21]).t["PMeb/r"]);
      items6[1] = tmp14(tmp2(tmp3[30]).Text, obj12);
      obj10.children = items6;
      let tmp18 = obj10;
    } else {
      obj11.text = string3(t3["65XQar"]);
      obj11.onPress = function onPress() {
        LinkingDefault.openURL(closure_2_11);
        trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_NO_FILTR);
      };
      const items7 = [tmp14(Button, obj11), ];
      const obj13 = { variant: "text-xs/medium", color: "text-default", style: tmp.textCenter, children: null };
      const intl4 = tmp2(tmp3[21]).intl;
      obj13.children = intl4.string(tmp2(tmp3[21]).t.XNwhxC);
      items7[1] = tmp14(tmp2(tmp3[30]).Text, obj13);
      obj10.children = items7;
      tmp18 = obj10;
    }
    tmp12Result = tmp12(tmp13, tmp18);
  }
  items5[2] = tmp12Result;
  obj6.children = items5;
  return closure_16(closure_7, obj6);
});
