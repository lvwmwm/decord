// Module ID: 10593
// Function ID: 82694
// Name: StreamTextOverlay
// Dependencies: [31, 27, 4149, 1194, 653, 4191, 33, 4130, 689, 3974, 4126, 1273, 566, 10594, 10596, 1212, 4319, 10603, 10616, 10606, 10591, 5217, 4660, 10618, 2]
// Exports: default

// Module 10593 (StreamTextOverlay)
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { ApplicationStreamStates } from "ME";
import { MediaEngineContextTypes } from "DesktopSources";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import hexToRgb from "hexToRgb";
import hexToRgb from "hexToRgb";

let StyleSheet;
let closure_10;
let closure_11;
let closure_12;
let closure_4;
const require = arg1;
class StreamTextOverlay {
  constructor(arg0) {
    subtext = global.subtext;
    tmp = jsxs();
    obj = { style: tmp.screenMessageContainer };
    tmp2 = jsxs;
    tmp3 = View;
    obj = { style: null, variant: "text-md/semibold", color: "text-overlay-light" };
    obj.style = tmp.screenMessageText;
    obj.children = global.title;
    items = [, ];
    items[0] = jsx(require("Text").Text, obj);
    tmp4 = null;
    if (null != subtext) {
      tmp5 = jsx;
      tmp6 = closure_0;
      tmp7 = closure_2;
      num = 11;
      obj1 = {};
      obj1.style = tmp.screenMessageSubtext;
      obj1.children = subtext;
      tmp4 = jsx(require("Button").LegacyText, obj1);
    }
    items[1] = tmp4;
    obj.children = items;
    return tmp2(tmp3, obj);
  }
}
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
let obj = {};
obj = { flex: 1, alignItems: "center", justifyContent: "center", overflow: "hidden", width: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BLACK };
obj.container = obj;
_createForOfIteratorHelperLoose = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose["flex"] = 1;
_createForOfIteratorHelperLoose["padding"] = 8;
_createForOfIteratorHelperLoose["alignItems"] = "center";
_createForOfIteratorHelperLoose["justifyContent"] = "center";
_createForOfIteratorHelperLoose["backgroundColor"] = hexToRgb.hexWithOpacity(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLACK, 0.7);
obj.screenMessageContainer = _createForOfIteratorHelperLoose;
obj.screenMessageText = { lineHeight: 18 };
let obj2 = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_300, fontSize: 14, lineHeight: 18, textAlign: "center" };
obj.screenMessageSubtext = obj2;
let obj3 = { position: "absolute", bottom: 8, right: 8, backgroundColor: null, borderRadius: null, width: 24, height: 24, justifyContent: "center", alignItems: "center" };
obj3.backgroundColor = hexToRgb.hexWithOpacity(require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_700, 0.5);
obj3.borderRadius = require("_createForOfIteratorHelperLoose").radii.md;
obj.statusWrapper = obj3;
obj.liveTag = { position: "absolute", right: 8, top: 8 };
let closure_13 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_14 = importAllResult.memo((participant) => {
  let gestureEnabled;
  let removeEmptyStateButton;
  let removeEmptyStateImage;
  let resizeMode;
  let streamId;
  let user;
  participant = participant.participant;
  ({ user, removeEmptyStateButton, removeEmptyStateImage } = participant);
  ({ streamId, resizeMode, gestureEnabled } = participant);
  const importDefault = callback2();
  let obj = participant(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getActiveStreamForStreamKey(participant.id));
  const tmp2 = importDefault(10594)(MediaEngineContextTypes.STREAM, participant.user.id);
  if (null != stateFromStores) {
    const state = stateFromStores.state;
    if (ApplicationStreamStates.FAILED === state) {
      obj = { stream: stateFromStores, removeCloseButton: removeEmptyStateButton, removeSplashImage: removeEmptyStateImage, type: participant(10596).VideoEmptyTypes.STREAM_FAILED, style: StyleSheet.absoluteFill };
      return callback(importDefault(10596), obj);
    } else if (ApplicationStreamStates.ENDED === state) {
      obj = { stream: stateFromStores, removeCloseButton: removeEmptyStateButton, removeSplashImage: removeEmptyStateImage, type: participant(10596).VideoEmptyTypes.STREAM_ENDED, style: StyleSheet.absoluteFill };
      return callback(importDefault(10596), obj);
    } else {
      if (ApplicationStreamStates.RECONNECTING === state) {
        const obj1 = {};
        const intl = participant(1212).intl;
        obj1.title = intl.string(participant(1212).t["pdFFK+"]);
        let tmp8 = callback(StreamTextOverlay, obj1);
      } else {
        tmp8 = null;
        if (ApplicationStreamStates.PAUSED === state) {
          const obj2 = {};
          const intl2 = participant(1212).intl;
          obj2.title = intl2.string(participant(1212).t["5q17w5"]);
          const intl3 = participant(1212).intl;
          const obj3 = { username: importDefault(4319).getName(stateFromStores.guildId, stateFromStores.channelId, user) };
          obj2.subtext = intl3.formatToPlainString(participant(1212).t.meVVlb, obj3);
          tmp8 = callback(StreamTextOverlay, obj2);
          const obj8 = importDefault(4319);
        }
      }
      if (null != tmp2) {
        const obj4 = { stream: stateFromStores, removeCloseButton: removeEmptyStateButton, removeSplashImage: removeEmptyStateImage, type: participant(10596).VideoEmptyTypes.STREAM_FAILED, style: StyleSheet.absoluteFill, avError: tmp2 };
        return callback(importDefault(10596), obj4);
      } else {
        const obj5 = {};
        id = id.getId();
        const obj6 = {
          resizeMode,
          streamId,
          gestureEnabled,
          renderTag() {
                  return outer1_10(lib(outer1_2[18]), { style: lib.liveTag, participant });
                }
        };
        if (stateFromStores.ownerId === id) {
          let REMOTE_STREAM = participant(10606).VideoSpinnerContext.SELF_STREAM;
        } else {
          REMOTE_STREAM = participant(10606).VideoSpinnerContext.REMOTE_STREAM;
        }
        obj6.videoSpinnerContext = REMOTE_STREAM;
        obj6.userId = user.id;
        obj6.paused = stateFromStores.state === ApplicationStreamStates.PAUSED;
        const items1 = [callback(importDefault(10603), obj6), tmp8];
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
  let obj = { accessibilityRole: "button", onPress: onFullScreen, style: items, hitSlop: { top: 4, left: 4, right: 4, bottom: 4 } };
  items = [callback2().statusWrapper, style];
  obj = { source: importDefault(10618), size: require(1273) /* Button */.Icon.Sizes.SMALL, color: importDefault(689).unsafe_rawColors.WHITE };
  obj.children = callback(require(1273) /* Button */.Icon, obj);
  return callback(require(4660) /* PressableBase */.PressableOpacity, obj);
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/video_calls/native/components/StreamTile.tsx");

export default function StreamTile(participant) {
  let fullscreenIconStyle;
  let gestureEnabled;
  let removeEmptyStateButton;
  let removeEmptyStateImage;
  let streamId;
  let style;
  let user;
  participant = participant.participant;
  const onSingleTap = participant.onSingleTap;
  const onDoubleTap = participant.onDoubleTap;
  let CONTAIN = participant.resizeMode;
  if (CONTAIN === undefined) {
    CONTAIN = participant(onDoubleTap[17]).ResizeMode.CONTAIN;
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
  let obj = { gesture: onSingleTap(onDoubleTap[20])({ onSingleTapStart: callback, onDoubleTapStart: callback1 }) };
  obj = { style: items2 };
  items2 = [tmp3.container, style];
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
  return callback(participant(onDoubleTap[21]).GestureDetector, obj);
};
export { StreamTextOverlay };
