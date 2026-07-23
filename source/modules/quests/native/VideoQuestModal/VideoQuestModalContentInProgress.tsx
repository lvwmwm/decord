// Module ID: 14026
// Function ID: 107353
// Name: importDefaultResult1
// Dependencies: [57, 31, 27, 4976, 482, 33, 666, 689, 14027, 4130, 477, 9458, 10466, 14029, 14032, 13995, 3991, 4131, 1557, 5121, 3842, 14045, 7589, 14046, 14023, 14047, 4541, 4660, 4126, 14048, 5085, 4543, 9468, 7771, 1212, 12167, 10172, 10464, 10474, 4554, 14050, 10171, 13919, 13917, 12227, 8968, 14022, 4098, 14051, 1934, 10468, 6963, 9449, 9450, 9451, 6970, 6969, 4979, 6959, 8332, 14052, 10919, 14053, 4983, 2]

// Module 14026 (importDefaultResult1)
import QuestsVisibleMessagesChangedSource from "QuestsVisibleMessagesChangedSource";
import importAllResult from "Button";
import get_ActivityIndicator from "PressableBase";
import { QuestsExperimentLocations } from "QuestsExperimentLocations";
import { ThemeTypes } from "sum";
import jsxProd from "IconButton";
import importDefaultResult from "t";
import importDefaultResult1 from "t";
import alphaResult1 from "_slicedToArray";
import importDefaultResult2 from "t";
import alphaResult2 from "_slicedToArray";
import importDefaultResult3 from "t";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ View: closure_5, StyleSheet: closure_6, ScrollView: closure_7 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let closure_12 = { x: 0, y: 0 };
let closure_13 = { x: 0, y: 1 };
const importDefaultResultResult = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.PLUM_23);
let items = [require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.PLUM_23).alpha(0.4).hex(), ];
const alphaResult = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.PLUM_23).alpha(0.4);
const importDefaultResult1Result = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.PLUM_23);
items[1] = require("_slicedToArray").hex();
const importDefaultResult2Result = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.PLUM_23);
let items1 = [require("_slicedToArray").hex(), ];
const importDefaultResult3Result = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.PLUM_23);
items1[1] = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.PLUM_23).alpha(0.4).hex();
let closure_16 = { bottom: 158, top: 64, left: 16, right: 16 };
let closure_17 = { bottom: 16, left: 16, right: 16 };
let closure_18 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOWEST, flex: 1 };
  obj.wrapper = obj;
  obj = { borderTopLeftRadius: importDefault(689).radii.lg, borderTopRightRadius: importDefault(689).radii.lg };
  let str = "center";
  if (arg0) {
    str = "flex-start";
  }
  obj.justifyContent = str;
  obj.wrapperPortrait = obj;
  obj.videoLandscape = { width: "100%", position: "relative" };
  obj.videoLandscape9by16 = { aspectRatio: 1.7777777777777777, flexShrink: 0 };
  obj.landscapeContentScroll = { flex: 1 };
  obj.landscapeContentScrollContent = { flexGrow: 1 };
  obj.videoLandscapeFullscreen = { flexGrow: 1, flexShrink: 1 };
  const obj1 = { borderRadius: importDefault(689).radii.lg, flexGrow: 0, flexShrink: 0, overflow: "hidden" };
  obj.videoWrapper = obj1;
  obj.videoWrapperLandscape = { flexGrow: 1, borderTopLeftRadius: importDefault(689).radii.none, borderTopRightRadius: importDefault(689).radii.none };
  const obj2 = { flexGrow: 1, borderTopLeftRadius: importDefault(689).radii.none, borderTopRightRadius: importDefault(689).radii.none };
  obj.videoWrapperFullscreen = { borderRadius: importDefault(689).radii.none };
  const obj4 = { flexDirection: "column", pointerEvents: "box-none", flexGrow: 1, flexShrink: 0, justifyContent: "space-between", padding: importDefault(689).space.PX_16 };
  obj.videoContentWrapper = obj4;
  obj.videoContentWrapperLandscape = { padding: 0 };
  const merged = Object.assign(closure_6.absoluteFillObject);
  obj.videoContentWrapperPortrait = {};
  obj.rewardContainer = { justifyContent: "center", flexGrow: 1, flexShrink: 0 };
  const obj3 = { borderRadius: importDefault(689).radii.none };
  const obj5 = {};
  obj.rewardContentCentered = { position: "absolute", top: importDefault(689).space.PX_16, left: importDefault(689).space.PX_16, right: importDefault(689).space.PX_16, bottom: importDefault(689).space.PX_16, alignItems: "center", justifyContent: "center" };
  const obj6 = { position: "absolute", top: importDefault(689).space.PX_16, left: importDefault(689).space.PX_16, right: importDefault(689).space.PX_16, bottom: importDefault(689).space.PX_16, alignItems: "center", justifyContent: "center" };
  obj.modalBackground = { backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOWEST };
  const obj7 = { backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOWEST };
  obj.questDetailsLandscape = { borderTopWidth: 1, borderColor: importDefault(689).colors.BACKGROUND_MOD_STRONG, paddingHorizontal: importDefault(689).space.PX_16, paddingTop: importDefault(689).space.PX_24 };
  obj.questDetailsPrimary = { flexGrow: 0, flexShrink: 1 };
  obj.questDetailsSecondary = { flexGrow: 0, flexShrink: 0 };
  const obj8 = { borderTopWidth: 1, borderColor: importDefault(689).colors.BACKGROUND_MOD_STRONG, paddingHorizontal: importDefault(689).space.PX_16, paddingTop: importDefault(689).space.PX_24 };
  obj.footer = { paddingHorizontal: importDefault(689).space.PX_16, paddingVertical: importDefault(689).space.PX_8 };
  const obj9 = { paddingHorizontal: importDefault(689).space.PX_16, paddingVertical: importDefault(689).space.PX_8 };
  obj.icon = { color: importDefault(689).colors.INTERACTIVE_TEXT_ACTIVE };
  const obj10 = { color: importDefault(689).colors.INTERACTIVE_TEXT_ACTIVE };
  obj.iconDisabled = { color: importDefault(689).colors.INTERACTIVE_TEXT_DEFAULT };
  const obj11 = { color: importDefault(689).colors.INTERACTIVE_TEXT_DEFAULT };
  obj.closeButtonLandscape = { position: "absolute", top: importDefault(689).space.PX_16, left: importDefault(689).space.PX_16 };
  const obj13 = {};
  const merged1 = Object.assign(closure_6.absoluteFillObject);
  obj13["bottom"] = undefined;
  obj13["height"] = 70;
  obj.gradientTop = obj13;
  const obj14 = {};
  const merged2 = Object.assign(closure_6.absoluteFillObject);
  obj14["top"] = undefined;
  obj14["height"] = 150;
  obj.gradientBottom = obj14;
  const obj15 = { margin: -15, padding: 15, textShadowColor: importDefault(689).colors.BLACK, textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 15 };
  obj.textShadow = obj15;
  obj.viewRewardBtn = { marginRight: "auto" };
  const obj16 = { borderRadius: importDefault(689).radii.lg, height: 96, width: "100%" };
  obj.playerThumbnail = obj16;
  obj.cloudsBackground = { zIndex: -1 };
  obj.questDetailsSubheader = { opacity: 0.6 };
  return obj;
});
let closure_19 = { code: "function VideoQuestModalContentInProgressTsx1(){const{withDelay,LOGO_REWARD_TRANSITION_DELAY_MS,withTiming,isComponentMounted,LOGO_REWARD_TRANSITION_DURATION_MS}=this.__closure;return withDelay(LOGO_REWARD_TRANSITION_DELAY_MS,withTiming(isComponentMounted.get(),{duration:LOGO_REWARD_TRANSITION_DURATION_MS}));}" };
let closure_20 = { code: "function VideoQuestModalContentInProgressTsx2(){const{animation}=this.__closure;return{opacity:animation.get()};}" };
let closure_21 = { code: "function VideoQuestModalContentInProgressTsx3(){const{animation}=this.__closure;return{opacity:1-animation.get()};}" };
let closure_22 = { code: "function VideoQuestModalContentInProgressTsx4(){const{animation}=this.__closure;return{pointerEvents:animation.get()>0.3?'auto':'none'};}" };
let closure_23 = importAllResult.memo((quest) => {
  let c4;
  let captionsEnabled;
  let externallyPaused;
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
  let sourceQuestContent;
  let tmp11;
  quest = quest.quest;
  ({ handlePrimaryCtaPress, isFullscreen } = quest);
  const setIsFullscreen = quest.setIsFullscreen;
  ({ sourceQuestContent, isShareable } = quest);
  let callback;
  let sharedValue;
  let derivedValue;
  ({ captionsEnabled, handleClose, handleShareQuest, handleOpenTranscript, handleToggleCaptions, onNavigateToPostWatchVideo, onEnd, externallyPaused, hasCaptionAsset, hasTranscriptAsset } = quest);
  let obj = quest(setIsFullscreen[10]);
  const tmp = callback4(obj.isAndroid());
  const items = [quest];
  const memo = importAllResult.useMemo(() => quest(setIsFullscreen[11]).getQuestAsset(quest, quest(setIsFullscreen[11]).QuestAssetType.HERO), items);
  const userStatus = quest.userStatus;
  let completedAt;
  if (null != userStatus) {
    completedAt = userStatus.completedAt;
  }
  let tmp4 = null != completedAt;
  const VideoQuestPlayerRefactorExperiment = quest(setIsFullscreen[12]).VideoQuestPlayerRefactorExperiment;
  obj = { location: QuestsExperimentLocations.VIDEO_MODAL_MOBILE };
  if (VideoQuestPlayerRefactorExperiment.useConfig(obj).enabled) {
    let VideoQuestPlayer = tmp5(tmp6[13]).VideoQuestPlayer;
  } else {
    VideoQuestPlayer = tmp5(tmp6[14]).VideoQuestPlayer;
  }
  const windowDimensions = importAllResult.useContext(quest(setIsFullscreen[15]).QuestDockGestureContext).windowDimensions;
  const tmp7 = callback(undefined.useState(null), 2);
  const first = tmp7[0];
  callback = tmp7[1];
  callback = importAllResult.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.height);
  }, []);
  [tmp11, c4] = callback(undefined.useState(null), 2);
  let diff = null;
  const callback1 = importAllResult.useCallback((nativeEvent) => {
    _undefined(isFullscreen(setIsFullscreen[7]).space.PX_24 + nativeEvent.nativeEvent.layout.height);
  }, []);
  if (null != first) {
    diff = first - 2 * isFullscreen(setIsFullscreen[7]).space.PX_16;
  }
  let str = "md";
  let str2 = "md";
  if (null != diff) {
    str2 = str;
    if (null != tmp11) {
      let str3 = "lg";
      if (diff < quest(setIsFullscreen[8]).QUEST_PROGRESS_DIAMETER_BY_SIZE.lg + tmp11) {
        if (diff >= quest(setIsFullscreen[8]).QUEST_PROGRESS_DIAMETER_BY_SIZE["md-lg"] + tmp11) {
          str = "md-lg";
        }
        str3 = str;
      }
      str2 = str3;
    }
  }
  let num5 = 0;
  if (null != tmp11) {
    num5 = tmp11;
  }
  const sum = quest(setIsFullscreen[8]).QUEST_PROGRESS_DIAMETER_BY_SIZE.md + num5;
  const sum1 = sum + 2 * isFullscreen(setIsFullscreen[7]).space.PX_16;
  let obj2 = quest(setIsFullscreen[16]);
  sharedValue = obj2.useSharedValue(0);
  const items1 = [sharedValue];
  const effect = importAllResult.useEffect(() => {
    const result = sharedValue.set(1);
  }, items1);
  let obj3 = quest(setIsFullscreen[16]);
  function ne() {
    const obj = quest(setIsFullscreen[16]);
    return obj.withDelay(3000, quest(setIsFullscreen[17]).withTiming(sharedValue.get(), { duration: 1000 }));
  }
  obj = { withDelay: quest(setIsFullscreen[16]).withDelay, LOGO_REWARD_TRANSITION_DELAY_MS: 3000, withTiming: quest(setIsFullscreen[17]).withTiming, isComponentMounted: sharedValue, LOGO_REWARD_TRANSITION_DURATION_MS: 1000 };
  ne.__closure = obj;
  ne.__workletHash = 12561024953493;
  ne.__initData = closure_19;
  derivedValue = obj3.useDerivedValue(ne);
  let obj5 = quest(setIsFullscreen[16]);
  function oe() {
    return { opacity: derivedValue.get() };
  }
  oe.__closure = { animation: derivedValue };
  oe.__workletHash = 17463485679217;
  oe.__initData = closure_20;
  const animatedStyle = obj5.useAnimatedStyle(oe);
  let obj6 = quest(setIsFullscreen[16]);
  function se() {
    return { opacity: 1 - derivedValue.get() };
  }
  se.__closure = { animation: derivedValue };
  se.__workletHash = 9103187579788;
  se.__initData = closure_21;
  const animatedStyle1 = obj6.useAnimatedStyle(se);
  let obj7 = quest(setIsFullscreen[16]);
  function ae() {
    const obj = {};
    let str = "none";
    if (derivedValue.get() > 0.3) {
      str = "auto";
    }
    obj.pointerEvents = str;
    return obj;
  }
  ae.__closure = { animation: derivedValue };
  ae.__workletHash = 11833431315705;
  ae.__initData = closure_22;
  const animatedProps = obj7.useAnimatedProps(ae);
  const tmp28 = isFullscreen(setIsFullscreen[18])();
  const items2 = [isFullscreen, setIsFullscreen];
  const callback2 = importAllResult.useCallback((arg0) => {
    let tmp2 = isFullscreen;
    if (!isFullscreen) {
      tmp2 = "landscape" !== tmp;
    }
    let str2 = "PORTRAIT";
    if (!tmp2) {
      str2 = "LANDSCAPE";
    }
    setIsFullscreen("LANDSCAPE" === str2);
  }, items2);
  const obj1 = { bottom: true, style: tmp.wrapper };
  obj2 = {};
  const items3 = [, , ];
  ({ videoWrapper: arr4[0], videoWrapperLandscape: arr4[1] } = tmp);
  let videoWrapperFullscreen = isFullscreen;
  if (isFullscreen) {
    videoWrapperFullscreen = tmp.videoWrapperFullscreen;
  }
  items3[2] = videoWrapperFullscreen;
  obj2.style = items3;
  obj3 = { theme: ThemeTypes.DARKER };
  const obj4 = { captionsEnabled, orientation: "landscape" };
  const items4 = [tmp.videoLandscape, , ];
  let videoLandscape9by16 = !isFullscreen;
  if (videoLandscape9by16) {
    videoLandscape9by16 = tmp.videoLandscape9by16;
  }
  items4[1] = videoLandscape9by16;
  let videoLandscapeFullscreen = isFullscreen;
  if (isFullscreen) {
    videoLandscapeFullscreen = tmp.videoLandscapeFullscreen;
  }
  items4[2] = videoLandscapeFullscreen;
  obj4.style = items4;
  obj4.contentInsets = closure_17;
  obj4.handleOpenTranscript = handleOpenTranscript;
  obj4.handleToggleCaptions = handleToggleCaptions;
  obj4.isFullscreen = isFullscreen;
  obj4.externallyPaused = externallyPaused;
  obj4.onEnd = onEnd;
  obj4.onToggleFullscreen = callback2;
  obj4.sourceQuestContent = sourceQuestContent;
  obj4.hasCaptionAsset = hasCaptionAsset;
  obj4.hasTranscriptAsset = hasTranscriptAsset;
  const items5 = [callback2(VideoQuestPlayer, obj4), ];
  obj5 = { onClose: handleClose };
  const items6 = [tmp.closeButtonLandscape, ];
  let tmp37 = isFullscreen;
  const tmp10 = callback(undefined.useState(null), 2);
  const tmp30 = callback2;
  const tmp31 = callback3;
  const tmp32 = sharedValue;
  const tmp33 = callback3;
  const tmp34 = callback2;
  const tmp35 = callback2;
  if (isFullscreen) {
    tmp37 = null != tmp28;
  }
  if (tmp37) {
    obj6 = { left: tmp28.left };
    tmp37 = obj6;
  }
  items6[1] = tmp37;
  obj5.style = items6;
  items5[1] = tmp35(isFullscreen(setIsFullscreen[21]), obj5);
  obj3.children = items5;
  const items7 = [tmp33(quest(setIsFullscreen[20]).ThemeContextProvider, obj3), ];
  let tmp39Result = !isFullscreen;
  if (tmp39Result) {
    obj7 = {};
    ({ landscapeContentScroll: obj15.style, landscapeContentScrollContent: obj15.contentContainerStyle } = tmp);
    obj7.showsVerticalScrollIndicator = false;
    obj7.alwaysBounceVertical = false;
    const obj8 = {};
    const items8 = [, ];
    ({ videoContentWrapper: arr9[0], videoContentWrapperLandscape: arr9[1] } = tmp);
    obj8.style = items8;
    const obj9 = {};
    const items9 = [tmp.rewardContainer, ];
    const obj10 = { minHeight: sum1 };
    items9[1] = obj10;
    obj9.style = items9;
    obj9.onLayout = callback;
    const obj11 = {};
    const items10 = [tmp.rewardContentCentered, animatedStyle];
    obj11.style = items10;
    obj11.animatedProps = animatedProps;
    const obj12 = { size: str2, onTextBlockLayout: callback1 };
    obj11.children = callback2(isFullscreen(setIsFullscreen[23]), obj12);
    const items11 = [callback2(isFullscreen(setIsFullscreen[22]), obj11), ];
    const obj13 = {};
    const items12 = [tmp.rewardContentCentered, , ];
    const tmp39 = callback2;
    const tmp40 = closure_7;
    const tmp45 = isFullscreen(setIsFullscreen[22]);
    let obj21 = quest(setIsFullscreen[10]);
    const tmp46 = isFullscreen(setIsFullscreen[22]);
    items12[1] = obj21.isAndroid() && tmp.modalBackground;
    items12[2] = animatedStyle1;
    obj13.style = items12;
    obj13.pointerEvents = "none";
    let obj22 = quest(setIsFullscreen[10]);
    let isAndroidResult = obj22.isAndroid();
    if (isAndroidResult) {
      const obj14 = { align: "top", style: tmp.cloudsBackground };
      isAndroidResult = callback2(isFullscreen(setIsFullscreen[24]), obj14);
    }
    const items13 = [isAndroidResult, ];
    const obj15 = {};
    const tmp48 = obj21.isAndroid() && tmp.modalBackground;
    let obj25 = quest(setIsFullscreen[11]);
    obj15.assetUrl = obj25.getQuestAsset(quest, quest(setIsFullscreen[11]).QuestAssetType.LOGO_TYPE, "dark").url;
    obj15.maxHeight = 90;
    obj15.maxWidth = windowDimensions.get().width - 120;
    items13[1] = callback2(isFullscreen(setIsFullscreen[25]), obj15);
    obj13.children = items13;
    items11[1] = callback3(tmp46, obj13);
    obj9.children = items11;
    const items14 = [callback3(sharedValue, obj9), , ];
    const obj16 = { align: "top", style: tmp.cloudsBackground };
    items14[1] = callback2(isFullscreen(setIsFullscreen[24]), obj16);
    const obj17 = { direction: "vertical", spacing: isFullscreen(setIsFullscreen[7]).space.PX_24, style: tmp.questDetailsLandscape };
    const obj18 = { direction: "horizontal", justify: "space-between", spacing: isFullscreen(setIsFullscreen[7]).space.PX_8 };
    const obj19 = { style: tmp.questDetailsPrimary, onPress: handlePrimaryCtaPress };
    const obj20 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: quest.config.messages.gameTitle };
    const items15 = [callback2(quest(setIsFullscreen[28]).Text, obj20), ];
    obj21 = { variant: "heading-sm/semibold", color: "text-subtle", children: quest.config.messages.gamePublisher };
    items15[1] = callback2(quest(setIsFullscreen[28]).Text, obj21);
    obj19.children = items15;
    const items16 = [callback3(quest(setIsFullscreen[27]).PressableOpacity, obj19), ];
    obj22 = { style: tmp.questDetailsSecondary };
    const obj23 = { quest, location: QuestsExperimentLocations.VIDEO_MODAL_MOBILE, sourceQuestContent };
    obj22.children = callback2(isFullscreen(setIsFullscreen[29]), obj23);
    items16[1] = callback2(sharedValue, obj22);
    obj18.children = items16;
    const items17 = [callback3(quest(setIsFullscreen[26]).Stack, obj18), , ];
    let tmp63 = null != memo;
    if (tmp63) {
      const obj24 = { onPress: handlePrimaryCtaPress };
      obj25 = {};
      const obj26 = { uri: memo.url };
      obj25.source = obj26;
      obj25.style = tmp.playerThumbnail;
      obj24.children = callback2(isFullscreen(setIsFullscreen[30]), obj25);
      tmp63 = callback2(quest(setIsFullscreen[27]).PressableOpacity, obj24);
    }
    items17[1] = tmp63;
    const obj27 = { direction: "horizontal", spacing: isFullscreen(setIsFullscreen[7]).space.PX_16 };
    const obj28 = { grow: true, variant: "expressive", onPress: handlePrimaryCtaPress };
    const tmp58 = isFullscreen(setIsFullscreen[25]);
    const tmp60 = callback3;
    const tmp68 = callback3;
    obj28.text = quest(setIsFullscreen[32]).getExternalCtaLabel(quest);
    const items18 = [callback2(quest(setIsFullscreen[31]).Button, obj28), , ];
    if (isShareable) {
      const obj29 = {};
      const intl = quest(setIsFullscreen[34]).intl;
      obj29.accessibilityLabel = intl.string(quest(setIsFullscreen[34]).t.Ej3B3Y);
      obj29.icon = isFullscreen(setIsFullscreen[35]);
      obj29.onPress = handleShareQuest;
      obj29.variant = "secondary";
      isShareable = callback2(quest(setIsFullscreen[33]).IconButton, obj29);
    }
    items18[1] = isShareable;
    if (tmp4) {
      const obj30 = {};
      const intl2 = quest(setIsFullscreen[34]).intl;
      obj30.accessibilityLabel = intl2.string(quest(setIsFullscreen[34]).t.cfY4PE);
      obj30.icon = isFullscreen(setIsFullscreen[36]);
      obj30.onPress = onNavigateToPostWatchVideo;
      obj30.variant = "secondary";
      tmp4 = callback2(quest(setIsFullscreen[33]).IconButton, obj30);
    }
    items18[2] = tmp4;
    obj27.children = items18;
    items17[2] = tmp68(quest(setIsFullscreen[26]).Stack, obj27);
    obj17.children = items17;
    items14[2] = tmp60(quest(setIsFullscreen[26]).Stack, obj17);
    obj8.children = items14;
    obj7.children = callback3(sharedValue, obj8);
    tmp39Result = tmp39(tmp40, obj7);
    const obj40 = quest(setIsFullscreen[32]);
  }
  items7[1] = tmp39Result;
  obj2.children = items7;
  obj1.children = tmp31(tmp32, obj2);
  return tmp30(quest(setIsFullscreen[19]).SafeAreaPaddingView, obj1);
});
let closure_24 = importAllResult.memo((arg0) => {
  let captionsEnabled;
  let color;
  let externallyPaused;
  let handleClose;
  let handleOpenTranscript;
  let handlePrimaryCtaPress;
  let handleRewardDetailsPress;
  let handleShareQuest;
  let handleToggleCaptions;
  let hasCaptionAsset;
  let hasTranscriptAsset;
  let icon;
  let isFullscreen;
  let isShareable;
  let onEnd;
  let onNavigateToPostWatchVideo;
  let quest;
  let sourceQuestContent;
  ({ quest, captionsEnabled, handlePrimaryCtaPress, handleOpenTranscript, handleToggleCaptions, sourceQuestContent, hasCaptionAsset, hasTranscriptAsset, isShareable } = arg0);
  let windowDimensions;
  let memo;
  let dependencyMap;
  let first;
  let importAllResult;
  ({ handleClose, handleRewardDetailsPress, handleShareQuest, isFullscreen, onNavigateToPostWatchVideo, onEnd, externallyPaused } = arg0);
  let obj = windowDimensions(10464);
  const questTaskDetails = obj.useQuestTaskDetails(quest);
  const userStatus = quest.userStatus;
  let completedAt;
  if (null != userStatus) {
    completedAt = userStatus.completedAt;
  }
  let obj1 = windowDimensions(10474);
  const videoQuestProgressRemainingAccessibilityLabel = obj1.getVideoQuestProgressRemainingAccessibilityLabel(questTaskDetails, tmp3);
  const VideoQuestPlayerRefactorExperiment = windowDimensions(10466).VideoQuestPlayerRefactorExperiment;
  obj = { location: QuestsExperimentLocations.VIDEO_MODAL_MOBILE };
  if (VideoQuestPlayerRefactorExperiment.useConfig(obj).enabled) {
    let VideoQuestPlayer = tmp5(14029).VideoQuestPlayer;
  } else {
    VideoQuestPlayer = tmp5(14032).VideoQuestPlayer;
  }
  windowDimensions = importAllResult.useContext(windowDimensions(13995).QuestDockGestureContext).windowDimensions;
  const items = [windowDimensions];
  memo = importAllResult.useMemo(() => Math.floor(windowDimensions.get().width / 0.5625), items);
  const callback = importAllResult.useCallback(() => {

  }, []);
  const tmp9 = memo(1557)();
  dependencyMap = tmp9;
  const tmp10 = first(importAllResult.useState(64), 2);
  first = tmp10[0];
  importAllResult = tmp10[1];
  const items1 = [memo, first, windowDimensions, tmp9];
  const callback1 = importAllResult.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.height);
  }, []);
  const memo1 = importAllResult.useMemo(() => Math.min(windowDimensions.get().height - _undefined.top - _undefined.bottom - first, memo), items1);
  icon = callback4(windowDimensions.get().height - memo1 - first < 200);
  obj = { bottom: true, style: items2 };
  items2 = [, ];
  ({ wrapper: arr3[0], wrapperPortrait: arr3[1] } = icon);
  obj1 = {};
  const items3 = [icon.videoWrapper, ];
  if (null == memo1) {
    const obj2 = { flexGrow: 1 };
    let obj3 = obj2;
  } else {
    obj3 = { height: memo1 };
  }
  items3[1] = obj3;
  obj1.style = items3;
  const obj4 = { theme: ThemeTypes.DARKER };
  const obj5 = { captionsEnabled, onLoad: callback, externallyPaused, orientation: "portrait", contentInsets: closure_16, handleOpenTranscript, handleToggleCaptions, isFullscreen, onEnd, sourceQuestContent, hasCaptionAsset, hasTranscriptAsset };
  obj4.children = callback2(VideoQuestPlayer, obj5);
  const items4 = [callback2(windowDimensions(3842).ThemeContextProvider, obj4), , , ];
  const obj6 = { start: closure_12, end: closure_13, style: icon.gradientTop, colors: items };
  items4[1] = callback2(memo(4554), obj6);
  const obj7 = { start: closure_12, end: closure_13, style: icon.gradientBottom, colors: items1 };
  items4[2] = callback2(memo(4554), obj7);
  const obj8 = { style: items5 };
  items5 = [, ];
  ({ videoContentWrapper: arr6[0], videoContentWrapperPortrait: arr6[1] } = icon);
  const obj9 = { closeButtonIconColor: memo(689).colors.WHITE, onClose: handleClose, showCurrentVideoTime: true, withTextShadow: true };
  const items6 = [callback2(memo(14050), obj9), ];
  const obj10 = { direction: "vertical", spacing: memo(689).space.PX_24 };
  const obj11 = { direction: "horizontal", justify: "space-between", spacing: memo(689).space.PX_8 };
  const obj12 = { style: icon.questDetailsPrimary, onPress: handlePrimaryCtaPress };
  const obj13 = { variant: "heading-lg/semibold", color: "text-overlay-light", style: icon.textShadow, accessibilityRole: "header", children: quest.config.messages.gameTitle };
  const items7 = [callback2(windowDimensions(4126).Text, obj13), ];
  const obj14 = { variant: "heading-sm/semibold", color: "text-overlay-light" };
  const items8 = [, ];
  ({ textShadow: arr9[0], questDetailsSubheader: arr9[1] } = icon);
  obj14.style = items8;
  obj14.children = quest.config.messages.gamePublisher;
  items7[1] = callback2(windowDimensions(4126).Text, obj14);
  obj12.children = items7;
  const items9 = [callback3(windowDimensions(4660).PressableOpacity, obj12), ];
  const obj15 = { style: icon.questDetailsSecondary, children: callback2(memo(14027), { quest, size: "x-sm", progress: questTaskDetails.percentComplete, hasConfetti: true, onPress: handleRewardDetailsPress, accessibilityLabel: videoQuestProgressRemainingAccessibilityLabel }) };
  items9[1] = callback2(closure_5, obj15);
  obj11.children = items9;
  const items10 = [callback3(windowDimensions(4541).Stack, obj11), ];
  const obj17 = { grow: true, variant: "expressive", onPress: handlePrimaryCtaPress };
  let obj21 = windowDimensions(9468);
  obj17.text = obj21.getExternalCtaLabel(quest);
  items10[1] = callback2(windowDimensions(4543).Button, obj17);
  obj10.children = items10;
  items6[1] = callback3(windowDimensions(4541).Stack, obj10);
  obj8.children = items6;
  items4[3] = callback3(closure_5, obj8);
  obj1.children = items4;
  const items11 = [callback3(closure_5, obj1), ];
  const obj18 = { direction: "horizontal", justify: "flex-end", align: "center", style: icon.footer, spacing: memo(689).space.PX_4, onLayout: callback1 };
  let tmp18 = tmp3;
  if (null != completedAt) {
    const obj19 = { style: icon.viewRewardBtn };
    const obj20 = { icon: null, iconPosition: "end", onPress: null, variant: "secondary", size: "sm" };
    obj21 = { size: "sm" };
    obj20.icon = callback2(windowDimensions(10171).ArrowSmallRightIcon, obj21);
    obj20.onPress = onNavigateToPostWatchVideo;
    let intl = windowDimensions(1212).intl;
    obj20.text = intl.string(windowDimensions(1212).t["jyYgZ+"]);
    obj19.children = callback2(windowDimensions(4543).Button, obj20);
    tmp18 = callback2(closure_5, obj19);
  }
  const items12 = [tmp18, , , , ];
  if (hasTranscriptAsset) {
    const obj22 = {};
    const intl2 = windowDimensions(1212).intl;
    obj22.accessibilityLabel = intl2.string(windowDimensions(1212).t.KCzjTi);
    obj22.onPress = handleOpenTranscript;
    const obj23 = { color: icon.iconDisabled.color };
    obj22.children = callback2(windowDimensions(13919).TranscriptOutlineIcon, obj23);
    hasTranscriptAsset = callback2(closure_26, obj22);
  }
  items12[1] = hasTranscriptAsset;
  if (!hasCaptionAsset) {
    items12[2] = hasCaptionAsset;
    if (isShareable) {
      const obj24 = {};
      const intl4 = windowDimensions(1212).intl;
      obj24.accessibilityLabel = intl4.string(windowDimensions(1212).t.Ej3B3Y);
      obj24.onPress = handleShareQuest;
      const obj25 = { color: memo(689).colors.TEXT_DEFAULT };
      obj24.children = callback2(windowDimensions(12227).ShareIcon, obj25);
      isShareable = callback2(closure_26, obj24);
    }
    items12[3] = isShareable;
    const obj26 = {
      quest,
      location: QuestsExperimentLocations.VIDEO_MODAL_MOBILE,
      sourceQuestContent,
      children(ref) {
          let obj = Object.create(null);
          obj.ref = 0;
          obj = {};
          const merged = Object.assign(ref, obj);
          const intl = windowDimensions(_undefined[34]).intl;
          obj.accessibilityLabel = intl.string(windowDimensions(_undefined[34]).t.PdRCRg);
          obj.ref = ref.ref;
          const merged1 = Object.assign(merged);
          obj = { color: memo(_undefined[7]).colors.TEXT_DEFAULT };
          obj["children"] = outer1_10(windowDimensions(_undefined[45]).MoreHorizontalIcon, obj);
          return outer1_10(outer1_26, obj);
        }
    };
    items12[4] = callback2(memo(14048), obj26);
    obj18.children = items12;
    items11[1] = callback3(windowDimensions(4541).Stack, obj18);
    obj.children = items11;
    return tmp14(windowDimensions(5121).SafeAreaPaddingView, obj);
  } else {
    const obj27 = {};
    const intl3 = windowDimensions(1212).intl;
    obj27.accessibilityLabel = intl3.string(windowDimensions(1212).t.bDSZO1);
    obj27.onPress = handleToggleCaptions;
    let obj28 = {};
    if (captionsEnabled) {
      ({ icon, color } = icon);
    } else {
      color = icon.iconDisabled.color;
    }
    obj28.color = color;
    obj28 = tmp27(windowDimensions(13917).ClosedCaptionsOutlineIcon, obj28);
    obj27.children = obj28;
    callback2(closure_26, obj27);
    const tmp28 = closure_26;
  }
});
let obj = {};
obj = { padding: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.footerButton = obj;
let closure_25 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_26 = importAllResult.forwardRef(function FooterButton(arg0, arg1) {
  const obj = { accessibilityRole: "button", style: callback5().footerButton };
  const merged = Object.assign(arg0);
  obj["ref"] = arg1;
  return callback2(require(4660) /* PressableBase */.PressableOpacity, obj);
});
const alphaResult3 = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.PLUM_23).alpha(0.4);
const memoResult = importAllResult.memo(function VideoQuestModalContentInProgress(arg0) {
  let dependencyMap;
  let isFullscreen;
  let onClose;
  let onEnd;
  let onNavigateToPostWatchVideo;
  let setIsFullscreen;
  let sourceQuestContent;
  let tmp4;
  ({ onClose, sourceQuestContent } = arg0);
  ({ isFullscreen, onNavigateToPostWatchVideo, onEnd, setIsFullscreen } = arg0);
  let obj = sourceQuestContent(14022);
  const quest = obj.useVideoQuestModalContext().quest;
  const items = [quest];
  const items1 = [quest];
  const memo = importAllResult.useMemo(() => sourceQuestContent(outer1_2[11]).getQuestAsset(quest, sourceQuestContent(outer1_2[11]).QuestAssetType.VIDEO_PLAYER_CAPTION, undefined, true), items);
  const memo1 = importAllResult.useMemo(() => sourceQuestContent(outer1_2[11]).getQuestAsset(quest, sourceQuestContent(outer1_2[11]).QuestAssetType.VIDEO_PLAYER_TRANSCRIPT, undefined, true), items1);
  [tmp4, dependencyMap] = getQuestImpressionId(importAllResult.useState(false), 2);
  const items2 = [quest];
  const callback = importAllResult.useCallback(() => callback((arg0) => !arg0), []);
  const callback1 = importAllResult.useCallback(() => {
    let obj = quest(outer1_2[47]);
    obj = { quest };
    obj.openLazy(sourceQuestContent(outer1_2[49])(outer1_2[48], outer1_2.paths), "transcript-" + quest.id, obj);
  }, items2);
  let tmp3 = getQuestImpressionId(importAllResult.useState(false), 2);
  getQuestImpressionId = sourceQuestContent(10468).useGetQuestImpressionId();
  const tmp8 = getQuestImpressionId(importAllResult.useState(false), 2);
  const obj2 = sourceQuestContent(10468);
  const isShareableQuestResult = sourceQuestContent(6963).isShareableQuest(quest.config);
  const items3 = [isShareableQuestResult, quest.id, getQuestImpressionId, sourceQuestContent];
  const callback2 = importAllResult.useCallback(() => {
    if (closure_5) {
      let tmp3;
      let obj = sourceQuestContent(outer1_2[52]);
      let tmp4 = sourceQuestContent;
      if (obj.shouldMigrateToAdAnalyticsInterface(sourceQuestContent(outer1_2[52]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "video_quest_modal_in_progress")) {
        let tmp4Result = tmp4(tmp5[53]);
        obj = { type: tmp4(tmp5[54]).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp4(tmp5[55]).AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: tmp4(tmp5[56]).QuestContentCTA.MOBILE_SHARESHEET, surfaceId: tmp4(tmp5[57]).QuestContent.VIDEO_MODAL_MOBILE, sourceQuestContent, impressionId: getQuestImpressionId() };
        tmp4Result.captureAdUserAction(obj);
      } else {
        tmp4Result = tmp4(tmp5[58]);
        obj = { questId: quest.id, questContent: tmp4(tmp5[57]).QuestContent.VIDEO_MODAL_MOBILE, questContentCTA: tmp4(tmp5[56]).QuestContentCTA.MOBILE_SHARESHEET, impressionId: getQuestImpressionId(), sourceQuestContent };
        const result = tmp4Result.trackQuestContentClicked(obj);
      }
      callback2(true);
      tmp4 = outer1_2;
      const obj1 = {};
      tmp3 = sourceQuestContent(outer1_2[32]);
      obj1.message = tmp3.getQuestUrl(quest.id);
      obj1.iOSOnlyShareCallback = function iOSOnlyShareCallback() {
        return outer1_4(false);
      };
      const _HermesInternal = HermesInternal;
      sourceQuestContent(outer1_2[59]).showShareActionSheet(obj1, "Video Quest Modal - " + quest.id);
      const obj6 = sourceQuestContent(outer1_2[59]);
    }
  }, items3);
  const obj3 = sourceQuestContent(6963);
  const items4 = [quest.id];
  const videoQuestClickCtaAndMaybeCloseModal = sourceQuestContent(14052).useVideoQuestClickCtaAndMaybeCloseModal({ quest, onClose, sourceQuestContent });
  const callback3 = importAllResult.useCallback(() => {
    let obj = sourceQuestContent(outer1_2[61]);
    obj = { questId: quest.id };
    const result = obj.openRewardDetailsBottomSheet(obj);
  }, items4);
  const obj4 = sourceQuestContent(14052);
  const videoExternallyPaused = sourceQuestContent(14053).useVideoExternallyPaused(quest.id, tmp8[0]);
  const tmp14 = quest.config.taskConfigV2.tasks[sourceQuestContent(undefined, 4983).FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE];
  let tmp15 = null == tmp14;
  if (!tmp15) {
    tmp15 = "portrait" === sourceQuestContent(10474).getVideoOrientation(tmp14);
    let obj6 = sourceQuestContent(10474);
  }
  obj = { quest, captionsEnabled: tmp4, handleClose: onClose, handlePrimaryCtaPress: videoQuestClickCtaAndMaybeCloseModal, handleRewardDetailsPress: callback3, handleShareQuest: callback2, handleOpenTranscript: callback1, handleToggleCaptions: callback, isFullscreen, onNavigateToPostWatchVideo, onEnd, setIsFullscreen, externallyPaused: videoExternallyPaused, sourceQuestContent, hasCaptionAsset: null != memo, hasTranscriptAsset: null != memo1, isShareable: isShareableQuestResult };
  return callback2(tmp15 ? closure_24 : closure_23, obj);
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalContentInProgress.tsx");

export default memoResult;
