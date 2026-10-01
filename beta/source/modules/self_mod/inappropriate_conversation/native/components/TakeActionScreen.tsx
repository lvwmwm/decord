// Module ID: 15324
// Function ID: 15325
// Name: TakeActionScreen
// Dependencies: [5, 32, 19, 17, 4479, 1372, 10905, 21, 4836, 576, 504, 10934, 10937, 1485, 9195, 7852, 10912, 8089, 4528, 1115, 4792, 4527, 5281, 10945, 8125, 5355, 8038, 4525, 4832, 2]
// Exports: default

// Module 15324 (TakeActionScreen)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 19 */;
import nativeDefault from "native" /* 576 */;
import LinkingDefault from "Linking" /* 4525 */;
import SafetyToastsActionCreatorsDefault from "SafetyToastsActionCreators" /* 7852 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9195 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 10912 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 10905 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

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
({ MODAL_LOCATION_CONTEXT_MOBILE: c10, NOFILTR_URL: unpackModuleId, THROUGHLINE_URL: closure_12, REPORTED_USER_CONFIRMATION_TOAST_KEY: map1, TOAST_CHECKMARK_ICON_COLOR: closure_14 } = Constants);
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, toastContainer: obj3, helplineGroup: obj4, textCenter: { textAlign: "center" } };
obj2 = { display: "flex", alignItems: "center", alignSelf: "stretch", gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_12 };
obj4 = { display: "flex", alignSelf: "stretch", gap: nativeDefault.space.PX_4 };
let closure_17 = createStyles(obj);
let result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/components/TakeActionScreen.tsx");

export default function TakeActionButtons(senderId) {
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
  let obj = senderId(setReported[10]);
  const items = [closure_8];
  const items1 = [senderId];
  const stateFromStores = obj.useStateFromStores(items, () => RelationshipStore.isBlocked(senderId), items1);
  let obj2 = senderId(setReported[11]);
  const lastChannelMessage = obj2.useLastChannelMessage(channelId);
  let obj3 = senderId(setReported[12]);
  const shouldShowHelplineLink = obj3.useShouldShowHelplineLink();
  [tmp8, c6] = _slicedToArray(useState(false), 2);
  const tmp7 = _slicedToArray(useState(false), 2);
  let obj4 = senderId(setReported[13]);
  let closure_7 = obj4.useNavigation();
  let obj5 = senderId(setReported[12]);
  const items2 = [senderId, channelId, trackAnalyticsEvent];
  const shouldShowThroughlineLink = obj5.useShouldShowThroughlineLink();
  let callback = lastChannelMessage.useCallback(() => {
    let obj = RelationshipActionCreatorsDefault;
    const obj2 = { location: _location };
    const blockUserResult = obj.blockUser(senderId, obj2);
    blockUserResult.then(() => {
      const obj = channelId(setReported[15]);
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
                        const obj = { key, content: intl.string(senderId(c2[19]).t.gn2c6X), IconComponent: senderId(c2[20]).CircleCheckIcon, iconColor, containerStyle: toastContainer.toastContainer };
                        const open = c1(c2[18]).open;
                        c1(c2[18]);
                        intl = senderId(c2[19]).intl;
                        open(obj);
                      }, () => {
                        const presentFailedToast = closure_1_0(closure_1_2[21]).presentFailedToast;
                        closure_1_0(closure_1_2[21]);
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
          closure_128_6(false);
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
  const obj7 = { variant: "primary", size: "lg", icon: channelId(setReported[23]), text: stringResult, grow: true, onPress: callback };
  const Button = senderId(setReported[22]).Button;
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
    icon: channelId(tmp3[24]),
    loading: tmp8,
    disabled: isReported,
    text: string2Result,
    grow: true,
    onPress() {
      closure_8();
    }
  };
  const Button2 = tmp2(tmp3[22]).Button;
  const intl2 = tmp2(tmp3[19]).intl;
  const string2 = intl2.string;
  const t2 = tmp2(tmp3[19]).t;
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
      icon: channelId(tmp3[25]),
      text: intl6.string(tmp2(tmp3[19]).t.sZf6cz),
      grow: true,
      onPress() {
          closure_7.push("CRISIS_TEXT_LINE");
          trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_CTL);
        }
    };
    const Button4 = tmp2(tmp3[22]).Button;
    intl6 = tmp2(tmp3[19]).intl;
    tmp12Result = tmp14(Button4, obj9);
  } else {
    let tmp18;
    const obj10 = { style: tmp.helplineGroup, children: null };
    const Button3 = tmp2(tmp3[22]).Button;
    const obj11 = { variant: "secondary", size: "lg", icon: channelId(tmp3[26]), text: null, grow: true, onPress: null };
    const intl3 = tmp2(tmp3[19]).intl;
    const string3 = intl3.string;
    const t3 = tmp2(tmp3[19]).t;
    if (shouldShowThroughlineLink) {
      obj11.text = string3(t3.HQ2nKl);
      obj11.onPress = function onPress() {
        const obj = LinkingDefault;
        obj.openURL(closure_12);
        trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_THROUGHLINE);
      };
      const items6 = [tmp14(Button3, obj11), ];
      const obj12 = { variant: "text-xs/medium", color: "text-default", style: tmp.textCenter, children: intl5.string(tmp2(tmp3[19]).t["PMeb/r"]) };
      const Text2 = tmp2(tmp3[28]).Text;
      intl5 = tmp2(tmp3[19]).intl;
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
      const obj13 = { variant: "text-xs/medium", color: "text-default", style: tmp.textCenter, children: intl4.string(tmp2(tmp3[19]).t.XNwhxC) };
      const Text = tmp2(tmp3[28]).Text;
      intl4 = tmp2(tmp3[19]).intl;
      items7[1] = closure_15(Text, obj13);
      obj10.children = items7;
      tmp18 = obj10;
    }
    tmp12Result = tmp12(tmp13, tmp18);
  }
  items5[2] = tmp12Result;
  return closure_16(closure_7, obj6);
};
