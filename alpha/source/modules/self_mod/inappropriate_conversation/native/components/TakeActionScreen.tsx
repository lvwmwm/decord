// Module ID: 17678
// Function ID: 17679
// Name: TakeActionScreen
// Dependencies: [5, 32, 19, 17, 4951, 1384, 11230, 21, 5009, 575, 504, 11269, 11272, 1498, 7482, 7490, 11243, 8344, 5707, 1114, 5706, 5629, 11280, 10065, 8615, 8154, 5704, 5619, 2]
// Exports: default

// Module 17678 (TakeActionScreen)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 19 */;
import nativeDefault from "native" /* 575 */;
import LinkingDefault from "Linking" /* 5704 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 7482 */;
import SafetyToastsActionCreatorsDefault from "SafetyToastsActionCreators" /* 7490 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 11243 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import UserStore from "UserStore" /* 1384 */;
import Constants from "Constants" /* 11230 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const react_mod = react2;

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
let result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/components/TakeActionScreen.tsx");

export default function TakeActionButtons(senderId) {
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
  let obj = senderId(setReported[10]);
  const items = [RelationshipStore];
  const items1 = [senderId];
  const stateFromStores = obj.useStateFromStores(items, () => RelationshipStore.isBlocked(senderId), items1);
  let obj2 = senderId(setReported[11]);
  const lastChannelMessage = obj2.useLastChannelMessage(channelId);
  let obj3 = senderId(setReported[12]);
  const shouldShowHelplineLink = obj3.useShouldShowHelplineLink();
  [tmp8, c5] = lastChannelMessage(useState(false), 2);
  const tmp7 = lastChannelMessage(useState(false), 2);
  let obj4 = senderId(setReported[13]);
  useState = obj4.useNavigation();
  let obj5 = senderId(setReported[12]);
  const items2 = [senderId, channelId, trackAnalyticsEvent];
  const shouldShowThroughlineLink = obj5.useShouldShowThroughlineLink();
  let callback = react.useCallback(() => {
    let obj = RelationshipActionCreatorsDefault;
    const obj2 = { location: _location };
    const blockUserResult = obj.blockUser(senderId, obj2, channelId);
    blockUserResult.then(() => {
      const obj = channelId(setReported[15]);
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
        return { value: "HermesInternal", done: null };
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
            const obj3 = tmp3(setReported[17]);
            setReported = 1;
            const obj5 = {
              value: obj3.submitReportForInappropriateConversationSafetyAlert(lastChannelMessage, () => {
                        let intl;
                        closure_1_2(true);
                        const obj = { text: intl.string(senderId(c2[19]).t.gn2c6X), variant: "success" };
                        const open = c1(c2[18]).open;
                        c1(c2[18]);
                        intl = senderId(c2[19]).intl;
                        open(closure_2_13, obj);
                      }, () => {
                        const presentFailedToast = closure_1_0(closure_1_2[20]).presentFailedToast;
                        closure_1_0(closure_1_2[20]);
                        const intl = closure_1_0(closure_1_2[19]).intl;
                        presentFailedToast(intl.string(closure_1_0(closure_1_2[19]).t["0YV04/"]));
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
          let obj = channelId(setReported[15]);
          const result = obj.showReportSuccessToast(closure_128_0, closure_128_1);
          closure_128_3(tmp3(setReported[16]).CtaEventTypes.USER_TAKEOVER_MODAL_REPORT);
        }
        setReported = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp21) {
        setReported = 3;
        throw tmp21;
      }
    }
  }), items4);
  let obj6 = { style: tmp.container, children: items5 };
  const obj7 = { variant: "primary", size: "lg", icon: channelId(setReported[22]), text: stringResult, grow: true, onPress: callback };
  const Button = senderId(setReported[21]).Button;
  let intl = senderId(setReported[19]).intl;
  const string = intl.string;
  const t = senderId(setReported[19]).t;
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
    icon: channelId(tmp3[23]),
    loading: tmp8,
    disabled: isReported,
    text: string2Result,
    grow: true,
    onPress() {
      closure_7();
    }
  };
  const Button2 = tmp2(tmp3[21]).Button;
  const intl2 = tmp2(tmp3[19]).intl;
  const string2 = intl2.string;
  const t2 = tmp2(tmp3[19]).t;
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
      icon: channelId(tmp3[24]),
      text: intl6.string(tmp2(tmp3[19]).t.sZf6cz),
      grow: true,
      onPress() {
          closure_6.push("CRISIS_TEXT_LINE");
          trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_CTL);
        }
    };
    const Button4 = tmp2(tmp3[21]).Button;
    intl6 = tmp2(tmp3[19]).intl;
    tmp12Result = tmp14(Button4, obj9);
  } else {
    let tmp18;
    const obj10 = { style: tmp.helplineGroup, children: null };
    const Button3 = tmp2(tmp3[21]).Button;
    const obj11 = { variant: "secondary", size: "lg", icon: channelId(tmp3[25]), text: null, grow: true, onPress: null };
    const intl3 = tmp2(tmp3[19]).intl;
    const string3 = intl3.string;
    const t3 = tmp2(tmp3[19]).t;
    if (shouldShowThroughlineLink) {
      obj11.text = string3(t3.HQ2nKl);
      obj11.onPress = function onPress() {
        const obj = LinkingDefault;
        obj.openURL(authStore2);
        trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_THROUGHLINE);
      };
      const items6 = [tmp14(Button3, obj11), ];
      const obj12 = { variant: "text-xs/medium", color: "text-default", style: tmp.textCenter, children: intl5.string(tmp2(tmp3[19]).t["PMeb/r"]) };
      const Text2 = tmp2(tmp3[27]).Text;
      intl5 = tmp2(tmp3[19]).intl;
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
      const obj13 = { variant: "text-xs/medium", color: "text-default", style: tmp.textCenter, children: intl4.string(tmp2(tmp3[19]).t.XNwhxC) };
      const Text = tmp2(tmp3[27]).Text;
      intl4 = tmp2(tmp3[19]).intl;
      items7[1] = closure_14(Text, obj13);
      obj10.children = items7;
      tmp18 = obj10;
    }
    tmp12Result = tmp12(tmp13, tmp18);
  }
  items5[2] = tmp12Result;
  return closure_15(closure_7, obj6);
};
