// Module ID: 10567
// Function ID: 82529
// Name: VideoEmptyState
// Dependencies: [31, 27, 1348, 653, 33, 4130, 689, 10568, 1273, 1212, 10571, 8857, 566, 4559, 4309, 4194, 4126, 4544, 2]
// Exports: default

// Module 10567 (VideoEmptyState)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = jsxProd);
let obj = { NONE: "NONE", STREAM_ENDED: "STREAM_ENDED", STREAM_FAILED: "STREAM_FAILED" };
obj = {};
obj = { alignItems: "center", justifyContent: "center", backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_700, padding: 8 };
obj.container = obj;
obj.placeholderImage = { marginBottom: 8, width: "100%", resizeMode: "contain" };
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE, fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD, fontSize: 16, lineHeight: 20, textAlign: "center" };
obj.placeholderText = _createForOfIteratorHelperLoose;
obj.buttonWrapper = { marginTop: 16, alignSelf: "center" };
obj.buttonPill = { borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj2 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("components_native/calls/stream/VideoEmptyState.tsx");

export default function VideoEmptyState(arg0) {
  let avError;
  let removeCloseButton;
  let removeSplashImage;
  let stream;
  let style;
  let type;
  ({ type, avError, removeSplashImage, stream } = arg0);
  let obj = { type: 0, style: 0, avError: 0, removeSplashImage: 0, removeCloseButton: 0, stream: 0 };
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
      tmp17 = callback(stream(10568).StreamEnded, obj);
    }
    const items = [tmp17, ];
    const obj1 = { style: tmp3.placeholderText };
    const intl2 = stream(1212).intl;
    obj1.children = intl2.formatToMarkdownString(stream(1212).t["1Ww0Hi"], {});
    items[1] = callback(stream(1273).LegacyText, obj1);
    obj.children = items;
    let tmp6Result = closure_7(closure_6, obj);
    const tmp15 = closure_7;
    const tmp16 = closure_6;
  } else if (obj.STREAM_FAILED === type) {
    let obj2 = {};
    let tmp8 = !removeSplashImage;
    if (tmp8) {
      const obj3 = { style: tmp3.placeholderImage };
      tmp8 = callback(stream(10571).StreamFailed, obj3);
    }
    const items1 = [tmp8, ];
    const obj4 = { style: tmp3.placeholderText };
    const intl = stream(1212).intl;
    obj4.children = intl.string(stream(1212).t.rSlOep);
    items1[1] = callback(stream(1273).LegacyText, obj4);
    obj2.children = items1;
    tmp6Result = closure_7(closure_6, obj2);
    const tmp6 = closure_7;
    const tmp7 = closure_6;
  } else if (obj.NONE === type) {
    tmp6Result = null;
  }
  if (null != avError) {
    let obj8 = stream(8857);
    let errorCode = obj8.getErrorInfo(avError).errorCode;
  } else {
    errorCode = null;
    if (type === obj.STREAM_FAILED) {
      let obj7 = stream(8857);
      errorCode = obj7.getErrorInfo(stream(8857).AVError.STREAM_FAILED_TO_START).errorCode;
    }
  }
  let obj9 = stream(566);
  const items2 = [_isNativeReflectConstruct];
  const items3 = [stream.channelId];
  importDefault = obj9.useStateFromStores(items2, () => outer1_4.getChannel(stream.channelId), items3);
  importDefault(4559)(() => {
    let isGuildStageVoiceResult = null != guildStageVoice;
    if (isGuildStageVoiceResult) {
      isGuildStageVoiceResult = guildStageVoice.isGuildStageVoice();
    }
    if (isGuildStageVoiceResult) {
      const obj = stream(outer1_2[14]);
      obj.stopStream(stream(outer1_2[15]).encodeStreamKey(stream));
      const obj2 = stream(outer1_2[15]);
    }
  });
  const obj5 = {};
  const merged1 = Object.assign(merged);
  const items4 = [tmp3.container, style];
  obj5["style"] = items4;
  const items5 = [tmp6Result, , ];
  let tmp34 = null != errorCode;
  if (tmp34) {
    const obj6 = { variant: "text-sm/semibold", color: "text-muted", selectable: true };
    const intl3 = stream(1212).intl;
    obj7 = { errorCode };
    obj6.children = intl3.formatToPlainString(stream(1212).t.ejOT95, obj7);
    tmp34 = callback(stream(4126).Text, obj6);
  }
  items5[1] = tmp34;
  let tmp38 = !removeCloseButton;
  if (tmp38) {
    obj8 = { style: tmp3.buttonWrapper };
    obj9 = { pillStyle: tmp3.buttonPill, variant: "secondary" };
    const intl4 = stream(1212).intl;
    obj9.text = intl4.string(stream(1212).t["4EGMWL"]);
    obj9.onPress = function onPress() {
      const obj = stream(outer1_2[14]);
      obj.stopStream(stream(outer1_2[15]).encodeStreamKey(stream));
    };
    obj8.children = callback(stream(4544).BaseTextButton, obj9);
    tmp38 = callback(View, obj8);
  }
  items5[2] = tmp38;
  obj5["children"] = items5;
  return closure_7(View, obj5);
};
export const VideoEmptyTypes = obj;
