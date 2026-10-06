// Module ID: 14555
// Function ID: 14556
// Name: BountyVideo
// Dependencies: [32, 19, 17, 21, 1371, 9771, 588, 4837, 14556, 558, 576, 4570, 4535, 4838, 4841, 14541, 14557, 14567, 5896, 1127, 14568, 14570, 14571, 10756, 2]

// Module 14555 (BountyVideo)
import nativeDefault from "native" /* 588 */;
import timing from "timing" /* 4838 */;
import timingPresets from "timingPresets" /* 4841 */;
import AssetUtils from "AssetUtils" /* 9771 */;
import BountiesModalProgress from "BountiesModalProgress" /* 14556 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "utils/PlatformUtils" /* 1371 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
const contentInsets = { top: 48, bottom: 16, left: 16, right: 16 };
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
const __initData4 = { code: "function BountyVideoTsx4(){const{posterOpacity}=this.__closure;return{opacity:posterOpacity.get()};}" };
const __initData5 = { code: "function BountyVideoTsx5(){const{isScrollingInBoundsSharedValue,withTiming,isActive,timingStandard}=this.__closure;var _isScrollingInBoundsS;const isScrollingInBounds=((_isScrollingInBoundsS=isScrollingInBoundsSharedValue)===null||_isScrollingInBoundsS===void 0?void 0:_isScrollingInBoundsS.get())===true;return{opacity:withTiming(isActive&&!isScrollingInBounds?1:0,timingStandard)};}" };
const __initData6 = { code: "function BountyVideoTsx6(){const{videoEndPeekScale,height}=this.__closure;if(videoEndPeekScale==null){return{};}const scale=videoEndPeekScale.get();if(scale>=1){return{};}const centerPivotCompensation=height*(1-scale)/2;return{transform:[{translateY:-centerPivotCompensation},{scale:scale}]};}" };
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((videoEndPeekScale) => {
  let balanceWidgetPillResetKey;
  let bounty;
  let closure_7;
  let handleVideoEnd;
  let handleVideoError;
  let handleVideoPaused;
  let handleVideoProgress;
  let handleVideoResumed;
  let height;
  let initialProgress;
  let isActive;
  let isCompleted;
  let isCtaVisible;
  let isEndCardVisible;
  let isProgressBarVisible;
  let isRecapPageRevealed;
  let isScrollIndicatorEnabled;
  let isScrollingInBoundsSharedValue;
  let normalizedProgress;
  let obj7;
  let onBuffer;
  let onFirstFrame;
  let onLoadStart;
  let onPlayerStateChange;
  let onVideoTracks;
  let orbsBalance;
  let playerRef;
  let renderEndCard;
  let repeat;
  let rewardRemainingSeconds;
  let rewardTotalSeconds;
  let shouldLoadHls;
  let sourceQuestContent;
  let tmp29;
  let tmp30;
  let width;
  let tmp = handleVideoProgress;
  let tmp2 = onFirstFrame;
  let obj = handleVideoProgress(onFirstFrame[10]);
  const cResult = obj.c(103);
  ({ bounty, sourceQuestContent, isCompleted, isCtaVisible, isEndCardVisible, isScrollIndicatorEnabled, isProgressBarVisible, orbsBalance, handleVideoEnd, handleVideoProgress } = videoEndPeekScale);
  ({ handleVideoPaused, handleVideoResumed, handleVideoError } = videoEndPeekScale);
  ({ onLoadStart, onBuffer, onFirstFrame } = videoEndPeekScale);
  ({ onVideoTracks, rewardRemainingSeconds, rewardTotalSeconds, normalizedProgress, initialProgress, repeat, isActive, isRecapPageRevealed, isScrollingInBoundsSharedValue } = videoEndPeekScale);
  ({ renderEndCard, playerRef, onPlayerStateChange, balanceWidgetPillResetKey, shouldLoadHls, width, height } = videoEndPeekScale);
  videoEndPeekScale = videoEndPeekScale.videoEndPeekScale;
  const softDownloadCapsEnabled = videoEndPeekScale.softDownloadCapsEnabled;
  let tmp4 = undefined !== isScrollIndicatorEnabled && isScrollIndicatorEnabled;
  let closure_6 = tmp5;
  let tmp8 = undefined !== softDownloadCapsEnabled && softDownloadCapsEnabled;
  const tmp6 = undefined !== isRecapPageRevealed && isRecapPageRevealed;
  closure_15();
  if (tmp8) {
    tmp8 = !tmp5;
  }
  let obj2 = height;
  [r10057, closure_7] = isScrollingInBoundsSharedValue(height.useState(false), 2);
  isScrollingInBoundsSharedValue(height.useState(false), 2);
  const tmp12 = isScrollingInBoundsSharedValue(height.useState(false), 2);
  const first = tmp12[0];
  let closure_9 = tmp14;
  const ref = height.useRef(null);
  const tmpResult = tmp(tmp2[11]);
  const sharedValue = tmpResult.useSharedValue(1);
  const tmp10 = isScrollingInBoundsSharedValue;
  if (cResult[0] === bounty) {
    if (cResult[1] === height) {
      let tmp25;
      let tmp26;
      const tmpResult6 = tmp(tmp2[12]);
      const token = tmpResult6.useToken(handleVideoError(tmp2[6]).colors.TEXT_DEFAULT);
      const _HermesInternal = HermesInternal;
      const combined = "" + bounty.id + ":" + tmp7;
      const tmp10Result = tmp10(obj2.useState(combined), 2);
      if (tmp10Result[0] !== combined) {
        tmp10Result[1](combined);
        tmp12[1](false);
        let result = sharedValue.set(1);
      }
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class Pe {
          constructor() {
            return () => {
              if (null != ref.current) {
                const _clearTimeout = clearTimeout;
                clearTimeout(ref.current);
                ref.current = null;
              }
            };
          }
        }
        num = 4;
        cResult[4] = Pe;
        tmp25 = Pe;
      } else {
        class Pe {
          constructor() {
            return () => {
              if (null != ref.current) {
                const _clearTimeout = clearTimeout;
                clearTimeout(ref.current);
                ref.current = null;
              }
            };
          }
        }
      }
      if (cResult[5] !== combined) {
        class Pe {
          constructor() {
            return () => {
              if (null != ref.current) {
                const _clearTimeout = clearTimeout;
                clearTimeout(ref.current);
                ref.current = null;
              }
            };
          }
        }
        tmp27[0] = combined;
        cResult[5] = combined;
        cResult[6] = tmp27;
        tmp26 = tmp27;
      } else {
        class Pe {
          constructor() {
            return () => {
              if (null != ref.current) {
                const _clearTimeout = clearTimeout;
                clearTimeout(ref.current);
                ref.current = null;
              }
            };
          }
        }
      }
      const effect = obj2.useEffect(tmp25, tmp26);
      if (cResult[7] === first) {
        let tmp33;
        class Pe {
          constructor() {
            return () => {
              if (null != ref.current) {
                const _clearTimeout = clearTimeout;
                clearTimeout(ref.current);
                ref.current = null;
              }
            };
          }
        }
        const effect1 = obj2.useEffect(tmp30, tmp29);
        const _Symbol2 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class Te {
            constructor() {
              if (null != ref.current) {
                const _clearTimeout = clearTimeout;
                clearTimeout(ref.current);
                ref.current = null;
              }
              closure_9(true);
            }
          }
          cResult[11] = Te;
          tmp33 = Te;
        } else {
          class Te {
            constructor() {
              if (null != ref.current) {
                const _clearTimeout = clearTimeout;
                clearTimeout(ref.current);
                ref.current = null;
              }
              closure_9(true);
            }
          }
        }
        Te = tmp33;
        if (cResult[12] !== onFirstFrame) {
          class Te {
            constructor() {
              if (null != ref.current) {
                const _clearTimeout = clearTimeout;
                clearTimeout(ref.current);
                ref.current = null;
              }
              closure_9(true);
            }
          }
          cResult[12] = onFirstFrame;
          cResult[13] = tmp35;
        } else {
          class Te {
            constructor() {
              if (null != ref.current) {
                const _clearTimeout = clearTimeout;
                clearTimeout(ref.current);
                ref.current = null;
              }
              closure_9(true);
            }
          }
        }
        if (cResult[14] !== handleVideoError) {
          class Te {
            constructor() {
              if (null != ref.current) {
                const _clearTimeout = clearTimeout;
                clearTimeout(ref.current);
                ref.current = null;
              }
              closure_9(true);
            }
          }
          cResult[14] = handleVideoError;
          cResult[15] = tmp37;
        } else {
          class Te {
            constructor() {
              if (null != ref.current) {
                const _clearTimeout = clearTimeout;
                clearTimeout(ref.current);
                ref.current = null;
              }
              closure_9(true);
            }
          }
        }
        if (cResult[16] !== handleVideoProgress) {
          class Le {
            constructor(currentTime) {
              if (currentTime.currentTime > 0) {
                closure_7(true);
              }
              handleVideoProgress(currentTime);
            }
          }
          cResult[16] = handleVideoProgress;
          cResult[17] = Le;
        } else {
          class Le {
            constructor(currentTime) {
              if (currentTime.currentTime > 0) {
                closure_7(true);
              }
              handleVideoProgress(currentTime);
            }
          }
        }
        const tmpResult7 = tmp(tmp2[11]);
        class Me {
          constructor() {
            const obj = { opacity: sharedValue.get() };
            return obj;
          }
        }
        let obj3 = { posterOpacity: sharedValue };
        Me.__closure = obj3;
        Me.__workletHash = 4975136521719;
        Me.__initData = __initData;
        const animatedStyle = tmpResult7.useAnimatedStyle(Me);
        class Be {
          constructor() {
            const tmp = first;
            if (tmp) {
              set = sharedValue.set;
              const obj = timing;
              const result = set(obj.withTiming(0, timingPresets.timingFast));
            }
          }
        }
        class Ue {
          constructor() {
            let value;
            const obj = isScrollingInBoundsSharedValue;
            if (isScrollingInBoundsSharedValue != null) {
              value = obj.get();
            }
            num = 0;
            const withTiming = timing.withTiming;
            timing;
            if (closure_6) {
              num = 0;
              if (true !== value) {
                num = 1;
              }
            }
            const obj2 = { opacity: withTiming(num, timingPresets.timingStandard) };
            return obj2;
          }
        }
        let obj4 = { isScrollingInBoundsSharedValue, withTiming: tmp(tmp2[13]).withTiming, isActive: undefined !== isActive && isActive, timingStandard: tmp(tmp2[14]).timingStandard };
        const useAnimatedStyle = tmp41.useAnimatedStyle;
        Ue.__closure = obj4;
        Ue.__workletHash = 12676706441349;
        Ue.__initData = __initData2;
        const animatedStyle1 = useAnimatedStyle(Ue);
        function ze() {
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
        const obj5 = { videoEndPeekScale, height };
        ze.__closure = obj5;
        ze.__workletHash = 598751147346;
        ze.__initData = __initData3;
        const tmpResult8 = tmp(tmp2[11]);
        const animatedStyle2 = tmpResult8.useAnimatedStyle(ze);
        if (isCtaVisible) {
          class Le {
            constructor(currentTime) {
              if (currentTime.currentTime > 0) {
                closure_7(true);
              }
              handleVideoProgress(currentTime);
            }
          }
        }
        const tmpResult9 = tmp(tmp2[15]);
        const bountyVideoEndAppStoreContext = tmpResult9.useBountyVideoEndAppStoreContext();
        if (true === (undefined !== isActive && isActive)) {
          class Le {
            constructor(currentTime) {
              if (currentTime.currentTime > 0) {
                closure_7(true);
              }
              handleVideoProgress(currentTime);
            }
          }
          if (bountyVideoEndAppStoreContext != null) {
            class Le {
              constructor(currentTime) {
                if (currentTime.currentTime > 0) {
                  closure_7(true);
                }
                handleVideoProgress(currentTime);
              }
            }
          }
          if (true === tmp48) {
            class Le {
              constructor(currentTime) {
                if (currentTime.currentTime > 0) {
                  closure_7(true);
                }
                handleVideoProgress(currentTime);
              }
            }
          }
        }
        if (tmp4) {
          class Le {
            constructor(currentTime) {
              if (currentTime.currentTime > 0) {
                closure_7(true);
              }
              handleVideoProgress(currentTime);
            }
          }
          if (bountyVideoEndAppStoreContext != null) {
            class Le {
              constructor(currentTime) {
                if (currentTime.currentTime > 0) {
                  closure_7(true);
                }
                handleVideoProgress(currentTime);
              }
            }
          }
          tmp4 = true !== tmp49;
        }
        if (cResult[18] !== animatedStyle2) {
          class Le {
            constructor(currentTime) {
              if (currentTime.currentTime > 0) {
                closure_7(true);
              }
              handleVideoProgress(currentTime);
            }
          }
          let items = [closure_6.absoluteFillObject, animatedStyle2];
          cResult[18] = animatedStyle2;
          cResult[19] = items;
        } else {
          class Le {
            constructor(currentTime) {
              if (currentTime.currentTime > 0) {
                closure_7(true);
              }
              handleVideoProgress(currentTime);
            }
          }
        }
        if (cResult[20] === tmp8) {
          class Le {
            constructor(currentTime) {
              if (currentTime.currentTime > 0) {
                closure_7(true);
              }
              handleVideoProgress(currentTime);
            }
          }
        }
        let tmp53Result = null;
        if (undefined === shouldLoadHls || shouldLoadHls) {
          class Le {
            constructor(currentTime) {
              if (currentTime.currentTime > 0) {
                closure_7(true);
              }
              handleVideoProgress(currentTime);
            }
          }
          const obj6 = { ref: playerRef, source: obj7, automaticallyWaitsToMinimizeStalling: false, maxBitRate: undefined, bufferConfig: tmp55, preferredForwardBufferDuration: undefined, initialProgress, isFullscreen: false, externallyPaused: null, style: closure_6.absoluteFillObject, contentInsets, onProgress: tmp38, onEnd: handleVideoEnd, onPausePlayback: handleVideoPaused, onResumePlayback: handleVideoResumed, onError: tmp36, onLoadStart, onBuffer, onReadyForDisplay: tmp34, onVideoTracks, hideControls: isEndCardVisible, showSkipButtons: false, repeat, bufferingSpinnerPlacement: "center", onPlayerStateChange };
          obj7 = { uri: bounty.videoHls };
          const AdVideoPlayer = tmp(tmp2[16]).AdVideoPlayer;
          if (tmp8) {
            class Le {
              constructor(currentTime) {
                if (currentTime.currentTime > 0) {
                  closure_7(true);
                }
                handleVideoProgress(currentTime);
              }
            }
          }
          class Me {
            constructor() {
              const obj = { opacity: sharedValue.get() };
              return obj;
            }
          }
          if (tmp8) {
            class Le {
              constructor(currentTime) {
                if (currentTime.currentTime > 0) {
                  closure_7(true);
                }
                handleVideoProgress(currentTime);
              }
            }
          }
          if (tmp8) {
            class Le {
              constructor(currentTime) {
                if (currentTime.currentTime > 0) {
                  closure_7(true);
                }
                handleVideoProgress(currentTime);
              }
            }
          }
          if (undefined !== isActive && isActive) {
            class Le {
              constructor(currentTime) {
                if (currentTime.currentTime > 0) {
                  closure_7(true);
                }
                handleVideoProgress(currentTime);
              }
            }
          }
          class Be {
            constructor() {
              const tmp = first;
              if (tmp) {
                set = sharedValue.set;
                const obj = timing;
                const result = set(obj.withTiming(0, timingPresets.timingFast));
              }
            }
          }
          class Ue {
            constructor() {
              let value;
              const obj = isScrollingInBoundsSharedValue;
              if (isScrollingInBoundsSharedValue != null) {
                value = obj.get();
              }
              num = 0;
              const withTiming = timing.withTiming;
              timing;
              if (closure_6) {
                num = 0;
                if (true !== value) {
                  num = 1;
                }
              }
              const obj2 = { opacity: withTiming(num, timingPresets.timingStandard) };
              return obj2;
            }
          }
          tmp53Result = tmp53(AdVideoPlayer, obj6);
        }
        cResult[20] = tmp8;
        cResult[21] = bounty.videoHls;
        cResult[22] = tmp34;
        cResult[23] = handleVideoEnd;
        cResult[24] = tmp36;
        cResult[25] = handleVideoPaused;
        cResult[26] = tmp38;
        cResult[27] = handleVideoResumed;
        cResult[28] = initialProgress;
        cResult[29] = undefined !== isActive && isActive;
        cResult[30] = isEndCardVisible;
        cResult[31] = tmp6;
        cResult[32] = onBuffer;
        cResult[33] = onLoadStart;
        cResult[34] = onPlayerStateChange;
        cResult[35] = onVideoTracks;
        cResult[36] = playerRef;
        cResult[37] = repeat;
        cResult[38] = undefined === shouldLoadHls || shouldLoadHls;
        cResult[39] = tmp53Result;
      }
      class Be {
        constructor() {
          const tmp = first;
          if (tmp) {
            set = sharedValue.set;
            const obj = timing;
            const result = set(obj.withTiming(0, timingPresets.timingFast));
          }
        }
      }
      tmp31[0] = first;
      tmp31[1] = sharedValue;
      cResult[7] = first;
      cResult[8] = sharedValue;
      cResult[9] = tmp31;
      cResult[10] = Be;
      tmp29 = tmp31;
      tmp30 = Be;
    }
  }
  size = { assetUrl: bounty.videoHls, width, height };
  const tmpResult10 = tmp(tmp2[5]);
  const scaledFirstFrameImageUrl = tmpResult10.getScaledFirstFrameImageUrl(size);
  cResult[0] = bounty;
  cResult[1] = height;
  cResult[2] = width;
  cResult[3] = scaledFirstFrameImageUrl;
}) : ((bounty) => {
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
  let obj2 = bounty(handleVideoError[11]);
  sharedValue = obj2.useSharedValue(1);
  let items = [bounty, width, height];
  const memo = isActive.useMemo(() => {
    size = { assetUrl: bounty.videoHls, width, height };
    const obj = AssetUtils;
    return obj.getScaledFirstFrameImageUrl(size);
  }, items);
  let obj4 = bounty(handleVideoError[12]);
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
  function fe() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  }
  fe.__closure = { posterOpacity: sharedValue };
  fe.__workletHash = 6626310924562;
  fe.__initData = __initData4;
  const tmp7Result = bounty(handleVideoError[11]);
  const animatedStyle = tmp7Result.useAnimatedStyle(fe);
  const tmp7Result4 = bounty(handleVideoError[11]);
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
  let obj3 = { isScrollingInBoundsSharedValue, withTiming: tmp7(tmp8[13]).withTiming, isActive, timingStandard: tmp7(tmp8[14]).timingStandard };
  Pe.__closure = obj3;
  Pe.__workletHash = 415757985890;
  Pe.__initData = __initData5;
  const animatedStyle1 = tmp7Result4.useAnimatedStyle(Pe);
  const tmp7Result5 = bounty(handleVideoError[11]);
  class Ee {
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
  Ee.__closure = { videoEndPeekScale, height };
  Ee.__workletHash = 4025671387191;
  Ee.__initData = __initData6;
  const animatedStyle2 = tmp7Result5.useAnimatedStyle(Ee);
  const tmp7Result6 = bounty(handleVideoError[15]);
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
  const View = tmp10(tmp8[11]).View;
  const tmp31 = closure_11;
  const tmp33 = isScrollingInBoundsSharedValue;
  if (shouldLoadHls) {
    const obj7 = { ref: playerRef, source: obj8, automaticallyWaitsToMinimizeStalling: false, maxBitRate: prop3, bufferConfig: prop4, preferredForwardBufferDuration: prop5, initialProgress, isFullscreen: false, externallyPaused: tmp39, style: width.absoluteFillObject, contentInsets: sharedValue, onProgress: callback3, onEnd: handleVideoEnd, onPausePlayback: handleVideoPaused, onResumePlayback: handleVideoResumed, onError: callback2, onLoadStart, onBuffer, onReadyForDisplay: callback1, onVideoTracks, hideControls: isEndCardVisible, showSkipButtons: false, repeat, bufferingSpinnerPlacement: "center", onPlayerStateChange };
    prop3 = undefined;
    obj8 = { uri: bounty.videoHls };
    const AdVideoPlayer = tmp7(tmp8[16]).AdVideoPlayer;
    const tmp35 = c9;
    if (flag2) {
      prop3 = tmp7(tmp8[17]).SOFT_CAP_PRELOAD_MAX_BITRATE;
    }
    prop4 = undefined;
    if (flag2) {
      prop4 = tmp7(tmp8[17]).SOFT_CAP_PRELOAD_BUFFER_CONFIG;
    }
    prop5 = undefined;
    if (flag2) {
      prop5 = tmp7(tmp8[17]).SOFT_CAP_PRELOAD_FORWARD_BUFFER_SEC;
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
    const View2 = tmp10(tmp8[11]).View;
    const obj10 = { style: width.absoluteFillObject, source: obj11, resizeMode: "cover" };
    obj11 = { uri: memo };
    items9 = [c9(handleVideoProgress(handleVideoError[18]), obj10), ];
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
    tmp30Result = c9(tmp10(tmp8[11]).View, obj13);
  }
  items7[1] = tmp30Result;
  let renderEndCardResult;
  if (renderEndCard != null) {
    renderEndCardResult = renderEndCard();
  }
  items7[2] = renderEndCardResult;
  let tmp41Result = null;
  if (null != prop1) {
    const obj14 = { accessibilityRole: "button", accessibilityLabel: intl.string(bounty(handleVideoError[19]).t.dcl9MQ), onPress: prop1, style: width.absoluteFillObject };
    intl = tmp7(tmp8[19]).intl;
    tmp41Result = tmp41(videoEndPeekScale, obj14);
  }
  items7[3] = tmp41Result;
  if (isScrollIndicatorEnabled) {
    const obj15 = { opacityStyle: animatedStyle1, enabled: isActive, isEndCardVisible };
    const tmp10Result = handleVideoProgress(handleVideoError[20]);
    if (isActive) {
      isActive = tmp3;
    }
    isScrollIndicatorEnabled = tmp41(tmp10Result, obj15);
  }
  items7[4] = isScrollIndicatorEnabled;
  const obj16 = { style: items11, pointerEvents: "box-none", children: tmp41(tmp10Result2, obj17) };
  items11 = [width.absoluteFillObject, animatedStyle1];
  const View3 = tmp10(tmp8[11]).View;
  obj17 = { bounty, visible: isCtaVisible, sourceQuestContent };
  tmp10Result2 = handleVideoProgress(handleVideoError[21]);
  if (isCtaVisible) {
    isCtaVisible = !isEndCardVisible;
  }
  const obj18 = { children: items14 };
  items7[5] = tmp41(View3, obj16);
  items12 = [first(tmp33, obj6), ];
  const obj19 = { style: items13, children: tmp41(handleVideoProgress(handleVideoError[8]), { progress: normalizedProgress, visible: isProgressBarVisible }) };
  items13 = [tmp.progress, animatedStyle1];
  const View4 = tmp10(tmp8[11]).View;
  items12[1] = tmp41(View4, obj19);
  items14 = [first(View, obj5), ];
  const obj20 = { style: items15, children: items16 };
  items15 = [tmp.leftRow, animatedStyle1];
  const View5 = tmp10(tmp8[11]).View;
  items16 = [tmp41(handleVideoProgress(handleVideoError[22]), { isCompleted, totalSeconds: rewardTotalSeconds, remainingSeconds: rewardRemainingSeconds }), tmp41(bounty(handleVideoError[23]).BalanceWidgetPill, { balance: orbsBalance }, balanceWidgetPillResetKey)];
  items14[1] = first(View5, obj20);
  return first(tmp31, obj18);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountyVideo.tsx");

export const BountyVideo = tmp4;
