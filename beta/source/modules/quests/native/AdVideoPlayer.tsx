// Module ID: 15298
// Function ID: 15299
// Name: AdVideoPlayer
// Dependencies: [32, 19, 17, 1983, 1078, 21, 580, 8584, 4758, 676, 558, 568, 15281, 4497, 5187, 5191, 4759, 4762, 1114, 504, 1368, 1235, 1616, 1119, 5341, 15299, 15301, 15303, 15304, 11860, 8550, 8552, 15305, 15306, 2]

// Module 15298 (AdVideoPlayer)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1368 */;
import timing from "timing" /* 4759 */;
import timingPresets from "timingPresets" /* 4762 */;
import spring from "spring" /* 5187 */;
import springPresets from "springPresets" /* 5191 */;
import _modDef8584 from "module_8584" /* 8584 */;
import AdsVideoTypes from "AdsVideoTypes" /* 15281 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AppStateStore from "AppStateStore" /* 1983 */;
import n from "module_676" /* 676 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet, Pressable: metroRequire, ActivityIndicator: closure_7 } = get_ActivityIndicator);
const Constants = fn(1078);
({ AppStates: closure_9, ComponentActions: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let rect = { left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, top: nativeDefault.space.PX_16, bottom: nativeDefault.space.PX_16 };
const _isNativeReflectConstruct = noop.memo(_modDef8584);
function hasVideoEnded(arg0, arg1) {
  return arg0 >= arg1 - 1;
}
hasVideoEnded.__closure = {};
hasVideoEnded.__workletHash = 8992945176371;
hasVideoEnded.__initData = { code: "function hasVideoEnded_AdVideoPlayerTsx1(currentTime,videoDuration){return currentTime>=videoDuration-1;}" };
function canSeekForward(arg0, arg1, arg2, arg3) {
  if (typeof hasVideoEnded === "function") {
    let tmp4 = !tmp3;
    if (arg0 < arg2 - 1) {
      let tmp5 = arg3;
      if (!arg3) {
        tmp5 = arg0 <= arg1 - 1;
      }
      tmp4 = tmp5;
    }
    return tmp4;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
canSeekForward.__closure = { hasVideoEnded };
canSeekForward.__workletHash = 14098132092693;
canSeekForward.__initData = { code: "function canSeekForward_AdVideoPlayerTsx2(currentTime,maxTimestamp,videoDuration,allowUnrestrictedSeeking){const{hasVideoEnded}=this.__closure;return!hasVideoEnded(currentTime,videoDuration)&&(allowUnrestrictedSeeking||currentTime<=maxTimestamp-1);}" };
const createStyles = fn(4758);
let obj = { container: null, loadingContainer: null, bufferingSpinner: null, bufferingSpinnerCentered: null, video: null, videoContainer: null, controls: null, controlsTopBottom: null, controlsMiddle: null, controlsTop: null, controlsBottom: null, progressContainer: null, progress: null, icon: null, iconDisabled: null, controlButton: null };
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.container = {};
let obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.backgroundColor = nativeDefault.colors.BACKGROUND_BASE_LOWEST;
obj4.justifyContent = "center";
obj4.alignItems = "center";
obj.loadingContainer = obj4;
obj.bufferingSpinner = { position: "absolute" };
let obj5 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj5.justifyContent = "center";
obj5.alignItems = "center";
obj.bufferingSpinnerCentered = obj5;
obj.video = { height: "100%", width: "100%" };
obj.videoContainer = { position: "relative", height: "100%", width: "100%" };
let obj6 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
const importDefaultResultResult = n(nativeDefault.unsafe_rawColors.BLACK);
let obj2 = {};
obj6.backgroundColor = n(nativeDefault.unsafe_rawColors.BLACK).alpha(0.5).hex();
obj6.justifyContent = "center";
obj6.alignItems = "center";
obj6.flexDirection = "column";
obj.controls = obj6;
let rect1 = { flexDirection: "row", justifyContent: "flex-end", padding: nativeDefault.space.PX_8, position: "absolute", left: 0, right: 0 };
obj.controlsTopBottom = rect1;
const alphaResult = n(nativeDefault.unsafe_rawColors.BLACK).alpha(0.5);
obj.controlsMiddle = { justifyContent: "center", alignItems: "center", flexGrow: 1, flexDirection: "row", gap: nativeDefault.space.PX_24, pointerEvents: "box-none" };
obj.controlsTop = { top: 0 };
obj.controlsBottom = { bottom: 0 };
const rect2 = { position: "absolute", bottom: 0, right: 0, left: 0, justifyContent: "flex-end", height: nativeDefault.space.PX_16, overflow: "hidden" };
obj.progressContainer = rect2;
let obj7 = { justifyContent: "center", alignItems: "center", flexGrow: 1, flexDirection: "row", gap: nativeDefault.space.PX_24, pointerEvents: "box-none" };
obj.progress = { height: 1, backgroundColor: nativeDefault.colors.WHITE, shadowOffset: { width: 0, height: 0 }, shadowRadius: 6, shadowOpacity: 1, elevation: 5, shadowColor: nativeDefault.colors.WHITE };
let obj8 = { height: 1, backgroundColor: nativeDefault.colors.WHITE, shadowOffset: { width: 0, height: 0 }, shadowRadius: 6, shadowOpacity: 1, elevation: 5, shadowColor: nativeDefault.colors.WHITE };
obj.icon = { color: nativeDefault.colors.TEXT_DEFAULT };
let obj9 = { color: nativeDefault.colors.TEXT_DEFAULT };
obj.iconDisabled = { color: nativeDefault.colors.TEXT_SUBTLE };
let obj10 = { color: nativeDefault.colors.TEXT_SUBTLE };
obj.controlButton = { padding: nativeDefault.space.PX_8 };
let closure_17 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((onBuffer) => {
  const cResult = c.c(5);
  onBuffer = onBuffer.onBuffer;
  noop.useRef(false);
  [tmp3, dependencyMap] = noop.useState(false);
  if (cResult[0] !== onBuffer) {
    const fn = function s(current) {
      dependencyMap(current);
      if (current !== ref.current) {
        ref.current = current;
        if (onBuffer != null) {
          onBuffer(current);
        }
      }
    };
    cResult[0] = onBuffer;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === tmp3) {
    if (cResult[3] === tmp4) {
      let tmp5 = cResult[4];
    }
    return tmp5;
  }
  const obj2 = { isBuffering: tmp3, toggleBuffering: tmp4 };
  cResult[2] = tmp3;
  cResult[3] = tmp4;
  cResult[4] = obj2;
  tmp5 = obj2;
}) : ((onBuffer) => {
  onBuffer = onBuffer.onBuffer;
  noop.useRef(false);
  const tmp = _slicedToArray(noop.useState(false), 2);
  closure_2 = tmp[1];
  const obj = { isBuffering: tmp[0], toggleBuffering: null };
  const items = [onBuffer];
  obj.toggleBuffering = noop.useCallback((current) => {
    closure_2(current);
    if (current !== ref.current) {
      ref.current = current;
      if (onBuffer != null) {
        onBuffer(current);
      }
    }
  }, items);
  return obj;
});
let __initData = { code: "function shouldShowControls_AdVideoPlayerTsx3(){const{hasLoaded,hideControls,showControls,playerState,PlayerState,isVideoEnded}=this.__closure;return hasLoaded&&!hideControls&&(showControls.get()||playerState===PlayerState.PAUSED||playerState===PlayerState.ENDED||playerState===PlayerState.ERRORED||isVideoEnded);}" };
let closure_20 = { code: "function AdVideoPlayerTsx4(){const{shouldShowControls,withSpring,SUBTLE_SPRING}=this.__closure;const show=shouldShowControls();return{opacity:withSpring(show?1:0,SUBTLE_SPRING),pointerEvents:show?'auto':'none'};}" };
let __initData2 = { code: "function AdVideoPlayerTsx5(){const{withTiming,progressSharedValue,timingFast}=this.__closure;return{width:withTiming(progressSharedValue.get()*100+\"%\",timingFast,'animate-always')};}" };
let obj11 = { padding: nativeDefault.space.PX_8 };
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/AdVideoPlayer.tsx");

export const AdVideoPlayer = noop.memo((initialProgress) => {
  initialProgress = initialProgress.initialProgress;
  let num = initialProgress.contentDuration;
  if (num === undefined) {
    num = 0;
  }
  let flag = initialProgress.allowUnrestrictedSeeking;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = initialProgress.disableResumeOnLoad;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ isFullscreen, contentInsets, captionsEnabled, style, externallyPaused } = initialProgress);
  if (captionsEnabled === undefined) {
    captionsEnabled = false;
  }
  ({ renderCaptions, onLoadStart } = initialProgress);
  const onLoad = initialProgress.onLoad;
  const onReadyForDisplay = initialProgress.onReadyForDisplay;
  const onProgress = initialProgress.onProgress;
  const onSeek = initialProgress.onSeek;
  const onError = initialProgress.onError;
  const onEnd = initialProgress.onEnd;
  const onPlayerStateChange = initialProgress.onPlayerStateChange;
  const onPausePlayback = initialProgress.onPausePlayback;
  const onResumePlayback = initialProgress.onResumePlayback;
  ({ videoRef, bufferingSpinnerPlacement, onToggleCaptions, onOpenTranscript, onToggleFullscreen, onBuffer, onVideoTracks, onVideoLayout } = initialProgress);
  if (bufferingSpinnerPlacement === undefined) {
    bufferingSpinnerPlacement = "top-left";
  }
  let flag3 = initialProgress.showCaptionsButton;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = initialProgress.showTranscriptButton;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let flag5 = initialProgress.showFullscreenButton;
  if (flag5 === undefined) {
    flag5 = false;
  }
  let flag6 = initialProgress.showProgress;
  if (flag6 === undefined) {
    flag6 = false;
  }
  let flag7 = initialProgress.showSkipButtons;
  if (flag7 === undefined) {
    flag7 = true;
  }
  let flag8 = initialProgress.hideControls;
  if (flag8 === undefined) {
    flag8 = false;
  }
  ({ repeat, httpEngine, automaticallyWaitsToMinimizeStalling, maxBitRate, bufferConfig, preferredForwardBufferDuration } = initialProgress);
  if (repeat === undefined) {
    repeat = false;
  }
  videoRef = undefined;
  let first;
  closure_17 = undefined;
  let first1;
  __initData = undefined;
  let first2;
  __initData2 = undefined;
  let first3;
  closure_23 = undefined;
  let callback;
  closure_28 = undefined;
  let sharedValue;
  let shouldShowControls;
  let sharedValue1;
  closure_32 = undefined;
  let callback2;
  c34 = undefined;
  let callback4;
  let callback6;
  let callback8;
  let callback9;
  closure_40 = undefined;
  toggleBuffering = undefined;
  let tmp = closure_17();
  if (videoRef == null) {
    videoRef = onLoad.useRef(null);
  }
  let tmp3 = onLoadStart(onLoad.useState(num), 2);
  first = tmp3[0];
  closure_17 = tmp3[1];
  let merged = Object.assign(initialProgress);
  const tmp6 = onLoadStart(onLoad.useState({}), 2);
  first1 = tmp6[0];
  __initData = tmp6[1];
  const tmp9 = flag2;
  const tmp10 = onLoadStart(onLoad.useState(initialProgress(flag2[12]).PlayerState.LOADING), 2);
  first2 = tmp10[0];
  __initData2 = tmp10[1];
  const tmp12 = onLoadStart(onLoad.useState(false), 2);
  first3 = tmp12[0];
  closure_23 = tmp12[1];
  onLoad.useRef(null);
  onLoad.useRef(0);
  onLoad.useRef([]);
  let items = [onPlayerStateChange];
  callback = obj.useCallback((arg0) => {
    closure_21(arg0);
    if (onPlayerStateChange != null) {
      onPlayerStateChange(arg0);
    }
  }, items);
  let tmp15 = first3;
  if (first3) {
    tmp15 = first2 === tmp8(tmp9[12]).PlayerState.ENDED;
  }
  if (tmp15) {
    if (typeof videoRef === "function") {
      tmp15 = tmp17 >= tmp18 - 1;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  closure_28 = tmp15;
  sharedValue = initialProgress(tmp9[13]).useSharedValue(false);
  shouldShowControls = function shouldShowControls() {
    let tmp = first3;
    if (first3) {
      tmp = !flag8;
    }
    if (tmp) {
      value = sharedValue.get();
      if (!value) {
        value = first2 === AdsVideoTypes.PlayerState.PAUSED;
      }
      if (!value) {
        value = first2 === AdsVideoTypes.PlayerState.ENDED;
      }
      if (!value) {
        value = first2 === AdsVideoTypes.PlayerState.ERRORED;
      }
      if (!value) {
        value = closure_28;
      }
      tmp = value;
    }
    return tmp;
  };
  let obj2 = {};
  let tmp2 = onLoadStart;
  const tmp8Result = initialProgress(tmp9[13]);
  shouldShowControls.__closure = { hasLoaded: first3, hideControls: flag8, showControls: sharedValue, playerState: first2, PlayerState: initialProgress(tmp9[12]).PlayerState, isVideoEnded: tmp15 };
  shouldShowControls.__workletHash = 8094403036162;
  shouldShowControls.__initData = __initData;
  const obj3 = { hasLoaded: first3, hideControls: flag8, showControls: sharedValue, playerState: first2, PlayerState: initialProgress(tmp9[12]).PlayerState, isVideoEnded: tmp15 };
  class Pe {
    constructor() {
      tmp = shouldShowControls();
      tmp2 = closure_0;
      tmp3 = closure_2;
      obj = closure_0(closure_2[14]);
      num = 0;
      if (tmp) {
        num = 1;
      }
      obj1 = { opacity: obj.withSpring(num, tmp2(tmp3[15]).SUBTLE_SPRING), pointerEvents: null };
      str = "none";
      if (tmp) {
        str = "auto";
      }
      obj1.pointerEvents = str;
      return obj1;
    }
  }
  const tmp8Result5 = initialProgress(tmp9[13]);
  Pe.__closure = { shouldShowControls, withSpring: initialProgress(tmp9[14]).withSpring, SUBTLE_SPRING: initialProgress(tmp9[15]).SUBTLE_SPRING };
  Pe.__workletHash = 311315682972;
  Pe.__initData = first2;
  const animatedStyle = tmp8Result5.useAnimatedStyle(Pe);
  const obj4 = { shouldShowControls, withSpring: initialProgress(tmp9[14]).withSpring, SUBTLE_SPRING: initialProgress(tmp9[15]).SUBTLE_SPRING };
  const shouldShowControlsResult = shouldShowControls();
  sharedValue1 = initialProgress(tmp9[13]).useSharedValue(0);
  const tmp8Result6 = initialProgress(tmp9[13]);
  function ye() {
    const obj = { width: null };
    const result = 100 * sharedValue1.get();
    obj.width = timing.withTiming(`${tmp}%`, timingPresets.timingFast, "animate-always");
    return obj;
  }
  const tmp8Result7 = initialProgress(tmp9[13]);
  ye.__closure = { withTiming: initialProgress(tmp9[16]).withTiming, progressSharedValue: sharedValue1, timingFast: initialProgress(tmp9[17]).timingFast };
  ye.__workletHash = 11793601648786;
  ye.__initData = __initData2;
  const animatedStyle1 = tmp8Result7.useAnimatedStyle(ye);
  closure_32 = obj.useRef(-1);
  let items1 = [sharedValue];
  const callback1 = obj.useCallback((arg0) => {
    closure_0 = arg0;
    return () => {
      const items = [...arguments];
      clearTimeout(ref.current);
      let result = sharedValue.set(true);
      ref.current = setTimeout(() => {
        const result = closure_1_29.set(false);
      }, 2000);
      if (null != closure_0) {
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        return HermesBuiltin.apply(items1, undefined);
      }
    };
  }, items1);
  callback2 = obj.useCallback((timestampSec, duration) => {
    closure_19((maxTimestampSec) => ({ timestampSec, maxTimestampSec: Math.max(maxTimestampSec.maxTimestampSec, Math.floor(timestampSec)), duration }));
  }, []);
  const obj5 = { withTiming: initialProgress(tmp9[16]).withTiming, progressSharedValue: sharedValue1, timingFast: initialProgress(tmp9[17]).timingFast };
  [tmp27, c34] = tmp2(onLoad.useState(false), 2);
  const items2 = [onReadyForDisplay];
  const items3 = [flag, , , ];
  ({ duration: arr4[1], maxTimestampSec: arr4[2] } = first1);
  items3[3] = videoRef;
  const callback3 = obj.useCallback(() => {
    if (onReadyForDisplay != null) {
      tmp();
    }
    _undefined(true);
  }, items2);
  callback4 = obj.useCallback((arg0) => {
    let seek = videoRef;
    if (null != videoRef.current) {
      let bound = first1;
      const _Math = Math;
      const _Math2 = Math;
      bound = Math.max(0, Math.min(arg0, flag ? bound.duration : bound.maxTimestampSec));
      ref2.current = (ref2.current + 1) % 100;
      const current = seek.current;
      seek = current.seek;
      seek(bound + 0.0001 * ref2.current);
      closure_24.current = bound;
    }
  }, items3);
  const items4 = [callback4, first2, callback, onResumePlayback, onPausePlayback];
  const imperativeHandle = obj.useImperativeHandle(initialProgress.ref, () => ({
    seekToStart() {
      if (first2 !== initialProgress(flag2[12]).PlayerState.ERRORED) {
        callback4(0);
        if (first2 === tmp2(tmp3[12]).PlayerState.ENDED) {
          callback(tmp2(tmp3[12]).PlayerState.PLAYING);
          if (onResumePlayback != null) {
            tmp8(tmp2(tmp3[12]).PlaybackTriggerSource.IMPERATIVE_API);
          }
        }
      }
    },
    play() {
      if (first2 === initialProgress(flag2[12]).PlayerState.PAUSED) {
        callback(tmp(tmp2[12]).PlayerState.PLAYING);
        if (onResumePlayback != null) {
          tmp5(tmp(tmp2[12]).PlaybackTriggerSource.IMPERATIVE_API);
        }
      }
    },
    pause() {
      if (first2 === initialProgress(flag2[12]).PlayerState.PLAYING) {
        callback(tmp(tmp2[12]).PlayerState.PAUSED);
        if (onPausePlayback != null) {
          tmp5(tmp(tmp2[12]).PlaybackTriggerSource.IMPERATIVE_API);
        }
      }
    }
  }), items4);
  const items5 = [videoRef, initialProgress.timestampSec, flag2, callback, onLoad, callback4];
  const items6 = [first2, onPausePlayback, onResumePlayback, tmp15, callback, callback4];
  const callback5 = obj.useCallback((duration) => {
    duration = duration.duration;
    closure_17(duration);
    closure_23(true);
    if (null != videoRef.current) {
      const timestampSec = initialProgress.timestampSec;
      let tmp5 = !flag2;
      if (!flag2) {
        tmp5 = timestampSec > 5;
      }
      if (tmp5) {
        tmp5 = timestampSec < duration - 3;
      }
      if (tmp5) {
        callback4(timestampSec - 1);
      }
      callback(AdsVideoTypes.PlayerState.PLAYING);
      if (onLoad != null) {
        onLoad(duration);
      }
    }
  }, items5);
  callback6 = obj.useCallback(() => {
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    flag = obj.shouldRestartVideo;
    if (flag === undefined) {
      flag = true;
    }
    if (first2 !== AdsVideoTypes.PlayerState.ERRORED) {
      if (tmp !== tmp2(15281).PlayerState.PAUSED) {
        if (tmp !== tmp2(15281).PlayerState.LOADING) {
          if (tmp === tmp2(15281).PlayerState.PLAYING) {
            callback(tmp2(15281).PlayerState.PAUSED);
            if (onPausePlayback != null) {
              tmp16(tmp2(15281).PlaybackTriggerSource.USER_INTERACTION);
            }
          }
        }
      }
      callback(tmp2(15281).PlayerState.PLAYING);
      if (onResumePlayback != null) {
        tmp6(tmp2(15281).PlaybackTriggerSource.USER_INTERACTION);
      }
    }
    callback4(0);
    callback(AdsVideoTypes.PlayerState.PLAYING);
    if (onResumePlayback != null) {
      tmp11(tmp2(15281).PlaybackTriggerSource.USER_INTERACTION);
    }
  }, items6);
  const items7 = [callback6];
  const callback7 = obj.useCallback(() => callback6(), items7);
  onLoad.useRef(false);
  const items8 = [first2, callback, onPausePlayback];
  callback8 = obj.useCallback(() => {
    closure_37.current = false;
    if (first2 === AdsVideoTypes.PlayerState.PLAYING) {
      closure_37.current = true;
      callback(tmp2(15281).PlayerState.PAUSED);
      if (onPausePlayback != null) {
        tmp6(tmp2(15281).PlaybackTriggerSource.SYSTEM_INITIATED);
      }
    }
  }, items8);
  const items9 = [first2, callback, onResumePlayback];
  callback9 = obj.useCallback(() => {
    if (ref4.current) {
      tmp.current = false;
      if (first2 !== AdsVideoTypes.PlayerState.ERRORED) {
        callback(tmp3(15281).PlayerState.PLAYING);
        if (onResumePlayback != null) {
          tmp7(tmp3(15281).PlaybackTriggerSource.SYSTEM_INITIATED);
        }
      }
    }
  }, items9);
  const items10 = [callback8, callback9];
  const effect = obj.useEffect(() => {
    let ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(constants.QUEST_GAME_LINK_OPENED, callback8);
    let ComponentDispatch2 = ComponentDispatchUtils.ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(constants.QUEST_APP_STORE_OVERLAY_FINISHED, callback9);
    return () => {
      const ComponentDispatch = initialProgress(flag2[18]).ComponentDispatch;
      ComponentDispatch.unsubscribe(onPlayerStateChange.QUEST_GAME_LINK_OPENED, callback8);
      const ComponentDispatch2 = initialProgress(flag2[18]).ComponentDispatch;
      ComponentDispatch2.unsubscribe(onPlayerStateChange.QUEST_APP_STORE_OVERLAY_FINISHED, callback9);
    };
  }, items10);
  const items11 = [sharedValue, callback6];
  const items12 = [first, sharedValue1, onSeek, callback2, videoRef];
  const callback10 = obj.useCallback(() => {
    if (sharedValue.get()) {
      const result = sharedValue.set(false);
    }
    callback6({ shouldRestartVideo: false });
  }, items11);
  const callback11 = obj.useCallback((currentTime) => {
    const current = ref3.current;
    let arr = current.shift();
    if (arr == null) {
      arr = null;
    }
    if (null != videoRef.current) {
      closure_24.current = null;
      if (first > 0) {
        const result = sharedValue1.set(currentTime.currentTime / tmp4);
        callback2(currentTime.currentTime, tmp4);
      }
      if (onSeek != null) {
        const obj = {};
        const merged = Object.assign(currentTime);
        obj.fromTimeSec = arr;
        tmp9(obj);
      }
    }
  }, items12);
  let tmp39 = first2 === tmp8(tmp9[12]).PlayerState.ERRORED;
  if (!tmp39) {
    let timestampSec = first1.timestampSec;
    if (typeof first === "function") {
      if (typeof videoRef === "function") {
        let tmp45 = !tmp44;
        if (timestampSec < tmp42 - 1) {
          if (!flag) {
            flag = timestampSec <= tmp41 - 1;
          }
          tmp45 = flag;
        }
        tmp39 = !tmp45;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  closure_40 = tmp39;
  const items13 = [callback4, first, sharedValue1, tmp39];
  const items14 = [callback4, first, sharedValue1, first2, callback];
  const callback12 = obj.useCallback(() => {
    if (!closure_40) {
      let current = ref.current;
      if (current == null) {
        current = sharedValue1.get() * first;
      }
      const current1 = ref3.current;
      current1.push(current);
      callback4(current + 10);
    }
  }, items13);
  let tmp2Result = tmp2(onLoad.useState(false), 2);
  const items15 = [sharedValue1, callback2, onProgress];
  const callback1Result = callback1(onLoad.useCallback(() => {
    let current = ref.current;
    if (current == null) {
      current = sharedValue1.get() * first;
    }
    const current1 = ref3.current;
    current1.push(current);
    callback4(current - 10);
    if (first2 === AdsVideoTypes.PlayerState.ENDED) {
      callback(AdsVideoTypes.PlayerState.PLAYING);
    }
  }, items14));
  const items16 = [callback, onEnd, repeat];
  const callback13 = obj.useCallback((seekableDuration) => {
    let num = 0;
    if (0 !== seekableDuration.seekableDuration) {
      num = seekableDuration.currentTime / seekableDuration.seekableDuration;
    }
    callback2(seekableDuration.currentTime, seekableDuration.seekableDuration);
    const result = sharedValue1.set(num);
    if (onProgress != null) {
      const obj = { currentTime: null, seekableDuration: null, progress: null };
      ({ currentTime: obj.currentTime, seekableDuration: obj.seekableDuration } = seekableDuration);
      obj.progress = num;
      tmp3(obj);
    }
  }, items15);
  const items17 = [callback, onLoadStart];
  const callback14 = obj.useCallback(() => {
    if (!repeat) {
      callback(AdsVideoTypes.PlayerState.ENDED);
    }
    if (onEnd != null) {
      tmp5();
    }
  }, items16);
  const items18 = [callback, onError];
  const callback15 = obj.useCallback(() => {
    callback(AdsVideoTypes.PlayerState.LOADING);
    if (onLoadStart != null) {
      onLoadStart();
    }
  }, items17);
  const callback16 = obj.useCallback((arg0) => {
    callback(AdsVideoTypes.PlayerState.ERRORED);
    if (onError != null) {
      tmp2(arg0);
    }
  }, items18);
  const callback1Result1 = callback1(callback12);
  const items19 = [onError];
  const tmp53 = initialProgress(tmp9[19]).useStateFromStores(items19, () => onError.getState()) === onEnd.ACTIVE;
  const items20 = [videoRef];
  const layoutEffect = obj.useLayoutEffect(() => {
    if (obj.isAndroid()) {
      const current = videoRef.current;
      return () => {
        try {
          if (current != null) {
            const setNativeProps = current.setNativeProps;
            if (setNativeProps != null) {
              const obj = { paused: true, repeat: false, src: { uri: null } };
              setNativeProps(obj);
            }
          }
        } catch (tmp4) {
          flag(flag2[21]).captureException(tmp4);
          const obj2 = flag(flag2[21]);
        }
      };
    }
    obj = PlatformUtils;
  }, items20);
  let tmp55 = !tmp53;
  if (tmp53) {
    tmp55 = first2 === tmp8(tmp9[12]).PlayerState.PAUSED;
  }
  if (!tmp55) {
    tmp55 = first2 === tmp8(tmp9[12]).PlayerState.LOADING;
  }
  if (!tmp55) {
    tmp55 = externallyPaused;
  }
  const tmp8Result8 = initialProgress(tmp9[19]);
  ({ isBuffering, toggleBuffering } = first1({ onBuffer }));
  const items21 = [toggleBuffering, first2];
  const items22 = [toggleBuffering];
  const callback17 = obj.useCallback((isBuffering) => {
    isBuffering = isBuffering.isBuffering;
    if (!isBuffering) {
      if (!isBuffering) {
        toggleBuffering(false);
      }
    } else {
      if (first2 !== AdsVideoTypes.PlayerState.LOADING) {
        const tmp2Result = tmp2(1368);
      }
      toggleBuffering(true);
      tmp2 = require;
    }
  }, items21);
  const items23 = [toggleBuffering];
  const callback18 = obj.useCallback(() => {
    if (obj.isIOS()) {
      toggleBuffering(true);
    }
  }, items22);
  const callback19 = obj.useCallback(() => {
    if (obj.isIOS()) {
      toggleBuffering(false);
    }
  }, items23);
  rect = flag(tmp9[22])();
  let tmp61 = isFullscreen;
  if (isFullscreen) {
    tmp61 = null != rect;
  }
  if (tmp61) {
    const obj6 = { paddingRight: null, paddingLeft: null };
    let _Math = Math;
    obj6.paddingRight = Math.max(rect.right, flag8.right);
    let _Math2 = Math;
    obj6.paddingLeft = Math.max(rect.left, flag8.left);
    tmp61 = obj6;
  }
  const obj7 = { style: null, accessible: false, children: null };
  const items24 = [tmp.container, style];
  obj7.style = items24;
  const obj8 = { style: null, onPress: callback10, accessible: !shouldShowControlsResult, accessibilityLabel: null, children: null };
  const items25 = [tmp.videoContainer];
  obj8.style = items25;
  const intl = tmp8(tmp9[23]).intl;
  const t = tmp8(tmp9[23]).t;
  obj8.accessibilityLabel = intl.string(tmp55 ? t.R3aFPe : t.fTMEUi);
  let tmp64Result = first2 !== tmp8(tmp9[12]).PlayerState.ERRORED;
  if (tmp64Result) {
    const obj9 = { mixWithOthers: "inherit", httpEngine, automaticallyWaitsToMinimizeStalling, maxBitRate, bufferConfig, preferredForwardBufferDuration, ref: videoRef, accessible: false, importantForAccessibility: "no-hide-descendants", accessibilityRole: "none", style: tmp.video, paused: tmp55, repeat, source: initialProgress.source, onBuffer: callback17, onPlaybackStalled: callback18, onPlaybackResume: callback19, onLoad: callback5, onSeek: callback11, onProgress: callback13, onLoadStart: callback15, onEnd: callback14, onError: callback16, onReadyForDisplay: callback3, onVideoTracks, onLayout: onVideoLayout, resizeMode: "contain" };
    tmp64Result = tmp64(repeat, obj9);
  }
  const items26 = [tmp64Result, , , , , ];
  let renderCaptionsResult;
  if (renderCaptions != null) {
    renderCaptionsResult = renderCaptions(first1.timestampSec);
  }
  items26[1] = renderCaptionsResult;
  if (!isBuffering) {
    items26[2] = isBuffering;
    let tmp64Result6 = !tmp27;
    if (!tmp27) {
      const obj10 = { style: tmp.loadingContainer, children: tmp64(onSeek, { animating: true }) };
      tmp64Result6 = tmp64(tmp65, obj10);
    }
    items26[3] = tmp64Result6;
    const obj11 = { style: null, accessible: false, children: null };
    const items27 = [tmp.controls, animatedStyle];
    obj11.style = items27;
    let tmp66Result = flag3;
    if (!flag3) {
      tmp66Result = flag4;
    }
    if (tmp66Result) {
      const obj12 = { style: null, children: null };
      const items28 = [, , ];
      ({ controlsTopBottom: arr30[0], controlsTop: arr30[1] } = tmp);
      items28[2] = tmp61;
      obj12.style = items28;
      if (!flag3) {
        const items29 = [flag3, ];
        if (flag4) {
          const obj13 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
          const intl3 = tmp8(tmp9[23]).intl;
          obj13.accessibilityLabel = intl3.string(tmp8(tmp9[23]).t.KCzjTi);
          obj13.onPress = onOpenTranscript;
          obj13.style = tmp.controlButton;
          const obj14 = { color: tmp.iconDisabled.color };
          obj13.children = tmp64(tmp8(tmp9[26]).TranscriptOutlineIcon, obj14);
          flag4 = tmp64(tmp8(tmp9[24]).PressableOpacity, obj13);
        }
        items29[1] = flag4;
        obj12.children = items29;
        tmp66Result = tmp66(tmp65, obj12);
      } else {
        const obj15 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
        const intl2 = tmp8(tmp9[23]).intl;
        obj15.accessibilityLabel = intl2.string(tmp8(tmp9[23]).t.bDSZO1);
        obj15.onPress = onToggleCaptions;
        obj15.style = tmp.controlButton;
        if (captionsEnabled) {
          let color = tmp.icon.color;
        } else {
          color = tmp.iconDisabled.color;
        }
        const obj16 = { color };
        obj15.children = tmp64(tmp8(tmp9[25]).ClosedCaptionsOutlineIcon, obj16);
        tmp64(tmp8(tmp9[24]).PressableOpacity, obj15);
      }
    }
    const items30 = [tmp66Result, , ];
    const obj17 = { style: tmp.controlsMiddle, children: null };
    let tmp64Result8 = flag7;
    if (flag7) {
      const obj18 = { disabled: first2 === tmp8(tmp9[12]).PlayerState.ERRORED, accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
      const intl4 = tmp8(tmp9[23]).intl;
      obj18.accessibilityLabel = intl4.string(tmp8(tmp9[23]).t.r9s3Uv);
      obj18.onPress = callback1Result;
      const size = { color: tmp.icon.color, width: 16, height: 16 };
      obj18.children = tmp64(tmp8(tmp9[28]).SkipBackwardIcon, size);
      tmp64Result8 = tmp64(tmp8(tmp9[27]).VideoQuestPlayerControlButton, obj18);
    }
    const items31 = [tmp64Result8, , ];
    if (!tmp15) {
      if (first2 !== tmp8(tmp9[12]).PlayerState.ERRORED) {
        const t2 = tmp8(tmp9[23]).t;
        let K0e7M9 = tmp55 ? t2.R3aFPe : t2.fTMEUi;
      }
      const obj19 = { accessibilityRole: "button", accessibilityLabel: tmp78(K0e7M9), onPress: callback7, children: null };
      if (!tmp15) {
        if (first2 !== tmp8(tmp9[12]).PlayerState.ERRORED) {
          if (tmp55) {
            let PauseIcon = tmp8(tmp9[30]).PlayIcon;
          } else {
            PauseIcon = tmp8(tmp9[31]).PauseIcon;
          }
          let tmp64Result9 = tmp64(PauseIcon, { size: "lg" });
        }
        obj19.children = tmp64Result9;
        items31[1] = tmp64(tmp8(tmp9[27]).VideoQuestPlayerControlButton, obj19);
        if (flag7) {
          const obj20 = { disabled: tmp39, accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
          const intl5 = tmp8(tmp9[23]).intl;
          obj20.accessibilityLabel = intl5.string(tmp8(tmp9[23]).t.zWDcNP);
          obj20.onPress = callback1Result1;
          const size1 = { color: tmp.icon.color, width: 16, height: 16 };
          obj20.children = tmp64(tmp8(tmp9[32]).SkipForwardIcon, size1);
          flag7 = tmp64(tmp8(tmp9[27]).VideoQuestPlayerControlButton, obj20);
        }
        items31[2] = flag7;
        obj17.children = items31;
        items30[1] = tmp66(tmp65, obj17);
        if (flag5) {
          const obj21 = { style: null, children: null };
          const items32 = [, , ];
          ({ controlsTopBottom: arr34[0], controlsBottom: arr34[1] } = tmp);
          items32[2] = tmp61;
          obj21.style = items32;
          const obj22 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
          const intl6 = tmp8(tmp9[23]).intl;
          obj22.accessibilityLabel = intl6.string(tmp8(tmp9[23]).t.vKZT5t);
          obj22.onPress = onToggleFullscreen;
          obj22.style = tmp.controlButton;
          obj22.children = tmp64(tmp8(tmp9[33]).FullscreenEnterIcon, {});
          obj21.children = tmp64(tmp8(tmp9[24]).PressableOpacity, obj22);
          flag5 = tmp64(tmp65, obj21);
        }
        items30[2] = flag5;
        obj11.children = items30;
        items26[4] = tmp66(tmp60(tmp9[13]).View, obj11);
        if (flag6) {
          const obj23 = { style: tmp.progressContainer, children: null };
          const obj24 = { style: null };
          const items33 = [tmp.progress, animatedStyle1];
          obj24.style = items33;
          obj23.children = tmp64(tmp60(tmp9[13]).View, obj24);
          flag6 = tmp64(tmp65, obj23);
        }
        items26[5] = flag6;
        obj8.children = items26;
        obj7.children = tmp66(onProgress, obj8);
        return tmp64(tmp65, obj7);
      }
      tmp64Result9 = tmp64(tmp8(tmp9[29]).RetryIcon, { size: "lg" });
    }
    K0e7M9 = tmp8(tmp9[23]).t.K0e7M9;
  } else {
    let items34 = [tmp.bufferingSpinner, ];
    if (!isFullscreen) {
      if ("center" !== bufferingSpinnerPlacement) {
        let num4;
        if (contentInsets != null) {
          num4 = contentInsets.top;
        }
        if (num4 == null) {
          num4 = 0;
        }
        let rect1 = { top: num4, left: null };
        let num5;
        if (contentInsets != null) {
          num5 = contentInsets.left;
        }
        if (num5 == null) {
          num5 = 0;
        }
        rect1.left = num5;
      }
      const obj25 = { animating: true, style: null, color: null };
      items34[1] = rect1;
      obj25.style = items34;
      items34 = tmp60(tmp9[6]).unsafe_rawColors.WHITE;
      obj25.color = items34;
      tmp64(tmp71, obj25);
    }
    rect1 = tmp.bufferingSpinnerCentered;
  }
});
