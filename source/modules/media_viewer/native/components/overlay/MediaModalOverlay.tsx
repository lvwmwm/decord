// Module ID: 12110
// Function ID: 93313
// Name: OverlayMuteButton
// Dependencies: []
// Exports: default

// Module 12110 (OverlayMuteButton)
function OverlayMuteButton(arg0) {
  let isMuted;
  let onToggleMute;
  ({ isMuted, onToggleMute } = arg0);
  let obj = { <string:1413519603>: null, <string:1189478959>: null };
  obj = { accessibilityRole: "button" };
  const tmp = callback3();
  const tmp2 = closure_7;
  const tmp3 = closure_7;
  const tmp4 = importDefault;
  const intl = arg1(dependencyMap[8]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[8]).t.w4m945);
  if (isMuted) {
    let tmp7 = tmp6[9];
  } else {
    tmp7 = tmp6[10];
  }
  obj.source = tmp4(tmp7);
  obj.color = importDefault(dependencyMap[5]).unsafe_rawColors.WHITE;
  obj.onPress = onToggleMute;
  ({ overlayButton: obj2.style, overlayButtonIcon: obj2.iconStyle } = tmp);
  obj.children = tmp3(importDefault(dependencyMap[7]), obj);
  return tmp2(arg1(dependencyMap[6]).SafeAreaPaddingView, obj);
}
function OverlayObscureToggleButton(arg0) {
  let onToggleObscure;
  let spoilerActive;
  ({ spoilerActive, onToggleObscure } = arg0);
  let obj = { <string:1413519603>: null, <string:1189478959>: null };
  obj = { accessibilityRole: "button" };
  const tmp = callback3();
  const tmp2 = closure_7;
  const tmp3 = closure_7;
  const tmp4 = importDefault;
  const intl = arg1(dependencyMap[8]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[8]).t.UIsxUw);
  if (spoilerActive) {
    let tmp7 = tmp6[11];
  } else {
    tmp7 = tmp6[12];
  }
  obj.source = tmp4(tmp7);
  obj.color = importDefault(dependencyMap[5]).unsafe_rawColors.WHITE;
  obj.onPress = onToggleObscure;
  ({ overlayButton: obj2.style, overlayButtonIcon: obj2.iconStyle } = tmp);
  obj.children = tmp3(importDefault(dependencyMap[7]), obj);
  return tmp2(arg1(dependencyMap[6]).SafeAreaPaddingView, obj);
}
function MediaModalOverlay(getVideoControls) {
  let index;
  let source;
  ({ source, index } = getVideoControls);
  const arg1 = index;
  const videoControls = getVideoControls.getVideoControls(index, source);
  const importDefault = videoControls;
  let obj = arg1(dependencyMap[24]);
  const items = [index];
  const items1 = [videoControls];
  const callback = importAllResult.useCallback(() => index(closure_2[25]).toggleSpoiler(index), items);
  const effect = importAllResult.useEffect(() => {
    const result = index(closure_2[22]).setVideoStateControls(videoControls);
  }, items1);
  obj = {};
  const merged = Object.assign(getVideoControls);
  obj["slider"] = importDefault(dependencyMap[22])(index, source, videoControls);
  obj["source"] = source;
  const obscure = source.obscure;
  obj["obscure"] = null != obscure && obscure;
  obj["spoilerActive"] = callback(obj.useMediaItemSpoilerState(index), 1)[0];
  obj["toggleObscure"] = callback;
  return closure_7(closure_11, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
const StyleSheet = tmp2.StyleSheet;
const View = tmp2.View;
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = arg1(dependencyMap[3]));
let obj1 = arg1(dependencyMap[4]);
let obj = {};
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj["top"] = undefined;
obj["backgroundColor"] = "transparent";
obj.portraitFooterButtons = obj;
obj1 = { paddingBottom: importDefault(dependencyMap[5]).space.PX_8 };
obj.invisibleFooter = obj1;
const obj2 = { "Null": "bbaa1714f228607ce548d318f0e28f01", "Null": "ic_swipe_reply_24px", "Null": "png", "Null": true, "Null": "/assets/design/components/Icon/native/redesign/generated/images", gap: importDefault(dependencyMap[5]).space.PX_4 };
obj.overlayIcons = obj2;
obj.overlayButtonIcon = { "Null": 0, "Null": -1048576 };
obj.overlayButton = { 9223372036854775807: false, 9223372036854775807: false, 0: false, 9223372036854775807: false };
let closure_10 = obj1.createStyles(obj);
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
  let obj = arg1(dependencyMap[13]);
  const overlayLayoutDriver = obj.useOverlayLayoutDriver();
  let obj1 = arg1(dependencyMap[13]);
  const footerLayoutAnimation = obj1.useFooterLayoutAnimation(overlayLayoutDriver);
  [tmp5, tmp6] = callback(importAllResult.useState(false), 2);
  let obj2 = arg1(dependencyMap[14]);
  const mediaPlayerMutedStore = obj2.useMediaPlayerMutedStore((isMuted) => isMuted.isMuted);
  if (null != slider) {
    obj = { "Bool(false)": "Small", "Bool(false)": "sm", "Bool(false)": "Placeholder" };
    obj = { paddingTop: 8 };
    obj.style = obj;
    let obj5 = arg1(dependencyMap[15]);
    let isIOSResult = obj5.isIOS();
    if (isIOSResult) {
      obj1 = { blurTheme: "dark", style: StyleSheet.absoluteFill };
      isIOSResult = callback2(importDefault(dependencyMap[16]), obj1);
    }
    const items = [isIOSResult, slider, ];
    let tmp17 = null;
    if (syncer.sources.length > 1) {
      obj2 = { syncer };
      tmp17 = callback2(importDefault(dependencyMap[17]), obj2);
    }
    items[2] = tmp17;
    obj.children = items;
    let tmp9Result = closure_8(arg1(dependencyMap[6]).SafeAreaPaddingView, obj);
    const tmp9 = closure_8;
  } else {
    tmp9Result = null;
  }
  let obj8 = arg1(dependencyMap[18]);
  const obj3 = {};
  const items1 = [callback2(arg1(dependencyMap[19]).MediaModalOverlayHeader, { animationDriver: overlayLayoutDriver, disableDownload, disableMediaOverlayButton, source, shareable, contextName, contextIcon, onClose, channelId: source.channelId }), ];
  obj5 = { style: items2 };
  const items2 = [tmp.portraitFooterButtons, footerLayoutAnimation];
  let tmp23 = !tmp5;
  if (tmp23) {
    const obj6 = { description: source.description };
    tmp23 = callback2(importDefault(dependencyMap[21]), obj6);
  }
  const items3 = [tmp23, , ];
  if (null != slider) {
    const obj7 = { style: tmp.overlayIcons };
    let tmp30 = null != slider;
    if (tmp30) {
      obj8 = { isMuted: mediaPlayerMutedStore, onToggleMute: arg1(dependencyMap[22]).toggleMuted };
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
    tmp9Result = callback2(arg1(dependencyMap[6]).SafeAreaPaddingView, obj10);
  } else if (obj8.useMediaViewerDimensions().height >= 600) {
    const obj11 = { sliderElement: slider, syncer };
    ({ guildId: obj17.guildId, channelId: obj17.channelId, messageId: obj17.messageId } = source);
    obj11.onClose = onClose;
    obj11.onFullViewToggled = tmp6;
    obj11.overlayEnabled = overlayEnabled;
    tmp9Result = callback2(arg1(dependencyMap[23]).MediaModalOverlayFooter, obj11);
  }
  items3[2] = tmp9Result;
  obj5.children = items3;
  items1[1] = closure_8(importDefault(dependencyMap[20]).View, obj5);
  obj3.children = items1;
  return closure_8(closure_9, obj3);
});
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[27]).fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlay.tsx");

export default function MediaModalOverlayGuard(onIndexChange) {
  onIndexChange = onIndexChange.onIndexChange;
  const arg1 = onIndexChange;
  let tmp = null;
  let obj = Object.create(null);
  obj.onIndexChange = 0;
  const merged = Object.assign(onIndexChange, obj);
  obj = arg1(dependencyMap[26]);
  const tmp4 = callback(obj.useSelectedMediaSource(merged.syncer), 2);
  const first = tmp4[0];
  const importDefault = first;
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
