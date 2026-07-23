// Module ID: 12228
// Function ID: 95490
// Name: OverlayMuteButton
// Dependencies: [57, 31, 27, 33, 4130, 689, 5121, 8474, 1212, 12229, 10741, 12230, 12231, 12232, 8283, 477, 4533, 12233, 8296, 12235, 3991, 12240, 8282, 12241, 12234, 8275, 8276, 2]
// Exports: default

// Module 12228 (OverlayMuteButton)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "set";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function OverlayMuteButton(arg0) {
  let isMuted;
  let onToggleMute;
  ({ isMuted, onToggleMute } = arg0);
  let obj = { left: true, right: true };
  obj = { accessibilityRole: "button" };
  const tmp = callback3();
  const tmp2 = closure_7;
  const tmp3 = closure_7;
  const tmp4 = importDefault;
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.w4m945);
  if (isMuted) {
    let tmp7 = 12229;
  } else {
    tmp7 = 10741;
  }
  obj.source = tmp4(tmp7);
  obj.color = importDefault(689).unsafe_rawColors.WHITE;
  obj.onPress = onToggleMute;
  ({ overlayButton: obj2.style, overlayButtonIcon: obj2.iconStyle } = tmp);
  obj.children = tmp3(importDefault(8474), obj);
  return tmp2(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj);
}
function OverlayObscureToggleButton(arg0) {
  let onToggleObscure;
  let spoilerActive;
  ({ spoilerActive, onToggleObscure } = arg0);
  let obj = { left: true, right: true };
  obj = { accessibilityRole: "button" };
  const tmp = callback3();
  const tmp2 = closure_7;
  const tmp3 = closure_7;
  const tmp4 = importDefault;
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.UIsxUw);
  if (spoilerActive) {
    let tmp7 = 12230;
  } else {
    tmp7 = 12231;
  }
  obj.source = tmp4(tmp7);
  obj.color = importDefault(689).unsafe_rawColors.WHITE;
  obj.onPress = onToggleObscure;
  ({ overlayButton: obj2.style, overlayButtonIcon: obj2.iconStyle } = tmp);
  obj.children = tmp3(importDefault(8474), obj);
  return tmp2(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj);
}
function MediaModalOverlay(getVideoControls) {
  let index;
  let source;
  ({ source, index } = getVideoControls);
  const videoControls = getVideoControls.getVideoControls(index, source);
  let obj = index(12234);
  const items = [index];
  const items1 = [videoControls];
  const callback = importAllResult.useCallback(() => index(outer1_2[25]).toggleSpoiler(index), items);
  const effect = importAllResult.useEffect(() => {
    const result = index(outer1_2[22]).setVideoStateControls(videoControls);
  }, items1);
  obj = {};
  const merged = Object.assign(getVideoControls);
  obj["slider"] = videoControls(8282)(index, source, videoControls);
  obj["source"] = source;
  const obscure = source.obscure;
  obj["obscure"] = null != obscure && obscure;
  obj["spoilerActive"] = callback(obj.useMediaItemSpoilerState(index), 1)[0];
  obj["toggleObscure"] = callback;
  return closure_7(closure_11, obj);
}
const StyleSheet = get_ActivityIndicator.StyleSheet;
const View = get_ActivityIndicator.View;
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let obj = {};
obj = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj["top"] = undefined;
obj["backgroundColor"] = "transparent";
obj.portraitFooterButtons = obj;
_createForOfIteratorHelperLoose = { paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.invisibleFooter = _createForOfIteratorHelperLoose;
let obj2 = { position: "absolute", top: -40, right: 8, display: "flex", flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj.overlayIcons = obj2;
obj.overlayButtonIcon = { width: 20, height: 20 };
obj.overlayButton = { width: 32, height: 32, backgroundColor: "rgba(0, 0, 0, 0.7)", borderRadius: 16 };
let closure_10 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_11 = importAllResult.memo((arg0) => {
  let contextIcon;
  let contextName;
  let disableDownload;
  let disableMediaOverlayButton;
  let disableMediaOverlayFooter;
  let obscure;
  let onClose;
  let overlayEnabled;
  let shareable;
  let slider;
  let source;
  let spoilerActive;
  let syncer;
  let tmp5;
  let tmp6;
  let toggleObscure;
  ({ slider, onClose, syncer, source, obscure } = arg0);
  ({ overlayEnabled, disableDownload, disableMediaOverlayButton, disableMediaOverlayFooter, shareable, contextName, contextIcon, spoilerActive, toggleObscure } = arg0);
  const tmp = callback3();
  let obj = require(12232) /* useOverlayLayoutDriver */;
  const overlayLayoutDriver = obj.useOverlayLayoutDriver();
  let obj1 = require(12232) /* useOverlayLayoutDriver */;
  const footerLayoutAnimation = obj1.useFooterLayoutAnimation(overlayLayoutDriver);
  [tmp5, tmp6] = callback(importAllResult.useState(false), 2);
  let obj2 = require(8283) /* nativeEventEmitter */;
  const mediaPlayerMutedStore = obj2.useMediaPlayerMutedStore((isMuted) => isMuted.isMuted);
  if (null != slider) {
    obj = { bottom: true, left: true, right: true };
    obj = { paddingTop: 8 };
    obj.style = obj;
    let obj5 = require(477) /* set */;
    let isIOSResult = obj5.isIOS();
    if (isIOSResult) {
      obj1 = { blurTheme: "dark", style: StyleSheet.absoluteFill };
      isIOSResult = callback2(importDefault(4533), obj1);
    }
    const items = [isIOSResult, slider, ];
    let tmp17 = null;
    if (syncer.sources.length > 1) {
      obj2 = { syncer };
      tmp17 = callback2(importDefault(12233), obj2);
    }
    items[2] = tmp17;
    obj.children = items;
    let tmp9Result = closure_8(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj);
    const tmp9 = closure_8;
  } else {
    tmp9Result = null;
  }
  let obj8 = require(8296) /* MediaViewerDimensionsProvider */;
  const obj3 = {};
  const items1 = [callback2(require(12235) /* MediaModalOverlayHeader */.MediaModalOverlayHeader, { animationDriver: overlayLayoutDriver, disableDownload, disableMediaOverlayButton, source, shareable, contextName, contextIcon, onClose, channelId: source.channelId }), ];
  obj5 = { style: items2 };
  items2 = [tmp.portraitFooterButtons, footerLayoutAnimation];
  let tmp23 = !tmp5;
  if (tmp23) {
    const obj6 = { description: source.description };
    tmp23 = callback2(importDefault(12240), obj6);
  }
  const items3 = [tmp23, , ];
  if (null != slider) {
    const obj7 = { style: tmp.overlayIcons };
    let tmp30 = null != slider;
    if (tmp30) {
      obj8 = { isMuted: mediaPlayerMutedStore, onToggleMute: require(8282) /* useVideoControls */.toggleMuted };
      tmp30 = callback2(OverlayMuteButton, obj8);
    }
    const items4 = [tmp30, ];
    let tmp35 = null;
    if (obscure) {
      const obj9 = { spoilerActive, onToggleObscure: toggleObscure };
      tmp35 = callback2(OverlayObscureToggleButton, obj9);
    }
    items4[1] = tmp35;
    obj7.children = items4;
    let tmp28Result = closure_8(View, obj7);
    const tmp28 = closure_8;
    const tmp29 = View;
  } else {
    tmp28Result = null;
  }
  items3[1] = tmp28Result;
  if (disableMediaOverlayFooter) {
    const obj10 = { bottom: true, style: tmp.invisibleFooter };
    tmp9Result = callback2(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj10);
  } else if (obj8.useMediaViewerDimensions().height >= 600) {
    const obj11 = { sliderElement: slider, syncer };
    ({ guildId: obj17.guildId, channelId: obj17.channelId, messageId: obj17.messageId } = source);
    obj11.onClose = onClose;
    obj11.onFullViewToggled = tmp6;
    obj11.overlayEnabled = overlayEnabled;
    tmp9Result = callback2(require(12241) /* clamp */.MediaModalOverlayFooter, obj11);
  }
  items3[2] = tmp9Result;
  obj5.children = items3;
  items1[1] = closure_8(importDefault(3991).View, obj5);
  obj3.children = items1;
  return closure_8(closure_9, obj3);
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlay.tsx");

export default function MediaModalOverlayGuard(onIndexChange) {
  onIndexChange = onIndexChange.onIndexChange;
  let tmp = null;
  let obj = Object.create(null);
  obj.onIndexChange = 0;
  const merged = Object.assign(onIndexChange, obj);
  obj = onIndexChange(8276);
  const tmp4 = callback(obj.useSelectedMediaSource(merged.syncer), 2);
  const first = tmp4[0];
  const items = [first, onIndexChange];
  const effect = importAllResult.useEffect(() => {
    if (null != onIndexChange) {
      onIndexChange(first);
    }
  }, items);
  if (null != tmp4[1]) {
    obj = {};
    const merged1 = Object.assign(merged);
    obj["source"] = tmp6;
    obj["index"] = first;
    tmp = callback2(MediaModalOverlay, obj);
  }
  return tmp;
};
