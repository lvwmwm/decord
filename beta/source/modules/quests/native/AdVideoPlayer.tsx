// Module ID: 14564
// Function ID: 14565
// Name: AdVideoPlayer
// Dependencies: [32, 19, 17, 1980, 1074, 21, 576, 7756, 4836, 672, 14551, 4566, 5280, 5284, 4837, 4840, 1110, 504, 1364, 1231, 1613, 1115, 5435, 14565, 14567, 14569, 14570, 9640, 7722, 7724, 14571, 14572, 2]

// Module 14564 (AdVideoPlayer)
import nativeDefault from "native" /* 576 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1110 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import timing from "timing" /* 4837 */;
import timingPresets from "timingPresets" /* 4840 */;
import spring from "spring" /* 5280 */;
import TextTrackTypeDefault from "TextTrackType" /* 7756 */;
import AdsVideoTypes from "AdsVideoTypes" /* 14551 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AppStateStore from "AppStateStore" /* 1980 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import module_672 from "module_672" /* 672 */;
import size_mod from "module_2" /* 2 */;

let duration, initialProgress, isBuffering;

let StyleSheet;
let alphaResult;
let c10;
let c9;
let closure_12;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj10;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let rect1;
let rect2;
let tmp2;
let unpackModuleId;
const springPresets = tmp2(5284);
({ View: hasOwnProperty, StyleSheet, Pressable: metroRequire, ActivityIndicator: metroImportDefault } = react_native);
({ AppStates: c9, ComponentActions: c10 } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let rect = { left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, top: nativeDefault.space.PX_16, bottom: nativeDefault.space.PX_16 };
const TextTrackType = react.memo(TextTrackTypeDefault);
function hasVideoEnded(arg0, arg1) {
  return arg0 >= arg1 - 1;
}
hasVideoEnded.__closure = {};
hasVideoEnded.__workletHash = 8992945176371;
hasVideoEnded.__initData = { code: "function hasVideoEnded_AdVideoPlayerTsx1(currentTime,videoDuration){return currentTime>=videoDuration-1;}" };
function canSeekForward(arg0, arg1, arg2, arg3) {
  if (typeof hasVideoEnded === "function") {
    let tmp4 = arg0 < arg2 - 1;
    if (tmp4) {
      tmp4 = arg3 || arg0 <= arg1 - 1;
      const tmp5 = arg3 || arg0 <= arg1 - 1;
    }
    return tmp4;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
canSeekForward.__closure = { hasVideoEnded };
canSeekForward.__workletHash = 14098132092693;
canSeekForward.__initData = { code: "function canSeekForward_AdVideoPlayerTsx2(currentTime,maxTimestamp,videoDuration,allowUnrestrictedSeeking){const{hasVideoEnded}=this.__closure;return!hasVideoEnded(currentTime,videoDuration)&&(allowUnrestrictedSeeking||currentTime<=maxTimestamp-1);}" };
let createStyles = createStyles_mod;
let obj = { container: obj2, loadingContainer: obj3, bufferingSpinner: { position: "absolute" }, bufferingSpinnerCentered: obj4, video: { height: "100%", width: "100%" }, videoContainer: { position: "relative", height: "100%", width: "100%" }, controls: obj5, controlsTopBottom: rect1, controlsMiddle: obj6, controlsTop: { top: 0 }, controlsBottom: { bottom: 0 }, progressContainer: rect2, progress: obj7, icon: obj8, iconDisabled: obj9, controlButton: obj10 };
obj2 = {};
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, justifyContent: "center", alignItems: "center" };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { justifyContent: "center", alignItems: "center" };
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj5 = { backgroundColor: alphaResult.hex(), justifyContent: "center", alignItems: "center", flexDirection: "column" };
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
const importDefaultResultResult = module_672(nativeDefault.unsafe_rawColors.BLACK);
alphaResult = importDefaultResultResult.alpha(0.5);
rect1 = { flexDirection: "row", justifyContent: "flex-end", padding: nativeDefault.space.PX_8, position: "absolute", left: 0, right: 0 };
obj6 = { justifyContent: "center", alignItems: "center", flexGrow: 1, flexDirection: "row", gap: nativeDefault.space.PX_24, pointerEvents: "box-none" };
rect2 = { position: "absolute", bottom: 0, right: 0, left: 0, justifyContent: "flex-end", height: nativeDefault.space.PX_16, overflow: "hidden" };
obj7 = { height: 1, backgroundColor: nativeDefault.colors.WHITE, shadowOffset: { width: 0, height: 0 }, shadowRadius: 6, shadowOpacity: 1, elevation: 5, shadowColor: nativeDefault.colors.WHITE };
obj8 = { color: nativeDefault.colors.TEXT_DEFAULT };
obj9 = { color: nativeDefault.colors.TEXT_SUBTLE };
obj10 = { padding: nativeDefault.space.PX_8 };
let closure_17 = createStyles(obj);
let closure_18 = { code: "function shouldShowControls_AdVideoPlayerTsx3(){const{hasLoaded,hideControls,showControls,playerState,PlayerState,isVideoEnded}=this.__closure;return hasLoaded&&!hideControls&&(showControls.get()||playerState===PlayerState.PAUSED||playerState===PlayerState.ENDED||playerState===PlayerState.ERRORED||isVideoEnded);}" };
let __initData = { code: "function AdVideoPlayerTsx4(){const{shouldShowControls,withSpring,SUBTLE_SPRING}=this.__closure;const show=shouldShowControls();return{opacity:withSpring(show?1:0,SUBTLE_SPRING),pointerEvents:show?'auto':'none'};}" };
let closure_20 = { code: "function AdVideoPlayerTsx5(){const{withTiming,progressSharedValue,timingFast}=this.__closure;return{width:withTiming(progressSharedValue.get()*100+\"%\",timingFast,'animate-always')};}" };
const memoResult = react.memo((initialProgress) => {
  let ClosedCaptionsOutlineIcon;
  let PressableOpacity3;
  let _undefined;
  let automaticallyWaitsToMinimizeStalling;
  let bufferConfig;
  let bufferingSpinnerPlacement;
  let c34;
  let captionsEnabled;
  let closure_129_2;
  let closure_19;
  let contentInsets;
  let externallyPaused;
  let httpEngine;
  let intl2;
  let intl3;
  let intl4;
  let intl6;
  let intl7;
  let isFullscreen;
  let items25;
  let items26;
  let items29;
  let items30;
  let items31;
  let items34;
  let items35;
  let maxBitRate;
  let num5;
  let obj15;
  let obj17;
  let obj23;
  let obj25;
  let onBuffer;
  let onError;
  let onLoadStart;
  let onOpenTranscript;
  let onToggleCaptions;
  let onToggleFullscreen;
  let onVideoLayout;
  let onVideoTracks;
  let preferredForwardBufferDuration;
  let renderCaptions;
  let repeat;
  let size1;
  let string;
  let style;
  let t;
  let tmp27;
  let tmp57;
  let tmp66Result5;
  let videoRef;
  initialProgress = initialProgress.initialProgress;
  let num = initialProgress.contentDuration;
  const source = initialProgress.source;
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
  ({ onBuffer, onError } = initialProgress);
  const onEnd = initialProgress.onEnd;
  const onPlayerStateChange = initialProgress.onPlayerStateChange;
  const onPausePlayback = initialProgress.onPausePlayback;
  const onResumePlayback = initialProgress.onResumePlayback;
  ({ videoRef, bufferingSpinnerPlacement, onToggleCaptions, onOpenTranscript, onToggleFullscreen, onVideoTracks, onVideoLayout } = initialProgress);
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
  let closure_21;
  let first3;
  let closure_23;
  let ref2;
  let ref3;
  let callback;
  let closure_28;
  let sharedValue;
  let shouldShowControls;
  let sharedValue1;
  let closure_32;
  let callback2;
  c34 = undefined;
  let callback4;
  let callback6;
  let ref4;
  let callback8;
  let callback9;
  let closure_40;
  let callback17;
  let ref = initialProgress.ref;
  let tmp = closure_17();
  let obj = onLoad;
  if (videoRef == null) {
    videoRef = onLoad.useRef(null);
  }
  let tmp2 = onLoadStart;
  const tmp3 = onLoadStart(obj.useState(num), 2);
  first = tmp3[0];
  closure_17 = tmp3[1];
  let obj2 = {};
  const useState = obj.useState;
  let merged = Object.assign(initialProgress);
  const tmp6 = onLoadStart(useState(obj2), 2);
  first1 = tmp6[0];
  __initData = tmp6[1];
  const tmp8 = initialProgress;
  const tmp9 = flag2;
  const tmp10 = onLoadStart(obj.useState(initialProgress(flag2[10]).PlayerState.LOADING), 2);
  first2 = tmp10[0];
  closure_21 = tmp10[1];
  const tmp12 = onLoadStart(obj.useState(false), 2);
  first3 = tmp12[0];
  closure_23 = tmp12[1];
  ref = obj.useRef(null);
  ref2 = obj.useRef(0);
  ref3 = obj.useRef([]);
  let items = [onPlayerStateChange];
  callback = obj.useCallback((arg0) => {
    closure_21(arg0);
    if (onPlayerStateChange != null) {
      onPlayerStateChange(arg0);
    }
  }, items);
  let tmp15 = first3 && first2 === tmp8(tmp9[10]).PlayerState.ENDED;
  if (tmp15) {
    const tmp16 = videoRef;
    if (typeof videoRef === "function") {
      tmp15 = tmp17 >= tmp18 - 1;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  closure_28 = tmp15;
  const tmp8Result = tmp8(tmp9[11]);
  sharedValue = tmp8Result.useSharedValue(false);
  shouldShowControls = function shouldShowControls() {
    let tmp = first3 && !flag8;
    if (tmp) {
      const value = sharedValue.get() || first2 === AdsVideoTypes.PlayerState.PAUSED || first2 === AdsVideoTypes.PlayerState.ENDED || first2 === AdsVideoTypes.PlayerState.ERRORED || closure_28;
      tmp = value;
    }
    return tmp;
  };
  shouldShowControls.__closure = { hasLoaded: first3, hideControls: flag8, showControls: sharedValue, playerState: first2, PlayerState: tmp8(tmp9[10]).PlayerState, isVideoEnded: tmp15 };
  shouldShowControls.__workletHash = 8094403036162;
  shouldShowControls.__initData = first1;
  ({ hasLoaded: first3, hideControls: flag8, showControls: sharedValue, playerState: first2, PlayerState: tmp8(tmp9[10]).PlayerState, isVideoEnded: tmp15 });
  const tmp8Result5 = tmp8(tmp9[11]);
  class Se {
    constructor() {
      let str;
      const tmp = shouldShowControls();
      let num = 0;
      const withSpring = spring.withSpring;
      spring;
      if (tmp) {
        num = 1;
      }
      const obj = { opacity: withSpring(num, springPresets.SUBTLE_SPRING), pointerEvents: str };
      str = "none";
      if (tmp) {
        str = "auto";
      }
      return obj;
    }
  }
  Se.__closure = { shouldShowControls, withSpring: tmp8(tmp9[12]).withSpring, SUBTLE_SPRING: tmp8(tmp9[13]).SUBTLE_SPRING };
  Se.__workletHash = 311315682972;
  Se.__initData = __initData;
  ({ shouldShowControls, withSpring: tmp8(tmp9[12]).withSpring, SUBTLE_SPRING: tmp8(tmp9[13]).SUBTLE_SPRING });
  const animatedStyle = tmp8Result5.useAnimatedStyle(Se);
  const shouldShowControlsResult = shouldShowControls();
  const tmp8Result6 = tmp8(tmp9[11]);
  sharedValue1 = tmp8Result6.useSharedValue(0);
  const tmp8Result7 = tmp8(tmp9[11]);
  class Pe {
    constructor() {
      let withTiming;
      const obj = { width: withTiming(`${tmp2}%`, timingPresets.timingFast, "animate-always") };
      withTiming = timing.withTiming;
      timing;
      const result = 100 * sharedValue1.get();
      return obj;
    }
  }
  Pe.__closure = { withTiming: tmp8(tmp9[14]).withTiming, progressSharedValue: sharedValue1, timingFast: tmp8(tmp9[15]).timingFast };
  Pe.__workletHash = 11793601648786;
  Pe.__initData = first2;
  ({ withTiming: tmp8(tmp9[14]).withTiming, progressSharedValue: sharedValue1, timingFast: tmp8(tmp9[15]).timingFast });
  const animatedStyle1 = tmp8Result7.useAnimatedStyle(Pe);
  closure_32 = obj.useRef(-1);
  let items1 = [sharedValue];
  const callback1 = obj.useCallback((arg0) => {
    let closure_0 = arg0;
    return () => {
      const items = [...arguments];
      clearTimeout(ref.current);
      let result = sharedValue.set(true);
      ref.current = setTimeout(() => {
        const result = closure_1_29.set(false);
      }, 2000);
      if (null != closure_0) {
        const items1 = [];
        HermesBuiltin.arraySpread(items1, items, 0);
        return HermesBuiltin.apply(closure_0, items1, undefined);
      }
    };
  }, items1);
  callback2 = obj.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    closure_19((maxTimestampSec) => {
      const obj = { timestampSec, maxTimestampSec: Math.max(maxTimestampSec.maxTimestampSec, Math.floor(timestampSec)), duration };
      return obj;
    });
  }, []);
  const tmp2Result = tmp2(obj.useState(false), 2);
  [tmp27, c34] = tmp2Result;
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
    if (null != videoRef.current) {
      const _Math = Math;
      const _Math2 = Math;
      const bound = Math.max(0, Math.min(arg0, flag ? tmp9.duration : tmp9.maxTimestampSec));
      ref2.current = (ref2.current + 1) % 100;
      const current = tmp.current;
      current.seek(bound + 0.0001 * ref2.current);
      ref.current = bound;
    }
  }, items3);
  const items4 = [callback4, first2, callback, onResumePlayback, onPausePlayback];
  const imperativeHandle = obj.useImperativeHandle(ref, () => ({
    seekToStart() {
      const tmp = first2;
      if (first2 !== initialProgress(flag2[10]).PlayerState.ERRORED) {
        callback4(0);
        if (tmp === initialProgress(flag2[10]).PlayerState.ENDED) {
          callback(initialProgress(flag2[10]).PlayerState.PLAYING);
          if (onResumePlayback != null) {
            tmp8(initialProgress(flag2[10]).PlaybackTriggerSource.IMPERATIVE_API);
          }
        }
      }
    },
    play() {
      if (first2 === initialProgress(flag2[10]).PlayerState.PAUSED) {
        callback(initialProgress(flag2[10]).PlayerState.PLAYING);
        if (onResumePlayback != null) {
          tmp5(initialProgress(flag2[10]).PlaybackTriggerSource.IMPERATIVE_API);
        }
      }
    },
    pause() {
      if (first2 === initialProgress(flag2[10]).PlayerState.PLAYING) {
        callback(initialProgress(flag2[10]).PlayerState.PAUSED);
        if (onPausePlayback != null) {
          tmp5(initialProgress(flag2[10]).PlaybackTriggerSource.IMPERATIVE_API);
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
      const tmp5 = !flag2 && timestampSec > 5 && timestampSec < duration - 3;
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
      if (first2 !== AdsVideoTypes.PlayerState.PAUSED) {
        if (first2 !== AdsVideoTypes.PlayerState.LOADING) {
          if (first2 === AdsVideoTypes.PlayerState.PLAYING) {
            callback(AdsVideoTypes.PlayerState.PAUSED);
            if (onPausePlayback != null) {
              tmp16(AdsVideoTypes.PlaybackTriggerSource.USER_INTERACTION);
            }
          }
        }
      }
      callback(AdsVideoTypes.PlayerState.PLAYING);
      if (onResumePlayback != null) {
        tmp6(AdsVideoTypes.PlaybackTriggerSource.USER_INTERACTION);
      }
    }
    callback4(0);
    callback(AdsVideoTypes.PlayerState.PLAYING);
    if (onResumePlayback != null) {
      tmp11(AdsVideoTypes.PlaybackTriggerSource.USER_INTERACTION);
    }
  }, items6);
  const items7 = [callback6];
  const callback7 = obj.useCallback(() => callback6(), items7);
  ref4 = obj.useRef(false);
  const items8 = [first2, callback, onPausePlayback];
  callback8 = obj.useCallback(() => {
    ref4.current = false;
    const tmp = ref4;
    if (first2 === AdsVideoTypes.PlayerState.PLAYING) {
      tmp.current = true;
      callback(AdsVideoTypes.PlayerState.PAUSED);
      if (onPausePlayback != null) {
        tmp6(AdsVideoTypes.PlaybackTriggerSource.SYSTEM_INITIATED);
      }
    }
  }, items8);
  const items9 = [first2, callback, onResumePlayback];
  callback9 = obj.useCallback(() => {
    if (ref4.current) {
      tmp.current = false;
      if (first2 !== AdsVideoTypes.PlayerState.ERRORED) {
        callback(AdsVideoTypes.PlayerState.PLAYING);
        if (onResumePlayback != null) {
          tmp7(AdsVideoTypes.PlaybackTriggerSource.SYSTEM_INITIATED);
        }
      }
    }
  }, items9);
  const items10 = [callback8, callback9];
  const effect = obj.useEffect(() => {
    let ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(onPlayerStateChange.QUEST_GAME_LINK_OPENED, callback8);
    let ComponentDispatch2 = ComponentDispatchUtils.ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(onPlayerStateChange.QUEST_APP_STORE_OVERLAY_FINISHED, callback9);
    return () => {
      const ComponentDispatch = initialProgress(flag2[16]).ComponentDispatch;
      ComponentDispatch.unsubscribe(onPlayerStateChange.QUEST_GAME_LINK_OPENED, callback8);
      const ComponentDispatch2 = initialProgress(flag2[16]).ComponentDispatch;
      ComponentDispatch2.unsubscribe(onPlayerStateChange.QUEST_APP_STORE_OVERLAY_FINISHED, callback9);
    };
  }, items10);
  const items11 = [sharedValue, callback6];
  const items12 = [first, sharedValue1, onSeek, callback2, videoRef];
  const callback10 = obj.useCallback(() => {
    const obj = sharedValue;
    if (sharedValue.get()) {
      const result = obj.set(false);
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
      ref.current = null;
      if (first > 0) {
        const result = sharedValue1.set(currentTime.currentTime / tmp4);
        callback2(currentTime.currentTime, first);
      }
      if (onSeek != null) {
        const obj = { fromTimeSec: arr };
        const merged = Object.assign(currentTime);
        tmp9(obj);
      }
    }
  }, items12);
  let tmp39 = first2 === tmp8(tmp9[10]).PlayerState.ERRORED;
  if (!tmp39) {
    let timestampSec = first1.timestampSec;
    if (typeof first === "function") {
      if (typeof videoRef === "function") {
        let tmp45 = timestampSec < tmp42 - 1;
        if (tmp45) {
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
    const tmp = closure_40;
    if (!tmp) {
      let current = ref.current;
      if (current == null) {
        current = sharedValue1.get() * first;
      }
      const current1 = ref3.current;
      current1.push(current);
      callback4(current + 10);
    }
  }, items13);
  const items15 = [sharedValue1, callback2, onProgress];
  const items16 = [callback, onEnd, repeat];
  const callback1Result = callback1(obj.useCallback(() => {
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
  const callback1Result1 = callback1(callback12);
  const callback13 = obj.useCallback((seekableDuration) => {
    let num = 0;
    if (0 !== seekableDuration.seekableDuration) {
      num = seekableDuration.currentTime / seekableDuration.seekableDuration;
    }
    callback2(seekableDuration.currentTime, seekableDuration.seekableDuration);
    const result = sharedValue1.set(num);
    if (onProgress != null) {
      const obj = { currentTime: null, seekableDuration: null, progress: num };
      ({ currentTime: obj.currentTime, seekableDuration: obj.seekableDuration } = seekableDuration);
      tmp3(obj);
    }
  }, items15);
  const items17 = [callback, onLoadStart];
  const callback14 = obj.useCallback(() => {
    const tmp = repeat;
    if (!tmp) {
      callback(AdsVideoTypes.PlayerState.ENDED);
    }
    if (onEnd != null) {
      tmp6();
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
  const items19 = [onError];
  const tmp8Result8 = tmp8(tmp9[17]);
  const tmp53 = tmp8Result8.useStateFromStores(items19, () => onError.getState()) === onEnd.ACTIVE;
  const items20 = [videoRef];
  const layoutEffect = obj.useLayoutEffect(() => {
    let obj = PlatformUtils;
    if (obj.isAndroid()) {
      let tmp = videoRef;
      const current = videoRef.current;
      return () => {
        try {
          const tmp = current;
          if (current != null) {
            const setNativeProps = tmp.setNativeProps;
            if (setNativeProps != null) {
              const obj = { paused: true, repeat: false, src: { uri: null } };
              setNativeProps(obj);
            }
          }
        } catch (tmp4) {
          const obj2 = flag(flag2[19]);
          obj2.captureException(tmp4);
        }
      };
    }
  }, items20);
  let tmp55 = !tmp53;
  if (tmp53) {
    tmp55 = first2 === tmp8(tmp9[10]).PlayerState.PAUSED;
  }
  if (!tmp55) {
    tmp55 = first2 === tmp8(tmp9[10]).PlayerState.LOADING;
  }
  if (!tmp55) {
    tmp55 = externallyPaused;
  }
  let closure_1 = obj.useRef(false);
  [tmp57, closure_129_2] = tmp2(obj.useState(false), 2);
  const items21 = [onBuffer];
  tmp2(obj.useState(false), 2);
  callback17 = obj.useCallback((current) => {
    flag2(current);
    if (current !== ref.current) {
      ref.current = current;
      if (onBuffer != null) {
        onBuffer(current);
      }
    }
  }, items21);
  const items22 = [callback17, first2];
  const items23 = [callback17];
  const callback18 = obj.useCallback((isBuffering) => {
    isBuffering = isBuffering.isBuffering;
    if (!isBuffering) {
      if (!isBuffering) {
        callback17(false);
      }
    } else {
      const tmp2 = require;
      if (first2 !== AdsVideoTypes.PlayerState.LOADING) {
        tmp2(1364);
      }
      callback17(true);
    }
  }, items22);
  const items24 = [callback17];
  const callback19 = obj.useCallback(() => {
    const obj = PlatformUtils;
    if (obj.isIOS()) {
      callback17(true);
    }
  }, items23);
  const callback20 = obj.useCallback(() => {
    const obj = PlatformUtils;
    if (obj.isIOS()) {
      callback17(false);
    }
  }, items24);
  rect = flag(tmp9[20])();
  let tmp63 = isFullscreen && null != rect;
  if (tmp63) {
    let _Math = Math;
    let _Math2 = Math;
    tmp63 = { paddingRight: Math.max(rect.right, flag8.right), paddingLeft: Math.max(rect.left, flag8.left) };
    const obj6 = { paddingRight: Math.max(rect.right, flag8.right), paddingLeft: Math.max(rect.left, flag8.left) };
  }
  const obj7 = { style: items25, accessible: false, children: null };
  items25 = [tmp.container, style];
  const obj8 = { style: items26, onPress: callback10, accessible: !shouldShowControlsResult, accessibilityLabel: string(tmp55 ? t.R3aFPe : t.fTMEUi), children: null };
  items26 = [tmp.videoContainer];
  const intl = tmp8(tmp9[21]).intl;
  string = intl.string;
  t = tmp8(tmp9[21]).t;
  let tmp66Result = first2 !== tmp8(tmp9[10]).PlayerState.ERRORED;
  const tmp69 = onProgress;
  if (tmp66Result) {
    const obj9 = { mixWithOthers: "inherit", httpEngine, automaticallyWaitsToMinimizeStalling, maxBitRate, bufferConfig, preferredForwardBufferDuration, ref: videoRef, accessible: false, importantForAccessibility: "no-hide-descendants", accessibilityRole: "none", style: tmp.video, paused: tmp55, repeat, source, onBuffer: callback18, onPlaybackStalled: callback19, onPlaybackResume: callback20, onLoad: callback5, onSeek: callback11, onProgress: callback13, onLoadStart: callback15, onEnd: callback14, onError: callback16, onReadyForDisplay: callback3, onVideoTracks, onLayout: onVideoLayout, resizeMode: "contain" };
    tmp66Result = tmp66(repeat, obj9);
  }
  const items27 = [tmp66Result, , , , , ];
  let renderCaptionsResult;
  if (renderCaptions != null) {
    renderCaptionsResult = renderCaptions(first1.timestampSec);
  }
  items27[1] = renderCaptionsResult;
  if (tmp66Result5) {
    const items28 = [tmp.bufferingSpinner, ];
    if (!isFullscreen) {
      let rect1;
      let str = "center";
      if ("center" !== bufferingSpinnerPlacement) {
        let num4;
        if (contentInsets != null) {
          num4 = contentInsets.top;
        }
        if (num4 == null) {
          num4 = 0;
        }
        rect1 = { top: num4, left: num5 };
        num5 = undefined;
        if (contentInsets != null) {
          num5 = contentInsets.left;
        }
        if (num5 == null) {
          num5 = 0;
        }
      }
      items28[1] = rect1;
      const obj10 = { animating: true, style: items28, color: flag(tmp9[6]).unsafe_rawColors.WHITE };
      tmp66Result5 = onPausePlayback(tmp73, obj10);
    }
    rect1 = tmp.bufferingSpinnerCentered;
  }
  items27[2] = tmp66Result5;
  let tmp66Result6 = !tmp27;
  if (tmp66Result6) {
    const obj11 = { style: tmp.loadingContainer, children: onPausePlayback(onSeek, { animating: true }) };
    tmp66Result6 = tmp66(tmp67, obj11);
  }
  items27[3] = tmp66Result6;
  const obj12 = { style: items29, accessible: false, children: null };
  items29 = [tmp.controls, animatedStyle];
  let tmp68Result = flag3;
  const View = tmp62(tmp9[11]).View;
  if (!flag3) {
    tmp68Result = flag4;
  }
  if (tmp68Result) {
    const obj13 = { style: items30, children: items31 };
    items30 = [, , ];
    ({ controlsTopBottom: arr31[0], controlsTop: arr31[1] } = tmp);
    items30[2] = tmp63;
    if (flag3) {
      let color;
      const obj14 = { accessibilityRole: "button", accessibilityLabel: intl2.string(tmp8(tmp9[21]).t.bDSZO1), onPress: onToggleCaptions, style: tmp.controlButton, children: onPausePlayback(ClosedCaptionsOutlineIcon, obj15) };
      const PressableOpacity = tmp8(tmp9[22]).PressableOpacity;
      intl2 = tmp8(tmp9[21]).intl;
      ClosedCaptionsOutlineIcon = tmp8(tmp9[23]).ClosedCaptionsOutlineIcon;
      if (captionsEnabled) {
        color = tmp.icon.color;
      } else {
        color = tmp.iconDisabled.color;
      }
      obj15 = { color };
      flag3 = tmp66(PressableOpacity, obj14);
    }
    items31 = [flag3, ];
    if (flag4) {
      const obj16 = { accessibilityRole: "button", accessibilityLabel: intl3.string(tmp8(tmp9[21]).t.KCzjTi), onPress: onOpenTranscript, style: tmp.controlButton, children: onPausePlayback(tmp8(tmp9[24]).TranscriptOutlineIcon, obj17) };
      const PressableOpacity2 = tmp8(tmp9[22]).PressableOpacity;
      intl3 = tmp8(tmp9[21]).intl;
      obj17 = { color: tmp.iconDisabled.color };
      flag4 = tmp66(PressableOpacity2, obj16);
    }
    items31[1] = flag4;
    tmp68Result = tmp68(tmp67, obj13);
  }
  const items32 = [tmp68Result, , ];
  const obj18 = { style: tmp.controlsMiddle, children: null };
  let tmp66Result7 = flag7;
  if (tmp66Result7) {
    const obj19 = { disabled: first2 === tmp8(tmp9[10]).PlayerState.ERRORED, accessibilityRole: "button", accessibilityLabel: intl4.string(tmp8(tmp9[21]).t.r9s3Uv), onPress: callback1Result, children: onPausePlayback(tmp8(tmp9[26]).SkipBackwardIcon, size) };
    const VideoQuestPlayerControlButton = tmp8(tmp9[25]).VideoQuestPlayerControlButton;
    intl4 = tmp8(tmp9[21]).intl;
    size = { color: tmp.icon.color, width: 16, height: 16 };
    tmp66Result7 = tmp66(VideoQuestPlayerControlButton, obj19);
  }
  const items33 = [tmp66Result7, , ];
  const VideoQuestPlayerControlButton2 = tmp8(tmp9[25]).VideoQuestPlayerControlButton;
  const intl5 = tmp8(tmp9[21]).intl;
  if (!tmp15) {
    let K0e7M9;
    if (first2 !== tmp8(tmp9[10]).PlayerState.ERRORED) {
      const t2 = tmp8(tmp9[21]).t;
      K0e7M9 = tmp55 ? t2.R3aFPe : t2.fTMEUi;
    }
    const obj20 = { accessibilityRole: "button", accessibilityLabel: tmp78(K0e7M9), onPress: callback7, children: null };
    if (!tmp15) {
      let tmp66Result8;
      if (first2 !== tmp8(tmp9[10]).PlayerState.ERRORED) {
        let PauseIcon;
        if (tmp55) {
          PauseIcon = tmp8(tmp9[28]).PlayIcon;
        } else {
          PauseIcon = tmp8(tmp9[29]).PauseIcon;
        }
        tmp66Result8 = tmp66(PauseIcon, { size: "lg" });
      }
      obj20.children = tmp66Result8;
      items33[1] = onPausePlayback(VideoQuestPlayerControlButton2, obj20);
      if (flag7) {
        const obj21 = { disabled: tmp39, accessibilityRole: "button", accessibilityLabel: intl6.string(tmp8(tmp9[21]).t.zWDcNP), onPress: callback1Result1, children: onPausePlayback(tmp8(tmp9[30]).SkipForwardIcon, size1) };
        const VideoQuestPlayerControlButton3 = tmp8(tmp9[25]).VideoQuestPlayerControlButton;
        intl6 = tmp8(tmp9[21]).intl;
        size1 = { color: tmp.icon.color, width: 16, height: 16 };
        flag7 = tmp66(VideoQuestPlayerControlButton3, obj21);
      }
      items33[2] = flag7;
      obj18.children = items33;
      items32[1] = onResumePlayback(onReadyForDisplay, obj18);
      if (flag5) {
        const obj22 = { style: items34, children: onPausePlayback(PressableOpacity3, obj23) };
        items34 = [, , ];
        ({ controlsTopBottom: arr35[0], controlsBottom: arr35[1] } = tmp);
        items34[2] = tmp63;
        obj23 = { accessibilityRole: "button", accessibilityLabel: intl7.string(tmp8(tmp9[21]).t.vKZT5t), onPress: onToggleFullscreen, style: tmp.controlButton, children: onPausePlayback(tmp8(tmp9[31]).FullscreenEnterIcon, {}) };
        PressableOpacity3 = tmp8(tmp9[22]).PressableOpacity;
        intl7 = tmp8(tmp9[21]).intl;
        flag5 = tmp66(tmp67, obj22);
      }
      items32[2] = flag5;
      obj12.children = items32;
      items27[4] = onResumePlayback(View, obj12);
      if (flag6) {
        const obj24 = { style: tmp.progressContainer, children: onPausePlayback(flag(tmp9[11]).View, obj25) };
        obj25 = { style: items35 };
        items35 = [tmp.progress, animatedStyle1];
        flag6 = tmp66(tmp67, obj24);
      }
      items27[5] = flag6;
      obj8.children = items27;
      obj7.children = onResumePlayback(tmp69, obj8);
      return onPausePlayback(onReadyForDisplay, obj7);
    }
    tmp66Result8 = tmp66(tmp8(tmp9[27]).RetryIcon, { size: "lg" });
  }
  K0e7M9 = tmp8(tmp9[21]).t.K0e7M9;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/AdVideoPlayer.tsx");

export const AdVideoPlayer = memoResult;
