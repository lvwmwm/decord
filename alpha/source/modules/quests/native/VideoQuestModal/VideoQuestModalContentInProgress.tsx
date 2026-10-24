// Module ID: 16473
// Function ID: 16474
// Name: VideoQuestModalContentInProgress
// Dependencies: [109, 32, 19, 17, 6710, 1098, 21, 683, 587, 16474, 4971, 558, 576, 1384, 9584, 5052, 5206, 1633, 16475, 16490, 5037, 7168, 16491, 16470, 16492, 5977, 6908, 5234, 16493, 5669, 5244, 9594, 7959, 1128, 9096, 10822, 7221, 9570, 14122, 16437, 8759, 5258, 16494, 10821, 16325, 16321, 16323, 14202, 9644, 16469, 5210, 16495, 2002, 9605, 7796, 9573, 9576, 6717, 7801, 6713, 8851, 16496, 9567, 16497, 6718, 2]

// Module 16473 (VideoQuestModalContentInProgress)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1098 */;
import asyncRequire from "asyncRequire" /* 2002 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5052 */;
import timing from "timing" /* 5206 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import LinearGradientDefault from "LinearGradient" /* 5258 */;
import QuestTypes from "QuestTypes" /* 6713 */;
import AdCreativeType from "AdCreativeType" /* 6717 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7801 */;
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 8759 */;
import showShareActionSheet2 from "showShareActionSheet" /* 8851 */;
import QuestUtils from "QuestUtils" /* 9567 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 9570 */;
import captureAdUserAction2 from "captureAdUserAction" /* 9573 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 9576 */;
import AssetUtils from "AssetUtils" /* 9584 */;
import MoreHorizontalIcon2 from "MoreHorizontalIcon" /* 9644 */;
import QuestProgressIndicatorDefault from "QuestProgressIndicator" /* 16474 */;
import QuestContextMenuDefault from "QuestContextMenu" /* 16493 */;
import VideoQuestModalHeaderDefault from "VideoQuestModalHeader" /* 16494 */;
import _objectWithoutProperties_mod from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import QuestConstants from "QuestConstants" /* 6710 */;
import Fragment from "Fragment" /* 21 */;
import module_683_mod from "module_683" /* 683 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let metroImportAll;
let obj2;
let tmp;
let unpackModuleId;
const intl5 = tmp(1128);
const native = tmp(5037);
const Text_Text = tmp(5234);
const components_Button_Button = tmp(5244);
const Stack_Stack = tmp(5977);
const Pressables = tmp(6908);
const common_SafeAreaView = tmp(7221);
const QuestCopyUtils = tmp(9594);
const ArrowSmallRightIcon = tmp(10821);
const VideoQuestUtils = tmp(14122);
const ShareIcon2 = tmp(14202);
const ClosedCaptionsIcon = tmp(16321);
const ClosedCaptionsOutlineIcon2 = tmp(16323);
const TranscriptOutlineIcon2 = tmp(16325);
const QuestDockGestureContext = tmp(16437);
const VideoQuestPlayer2 = tmp(16475);
let closure_3 = ["ref"];
let closure_4 = ["ref"];
let _objectWithoutProperties = _objectWithoutProperties_mod;
({ View: metroImportAll, StyleSheet: c9, ScrollView: c10 } = react_native);
({ DEFAULT_PORTRAIT_ASPECT_RATIO: unpackModuleId, QuestsExperimentLocations: closure_12 } = QuestConstants);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let c16 = 3000;
let c17 = 1000;
const start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
let module_683 = module_683_mod;
let items = [, ];
const importDefaultResultResult = module_683(nativeDefault.unsafe_rawColors.PLUM_23);
const alphaResult = importDefaultResultResult.alpha(0.4);
items[0] = alphaResult.hex();
module_683 = module_683_mod;
const importDefaultResult1Result = module_683(nativeDefault.unsafe_rawColors.PLUM_23);
const alphaResult1 = importDefaultResult1Result.alpha(0);
items[1] = alphaResult1.hex();
module_683 = module_683_mod;
let items1 = [, ];
const importDefaultResult2Result = module_683(nativeDefault.unsafe_rawColors.PLUM_23);
const alphaResult2 = importDefaultResult2Result.alpha(0);
items1[0] = alphaResult2.hex();
module_683 = module_683_mod;
const importDefaultResult3Result = module_683(nativeDefault.unsafe_rawColors.PLUM_23);
const alphaResult3 = importDefaultResult3Result.alpha(0.4);
items1[1] = alphaResult3.hex();
const contentInsets = { bottom: 158, top: 64, left: 16, right: 16 };
const contentInsets2 = { bottom: 16, left: 16, right: 16 };
let createStyles = createStyles_mod;
let closure_24 = createStyles.createStyles((arg0) => {
  let obj12;
  let obj13;
  let obj3;
  let obj8;
  let rect;
  let rect1;
  let str;
  const obj = { wrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, flex: 1 }, wrapperPortrait: obj3, videoLandscape: { width: "100%", position: "relative" }, videoLandscape9by16: { aspectRatio: 1.7777777777777777, flexShrink: 0 }, landscapeContentScroll: { flex: 1 }, landscapeContentScrollContent: { flexGrow: 1 }, videoLandscapeFullscreen: { flexGrow: 1, flexShrink: 1 }, videoWrapper: { borderRadius: nativeDefault.radii.lg, flexGrow: 0, flexShrink: 0, overflow: "hidden" }, videoWrapperLandscape: { flexGrow: 1, borderTopLeftRadius: nativeDefault.radii.none, borderTopRightRadius: nativeDefault.radii.none }, videoWrapperFullscreen: { borderRadius: nativeDefault.radii.none }, videoContentWrapper: { flexDirection: "column", pointerEvents: "box-none", flexGrow: 1, flexShrink: 0, justifyContent: "space-between", padding: nativeDefault.space.PX_16 }, videoContentWrapperLandscape: { padding: 0 }, videoContentWrapperPortrait: obj8, rewardContainer: { justifyContent: "center", flexGrow: 1, flexShrink: 0 }, rewardContentCentered: rect, modalBackground: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, questDetailsLandscape: { borderTopWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_24 }, questDetailsPrimary: { flexGrow: 0, flexShrink: 1 }, questDetailsSecondary: { flexGrow: 0, flexShrink: 0 }, footer: { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 }, closeButtonLandscape: rect1, gradientTop: obj12, gradientBottom: obj13, textShadow: { margin: -15, padding: 15, textShadowColor: nativeDefault.colors.BLACK, textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 15 }, viewRewardBtn: { marginRight: "auto" }, playerThumbnail: size, cloudsBackground: { zIndex: -1 }, questDetailsSubheader: { opacity: 0.6 } };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, flex: 1 });
  obj3 = { borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg, justifyContent: str };
  str = "center";
  const tmp3 = arg0;
  if (tmp3) {
    str = "flex-start";
  }
  ({ borderRadius: nativeDefault.radii.lg, flexGrow: 0, flexShrink: 0, overflow: "hidden" });
  ({ flexGrow: 1, borderTopLeftRadius: nativeDefault.radii.none, borderTopRightRadius: nativeDefault.radii.none });
  ({ borderRadius: nativeDefault.radii.none });
  ({ flexDirection: "column", pointerEvents: "box-none", flexGrow: 1, flexShrink: 0, justifyContent: "space-between", padding: nativeDefault.space.PX_16 });
  obj8 = {};
  const merged = Object.assign(React4.absoluteFillObject);
  rect = { position: "absolute", top: tmp(587).space.PX_16, left: tmp(587).space.PX_16, right: tmp(587).space.PX_16, bottom: tmp(587).space.PX_16, alignItems: "center", justifyContent: "center" };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST });
  ({ borderTopWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_24 });
  ({ paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 });
  rect1 = { position: "absolute", top: tmp(587).space.PX_16, left: tmp(587).space.PX_16 };
  obj12 = { bottom: undefined, height: 70 };
  const merged1 = Object.assign(React4.absoluteFillObject);
  obj13 = { top: undefined, height: 150 };
  const merged2 = Object.assign(React4.absoluteFillObject);
  ({ margin: -15, padding: 15, textShadowColor: nativeDefault.colors.BLACK, textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 15 });
  size = { borderRadius: tmp(587).radii.lg, height: 96, width: "100%" };
  return obj;
});
const __initData = { code: "function VideoQuestModalContentInProgressTsx1(){const{withDelay,LOGO_REWARD_TRANSITION_DELAY_MS,withTiming,isComponentMounted,LOGO_REWARD_TRANSITION_DURATION_MS}=this.__closure;return withDelay(LOGO_REWARD_TRANSITION_DELAY_MS,withTiming(isComponentMounted.get(),{duration:LOGO_REWARD_TRANSITION_DURATION_MS}));}" };
const __initData2 = { code: "function VideoQuestModalContentInProgressTsx2(){const{animation}=this.__closure;return{opacity:animation.get()};}" };
const __initData3 = { code: "function VideoQuestModalContentInProgressTsx3(){const{animation}=this.__closure;return{opacity:1-animation.get()};}" };
const __initData4 = { code: "function VideoQuestModalContentInProgressTsx4(){const{animation}=this.__closure;return{pointerEvents:animation.get()>0.3?\"auto\":\"none\"};}" };
const __initData5 = { code: "function VideoQuestModalContentInProgressTsx5(){const{withDelay,LOGO_REWARD_TRANSITION_DELAY_MS,withTiming,isComponentMounted,LOGO_REWARD_TRANSITION_DURATION_MS}=this.__closure;return withDelay(LOGO_REWARD_TRANSITION_DELAY_MS,withTiming(isComponentMounted.get(),{duration:LOGO_REWARD_TRANSITION_DURATION_MS}));}" };
const __initData6 = { code: "function VideoQuestModalContentInProgressTsx6(){const{animation}=this.__closure;return{opacity:animation.get()};}" };
const __initData7 = { code: "function VideoQuestModalContentInProgressTsx7(){const{animation}=this.__closure;return{opacity:1-animation.get()};}" };
const __initData8 = { code: "function VideoQuestModalContentInProgressTsx8(){const{animation}=this.__closure;return{pointerEvents:animation.get()>0.3?'auto':'none'};}" };
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_33 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function LandscapeLayout(arg0) {
  let captionsEnabled;
  let contentWidth;
  let duration;
  let externallyPaused;
  let first;
  let handleAdvertiserDetailsPress;
  let handleClose;
  let handleOpenTranscript;
  let handlePrimaryCtaPress;
  let handleShareQuest;
  let handleToggleCaptions;
  let hasCaptionAsset;
  let hasTranscriptAsset;
  let isFullscreen;
  let isShareable;
  let onEnd;
  let onNavigateToPostWatchVideo;
  let quest;
  let setIsFullscreen;
  let sourceQuestContent;
  let tmp11;
  let tmp14;
  const tmp = isFullscreen;
  let tmp2 = dependencyMap;
  let obj = isFullscreen(576);
  const cResult = obj.c(82);
  ({ quest, captionsEnabled, contentWidth, handleClose, handleAdvertiserDetailsPress, handlePrimaryCtaPress, handleShareQuest, handleOpenTranscript, handleToggleCaptions, isFullscreen } = arg0);
  ({ onNavigateToPostWatchVideo, onEnd, setIsFullscreen } = arg0);
  ({ externallyPaused, sourceQuestContent, hasCaptionAsset, hasTranscriptAsset, isShareable } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = tmp(1384);
    const isAndroidResult = tmpResult.isAndroid();
    cResult[0] = isAndroidResult;
    first = isAndroidResult;
  } else {
    first = cResult[0];
  }
  const tmp6 = closure_24(first);
  if (cResult[1] !== quest) {
    const tmpResult7 = tmp(9584);
    const questAsset = tmpResult7.getQuestAsset(quest, tmp(9584).QuestAssetType.HERO);
    cResult[1] = quest;
    cResult[2] = questAsset;
  }
  const userStatus = quest.userStatus;
  if (userStatus != null) {
    const completedAt = userStatus.completedAt;
  }
  [tmp11, dependencyMap] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function z(nativeEvent) {
      dependencyMap(nativeEvent.nativeEvent.layout.height);
    };
    cResult[3] = fn;
  }
  [tmp14, closure_3] = _slicedToArray(react.useState(null), 2);
  _slicedToArray(react.useState(null), 2);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class J {
      constructor(nativeEvent) {
        closure_3(nativeDefault.space.PX_24 + nativeEvent.nativeEvent.layout.height);
      }
    }
    cResult[4] = J;
  } else {
    class J {
      constructor(nativeEvent) {
        closure_3(nativeDefault.space.PX_24 + nativeEvent.nativeEvent.layout.height);
      }
    }
  }
  let diff = null;
  if (null != tmp11) {
    class J {
      constructor(nativeEvent) {
        closure_3(nativeDefault.space.PX_24 + nativeEvent.nativeEvent.layout.height);
      }
    }
    diff = tmp11 - 2 * setIsFullscreen(587).space.PX_16;
  }
  if (cResult[5] === tmp14) {
    let tmp22;
    let tmp21;
    class J {
      constructor(nativeEvent) {
        closure_3(nativeDefault.space.PX_24 + nativeEvent.nativeEvent.layout.height);
      }
    }
    const md = tmp(16474).QUEST_PROGRESS_DIAMETER_BY_SIZE.md;
    if (tmp14 == null) {
      class J {
        constructor(nativeEvent) {
          closure_3(nativeDefault.space.PX_24 + nativeEvent.nativeEvent.layout.height);
        }
      }
    }
    const sum = md + tmp14;
    const sum1 = sum + 2 * setIsFullscreen(587).space.PX_16;
    const tmpResult8 = tmp(5052);
    const sharedValue = tmpResult8.useSharedValue(0);
    const tmp18 = setIsFullscreen;
    if (cResult[8] !== sharedValue) {
      class J {
        constructor(nativeEvent) {
          closure_3(nativeDefault.space.PX_24 + nativeEvent.nativeEvent.layout.height);
        }
      }
      items = [sharedValue];
      cResult[8] = sharedValue;
      cResult[9] = tmp23;
      cResult[10] = items;
      tmp22 = items;
      tmp21 = tmp23;
    } else {
      class J {
        constructor(nativeEvent) {
          closure_3(nativeDefault.space.PX_24 + nativeEvent.nativeEvent.layout.height);
        }
      }
      tmp22 = cResult[10];
    }
    const effect = obj4.useEffect(tmp21, tmp22);
    function he() {
      const withDelay = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      const obj = timing;
      const obj2 = { duration };
      return withDelay(c16, obj.withTiming(sharedValue.get(), obj2));
    }
    let obj2 = { withDelay: tmp(5052).withDelay, LOGO_REWARD_TRANSITION_DELAY_MS, withTiming: tmp(5206).withTiming, isComponentMounted: sharedValue, LOGO_REWARD_TRANSITION_DURATION_MS };
    const useDerivedValue = tmp(5052).useDerivedValue;
    tmp(5052);
    he.__closure = obj2;
    he.__workletHash = 12561024953493;
    he.__initData = __initData;
    const derivedValue = useDerivedValue(he);
    function ge() {
      const obj = { opacity: derivedValue.get() };
      return obj;
    }
    const obj3 = { animation: derivedValue };
    ge.__closure = obj3;
    ge.__workletHash = 17463485679217;
    ge.__initData = __initData2;
    const tmpResult10 = tmp(5052);
    const animatedStyle = tmpResult10.useAnimatedStyle(ge);
    function ye() {
      const obj = { opacity: 1 - derivedValue.get() };
      return obj;
    }
    const obj5 = { animation: derivedValue };
    ye.__closure = obj5;
    ye.__workletHash = 9103187579788;
    ye.__initData = __initData3;
    const tmpResult11 = tmp(5052);
    const animatedStyle1 = tmpResult11.useAnimatedStyle(ye);
    function _e() {
      let pointerEvents = "none";
      if (derivedValue.get() > 0.3) {
        pointerEvents = "auto";
      }
      return { pointerEvents };
    }
    const obj6 = { animation: derivedValue };
    _e.__closure = obj6;
    _e.__workletHash = 6340268991801;
    _e.__initData = __initData4;
    const tmpResult12 = tmp(5052);
    const animatedProps = tmpResult12.useAnimatedProps(_e);
    tmp18(1633)();
    if (cResult[11] === isFullscreen) {
      class J {
        constructor(nativeEvent) {
          closure_3(nativeDefault.space.PX_24 + nativeEvent.nativeEvent.layout.height);
        }
      }
      if (cResult[14] === tmp6.videoWrapper) {
        class J {
          constructor(nativeEvent) {
            closure_3(nativeDefault.space.PX_24 + nativeEvent.nativeEvent.layout.height);
          }
        }
      }
      items1 = [, , ];
      ({ videoWrapper: arr2[0], videoWrapperLandscape: arr2[1] } = tmp6);
      items1[2] = isFullscreen && tmp6.videoWrapperFullscreen;
      cResult[14] = tmp6.videoWrapper;
      cResult[15] = tmp6.videoWrapperLandscape;
      cResult[16] = isFullscreen && tmp6.videoWrapperFullscreen;
      cResult[17] = items1;
    }
    class Ce {
      constructor(arg0) {
        let str2 = "PORTRAIT";
        const tmp2 = isFullscreen || "landscape" !== tmp;
        if (!tmp2) {
          str2 = "LANDSCAPE";
        }
        setIsFullscreen("LANDSCAPE" === str2);
      }
    }
    cResult[11] = isFullscreen;
    cResult[12] = setIsFullscreen;
    cResult[13] = Ce;
  }
  let str = "md";
  if (null != diff) {
    class J {
      constructor(nativeEvent) {
        closure_3(nativeDefault.space.PX_24 + nativeEvent.nativeEvent.layout.height);
      }
    }
    if (null != tmp14) {
      let str2;
      class J {
        constructor(nativeEvent) {
          closure_3(nativeDefault.space.PX_24 + nativeEvent.nativeEvent.layout.height);
        }
      }
      if (diff < tmp(16474).QUEST_PROGRESS_DIAMETER_BY_SIZE.lg + tmp14) {
        class J {
          constructor(nativeEvent) {
            closure_3(nativeDefault.space.PX_24 + nativeEvent.nativeEvent.layout.height);
          }
        }
        str2 = "md";
      }
      str = str2;
    }
  }
  cResult[6] = diff;
  cResult[7] = str;
}) : (function LandscapeLayout(quest) {
  let _undefined;
  let _undefined2;
  let c3;
  let c4;
  let captionsEnabled;
  let contentWidth;
  let duration;
  let externallyPaused;
  let handleAdvertiserDetailsPress;
  let handleClose;
  let handleOpenTranscript;
  let handlePrimaryCtaPress;
  let handleShareQuest;
  let handleToggleCaptions;
  let hasCaptionAsset;
  let hasTranscriptAsset;
  let intl;
  let intl2;
  let isFullscreen;
  let isShareable;
  let items10;
  let items11;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items18;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let num;
  let obj11;
  let obj16;
  let obj27;
  let obj29;
  let obj30;
  let obj5;
  let onEnd;
  let onNavigateToPostWatchVideo;
  let sourceQuestContent;
  let tmp8;
  let tmpResult15;
  let tmpResult16;
  quest = quest.quest;
  ({ handleAdvertiserDetailsPress, isFullscreen } = quest);
  const setIsFullscreen = quest.setIsFullscreen;
  ({ sourceQuestContent, isShareable } = quest);
  c3 = undefined;
  c4 = undefined;
  let sharedValue;
  let derivedValue;
  const tmp = quest;
  let tmp2 = setIsFullscreen;
  ({ captionsEnabled, contentWidth, handleClose, handlePrimaryCtaPress, handleShareQuest, handleOpenTranscript, handleToggleCaptions, onNavigateToPostWatchVideo, onEnd, externallyPaused, hasCaptionAsset, hasTranscriptAsset } = quest);
  let obj = quest(setIsFullscreen[13]);
  const tmp3 = closure_24(obj.isAndroid());
  let obj2 = react;
  items = [quest];
  const memo = react.useMemo(() => {
    const obj = AssetUtils;
    return obj.getQuestAsset(quest, AssetUtils.QuestAssetType.HERO);
  }, items);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  let tmp25Result3 = null != completedAt;
  [tmp8, c3] = derivedValue(obj2.useState(null), 2);
  derivedValue(obj2.useState(null), 2);
  const callback = obj2.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.height);
  }, []);
  [num, c4] = derivedValue(obj2.useState(null), 2);
  let diff = null;
  derivedValue(obj2.useState(null), 2);
  const callback1 = obj2.useCallback((nativeEvent) => {
    _undefined2(nativeDefault.space.PX_24 + nativeEvent.nativeEvent.layout.height);
  }, []);
  if (null != tmp8) {
    diff = tmp8 - 2 * isFullscreen(tmp2[8]).space.PX_16;
  }
  let str = "md";
  let str2 = "md";
  if (null != diff) {
    str2 = str;
    if (null != num) {
      let str3 = "lg";
      if (diff < tmp(tmp2[9]).QUEST_PROGRESS_DIAMETER_BY_SIZE.lg + num) {
        if (diff >= tmp(tmp2[9]).QUEST_PROGRESS_DIAMETER_BY_SIZE["md-lg"] + num) {
          str = "md-lg";
        }
        str3 = str;
      }
      str2 = str3;
    }
  }
  const md = tmp(tmp2[9]).QUEST_PROGRESS_DIAMETER_BY_SIZE.md;
  const sum = md + num;
  const sum1 = sum + 2 * isFullscreen(tmp2[8]).space.PX_16;
  const tmpResult = tmp(tmp2[15]);
  sharedValue = tmpResult.useSharedValue(0);
  items1 = [sharedValue];
  const effect = obj2.useEffect(() => {
    const result = sharedValue.set(1);
  }, items1);
  function ae() {
    const withDelay = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    const obj = timing;
    const obj2 = { duration };
    return withDelay(c16, obj.withTiming(sharedValue.get(), obj2));
  }
  const tmpResult9 = tmp(tmp2[15]);
  ae.__closure = { withDelay: tmp(tmp2[15]).withDelay, LOGO_REWARD_TRANSITION_DELAY_MS, withTiming: tmp(tmp2[16]).withTiming, isComponentMounted: sharedValue, LOGO_REWARD_TRANSITION_DURATION_MS };
  ae.__workletHash = 11647045462673;
  ae.__initData = __initData5;
  ({ withDelay: tmp(tmp2[15]).withDelay, LOGO_REWARD_TRANSITION_DELAY_MS, withTiming: tmp(tmp2[16]).withTiming, isComponentMounted: sharedValue, LOGO_REWARD_TRANSITION_DURATION_MS });
  derivedValue = tmpResult9.useDerivedValue(ae);
  function se() {
    const obj = { opacity: derivedValue.get() };
    return obj;
  }
  se.__closure = { animation: derivedValue };
  se.__workletHash = 785279125621;
  se.__initData = __initData6;
  const tmpResult10 = tmp(tmp2[15]);
  const animatedStyle = tmpResult10.useAnimatedStyle(se);
  function oe() {
    const obj = { opacity: 1 - derivedValue.get() };
    return obj;
  }
  oe.__closure = { animation: derivedValue };
  oe.__workletHash = 8189208088968;
  oe.__initData = __initData7;
  const tmpResult11 = tmp(tmp2[15]);
  const animatedStyle1 = tmpResult11.useAnimatedStyle(oe);
  function ie() {
    let pointerEvents = "none";
    if (derivedValue.get() > 0.3) {
      pointerEvents = "auto";
    }
    return { pointerEvents };
  }
  ie.__closure = { animation: derivedValue };
  ie.__workletHash = 3265902368501;
  ie.__initData = __initData8;
  const tmpResult12 = tmp(tmp2[15]);
  const animatedProps = tmpResult12.useAnimatedProps(ie);
  const tmp23 = isFullscreen(tmp2[17])();
  const items2 = [isFullscreen, setIsFullscreen];
  const callback2 = obj2.useCallback((arg0) => {
    let str2 = "PORTRAIT";
    const tmp2 = isFullscreen || "landscape" !== tmp;
    if (!tmp2) {
      str2 = "LANDSCAPE";
    }
    setIsFullscreen("LANDSCAPE" === str2);
  }, items2);
  const items3 = [, , ];
  ({ videoWrapper: arr4[0], videoWrapperLandscape: arr4[1] } = tmp3);
  let videoWrapperFullscreen = isFullscreen;
  const obj4 = { bottom: true, style: tmp3.wrapper, children: closure_15(closure_8, obj5) };
  const SafeAreaPaddingView = tmp(tmp2[36]).SafeAreaPaddingView;
  if (isFullscreen) {
    videoWrapperFullscreen = tmp3.videoWrapperFullscreen;
  }
  obj5 = { style: items3, children: items7 };
  items3[2] = videoWrapperFullscreen;
  const obj6 = { theme: ThemeTypes.DARK, children: items5 };
  const ThemeContextProvider = tmp(tmp2[20]).ThemeContextProvider;
  const obj7 = { captionsEnabled, orientation: "landscape", style: items4, contentInsets: contentInsets2, handleOpenTranscript, handleToggleCaptions, isFullscreen, externallyPaused, onEnd, onToggleFullscreen: callback2, sourceQuestContent, hasCaptionAsset, hasTranscriptAsset };
  items4 = [tmp3.videoLandscape, , ];
  let videoLandscape9by16 = !isFullscreen;
  const VideoQuestPlayer = tmp(tmp2[18]).VideoQuestPlayer;
  if (!isFullscreen) {
    videoLandscape9by16 = tmp3.videoLandscape9by16;
  }
  items4[1] = videoLandscape9by16;
  items4[2] = isFullscreen && tmp3.videoLandscapeFullscreen;
  items5 = [closure_14(VideoQuestPlayer, obj7), ];
  const obj8 = { onClose: handleClose, style: items6 };
  items6 = [tmp3.closeButtonLandscape, ];
  let tmp29 = isFullscreen;
  const tmp15Result = isFullscreen(tmp2[19]);
  if (isFullscreen) {
    tmp29 = null != tmp23;
  }
  if (tmp29) {
    tmp29 = { left: tmp23.left };
    const obj9 = { left: tmp23.left };
  }
  items6[1] = tmp29;
  items5[1] = closure_14(tmp15Result, obj8);
  items7 = [closure_15(ThemeContextProvider, obj6), ];
  let tmp25Result4 = !isFullscreen;
  if (tmp25Result4) {
    ({ landscapeContentScroll: obj15.style, landscapeContentScrollContent: obj15.contentContainerStyle } = tmp3);
    const obj10 = { style: null, contentContainerStyle: null, showsVerticalScrollIndicator: false, alwaysBounceVertical: false, children: closure_15(closure_8, obj11) };
    obj11 = { style: items8, children: items14 };
    items8 = [, ];
    ({ videoContentWrapper: arr9[0], videoContentWrapperLandscape: arr9[1] } = tmp3);
    const obj12 = { style: items9, onLayout: callback, children: items11 };
    items9 = [tmp3.rewardContainer, ];
    const obj13 = { minHeight: sum1 };
    items9[1] = obj13;
    const obj14 = { style: items10, animatedProps, children: closure_14(isFullscreen(tmp2[22]), obj16) };
    items10 = [tmp3.rewardContentCentered, animatedStyle];
    obj16 = { size: str2, onTextBlockLayout: callback1 };
    const tmp15Result4 = isFullscreen(tmp2[21]);
    items11 = [closure_14(tmp15Result4, obj14), ];
    const items12 = [tmp3.rewardContentCentered, , ];
    const tmp15Result5 = isFullscreen(tmp2[21]);
    const tmpResult13 = tmp(tmp2[13]);
    const obj17 = { style: items12, pointerEvents: "none", children: items13 };
    items12[1] = tmpResult13.isAndroid() && tmp3.modalBackground;
    items12[2] = animatedStyle1;
    tmpResult13.isAndroid() && tmp3.modalBackground;
    const tmpResult14 = tmp(tmp2[13]);
    let isAndroidResult = tmpResult14.isAndroid();
    const tmp31 = closure_10;
    if (isAndroidResult) {
      const obj18 = { align: "top", style: tmp3.cloudsBackground };
      isAndroidResult = tmp25(tmp15(tmp2[23]), obj18);
    }
    items13 = [isAndroidResult, ];
    const obj19 = { assetUrl: tmpResult15.getQuestAsset(quest, tmp(tmp2[14]).QuestAssetType.LOGO_TYPE, "dark").url, maxHeight: 90, maxWidth: contentWidth - 120 };
    const tmp15Result6 = isFullscreen(tmp2[24]);
    tmpResult15 = tmp(tmp2[14]);
    items13[1] = closure_14(tmp15Result6, obj19);
    items11[1] = closure_15(tmp15Result5, obj17);
    items14 = [closure_15(closure_8, obj12), , ];
    const obj20 = { align: "top", style: tmp3.cloudsBackground };
    items14[1] = closure_14(isFullscreen(tmp2[23]), obj20);
    const obj21 = { direction: "vertical", spacing: isFullscreen(tmp2[8]).space.PX_24, style: tmp3.questDetailsLandscape, children: items17 };
    const Stack = tmp(tmp2[25]).Stack;
    const obj22 = { direction: "horizontal", justify: "space-between", spacing: isFullscreen(tmp2[8]).space.PX_8, children: items16 };
    const Stack2 = tmp(tmp2[25]).Stack;
    const obj23 = { style: tmp3.questDetailsPrimary, onPress: handleAdvertiserDetailsPress, children: items15 };
    const PressableOpacity = tmp(tmp2[26]).PressableOpacity;
    const obj24 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: quest.config.messages.gameTitle };
    items15 = [closure_14(tmp(tmp2[27]).Text, obj24), ];
    const obj25 = { variant: "heading-sm/semibold", color: "text-subtle", children: quest.config.messages.gamePublisher };
    items15[1] = closure_14(tmp(tmp2[27]).Text, obj25);
    items16 = [closure_15(PressableOpacity, obj23), ];
    const obj26 = { style: tmp3.questDetailsSecondary, children: closure_14(isFullscreen(tmp2[28]), obj27) };
    obj27 = { quest, location: constants.VIDEO_MODAL_MOBILE, sourceQuestContent };
    items16[1] = closure_14(closure_8, obj26);
    items17 = [closure_15(Stack2, obj22), , ];
    let tmp25Result = null != memo;
    if (tmp25Result) {
      const obj28 = { onPress: handleAdvertiserDetailsPress, children: closure_14(isFullscreen(tmp2[29]), obj29) };
      const PressableOpacity2 = tmp(tmp2[26]).PressableOpacity;
      obj29 = { source: obj30, style: tmp3.playerThumbnail };
      obj30 = { uri: memo.url };
      tmp25Result = tmp25(PressableOpacity2, obj28);
    }
    items17[1] = tmp25Result;
    const obj31 = { direction: "horizontal", spacing: isFullscreen(tmp2[8]).space.PX_16, children: items18 };
    const Stack3 = tmp(tmp2[25]).Stack;
    const obj32 = { grow: true, variant: "expressive", onPress: handlePrimaryCtaPress, text: tmpResult16.getExternalCtaLabel(quest) };
    const Button = tmp(tmp2[30]).Button;
    tmpResult16 = tmp(tmp2[31]);
    items18 = [closure_14(Button, obj32), , ];
    if (isShareable) {
      const obj33 = { accessibilityLabel: intl.string(tmp(tmp2[33]).t.Ej3B3Y), icon: isFullscreen(tmp2[34]), onPress: handleShareQuest, variant: "secondary" };
      const IconButton = tmp(tmp2[32]).IconButton;
      intl = tmp(tmp2[33]).intl;
      isShareable = tmp25(IconButton, obj33);
    }
    items18[1] = isShareable;
    if (tmp25Result3) {
      const obj34 = { accessibilityLabel: intl2.string(tmp(tmp2[33]).t.cfY4PE), icon: isFullscreen(tmp2[35]), onPress: onNavigateToPostWatchVideo, variant: "secondary" };
      const IconButton2 = tmp(tmp2[32]).IconButton;
      intl2 = tmp(tmp2[33]).intl;
      tmp25Result3 = tmp25(IconButton2, obj34);
    }
    items18[2] = tmp25Result3;
    items17[2] = closure_15(Stack3, obj31);
    items14[2] = closure_15(Stack, obj21);
    tmp25Result4 = tmp25(tmp31, obj10);
  }
  items7[1] = tmp25Result4;
  return closure_14(SafeAreaPaddingView, obj4);
}));
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_34 = memo2(ReactCompilerGating.isReactCompilerEnabled() ? (function PortraitLayout(arg0) {
  let Button;
  let ClosedCaptionsOutlineIcon;
  let ShareIcon;
  let TranscriptOutlineIcon;
  let captionsEnabled;
  let contentWidth;
  let externallyPaused;
  let handleAdvertiserDetailsPress;
  let handleClose;
  let handleOpenTranscript;
  let handlePrimaryCtaPress;
  let handleRewardDetailsPress;
  let handleShareQuest;
  let handleToggleCaptions;
  let hasCaptionAsset;
  let hasTranscriptAsset;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let isFullscreen;
  let isShareable;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj12;
  let obj14;
  let obj15;
  let obj17;
  let obj19;
  let obj31;
  let onEnd;
  let onNavigateToPostWatchVideo;
  let quest;
  let sourceQuestContent;
  let tmp16;
  let tmp = require;
  let obj = react2;
  const cResult = obj.c(104);
  ({ quest, captionsEnabled, handleClose, handleAdvertiserDetailsPress, handlePrimaryCtaPress, handleRewardDetailsPress, handleShareQuest, handleOpenTranscript, handleToggleCaptions, isFullscreen, onNavigateToPostWatchVideo, onEnd, externallyPaused, sourceQuestContent, hasCaptionAsset, hasTranscriptAsset, isShareable, contentWidth } = arg0);
  let obj2 = hooks_QuestHooks;
  const questTaskDetails = obj2.useQuestTaskDetails(quest);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  if (cResult[0] === null != completedAt) {
    let tmp7;
    let tmp13;
    let tmp17;
    if (cResult[1] === questTaskDetails) {
      tmp7 = cResult[2];
    }
    const height = useStateFromSharedValueDefault(react.useContext(QuestDockGestureContext.QuestDockGestureContext).windowDimensions).height;
    const _Math = Math;
    const _Symbol = Symbol;
    const rounded = Math.floor(contentWidth / closure_11);
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function j() {

      };
      cResult[3] = fn;
      tmp13 = fn;
    } else {
      tmp13 = cResult[3];
    }
    const rect = tmp9(1633)();
    [tmp16, require] = react.useState(64);
    const _Symbol2 = Symbol;
    _slicedToArray(react.useState(64), 2);
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function $(nativeEvent) {
        require(nativeEvent.nativeEvent.layout.height);
      };
      cResult[4] = fn2;
      tmp17 = fn2;
    } else {
      tmp17 = cResult[4];
    }
    const _Math2 = Math;
    const bound = Math.min(height - rect.top - rect.bottom - tmp16, rounded);
    const tmp20 = closure_24(height - bound - tmp16 < 200);
    if (cResult[5] === tmp20.wrapper) {
      let tmp21;
      let tmp22;
      if (cResult[6] === tmp20.wrapperPortrait) {
        tmp21 = cResult[7];
      }
      if (cResult[8] !== bound) {
        let obj3;
        if (null == bound) {
          obj3 = { flexGrow: 1 };
        } else {
          obj3 = { height: bound };
        }
        cResult[8] = bound;
        cResult[9] = obj3;
        tmp22 = obj3;
      } else {
        tmp22 = cResult[9];
      }
      if (cResult[10] === tmp20.videoWrapper) {
        let tmp23;
        if (cResult[11] === tmp22) {
          tmp23 = cResult[12];
        }
        if (cResult[13] === captionsEnabled) {
          if (cResult[14] === externallyPaused) {
            if (cResult[15] === handleOpenTranscript) {
              if (cResult[16] === handleToggleCaptions) {
                if (cResult[17] === hasCaptionAsset) {
                  if (cResult[18] === hasTranscriptAsset) {
                    if (cResult[19] === isFullscreen) {
                      if (cResult[20] === onEnd) {
                        let tmp24;
                        let tmp29;
                        let tmp35;
                        if (cResult[21] === sourceQuestContent) {
                          tmp24 = cResult[22];
                        }
                        if (cResult[23] !== tmp20.gradientTop) {
                          const obj5 = { start, end, style: tmp20.gradientTop, colors: items };
                          const tmp34 = closure_14(LinearGradientDefault, obj5);
                          cResult[23] = tmp20.gradientTop;
                          cResult[24] = tmp34;
                          tmp29 = tmp34;
                        } else {
                          tmp29 = cResult[24];
                        }
                        if (cResult[25] !== tmp20.gradientBottom) {
                          const obj6 = { start, end, style: tmp20.gradientBottom, colors: items1 };
                          const tmp40 = closure_14(LinearGradientDefault, obj6);
                          cResult[25] = tmp20.gradientBottom;
                          cResult[26] = tmp40;
                          tmp35 = tmp40;
                        } else {
                          tmp35 = cResult[26];
                        }
                        if (cResult[27] === tmp20.videoContentWrapper) {
                          let tmp41;
                          let tmp42;
                          if (cResult[28] === tmp20.videoContentWrapperPortrait) {
                            tmp41 = cResult[29];
                          }
                          if (cResult[30] !== handleClose) {
                            const obj7 = { closeButtonIconColor: nativeDefault.colors.WHITE, onClose: handleClose, showCurrentVideoTime: true, withTextShadow: true };
                            const tmp9Result = VideoQuestModalHeaderDefault;
                            const tmp45 = closure_14(tmp9Result, obj7);
                            cResult[30] = handleClose;
                            cResult[31] = tmp45;
                            tmp42 = tmp45;
                          } else {
                            tmp42 = cResult[31];
                          }
                          if (cResult[32] === quest.config.messages.gameTitle) {
                            let tmp46;
                            if (cResult[33] === tmp20.textShadow) {
                              tmp46 = cResult[34];
                            }
                            if (cResult[35] === tmp20.questDetailsSubheader) {
                              let tmp49;
                              if (cResult[36] === tmp20.textShadow) {
                                tmp49 = cResult[37];
                              }
                              if (cResult[38] === quest.config.messages.gamePublisher) {
                                let tmp50;
                                if (cResult[39] === tmp49) {
                                  tmp50 = cResult[40];
                                }
                                if (cResult[41] === handleAdvertiserDetailsPress) {
                                  if (cResult[42] === tmp20.questDetailsPrimary) {
                                    if (cResult[43] === tmp46) {
                                      let tmp53;
                                      if (cResult[44] === tmp50) {
                                        tmp53 = cResult[45];
                                      }
                                      if (cResult[46] === handleRewardDetailsPress) {
                                        if (cResult[47] === quest) {
                                          if (cResult[48] === tmp7) {
                                            let tmp56;
                                            if (cResult[49] === questTaskDetails.percentComplete) {
                                              tmp56 = cResult[50];
                                            }
                                            if (cResult[51] === tmp20.questDetailsSecondary) {
                                              let tmp59;
                                              if (cResult[52] === tmp56) {
                                                tmp59 = cResult[53];
                                              }
                                              if (cResult[54] === tmp53) {
                                                let tmp63;
                                                let tmp66;
                                                if (cResult[55] === tmp59) {
                                                  tmp63 = cResult[56];
                                                }
                                                if (cResult[57] !== quest) {
                                                  const tmpResult = QuestCopyUtils;
                                                  const externalCtaLabel = tmpResult.getExternalCtaLabel(quest);
                                                  cResult[57] = quest;
                                                  cResult[58] = externalCtaLabel;
                                                  tmp66 = externalCtaLabel;
                                                } else {
                                                  tmp66 = cResult[58];
                                                }
                                                if (cResult[59] === handlePrimaryCtaPress) {
                                                  let tmp68;
                                                  if (cResult[60] === tmp66) {
                                                    tmp68 = cResult[61];
                                                  }
                                                  if (cResult[62] === tmp63) {
                                                    let tmp71;
                                                    if (cResult[63] === tmp68) {
                                                      tmp71 = cResult[64];
                                                    }
                                                    if (cResult[65] === tmp41) {
                                                      if (cResult[66] === tmp42) {
                                                        let tmp74;
                                                        if (cResult[67] === tmp71) {
                                                          tmp74 = cResult[68];
                                                        }
                                                        if (cResult[69] === tmp74) {
                                                          if (cResult[70] === tmp23) {
                                                            if (cResult[71] === tmp24) {
                                                              if (cResult[72] === tmp29) {
                                                                let tmp78;
                                                                if (cResult[73] === tmp35) {
                                                                  tmp78 = cResult[74];
                                                                }
                                                                if (cResult[75] === null != completedAt) {
                                                                  if (cResult[76] === onNavigateToPostWatchVideo) {
                                                                    let tmp82;
                                                                    if (cResult[77] === tmp20.viewRewardBtn) {
                                                                      tmp82 = cResult[78];
                                                                    }
                                                                    if (cResult[79] === handleOpenTranscript) {
                                                                      let tmp86;
                                                                      if (cResult[80] === hasTranscriptAsset) {
                                                                        tmp86 = cResult[81];
                                                                      }
                                                                      if (cResult[82] === captionsEnabled) {
                                                                        if (cResult[83] === handleToggleCaptions) {
                                                                          let tmp90;
                                                                          if (cResult[84] === hasCaptionAsset) {
                                                                            tmp90 = cResult[85];
                                                                          }
                                                                          if (cResult[86] === handleShareQuest) {
                                                                            let tmp94;
                                                                            let tmp98;
                                                                            if (cResult[87] === isShareable) {
                                                                              tmp94 = cResult[88];
                                                                            }
                                                                            const _Symbol3 = Symbol;
                                                                            if (cResult[89] === Symbol.for("react.memo_cache_sentinel")) {
                                                                              function renderContextMenuButton(ref) {
                                                                                let MoreHorizontalIcon;
                                                                                let intl;
                                                                                let obj2;
                                                                                const obj = { accessibilityLabel: intl.string(intl5.t.PdRCRg), ref, children: closure_1_14(MoreHorizontalIcon, obj2) };
                                                                                ref = ref.ref;
                                                                                const tmp = _objectWithoutProperties(ref, closure_1_3);
                                                                                intl = intl5.intl;
                                                                                const merged = Object.assign(tmp);
                                                                                obj2 = { color: nativeDefault.colors.TEXT_DEFAULT };
                                                                                MoreHorizontalIcon = MoreHorizontalIcon2.MoreHorizontalIcon;
                                                                                return closure_1_14(closure_1_36, obj);
                                                                              }
                                                                              cResult[89] = renderContextMenuButton;
                                                                              tmp98 = renderContextMenuButton;
                                                                            } else {
                                                                              tmp98 = cResult[89];
                                                                            }
                                                                            if (cResult[90] === quest) {
                                                                              let tmp99;
                                                                              if (cResult[91] === sourceQuestContent) {
                                                                                tmp99 = cResult[92];
                                                                              }
                                                                              if (cResult[93] === tmp20.footer) {
                                                                                if (cResult[94] === tmp82) {
                                                                                  if (cResult[95] === tmp86) {
                                                                                    if (cResult[96] === tmp90) {
                                                                                      if (cResult[97] === tmp94) {
                                                                                        let tmp103;
                                                                                        if (cResult[98] === tmp99) {
                                                                                          tmp103 = cResult[99];
                                                                                        }
                                                                                        if (cResult[100] === tmp78) {
                                                                                          if (cResult[101] === tmp103) {
                                                                                            let tmp106;
                                                                                            if (cResult[102] === tmp21) {
                                                                                              tmp106 = cResult[103];
                                                                                            }
                                                                                            return tmp106;
                                                                                          }
                                                                                        }
                                                                                        const obj8 = { bottom: true, style: tmp21, children: items };
                                                                                        items = [tmp78, tmp103];
                                                                                        const tmp108 = closure_15(common_SafeAreaView.SafeAreaPaddingView, obj8);
                                                                                        cResult[100] = tmp78;
                                                                                        cResult[101] = tmp103;
                                                                                        cResult[102] = tmp21;
                                                                                        cResult[103] = tmp108;
                                                                                        tmp106 = tmp108;
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                              const obj9 = { direction: "horizontal", justify: "flex-end", align: "center", style: tmp20.footer, spacing: nativeDefault.space.PX_4, onLayout: tmp17, children: items1 };
                                                                              const Stack3 = Stack_Stack.Stack;
                                                                              items1 = [tmp82, tmp86, tmp90, tmp94, tmp99];
                                                                              const tmp105 = closure_15(Stack3, obj9);
                                                                              cResult[93] = tmp20.footer;
                                                                              cResult[94] = tmp82;
                                                                              cResult[95] = tmp86;
                                                                              cResult[96] = tmp90;
                                                                              cResult[97] = tmp94;
                                                                              cResult[98] = tmp99;
                                                                              cResult[99] = tmp105;
                                                                              tmp103 = tmp105;
                                                                            }
                                                                            const obj10 = { quest, location: constants.VIDEO_MODAL_MOBILE, sourceQuestContent, children: tmp98 };
                                                                            const tmp102 = closure_14(QuestContextMenuDefault, obj10);
                                                                            cResult[90] = quest;
                                                                            cResult[91] = sourceQuestContent;
                                                                            cResult[92] = tmp102;
                                                                            tmp99 = tmp102;
                                                                          }
                                                                          let tmp95 = isShareable;
                                                                          if (tmp95) {
                                                                            const obj11 = { accessibilityLabel: intl4.string(intl5.t.Ej3B3Y), onPress: handleShareQuest, children: closure_14(ShareIcon, obj12) };
                                                                            intl4 = intl5.intl;
                                                                            obj12 = { color: nativeDefault.colors.TEXT_DEFAULT };
                                                                            ShareIcon = ShareIcon2.ShareIcon;
                                                                            tmp95 = closure_14(closure_36, obj11);
                                                                          }
                                                                          cResult[86] = handleShareQuest;
                                                                          cResult[87] = isShareable;
                                                                          cResult[88] = tmp95;
                                                                          tmp94 = tmp95;
                                                                        }
                                                                      }
                                                                      let tmp92Result = hasCaptionAsset;
                                                                      if (tmp92Result) {
                                                                        const obj13 = { accessibilityLabel: intl3.string(intl5.t.bDSZO1), accessibilityRole: "togglebutton", accessibilityState: obj14, onPress: handleToggleCaptions, children: closure_14(ClosedCaptionsOutlineIcon, obj15) };
                                                                        intl3 = intl5.intl;
                                                                        obj14 = { checked: captionsEnabled };
                                                                        const tmp93 = closure_36;
                                                                        if (captionsEnabled) {
                                                                          ClosedCaptionsOutlineIcon = ClosedCaptionsIcon.ClosedCaptionsIcon;
                                                                        } else {
                                                                          ClosedCaptionsOutlineIcon = ClosedCaptionsOutlineIcon2.ClosedCaptionsOutlineIcon;
                                                                        }
                                                                        obj15 = { color: nativeDefault.colors.TEXT_DEFAULT };
                                                                        tmp92Result = tmp92(tmp93, obj13);
                                                                      }
                                                                      cResult[82] = captionsEnabled;
                                                                      cResult[83] = handleToggleCaptions;
                                                                      cResult[84] = hasCaptionAsset;
                                                                      cResult[85] = tmp92Result;
                                                                      tmp90 = tmp92Result;
                                                                    }
                                                                    let tmp87 = hasTranscriptAsset;
                                                                    if (tmp87) {
                                                                      const obj16 = { accessibilityLabel: intl2.string(intl5.t.KCzjTi), onPress: handleOpenTranscript, children: closure_14(TranscriptOutlineIcon, obj17) };
                                                                      intl2 = intl5.intl;
                                                                      obj17 = { color: nativeDefault.colors.TEXT_DEFAULT };
                                                                      TranscriptOutlineIcon = TranscriptOutlineIcon2.TranscriptOutlineIcon;
                                                                      tmp87 = closure_14(closure_36, obj16);
                                                                    }
                                                                    cResult[79] = handleOpenTranscript;
                                                                    cResult[80] = hasTranscriptAsset;
                                                                    cResult[81] = tmp87;
                                                                    tmp86 = tmp87;
                                                                  }
                                                                }
                                                                let tmp83 = tmp6;
                                                                if (tmp83) {
                                                                  const obj18 = { style: tmp20.viewRewardBtn, children: closure_14(Button, obj19) };
                                                                  obj19 = { icon: closure_14(ArrowSmallRightIcon.ArrowSmallRightIcon, { size: "sm" }), iconPosition: "end", onPress: onNavigateToPostWatchVideo, variant: "secondary", size: "sm", text: intl.string(intl5.t["jyYgZ+"]) };
                                                                  Button = components_Button_Button.Button;
                                                                  intl = intl5.intl;
                                                                  tmp83 = closure_14(closure_8, obj18);
                                                                }
                                                                cResult[75] = null != completedAt;
                                                                cResult[76] = onNavigateToPostWatchVideo;
                                                                cResult[77] = tmp20.viewRewardBtn;
                                                                cResult[78] = tmp83;
                                                                tmp82 = tmp83;
                                                              }
                                                            }
                                                          }
                                                        }
                                                        const obj20 = { style: tmp23, children: items2 };
                                                        items2 = [tmp24, tmp29, tmp35, tmp74];
                                                        const tmp81 = closure_15(closure_8, obj20);
                                                        cResult[69] = tmp74;
                                                        cResult[70] = tmp23;
                                                        cResult[71] = tmp24;
                                                        cResult[72] = tmp29;
                                                        cResult[73] = tmp35;
                                                        cResult[74] = tmp81;
                                                        tmp78 = tmp81;
                                                      }
                                                    }
                                                    const obj21 = { style: tmp41, children: items3 };
                                                    items3 = [tmp42, tmp71];
                                                    const tmp77 = closure_15(closure_8, obj21);
                                                    cResult[65] = tmp41;
                                                    cResult[66] = tmp42;
                                                    cResult[67] = tmp71;
                                                    cResult[68] = tmp77;
                                                    tmp74 = tmp77;
                                                  }
                                                  const obj22 = { direction: "vertical", spacing: nativeDefault.space.PX_24, children: items4 };
                                                  const Stack2 = Stack_Stack.Stack;
                                                  items4 = [tmp63, tmp68];
                                                  const tmp73 = closure_15(Stack2, obj22);
                                                  cResult[62] = tmp63;
                                                  cResult[63] = tmp68;
                                                  cResult[64] = tmp73;
                                                  tmp71 = tmp73;
                                                }
                                                const obj23 = { grow: true, variant: "expressive", onPress: handlePrimaryCtaPress, text: tmp66 };
                                                const tmp70 = closure_14(components_Button_Button.Button, obj23);
                                                cResult[59] = handlePrimaryCtaPress;
                                                cResult[60] = tmp66;
                                                cResult[61] = tmp70;
                                                tmp68 = tmp70;
                                              }
                                              const obj24 = { direction: "horizontal", justify: "space-between", spacing: nativeDefault.space.PX_8, children: items5 };
                                              const Stack = Stack_Stack.Stack;
                                              items5 = [tmp53, tmp59];
                                              const tmp65 = closure_15(Stack, obj24);
                                              cResult[54] = tmp53;
                                              cResult[55] = tmp59;
                                              cResult[56] = tmp65;
                                              tmp63 = tmp65;
                                            }
                                            const obj25 = { style: tmp20.questDetailsSecondary, children: tmp56 };
                                            const tmp62 = closure_14(closure_8, obj25);
                                            cResult[51] = tmp20.questDetailsSecondary;
                                            cResult[52] = tmp56;
                                            cResult[53] = tmp62;
                                            tmp59 = tmp62;
                                          }
                                        }
                                      }
                                      const obj26 = { quest, size: "x-sm", progress: questTaskDetails.percentComplete, hasConfetti: true, onPress: handleRewardDetailsPress, accessibilityLabel: tmp7 };
                                      const tmp58 = closure_14(QuestProgressIndicatorDefault, obj26);
                                      cResult[46] = handleRewardDetailsPress;
                                      cResult[47] = quest;
                                      cResult[48] = tmp7;
                                      cResult[49] = questTaskDetails.percentComplete;
                                      cResult[50] = tmp58;
                                      tmp56 = tmp58;
                                    }
                                  }
                                }
                                const obj27 = { style: tmp20.questDetailsPrimary, onPress: handleAdvertiserDetailsPress, children: items6 };
                                items6 = [tmp46, tmp50];
                                const tmp55 = closure_15(Pressables.PressableOpacity, obj27);
                                cResult[41] = handleAdvertiserDetailsPress;
                                cResult[42] = tmp20.questDetailsPrimary;
                                cResult[43] = tmp46;
                                cResult[44] = tmp50;
                                cResult[45] = tmp55;
                                tmp53 = tmp55;
                              }
                              const obj28 = { variant: "heading-sm/semibold", color: "text-overlay-light", style: tmp49, children: quest.config.messages.gamePublisher };
                              const tmp52 = closure_14(Text_Text.Text, obj28);
                              cResult[38] = quest.config.messages.gamePublisher;
                              cResult[39] = tmp49;
                              cResult[40] = tmp52;
                              tmp50 = tmp52;
                            }
                            const items7 = [, ];
                            ({ textShadow: arr4[0], questDetailsSubheader: arr4[1] } = tmp20);
                            cResult[35] = tmp20.questDetailsSubheader;
                            cResult[36] = tmp20.textShadow;
                            cResult[37] = items7;
                            tmp49 = items7;
                          }
                          const obj29 = { variant: "heading-lg/semibold", color: "text-overlay-light", style: tmp20.textShadow, accessibilityRole: "header", children: quest.config.messages.gameTitle };
                          const tmp48 = closure_14(Text_Text.Text, obj29);
                          cResult[32] = quest.config.messages.gameTitle;
                          cResult[33] = tmp20.textShadow;
                          cResult[34] = tmp48;
                          tmp46 = tmp48;
                        }
                        const items8 = [, ];
                        ({ videoContentWrapper: arr3[0], videoContentWrapperPortrait: arr3[1] } = tmp20);
                        cResult[27] = tmp20.videoContentWrapper;
                        cResult[28] = tmp20.videoContentWrapperPortrait;
                        cResult[29] = items8;
                        tmp41 = items8;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        const obj30 = { theme: ThemeTypes.DARK, children: closure_14(VideoQuestPlayer2.VideoQuestPlayer, obj31) };
        const ThemeContextProvider = native.ThemeContextProvider;
        obj31 = { captionsEnabled, onLoad: tmp13, externallyPaused, orientation: "portrait", contentInsets, handleOpenTranscript, handleToggleCaptions, isFullscreen, onEnd, sourceQuestContent, hasCaptionAsset, hasTranscriptAsset };
        const tmp28 = closure_14(ThemeContextProvider, obj30);
        cResult[13] = captionsEnabled;
        cResult[14] = externallyPaused;
        cResult[15] = handleOpenTranscript;
        cResult[16] = handleToggleCaptions;
        cResult[17] = hasCaptionAsset;
        cResult[18] = hasTranscriptAsset;
        cResult[19] = isFullscreen;
        cResult[20] = onEnd;
        cResult[21] = sourceQuestContent;
        cResult[22] = tmp28;
        tmp24 = tmp28;
      }
      const items9 = [tmp20.videoWrapper, tmp22];
      cResult[10] = tmp20.videoWrapper;
      cResult[11] = tmp22;
      cResult[12] = items9;
      tmp23 = items9;
    }
    const items10 = [, ];
    ({ wrapper: arr[0], wrapperPortrait: arr[1] } = tmp20);
    cResult[5] = tmp20.wrapper;
    cResult[6] = tmp20.wrapperPortrait;
    cResult[7] = items10;
    tmp21 = items10;
  }
  const tmpResult2 = VideoQuestUtils;
  const videoQuestProgressRemainingAccessibilityLabel = tmpResult2.getVideoQuestProgressRemainingAccessibilityLabel(questTaskDetails, tmp6);
  cResult[0] = null != completedAt;
  cResult[1] = questTaskDetails;
  cResult[2] = videoQuestProgressRemainingAccessibilityLabel;
  tmp7 = videoQuestProgressRemainingAccessibilityLabel;
}) : (function PortraitLayout(arg0) {
  let Button2;
  let ClosedCaptionsOutlineIcon;
  let ShareIcon;
  let TranscriptOutlineIcon;
  let captionsEnabled;
  let closure_5;
  let contentWidth;
  let externallyPaused;
  let first;
  let handleAdvertiserDetailsPress;
  let handleClose;
  let handleOpenTranscript;
  let handlePrimaryCtaPress;
  let handleRewardDetailsPress;
  let handleShareQuest;
  let handleToggleCaptions;
  let hasCaptionAsset;
  let hasTranscriptAsset;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let isFullscreen;
  let isShareable;
  let items10;
  let items11;
  let items12;
  let items2;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj17;
  let obj21;
  let obj23;
  let obj25;
  let obj26;
  let obj28;
  let obj3;
  let obj6;
  let onEnd;
  let onNavigateToPostWatchVideo;
  let quest;
  let sourceQuestContent;
  let tmpResult2;
  ({ quest, captionsEnabled, contentWidth } = arg0);
  ({ handleOpenTranscript, handleToggleCaptions, sourceQuestContent, hasCaptionAsset, hasTranscriptAsset, isShareable } = arg0);
  let height;
  let memo;
  closure_3 = undefined;
  first = undefined;
  closure_5 = undefined;
  ({ handleClose, handleAdvertiserDetailsPress, handlePrimaryCtaPress, handleRewardDetailsPress, handleShareQuest, isFullscreen, onNavigateToPostWatchVideo, onEnd, externallyPaused } = arg0);
  let obj = contentWidth(memo[37]);
  const questTaskDetails = obj.useQuestTaskDetails(quest);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  const tmpResult = contentWidth(memo[38]);
  const videoQuestProgressRemainingAccessibilityLabel = tmpResult.getVideoQuestProgressRemainingAccessibilityLabel(questTaskDetails, tmp5);
  height = height(tmp2[40])(react.useContext(tmp(tmp2[39]).QuestDockGestureContext).windowDimensions).height;
  items = [contentWidth];
  memo = react.useMemo(() => Math.floor(contentWidth / unpackModuleId), items);
  const callback = react.useCallback(() => {

  }, []);
  const tmp10 = height(memo[17])();
  closure_3 = tmp10;
  [first, closure_5] = react.useState(64);
  items1 = [memo, first, height, tmp10];
  const callback1 = react.useCallback((nativeEvent) => {
    closure_5(nativeEvent.nativeEvent.layout.height);
  }, []);
  const memo1 = react.useMemo(() => Math.min(height - closure_3.top - closure_3.bottom - first, memo), items1);
  const tmp15 = closure_24(height - memo1 - first < 200);
  let obj2 = { bottom: true, style: items2, children: items11 };
  items2 = [, ];
  ({ wrapper: arr3[0], wrapperPortrait: arr3[1] } = tmp15);
  const items3 = [tmp15.videoWrapper, ];
  const SafeAreaPaddingView = tmp(tmp2[36]).SafeAreaPaddingView;
  if (null == memo1) {
    obj3 = { flexGrow: 1 };
  } else {
    obj3 = { height: memo1 };
  }
  const obj4 = { style: items3, children: items4 };
  items3[1] = obj3;
  const obj5 = { theme: ThemeTypes.DARK, children: closure_14(contentWidth(memo[18]).VideoQuestPlayer, obj6) };
  const ThemeContextProvider = tmp(tmp2[20]).ThemeContextProvider;
  obj6 = { captionsEnabled, onLoad: callback, externallyPaused, orientation: "portrait", contentInsets, handleOpenTranscript, handleToggleCaptions, isFullscreen, onEnd, sourceQuestContent, hasCaptionAsset, hasTranscriptAsset };
  items4 = [closure_14(ThemeContextProvider, obj5), , , ];
  const obj7 = { start, end, style: tmp15.gradientTop, colors: items };
  items4[1] = closure_14(height(memo[41]), obj7);
  const obj8 = { start, end, style: tmp15.gradientBottom, colors: items1 };
  items4[2] = closure_14(height(memo[41]), obj8);
  const obj9 = { style: items5, children: items6 };
  items5 = [, ];
  ({ videoContentWrapper: arr6[0], videoContentWrapperPortrait: arr6[1] } = tmp15);
  const obj10 = { closeButtonIconColor: height(memo[8]).colors.WHITE, onClose: handleClose, showCurrentVideoTime: true, withTextShadow: true };
  const tmp7Result = height(memo[42]);
  items6 = [closure_14(tmp7Result, obj10), ];
  const obj11 = { direction: "vertical", spacing: height(memo[8]).space.PX_24, children: items10 };
  const Stack = tmp(tmp2[25]).Stack;
  const obj12 = { direction: "horizontal", justify: "space-between", spacing: height(memo[8]).space.PX_8, children: items9 };
  const Stack2 = tmp(tmp2[25]).Stack;
  const obj13 = { style: tmp15.questDetailsPrimary, onPress: handleAdvertiserDetailsPress, children: items7 };
  const PressableOpacity = tmp(tmp2[26]).PressableOpacity;
  items7 = [, ];
  const obj14 = { variant: "heading-lg/semibold", color: "text-overlay-light", style: tmp15.textShadow, accessibilityRole: "header", children: quest.config.messages.gameTitle };
  items7[0] = closure_14(contentWidth(memo[27]).Text, obj14);
  const obj15 = { variant: "heading-sm/semibold", color: "text-overlay-light", style: items8, children: quest.config.messages.gamePublisher };
  items8 = [, ];
  ({ textShadow: arr9[0], questDetailsSubheader: arr9[1] } = tmp15);
  items7[1] = closure_14(contentWidth(memo[27]).Text, obj15);
  items9 = [closure_15(PressableOpacity, obj13), ];
  const obj16 = { style: tmp15.questDetailsSecondary, children: closure_14(height(memo[9]), obj17) };
  obj17 = { quest, size: "x-sm", progress: questTaskDetails.percentComplete, hasConfetti: true, onPress: handleRewardDetailsPress, accessibilityLabel: videoQuestProgressRemainingAccessibilityLabel };
  items9[1] = closure_14(closure_8, obj16);
  items10 = [closure_15(Stack2, obj12), ];
  const obj18 = { grow: true, variant: "expressive", onPress: handlePrimaryCtaPress, text: tmpResult2.getExternalCtaLabel(quest) };
  const Button = tmp(tmp2[30]).Button;
  tmpResult2 = contentWidth(memo[31]);
  items10[1] = closure_14(Button, obj18);
  items6[1] = closure_15(Stack, obj11);
  items4[3] = closure_15(closure_8, obj9);
  items11 = [closure_15(closure_8, obj4), ];
  const obj19 = { direction: "horizontal", justify: "flex-end", align: "center", style: tmp15.footer, spacing: height(memo[8]).space.PX_4, onLayout: callback1, children: items12 };
  const Stack3 = tmp(tmp2[25]).Stack;
  let tmp18Result = tmp5;
  if (tmp18Result) {
    const obj20 = { style: tmp15.viewRewardBtn, children: closure_14(Button2, obj21) };
    obj21 = { icon: closure_14(contentWidth(memo[43]).ArrowSmallRightIcon, { size: "sm" }), iconPosition: "end", onPress: onNavigateToPostWatchVideo, variant: "secondary", size: "sm", text: intl.string(contentWidth(memo[33]).t["jyYgZ+"]) };
    Button2 = tmp(tmp2[30]).Button;
    intl = tmp(tmp2[33]).intl;
    tmp18Result = tmp18(tmp17, obj20);
  }
  items12 = [tmp18Result, , , , ];
  if (hasTranscriptAsset) {
    const obj22 = { accessibilityLabel: intl2.string(contentWidth(memo[33]).t.KCzjTi), onPress: handleOpenTranscript, children: closure_14(TranscriptOutlineIcon, obj23) };
    intl2 = tmp(tmp2[33]).intl;
    obj23 = { color: height(memo[8]).colors.TEXT_DEFAULT };
    TranscriptOutlineIcon = tmp(tmp2[44]).TranscriptOutlineIcon;
    hasTranscriptAsset = tmp18(closure_36, obj22);
  }
  items12[1] = hasTranscriptAsset;
  if (hasCaptionAsset) {
    const obj24 = { accessibilityLabel: intl3.string(contentWidth(memo[33]).t.bDSZO1), accessibilityRole: "togglebutton", accessibilityState: obj25, onPress: handleToggleCaptions, children: closure_14(ClosedCaptionsOutlineIcon, obj26) };
    intl3 = tmp(tmp2[33]).intl;
    obj25 = { checked: captionsEnabled };
    const tmp22 = closure_36;
    if (captionsEnabled) {
      ClosedCaptionsOutlineIcon = tmp(tmp2[45]).ClosedCaptionsIcon;
    } else {
      ClosedCaptionsOutlineIcon = tmp(tmp2[46]).ClosedCaptionsOutlineIcon;
    }
    obj26 = { color: height(memo[8]).colors.TEXT_DEFAULT };
    hasCaptionAsset = tmp18(tmp22, obj24);
  }
  items12[2] = hasCaptionAsset;
  if (isShareable) {
    const obj27 = { accessibilityLabel: intl4.string(contentWidth(memo[33]).t.Ej3B3Y), onPress: handleShareQuest, children: closure_14(ShareIcon, obj28) };
    intl4 = tmp(tmp2[33]).intl;
    obj28 = { color: height(memo[8]).colors.TEXT_DEFAULT };
    ShareIcon = tmp(tmp2[47]).ShareIcon;
    isShareable = tmp18(closure_36, obj27);
  }
  items12[3] = isShareable;
  const obj29 = {
    quest,
    location: constants.VIDEO_MODAL_MOBILE,
    sourceQuestContent,
    children: function renderContextMenuButton(ref) {
      let MoreHorizontalIcon;
      let intl;
      let obj2;
      const obj = { accessibilityLabel: intl.string(contentWidth(memo[33]).t.PdRCRg), ref, children: closure_1_14(MoreHorizontalIcon, obj2) };
      ref = ref.ref;
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      intl = contentWidth(memo[33]).intl;
      const merged1 = Object.assign(merged);
      obj2 = { color: height(memo[8]).colors.TEXT_DEFAULT };
      MoreHorizontalIcon = contentWidth(memo[48]).MoreHorizontalIcon;
      return closure_1_14(closure_1_36, obj);
    }
  };
  items12[4] = closure_14(height(memo[28]), obj29);
  items11[1] = closure_15(Stack3, obj19);
  return closure_15(SafeAreaPaddingView, obj2);
}));
createStyles = createStyles_mod;
let obj = { footerButton: obj2 };
obj2 = { padding: nativeDefault.space.PX_8 };
let closure_35 = createStyles.createStyles(obj);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_36 = ReactCompilerGating.isReactCompilerEnabled() ? (function FooterButton(ref) {
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(7);
  if (cResult[0] !== ref) {
    const tmp8 = _objectWithoutProperties(ref, closure_4);
    cResult[0] = ref;
    cResult[1] = tmp8;
    cResult[2] = ref.ref;
    tmp5 = ref;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const tmp9 = closure_35();
  if (cResult[3] === tmp4) {
    if (cResult[4] === tmp5) {
      let tmp10;
      if (cResult[5] === tmp9.footerButton) {
        tmp10 = cResult[6];
      }
      return tmp10;
    }
  }
  const obj2 = { accessibilityRole: "button", style: tmp9.footerButton, ref: tmp5 };
  const PressableOpacity = Pressables.PressableOpacity;
  const merged = Object.assign(tmp4);
  const tmp12 = syncedClientThemes(PressableOpacity, obj2);
  cResult[3] = tmp4;
  cResult[4] = tmp5;
  cResult[5] = tmp9.footerButton;
  cResult[6] = tmp12;
  tmp10 = tmp12;
}) : (function FooterButton(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const obj = { accessibilityRole: "button", style: closure_35().footerButton, ref };
  const PressableOpacity = Pressables.PressableOpacity;
  const merged1 = Object.assign(merged);
  return syncedClientThemes(PressableOpacity, obj);
});
const memoResult = react.memo(function VideoQuestModalContentInProgress(arg0) {
  let contentWidth;
  let isFullscreen;
  let onClose;
  let onEnd;
  let onNavigateToPostWatchVideo;
  let setIsFullscreen;
  let sourceQuestContent;
  let tmp11;
  let tmp6;
  let videoQuestClickCtaAndMaybeCloseModal;
  ({ onClose, sourceQuestContent } = arg0);
  ({ contentWidth, isFullscreen, onNavigateToPostWatchVideo, onEnd, setIsFullscreen } = arg0);
  let tmp = sourceQuestContent;
  let tmp2 = dependencyMap;
  let obj = sourceQuestContent(16469);
  const quest = obj.useVideoQuestModalContext().quest;
  items = [quest];
  items1 = [quest];
  const memo = react.useMemo(() => {
    const obj = AssetUtils;
    return obj.getQuestAsset(quest, AssetUtils.QuestAssetType.VIDEO_PLAYER_CAPTION, undefined, true);
  }, items);
  const memo1 = react.useMemo(() => {
    const obj = AssetUtils;
    return obj.getQuestAsset(quest, AssetUtils.QuestAssetType.VIDEO_PLAYER_TRANSCRIPT, undefined, true);
  }, items1);
  [tmp6, dependencyMap] = videoQuestClickCtaAndMaybeCloseModal(react.useState(false), 2);
  const items2 = [quest];
  const tmp5 = videoQuestClickCtaAndMaybeCloseModal(react.useState(false), 2);
  const callback = react.useCallback(() => dependencyMap((arg0) => !arg0), []);
  const callback1 = react.useCallback(() => {
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    ActionSheetActionCreatorsDefault;
    const obj = { quest };
    const tmp2 = asyncRequire(16495, dependencyMap.paths);
    openLazy(tmp2, "transcript-" + quest.id, obj);
  }, items2);
  let obj2 = sourceQuestContent(9605);
  const getQuestImpressionId = obj2.useGetQuestImpressionId();
  [tmp11, closure_4] = videoQuestClickCtaAndMaybeCloseModal(react.useState(false), 2);
  const tmp10 = videoQuestClickCtaAndMaybeCloseModal(react.useState(false), 2);
  let obj3 = sourceQuestContent(7796);
  const isShareableQuestResult = obj3.isShareableQuest(quest.config);
  _objectWithoutProperties = isShareableQuestResult;
  const items3 = [isShareableQuestResult, quest.id, getQuestImpressionId, sourceQuestContent];
  const callback2 = react.useCallback(() => {
    let obj3;
    const tmp = _objectWithoutProperties;
    if (tmp) {
      const obj = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: AnalyticsTypes.QuestContentCTA.MOBILE_SHARESHEET, surfaceId: QuestTypes.QuestContent.VIDEO_MODAL_MOBILE, sourceQuestContent, impressionId: getQuestImpressionId() };
      const captureAdUserAction = captureAdUserAction2.captureAdUserAction;
      captureAdUserAction2;
      captureAdUserAction(obj);
      closure_4(true);
      const obj2 = {
        message: obj3.getQuestUrl(quest.id),
        iOSOnlyShareCallback() {
            return closure_1_4(false);
          }
      };
      const showShareActionSheet = showShareActionSheet2.showShareActionSheet;
      showShareActionSheet2;
      const _HermesInternal = HermesInternal;
      obj3 = QuestCopyUtils;
      showShareActionSheet(obj2, "Video Quest Modal - " + quest.id);
    }
  }, items3);
  const obj4 = sourceQuestContent(16496);
  videoQuestClickCtaAndMaybeCloseModal = obj4.useVideoQuestClickCtaAndMaybeCloseModal({ quest, onClose, sourceQuestContent });
  const items4 = [videoQuestClickCtaAndMaybeCloseModal];
  const items5 = [videoQuestClickCtaAndMaybeCloseModal];
  const callback3 = react.useCallback(() => videoQuestClickCtaAndMaybeCloseModal(QuestTypes.QuestContent.VIDEO_MODAL_MOBILE_FOOTER), items4);
  const items6 = [quest.id];
  const callback4 = react.useCallback(() => videoQuestClickCtaAndMaybeCloseModal(QuestTypes.QuestContent.VIDEO_MODAL_MOBILE), items5);
  const callback5 = react.useCallback(() => {
    const obj = QuestUtils;
    const obj2 = { questId: quest.id };
    const result = obj.openRewardDetailsBottomSheet(obj2);
  }, items6);
  const obj5 = sourceQuestContent(16497);
  const videoExternallyPaused = obj5.useVideoExternallyPaused(quest.id, tmp11);
  const tmp19 = quest.config.taskConfigV2.tasks[sourceQuestContent(undefined, 6718).FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE];
  let tmp20 = null == tmp19;
  if (!tmp20) {
    const tmpResult = tmp(14122);
    tmp20 = "portrait" === tmpResult.getVideoOrientation(tmp19);
  }
  const obj6 = { quest, captionsEnabled: tmp6, contentWidth, handleClose: onClose, handleAdvertiserDetailsPress: callback3, handlePrimaryCtaPress: callback4, handleRewardDetailsPress: callback5, handleShareQuest: callback2, handleOpenTranscript: callback1, handleToggleCaptions: callback, isFullscreen, onNavigateToPostWatchVideo, onEnd, setIsFullscreen, externallyPaused: videoExternallyPaused, sourceQuestContent, hasCaptionAsset: null != memo, hasTranscriptAsset: null != memo1, isShareable: isShareableQuestResult };
  return closure_14(tmp20 ? closure_34 : closure_33, obj6);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalContentInProgress.tsx");

export default memoResult;
