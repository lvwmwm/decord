// Module ID: 8872
// Function ID: 8873
// Name: StreamTile
// Dependencies: [19, 17, 4858, 502, 1074, 4861, 21, 4836, 576, 4683, 4832, 1177, 504, 8873, 8876, 1115, 4988, 8880, 8894, 8883, 8870, 6073, 5435, 8898, 2]
// Exports: default

// Module 8872 (StreamTile)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import Text_Text from "Text/Text" /* 4832 */;
import Constants2 from "Constants" /* 4861 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4988 */;
import Pressables from "Pressables" /* 5435 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6073 */;
import useParticipantTileTapGestureDefault from "useParticipantTileTapGesture" /* 8870 */;
import useVideoStreamErrorDefault from "useVideoStreamError" /* 8873 */;
import VideoEmptyStateDefault from "VideoEmptyState" /* 8876 */;
import VideoRenderer from "VideoRenderer" /* 8880 */;
import StreamQualityLiveIndicatorDefault from "StreamQualityLiveIndicator" /* 8894 */;
import AssetRegistryDefault from "AssetRegistry" /* 8898 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4858 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import ColorUtils_mod from "ColorUtils" /* 4683 */;
import size_mod from "module_2" /* 2 */;

const VideoRendererDefault = VideoRenderer;
let importDefault;

let ColorUtils;
let StyleSheet;
let c10;
let closure_12;
let closure_4;
let obj2;
let obj3;
let obj4;
let size;
let tmp5;
let unpackModuleId;
const native = tmp5(1177);
class StreamTextOverlay {
  constructor(subtext) {
    let items;
    subtext = subtext.subtext;
    const title = subtext.title;
    const tmp = closure_13();
    const obj = { style: tmp.screenMessageContainer, children: items };
    items = [, ];
    const obj2 = { style: tmp.screenMessageText, variant: "text-md/semibold", color: "text-overlay-light", children: title };
    items[0] = authStore(Text_Text.Text, obj2);
    let tmp4Result = null;
    const tmp2 = unpackModuleId;
    const tmp3 = React3;
    const tmp4 = authStore;
    if (null != subtext) {
      const obj3 = { style: tmp.screenMessageSubtext, children: subtext };
      tmp4Result = tmp4(native.LegacyText, obj3);
    }
    items[1] = tmp4Result;
    return tmp2(tmp3, obj);
  }
}
({ View: closure_4, StyleSheet } = react_native);
const ApplicationStreamStates = Constants.ApplicationStreamStates;
const MediaEngineContextTypes = Constants2.MediaEngineContextTypes;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, screenMessageContainer: obj3, screenMessageText: { lineHeight: 18 }, screenMessageSubtext: obj4, statusWrapper: size, liveTag: { position: "absolute", right: 8, top: 8 } };
obj2 = { flex: 1, alignItems: "center", justifyContent: "center", overflow: "hidden", width: "100%", backgroundColor: nativeDefault.colors.BLACK };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, padding: 8, alignItems: "center", justifyContent: "center", backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.7) };
const merged = Object.assign(StyleSheet.absoluteFillObject);
ColorUtils = ColorUtils_mod;
obj4 = { color: nativeDefault.unsafe_rawColors.PRIMARY_300, fontSize: 14, lineHeight: 18, textAlign: "center" };
size = { position: "absolute", bottom: 8, right: 8, backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.5), borderRadius: nativeDefault.radii.md, width: 24, height: 24, justifyContent: "center", alignItems: "center" };
ColorUtils = ColorUtils_mod;
createStyles(obj);
let closure_15 = react.memo((participant) => {
  let REMOTE_STREAM;
  let formatToPlainString;
  let gestureEnabled;
  let intl;
  let intl2;
  let items1;
  let liveTag;
  let meVVlb;
  let obj6;
  let removeEmptyStateButton;
  let removeEmptyStateImage;
  let resizeMode;
  let streamId;
  let tmp4Result6;
  let user;
  participant = participant.participant;
  ({ user, removeEmptyStateButton, removeEmptyStateImage } = participant);
  ({ streamId, resizeMode, gestureEnabled } = participant);
  importDefault = closure_13();
  let obj = participant(504);
  const items = [ApplicationStreamingStore];
  const stateFromStores = obj.useStateFromStores(items, () => ApplicationStreamingStore.getActiveStreamForStreamKey(participant.id));
  const tmp5 = useVideoStreamErrorDefault(MediaEngineContextTypes.STREAM, participant.user.id);
  if (null != stateFromStores) {
    const state = stateFromStores.state;
    if (ApplicationStreamStates.FAILED === state) {
      const obj2 = { stream: stateFromStores, removeCloseButton: removeEmptyStateButton, removeSplashImage: removeEmptyStateImage, type: participant(8876).VideoEmptyTypes.STREAM_FAILED, style: StyleSheet.absoluteFill };
      const tmp4Result = VideoEmptyStateDefault;
      return closure_10(tmp4Result, obj2);
    } else if (ApplicationStreamStates.ENDED === state) {
      const obj3 = { stream: stateFromStores, removeCloseButton: removeEmptyStateButton, removeSplashImage: removeEmptyStateImage, type: participant(8876).VideoEmptyTypes.STREAM_ENDED, style: StyleSheet.absoluteFill };
      const tmp4Result5 = VideoEmptyStateDefault;
      return closure_10(tmp4Result5, obj3);
    } else {
      let tmp9;
      if (ApplicationStreamStates.RECONNECTING === state) {
        const obj4 = { title: intl.string(participant(1115).t["pdFFK+"]) };
        intl = tmp(1115).intl;
        tmp9 = closure_10(StreamTextOverlay, obj4);
      } else {
        tmp9 = null;
        if (ApplicationStreamStates.PAUSED === state) {
          const obj5 = { title: intl2.string(participant(1115).t["5q17w5"]), subtext: formatToPlainString(meVVlb, obj6) };
          intl2 = tmp(1115).intl;
          const intl3 = tmp(1115).intl;
          formatToPlainString = intl3.formatToPlainString;
          obj6 = { username: tmp4Result6.getName(stateFromStores.guildId, stateFromStores.channelId, user) };
          meVVlb = tmp(1115).t.meVVlb;
          tmp4Result6 = NicknameUtilsDefault;
          tmp9 = closure_10(StreamTextOverlay, obj5);
        }
      }
      if (null != tmp5) {
        const obj7 = { stream: stateFromStores, removeCloseButton: removeEmptyStateButton, removeSplashImage: removeEmptyStateImage, type: participant(8876).VideoEmptyTypes.STREAM_FAILED, style: StyleSheet.absoluteFill, avError: tmp5 };
        const tmp4Result7 = VideoEmptyStateDefault;
        return closure_10(tmp4Result7, obj7);
      } else {
        const ownerId = stateFromStores.ownerId;
        const id = AuthenticationStore.getId();
        const obj8 = {
          resizeMode,
          streamId,
          gestureEnabled,
          renderTag() {
                  const obj = { style: liveTag.liveTag, participant };
                  return authStore(StreamQualityLiveIndicatorDefault, obj);
                },
          videoSpinnerContext: REMOTE_STREAM,
          userId: user.id,
          paused: stateFromStores.state === ApplicationStreamStates.PAUSED
        };
        const tmp23 = closure_11;
        const tmp24 = closure_12;
        const tmp25 = closure_10;
        const tmp4Result8 = VideoRendererDefault;
        if (ownerId === id) {
          REMOTE_STREAM = tmp(8883).VideoSpinnerContext.SELF_STREAM;
        } else {
          REMOTE_STREAM = tmp(8883).VideoSpinnerContext.REMOTE_STREAM;
        }
        const obj9 = { children: items1 };
        items1 = [tmp25(tmp4Result8, obj8), tmp9];
        return tmp23(tmp24, obj9);
      }
    }
  } else {
    return null;
  }
});
let closure_16 = react.memo((arg0) => {
  let Icon;
  let items;
  let obj2;
  let onFullScreen;
  let style;
  ({ onFullScreen, style } = arg0);
  const obj = { accessibilityRole: "button", onPress: onFullScreen, style: items, hitSlop: { top: 4, left: 4, right: 4, bottom: 4 }, children: authStore(Icon, obj2) };
  items = [closure_13().statusWrapper, style];
  closure_13();
  const PressableOpacity = Pressables.PressableOpacity;
  obj2 = { source: AssetRegistryDefault, size: native.Icon.Sizes.SMALL, color: nativeDefault.unsafe_rawColors.WHITE };
  Icon = native.Icon;
  return authStore(PressableOpacity, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/video_calls/native/components/StreamTile.tsx");

export default function StreamTile(participant) {
  let fullscreenIconStyle;
  let gestureEnabled;
  let items2;
  let items3;
  let obj2;
  let removeEmptyStateButton;
  let removeEmptyStateImage;
  let streamId;
  let style;
  let tmp8;
  let tmp9;
  let user;
  participant = participant.participant;
  const onSingleTap = participant.onSingleTap;
  const onDoubleTap = participant.onDoubleTap;
  let CONTAIN = participant.resizeMode;
  if (CONTAIN === undefined) {
    const tmp = require;
    CONTAIN = VideoRenderer.ResizeMode.CONTAIN;
  }
  const onFullScreen = participant.onFullScreen;
  ({ gestureEnabled, removeEmptyStateButton, removeEmptyStateImage, fullscreenIconStyle, style } = participant);
  const items = [onSingleTap, participant];
  const items1 = [onDoubleTap, participant];
  const tmp3 = closure_13();
  const callback = react.useCallback(() => {
    let tmpResult;
    if (onSingleTap != null) {
      tmpResult = tmp(participant);
    }
    return tmpResult;
  }, items);
  const callback1 = react.useCallback(() => {
    let tmpResult;
    if (onDoubleTap != null) {
      tmpResult = tmp(participant);
    }
    return tmpResult;
  }, items1);
  ({ streamId, user } = participant);
  const obj = { gesture: useParticipantTileTapGestureDefault({ onSingleTapStart: callback, onDoubleTapStart: callback1 }), children: tmp8(tmp9, obj2) };
  obj2 = { style: items2, children: items3 };
  items2 = [tmp3.container, style];
  const GestureDetector = LegacyBaseButton.GestureDetector;
  items3 = [authStore(closure_15, { streamId, participant, user, resizeMode: CONTAIN, gestureEnabled, removeEmptyStateButton, removeEmptyStateImage }), ];
  let tmp7Result = null != onFullScreen;
  tmp8 = unpackModuleId;
  tmp9 = React3;
  if (tmp7Result) {
    const obj3 = { onFullScreen, style: fullscreenIconStyle };
    tmp7Result = tmp7(closure_16, obj3);
  }
  items3[1] = tmp7Result;
  return authStore(GestureDetector, obj);
};
export { StreamTextOverlay };
