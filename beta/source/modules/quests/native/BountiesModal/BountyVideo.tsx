// Module ID: 14562
// Function ID: 14563
// Name: BountyVideo
// Dependencies: [32, 19, 17, 21, 1365, 10689, 576, 4836, 14563, 4566, 4531, 4837, 4840, 14553, 14564, 14574, 5899, 1115, 14575, 14577, 14579, 10554, 2]
// Exports: BountyVideo

// Module 14562 (BountyVideo)
import nativeDefault from "native" /* 576 */;
import timing from "timing" /* 4837 */;
import timingPresets from "timingPresets" /* 4840 */;
import AssetUtils from "AssetUtils" /* 10689 */;
import BountiesModalProgress from "BountiesModalProgress" /* 14563 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "utils/PlatformUtils" /* 1365 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let set;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
({ View: hasOwnProperty, StyleSheet: metroRequire, ActivityIndicator: metroImportDefault, Pressable: metroImportAll } = react_native);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = 150;
}
let closure_13 = { top: 48, bottom: 16, left: 16, right: 16 };
const lg = nativeDefault.radii.lg;
let closure_15 = createStyles.createStyles(() => {
  let obj2;
  let obj3;
  let rect;
  let rect1;
  const obj = { videoContainer: obj2, leftRow: rect, progress: rect1, poster: obj3 };
  obj2 = { overflow: "hidden", borderRadius: lg };
  const merged = Object.assign(metroRequire.absoluteFillObject);
  rect = { position: "absolute", top: nativeDefault.space.PX_8, left: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  rect1 = { position: "absolute", bottom: 0, height: BountiesModalProgress.PROGRESS_BAR_HEIGHT, left: lg, right: lg };
  obj3 = { backgroundColor: "#000000", justifyContent: "center", alignItems: "center" };
  const merged1 = Object.assign(metroRequire.absoluteFillObject);
  return obj;
});
const __initData = { code: "function BountyVideoTsx1(){const{posterOpacity}=this.__closure;return{opacity:posterOpacity.get()};}" };
const __initData2 = { code: "function BountyVideoTsx2(){const{isScrollingInBoundsSharedValue,withTiming,isActive,timingStandard}=this.__closure;var _isScrollingInBoundsS;const isScrollingInBounds=((_isScrollingInBoundsS=isScrollingInBoundsSharedValue)===null||_isScrollingInBoundsS===void 0?void 0:_isScrollingInBoundsS.get())===true;return{opacity:withTiming(isActive&&!isScrollingInBounds?1:0,timingStandard)};}" };
const __initData3 = { code: "function BountyVideoTsx3(){const{videoEndPeekScale,height}=this.__closure;if(videoEndPeekScale==null){return{};}const scale=videoEndPeekScale.get();if(scale>=1){return{};}const centerPivotCompensation=height*(1-scale)/2;return{transform:[{translateY:-centerPivotCompensation},{scale:scale}]};}" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountyVideo.tsx");

export const BountyVideo = function BountyVideo(bounty) {
  let _undefined;
  let balanceWidgetPillResetKey;
  let c9;
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
  let items6;
  let items7;
  let items8;
  let items9;
  let normalizedProgress;
  let obj11;
  let obj17;
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
  let tmp10Result2;
  let tmp3;
  let tmp30Result;
  let tmp39;
  let tmp41;
  bounty = bounty.bounty;
  ({ isCtaVisible, isEndCardVisible, isScrollIndicatorEnabled } = bounty);
  ({ sourceQuestContent, isCompleted } = bounty);
  if (isScrollIndicatorEnabled === undefined) {
    isScrollIndicatorEnabled = false;
  }
  const handleVideoProgress = bounty.handleVideoProgress;
  const handleVideoError = bounty.handleVideoError;
  const onFirstFrame = bounty.onFirstFrame;
  ({ isActive, isProgressBarVisible, orbsBalance, handleVideoEnd, handleVideoPaused, handleVideoResumed, onLoadStart, onBuffer, onVideoTracks, rewardRemainingSeconds, rewardTotalSeconds, normalizedProgress, initialProgress, repeat } = bounty);
  if (isActive === undefined) {
    isActive = false;
  }
  let flag = bounty.isRecapPageRevealed;
  if (flag === undefined) {
    flag = false;
  }
  const isScrollingInBoundsSharedValue = bounty.isScrollingInBoundsSharedValue;
  ({ renderEndCard, shouldLoadHls, playerRef, onPlayerStateChange, balanceWidgetPillResetKey } = bounty);
  if (shouldLoadHls === undefined) {
    shouldLoadHls = true;
  }
  const width = bounty.width;
  const height = bounty.height;
  const videoEndPeekScale = bounty.videoEndPeekScale;
  let flag2 = bounty.softDownloadCapsEnabled;
  if (flag2 === undefined) {
    flag2 = false;
  }
  c9 = undefined;
  let first;
  let closure_11;
  let ref;
  let sharedValue;
  let callback;
  let tmp = closure_15();
  if (flag2) {
    flag2 = !isActive;
  }
  let obj = isActive;
  let tmp2 = onFirstFrame(isActive.useState(false), 2);
  [tmp3, c9] = tmp2;
  const tmp4 = onFirstFrame(isActive.useState(false), 2);
  first = tmp4[0];
  closure_11 = tmp6;
  ref = isActive.useRef(null);
  let obj2 = bounty(handleVideoError[9]);
  sharedValue = obj2.useSharedValue(1);
  let items = [bounty, width, height];
  const memo = isActive.useMemo(() => {
    size = { assetUrl: bounty.videoHls, width, height };
    const obj = AssetUtils;
    return obj.getScaledFirstFrameImageUrl(size);
  }, items);
  let obj4 = bounty(handleVideoError[10]);
  const token = obj4.useToken(handleVideoProgress(handleVideoError[6]).colors.TEXT_DEFAULT);
  const combined = "" + bounty.id + ":" + shouldLoadHls;
  const tmp13 = onFirstFrame(isActive.useState(combined), 2);
  if (tmp13[0] !== combined) {
    tmp13[1](combined);
    tmp4[1](false);
    let result = sharedValue.set(1);
  }
  const items1 = [combined];
  const effect = obj.useEffect(() => () => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
  }, items1);
  const items2 = [first, sharedValue];
  const effect1 = obj.useEffect(() => {
    const tmp = first;
    if (tmp) {
      set = sharedValue.set;
      const obj = timing;
      const result = set(obj.withTiming(0, timingPresets.timingFast));
    }
  }, items2);
  callback = obj.useCallback(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
    closure_11(true);
  }, []);
  const items3 = [onFirstFrame];
  const items4 = [callback, handleVideoError];
  const callback1 = obj.useCallback(() => {
    if (onFirstFrame != null) {
      tmp();
    }
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
    }
    ref.current = setTimeout(() => {
      closure_1_11(true);
      ref.current = null;
    }, num);
  }, items3);
  const items5 = [handleVideoProgress];
  const callback2 = obj.useCallback((arg0) => {
    callback();
    if (handleVideoError != null) {
      tmp2(arg0);
    }
  }, items4);
  const callback3 = obj.useCallback((currentTime) => {
    if (currentTime.currentTime > 0) {
      _undefined(true);
    }
    handleVideoProgress(currentTime);
  }, items5);
  function ve() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  }
  ve.__closure = { posterOpacity: sharedValue };
  ve.__workletHash = 4975136521719;
  ve.__initData = __initData;
  const tmp7Result = bounty(handleVideoError[9]);
  const animatedStyle = tmp7Result.useAnimatedStyle(ve);
  const tmp7Result4 = bounty(handleVideoError[9]);
  class Pe {
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
  let obj3 = { isScrollingInBoundsSharedValue, withTiming: tmp7(tmp8[11]).withTiming, isActive, timingStandard: tmp7(tmp8[12]).timingStandard };
  Pe.__closure = obj3;
  Pe.__workletHash = 12676706441349;
  Pe.__initData = __initData2;
  const animatedStyle1 = tmp7Result4.useAnimatedStyle(Pe);
  const tmp7Result5 = bounty(handleVideoError[9]);
  class Ve {
    constructor() {
      let items;
      const obj = videoEndPeekScale;
      if (null == videoEndPeekScale) {
        return {};
      } else {
        let obj2;
        const value = obj.get();
        if (value >= 1) {
          obj2 = {};
        } else {
          obj2 = { transform: items };
          items = [{ translateY: -height * (1 - value) / 2 }, ];
          const obj3 = { translateY: -height * (1 - value) / 2 };
          const obj4 = { scale: value };
          items[1] = obj4;
        }
        return obj2;
      }
    }
  }
  Ve.__closure = { videoEndPeekScale, height };
  Ve.__workletHash = 598751147346;
  Ve.__initData = __initData3;
  const animatedStyle2 = tmp7Result5.useAnimatedStyle(Ve);
  const tmp7Result6 = bounty(handleVideoError[13]);
  const bountyVideoEndAppStoreContext = tmp7Result6.useBountyVideoEndAppStoreContext();
  let prop1 = null;
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
  const obj5 = { style: items6, children: items12 };
  items6 = [width.absoluteFillObject, animatedStyle2];
  let tmp35Result = null;
  const obj6 = { style: tmp.videoContainer, children: items7 };
  const View = tmp10(tmp8[9]).View;
  const tmp31 = closure_11;
  const tmp33 = isScrollingInBoundsSharedValue;
  if (shouldLoadHls) {
    const obj7 = { ref: playerRef, source: obj8, automaticallyWaitsToMinimizeStalling: false, maxBitRate: prop3, bufferConfig: prop4, preferredForwardBufferDuration: prop5, initialProgress, isFullscreen: false, externallyPaused: tmp39, style: width.absoluteFillObject, contentInsets: sharedValue, onProgress: callback3, onEnd: handleVideoEnd, onPausePlayback: handleVideoPaused, onResumePlayback: handleVideoResumed, onError: callback2, onLoadStart, onBuffer, onReadyForDisplay: callback1, onVideoTracks, hideControls: isEndCardVisible, showSkipButtons: false, repeat, bufferingSpinnerPlacement: "center", onPlayerStateChange };
    prop3 = undefined;
    obj8 = { uri: bounty.videoHls };
    const AdVideoPlayer = tmp7(tmp8[14]).AdVideoPlayer;
    const tmp35 = c9;
    if (flag2) {
      prop3 = tmp7(tmp8[15]).SOFT_CAP_PRELOAD_MAX_BITRATE;
    }
    prop4 = undefined;
    if (flag2) {
      prop4 = tmp7(tmp8[15]).SOFT_CAP_PRELOAD_BUFFER_CONFIG;
    }
    prop5 = undefined;
    if (flag2) {
      prop5 = tmp7(tmp8[15]).SOFT_CAP_PRELOAD_FORWARD_BUFFER_SEC;
    }
    tmp39 = !isActive;
    if (isActive) {
      tmp39 = isEndCardVisible;
    }
    if (!tmp39) {
      tmp39 = flag;
    }
    tmp35Result = tmp35(AdVideoPlayer, obj7);
  }
  items7 = [tmp35Result, , , , , ];
  if (null != memo) {
    const obj9 = { style: items8, pointerEvents: "none", children: items9 };
    items8 = [tmp.poster, animatedStyle];
    const View2 = tmp10(tmp8[9]).View;
    const obj10 = { style: width.absoluteFillObject, source: obj11, resizeMode: "cover" };
    obj11 = { uri: memo };
    items9 = [c9(handleVideoProgress(handleVideoError[16]), obj10), ];
    let tmp43Result = !first;
    if (tmp43Result) {
      const obj12 = { animating: true, size: "small", color: token };
      tmp43Result = tmp43(height, obj12);
    }
    items9[1] = tmp43Result;
    tmp30Result = tmp30(View2, obj9);
    tmp41 = tmp43;
  } else {
    tmp41 = c9;
    const obj13 = { style: items10, pointerEvents: "none" };
    items10 = [tmp.poster, animatedStyle];
    tmp30Result = c9(tmp10(tmp8[9]).View, obj13);
  }
  items7[1] = tmp30Result;
  let renderEndCardResult;
  if (renderEndCard != null) {
    renderEndCardResult = renderEndCard();
  }
  items7[2] = renderEndCardResult;
  let tmp41Result = null;
  if (null != prop1) {
    const obj14 = { accessibilityRole: "button", accessibilityLabel: intl.string(bounty(handleVideoError[17]).t.dcl9MQ), onPress: prop1, style: width.absoluteFillObject };
    intl = tmp7(tmp8[17]).intl;
    tmp41Result = tmp41(videoEndPeekScale, obj14);
  }
  items7[3] = tmp41Result;
  if (isScrollIndicatorEnabled) {
    const obj15 = { opacityStyle: animatedStyle1, enabled: isActive, isEndCardVisible };
    const tmp10Result = handleVideoProgress(handleVideoError[18]);
    if (isActive) {
      isActive = tmp3;
    }
    isScrollIndicatorEnabled = tmp41(tmp10Result, obj15);
  }
  items7[4] = isScrollIndicatorEnabled;
  const obj16 = { style: items11, pointerEvents: "box-none", children: tmp41(tmp10Result2, obj17) };
  items11 = [width.absoluteFillObject, animatedStyle1];
  const View3 = tmp10(tmp8[9]).View;
  obj17 = { bounty, visible: isCtaVisible, sourceQuestContent };
  tmp10Result2 = handleVideoProgress(handleVideoError[19]);
  if (isCtaVisible) {
    isCtaVisible = !isEndCardVisible;
  }
  const obj18 = { children: items14 };
  items7[5] = tmp41(View3, obj16);
  items12 = [first(tmp33, obj6), ];
  const obj19 = { style: items13, children: tmp41(handleVideoProgress(handleVideoError[8]), { progress: normalizedProgress, visible: isProgressBarVisible }) };
  items13 = [tmp.progress, animatedStyle1];
  const View4 = tmp10(tmp8[9]).View;
  items12[1] = tmp41(View4, obj19);
  items14 = [first(View, obj5), ];
  const obj20 = { style: items15, children: items16 };
  items15 = [tmp.leftRow, animatedStyle1];
  const View5 = tmp10(tmp8[9]).View;
  items16 = [tmp41(handleVideoProgress(handleVideoError[20]), { isCompleted, totalSeconds: rewardTotalSeconds, remainingSeconds: rewardRemainingSeconds }), tmp41(bounty(handleVideoError[21]).BalanceWidgetPill, { balance: orbsBalance }, balanceWidgetPillResetKey)];
  items14[1] = first(View5, obj20);
  return first(tmp31, obj18);
};
