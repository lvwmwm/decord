// Module ID: 16876
// Function ID: 16877
// Name: BountyVideo
// Dependencies: [32, 19, 17, 16856, 21, 1377, 9675, 575, 5090, 5582, 671, 5009, 16877, 16878, 5591, 5249, 5252, 16866, 16879, 16891, 5712, 1114, 16892, 16894, 16896, 14450, 2]
// Exports: BountyVideo

// Module 16876 (BountyVideo)
import nativeDefault from "native" /* 575 */;
import timing from "timing" /* 5249 */;
import timingPresets from "timingPresets" /* 5252 */;
import LinearGradientDefault from "LinearGradient" /* 5582 */;
import AssetUtils from "AssetUtils" /* 9675 */;
import BountiesModalProgress from "BountiesModalProgress" /* 16877 */;
import pickBountyVideoRendition from "pickBountyVideoRendition" /* 16878 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import BountiesModalConstants from "BountiesModalConstants" /* 16856 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "utils/PlatformUtils" /* 1377 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import module_671_mod from "module_671" /* 671 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let set;

let c10;
let c9;
let closure_12;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
({ View: hasOwnProperty, StyleSheet: metroRequire, ActivityIndicator: metroImportDefault, Pressable: metroImportAll } = react_native);
({ getBountyVideoEndPeekClipHeight: c9, getBountyVideoEndPeekScale: c10 } = BountiesModalConstants);
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = 150;
}
let closure_15 = { top: 48, bottom: 16, left: 16, right: 16 };
const lg = nativeDefault.radii.lg;
const LinearGradient = ReanimatedRexport.createAnimatedComponent(LinearGradientDefault);
const start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
let module_671 = module_671_mod;
let items = [, ];
const importDefaultResult1Result = module_671(nativeDefault.unsafe_rawColors.PLUM_23);
const alphaResult = importDefaultResult1Result.alpha(0.4);
items[0] = alphaResult.hex();
module_671 = module_671_mod;
const importDefaultResult2Result = module_671(nativeDefault.unsafe_rawColors.PLUM_23);
const alphaResult1 = importDefaultResult2Result.alpha(0);
items[1] = alphaResult1.hex();
let closure_21 = createStyles.createStyles(() => {
  let obj2;
  let obj3;
  let obj4;
  let rect;
  let rect1;
  const obj = { videoContainer: obj2, leftRow: rect, progress: rect1, poster: obj3, scrimGradient: obj4 };
  obj2 = { overflow: "hidden", borderRadius: lg };
  const merged = Object.assign(metroRequire.absoluteFillObject);
  rect = { position: "absolute", top: nativeDefault.space.PX_8, left: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  rect1 = { position: "absolute", bottom: 0, height: BountiesModalProgress.PROGRESS_BAR_HEIGHT, left: lg, right: lg };
  obj3 = { backgroundColor: "#000000", justifyContent: "center", alignItems: "center" };
  const merged1 = Object.assign(metroRequire.absoluteFillObject);
  obj4 = { bottom: undefined, height: 70 };
  const merged2 = Object.assign(metroRequire.absoluteFillObject);
  return obj;
});
const __initData = { code: "function BountyVideoTsx1(){const{posterOpacity}=this.__closure;return{opacity:posterOpacity.get()};}" };
const __initData2 = { code: "function BountyVideoTsx2(){const{isScrollingInBoundsSharedValue,withTiming,isActive,timingStandard}=this.__closure;var _isScrollingInBoundsS;const isScrollingInBounds=((_isScrollingInBoundsS=isScrollingInBoundsSharedValue)===null||_isScrollingInBoundsS===void 0?void 0:_isScrollingInBoundsS.get())===true;return{opacity:withTiming(isActive&&!isScrollingInBounds?1:0,timingStandard)};}" };
const __initData3 = { code: "function BountyVideoTsx3(){const{videoEndPeekProgress,StyleSheet,getBountyVideoEndPeekScale,videoEndPeekTargetScale,getBountyVideoEndPeekClipHeight,width,height,VIDEO_CONTAINER_BORDER_RADIUS}=this.__closure;if(videoEndPeekProgress==null){return StyleSheet.absoluteFillObject;}const progress=videoEndPeekProgress.get();const scale=getBountyVideoEndPeekScale(progress,videoEndPeekTargetScale);const clipHeight=getBountyVideoEndPeekClipHeight(progress,width,height);const centerPivotCompensation=clipHeight*(1-scale)/2;return{position:'absolute',top:0,left:0,width:width,height:clipHeight,overflow:'hidden',borderRadius:VIDEO_CONTAINER_BORDER_RADIUS,transform:[{translateY:-centerPivotCompensation},{scale:scale}]};}" };
const __initData4 = { code: "function BountyVideoTsx4(){const{videoEndPeekProgress,StyleSheet,getBountyVideoEndPeekClipHeight,width,height}=this.__closure;if(videoEndPeekProgress==null){return StyleSheet.absoluteFillObject;}const progress=videoEndPeekProgress.get();const clipHeight=getBountyVideoEndPeekClipHeight(progress,width,height);return{width:width,height:height,transform:[{translateY:(clipHeight-height)/2}]};}" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountyVideo.tsx");

export function BountyVideo(handleVideoProgress) {
  let View2;
  let _undefined;
  let balanceWidgetPillResetKey;
  let bounty;
  let c7;
  let closure_9;
  let handleVideoEnd;
  let handleVideoPaused;
  let handleVideoResumed;
  let initialProgress;
  let intl;
  let isActive;
  let isCompleted;
  let isCtaVisible;
  let isEndCardVisible;
  let isProgressBarVisible;
  let isScrollIndicatorEnabled;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items7;
  let items8;
  let items9;
  let normalizedProgress;
  let obj12;
  let obj19;
  let obj6;
  let obj9;
  let onBuffer;
  let onLoadStart;
  let onPlayerStateChange;
  let onVideoTracks;
  let orbsBalance;
  let playerRef;
  let prop3;
  let prop4;
  let prop5;
  let ref;
  let renderEndCard;
  let repeat;
  let rewardRemainingSeconds;
  let rewardTotalSeconds;
  let shouldLoadHls;
  let sourceQuestContent;
  let tmp11Result2;
  let tmp3;
  let tmp37Result4;
  let tmp43;
  ({ bounty, isCtaVisible, isEndCardVisible, isScrollIndicatorEnabled } = handleVideoProgress);
  ({ sourceQuestContent, isCompleted } = handleVideoProgress);
  if (isScrollIndicatorEnabled === undefined) {
    isScrollIndicatorEnabled = false;
  }
  handleVideoProgress = handleVideoProgress.handleVideoProgress;
  const handleVideoError = handleVideoProgress.handleVideoError;
  const onFirstFrame = handleVideoProgress.onFirstFrame;
  ({ isActive, isProgressBarVisible, orbsBalance, handleVideoEnd, handleVideoPaused, handleVideoResumed, onLoadStart, onBuffer, onVideoTracks, rewardRemainingSeconds, rewardTotalSeconds, normalizedProgress, initialProgress, repeat } = handleVideoProgress);
  if (isActive === undefined) {
    isActive = false;
  }
  let flag = handleVideoProgress.isRecapPageRevealed;
  if (flag === undefined) {
    flag = false;
  }
  const isScrollingInBoundsSharedValue = handleVideoProgress.isScrollingInBoundsSharedValue;
  ({ renderEndCard, shouldLoadHls, playerRef, onPlayerStateChange, balanceWidgetPillResetKey } = handleVideoProgress);
  if (shouldLoadHls === undefined) {
    shouldLoadHls = true;
  }
  const width = handleVideoProgress.width;
  const height = handleVideoProgress.height;
  let flag2 = handleVideoProgress.softDownloadCapsEnabled;
  if (flag2 === undefined) {
    flag2 = false;
  }
  c7 = undefined;
  let first;
  getBountyVideoEndPeekClipHeight = undefined;
  getBountyVideoEndPeekScale = undefined;
  let sharedValue;
  let videoHls;
  let videoRenditions;
  let memo;
  let contentInsets;
  let videoEndPeekProgress;
  num = undefined;
  let tmp = closure_21();
  if (flag2) {
    flag2 = !isActive;
  }
  let obj = isScrollingInBoundsSharedValue;
  let tmp2 = isActive(isScrollingInBoundsSharedValue.useState(false), 2);
  [tmp3, c7] = tmp2;
  const tmp4 = isActive(isScrollingInBoundsSharedValue.useState(false), 2);
  first = tmp4[0];
  getBountyVideoEndPeekClipHeight = tmp6;
  getBountyVideoEndPeekScale = isScrollingInBoundsSharedValue.useRef(null);
  let obj2 = handleVideoProgress(onFirstFrame[8]);
  sharedValue = obj2.useSharedValue(1);
  videoHls = bounty.videoHls;
  videoRenditions = bounty.videoRenditions;
  items = [videoHls, videoRenditions];
  memo = isScrollingInBoundsSharedValue.useMemo(() => {
    let url = videoHls;
    const obj = pickBountyVideoRendition;
    const obj2 = { videoHls, videoRenditions };
    const result = obj.pickBountyVideoRenditionWithFallback(obj2, pickBountyVideoRendition.BOUNTY_MOBILE_MODAL_RENDITION_PICK);
    if (null != result) {
      url = result.url;
    }
    return url;
  }, items);
  const items1 = [memo, width, height];
  const memo1 = isScrollingInBoundsSharedValue.useMemo(() => {
    size = { assetUrl: memo, width, height };
    const obj = AssetUtils;
    return obj.getScaledFirstFrameImageUrl(size);
  }, items1);
  const obj4 = handleVideoProgress(onFirstFrame[14]);
  const token = obj4.useToken(handleVideoError(onFirstFrame[7]).colors.TEXT_DEFAULT);
  const combined = "" + bounty.id + ":" + shouldLoadHls + ":" + memo;
  const tmp14 = isActive(isScrollingInBoundsSharedValue.useState(combined), 2);
  if (tmp14[0] !== combined) {
    tmp14[1](combined);
    tmp4[1](false);
    let result = sharedValue.set(1);
  }
  const items2 = [combined];
  const effect = obj.useEffect(() => () => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
  }, items2);
  const items3 = [first, sharedValue];
  const effect1 = obj.useEffect(() => {
    const tmp = first;
    if (tmp) {
      set = sharedValue.set;
      const obj = timing;
      const result = set(obj.withTiming(0, timingPresets.timingFast));
    }
  }, items3);
  contentInsets = obj.useCallback(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
    closure_9(true);
  }, []);
  const items4 = [onFirstFrame];
  const items5 = [contentInsets, handleVideoError];
  const callback1 = obj.useCallback(() => {
    if (onFirstFrame != null) {
      tmp();
    }
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
    }
    ref.current = setTimeout(() => {
      closure_1_9(true);
      ref.current = null;
    }, num);
  }, items4);
  const items6 = [handleVideoProgress];
  const callback2 = obj.useCallback((arg0) => {
    callback();
    if (handleVideoError != null) {
      tmp2(arg0);
    }
  }, items5);
  const callback3 = obj.useCallback((currentTime) => {
    if (currentTime.currentTime > 0) {
      _undefined(true);
    }
    handleVideoProgress(currentTime);
  }, items6);
  const tmp7Result = handleVideoProgress(onFirstFrame[8]);
  class Te {
    constructor() {
      const obj = { opacity: sharedValue.get() };
      return obj;
    }
  }
  Te.__closure = { posterOpacity: sharedValue };
  Te.__workletHash = 4975136521719;
  Te.__initData = __initData;
  const animatedStyle = tmp7Result.useAnimatedStyle(Te);
  const tmp7Result5 = handleVideoProgress(onFirstFrame[8]);
  class Ae {
    constructor() {
      let value;
      const obj = isScrollingInBoundsSharedValue;
      if (isScrollingInBoundsSharedValue != null) {
        value = obj.get();
      }
      num = 0;
      const withTiming = timing.withTiming;
      timing;
      if (isActive) {
        num = 0;
        if (true !== value) {
          num = 1;
        }
      }
      const obj2 = { opacity: withTiming(num, timingPresets.timingStandard) };
      return obj2;
    }
  }
  let obj3 = { isScrollingInBoundsSharedValue, withTiming: tmp7(tmp8[15]).withTiming, isActive, timingStandard: tmp7(tmp8[16]).timingStandard };
  Ae.__closure = obj3;
  Ae.__workletHash = 12676706441349;
  Ae.__initData = __initData2;
  const animatedStyle1 = tmp7Result5.useAnimatedStyle(Ae);
  const tmp7Result6 = handleVideoProgress(onFirstFrame[17]);
  const bountyVideoEndAppStoreContext = tmp7Result6.useBountyVideoEndAppStoreContext();
  let tmp27;
  if (isActive) {
    videoEndPeekProgress = undefined;
    if (bountyVideoEndAppStoreContext != null) {
      videoEndPeekProgress = bountyVideoEndAppStoreContext.videoEndPeekProgress;
    }
    tmp27 = videoEndPeekProgress;
  }
  videoEndPeekProgress = tmp27;
  num = undefined;
  if (bountyVideoEndAppStoreContext != null) {
    num = bountyVideoEndAppStoreContext.videoEndPeekTargetScale;
  }
  if (num == null) {
    num = 1;
  }
  const tmp7Result7 = handleVideoProgress(onFirstFrame[8]);
  class Ie {
    constructor() {
      const obj = videoEndPeekProgress;
      if (null == videoEndPeekProgress) {
        return metroRequire.absoluteFillObject;
      } else {
        const value = obj.get();
        const tmp5 = ref(value, num);
        const tmp9 = c9(value, width, height);
        size = { position: "absolute", top: 0, left: 0, width, height: tmp9, overflow: "hidden", borderRadius: lg, transform: items };
        items = [{ translateY: -tmp9 * (1 - tmp5) / 2 }, ];
        const obj2 = { translateY: -tmp9 * (1 - tmp5) / 2 };
        const obj3 = { scale: tmp5 };
        items[1] = obj3;
        return size;
      }
    }
  }
  size = { videoEndPeekProgress: tmp27, StyleSheet: height, getBountyVideoEndPeekScale, videoEndPeekTargetScale: num, getBountyVideoEndPeekClipHeight, width, height, VIDEO_CONTAINER_BORDER_RADIUS: videoEndPeekProgress };
  Ie.__closure = size;
  Ie.__workletHash = 15166247334410;
  Ie.__initData = __initData3;
  const animatedStyle2 = tmp7Result7.useAnimatedStyle(Ie);
  const tmp7Result8 = handleVideoProgress(onFirstFrame[8]);
  class Fe {
    constructor() {
      const obj = videoEndPeekProgress;
      if (null == videoEndPeekProgress) {
        return metroRequire.absoluteFillObject;
      } else {
        size = { width, height, transform: items };
        items = [{ translateY: (c9(obj.get(), width, height) - height) / 2 }];
        const obj2 = { translateY: (c9(obj.get(), width, height) - height) / 2 };
        return size;
      }
    }
  }
  Fe.__closure = { videoEndPeekProgress: tmp27, StyleSheet: height, getBountyVideoEndPeekClipHeight, width, height };
  Fe.__workletHash = 2490405119892;
  Fe.__initData = __initData4;
  let prop1 = null;
  const animatedStyle3 = tmp7Result8.useAnimatedStyle(Fe);
  if (true === isActive) {
    let prop;
    if (bountyVideoEndAppStoreContext != null) {
      prop = bountyVideoEndAppStoreContext.isVideoEndAppStoreOverlayVisible;
    }
    prop1 = null;
    if (true === prop) {
      prop1 = bountyVideoEndAppStoreContext.dismissVideoEndAppStoreOverlay;
    }
  }
  if (isScrollIndicatorEnabled) {
    let prop2;
    if (bountyVideoEndAppStoreContext != null) {
      prop2 = bountyVideoEndAppStoreContext.isVideoEndAppStoreOverlayVisible;
    }
    isScrollIndicatorEnabled = true !== prop2;
  }
  const obj5 = { style: animatedStyle2, children: videoHls(View2, obj6) };
  const View = tmp11(tmp8[8]).View;
  let tmp37Result = null;
  obj6 = { style: animatedStyle3, children: items13 };
  const obj7 = { style: tmp.videoContainer, children: items7 };
  View2 = tmp11(tmp8[8]).View;
  const tmp36 = videoRenditions;
  const tmp38 = width;
  if (shouldLoadHls) {
    const obj8 = { ref: playerRef, source: obj9, automaticallyWaitsToMinimizeStalling: false, maxBitRate: prop3, bufferConfig: prop4, preferredForwardBufferDuration: prop5, initialProgress, isFullscreen: false, externallyPaused: tmp43, style: height.absoluteFillObject, contentInsets, onProgress: callback3, onEnd: handleVideoEnd, onPausePlayback: handleVideoPaused, onResumePlayback: handleVideoResumed, onError: callback2, onLoadStart, onBuffer, onReadyForDisplay: callback1, onVideoTracks, hideControls: isEndCardVisible, showSkipButtons: false, repeat, bufferingSpinnerPlacement: "center", onPlayerStateChange };
    prop3 = undefined;
    obj9 = { uri: memo };
    const AdVideoPlayer = tmp7(tmp8[18]).AdVideoPlayer;
    if (flag2) {
      prop3 = tmp7(tmp8[19]).SOFT_CAP_PRELOAD_MAX_BITRATE;
    }
    prop4 = undefined;
    if (flag2) {
      prop4 = tmp7(tmp8[19]).SOFT_CAP_PRELOAD_BUFFER_CONFIG;
    }
    prop5 = undefined;
    if (flag2) {
      prop5 = tmp7(tmp8[19]).SOFT_CAP_PRELOAD_FORWARD_BUFFER_SEC;
    }
    tmp43 = !isActive;
    if (isActive) {
      tmp43 = isEndCardVisible;
    }
    if (!tmp43) {
      tmp43 = flag;
    }
    tmp37Result = tmp37(AdVideoPlayer, obj8);
  }
  items7 = [tmp37Result, , , , , , ];
  if (null != memo1) {
    const obj10 = { style: items8, pointerEvents: "none", children: items9 };
    items8 = [tmp.poster, animatedStyle];
    const View3 = tmp11(tmp8[8]).View;
    const obj11 = { style: height.absoluteFillObject, source: obj12, resizeMode: "cover" };
    obj12 = { uri: memo1 };
    items9 = [sharedValue(handleVideoError(tmp8[20]), obj11), ];
    let tmp37Result3 = !first;
    if (tmp37Result3) {
      const obj13 = { animating: true, size: "small", color: token };
      tmp37Result3 = tmp37(c7, obj13);
    }
    items9[1] = tmp37Result3;
    tmp37Result4 = tmp35(View3, obj10);
  } else {
    const obj14 = { style: items10, pointerEvents: "none" };
    items10 = [tmp.poster, animatedStyle];
    tmp37Result4 = tmp37(tmp11(tmp8[8]).View, obj14);
  }
  items7[1] = tmp37Result4;
  const obj15 = { start, end, style: items11, colors: items, pointerEvents: "none" };
  items11 = [tmp.scrimGradient, animatedStyle1];
  items7[2] = sharedValue(num, obj15);
  let renderEndCardResult;
  if (renderEndCard != null) {
    renderEndCardResult = renderEndCard();
  }
  items7[3] = renderEndCardResult;
  let tmp37Result5 = null;
  if (null != prop1) {
    const obj16 = { accessibilityRole: "button", accessibilityLabel: intl.string(handleVideoProgress(onFirstFrame[21]).t.dcl9MQ), onPress: prop1, style: height.absoluteFillObject };
    intl = tmp7(tmp8[21]).intl;
    tmp37Result5 = tmp37(first, obj16);
  }
  items7[4] = tmp37Result5;
  if (isScrollIndicatorEnabled) {
    const obj17 = { opacityStyle: animatedStyle1, enabled: isActive, isEndCardVisible };
    const tmp11Result = handleVideoError(onFirstFrame[22]);
    if (isActive) {
      isActive = tmp3;
    }
    isScrollIndicatorEnabled = tmp37(tmp11Result, obj17);
  }
  items7[5] = isScrollIndicatorEnabled;
  const obj18 = { style: items12, pointerEvents: "box-none", children: sharedValue(tmp11Result2, obj19) };
  items12 = [height.absoluteFillObject, animatedStyle1];
  const View4 = tmp11(tmp8[8]).View;
  obj19 = { bounty, visible: isCtaVisible, sourceQuestContent };
  tmp11Result2 = handleVideoError(onFirstFrame[23]);
  if (isCtaVisible) {
    isCtaVisible = !isEndCardVisible;
  }
  const obj20 = { children: items15 };
  items7[6] = sharedValue(View4, obj18);
  items13 = [videoHls(tmp38, obj7), ];
  const obj21 = { style: items14, children: sharedValue(handleVideoError(onFirstFrame[12]), { progress: normalizedProgress, visible: isProgressBarVisible }) };
  items14 = [tmp.progress, animatedStyle1];
  const View5 = tmp11(tmp8[8]).View;
  items13[1] = sharedValue(View5, obj21);
  items15 = [sharedValue(View, obj5), ];
  const obj22 = { style: items16, children: items17 };
  items16 = [tmp.leftRow, animatedStyle1];
  const View6 = tmp11(tmp8[8]).View;
  items17 = [sharedValue(handleVideoError(tmp8[24]), { isCompleted, totalSeconds: rewardTotalSeconds, remainingSeconds: rewardRemainingSeconds }), sharedValue(tmp7(tmp8[25]).BalanceWidgetPill, { balance: orbsBalance }, balanceWidgetPillResetKey)];
  items15[1] = videoHls(View6, obj22);
  return videoHls(tmp36, obj20);
}
