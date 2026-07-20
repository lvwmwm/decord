// Module ID: 14561
// Function ID: 109768
// Name: TakeActionButtons
// Dependencies: []
// Exports: default

// Module 14561 (TakeActionButtons)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const useState = arg1(dependencyMap[2]).useState;
const View = arg1(dependencyMap[3]).View;
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
({ MODAL_LOCATION_CONTEXT_MOBILE: closure_10, NOFILTR_URL: closure_11, THROUGHLINE_URL: closure_12, REPORTED_USER_CONFIRMATION_TOAST_KEY: closure_13, TOAST_CHECKMARK_ICON_COLOR: closure_14 } = arg1(dependencyMap[6]));
const tmp2 = arg1(dependencyMap[6]);
({ jsx: closure_15, jsxs: closure_16 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = {};
obj = { gap: importDefault(dependencyMap[9]).space.PX_16 };
obj.container = obj;
const tmp3 = arg1(dependencyMap[7]);
obj.toastContainer = { paddingHorizontal: importDefault(dependencyMap[9]).space.PX_8, paddingVertical: importDefault(dependencyMap[9]).space.PX_12 };
const obj1 = { paddingHorizontal: importDefault(dependencyMap[9]).space.PX_8, paddingVertical: importDefault(dependencyMap[9]).space.PX_12 };
obj.helplineGroup = { gap: importDefault(dependencyMap[9]).space.PX_4 };
obj.textCenter = { textAlign: "center" };
let closure_17 = obj.createStyles(obj);
const obj2 = { gap: importDefault(dependencyMap[9]).space.PX_4 };
const result = arg1(dependencyMap[29]).fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/components/TakeActionScreen.tsx");

export default function TakeActionButtons(senderId) {
  let isReported;
  let setReported;
  senderId = senderId.senderId;
  const arg1 = senderId;
  const channelId = senderId.channelId;
  const importDefault = channelId;
  ({ isReported, setReported } = senderId);
  const dependencyMap = setReported;
  const trackAnalyticsEvent = senderId.trackAnalyticsEvent;
  let callback = trackAnalyticsEvent;
  const tmp = callback4();
  const callback2 = tmp;
  let obj = arg1(dependencyMap[10]);
  const items = [closure_8];
  const items1 = [senderId];
  const stateFromStores = obj.useStateFromStores(items, () => blocked.isBlocked(senderId), items1);
  let obj1 = arg1(dependencyMap[11]);
  const lastChannelMessage = obj1.useLastChannelMessage(channelId);
  const React = lastChannelMessage;
  let obj2 = arg1(dependencyMap[12]);
  const shouldShowHelplineLink = obj2.useShouldShowHelplineLink();
  const tmp5 = callback2(useState(false), 2);
  const useState = tmp5[1];
  let obj3 = arg1(dependencyMap[13]);
  let closure_7 = obj3.useNavigation();
  let obj4 = arg1(dependencyMap[12]);
  const items2 = [senderId, channelId, trackAnalyticsEvent];
  const shouldShowThroughlineLink = obj4.useShouldShowThroughlineLink();
  callback = React.useCallback(() => {
    let obj = channelId(setReported[14]);
    obj = { location: closure_10 };
    obj.blockUser(senderId, obj).then(() => {
      const result = callback(closure_2[15]).showBlockSuccessToast(closure_0, callback);
    });
    trackAnalyticsEvent(senderId(setReported[16]).CtaEventTypes.USER_TAKEOVER_MODAL_BLOCK);
  }, items2);
  const items3 = [senderId, channelId, trackAnalyticsEvent];
  const fn = () => {
    let obj = channelId(setReported[14]);
    obj = { location: closure_10 };
    obj.unblockUser(senderId, obj);
    const result = channelId(setReported[15]).showUnblockSuccessToast(senderId, channelId);
    trackAnalyticsEvent(senderId(setReported[16]).CtaEventTypes.USER_TAKEOVER_MODAL_UNBLOCK);
  };
  // CreateGeneratorClosureLongIndex (0x67)
  const callback1 = React.useCallback(fn, items3);
  const items4 = [senderId, channelId, tmp.toastContainer, setReported, lastChannelMessage, trackAnalyticsEvent];
  closure_8 = React.useCallback(callback(fn), items4);
  obj = { style: tmp.container };
  obj = { braintree: 285278212, handleRelationshipUpdate: 34876225, braintree: 4391168, ORBS_ANNOUNCEMENT_MODAL: -16776618, braintree: -1979710891, icon: importDefault(dependencyMap[23]) };
  const intl = arg1(dependencyMap[19]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[19]).t;
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
  const items5 = [callback3(arg1(dependencyMap[22]).Button, obj), , ];
  obj1 = { icon: importDefault(dependencyMap[24]), loading: tmp5[0], disabled: isReported };
  const intl2 = arg1(dependencyMap[19]).intl;
  const string2 = intl2.string;
  const t2 = arg1(dependencyMap[19]).t;
  if (isReported) {
    let string2Result = string2(t2.QvwOJ6);
  } else {
    string2Result = string2(t2.7fHyE6);
  }
  obj1.text = string2Result;
  obj1.grow = true;
  obj1.onPress = function onPress() {
    blocked();
  };
  items5[1] = callback3(arg1(dependencyMap[22]).Button, obj1);
  if (shouldShowHelplineLink) {
    obj2 = { braintree: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012046693164853545, handleRelationshipUpdate: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000149251973658347, braintree: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007294379938368798, ORBS_ANNOUNCEMENT_MODAL: 217054453146829860000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, braintree: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000016191457644535117, icon: importDefault(dependencyMap[25]) };
    const intl6 = arg1(dependencyMap[19]).intl;
    obj2.text = intl6.string(arg1(dependencyMap[19]).t.sZf6cz);
    obj2.onPress = function onPress() {
      trackAnalyticsEvent(senderId(setReported[16]).CtaEventTypes.USER_TAKEOVER_MODAL_CTL);
    };
    let tmp15Result = callback3(arg1(dependencyMap[22]).Button, obj2);
  } else {
    obj3 = { style: tmp.helplineGroup };
    const Button = arg1(dependencyMap[22]).Button;
    obj4 = { braintree: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012046693164853545, handleRelationshipUpdate: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000149251973658347, braintree: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007294379938368798, ORBS_ANNOUNCEMENT_MODAL: 217054453146829860000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, braintree: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000016191457644535117, icon: importDefault(dependencyMap[26]) };
    const intl3 = arg1(dependencyMap[19]).intl;
    const string3 = intl3.string;
    const t3 = arg1(dependencyMap[19]).t;
    if (shouldShowThroughlineLink) {
      obj4.text = string3(t3.HQ2nKl);
      obj4.onPress = function onPress() {
        channelId(setReported[27]).openURL(closure_12);
        trackAnalyticsEvent(senderId(setReported[16]).CtaEventTypes.USER_TAKEOVER_MODAL_THROUGHLINE);
      };
      const items6 = [tmp17(Button, obj4), ];
      const obj5 = { style: tmp.textCenter };
      const intl5 = tmp18(tmp19[19]).intl;
      obj5.children = intl5.string(tmp18(tmp19[19]).t.PMeb/r);
      items6[1] = tmp17(tmp18(tmp19[28]).Text, obj5);
      obj3.children = items6;
      let tmp21 = obj3;
    } else {
      obj4.text = string3(t3.65XQar);
      obj4.onPress = function onPress() {
        channelId(setReported[27]).openURL(closure_11);
        trackAnalyticsEvent(senderId(setReported[16]).CtaEventTypes.USER_TAKEOVER_MODAL_NO_FILTR);
      };
      const items7 = [tmp17(Button, obj4), ];
      const obj6 = { style: tmp.textCenter };
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
