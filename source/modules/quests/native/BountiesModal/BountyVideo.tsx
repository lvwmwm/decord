// Module ID: 13811
// Function ID: 104464
// Name: BountyVideo
// Dependencies: []
// Exports: BountyVideo

// Module 13811 (BountyVideo)
let num = 0;
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, StyleSheet: closure_6, ActivityIndicator: closure_7 } = arg1(dependencyMap[2]));
const QuestsExperimentLocations = arg1(dependencyMap[3]).QuestsExperimentLocations;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
if (obj.isAndroid()) {
  num = 150;
}
let closure_13 = {};
const lg = importDefault(dependencyMap[7]).radii.lg;
const obj = arg1(dependencyMap[5]);
let closure_15 = arg1(dependencyMap[8]).createStyles(() => {
  let obj = {};
  obj = {};
  const merged = Object.assign(closure_6.absoluteFillObject);
  obj["overflow"] = "hidden";
  obj["borderRadius"] = lg;
  obj.videoContainer = obj;
  obj = { top: importDefault(dependencyMap[7]).space.PX_8, left: importDefault(dependencyMap[7]).space.PX_8, gap: importDefault(dependencyMap[7]).space.PX_8 };
  obj.leftRow = obj;
  obj.progress = { height: arg1(dependencyMap[9]).PROGRESS_BAR_HEIGHT, left: lg, right: lg };
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
const obj2 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/quests/native/BountiesModal/BountyVideo.tsx");

export const BountyVideo = function BountyVideo(bounty) {
  let balanceWidgetPillResetKey;
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
  const arg1 = bounty;
  ({ isCtaVisible, isEndCardVisible, isScrollIndicatorEnabled, handleVideoProgress } = bounty);
  const importDefault = handleVideoProgress;
  const handleVideoError = bounty.handleVideoError;
  const dependencyMap = handleVideoError;
  const onFirstFrame = bounty.onFirstFrame;
  let callback = onFirstFrame;
  let flag = bounty.isActive;
  ({ sourceQuestContent, isCompleted, isProgressBarVisible, orbsBalance, handleVideoEnd, handleVideoPaused, handleVideoResumed, onLoadStart, onBuffer, rewardRemainingSeconds, rewardTotalSeconds, normalizedProgress, initialProgress, repeat } = bounty);
  if (flag === undefined) {
    flag = false;
  }
  const React = flag;
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
  const QuestsExperimentLocations = peekScale;
  let flag3 = bounty.softDownloadCapsEnabled;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let callback2;
  let first;
  let tmp9;
  let closure_12;
  let closure_13;
  let lg;
  const tmp = callback3();
  let obj = arg1(dependencyMap[10]);
  const rnvHttpEngine = obj.useRnvHttpEngine();
  let obj1 = arg1(dependencyMap[11]);
  const bountiesExperience = obj1.useBountiesExperience(QuestsExperimentLocations.VIDEO_MODAL_MOBILE);
  ({ ownedByVerticalScrollExperiment, stage1Enabled } = bountiesExperience);
  let obj2 = arg1(dependencyMap[12]);
  const isBountiesVerticalScrollExperimentEnabled = obj2.useIsBountiesVerticalScrollExperimentEnabled("BountyVideo");
  if (flag3) {
    flag3 = !flag;
  }
  [tmp6, closure_9] = callback(React.useState(false), 2);
  const tmp7 = callback(React.useState(false), 2);
  first = tmp7[0];
  tmp9 = tmp7[1];
  closure_12 = React.useRef(null);
  let obj3 = arg1(dependencyMap[13]);
  const sharedValue = obj3.useSharedValue(1);
  closure_13 = sharedValue;
  const items = [bounty, width, height];
  const memo = React.useMemo(() => {
    let obj = bounty(handleVideoError[6]);
    obj = { assetUrl: bounty.videoHls, width, height };
    return obj.getScaledFirstFrameImageUrl(obj);
  }, items);
  let obj5 = arg1(dependencyMap[14]);
  const token = obj5.useToken(importDefault(dependencyMap[7]).colors.TEXT_DEFAULT);
  const combined = "" + bounty.id + ":" + shouldLoadHls;
  const tmp13 = callback(React.useState(combined), 2);
  if (tmp13[0] !== combined) {
    tmp13[1](combined);
    tmp9(false);
    const result = sharedValue.set(1);
  }
  const items1 = [combined];
  const effect = React.useEffect(() => () => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
  }, items1);
  const items2 = [first, sharedValue];
  const effect1 = React.useEffect(() => {
    if (first) {
      const result = sharedValue.set(bounty(handleVideoError[15]).withTiming(0, bounty(handleVideoError[16]).timingFast));
      const obj = bounty(handleVideoError[15]);
    }
  }, items2);
  callback = React.useCallback(() => {
    if (null != closure_12.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_12.current);
      closure_12.current = null;
    }
    tmp9(true);
  }, []);
  lg = callback;
  const items3 = [onFirstFrame];
  const items4 = [callback, handleVideoError];
  const callback1 = React.useCallback(() => {
    if (null != onFirstFrame) {
      onFirstFrame();
    }
    if (null != closure_12.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_12.current);
    }
    closure_12.current = setTimeout(() => {
      callback(true);
      closure_12.current = null;
    }, closure_12);
  }, items3);
  const items5 = [handleVideoProgress];
  callback2 = React.useCallback((arg0) => {
    callback();
    if (null != handleVideoError) {
      handleVideoError(arg0);
    }
  }, items4);
  const callback3 = React.useCallback((currentTime) => {
    if (currentTime.currentTime > 0) {
      _undefined(true);
    }
    handleVideoProgress(currentTime);
  }, items5);
  let obj6 = arg1(dependencyMap[13]);
  class Ce {
    constructor() {
      obj = { opacity: useSharedValue.get() };
      return obj;
    }
  }
  Ce.__closure = { posterOpacity: sharedValue };
  Ce.__workletHash = 4975136521719;
  Ce.__initData = closure_16;
  const animatedStyle = obj6.useAnimatedStyle(Ce);
  let obj7 = arg1(dependencyMap[13]);
  class Ae {
    constructor() {
      if (null != closure_5) {
        tmp2 = closure_5;
        value = closure_5.get();
      }
      obj = {};
      obj2 = bounty(handleVideoError[15]);
      num = 0;
      if (closure_4) {
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
  obj = { isScrollingInBoundsSharedValue, withTiming: arg1(dependencyMap[15]).withTiming, isActive: flag, timingStandard: arg1(dependencyMap[16]).timingStandard };
  Ae.__closure = obj;
  Ae.__workletHash = 12676706441349;
  Ae.__initData = closure_17;
  const animatedStyle1 = obj7.useAnimatedStyle(Ae);
  let obj9 = arg1(dependencyMap[13]);
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
  obj = { peekScale, AUTO_SCROLL_PEEK_SCALE: arg1(dependencyMap[17]).AUTO_SCROLL_PEEK_SCALE, AUTO_SCROLL_PEEK_TOP_OFFSET: arg1(dependencyMap[17]).AUTO_SCROLL_PEEK_TOP_OFFSET };
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
  const items6 = [width.absoluteFillObject, tmp.peekOrigin, animatedStyle2];
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
      prop = arg1(dependencyMap[19]).SOFT_CAP_PRELOAD_MAX_BITRATE;
    }
    obj4.maxBitRate = prop;
    let prop1;
    if (flag3) {
      prop1 = arg1(dependencyMap[19]).SOFT_CAP_PRELOAD_BUFFER_CONFIG;
    }
    obj4.bufferConfig = prop1;
    let prop2;
    if (flag3) {
      prop2 = arg1(dependencyMap[19]).SOFT_CAP_PRELOAD_FORWARD_BUFFER_SEC;
    }
    obj4.preferredForwardBufferDuration = prop2;
    obj4.initialProgress = initialProgress;
    obj4.isFullscreen = false;
    obj4.externallyPaused = !flag || isEndCardVisible || flag2;
    obj4.style = width.absoluteFillObject;
    obj4.contentInsets = closure_13;
    obj4.onProgress = callback3;
    obj4.onEnd = handleVideoEnd;
    obj4.onPausePlayback = handleVideoPaused;
    obj4.onResumePlayback = handleVideoResumed;
    obj4.onError = callback2;
    obj4.onLoadStart = onLoadStart;
    obj4.onBuffer = onBuffer;
    obj4.onReadyForDisplay = callback1;
    obj4.hideControls = isEndCardVisible;
    obj4.showSkipButtons = false;
    obj4.repeat = repeat;
    obj4.bufferingSpinnerPlacement = "center";
    obj4.onPlayerStateChange = onPlayerStateChange;
    tmp32Result = callback2(arg1(dependencyMap[18]).AdVideoPlayer, obj4);
    const tmp32 = callback2;
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
    const items9 = [callback2(importDefault(dependencyMap[20]), obj7), ];
    let tmp56 = !first;
    if (tmp56) {
      obj9 = { font: null, dx: null, color: token };
      tmp56 = callback2(height, obj9);
    }
    items9[1] = tmp56;
    obj6.children = items9;
    let tmp51Result = first(importDefault(dependencyMap[13]).View, obj6);
    const tmp51 = first;
  } else {
    const obj10 = {};
    const items10 = [tmp.poster, animatedStyle];
    obj10.style = items10;
    obj10.pointerEvents = "none";
    tmp51Result = callback2(importDefault(dependencyMap[13]).View, obj10);
  }
  items7[1] = tmp51Result;
  let renderEndCardResult;
  if (null != renderEndCard) {
    renderEndCardResult = renderEndCard();
  }
  items7[2] = renderEndCardResult;
  if (isScrollIndicatorEnabled) {
    isScrollIndicatorEnabled = tmp6;
  }
  if (isScrollIndicatorEnabled) {
    const obj11 = { opacityStyle: animatedStyle1, isActive: flag, isEndCardVisible };
    isScrollIndicatorEnabled = callback2(importDefault(dependencyMap[21]), obj11);
  }
  items7[3] = isScrollIndicatorEnabled;
  const obj12 = { style: items11, pointerEvents: "box-none" };
  const items11 = [width.absoluteFillObject, animatedStyle1];
  const obj13 = { bounty, visible: tmp26, sourceQuestContent };
  obj12.children = callback2(importDefault(dependencyMap[22]), obj13);
  items7[4] = callback2(importDefault(dependencyMap[13]).View, obj12);
  obj3.children = items7;
  const items12 = [first(isScrollingInBoundsSharedValue, obj3), ];
  const obj14 = { style: items13 };
  const items13 = [tmp.progress, animatedStyle1];
  obj14.children = callback2(importDefault(dependencyMap[9]), { progress: normalizedProgress, visible: isProgressBarVisible });
  items12[1] = callback2(importDefault(dependencyMap[13]).View, obj14);
  obj2.children = items12;
  const items14 = [first(importDefault(dependencyMap[13]).View, obj2), ];
  const obj15 = { style: items15 };
  const items15 = [tmp.leftRow, animatedStyle1];
  const items16 = [callback2(importDefault(dependencyMap[23]), { isCompleted, totalSeconds: rewardTotalSeconds, remainingSeconds: rewardRemainingSeconds }), callback2(arg1(dependencyMap[24]).BalanceWidgetPill, { balance: orbsBalance }, balanceWidgetPillResetKey)];
  obj15.children = items16;
  items14[1] = first(importDefault(dependencyMap[13]).View, obj15);
  obj1.children = items14;
  return first(tmp9, obj1);
};
