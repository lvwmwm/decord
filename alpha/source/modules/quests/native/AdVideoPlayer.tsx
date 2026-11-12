// Module ID: 17451
// Function ID: 17452
// Name: AdVideoPlayer
// Dependencies: [32, 19, 17, 2117, 1072, 21, 575, 9664, 5243, 671, 17436, 1652, 5876, 5877, 5485, 5488, 1108, 504, 1377, 1242, 1627, 1113, 7364, 17452, 17454, 17456, 17458, 17459, 11028, 7540, 12223, 17460, 17461, 2]

// Module 17451 (AdVideoPlayer)
import nativeDefault from "native" /* 575 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import media_playback_VideoDefault from "media_playback/Video" /* 9664 */;
import AdsVideoTypes from "AdsVideoTypes" /* 17436 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AppStateStore from "AppStateStore" /* 2117 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import module_671 from "module_671" /* 671 */;
import size_mod from "module_2" /* 2 */;

let duration, importDefault, isBuffering;

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
let tmp5;
let tmp6;
let tmp7;
let unpackModuleId;
({ View: hasOwnProperty, StyleSheet, Pressable: metroRequire, ActivityIndicator: metroImportDefault } = react_native);
({ AppStates: c9, ComponentActions: c10 } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let rect = { left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, top: nativeDefault.space.PX_16, bottom: nativeDefault.space.PX_16 };
const Video = react.memo(media_playback_VideoDefault);
let items = [{ code: "(function hasVideoEnded_AdVideoPlayerTsx1(currentTime,videoDuration){return currentTime>=videoDuration-1;})" }];
[tmp5] = items;
function hasVideoEnded(arg0, arg1) {
  return arg0 >= arg1 - 1;
}
hasVideoEnded.__workletHash = 903483685682;
hasVideoEnded.__initData = tmp5;
let items1 = [{ code: "(function canSeekForward_AdVideoPlayerTsx2(currentTime,maxTimestamp,videoDuration,allowUnrestrictedSeeking){let[hasVideoEnded]=this.__closure;return!hasVideoEnded(currentTime,videoDuration)&&(allowUnrestrictedSeeking||currentTime<=maxTimestamp-1);})" }, hasVideoEnded];
let c0;
[tmp6, tmp7] = items1;
function canSeekForward(arg0, arg1, arg2, arg3) {
  let tmp2 = !_undefined(arg0, arg2);
  _undefined(arg0, arg2);
  if (tmp2) {
    tmp2 = arg3 || arg0 <= arg1 - 1;
    const tmp3 = arg3 || arg0 <= arg1 - 1;
  }
  return tmp2;
}
let items2 = [tmp7];
canSeekForward.__closure = items2;
canSeekForward.__workletHash = 4878964503596;
canSeekForward.__initData = tmp6;
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
let closure_18 = { code: "(function shouldShowControls_AdVideoPlayerTsx3(){let[hasLoaded,hideControls,showControls,playerState,PlayerState,isVideoEnded]=this.__closure;return hasLoaded&&!hideControls&&(showControls.get()||playerState===PlayerState.PAUSED||playerState===PlayerState.ENDED||playerState===PlayerState.ERRORED||isVideoEnded);})" };
let closure_19 = { code: "(function AdVideoPlayerTsx4(){let[shouldShowControls,withSpring,SUBTLE_SPRING]=this.__closure;const show=shouldShowControls();return{opacity:withSpring(show?1:0,SUBTLE_SPRING),pointerEvents:show?'auto':'none'};})" };
let closure_20 = { code: "(function AdVideoPlayerTsx5(){let[withTiming,progressSharedValue,timingFast]=this.__closure;return{width:withTiming(progressSharedValue.get()*100+\"%\",timingFast,'animate-always')};})" };
const memoResult = react.memo(function AdVideoPlayer(initialProgress) {
  let ClosedCaptionsOutlineIcon;
  let PressableOpacity3;
  let _undefined;
  let _undefined2;
  let automaticallyWaitsToMinimizeStalling;
  let bufferConfig;
  let bufferingSpinnerPlacement;
  let c22;
  let c32;
  let captionsEnabled;
  let closure_132_2;
  let contentInsets;
  let externallyPaused;
  let httpEngine;
  let intl2;
  let intl3;
  let intl4;
  let intl6;
  let intl7;
  let isFullscreen;
  let items31;
  let items34;
  let items35;
  let items36;
  let items39;
  let items40;
  let maxBitRate;
  let num5;
  let obj13;
  let obj14;
  let obj16;
  let obj22;
  let obj24;
  let obj4;
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
  let tmp13;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp43;
  let tmp73;
  let tmp82Result5;
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
  closure_17 = undefined;
  let first1;
  closure_19 = undefined;
  let first2;
  let closure_21;
  c22 = undefined;
  let ref2;
  let ref3;
  let callback;
  let closure_27;
  let sharedValue;
  let sharedValue1;
  let closure_30;
  let callback2;
  c32 = undefined;
  let callback4;
  let callback6;
  let ref4;
  let callback8;
  let callback9;
  let closure_38;
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
  closure_19 = tmp6[1];
  const tmp8 = initialProgress;
  const tmp9 = flag2;
  const tmp10 = onLoadStart(obj.useState(initialProgress(flag2[10]).PlayerState.LOADING), 2);
  first2 = tmp10[0];
  closure_21 = tmp10[1];
  [tmp13, c22] = onLoadStart(obj.useState(false), 2);
  const tmp12 = onLoadStart(obj.useState(false), 2);
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
  let tmp15 = tmp13 && first2 === tmp8(tmp9[10]).PlayerState.ENDED;
  if (tmp15) {
    const tmp16 = videoRef;
    if (typeof videoRef === "function") {
      tmp15 = tmp17 >= tmp18 - 1;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  closure_27 = tmp15;
  const tmp8Result = tmp8(tmp9[11]);
  sharedValue = tmp8Result.useSharedValue(false);
  let items1 = [first1, tmp13, flag8, sharedValue, first2, tmp8(tmp9[10]).PlayerState, tmp15];
  let c3;
  let c4;
  let c5;
  [tmp20, tmp21, tmp22, obj4, tmp23, tmp24, tmp25] = items1;
  function shouldShowControls() {
    let tmp = c0 && !c1;
    if (tmp) {
      const value = _undefined.get() || c3 === _undefined2.PAUSED || c3 === _undefined2.ENDED || c3 === _undefined2.ERRORED || c5;
      tmp = value;
    }
    return tmp;
  }
  const items2 = [tmp21, tmp22, obj4, tmp23, tmp24, tmp25];
  shouldShowControls.__closure = items2;
  shouldShowControls.__workletHash = 7564458846587;
  shouldShowControls.__initData = tmp20;
  const items3 = [closure_19, shouldShowControls, , ];
  const useAnimatedStyle = tmp8(tmp9[11]).useAnimatedStyle;
  tmp8(tmp9[11]);
  items3[2] = tmp8(tmp9[12]).withSpring;
  items3[3] = tmp8(tmp9[13]).SUBTLE_SPRING;
  let c0;
  let c1;
  let c2;
  [tmp27, tmp28, tmp29, tmp30] = items3;
  class AdVideoPlayerTsx4 {
    constructor() {
      let str;
      const tmp = _undefined();
      let num = 0;
      const tmp2 = c1;
      if (tmp) {
        num = 1;
      }
      const obj = { opacity: tmp2(num, c2), pointerEvents: str };
      str = "none";
      if (tmp) {
        str = "auto";
      }
      return obj;
    }
  }
  const items4 = [tmp28, tmp29, tmp30];
  AdVideoPlayerTsx4.__closure = items4;
  AdVideoPlayerTsx4.__workletHash = 15853617044197;
  AdVideoPlayerTsx4.__initData = tmp27;
  const animatedStyle = useAnimatedStyle(AdVideoPlayerTsx4);
  if (tmp21) {
    tmp21 = !tmp22;
  }
  if (tmp21) {
    tmp21 = obj4.get() || tmp23 === tmp24.PAUSED || tmp23 === tmp24.ENDED || tmp23 === tmp24.ERRORED || tmp25;
    obj4.get() || tmp23 === tmp24.PAUSED || tmp23 === tmp24.ENDED || tmp23 === tmp24.ERRORED || tmp25;
  }
  const tmp8Result6 = tmp8(tmp9[11]);
  sharedValue1 = tmp8Result6.useSharedValue(0);
  const items5 = [first2, , , ];
  const useAnimatedStyle2 = tmp8(tmp9[11]).useAnimatedStyle;
  tmp8(tmp9[11]);
  items5[1] = tmp8(tmp9[14]).withTiming;
  items5[2] = sharedValue1;
  items5[3] = tmp8(tmp9[15]).timingFast;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp35, tmp36, tmp37, tmp38] = items5;
  class AdVideoPlayerTsx5 {
    constructor() {
      const obj = { width: _undefined(`${100 * c1.get()}%`, c2, "animate-always") };
      return obj;
    }
  }
  const items6 = [tmp36, tmp37, tmp38];
  AdVideoPlayerTsx5.__closure = items6;
  AdVideoPlayerTsx5.__workletHash = 12359561558571;
  AdVideoPlayerTsx5.__initData = tmp35;
  const animatedStyle2 = useAnimatedStyle2(AdVideoPlayerTsx5);
  closure_30 = obj.useRef(-1);
  const items7 = [sharedValue];
  const callback1 = obj.useCallback((arg0) => {
    let closure_0 = arg0;
    return () => {
      const items = [...arguments];
      clearTimeout(ref.current);
      let result = sharedValue.set(true);
      ref.current = setTimeout(() => {
        const result = closure_1_28.set(false);
      }, 2000);
      if (null != closure_0) {
        const items1 = [];
        HermesBuiltin.arraySpread(items1, items, 0);
        return HermesBuiltin.apply(closure_0, items1, undefined);
      }
    };
  }, items7);
  callback2 = obj.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    closure_19((maxTimestampSec) => {
      const obj = { timestampSec, maxTimestampSec: Math.max(maxTimestampSec.maxTimestampSec, Math.floor(timestampSec)), duration };
      return obj;
    });
  }, []);
  const tmp2Result = tmp2(obj.useState(false), 2);
  [tmp43, c32] = tmp2Result;
  const items8 = [onReadyForDisplay];
  const items9 = [flag, , , , ];
  ({ duration: arr10[1], maxTimestampSec: arr10[2] } = first1);
  items9[3] = videoRef;
  items9[4] = onSeekStart;
  const callback3 = obj.useCallback(() => {
    if (onReadyForDisplay != null) {
      tmp();
    }
    _undefined2(true);
  }, items8);
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
  }, items9);
  const items10 = [callback4, first2, callback, onResumePlayback, onPausePlayback];
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
  }), items10);
  const items11 = [videoRef, initialProgress.timestampSec, flag2, callback, onLoad, callback4];
  const items12 = [first2, onPausePlayback, onResumePlayback, tmp15, callback, callback4];
  const callback5 = obj.useCallback((duration) => {
    duration = duration.duration;
    closure_17(duration);
    _undefined(true);
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
  }, items11);
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
  }, items12);
  const items13 = [callback6];
  const callback7 = obj.useCallback(() => callback6(), items13);
  ref4 = obj.useRef(false);
  const items14 = [first2, callback, onPausePlayback];
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
  }, items14);
  const items15 = [first2, callback, onResumePlayback];
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
  }, items15);
  const items16 = [callback8, callback9];
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
  }, items16);
  const items17 = [sharedValue, callback6];
  const items18 = [first, sharedValue1, onSeek, callback2, videoRef];
  const callback10 = obj.useCallback(() => {
    const obj = sharedValue;
    if (sharedValue.get()) {
      const result = obj.set(false);
    }
    callback6({ shouldRestartVideo: false });
  }, items17);
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
  }, items18);
  let tmp55 = first2 === tmp8(tmp9[10]).PlayerState.ERRORED;
  if (!tmp55) {
    let timestampSec = first1.timestampSec;
    if (typeof first === "function") {
      let tmp61 = !closure_144_0(timestampSec, tmp58);
      closure_144_0(timestampSec, tmp58);
      if (tmp61) {
        if (!flag) {
          flag = timestampSec <= tmp57 - 1;
        }
        tmp61 = flag;
      }
      tmp55 = !tmp61;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  closure_38 = tmp55;
  const items19 = [callback4, first, sharedValue1, tmp55];
  const items20 = [callback4, first, sharedValue1, first2, callback];
  const callback12 = obj.useCallback(() => {
    const tmp = closure_38;
    if (!tmp) {
      let current = ref.current;
      if (current == null) {
        current = sharedValue1.get() * first;
      }
      const current1 = ref3.current;
      current1.push(current);
      callback4(current + 10);
    }
  }, items19);
  const items21 = [sharedValue1, callback2, onProgress];
  const items22 = [callback, onEnd, repeat];
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
  }, items20));
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
  }, items21);
  const items23 = [callback, onLoadStart];
  const callback14 = obj.useCallback(() => {
    const tmp = repeat;
    if (!tmp) {
      callback(AdsVideoTypes.PlayerState.ENDED);
    }
    if (onEnd != null) {
      tmp6();
    }
  }, items22);
  const items24 = [callback, onError];
  const callback15 = obj.useCallback(() => {
    callback(AdsVideoTypes.PlayerState.LOADING);
    if (onLoadStart != null) {
      onLoadStart();
    }
  }, items23);
  const callback16 = obj.useCallback((arg0) => {
    callback(AdsVideoTypes.PlayerState.ERRORED);
    if (onError != null) {
      tmp2(arg0);
    }
  }, items24);
  const items25 = [onSeek];
  const tmp8Result8 = tmp8(tmp9[17]);
  const tmp69 = tmp8Result8.useStateFromStores(items25, () => onSeek.getState()) === onError.ACTIVE;
  const items26 = [videoRef];
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
  }, items26);
  let tmp71 = !tmp69;
  if (tmp69) {
    tmp71 = first2 === tmp8(tmp9[10]).PlayerState.PAUSED;
  }
  if (!tmp71) {
    tmp71 = first2 === tmp8(tmp9[10]).PlayerState.LOADING;
  }
  if (!tmp71) {
    tmp71 = externallyPaused;
  }
  importDefault = obj.useRef(false);
  [tmp73, closure_132_2] = tmp2(obj.useState(false), 2);
  const items27 = [onBuffer];
  tmp2(obj.useState(false), 2);
  callback17 = obj.useCallback((current) => {
    flag2(current);
    if (current !== ref.current) {
      ref.current = current;
      if (onBuffer != null) {
        onBuffer(current);
      }
    }
  }, items27);
  const items28 = [callback17, first2];
  const items29 = [callback17];
  const callback18 = obj.useCallback((isBuffering) => {
    isBuffering = isBuffering.isBuffering;
    if (!isBuffering) {
      if (!isBuffering) {
        callback17(false);
      }
    } else {
      const tmp2 = require;
      if (first2 !== AdsVideoTypes.PlayerState.LOADING) {
        tmp2(1377);
      }
      callback17(true);
    }
  }, items28);
  const items30 = [callback17];
  const callback19 = obj.useCallback(() => {
    const obj = PlatformUtils;
    if (obj.isIOS()) {
      callback17(true);
    }
  }, items29);
  const callback20 = obj.useCallback(() => {
    const obj = PlatformUtils;
    if (obj.isIOS()) {
      callback17(false);
    }
  }, items30);
  rect = flag(tmp9[20])();
  let tmp79 = isFullscreen && null != rect;
  if (tmp79) {
    let _Math = Math;
    let _Math2 = Math;
    tmp79 = { paddingRight: Math.max(rect.right, onResumePlayback.right), paddingLeft: Math.max(rect.left, onResumePlayback.left) };
    const obj3 = { paddingRight: Math.max(rect.right, onResumePlayback.right), paddingLeft: Math.max(rect.left, onResumePlayback.left) };
  }
  const obj5 = { style: items31, accessible: false, children: null };
  items31 = [tmp.container, style];
  const obj6 = { style: tmp.videoContainer, onPress: callback10, accessible: !tmp21, accessibilityLabel: string(tmp71 ? t.R3aFPe : t.fTMEUi), children: null };
  const intl = tmp8(tmp9[21]).intl;
  string = intl.string;
  t = tmp8(tmp9[21]).t;
  let tmp82Result = first2 !== tmp8(tmp9[10]).PlayerState.ERRORED;
  const tmp85 = onProgress;
  if (tmp82Result) {
    const obj7 = { mixWithOthers: "inherit", httpEngine, automaticallyWaitsToMinimizeStalling, maxBitRate, bufferConfig, preferredForwardBufferDuration, ref: videoRef, accessible: false, importantForAccessibility: "no-hide-descendants", accessibilityRole: "none", style: tmp.video, paused: tmp71, repeat, source, onBuffer: callback18, onPlaybackStalled: callback19, onPlaybackResume: callback20, onLoad: callback5, onSeek: callback11, onProgress: callback13, onLoadStart: callback15, onEnd: callback14, onError: callback16, onReadyForDisplay: callback3, onVideoTracks, onLayout: onVideoLayout, resizeMode: "contain" };
    tmp82Result = tmp82(repeat, obj7);
  }
  const items32 = [tmp82Result, , , , , ];
  let renderCaptionsResult;
  if (renderCaptions != null) {
    renderCaptionsResult = renderCaptions(first1.timestampSec);
  }
  items32[1] = renderCaptionsResult;
  if (tmp82Result5) {
    const items33 = [tmp.bufferingSpinner, ];
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
      items33[1] = rect1;
      const obj8 = { animating: true, style: items33, color: flag(tmp9[6]).unsafe_rawColors.WHITE };
      tmp82Result5 = onPlayerStateChange(tmp89, obj8);
    }
    rect1 = tmp.bufferingSpinnerCentered;
  }
  items32[2] = tmp82Result5;
  let tmp82Result6 = !tmp43;
  if (tmp82Result6) {
    const obj9 = { style: tmp.loadingContainer, children: onPlayerStateChange(onSeekStart, { animating: true }) };
    tmp82Result6 = tmp82(tmp83, obj9);
  }
  items32[3] = tmp82Result6;
  const obj10 = { style: items34, accessible: false, children: null };
  items34 = [tmp.controls, animatedStyle];
  let tmp84Result = flag3;
  const View = tmp78(tmp9[11]).View;
  if (!flag3) {
    tmp84Result = flag4;
  }
  if (tmp84Result) {
    const obj11 = { style: items35, children: items36 };
    items35 = [, , ];
    ({ controlsTopBottom: arr36[0], controlsTop: arr36[1] } = tmp);
    items35[2] = tmp79;
    if (flag3) {
      const obj12 = { accessibilityRole: "togglebutton", accessibilityState: obj13, accessibilityLabel: intl2.string(tmp8(tmp9[21]).t.bDSZO1), onPress: onToggleCaptions, style: tmp.controlButton, children: onPlayerStateChange(ClosedCaptionsOutlineIcon, obj14) };
      obj13 = { checked: captionsEnabled };
      const PressableOpacity = tmp8(tmp9[22]).PressableOpacity;
      intl2 = tmp8(tmp9[21]).intl;
      if (captionsEnabled) {
        ClosedCaptionsOutlineIcon = tmp8(tmp9[23]).ClosedCaptionsIcon;
      } else {
        ClosedCaptionsOutlineIcon = tmp8(tmp9[24]).ClosedCaptionsOutlineIcon;
      }
      obj14 = { color: tmp.icon.color };
      flag3 = tmp82(PressableOpacity, obj12);
    }
    items36 = [flag3, ];
    if (flag4) {
      const obj15 = { accessibilityRole: "button", accessibilityLabel: intl3.string(tmp8(tmp9[21]).t.KCzjTi), onPress: onOpenTranscript, style: tmp.controlButton, children: onPlayerStateChange(tmp8(tmp9[25]).TranscriptOutlineIcon, obj16) };
      const PressableOpacity2 = tmp8(tmp9[22]).PressableOpacity;
      intl3 = tmp8(tmp9[21]).intl;
      obj16 = { color: tmp.icon.color };
      flag4 = tmp82(PressableOpacity2, obj15);
    }
    items36[1] = flag4;
    tmp84Result = tmp84(tmp83, obj11);
  }
  const items37 = [tmp84Result, , ];
  const obj17 = { style: tmp.controlsMiddle, children: null };
  let tmp82Result7 = flag7;
  if (tmp82Result7) {
    const obj18 = { disabled: first2 === tmp8(tmp9[10]).PlayerState.ERRORED, accessibilityRole: "button", accessibilityLabel: intl4.string(tmp8(tmp9[21]).t.r9s3Uv), onPress: callback1Result, children: onPlayerStateChange(tmp8(tmp9[27]).SkipBackwardIcon, size) };
    const VideoQuestPlayerControlButton = tmp8(tmp9[26]).VideoQuestPlayerControlButton;
    intl4 = tmp8(tmp9[21]).intl;
    size = { color: tmp.icon.color, width: 16, height: 16 };
    tmp82Result7 = tmp82(VideoQuestPlayerControlButton, obj18);
  }
  const items38 = [tmp82Result7, , ];
  const VideoQuestPlayerControlButton2 = tmp8(tmp9[26]).VideoQuestPlayerControlButton;
  const intl5 = tmp8(tmp9[21]).intl;
  if (!tmp15) {
    let K0e7M9;
    if (first2 !== tmp8(tmp9[10]).PlayerState.ERRORED) {
      const t2 = tmp8(tmp9[21]).t;
      K0e7M9 = tmp71 ? t2.R3aFPe : t2.fTMEUi;
    }
    const obj19 = { accessibilityRole: "button", accessibilityLabel: tmp94(K0e7M9), onPress: callback7, children: null };
    if (!tmp15) {
      let tmp82Result8;
      if (first2 !== tmp8(tmp9[10]).PlayerState.ERRORED) {
        let PauseIcon;
        if (tmp71) {
          PauseIcon = tmp8(tmp9[29]).PlayIcon;
        } else {
          PauseIcon = tmp8(tmp9[30]).PauseIcon;
        }
        tmp82Result8 = tmp82(PauseIcon, { size: "lg" });
      }
      obj19.children = tmp82Result8;
      items38[1] = onPlayerStateChange(VideoQuestPlayerControlButton2, obj19);
      if (flag7) {
        const obj20 = { disabled: tmp55, accessibilityRole: "button", accessibilityLabel: intl6.string(tmp8(tmp9[21]).t.zWDcNP), onPress: callback1Result1, children: onPlayerStateChange(tmp8(tmp9[31]).SkipForwardIcon, size1) };
        const VideoQuestPlayerControlButton3 = tmp8(tmp9[26]).VideoQuestPlayerControlButton;
        intl6 = tmp8(tmp9[21]).intl;
        size1 = { color: tmp.icon.color, width: 16, height: 16 };
        flag7 = tmp82(VideoQuestPlayerControlButton3, obj20);
      }
      items38[2] = flag7;
      obj17.children = items38;
      items37[1] = onPausePlayback(onReadyForDisplay, obj17);
      if (flag5) {
        const obj21 = { style: items39, children: onPlayerStateChange(PressableOpacity3, obj22) };
        items39 = [, , ];
        ({ controlsTopBottom: arr40[0], controlsBottom: arr40[1] } = tmp);
        items39[2] = tmp79;
        obj22 = { accessibilityRole: "button", accessibilityLabel: intl7.string(tmp8(tmp9[21]).t.vKZT5t), onPress: onToggleFullscreen, style: tmp.controlButton, children: onPlayerStateChange(tmp8(tmp9[32]).FullscreenEnterIcon, {}) };
        PressableOpacity3 = tmp8(tmp9[22]).PressableOpacity;
        intl7 = tmp8(tmp9[21]).intl;
        flag5 = tmp82(tmp83, obj21);
      }
      items37[2] = flag5;
      obj10.children = items37;
      items32[4] = onPausePlayback(View, obj10);
      if (flag6) {
        const obj23 = { style: tmp.progressContainer, children: onPlayerStateChange(flag(tmp9[11]).View, obj24) };
        obj24 = { style: items40 };
        items40 = [tmp.progress, animatedStyle2];
        flag6 = tmp82(tmp83, obj23);
      }
      items32[5] = flag6;
      obj6.children = items32;
      obj5.children = onPausePlayback(tmp85, obj6);
      return onPlayerStateChange(onReadyForDisplay, obj5);
    }
    tmp82Result8 = tmp82(tmp8(tmp9[28]).RetryIcon, { size: "lg" });
  }
  K0e7M9 = tmp8(tmp9[21]).t.K0e7M9;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/AdVideoPlayer.tsx");

export const AdVideoPlayer = memoResult;
