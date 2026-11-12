// Module ID: 17618
// Function ID: 17619
// Name: VideoQuestModalContentInProgress
// Dependencies: [32, 19, 17, 5275, 1083, 21, 671, 575, 17619, 5243, 1377, 10077, 1652, 5485, 1627, 7351, 5314, 17620, 17635, 17636, 17615, 17637, 6274, 7364, 5866, 17638, 5957, 5873, 10087, 7922, 1113, 12195, 10852, 10063, 15135, 17581, 11186, 5830, 17639, 10851, 17456, 17452, 17454, 12194, 7356, 17614, 5489, 17640, 2118, 10099, 8762, 10067, 10070, 5282, 8767, 5278, 10161, 17641, 10060, 17642, 5283, 2]

// Module 17618 (VideoQuestModalContentInProgress)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import QuestTypes from "QuestTypes" /* 5278 */;
import AdCreativeType from "AdCreativeType" /* 5282 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import Pressables from "Pressables" /* 7364 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8767 */;
import QuestUtils from "QuestUtils" /* 10060 */;
import captureAdUserAction2 from "captureAdUserAction" /* 10067 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 10070 */;
import AssetUtils from "AssetUtils" /* 10077 */;
import QuestCopyUtils from "QuestCopyUtils" /* 10087 */;
import showShareActionSheet2 from "showShareActionSheet" /* 10161 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import QuestConstants from "QuestConstants" /* 5275 */;
import Fragment from "Fragment" /* 21 */;
import module_671_mod from "module_671" /* 671 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

let duration;

let c9;
let closure_12;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let unpackModuleId;
({ View: hasOwnProperty, StyleSheet: metroRequire, ScrollView: metroImportDefault } = react_native);
({ DEFAULT_PORTRAIT_ASPECT_RATIO: metroImportAll, QuestsExperimentLocations: c9 } = QuestConstants);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
const start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
let module_671 = module_671_mod;
let items = [, ];
const importDefaultResultResult = module_671(nativeDefault.unsafe_rawColors.PLUM_23);
const alphaResult = importDefaultResultResult.alpha(0.4);
items[0] = alphaResult.hex();
module_671 = module_671_mod;
const importDefaultResult1Result = module_671(nativeDefault.unsafe_rawColors.PLUM_23);
const alphaResult1 = importDefaultResult1Result.alpha(0);
items[1] = alphaResult1.hex();
module_671 = module_671_mod;
let items1 = [, ];
const importDefaultResult2Result = module_671(nativeDefault.unsafe_rawColors.PLUM_23);
const alphaResult2 = importDefaultResult2Result.alpha(0);
items1[0] = alphaResult2.hex();
module_671 = module_671_mod;
const importDefaultResult3Result = module_671(nativeDefault.unsafe_rawColors.PLUM_23);
const alphaResult3 = importDefaultResult3Result.alpha(0.4);
items1[1] = alphaResult3.hex();
const contentInsets = { bottom: 158, top: 64, left: 16, right: 16 };
const contentInsets2 = { bottom: 16, left: 16, right: 16 };
let createStyles = createStyles_mod;
let closure_19 = createStyles.createStyles((arg0) => {
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
  const merged = Object.assign(metroRequire.absoluteFillObject);
  rect = { position: "absolute", top: tmp(575).space.PX_16, left: tmp(575).space.PX_16, right: tmp(575).space.PX_16, bottom: tmp(575).space.PX_16, alignItems: "center", justifyContent: "center" };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST });
  ({ borderTopWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_24 });
  ({ paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 });
  rect1 = { position: "absolute", top: tmp(575).space.PX_16, left: tmp(575).space.PX_16 };
  obj12 = { bottom: undefined, height: 70 };
  const merged1 = Object.assign(metroRequire.absoluteFillObject);
  obj13 = { top: undefined, height: 150 };
  const merged2 = Object.assign(metroRequire.absoluteFillObject);
  ({ margin: -15, padding: 15, textShadowColor: nativeDefault.colors.BLACK, textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 15 });
  size = { borderRadius: tmp(575).radii.lg, height: 96, width: "100%" };
  return obj;
});
let closure_20 = { code: "(function VideoQuestModalContentInProgressTsx1(){let[withDelay,LOGO_REWARD_TRANSITION_DELAY_MS,withTiming,isComponentMounted,LOGO_REWARD_TRANSITION_DURATION_MS]=this.__closure;return withDelay(LOGO_REWARD_TRANSITION_DELAY_MS,withTiming(isComponentMounted.get(),{duration:LOGO_REWARD_TRANSITION_DURATION_MS}));})" };
let closure_21 = { code: "(function VideoQuestModalContentInProgressTsx2(){let[animation]=this.__closure;return{opacity:animation.get()};})" };
let closure_22 = { code: "(function VideoQuestModalContentInProgressTsx3(){let[animation]=this.__closure;return{opacity:1-animation.get()};})" };
let closure_23 = { code: "(function VideoQuestModalContentInProgressTsx4(){let[animation]=this.__closure;return{pointerEvents:animation.get()>0.3?'auto':'none'};})" };
let closure_24 = react.memo(function LandscapeLayout(quest) {
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
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items18;
  let items19;
  let items21;
  let items22;
  let items23;
  let items24;
  let items25;
  let items26;
  let num;
  let obj10;
  let obj15;
  let obj26;
  let obj28;
  let obj29;
  let obj4;
  let onEnd;
  let onNavigateToPostWatchVideo;
  let sourceQuestContent;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp27;
  let tmp28;
  let tmp30;
  let tmp31;
  let tmp33;
  let tmp34;
  let tmp8;
  let tmpResult15;
  let tmpResult16;
  quest = quest.quest;
  ({ handleAdvertiserDetailsPress, isFullscreen } = quest);
  const setIsFullscreen = quest.setIsFullscreen;
  ({ sourceQuestContent, isShareable } = quest);
  c3 = undefined;
  duration = undefined;
  let sharedValue;
  const tmp = quest;
  let tmp2 = setIsFullscreen;
  ({ captionsEnabled, contentWidth, handleClose, handlePrimaryCtaPress, handleShareQuest, handleOpenTranscript, handleToggleCaptions, onNavigateToPostWatchVideo, onEnd, externallyPaused, hasCaptionAsset, hasTranscriptAsset } = quest);
  let obj = quest(setIsFullscreen[10]);
  const tmp3 = closure_19(obj.isAndroid());
  items = [quest];
  const memo = duration.useMemo(() => {
    const obj = AssetUtils;
    return obj.getQuestAsset(quest, AssetUtils.QuestAssetType.HERO);
  }, items);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  let tmp38Result3 = null != completedAt;
  const tmp7 = c3(duration.useState(null), 2);
  [tmp8, c3] = tmp7;
  const callback = obj2.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.height);
  }, []);
  [num, c4] = c3(duration.useState(null), 2);
  let diff = null;
  c3(duration.useState(null), 2);
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
  const items2 = [closure_20, , , , , ];
  const useDerivedValue = tmp(tmp2[12]).useDerivedValue;
  tmp(tmp2[12]);
  items2[1] = tmp(tmp2[12]).withDelay;
  items2[2] = 3000;
  items2[3] = tmp(tmp2[13]).withTiming;
  items2[4] = sharedValue;
  items2[5] = 1000;
  let c0;
  let c1;
  let c2;
  c3 = undefined;
  duration = undefined;
  [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25] = items2;
  class VideoQuestModalContentInProgressTsx1 {
    constructor() {
      const obj = { duration };
      return _undefined(c1, _undefined2(_undefined3.get(), obj));
    }
  }
  const items3 = [tmp21, tmp22, tmp23, tmp24, tmp25];
  VideoQuestModalContentInProgressTsx1.__closure = items3;
  VideoQuestModalContentInProgressTsx1.__workletHash = 5543062958124;
  VideoQuestModalContentInProgressTsx1.__initData = tmp20;
  const derivedValue = useDerivedValue(VideoQuestModalContentInProgressTsx1);
  const items4 = [closure_21, derivedValue];
  c0 = undefined;
  [tmp27, tmp28] = items4;
  const tmpResult10 = tmp(tmp2[12]);
  class VideoQuestModalContentInProgressTsx2 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items5 = [tmp28];
  VideoQuestModalContentInProgressTsx2.__closure = items5;
  VideoQuestModalContentInProgressTsx2.__workletHash = 17462465943368;
  VideoQuestModalContentInProgressTsx2.__initData = tmp27;
  const animatedStyle = tmpResult10.useAnimatedStyle(VideoQuestModalContentInProgressTsx2);
  const items6 = [closure_22, derivedValue];
  c0 = undefined;
  [tmp30, tmp31] = items6;
  const tmpResult11 = tmp(tmp2[12]);
  class VideoQuestModalContentInProgressTsx3 {
    constructor() {
      const obj = { opacity: 1 - _undefined.get() };
      return obj;
    }
  }
  const items7 = [tmp31];
  VideoQuestModalContentInProgressTsx3.__closure = items7;
  VideoQuestModalContentInProgressTsx3.__workletHash = 13717822573141;
  VideoQuestModalContentInProgressTsx3.__initData = tmp30;
  const animatedStyle1 = tmpResult11.useAnimatedStyle(VideoQuestModalContentInProgressTsx3);
  const items8 = [closure_23, derivedValue];
  c0 = undefined;
  [tmp33, tmp34] = items8;
  const tmpResult12 = tmp(tmp2[12]);
  class VideoQuestModalContentInProgressTsx4 {
    constructor() {
      let pointerEvents = "none";
      if (_undefined.get() > 0.3) {
        pointerEvents = "auto";
      }
      return { pointerEvents };
    }
  }
  const items9 = [tmp34];
  VideoQuestModalContentInProgressTsx4.__closure = items9;
  VideoQuestModalContentInProgressTsx4.__workletHash = 10873072975680;
  VideoQuestModalContentInProgressTsx4.__initData = tmp33;
  const animatedProps = tmpResult12.useAnimatedProps(VideoQuestModalContentInProgressTsx4);
  const tmp36 = isFullscreen(tmp2[14])();
  const items10 = [isFullscreen, setIsFullscreen];
  const callback2 = obj2.useCallback((arg0) => {
    let str2 = "PORTRAIT";
    const tmp2 = isFullscreen || "landscape" !== tmp;
    if (!tmp2) {
      str2 = "LANDSCAPE";
    }
    setIsFullscreen("LANDSCAPE" === str2);
  }, items10);
  const items11 = [, , ];
  ({ videoWrapper: arr12[0], videoWrapperLandscape: arr12[1] } = tmp3);
  let videoWrapperFullscreen = isFullscreen;
  const obj3 = { bottom: true, style: tmp3.wrapper, children: closure_12(sharedValue, obj4) };
  const SafeAreaPaddingView = tmp(tmp2[15]).SafeAreaPaddingView;
  if (isFullscreen) {
    videoWrapperFullscreen = tmp3.videoWrapperFullscreen;
  }
  obj4 = { style: items11, children: items15 };
  items11[2] = videoWrapperFullscreen;
  const obj5 = { theme: ThemeTypes.DARK, children: items13 };
  const ThemeContextProvider = tmp(tmp2[16]).ThemeContextProvider;
  const obj6 = { captionsEnabled, orientation: "landscape", style: items12, contentInsets: contentInsets2, handleOpenTranscript, handleToggleCaptions, isFullscreen, externallyPaused, onEnd, onToggleFullscreen: callback2, sourceQuestContent, hasCaptionAsset, hasTranscriptAsset };
  items12 = [tmp3.videoLandscape, , ];
  let videoLandscape9by16 = !isFullscreen;
  const VideoQuestPlayer = tmp(tmp2[17]).VideoQuestPlayer;
  if (!isFullscreen) {
    videoLandscape9by16 = tmp3.videoLandscape9by16;
  }
  items12[1] = videoLandscape9by16;
  items12[2] = isFullscreen && tmp3.videoLandscapeFullscreen;
  items13 = [closure_11(VideoQuestPlayer, obj6), ];
  const obj7 = { onClose: handleClose, style: items14 };
  items14 = [tmp3.closeButtonLandscape, ];
  let tmp42 = isFullscreen;
  const tmp15Result = isFullscreen(tmp2[18]);
  if (isFullscreen) {
    tmp42 = null != tmp36;
  }
  if (tmp42) {
    tmp42 = { left: tmp36.left };
    const obj8 = { left: tmp36.left };
  }
  items14[1] = tmp42;
  items13[1] = closure_11(tmp15Result, obj7);
  items15 = [closure_12(ThemeContextProvider, obj5), ];
  let tmp38Result4 = !isFullscreen;
  if (tmp38Result4) {
    ({ landscapeContentScroll: obj13.style, landscapeContentScrollContent: obj13.contentContainerStyle } = tmp3);
    const obj9 = { style: null, contentContainerStyle: null, showsVerticalScrollIndicator: false, alwaysBounceVertical: false, children: closure_12(sharedValue, obj10) };
    obj10 = { style: items16, children: items22 };
    items16 = [, ];
    ({ videoContentWrapper: arr17[0], videoContentWrapperLandscape: arr17[1] } = tmp3);
    const obj11 = { style: items17, onLayout: callback, children: items19 };
    items17 = [tmp3.rewardContainer, ];
    const obj12 = { minHeight: sum1 };
    items17[1] = obj12;
    const obj14 = { style: items18, animatedProps, children: closure_11(isFullscreen(tmp2[19]), obj15) };
    items18 = [tmp3.rewardContentCentered, animatedStyle];
    const View = tmp15(tmp2[12]).View;
    obj15 = { size: str2, onTextBlockLayout: callback1 };
    items19 = [closure_11(View, obj14), ];
    const items20 = [tmp3.rewardContentCentered, , ];
    const View2 = tmp15(tmp2[12]).View;
    const tmpResult13 = tmp(tmp2[10]);
    const obj16 = { style: items20, pointerEvents: "none", children: items21 };
    items20[1] = tmpResult13.isAndroid() && tmp3.modalBackground;
    items20[2] = animatedStyle1;
    tmpResult13.isAndroid() && tmp3.modalBackground;
    const tmpResult14 = tmp(tmp2[10]);
    let isAndroidResult = tmpResult14.isAndroid();
    const tmp44 = closure_7;
    if (isAndroidResult) {
      const obj17 = { align: "top", style: tmp3.cloudsBackground };
      isAndroidResult = tmp38(tmp15(tmp2[20]), obj17);
    }
    items21 = [isAndroidResult, ];
    const obj18 = { assetUrl: tmpResult15.getQuestAsset(quest, tmp(tmp2[11]).QuestAssetType.LOGO_TYPE, "dark").url, maxHeight: 90, maxWidth: contentWidth - 120 };
    const tmp15Result2 = isFullscreen(tmp2[21]);
    tmpResult15 = tmp(tmp2[11]);
    items21[1] = closure_11(tmp15Result2, obj18);
    items19[1] = closure_12(View2, obj16);
    items22 = [closure_12(sharedValue, obj11), , ];
    const obj19 = { align: "top", style: tmp3.cloudsBackground };
    items22[1] = closure_11(isFullscreen(tmp2[20]), obj19);
    const obj20 = { direction: "vertical", spacing: isFullscreen(tmp2[7]).space.PX_24, style: tmp3.questDetailsLandscape, children: items25 };
    const Stack = tmp(tmp2[22]).Stack;
    const obj21 = { direction: "horizontal", justify: "space-between", spacing: isFullscreen(tmp2[7]).space.PX_8, children: items24 };
    const Stack2 = tmp(tmp2[22]).Stack;
    const obj22 = { style: tmp3.questDetailsPrimary, onPress: handleAdvertiserDetailsPress, children: items23 };
    const PressableOpacity = tmp(tmp2[23]).PressableOpacity;
    const obj23 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: quest.config.messages.gameTitle };
    items23 = [closure_11(tmp(tmp2[24]).Text, obj23), ];
    const obj24 = { variant: "heading-xs/semibold", color: "text-subtle", children: quest.config.messages.gamePublisher };
    items23[1] = closure_11(tmp(tmp2[24]).Text, obj24);
    items24 = [closure_12(PressableOpacity, obj22), ];
    const obj25 = { style: tmp3.questDetailsSecondary, children: closure_11(isFullscreen(tmp2[25]), obj26) };
    obj26 = { quest, location: constants.VIDEO_MODAL_MOBILE, sourceQuestContent };
    class VideoQuestModalContentInProgressTsx1 {
      constructor() {
        const obj = { duration };
        return _undefined(c1, _undefined2(_undefined3.get(), obj));
      }
    }
    items24[1] = closure_11(sharedValue, obj25);
    items25 = [closure_12(Stack2, obj21), , ];
    let tmp38Result = null != memo;
    if (tmp38Result) {
      const obj27 = { onPress: handleAdvertiserDetailsPress, children: closure_11(isFullscreen(tmp2[26]), obj28) };
      const PressableOpacity2 = tmp(tmp2[23]).PressableOpacity;
      obj28 = { source: obj29, style: tmp3.playerThumbnail };
      obj29 = { uri: memo.url };
      tmp38Result = tmp38(PressableOpacity2, obj27);
    }
    items25[1] = tmp38Result;
    const obj30 = { direction: "horizontal", spacing: isFullscreen(tmp2[7]).space.PX_16, children: items26 };
    const Stack3 = tmp(tmp2[22]).Stack;
    ({ grow: true, variant: "expressive", onPress: handlePrimaryCtaPress, text: tmpResult16.getExternalCtaLabel(quest) });
    const Button = tmp(tmp2[27]).Button;
    items26 = [, , ];
    tmpResult16 = tmp(tmp2[28]);
    class VideoQuestModalContentInProgressTsx2 {
      constructor() {
        const obj = { opacity: _undefined.get() };
        return obj;
      }
    }
    if (isShareable) {
      const obj32 = { accessibilityLabel: intl.string(tmp(tmp2[30]).t.Ej3B3Y), icon: isFullscreen(tmp2[31]), onPress: handleShareQuest, variant: "secondary" };
      const IconButton = tmp(tmp2[29]).IconButton;
      intl = tmp(tmp2[30]).intl;
      isShareable = tmp38(IconButton, obj32);
    }
    items26[1] = isShareable;
    if (tmp38Result3) {
      const obj33 = { accessibilityLabel: intl2.string(tmp(tmp2[30]).t.cfY4PE), icon: isFullscreen(tmp2[32]), onPress: onNavigateToPostWatchVideo, variant: "secondary" };
      const IconButton2 = tmp(tmp2[29]).IconButton;
      intl2 = tmp(tmp2[30]).intl;
      tmp38Result3 = tmp38(IconButton2, obj33);
    }
    items26[2] = tmp38Result3;
    items25[2] = closure_12(Stack3, obj30);
    items22[2] = closure_12(Stack, obj20);
    tmp38Result4 = tmp38(tmp44, obj9);
  }
  items15[1] = tmp38Result4;
  return closure_11(SafeAreaPaddingView, obj3);
});
let closure_25 = react.memo(function PortraitLayout(arg0) {
  let Button2;
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
  let closure_3;
  let first;
  let closure_5;
  ({ handleClose, handleAdvertiserDetailsPress, handlePrimaryCtaPress, handleRewardDetailsPress, handleShareQuest, isFullscreen, onNavigateToPostWatchVideo, onEnd, externallyPaused } = arg0);
  let obj = contentWidth(memo[33]);
  const questTaskDetails = obj.useQuestTaskDetails(quest);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  const tmpResult = contentWidth(memo[34]);
  const videoQuestProgressRemainingAccessibilityLabel = tmpResult.getVideoQuestProgressRemainingAccessibilityLabel(questTaskDetails, tmp5);
  height = height(tmp2[36])(first.useContext(tmp(tmp2[35]).QuestDockGestureContext).windowDimensions).height;
  items = [contentWidth];
  memo = first.useMemo(() => Math.floor(contentWidth / metroImportAll), items);
  const callback = first.useCallback(() => {

  }, []);
  const tmp10 = height(memo[14])();
  closure_3 = tmp10;
  const tmp11 = closure_3(first.useState(64), 2);
  first = tmp11[0];
  closure_5 = tmp11[1];
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
  items4[1] = closure_11(height(memo[37]), obj7);
  const obj8 = { start, end, style: tmp15.gradientBottom, colors: items1 };
  items4[2] = closure_11(height(memo[37]), obj8);
  const obj9 = { style: items5, children: items6 };
  items5 = [, ];
  ({ videoContentWrapper: arr6[0], videoContentWrapperPortrait: arr6[1] } = tmp15);
  const obj10 = { closeButtonIconColor: height(memo[7]).colors.WHITE, onClose: handleClose, showCurrentVideoTime: true, withTextShadow: true };
  const tmp7Result = height(memo[38]);
  items6 = [closure_11(tmp7Result, obj10), ];
  const obj11 = { direction: "vertical", spacing: height(memo[7]).space.PX_24, children: items10 };
  const Stack = tmp(tmp2[22]).Stack;
  const obj12 = { direction: "horizontal", justify: "space-between", spacing: height(memo[7]).space.PX_8, children: items9 };
  const Stack2 = tmp(tmp2[22]).Stack;
  const obj13 = { style: tmp15.questDetailsPrimary, onPress: handleAdvertiserDetailsPress, children: items7 };
  const PressableOpacity = tmp(tmp2[23]).PressableOpacity;
  items7 = [, ];
  const obj14 = { variant: "heading-lg/semibold", color: "text-overlay-light", style: tmp15.textShadow, accessibilityRole: "header", children: quest.config.messages.gameTitle };
  items7[0] = closure_11(contentWidth(memo[24]).Text, obj14);
  const obj15 = { variant: "heading-xs/semibold", color: "text-overlay-light", style: items8, children: quest.config.messages.gamePublisher };
  items8 = [, ];
  ({ textShadow: arr9[0], questDetailsSubheader: arr9[1] } = tmp15);
  items7[1] = closure_11(contentWidth(memo[24]).Text, obj15);
  items9 = [closure_12(PressableOpacity, obj13), ];
  const obj16 = { style: tmp15.questDetailsSecondary, children: closure_11(height(memo[8]), obj17) };
  obj17 = { quest, size: "x-sm", progress: questTaskDetails.percentComplete, hasConfetti: true, onPress: handleRewardDetailsPress, accessibilityLabel: videoQuestProgressRemainingAccessibilityLabel };
  items9[1] = closure_11(closure_5, obj16);
  items10 = [closure_12(Stack2, obj12), ];
  const obj18 = { grow: true, variant: "expressive", onPress: handlePrimaryCtaPress, text: tmpResult2.getExternalCtaLabel(quest) };
  const Button = tmp(tmp2[27]).Button;
  tmpResult2 = contentWidth(memo[28]);
  items10[1] = closure_11(Button, obj18);
  items6[1] = closure_12(Stack, obj11);
  items4[3] = closure_12(closure_5, obj9);
  items11 = [closure_12(closure_5, obj4), ];
  const obj19 = { direction: "horizontal", justify: "flex-end", align: "center", style: tmp15.footer, spacing: height(memo[7]).space.PX_4, onLayout: callback1, children: items12 };
  const Stack3 = tmp(tmp2[22]).Stack;
  let tmp18Result = tmp5;
  if (tmp18Result) {
    const obj20 = { style: tmp15.viewRewardBtn, children: closure_11(Button2, obj21) };
    obj21 = { icon: closure_11(contentWidth(memo[39]).ArrowSmallRightIcon, { size: "sm" }), iconPosition: "end", onPress: onNavigateToPostWatchVideo, variant: "secondary", size: "sm", text: intl.string(contentWidth(memo[30]).t["jyYgZ+"]) };
    Button2 = tmp(tmp2[27]).Button;
    intl = tmp(tmp2[30]).intl;
    tmp18Result = tmp18(tmp17, obj20);
  }
  items12 = [tmp18Result, , , , ];
  if (hasTranscriptAsset) {
    const obj22 = { accessibilityLabel: intl2.string(contentWidth(memo[30]).t.KCzjTi), onPress: handleOpenTranscript, children: closure_11(TranscriptOutlineIcon, obj23) };
    intl2 = tmp(tmp2[30]).intl;
    obj23 = { color: height(memo[7]).colors.TEXT_DEFAULT };
    TranscriptOutlineIcon = tmp(tmp2[40]).TranscriptOutlineIcon;
    hasTranscriptAsset = tmp18(FooterButton, obj22);
  }
  items12[1] = hasTranscriptAsset;
  if (hasCaptionAsset) {
    const obj24 = { accessibilityLabel: intl3.string(contentWidth(memo[30]).t.bDSZO1), accessibilityRole: "togglebutton", accessibilityState: obj25, onPress: handleToggleCaptions, children: closure_11(ClosedCaptionsOutlineIcon, obj26) };
    intl3 = tmp(tmp2[30]).intl;
    obj25 = { checked: captionsEnabled };
    const tmp22 = FooterButton;
    if (captionsEnabled) {
      ClosedCaptionsOutlineIcon = tmp(tmp2[41]).ClosedCaptionsIcon;
    } else {
      ClosedCaptionsOutlineIcon = tmp(tmp2[42]).ClosedCaptionsOutlineIcon;
    }
    obj26 = { color: height(memo[7]).colors.TEXT_DEFAULT };
    hasCaptionAsset = tmp18(tmp22, obj24);
  }
  items12[2] = hasCaptionAsset;
  if (isShareable) {
    const obj27 = { accessibilityLabel: intl4.string(contentWidth(memo[30]).t.Ej3B3Y), onPress: handleShareQuest, children: closure_11(ShareIcon, obj28) };
    intl4 = tmp(tmp2[30]).intl;
    obj28 = { color: height(memo[7]).colors.TEXT_DEFAULT };
    ShareIcon = tmp(tmp2[43]).ShareIcon;
    isShareable = tmp18(FooterButton, obj27);
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
      const obj = { accessibilityLabel: intl.string(contentWidth(memo[30]).t.PdRCRg), ref, children: closure_1_11(MoreHorizontalIcon, obj2) };
      ref = ref.ref;
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      intl = contentWidth(memo[30]).intl;
      const merged1 = Object.assign(merged);
      obj2 = { color: height(memo[7]).colors.TEXT_DEFAULT };
      MoreHorizontalIcon = contentWidth(memo[44]).MoreHorizontalIcon;
      return closure_1_11(FooterButton, obj);
    }
  };
  items12[4] = closure_11(height(memo[25]), obj29);
  items11[1] = closure_12(Stack3, obj19);
  return closure_12(SafeAreaPaddingView, obj2);
});
createStyles = createStyles_mod;
let obj = { footerButton: obj2 };
obj2 = { padding: nativeDefault.space.PX_8 };
let closure_26 = createStyles.createStyles(obj);
function FooterButton(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const obj = { accessibilityRole: "button", style: closure_26().footerButton, ref };
  const PressableOpacity = Pressables.PressableOpacity;
  const merged1 = Object.assign(merged);
  return unpackModuleId(PressableOpacity, obj);
}
const memoResult = react.memo(function VideoQuestModalContentInProgress(arg0) {
  let contentWidth;
  let getQuestImpressionId;
  let isFullscreen;
  let onClose;
  let onEnd;
  let onNavigateToPostWatchVideo;
  let react;
  let setIsFullscreen;
  let sourceQuestContent;
  let tmp11;
  let tmp6;
  ({ onClose, sourceQuestContent } = arg0);
  ({ contentWidth, isFullscreen, onNavigateToPostWatchVideo, onEnd, setIsFullscreen } = arg0);
  let tmp = sourceQuestContent;
  let tmp2 = dependencyMap;
  let obj = sourceQuestContent(17614);
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
  [tmp6, dependencyMap] = getQuestImpressionId(react.useState(false), 2);
  const items2 = [quest];
  const tmp5 = getQuestImpressionId(react.useState(false), 2);
  const callback = react.useCallback(() => dependencyMap((arg0) => !arg0), []);
  const callback1 = react.useCallback(() => {
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    ActionSheetActionCreatorsDefault;
    const obj = { quest };
    const tmp2 = asyncRequire(17640, dependencyMap.paths);
    openLazy(tmp2, "transcript-" + quest.id, obj);
  }, items2);
  let obj2 = sourceQuestContent(10099);
  getQuestImpressionId = obj2.useGetQuestImpressionId();
  const tmp10 = getQuestImpressionId(react.useState(false), 2);
  [tmp11, react] = tmp10;
  let obj3 = sourceQuestContent(8762);
  const isShareableQuestResult = obj3.isShareableQuest(quest.config);
  let closure_5 = isShareableQuestResult;
  const items3 = [isShareableQuestResult, quest.id, getQuestImpressionId, sourceQuestContent];
  const callback2 = react.useCallback(() => {
    let obj3;
    const tmp = closure_5;
    if (tmp) {
      const obj = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: AnalyticsTypes.QuestContentCTA.MOBILE_SHARESHEET, surfaceId: QuestTypes.QuestContent.VIDEO_MODAL_MOBILE, sourceQuestContent, impressionId: getQuestImpressionId() };
      const captureAdUserAction = captureAdUserAction2.captureAdUserAction;
      captureAdUserAction2;
      captureAdUserAction(obj);
      duration(true);
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
  const obj4 = sourceQuestContent(17641);
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
  const obj5 = sourceQuestContent(17642);
  const videoExternallyPaused = obj5.useVideoExternallyPaused(quest.id, tmp11);
  const tmp19 = quest.config.taskConfigV2.tasks[sourceQuestContent(undefined, 5283).FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE];
  let tmp20 = null == tmp19;
  if (!tmp20) {
    const tmpResult = tmp(15135);
    tmp20 = "portrait" === tmpResult.getVideoOrientation(tmp19);
  }
  const obj6 = { quest, captionsEnabled: tmp6, contentWidth, handleClose: onClose, handleAdvertiserDetailsPress: callback3, handlePrimaryCtaPress: callback4, handleRewardDetailsPress: callback5, handleShareQuest: callback2, handleOpenTranscript: callback1, handleToggleCaptions: callback, isFullscreen, onNavigateToPostWatchVideo, onEnd, setIsFullscreen, externallyPaused: videoExternallyPaused, sourceQuestContent, hasCaptionAsset: null != memo, hasTranscriptAsset: null != memo1, isShareable: isShareableQuestResult };
  return closure_11(tmp20 ? closure_25 : closure_24, obj6);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalContentInProgress.tsx");

export default memoResult;
