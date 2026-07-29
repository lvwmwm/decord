// Module ID: 14045
// Function ID: 14046
// Name: hasVideoEnded
// Dependencies: [32, 19, 17, 6328, 676, 21, 712, 8143, 4189, 689, 4050, 4599, 4603, 4190, 4193, 1231, 589, 500, 1208, 1581, 1236, 4717, 14046, 14048, 14050, 14051, 9971, 8127, 8129, 14052, 14053, 2]

// Module 14045 (hasVideoEnded)
import _slicedToArray from "_slicedToArray";
import importAllResult from "useSafeAreaInsets";
import get_ActivityIndicator from "set";
import getState from "getState";
import ME from "ME";
import jsxProd from "PressableBase";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import createCacheKey from "createCacheKey";
import importDefaultResult from "n";

let StyleSheet;
let c10;
let c5;
let c9;
let closure_12;
let closure_6;
let error;
let unpackModuleId;
const require = arg1;
let c4 = importAllResult;
({ View: c5, StyleSheet, Pressable: closure_6, ActivityIndicator: error } = get_ActivityIndicator);
({ AppStates: c9, ComponentActions: c10 } = ME);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let obj = { left: require("Themes").space.PX_16, right: require("Themes").space.PX_16, top: require("Themes").space.PX_16, bottom: require("Themes").space.PX_16 };
function hasVideoEnded(arg0, arg1) {
  return arg0 >= arg1 - 1;
}
hasVideoEnded.__closure = {};
hasVideoEnded.__workletHash = 8992945176371;
hasVideoEnded.__initData = { code: "function hasVideoEnded_AdVideoPlayerTsx1(currentTime,videoDuration){return currentTime>=videoDuration-1;}" };
function canSeekForward(arg0, arg1, arg2, arg3) {
  if (typeof hasVideoEnded !== "find") {
    HermesBuiltin.throwTypeError();
  }
  let tmp2 = !tmp;
  if (arg0 < arg2 - 1) {
    let tmp3 = arg3;
    if (!arg3) {
      tmp3 = arg0 <= arg1 - 1;
    }
    tmp2 = tmp3;
  }
  return tmp2;
}
canSeekForward.__closure = { hasVideoEnded };
canSeekForward.__workletHash = 14098132092693;
canSeekForward.__initData = { code: "function canSeekForward_AdVideoPlayerTsx2(currentTime,maxTimestamp,videoDuration,allowUnrestrictedSeeking){const{hasVideoEnded}=this.__closure;return!hasVideoEnded(currentTime,videoDuration)&&(allowUnrestrictedSeeking||currentTime<=maxTimestamp-1);}" };
obj = { container: null, loadingContainer: null, bufferingSpinner: null, bufferingSpinnerCentered: null, video: null, videoContainer: null, controls: null, controlsTopBottom: null, controlsMiddle: null, controlsTop: null, controlsBottom: null, progressContainer: null, progress: null, icon: null, iconDisabled: null, controlButton: null };
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj[0] = {};
createCacheKey = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.backgroundColor = require("Themes").colors.BACKGROUND_BASE_LOWEST;
createCacheKey.justifyContent = "center";
createCacheKey.alignItems = "center";
obj[1] = createCacheKey;
obj[2] = { position: "absolute" };
let obj3 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj3.justifyContent = "center";
obj3.alignItems = "center";
obj[3] = obj3;
obj[4] = { height: "100%", width: "100%" };
obj[5] = { position: "relative", height: "100%", width: "100%" };
let obj4 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
let obj1 = {};
const importDefaultResultResult = require("n")(require("Themes").unsafe_rawColors.BLACK);
obj4.backgroundColor = require("n")(require("Themes").unsafe_rawColors.BLACK).alpha(0.5).hex();
obj4.justifyContent = "center";
obj4.alignItems = "center";
obj4.flexDirection = "column";
obj[6] = obj4;
const alphaResult = require("n")(require("Themes").unsafe_rawColors.BLACK).alpha(0.5);
obj[7] = { flexDirection: "row", justifyContent: "flex-end", padding: require("Themes").space.PX_8, position: "absolute", left: 0, right: 0 };
let obj5 = { flexDirection: "row", justifyContent: "flex-end", padding: require("Themes").space.PX_8, position: "absolute", left: 0, right: 0 };
obj[8] = { justifyContent: "center", alignItems: "center", flexGrow: 1, flexDirection: "row", gap: require("Themes").space.PX_24, pointerEvents: "box-none" };
obj[9] = { top: 0 };
obj[10] = { bottom: 0 };
let obj6 = { justifyContent: "center", alignItems: "center", flexGrow: 1, flexDirection: "row", gap: require("Themes").space.PX_24, pointerEvents: "box-none" };
obj[11] = { position: "absolute", bottom: 0, right: 0, left: 0, justifyContent: "flex-end", height: require("Themes").space.PX_16, overflow: "hidden" };
let obj7 = { position: "absolute", bottom: 0, right: 0, left: 0, justifyContent: "flex-end", height: require("Themes").space.PX_16, overflow: "hidden" };
obj[12] = { height: 1, backgroundColor: require("Themes").colors.WHITE, shadowOffset: { width: 0, height: 0 }, shadowRadius: 6, shadowOpacity: 1, elevation: 5, shadowColor: require("Themes").colors.WHITE };
let obj8 = { height: 1, backgroundColor: require("Themes").colors.WHITE, shadowOffset: { width: 0, height: 0 }, shadowRadius: 6, shadowOpacity: 1, elevation: 5, shadowColor: require("Themes").colors.WHITE };
obj[13] = { color: require("Themes").colors.TEXT_DEFAULT };
let obj9 = { color: require("Themes").colors.TEXT_DEFAULT };
obj[14] = { color: require("Themes").colors.TEXT_SUBTLE };
let obj10 = { color: require("Themes").colors.TEXT_SUBTLE };
obj[15] = { padding: require("Themes").space.PX_8 };
let closure_17 = createCacheKey.createStyles(obj);
let obj12 = { PAUSED: "paused", PLAYING: "playing", ENDED: "ended", LOADING: "loading", ERRORED: "errored" };
let obj13 = { USER_INTERACTION: "USER_INTERACTION", SYSTEM_INITIATED: "SYSTEM_INITIATED", IMPERATIVE_API: "IMPERATIVE_API" };
let closure_20 = { code: "function shouldShowControls_AdVideoPlayerTsx3(){const{hasLoaded,hideControls,showControls,playerState,PlayerState,isVideoEnded}=this.__closure;return hasLoaded&&!hideControls&&(showControls.get()||playerState===PlayerState.PAUSED||playerState===PlayerState.ENDED||playerState===PlayerState.ERRORED||isVideoEnded);}" };
let closure_21 = { code: "function AdVideoPlayerTsx4(){const{shouldShowControls,withSpring,SUBTLE_SPRING}=this.__closure;const show=shouldShowControls();return{opacity:withSpring(show?1:0,SUBTLE_SPRING),pointerEvents:show?'auto':'none'};}" };
let closure_22 = { code: "function AdVideoPlayerTsx5(){const{withTiming,progressSharedValue,timingFast}=this.__closure;return{width:withTiming(progressSharedValue.get()*100+\"%\",timingFast,'animate-always')};}" };
let obj11 = { padding: require("Themes").space.PX_8 };
const memoResult = importAllResult.memo((initialProgress) => {
  let automaticallyWaitsToMinimizeStalling;
  let bufferConfig;
  let bufferingSpinnerPlacement;
  let c34;
  let captionsEnabled;
  let contentInsets;
  let duration;
  let duration2;
  let externallyPaused;
  let flag2;
  let httpEngine;
  let isFullscreen;
  let maxBitRate;
  let maxTimestampSec;
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
  let style;
  let timestampSec;
  let timestampSec2;
  let tmp25;
  let tmp53;
  let videoRef;
  initialProgress = initialProgress.initialProgress;
  onBuffer = initialProgress;
  let num = initialProgress.contentDuration;
  if (num === undefined) {
    num = 0;
  }
  let flag = initialProgress.allowUnrestrictedSeeking;
  if (flag === undefined) {
    flag = false;
  }
  let importDefault = flag;
  flag2 = initialProgress.disableResumeOnLoad;
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
  let callback;
  let first1;
  let closure_19;
  let first2;
  let closure_21;
  let first3;
  let closure_23;
  let closure_24;
  let closure_25;
  let closure_26;
  callback = undefined;
  let c28;
  let sharedValue;
  let shouldShowControls;
  let sharedValue1;
  let closure_32;
  let callback2;
  c34 = undefined;
  let callback4;
  let callback6;
  let closure_37;
  let callback8;
  let callback9;
  let c40;
  let callback17;
  let tmp = callback();
  let obj = onLoad;
  if (videoRef == null) {
    videoRef = onLoad.useRef(null);
  }
  let tmp3 = onLoadStart(obj.useState(num), 2);
  first = tmp3[0];
  callback = tmp3[1];
  obj = {};
  let merged = Object.assign(initialProgress);
  const tmp6 = onLoadStart(obj.useState(obj), 2);
  first1 = tmp6[0];
  closure_19 = tmp6[1];
  const tmp9 = onLoadStart(obj.useState(first1.LOADING), 2);
  first2 = tmp9[0];
  closure_21 = tmp9[1];
  const tmp11 = onLoadStart(obj.useState(false), 2);
  first3 = tmp11[0];
  closure_23 = tmp11[1];
  closure_24 = obj.useRef(null);
  closure_25 = obj.useRef(0);
  closure_26 = obj.useRef([]);
  let items = [onPlayerStateChange];
  callback = obj.useCallback((arg0) => {
    callback2(arg0);
    if (onPlayerStateChange != null) {
      onPlayerStateChange(arg0);
    }
  }, items);
  let tmp14 = first3;
  if (first3) {
    tmp14 = first2 === tmp8.ENDED;
  }
  if (tmp14) {
    ({ timestampSec, duration } = first1);
    if (typeof videoRef !== "find") {
      HermesBuiltin.throwTypeError();
    }
    tmp14 = timestampSec >= duration - 1;
  }
  c28 = tmp14;
  let obj2 = onBuffer(flag2[10]);
  sharedValue = obj2.useSharedValue(false);
  shouldShowControls = function shouldShowControls() {
    let tmp = first3;
    if (first3) {
      tmp = !flag8;
    }
    if (tmp) {
      let value = sharedValue.get();
      if (!value) {
        value = first2 === first1.PAUSED;
      }
      if (!value) {
        value = first2 === first1.ENDED;
      }
      if (!value) {
        value = first2 === first1.ERRORED;
      }
      if (!value) {
        value = c28;
      }
      tmp = value;
    }
    return tmp;
  };
  shouldShowControls.__closure = { hasLoaded: first3, hideControls: flag8, showControls: sharedValue, playerState: first2, PlayerState: first1, isVideoEnded: tmp14 };
  shouldShowControls.__workletHash = 8094403036162;
  shouldShowControls.__initData = first2;
  let obj4 = onBuffer(flag2[10]);
  class Se {
    constructor() {
      if (typeof shouldShowControls !== "find") {
        str2 = "Trying to call a non-function";
        throwTypeErrorResult = HermesBuiltin.throwTypeError();
      }
      tmp = useState;
      if (useState) {
        tmp2 = c13;
        tmp = !c13;
      }
      if (tmp) {
        tmp3 = c29;
        value = c29.get();
        if (!value) {
          tmp5 = c20;
          tmp6 = c18;
          value = c20 === c18.PAUSED;
        }
        if (!value) {
          tmp7 = c20;
          tmp8 = c18;
          value = c20 === c18.ENDED;
        }
        if (!value) {
          tmp9 = c20;
          tmp10 = c18;
          value = c20 === c18.ERRORED;
        }
        if (!value) {
          value = c28;
        }
        tmp = value;
      }
      tmp11 = onBuffer;
      tmp12 = useState;
      obj = onBuffer(useState[11]);
      num = 0;
      if (tmp) {
        num = 1;
      }
      obj = { opacity: obj.withSpring(num, tmp11(tmp12[12]).SUBTLE_SPRING), pointerEvents: null };
      str = "none";
      if (tmp) {
        str = "auto";
      }
      obj[1] = str;
      return obj;
    }
  }
  obj = { shouldShowControls, withSpring: onBuffer(flag2[11]).withSpring, SUBTLE_SPRING: onBuffer(flag2[12]).SUBTLE_SPRING };
  Se.__closure = obj;
  Se.__workletHash = 311315682972;
  Se.__initData = closure_21;
  const animatedStyle = obj4.useAnimatedStyle(Se);
  if (first3) {
    first3 = !flag8;
  }
  if (first3) {
    first3 = sharedValue.get() || first2 === tmp8.PAUSED || first2 === tmp8.ENDED || first2 === tmp8.ERRORED || tmp14;
    const tmp19 = sharedValue.get() || first2 === tmp8.PAUSED || first2 === tmp8.ENDED || first2 === tmp8.ERRORED || tmp14;
  }
  let tmp16Result = tmp16(tmp17[10]);
  sharedValue1 = tmp16Result.useSharedValue(0);
  tmp16Result = tmp16(tmp17[10]);
  function pe() {
    const obj = { width: null };
    const result = 100 * sharedValue1.get();
    obj[0] = onBuffer(flag2[13]).withTiming(`${tmp}%`, onBuffer(flag2[14]).timingFast, "animate-always");
    return obj;
  }
  pe.__closure = { withTiming: onBuffer(flag2[13]).withTiming, progressSharedValue: sharedValue1, timingFast: onBuffer(flag2[14]).timingFast };
  pe.__workletHash = 11793601648786;
  pe.__initData = first3;
  const animatedStyle1 = tmp16Result.useAnimatedStyle(pe);
  closure_32 = obj.useRef(-1);
  let items1 = [sharedValue];
  const callback1 = obj.useCallback((arg0) => {
    let closure_0 = arg0;
    return () => {
      const items = [...arguments];
      clearTimeout(outer1_32.current);
      let result = outer1_29.set(true);
      outer1_32.current = setTimeout(() => {
        const result = closure_29.set(false);
      }, 2000);
      if (null != closure_0) {
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        return HermesBuiltin.apply(items1, undefined);
      }
      const tmp3 = closure_0;
    };
  }, items1);
  callback2 = obj.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    lib((maxTimestampSec) => ({ timestampSec: closure_0, maxTimestampSec: Math.max(maxTimestampSec.maxTimestampSec, Math.floor(closure_0)), duration: closure_1 }));
  }, []);
  let tmp2Result = tmp2(obj.useState(false), 2);
  [tmp25, c34] = tmp2Result;
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
      bound = Math.max(0, Math.min(arg0, closure_1 ? bound.duration : bound.maxTimestampSec));
      ref3.current = (ref3.current + 1) % 100;
      const current = seek.current;
      seek = current.seek;
      seek(bound + 0.0001 * ref3.current);
      closure_24.current = bound;
    }
  }, items3);
  const items4 = [callback4, first2, callback, onResumePlayback, onPausePlayback];
  const imperativeHandle = obj.useImperativeHandle(initialProgress.ref, () => ({
    seekToStart() {
      if (closure_20 !== outer1_18.ERRORED) {
        callback2(0);
        if (tmp === tmp2.ENDED) {
          callback(tmp2.PLAYING);
          if (closure_12 != null) {
            tmp7(outer1_19.IMPERATIVE_API);
          }
        }
      }
    },
    play() {
      if (closure_20 === outer1_18.PAUSED) {
        callback(tmp.PLAYING);
        if (closure_12 != null) {
          tmp4(outer1_19.IMPERATIVE_API);
        }
      }
    },
    pause() {
      if (closure_20 === outer1_18.PLAYING) {
        callback(tmp.PAUSED);
        if (closure_11 != null) {
          tmp4(outer1_19.IMPERATIVE_API);
        }
      }
    }
  }), items4);
  const items5 = [videoRef, initialProgress.timestampSec, flag2, callback, onLoad, callback4];
  const items6 = [first2, onPausePlayback, onResumePlayback, tmp14, callback, callback4];
  const callback5 = obj.useCallback((duration) => {
    duration = duration.duration;
    callback(duration);
    callback3(true);
    if (null != videoRef.current) {
      const timestampSec = onBuffer.timestampSec;
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
      callback(first1.PLAYING);
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
    let flag = obj.shouldRestartVideo;
    if (flag === undefined) {
      flag = true;
    }
    if (first2 !== first1.ERRORED) {
      if (tmp !== tmp2.PAUSED) {
        if (tmp !== tmp2.LOADING) {
          if (tmp === tmp2.PLAYING) {
            callback(tmp2.PAUSED);
            if (onPausePlayback != null) {
              tmp19(lib.USER_INTERACTION);
            }
          }
        }
      }
      callback(tmp2.PLAYING);
      if (onResumePlayback != null) {
        tmp7(lib.USER_INTERACTION);
      }
    }
    callback4(0);
    callback(first1.PLAYING);
    if (onResumePlayback != null) {
      tmp13(lib.USER_INTERACTION);
    }
  }, items6);
  const items7 = [callback6];
  const callback7 = obj.useCallback(() => callback6(), items7);
  closure_37 = obj.useRef(false);
  const items8 = [first2, callback, onPausePlayback];
  callback8 = obj.useCallback(() => {
    closure_37.current = false;
    if (first2 === first1.PLAYING) {
      tmp.current = true;
      callback(tmp2.PAUSED);
      if (onPausePlayback != null) {
        tmp5(lib.SYSTEM_INITIATED);
      }
    }
  }, items8);
  const items9 = [first2, callback, onResumePlayback];
  callback9 = obj.useCallback(() => {
    if (ref5.current) {
      tmp.current = false;
      if (first2 !== first1.ERRORED) {
        callback(tmp3.PLAYING);
        if (onResumePlayback != null) {
          tmp6(lib.SYSTEM_INITIATED);
        }
      }
    }
  }, items9);
  const items10 = [callback8, callback9];
  const effect = obj.useEffect(() => {
    let ComponentDispatch = onBuffer(flag2[15]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(onPlayerStateChange.QUEST_GAME_LINK_OPENED, callback8);
    let ComponentDispatch2 = onBuffer(flag2[15]).ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(onPlayerStateChange.QUEST_APP_STORE_OVERLAY_FINISHED, callback9);
    return () => {
      const ComponentDispatch = outer1_0(outer1_2[15]).ComponentDispatch;
      ComponentDispatch.unsubscribe(outer1_10.QUEST_GAME_LINK_OPENED, closure_38);
      const ComponentDispatch2 = outer1_0(outer1_2[15]).ComponentDispatch;
      ComponentDispatch2.unsubscribe(outer1_10.QUEST_APP_STORE_OVERLAY_FINISHED, closure_39);
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
  let tmp37 = first2 === tmp8.ERRORED;
  const callback11 = obj.useCallback((currentTime) => {
    const current = ref4.current;
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
  if (!tmp37) {
    ({ timestampSec: timestampSec2, maxTimestampSec, duration: duration2 } = first1);
    if (typeof first !== "find") {
      HermesBuiltin.throwTypeError();
    }
    if (typeof videoRef !== "find") {
      HermesBuiltin.throwTypeError();
    }
    let tmp41 = !tmp40;
    if (timestampSec2 < duration2 - 1) {
      if (!flag) {
        flag = timestampSec2 <= maxTimestampSec - 1;
      }
      tmp41 = flag;
    }
    tmp37 = !tmp41;
  }
  c40 = tmp37;
  const items13 = [callback4, first, sharedValue1, tmp37];
  const items14 = [callback4, first, sharedValue1, first2, callback];
  const callback12 = obj.useCallback(() => {
    if (!c40) {
      let current = ref2.current;
      if (current == null) {
        current = sharedValue1.get() * first;
      }
      current = ref4.current;
      current.push(current);
      callback4(current + 10);
    }
  }, items13);
  const obj1 = { withTiming: onBuffer(flag2[13]).withTiming, progressSharedValue: sharedValue1, timingFast: onBuffer(flag2[14]).timingFast };
  const items15 = [sharedValue1, callback2, onProgress];
  const callback1Result = callback1(obj.useCallback(() => {
    let current = ref2.current;
    if (current == null) {
      current = sharedValue1.get() * first;
    }
    current = ref4.current;
    current.push(current);
    callback4(current - 10);
    if (first2 === first1.ENDED) {
      callback(tmp5.PLAYING);
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
      ({ currentTime: obj[0], seekableDuration: obj[1] } = seekableDuration);
      obj[2] = num;
      tmp3(obj);
    }
  }, items15);
  const items17 = [callback, onLoadStart];
  const callback14 = obj.useCallback(() => {
    if (!repeat) {
      callback(first1.ENDED);
    }
    if (onEnd != null) {
      tmp4();
    }
  }, items16);
  const items18 = [callback, onError];
  const callback15 = obj.useCallback(() => {
    callback(first1.LOADING);
    if (onLoadStart != null) {
      onLoadStart();
    }
  }, items17);
  const callback16 = obj.useCallback((arg0) => {
    callback(first1.ERRORED);
    if (onError != null) {
      tmp2(arg0);
    }
  }, items18);
  const callback1Result1 = callback1(callback12);
  const items19 = [onError];
  const tmp49 = onBuffer(flag2[16]).useStateFromStores(items19, () => onError.getState()) === onEnd.ACTIVE;
  const items20 = [videoRef];
  const layoutEffect = obj.useLayoutEffect(() => {
    if (obj.isAndroid()) {
      const current = videoRef.current;
      return () => {
        try {
          if (current != null) {
            const setNativeProps = current.setNativeProps;
            if (setNativeProps != null) {
              const obj = { paused: true, repeat: false, src: null };
              obj[2] = { uri: null };
              setNativeProps(obj);
            }
          }
        } catch (tmp4) {
          outer1_1(outer1_2[18]).captureException(tmp4);
          const obj2 = outer1_1(outer1_2[18]);
        }
      };
    }
    obj = onBuffer(flag2[17]);
  }, items20);
  let tmp51 = !tmp49;
  if (tmp49) {
    tmp51 = first2 === tmp8.PAUSED;
  }
  if (!tmp51) {
    tmp51 = first2 === tmp8.LOADING;
  }
  if (!tmp51) {
    tmp51 = externallyPaused;
  }
  importDefault = obj.useRef(false);
  tmp2Result = tmp2(obj.useState(false), 2);
  [tmp53, flag2] = tmp2Result;
  const items21 = [onBuffer];
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
      if (first2 !== first1.LOADING) {
        const obj = onBuffer(flag2[17]);
      }
      callback17(true);
    }
  }, items22);
  const items24 = [callback17];
  const callback19 = obj.useCallback(() => {
    if (obj.isIOS()) {
      callback17(true);
    }
  }, items23);
  const callback20 = obj.useCallback(() => {
    if (obj.isIOS()) {
      callback17(false);
    }
  }, items24);
  const rect = importDefault(tmp17[19])();
  let tmp59 = isFullscreen;
  if (isFullscreen) {
    tmp59 = null != rect;
  }
  if (tmp59) {
    obj2 = { paddingRight: null, paddingLeft: null };
    let _Math = Math;
    obj2[0] = Math.max(rect.right, flag8.right);
    let _Math2 = Math;
    obj2[1] = Math.max(rect.left, flag8.left);
    tmp59 = obj2;
  }
  const obj3 = { style: items25, accessible: false, children: null };
  items25 = [tmp.container, style];
  obj4 = { style: items26, onPress: callback10, accessible: !first3, accessibilityLabel: null, children: null };
  items26 = [tmp.videoContainer];
  const intl = tmp16(tmp17[20]).intl;
  const t = tmp16(tmp17[20]).t;
  obj4[3] = intl.string(tmp51 ? t.R3aFPe : t.fTMEUi);
  let tmp62Result = first2 !== tmp8.ERRORED;
  if (tmp62Result) {
    const obj5 = { mixWithOthers: "inherit", httpEngine: null, automaticallyWaitsToMinimizeStalling: null, maxBitRate: null, bufferConfig: null, preferredForwardBufferDuration: null, ref: null, accessible: false, importantForAccessibility: "no-hide-descendants", accessibilityRole: "none", style: null, paused: null, repeat: null, source: null, onBuffer: null, onPlaybackStalled: null, onPlaybackResume: null, onLoad: null, onSeek: null, onProgress: null, onLoadStart: null, onEnd: null, onError: null, onReadyForDisplay: null, onVideoTracks: null, onLayout: null, resizeMode: "contain" };
    obj5[1] = httpEngine;
    obj5[2] = automaticallyWaitsToMinimizeStalling;
    obj5[3] = maxBitRate;
    obj5[4] = bufferConfig;
    obj5[5] = preferredForwardBufferDuration;
    obj5[6] = videoRef;
    obj5[10] = tmp.video;
    obj5[11] = tmp51;
    obj5[12] = repeat;
    obj5[13] = initialProgress.source;
    obj5[14] = callback18;
    obj5[15] = callback19;
    obj5[16] = callback20;
    obj5[17] = callback5;
    obj5[18] = callback11;
    obj5[19] = callback13;
    obj5[20] = callback15;
    obj5[21] = callback14;
    obj5[22] = callback16;
    obj5[23] = callback3;
    obj5[24] = onVideoTracks;
    obj5[25] = onVideoLayout;
    tmp62Result = tmp62(repeat, obj5);
  }
  const items27 = [tmp62Result, , , , , ];
  let renderCaptionsResult;
  if (renderCaptions != null) {
    renderCaptionsResult = renderCaptions(first1.timestampSec);
  }
  items27[1] = renderCaptionsResult;
  if (!tmp53) {
    items27[2] = tmp53;
    tmp62Result = !tmp25;
    if (!tmp25) {
      const obj6 = { style: null, children: null };
      obj6[0] = tmp.loadingContainer;
      obj6[1] = tmp62(onSeek, { animating: true });
      tmp62Result = tmp62(tmp63, obj6);
    }
    items27[3] = tmp62Result;
    const obj7 = { style: null, accessible: false, children: null };
    const items28 = [tmp.controls, animatedStyle];
    obj7[0] = items28;
    let tmp64Result = flag3;
    if (!flag3) {
      tmp64Result = flag4;
    }
    if (tmp64Result) {
      const obj8 = { style: null, children: null };
      const items29 = [, , ];
      ({ controlsTopBottom: arr31[0], controlsTop: arr31[1] } = tmp);
      items29[2] = tmp59;
      obj8[0] = items29;
      if (!flag3) {
        const items30 = [flag3, ];
        if (flag4) {
          const obj9 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
          const intl3 = tmp16(tmp17[20]).intl;
          obj9[1] = intl3.string(tmp16(tmp17[20]).t.KCzjTi);
          obj9[2] = onOpenTranscript;
          obj9[3] = tmp.controlButton;
          const obj10 = { color: null };
          obj10[0] = tmp.iconDisabled.color;
          obj9[4] = tmp62(tmp16(tmp17[23]).TranscriptOutlineIcon, obj10);
          flag4 = tmp62(tmp16(tmp17[21]).PressableOpacity, obj9);
        }
        items30[1] = flag4;
        obj8[1] = items30;
        tmp64Result = tmp64(tmp63, obj8);
      } else {
        const obj11 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
        const intl2 = tmp16(tmp17[20]).intl;
        obj11[1] = intl2.string(tmp16(tmp17[20]).t.bDSZO1);
        obj11[2] = onToggleCaptions;
        obj11[3] = tmp.controlButton;
        if (captionsEnabled) {
          let color = tmp.icon.color;
        } else {
          color = tmp.iconDisabled.color;
        }
        const obj12 = { color: null };
        obj12[0] = color;
        obj11[4] = tmp62(tmp16(tmp17[22]).ClosedCaptionsOutlineIcon, obj12);
        tmp62(tmp16(tmp17[21]).PressableOpacity, obj11);
      }
    }
    const items31 = [tmp64Result, , ];
    const obj13 = { style: null, children: null };
    obj13[0] = tmp.controlsMiddle;
    let tmp62Result2 = flag7;
    if (flag7) {
      const obj14 = { disabled: null, accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
      obj14[0] = first2 === tmp8.ERRORED;
      const intl4 = tmp16(tmp17[20]).intl;
      obj14[2] = intl4.string(tmp16(tmp17[20]).t.r9s3Uv);
      obj14[3] = callback1Result;
      const obj15 = { color: null, width: 16, height: 16 };
      obj15[0] = tmp.icon.color;
      obj14[4] = tmp62(tmp16(tmp17[25]).SkipBackwardIcon, obj15);
      tmp62Result2 = tmp62(tmp16(tmp17[24]).VideoQuestPlayerControlButton, obj14);
    }
    const items32 = [tmp62Result2, , ];
    if (!tmp14) {
      if (first2 !== tmp8.ERRORED) {
        const t2 = tmp16(tmp17[20]).t;
        let K0e7M9 = tmp51 ? t2.R3aFPe : t2.fTMEUi;
      }
      const obj16 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
      obj16[1] = tmp76(K0e7M9);
      obj16[2] = callback7;
      if (!tmp14) {
        if (first2 !== tmp8.ERRORED) {
          if (tmp51) {
            let PauseIcon = tmp16(tmp17[27]).PlayIcon;
          } else {
            PauseIcon = tmp16(tmp17[28]).PauseIcon;
          }
          let tmp62Result3 = tmp62(PauseIcon, { size: "lg" });
        }
        obj16[3] = tmp62Result3;
        items32[1] = tmp62(tmp16(tmp17[24]).VideoQuestPlayerControlButton, obj16);
        if (flag7) {
          const obj17 = { disabled: null, accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
          obj17[0] = tmp37;
          const intl5 = tmp16(tmp17[20]).intl;
          obj17[2] = intl5.string(tmp16(tmp17[20]).t.zWDcNP);
          obj17[3] = callback1Result1;
          const obj18 = { color: null, width: 16, height: 16 };
          obj18[0] = tmp.icon.color;
          obj17[4] = tmp62(tmp16(tmp17[29]).SkipForwardIcon, obj18);
          flag7 = tmp62(tmp16(tmp17[24]).VideoQuestPlayerControlButton, obj17);
        }
        items32[2] = flag7;
        obj13[1] = items32;
        items31[1] = tmp64(tmp63, obj13);
        if (flag5) {
          const obj19 = { style: null, children: null };
          const items33 = [, , ];
          ({ controlsTopBottom: arr35[0], controlsBottom: arr35[1] } = tmp);
          items33[2] = tmp59;
          obj19[0] = items33;
          const obj20 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
          const intl6 = tmp16(tmp17[20]).intl;
          obj20[1] = intl6.string(tmp16(tmp17[20]).t.vKZT5t);
          obj20[2] = onToggleFullscreen;
          obj20[3] = tmp.controlButton;
          obj20[4] = tmp62(tmp16(tmp17[30]).FullscreenEnterIcon, {});
          obj19[1] = tmp62(tmp16(tmp17[21]).PressableOpacity, obj20);
          flag5 = tmp62(tmp63, obj19);
        }
        items31[2] = flag5;
        obj7[2] = items31;
        items27[4] = tmp64(tmp58(tmp17[10]).View, obj7);
        if (flag6) {
          const obj21 = { style: null, children: null };
          obj21[0] = tmp.progressContainer;
          const obj22 = { style: null };
          const items34 = [tmp.progress, animatedStyle1];
          obj22[0] = items34;
          obj21[1] = tmp62(tmp58(tmp17[10]).View, obj22);
          flag6 = tmp62(tmp63, obj21);
        }
        items27[5] = flag6;
        obj4[4] = items27;
        obj3[2] = tmp64(onProgress, obj4);
        return tmp62(tmp63, obj3);
      }
      tmp62Result3 = tmp62(tmp16(tmp17[26]).RetryIcon, { size: "lg" });
    }
    K0e7M9 = tmp16(tmp17[20]).t.K0e7M9;
  } else {
    let items35 = [tmp.bufferingSpinner, ];
    if (!isFullscreen) {
      if ("center" !== bufferingSpinnerPlacement) {
        let num4;
        if (contentInsets != null) {
          num4 = contentInsets.top;
        }
        if (num4 == null) {
          num4 = 0;
        }
        let obj23 = { top: null, left: null };
        obj23[0] = num4;
        let num5;
        if (contentInsets != null) {
          num5 = contentInsets.left;
        }
        if (num5 == null) {
          num5 = 0;
        }
        obj23[1] = num5;
      }
      const obj24 = { animating: true, style: null, color: null };
      items35[1] = obj23;
      obj24[1] = items35;
      items35 = tmp58(tmp17[6]).unsafe_rawColors.WHITE;
      obj24[2] = items35;
      tmp62(tmp69, obj24);
    }
    obj23 = tmp.bufferingSpinnerCentered;
  }
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/AdVideoPlayer.tsx");

export const PlayerState = obj12;
export const PlaybackTriggerSource = obj13;
export const AdVideoPlayer = memoResult;
