// Module ID: 17453
// Function ID: 17454
// Name: BountyVideo
// Dependencies: [32, 19, 17, 17433, 21, 1357, 10078, 575, 1652, 5830, 671, 5243, 17454, 17455, 5839, 5485, 5488, 17443, 17456, 17468, 5957, 1113, 17469, 17471, 17473, 9978, 2]
// Exports: BountyVideo

// Module 17453 (BountyVideo)
import nativeDefault from "native" /* 575 */;
import timing_timing from "timing/timing" /* 5485 */;
import timingPresets from "timingPresets" /* 5488 */;
import LinearGradientDefault from "LinearGradient" /* 5830 */;
import AssetUtils from "AssetUtils" /* 10078 */;
import BountiesModalProgress from "BountiesModalProgress" /* 17454 */;
import pickBountyVideoRendition from "pickBountyVideoRendition" /* 17455 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import BountiesModalConstants from "BountiesModalConstants" /* 17433 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "utils/PlatformUtils" /* 1357 */;
import module_1652 from "module_1652" /* 1652 */;
import module_671_mod from "module_671" /* 671 */;
import createStyles from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

let borderRadius, set;

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
const contentInsets = { top: 48, bottom: 16, left: 16, right: 16 };
const lg = nativeDefault.radii.lg;
const LinearGradient = module_1652.createAnimatedComponent(LinearGradientDefault);
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
let closure_22 = { code: "(function BountyVideoTsx1(){let[posterOpacity]=this.__closure;return{opacity:posterOpacity.get()};})" };
let closure_23 = { code: "(function BountyVideoTsx2(){let[isScrollingInBoundsSharedValue,withTiming,isActive,timingStandard]=this.__closure;var _isScrollingInBoundsS;const isScrollingInBounds=((_isScrollingInBoundsS=isScrollingInBoundsSharedValue)===null||_isScrollingInBoundsS===void 0?void 0:_isScrollingInBoundsS.get())===true;return{opacity:withTiming(isActive&&!isScrollingInBounds?1:0,timingStandard)};})" };
let closure_24 = { code: "(function BountyVideoTsx3(){let[videoEndPeekProgress,StyleSheet,getBountyVideoEndPeekScale,videoEndPeekTargetScale,getBountyVideoEndPeekClipHeight,width,height,VIDEO_CONTAINER_BORDER_RADIUS]=this.__closure;if(videoEndPeekProgress==null){return StyleSheet.absoluteFillObject;}const progress=videoEndPeekProgress.get();const scale=getBountyVideoEndPeekScale(progress,videoEndPeekTargetScale);const clipHeight=getBountyVideoEndPeekClipHeight(progress,width,height);const centerPivotCompensation=clipHeight*(1-scale)/2;return{position:'absolute',top:0,left:0,width:width,height:clipHeight,overflow:'hidden',borderRadius:VIDEO_CONTAINER_BORDER_RADIUS,transform:[{translateY:-centerPivotCompensation},{scale:scale}]};})" };
let closure_25 = { code: "(function BountyVideoTsx4(){let[videoEndPeekProgress,StyleSheet,getBountyVideoEndPeekClipHeight,width,height]=this.__closure;if(videoEndPeekProgress==null){return StyleSheet.absoluteFillObject;}const progress=videoEndPeekProgress.get();const clipHeight=getBountyVideoEndPeekClipHeight(progress,width,height);return{width:width,height:height,transform:[{translateY:(clipHeight-height)/2}]};})" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountyVideo.tsx");

export function BountyVideo(handleVideoProgress) {
  let View2;
  let _undefined;
  let balanceWidgetPillResetKey;
  let bounty;
  let c5;
  let closure_7;
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
  let isScrollingInBoundsSharedValue;
  let items15;
  let items16;
  let items17;
  let items18;
  let items19;
  let items20;
  let items21;
  let items22;
  let items23;
  let items24;
  let items25;
  let normalizedProgress;
  let obj11;
  let obj18;
  let obj5;
  let obj8;
  let onBuffer;
  let onLoadStart;
  let onPlayerStateChange;
  let onVideoTracks;
  let orbsBalance;
  let playerRef;
  let prop3;
  let prop4;
  let prop5;
  let renderEndCard;
  let repeat;
  let rewardRemainingSeconds;
  let rewardTotalSeconds;
  let shouldLoadHls;
  let sourceQuestContent;
  let tmp11Result2;
  let tmp24;
  let tmp25;
  let tmp28;
  let tmp29;
  let tmp3;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp39;
  let tmp40;
  let tmp41;
  let tmp42;
  let tmp43;
  let tmp44;
  let tmp45;
  let tmp46;
  let tmp47;
  let tmp49;
  let tmp50;
  let tmp51;
  let tmp52;
  let tmp53;
  let tmp54;
  let tmp61Result4;
  let tmp67;
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
  ({ renderEndCard, shouldLoadHls, isScrollingInBoundsSharedValue, playerRef, onPlayerStateChange, balanceWidgetPillResetKey } = handleVideoProgress);
  if (shouldLoadHls === undefined) {
    shouldLoadHls = true;
  }
  width = handleVideoProgress.width;
  height = handleVideoProgress.height;
  let flag2 = handleVideoProgress.softDownloadCapsEnabled;
  if (flag2 === undefined) {
    flag2 = false;
  }
  c5 = undefined;
  let first;
  borderRadius = undefined;
  let ref;
  let sharedValue;
  let videoHls;
  let videoRenditions;
  let memo;
  let callback;
  let tmp = closure_21();
  if (flag2) {
    flag2 = !isActive;
  }
  let obj = height;
  let tmp2 = width(height.useState(false), 2);
  [tmp3, c5] = tmp2;
  const tmp4 = width(height.useState(false), 2);
  first = tmp4[0];
  borderRadius = tmp6;
  ref = height.useRef(null);
  let obj2 = handleVideoProgress(onFirstFrame[8]);
  sharedValue = obj2.useSharedValue(1);
  videoHls = bounty.videoHls;
  videoRenditions = bounty.videoRenditions;
  items = [videoHls, videoRenditions];
  memo = height.useMemo(() => {
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
  const memo1 = height.useMemo(() => {
    size = { assetUrl: memo, width, height };
    const obj = AssetUtils;
    return obj.getScaledFirstFrameImageUrl(size);
  }, items1);
  const obj4 = handleVideoProgress(onFirstFrame[14]);
  const token = obj4.useToken(handleVideoError(onFirstFrame[7]).colors.TEXT_DEFAULT);
  const combined = "" + bounty.id + ":" + shouldLoadHls + ":" + memo;
  const tmp14 = width(height.useState(combined), 2);
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
      const obj = timing_timing;
      const result = set(obj.withTiming(0, timingPresets.timingFast));
    }
  }, items3);
  callback = obj.useCallback(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
    closure_7(true);
  }, []);
  const items4 = [onFirstFrame];
  const items5 = [callback, handleVideoError];
  const callback1 = obj.useCallback(() => {
    if (onFirstFrame != null) {
      tmp();
    }
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
    }
    ref.current = setTimeout(() => {
      closure_1_7(true);
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
  const items7 = [closure_22, sharedValue];
  let c0;
  [tmp24, tmp25] = items7;
  const tmp7Result = handleVideoProgress(onFirstFrame[8]);
  class BountyVideoTsx1 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items8 = [tmp25];
  BountyVideoTsx1.__closure = items8;
  BountyVideoTsx1.__workletHash = 8043995477166;
  BountyVideoTsx1.__initData = tmp24;
  const animatedStyle = tmp7Result.useAnimatedStyle(BountyVideoTsx1);
  const items9 = [closure_23, isScrollingInBoundsSharedValue, , , ];
  const useAnimatedStyle = tmp7(tmp8[8]).useAnimatedStyle;
  handleVideoProgress(onFirstFrame[8]);
  items9[2] = handleVideoProgress(onFirstFrame[15]).withTiming;
  items9[3] = isActive;
  items9[4] = handleVideoProgress(onFirstFrame[16]).timingStandard;
  c0 = undefined;
  let c1;
  let c2;
  let c3;
  [tmp28, tmp29, tmp30, tmp31, tmp32] = items9;
  class BountyVideoTsx2 {
    constructor() {
      let value;
      const obj = c0;
      if (c0 != null) {
        value = obj.get();
      }
      num = 0;
      const tmp2 = c1;
      if (c2) {
        num = 0;
        if (true !== value) {
          num = 1;
        }
      }
      const obj2 = { opacity: tmp2(num, c3) };
      return obj2;
    }
  }
  const items10 = [tmp29, tmp30, tmp31, tmp32];
  BountyVideoTsx2.__closure = items10;
  BountyVideoTsx2.__workletHash = 13062892827356;
  BountyVideoTsx2.__initData = tmp28;
  const animatedStyle1 = useAnimatedStyle(BountyVideoTsx2);
  const tmp7Result6 = handleVideoProgress(onFirstFrame[17]);
  const bountyVideoEndAppStoreContext = tmp7Result6.useBountyVideoEndAppStoreContext();
  let tmp35;
  if (isActive) {
    let videoEndPeekProgress;
    if (bountyVideoEndAppStoreContext != null) {
      videoEndPeekProgress = bountyVideoEndAppStoreContext.videoEndPeekProgress;
    }
    tmp35 = videoEndPeekProgress;
  }
  num = undefined;
  if (bountyVideoEndAppStoreContext != null) {
    num = bountyVideoEndAppStoreContext.videoEndPeekTargetScale;
  }
  if (num == null) {
    num = 1;
  }
  const items11 = [closure_24, tmp35, first, videoHls, num, sharedValue, width, height, lg];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  let c4;
  c5 = undefined;
  let c6;
  let c7;
  [tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47] = items11;
  const tmp7Result7 = handleVideoProgress(onFirstFrame[8]);
  class BountyVideoTsx3 {
    constructor() {
      const obj = c0;
      if (null == c0) {
        return _undefined.absoluteFillObject;
      } else {
        const value = obj.get();
        const tmp5 = _undefined2(value, c3);
        const tmp9 = _undefined3(value, width, c6);
        size = { position: "absolute", top: 0, left: 0, width, height: tmp9, overflow: "hidden", borderRadius, transform: items };
        items = [{ translateY: -tmp9 * (1 - tmp5) / 2 }, ];
        const obj2 = { translateY: -tmp9 * (1 - tmp5) / 2 };
        const obj3 = { scale: tmp5 };
        items[1] = obj3;
        return size;
      }
    }
  }
  const items12 = [tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47];
  BountyVideoTsx3.__closure = items12;
  BountyVideoTsx3.__workletHash = 9514254449235;
  BountyVideoTsx3.__initData = tmp39;
  const animatedStyle2 = tmp7Result7.useAnimatedStyle(BountyVideoTsx3);
  const items13 = [closure_25, tmp35, first, sharedValue, width, height];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp49, tmp50, tmp51, tmp52, tmp53, tmp54] = items13;
  const tmp7Result8 = handleVideoProgress(onFirstFrame[8]);
  class BountyVideoTsx4 {
    constructor() {
      const obj = c0;
      if (null == c0) {
        return _undefined.absoluteFillObject;
      } else {
        size = { width, height, transform: items };
        items = [{ translateY: (_undefined2(obj.get(), width, height) - height) / 2 }];
        const obj2 = { translateY: (_undefined2(obj.get(), width, height) - height) / 2 };
        return size;
      }
    }
  }
  const items14 = [tmp50, tmp51, tmp52, tmp53, tmp54];
  BountyVideoTsx4.__closure = items14;
  BountyVideoTsx4.__workletHash = 10206614241485;
  BountyVideoTsx4.__initData = tmp49;
  let prop1 = null;
  const animatedStyle3 = tmp7Result8.useAnimatedStyle(BountyVideoTsx4);
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
  let obj3 = { style: animatedStyle2, children: memo(View2, obj5) };
  const View = tmp11(tmp8[8]).View;
  let tmp61Result = null;
  obj5 = { style: animatedStyle3, children: items21 };
  const obj6 = { style: tmp.videoContainer, children: items15 };
  View2 = tmp11(tmp8[8]).View;
  const tmp60 = callback;
  const tmp62 = c5;
  if (shouldLoadHls) {
    const obj7 = { ref: playerRef, source: obj8, automaticallyWaitsToMinimizeStalling: false, maxBitRate: prop3, bufferConfig: prop4, preferredForwardBufferDuration: prop5, initialProgress, isFullscreen: false, externallyPaused: tmp67, style: first.absoluteFillObject, contentInsets, onProgress: callback3, onEnd: handleVideoEnd, onPausePlayback: handleVideoPaused, onResumePlayback: handleVideoResumed, onError: callback2, onLoadStart, onBuffer, onReadyForDisplay: callback1, onVideoTracks, hideControls: isEndCardVisible, showSkipButtons: false, repeat, bufferingSpinnerPlacement: "center", onPlayerStateChange };
    prop3 = undefined;
    obj8 = { uri: memo };
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
    tmp67 = !isActive;
    if (isActive) {
      tmp67 = isEndCardVisible;
    }
    if (!tmp67) {
      tmp67 = flag;
    }
    tmp61Result = tmp61(AdVideoPlayer, obj7);
  }
  items15 = [tmp61Result, , , , , , ];
  if (null != memo1) {
    const obj9 = { style: items16, pointerEvents: "none", children: items17 };
    items16 = [tmp.poster, animatedStyle];
    const View3 = tmp11(tmp8[8]).View;
    const obj10 = { style: first.absoluteFillObject, source: obj11, resizeMode: "cover" };
    obj11 = { uri: memo1 };
    items17 = [videoRenditions(handleVideoError(tmp8[20]), obj10), ];
    let tmp61Result3 = !first;
    if (tmp61Result3) {
      const obj12 = { animating: true, size: "small", color: token };
      tmp61Result3 = tmp61(borderRadius, obj12);
    }
    items17[1] = tmp61Result3;
    tmp61Result4 = tmp59(View3, obj9);
  } else {
    const obj13 = { style: items18, pointerEvents: "none" };
    items18 = [tmp.poster, animatedStyle];
    tmp61Result4 = tmp61(tmp11(tmp8[8]).View, obj13);
  }
  items15[1] = tmp61Result4;
  const obj14 = { start, end, style: items19, colors: items, pointerEvents: "none" };
  items19 = [tmp.scrimGradient, animatedStyle1];
  items15[2] = videoRenditions(LinearGradient, obj14);
  let renderEndCardResult;
  if (renderEndCard != null) {
    renderEndCardResult = renderEndCard();
  }
  items15[3] = renderEndCardResult;
  let tmp61Result5 = null;
  if (null != prop1) {
    const obj15 = { accessibilityRole: "button", accessibilityLabel: intl.string(handleVideoProgress(onFirstFrame[21]).t.dcl9MQ), onPress: prop1, style: first.absoluteFillObject };
    intl = tmp7(tmp8[21]).intl;
    tmp61Result5 = tmp61(ref, obj15);
  }
  items15[4] = tmp61Result5;
  if (isScrollIndicatorEnabled) {
    const obj16 = { opacityStyle: animatedStyle1, enabled: isActive, isEndCardVisible };
    const tmp11Result = handleVideoError(onFirstFrame[22]);
    if (isActive) {
      isActive = tmp3;
    }
    isScrollIndicatorEnabled = tmp61(tmp11Result, obj16);
  }
  items15[5] = isScrollIndicatorEnabled;
  const obj17 = { style: items20, pointerEvents: "box-none", children: videoRenditions(tmp11Result2, obj18) };
  items20 = [first.absoluteFillObject, animatedStyle1];
  const View4 = tmp11(tmp8[8]).View;
  obj18 = { bounty, visible: isCtaVisible, sourceQuestContent };
  tmp11Result2 = handleVideoError(onFirstFrame[23]);
  if (isCtaVisible) {
    isCtaVisible = !isEndCardVisible;
  }
  const obj19 = { children: items23 };
  items15[6] = videoRenditions(View4, obj17);
  items21 = [memo(tmp62, obj6), ];
  const obj20 = { style: items22, children: videoRenditions(handleVideoError(onFirstFrame[12]), { progress: normalizedProgress, visible: isProgressBarVisible }) };
  items22 = [tmp.progress, animatedStyle1];
  const View5 = tmp11(tmp8[8]).View;
  items21[1] = videoRenditions(View5, obj20);
  items23 = [videoRenditions(View, obj3), ];
  const obj21 = { style: items24, children: items25 };
  items24 = [tmp.leftRow, animatedStyle1];
  const View6 = tmp11(tmp8[8]).View;
  items25 = [videoRenditions(handleVideoError(tmp8[24]), { isCompleted, totalSeconds: rewardTotalSeconds, remainingSeconds: rewardRemainingSeconds }), videoRenditions(tmp7(tmp8[25]).BalanceWidgetPill, { balance: orbsBalance }, balanceWidgetPillResetKey)];
  items23[1] = memo(View6, obj21);
  return memo(tmp60, obj19);
}
