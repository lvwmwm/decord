// Module ID: 13983
// Function ID: 106984
// Name: BountyVideo
// Dependencies: [57, 31, 27, 4976, 33, 478, 9494, 689, 4130, 13984, 8342, 10868, 10869, 3991, 3834, 4131, 4134, 13964, 13967, 13985, 5085, 13986, 13988, 13990, 9819, 2]
// Exports: BountyVideo

// Module 13983 (BountyVideo)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { QuestsExperimentLocations } from "QuestsExperimentLocations";
import jsxProd from "jsxProd";
import isWindows from "isWindows";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_5;
let closure_6;
let closure_7;
let closure_9;
const require = arg1;
let num = 0;
({ View: closure_5, StyleSheet: closure_6, ActivityIndicator: closure_7 } = get_ActivityIndicator);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = jsxProd);
if (isWindows.isAndroid()) {
  num = 150;
}
let closure_13 = { top: 48, bottom: 16, left: 16, right: 16 };
const lg = require("_createForOfIteratorHelperLoose").radii.lg;
let closure_15 = _createForOfIteratorHelperLoose.createStyles(() => {
  let obj = {};
  obj = {};
  const merged = Object.assign(closure_6.absoluteFillObject);
  obj["overflow"] = "hidden";
  obj["borderRadius"] = lg;
  obj.videoContainer = obj;
  obj = { position: "absolute", top: importDefault(689).space.PX_8, left: importDefault(689).space.PX_8, flexDirection: "row", alignItems: "center", gap: importDefault(689).space.PX_8 };
  obj.leftRow = obj;
  const obj1 = { position: "absolute", bottom: 0, height: require(13984) /* BountiesModalProgress */.PROGRESS_BAR_HEIGHT, left: lg, right: lg };
  obj.progress = obj1;
  const obj2 = {};
  const merged1 = Object.assign(closure_6.absoluteFillObject);
  obj2["backgroundColor"] = "#000000";
  obj2["justifyContent"] = "center";
  obj2["alignItems"] = "center";
  obj.poster = obj2;
  obj.peekOrigin = { transformOrigin: "top" };
  return obj;
});
let closure_16 = { code: "function BountyVideoTsx1(){const{posterOpacity}=this.__closure;return{opacity:posterOpacity.get()};}" };
let closure_17 = { code: "function BountyVideoTsx2(){const{isScrollingInBoundsSharedValue,withTiming,isActive,timingStandard}=this.__closure;var _isScrollingInBoundsS;const isScrollingInBounds=((_isScrollingInBoundsS=isScrollingInBoundsSharedValue)===null||_isScrollingInBoundsS===void 0?void 0:_isScrollingInBoundsS.get())===true;return{opacity:withTiming(isActive&&!isScrollingInBounds?1:0,timingStandard)};}" };
let closure_18 = { code: "function BountyVideoTsx3(){const{peekScale,AUTO_SCROLL_PEEK_SCALE,AUTO_SCROLL_PEEK_TOP_OFFSET}=this.__closure;if(peekScale==null){return{};}const scale=peekScale.get();const scaleProgress=(1-scale)/(1-AUTO_SCROLL_PEEK_SCALE);return{transform:[{translateY:scaleProgress*AUTO_SCROLL_PEEK_TOP_OFFSET},{scale:scale}]};}" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/BountiesModal/BountyVideo.tsx");

export const BountyVideo = function BountyVideo(bounty) {
  let balanceWidgetPillResetKey;
  let c9;
  let handleVideoEnd;
  let handleVideoPaused;
  let handleVideoProgress;
  let handleVideoResumed;
  let initialProgress;
  let isCompleted;
  let isCtaVisible;
  let isEndCardVisible;
  let isProgressBarVisible;
  let isScrollIndicatorEnabled;
  let normalizedProgress;
  let onBuffer;
  let onLoadStart;
  let onPlayerStateChange;
  let onVideoTracks;
  let orbsBalance;
  let ownedByVerticalScrollExperiment;
  let playerRef;
  let renderEndCard;
  let repeat;
  let rewardRemainingSeconds;
  let rewardTotalSeconds;
  let shouldLoadHls;
  let sourceQuestContent;
  let stage1Enabled;
  let tmp6;
  bounty = bounty.bounty;
  ({ isCtaVisible, isEndCardVisible, isScrollIndicatorEnabled, handleVideoProgress } = bounty);
  const handleVideoError = bounty.handleVideoError;
  const onFirstFrame = bounty.onFirstFrame;
  let flag = bounty.isActive;
  ({ sourceQuestContent, isCompleted, isProgressBarVisible, orbsBalance, handleVideoEnd, handleVideoPaused, handleVideoResumed, onLoadStart, onBuffer, onVideoTracks, rewardRemainingSeconds, rewardTotalSeconds, normalizedProgress, initialProgress, repeat } = bounty);
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = bounty.isRecapPageRevealed;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const isScrollingInBoundsSharedValue = bounty.isScrollingInBoundsSharedValue;
  ({ renderEndCard, shouldLoadHls, playerRef, onPlayerStateChange, balanceWidgetPillResetKey } = bounty);
  if (shouldLoadHls === undefined) {
    shouldLoadHls = true;
  }
  const width = bounty.width;
  const height = bounty.height;
  const peekScale = bounty.peekScale;
  let flag3 = bounty.softDownloadCapsEnabled;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let callback;
  let first;
  let c11;
  let closure_12;
  let sharedValue;
  callback = undefined;
  const tmp = callback2();
  let obj = bounty(handleVideoError[10]);
  const rnvHttpEngine = obj.useRnvHttpEngine();
  let obj1 = bounty(handleVideoError[11]);
  const bountiesExperience = obj1.useBountiesExperience(peekScale.VIDEO_MODAL_MOBILE);
  ({ ownedByVerticalScrollExperiment, stage1Enabled } = bountiesExperience);
  let obj2 = bounty(handleVideoError[12]);
  const isBountiesVerticalScrollExperimentEnabled = obj2.useIsBountiesVerticalScrollExperimentEnabled("BountyVideo");
  if (flag3) {
    flag3 = !flag;
  }
  [tmp6, c9] = onFirstFrame(flag.useState(false), 2);
  const tmp7 = onFirstFrame(flag.useState(false), 2);
  first = tmp7[0];
  c11 = tmp9;
  closure_12 = flag.useRef(null);
  let obj3 = bounty(handleVideoError[13]);
  sharedValue = obj3.useSharedValue(1);
  let items = [bounty, width, height];
  const memo = flag.useMemo(() => {
    let obj = bounty(handleVideoError[6]);
    obj = { assetUrl: bounty.videoHls, width, height };
    return obj.getScaledFirstFrameImageUrl(obj);
  }, items);
  let obj5 = bounty(handleVideoError[14]);
  const token = obj5.useToken(handleVideoProgress(handleVideoError[7]).colors.TEXT_DEFAULT);
  const combined = "" + bounty.id + ":" + shouldLoadHls;
  const tmp13 = onFirstFrame(flag.useState(combined), 2);
  if (tmp13[0] !== combined) {
    tmp13[1](combined);
    tmp9(false);
    let result = sharedValue.set(1);
  }
  const items1 = [combined];
  const effect = flag.useEffect(() => () => {
    if (null != outer1_12.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(outer1_12.current);
      outer1_12.current = null;
    }
  }, items1);
  const items2 = [first, sharedValue];
  const effect1 = flag.useEffect(() => {
    if (first) {
      const result = sharedValue.set(bounty(handleVideoError[15]).withTiming(0, bounty(handleVideoError[16]).timingFast));
      const obj = bounty(handleVideoError[15]);
    }
  }, items2);
  callback = flag.useCallback(() => {
    if (null != closure_12.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_12.current);
      closure_12.current = null;
    }
    _undefined2(true);
  }, []);
  const items3 = [onFirstFrame];
  const items4 = [callback, handleVideoError];
  const callback1 = flag.useCallback(() => {
    if (null != onFirstFrame) {
      onFirstFrame();
    }
    if (null != closure_12.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_12.current);
    }
    closure_12.current = setTimeout(() => {
      outer1_11(true);
      outer1_12.current = null;
    }, closure_12);
  }, items3);
  const items5 = [handleVideoProgress];
  callback2 = flag.useCallback((arg0) => {
    callback();
    if (null != handleVideoError) {
      handleVideoError(arg0);
    }
  }, items4);
  const callback3 = flag.useCallback((currentTime) => {
    if (currentTime.currentTime > 0) {
      _undefined(true);
    }
    handleVideoProgress(currentTime);
  }, items5);
  let obj6 = bounty(handleVideoError[13]);
  class Ae {
    constructor() {
      obj = { opacity: useSharedValue.get() };
      return obj;
    }
  }
  Ae.__closure = { posterOpacity: sharedValue };
  Ae.__workletHash = 4975136521719;
  Ae.__initData = closure_16;
  const animatedStyle = obj6.useAnimatedStyle(Ae);
  let obj7 = bounty(handleVideoError[13]);
  class Fe {
    constructor() {
      if (null != closure_5) {
        tmp2 = closure_5;
        value = closure_5.get();
      }
      obj = {};
      obj2 = bounty(handleVideoError[15]);
      num = 0;
      if (c4) {
        flag = true;
        num = 0;
        if (true !== value) {
          num = 1;
        }
      }
      obj.opacity = obj2.withTiming(num, bounty(handleVideoError[16]).timingStandard);
      return obj;
    }
  }
  obj = { isScrollingInBoundsSharedValue, withTiming: bounty(handleVideoError[15]).withTiming, isActive: flag, timingStandard: bounty(handleVideoError[16]).timingStandard };
  Fe.__closure = obj;
  Fe.__workletHash = 12676706441349;
  Fe.__initData = closure_17;
  const animatedStyle1 = obj7.useAnimatedStyle(Fe);
  let obj9 = bounty(handleVideoError[13]);
  function ve() {
    if (null == peekScale) {
      return {};
    } else {
      const value = peekScale.get();
      let obj = {};
      obj = {};
      const diff = 1 - value;
      const diff1 = 1 - bounty(handleVideoError[17]).AUTO_SCROLL_PEEK_SCALE;
      obj.translateY = diff / diff1 * bounty(handleVideoError[17]).AUTO_SCROLL_PEEK_TOP_OFFSET;
      const items = [obj, ];
      obj = { scale: value };
      items[1] = obj;
      obj.transform = items;
      return obj;
    }
  }
  obj = { peekScale, AUTO_SCROLL_PEEK_SCALE: bounty(handleVideoError[17]).AUTO_SCROLL_PEEK_SCALE, AUTO_SCROLL_PEEK_TOP_OFFSET: bounty(handleVideoError[17]).AUTO_SCROLL_PEEK_TOP_OFFSET };
  ve.__closure = obj;
  ve.__workletHash = 7501077341815;
  ve.__initData = closure_18;
  let tmp26 = isCtaVisible;
  const animatedStyle2 = obj9.useAnimatedStyle(ve);
  if (isBountiesVerticalScrollExperimentEnabled) {
    let tmp27 = isCtaVisible;
    if (isCtaVisible) {
      tmp27 = !isEndCardVisible;
    }
    tmp26 = tmp27;
  }
  obj1 = {};
  obj2 = { style: items6 };
  items6 = [width.absoluteFillObject, tmp.peekOrigin, animatedStyle2];
  obj3 = { style: tmp.videoContainer };
  let tmp32Result = null;
  if (shouldLoadHls) {
    const obj4 = { ref: playerRef };
    obj5 = { uri: bounty.videoHls };
    obj4.source = obj5;
    obj4.httpEngine = rnvHttpEngine;
    let tmp35 = !stage1Enabled;
    if (tmp35) {
      tmp35 = !ownedByVerticalScrollExperiment;
    }
    obj4.automaticallyWaitsToMinimizeStalling = tmp35;
    let prop;
    if (flag3) {
      prop = bounty(handleVideoError[19]).SOFT_CAP_PRELOAD_MAX_BITRATE;
    }
    obj4.maxBitRate = prop;
    let prop1;
    if (flag3) {
      prop1 = bounty(handleVideoError[19]).SOFT_CAP_PRELOAD_BUFFER_CONFIG;
    }
    obj4.bufferConfig = prop1;
    let prop2;
    if (flag3) {
      prop2 = bounty(handleVideoError[19]).SOFT_CAP_PRELOAD_FORWARD_BUFFER_SEC;
    }
    obj4.preferredForwardBufferDuration = prop2;
    obj4.initialProgress = initialProgress;
    obj4.isFullscreen = false;
    obj4.externallyPaused = !flag || isEndCardVisible || flag2;
    obj4.style = width.absoluteFillObject;
    obj4.contentInsets = sharedValue;
    obj4.onProgress = callback3;
    obj4.onEnd = handleVideoEnd;
    obj4.onPausePlayback = handleVideoPaused;
    obj4.onResumePlayback = handleVideoResumed;
    obj4.onError = callback2;
    obj4.onLoadStart = onLoadStart;
    obj4.onBuffer = onBuffer;
    obj4.onReadyForDisplay = callback1;
    obj4.onVideoTracks = onVideoTracks;
    obj4.hideControls = isEndCardVisible;
    obj4.showSkipButtons = false;
    obj4.repeat = repeat;
    obj4.bufferingSpinnerPlacement = "center";
    obj4.onPlayerStateChange = onPlayerStateChange;
    tmp32Result = callback(bounty(handleVideoError[18]).AdVideoPlayer, obj4);
    const tmp32 = callback;
  }
  const items7 = [tmp32Result, , , , ];
  if (null != memo) {
    obj6 = {};
    const items8 = [tmp.poster, animatedStyle];
    obj6.style = items8;
    obj6.pointerEvents = "none";
    obj7 = { style: width.absoluteFillObject };
    const obj8 = { uri: memo };
    obj7.source = obj8;
    obj7.resizeMode = "cover";
    const items9 = [callback(handleVideoProgress(handleVideoError[20]), obj7), ];
    let tmp56 = !first;
    if (tmp56) {
      obj9 = { animating: true, size: "small", color: token };
      tmp56 = callback(height, obj9);
    }
    items9[1] = tmp56;
    obj6.children = items9;
    let tmp51Result = first(handleVideoProgress(handleVideoError[13]).View, obj6);
    const tmp51 = first;
  } else {
    const obj10 = {};
    const items10 = [tmp.poster, animatedStyle];
    obj10.style = items10;
    obj10.pointerEvents = "none";
    tmp51Result = callback(handleVideoProgress(handleVideoError[13]).View, obj10);
  }
  items7[1] = tmp51Result;
  let renderEndCardResult;
  if (null != renderEndCard) {
    renderEndCardResult = renderEndCard();
  }
  items7[2] = renderEndCardResult;
  if (isScrollIndicatorEnabled) {
    const obj11 = { opacityStyle: animatedStyle1 };
    if (flag) {
      flag = tmp6;
    }
    obj11.enabled = flag;
    obj11.isEndCardVisible = isEndCardVisible;
    isScrollIndicatorEnabled = callback(handleVideoProgress(handleVideoError[21]), obj11);
    const tmp60 = callback;
    const tmp63 = handleVideoProgress(handleVideoError[21]);
  }
  items7[3] = isScrollIndicatorEnabled;
  const obj12 = { style: items11, pointerEvents: "box-none" };
  items11 = [width.absoluteFillObject, animatedStyle1];
  const obj13 = { bounty, visible: tmp26, sourceQuestContent };
  obj12.children = callback(handleVideoProgress(handleVideoError[22]), obj13);
  items7[4] = callback(handleVideoProgress(handleVideoError[13]).View, obj12);
  obj3.children = items7;
  const items12 = [first(isScrollingInBoundsSharedValue, obj3), ];
  const obj14 = { style: items13 };
  items13 = [tmp.progress, animatedStyle1];
  obj14.children = callback(handleVideoProgress(handleVideoError[9]), { progress: normalizedProgress, visible: isProgressBarVisible });
  items12[1] = callback(handleVideoProgress(handleVideoError[13]).View, obj14);
  obj2.children = items12;
  const items14 = [first(handleVideoProgress(handleVideoError[13]).View, obj2), ];
  const obj15 = { style: items15 };
  items15 = [tmp.leftRow, animatedStyle1];
  const items16 = [callback(handleVideoProgress(handleVideoError[23]), { isCompleted, totalSeconds: rewardTotalSeconds, remainingSeconds: rewardRemainingSeconds }), callback(bounty(handleVideoError[24]).BalanceWidgetPill, { balance: orbsBalance }, balanceWidgetPillResetKey)];
  obj15.children = items16;
  items14[1] = first(handleVideoProgress(handleVideoError[13]).View, obj15);
  obj1.children = items14;
  return first(c11, obj1);
};
