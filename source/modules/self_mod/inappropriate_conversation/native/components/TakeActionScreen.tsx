// Module ID: 14741
// Function ID: 112350
// Name: TakeActionButtons
// Dependencies: [5, 57, 31, 27, 3767, 1849, 10166, 33, 4130, 689, 566, 10168, 10169, 1456, 8962, 7568, 10163, 7689, 3831, 1212, 4091, 3830, 4543, 10175, 9454, 4612, 7621, 3827, 4126, 2]
// Exports: default

// Module 14741 (TakeActionButtons)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { useState } from "result";
import { View } from "module_3827";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import LOCATION_CONTEXT_MOBILE from "LOCATION_CONTEXT_MOBILE";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
const require = arg1;
({ MODAL_LOCATION_CONTEXT_MOBILE: closure_10, NOFILTR_URL: closure_11, THROUGHLINE_URL: closure_12, REPORTED_USER_CONFIRMATION_TOAST_KEY: closure_13, TOAST_CHECKMARK_ICON_COLOR: closure_14 } = LOCATION_CONTEXT_MOBILE);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { display: "flex", alignItems: "center", alignSelf: "stretch", gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.toastContainer = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12 };
let obj2 = { display: "flex", alignSelf: "stretch", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.helplineGroup = obj2;
_createForOfIteratorHelperLoose.textCenter = { textAlign: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12 };
let result = require("result").fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/components/TakeActionScreen.tsx");

export default function TakeActionButtons(senderId) {
  let isReported;
  let setReported;
  senderId = senderId.senderId;
  const channelId = senderId.channelId;
  ({ isReported, setReported } = senderId);
  const trackAnalyticsEvent = senderId.trackAnalyticsEvent;
  const tmp = _createForOfIteratorHelperLoose();
  let callback = tmp;
  let obj = senderId(setReported[10]);
  const items = [closure_8];
  const items1 = [senderId];
  const stateFromStores = obj.useStateFromStores(items, () => blocked.isBlocked(senderId), items1);
  let obj1 = senderId(setReported[11]);
  const lastChannelMessage = obj1.useLastChannelMessage(channelId);
  let obj2 = senderId(setReported[12]);
  const shouldShowHelplineLink = obj2.useShouldShowHelplineLink();
  const tmp5 = callback(useState(false), 2);
  useState = tmp5[1];
  let obj3 = senderId(setReported[13]);
  let closure_7 = obj3.useNavigation();
  let obj4 = senderId(setReported[12]);
  const items2 = [senderId, channelId, trackAnalyticsEvent];
  const shouldShowThroughlineLink = obj4.useShouldShowThroughlineLink();
  callback = lastChannelMessage.useCallback(() => {
    let obj = channelId(setReported[14]);
    obj = { location: outer1_10 };
    obj.blockUser(senderId, obj).then(() => {
      const result = channelId(setReported[15]).showBlockSuccessToast(outer1_0, outer1_1);
    });
    trackAnalyticsEvent(senderId(setReported[16]).CtaEventTypes.USER_TAKEOVER_MODAL_BLOCK);
  }, items2);
  const items3 = [senderId, channelId, trackAnalyticsEvent];
  const fn = () => {
    let obj = channelId(setReported[14]);
    obj = { location: outer1_10 };
    obj.unblockUser(senderId, obj);
    const result = channelId(setReported[15]).showUnblockSuccessToast(senderId, channelId);
    trackAnalyticsEvent(senderId(setReported[16]).CtaEventTypes.USER_TAKEOVER_MODAL_UNBLOCK);
  };
  // CreateGeneratorClosureLongIndex (0x67)
  const callback1 = lastChannelMessage.useCallback(fn, items3);
  const items4 = [senderId, channelId, tmp.toastContainer, setReported, lastChannelMessage, trackAnalyticsEvent];
  closure_8 = lastChannelMessage.useCallback(trackAnalyticsEvent(fn), items4);
  obj = { style: tmp.container };
  obj = { variant: "primary", size: "lg", icon: channelId(setReported[23]), text: null, grow: true };
  const intl = senderId(setReported[19]).intl;
  const string = intl.string;
  const t = senderId(setReported[19]).t;
  if (stateFromStores) {
    let stringResult = string(t.Hro40y);
  } else {
    stringResult = string(t.VTIBaD);
  }
  obj.text = stringResult;
  if (stateFromStores) {
    callback = callback1;
  }
  obj.onPress = callback;
  const items5 = [callback2(senderId(setReported[22]).Button, obj), , ];
  obj1 = { variant: "secondary", size: "lg", icon: channelId(setReported[24]), loading: tmp5[0], disabled: isReported };
  const intl2 = senderId(setReported[19]).intl;
  const string2 = intl2.string;
  const t2 = senderId(setReported[19]).t;
  if (isReported) {
    let string2Result = string2(t2.QvwOJ6);
  } else {
    string2Result = string2(t2["7fHyE6"]);
  }
  obj1.text = string2Result;
  obj1.grow = true;
  obj1.onPress = function onPress() {
    blocked();
  };
  items5[1] = callback2(senderId(setReported[22]).Button, obj1);
  if (shouldShowHelplineLink) {
    obj2 = { variant: "secondary", size: "lg", icon: channelId(setReported[25]), text: null, grow: true };
    const intl6 = senderId(setReported[19]).intl;
    obj2.text = intl6.string(senderId(setReported[19]).t.sZf6cz);
    obj2.onPress = function onPress() {
      trackAnalyticsEvent(senderId(setReported[16]).CtaEventTypes.USER_TAKEOVER_MODAL_CTL);
    };
    let tmp15Result = callback2(senderId(setReported[22]).Button, obj2);
  } else {
    obj3 = { style: tmp.helplineGroup };
    const Button = senderId(setReported[22]).Button;
    obj4 = { variant: "secondary", size: "lg", icon: channelId(setReported[26]), text: null, grow: true };
    const intl3 = senderId(setReported[19]).intl;
    const string3 = intl3.string;
    const t3 = senderId(setReported[19]).t;
    if (shouldShowThroughlineLink) {
      obj4.text = string3(t3.HQ2nKl);
      obj4.onPress = function onPress() {
        channelId(setReported[27]).openURL(outer1_12);
        trackAnalyticsEvent(senderId(setReported[16]).CtaEventTypes.USER_TAKEOVER_MODAL_THROUGHLINE);
      };
      const items6 = [tmp17(Button, obj4), ];
      const obj5 = { variant: "text-xs/medium", color: "text-default", style: tmp.textCenter };
      const intl5 = tmp18(tmp19[19]).intl;
      obj5.children = intl5.string(tmp18(tmp19[19]).t["PMeb/r"]);
      items6[1] = tmp17(tmp18(tmp19[28]).Text, obj5);
      obj3.children = items6;
      let tmp21 = obj3;
    } else {
      obj4.text = string3(t3["65XQar"]);
      obj4.onPress = function onPress() {
        channelId(setReported[27]).openURL(outer1_11);
        trackAnalyticsEvent(senderId(setReported[16]).CtaEventTypes.USER_TAKEOVER_MODAL_NO_FILTR);
      };
      const items7 = [tmp17(Button, obj4), ];
      const obj6 = { variant: "text-xs/medium", color: "text-default", style: tmp.textCenter };
      const intl4 = tmp18(tmp19[19]).intl;
      obj6.children = intl4.string(tmp18(tmp19[19]).t.XNwhxC);
      items7[1] = tmp17(tmp18(tmp19[28]).Text, obj6);
      obj3.children = items7;
      tmp21 = obj3;
    }
    tmp15Result = closure_16(closure_7, tmp21);
    const tmp15 = closure_16;
    const tmp16 = closure_7;
  }
  items5[2] = tmp15Result;
  obj.children = items5;
  return closure_16(closure_7, obj);
};
