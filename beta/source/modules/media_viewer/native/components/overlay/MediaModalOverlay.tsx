// Module ID: 12514
// Function ID: 12515
// Name: MediaModalOverlay
// Dependencies: [32, 19, 17, 21, 4836, 576, 6544, 9203, 1115, 12515, 9471, 12516, 12517, 12518, 7711, 10732, 1364, 5269, 12519, 7741, 12521, 4566, 12525, 7710, 12526, 12527, 12520, 7708, 7713, 2]
// Exports: default

// Module 12514 (MediaModalOverlay)
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4566 */;
import VisualEffectViewDefault from "VisualEffectView" /* 5269 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6544 */;
import useMediaViewerSources from "useMediaViewerSources" /* 7708 */;
import useVideoControls from "useVideoControls" /* 7710 */;
import MediaPlayerMuteManager from "MediaPlayerMuteManager" /* 7711 */;
import MediaSourceUtil from "MediaSourceUtil" /* 7713 */;
import MediaViewerDimensionsContext from "MediaViewerDimensionsContext" /* 7741 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9203 */;
import useMediaModalFooterAction from "useMediaModalFooterAction" /* 10732 */;
import useOverlayLayoutDriver from "useOverlayLayoutDriver" /* 12518 */;
import MediaViewerThumbnailsDefault from "MediaViewerThumbnails" /* 12519 */;
import MediaModalOverlayHeader from "MediaModalOverlayHeader" /* 12521 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let rect;
let tmp23;
const MediaModalOverlayAltTextDefault = tmp23(12525);
function OverlayMuteButton(arg0) {
  let intl;
  let isMuted;
  let onToggleMute;
  ({ isMuted, onToggleMute } = arg0);
  const tmp = closure_10();
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  const obj = { accessibilityRole: "button", accessibilityLabel: intl.string(intl2.t.w4m945), source: importDefault(isMuted ? 12515 : 9471), color: nativeDefault.unsafe_rawColors.WHITE, onPress: onToggleMute, style: null, iconStyle: null };
  const tmp5 = TouchableHitBoxDefault;
  intl = intl2.intl;
  const rect = { left: true, right: true, children: metroImportDefault(tmp5, obj) };
  ({ overlayButton: obj.style, overlayButtonIcon: obj.iconStyle } = tmp);
  return metroImportDefault(SafeAreaPaddingView, rect);
}
function OverlayObscureToggleButton(arg0) {
  let intl;
  let onToggleObscure;
  let spoilerActive;
  ({ spoilerActive, onToggleObscure } = arg0);
  const tmp = closure_10();
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  const obj = { accessibilityRole: "button", accessibilityLabel: intl.string(intl2.t.UIsxUw), source: importDefault(spoilerActive ? 12516 : 12517), color: nativeDefault.unsafe_rawColors.WHITE, onPress: onToggleObscure, style: null, iconStyle: null };
  const tmp5 = TouchableHitBoxDefault;
  intl = intl2.intl;
  const rect = { left: true, right: true, children: metroImportDefault(tmp5, obj) };
  ({ overlayButton: obj.style, overlayButtonIcon: obj.iconStyle } = tmp);
  return metroImportDefault(SafeAreaPaddingView, rect);
}
function MediaModalOverlay(getVideoControls) {
  let flag;
  let index;
  let source;
  ({ source, index } = getVideoControls);
  const videoControls = getVideoControls.getVideoControls(index, source);
  const tmp2 = videoControls(7710)(index, source, videoControls);
  let obj = index(12520);
  const items = [index];
  const first = _slicedToArray(obj.useMediaItemSpoilerState(index), 1)[0];
  const items1 = [videoControls];
  const callback = react.useCallback(() => {
    const obj = useMediaViewerSources;
    return obj.toggleSpoiler(index);
  }, items);
  const effect = react.useEffect(() => {
    const obj = useVideoControls;
    const result = obj.setVideoStateControls(videoControls);
  }, items1);
  const obj2 = { slider: tmp2, source, obscure: flag, spoilerActive: first, toggleObscure: callback };
  const merged = Object.assign(getVideoControls);
  flag = source.obscure;
  const tmp6 = closure_7;
  const tmp7 = closure_13;
  if (flag == null) {
    flag = false;
  }
  return tmp6(tmp7, obj2);
}
const StyleSheet = react_native.StyleSheet;
let View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { portraitFooterButtons: obj2, invisibleFooter: obj3, overlayIcons: rect, overlayButtonIcon: { width: 20, height: 20 }, overlayButton: { width: 32, height: 32, backgroundColor: "rgba(0, 0, 0, 0.7)", borderRadius: 16 } };
obj2 = { top: undefined, backgroundColor: "transparent" };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { paddingBottom: nativeDefault.space.PX_8 };
rect = { position: "absolute", top: -40, right: 8, display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_4 };
let closure_10 = createStyles(obj);
let closure_13 = react.memo((arg0) => {
  let contextIcon;
  let contextName;
  let disableDownload;
  let disableMediaOverlayButton;
  let disableMediaOverlayFooter;
  let items;
  let items2;
  let items3;
  let items4;
  let obscure;
  let onClose;
  let overlayEnabled;
  let shareable;
  let slider;
  let source;
  let spoilerActive;
  let syncer;
  let tmp20Result;
  let tmp22Result5;
  let tmp7;
  let tmp8;
  let toggleObscure;
  ({ slider, onClose, syncer, source, obscure } = arg0);
  ({ overlayEnabled, disableDownload, disableMediaOverlayButton, disableMediaOverlayFooter, shareable, contextName, contextIcon, spoilerActive, toggleObscure } = arg0);
  const tmp = closure_10();
  const obj = useOverlayLayoutDriver;
  const overlayLayoutDriver = obj.useOverlayLayoutDriver();
  const obj2 = useOverlayLayoutDriver;
  const footerLayoutAnimation = obj2.useFooterLayoutAnimation(overlayLayoutDriver);
  [tmp7, tmp8] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const obj3 = MediaPlayerMuteManager;
  const mediaPlayerMutedStore = obj3.useMediaPlayerMutedStore((isMuted) => isMuted.isMuted);
  const obj4 = useMediaModalFooterAction;
  const mediaModalFooterActionStore = obj4.useMediaModalFooterActionStore((footerAction) => footerAction.footerAction);
  if (null != slider) {
    const rect = { bottom: true, left: true, right: true, style: { paddingTop: 8 }, children: items };
    const SafeAreaPaddingView = tmp2(6544).SafeAreaPaddingView;
    const tmp2Result = PlatformUtils;
    let isIOSResult = tmp2Result.isIOS();
    const tmp12 = metroImportAll;
    if (isIOSResult) {
      const obj5 = { blurTheme: "dark", style: StyleSheet.absoluteFill };
      isIOSResult = metroImportDefault(VisualEffectViewDefault, obj5);
    }
    items = [isIOSResult, slider, ];
    let tmp17 = null;
    if (syncer.sources.length > 1) {
      const obj6 = { syncer };
      tmp17 = metroImportDefault(MediaViewerThumbnailsDefault, obj6);
    }
    items[2] = tmp17;
    tmp22Result5 = tmp12(SafeAreaPaddingView, rect);
  } else {
    tmp22Result5 = null;
  }
  const tmp2Result2 = MediaViewerDimensionsContext;
  const height = tmp2Result2.useMediaViewerDimensions().height;
  const items1 = [, ];
  const obj7 = { animationDriver: overlayLayoutDriver, disableDownload, disableMediaOverlayButton, source, shareable, contextName, contextIcon, onClose, channelId: source.channelId };
  items1[0] = metroImportDefault(MediaModalOverlayHeader.MediaModalOverlayHeader, obj7);
  const obj8 = { style: items2, children: items3 };
  items2 = [tmp.portraitFooterButtons, footerLayoutAnimation];
  let tmp22Result = !tmp7;
  View = ReanimatedRexportDefault.View;
  const tmp21 = React4;
  if (!tmp7) {
    const obj9 = { description: source.description };
    tmp22Result = tmp22(MediaModalOverlayAltTextDefault, obj9);
  }
  items3 = [tmp22Result, , ];
  if (null != slider) {
    let tmp22Result3 = null != slider;
    const obj10 = { style: tmp.overlayIcons, children: items4 };
    const tmp26 = View;
    if (tmp22Result3) {
      const obj11 = { isMuted: mediaPlayerMutedStore, onToggleMute: useVideoControls.toggleMuted };
      tmp22Result3 = tmp22(OverlayMuteButton, obj11);
    }
    items4 = [tmp22Result3, ];
    let tmp22Result4 = null;
    if (obscure) {
      const obj12 = { spoilerActive, onToggleObscure: toggleObscure };
      tmp22Result4 = tmp22(OverlayObscureToggleButton, obj12);
    }
    items4[1] = tmp22Result4;
    tmp20Result = tmp20(tmp26, obj10);
  } else {
    tmp20Result = null;
  }
  items3[1] = tmp20Result;
  if (null != mediaModalFooterActionStore) {
    const obj13 = { footerAction: mediaModalFooterActionStore, sliderElement: slider, syncer };
    tmp22Result5 = tmp22(tmp2(12526).MediaModalOverlayFooterAction, obj13);
  } else if (disableMediaOverlayFooter) {
    const obj14 = { bottom: true, style: tmp.invisibleFooter };
    tmp22Result5 = tmp22(tmp2(6544).SafeAreaPaddingView, obj14);
  } else if (height >= 600) {
    const obj15 = { sliderElement: slider, syncer, guildId: null, channelId: null, messageId: null, onClose, onFullViewToggled: tmp8, overlayEnabled };
    ({ guildId: obj16.guildId, channelId: obj16.channelId, messageId: obj16.messageId } = source);
    tmp22Result5 = tmp22(tmp2(12527).MediaModalOverlayFooter, obj15);
  }
  const obj17 = { children: items1 };
  items3[2] = tmp22Result5;
  items1[1] = metroImportAll(View, obj8);
  return metroImportAll(tmp21, obj17);
});
let result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlay.tsx");

export default function MediaModalOverlayGuard(onIndexChange) {
  onIndexChange = onIndexChange.onIndexChange;
  let tmp = null;
  const merged = Object.assign(onIndexChange, Object.assign({ onIndexChange: 0 }));
  const syncer = merged.syncer;
  const obj = MediaSourceUtil;
  const tmp3 = _slicedToArray(obj.useSelectedMediaSource(syncer), 2);
  const first = tmp3[0];
  const items = [first, onIndexChange];
  const effect = react.useEffect(() => {
    if (onIndexChange != null) {
      tmp(first);
    }
  }, items);
  if (null != tmp3[1]) {
    const obj2 = { source: tmp3[1], index: first };
    const merged1 = Object.assign(merged);
    tmp = metroImportDefault(MediaModalOverlay, obj2);
  }
  return tmp;
};
