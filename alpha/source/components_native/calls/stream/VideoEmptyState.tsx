// Module ID: 11759
// Function ID: 11760
// Name: VideoEmptyState
// Dependencies: [19, 17, 4863, 1072, 21, 5014, 575, 11760, 1187, 1113, 5947, 504, 5593, 7901, 6717, 5624, 5634, 2]
// Exports: default

// Module 11759 (VideoEmptyState)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import useMountEffectDefault from "useMountEffect" /* 5593 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6717 */;
import StreamActionCreators from "StreamActionCreators" /* 7901 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let importDefault;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
const VideoEmptyTypes = { NONE: "NONE", STREAM_ENDED: "STREAM_ENDED", STREAM_FAILED: "STREAM_FAILED" };
let createStyles = createStyles_mod;
let obj2 = { container: obj3, placeholderImage: obj4, placeholderText: obj5, buttonWrapper: { marginTop: 16, alignSelf: "center" } };
obj3 = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_700, padding: 8 };
createStyles = createStyles.createStyles;
obj4 = { marginBottom: nativeDefault.space.PX_8, width: "100%", maxWidth: 288, maxHeight: 162, aspectRatio: 1.7777777777777777, flexShrink: 1, minHeight: 0 };
obj5 = { color: nativeDefault.unsafe_rawColors.WHITE, fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 16, lineHeight: 20, textAlign: "center" };
let closure_9 = createStyles(obj2);
const result = size.fileFinishedImporting("components_native/calls/stream/VideoEmptyState.tsx");

export default function VideoEmptyState(style) {
  let Button;
  let avError;
  let closure_1;
  let errorCode;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items3;
  let items4;
  let obj;
  let obj10;
  let obj12;
  let removeCloseButton;
  let removeSplashImage;
  let stream;
  let tmp8Result;
  let type;
  ({ type, avError, removeSplashImage, removeCloseButton, stream } = style);
  style = style.style;
  const merged = Object.assign(style, Object.assign({ type: 0, style: 0, avError: 0, removeSplashImage: 0, removeCloseButton: 0, stream: 0 }));
  importDefault = undefined;
  const tmp2 = closure_9();
  if (obj.STREAM_ENDED === type) {
    let tmp10 = !removeSplashImage;
    const tmp8 = closure_7;
    const tmp9 = closure_6;
    if (!removeSplashImage) {
      let obj2 = { style: tmp2.placeholderImage, children: closure_5(stream(11760).CouchSpotIllustration, { accessible: false, width: "100%", height: "100%" }) };
      tmp10 = closure_5(View, obj2);
    }
    const obj3 = { children: items };
    items = [tmp10, ];
    const obj4 = { style: tmp2.placeholderText, children: intl2.formatToMarkdownString(stream(1113).t["1Ww0Hi"], {}) };
    const LegacyText2 = stream(1187).LegacyText;
    intl2 = stream(1113).intl;
    items[1] = closure_5(LegacyText2, obj4);
    tmp8Result = tmp8(tmp9, obj3);
  } else if (obj.STREAM_FAILED === type) {
    obj = { style: tmp2.placeholderText, children: intl.string(stream(1113).t.rSlOep) };
    const LegacyText = stream(1187).LegacyText;
    intl = stream(1113).intl;
    tmp8Result = closure_5(LegacyText, obj);
  } else if (obj.NONE === type) {
    tmp8Result = null;
  }
  if (null != avError) {
    const obj6 = stream(5947);
    errorCode = obj6.getErrorInfo(avError).errorCode;
  } else {
    errorCode = null;
    if (type === obj.STREAM_FAILED) {
      const obj5 = stream(5947);
      errorCode = obj5.getErrorInfo(stream(5947).AVError.STREAM_FAILED_TO_START).errorCode;
    }
  }
  const items1 = [ChannelStore];
  const items2 = [stream.channelId];
  const obj7 = stream(504);
  importDefault = obj7.useStateFromStores(items1, () => ChannelStore.getChannel(stream.channelId), items2);
  useMountEffectDefault(() => {
    let isGuildStageVoiceResult;
    const obj = closure_1;
    if (closure_1 != null) {
      isGuildStageVoiceResult = obj.isGuildStageVoice();
    }
    if (isGuildStageVoiceResult) {
      const stopStream = StreamActionCreators.stopStream;
      StreamActionCreators;
      const obj2 = StreamKeyUtils;
      stopStream(obj2.encodeStreamKey(stream));
    }
  });
  const obj8 = { style: items3, children: items4 };
  const merged1 = Object.assign(merged);
  items3 = [tmp2.container, style];
  items4 = [tmp8Result, , ];
  let tmp29 = null != errorCode;
  const tmp26 = closure_7;
  if (tmp29) {
    const obj9 = { variant: "text-sm/semibold", color: "text-muted", selectable: true, children: intl3.formatToPlainString(stream(1113).t.ejOT95, obj10) };
    const Text = tmp23(5624).Text;
    intl3 = tmp23(1113).intl;
    obj10 = { errorCode };
    tmp29 = closure_5(Text, obj9);
  }
  items4[1] = tmp29;
  let tmp31 = !removeCloseButton;
  if (tmp31) {
    const obj11 = { style: tmp2.buttonWrapper, children: closure_5(Button, obj12) };
    obj12 = {
      variant: "secondary",
      size: "md",
      shrink: true,
      grow: false,
      text: intl4.string(stream(1113).t["4EGMWL"]),
      onPress() {
          const stopStream = StreamActionCreators.stopStream;
          StreamActionCreators;
          const obj = StreamKeyUtils;
          stopStream(obj.encodeStreamKey(stream));
        }
    };
    Button = tmp23(5634).Button;
    intl4 = tmp23(1113).intl;
    tmp31 = closure_5(tmp27, obj11);
  }
  items4[2] = tmp31;
  return tmp26(View, obj8);
};
export { VideoEmptyTypes };
