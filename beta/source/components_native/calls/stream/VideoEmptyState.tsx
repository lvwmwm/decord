// Module ID: 8876
// Function ID: 8877
// Name: VideoEmptyState
// Dependencies: [19, 17, 2045, 1074, 21, 4836, 576, 8877, 1177, 1115, 8875, 504, 5298, 4978, 4888, 4832, 5281, 2]
// Exports: default

// Module 8876 (VideoEmptyState)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4888 */;
import StreamActionCreators from "StreamActionCreators" /* 4978 */;
import useMountEffectDefault from "useMountEffect" /* 5298 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let importDefault;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj3;
let obj4;
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
const VideoEmptyTypes = { NONE: "NONE", STREAM_ENDED: "STREAM_ENDED", STREAM_FAILED: "STREAM_FAILED" };
let createStyles = createStyles_mod;
let obj2 = { container: obj3, placeholderImage: { marginBottom: 8, width: "100%", resizeMode: "contain" }, placeholderText: obj4, buttonWrapper: { marginTop: 16, alignSelf: "center" } };
obj3 = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_700, padding: 8 };
createStyles = createStyles.createStyles;
obj4 = { color: nativeDefault.unsafe_rawColors.WHITE, fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 16, lineHeight: 20, textAlign: "center" };
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
      let obj2 = { style: tmp2.placeholderImage };
      tmp10 = closure_5(stream(8877).StreamEnded, obj2);
    }
    const obj3 = { children: items };
    items = [tmp10, ];
    const obj4 = { style: tmp2.placeholderText, children: intl2.formatToMarkdownString(stream(1115).t["1Ww0Hi"], {}) };
    const LegacyText2 = stream(1177).LegacyText;
    intl2 = stream(1115).intl;
    items[1] = closure_5(LegacyText2, obj4);
    tmp8Result = tmp8(tmp9, obj3);
  } else if (obj.STREAM_FAILED === type) {
    obj = { style: tmp2.placeholderText, children: intl.string(stream(1115).t.rSlOep) };
    const LegacyText = stream(1177).LegacyText;
    intl = stream(1115).intl;
    tmp8Result = closure_5(LegacyText, obj);
  } else if (obj.NONE === type) {
    tmp8Result = null;
  }
  if (null != avError) {
    const obj6 = stream(8875);
    errorCode = obj6.getErrorInfo(avError).errorCode;
  } else {
    errorCode = null;
    if (type === obj.STREAM_FAILED) {
      const obj5 = stream(8875);
      errorCode = obj5.getErrorInfo(stream(8875).AVError.STREAM_FAILED_TO_START).errorCode;
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
  let tmp28 = null != errorCode;
  const tmp25 = closure_7;
  if (tmp28) {
    const obj9 = { variant: "text-sm/semibold", color: "text-muted", selectable: true, children: intl3.formatToPlainString(stream(1115).t.ejOT95, obj10) };
    const Text = tmp22(4832).Text;
    intl3 = tmp22(1115).intl;
    obj10 = { errorCode };
    tmp28 = closure_5(Text, obj9);
  }
  items4[1] = tmp28;
  let tmp30 = !removeCloseButton;
  if (tmp30) {
    const obj11 = { style: tmp2.buttonWrapper, children: closure_5(Button, obj12) };
    obj12 = {
      variant: "secondary",
      size: "md",
      shrink: true,
      grow: false,
      text: intl4.string(stream(1115).t["4EGMWL"]),
      onPress() {
          const stopStream = StreamActionCreators.stopStream;
          StreamActionCreators;
          const obj = StreamKeyUtils;
          stopStream(obj.encodeStreamKey(stream));
        }
    };
    Button = tmp22(5281).Button;
    intl4 = tmp22(1115).intl;
    tmp30 = closure_5(tmp26, obj11);
  }
  items4[2] = tmp30;
  return tmp25(View, obj8);
};
export { VideoEmptyTypes };
