// Module ID: 15321
// Function ID: 15322
// Name: BountiesModalContent
// Dependencies: [32, 5, 19, 17, 7943, 5663, 15273, 1078, 1089, 21, 558, 568, 1482, 1616, 4758, 580, 504, 9127, 15282, 11645, 15287, 10568, 4726, 15289, 15285, 7959, 5670, 7969, 5668, 11636, 15269, 11906, 15322, 15296, 15319, 15295, 7371, 4497, 4759, 4762, 11621, 1114, 15318, 15283, 7940, 4471, 2]

// Module 15321 (BountiesModalContent)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1114 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1482 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1616 */;
import timing from "timing" /* 4759 */;
import timingPresets from "timingPresets" /* 4762 */;
import QuestContent from "QuestContent" /* 5668 */;
import AdCreativeType from "AdCreativeType" /* 5670 */;
import QuestDataUtils from "QuestDataUtils" /* 7940 */;
import AnalyticsActions from "AnalyticsActions" /* 7959 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7969 */;
import AppStoreOverlayTelemetryManager from "AppStoreOverlayTelemetryManager" /* 11621 */;
import VideoQuestUtils from "VideoQuestUtils" /* 11636 */;
import QuestContentImpressionTracker from "QuestContentImpressionTracker" /* 11906 */;
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators" /* 15269 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import BountyStore from "BountyStore" /* 7943 */;

require = fn;
const View = fn(17).View;
const QuestsExperimentLocations = fn(5663).QuestsExperimentLocations;
const BountiesModalConstants = fn(15273);
({ getBountyVideoEndAppStoreSheetHeight: closure_9, getBountyVideoEndPeekTargetScale: c10 } = BountiesModalConstants);
const Constants = fn(1078);
({ AnalyticEvents: closure_11, ComponentActions: closure_12 } = Constants);
const ThemeTypes = fn(1089).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
let c17 = 0.5625;
const initialProgress = { timestampSec: 0, maxTimestampSec: 0, duration: 0 };
let ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(6);
  ({ width, height } = useWindowDimensionsDefault());
  const rect = useSafeAreaInsetsDefault();
  const diff = width - rect.left - rect.right;
  const diff1 = height - rect.top - rect.bottom;
  let result = diff / c17;
  let flag = true;
  let result1 = diff;
  if (result > diff1) {
    result1 = diff1 * c17;
    flag = false;
    result = diff1;
  }
  const rounded = Math.floor(rect.top + (diff1 - result) / 2);
  const rounded1 = Math.floor(rect.left + (diff - result1) / 2);
  const rounded2 = Math.floor(result1);
  const rounded3 = Math.floor(result);
  if (cResult[0] === flag) {
    if (cResult[1] === rounded1) {
      if (cResult[2] === rounded2) {
        if (cResult[3] === rounded3) {
          if (cResult[4] === rounded) {
            let tmp11 = cResult[5];
          }
          return tmp11;
        }
      }
    }
  }
  const size = { top: rounded, left: rounded1, width: rounded2, height: rounded3, isFullWidth: flag };
  cResult[0] = flag;
  cResult[1] = rounded1;
  cResult[2] = rounded2;
  cResult[3] = rounded3;
  cResult[4] = rounded;
  cResult[5] = size;
  tmp11 = size;
}) : (() => {
  let size = height(1482)();
  const width = size.width;
  height = size.height;
  const tmp = height(1616)();
  dependencyMap = tmp;
  const items = [width, height, , , , ];
  ({ top: arr[2], bottom: arr[3], left: arr[4], right: arr[5] } = tmp);
  return noop.useMemo(() => {
    const rect = closure_2;
    const diff = width - closure_2.left - closure_2.right;
    const diff1 = height - closure_2.top - closure_2.bottom;
    let result = diff / c17;
    let flag = true;
    let result1 = diff;
    if (result > diff1) {
      result1 = diff1 * c17;
      flag = false;
      result = diff1;
    }
    const size = { top: Math.floor(rect.top + (diff1 - result) / 2), left: Math.floor(rect.left + (diff - result1) / 2), width: Math.floor(result1), height: Math.floor(result), isFullWidth: flag };
    return size;
  }, items);
});
const createStyles = fn(4758);
let closure_20 = createStyles.createStyles(() => {
  const obj = { videoWrapper: { position: "absolute" }, closeButton: { position: "absolute" }, bottomContainer: { position: "absolute", bottom: nativeDefault.space.PX_24, justifyContent: "flex-end" }, bottomContainerFullWidth: null, bottomContainerNotFullWidth: null };
  const rect = { left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16 };
  obj.bottomContainerFullWidth = rect;
  const obj2 = { position: "absolute", bottom: nativeDefault.space.PX_24, justifyContent: "flex-end" };
  obj.bottomContainerNotFullWidth = { paddingLeft: nativeDefault.space.PX_16, paddingRight: nativeDefault.space.PX_16 };
  return obj;
});
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((bounty) => {
  const cResult = require("c").c(115);
  bounty = bounty.bounty;
  _require = bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  ({ videoEndPeekScale, dismissVideoEndAppStoreOverlay } = bounty);
  width = closure_20();
  const size = closure_19();
  if (cResult[0] === size.height) {
    if (cResult[1] === size.left) {
      if (cResult[2] === size.top) {
        if (cResult[3] === size.width) {
          let tmp4 = cResult[4];
        }
        if (cResult[5] === width.videoWrapper) {
          const sum = size.top + sourceQuestContent(tmp2[15]).space.PX_8;
          const sum1 = size.left + size.width;
          const diff = sum1 - sourceQuestContent(tmp2[15]).space.PX_32;
          const diff1 = diff - sourceQuestContent(tmp2[15]).space.PX_8;
          if (cResult[8] === sum) {
            if (cResult[9] === diff1) {
              let tmp11 = cResult[10];
            }
            if (cResult[11] === width.closeButton) {
              if (cResult[14] === width.bottomContainer) {
                if (cResult[15] === width.bottomContainerFullWidth) {
                  if (cResult[16] === width.bottomContainerNotFullWidth) {
                    if (cResult[17] === size.isFullWidth) {
                      if (cResult[18] === size.left) {
                        if (cResult[19] === size.width) {
                          const _Symbol = Symbol;
                          if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                            const items = [BountyStore];
                            cResult[21] = items;
                            let tmp18 = items;
                          } else {
                            tmp18 = cResult[21];
                          }
                          if (cResult[22] !== bounty.id) {
                            class F {
                              constructor() {
                                return closure_7.isBountyCompleted(closure_0.id);
                              }
                            }
                            cResult[22] = bounty.id;
                            cResult[23] = F;
                            const tmp20 = F;
                          } else {
                            class F {
                              constructor() {
                                return closure_7.isBountyCompleted(closure_0.id);
                              }
                            }
                          }
                          const stateFromStores = tmp(tmp2[16]).useStateFromStores(tmp18, tmp20);
                          const tmpResult = tmp(tmp2[16]);
                          const balance = tmp(tmp2[17]).useFetchVirtualCurrencyBalance().balance;
                          if (cResult[24] !== bounty) {
                            class F {
                              constructor() {
                                return closure_7.isBountyCompleted(closure_0.id);
                              }
                            }
                            const bountyVideoEndMode = obj7.getBountyVideoEndMode(bounty);
                            cResult[24] = bounty;
                            cResult[25] = bountyVideoEndMode;
                          } else {
                            class F {
                              constructor() {
                                return closure_7.isBountyCompleted(closure_0.id);
                              }
                            }
                          }
                          let result = 1000 * bounty.rewardTimerSeconds;
                          const _slicedToArray = result;
                          noop.useRef(null);
                          if (cResult[26] === bounty.id) {
                            class F {
                              constructor() {
                                return closure_7.isBountyCompleted(closure_0.id);
                              }
                            }
                            if (cResult[29] === bounty.id) {
                              class F {
                                constructor() {
                                  return closure_7.isBountyCompleted(closure_0.id);
                                }
                              }
                            }
                            let obj2 = { bountyId: bounty.id, sourceQuestContent, rewardDurationMs: result, wasPreloaded: false, verticalScrollingPosition: null, isActive: true };
                            cResult[29] = bounty.id;
                            cResult[30] = result;
                            cResult[31] = sourceQuestContent;
                            cResult[32] = obj2;
                          }
                          _require = asyncGeneratorStep(async (arg0, value) => {
                            if (c5 === 2) {
                              c5 = 3;
                              throw new TypeError("Generator functions may not be called on executing generators");
                            } else if (tmp6 === 3) {
                              if (arg0 === 1) {
                                throw value;
                              } else if (arg0 === 2) {
                                const obj3 = { value, done: true };
                                return obj3;
                              } else {
                                return { value: "IconComponent", done: null };
                              }
                            } else {
                              try {
                                c5 = 2;
                                if (0 === c4) {
                                  if (arg0 === 1) {
                                    c5 = 3;
                                    throw value;
                                  } else if (arg0 === 2) {
                                    c5 = 3;
                                    const obj6 = { value, done: true };
                                    return obj6;
                                  } else {
                                    closure_1 = tmp3;
                                    user = tmp7;
                                    closure_128_1 = undefined;
                                    closure_128_0 = false;
                                    c3 = 1;
                                    c4 = 2;
                                    c5 = 1;
                                    const obj7 = { value: user(dismissVideoEndAppStoreOverlay[19]).claimBountyReward(user.id, closure_1), done: false };
                                    return obj7;
                                  }
                                } else {
                                  if (1 === tmp7) {
                                    c3 = 0;
                                    closure_128_1 = closure_2;
                                    result = user(dismissVideoEndAppStoreOverlay[20]).openBountyRewardClaimErrorToast(closure_128_1);
                                    const obj2 = user(dismissVideoEndAppStoreOverlay[20]);
                                  } else if (arg0 === 1) {
                                    c5 = 3;
                                    throw value;
                                  } else if (arg0 === 2) {
                                    c3 = 0;
                                    c5 = 3;
                                    const obj = { value, done: true };
                                    return obj;
                                  } else {
                                    closure_128_0 = true;
                                    c3 = 0;
                                  }
                                  let hapticFeedbackOnRewardEarnedEnabled = closure_128_0;
                                  if (closure_128_0) {
                                    const BountiesMobileQuestBarExperiment = user(dismissVideoEndAppStoreOverlay[21]).BountiesMobileQuestBarExperiment;
                                    const obj8 = { location: constants.VIDEO_MODAL_MOBILE };
                                    hapticFeedbackOnRewardEarnedEnabled = BountiesMobileQuestBarExperiment.getConfig(obj8).hapticFeedbackOnRewardEarnedEnabled;
                                  }
                                  if (hapticFeedbackOnRewardEarnedEnabled) {
                                    const result1 = user(dismissVideoEndAppStoreOverlay[22]).triggerHapticFeedback(user(dismissVideoEndAppStoreOverlay[22]).HapticFeedbackTypes.IMPACT_MEDIUM);
                                    const obj4 = user(dismissVideoEndAppStoreOverlay[22]);
                                  }
                                  c5 = 3;
                                  return { value: "IconComponent", done: null };
                                }
                              } catch (tmp32) {
                                closure_2 = tmp32;
                                if (tmp4 === c3) {
                                  c5 = tmp2;
                                  throw tmp32;
                                } else {
                                  c4 = tmp;
                                }
                              }
                            }
                          });
                          const fn = function() {
                            const self = this;
                            const apply = closure_0.apply;
                            if (typeof apply === "unknown") {
                              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                            } else {
                              applyArgumentsResult = apply(self, arguments);
                            }
                            return applyArgumentsResult;
                          };
                          cResult[26] = bounty.id;
                          cResult[27] = sourceQuestContent;
                          cResult[28] = fn;
                          const tmpResult2 = tmp(tmp2[17]);
                        }
                      }
                    }
                  }
                }
              }
              let bottomContainerFullWidth = width.bottomContainer;
              if (size.isFullWidth) {
                class F {
                  constructor() {
                    return closure_7.isBountyCompleted(closure_0.id);
                  }
                }
                tmp15[0] = bottomContainerFullWidth;
                bottomContainerFullWidth = width.bottomContainerFullWidth;
                tmp15[1] = bottomContainerFullWidth;
              } else {
                class F {
                  constructor() {
                    return closure_7.isBountyCompleted(closure_0.id);
                  }
                }
                tmp14[0] = bottomContainerFullWidth;
                tmp14[1] = width.bottomContainerNotFullWidth;
                ({ left: obj4.left, width: obj4.width } = size);
                tmp14[2] = { left: null, width: null };
                let obj3 = { left: null, width: null };
              }
              cResult[14] = width.bottomContainer;
              cResult[15] = width.bottomContainerFullWidth;
              cResult[16] = width.bottomContainerNotFullWidth;
              cResult[17] = size.isFullWidth;
              ({ left: tmp3[18], width } = size);
              cResult[19] = width;
              cResult[20] = tmp14;
            }
            const items1 = [width.closeButton, tmp11];
            cResult[11] = width.closeButton;
            cResult[12] = tmp11;
            cResult[13] = items1;
          }
          const rect = { top: sum, left: diff1 };
          cResult[8] = sum;
          cResult[9] = diff1;
          cResult[10] = rect;
          tmp11 = rect;
        }
        const items2 = [width.videoWrapper, tmp4];
        cResult[5] = width.videoWrapper;
        cResult[6] = tmp4;
        cResult[7] = items2;
      }
    }
  }
  const size1 = { top: size.top, left: size.left, width: size.width, height: size.height };
  cResult[0] = size.height;
  cResult[1] = size.left;
  cResult[2] = size.top;
  cResult[3] = size.width;
  cResult[4] = size1;
  tmp4 = size1;
}) : ((bounty) => {
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  const dismissVideoEndAppStoreOverlay = bounty.dismissVideoEndAppStoreOverlay;
  noop = undefined;
  isEndCardVisible = undefined;
  let maxVideoProgressSeconds;
  const tmp = closure_20();
  closure_3 = tmp;
  const tmp2 = closure_19();
  asyncGeneratorStep = tmp2;
  let items = [tmp.videoWrapper, tmp2];
  let items1 = [tmp.closeButton, , , ];
  ({ top: arr2[1], left: arr2[2], width: arr2[3] } = tmp2);
  const memo = noop.useMemo(() => {
    const items = [closure_3.videoWrapper, ];
    const size = { top: styles.top, left: styles.left, width: styles.width, height: styles.height };
    items[1] = size;
    return items;
  }, items);
  const items2 = [, , , , , ];
  ({ bottomContainer: arr3[0], bottomContainerFullWidth: arr3[1], bottomContainerNotFullWidth: arr3[2] } = tmp);
  ({ isFullWidth: arr3[3], left: arr3[4], width: arr3[5] } = tmp2);
  const memo1 = noop.useMemo(() => {
    const items = [closure_3.closeButton, ];
    const rect = { top: styles.top + nativeDefault.space.PX_8, left: null };
    const sum = styles.left + styles.width;
    const diff = sum - nativeDefault.space.PX_32;
    rect.left = diff - nativeDefault.space.PX_8;
    items[1] = rect;
    return items;
  }, items1);
  const memo2 = noop.useMemo(() => {
    const bottomContainer = closure_3.bottomContainer;
    if (styles.isFullWidth) {
      const items = [bottomContainer, tmp2.bottomContainerFullWidth];
      let items1 = items;
    } else {
      items1 = [bottomContainer, tmp2.bottomContainerNotFullWidth, ];
      const obj = { left: null, width: null };
      ({ left: obj.left, width: obj.width } = styles);
      items1[2] = obj;
    }
    return items1;
  }, items2);
  const items3 = [maxVideoProgressSeconds];
  const stateFromStores = bounty(dismissVideoEndAppStoreOverlay[16]).useStateFromStores(items3, () => BountyStore.isBountyCompleted(bounty.id));
  let obj = bounty(dismissVideoEndAppStoreOverlay[16]);
  const tmp6 = bounty;
  let obj2 = bounty(dismissVideoEndAppStoreOverlay[17]);
  const bountyVideoEndMode = bounty(dismissVideoEndAppStoreOverlay[18]).getBountyVideoEndMode(bounty);
  let result = 1000 * bounty.rewardTimerSeconds;
  noop = result;
  const ref = noop.useRef(null);
  const items4 = [bounty.id, sourceQuestContent];
  const callback = noop.useCallback(asyncGeneratorStep(async (arg0, value) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_1 = tmp3;
            bounty = tmp7;
            closure_128_0 = false;
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj7 = { value: bounty(tmp32[19]).claimBountyReward(bounty.id, sourceQuestContent), done: false };
            return obj7;
          }
        } else {
          if (1 === tmp7) {
            c3 = 0;
            closure_128_1 = tmp32;
            const result = bounty(tmp32[20]).openBountyRewardClaimErrorToast(closure_128_1);
            const obj2 = bounty(tmp32[20]);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = true;
            c3 = 0;
          }
          let hapticFeedbackOnRewardEarnedEnabled = closure_128_0;
          if (closure_128_0) {
            const BountiesMobileQuestBarExperiment = bounty(tmp32[21]).BountiesMobileQuestBarExperiment;
            const obj8 = { location: constants.VIDEO_MODAL_MOBILE };
            hapticFeedbackOnRewardEarnedEnabled = BountiesMobileQuestBarExperiment.getConfig(obj8).hapticFeedbackOnRewardEarnedEnabled;
          }
          if (hapticFeedbackOnRewardEarnedEnabled) {
            const result1 = bounty(tmp32[22]).triggerHapticFeedback(bounty(tmp32[22]).HapticFeedbackTypes.IMPACT_MEDIUM);
            const obj4 = bounty(tmp32[22]);
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp32) {
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp32;
        } else {
          c4 = tmp;
        }
      }
    }
  }), items4);
  let obj3 = bounty(dismissVideoEndAppStoreOverlay[18]);
  const bountiesModalVideoAnalytics = bounty(dismissVideoEndAppStoreOverlay[23]).useBountiesModalVideoAnalytics({ bountyId: bounty.id, sourceQuestContent, rewardDurationMs: result, wasPreloaded: false, verticalScrollingPosition: null, isActive: true });
  ({ handleVideoProgressAnalytics, handleVideoEndAnalytics, handleVideoLoopedAnalytics, handleVideoPausedAnalytics, handleVideoResumedAnalytics, handleVideoErrorAnalytics, handleLoadStartAnalytics, handleVideoTracksAnalytics, handleReadyForDisplayAnalytics, handleBufferAnalytics } = bountiesModalVideoAnalytics);
  let obj4 = bounty(dismissVideoEndAppStoreOverlay[23]);
  let obj5 = { bountyId: bounty.id, sourceQuestContent, rewardDurationMs: result, wasPreloaded: false, verticalScrollingPosition: null, isActive: true };
  const bountiesModalTiming = bounty(dismissVideoEndAppStoreOverlay[24]).useBountiesModalTiming({ endMode: bountyVideoEndMode, rewardDurationMs: result, isCompleted: stateFromStores, onRewardEarned: callback, onVideoProgress: handleVideoProgressAnalytics, onVideoEnd: handleVideoEndAnalytics, onVideoLooped: handleVideoLoopedAnalytics, onVideoPaused: handleVideoPausedAnalytics, onVideoResumed: handleVideoResumedAnalytics, playerRef: ref });
  ({ isCtaVisible, isEndCardVisible } = bountiesModalTiming);
  maxVideoProgressSeconds = bountiesModalTiming.maxVideoProgressSeconds;
  const videoDuration = bountiesModalTiming.videoDuration;
  ({ handleVideoEnd, handleVideoProgress, handleVideoPaused, handleVideoResumed, showEndCard, rewardRemainingSeconds, rewardTotalSeconds, normalizedProgress } = bountiesModalTiming);
  let obj6 = bounty(dismissVideoEndAppStoreOverlay[24]);
  const bountyAppStoreOverlayPlayback = bounty(dismissVideoEndAppStoreOverlay[18]).useBountyAppStoreOverlayPlayback({ bounty, sourceQuestContent, isActive: true, endMode: bountyVideoEndMode, playerRef: ref, handleVideoEnd, handleVideoPaused, handleVideoResumed, showEndCard });
  const isVideoEndAppStoreOverlayVisible = bountyAppStoreOverlayPlayback.isVideoEndAppStoreOverlayVisible;
  const items5 = [bounty.id, dismissVideoEndAppStoreOverlay, maxVideoProgressSeconds, result, sourceQuestContent, videoDuration];
  ({ shouldRepeatVideo, handlePaused, handleResumed, handleVideoEndWithAppStore } = bountyAppStoreOverlayPlayback);
  const items6 = [bounty.id, dismissVideoEndAppStoreOverlay, maxVideoProgressSeconds, result, sourceQuestContent, videoDuration];
  const callback1 = noop.useCallback(() => {
    dismissVideoEndAppStoreOverlay();
    const obj2 = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: constants.AD_VIDEO_MODAL_CLOSED, properties: null, sourceQuestContent: null };
    const obj3 = { content_name: null, content_id: null, video_progress: null, threshold_met: null, reward_timer_seconds: null };
    const obj = AnalyticsActions;
    obj3.content_name = AnalyticsTypes.getQuestContentName(QuestContent.QuestContent.VIDEO_MODAL_MOBILE);
    obj3.content_id = QuestContent.QuestContent.VIDEO_MODAL_MOBILE;
    let num = videoDuration;
    if (videoDuration == null) {
      num = 0;
    }
    obj3.video_progress = VideoQuestUtils.formatVideoProgressRatio(maxVideoProgressSeconds, num);
    obj3.threshold_met = 1000 * maxVideoProgressSeconds >= c5;
    obj3.reward_timer_seconds = c5 / 1000;
    obj2.properties = obj3;
    obj2.sourceQuestContent = sourceQuestContent;
    obj.trackAdContentEvent(obj2);
    BountiesModalActionCreatorsDefault.hideModal();
  }, items5);
  let obj8 = { style: memo, children: null };
  const callback2 = noop.useCallback(() => {
    dismissVideoEndAppStoreOverlay();
    const obj2 = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: constants.AD_VIDEO_MODAL_CLOSED, properties: null, sourceQuestContent: null };
    const obj3 = { content_name: null, content_id: null, video_progress: null, threshold_met: true, reward_timer_seconds: null };
    const obj = AnalyticsActions;
    obj3.content_name = AnalyticsTypes.getQuestContentName(QuestContent.QuestContent.VIDEO_MODAL_END_CARD);
    obj3.content_id = QuestContent.QuestContent.VIDEO_MODAL_END_CARD;
    let num = videoDuration;
    if (videoDuration == null) {
      num = 0;
    }
    obj3.video_progress = VideoQuestUtils.formatVideoProgressRatio(maxVideoProgressSeconds, num);
    obj3.reward_timer_seconds = c5 / 1000;
    obj2.properties = obj3;
    obj2.sourceQuestContent = sourceQuestContent;
    obj.trackAdContentEvent(obj2);
    BountiesModalActionCreatorsDefault.hideModal();
  }, items6);
  let size = { bounty, sourceQuestContent, isCompleted: stateFromStores, isCtaVisible: null, isEndCardVisible: null, isProgressBarVisible: null, orbsBalance: null, handleVideoEnd: null, handleVideoProgress: null, handleVideoPaused: null, handleVideoResumed: null, handleVideoError: null, onLoadStart: null, onBuffer: null, onFirstFrame: null, onVideoTracks: null, rewardRemainingSeconds: null, rewardTotalSeconds: null, normalizedProgress: null, repeat: null, initialProgress: null, isActive: true, playerRef: null, width: null, height: null, videoEndPeekScale: null, renderEndCard: null };
  if (isCtaVisible) {
    isCtaVisible = !isVideoEndAppStoreOverlayVisible;
  }
  size.isCtaVisible = isCtaVisible;
  size.isEndCardVisible = isEndCardVisible;
  let tmp22 = !isEndCardVisible;
  if (!isEndCardVisible) {
    tmp22 = !isVideoEndAppStoreOverlayVisible;
  }
  size.isProgressBarVisible = tmp22;
  size.orbsBalance = obj2.useFetchVirtualCurrencyBalance().balance;
  size.handleVideoEnd = handleVideoEndWithAppStore;
  size.handleVideoProgress = handleVideoProgress;
  size.handleVideoPaused = handlePaused;
  size.handleVideoResumed = handleResumed;
  size.handleVideoError = handleVideoErrorAnalytics;
  size.onLoadStart = handleLoadStartAnalytics;
  size.onBuffer = handleBufferAnalytics;
  size.onFirstFrame = handleReadyForDisplayAnalytics;
  size.onVideoTracks = handleVideoTracksAnalytics;
  size.rewardRemainingSeconds = rewardRemainingSeconds;
  size.rewardTotalSeconds = rewardTotalSeconds;
  size.normalizedProgress = normalizedProgress;
  size.repeat = shouldRepeatVideo;
  size.initialProgress = initialProgress;
  size.playerRef = ref;
  ({ width: obj9.width, height: obj9.height } = tmp2);
  size.videoEndPeekScale = bounty.videoEndPeekScale;
  size.renderEndCard = function renderEndCard() {
    return state(QuestContentImpressionTracker.QuestContentImpressionTrackerNative, {
      adContentId: bounty.id,
      adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
      questContent: QuestContent.QuestContent.VIDEO_MODAL_END_CARD,
      sourceQuestContent,
      overrideVisibility: isEndCardVisible,
      children() {
        return closure_2_14(sourceQuestContent(dismissVideoEndAppStoreOverlay[32]), { bounty, visible, sourceQuestContent });
      }
    });
  };
  obj8.children = closure_14(bounty(dismissVideoEndAppStoreOverlay[33]).BountyVideo, size);
  const items7 = [closure_14(isEndCardVisible, obj8), , ];
  let obj7 = bounty(dismissVideoEndAppStoreOverlay[18]);
  const tmp18 = closure_16;
  const tmp19 = closure_15;
  items7[1] = closure_14(isEndCardVisible, { style: memo1, children: closure_14(sourceQuestContent(dismissVideoEndAppStoreOverlay[34]), { onPress: callback1 }) });
  let rect = { left: tmp2.isFullWidth, right: tmp2.isFullWidth, bottom: true, style: memo2, pointerEvents: "box-none", children: null };
  const obj11 = { bounty, visible: null, sourceQuestContent: null, onClose: null };
  const obj10 = { style: memo1, children: closure_14(sourceQuestContent(dismissVideoEndAppStoreOverlay[34]), { onPress: callback1 }) };
  if (isEndCardVisible) {
    isEndCardVisible = !isVideoEndAppStoreOverlayVisible;
  }
  const obj12 = { children: null };
  obj11.visible = isEndCardVisible;
  obj11.sourceQuestContent = sourceQuestContent;
  obj11.onClose = callback2;
  rect.children = closure_14(sourceQuestContent(dismissVideoEndAppStoreOverlay[35]), obj11);
  items7[2] = closure_14(tmp6(dismissVideoEndAppStoreOverlay[36]).SafeAreaPaddingView, rect);
  obj12.children = items7;
  return tmp18(tmp19, obj12);
});
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = sharedValue(568).c(31);
  ({ bounty, sourceQuestContent } = arg0);
  const height = sharedValue1(1482)().height;
  const tmp2 = closure_19();
  let obj = sharedValue(568);
  sharedValue = sharedValue(4497).useSharedValue(1);
  let obj2 = sharedValue(4497);
  sharedValue1 = sharedValue(4497).useSharedValue(0);
  const obj3 = sharedValue(4497);
  [tmp6, dependencyMap] = bounty(noop.useState(null), 2);
  bounty = noop.useRef(null);
  asyncGeneratorStep = noop.useRef(0);
  if (cResult[0] === tmp2.height) {
    if (cResult[1] === tmp2.top) {
      if (cResult[2] === height) {
        let tmp8 = cResult[3];
      }
      if (cResult[4] !== height) {
        const tmp12 = closure_9(height);
        cResult[4] = height;
        class F {
          constructor() {
            current = closure_3.current;
            if (null != current) {
              closure_3.current = null;
              tmp18 = AnalyticEvents;
              QUEST_APP_STORE_OVERLAY_CLOSED = AnalyticEvents.QUEST_APP_STORE_OVERLAY_CLOSED;
              appId = current.metadata.appId;
              tmp = closure_0;
              tmp2 = closure_2;
              tmp3 = globalThis;
              _Date = Date;
              tmp4 = closure_4;
              tmp5 = current;
              tmp6 = QUEST_APP_STORE_OVERLAY_CLOSED;
              tmp7 = appId;
              trackOverlayEventResult = current.trackOverlayEvent(QUEST_APP_STORE_OVERLAY_CLOSED, appId, closure_0(closure_2[25]).AppStoreOverlayVariant.CUSTOM, Date.now() - closure_4.current);
              obj = closure_0(closure_2[40]);
              result = obj.clearAppStoreOverlayOpen();
              ComponentDispatch = closure_0(closure_2[41]).ComponentDispatch;
              tmp10 = ComponentActions;
              dispatchResult = ComponentDispatch.dispatch(ComponentActions.QUEST_APP_STORE_OVERLAY_FINISHED);
              tmp12 = closure_2;
              tmp13 = closure_2(null);
              tmp14 = closure_0;
              obj2 = closure_0(closure_2[38]);
              num = 1;
              result1 = closure_0.set(obj2.withTiming(1, closure_0(closure_2[39]).timingStandard));
              tmp16 = closure_1;
              num2 = 0;
              result2 = closure_1.set(0);
            }
            return;
          }
        }
        cResult[5] = tmp12;
      }
      if (cResult[6] !== sharedValue1) {
        class Q {
          constructor(arg0) {
            closure_4.current = Date.now();
            closure_3.current = arg0;
            tmp = closure_2(arg0);
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[38]);
            result = closure_1.set(obj.withTiming(1, closure_0(closure_2[39]).timingSlow));
            appId = arg0.metadata.appId;
            trackOverlayEventResult = arg0.trackOverlayEvent(AnalyticEvents.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId, tmp2(tmp3[25]).AppStoreOverlayVariant.CUSTOM);
            return;
          }
        }
        cResult[6] = sharedValue1;
        class F {
          constructor() {
            current = closure_3.current;
            if (null != current) {
              closure_3.current = null;
              tmp18 = AnalyticEvents;
              QUEST_APP_STORE_OVERLAY_CLOSED = AnalyticEvents.QUEST_APP_STORE_OVERLAY_CLOSED;
              appId = current.metadata.appId;
              tmp = closure_0;
              tmp2 = closure_2;
              tmp3 = globalThis;
              _Date = Date;
              tmp4 = closure_4;
              tmp5 = current;
              tmp6 = QUEST_APP_STORE_OVERLAY_CLOSED;
              tmp7 = appId;
              trackOverlayEventResult = current.trackOverlayEvent(QUEST_APP_STORE_OVERLAY_CLOSED, appId, closure_0(closure_2[25]).AppStoreOverlayVariant.CUSTOM, Date.now() - closure_4.current);
              obj = closure_0(closure_2[40]);
              result = obj.clearAppStoreOverlayOpen();
              ComponentDispatch = closure_0(closure_2[41]).ComponentDispatch;
              tmp10 = ComponentActions;
              dispatchResult = ComponentDispatch.dispatch(ComponentActions.QUEST_APP_STORE_OVERLAY_FINISHED);
              tmp12 = closure_2;
              tmp13 = closure_2(null);
              tmp14 = closure_0;
              obj2 = closure_0(closure_2[38]);
              num = 1;
              result1 = closure_0.set(obj2.withTiming(1, closure_0(closure_2[39]).timingStandard));
              tmp16 = closure_1;
              num2 = 0;
              result2 = closure_1.set(0);
            }
            return;
          }
        }
      } else {
        class Q {
          constructor(arg0) {
            closure_4.current = Date.now();
            closure_3.current = arg0;
            tmp = closure_2(arg0);
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[38]);
            result = closure_1.set(obj.withTiming(1, closure_0(closure_2[39]).timingSlow));
            appId = arg0.metadata.appId;
            trackOverlayEventResult = arg0.trackOverlayEvent(AnalyticEvents.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId, tmp2(tmp3[25]).AppStoreOverlayVariant.CUSTOM);
            return;
          }
        }
      }
      if (cResult[8] === sharedValue1) {
        class Q {
          constructor(arg0) {
            closure_4.current = Date.now();
            closure_3.current = arg0;
            tmp = closure_2(arg0);
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[38]);
            result = closure_1.set(obj.withTiming(1, closure_0(closure_2[39]).timingSlow));
            appId = arg0.metadata.appId;
            trackOverlayEventResult = arg0.trackOverlayEvent(AnalyticEvents.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId, tmp2(tmp3[25]).AppStoreOverlayVariant.CUSTOM);
            return;
          }
        }
        if (cResult[11] === tmp14) {
          class Q {
            constructor(arg0) {
              closure_4.current = Date.now();
              closure_3.current = arg0;
              tmp = closure_2(arg0);
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj = closure_0(closure_2[38]);
              result = closure_1.set(obj.withTiming(1, closure_0(closure_2[39]).timingSlow));
              appId = arg0.metadata.appId;
              trackOverlayEventResult = arg0.trackOverlayEvent(AnalyticEvents.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId, tmp2(tmp3[25]).AppStoreOverlayVariant.CUSTOM);
              return;
            }
          }
        }
        const obj4 = { videoEndPeekTargetScale: tmp8, videoEndPeekScale: null, isVideoEndAppStoreOverlayVisible: null, showVideoEndAppStoreOverlay: null, dismissVideoEndAppStoreOverlay: null };
        class F {
          constructor() {
            current = closure_3.current;
            if (null != current) {
              closure_3.current = null;
              tmp18 = AnalyticEvents;
              QUEST_APP_STORE_OVERLAY_CLOSED = AnalyticEvents.QUEST_APP_STORE_OVERLAY_CLOSED;
              appId = current.metadata.appId;
              tmp = closure_0;
              tmp2 = closure_2;
              tmp3 = globalThis;
              _Date = Date;
              tmp4 = closure_4;
              tmp5 = current;
              tmp6 = QUEST_APP_STORE_OVERLAY_CLOSED;
              tmp7 = appId;
              trackOverlayEventResult = current.trackOverlayEvent(QUEST_APP_STORE_OVERLAY_CLOSED, appId, closure_0(closure_2[25]).AppStoreOverlayVariant.CUSTOM, Date.now() - closure_4.current);
              obj = closure_0(closure_2[40]);
              result = obj.clearAppStoreOverlayOpen();
              ComponentDispatch = closure_0(closure_2[41]).ComponentDispatch;
              tmp10 = ComponentActions;
              dispatchResult = ComponentDispatch.dispatch(ComponentActions.QUEST_APP_STORE_OVERLAY_FINISHED);
              tmp12 = closure_2;
              tmp13 = closure_2(null);
              tmp14 = closure_0;
              obj2 = closure_0(closure_2[38]);
              num = 1;
              result1 = closure_0.set(obj2.withTiming(1, closure_0(closure_2[39]).timingStandard));
              tmp16 = closure_1;
              num2 = 0;
              result2 = closure_1.set(0);
            }
            return;
          }
        }
        obj4.isVideoEndAppStoreOverlayVisible = tmp7;
        obj4.showVideoEndAppStoreOverlay = tmp13;
        obj4.dismissVideoEndAppStoreOverlay = tmp14;
        cResult[11] = tmp14;
        cResult[12] = tmp7;
        cResult[13] = tmp13;
        cResult[14] = sharedValue;
        cResult[15] = tmp8;
        cResult[16] = obj4;
      }
      class F {
        constructor() {
          current = closure_3.current;
          if (null != current) {
            closure_3.current = null;
            tmp18 = AnalyticEvents;
            QUEST_APP_STORE_OVERLAY_CLOSED = AnalyticEvents.QUEST_APP_STORE_OVERLAY_CLOSED;
            appId = current.metadata.appId;
            tmp = closure_0;
            tmp2 = closure_2;
            tmp3 = globalThis;
            _Date = Date;
            tmp4 = closure_4;
            tmp5 = current;
            tmp6 = QUEST_APP_STORE_OVERLAY_CLOSED;
            tmp7 = appId;
            trackOverlayEventResult = current.trackOverlayEvent(QUEST_APP_STORE_OVERLAY_CLOSED, appId, closure_0(closure_2[25]).AppStoreOverlayVariant.CUSTOM, Date.now() - closure_4.current);
            obj = closure_0(closure_2[40]);
            result = obj.clearAppStoreOverlayOpen();
            ComponentDispatch = closure_0(closure_2[41]).ComponentDispatch;
            tmp10 = ComponentActions;
            dispatchResult = ComponentDispatch.dispatch(ComponentActions.QUEST_APP_STORE_OVERLAY_FINISHED);
            tmp12 = closure_2;
            tmp13 = closure_2(null);
            tmp14 = closure_0;
            obj2 = closure_0(closure_2[38]);
            num = 1;
            result1 = closure_0.set(obj2.withTiming(1, closure_0(closure_2[39]).timingStandard));
            tmp16 = closure_1;
            num2 = 0;
            result2 = closure_1.set(0);
          }
          return;
        }
      }
      cResult[8] = sharedValue1;
      cResult[9] = sharedValue;
      cResult[10] = F;
    }
  }
  const tmp9 = closure_10({ windowHeight: height, videoTop: tmp2.top, videoHeight: tmp2.height });
  ({ height: tmp[0], top: tmp[1] } = tmp2);
  cResult[2] = height;
  cResult[3] = tmp9;
  tmp8 = tmp9;
}) : ((arg0) => {
  importDefault = undefined;
  let sharedValue;
  c4 = undefined;
  noop = undefined;
  ({ bounty, sourceQuestContent } = arg0);
  const height = require("useWindowDimensions")().height;
  const tmp3 = closure_19();
  importDefault = tmp3;
  sharedValue = height(sharedValue[37]).useSharedValue(1);
  let obj = height(sharedValue[37]);
  const tmp = importDefault;
  const tmp2 = sharedValue;
  const sharedValue1 = height(sharedValue[37]).useSharedValue(0);
  let obj2 = height(sharedValue[37]);
  [tmp7, c4] = sharedValue1(noop.useState(null), 2);
  noop = noop.useRef(null);
  noop.useRef(0);
  const isVideoEndAppStoreOverlayVisible = tmp8;
  const items = [height, , ];
  ({ top: arr[1], height: arr[2] } = tmp3);
  const memo = noop.useMemo(() => v65535({ windowHeight: height, videoTop: styles.top, videoHeight: styles.height }), items);
  const items1 = [height];
  const items2 = [sharedValue1];
  const memo1 = noop.useMemo(() => options(height), items1);
  const showVideoEndAppStoreOverlay = noop.useCallback((current) => {
    closure_6.current = Date.now();
    closure_5.current = current;
    _undefined(current);
    const result = sharedValue1.set(timing.withTiming(1, timingPresets.timingSlow));
    const appId = current.metadata.appId;
    current.trackOverlayEvent(constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId, AnalyticsActions.AppStoreOverlayVariant.CUSTOM);
  }, items2);
  const items3 = [sharedValue1, sharedValue];
  const callback1 = noop.useCallback(() => {
    const current = ref.current;
    if (null != current) {
      ref.current = null;
      const QUEST_APP_STORE_OVERLAY_CLOSED = constants.QUEST_APP_STORE_OVERLAY_CLOSED;
      const appId = current.metadata.appId;
      const _Date = Date;
      current.trackOverlayEvent(QUEST_APP_STORE_OVERLAY_CLOSED, appId, AnalyticsActions.AppStoreOverlayVariant.CUSTOM, Date.now() - ref2.current);
      const result = AppStoreOverlayTelemetryManager.clearAppStoreOverlayOpen();
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
      _undefined(null);
      const result1 = sharedValue.set(timing.withTiming(1, timingPresets.timingStandard));
      const result2 = sharedValue1.set(0);
    }
  }, items3);
  const items4 = [callback1, null != tmp7, showVideoEndAppStoreOverlay, sharedValue, memo];
  const memo2 = noop.useMemo(() => ({ videoEndPeekTargetScale: memo, videoEndPeekScale: sharedValue, isVideoEndAppStoreOverlayVisible, showVideoEndAppStoreOverlay, dismissVideoEndAppStoreOverlay: callback1 }), items4);
  const obj3 = { value: memo2, children: null };
  const items5 = [closure_14(closure_21, { bounty, sourceQuestContent, videoEndPeekScale: sharedValue, dismissVideoEndAppStoreOverlay: callback1 }), ];
  let tmp15Result = null;
  if (null != tmp7) {
    const obj4 = { metadata: tmp7.metadata, sheetHeight: memo1, revealProgress: sharedValue1, onDismiss: callback1, onInstallPress: tmp7.onInstallPress };
    tmp15Result = closure_14(tmp(tmp2[42]), obj4);
  }
  items5[1] = tmp15Result;
  obj3.children = items5;
  return closure_16(height(sharedValue[43]).BountyVideoEndAppStoreProvider, obj3);
});
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalContent.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((bountyId) => {
  let VIDEO_MODAL_MOBILE = bounty;
  const cResult = bountyId(bounty[11]).c(16);
  bountyId = bountyId.bountyId;
  const sourceQuestContent = bountyId.sourceQuestContent;
  bounty = bountyId.bounty;
  if (cResult[0] === bountyId) {
    if (cResult[1] === bounty) {
      if (cResult[2] === sourceQuestContent) {
        let tmp3 = cResult[3];
      }
      id = id(noop.useState(tmp3), 1)[0];
      closure_4 = tmp6;
      if (cResult[4] === bountyId) {
        if (cResult[5] === tmp6) {
          if (cResult[6] === sourceQuestContent) {
            let tmp7 = cResult[7];
            let tmp8 = cResult[8];
          }
          const effect = obj2.useEffect(tmp7, tmp8);
          if (null == id) {
            return null;
          } else {
            if (cResult[9] === id) {
              if (cResult[10] === sourceQuestContent) {
                let tmp11 = cResult[11];
              }
              class E {
                constructor() {
                  obj = { bounty: closure_3, sourceQuestContent };
                  return jsx(f69301, obj);
                }
              }
              let obj3 = { theme: ThemeTypes.DARK, children: null };
              let obj4 = { adContentId: id.id, adCreativeType: tmp(VIDEO_MODAL_MOBILE[26]).AdCreativeType.BOUNTY, questContent: null, sourceQuestContent: null, overrideVisibility: true, children: null };
              VIDEO_MODAL_MOBILE = tmp(VIDEO_MODAL_MOBILE[28]).QuestContent.VIDEO_MODAL_MOBILE;
              obj4.questContent = VIDEO_MODAL_MOBILE;
              obj4.sourceQuestContent = sourceQuestContent;
              obj4.children = tmp11;
              obj3.children = closure_14(tmp(VIDEO_MODAL_MOBILE[31]).BillableAdPlacementImpressionTrackerNative, obj4);
              const tmp15 = closure_14(tmp(VIDEO_MODAL_MOBILE[45]).ThemeContextProvider, obj3);
              id = id.id;
              cResult[12] = id;
              cResult[13] = sourceQuestContent;
              cResult[14] = tmp11;
              cResult[15] = tmp15;
            }
            class E {
              constructor() {
                obj = { bounty: closure_3, sourceQuestContent };
                return jsx(f69301, obj);
              }
            }
            cResult[9] = id;
            cResult[10] = sourceQuestContent;
            cResult[11] = E;
            tmp11 = E;
          }
        }
      }
      const fn2 = function p() {
        if (closure_4) {
          const _Error = Error;
          const error = new Error("Bounty unexpectedly missing when opening the Bounties modal");
          const obj2 = { tags: { source: "BountiesModalContent" }, extra: null };
          const obj3 = { bountyId, sourceQuestContent };
          obj2.extra = obj3;
          const result = QuestDataUtils.captureQuestsException(error, obj2);
          BountiesModalActionCreatorsDefault.hideModal();
        }
      };
      const items = [null == id, bountyId, sourceQuestContent];
      cResult[4] = bountyId;
      cResult[5] = null == id;
      cResult[6] = sourceQuestContent;
      cResult[7] = fn2;
      cResult[8] = items;
      tmp8 = items;
      tmp7 = fn2;
      obj2 = noop;
    }
  }
  const fn = function s() {
    if (null != bounty) {
      if (tmp.id === bountyId) {
        return tmp;
      }
    }
    const questPlacementFromQuestContent = QuestDataUtils.getQuestPlacementFromQuestContent(sourceQuestContent);
    let bountyByPlacementAndId = null;
    if (null != questPlacementFromQuestContent) {
      bountyByPlacementAndId = QuestDataUtils.getBountyByPlacementAndId(questPlacementFromQuestContent, bountyId);
      const tmp3Result = QuestDataUtils;
    }
    return bountyByPlacementAndId;
  };
  cResult[0] = bountyId;
  cResult[1] = bounty;
  cResult[2] = sourceQuestContent;
  cResult[3] = fn;
  tmp3 = fn;
}) : ((bountyId) => {
  bountyId = bountyId.bountyId;
  const sourceQuestContent = bountyId.sourceQuestContent;
  bounty = undefined;
  bounty = bounty(noop.useState(() => {
    if (null != bounty) {
      if (tmp.id === bountyId) {
        return tmp;
      }
    }
    const questPlacementFromQuestContent = QuestDataUtils.getQuestPlacementFromQuestContent(sourceQuestContent);
    let bountyByPlacementAndId = null;
    if (null != questPlacementFromQuestContent) {
      bountyByPlacementAndId = QuestDataUtils.getBountyByPlacementAndId(questPlacementFromQuestContent, bountyId);
      const tmp3Result = QuestDataUtils;
    }
    return bountyByPlacementAndId;
  }), 1)[0];
  let tmp2 = null;
  closure_4 = tmp3;
  const items = [null == bounty, bountyId, sourceQuestContent];
  const effect = noop.useEffect(() => {
    if (closure_4) {
      const _Error = Error;
      const error = new Error("Bounty unexpectedly missing when opening the Bounties modal");
      const obj2 = { tags: { source: "BountiesModalContent" }, extra: null };
      const obj3 = { bountyId, sourceQuestContent };
      obj2.extra = obj3;
      const result = QuestDataUtils.captureQuestsException(error, obj2);
      BountiesModalActionCreatorsDefault.hideModal();
    }
  }, items);
  if (null != bounty) {
    let obj = { theme: ThemeTypes.DARK, children: null };
    let obj2 = {
      adContentId: bounty.id,
      adCreativeType: bountyId(bounty[26]).AdCreativeType.BOUNTY,
      questContent: bountyId(bounty[28]).QuestContent.VIDEO_MODAL_MOBILE,
      sourceQuestContent,
      overrideVisibility: true,
      children() {
          return state(closure_22, { bounty, sourceQuestContent });
        }
    };
    obj.children = closure_14(bountyId(bounty[31]).BillableAdPlacementImpressionTrackerNative, obj2);
    tmp2 = closure_14(bountyId(bounty[45]).ThemeContextProvider, obj);
  }
  return tmp2;
});
