// Module ID: 10550
// Function ID: 82432
// Name: VideoEmptyState
// Dependencies: []
// Exports: default

// Module 10550 (VideoEmptyState)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = arg1(dependencyMap[4]));
let obj = { NONE: "NONE", STREAM_ENDED: "STREAM_ENDED", STREAM_FAILED: "STREAM_FAILED" };
let obj1 = arg1(dependencyMap[5]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[6]).unsafe_rawColors.PRIMARY_700 };
obj.container = obj;
obj.placeholderImage = { 2018633569: null, 1394172320: null, -730470413: 0 };
obj1 = { zIndex: true, position: true, bottom: true, overflow: true, left: true, color: importDefault(dependencyMap[6]).unsafe_rawColors.WHITE, fontFamily: arg1(dependencyMap[3]).Fonts.PRIMARY_SEMIBOLD };
obj.placeholderText = obj1;
obj.buttonWrapper = { "Null": "center", "Null": "center" };
const tmp3 = arg1(dependencyMap[4]);
obj.buttonPill = { borderRadius: importDefault(dependencyMap[6]).radii.round };
let closure_9 = obj1.createStyles(obj);
const obj2 = { borderRadius: importDefault(dependencyMap[6]).radii.round };
const result = arg1(dependencyMap[18]).fileFinishedImporting("components_native/calls/stream/VideoEmptyState.tsx");

export default function VideoEmptyState(arg0) {
  let avError;
  let removeCloseButton;
  let removeSplashImage;
  let stream;
  let style;
  let type;
  ({ type, avError, removeSplashImage, stream } = arg0);
  const arg1 = stream;
  let obj = { 1394172320: null, -730470413: "LOCAL_PAYMENT_START_PAYMENT_MISSING_REQUIRED_OPTION", -28064864: "Missing required option for startPayment.", 1635788546: null, -73374951: "LOCAL_PAYMENT_START_PAYMENT_DEFERRED_PAYMENT_FAILED", 39407964: "LocalPayment startPayment deferred payment failed." };
  ({ style, removeCloseButton } = arg0);
  Object.setPrototypeOf(null);
  const merged = Object.assign(arg0, obj);
  let importDefault;
  const tmp3 = callback2();
  if (obj.STREAM_ENDED === type) {
    obj = {};
    let tmp17 = !removeSplashImage;
    if (tmp17) {
      obj = { style: tmp3.placeholderImage };
      tmp17 = callback(arg1(dependencyMap[7]).StreamEnded, obj);
    }
    const items = [tmp17, ];
    const obj1 = { style: tmp3.placeholderText };
    const intl2 = arg1(dependencyMap[9]).intl;
    obj1.children = intl2.formatToMarkdownString(arg1(dependencyMap[9]).t.1Ww0Hi, {});
    items[1] = callback(arg1(dependencyMap[8]).LegacyText, obj1);
    obj.children = items;
    let tmp6Result = closure_7(closure_6, obj);
    const tmp15 = closure_7;
    const tmp16 = closure_6;
  } else if (obj.STREAM_FAILED === type) {
    const obj2 = {};
    let tmp8 = !removeSplashImage;
    if (tmp8) {
      const obj3 = { style: tmp3.placeholderImage };
      tmp8 = callback(arg1(dependencyMap[10]).StreamFailed, obj3);
    }
    const items1 = [tmp8, ];
    const obj4 = { style: tmp3.placeholderText };
    const intl = arg1(dependencyMap[9]).intl;
    obj4.children = intl.string(arg1(dependencyMap[9]).t.rSlOep);
    items1[1] = callback(arg1(dependencyMap[8]).LegacyText, obj4);
    obj2.children = items1;
    tmp6Result = closure_7(closure_6, obj2);
    const tmp6 = closure_7;
    const tmp7 = closure_6;
  } else if (obj.NONE === type) {
    tmp6Result = null;
  }
  if (null != avError) {
    let obj8 = arg1(dependencyMap[11]);
    let errorCode = obj8.getErrorInfo(avError).errorCode;
  } else {
    errorCode = null;
    if (type === obj.STREAM_FAILED) {
      let obj7 = arg1(dependencyMap[11]);
      errorCode = obj7.getErrorInfo(arg1(dependencyMap[11]).AVError.STREAM_FAILED_TO_START).errorCode;
    }
  }
  let obj9 = arg1(dependencyMap[12]);
  const items2 = [closure_4];
  const items3 = [stream.channelId];
  importDefault = obj9.useStateFromStores(items2, () => channel.getChannel(stream.channelId), items3);
  importDefault(dependencyMap[13])(() => {
    let isGuildStageVoiceResult = null != guildStageVoice;
    if (isGuildStageVoiceResult) {
      isGuildStageVoiceResult = guildStageVoice.isGuildStageVoice();
    }
    if (isGuildStageVoiceResult) {
      const obj = stream(closure_2[14]);
      obj.stopStream(stream(closure_2[15]).encodeStreamKey(stream));
      const obj2 = stream(closure_2[15]);
    }
  });
  const obj5 = {};
  const merged1 = Object.assign(merged);
  const items4 = [tmp3.container, style];
  obj5["style"] = items4;
  const items5 = [tmp6Result, , ];
  let tmp34 = null != errorCode;
  if (tmp34) {
    const obj6 = {};
    const intl3 = arg1(dependencyMap[9]).intl;
    obj7 = { errorCode };
    obj6.children = intl3.formatToPlainString(arg1(dependencyMap[9]).t.ejOT95, obj7);
    tmp34 = callback(arg1(dependencyMap[16]).Text, obj6);
  }
  items5[1] = tmp34;
  let tmp38 = !removeCloseButton;
  if (tmp38) {
    obj8 = { style: tmp3.buttonWrapper };
    obj9 = { pillStyle: tmp3.buttonPill, variant: "secondary" };
    const intl4 = arg1(dependencyMap[9]).intl;
    obj9.text = intl4.string(arg1(dependencyMap[9]).t.4EGMWL);
    obj9.onPress = function onPress() {
      const obj = stream(closure_2[14]);
      obj.stopStream(stream(closure_2[15]).encodeStreamKey(stream));
    };
    obj8.children = callback(arg1(dependencyMap[17]).BaseTextButton, obj9);
    tmp38 = callback(View, obj8);
  }
  items5[2] = tmp38;
  obj5["children"] = items5;
  return closure_7(View, obj5);
};
export const VideoEmptyTypes = obj;
