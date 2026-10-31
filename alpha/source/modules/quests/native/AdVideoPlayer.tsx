// Module ID: 16935
// Function ID: 16936
// Name: AdVideoPlayer
// Dependencies: [32, 19, 17, 1993, 1072, 21, 575, 8874, 5014, 671, 16920, 5095, 5637, 5638, 5254, 5257, 1108, 504, 1375, 1242, 1625, 1113, 6980, 16936, 16938, 16940, 16942, 16943, 11083, 8848, 8850, 16944, 16945, 2]

// Module 16935 (AdVideoPlayer)
import nativeDefault from "native" /* 575 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import timing from "timing" /* 5254 */;
import timingPresets from "timingPresets" /* 5257 */;
import spring from "spring" /* 5637 */;
import media_playback_VideoDefault from "media_playback/Video" /* 8874 */;
import AdsVideoTypes from "AdsVideoTypes" /* 16920 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AppStateStore from "AppStateStore" /* 1993 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import module_671 from "module_671" /* 671 */;
import size_mod from "module_2" /* 2 */;

let duration, isBuffering;

let StyleSheet;
let alphaResult;
let c10;
let c9;
let closure_12;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
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
const springPresets = tmp2(5638);
({ View: hasOwnProperty, StyleSheet, Pressable: metroRequire, ActivityIndicator: metroImportDefault } = react_native);
({ AppStates: c9, ComponentActions: c10 } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let rect = { left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, top: nativeDefault.space.PX_16, bottom: nativeDefault.space.PX_16 };
const Video = react.memo(media_playback_VideoDefault);
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
let obj = { container: obj2, loadingContainer: obj3, bufferingSpinner: { position: "absolute" }, bufferingSpinnerCentered: obj4, video: { height: "100%", width: "100%" }, videoContainer: { position: "relative", height: "100%", width: "100%" }, controls: obj5, controlsTopBottom: rect1, controlsMiddle: obj6, controlsTop: { top: 0 }, controlsBottom: { bottom: 0 }, progressContainer: rect2, progress: obj7, icon: obj8, controlButton: obj9 };
obj2 = {};
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, justifyContent: "center", alignItems: "center" };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { justifyContent: "center", alignItems: "center" };
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj5 = { backgroundColor: alphaResult.hex(), justifyContent: "center", alignItems: "center", flexDirection: "column" };
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
const importDefaultResultResult = module_671(nativeDefault.unsafe_rawColors.BLACK);
alphaResult = importDefaultResultResult.alpha(0.5);
rect1 = { flexDirection: "row", justifyContent: "flex-end", padding: nativeDefault.space.PX_8, position: "absolute", left: 0, right: 0 };
obj6 = { justifyContent: "center", alignItems: "center", flexGrow: 1, flexDirection: "row", gap: nativeDefault.space.PX_24, pointerEvents: "box-none" };
rect2 = { position: "absolute", bottom: 0, right: 0, left: 0, justifyContent: "flex-end", height: nativeDefault.space.PX_16, overflow: "hidden" };
obj7 = { height: 1, backgroundColor: nativeDefault.colors.WHITE, shadowOffset: { width: 0, height: 0 }, shadowRadius: 6, shadowOpacity: 1, elevation: 5, shadowColor: nativeDefault.colors.WHITE };
obj8 = { color: nativeDefault.colors.TEXT_DEFAULT };
obj9 = { padding: nativeDefault.space.PX_8 };
let closure_17 = createStyles(obj);
let __initData = { code: "function shouldShowControls_AdVideoPlayerTsx3(){const{hasLoaded,hideControls,showControls,playerState,PlayerState,isVideoEnded}=this.__closure;return hasLoaded&&!hideControls&&(showControls.get()||playerState===PlayerState.PAUSED||playerState===PlayerState.ENDED||playerState===PlayerState.ERRORED||isVideoEnded);}" };
let closure_19 = { code: "function AdVideoPlayerTsx4(){const{shouldShowControls,withSpring,SUBTLE_SPRING}=this.__closure;const show=shouldShowControls();return{opacity:withSpring(show?1:0,SUBTLE_SPRING),pointerEvents:show?'auto':'none'};}" };
let __initData2 = { code: "function AdVideoPlayerTsx5(){const{withTiming,progressSharedValue,timingFast}=this.__closure;return{width:withTiming(progressSharedValue.get()*100+\"%\",timingFast,'animate-always')};}" };
const memoResult = react.memo(function AdVideoPlayer(initialProgress) {
  let ClosedCaptionsOutlineIcon;
  let PressableOpacity3;
  let _undefined;
  let automaticallyWaitsToMinimizeStalling;
  let bufferConfig;
  let bufferingSpinnerPlacement;
  let c35;
  let captionsEnabled;
  let closure_129_2;
  let closure_18;
  let closure_20;
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
  let items28;
  let items29;
  let items30;
  let items33;
  let items34;
  let maxBitRate;
  let num5;
  let obj15;
  let obj16;
  let obj18;
  let obj24;
  let obj26;
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
  const onSeekStart = initialProgress.onSeekStart;
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
  __initData = undefined;
  let first1;
  __initData2 = undefined;
  let first2;
  let closure_22;
  let first3;
  let closure_24;
  let ref2;
  let ref3;
  let callback;
  let closure_29;
  let sharedValue;
  let shouldShowControls;
  let sharedValue1;
  let closure_33;
  let callback2;
  c35 = undefined;
  let callback4;
  let callback6;
  let ref4;
  let callback8;
  let callback9;
  let closure_41;
  let callback17;
  let ref = initialProgress.ref;
  let tmp = first();
  let obj = onLoad;
  if (videoRef == null) {
    videoRef = onLoad.useRef(null);
  }
  let tmp2 = onLoadStart;
  const tmp3 = onLoadStart(obj.useState(num), 2);
  first = tmp3[0];
  __initData = tmp3[1];
  let obj2 = {};
  const useState = obj.useState;
  let merged = Object.assign(initialProgress);
  const tmp6 = onLoadStart(useState(obj2), 2);
  first1 = tmp6[0];
  __initData2 = tmp6[1];
  const tmp8 = initialProgress;
  const tmp9 = flag2;
  const tmp10 = onLoadStart(obj.useState(initialProgress(flag2[10]).PlayerState.LOADING), 2);
  first2 = tmp10[0];
  closure_22 = tmp10[1];
  const tmp12 = onLoadStart(obj.useState(false), 2);
  first3 = tmp12[0];
  closure_24 = tmp12[1];
  ref = obj.useRef(null);
  ref2 = obj.useRef(0);
  ref3 = obj.useRef([]);
  let items = [onPlayerStateChange];
  callback = obj.useCallback((arg0) => {
    closure_22(arg0);
    if (onPlayerStateChange != null) {
      onPlayerStateChange(arg0);
    }
  }, items);
  let tmp15 = first3 && first2 === tmp8(tmp9[10]).PlayerState.ENDED;
  if (tmp15) {
    const tmp16 = repeat;
    if (typeof repeat === "function") {
      tmp15 = tmp17 >= tmp18 - 1;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  closure_29 = tmp15;
  const tmp8Result = tmp8(tmp9[11]);
  sharedValue = tmp8Result.useSharedValue(false);
  shouldShowControls = function shouldShowControls() {
    let tmp = first3 && !flag8;
    if (tmp) {
      const value = sharedValue.get() || first2 === AdsVideoTypes.PlayerState.PAUSED || first2 === AdsVideoTypes.PlayerState.ENDED || first2 === AdsVideoTypes.PlayerState.ERRORED || closure_29;
      tmp = value;
    }
    return tmp;
  };
  shouldShowControls.__closure = { hasLoaded: first3, hideControls: flag8, showControls: sharedValue, playerState: first2, PlayerState: tmp8(tmp9[10]).PlayerState, isVideoEnded: tmp15 };
  shouldShowControls.__workletHash = 8094403036162;
  shouldShowControls.__initData = __initData;
  ({ hasLoaded: first3, hideControls: flag8, showControls: sharedValue, playerState: first2, PlayerState: tmp8(tmp9[10]).PlayerState, isVideoEnded: tmp15 });
  const tmp8Result5 = tmp8(tmp9[11]);
  class Pe {
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
  Pe.__closure = { shouldShowControls, withSpring: tmp8(tmp9[12]).withSpring, SUBTLE_SPRING: tmp8(tmp9[13]).SUBTLE_SPRING };
  Pe.__workletHash = 311315682972;
  Pe.__initData = first1;
  ({ shouldShowControls, withSpring: tmp8(tmp9[12]).withSpring, SUBTLE_SPRING: tmp8(tmp9[13]).SUBTLE_SPRING });
  const animatedStyle = tmp8Result5.useAnimatedStyle(Pe);
  const shouldShowControlsResult = shouldShowControls();
  const tmp8Result6 = tmp8(tmp9[11]);
  sharedValue1 = tmp8Result6.useSharedValue(0);
  function ye() {
    let withTiming;
    const obj = { width: withTiming(`${tmp2}%`, timingPresets.timingFast, "animate-always") };
    withTiming = timing.withTiming;
    timing;
    const result = 100 * sharedValue1.get();
    return obj;
  }
  const tmp8Result7 = tmp8(tmp9[11]);
  ye.__closure = { withTiming: tmp8(tmp9[14]).withTiming, progressSharedValue: sharedValue1, timingFast: tmp8(tmp9[15]).timingFast };
  ye.__workletHash = 11793601648786;
  ye.__initData = __initData2;
  ({ withTiming: tmp8(tmp9[14]).withTiming, progressSharedValue: sharedValue1, timingFast: tmp8(tmp9[15]).timingFast });
  const animatedStyle1 = tmp8Result7.useAnimatedStyle(ye);
  closure_33 = obj.useRef(-1);
  let items1 = [sharedValue];
  const callback1 = obj.useCallback((arg0) => {
    let closure_0 = arg0;
    return () => {
      const items = [...arguments];
      clearTimeout(ref.current);
      let result = sharedValue.set(true);
      ref.current = setTimeout(() => {
        const result = closure_1_30.set(false);
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
    closure_20((maxTimestampSec) => {
      const obj = { timestampSec, maxTimestampSec: Math.max(maxTimestampSec.maxTimestampSec, Math.floor(timestampSec)), duration };
      return obj;
    });
  }, []);
  const tmp2Result = tmp2(obj.useState(false), 2);
  [tmp27, c35] = tmp2Result;
  const items2 = [onReadyForDisplay];
  const items3 = [flag, , , , ];
  ({ duration: arr4[1], maxTimestampSec: arr4[2] } = first1);
  items3[3] = videoRef;
  items3[4] = onSeekStart;
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
      const bound = Math.max(0, Math.min(arg0, flag ? tmp11.duration : tmp11.maxTimestampSec));
      ref2.current = (ref2.current + 1) % 100;
      const tmp5 = ref2;
      if (onSeekStart != null) {
        tmp6();
      }
      const current = tmp.current;
      current.seek(bound + 0.0001 * tmp5.current);
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
    closure_18(duration);
    closure_24(true);
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
    const subscription = ComponentDispatch.subscribe(onEnd.QUEST_GAME_LINK_OPENED, callback8);
    let ComponentDispatch2 = ComponentDispatchUtils.ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(onEnd.QUEST_APP_STORE_OVERLAY_FINISHED, callback9);
    return () => {
      const ComponentDispatch = initialProgress(flag2[16]).ComponentDispatch;
      ComponentDispatch.unsubscribe(onEnd.QUEST_GAME_LINK_OPENED, callback8);
      const ComponentDispatch2 = initialProgress(flag2[16]).ComponentDispatch;
      ComponentDispatch2.unsubscribe(onEnd.QUEST_APP_STORE_OVERLAY_FINISHED, callback9);
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
    if (typeof videoRef === "function") {
      if (typeof repeat === "function") {
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
  closure_41 = tmp39;
  const items13 = [callback4, first, sharedValue1, tmp39];
  const items14 = [callback4, first, sharedValue1, first2, callback];
  const callback12 = obj.useCallback(() => {
    const tmp = closure_41;
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
  const items19 = [onSeek];
  const tmp8Result8 = tmp8(tmp9[17]);
  const tmp53 = tmp8Result8.useStateFromStores(items19, () => onSeek.getState()) === onError.ACTIVE;
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
        tmp2(1375);
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
    tmp63 = { paddingRight: Math.max(rect.right, onResumePlayback.right), paddingLeft: Math.max(rect.left, onResumePlayback.left) };
    const obj6 = { paddingRight: Math.max(rect.right, onResumePlayback.right), paddingLeft: Math.max(rect.left, onResumePlayback.left) };
  }
  const obj7 = { style: items25, accessible: false, children: null };
  items25 = [tmp.container, style];
  const obj8 = { style: tmp.videoContainer, onPress: callback10, accessible: !shouldShowControlsResult, accessibilityLabel: string(tmp55 ? t.R3aFPe : t.fTMEUi), children: null };
  const intl = tmp8(tmp9[21]).intl;
  string = intl.string;
  t = tmp8(tmp9[21]).t;
  let tmp66Result = first2 !== tmp8(tmp9[10]).PlayerState.ERRORED;
  const tmp69 = onProgress;
  if (tmp66Result) {
    const obj9 = { mixWithOthers: "inherit", httpEngine, automaticallyWaitsToMinimizeStalling, maxBitRate, bufferConfig, preferredForwardBufferDuration, ref: videoRef, accessible: false, importantForAccessibility: "no-hide-descendants", accessibilityRole: "none", style: tmp.video, paused: tmp55, repeat, source, onBuffer: callback18, onPlaybackStalled: callback19, onPlaybackResume: callback20, onLoad: callback5, onSeek: callback11, onProgress: callback13, onLoadStart: callback15, onEnd: callback14, onError: callback16, onReadyForDisplay: callback3, onVideoTracks, onLayout: onVideoLayout, resizeMode: "contain" };
    tmp66Result = tmp66(flag8, obj9);
  }
  const items26 = [tmp66Result, , , , , ];
  let renderCaptionsResult;
  if (renderCaptions != null) {
    renderCaptionsResult = renderCaptions(first1.timestampSec);
  }
  items26[1] = renderCaptionsResult;
  if (tmp66Result5) {
    const items27 = [tmp.bufferingSpinner, ];
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
      items27[1] = rect1;
      const obj10 = { animating: true, style: items27, color: flag(tmp9[6]).unsafe_rawColors.WHITE };
      tmp66Result5 = onPlayerStateChange(tmp73, obj10);
    }
    rect1 = tmp.bufferingSpinnerCentered;
  }
  items26[2] = tmp66Result5;
  let tmp66Result6 = !tmp27;
  if (tmp66Result6) {
    const obj11 = { style: tmp.loadingContainer, children: onPlayerStateChange(onSeekStart, { animating: true }) };
    tmp66Result6 = tmp66(tmp67, obj11);
  }
  items26[3] = tmp66Result6;
  const obj12 = { style: items28, accessible: false, children: null };
  items28 = [tmp.controls, animatedStyle];
  let tmp68Result = flag3;
  const View = tmp62(tmp9[11]).View;
  if (!flag3) {
    tmp68Result = flag4;
  }
  if (tmp68Result) {
    const obj13 = { style: items29, children: items30 };
    items29 = [, , ];
    ({ controlsTopBottom: arr30[0], controlsTop: arr30[1] } = tmp);
    items29[2] = tmp63;
    if (flag3) {
      const obj14 = { accessibilityRole: "togglebutton", accessibilityState: obj15, accessibilityLabel: intl2.string(tmp8(tmp9[21]).t.bDSZO1), onPress: onToggleCaptions, style: tmp.controlButton, children: onPlayerStateChange(ClosedCaptionsOutlineIcon, obj16) };
      obj15 = { checked: captionsEnabled };
      const PressableOpacity = tmp8(tmp9[22]).PressableOpacity;
      intl2 = tmp8(tmp9[21]).intl;
      if (captionsEnabled) {
        ClosedCaptionsOutlineIcon = tmp8(tmp9[23]).ClosedCaptionsIcon;
      } else {
        ClosedCaptionsOutlineIcon = tmp8(tmp9[24]).ClosedCaptionsOutlineIcon;
      }
      obj16 = { color: tmp.icon.color };
      flag3 = tmp66(PressableOpacity, obj14);
    }
    items30 = [flag3, ];
    if (flag4) {
      const obj17 = { accessibilityRole: "button", accessibilityLabel: intl3.string(tmp8(tmp9[21]).t.KCzjTi), onPress: onOpenTranscript, style: tmp.controlButton, children: onPlayerStateChange(tmp8(tmp9[25]).TranscriptOutlineIcon, obj18) };
      const PressableOpacity2 = tmp8(tmp9[22]).PressableOpacity;
      intl3 = tmp8(tmp9[21]).intl;
      obj18 = { color: tmp.icon.color };
      flag4 = tmp66(PressableOpacity2, obj17);
    }
    items30[1] = flag4;
    tmp68Result = tmp68(tmp67, obj13);
  }
  const items31 = [tmp68Result, , ];
  const obj19 = { style: tmp.controlsMiddle, children: null };
  let tmp66Result7 = flag7;
  if (tmp66Result7) {
    const obj20 = { disabled: first2 === tmp8(tmp9[10]).PlayerState.ERRORED, accessibilityRole: "button", accessibilityLabel: intl4.string(tmp8(tmp9[21]).t.r9s3Uv), onPress: callback1Result, children: onPlayerStateChange(tmp8(tmp9[27]).SkipBackwardIcon, size) };
    const VideoQuestPlayerControlButton = tmp8(tmp9[26]).VideoQuestPlayerControlButton;
    intl4 = tmp8(tmp9[21]).intl;
    size = { color: tmp.icon.color, width: 16, height: 16 };
    tmp66Result7 = tmp66(VideoQuestPlayerControlButton, obj20);
  }
  const items32 = [tmp66Result7, , ];
  const VideoQuestPlayerControlButton2 = tmp8(tmp9[26]).VideoQuestPlayerControlButton;
  const intl5 = tmp8(tmp9[21]).intl;
  if (!tmp15) {
    let K0e7M9;
    if (first2 !== tmp8(tmp9[10]).PlayerState.ERRORED) {
      const t2 = tmp8(tmp9[21]).t;
      K0e7M9 = tmp55 ? t2.R3aFPe : t2.fTMEUi;
    }
    const obj21 = { accessibilityRole: "button", accessibilityLabel: tmp78(K0e7M9), onPress: callback7, children: null };
    if (!tmp15) {
      let tmp66Result8;
      if (first2 !== tmp8(tmp9[10]).PlayerState.ERRORED) {
        let PauseIcon;
        if (tmp55) {
          PauseIcon = tmp8(tmp9[29]).PlayIcon;
        } else {
          PauseIcon = tmp8(tmp9[30]).PauseIcon;
        }
        tmp66Result8 = tmp66(PauseIcon, { size: "lg" });
      }
      obj21.children = tmp66Result8;
      items32[1] = onPlayerStateChange(VideoQuestPlayerControlButton2, obj21);
      if (flag7) {
        const obj22 = { disabled: tmp39, accessibilityRole: "button", accessibilityLabel: intl6.string(tmp8(tmp9[21]).t.zWDcNP), onPress: callback1Result1, children: onPlayerStateChange(tmp8(tmp9[31]).SkipForwardIcon, size1) };
        const VideoQuestPlayerControlButton3 = tmp8(tmp9[26]).VideoQuestPlayerControlButton;
        intl6 = tmp8(tmp9[21]).intl;
        size1 = { color: tmp.icon.color, width: 16, height: 16 };
        flag7 = tmp66(VideoQuestPlayerControlButton3, obj22);
      }
      items32[2] = flag7;
      obj19.children = items32;
      items31[1] = onPausePlayback(onReadyForDisplay, obj19);
      if (flag5) {
        const obj23 = { style: items33, children: onPlayerStateChange(PressableOpacity3, obj24) };
        items33 = [, , ];
        ({ controlsTopBottom: arr34[0], controlsBottom: arr34[1] } = tmp);
        items33[2] = tmp63;
        obj24 = { accessibilityRole: "button", accessibilityLabel: intl7.string(tmp8(tmp9[21]).t.vKZT5t), onPress: onToggleFullscreen, style: tmp.controlButton, children: onPlayerStateChange(tmp8(tmp9[32]).FullscreenEnterIcon, {}) };
        PressableOpacity3 = tmp8(tmp9[22]).PressableOpacity;
        intl7 = tmp8(tmp9[21]).intl;
        flag5 = tmp66(tmp67, obj23);
      }
      items31[2] = flag5;
      obj12.children = items31;
      items26[4] = onPausePlayback(View, obj12);
      if (flag6) {
        const obj25 = { style: tmp.progressContainer, children: onPlayerStateChange(flag(tmp9[11]).View, obj26) };
        obj26 = { style: items34 };
        items34 = [tmp.progress, animatedStyle1];
        flag6 = tmp66(tmp67, obj25);
      }
      items26[5] = flag6;
      obj8.children = items26;
      obj7.children = onPausePlayback(tmp69, obj8);
      return onPlayerStateChange(onReadyForDisplay, obj7);
    }
    tmp66Result8 = tmp66(tmp8(tmp9[28]).RetryIcon, { size: "lg" });
  }
  K0e7M9 = tmp8(tmp9[21]).t.K0e7M9;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/AdVideoPlayer.tsx");

export const AdVideoPlayer = memoResult;
