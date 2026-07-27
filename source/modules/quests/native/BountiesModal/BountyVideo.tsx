// Module ID: 13995
// Function ID: 107116
// Name: BountyVideo
// Dependencies: [57, 31, 27, 4977, 33, 478, 9415, 689, 4131, 13996, 10819, 10820, 3992, 3835, 4132, 4135, 13976, 13979, 13997, 5085, 13998, 14000, 14002, 9743, 2]
// Exports: BountyVideo

// Module 13995 (BountyVideo)
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
  const obj1 = { position: "absolute", bottom: 0, height: require(13996) /* BountiesModalProgress */.PROGRESS_BAR_HEIGHT, left: lg, right: lg };
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
  let tmp5;
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
  const bountiesExperience = obj.useBountiesExperience(peekScale.VIDEO_MODAL_MOBILE);
  ({ ownedByVerticalScrollExperiment, stage1Enabled } = bountiesExperience);
  let obj1 = bounty(handleVideoError[11]);
  const isBountiesVerticalScrollExperimentEnabled = obj1.useIsBountiesVerticalScrollExperimentEnabled("BountyVideo");
  if (flag3) {
    flag3 = !flag;
  }
  [tmp5, c9] = onFirstFrame(flag.useState(false), 2);
  const tmp6 = onFirstFrame(flag.useState(false), 2);
  first = tmp6[0];
  c11 = tmp8;
  closure_12 = flag.useRef(null);
  let obj2 = bounty(handleVideoError[12]);
  sharedValue = obj2.useSharedValue(1);
  let items = [bounty, width, height];
  const memo = flag.useMemo(() => {
    let obj = bounty(handleVideoError[6]);
    obj = { assetUrl: bounty.videoHls, width, height };
    return obj.getScaledFirstFrameImageUrl(obj);
  }, items);
  let obj4 = bounty(handleVideoError[13]);
  const token = obj4.useToken(handleVideoProgress(handleVideoError[7]).colors.TEXT_DEFAULT);
  const combined = "" + bounty.id + ":" + shouldLoadHls;
  const tmp12 = onFirstFrame(flag.useState(combined), 2);
  if (tmp12[0] !== combined) {
    tmp12[1](combined);
    tmp8(false);
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
      const result = sharedValue.set(bounty(handleVideoError[14]).withTiming(0, bounty(handleVideoError[15]).timingFast));
      const obj = bounty(handleVideoError[14]);
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
  let obj5 = bounty(handleVideoError[12]);
  class Ce {
    constructor() {
      obj = { opacity: useSharedValue.get() };
      return obj;
    }
  }
  Ce.__closure = { posterOpacity: sharedValue };
  Ce.__workletHash = 4975136521719;
  Ce.__initData = closure_16;
  const animatedStyle = obj5.useAnimatedStyle(Ce);
  let obj6 = bounty(handleVideoError[12]);
  class Ae {
    constructor() {
      if (null != closure_5) {
        tmp2 = closure_5;
        value = closure_5.get();
      }
      obj = {};
      obj2 = bounty(handleVideoError[14]);
      num = 0;
      if (c4) {
        flag = true;
        num = 0;
        if (true !== value) {
          num = 1;
        }
      }
      obj.opacity = obj2.withTiming(num, bounty(handleVideoError[15]).timingStandard);
      return obj;
    }
  }
  obj = { isScrollingInBoundsSharedValue, withTiming: bounty(handleVideoError[14]).withTiming, isActive: flag, timingStandard: bounty(handleVideoError[15]).timingStandard };
  Ae.__closure = obj;
  Ae.__workletHash = 12676706441349;
  Ae.__initData = closure_17;
  const animatedStyle1 = obj6.useAnimatedStyle(Ae);
  let obj8 = bounty(handleVideoError[12]);
  class Fe {
    constructor() {
      if (null == peekScale) {
        return {};
      } else {
        tmp = peekScale;
        value = peekScale.get();
        obj = {};
        obj = {};
        num = 1;
        tmp4 = bounty;
        tmp5 = handleVideoError;
        num2 = 16;
        diff = 1 - value;
        diff1 = 1 - bounty(handleVideoError[16]).AUTO_SCROLL_PEEK_SCALE;
        obj.translateY = diff / diff1 * bounty(handleVideoError[16]).AUTO_SCROLL_PEEK_TOP_OFFSET;
        items = [, ];
        items[0] = obj;
        obj1 = {};
        obj1.scale = value;
        items[1] = obj1;
        obj.transform = items;
        return obj;
      }
    }
  }
  obj = { peekScale, AUTO_SCROLL_PEEK_SCALE: bounty(handleVideoError[16]).AUTO_SCROLL_PEEK_SCALE, AUTO_SCROLL_PEEK_TOP_OFFSET: bounty(handleVideoError[16]).AUTO_SCROLL_PEEK_TOP_OFFSET };
  Fe.__closure = obj;
  Fe.__workletHash = 7501077341815;
  Fe.__initData = closure_18;
  let tmp25 = isCtaVisible;
  const animatedStyle2 = obj8.useAnimatedStyle(Fe);
  if (isBountiesVerticalScrollExperimentEnabled) {
    let tmp26 = isCtaVisible;
    if (isCtaVisible) {
      tmp26 = !isEndCardVisible;
    }
    tmp25 = tmp26;
  }
  obj1 = {};
  obj2 = { style: items6 };
  items6 = [width.absoluteFillObject, tmp.peekOrigin, animatedStyle2];
  const obj3 = { style: tmp.videoContainer };
  let tmp31Result = null;
  if (shouldLoadHls) {
    obj4 = { ref: playerRef };
    obj5 = { uri: bounty.videoHls };
    obj4.source = obj5;
    let tmp34 = !stage1Enabled;
    if (tmp34) {
      tmp34 = !ownedByVerticalScrollExperiment;
    }
    obj4.automaticallyWaitsToMinimizeStalling = tmp34;
    let prop;
    if (flag3) {
      prop = bounty(handleVideoError[18]).SOFT_CAP_PRELOAD_MAX_BITRATE;
    }
    obj4.maxBitRate = prop;
    let prop1;
    if (flag3) {
      prop1 = bounty(handleVideoError[18]).SOFT_CAP_PRELOAD_BUFFER_CONFIG;
    }
    obj4.bufferConfig = prop1;
    let prop2;
    if (flag3) {
      prop2 = bounty(handleVideoError[18]).SOFT_CAP_PRELOAD_FORWARD_BUFFER_SEC;
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
    tmp31Result = callback(bounty(handleVideoError[17]).AdVideoPlayer, obj4);
    const tmp31 = callback;
  }
  const items7 = [tmp31Result, , , , ];
  if (null != memo) {
    obj6 = {};
    const items8 = [tmp.poster, animatedStyle];
    obj6.style = items8;
    obj6.pointerEvents = "none";
    const obj7 = { style: width.absoluteFillObject };
    obj8 = { uri: memo };
    obj7.source = obj8;
    obj7.resizeMode = "cover";
    const items9 = [callback(handleVideoProgress(handleVideoError[19]), obj7), ];
    let tmp55 = !first;
    if (tmp55) {
      const obj9 = { animating: true, size: "small", color: token };
      tmp55 = callback(height, obj9);
    }
    items9[1] = tmp55;
    obj6.children = items9;
    let tmp50Result = first(handleVideoProgress(handleVideoError[12]).View, obj6);
    const tmp50 = first;
  } else {
    const obj10 = {};
    const items10 = [tmp.poster, animatedStyle];
    obj10.style = items10;
    obj10.pointerEvents = "none";
    tmp50Result = callback(handleVideoProgress(handleVideoError[12]).View, obj10);
  }
  items7[1] = tmp50Result;
  let renderEndCardResult;
  if (null != renderEndCard) {
    renderEndCardResult = renderEndCard();
  }
  items7[2] = renderEndCardResult;
  if (isScrollIndicatorEnabled) {
    const obj11 = { opacityStyle: animatedStyle1 };
    if (flag) {
      flag = tmp5;
    }
    obj11.enabled = flag;
    obj11.isEndCardVisible = isEndCardVisible;
    isScrollIndicatorEnabled = callback(handleVideoProgress(handleVideoError[20]), obj11);
    const tmp59 = callback;
    const tmp62 = handleVideoProgress(handleVideoError[20]);
  }
  items7[3] = isScrollIndicatorEnabled;
  const obj12 = { style: items11, pointerEvents: "box-none" };
  items11 = [width.absoluteFillObject, animatedStyle1];
  const obj13 = { bounty, visible: tmp25, sourceQuestContent };
  obj12.children = callback(handleVideoProgress(handleVideoError[21]), obj13);
  items7[4] = callback(handleVideoProgress(handleVideoError[12]).View, obj12);
  obj3.children = items7;
  const items12 = [first(isScrollingInBoundsSharedValue, obj3), ];
  const obj14 = { style: items13 };
  items13 = [tmp.progress, animatedStyle1];
  obj14.children = callback(handleVideoProgress(handleVideoError[9]), { progress: normalizedProgress, visible: isProgressBarVisible });
  items12[1] = callback(handleVideoProgress(handleVideoError[12]).View, obj14);
  obj2.children = items12;
  const items14 = [first(handleVideoProgress(handleVideoError[12]).View, obj2), ];
  const obj15 = { style: items15 };
  items15 = [tmp.leftRow, animatedStyle1];
  const items16 = [callback(handleVideoProgress(handleVideoError[22]), { isCompleted, totalSeconds: rewardTotalSeconds, remainingSeconds: rewardRemainingSeconds }), callback(bounty(handleVideoError[23]).BalanceWidgetPill, { balance: orbsBalance }, balanceWidgetPillResetKey)];
  obj15.children = items16;
  items14[1] = first(handleVideoProgress(handleVideoError[12]).View, obj15);
  obj1.children = items14;
  return first(c11, obj1);
};
