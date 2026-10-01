// Module ID: 14661
// Function ID: 14662
// Name: VideoQuestModalContentInProgress
// Dependencies: [32, 19, 17, 5756, 1085, 21, 672, 576, 14662, 4836, 1364, 10689, 4566, 4837, 1613, 6544, 4540, 14664, 14679, 6494, 14680, 14658, 14681, 5279, 5435, 4832, 14682, 5899, 5281, 10699, 7363, 1115, 9066, 10397, 10681, 10735, 14625, 7715, 5293, 14684, 10396, 14567, 14565, 12470, 7365, 14657, 4800, 14685, 1981, 10711, 7135, 7153, 7142, 7152, 5763, 7141, 5759, 7131, 7809, 14686, 10678, 14687, 5764, 2]

// Module 14661 (VideoQuestModalContentInProgress)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1085 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import timing from "timing" /* 4837 */;
import Pressables from "Pressables" /* 5435 */;
import QuestTypes from "QuestTypes" /* 5759 */;
import AdCreativeType from "AdCreativeType" /* 5763 */;
import AnalyticsActions from "AnalyticsActions" /* 7131 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7141 */;
import captureAdUserAction2 from "captureAdUserAction" /* 7142 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 7152 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 7153 */;
import showShareActionSheet2 from "showShareActionSheet" /* 7809 */;
import QuestUtils from "QuestUtils" /* 10678 */;
import AssetUtils from "AssetUtils" /* 10689 */;
import QuestCopyUtils from "QuestCopyUtils" /* 10699 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import QuestConstants from "QuestConstants" /* 5756 */;
import Fragment from "Fragment" /* 21 */;
import module_672_mod from "module_672" /* 672 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c9;
let closure_12;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ View: hasOwnProperty, StyleSheet: metroRequire, ScrollView: metroImportDefault } = react_native);
({ DEFAULT_PORTRAIT_ASPECT_RATIO: metroImportAll, QuestsExperimentLocations: c9 } = QuestConstants);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
const start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
let module_672 = module_672_mod;
let items = [, ];
const importDefaultResultResult = module_672(nativeDefault.unsafe_rawColors.PLUM_23);
const alphaResult = importDefaultResultResult.alpha(0.4);
items[0] = alphaResult.hex();
module_672 = module_672_mod;
const importDefaultResult1Result = module_672(nativeDefault.unsafe_rawColors.PLUM_23);
const alphaResult1 = importDefaultResult1Result.alpha(0);
items[1] = alphaResult1.hex();
module_672 = module_672_mod;
let items1 = [, ];
const importDefaultResult2Result = module_672(nativeDefault.unsafe_rawColors.PLUM_23);
const alphaResult2 = importDefaultResult2Result.alpha(0);
items1[0] = alphaResult2.hex();
module_672 = module_672_mod;
const importDefaultResult3Result = module_672(nativeDefault.unsafe_rawColors.PLUM_23);
const alphaResult3 = importDefaultResult3Result.alpha(0.4);
items1[1] = alphaResult3.hex();
const contentInsets = { bottom: 158, top: 64, left: 16, right: 16 };
const contentInsets2 = { bottom: 16, left: 16, right: 16 };
let createStyles = createStyles_mod;
let closure_19 = createStyles.createStyles((arg0) => {
  let obj14;
  let obj15;
  let obj3;
  let obj8;
  let rect;
  let rect1;
  let str;
  const obj = { wrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, flex: 1 }, wrapperPortrait: obj3, videoLandscape: { width: "100%", position: "relative" }, videoLandscape9by16: { aspectRatio: 1.7777777777777777, flexShrink: 0 }, landscapeContentScroll: { flex: 1 }, landscapeContentScrollContent: { flexGrow: 1 }, videoLandscapeFullscreen: { flexGrow: 1, flexShrink: 1 }, videoWrapper: { borderRadius: nativeDefault.radii.lg, flexGrow: 0, flexShrink: 0, overflow: "hidden" }, videoWrapperLandscape: { flexGrow: 1, borderTopLeftRadius: nativeDefault.radii.none, borderTopRightRadius: nativeDefault.radii.none }, videoWrapperFullscreen: { borderRadius: nativeDefault.radii.none }, videoContentWrapper: { flexDirection: "column", pointerEvents: "box-none", flexGrow: 1, flexShrink: 0, justifyContent: "space-between", padding: nativeDefault.space.PX_16 }, videoContentWrapperLandscape: { padding: 0 }, videoContentWrapperPortrait: obj8, rewardContainer: { justifyContent: "center", flexGrow: 1, flexShrink: 0 }, rewardContentCentered: rect, modalBackground: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, questDetailsLandscape: { borderTopWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_24 }, questDetailsPrimary: { flexGrow: 0, flexShrink: 1 }, questDetailsSecondary: { flexGrow: 0, flexShrink: 0 }, footer: { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 }, icon: { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE }, iconDisabled: { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT }, closeButtonLandscape: rect1, gradientTop: obj14, gradientBottom: obj15, textShadow: { margin: -15, padding: 15, textShadowColor: nativeDefault.colors.BLACK, textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 15 }, viewRewardBtn: { marginRight: "auto" }, playerThumbnail: size, cloudsBackground: { zIndex: -1 }, questDetailsSubheader: { opacity: 0.6 } };
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
  const merged = Object.assign(metroRequire.absoluteFillObject);
  rect = { position: "absolute", top: tmp(576).space.PX_16, left: tmp(576).space.PX_16, right: tmp(576).space.PX_16, bottom: tmp(576).space.PX_16, alignItems: "center", justifyContent: "center" };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST });
  ({ borderTopWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_24 });
  ({ paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 });
  ({ color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE });
  ({ color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT });
  rect1 = { position: "absolute", top: tmp(576).space.PX_16, left: tmp(576).space.PX_16 };
  obj14 = { bottom: undefined, height: 70 };
  const merged1 = Object.assign(metroRequire.absoluteFillObject);
  obj15 = { top: undefined, height: 150 };
  const merged2 = Object.assign(metroRequire.absoluteFillObject);
  ({ margin: -15, padding: 15, textShadowColor: nativeDefault.colors.BLACK, textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 15 });
  size = { borderRadius: tmp(576).radii.lg, height: 96, width: "100%" };
  return obj;
});
const __initData = { code: "function VideoQuestModalContentInProgressTsx1(){const{withDelay,LOGO_REWARD_TRANSITION_DELAY_MS,withTiming,isComponentMounted,LOGO_REWARD_TRANSITION_DURATION_MS}=this.__closure;return withDelay(LOGO_REWARD_TRANSITION_DELAY_MS,withTiming(isComponentMounted.get(),{duration:LOGO_REWARD_TRANSITION_DURATION_MS}));}" };
const __initData2 = { code: "function VideoQuestModalContentInProgressTsx2(){const{animation}=this.__closure;return{opacity:animation.get()};}" };
const __initData3 = { code: "function VideoQuestModalContentInProgressTsx3(){const{animation}=this.__closure;return{opacity:1-animation.get()};}" };
const __initData4 = { code: "function VideoQuestModalContentInProgressTsx4(){const{animation}=this.__closure;return{pointerEvents:animation.get()>0.3?'auto':'none'};}" };
let closure_24 = react.memo((quest) => {
  let _undefined;
  let _undefined2;
  let c3;
  let c4;
  let captionsEnabled;
  let contentWidth;
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
  _slicedToArray = undefined;
  react = undefined;
  let sharedValue;
  let derivedValue;
  const tmp = quest;
  let tmp2 = setIsFullscreen;
  ({ captionsEnabled, contentWidth, handleClose, handlePrimaryCtaPress, handleShareQuest, handleOpenTranscript, handleToggleCaptions, onNavigateToPostWatchVideo, onEnd, externallyPaused, hasCaptionAsset, hasTranscriptAsset } = quest);
  let obj = quest(setIsFullscreen[10]);
  const tmp3 = closure_19(obj.isAndroid());
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
  [tmp8, c3] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  const callback = obj2.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.height);
  }, []);
  [num, c4] = react.useState(null);
  let diff = null;
  _slicedToArray(react.useState(null), 2);
  const callback1 = obj2.useCallback((nativeEvent) => {
    _undefined2(nativeDefault.space.PX_24 + nativeEvent.nativeEvent.layout.height);
  }, []);
  if (null != tmp8) {
    diff = tmp8 - 2 * isFullscreen(tmp2[7]).space.PX_16;
  }
  let str = "md";
  let str2 = "md";
  if (null != diff) {
    str2 = str;
    if (null != num) {
      let str3 = "lg";
      if (diff < tmp(tmp2[8]).QUEST_PROGRESS_DIAMETER_BY_SIZE.lg + num) {
        if (diff >= tmp(tmp2[8]).QUEST_PROGRESS_DIAMETER_BY_SIZE["md-lg"] + num) {
          str = "md-lg";
        }
        str3 = str;
      }
      str2 = str3;
    }
  }
  const md = tmp(tmp2[8]).QUEST_PROGRESS_DIAMETER_BY_SIZE.md;
  const sum = md + num;
  const sum1 = sum + 2 * isFullscreen(tmp2[7]).space.PX_16;
  const tmpResult = tmp(tmp2[12]);
  sharedValue = tmpResult.useSharedValue(0);
  items1 = [sharedValue];
  const effect = obj2.useEffect(() => {
    const result = sharedValue.set(1);
  }, items1);
  function te() {
    const withDelay = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    const obj = timing;
    return withDelay(3000, obj.withTiming(sharedValue.get(), { duration: 1000 }));
  }
  const tmpResult9 = tmp(tmp2[12]);
  te.__closure = { withDelay: tmp(tmp2[12]).withDelay, LOGO_REWARD_TRANSITION_DELAY_MS: 3000, withTiming: tmp(tmp2[13]).withTiming, isComponentMounted: sharedValue, LOGO_REWARD_TRANSITION_DURATION_MS: 1000 };
  te.__workletHash = 12561024953493;
  te.__initData = __initData;
  ({ withDelay: tmp(tmp2[12]).withDelay, LOGO_REWARD_TRANSITION_DELAY_MS: 3000, withTiming: tmp(tmp2[13]).withTiming, isComponentMounted: sharedValue, LOGO_REWARD_TRANSITION_DURATION_MS: 1000 });
  derivedValue = tmpResult9.useDerivedValue(te);
  function ne() {
    const obj = { opacity: derivedValue.get() };
    return obj;
  }
  ne.__closure = { animation: derivedValue };
  ne.__workletHash = 17463485679217;
  ne.__initData = __initData2;
  const tmpResult10 = tmp(tmp2[12]);
  const animatedStyle = tmpResult10.useAnimatedStyle(ne);
  function se() {
    const obj = { opacity: 1 - derivedValue.get() };
    return obj;
  }
  se.__closure = { animation: derivedValue };
  se.__workletHash = 9103187579788;
  se.__initData = __initData3;
  const tmpResult11 = tmp(tmp2[12]);
  const animatedStyle1 = tmpResult11.useAnimatedStyle(se);
  function oe() {
    let pointerEvents = "none";
    if (derivedValue.get() > 0.3) {
      pointerEvents = "auto";
    }
    return { pointerEvents };
  }
  oe.__closure = { animation: derivedValue };
  oe.__workletHash = 11833431315705;
  oe.__initData = __initData4;
  const tmpResult12 = tmp(tmp2[12]);
  const animatedProps = tmpResult12.useAnimatedProps(oe);
  const tmp23 = isFullscreen(tmp2[14])();
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
  const obj4 = { bottom: true, style: tmp3.wrapper, children: closure_12(sharedValue, obj5) };
  const SafeAreaPaddingView = tmp(tmp2[15]).SafeAreaPaddingView;
  if (isFullscreen) {
    videoWrapperFullscreen = tmp3.videoWrapperFullscreen;
  }
  obj5 = { style: items3, children: items7 };
  items3[2] = videoWrapperFullscreen;
  const obj6 = { theme: ThemeTypes.DARK, children: items5 };
  const ThemeContextProvider = tmp(tmp2[16]).ThemeContextProvider;
  const obj7 = { captionsEnabled, orientation: "landscape", style: items4, contentInsets: contentInsets2, handleOpenTranscript, handleToggleCaptions, isFullscreen, externallyPaused, onEnd, onToggleFullscreen: callback2, sourceQuestContent, hasCaptionAsset, hasTranscriptAsset };
  items4 = [tmp3.videoLandscape, , ];
  let videoLandscape9by16 = !isFullscreen;
  const VideoQuestPlayer = tmp(tmp2[17]).VideoQuestPlayer;
  if (!isFullscreen) {
    videoLandscape9by16 = tmp3.videoLandscape9by16;
  }
  items4[1] = videoLandscape9by16;
  items4[2] = isFullscreen && tmp3.videoLandscapeFullscreen;
  items5 = [closure_11(VideoQuestPlayer, obj7), ];
  const obj8 = { onClose: handleClose, style: items6 };
  items6 = [tmp3.closeButtonLandscape, ];
  let tmp29 = isFullscreen;
  const tmp15Result = isFullscreen(tmp2[18]);
  if (isFullscreen) {
    tmp29 = null != tmp23;
  }
  if (tmp29) {
    tmp29 = { left: tmp23.left };
    const obj9 = { left: tmp23.left };
  }
  items6[1] = tmp29;
  items5[1] = closure_11(tmp15Result, obj8);
  items7 = [closure_12(ThemeContextProvider, obj6), ];
  let tmp25Result4 = !isFullscreen;
  if (tmp25Result4) {
    ({ landscapeContentScroll: obj15.style, landscapeContentScrollContent: obj15.contentContainerStyle } = tmp3);
    const obj10 = { style: null, contentContainerStyle: null, showsVerticalScrollIndicator: false, alwaysBounceVertical: false, children: closure_12(sharedValue, obj11) };
    obj11 = { style: items8, children: items14 };
    items8 = [, ];
    ({ videoContentWrapper: arr9[0], videoContentWrapperLandscape: arr9[1] } = tmp3);
    const obj12 = { style: items9, onLayout: callback, children: items11 };
    items9 = [tmp3.rewardContainer, ];
    const obj13 = { minHeight: sum1 };
    items9[1] = obj13;
    const obj14 = { style: items10, animatedProps, children: closure_11(isFullscreen(tmp2[20]), obj16) };
    items10 = [tmp3.rewardContentCentered, animatedStyle];
    obj16 = { size: str2, onTextBlockLayout: callback1 };
    const tmp15Result4 = isFullscreen(tmp2[19]);
    items11 = [closure_11(tmp15Result4, obj14), ];
    const items12 = [tmp3.rewardContentCentered, , ];
    const tmp15Result5 = isFullscreen(tmp2[19]);
    const tmpResult13 = tmp(tmp2[10]);
    const obj17 = { style: items12, pointerEvents: "none", children: items13 };
    items12[1] = tmpResult13.isAndroid() && tmp3.modalBackground;
    items12[2] = animatedStyle1;
    tmpResult13.isAndroid() && tmp3.modalBackground;
    const tmpResult14 = tmp(tmp2[10]);
    let isAndroidResult = tmpResult14.isAndroid();
    const tmp31 = closure_7;
    if (isAndroidResult) {
      const obj18 = { align: "top", style: tmp3.cloudsBackground };
      isAndroidResult = tmp25(tmp15(tmp2[21]), obj18);
    }
    items13 = [isAndroidResult, ];
    const obj19 = { assetUrl: tmpResult15.getQuestAsset(quest, tmp(tmp2[11]).QuestAssetType.LOGO_TYPE, "dark").url, maxHeight: 90, maxWidth: contentWidth - 120 };
    const tmp15Result6 = isFullscreen(tmp2[22]);
    tmpResult15 = tmp(tmp2[11]);
    items13[1] = closure_11(tmp15Result6, obj19);
    items11[1] = closure_12(tmp15Result5, obj17);
    items14 = [closure_12(sharedValue, obj12), , ];
    const obj20 = { align: "top", style: tmp3.cloudsBackground };
    items14[1] = closure_11(isFullscreen(tmp2[21]), obj20);
    const obj21 = { direction: "vertical", spacing: isFullscreen(tmp2[7]).space.PX_24, style: tmp3.questDetailsLandscape, children: items17 };
    const Stack = tmp(tmp2[23]).Stack;
    const obj22 = { direction: "horizontal", justify: "space-between", spacing: isFullscreen(tmp2[7]).space.PX_8, children: items16 };
    const Stack2 = tmp(tmp2[23]).Stack;
    const obj23 = { style: tmp3.questDetailsPrimary, onPress: handleAdvertiserDetailsPress, children: items15 };
    const PressableOpacity = tmp(tmp2[24]).PressableOpacity;
    const obj24 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: quest.config.messages.gameTitle };
    items15 = [closure_11(tmp(tmp2[25]).Text, obj24), ];
    const obj25 = { variant: "heading-sm/semibold", color: "text-subtle", children: quest.config.messages.gamePublisher };
    items15[1] = closure_11(tmp(tmp2[25]).Text, obj25);
    items16 = [closure_12(PressableOpacity, obj23), ];
    const obj26 = { style: tmp3.questDetailsSecondary, children: closure_11(isFullscreen(tmp2[26]), obj27) };
    obj27 = { quest, location: constants.VIDEO_MODAL_MOBILE, sourceQuestContent };
    items16[1] = closure_11(sharedValue, obj26);
    items17 = [closure_12(Stack2, obj22), , ];
    let tmp25Result = null != memo;
    if (tmp25Result) {
      const obj28 = { onPress: handleAdvertiserDetailsPress, children: closure_11(isFullscreen(tmp2[27]), obj29) };
      const PressableOpacity2 = tmp(tmp2[24]).PressableOpacity;
      obj29 = { source: obj30, style: tmp3.playerThumbnail };
      obj30 = { uri: memo.url };
      tmp25Result = tmp25(PressableOpacity2, obj28);
    }
    items17[1] = tmp25Result;
    const obj31 = { direction: "horizontal", spacing: isFullscreen(tmp2[7]).space.PX_16, children: items18 };
    const Stack3 = tmp(tmp2[23]).Stack;
    const obj32 = { grow: true, variant: "expressive", onPress: handlePrimaryCtaPress, text: tmpResult16.getExternalCtaLabel(quest) };
    const Button = tmp(tmp2[28]).Button;
    tmpResult16 = tmp(tmp2[29]);
    items18 = [closure_11(Button, obj32), , ];
    if (isShareable) {
      const obj33 = { accessibilityLabel: intl.string(tmp(tmp2[31]).t.Ej3B3Y), icon: isFullscreen(tmp2[32]), onPress: handleShareQuest, variant: "secondary" };
      const IconButton = tmp(tmp2[30]).IconButton;
      intl = tmp(tmp2[31]).intl;
      isShareable = tmp25(IconButton, obj33);
    }
    items18[1] = isShareable;
    if (tmp25Result3) {
      const obj34 = { accessibilityLabel: intl2.string(tmp(tmp2[31]).t.cfY4PE), icon: isFullscreen(tmp2[33]), onPress: onNavigateToPostWatchVideo, variant: "secondary" };
      const IconButton2 = tmp(tmp2[30]).IconButton;
      intl2 = tmp(tmp2[31]).intl;
      tmp25Result3 = tmp25(IconButton2, obj34);
    }
    items18[2] = tmp25Result3;
    items17[2] = closure_12(Stack3, obj31);
    items14[2] = closure_12(Stack, obj21);
    tmp25Result4 = tmp25(tmp31, obj10);
  }
  items7[1] = tmp25Result4;
  return closure_11(SafeAreaPaddingView, obj4);
});
let closure_25 = react.memo((arg0) => {
  let Button2;
  let ClosedCaptionsOutlineIcon;
  let ShareIcon;
  let captionsEnabled;
  let closure_3;
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
  let obj27;
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
  _slicedToArray = undefined;
  first = undefined;
  closure_5 = undefined;
  ({ handleClose, handleAdvertiserDetailsPress, handlePrimaryCtaPress, handleRewardDetailsPress, handleShareQuest, isFullscreen, onNavigateToPostWatchVideo, onEnd, externallyPaused } = arg0);
  let obj = contentWidth(memo[34]);
  const questTaskDetails = obj.useQuestTaskDetails(quest);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  const tmpResult = contentWidth(memo[35]);
  const videoQuestProgressRemainingAccessibilityLabel = tmpResult.getVideoQuestProgressRemainingAccessibilityLabel(questTaskDetails, tmp5);
  height = height(tmp2[37])(first.useContext(tmp(tmp2[36]).QuestDockGestureContext).windowDimensions).height;
  items = [contentWidth];
  memo = first.useMemo(() => Math.floor(contentWidth / metroImportAll), items);
  const callback = first.useCallback(() => {

  }, []);
  const tmp10 = height(memo[14])();
  _slicedToArray = tmp10;
  [first, closure_5] = first.useState(64);
  items1 = [memo, first, height, tmp10];
  const callback1 = first.useCallback((nativeEvent) => {
    closure_5(nativeEvent.nativeEvent.layout.height);
  }, []);
  const memo1 = first.useMemo(() => Math.min(height - closure_3.top - closure_3.bottom - first, memo), items1);
  const tmp15 = closure_19(height - memo1 - first < 200);
  let obj2 = { bottom: true, style: items2, children: items11 };
  items2 = [, ];
  ({ wrapper: arr3[0], wrapperPortrait: arr3[1] } = tmp15);
  const items3 = [tmp15.videoWrapper, ];
  const SafeAreaPaddingView = tmp(tmp2[15]).SafeAreaPaddingView;
  if (null == memo1) {
    obj3 = { flexGrow: 1 };
  } else {
    obj3 = { height: memo1 };
  }
  const obj4 = { style: items3, children: items4 };
  items3[1] = obj3;
  const obj5 = { theme: ThemeTypes.DARK, children: closure_11(contentWidth(memo[17]).VideoQuestPlayer, obj6) };
  const ThemeContextProvider = tmp(tmp2[16]).ThemeContextProvider;
  obj6 = { captionsEnabled, onLoad: callback, externallyPaused, orientation: "portrait", contentInsets, handleOpenTranscript, handleToggleCaptions, isFullscreen, onEnd, sourceQuestContent, hasCaptionAsset, hasTranscriptAsset };
  items4 = [closure_11(ThemeContextProvider, obj5), , , ];
  const obj7 = { start, end, style: tmp15.gradientTop, colors: items };
  items4[1] = closure_11(height(memo[38]), obj7);
  const obj8 = { start, end, style: tmp15.gradientBottom, colors: items1 };
  items4[2] = closure_11(height(memo[38]), obj8);
  const obj9 = { style: items5, children: items6 };
  items5 = [, ];
  ({ videoContentWrapper: arr6[0], videoContentWrapperPortrait: arr6[1] } = tmp15);
  const obj10 = { closeButtonIconColor: height(memo[7]).colors.WHITE, onClose: handleClose, showCurrentVideoTime: true, withTextShadow: true };
  const tmp7Result = height(memo[39]);
  items6 = [closure_11(tmp7Result, obj10), ];
  const obj11 = { direction: "vertical", spacing: height(memo[7]).space.PX_24, children: items10 };
  const Stack = tmp(tmp2[23]).Stack;
  const obj12 = { direction: "horizontal", justify: "space-between", spacing: height(memo[7]).space.PX_8, children: items9 };
  const Stack2 = tmp(tmp2[23]).Stack;
  const obj13 = { style: tmp15.questDetailsPrimary, onPress: handleAdvertiserDetailsPress, children: items7 };
  const PressableOpacity = tmp(tmp2[24]).PressableOpacity;
  items7 = [, ];
  const obj14 = { variant: "heading-lg/semibold", color: "text-overlay-light", style: tmp15.textShadow, accessibilityRole: "header", children: quest.config.messages.gameTitle };
  items7[0] = closure_11(contentWidth(memo[25]).Text, obj14);
  const obj15 = { variant: "heading-sm/semibold", color: "text-overlay-light", style: items8, children: quest.config.messages.gamePublisher };
  items8 = [, ];
  ({ textShadow: arr9[0], questDetailsSubheader: arr9[1] } = tmp15);
  items7[1] = closure_11(contentWidth(memo[25]).Text, obj15);
  items9 = [closure_12(PressableOpacity, obj13), ];
  const obj16 = { style: tmp15.questDetailsSecondary, children: closure_11(height(memo[8]), obj17) };
  obj17 = { quest, size: "x-sm", progress: questTaskDetails.percentComplete, hasConfetti: true, onPress: handleRewardDetailsPress, accessibilityLabel: videoQuestProgressRemainingAccessibilityLabel };
  items9[1] = closure_11(closure_5, obj16);
  items10 = [closure_12(Stack2, obj12), ];
  const obj18 = { grow: true, variant: "expressive", onPress: handlePrimaryCtaPress, text: tmpResult2.getExternalCtaLabel(quest) };
  const Button = tmp(tmp2[28]).Button;
  tmpResult2 = contentWidth(memo[29]);
  items10[1] = closure_11(Button, obj18);
  items6[1] = closure_12(Stack, obj11);
  items4[3] = closure_12(closure_5, obj9);
  items11 = [closure_12(closure_5, obj4), ];
  const obj19 = { direction: "horizontal", justify: "flex-end", align: "center", style: tmp15.footer, spacing: height(memo[7]).space.PX_4, onLayout: callback1, children: items12 };
  const Stack3 = tmp(tmp2[23]).Stack;
  let tmp18Result = tmp5;
  if (tmp18Result) {
    const obj20 = { style: tmp15.viewRewardBtn, children: closure_11(Button2, obj21) };
    obj21 = { icon: closure_11(contentWidth(memo[40]).ArrowSmallRightIcon, { size: "sm" }), iconPosition: "end", onPress: onNavigateToPostWatchVideo, variant: "secondary", size: "sm", text: intl.string(contentWidth(memo[31]).t["jyYgZ+"]) };
    Button2 = tmp(tmp2[28]).Button;
    intl = tmp(tmp2[31]).intl;
    tmp18Result = tmp18(tmp17, obj20);
  }
  items12 = [tmp18Result, , , , ];
  if (hasTranscriptAsset) {
    const obj22 = { accessibilityLabel: intl2.string(contentWidth(memo[31]).t.KCzjTi), onPress: handleOpenTranscript, children: closure_11(contentWidth(memo[41]).TranscriptOutlineIcon, obj23) };
    intl2 = tmp(tmp2[31]).intl;
    obj23 = { color: tmp15.iconDisabled.color };
    hasTranscriptAsset = tmp18(closure_27, obj22);
  }
  items12[1] = hasTranscriptAsset;
  if (hasCaptionAsset) {
    let color;
    const obj24 = { accessibilityLabel: intl3.string(contentWidth(memo[31]).t.bDSZO1), onPress: handleToggleCaptions, children: closure_11(ClosedCaptionsOutlineIcon, obj25) };
    intl3 = tmp(tmp2[31]).intl;
    ClosedCaptionsOutlineIcon = tmp(tmp2[42]).ClosedCaptionsOutlineIcon;
    const tmp22 = closure_27;
    if (captionsEnabled) {
      color = tmp15.icon.color;
    } else {
      color = tmp15.iconDisabled.color;
    }
    obj25 = { color };
    hasCaptionAsset = tmp18(tmp22, obj24);
  }
  items12[2] = hasCaptionAsset;
  if (isShareable) {
    const obj26 = { accessibilityLabel: intl4.string(contentWidth(memo[31]).t.Ej3B3Y), onPress: handleShareQuest, children: closure_11(ShareIcon, obj27) };
    intl4 = tmp(tmp2[31]).intl;
    obj27 = { color: height(memo[7]).colors.TEXT_DEFAULT };
    ShareIcon = tmp(tmp2[43]).ShareIcon;
    isShareable = tmp18(closure_27, obj26);
  }
  items12[3] = isShareable;
  const obj28 = {
    quest,
    location: constants.VIDEO_MODAL_MOBILE,
    sourceQuestContent,
    children(ref) {
      let MoreHorizontalIcon;
      let intl;
      let obj2;
      const obj = { accessibilityLabel: intl.string(contentWidth(memo[31]).t.PdRCRg), ref, children: closure_1_11(MoreHorizontalIcon, obj2) };
      ref = ref.ref;
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      intl = contentWidth(memo[31]).intl;
      const merged1 = Object.assign(merged);
      obj2 = { color: height(memo[7]).colors.TEXT_DEFAULT };
      MoreHorizontalIcon = contentWidth(memo[44]).MoreHorizontalIcon;
      return closure_1_11(closure_1_27, obj);
    }
  };
  items12[4] = closure_11(height(memo[26]), obj28);
  items11[1] = closure_12(Stack3, obj19);
  return closure_12(SafeAreaPaddingView, obj2);
});
createStyles = createStyles_mod;
let obj = { footerButton: obj2 };
obj2 = { padding: nativeDefault.space.PX_8 };
let closure_26 = createStyles.createStyles(obj);
let closure_27 = react.forwardRef(function FooterButton(arg0, ref) {
  const obj = { accessibilityRole: "button", style: closure_26().footerButton, ref };
  const PressableOpacity = Pressables.PressableOpacity;
  const merged = Object.assign(arg0);
  return unpackModuleId(PressableOpacity, obj);
});
const memoResult = react.memo(function VideoQuestModalContentInProgress(arg0) {
  let contentWidth;
  let getQuestImpressionId;
  let isFullscreen;
  let onClose;
  let onEnd;
  let onNavigateToPostWatchVideo;
  let setIsFullscreen;
  let sourceQuestContent;
  let tmp11;
  let tmp6;
  ({ onClose, sourceQuestContent } = arg0);
  ({ contentWidth, isFullscreen, onNavigateToPostWatchVideo, onEnd, setIsFullscreen } = arg0);
  let tmp = sourceQuestContent;
  let tmp2 = dependencyMap;
  let obj = sourceQuestContent(14657);
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
  let tmp5 = getQuestImpressionId(react.useState(false), 2);
  [tmp6, dependencyMap] = tmp5;
  const items2 = [quest];
  const callback = react.useCallback(() => dependencyMap((arg0) => !arg0), []);
  const callback1 = react.useCallback(() => {
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    ActionSheetActionCreatorsDefault;
    const obj = { quest };
    const tmp2 = asyncRequire(14685, dependencyMap.paths);
    openLazy(tmp2, "transcript-" + quest.id, obj);
  }, items2);
  let obj2 = sourceQuestContent(10711);
  getQuestImpressionId = obj2.useGetQuestImpressionId();
  const tmp10 = getQuestImpressionId(react.useState(false), 2);
  [tmp11, react] = tmp10;
  let obj3 = sourceQuestContent(7135);
  const isShareableQuestResult = obj3.isShareableQuest(quest.config);
  let closure_5 = isShareableQuestResult;
  const items3 = [isShareableQuestResult, quest.id, getQuestImpressionId, sourceQuestContent];
  const callback2 = react.useCallback(() => {
    let tmp2Result6;
    const tmp = closure_5;
    if (tmp) {
      let tmp5;
      const obj = AdAnalyticsInterfaceExperiment;
      if (obj.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "video_quest_modal_in_progress")) {
        const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: AnalyticsTypes.QuestContentCTA.MOBILE_SHARESHEET, surfaceId: QuestTypes.QuestContent.VIDEO_MODAL_MOBILE, sourceQuestContent, impressionId: getQuestImpressionId() };
        const captureAdUserAction = captureAdUserAction2.captureAdUserAction;
        captureAdUserAction2;
        captureAdUserAction(obj2);
        tmp5 = quest;
      } else {
        tmp5 = quest;
        const obj3 = { questId: quest.id, questContent: QuestTypes.QuestContent.VIDEO_MODAL_MOBILE, questContentCTA: AnalyticsTypes.QuestContentCTA.MOBILE_SHARESHEET, impressionId: getQuestImpressionId(), sourceQuestContent };
        const trackQuestContentClicked = AnalyticsActions.trackQuestContentClicked;
        AnalyticsActions;
        const result = trackQuestContentClicked(obj3);
      }
      react(true);
      const obj4 = {
        message: tmp2Result6.getQuestUrl(tmp5.id),
        iOSOnlyShareCallback() {
            return closure_1_4(false);
          }
      };
      const showShareActionSheet = showShareActionSheet2.showShareActionSheet;
      showShareActionSheet2;
      const _HermesInternal = HermesInternal;
      tmp2Result6 = QuestCopyUtils;
      showShareActionSheet(obj4, "Video Quest Modal - " + tmp5.id);
    }
  }, items3);
  let obj4 = sourceQuestContent(14686);
  const videoQuestClickCtaAndMaybeCloseModal = obj4.useVideoQuestClickCtaAndMaybeCloseModal({ quest, onClose, sourceQuestContent });
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
  const obj5 = sourceQuestContent(14687);
  const videoExternallyPaused = obj5.useVideoExternallyPaused(quest.id, tmp11);
  const tmp19 = quest.config.taskConfigV2.tasks[sourceQuestContent(undefined, 5764).FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE];
  let tmp20 = null == tmp19;
  if (!tmp20) {
    const tmpResult = tmp(10735);
    tmp20 = "portrait" === tmpResult.getVideoOrientation(tmp19);
  }
  const obj6 = { quest, captionsEnabled: tmp6, contentWidth, handleClose: onClose, handleAdvertiserDetailsPress: callback3, handlePrimaryCtaPress: callback4, handleRewardDetailsPress: callback5, handleShareQuest: callback2, handleOpenTranscript: callback1, handleToggleCaptions: callback, isFullscreen, onNavigateToPostWatchVideo, onEnd, setIsFullscreen, externallyPaused: videoExternallyPaused, sourceQuestContent, hasCaptionAsset: null != memo, hasTranscriptAsset: null != memo1, isShareable: isShareableQuestResult };
  return closure_11(tmp20 ? closure_25 : closure_24, obj6);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalContentInProgress.tsx");

export default memoResult;
