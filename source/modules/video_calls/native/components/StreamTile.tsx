// Module ID: 10547
// Function ID: 82405
// Name: StreamTextOverlay
// Dependencies: []
// Exports: default

// Module 10547 (StreamTextOverlay)
let StyleSheet;
class StreamTextOverlay {
  constructor(arg0) {
    subtext = global.subtext;
    tmp = jsxs();
    obj = { style: tmp.screenMessageContainer };
    tmp2 = jsxs;
    tmp3 = View;
    obj = { Promise: 24, marginTop: 24, flags: null };
    obj.style = tmp.screenMessageText;
    obj.children = global.title;
    items = [, ];
    items[0] = jsx(arg1(dependencyMap[10]).Text, obj);
    tmp4 = null;
    if (null != subtext) {
      tmp5 = jsx;
      tmp6 = arg1;
      tmp7 = dependencyMap;
      num = 11;
      obj1 = {};
      obj1.style = tmp.screenMessageSubtext;
      obj1.children = subtext;
      tmp4 = jsx(arg1(dependencyMap[11]).LegacyText, obj1);
    }
    items[1] = tmp4;
    obj.children = items;
    return tmp2(tmp3, obj);
  }
}
const importAllResult = importAll(dependencyMap[0]);
({ View: closure_4, StyleSheet } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
const ApplicationStreamStates = arg1(dependencyMap[4]).ApplicationStreamStates;
const MediaEngineContextTypes = arg1(dependencyMap[5]).MediaEngineContextTypes;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = arg1(dependencyMap[6]));
let obj1 = arg1(dependencyMap[7]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[8]).colors.BLACK };
obj.container = obj;
obj1 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj1["flex"] = 1;
obj1["padding"] = 8;
obj1["alignItems"] = "center";
obj1["justifyContent"] = "center";
const tmp3 = arg1(dependencyMap[6]);
obj1["backgroundColor"] = arg1(dependencyMap[9]).hexWithOpacity(importDefault(dependencyMap[8]).unsafe_rawColors.BLACK, 0.7);
obj.screenMessageContainer = obj1;
obj.screenMessageText = { lineHeight: 18 };
const obj6 = arg1(dependencyMap[9]);
obj.screenMessageSubtext = { color: importDefault(dependencyMap[8]).unsafe_rawColors.PRIMARY_300 };
const obj3 = { 0: false, 0: false, 9223372036854775807: false, 0: false, 0: false, 0: false, 0: false, 0: false, 0: false };
const obj2 = { color: importDefault(dependencyMap[8]).unsafe_rawColors.PRIMARY_300 };
obj3.backgroundColor = arg1(dependencyMap[9]).hexWithOpacity(importDefault(dependencyMap[8]).unsafe_rawColors.PRIMARY_700, 0.5);
obj3.borderRadius = importDefault(dependencyMap[8]).radii.md;
obj.statusWrapper = obj3;
obj.liveTag = { ignoreDuration: false, limits: false, initialScrollStart: false };
let closure_13 = obj1.createStyles(obj);
let closure_14 = importAllResult.memo((participant) => {
  let gestureEnabled;
  let removeEmptyStateButton;
  let removeEmptyStateImage;
  let resizeMode;
  let streamId;
  let user;
  participant = participant.participant;
  const arg1 = participant;
  ({ user, removeEmptyStateButton, removeEmptyStateImage } = participant);
  ({ streamId, resizeMode, gestureEnabled } = participant);
  const importDefault = callback2();
  let obj = arg1(dependencyMap[12]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => activeStreamForStreamKey.getActiveStreamForStreamKey(participant.id));
  const tmp2 = importDefault(dependencyMap[13])(MediaEngineContextTypes.STREAM, participant.user.id);
  if (null != stateFromStores) {
    const state = stateFromStores.state;
    if (ApplicationStreamStates.FAILED === state) {
      obj = { stream: stateFromStores, removeCloseButton: removeEmptyStateButton, removeSplashImage: removeEmptyStateImage, type: arg1(dependencyMap[14]).VideoEmptyTypes.STREAM_FAILED, style: StyleSheet.absoluteFill };
      return callback(importDefault(dependencyMap[14]), obj);
    } else if (ApplicationStreamStates.ENDED === state) {
      obj = { stream: stateFromStores, removeCloseButton: removeEmptyStateButton, removeSplashImage: removeEmptyStateImage, type: arg1(dependencyMap[14]).VideoEmptyTypes.STREAM_ENDED, style: StyleSheet.absoluteFill };
      return callback(importDefault(dependencyMap[14]), obj);
    } else {
      if (ApplicationStreamStates.RECONNECTING === state) {
        const obj1 = {};
        const intl = arg1(dependencyMap[15]).intl;
        obj1.title = intl.string(arg1(dependencyMap[15]).t.pdFFK+);
        let tmp8 = callback(StreamTextOverlay, obj1);
      } else {
        tmp8 = null;
        if (ApplicationStreamStates.PAUSED === state) {
          const obj2 = {};
          const intl2 = arg1(dependencyMap[15]).intl;
          obj2.title = intl2.string(arg1(dependencyMap[15]).t.5q17w5);
          const intl3 = arg1(dependencyMap[15]).intl;
          const obj3 = { username: importDefault(dependencyMap[16]).getName(stateFromStores.guildId, stateFromStores.channelId, user) };
          obj2.subtext = intl3.formatToPlainString(arg1(dependencyMap[15]).t.meVVlb, obj3);
          tmp8 = callback(StreamTextOverlay, obj2);
          const obj8 = importDefault(dependencyMap[16]);
        }
      }
      if (null != tmp2) {
        const obj4 = { stream: stateFromStores, removeCloseButton: removeEmptyStateButton, removeSplashImage: removeEmptyStateImage, type: arg1(dependencyMap[14]).VideoEmptyTypes.STREAM_FAILED, style: StyleSheet.absoluteFill, avError: tmp2 };
        return callback(importDefault(dependencyMap[14]), obj4);
      } else {
        const obj5 = {};
        const id = id.getId();
        const obj6 = {
          resizeMode,
          streamId,
          gestureEnabled,
          renderTag() {
                  return callback(lib(closure_2[18]), { style: lib.liveTag, participant });
                }
        };
        if (stateFromStores.ownerId === id) {
          let REMOTE_STREAM = arg1(dependencyMap[19]).VideoSpinnerContext.SELF_STREAM;
        } else {
          REMOTE_STREAM = arg1(dependencyMap[19]).VideoSpinnerContext.REMOTE_STREAM;
        }
        obj6.videoSpinnerContext = REMOTE_STREAM;
        obj6.userId = user.id;
        obj6.paused = stateFromStores.state === ApplicationStreamStates.PAUSED;
        const items1 = [callback(importDefault(dependencyMap[17]), obj6), tmp8];
        obj5.children = items1;
        return closure_11(closure_12, obj5);
      }
    }
  } else {
    return null;
  }
});
let closure_15 = importAllResult.memo((arg0) => {
  let onFullScreen;
  let style;
  ({ onFullScreen, style } = arg0);
  let obj = { accessibilityRole: "button", onPress: onFullScreen, style: items, hitSlop: { "Bool(false)": "GUILD_ROLE_CREATE", "Bool(false)": "StreamingTier2LargeBadge", "Bool(false)": "SubscriptionTrials", "Bool(false)": "SHAKE_SETTINGS_MODAL" } };
  const items = [callback2().statusWrapper, style];
  obj = { source: importDefault(dependencyMap[23]), size: arg1(dependencyMap[11]).Icon.Sizes.SMALL, color: importDefault(dependencyMap[8]).unsafe_rawColors.WHITE };
  obj.children = callback(arg1(dependencyMap[11]).Icon, obj);
  return callback(arg1(dependencyMap[22]).PressableOpacity, obj);
});
const obj9 = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/video_calls/native/components/StreamTile.tsx");

export default function StreamTile(participant) {
  let fullscreenIconStyle;
  let gestureEnabled;
  let removeEmptyStateButton;
  let removeEmptyStateImage;
  let streamId;
  let style;
  let user;
  participant = participant.participant;
  const arg1 = participant;
  const onSingleTap = participant.onSingleTap;
  const importDefault = onSingleTap;
  const onDoubleTap = participant.onDoubleTap;
  const dependencyMap = onDoubleTap;
  let CONTAIN = participant.resizeMode;
  if (CONTAIN === undefined) {
    CONTAIN = arg1(dependencyMap[17]).ResizeMode.CONTAIN;
  }
  const onFullScreen = participant.onFullScreen;
  ({ gestureEnabled, removeEmptyStateButton, removeEmptyStateImage, fullscreenIconStyle, style } = participant);
  const items = [onSingleTap, participant];
  const items1 = [onDoubleTap, participant];
  const callback = importAllResult.useCallback(() => {
    let tmp;
    if (null != onSingleTap) {
      tmp = onSingleTap(participant);
    }
    return tmp;
  }, items);
  const callback1 = importAllResult.useCallback(() => {
    let tmp;
    if (null != onDoubleTap) {
      tmp = onDoubleTap(participant);
    }
    return tmp;
  }, items1);
  const tmp3 = callback2();
  ({ streamId, user } = participant);
  let obj = { gesture: importDefault(dependencyMap[20])({ onSingleTapStart: callback, onDoubleTapStart: callback1 }) };
  obj = { style: items2 };
  const items2 = [tmp3.container, style];
  obj = { streamId, participant, user, resizeMode: CONTAIN, gestureEnabled, removeEmptyStateButton, removeEmptyStateImage };
  const items3 = [callback(closure_14, obj), ];
  let tmp10 = null != onFullScreen;
  if (tmp10) {
    const obj1 = { onFullScreen, style: fullscreenIconStyle };
    tmp10 = callback(closure_15, obj1);
  }
  items3[1] = tmp10;
  obj.children = items3;
  obj.children = closure_11(closure_4, obj);
  return callback(arg1(dependencyMap[21]).GestureDetector, obj);
};
export { StreamTextOverlay };
