// Module ID: 13809
// Function ID: 104433
// Name: BountyVideo
// Dependencies: []
// Exports: BountyVideo

// Module 13809 (BountyVideo)
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
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/quests/native/BountiesModal/BountyVideo.tsx");

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
  let flag = bounty.isActive;
  ({ sourceQuestContent, isCompleted, isProgressBarVisible, orbsBalance, handleVideoEnd, handleVideoPaused, handleVideoResumed, rewardRemainingSeconds, rewardTotalSeconds, normalizedProgress, initialProgress, repeat } = bounty);
  if (flag === undefined) {
    flag = false;
  }
  let callback = flag;
  let flag2 = bounty.isRecapPageRevealed;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const isScrollingInBoundsSharedValue = bounty.isScrollingInBoundsSharedValue;
  const React = isScrollingInBoundsSharedValue;
  ({ renderEndCard, shouldLoadHls, playerRef, onPlayerStateChange, balanceWidgetPillResetKey } = bounty);
  if (shouldLoadHls === undefined) {
    shouldLoadHls = true;
  }
  const width = bounty.width;
  const height = bounty.height;
  const peekScale = bounty.peekScale;
  let constants;
  let first;
  let tmp9;
  let closure_11;
  let closure_13;
  const tmp = callback2();
  let obj = arg1(dependencyMap[10]);
  const rnvHttpEngine = obj.useRnvHttpEngine();
  let obj1 = arg1(dependencyMap[11]);
  const bountiesExperience = obj1.useBountiesExperience(constants.VIDEO_MODAL_MOBILE);
  ({ ownedByVerticalScrollExperiment, stage1Enabled } = bountiesExperience);
  let obj2 = arg1(dependencyMap[12]);
  const isBountiesVerticalScrollExperimentEnabled = obj2.useIsBountiesVerticalScrollExperimentEnabled("BountyVideo");
  [tmp6, closure_8] = callback(React.useState(false), 2);
  const tmp7 = callback(React.useState(false), 2);
  first = tmp7[0];
  tmp9 = tmp7[1];
  closure_11 = React.useRef(null);
  let obj3 = arg1(dependencyMap[13]);
  const sharedValue = obj3.useSharedValue(1);
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
    if (null != closure_11.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_11.current);
      closure_11.current = null;
    }
    tmp9(true);
  }, []);
  closure_13 = callback;
  const items3 = [callback, handleVideoError];
  const callback1 = React.useCallback(() => {
    if (null != closure_11.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_11.current);
    }
    closure_11.current = setTimeout(() => {
      callback(true);
      closure_11.current = null;
    }, sharedValue);
  }, []);
  const items4 = [handleVideoProgress];
  const callback2 = React.useCallback((arg0) => {
    callback();
    if (null != handleVideoError) {
      handleVideoError(arg0);
    }
  }, items3);
  const callback3 = React.useCallback((currentTime) => {
    if (currentTime.currentTime > 0) {
      _undefined(true);
    }
    handleVideoProgress(currentTime);
  }, items4);
  let obj6 = arg1(dependencyMap[13]);
  class Oe {
    constructor() {
      obj = { opacity: useSharedValue.get() };
      return obj;
    }
  }
  Oe.__closure = { posterOpacity: sharedValue };
  Oe.__workletHash = 4975136521719;
  Oe.__initData = closure_16;
  const animatedStyle = obj6.useAnimatedStyle(Oe);
  let obj7 = arg1(dependencyMap[13]);
  function be() {
    if (null != isScrollingInBoundsSharedValue) {
      const value = isScrollingInBoundsSharedValue.get();
    }
    const obj = {};
    let num = 0;
    if (flag) {
      num = 0;
      if (true !== value) {
        num = 1;
      }
    }
    obj.opacity = bounty(handleVideoError[15]).withTiming(num, bounty(handleVideoError[16]).timingStandard);
    return obj;
  }
  obj = { isScrollingInBoundsSharedValue, withTiming: arg1(dependencyMap[15]).withTiming, isActive: flag, timingStandard: arg1(dependencyMap[16]).timingStandard };
  be.__closure = obj;
  be.__workletHash = 12676706441349;
  be.__initData = closure_17;
  const animatedStyle1 = obj7.useAnimatedStyle(be);
  let obj9 = arg1(dependencyMap[13]);
  class Pe {
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
        num2 = 17;
        diff = 1 - value;
        diff1 = 1 - bounty(handleVideoError[17]).AUTO_SCROLL_PEEK_SCALE;
        obj.translateY = diff / diff1 * bounty(handleVideoError[17]).AUTO_SCROLL_PEEK_TOP_OFFSET;
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
  obj = { peekScale, AUTO_SCROLL_PEEK_SCALE: arg1(dependencyMap[17]).AUTO_SCROLL_PEEK_SCALE, AUTO_SCROLL_PEEK_TOP_OFFSET: arg1(dependencyMap[17]).AUTO_SCROLL_PEEK_TOP_OFFSET };
  Pe.__closure = obj;
  Pe.__workletHash = 7501077341815;
  Pe.__initData = closure_18;
  let tmp26 = isCtaVisible;
  const animatedStyle2 = obj9.useAnimatedStyle(Pe);
  if (isBountiesVerticalScrollExperimentEnabled) {
    let tmp27 = isCtaVisible;
    if (isCtaVisible) {
      tmp27 = !isEndCardVisible;
    }
    tmp26 = tmp27;
  }
  obj1 = {};
  obj2 = { style: items5 };
  const items5 = [height.absoluteFillObject, tmp.peekOrigin, animatedStyle2];
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
    obj4.initialProgress = initialProgress;
    obj4.isFullscreen = false;
    obj4.externallyPaused = !flag || isEndCardVisible || flag2;
    obj4.style = height.absoluteFillObject;
    obj4.contentInsets = closure_13;
    obj4.onProgress = callback3;
    obj4.onEnd = handleVideoEnd;
    obj4.onPausePlayback = handleVideoPaused;
    obj4.onResumePlayback = handleVideoResumed;
    obj4.onError = callback2;
    obj4.onReadyForDisplay = callback1;
    obj4.hideControls = isEndCardVisible;
    obj4.showSkipButtons = false;
    obj4.repeat = repeat;
    obj4.bufferingSpinnerPlacement = "center";
    obj4.onPlayerStateChange = onPlayerStateChange;
    tmp32Result = first(arg1(dependencyMap[18]).AdVideoPlayer, obj4);
    const tmp32 = first;
  }
  const items6 = [tmp32Result, , , , ];
  if (null != memo) {
    obj6 = {};
    const items7 = [tmp.poster, animatedStyle];
    obj6.style = items7;
    obj6.pointerEvents = "none";
    obj7 = { style: height.absoluteFillObject };
    const obj8 = { uri: memo };
    obj7.source = obj8;
    obj7.resizeMode = "cover";
    const items8 = [first(importDefault(dependencyMap[19]), obj7), ];
    let tmp47 = !first;
    if (tmp47) {
      obj9 = { font: "isArray", dx: "GuildActionSheetSecondaryActions", color: token };
      tmp47 = first(peekScale, obj9);
    }
    items8[1] = tmp47;
    obj6.children = items8;
    let tmp42Result = tmp9(importDefault(dependencyMap[13]).View, obj6);
    const tmp42 = tmp9;
  } else {
    const obj10 = {};
    const items9 = [tmp.poster, animatedStyle];
    obj10.style = items9;
    obj10.pointerEvents = "none";
    tmp42Result = first(importDefault(dependencyMap[13]).View, obj10);
  }
  items6[1] = tmp42Result;
  let renderEndCardResult;
  if (null != renderEndCard) {
    renderEndCardResult = renderEndCard();
  }
  items6[2] = renderEndCardResult;
  if (isScrollIndicatorEnabled) {
    isScrollIndicatorEnabled = tmp6;
  }
  if (isScrollIndicatorEnabled) {
    const obj11 = { opacityStyle: animatedStyle1, isActive: flag, isEndCardVisible };
    isScrollIndicatorEnabled = first(importDefault(dependencyMap[20]), obj11);
  }
  items6[3] = isScrollIndicatorEnabled;
  const obj12 = { style: items10, pointerEvents: "box-none" };
  const items10 = [height.absoluteFillObject, animatedStyle1];
  const obj13 = { bounty, visible: tmp26, sourceQuestContent };
  obj12.children = first(importDefault(dependencyMap[21]), obj13);
  items6[4] = first(importDefault(dependencyMap[13]).View, obj12);
  obj3.children = items6;
  const items11 = [tmp9(width, obj3), ];
  const obj14 = { style: items12 };
  const items12 = [tmp.progress, animatedStyle1];
  obj14.children = first(importDefault(dependencyMap[9]), { progress: normalizedProgress, visible: isProgressBarVisible });
  items11[1] = first(importDefault(dependencyMap[13]).View, obj14);
  obj2.children = items11;
  const items13 = [tmp9(importDefault(dependencyMap[13]).View, obj2), ];
  const obj15 = { style: items14 };
  const items14 = [tmp.leftRow, animatedStyle1];
  const items15 = [first(importDefault(dependencyMap[22]), { isCompleted, totalSeconds: rewardTotalSeconds, remainingSeconds: rewardRemainingSeconds }), first(arg1(dependencyMap[23]).BalanceWidgetPill, { balance: orbsBalance }, balanceWidgetPillResetKey)];
  obj15.children = items15;
  items13[1] = tmp9(importDefault(dependencyMap[13]).View, obj15);
  obj1.children = items13;
  return tmp9(closure_11, obj1);
};
