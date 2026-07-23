// Module ID: 13916
// Function ID: 106546
// Name: getSafeAreaInsetOrPadding
// Dependencies: [57, 31, 27, 6651, 653, 33, 689, 8148, 4130, 666, 3991, 4542, 4546, 4131, 4134, 1207, 566, 477, 1184, 1557, 1212, 4660, 13917, 13919, 13921, 13922, 9949, 8286, 8288, 13923, 13924, 2]

// Module 13916 (getSafeAreaInsetOrPadding)
import _slicedToArray from "_slicedToArray";
import importAllResult from "set";
import get_ActivityIndicator from "PlayIcon";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import closure_14 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "t";

let StyleSheet;
let closure_10;
let closure_11;
let closure_12;
let closure_5;
let closure_6;
let closure_7;
let closure_9;
const require = arg1;
function getSafeAreaInsetOrPadding(arg0, arg1) {
  return Math.max(arg0[arg1], obj[arg1]);
}
({ View: closure_5, StyleSheet, Pressable: closure_6, ActivityIndicator: closure_7 } = get_ActivityIndicator);
({ AppStates: closure_9, ComponentActions: closure_10 } = ME);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let obj = { left: require("_createForOfIteratorHelperLoose").space.PX_16, right: require("_createForOfIteratorHelperLoose").space.PX_16, top: require("_createForOfIteratorHelperLoose").space.PX_16, bottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
let closure_15 = { code: "function hasVideoEnded_AdVideoPlayerTsx1(currentTime,videoDuration){return currentTime>=videoDuration-1;}" };
let closure_16 = (() => {
  function hasVideoEnded(arg0, arg1) {
    return arg0 >= arg1 - 1;
  }
  hasVideoEnded.__closure = {};
  hasVideoEnded.__workletHash = 8992945176371;
  hasVideoEnded.__initData = closure_15;
  return hasVideoEnded;
})();
let closure_17 = { code: "function canSeekForward_AdVideoPlayerTsx2(currentTime,maxTimestamp,videoDuration,allowUnrestrictedSeeking){const{hasVideoEnded}=this.__closure;return!hasVideoEnded(currentTime,videoDuration)&&(allowUnrestrictedSeeking||currentTime<=maxTimestamp-1);}" };
let closure_18 = (() => {
  function canSeekForward(arg0, arg1, arg2, arg3) {
    let tmp = arg3;
    let tmp2 = !outer1_16(arg0, arg2);
    if (tmp2) {
      if (!tmp) {
        tmp = arg0 <= arg1 - 1;
      }
      tmp2 = tmp;
    }
    return tmp2;
  }
  canSeekForward.__closure = { hasVideoEnded: closure_16 };
  canSeekForward.__workletHash = 14098132092693;
  canSeekForward.__initData = closure_17;
  return canSeekForward;
})();
obj = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.container = {};
_createForOfIteratorHelperLoose = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose["backgroundColor"] = require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST;
_createForOfIteratorHelperLoose["justifyContent"] = "center";
_createForOfIteratorHelperLoose["alignItems"] = "center";
obj.loadingContainer = _createForOfIteratorHelperLoose;
obj.bufferingSpinner = { position: "absolute" };
let obj3 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj3["justifyContent"] = "center";
obj3["alignItems"] = "center";
obj.bufferingSpinnerCentered = obj3;
obj.video = { height: "100%", width: "100%" };
obj.videoContainer = { position: "relative", height: "100%", width: "100%" };
let obj4 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
let obj1 = {};
const importDefaultResultResult = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLACK);
obj4["backgroundColor"] = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLACK).alpha(0.5).hex();
obj4["justifyContent"] = "center";
obj4["alignItems"] = "center";
obj4["flexDirection"] = "column";
obj.controls = obj4;
let obj5 = { flexDirection: "row", justifyContent: "flex-end", padding: require("_createForOfIteratorHelperLoose").space.PX_8, position: "absolute", left: 0, right: 0 };
obj.controlsTopBottom = obj5;
let obj6 = { justifyContent: "center", alignItems: "center", flexGrow: 1, flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_24, pointerEvents: "box-none" };
obj.controlsMiddle = obj6;
obj.controlsTop = { top: 0 };
obj.controlsBottom = { bottom: 0 };
let obj7 = { position: "absolute", bottom: 0, right: 0, left: 0, justifyContent: "flex-end", height: require("_createForOfIteratorHelperLoose").space.PX_16, overflow: "hidden" };
obj.progressContainer = obj7;
let obj8 = { height: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.WHITE, shadowOffset: { width: 0, height: 0 }, shadowRadius: 6, shadowOpacity: 1, elevation: 5, shadowColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
obj.progress = obj8;
const alphaResult = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLACK).alpha(0.5);
obj.icon = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
let obj9 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
obj.iconDisabled = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
let obj10 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
obj.controlButton = { padding: require("_createForOfIteratorHelperLoose").space.PX_8 };
let closure_19 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj12 = { PAUSED: "paused", PLAYING: "playing", ENDED: "ended", LOADING: "loading", ERRORED: "errored" };
let obj13 = { USER_INTERACTION: "USER_INTERACTION", SYSTEM_INITIATED: "SYSTEM_INITIATED", IMPERATIVE_API: "IMPERATIVE_API" };
let closure_22 = { code: "function shouldShowControls_AdVideoPlayerTsx3(){const{hasLoaded,hideControls,showControls,playerState,PlayerState,isVideoEnded}=this.__closure;return hasLoaded&&!hideControls&&(showControls.get()||playerState===PlayerState.PAUSED||playerState===PlayerState.ENDED||playerState===PlayerState.ERRORED||isVideoEnded);}" };
let closure_23 = { code: "function AdVideoPlayerTsx4(){const{shouldShowControls,withSpring,SUBTLE_SPRING}=this.__closure;const show=shouldShowControls();return{opacity:withSpring(show?1:0,SUBTLE_SPRING),pointerEvents:show?'auto':'none'};}" };
let closure_24 = { code: "function AdVideoPlayerTsx5(){const{withTiming,progressSharedValue,timingFast}=this.__closure;return{width:withTiming(progressSharedValue.get()*100+\"%\",timingFast,'animate-always')};}" };
let obj11 = { padding: require("_createForOfIteratorHelperLoose").space.PX_8 };
const memoResult = importAllResult.memo((initialProgress) => {
  let automaticallyWaitsToMinimizeStalling;
  let bufferConfig;
  let bufferingSpinnerPlacement;
  let captionsEnabled;
  let contentInsets;
  let externallyPaused;
  let httpEngine;
  let isBuffering;
  let isFullscreen;
  let maxBitRate;
  let onBuffer;
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
  let toggleBuffering;
  let videoRef;
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
  let ref;
  let first;
  let closure_17;
  let first1;
  let callback;
  let first2;
  let closure_21;
  let first3;
  let closure_23;
  let closure_24;
  let getSafeAreaInsetOrPadding;
  let closure_26;
  callback = undefined;
  first3 = undefined;
  let sharedValue;
  let c30;
  let sharedValue1;
  let closure_32;
  let callback2;
  let closure_34;
  let callback4;
  let callback6;
  let closure_37;
  let callback8;
  let callback9;
  let c40;
  toggleBuffering = undefined;
  let tmp = callback();
  ref = onLoad.useRef(null);
  if (null != videoRef) {
    ref = videoRef;
  }
  const tmp3 = onLoadStart(onLoad.useState(num), 2);
  first = tmp3[0];
  closure_17 = tmp3[1];
  let obj = {};
  let merged = Object.assign(initialProgress);
  const tmp6 = onLoadStart(onLoad.useState(obj), 2);
  first1 = tmp6[0];
  callback = tmp6[1];
  const tmp8 = onLoadStart(onLoad.useState(first2.LOADING), 2);
  first2 = tmp8[0];
  closure_21 = tmp8[1];
  const tmp10 = onLoadStart(onLoad.useState(false), 2);
  first3 = tmp10[0];
  closure_23 = tmp10[1];
  closure_24 = onLoad.useRef(null);
  getSafeAreaInsetOrPadding = onLoad.useRef(0);
  closure_26 = onLoad.useRef([]);
  let items = [onPlayerStateChange];
  callback = onLoad.useCallback((arg0) => {
    lib(arg0);
    if (null != onPlayerStateChange) {
      onPlayerStateChange(arg0);
    }
  }, items);
  if (first3) {
    first3 = first2 === first2.ENDED;
  }
  if (first3) {
    first3 = first(first1.timestampSec, first1.duration);
  }
  let obj1 = initialProgress(flag2[10]);
  sharedValue = obj1.useSharedValue(false);
  const tmp16 = (() => {
    function shouldShowControls() {
      let tmp = outer1_22;
      if (outer1_22) {
        tmp = !outer1_13;
      }
      if (tmp) {
        let value = outer1_29.get();
        if (!value) {
          value = outer1_20 === first2.PAUSED;
        }
        if (!value) {
          value = outer1_20 === first2.ENDED;
        }
        if (!value) {
          value = outer1_20 === first2.ERRORED;
        }
        if (!value) {
          value = outer1_28;
        }
        tmp = value;
      }
      return tmp;
    }
    shouldShowControls.__closure = { hasLoaded: first3, hideControls: flag8, showControls: sharedValue, playerState: first2, PlayerState: first2, isVideoEnded: first3 };
    shouldShowControls.__workletHash = 8094403036162;
    shouldShowControls.__initData = first3;
    return shouldShowControls;
  })();
  c30 = tmp16;
  let obj2 = initialProgress(flag2[10]);
  function fe() {
    const tmp = _undefined();
    const obj = {};
    let num = 0;
    if (tmp) {
      num = 1;
    }
    obj.opacity = initialProgress(flag2[11]).withSpring(num, initialProgress(flag2[12]).SUBTLE_SPRING);
    let str = "none";
    if (tmp) {
      str = "auto";
    }
    obj.pointerEvents = str;
    return obj;
  }
  obj = { shouldShowControls: tmp16, withSpring: initialProgress(flag2[11]).withSpring, SUBTLE_SPRING: initialProgress(flag2[12]).SUBTLE_SPRING };
  fe.__closure = obj;
  fe.__workletHash = 311315682972;
  fe.__initData = closure_23;
  const animatedStyle = obj2.useAnimatedStyle(fe);
  let obj4 = initialProgress(flag2[10]);
  sharedValue1 = obj4.useSharedValue(0);
  let obj5 = initialProgress(flag2[10]);
  function ge() {
    const obj = {};
    const result = 100 * sharedValue1.get();
    obj.width = initialProgress(flag2[13]).withTiming(`${tmp}%`, initialProgress(flag2[14]).timingFast, "animate-always");
    return obj;
  }
  obj = { withTiming: initialProgress(flag2[13]).withTiming, progressSharedValue: sharedValue1, timingFast: initialProgress(flag2[14]).timingFast };
  ge.__closure = obj;
  ge.__workletHash = 11793601648786;
  ge.__initData = closure_24;
  const animatedStyle1 = obj5.useAnimatedStyle(ge);
  closure_32 = onLoad.useRef(-1);
  let items1 = [sharedValue];
  const callback1 = onLoad.useCallback((arg0) => {
    let closure_0 = arg0;
    return (arg0) => {
      const items = [...arguments];
      clearTimeout(outer1_32.current);
      let result = outer1_29.set(true);
      outer1_32.current = setTimeout(() => {
        const result = outer2_29.set(false);
      }, 2000);
      if (null != closure_0) {
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        return HermesBuiltin.apply(items1, undefined);
      }
    };
  }, items1);
  callback2 = onLoad.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    callback2((maxTimestampSec) => ({ timestampSec: closure_0, maxTimestampSec: Math.max(maxTimestampSec.maxTimestampSec, Math.floor(closure_0)), duration: closure_1 }));
  }, []);
  const tmp23 = onLoadStart(onLoad.useState(false), 2);
  closure_34 = tmp23[1];
  const items2 = [onReadyForDisplay];
  const items3 = [flag, , , ];
  ({ duration: arr4[1], maxTimestampSec: arr4[2] } = first1);
  items3[3] = ref;
  const callback3 = onLoad.useCallback(() => {
    if (null != onReadyForDisplay) {
      onReadyForDisplay();
    }
    callback4(true);
  }, items2);
  callback4 = onLoad.useCallback((arg0) => {
    if (null != ref.current) {
      let bound = first1;
      const _Math = Math;
      const _Math2 = Math;
      bound = Math.max(0, Math.min(arg0, flag ? bound.duration : bound.maxTimestampSec));
      ref2.current = (ref2.current + 1) % 100;
      const current = ref.current;
      current.seek(bound + 0.0001 * ref2.current);
      closure_24.current = bound;
    }
  }, items3);
  const items4 = [callback4, first2, callback, onResumePlayback, onPausePlayback];
  const imperativeHandle = onLoad.useImperativeHandle(initialProgress.ref, () => ({
    seekToStart() {
      if (outer1_20 !== first2.ERRORED) {
        outer1_35(0);
        if (outer1_20 === first2.ENDED) {
          outer1_27(first2.PLAYING);
          if (null != outer1_12) {
            outer1_12(constants.IMPERATIVE_API);
          }
        }
      }
    },
    play() {
      if (outer1_20 === first2.PAUSED) {
        outer1_27(first2.PLAYING);
        if (null != outer1_12) {
          outer1_12(constants.IMPERATIVE_API);
        }
      }
    },
    pause() {
      if (outer1_20 === first2.PLAYING) {
        outer1_27(first2.PAUSED);
        if (null != outer1_11) {
          outer1_11(constants.IMPERATIVE_API);
        }
      }
    }
  }), items4);
  const items5 = [ref, initialProgress.timestampSec, flag2, callback, onLoad, callback4];
  const items6 = [first2, onPausePlayback, onResumePlayback, first3, callback, callback4];
  const callback5 = onLoad.useCallback((duration) => {
    duration = duration.duration;
    callback(duration);
    callback3(true);
    if (null != ref.current) {
      const timestampSec = initialProgress.timestampSec;
      let tmp5 = !flag2;
      if (tmp5) {
        tmp5 = timestampSec > 5;
      }
      if (tmp5) {
        tmp5 = timestampSec < duration - 3;
      }
      if (tmp5) {
        callback4(timestampSec - 1);
      }
      callback(first2.PLAYING);
      if (null != onLoad) {
        onLoad(duration);
      }
    }
  }, items5);
  callback6 = onLoad.useCallback(() => {
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    let flag = obj.shouldRestartVideo;
    if (flag === undefined) {
      flag = true;
    }
    if (first2 !== first2.ERRORED) {
      if (first2 !== first2.PAUSED) {
        if (first2 !== first2.LOADING) {
          if (first2 === first2.PLAYING) {
            callback(first2.PAUSED);
            if (null != onPausePlayback) {
              onPausePlayback(lib.USER_INTERACTION);
            }
          }
        }
      }
      callback(first2.PLAYING);
      if (null != onResumePlayback) {
        onResumePlayback(lib.USER_INTERACTION);
      }
    }
    callback4(0);
    callback(first2.PLAYING);
    if (null != onResumePlayback) {
      onResumePlayback(lib.USER_INTERACTION);
    }
  }, items6);
  const items7 = [callback6];
  const callback7 = onLoad.useCallback(() => callback6(), items7);
  closure_37 = onLoad.useRef(false);
  const items8 = [first2, callback, onPausePlayback];
  callback8 = onLoad.useCallback(() => {
    closure_37.current = false;
    if (first2 === first2.PLAYING) {
      closure_37.current = true;
      callback(first2.PAUSED);
      if (null != onPausePlayback) {
        onPausePlayback(lib.SYSTEM_INITIATED);
      }
    }
  }, items8);
  const items9 = [first2, callback, onResumePlayback];
  callback9 = onLoad.useCallback(() => {
    if (ref4.current) {
      ref4.current = false;
      if (first2 !== first2.ERRORED) {
        callback(first2.PLAYING);
        if (null != onResumePlayback) {
          onResumePlayback(lib.SYSTEM_INITIATED);
        }
      }
    }
  }, items9);
  const items10 = [callback8, callback9];
  const effect = onLoad.useEffect(() => {
    let ComponentDispatch = initialProgress(flag2[15]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(onPlayerStateChange.QUEST_GAME_LINK_OPENED, callback8);
    let ComponentDispatch2 = initialProgress(flag2[15]).ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(onPlayerStateChange.QUEST_APP_STORE_OVERLAY_FINISHED, callback9);
    return () => {
      const ComponentDispatch = initialProgress(flag2[15]).ComponentDispatch;
      ComponentDispatch.unsubscribe(onPlayerStateChange.QUEST_GAME_LINK_OPENED, outer1_38);
      const ComponentDispatch2 = initialProgress(flag2[15]).ComponentDispatch;
      ComponentDispatch2.unsubscribe(onPlayerStateChange.QUEST_APP_STORE_OVERLAY_FINISHED, outer1_39);
    };
  }, items10);
  const items11 = [sharedValue, callback6];
  const items12 = [first, sharedValue1, onSeek, callback2, ref];
  const callback10 = onLoad.useCallback(() => {
    if (sharedValue.get()) {
      const result = sharedValue.set(false);
    }
    callback6({ shouldRestartVideo: false });
  }, items11);
  let tmp35 = first2 === first2.ERRORED;
  const callback11 = onLoad.useCallback((currentTime) => {
    const current = ref3.current;
    const arr = current.shift();
    let tmp2 = null;
    if (null != arr) {
      tmp2 = arr;
    }
    if (null != ref.current) {
      closure_24.current = null;
      if (first > 0) {
        const result = sharedValue1.set(currentTime.currentTime / first);
        callback2(currentTime.currentTime, first);
      }
      if (null != onSeek) {
        const obj = {};
        const merged = Object.assign(currentTime);
        obj["fromTimeSec"] = tmp2;
        onSeek(obj);
      }
    }
  }, items12);
  if (!tmp35) {
    tmp35 = !first1(first1.timestampSec, first1.maxTimestampSec, first1.duration, flag);
  }
  c40 = tmp35;
  const items13 = [callback4, first, sharedValue1, tmp35];
  const items14 = [callback4, first, sharedValue1, first2, callback];
  const callback12 = onLoad.useCallback(() => {
    if (!c40) {
      let current = ref.current;
      if (null == current) {
        current = sharedValue1.get() * first;
      }
      current = ref3.current;
      current.push(current);
      callback4(current + 10);
    }
  }, items13);
  const tmp16Result = tmp16();
  const items15 = [sharedValue1, callback2, onProgress];
  const callback1Result = callback1(onLoad.useCallback(() => {
    let current = ref.current;
    if (null == current) {
      current = sharedValue1.get() * first;
    }
    current = ref3.current;
    current.push(current);
    callback4(current - 10);
    if (first2 === first2.ENDED) {
      callback(first2.PLAYING);
    }
  }, items14));
  const items16 = [callback, onEnd, repeat];
  const callback13 = onLoad.useCallback((seekableDuration) => {
    let num = 0;
    if (0 !== seekableDuration.seekableDuration) {
      num = seekableDuration.currentTime / seekableDuration.seekableDuration;
    }
    callback2(seekableDuration.currentTime, seekableDuration.seekableDuration);
    const result = sharedValue1.set(num);
    if (null != onProgress) {
      const obj = {};
      ({ currentTime: obj.currentTime, seekableDuration: obj.seekableDuration } = seekableDuration);
      obj.progress = num;
      onProgress(obj);
    }
  }, items15);
  const items17 = [callback, onLoadStart];
  const callback14 = onLoad.useCallback(() => {
    if (!repeat) {
      callback(first2.ENDED);
    }
    if (null != onEnd) {
      onEnd();
    }
  }, items16);
  const items18 = [callback, onError];
  const callback15 = onLoad.useCallback(() => {
    callback(first2.LOADING);
    if (null != onLoadStart) {
      onLoadStart();
    }
  }, items17);
  const callback16 = onLoad.useCallback((arg0) => {
    callback(first2.ERRORED);
    if (null != onError) {
      onError(arg0);
    }
  }, items18);
  let obj7 = initialProgress(flag2[16]);
  const items19 = [onError];
  const tmp45 = obj7.useStateFromStores(items19, () => onError.getState()) === onEnd.ACTIVE;
  const items20 = [ref];
  const layoutEffect = onLoad.useLayoutEffect(() => {
    if (obj.isAndroid()) {
      const current = ref.current;
      return () => {
        let tmp2 = tmp;
        if (null != current) {
          tmp2 = null == current.setNativeProps;
        }
        if (!tmp2) {
          let obj = { paused: true, repeat: false };
          obj = { uri: null };
          obj.src = obj;
          current.setNativeProps(obj);
        }
      };
    }
    obj = initialProgress(flag2[17]);
  }, items20);
  let tmp47 = !tmp45;
  if (tmp45) {
    tmp47 = first2 === first2.PAUSED;
  }
  if (!tmp47) {
    tmp47 = first2 === first2.LOADING;
  }
  if (!tmp47) {
    tmp47 = externallyPaused;
  }
  const callback1Result1 = callback1(callback12);
  ({ isBuffering, toggleBuffering } = (function useBufferingState(onBuffer) {
    onBuffer = onBuffer.onBuffer;
    let closure_1 = onLoad.useRef(false);
    const tmp = onLoadStart(onLoad.useState(false), 2);
    let closure_2 = tmp[1];
    const items = [onBuffer];
    return {
      isBuffering: tmp[0],
      toggleBuffering: onLoad.useCallback((current) => {
        callback(current);
        if (current !== ref.current) {
          ref.current = current;
          if (null != onBuffer) {
            onBuffer(current);
          }
        }
      }, items)
    };
  })({ onBuffer }));
  const items21 = [toggleBuffering, first2];
  const items22 = [toggleBuffering];
  const callback17 = onLoad.useCallback((isBuffering) => {
    isBuffering = isBuffering.isBuffering;
    if (!isBuffering) {
      if (!isBuffering) {
        toggleBuffering(false);
      }
    } else {
      if (first2 !== first2.LOADING) {
        const obj = initialProgress(flag2[17]);
      }
      toggleBuffering(true);
    }
  }, items21);
  const items23 = [toggleBuffering];
  const callback18 = onLoad.useCallback(() => {
    if (obj.isIOS()) {
      toggleBuffering(true);
    }
  }, items22);
  const callback19 = onLoad.useCallback(() => {
    if (obj.isIOS()) {
      toggleBuffering(false);
    }
  }, items23);
  const tmp54 = flag(flag2[19])();
  let tmp55 = isFullscreen;
  if (isFullscreen) {
    tmp55 = null != tmp54;
  }
  if (tmp55) {
    obj1 = { paddingRight: getSafeAreaInsetOrPadding(tmp54, "right"), paddingLeft: getSafeAreaInsetOrPadding(tmp54, "left") };
    tmp55 = obj1;
  }
  obj2 = { style: items24, accessible: false };
  items24 = [tmp.container, style];
  const obj3 = { style: items25, onPress: callback10, accessible: !tmp16Result };
  items25 = [tmp.videoContainer];
  const intl = initialProgress(flag2[20]).intl;
  const t = initialProgress(flag2[20]).t;
  obj3.accessibilityLabel = intl.string(tmp47 ? t.R3aFPe : t.fTMEUi);
  let tmp61 = first2 !== first2.ERRORED;
  if (tmp61) {
    obj4 = { mixWithOthers: "inherit", httpEngine, automaticallyWaitsToMinimizeStalling, maxBitRate, bufferConfig, preferredForwardBufferDuration, ref, accessible: false, importantForAccessibility: "no-hide-descendants", accessibilityRole: "none", style: tmp.video, paused: tmp47, repeat, source: initialProgress.source, onBuffer: callback17, onPlaybackStalled: callback18, onPlaybackResume: callback19, onLoad: callback5, onSeek: callback11, onProgress: callback13, onLoadStart: callback15, onEnd: callback14, onError: callback16, onReadyForDisplay: callback3, onVideoTracks, onLayout: onVideoLayout, resizeMode: "contain" };
    tmp61 = onPausePlayback(repeat, obj4);
  }
  const items26 = [tmp61, , , , , ];
  let renderCaptionsResult;
  if (null != renderCaptions) {
    renderCaptionsResult = renderCaptions(first1.timestampSec);
  }
  items26[1] = renderCaptionsResult;
  if (!isBuffering) {
    items26[2] = isBuffering;
    let tmp72 = !tmp23[0];
    if (tmp72) {
      obj5 = { style: tmp.loadingContainer };
      const obj6 = { animating: true };
      obj5.children = onPausePlayback(onSeek, obj6);
      tmp72 = onPausePlayback(onReadyForDisplay, obj5);
    }
    items26[3] = tmp72;
    obj7 = {};
    const items27 = [tmp.controls, animatedStyle];
    obj7.style = items27;
    obj7.accessible = false;
    let tmp80Result = flag3;
    if (!flag3) {
      tmp80Result = flag4;
    }
    if (tmp80Result) {
      const obj8 = {};
      const items28 = [, , ];
      ({ controlsTopBottom: arr30[0], controlsTop: arr30[1] } = tmp);
      items28[2] = tmp55;
      obj8.style = items28;
      if (!flag3) {
        const items29 = [flag3, ];
        if (flag4) {
          const obj9 = { accessibilityRole: "button" };
          const intl3 = initialProgress(flag2[20]).intl;
          obj9.accessibilityLabel = intl3.string(initialProgress(flag2[20]).t.KCzjTi);
          obj9.onPress = onOpenTranscript;
          obj9.style = tmp.controlButton;
          const obj10 = { color: tmp.iconDisabled.color };
          obj9.children = onPausePlayback(initialProgress(flag2[23]).TranscriptOutlineIcon, obj10);
          flag4 = onPausePlayback(initialProgress(flag2[21]).PressableOpacity, obj9);
        }
        items29[1] = flag4;
        obj8.children = items29;
        tmp80Result = tmp80(tmp81, obj8);
      } else {
        const obj11 = { accessibilityRole: "button" };
        const intl2 = initialProgress(flag2[20]).intl;
        obj11.accessibilityLabel = intl2.string(initialProgress(flag2[20]).t.bDSZO1);
        obj11.onPress = onToggleCaptions;
        obj11.style = tmp.controlButton;
        let obj12 = {};
        if (captionsEnabled) {
          let color = tmp.icon.color;
        } else {
          color = tmp.iconDisabled.color;
        }
        obj12.color = color;
        obj12 = tmp82(initialProgress(flag2[22]).ClosedCaptionsOutlineIcon, obj12);
        obj11.children = obj12;
        onPausePlayback(initialProgress(flag2[21]).PressableOpacity, obj11);
      }
    }
    const items30 = [tmp80Result, , ];
    const obj13 = { style: tmp.controlsMiddle };
    let tmp91 = flag7;
    if (flag7) {
      const obj14 = { disabled: first2 === first2.ERRORED, accessibilityRole: "button" };
      const intl4 = initialProgress(flag2[20]).intl;
      obj14.accessibilityLabel = intl4.string(initialProgress(flag2[20]).t.r9s3Uv);
      obj14.onPress = callback1Result;
      const obj15 = { color: tmp.icon.color, width: 16, height: 16 };
      obj14.children = onPausePlayback(initialProgress(flag2[25]).SkipBackwardIcon, obj15);
      tmp91 = onPausePlayback(initialProgress(flag2[24]).VideoQuestPlayerControlButton, obj14);
    }
    const items31 = [tmp91, , ];
    const obj16 = { accessibilityRole: "button" };
    if (!first3) {
      tmp = first2;
      if (first2 !== first2.ERRORED) {
        tmp = initialProgress;
        tmp = flag2;
        const t2 = initialProgress(flag2[20]).t;
        let K0e7M9 = tmp47 ? t2.R3aFPe : t2.fTMEUi;
      }
      obj16.accessibilityLabel = tmp99(K0e7M9);
      obj16.onPress = callback7;
      if (!first3) {
        tmp = first2;
        if (first2 !== first2.ERRORED) {
          tmp = initialProgress;
          tmp = flag2;
          tmp = onPausePlayback;
          if (tmp47) {
            let PauseIcon = tmp(tmp[27]).PlayIcon;
          } else {
            PauseIcon = tmp(tmp[28]).PauseIcon;
          }
          const obj17 = { size: "lg" };
          tmp = tmp(PauseIcon, obj17);
        }
        obj16.children = tmp;
        items31[1] = tmp96(initialProgress(flag2[24]).VideoQuestPlayerControlButton, obj16);
        if (flag7) {
          tmp = onPausePlayback;
          tmp = initialProgress;
          tmp = flag2;
          const obj18 = { disabled: tmp35, accessibilityRole: "button" };
          const intl5 = initialProgress(flag2[20]).intl;
          obj18.accessibilityLabel = intl5.string(initialProgress(flag2[20]).t.zWDcNP);
          obj18.onPress = callback1Result1;
          const obj19 = { color: tmp.icon.color, width: 16, height: 16 };
          obj18.children = onPausePlayback(initialProgress(flag2[29]).SkipForwardIcon, obj19);
          flag7 = onPausePlayback(initialProgress(flag2[24]).VideoQuestPlayerControlButton, obj18);
        }
        items31[2] = flag7;
        obj13.children = items31;
        items30[1] = tmp89(tmp90, obj13);
        if (flag5) {
          tmp = onPausePlayback;
          tmp = onReadyForDisplay;
          const obj20 = {};
          const items32 = [, , ];
          ({ controlsTopBottom: arr34[0], controlsBottom: arr34[1] } = tmp);
          items32[2] = tmp55;
          obj20.style = items32;
          tmp = initialProgress;
          tmp = flag2;
          const obj21 = { accessibilityRole: "button" };
          const intl6 = initialProgress(flag2[20]).intl;
          obj21.accessibilityLabel = intl6.string(initialProgress(flag2[20]).t.vKZT5t);
          obj21.onPress = onToggleFullscreen;
          obj21.style = tmp.controlButton;
          obj21.children = onPausePlayback(initialProgress(flag2[30]).FullscreenEnterIcon, {});
          obj20.children = onPausePlayback(initialProgress(flag2[21]).PressableOpacity, obj21);
          flag5 = onPausePlayback(onReadyForDisplay, obj20);
        }
        items30[2] = flag5;
        obj7.children = items30;
        items26[4] = tmp76(flag(flag2[10]).View, obj7);
        if (flag6) {
          tmp = onPausePlayback;
          tmp = onReadyForDisplay;
          const obj22 = { style: tmp.progressContainer };
          tmp = flag;
          tmp = flag2;
          const obj23 = {};
          const items33 = [tmp.progress, animatedStyle1];
          obj23.style = items33;
          obj22.children = onPausePlayback(flag(flag2[10]).View, obj23);
          flag6 = onPausePlayback(onReadyForDisplay, obj22);
        }
        items26[5] = flag6;
        obj3.children = items26;
        obj2.children = onResumePlayback(onProgress, obj3);
        return onPausePlayback(onReadyForDisplay, obj2);
      }
      tmp = onPausePlayback;
      tmp = initialProgress;
      tmp = flag2;
      const obj24 = { size: "lg" };
      tmp = onPausePlayback(initialProgress(flag2[26]).RetryIcon, obj24);
    }
    tmp = initialProgress;
    tmp = flag2;
    K0e7M9 = initialProgress(flag2[20]).t.K0e7M9;
    tmp76 = onResumePlayback;
    tmp89 = onResumePlayback;
    tmp90 = onReadyForDisplay;
    tmp96 = onPausePlayback;
  } else {
    const obj25 = { animating: true };
    let items34 = [tmp.bufferingSpinner, ];
    if (!isFullscreen) {
      if ("center" !== bufferingSpinnerPlacement) {
        let obj26 = {};
        let top;
        if (null != contentInsets) {
          top = contentInsets.top;
        }
        let num2 = 0;
        if (null != top) {
          num2 = top;
        }
        obj26.top = num2;
        let left;
        if (null != contentInsets) {
          left = contentInsets.left;
        }
        let num3 = 0;
        if (null != left) {
          num3 = left;
        }
        obj26.left = num3;
      }
      items34[1] = obj26;
      obj25.style = items34;
      items34 = flag(flag2[6]).unsafe_rawColors.WHITE;
      obj25.color = items34;
      tmp65(tmp66, obj25);
    }
    obj26 = tmp.bufferingSpinnerCentered;
  }
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/AdVideoPlayer.tsx");

export const PlayerState = obj12;
export const PlaybackTriggerSource = obj13;
export const AdVideoPlayer = memoResult;
