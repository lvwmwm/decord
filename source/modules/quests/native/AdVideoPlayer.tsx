// Module ID: 13795
// Function ID: 104357
// Name: getSafeAreaInsetOrPadding
// Dependencies: [0, 0, 0, 4294967295, 4294967295, 4294967295, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4294967295, 0]

// Module 13795 (getSafeAreaInsetOrPadding)
import closure_3 from "result";
import importAllResult from "result";
import result from "result";
import closure_14 from "result";
import result from "result";
import importDefaultResult from "result";
import result from "result";

let StyleSheet;
function getSafeAreaInsetOrPadding(arg0, arg1) {
  return Math.max(arg0[arg1], obj[arg1]);
}
({ View: closure_5, StyleSheet, Pressable: closure_6, ActivityIndicator: closure_7 } = result);
let closure_8 = importDefault(dependencyMap[3]);
({ AppStates: closure_9, ComponentActions: closure_10 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[5]));
let obj = { left: require("result").space.PX_16, right: require("result").space.PX_16, top: require("result").space.PX_16, bottom: require("result").space.PX_16 };
let closure_15 = { code: "function hasVideoEnded_AdVideoPlayerTsx1(currentTime,videoDuration){return currentTime>=videoDuration-1;}" };
let closure_16 = () => {
  function hasVideoEnded(arg0, arg1) {
    return arg0 >= arg1 - 1;
  }
  hasVideoEnded.__closure = {};
  hasVideoEnded.__workletHash = 8992945176371;
  hasVideoEnded.__initData = closure_15;
  return hasVideoEnded;
}();
let closure_17 = { code: "function canSeekForward_AdVideoPlayerTsx2(currentTime,maxTimestamp,videoDuration,allowUnrestrictedSeeking){const{hasVideoEnded}=this.__closure;return!hasVideoEnded(currentTime,videoDuration)&&(allowUnrestrictedSeeking||currentTime<=maxTimestamp-1);}" };
let closure_18 = () => {
  function canSeekForward(arg0, arg1, arg2, arg3) {
    let tmp = arg3;
    let tmp2 = !callback(arg0, arg2);
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
}();
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.container = {};
result = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
result["backgroundColor"] = require("result").colors.BACKGROUND_BASE_LOWEST;
result["justifyContent"] = "center";
result["alignItems"] = "center";
obj.loadingContainer = result;
obj.bufferingSpinner = { position: "absolute" };
const obj3 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj3["justifyContent"] = "center";
obj3["alignItems"] = "center";
obj.bufferingSpinnerCentered = obj3;
obj.video = {};
obj.videoContainer = { was: "PlaystationNeutralIcon", visible: "png", hasSpoiler: true };
const obj4 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
const obj1 = {};
const tmp4 = arg1(dependencyMap[5]);
const importDefaultResultResult = require("result")(require("result").unsafe_rawColors.BLACK);
obj4["backgroundColor"] = require("result")(require("result").unsafe_rawColors.BLACK).alpha(0.5).hex();
obj4["justifyContent"] = "center";
obj4["alignItems"] = "center";
obj4["flexDirection"] = "column";
obj.controls = obj4;
const obj5 = { "Null": "isArray", "Null": "SOLID", "Null": "isArray", "Null": "isArrayBuffer", "Null": "540091c70b333c8b8937ba1627138192", "Null": "wumpus-pikachu", padding: require("result").space.PX_8 };
obj.controlsTopBottom = obj5;
const alphaResult = require("result")(require("result").unsafe_rawColors.BLACK).alpha(0.5);
obj.controlsMiddle = { gap: require("result").space.PX_24 };
obj.controlsTop = { top: 0 };
obj.controlsBottom = { bottom: 0 };
const obj7 = { flexDirection: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007696006539765, alignItems: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000025322775409541142, justifyContent: 0, marginLeft: -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009266003024732815, height: require("result").space.PX_16, minWidth: 6893587421222876000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, borderRadius: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000042439915829 };
obj.progressContainer = obj7;
const obj8 = { 1364484706: 0, -547128388: 11, 1783944935: 4, 662389384: "Explosion 3", 1637694579: 1, 49893946: 1, backgroundColor: require("result").colors.WHITE, shadowOffset: { "Null": -536870861, "Null": -299892737 }, shadowColor: require("result").colors.WHITE };
obj.progress = obj8;
const obj6 = { gap: require("result").space.PX_24 };
obj.icon = { color: require("result").colors.TEXT_DEFAULT };
const obj9 = { color: require("result").colors.TEXT_DEFAULT };
obj.iconDisabled = { color: require("result").colors.TEXT_SUBTLE };
const obj10 = { color: require("result").colors.TEXT_SUBTLE };
obj.controlButton = { padding: require("result").space.PX_8 };
let closure_19 = result.createStyles(obj);
const obj12 = { PAUSED: "paused", PLAYING: "playing", ENDED: "ended", LOADING: "loading", ERRORED: "errored" };
const obj13 = { USER_INTERACTION: "USER_INTERACTION", SYSTEM_INITIATED: "SYSTEM_INITIATED", IMPERATIVE_API: "IMPERATIVE_API" };
let closure_22 = { code: "function shouldShowControls_AdVideoPlayerTsx3(){const{hasLoaded,hideControls,showControls,playerState,PlayerState,isVideoEnded}=this.__closure;return hasLoaded&&!hideControls&&(showControls.get()||playerState===PlayerState.PAUSED||playerState===PlayerState.ENDED||playerState===PlayerState.ERRORED||isVideoEnded);}" };
let closure_23 = { code: "function AdVideoPlayerTsx4(){const{shouldShowControls,withSpring,SUBTLE_SPRING}=this.__closure;const show=shouldShowControls();return{opacity:withSpring(show?1:0,SUBTLE_SPRING),pointerEvents:show?'auto':'none'};}" };
let closure_24 = { code: "function AdVideoPlayerTsx5(){const{withTiming,progressSharedValue,timingFast}=this.__closure;return{width:withTiming(progressSharedValue.get()*100+\"%\",timingFast,'animate-always')};}" };
const obj11 = { padding: require("result").space.PX_8 };
result = result.fileFinishedImporting("modules/quests/native/AdVideoPlayer.tsx");

export const PlayerState = obj12;
export const PlaybackTriggerSource = obj13;
export const AdVideoPlayer = importAllResult.memo((initialProgress) => {
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
  const arg1 = initialProgress;
  let num = initialProgress.contentDuration;
  if (num === undefined) {
    num = 0;
  }
  let flag = initialProgress.allowUnrestrictedSeeking;
  if (flag === undefined) {
    flag = false;
  }
  const importDefault = flag;
  let flag2 = initialProgress.disableResumeOnLoad;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const dependencyMap = flag2;
  ({ isFullscreen, contentInsets, captionsEnabled, style, externallyPaused } = initialProgress);
  if (captionsEnabled === undefined) {
    captionsEnabled = false;
  }
  ({ renderCaptions, onLoadStart } = initialProgress);
  let callback = onLoadStart;
  const onLoad = initialProgress.onLoad;
  const importAllResult = onLoad;
  const onReadyForDisplay = initialProgress.onReadyForDisplay;
  const onProgress = initialProgress.onProgress;
  const onSeek = initialProgress.onSeek;
  const onError = initialProgress.onError;
  let closure_8 = onError;
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
  let obj = flag8;
  ({ repeat, httpEngine, automaticallyWaitsToMinimizeStalling, maxBitRate, bufferConfig, preferredForwardBufferDuration } = initialProgress);
  if (repeat === undefined) {
    repeat = false;
  }
  let closure_14 = repeat;
  let closure_15;
  let callback2;
  let closure_17;
  let callback3;
  let callback4;
  let obj12;
  let closure_21;
  let closure_22;
  let closure_23;
  let closure_24;
  let getSafeAreaInsetOrPadding;
  let closure_26;
  callback = undefined;
  let first3;
  let sharedValue;
  let tmp16;
  let sharedValue1;
  let closure_32;
  callback2 = undefined;
  let closure_34;
  callback4 = undefined;
  let callback6;
  let closure_37;
  let callback8;
  let callback9;
  let tmp35;
  toggleBuffering = undefined;
  let tmp = callback4();
  let ref = importAllResult.useRef(null);
  if (null != videoRef) {
    ref = videoRef;
  }
  closure_15 = ref;
  const tmp3 = callback(importAllResult.useState(num), 2);
  const first = tmp3[0];
  callback2 = first;
  closure_17 = tmp3[1];
  obj = {};
  const merged = Object.assign(initialProgress);
  const tmp6 = callback(importAllResult.useState(obj), 2);
  const first1 = tmp6[0];
  callback3 = first1;
  callback4 = tmp6[1];
  const tmp8 = callback(importAllResult.useState(obj12.LOADING), 2);
  const first2 = tmp8[0];
  obj12 = first2;
  closure_21 = tmp8[1];
  const tmp10 = callback(importAllResult.useState(false), 2);
  first3 = tmp10[0];
  closure_22 = first3;
  closure_23 = tmp10[1];
  closure_24 = importAllResult.useRef(null);
  getSafeAreaInsetOrPadding = importAllResult.useRef(0);
  closure_26 = importAllResult.useRef([]);
  const items = [onPlayerStateChange];
  callback = importAllResult.useCallback((arg0) => {
    lib(arg0);
    if (null != onPlayerStateChange) {
      onPlayerStateChange(arg0);
    }
  }, items);
  if (first3) {
    first3 = first2 === obj12.ENDED;
  }
  if (first3) {
    first3 = callback2(first1.timestampSec, first1.duration);
  }
  let obj1 = arg1(dependencyMap[10]);
  sharedValue = obj1.useSharedValue(false);
  tmp16 = () => {
    function shouldShowControls() {
      let tmp = closure_22;
      if (closure_22) {
        tmp = !closure_13;
      }
      if (tmp) {
        let value = closure_29.get();
        if (!value) {
          value = constants === constants.PAUSED;
        }
        if (!value) {
          value = constants === constants.ENDED;
        }
        if (!value) {
          value = constants === constants.ERRORED;
        }
        if (!value) {
          value = closure_28;
        }
        tmp = value;
      }
      return tmp;
    }
    shouldShowControls.__closure = { hasLoaded: first3, hideControls: flag8, showControls: sharedValue, playerState: first2, PlayerState: first2, isVideoEnded: first3 };
    shouldShowControls.__workletHash = 8094403036162;
    shouldShowControls.__initData = first3;
    return shouldShowControls;
  }();
  let obj2 = arg1(dependencyMap[10]);
  function fe() {
    const tmp = tmp16();
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
  obj = { shouldShowControls: tmp16, withSpring: arg1(dependencyMap[11]).withSpring, SUBTLE_SPRING: arg1(dependencyMap[12]).SUBTLE_SPRING };
  fe.__closure = obj;
  fe.__workletHash = 311315682972;
  fe.__initData = closure_23;
  const animatedStyle = obj2.useAnimatedStyle(fe);
  let obj4 = arg1(dependencyMap[10]);
  sharedValue1 = obj4.useSharedValue(0);
  let obj5 = arg1(dependencyMap[10]);
  function ge() {
    const obj = {};
    const result = 100 * sharedValue1.get();
    obj.width = initialProgress(flag2[13]).withTiming(`${tmp}%`, initialProgress(flag2[14]).timingFast, "animate-always");
    return obj;
  }
  obj = { withTiming: arg1(dependencyMap[13]).withTiming, progressSharedValue: sharedValue1, timingFast: arg1(dependencyMap[14]).timingFast };
  ge.__closure = obj;
  ge.__workletHash = 11793601648786;
  ge.__initData = closure_24;
  const animatedStyle1 = obj5.useAnimatedStyle(ge);
  closure_32 = importAllResult.useRef(-1);
  const items1 = [sharedValue];
  const callback1 = importAllResult.useCallback((arg0) => {
    const initialProgress = arg0;
    return (arg0) => {
      const items = [...arguments];
      clearTimeout(ref.current);
      const result = closure_29.set(true);
      ref.current = setTimeout(() => {
        const result = closure_29.set(false);
      }, 2000);
      if (null != arg0) {
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        return HermesBuiltin.apply(items1, undefined);
      }
    };
  }, items1);
  callback2 = importAllResult.useCallback((arg0, arg1) => {
    const initialProgress = arg0;
    callback2((maxTimestampSec) => ({ timestampSec: maxTimestampSec, maxTimestampSec: Math.max(maxTimestampSec.maxTimestampSec, Math.floor(maxTimestampSec)), duration: arg1 }));
  }, []);
  const tmp23 = callback(importAllResult.useState(false), 2);
  closure_34 = tmp23[1];
  const items2 = [onReadyForDisplay];
  const items3 = [flag, , , ];
  ({ duration: arr4[1], maxTimestampSec: arr4[2] } = first1);
  items3[3] = ref;
  callback3 = importAllResult.useCallback(() => {
    if (null != onReadyForDisplay) {
      onReadyForDisplay();
    }
    callback4(true);
  }, items2);
  callback4 = importAllResult.useCallback((arg0) => {
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
  const imperativeHandle = importAllResult.useImperativeHandle(initialProgress.ref, () => ({
    seekToStart() {
      if (constants !== constants.ERRORED) {
        callback4(0);
        if (constants === constants.ENDED) {
          callback3(constants.PLAYING);
          if (null != callback2) {
            callback2(constants2.IMPERATIVE_API);
          }
        }
      }
    },
    play() {
      if (constants === constants.PAUSED) {
        callback3(constants.PLAYING);
        if (null != callback2) {
          callback2(constants2.IMPERATIVE_API);
        }
      }
    },
    pause() {
      if (constants === constants.PLAYING) {
        callback3(constants.PAUSED);
        if (null != callback) {
          callback(constants2.IMPERATIVE_API);
        }
      }
    }
  }), items4);
  const items5 = [ref, initialProgress.timestampSec, flag2, callback, onLoad, callback4];
  const items6 = [first2, onPausePlayback, onResumePlayback, first3, callback, callback4];
  const callback5 = importAllResult.useCallback((duration) => {
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
  callback6 = importAllResult.useCallback(() => {
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
  const callback7 = importAllResult.useCallback(() => callback6(), items7);
  closure_37 = importAllResult.useRef(false);
  const items8 = [first2, callback, onPausePlayback];
  callback8 = importAllResult.useCallback(() => {
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
  callback9 = importAllResult.useCallback(() => {
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
  const effect = importAllResult.useEffect(() => {
    const ComponentDispatch = initialProgress(flag2[15]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(onPlayerStateChange.QUEST_GAME_LINK_OPENED, callback8);
    const ComponentDispatch2 = initialProgress(flag2[15]).ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(onPlayerStateChange.QUEST_APP_STORE_OVERLAY_FINISHED, callback9);
    return () => {
      const ComponentDispatch = callback(closure_2[15]).ComponentDispatch;
      ComponentDispatch.unsubscribe(constants.QUEST_GAME_LINK_OPENED, closure_38);
      const ComponentDispatch2 = callback(closure_2[15]).ComponentDispatch;
      ComponentDispatch2.unsubscribe(constants.QUEST_APP_STORE_OVERLAY_FINISHED, closure_39);
    };
  }, items10);
  const items11 = [sharedValue, callback6];
  const items12 = [first, sharedValue1, onSeek, callback2, ref];
  const callback10 = importAllResult.useCallback(() => {
    if (sharedValue.get()) {
      const result = sharedValue.set(false);
    }
    callback6({ shouldRestartVideo: false });
  }, items11);
  tmp35 = first2 === obj12.ERRORED;
  const callback11 = importAllResult.useCallback((currentTime) => {
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
    tmp35 = !callback3(first1.timestampSec, first1.maxTimestampSec, first1.duration, flag);
  }
  const items13 = [callback4, first, sharedValue1, tmp35];
  const items14 = [callback4, first, sharedValue1, first2, callback];
  const callback12 = importAllResult.useCallback(() => {
    if (!tmp35) {
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
  const callback1Result = callback1(importAllResult.useCallback(() => {
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
  const callback13 = importAllResult.useCallback((seekableDuration) => {
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
  const callback14 = importAllResult.useCallback(() => {
    if (!repeat) {
      callback(first2.ENDED);
    }
    if (null != onEnd) {
      onEnd();
    }
  }, items16);
  const items18 = [callback, onError];
  const callback15 = importAllResult.useCallback(() => {
    callback(first2.LOADING);
    if (null != onLoadStart) {
      onLoadStart();
    }
  }, items17);
  const callback16 = importAllResult.useCallback((arg0) => {
    callback(first2.ERRORED);
    if (null != onError) {
      onError(arg0);
    }
  }, items18);
  let obj7 = arg1(dependencyMap[16]);
  const items19 = [closure_8];
  const tmp45 = obj7.useStateFromStores(items19, () => onError.getState()) === onEnd.ACTIVE;
  const items20 = [ref];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    if (obj.isAndroid()) {
      const initialProgress = ref.current;
      return () => {
        let tmp2 = tmp;
        if (null != current) {
          tmp2 = null == current.setNativeProps;
        }
        if (!tmp2) {
          let obj = { -1656982745: null, -112051615: null };
          obj = { uri: null };
          obj.src = obj;
          current.setNativeProps(obj);
        }
      };
    }
    const obj = initialProgress(flag2[17]);
  }, items20);
  let tmp47 = !tmp45;
  if (tmp45) {
    tmp47 = first2 === obj12.PAUSED;
  }
  if (!tmp47) {
    tmp47 = first2 === obj12.LOADING;
  }
  if (!tmp47) {
    tmp47 = externallyPaused;
  }
  const callback1Result1 = callback1(callback12);
  ({ isBuffering, toggleBuffering } = function useBufferingState(onBuffer) {
    onBuffer = onBuffer.onBuffer;
    const initialProgress = onBuffer;
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
  }({ onBuffer }));
  const items21 = [toggleBuffering, first2];
  const items22 = [toggleBuffering];
  const callback17 = importAllResult.useCallback((isBuffering) => {
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
  const callback18 = importAllResult.useCallback(() => {
    if (obj.isIOS()) {
      toggleBuffering(true);
    }
  }, items22);
  const callback19 = importAllResult.useCallback(() => {
    if (obj.isIOS()) {
      toggleBuffering(false);
    }
  }, items23);
  const tmp54 = importDefault(dependencyMap[19])();
  let tmp55 = isFullscreen;
  if (isFullscreen) {
    tmp55 = null != tmp54;
  }
  if (tmp55) {
    obj1 = { paddingRight: getSafeAreaInsetOrPadding(tmp54, "right"), paddingLeft: getSafeAreaInsetOrPadding(tmp54, "left") };
    tmp55 = obj1;
  }
  obj2 = { style: items24, accessible: false };
  const items24 = [tmp.container, style];
  const obj3 = { style: items25, onPress: callback10, accessible: !tmp16Result };
  const items25 = [tmp.videoContainer];
  const intl = arg1(dependencyMap[20]).intl;
  const t = arg1(dependencyMap[20]).t;
  obj3.accessibilityLabel = intl.string(tmp47 ? t.R3aFPe : t.fTMEUi);
  let tmp61 = first2 !== obj12.ERRORED;
  if (tmp61) {
    obj4 = { mixWithOthers: "inherit", httpEngine, automaticallyWaitsToMinimizeStalling, maxBitRate, bufferConfig, preferredForwardBufferDuration, ref, accessible: false, importantForAccessibility: "no-hide-descendants", accessibilityRole: "none", style: tmp.video, paused: tmp47, repeat, source: initialProgress.source, onBuffer: callback17, onPlaybackStalled: callback18, onPlaybackResume: callback19, onLoad: callback5, onSeek: callback11, onProgress: callback13, onLoadStart: callback15, onEnd: callback14, onError: callback16, onReadyForDisplay: callback3, onVideoTracks, onLayout: onVideoLayout, resizeMode: "contain" };
    tmp61 = onPausePlayback(closure_14, obj4);
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
          const intl3 = arg1(dependencyMap[20]).intl;
          obj9.accessibilityLabel = intl3.string(arg1(dependencyMap[20]).t.KCzjTi);
          obj9.onPress = onOpenTranscript;
          obj9.style = tmp.controlButton;
          const obj10 = { color: tmp.iconDisabled.color };
          obj9.children = onPausePlayback(arg1(dependencyMap[23]).TranscriptOutlineIcon, obj10);
          flag4 = onPausePlayback(arg1(dependencyMap[21]).PressableOpacity, obj9);
        }
        items29[1] = flag4;
        obj8.children = items29;
        tmp80Result = tmp80(tmp81, obj8);
      } else {
        const obj11 = { accessibilityRole: "button" };
        const intl2 = arg1(dependencyMap[20]).intl;
        obj11.accessibilityLabel = intl2.string(arg1(dependencyMap[20]).t.bDSZO1);
        obj11.onPress = onToggleCaptions;
        obj11.style = tmp.controlButton;
        obj12 = {};
        if (captionsEnabled) {
          let color = tmp.icon.color;
        } else {
          color = tmp.iconDisabled.color;
        }
        obj12.color = color;
        obj12 = tmp82(arg1(dependencyMap[22]).ClosedCaptionsOutlineIcon, obj12);
        obj11.children = obj12;
        onPausePlayback(arg1(dependencyMap[21]).PressableOpacity, obj11);
      }
    }
    const items30 = [tmp80Result, , ];
    const obj13 = { style: tmp.controlsMiddle };
    let tmp91 = flag7;
    if (flag7) {
      const obj14 = { disabled: first2 === obj12.ERRORED, accessibilityRole: "button" };
      const intl4 = arg1(dependencyMap[20]).intl;
      obj14.accessibilityLabel = intl4.string(arg1(dependencyMap[20]).t.r9s3Uv);
      obj14.onPress = callback1Result;
      const obj15 = { color: tmp.icon.color };
      obj14.children = onPausePlayback(arg1(dependencyMap[25]).SkipBackwardIcon, obj15);
      tmp91 = onPausePlayback(arg1(dependencyMap[24]).VideoQuestPlayerControlButton, obj14);
    }
    const items31 = [tmp91, , ];
    const obj16 = { accessibilityRole: "button" };
    if (!first3) {
      tmp = obj12;
      if (first2 !== obj12.ERRORED) {
        tmp = arg1;
        tmp = dependencyMap;
        const t2 = arg1(dependencyMap[20]).t;
        let K0e7M9 = tmp47 ? t2.R3aFPe : t2.fTMEUi;
      }
      obj16.accessibilityLabel = tmp99(K0e7M9);
      obj16.onPress = callback7;
      if (!first3) {
        tmp = obj12;
        if (first2 !== obj12.ERRORED) {
          tmp = arg1;
          tmp = dependencyMap;
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
        items31[1] = tmp96(arg1(dependencyMap[24]).VideoQuestPlayerControlButton, obj16);
        if (flag7) {
          tmp = onPausePlayback;
          tmp = arg1;
          tmp = dependencyMap;
          const obj18 = { disabled: tmp35, accessibilityRole: "button" };
          const intl5 = arg1(dependencyMap[20]).intl;
          obj18.accessibilityLabel = intl5.string(arg1(dependencyMap[20]).t.zWDcNP);
          obj18.onPress = callback1Result1;
          const obj19 = { color: tmp.icon.color };
          obj18.children = onPausePlayback(arg1(dependencyMap[29]).SkipForwardIcon, obj19);
          flag7 = onPausePlayback(arg1(dependencyMap[24]).VideoQuestPlayerControlButton, obj18);
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
          tmp = arg1;
          tmp = dependencyMap;
          const obj21 = { accessibilityRole: "button" };
          const intl6 = arg1(dependencyMap[20]).intl;
          obj21.accessibilityLabel = intl6.string(arg1(dependencyMap[20]).t.vKZT5t);
          obj21.onPress = onToggleFullscreen;
          obj21.style = tmp.controlButton;
          obj21.children = onPausePlayback(arg1(dependencyMap[30]).FullscreenEnterIcon, {});
          obj20.children = onPausePlayback(arg1(dependencyMap[21]).PressableOpacity, obj21);
          flag5 = onPausePlayback(onReadyForDisplay, obj20);
        }
        items30[2] = flag5;
        obj7.children = items30;
        items26[4] = tmp76(importDefault(dependencyMap[10]).View, obj7);
        if (flag6) {
          tmp = onPausePlayback;
          tmp = onReadyForDisplay;
          const obj22 = { style: tmp.progressContainer };
          tmp = importDefault;
          tmp = dependencyMap;
          const obj23 = {};
          const items33 = [tmp.progress, animatedStyle1];
          obj23.style = items33;
          obj22.children = onPausePlayback(importDefault(dependencyMap[10]).View, obj23);
          flag6 = onPausePlayback(onReadyForDisplay, obj22);
        }
        items26[5] = flag6;
        obj3.children = items26;
        obj2.children = onResumePlayback(onProgress, obj3);
        return onPausePlayback(onReadyForDisplay, obj2);
      }
      tmp = onPausePlayback;
      tmp = arg1;
      tmp = dependencyMap;
      const obj24 = { size: "lg" };
      tmp = onPausePlayback(arg1(dependencyMap[26]).RetryIcon, obj24);
    }
    tmp = arg1;
    tmp = dependencyMap;
    K0e7M9 = arg1(dependencyMap[20]).t.K0e7M9;
    const tmp76 = onResumePlayback;
    const tmp89 = onResumePlayback;
    const tmp90 = onReadyForDisplay;
    const tmp96 = onPausePlayback;
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
      items34 = importDefault(dependencyMap[6]).unsafe_rawColors.WHITE;
      obj25.color = items34;
      tmp65(tmp66, obj25);
    }
    obj26 = tmp.bufferingSpinnerCentered;
  }
});
