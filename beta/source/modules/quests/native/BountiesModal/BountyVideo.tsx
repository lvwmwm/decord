// Module ID: 15306
// Function ID: 15307
// Name: BountyVideo
// Dependencies: [32, 19, 17, 21, 1369, 10606, 580, 4790, 15307, 558, 568, 4529, 4494, 4791, 4794, 15293, 15308, 15318, 5834, 1119, 15319, 15321, 15322, 11512, 2]

// Module 15306 (BountyVideo)
import nativeDefault from "native" /* 580 */;
import timing from "timing" /* 4791 */;
import timingPresets from "timingPresets" /* 4794 */;
import AssetUtils from "AssetUtils" /* 10606 */;
import BountiesModalProgress from "BountiesModalProgress" /* 15307 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: metroRequire, ActivityIndicator: closure_7, Pressable: closure_8 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const PlatformUtils = fn(1369);
const contentInsets = { top: 48, bottom: 16, left: 16, right: 16 };
const lg = nativeDefault.radii.lg;
const createStyles = fn(4790);
let closure_15 = createStyles.createStyles(() => {
  const obj = { videoContainer: null, leftRow: null, progress: null, poster: null };
  const obj2 = {};
  const merged = Object.assign(timestampProducer.absoluteFillObject);
  obj2.overflow = "hidden";
  obj2.borderRadius = lg;
  obj.videoContainer = obj2;
  const rect = { position: "absolute", top: nativeDefault.space.PX_8, left: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  obj.leftRow = rect;
  const rect1 = { position: "absolute", bottom: 0, height: BountiesModalProgress.PROGRESS_BAR_HEIGHT, left: lg, right: lg };
  obj.progress = rect1;
  const obj3 = {};
  const merged1 = Object.assign(timestampProducer.absoluteFillObject);
  obj3.backgroundColor = "#000000";
  obj3.justifyContent = "center";
  obj3.alignItems = "center";
  obj.poster = obj3;
  return obj;
});
const __initData = { code: "function BountyVideoTsx1(){const{posterOpacity}=this.__closure;return{opacity:posterOpacity.get()};}" };
const __initData2 = { code: "function BountyVideoTsx2(){const{isScrollingInBoundsSharedValue,withTiming,isActive,timingStandard}=this.__closure;var _isScrollingInBoundsS;const isScrollingInBounds=((_isScrollingInBoundsS=isScrollingInBoundsSharedValue)===null||_isScrollingInBoundsS===void 0?void 0:_isScrollingInBoundsS.get())===true;return{opacity:withTiming(isActive&&!isScrollingInBounds?1:0,timingStandard)};}" };
const __initData3 = { code: "function BountyVideoTsx3(){const{videoEndPeekScale,height}=this.__closure;if(videoEndPeekScale==null){return{};}const scale=videoEndPeekScale.get();if(scale>=1){return{};}const centerPivotCompensation=height*(1-scale)/2;return{transform:[{translateY:-centerPivotCompensation},{scale:scale}]};}" };
const __initData4 = { code: "function BountyVideoTsx4(){const{posterOpacity}=this.__closure;return{opacity:posterOpacity.get()};}" };
const __initData5 = { code: "function BountyVideoTsx5(){const{isScrollingInBoundsSharedValue,withTiming,isActive,timingStandard}=this.__closure;var _isScrollingInBoundsS;const isScrollingInBounds=((_isScrollingInBoundsS=isScrollingInBoundsSharedValue)===null||_isScrollingInBoundsS===void 0?void 0:_isScrollingInBoundsS.get())===true;return{opacity:withTiming(isActive&&!isScrollingInBounds?1:0,timingStandard)};}" };
const __initData6 = { code: "function BountyVideoTsx6(){const{videoEndPeekScale,height}=this.__closure;if(videoEndPeekScale==null){return{};}const scale=videoEndPeekScale.get();if(scale>=1){return{};}const centerPivotCompensation=height*(1-scale)/2;return{transform:[{translateY:-centerPivotCompensation},{scale:scale}]};}" };
const ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountyVideo.tsx");

export const BountyVideo = ReactCompilerGating.isReactCompilerEnabled() ? ((videoEndPeekScale) => {
  const cResult = handleVideoProgress(onFirstFrame[10]).c(103);
  ({ bounty, sourceQuestContent, isCompleted, isCtaVisible, isEndCardVisible, isScrollIndicatorEnabled, isProgressBarVisible, orbsBalance, handleVideoEnd, handleVideoProgress } = videoEndPeekScale);
  ({ handleVideoPaused, handleVideoResumed, handleVideoError } = videoEndPeekScale);
  ({ onLoadStart, onBuffer, onFirstFrame } = videoEndPeekScale);
  ({ onVideoTracks, rewardRemainingSeconds, rewardTotalSeconds, normalizedProgress, initialProgress, repeat, isActive, isRecapPageRevealed, isScrollingInBoundsSharedValue } = videoEndPeekScale);
  ({ renderEndCard, playerRef, onPlayerStateChange, balanceWidgetPillResetKey, shouldLoadHls, width, height } = videoEndPeekScale);
  videoEndPeekScale = videoEndPeekScale.videoEndPeekScale;
  const softDownloadCapsEnabled = videoEndPeekScale.softDownloadCapsEnabled;
  let tmp4 = undefined !== isScrollIndicatorEnabled && isScrollIndicatorEnabled;
  closure_6 = tmp5;
  let tmp8 = undefined !== softDownloadCapsEnabled && softDownloadCapsEnabled;
  closure_15();
  if (tmp8) {
    tmp8 = !tmp5;
  }
  let obj = handleVideoProgress(onFirstFrame[10]);
  const tmp10 = isScrollingInBoundsSharedValue;
  const tmp6 = undefined !== isRecapPageRevealed && isRecapPageRevealed;
  [r10057, closure_7] = isScrollingInBoundsSharedValue(height.useState(false), 2);
  const tmp12 = isScrollingInBoundsSharedValue(height.useState(false), 2);
  const first = tmp12[0];
  closure_9 = tmp14;
  height.useRef(null);
  const tmp11 = isScrollingInBoundsSharedValue(height.useState(false), 2);
  const sharedValue = handleVideoProgress(onFirstFrame[11]).useSharedValue(1);
  if (cResult[0] === bounty) {
    if (cResult[1] === height) {
      const token = tmp(tmp2[12]).useToken(handleVideoError(tmp2[6]).colors.TEXT_DEFAULT);
      const _HermesInternal = HermesInternal;
      const combined = "" + bounty.id + ":" + tmp7;
      const tmp10Result = tmp10(obj2.useState(combined), 2);
      if (tmp10Result[0] !== combined) {
        tmp10Result[1](combined);
        tmp14(false);
        let result = sharedValue.set(1);
      }
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class Pe {
          constructor() {
            return () => {
              if (null != ref.current) {
                const _clearTimeout = clearTimeout;
                clearTimeout(tmp.current);
                tmp.current = null;
              }
            };
          }
        }
        cResult[4] = Pe;
        const tmp25 = Pe;
      } else {
        class Pe {
          constructor() {
            return () => {
              if (null != ref.current) {
                const _clearTimeout = clearTimeout;
                clearTimeout(tmp.current);
                tmp.current = null;
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
                clearTimeout(tmp.current);
                tmp.current = null;
              }
            };
          }
        }
        tmp27[0] = combined;
        cResult[5] = combined;
        cResult[6] = tmp27;
        const tmp26 = tmp27;
      } else {
        class Pe {
          constructor() {
            return () => {
              if (null != ref.current) {
                const _clearTimeout = clearTimeout;
                clearTimeout(tmp.current);
                tmp.current = null;
              }
            };
          }
        }
      }
      const effect = obj2.useEffect(tmp25, tmp26);
      if (cResult[7] === first) {
        class Pe {
          constructor() {
            return () => {
              if (null != ref.current) {
                const _clearTimeout = clearTimeout;
                clearTimeout(tmp.current);
                tmp.current = null;
              }
            };
          }
        }
        const effect1 = obj2.useEffect(tmp30, tmp29);
        const _Symbol2 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class Te {
            constructor() {
              tmp = closure_10;
              if (null != closure_10.current) {
                tmp2 = globalThis;
                _clearTimeout = clearTimeout;
                clearTimeoutResult = clearTimeout(tmp.current);
                tmp.current = null;
              }
              tmp4 = closure_9(true);
              return;
            }
          }
          cResult[11] = Te;
          const tmp33 = Te;
        } else {
          class Te {
            constructor() {
              tmp = closure_10;
              if (null != closure_10.current) {
                tmp2 = globalThis;
                _clearTimeout = clearTimeout;
                clearTimeoutResult = clearTimeout(tmp.current);
                tmp.current = null;
              }
              tmp4 = closure_9(true);
              return;
            }
          }
        }
        Te = tmp33;
        if (cResult[12] !== onFirstFrame) {
          class Te {
            constructor() {
              tmp = closure_10;
              if (null != closure_10.current) {
                tmp2 = globalThis;
                _clearTimeout = clearTimeout;
                clearTimeoutResult = clearTimeout(tmp.current);
                tmp.current = null;
              }
              tmp4 = closure_9(true);
              return;
            }
          }
          cResult[12] = onFirstFrame;
          cResult[13] = tmp35;
        } else {
          class Te {
            constructor() {
              tmp = closure_10;
              if (null != closure_10.current) {
                tmp2 = globalThis;
                _clearTimeout = clearTimeout;
                clearTimeoutResult = clearTimeout(tmp.current);
                tmp.current = null;
              }
              tmp4 = closure_9(true);
              return;
            }
          }
        }
        if (cResult[14] !== handleVideoError) {
          class Te {
            constructor() {
              tmp = closure_10;
              if (null != closure_10.current) {
                tmp2 = globalThis;
                _clearTimeout = clearTimeout;
                clearTimeoutResult = clearTimeout(tmp.current);
                tmp.current = null;
              }
              tmp4 = closure_9(true);
              return;
            }
          }
          cResult[14] = handleVideoError;
          cResult[15] = tmp37;
        } else {
          class Te {
            constructor() {
              tmp = closure_10;
              if (null != closure_10.current) {
                tmp2 = globalThis;
                _clearTimeout = clearTimeout;
                clearTimeoutResult = clearTimeout(tmp.current);
                tmp.current = null;
              }
              tmp4 = closure_9(true);
              return;
            }
          }
        }
        if (cResult[16] !== handleVideoProgress) {
          class Le {
            constructor(arg0) {
              if (videoEndPeekScale.currentTime > 0) {
                tmp = closure_7;
                flag = true;
                tmp2 = closure_7(true);
              }
              tmp3 = handleVideoProgress(videoEndPeekScale);
              return;
            }
          }
          cResult[16] = handleVideoProgress;
          cResult[17] = Le;
        } else {
          class Le {
            constructor(arg0) {
              if (videoEndPeekScale.currentTime > 0) {
                tmp = closure_7;
                flag = true;
                tmp2 = closure_7(true);
              }
              tmp3 = handleVideoProgress(videoEndPeekScale);
              return;
            }
          }
        }
        class Me {
          constructor() {
            obj = { opacity: closure_11.get() };
            return obj;
          }
        }
        let obj3 = { posterOpacity: sharedValue };
        Me.__closure = obj3;
        Me.__workletHash = 4975136521719;
        Me.__initData = __initData;
        const animatedStyle = tmp(tmp2[11]).useAnimatedStyle(Me);
        class Be {
          constructor() {
            if (closure_8) {
              tmp = closure_11;
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj = closure_0(closure_2[13]);
              num = 0;
              result = closure_11.set(obj.withTiming(0, closure_0(closure_2[14]).timingFast));
            }
            return;
          }
        }
        class Ue {
          constructor() {
            obj = closure_3;
            if (closure_3 != null) {
              value = obj.get();
            }
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj2 = closure_0(closure_2[13]);
            num = 0;
            if (isActive) {
              flag = true;
              num = 0;
              if (true !== value) {
                num = 1;
              }
            }
            obj1 = { opacity: obj2.withTiming(num, tmp2(tmp3[14]).timingStandard) };
            return obj1;
          }
        }
        let obj4 = { isScrollingInBoundsSharedValue, withTiming: tmp(tmp2[13]).withTiming, isActive: tmp5, timingStandard: tmp(tmp2[14]).timingStandard };
        Ue.__closure = obj4;
        Ue.__workletHash = 12676706441349;
        Ue.__initData = __initData2;
        const animatedStyle1 = obj10.useAnimatedStyle(Ue);
        const tmpResult7 = tmp(tmp2[11]);
        function ze() {
          if (null == videoEndPeekScale) {
            return {};
          } else {
            value = obj.get();
            if (value >= 1) {
              let obj2 = {};
            } else {
              obj2 = { transform: null };
              const obj3 = { translateY: -height * (1 - value) / 2 };
              const items = [obj3, ];
              const obj4 = { scale: value };
              items[1] = obj4;
              obj2.transform = items;
            }
            return obj2;
          }
          obj = videoEndPeekScale;
        }
        const obj5 = { videoEndPeekScale, height };
        ze.__closure = obj5;
        ze.__workletHash = 598751147346;
        ze.__initData = __initData3;
        const animatedStyle2 = tmp(tmp2[11]).useAnimatedStyle(ze);
        if (isCtaVisible) {
          class Le {
            constructor(arg0) {
              if (videoEndPeekScale.currentTime > 0) {
                tmp = closure_7;
                flag = true;
                tmp2 = closure_7(true);
              }
              tmp3 = handleVideoProgress(videoEndPeekScale);
              return;
            }
          }
        }
        const tmpResult8 = tmp(tmp2[11]);
        const bountyVideoEndAppStoreContext = tmp(tmp2[15]).useBountyVideoEndAppStoreContext();
        if (true === tmp5) {
          class Le {
            constructor(arg0) {
              if (videoEndPeekScale.currentTime > 0) {
                tmp = closure_7;
                flag = true;
                tmp2 = closure_7(true);
              }
              tmp3 = handleVideoProgress(videoEndPeekScale);
              return;
            }
          }
          if (bountyVideoEndAppStoreContext != null) {
            class Le {
              constructor(arg0) {
                if (videoEndPeekScale.currentTime > 0) {
                  tmp = closure_7;
                  flag = true;
                  tmp2 = closure_7(true);
                }
                tmp3 = handleVideoProgress(videoEndPeekScale);
                return;
              }
            }
          }
          if (true === tmp47) {
            class Le {
              constructor(arg0) {
                if (videoEndPeekScale.currentTime > 0) {
                  tmp = closure_7;
                  flag = true;
                  tmp2 = closure_7(true);
                }
                tmp3 = handleVideoProgress(videoEndPeekScale);
                return;
              }
            }
          }
        }
        if (tmp4) {
          class Le {
            constructor(arg0) {
              if (videoEndPeekScale.currentTime > 0) {
                tmp = closure_7;
                flag = true;
                tmp2 = closure_7(true);
              }
              tmp3 = handleVideoProgress(videoEndPeekScale);
              return;
            }
          }
          if (bountyVideoEndAppStoreContext != null) {
            class Le {
              constructor(arg0) {
                if (videoEndPeekScale.currentTime > 0) {
                  tmp = closure_7;
                  flag = true;
                  tmp2 = closure_7(true);
                }
                tmp3 = handleVideoProgress(videoEndPeekScale);
                return;
              }
            }
          }
          tmp4 = true !== tmp48;
        }
        if (cResult[18] !== animatedStyle2) {
          class Le {
            constructor(arg0) {
              if (videoEndPeekScale.currentTime > 0) {
                tmp = closure_7;
                flag = true;
                tmp2 = closure_7(true);
              }
              tmp3 = handleVideoProgress(videoEndPeekScale);
              return;
            }
          }
          let items = [closure_6.absoluteFillObject, animatedStyle2];
          cResult[18] = animatedStyle2;
          cResult[19] = items;
        } else {
          class Le {
            constructor(arg0) {
              if (videoEndPeekScale.currentTime > 0) {
                tmp = closure_7;
                flag = true;
                tmp2 = closure_7(true);
              }
              tmp3 = handleVideoProgress(videoEndPeekScale);
              return;
            }
          }
        }
        if (cResult[20] === tmp8) {
          class Le {
            constructor(arg0) {
              if (videoEndPeekScale.currentTime > 0) {
                tmp = closure_7;
                flag = true;
                tmp2 = closure_7(true);
              }
              tmp3 = handleVideoProgress(videoEndPeekScale);
              return;
            }
          }
        }
        let tmp52Result = null;
        if (tmp7) {
          class Le {
            constructor(arg0) {
              if (videoEndPeekScale.currentTime > 0) {
                tmp = closure_7;
                flag = true;
                tmp2 = closure_7(true);
              }
              tmp3 = handleVideoProgress(videoEndPeekScale);
              return;
            }
          }
          const obj6 = { ref: playerRef, source: null, automaticallyWaitsToMinimizeStalling: false, maxBitRate: null, bufferConfig: null, preferredForwardBufferDuration: null, initialProgress: null, isFullscreen: false, externallyPaused: null, style: null, contentInsets: null, onProgress: null, onEnd: null, onPausePlayback: null, onResumePlayback: null, onError: null, onLoadStart: null, onBuffer: null, onReadyForDisplay: null, onVideoTracks: null, hideControls: null, showSkipButtons: false, repeat: null, bufferingSpinnerPlacement: "center", onPlayerStateChange: null };
          const obj7 = { uri: bounty.videoHls };
          obj6.source = obj7;
          if (tmp8) {
            class Le {
              constructor(arg0) {
                if (videoEndPeekScale.currentTime > 0) {
                  tmp = closure_7;
                  flag = true;
                  tmp2 = closure_7(true);
                }
                tmp3 = handleVideoProgress(videoEndPeekScale);
                return;
              }
            }
          }
          obj6.maxBitRate = undefined;
          class Me {
            constructor() {
              obj = { opacity: closure_11.get() };
              return obj;
            }
          }
          if (tmp8) {
            class Le {
              constructor(arg0) {
                if (videoEndPeekScale.currentTime > 0) {
                  tmp = closure_7;
                  flag = true;
                  tmp2 = closure_7(true);
                }
                tmp3 = handleVideoProgress(videoEndPeekScale);
                return;
              }
            }
          }
          obj6.bufferConfig = tmp54;
          if (tmp8) {
            class Le {
              constructor(arg0) {
                if (videoEndPeekScale.currentTime > 0) {
                  tmp = closure_7;
                  flag = true;
                  tmp2 = closure_7(true);
                }
                tmp3 = handleVideoProgress(videoEndPeekScale);
                return;
              }
            }
          }
          obj6.preferredForwardBufferDuration = undefined;
          obj6.initialProgress = initialProgress;
          if (tmp5) {
            class Le {
              constructor(arg0) {
                if (videoEndPeekScale.currentTime > 0) {
                  tmp = closure_7;
                  flag = true;
                  tmp2 = closure_7(true);
                }
                tmp3 = handleVideoProgress(videoEndPeekScale);
                return;
              }
            }
          }
          class Be {
            constructor() {
              if (closure_8) {
                tmp = closure_11;
                tmp2 = closure_0;
                tmp3 = closure_2;
                obj = closure_0(closure_2[13]);
                num = 0;
                result = closure_11.set(obj.withTiming(0, closure_0(closure_2[14]).timingFast));
              }
              return;
            }
          }
          class Ue {
            constructor() {
              obj = closure_3;
              if (closure_3 != null) {
                value = obj.get();
              }
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj2 = closure_0(closure_2[13]);
              num = 0;
              if (isActive) {
                flag = true;
                num = 0;
                if (true !== value) {
                  num = 1;
                }
              }
              obj1 = { opacity: obj2.withTiming(num, tmp2(tmp3[14]).timingStandard) };
              return obj1;
            }
          }
          obj6.style = closure_6.absoluteFillObject;
          obj6.contentInsets = contentInsets;
          obj6.onProgress = tmp38;
          obj6.onEnd = handleVideoEnd;
          obj6.onPausePlayback = handleVideoPaused;
          obj6.onResumePlayback = handleVideoResumed;
          obj6.onError = tmp36;
          obj6.onLoadStart = onLoadStart;
          obj6.onBuffer = onBuffer;
          obj6.onReadyForDisplay = tmp34;
          obj6.onVideoTracks = onVideoTracks;
          obj6.hideControls = isEndCardVisible;
          obj6.repeat = repeat;
          obj6.onPlayerStateChange = onPlayerStateChange;
          tmp52Result = tmp52(tmp(tmp2[16]).AdVideoPlayer, obj6);
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
        cResult[29] = tmp5;
        cResult[30] = isEndCardVisible;
        cResult[31] = tmp6;
        cResult[32] = onBuffer;
        cResult[33] = onLoadStart;
        cResult[34] = onPlayerStateChange;
        cResult[35] = onVideoTracks;
        cResult[36] = playerRef;
        cResult[37] = repeat;
        cResult[38] = tmp7;
        cResult[39] = tmp52Result;
        const tmpResult9 = tmp(tmp2[15]);
      }
      class Be {
        constructor() {
          if (closure_8) {
            tmp = closure_11;
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[13]);
            num = 0;
            result = closure_11.set(obj.withTiming(0, closure_0(closure_2[14]).timingFast));
          }
          return;
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
      const tmpResult6 = tmp(tmp2[12]);
    }
  }
  const tmpResult = handleVideoProgress(onFirstFrame[11]);
  const size = { assetUrl: bounty.videoHls, width, height };
  const scaledFirstFrameImageUrl = handleVideoProgress(onFirstFrame[5]).getScaledFirstFrameImageUrl(size);
  cResult[0] = bounty;
  cResult[1] = height;
  cResult[2] = width;
  cResult[3] = scaledFirstFrameImageUrl;
}) : ((bounty) => {
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
  closure_11 = undefined;
  let sharedValue;
  let callback;
  const tmp = closure_15();
  if (flag2) {
    flag2 = !isActive;
  }
  [tmp3, c9] = onFirstFrame(isActive.useState(false), 2);
  const tmp4 = onFirstFrame(isActive.useState(false), 2);
  first = tmp4[0];
  closure_11 = tmp6;
  isActive.useRef(null);
  let tmp2 = onFirstFrame(isActive.useState(false), 2);
  sharedValue = bounty(handleVideoError[11]).useSharedValue(1);
  let items = [bounty, width, height];
  const memo = isActive.useMemo(() => {
    const size = { assetUrl: bounty.videoHls, width, height };
    return AssetUtils.getScaledFirstFrameImageUrl(size);
  }, items);
  let obj2 = bounty(handleVideoError[11]);
  const token = bounty(handleVideoError[12]).useToken(handleVideoProgress(handleVideoError[6]).colors.TEXT_DEFAULT);
  const combined = "" + bounty.id + ":" + shouldLoadHls;
  const tmp13 = onFirstFrame(isActive.useState(combined), 2);
  if (tmp13[0] !== combined) {
    tmp13[1](combined);
    tmp6(false);
    let result = sharedValue.set(1);
  }
  const items1 = [combined];
  const effect = obj.useEffect(() => () => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
      tmp.current = null;
    }
  }, items1);
  const items2 = [first, sharedValue];
  const effect1 = obj.useEffect(() => {
    if (first) {
      const result = sharedValue.set(timing.withTiming(0, timingPresets.timingFast));
    }
  }, items2);
  callback = obj.useCallback(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
      tmp.current = null;
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
      clearTimeout(tmp3.current);
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
  let obj4 = bounty(handleVideoError[12]);
  function fe() {
    return { opacity: sharedValue.get() };
  }
  fe.__closure = { posterOpacity: sharedValue };
  fe.__workletHash = 6626310924562;
  fe.__initData = __initData4;
  const animatedStyle = bounty(handleVideoError[11]).useAnimatedStyle(fe);
  const tmp7Result = bounty(handleVideoError[11]);
  class Pe {
    constructor() {
      obj = closure_5;
      if (closure_5 != null) {
        value = obj.get();
      }
      tmp2 = closure_0;
      tmp3 = closure_2;
      obj2 = closure_0(closure_2[13]);
      num = 0;
      if (c4) {
        flag = true;
        num = 0;
        if (true !== value) {
          num = 1;
        }
      }
      obj1 = { opacity: obj2.withTiming(num, tmp2(tmp3[14]).timingStandard) };
      return obj1;
    }
  }
  const tmp7Result4 = bounty(handleVideoError[11]);
  Pe.__closure = { isScrollingInBoundsSharedValue, withTiming: bounty(handleVideoError[13]).withTiming, isActive, timingStandard: bounty(handleVideoError[14]).timingStandard };
  Pe.__workletHash = 415757985890;
  Pe.__initData = __initData5;
  const animatedStyle1 = tmp7Result4.useAnimatedStyle(Pe);
  let obj3 = { isScrollingInBoundsSharedValue, withTiming: bounty(handleVideoError[13]).withTiming, isActive, timingStandard: bounty(handleVideoError[14]).timingStandard };
  class Ee {
    constructor() {
      obj = videoEndPeekScale;
      if (null == videoEndPeekScale) {
        return {};
      } else {
        value = obj.get();
        num = 1;
        if (value >= 1) {
          obj1 = {};
        } else {
          obj1 = { transform: null };
          obj5 = { translateY: null };
          tmp2 = height;
          num2 = 2;
          obj5.translateY = -height * (1 - value) / 2;
          items = [, ];
          items[0] = obj5;
          obj6 = { scale: null };
          obj6.scale = value;
          items[1] = obj6;
          obj1.transform = items;
        }
        return obj1;
      }
    }
  }
  Ee.__closure = { videoEndPeekScale, height };
  Ee.__workletHash = 4025671387191;
  Ee.__initData = __initData6;
  const animatedStyle2 = bounty(handleVideoError[11]).useAnimatedStyle(Ee);
  const tmp7Result5 = bounty(handleVideoError[11]);
  const bountyVideoEndAppStoreContext = bounty(handleVideoError[15]).useBountyVideoEndAppStoreContext();
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
  const obj5 = { style: null, children: null };
  const items6 = [width.absoluteFillObject, animatedStyle2];
  obj5.style = items6;
  const obj6 = { style: tmp.videoContainer, children: null };
  let tmp35Result = null;
  if (shouldLoadHls) {
    const obj7 = { ref: playerRef, source: null, automaticallyWaitsToMinimizeStalling: false, maxBitRate: null, bufferConfig: null, preferredForwardBufferDuration: null, initialProgress: null, isFullscreen: false, externallyPaused: null, style: null, contentInsets: null, onProgress: null, onEnd: null, onPausePlayback: null, onResumePlayback: null, onError: null, onLoadStart: null, onBuffer: null, onReadyForDisplay: null, onVideoTracks: null, hideControls: null, showSkipButtons: false, repeat: null, bufferingSpinnerPlacement: "center", onPlayerStateChange: null };
    const obj8 = { uri: bounty.videoHls };
    obj7.source = obj8;
    let prop3;
    if (flag2) {
      prop3 = tmp7(tmp8[17]).SOFT_CAP_PRELOAD_MAX_BITRATE;
    }
    obj7.maxBitRate = prop3;
    let prop4;
    if (flag2) {
      prop4 = tmp7(tmp8[17]).SOFT_CAP_PRELOAD_BUFFER_CONFIG;
    }
    obj7.bufferConfig = prop4;
    let prop5;
    if (flag2) {
      prop5 = tmp7(tmp8[17]).SOFT_CAP_PRELOAD_FORWARD_BUFFER_SEC;
    }
    obj7.preferredForwardBufferDuration = prop5;
    obj7.initialProgress = initialProgress;
    let tmp39 = !isActive;
    if (isActive) {
      tmp39 = isEndCardVisible;
    }
    if (!tmp39) {
      tmp39 = flag;
    }
    obj7.externallyPaused = tmp39;
    obj7.style = tmp32.absoluteFillObject;
    obj7.contentInsets = sharedValue;
    obj7.onProgress = callback3;
    obj7.onEnd = handleVideoEnd;
    obj7.onPausePlayback = handleVideoPaused;
    obj7.onResumePlayback = handleVideoResumed;
    obj7.onError = callback2;
    obj7.onLoadStart = onLoadStart;
    obj7.onBuffer = onBuffer;
    obj7.onReadyForDisplay = callback1;
    obj7.onVideoTracks = onVideoTracks;
    obj7.hideControls = isEndCardVisible;
    obj7.repeat = repeat;
    obj7.onPlayerStateChange = onPlayerStateChange;
    tmp35Result = c9(tmp7(tmp8[16]).AdVideoPlayer, obj7);
  }
  const items7 = [tmp35Result, , , , , ];
  if (null != memo) {
    const obj9 = { style: null, pointerEvents: "none", children: null };
    const items8 = [tmp.poster, animatedStyle];
    obj9.style = items8;
    const obj10 = { style: tmp32.absoluteFillObject, source: null, resizeMode: "cover" };
    const obj11 = { uri: memo };
    obj10.source = obj11;
    const items9 = [c9(tmp10(tmp8[18]), obj10), ];
    let tmp43Result = !first;
    if (!first) {
      const obj12 = { animating: true, size: "small", color: token };
      tmp43Result = tmp43(height, obj12);
    }
    items9[1] = tmp43Result;
    obj9.children = items9;
    let tmp30Result = tmp30(tmp10(tmp8[11]).View, obj9);
    let tmp41 = tmp43;
  } else {
    tmp41 = c9;
    const obj13 = { style: null, pointerEvents: "none" };
    const items10 = [tmp.poster, animatedStyle];
    obj13.style = items10;
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
    const obj14 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null };
    const intl = tmp7(tmp8[19]).intl;
    obj14.accessibilityLabel = intl.string(tmp7(tmp8[19]).t.dcl9MQ);
    obj14.onPress = prop1;
    obj14.style = tmp32.absoluteFillObject;
    tmp41Result = tmp41(videoEndPeekScale, obj14);
  }
  items7[3] = tmp41Result;
  if (isScrollIndicatorEnabled) {
    const obj15 = { opacityStyle: animatedStyle1, enabled: null, isEndCardVisible: null };
    if (isActive) {
      isActive = tmp3;
    }
    obj15.enabled = isActive;
    obj15.isEndCardVisible = isEndCardVisible;
    isScrollIndicatorEnabled = tmp41(tmp10(tmp8[20]), obj15);
    const tmp10Result = tmp10(tmp8[20]);
  }
  items7[4] = isScrollIndicatorEnabled;
  const obj16 = { style: null, pointerEvents: "box-none", children: null };
  const items11 = [width.absoluteFillObject, animatedStyle1];
  obj16.style = items11;
  const obj17 = { bounty, visible: null, sourceQuestContent: null };
  const tmp31 = closure_11;
  const tmp33 = isScrollingInBoundsSharedValue;
  const tmp7Result6 = bounty(handleVideoError[15]);
  if (isCtaVisible) {
    isCtaVisible = !isEndCardVisible;
  }
  const obj18 = { children: null };
  obj17.visible = isCtaVisible;
  obj17.sourceQuestContent = sourceQuestContent;
  obj16.children = tmp41(handleVideoProgress(handleVideoError[21]), obj17);
  items7[5] = tmp41(handleVideoProgress(handleVideoError[11]).View, obj16);
  obj6.children = items7;
  const items12 = [first(tmp33, obj6), ];
  const obj19 = { style: null, children: tmp41(handleVideoProgress(handleVideoError[8]), { progress: normalizedProgress, visible: isProgressBarVisible }) };
  const items13 = [tmp.progress, animatedStyle1];
  obj19.style = items13;
  items12[1] = tmp41(handleVideoProgress(handleVideoError[11]).View, obj19);
  obj5.children = items12;
  const items14 = [first(handleVideoProgress(handleVideoError[11]).View, obj5), ];
  const obj20 = { style: null, children: null };
  const items15 = [tmp.leftRow, animatedStyle1];
  obj20.style = items15;
  const items16 = [tmp41(handleVideoProgress(handleVideoError[22]), { isCompleted, totalSeconds: rewardTotalSeconds, remainingSeconds: rewardRemainingSeconds }), tmp41(bounty(handleVideoError[23]).BalanceWidgetPill, { balance: orbsBalance }, balanceWidgetPillResetKey)];
  obj20.children = items16;
  items14[1] = first(handleVideoProgress(handleVideoError[11]).View, obj20);
  obj18.children = items14;
  return first(tmp31, obj18);
});
