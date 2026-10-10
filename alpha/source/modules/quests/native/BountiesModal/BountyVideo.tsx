// Module ID: 15288
// Function ID: 15289
// Name: BountyVideo
// Dependencies: [32, 19, 17, 15264, 21, 1383, 9184, 587, 4850, 5391, 683, 5092, 15289, 558, 576, 15290, 4818, 5093, 5096, 15274, 15291, 15301, 6156, 1126, 15302, 15304, 15305, 12777, 2]

// Module 15288 (BountyVideo)
import nativeDefault from "native" /* 587 */;
import timing from "timing" /* 5093 */;
import timingPresets from "timingPresets" /* 5096 */;
import LinearGradientDefault from "LinearGradient" /* 5391 */;
import AssetUtils from "AssetUtils" /* 9184 */;
import BountiesModalProgress from "BountiesModalProgress" /* 15289 */;
import pickBountyVideoRendition from "pickBountyVideoRendition" /* 15290 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import BountiesModalConstants from "BountiesModalConstants" /* 15264 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "utils/PlatformUtils" /* 1383 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import module_683_mod from "module_683" /* 683 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
let module_683 = module_683_mod;
let items = [, ];
const importDefaultResult1Result = module_683(nativeDefault.unsafe_rawColors.PLUM_23);
const alphaResult = importDefaultResult1Result.alpha(0.4);
items[0] = alphaResult.hex();
module_683 = module_683_mod;
const importDefaultResult2Result = module_683(nativeDefault.unsafe_rawColors.PLUM_23);
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
const __initData3 = { code: "function BountyVideoTsx3(){const{videoEndPeekProgress,StyleSheet,getBountyVideoEndPeekScale,videoEndPeekTargetScale,getBountyVideoEndPeekClipHeight,width,height,VIDEO_CONTAINER_BORDER_RADIUS}=this.__closure;if(videoEndPeekProgress==null){return StyleSheet.absoluteFillObject;}const progress_0=videoEndPeekProgress.get();const scale=getBountyVideoEndPeekScale(progress_0,videoEndPeekTargetScale);const clipHeight=getBountyVideoEndPeekClipHeight(progress_0,width,height);const centerPivotCompensation=clipHeight*(1-scale)/2;return{position:\"absolute\",top:0,left:0,width:width,height:clipHeight,overflow:\"hidden\",borderRadius:VIDEO_CONTAINER_BORDER_RADIUS,transform:[{translateY:-centerPivotCompensation},{scale:scale}]};}" };
const __initData4 = { code: "function BountyVideoTsx4(){const{videoEndPeekProgress,StyleSheet,getBountyVideoEndPeekClipHeight,width,height}=this.__closure;if(videoEndPeekProgress==null){return StyleSheet.absoluteFillObject;}const progress_1=videoEndPeekProgress.get();const clipHeight_0=getBountyVideoEndPeekClipHeight(progress_1,width,height);return{width:width,height:height,transform:[{translateY:(clipHeight_0-height)/2}]};}" };
const __initData5 = { code: "function BountyVideoTsx5(){const{posterOpacity}=this.__closure;return{opacity:posterOpacity.get()};}" };
const __initData6 = { code: "function BountyVideoTsx6(){const{isScrollingInBoundsSharedValue,withTiming,isActive,timingStandard}=this.__closure;var _isScrollingInBoundsS;const isScrollingInBounds=((_isScrollingInBoundsS=isScrollingInBoundsSharedValue)===null||_isScrollingInBoundsS===void 0?void 0:_isScrollingInBoundsS.get())===true;return{opacity:withTiming(isActive&&!isScrollingInBounds?1:0,timingStandard)};}" };
const __initData7 = { code: "function BountyVideoTsx7(){const{videoEndPeekProgress,StyleSheet,getBountyVideoEndPeekScale,videoEndPeekTargetScale,getBountyVideoEndPeekClipHeight,width,height,VIDEO_CONTAINER_BORDER_RADIUS}=this.__closure;if(videoEndPeekProgress==null){return StyleSheet.absoluteFillObject;}const progress_0=videoEndPeekProgress.get();const scale=getBountyVideoEndPeekScale(progress_0,videoEndPeekTargetScale);const clipHeight=getBountyVideoEndPeekClipHeight(progress_0,width,height);const centerPivotCompensation=clipHeight*(1-scale)/2;return{position:'absolute',top:0,left:0,width:width,height:clipHeight,overflow:'hidden',borderRadius:VIDEO_CONTAINER_BORDER_RADIUS,transform:[{translateY:-centerPivotCompensation},{scale:scale}]};}" };
const __initData8 = { code: "function BountyVideoTsx8(){const{videoEndPeekProgress,StyleSheet,getBountyVideoEndPeekClipHeight,width,height}=this.__closure;if(videoEndPeekProgress==null){return StyleSheet.absoluteFillObject;}const progress_1=videoEndPeekProgress.get();const clipHeight_0=getBountyVideoEndPeekClipHeight(progress_1,width,height);return{width:width,height:height,transform:[{translateY:(clipHeight_0-height)/2}]};}" };
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function BountyVideo(height) {
  let balanceWidgetPillResetKey;
  let bounty;
  let closure_12;
  let closure_6;
  let closure_7;
  let closure_9;
  let handleVideoEnd;
  let handleVideoError;
  let handleVideoPaused;
  let handleVideoProgress;
  let handleVideoResumed;
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
  let obj6;
  let onBuffer;
  let onFirstFrame;
  let onLoadStart;
  let onPlayerStateChange;
  let onVideoTracks;
  let orbsBalance;
  let playerRef;
  let ref;
  let renderEndCard;
  let repeat;
  let rewardRemainingSeconds;
  let rewardTotalSeconds;
  let shouldLoadHls;
  let sourceQuestContent;
  let tmp33;
  let tmp34;
  let tmp37;
  let videoHls;
  let videoRenditions;
  let width;
  let tmp = handleVideoProgress;
  let tmp2 = onFirstFrame;
  let obj = handleVideoProgress(onFirstFrame[14]);
  const cResult = obj.c(111);
  ({ bounty, sourceQuestContent, isCompleted, isCtaVisible, isEndCardVisible, isScrollIndicatorEnabled, isProgressBarVisible, orbsBalance, handleVideoEnd, handleVideoProgress } = height);
  ({ handleVideoPaused, handleVideoResumed, handleVideoError } = height);
  ({ onLoadStart, onBuffer, onFirstFrame } = height);
  ({ onVideoTracks, rewardRemainingSeconds, rewardTotalSeconds, normalizedProgress, initialProgress, repeat, isActive, isRecapPageRevealed, isScrollingInBoundsSharedValue } = height);
  ({ renderEndCard, playerRef, onPlayerStateChange, balanceWidgetPillResetKey, shouldLoadHls, width } = height);
  height = height.height;
  const softDownloadCapsEnabled = height.softDownloadCapsEnabled;
  let tmp4 = undefined !== isScrollIndicatorEnabled && isScrollIndicatorEnabled;
  let tmp5 = undefined !== isActive && isActive;
  StyleSheet = tmp5;
  let tmp8 = undefined !== softDownloadCapsEnabled && softDownloadCapsEnabled;
  const tmp6 = undefined !== isRecapPageRevealed && isRecapPageRevealed;
  let tmp9 = closure_21();
  if (tmp8) {
    tmp8 = !tmp5;
  }
  let obj2 = width;
  [r10056, closure_7] = isScrollingInBoundsSharedValue(width.useState(false), 2);
  isScrollingInBoundsSharedValue(width.useState(false), 2);
  const tmp12 = isScrollingInBoundsSharedValue(width.useState(false), 2);
  const first = tmp12[0];
  getBountyVideoEndPeekClipHeight = tmp14;
  getBountyVideoEndPeekScale = width.useRef(null);
  const tmpResult = tmp(tmp2[8]);
  const sharedValue = tmpResult.useSharedValue(1);
  ({ videoHls, videoRenditions } = bounty);
  const tmp10 = isScrollingInBoundsSharedValue;
  if (cResult[0] === videoHls) {
    let tmp15;
    if (cResult[1] === videoRenditions) {
      tmp15 = cResult[2];
    }
    if (cResult[3] === height) {
      if (cResult[4] === tmp15) {
        let tmp29;
        let tmp30;
        const tmpResult9 = tmp(tmp2[16]);
        const token = tmpResult9.useToken(handleVideoError(tmp2[7]).colors.TEXT_DEFAULT);
        const _HermesInternal = HermesInternal;
        const combined = "" + bounty.id + ":" + tmp7 + ":" + tmp15;
        const tmp10Result = tmp10(obj2.useState(combined), 2);
        if (tmp10Result[0] !== combined) {
          tmp10Result[1](combined);
          tmp12[1](false);
          let result = sharedValue.set(1);
        }
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          class Ie {
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
          cResult[7] = Ie;
          tmp29 = Ie;
        } else {
          class Ie {
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
        if (cResult[8] !== combined) {
          class Ie {
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
          tmp31[0] = combined;
          cResult[8] = combined;
          cResult[9] = tmp31;
          tmp30 = tmp31;
        } else {
          class Ie {
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
        const effect = obj2.useEffect(tmp29, tmp30);
        if (cResult[10] === first) {
          let tmp36;
          class Ie {
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
          const effect1 = obj2.useEffect(tmp33, tmp34);
          const _Symbol2 = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            class Ie {
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
            cResult[14] = tmp37;
            tmp36 = tmp37;
          } else {
            class Ie {
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
          tmp37 = tmp36;
          if (cResult[15] !== onFirstFrame) {
            class Ie {
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
            cResult[15] = onFirstFrame;
            cResult[16] = tmp39;
          } else {
            class Ie {
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
          if (cResult[17] !== handleVideoError) {
            class Xe {
              constructor(arg0) {
                tmp37();
                if (handleVideoError != null) {
                  tmp2(arg0);
                }
              }
            }
            cResult[17] = handleVideoError;
            cResult[18] = Xe;
          } else {
            class Xe {
              constructor(arg0) {
                tmp37();
                if (handleVideoError != null) {
                  tmp2(arg0);
                }
              }
            }
          }
          if (cResult[19] !== handleVideoProgress) {
            class Xe {
              constructor(arg0) {
                tmp37();
                if (handleVideoError != null) {
                  tmp2(arg0);
                }
              }
            }
            cResult[19] = handleVideoProgress;
            cResult[20] = tmp42;
          } else {
            class Xe {
              constructor(arg0) {
                tmp37();
                if (handleVideoError != null) {
                  tmp2(arg0);
                }
              }
            }
          }
          function qe() {
            const obj = { opacity: sharedValue.get() };
            return obj;
          }
          let obj3 = { posterOpacity: sharedValue };
          qe.__closure = obj3;
          qe.__workletHash = 4975136521719;
          qe.__initData = __initData;
          const tmpResult10 = tmp(tmp2[8]);
          const animatedStyle = tmpResult10.useAnimatedStyle(qe);
          tmp(tmp2[8]);
          class Je {
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
          const obj4 = { isScrollingInBoundsSharedValue, withTiming: tmp(tmp2[17]).withTiming, isActive: tmp5, timingStandard: tmp(tmp2[18]).timingStandard };
          class De {
            constructor() {
              const tmp = first;
              if (tmp) {
                set = sharedValue.set;
                const obj = timing;
                const result = set(obj.withTiming(0, timingPresets.timingFast));
              }
            }
          }
          Je.__closure = obj4;
          Je.__workletHash = 12676706441349;
          Je.__initData = __initData2;
          tmp46(Je);
          const tmpResult12 = tmp(tmp2[19]);
          const bountyVideoEndAppStoreContext = tmpResult12.useBountyVideoEndAppStoreContext();
          let tmp50;
          if (tmp5) {
            class Xe {
              constructor(arg0) {
                tmp37();
                if (handleVideoError != null) {
                  tmp2(arg0);
                }
              }
            }
            if (bountyVideoEndAppStoreContext != null) {
              class Xe {
                constructor(arg0) {
                  tmp37();
                  if (handleVideoError != null) {
                    tmp2(arg0);
                  }
                }
              }
            }
            tmp50 = tmp51;
          }
          let closure_13 = tmp50;
          if (bountyVideoEndAppStoreContext != null) {
            class Xe {
              constructor(arg0) {
                tmp37();
                if (handleVideoError != null) {
                  tmp2(arg0);
                }
              }
            }
          }
          if (undefined == null) {
            class Xe {
              constructor(arg0) {
                tmp37();
                if (handleVideoError != null) {
                  tmp2(arg0);
                }
              }
            }
          }
          let c14 = tmp52;
          const tmpResult13 = tmp(tmp2[8]);
          class Ze {
            constructor() {
              const obj = closure_13;
              if (null == closure_13) {
                return metroRequire.absoluteFillObject;
              } else {
                const value = obj.get();
                const tmp5 = ref(value, c14);
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
          size = { videoEndPeekProgress: tmp50, StyleSheet, getBountyVideoEndPeekScale, videoEndPeekTargetScale: undefined, getBountyVideoEndPeekClipHeight, width, height, VIDEO_CONTAINER_BORDER_RADIUS: lg };
          Ze.__closure = size;
          Ze.__workletHash = 6241135979205;
          Ze.__initData = __initData3;
          const animatedStyle1 = tmpResult13.useAnimatedStyle(Ze);
          function et() {
            const obj = closure_13;
            if (null == closure_13) {
              return metroRequire.absoluteFillObject;
            } else {
              size = { width, height, transform: items };
              items = [{ translateY: (c9(obj.get(), width, height) - height) / 2 }];
              const obj2 = { translateY: (c9(obj.get(), width, height) - height) / 2 };
              return size;
            }
          }
          const size1 = { videoEndPeekProgress: tmp50, StyleSheet, getBountyVideoEndPeekClipHeight, width, height };
          et.__closure = size1;
          et.__workletHash = 2736417945524;
          et.__initData = __initData4;
          const tmpResult14 = tmp(tmp2[8]);
          const animatedStyle2 = tmpResult14.useAnimatedStyle(et);
          const tmp53 = StyleSheet;
          if (isCtaVisible) {
            class Xe {
              constructor(arg0) {
                tmp37();
                if (handleVideoError != null) {
                  tmp2(arg0);
                }
              }
            }
          }
          if (true === tmp5) {
            class Xe {
              constructor(arg0) {
                tmp37();
                if (handleVideoError != null) {
                  tmp2(arg0);
                }
              }
            }
            if (bountyVideoEndAppStoreContext != null) {
              class Xe {
                constructor(arg0) {
                  tmp37();
                  if (handleVideoError != null) {
                    tmp2(arg0);
                  }
                }
              }
            }
            if (true === tmp62) {
              class Xe {
                constructor(arg0) {
                  tmp37();
                  if (handleVideoError != null) {
                    tmp2(arg0);
                  }
                }
              }
            }
          }
          if (tmp4) {
            class Xe {
              constructor(arg0) {
                tmp37();
                if (handleVideoError != null) {
                  tmp2(arg0);
                }
              }
            }
            if (bountyVideoEndAppStoreContext != null) {
              class Xe {
                constructor(arg0) {
                  tmp37();
                  if (handleVideoError != null) {
                    tmp2(arg0);
                  }
                }
              }
            }
            tmp4 = true !== tmp63;
          }
          if (cResult[21] === tmp8) {
            class Xe {
              constructor(arg0) {
                tmp37();
                if (handleVideoError != null) {
                  tmp2(arg0);
                }
              }
            }
          }
          let tmp66Result = null;
          if (undefined === shouldLoadHls || shouldLoadHls) {
            class Xe {
              constructor(arg0) {
                tmp37();
                if (handleVideoError != null) {
                  tmp2(arg0);
                }
              }
            }
            const obj5 = { ref: playerRef, source: obj6, automaticallyWaitsToMinimizeStalling: false, maxBitRate: undefined, bufferConfig: undefined, preferredForwardBufferDuration: undefined, initialProgress, isFullscreen: false, externallyPaused: null, style: tmp53.absoluteFillObject, contentInsets: null, onProgress: tmp41, onEnd: handleVideoEnd, onPausePlayback: handleVideoPaused, onResumePlayback: handleVideoResumed, onError: tmp40, onLoadStart, onBuffer, onReadyForDisplay: tmp38, onVideoTracks, hideControls: isEndCardVisible, showSkipButtons: false, repeat, bufferingSpinnerPlacement: "center", onPlayerStateChange };
            obj6 = { uri: tmp15 };
            const AdVideoPlayer = tmp(tmp2[20]).AdVideoPlayer;
            if (tmp8) {
              class Xe {
                constructor(arg0) {
                  tmp37();
                  if (handleVideoError != null) {
                    tmp2(arg0);
                  }
                }
              }
            }
            if (tmp8) {
              class Xe {
                constructor(arg0) {
                  tmp37();
                  if (handleVideoError != null) {
                    tmp2(arg0);
                  }
                }
              }
            }
            if (tmp8) {
              class Xe {
                constructor(arg0) {
                  tmp37();
                  if (handleVideoError != null) {
                    tmp2(arg0);
                  }
                }
              }
            }
            const tmp70 = !tmp5;
            if (tmp5) {
              class Xe {
                constructor(arg0) {
                  tmp37();
                  if (handleVideoError != null) {
                    tmp2(arg0);
                  }
                }
              }
            }
            if (!tmp70) {
              class Xe {
                constructor(arg0) {
                  tmp37();
                  if (handleVideoError != null) {
                    tmp2(arg0);
                  }
                }
              }
            }
            class Je {
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
            class De {
              constructor() {
                const tmp = first;
                if (tmp) {
                  set = sharedValue.set;
                  const obj = timing;
                  const result = set(obj.withTiming(0, timingPresets.timingFast));
                }
              }
            }
            tmp66Result = tmp66(AdVideoPlayer, obj5);
          }
          cResult[21] = tmp8;
          cResult[22] = tmp38;
          cResult[23] = handleVideoEnd;
          cResult[24] = tmp40;
          cResult[25] = handleVideoPaused;
          cResult[26] = tmp41;
          cResult[27] = handleVideoResumed;
          cResult[28] = tmp15;
          cResult[29] = initialProgress;
          cResult[30] = tmp5;
          cResult[31] = isEndCardVisible;
          cResult[32] = tmp6;
          cResult[33] = onBuffer;
          cResult[34] = onLoadStart;
          cResult[35] = onPlayerStateChange;
          cResult[36] = onVideoTracks;
          cResult[37] = playerRef;
          cResult[38] = repeat;
          cResult[39] = undefined === shouldLoadHls || shouldLoadHls;
          cResult[40] = tmp66Result;
        }
        class De {
          constructor() {
            const tmp = first;
            if (tmp) {
              set = sharedValue.set;
              const obj = timing;
              const result = set(obj.withTiming(0, timingPresets.timingFast));
            }
          }
        }
        items = [first, sharedValue];
        cResult[10] = first;
        cResult[11] = sharedValue;
        cResult[12] = De;
        cResult[13] = items;
        tmp33 = De;
        tmp34 = items;
      }
    }
    const size2 = { assetUrl: tmp15, width, height };
    const tmpResult15 = tmp(tmp2[6]);
    const scaledFirstFrameImageUrl = tmpResult15.getScaledFirstFrameImageUrl(size2);
    num = 3;
    cResult[3] = height;
    cResult[4] = tmp15;
    cResult[5] = width;
    cResult[6] = scaledFirstFrameImageUrl;
  }
  const tmpResult16 = tmp(tmp2[15]);
  const result1 = tmpResult16.pickBountyPlaybackHlsUri({ videoHls, videoRenditions }, tmp(tmp2[15]).BOUNTY_MOBILE_MODAL_RENDITION_PICK);
  cResult[0] = videoHls;
  cResult[1] = videoRenditions;
  cResult[2] = result1;
  tmp15 = result1;
}) : (function BountyVideo(handleVideoProgress) {
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
    const obj = pickBountyVideoRendition;
    const obj2 = { videoHls, videoRenditions };
    return obj.pickBountyPlaybackHlsUri(obj2, pickBountyVideoRendition.BOUNTY_MOBILE_MODAL_RENDITION_PICK);
  }, items);
  const items1 = [memo, width, height];
  const memo1 = isScrollingInBoundsSharedValue.useMemo(() => {
    size = { assetUrl: memo, width, height };
    const obj = AssetUtils;
    return obj.getScaledFirstFrameImageUrl(size);
  }, items1);
  const obj4 = handleVideoProgress(onFirstFrame[16]);
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
  Te.__workletHash = 10695366069875;
  Te.__initData = __initData5;
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
  let obj3 = { isScrollingInBoundsSharedValue, withTiming: tmp7(tmp8[17]).withTiming, isActive, timingStandard: tmp7(tmp8[18]).timingStandard };
  Ae.__closure = obj3;
  Ae.__workletHash = 804749945089;
  Ae.__initData = __initData6;
  const animatedStyle1 = tmp7Result5.useAnimatedStyle(Ae);
  const tmp7Result6 = handleVideoProgress(onFirstFrame[19]);
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
  Ie.__workletHash = 11435474180417;
  Ie.__initData = __initData7;
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
  Fe.__workletHash = 8683364100408;
  Fe.__initData = __initData8;
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
    const AdVideoPlayer = tmp7(tmp8[20]).AdVideoPlayer;
    if (flag2) {
      prop3 = tmp7(tmp8[21]).SOFT_CAP_PRELOAD_MAX_BITRATE;
    }
    prop4 = undefined;
    if (flag2) {
      prop4 = tmp7(tmp8[21]).SOFT_CAP_PRELOAD_BUFFER_CONFIG;
    }
    prop5 = undefined;
    if (flag2) {
      prop5 = tmp7(tmp8[21]).SOFT_CAP_PRELOAD_FORWARD_BUFFER_SEC;
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
    items9 = [sharedValue(handleVideoError(tmp8[22]), obj11), ];
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
    const obj16 = { accessibilityRole: "button", accessibilityLabel: intl.string(handleVideoProgress(onFirstFrame[23]).t.dcl9MQ), onPress: prop1, style: height.absoluteFillObject };
    intl = tmp7(tmp8[23]).intl;
    tmp37Result5 = tmp37(first, obj16);
  }
  items7[4] = tmp37Result5;
  if (isScrollIndicatorEnabled) {
    const obj17 = { opacityStyle: animatedStyle1, enabled: isActive, isEndCardVisible };
    const tmp11Result = handleVideoError(onFirstFrame[24]);
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
  tmp11Result2 = handleVideoError(onFirstFrame[25]);
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
  items17 = [sharedValue(handleVideoError(tmp8[26]), { isCompleted, totalSeconds: rewardTotalSeconds, remainingSeconds: rewardRemainingSeconds }), sharedValue(tmp7(tmp8[27]).BalanceWidgetPill, { balance: orbsBalance }, balanceWidgetPillResetKey)];
  items15[1] = videoHls(View6, obj22);
  return videoHls(tmp36, obj20);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountyVideo.tsx");

export const BountyVideo = tmp7;
