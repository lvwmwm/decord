// Module ID: 14580
// Function ID: 14581
// Name: BountiesModalContent
// Dependencies: [32, 5, 19, 17, 7119, 5757, 14531, 1086, 1097, 21, 558, 576, 1485, 1619, 4837, 588, 504, 8312, 14540, 10708, 14545, 9769, 4802, 14547, 14543, 7135, 5764, 7145, 5762, 10699, 14527, 10717, 14581, 14555, 14578, 14554, 6546, 4570, 4838, 4841, 10684, 1122, 14577, 14541, 7116, 4544, 2]

// Module 14580 (BountiesModalContent)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import Constants2 from "Constants" /* 1097 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1122 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1485 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1619 */;
import timing from "timing" /* 4838 */;
import timingPresets from "timingPresets" /* 4841 */;
import QuestConstants from "QuestConstants" /* 5757 */;
import QuestContent from "QuestContent" /* 5762 */;
import AdCreativeType from "AdCreativeType" /* 5764 */;
import QuestDataUtils from "QuestDataUtils" /* 7116 */;
import AnalyticsActions from "AnalyticsActions" /* 7135 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7145 */;
import AppStoreOverlayTelemetryManager from "AppStoreOverlayTelemetryManager" /* 10684 */;
import VideoQuestUtils from "VideoQuestUtils" /* 10699 */;
import QuestContentImpressionTracker from "QuestContentImpressionTracker" /* 10717 */;
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators" /* 14527 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import BountyStore from "BountyStore" /* 7119 */;
import BountiesModalConstants from "BountiesModalConstants" /* 14531 */;
import Constants from "Constants" /* 1086 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import createStyles from "createStyles" /* 4837 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let bounty, bountyId, c5, dependencyMap, dispatchResult, importDefault, num2, set, tmp16, trackOverlayEventResult;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
let _asyncToGenerator = _asyncToGenerator_mod;
let react = react_mod;
const View = react_native.View;
const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
({ getBountyVideoEndAppStoreSheetHeight: c9, getBountyVideoEndPeekTargetScale: c10 } = BountiesModalConstants);
({ AnalyticEvents: unpackModuleId, ComponentActions: closure_12 } = Constants);
const ThemeTypes = Constants2.ThemeTypes;
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = Fragment);
let c17 = 0.5625;
const initialProgress = { timestampSec: 0, maxTimestampSec: 0, duration: 0 };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let height;
  let width;
  const obj = react2;
  const cResult = obj.c(6);
  ({ width, height } = useWindowDimensionsDefault());
  useWindowDimensionsDefault();
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
          let tmp11;
          if (cResult[4] === rounded) {
            tmp11 = cResult[5];
          }
          return tmp11;
        }
      }
    }
  }
  size = { top: rounded, left: rounded1, width: rounded2, height: rounded3, isFullWidth: flag };
  cResult[0] = flag;
  cResult[1] = rounded1;
  cResult[2] = rounded2;
  cResult[3] = rounded3;
  cResult[4] = rounded;
  cResult[5] = size;
  tmp11 = size;
}) : (() => {
  let closure_2;
  let height;
  size = height(1485)();
  const width = size.width;
  height = size.height;
  const tmp = height(1619)();
  dependencyMap = tmp;
  const items = [width, height, , , , ];
  ({ top: arr[2], bottom: arr[3], left: arr[4], right: arr[5] } = tmp);
  return react.useMemo(() => {
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
    size = { top: Math.floor(rect.top + (diff1 - result) / 2), left: Math.floor(rect.left + (diff - result1) / 2), width: Math.floor(result1), height: Math.floor(result), isFullWidth: flag };
    return size;
  }, items);
});
let closure_20 = createStyles.createStyles(() => {
  let rect;
  const obj = { videoWrapper: { position: "absolute" }, closeButton: { position: "absolute" }, bottomContainer: { position: "absolute", bottom: nativeDefault.space.PX_24, justifyContent: "flex-end" }, bottomContainerFullWidth: rect, bottomContainerNotFullWidth: { paddingLeft: nativeDefault.space.PX_16, paddingRight: nativeDefault.space.PX_16 } };
  ({ position: "absolute", bottom: nativeDefault.space.PX_24, justifyContent: "flex-end" });
  rect = { left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16 };
  ({ paddingLeft: nativeDefault.space.PX_16, paddingRight: nativeDefault.space.PX_16 });
  return obj;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((bounty) => {
  let dismissVideoEndAppStoreOverlay;
  let obj7;
  let overrideVisibility;
  let videoEndPeekScale;
  const tmp = bounty;
  let obj = bounty(dismissVideoEndAppStoreOverlay[11]);
  const cResult = obj.c(115);
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  ({ videoEndPeekScale, dismissVideoEndAppStoreOverlay } = bounty);
  const tmp4 = closure_20();
  size = closure_19();
  if (cResult[0] === size.height) {
    if (cResult[1] === size.left) {
      if (cResult[2] === size.top) {
        let tmp5;
        if (cResult[3] === size.width) {
          tmp5 = cResult[4];
        }
        if (cResult[5] === tmp4.videoWrapper) {
          const sum = size.top + sourceQuestContent(tmp2[15]).space.PX_8;
          const sum1 = size.left + size.width;
          const diff = sum1 - sourceQuestContent(tmp2[15]).space.PX_32;
          const diff1 = diff - sourceQuestContent(tmp2[15]).space.PX_8;
          if (cResult[8] === sum) {
            let tmp12;
            if (cResult[9] === diff1) {
              tmp12 = cResult[10];
            }
            if (cResult[11] === tmp4.closeButton) {
              if (cResult[14] === tmp4.bottomContainer) {
                if (cResult[15] === tmp4.bottomContainerFullWidth) {
                  if (cResult[16] === tmp4.bottomContainerNotFullWidth) {
                    if (cResult[17] === size.isFullWidth) {
                      if (cResult[18] === size.left) {
                        let tmp18;
                        let tmp20;
                        const _Symbol = Symbol;
                        if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                          const items = [BountyStore];
                          cResult[21] = items;
                          tmp18 = items;
                        } else {
                          tmp18 = cResult[21];
                        }
                        if (cResult[22] !== bounty.id) {
                          class F {
                            constructor() {
                              return BountyStore.isBountyCompleted(bounty.id);
                            }
                          }
                          cResult[22] = bounty.id;
                          cResult[23] = F;
                          tmp20 = F;
                        } else {
                          class F {
                            constructor() {
                              return BountyStore.isBountyCompleted(bounty.id);
                            }
                          }
                        }
                        const tmpResult = tmp(dismissVideoEndAppStoreOverlay[16]);
                        const stateFromStores = tmpResult.useStateFromStores(tmp18, tmp20);
                        const tmpResult2 = tmp(dismissVideoEndAppStoreOverlay[17]);
                        const balance = tmpResult2.useFetchVirtualCurrencyBalance().balance;
                        if (cResult[24] !== bounty) {
                          class F {
                            constructor() {
                              return BountyStore.isBountyCompleted(bounty.id);
                            }
                          }
                          const bountyVideoEndMode = obj7.getBountyVideoEndMode(bounty);
                          cResult[24] = bounty;
                          cResult[25] = bountyVideoEndMode;
                        } else {
                          class F {
                            constructor() {
                              return BountyStore.isBountyCompleted(bounty.id);
                            }
                          }
                        }
                        let result = 1000 * bounty.rewardTimerSeconds;
                        const _slicedToArray = result;
                        react.useRef(null);
                        if (cResult[26] === bounty.id) {
                          class F {
                            constructor() {
                              return BountyStore.isBountyCompleted(bounty.id);
                            }
                          }
                          if (cResult[29] === bounty.id) {
                            class F {
                              constructor() {
                                return BountyStore.isBountyCompleted(bounty.id);
                              }
                            }
                          }
                          let obj2 = { bountyId: bounty.id, sourceQuestContent, rewardDurationMs: result, wasPreloaded: false, verticalScrollingPosition: null, isActive: true };
                          cResult[29] = bounty.id;
                          cResult[30] = result;
                          cResult[31] = sourceQuestContent;
                          cResult[32] = obj2;
                        }
                        const tmp29 = _asyncToGenerator;
                        let closure_0 = _asyncToGenerator(async (arg0, value) => {
                          let obj5;
                          if (c5 === 2) {
                            c5 = 3;
                            throw new TypeError("Generator functions may not be called on executing generators");
                          } else if (tmp3 === 3) {
                            if (arg0 === 1) {
                              throw value;
                            } else if (arg0 === 2) {
                              const obj3 = { value, done: true };
                              return obj3;
                            } else {
                              return { value: "IconComponent", done: null };
                            }
                          } else {
                            let c3;
                            try {
                              let closure_1;
                              let c0;
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
                                  closure_0 = tmp4;
                                  closure_1 = undefined;
                                  c0 = false;
                                  c3 = 1;
                                  c4 = 2;
                                  c5 = 1;
                                  const obj7 = { value: obj5.claimBountyReward(closure_0.id, closure_1), done: false };
                                  obj5 = closure_0(dismissVideoEndAppStoreOverlay[19]);
                                  return obj7;
                                }
                              } else {
                                if (1 === c4) {
                                  c3 = 0;
                                  closure_1 = closure_2;
                                  const obj2 = closure_0(dismissVideoEndAppStoreOverlay[20]);
                                  result = obj2.openBountyRewardClaimErrorToast(closure_1);
                                } else if (arg0 === 1) {
                                  c5 = 3;
                                  throw value;
                                } else if (arg0 === 2) {
                                  c3 = 0;
                                  c5 = 3;
                                  const obj = { value, done: true };
                                  return obj;
                                } else {
                                  c0 = true;
                                  c3 = 0;
                                }
                                let hapticFeedbackOnRewardEarnedEnabled = c0;
                                if (hapticFeedbackOnRewardEarnedEnabled) {
                                  const BountiesMobileQuestBarExperiment = closure_0(dismissVideoEndAppStoreOverlay[21]).BountiesMobileQuestBarExperiment;
                                  const obj8 = { location: constants.VIDEO_MODAL_MOBILE };
                                  hapticFeedbackOnRewardEarnedEnabled = BountiesMobileQuestBarExperiment.getConfig(obj8).hapticFeedbackOnRewardEarnedEnabled;
                                }
                                if (hapticFeedbackOnRewardEarnedEnabled) {
                                  const obj4 = closure_0(dismissVideoEndAppStoreOverlay[22]);
                                  const result1 = obj4.triggerHapticFeedback(closure_0(dismissVideoEndAppStoreOverlay[22]).HapticFeedbackTypes.IMPACT_MEDIUM);
                                }
                                c5 = 3;
                                return { value: "IconComponent", done: null };
                              }
                            } catch (tmp29) {
                              closure_2 = tmp29;
                              if (0 === c3) {
                                c5 = 3;
                                throw tmp29;
                              } else {
                                c4 = 1;
                              }
                            }
                          }
                        });
                        const fn = function() {
                          return closure_0(...arguments);
                        };
                        cResult[26] = bounty.id;
                        cResult[27] = sourceQuestContent;
                        cResult[28] = fn;
                      }
                    }
                  }
                }
              }
              const bottomContainer = tmp4.bottomContainer;
              if (size.isFullWidth) {
                class F {
                  constructor() {
                    return BountyStore.isBountyCompleted(bounty.id);
                  }
                }
                tmp16[0] = bottomContainer;
                tmp16[1] = tmp4.bottomContainerFullWidth;
              } else {
                class F {
                  constructor() {
                    return BountyStore.isBountyCompleted(bounty.id);
                  }
                }
                tmp15[0] = bottomContainer;
                tmp15[1] = tmp4.bottomContainerNotFullWidth;
                let obj3 = { left: null, width: null };
                ({ left: obj4.left, width: obj4.width } = size);
                tmp15[2] = obj3;
              }
              cResult[14] = tmp4.bottomContainer;
              cResult[15] = tmp4.bottomContainerFullWidth;
              cResult[16] = tmp4.bottomContainerNotFullWidth;
              cResult[17] = size.isFullWidth;
              cResult[18] = size.left;
              cResult[19] = size.width;
              cResult[20] = tmp15;
            }
            const items1 = [tmp4.closeButton, tmp12];
            cResult[11] = tmp4.closeButton;
            cResult[12] = tmp12;
            cResult[13] = items1;
          }
          const rect = { top: sum, left: diff1 };
          cResult[8] = sum;
          cResult[9] = diff1;
          cResult[10] = rect;
          tmp12 = rect;
        }
        const items2 = [tmp4.videoWrapper, tmp5];
        let num = 5;
        cResult[5] = tmp4.videoWrapper;
        cResult[6] = tmp5;
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
  tmp5 = size1;
}) : ((bounty) => {
  let BountyVideo;
  let handleBufferAnalytics;
  let handleLoadStartAnalytics;
  let handlePaused;
  let handleReadyForDisplayAnalytics;
  let handleResumed;
  let handleVideoEnd;
  let handleVideoEndAnalytics;
  let handleVideoEndWithAppStore;
  let handleVideoErrorAnalytics;
  let handleVideoLoopedAnalytics;
  let handleVideoPaused;
  let handleVideoPausedAnalytics;
  let handleVideoProgress;
  let handleVideoProgressAnalytics;
  let handleVideoResumed;
  let handleVideoResumedAnalytics;
  let handleVideoTracksAnalytics;
  let isCtaVisible;
  let isEndCardVisible;
  let normalizedProgress;
  let obj11;
  let rewardRemainingSeconds;
  let rewardTotalSeconds;
  let shouldRepeatVideo;
  let showEndCard;
  let styles;
  let tmp22;
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  let dismissVideoEndAppStoreOverlay = bounty.dismissVideoEndAppStoreOverlay;
  react = undefined;
  isEndCardVisible = undefined;
  let maxVideoProgressSeconds;
  const videoEndPeekScale = bounty.videoEndPeekScale;
  let tmp = closure_20();
  let closure_3 = tmp;
  const tmp2 = closure_19();
  _asyncToGenerator = tmp2;
  let items = [tmp.videoWrapper, tmp2];
  let items1 = [tmp.closeButton, , , ];
  ({ top: arr2[1], left: arr2[2], width: arr2[3] } = tmp2);
  const memo = react.useMemo(() => {
    const items = [closure_3.videoWrapper, ];
    size = { top: styles.top, left: styles.left, width: styles.width, height: styles.height };
    items[1] = size;
    return items;
  }, items);
  const items2 = [, , , , , ];
  ({ bottomContainer: arr3[0], bottomContainerFullWidth: arr3[1], bottomContainerNotFullWidth: arr3[2] } = tmp);
  ({ isFullWidth: arr3[3], left: arr3[4], width: arr3[5] } = tmp2);
  const memo1 = react.useMemo(() => {
    let diff;
    const items = [closure_3.closeButton, ];
    const rect = { top: styles.top + nativeDefault.space.PX_8, left: diff - nativeDefault.space.PX_8 };
    const sum = styles.left + styles.width;
    diff = sum - nativeDefault.space.PX_32;
    items[1] = rect;
    return items;
  }, items1);
  const memo2 = react.useMemo(() => {
    let items1;
    const bottomContainer = closure_3.bottomContainer;
    const tmp = styles;
    if (styles.isFullWidth) {
      const items = [bottomContainer, closure_3.bottomContainerFullWidth];
      items1 = items;
    } else {
      items1 = [bottomContainer, closure_3.bottomContainerNotFullWidth, ];
      const obj = { left: null, width: null };
      ({ left: obj.left, width: obj.width } = tmp);
      items1[2] = obj;
    }
    return items1;
  }, items2);
  let obj = bounty(dismissVideoEndAppStoreOverlay[16]);
  const items3 = [maxVideoProgressSeconds];
  const stateFromStores = obj.useStateFromStores(items3, () => BountyStore.isBountyCompleted(bounty.id));
  let obj2 = bounty(dismissVideoEndAppStoreOverlay[17]);
  const balance = obj2.useFetchVirtualCurrencyBalance().balance;
  let obj3 = bounty(dismissVideoEndAppStoreOverlay[18]);
  const bountyVideoEndMode = obj3.getBountyVideoEndMode(bounty);
  let result = 1000 * bounty.rewardTimerSeconds;
  react = result;
  const ref = react.useRef(null);
  const items4 = [bounty.id, sourceQuestContent];
  const callback = react.useCallback(_asyncToGenerator(async (arg0, value) => {
    let closure_0;
    let closure_2;
    let obj5;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let closure_1;
        let c0;
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
            closure_1 = tmp;
            bounty = tmp4;
            c0 = false;
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj7 = { value: obj5.claimBountyReward(bounty.id, sourceQuestContent), done: false };
            obj5 = bounty(dismissVideoEndAppStoreOverlay[19]);
            return obj7;
          }
        } else {
          if (1 === c4) {
            c3 = 0;
            closure_1 = dismissVideoEndAppStoreOverlay;
            const obj2 = bounty(dismissVideoEndAppStoreOverlay[20]);
            const result = obj2.openBountyRewardClaimErrorToast(closure_1);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c0 = true;
            c3 = 0;
          }
          let hapticFeedbackOnRewardEarnedEnabled = c0;
          if (hapticFeedbackOnRewardEarnedEnabled) {
            const BountiesMobileQuestBarExperiment = bounty(dismissVideoEndAppStoreOverlay[21]).BountiesMobileQuestBarExperiment;
            const obj8 = { location: constants.VIDEO_MODAL_MOBILE };
            hapticFeedbackOnRewardEarnedEnabled = BountiesMobileQuestBarExperiment.getConfig(obj8).hapticFeedbackOnRewardEarnedEnabled;
          }
          if (hapticFeedbackOnRewardEarnedEnabled) {
            const obj4 = bounty(dismissVideoEndAppStoreOverlay[22]);
            const result1 = obj4.triggerHapticFeedback(bounty(dismissVideoEndAppStoreOverlay[22]).HapticFeedbackTypes.IMPACT_MEDIUM);
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp29) {
        dismissVideoEndAppStoreOverlay = tmp29;
        if (0 === c3) {
          c5 = 3;
          throw tmp29;
        } else {
          c4 = 1;
        }
      }
    }
  }), items4);
  let obj4 = bounty(dismissVideoEndAppStoreOverlay[23]);
  let obj5 = { bountyId: bounty.id, sourceQuestContent, rewardDurationMs: result, wasPreloaded: false, verticalScrollingPosition: null, isActive: true };
  const bountiesModalVideoAnalytics = obj4.useBountiesModalVideoAnalytics(obj5);
  ({ handleVideoProgressAnalytics, handleVideoEndAnalytics, handleVideoLoopedAnalytics, handleVideoPausedAnalytics, handleVideoResumedAnalytics, handleVideoErrorAnalytics, handleLoadStartAnalytics, handleVideoTracksAnalytics, handleReadyForDisplayAnalytics, handleBufferAnalytics } = bountiesModalVideoAnalytics);
  let obj6 = bounty(dismissVideoEndAppStoreOverlay[24]);
  const bountiesModalTiming = obj6.useBountiesModalTiming({ endMode: bountyVideoEndMode, rewardDurationMs: result, isCompleted: stateFromStores, onRewardEarned: callback, onVideoProgress: handleVideoProgressAnalytics, onVideoEnd: handleVideoEndAnalytics, onVideoLooped: handleVideoLoopedAnalytics, onVideoPaused: handleVideoPausedAnalytics, onVideoResumed: handleVideoResumedAnalytics, playerRef: ref });
  ({ isCtaVisible, isEndCardVisible } = bountiesModalTiming);
  maxVideoProgressSeconds = bountiesModalTiming.maxVideoProgressSeconds;
  const videoDuration = bountiesModalTiming.videoDuration;
  ({ handleVideoEnd, handleVideoProgress, handleVideoPaused, handleVideoResumed, showEndCard, rewardRemainingSeconds, rewardTotalSeconds, normalizedProgress } = bountiesModalTiming);
  let obj7 = bounty(dismissVideoEndAppStoreOverlay[18]);
  const bountyAppStoreOverlayPlayback = obj7.useBountyAppStoreOverlayPlayback({ bounty, sourceQuestContent, isActive: true, endMode: bountyVideoEndMode, playerRef: ref, handleVideoEnd, handleVideoPaused, handleVideoResumed, showEndCard });
  const isVideoEndAppStoreOverlayVisible = bountyAppStoreOverlayPlayback.isVideoEndAppStoreOverlayVisible;
  const items5 = [bounty.id, dismissVideoEndAppStoreOverlay, maxVideoProgressSeconds, result, sourceQuestContent, videoDuration];
  ({ shouldRepeatVideo, handlePaused, handleResumed, handleVideoEndWithAppStore } = bountyAppStoreOverlayPlayback);
  const items6 = [bounty.id, dismissVideoEndAppStoreOverlay, maxVideoProgressSeconds, result, sourceQuestContent, videoDuration];
  const callback1 = react.useCallback(() => {
    let formatVideoProgressRatio;
    let num;
    let obj2;
    let obj3;
    dismissVideoEndAppStoreOverlay();
    const tmp3 = AnalyticsActions;
    const trackAdContentEvent = tmp3.trackAdContentEvent;
    const obj = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: unpackModuleId.AD_VIDEO_MODAL_CLOSED, properties: obj2, sourceQuestContent };
    obj2 = { content_name: obj3.getQuestContentName(QuestContent.QuestContent.VIDEO_MODAL_MOBILE), content_id: QuestContent.QuestContent.VIDEO_MODAL_MOBILE, video_progress: formatVideoProgressRatio(maxVideoProgressSeconds, num), threshold_met: 1000 * maxVideoProgressSeconds >= c5, reward_timer_seconds: c5 / 1000 };
    num = videoDuration;
    obj3 = AnalyticsTypes;
    formatVideoProgressRatio = VideoQuestUtils.formatVideoProgressRatio;
    VideoQuestUtils;
    if (videoDuration == null) {
      num = 0;
    }
    trackAdContentEvent(obj);
    const obj4 = BountiesModalActionCreatorsDefault;
    obj4.hideModal();
  }, items5);
  let obj8 = { style: memo, children: tmp20(BountyVideo, size) };
  const callback2 = react.useCallback(() => {
    let formatVideoProgressRatio;
    let num;
    let obj2;
    let obj3;
    let tmp5;
    dismissVideoEndAppStoreOverlay();
    const tmp3 = AnalyticsActions;
    const trackAdContentEvent = tmp3.trackAdContentEvent;
    const obj = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: unpackModuleId.AD_VIDEO_MODAL_CLOSED, properties: obj2, sourceQuestContent };
    obj2 = { content_name: obj3.getQuestContentName(QuestContent.QuestContent.VIDEO_MODAL_END_CARD), content_id: QuestContent.QuestContent.VIDEO_MODAL_END_CARD, video_progress: formatVideoProgressRatio(tmp5, num), threshold_met: true, reward_timer_seconds: c5 / 1000 };
    num = videoDuration;
    obj3 = AnalyticsTypes;
    formatVideoProgressRatio = VideoQuestUtils.formatVideoProgressRatio;
    VideoQuestUtils;
    tmp5 = maxVideoProgressSeconds;
    if (videoDuration == null) {
      num = 0;
    }
    trackAdContentEvent(obj);
    const obj4 = BountiesModalActionCreatorsDefault;
    obj4.hideModal();
  }, items6);
  size = {
    bounty,
    sourceQuestContent,
    isCompleted: stateFromStores,
    isCtaVisible,
    isEndCardVisible,
    isProgressBarVisible: !isEndCardVisible && !isVideoEndAppStoreOverlayVisible,
    orbsBalance: balance,
    handleVideoEnd: handleVideoEndWithAppStore,
    handleVideoProgress,
    handleVideoPaused: handlePaused,
    handleVideoResumed: handleResumed,
    handleVideoError: handleVideoErrorAnalytics,
    onLoadStart: handleLoadStartAnalytics,
    onBuffer: handleBufferAnalytics,
    onFirstFrame: handleReadyForDisplayAnalytics,
    onVideoTracks: handleVideoTracksAnalytics,
    rewardRemainingSeconds,
    rewardTotalSeconds,
    normalizedProgress,
    repeat: shouldRepeatVideo,
    initialProgress,
    isActive: true,
    playerRef: ref,
    width: null,
    height: null,
    videoEndPeekScale,
    renderEndCard() {
      let visible;
      let obj = {
        adContentId: bounty.id,
        adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
        questContent: QuestContent.QuestContent.VIDEO_MODAL_END_CARD,
        sourceQuestContent,
        overrideVisibility: isEndCardVisible,
        children() {
          const obj = { bounty, visible, sourceQuestContent };
          return closure_2_14(sourceQuestContent(dismissVideoEndAppStoreOverlay[32]), obj);
        }
      };
      const QuestContentImpressionTrackerNative = QuestContentImpressionTracker.QuestContentImpressionTrackerNative;
      return authStore2(QuestContentImpressionTrackerNative, obj);
    }
  };
  BountyVideo = bounty(dismissVideoEndAppStoreOverlay[33]).BountyVideo;
  const tmp18 = closure_16;
  const tmp19 = closure_15;
  const tmp6 = bounty;
  if (isCtaVisible) {
    isCtaVisible = !isVideoEndAppStoreOverlayVisible;
  }
  ({ width: obj9.width, height: obj9.height } = tmp2);
  const items7 = [tmp20(tmp21, obj8), , ];
  const obj10 = { style: memo1, children: closure_14(sourceQuestContent(dismissVideoEndAppStoreOverlay[34]), { onPress: callback1 }) };
  items7[1] = closure_14(isEndCardVisible, obj10);
  let rect = { left: tmp2.isFullWidth, right: tmp2.isFullWidth, bottom: true, style: memo2, pointerEvents: "box-none", children: tmp20(tmp22, obj11) };
  const SafeAreaPaddingView = tmp6(tmp7[36]).SafeAreaPaddingView;
  obj11 = { bounty, visible: isEndCardVisible, sourceQuestContent, onClose: callback2 };
  tmp22 = sourceQuestContent(dismissVideoEndAppStoreOverlay[35]);
  if (isEndCardVisible) {
    isEndCardVisible = !isVideoEndAppStoreOverlayVisible;
  }
  const obj12 = { children: items7 };
  items7[2] = closure_14(SafeAreaPaddingView, rect);
  return tmp18(tmp19, obj12);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let ref;
  let ref2;
  let sharedValue;
  let sharedValue1;
  let sourceQuestContent;
  let tmp6;
  let obj = sharedValue(576);
  const cResult = obj.c(31);
  ({ bounty, sourceQuestContent } = arg0);
  const height = sharedValue1(1485)().height;
  let tmp2 = closure_19();
  let obj2 = sharedValue(4570);
  sharedValue = obj2.useSharedValue(1);
  const obj3 = sharedValue(4570);
  sharedValue1 = obj3.useSharedValue(0);
  [tmp6, dependencyMap] = bounty(react.useState(null), 2);
  const tmp5 = bounty(react.useState(null), 2);
  bounty = react.useRef(null);
  _asyncToGenerator = react.useRef(0);
  if (cResult[0] === tmp2.height) {
    if (cResult[1] === tmp2.top) {
      let tmp8;
      if (cResult[2] === height) {
        tmp8 = cResult[3];
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
              trackOverlayEvent = current.trackOverlayEvent;
              tmp = closure_0;
              tmp2 = closure_2;
              tmp3 = globalThis;
              _Date = Date;
              tmp4 = closure_4;
              tmp5 = current;
              tmp6 = QUEST_APP_STORE_OVERLAY_CLOSED;
              tmp7 = appId;
              trackOverlayEventResult = trackOverlayEvent(QUEST_APP_STORE_OVERLAY_CLOSED, appId, closure_0(closure_2[25]).AppStoreOverlayVariant.CUSTOM, Date.now() - closure_4.current);
              obj = closure_0(closure_2[40]);
              result = obj.clearAppStoreOverlayOpen();
              ComponentDispatch = closure_0(closure_2[41]).ComponentDispatch;
              tmp10 = ComponentActions;
              dispatchResult = ComponentDispatch.dispatch(ComponentActions.QUEST_APP_STORE_OVERLAY_FINISHED);
              tmp12 = closure_2;
              tmp13 = closure_2(null);
              tmp14 = closure_0;
              set = closure_0.set;
              obj2 = closure_0(closure_2[38]);
              num = 1;
              result1 = set(obj2.withTiming(1, closure_0(closure_2[39]).timingStandard));
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
            set = closure_1.set;
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[38]);
            result = set(obj.withTiming(1, closure_0(closure_2[39]).timingSlow));
            appId = arg0.metadata.appId;
            trackOverlayEvent = arg0.trackOverlayEvent;
            QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED = AnalyticEvents.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED;
            trackOverlayEventResult = trackOverlayEvent(QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId, tmp2(tmp3[25]).AppStoreOverlayVariant.CUSTOM);
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
              trackOverlayEvent = current.trackOverlayEvent;
              tmp = closure_0;
              tmp2 = closure_2;
              tmp3 = globalThis;
              _Date = Date;
              tmp4 = closure_4;
              tmp5 = current;
              tmp6 = QUEST_APP_STORE_OVERLAY_CLOSED;
              tmp7 = appId;
              trackOverlayEventResult = trackOverlayEvent(QUEST_APP_STORE_OVERLAY_CLOSED, appId, closure_0(closure_2[25]).AppStoreOverlayVariant.CUSTOM, Date.now() - closure_4.current);
              obj = closure_0(closure_2[40]);
              result = obj.clearAppStoreOverlayOpen();
              ComponentDispatch = closure_0(closure_2[41]).ComponentDispatch;
              tmp10 = ComponentActions;
              dispatchResult = ComponentDispatch.dispatch(ComponentActions.QUEST_APP_STORE_OVERLAY_FINISHED);
              tmp12 = closure_2;
              tmp13 = closure_2(null);
              tmp14 = closure_0;
              set = closure_0.set;
              obj2 = closure_0(closure_2[38]);
              num = 1;
              result1 = set(obj2.withTiming(1, closure_0(closure_2[39]).timingStandard));
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
            set = closure_1.set;
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[38]);
            result = set(obj.withTiming(1, closure_0(closure_2[39]).timingSlow));
            appId = arg0.metadata.appId;
            trackOverlayEvent = arg0.trackOverlayEvent;
            QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED = AnalyticEvents.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED;
            trackOverlayEventResult = trackOverlayEvent(QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId, tmp2(tmp3[25]).AppStoreOverlayVariant.CUSTOM);
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
            set = closure_1.set;
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[38]);
            result = set(obj.withTiming(1, closure_0(closure_2[39]).timingSlow));
            appId = arg0.metadata.appId;
            trackOverlayEvent = arg0.trackOverlayEvent;
            QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED = AnalyticEvents.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED;
            trackOverlayEventResult = trackOverlayEvent(QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId, tmp2(tmp3[25]).AppStoreOverlayVariant.CUSTOM);
            return;
          }
        }
        if (cResult[11] === tmp14) {
          class Q {
            constructor(arg0) {
              closure_4.current = Date.now();
              closure_3.current = arg0;
              tmp = closure_2(arg0);
              set = closure_1.set;
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj = closure_0(closure_2[38]);
              result = set(obj.withTiming(1, closure_0(closure_2[39]).timingSlow));
              appId = arg0.metadata.appId;
              trackOverlayEvent = arg0.trackOverlayEvent;
              QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED = AnalyticEvents.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED;
              trackOverlayEventResult = trackOverlayEvent(QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId, tmp2(tmp3[25]).AppStoreOverlayVariant.CUSTOM);
              return;
            }
          }
        }
        const obj4 = { videoEndPeekTargetScale: tmp8, videoEndPeekScale: null, isVideoEndAppStoreOverlayVisible: null != tmp6, showVideoEndAppStoreOverlay: tmp13, dismissVideoEndAppStoreOverlay: tmp14 };
        class F {
          constructor() {
            current = closure_3.current;
            if (null != current) {
              closure_3.current = null;
              tmp18 = AnalyticEvents;
              QUEST_APP_STORE_OVERLAY_CLOSED = AnalyticEvents.QUEST_APP_STORE_OVERLAY_CLOSED;
              appId = current.metadata.appId;
              trackOverlayEvent = current.trackOverlayEvent;
              tmp = closure_0;
              tmp2 = closure_2;
              tmp3 = globalThis;
              _Date = Date;
              tmp4 = closure_4;
              tmp5 = current;
              tmp6 = QUEST_APP_STORE_OVERLAY_CLOSED;
              tmp7 = appId;
              trackOverlayEventResult = trackOverlayEvent(QUEST_APP_STORE_OVERLAY_CLOSED, appId, closure_0(closure_2[25]).AppStoreOverlayVariant.CUSTOM, Date.now() - closure_4.current);
              obj = closure_0(closure_2[40]);
              result = obj.clearAppStoreOverlayOpen();
              ComponentDispatch = closure_0(closure_2[41]).ComponentDispatch;
              tmp10 = ComponentActions;
              dispatchResult = ComponentDispatch.dispatch(ComponentActions.QUEST_APP_STORE_OVERLAY_FINISHED);
              tmp12 = closure_2;
              tmp13 = closure_2(null);
              tmp14 = closure_0;
              set = closure_0.set;
              obj2 = closure_0(closure_2[38]);
              num = 1;
              result1 = set(obj2.withTiming(1, closure_0(closure_2[39]).timingStandard));
              tmp16 = closure_1;
              num2 = 0;
              result2 = closure_1.set(0);
            }
            return;
          }
        }
        cResult[11] = tmp14;
        cResult[12] = null != tmp6;
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
            trackOverlayEvent = current.trackOverlayEvent;
            tmp = closure_0;
            tmp2 = closure_2;
            tmp3 = globalThis;
            _Date = Date;
            tmp4 = closure_4;
            tmp5 = current;
            tmp6 = QUEST_APP_STORE_OVERLAY_CLOSED;
            tmp7 = appId;
            trackOverlayEventResult = trackOverlayEvent(QUEST_APP_STORE_OVERLAY_CLOSED, appId, closure_0(closure_2[25]).AppStoreOverlayVariant.CUSTOM, Date.now() - closure_4.current);
            obj = closure_0(closure_2[40]);
            result = obj.clearAppStoreOverlayOpen();
            ComponentDispatch = closure_0(closure_2[41]).ComponentDispatch;
            tmp10 = ComponentActions;
            dispatchResult = ComponentDispatch.dispatch(ComponentActions.QUEST_APP_STORE_OVERLAY_FINISHED);
            tmp12 = closure_2;
            tmp13 = closure_2(null);
            tmp14 = closure_0;
            set = closure_0.set;
            obj2 = closure_0(closure_2[38]);
            num = 1;
            result1 = set(obj2.withTiming(1, closure_0(closure_2[39]).timingStandard));
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
  const obj5 = { windowHeight: height, videoTop: tmp2.top, videoHeight: tmp2.height };
  const tmp9 = closure_10(obj5);
  ({ height: tmp[0], top: tmp[1] } = tmp2);
  cResult[2] = height;
  cResult[3] = tmp9;
  tmp8 = tmp9;
}) : ((arg0) => {
  let _undefined;
  let c4;
  let items5;
  let ref;
  let sourceQuestContent;
  let styles;
  let tmp7;
  importDefault = undefined;
  let sharedValue;
  c4 = undefined;
  react = undefined;
  ({ bounty, sourceQuestContent } = arg0);
  let tmp2 = sharedValue;
  const height = require("useWindowDimensions")().height;
  const tmp3 = closure_19();
  const tmp = importDefault;
  importDefault = tmp3;
  let obj = height(sharedValue[37]);
  sharedValue = obj.useSharedValue(1);
  let obj2 = height(sharedValue[37]);
  const sharedValue1 = obj2.useSharedValue(0);
  [tmp7, c4] = sharedValue1(react.useState(null), 2);
  const tmp6 = sharedValue1(react.useState(null), 2);
  react = react.useRef(null);
  const ref2 = react.useRef(0);
  const isVideoEndAppStoreOverlayVisible = tmp8;
  const items = [height, , ];
  ({ top: arr[1], height: arr[2] } = tmp3);
  const memo = react.useMemo(() => {
    const obj = { windowHeight: height, videoTop: styles.top, videoHeight: styles.height };
    return authStore(obj);
  }, items);
  const items1 = [height];
  const items2 = [sharedValue1];
  const memo1 = react.useMemo(() => React4(height), items1);
  const showVideoEndAppStoreOverlay = react.useCallback((current) => {
    ref2.current = Date.now();
    ref.current = current;
    _undefined(current);
    set = sharedValue1.set;
    const obj = timing;
    const result = set(obj.withTiming(1, timingPresets.timingSlow));
    const appId = current.metadata.appId;
    const trackOverlayEvent = current.trackOverlayEvent;
    const QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED = unpackModuleId.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED;
    trackOverlayEvent(QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId, AnalyticsActions.AppStoreOverlayVariant.CUSTOM);
  }, items2);
  const items3 = [sharedValue1, sharedValue];
  const callback1 = react.useCallback(() => {
    const current = ref.current;
    if (null != current) {
      ref.current = null;
      const QUEST_APP_STORE_OVERLAY_CLOSED = unpackModuleId.QUEST_APP_STORE_OVERLAY_CLOSED;
      const appId = current.metadata.appId;
      const trackOverlayEvent = current.trackOverlayEvent;
      const _Date = Date;
      trackOverlayEvent(QUEST_APP_STORE_OVERLAY_CLOSED, appId, AnalyticsActions.AppStoreOverlayVariant.CUSTOM, Date.now() - ref2.current);
      const obj = AppStoreOverlayTelemetryManager;
      const result = obj.clearAppStoreOverlayOpen();
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(constants.QUEST_APP_STORE_OVERLAY_FINISHED);
      _undefined(null);
      set = sharedValue.set;
      const obj2 = timing;
      const result1 = set(obj2.withTiming(1, timingPresets.timingStandard));
      const result2 = sharedValue1.set(0);
    }
  }, items3);
  const items4 = [callback1, null != tmp7, showVideoEndAppStoreOverlay, sharedValue, memo];
  const memo2 = react.useMemo(() => ({ videoEndPeekTargetScale: memo, videoEndPeekScale: sharedValue, isVideoEndAppStoreOverlayVisible, showVideoEndAppStoreOverlay, dismissVideoEndAppStoreOverlay: callback1 }), items4);
  const obj3 = { value: memo2, children: items5 };
  const BountyVideoEndAppStoreProvider = height(sharedValue[43]).BountyVideoEndAppStoreProvider;
  items5 = [closure_14(closure_21, { bounty, sourceQuestContent, videoEndPeekScale: sharedValue, dismissVideoEndAppStoreOverlay: callback1 }), ];
  let tmp15Result = null;
  const tmp14 = closure_16;
  const tmp15 = closure_14;
  if (null != tmp7) {
    const obj4 = { metadata: tmp7.metadata, sheetHeight: memo1, revealProgress: sharedValue1, onDismiss: callback1, onInstallPress: tmp7.onInstallPress };
    tmp15Result = tmp15(tmp(tmp2[42]), obj4);
  }
  items5[1] = tmp15Result;
  return tmp14(BountyVideoEndAppStoreProvider, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((bountyId) => {
  let BillableAdPlacementImpressionTrackerNative;
  let obj4;
  let tmp = bountyId;
  let obj = bountyId(bounty[11]);
  const cResult = obj.c(16);
  bountyId = bountyId.bountyId;
  const sourceQuestContent = bountyId.sourceQuestContent;
  bounty = bountyId.bounty;
  if (cResult[0] === bountyId) {
    if (cResult[1] === bounty) {
      let tmp4;
      if (cResult[2] === sourceQuestContent) {
        tmp4 = cResult[3];
      }
      let obj2 = react;
      bounty = bounty(react.useState(tmp4), 1)[0];
      let closure_4 = tmp8;
      if (cResult[4] === bountyId) {
        if (cResult[5] === null == bounty) {
          let tmp9;
          let tmp10;
          if (cResult[6] === sourceQuestContent) {
            tmp9 = cResult[7];
            tmp10 = cResult[8];
          }
          const effect = obj2.useEffect(tmp9, tmp10);
          if (null != bounty) {
            if (cResult[9] === bounty) {
              let tmp13;
              if (cResult[10] === sourceQuestContent) {
                tmp13 = cResult[11];
              }
              class E {
                constructor() {
                  const obj = { bounty, sourceQuestContent };
                  return authStore2(closure_22, obj);
                }
              }
              let obj3 = { theme: ThemeTypes.DARK, children: closure_14(BillableAdPlacementImpressionTrackerNative, obj4) };
              const ThemeContextProvider = tmp(tmp2[45]).ThemeContextProvider;
              obj4 = { adContentId: bounty.id, adCreativeType: tmp(bounty[26]).AdCreativeType.BOUNTY, questContent: tmp(bounty[28]).QuestContent.VIDEO_MODAL_MOBILE, sourceQuestContent, overrideVisibility: true, children: tmp13 };
              BillableAdPlacementImpressionTrackerNative = tmp(tmp2[31]).BillableAdPlacementImpressionTrackerNative;
              cResult[12] = bounty.id;
              cResult[13] = sourceQuestContent;
              cResult[14] = tmp13;
              cResult[15] = closure_14(ThemeContextProvider, obj3);
              const tmp17 = closure_14(ThemeContextProvider, obj3);
            }
            class E {
              constructor() {
                const obj = { bounty, sourceQuestContent };
                return authStore2(closure_22, obj);
              }
            }
            cResult[9] = bounty;
            cResult[10] = sourceQuestContent;
            cResult[11] = E;
            tmp13 = E;
          }
          return null;
        }
      }
      const fn2 = function p() {
        let obj2;
        const tmp = closure_4;
        if (tmp) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const captureQuestsException = QuestDataUtils.captureQuestsException;
          QuestDataUtils;
          const error = new Error("Bounty unexpectedly missing when opening the Bounties modal");
          const obj = { tags: { source: "BountiesModalContent" }, extra: obj2 };
          obj2 = { bountyId, sourceQuestContent };
          const result = captureQuestsException(error, obj);
          const obj3 = BountiesModalActionCreatorsDefault;
          obj3.hideModal();
        }
      };
      const items = [tmp8, bountyId, sourceQuestContent];
      cResult[4] = bountyId;
      cResult[5] = null == bounty;
      cResult[6] = sourceQuestContent;
      cResult[7] = fn2;
      cResult[8] = items;
      tmp10 = items;
      tmp9 = fn2;
    }
  }
  const fn = function s() {
    if (null != bounty) {
      if (bounty.id === bountyId) {
        return bounty;
      }
    }
    const obj = QuestDataUtils;
    const questPlacementFromQuestContent = obj.getQuestPlacementFromQuestContent(sourceQuestContent);
    let bountyByPlacementAndId = null;
    if (null != questPlacementFromQuestContent) {
      const tmp3Result = QuestDataUtils;
      bountyByPlacementAndId = tmp3Result.getBountyByPlacementAndId(questPlacementFromQuestContent, bountyId);
    }
    return bountyByPlacementAndId;
  };
  cResult[0] = bountyId;
  cResult[1] = bounty;
  cResult[2] = sourceQuestContent;
  cResult[3] = fn;
  tmp4 = fn;
}) : ((bountyId) => {
  let BillableAdPlacementImpressionTrackerNative;
  let obj2;
  bountyId = bountyId.bountyId;
  const sourceQuestContent = bountyId.sourceQuestContent;
  bounty = undefined;
  bounty = bounty(react.useState(() => {
    if (null != bounty) {
      if (bounty.id === bountyId) {
        return bounty;
      }
    }
    const obj = QuestDataUtils;
    const questPlacementFromQuestContent = obj.getQuestPlacementFromQuestContent(sourceQuestContent);
    let bountyByPlacementAndId = null;
    if (null != questPlacementFromQuestContent) {
      const tmp3Result = QuestDataUtils;
      bountyByPlacementAndId = tmp3Result.getBountyByPlacementAndId(questPlacementFromQuestContent, bountyId);
    }
    return bountyByPlacementAndId;
  }), 1)[0];
  let tmp2 = null;
  let tmp3 = null == bounty;
  let closure_4 = tmp3;
  const items = [tmp3, bountyId, sourceQuestContent];
  const effect = react.useEffect(function() {
    let obj2;
    const tmp = closure_4;
    if (tmp) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const captureQuestsException = QuestDataUtils.captureQuestsException;
      QuestDataUtils;
      const error = new Error("Bounty unexpectedly missing when opening the Bounties modal");
      const obj = { tags: { source: "BountiesModalContent" }, extra: obj2 };
      obj2 = { bountyId, sourceQuestContent };
      const result = captureQuestsException(error, obj);
      const obj3 = BountiesModalActionCreatorsDefault;
      obj3.hideModal();
    }
  }, items);
  if (null != bounty) {
    let obj = { theme: ThemeTypes.DARK, children: closure_14(BillableAdPlacementImpressionTrackerNative, obj2) };
    const ThemeContextProvider = bountyId(bounty[45]).ThemeContextProvider;
    obj2 = {
      adContentId: bounty.id,
      adCreativeType: bountyId(bounty[26]).AdCreativeType.BOUNTY,
      questContent: bountyId(bounty[28]).QuestContent.VIDEO_MODAL_MOBILE,
      sourceQuestContent,
      overrideVisibility: true,
      children() {
          const obj = { bounty, sourceQuestContent };
          return authStore2(closure_22, obj);
        }
    };
    BillableAdPlacementImpressionTrackerNative = bountyId(bounty[31]).BillableAdPlacementImpressionTrackerNative;
    tmp2 = closure_14(ThemeContextProvider, obj);
  }
  return tmp2;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalContent.tsx");

export default tmp5;
