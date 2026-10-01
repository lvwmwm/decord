// Module ID: 14688
// Function ID: 14689
// Name: VideoQuestModalContentCompleted
// Dependencies: [32, 19, 17, 21, 4836, 576, 14662, 14657, 10689, 14686, 14653, 10542, 10681, 4566, 5280, 7135, 7809, 10699, 10758, 14625, 7715, 6544, 5279, 4832, 1115, 14679, 6494, 14680, 5281, 14649, 5435, 9640, 5759, 5899, 12470, 2]

// Module 14688 (VideoQuestModalContentCompleted)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import spring from "spring" /* 5280 */;
import QuestTypes from "QuestTypes" /* 5759 */;
import showShareActionSheet2 from "showShareActionSheet" /* 7809 */;
import AssetUtils from "AssetUtils" /* 10689 */;
import QuestCopyUtils from "QuestCopyUtils" /* 10699 */;
import QuestProgressIndicator from "QuestProgressIndicator" /* 14662 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let _slicedToArray = _slicedToArray_mod;
({ ActivityIndicator: hasOwnProperty, ScrollView: metroRequire, View: metroImportDefault } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const ANIMATED_CONTENT_SPRING_CONFIG = { mass: 1.9, damping: 18, stiffness: 80, overshootClamping: false };
let createStyles = createStyles_mod;
let obj = { wrapper: { flexGrow: 1, flexShrink: 1 }, headerContentCopy: { flexGrow: 1, flexShrink: 1 }, closeButton: { opacity: 0.5 }, scroll: { flexGrow: 1, flexShrink: 1 }, scrollContent: { flexGrow: 1 }, content: obj2, contentRewardsAnimatedWrapper: { flexGrow: 1, flexShrink: 0 }, contentRewardsWrapper: obj3, contentRewards: { alignItems: "center" }, contentRewardsCopy: { textAlign: "center" }, contentEndCardHeader: obj4, contentEndCardHeaderCopy: { flexGrow: 1, flexShrink: 1 }, contentEndCard: obj5, image: obj6 };
obj2 = { padding: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexGrow: 1, flexShrink: 0, paddingTop: QuestProgressIndicator.COMPLETION_GLOW_CLEARANCE };
obj4 = { marginBottom: nativeDefault.space.PX_16 };
obj5 = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_STRONG, paddingTop: nativeDefault.space.PX_24, flexShrink: 0 };
obj6 = { height: 210, marginBottom: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.xl };
let closure_11 = createStyles(obj);
const __initData = { code: "function VideoQuestModalContentCompletedTsx1(){const{withDelay,ANIMATION_DELAY,withSpring,isComponentMounted,ANIMATED_CONTENT_SPRING_CONFIG,interpolate,ANIMATED_CONTENT_OFFSET_Y}=this.__closure;return{opacity:withDelay(ANIMATION_DELAY,withSpring(isComponentMounted.get(),ANIMATED_CONTENT_SPRING_CONFIG)),transform:[{translateY:withDelay(ANIMATION_DELAY,withSpring(interpolate(isComponentMounted.get(),[0,1],[ANIMATED_CONTENT_OFFSET_Y,0]),ANIMATED_CONTENT_SPRING_CONFIG))}]};}" };
const memoResult = react.memo(function VideoQuestModalContentCompleted(onRestartVideo) {
  let RetryIcon;
  let ShareIcon;
  let claim;
  let closure_1;
  let intl;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let isLoading;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items3;
  let items5;
  let items6;
  let items9;
  let obj10;
  let obj22;
  let obj24;
  let obj25;
  let obj26;
  let obj30;
  let onClose;
  let quest;
  let sharedValue;
  let sourceQuestContent;
  let stringResult;
  let tmp17;
  let tmp2Result8;
  let tmp5Result2;
  ({ onClose, sourceQuestContent } = onRestartVideo);
  onRestartVideo = onRestartVideo.onRestartVideo;
  let tmp = closure_11();
  const tmp2 = quest;
  const tmp3 = sharedValue;
  let obj = quest(sharedValue[7]);
  quest = obj.useVideoQuestModalContext().quest;
  let obj2 = react;
  let items = [quest];
  const memo = react.useMemo(() => {
    const obj = AssetUtils;
    return obj.getQuestAsset(quest, AssetUtils.QuestAssetType.VIDEO_PLAYER_THUMBNAIL, undefined, true);
  }, items);
  let obj3 = quest(sharedValue[9]);
  importDefault = obj3.useVideoQuestClickCtaAndMaybeCloseModal({ quest, onClose, sourceQuestContent });
  let obj4 = quest(sharedValue[10]);
  const obj5 = { quest, onSuccess: require("ProductPurchaseSuccessActionCreators").close, sourceQuestContent };
  const questRewardClaimHandler = obj4.useQuestRewardClaimHandler(obj5);
  let isClaiming = questRewardClaimHandler.isClaiming;
  const userStatus = quest.userStatus;
  let claimedAt;
  ({ isLoading, claim } = questRewardClaimHandler);
  if (userStatus != null) {
    claimedAt = userStatus.claimedAt;
  }
  const tmp2Result = tmp2(tmp3[12]);
  const isQuestAccessSuspended = tmp2Result.useIsQuestAccessSuspended();
  const tmp2Result5 = tmp2(tmp3[13]);
  sharedValue = tmp2Result5.useSharedValue(0);
  const fn = function u() {
    let items;
    let obj2;
    let obj4;
    let withDelay;
    let withDelay2;
    let withSpring;
    const obj = { opacity: withDelay(125, obj2.withSpring(sharedValue.get(), ANIMATED_CONTENT_SPRING_CONFIG)), transform: items };
    withDelay = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    obj2 = spring;
    const obj3 = { translateY: withDelay2(125, withSpring(obj4.interpolate(sharedValue.get(), [0, 1], [75, 0]), ANIMATED_CONTENT_SPRING_CONFIG)) };
    withDelay2 = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    withSpring = spring.withSpring;
    spring;
    items = [obj3];
    obj4 = ReanimatedRexport;
    return obj;
  };
  const tmp2Result6 = tmp2(tmp3[13]);
  fn.__closure = { withDelay: tmp2(tmp3[13]).withDelay, ANIMATION_DELAY: 125, withSpring: tmp2(tmp3[14]).withSpring, isComponentMounted: sharedValue, ANIMATED_CONTENT_SPRING_CONFIG, interpolate: tmp2(tmp3[13]).interpolate, ANIMATED_CONTENT_OFFSET_Y: 75 };
  fn.__workletHash = 2704439293952;
  fn.__initData = __initData;
  const items1 = [sharedValue];
  ({ withDelay: tmp2(tmp3[13]).withDelay, ANIMATION_DELAY: 125, withSpring: tmp2(tmp3[14]).withSpring, isComponentMounted: sharedValue, ANIMATED_CONTENT_SPRING_CONFIG, interpolate: tmp2(tmp3[13]).interpolate, ANIMATED_CONTENT_OFFSET_Y: 75 });
  const animatedStyle = tmp2Result6.useAnimatedStyle(fn);
  const effect = obj2.useEffect(() => {
    const result = sharedValue.set(1);
  }, items1);
  const tmp2Result7 = tmp2(tmp3[15]);
  let isShareableQuestResult = tmp2Result7.isShareableQuest(quest.config);
  _slicedToArray = isShareableQuestResult;
  const items2 = [isShareableQuestResult, quest.id];
  const callback = obj2.useCallback(() => {
    let obj2;
    const tmp = _slicedToArray;
    if (tmp) {
      const obj = { message: obj2.getQuestUrl(quest.id) };
      const showShareActionSheet = showShareActionSheet2.showShareActionSheet;
      showShareActionSheet2;
      obj2 = QuestCopyUtils;
      showShareActionSheet(obj, "Video Quest Modal");
    }
  }, items2);
  const layoutEffect = obj2.useLayoutEffect(() => {
    const obj = quest(sharedValue[18]);
    obj.applyOrientationLock("PORTRAIT");
  }, []);
  const height = tmp5(tmp3[20])(obj2.useContext(tmp2(tmp3[19]).QuestDockGestureContext).windowDimensions).height;
  let str = "md";
  if (height >= 760) {
    let str2 = "lg";
    if (height < 800) {
      str2 = "md-lg";
    }
    str = str2;
  }
  [tmp17, react] = obj2.useState(null);
  _slicedToArray(obj2.useState(null), 2);
  const callback1 = obj2.useCallback((nativeEvent) => {
    react(nativeEvent.nativeEvent.layout.height);
  }, []);
  if (tmp17 == null) {
    tmp17 = tmp2(tmp3[6]).QUEST_PROGRESS_DIAMETER_BY_SIZE[str];
  }
  const sum = tmp17 + tmp2(tmp3[6]).COMPLETION_GLOW_CLEARANCE;
  const sum1 = sum + tmp5(tmp3[5]).space.PX_16;
  const obj7 = { bottom: true, style: tmp.wrapper, children: null };
  const SafeAreaPaddingView = tmp2(tmp3[21]).SafeAreaPaddingView;
  const obj8 = { align: "center", direction: "horizontal", justify: "space-between", style: tmp.content, children: items3 };
  const Stack = tmp2(tmp3[22]).Stack;
  const obj9 = { variant: "heading-sm/semibold", color: "text-subtle", style: tmp.headerContentCopy, children: intl.formatToPlainString(tmp2(tmp3[24]).t.EAYZAr, obj10) };
  const Heading = tmp2(tmp3[23]).Heading;
  intl = tmp2(tmp3[24]).intl;
  obj10 = { questName: quest.config.messages.questName };
  items3 = [closure_8(Heading, obj9), ];
  const obj11 = { onClose, style: tmp.closeButton };
  items3[1] = closure_8(require("VideoQuestModalCloseButton"), obj11);
  const items4 = [closure_9(Stack, obj8), ];
  const obj12 = { style: tmp.scroll, contentContainerStyle: tmp.scrollContent, showsVerticalScrollIndicator: false, alwaysBounceVertical: false, children: null };
  const obj13 = { style: items5, children: null };
  items5 = [tmp.contentRewardsAnimatedWrapper, { minHeight: sum1 }, animatedStyle];
  const obj14 = { align: "center", justify: "center", spacing: require("native").space.PX_24, style: items6, children: null };
  const tmp5Result = require("ReanimatedNativeView");
  const Stack2 = tmp2(tmp3[22]).Stack;
  items6 = [, ];
  ({ content: arr7[0], contentRewardsWrapper: arr7[1] } = tmp);
  const tmp23 = closure_6;
  if (isLoading) {
    let tmp21Result;
    if (!isClaiming) {
      tmp21Result = tmp22(closure_5, {});
    }
    const items7 = [tmp21Result, ];
    let tmp22Result3 = !tmp8;
    if (tmp22Result3) {
      const obj15 = { grow: true, variant: "secondary", loading: isClaiming, disabled: isClaiming, onPress: claim, text: intl3.string(tmp2(tmp3[24]).t.cfY4PE), onPressDisabled: tmp5Result2 };
      const Button = tmp2(tmp3[28]).Button;
      if (!isClaiming) {
        isClaiming = isQuestAccessSuspended;
      }
      intl3 = tmp2(tmp3[24]).intl;
      tmp5Result2 = undefined;
      if (isQuestAccessSuspended) {
        tmp5Result2 = tmp5(tmp3[29]);
      }
      tmp22Result3 = tmp22(Button, obj15);
    }
    items7[1] = tmp22Result3;
    obj14.children = items7;
    obj13.children = closure_9(Stack2, obj14);
    const items8 = [closure_8(tmp5Result, obj13), ];
    const obj16 = { style: items9, children: items12 };
    items9 = [, ];
    ({ content: arr11[0], contentEndCard: arr11[1] } = tmp);
    const obj17 = { direction: "horizontal", justify: "space-between", style: tmp.contentEndCardHeader, children: items11 };
    const Stack3 = tmp2(tmp3[22]).Stack;
    const obj18 = { spacing: require("native").space.PX_4, style: tmp.contentEndCardHeaderCopy, children: items10 };
    const Stack4 = tmp2(tmp3[22]).Stack;
    const obj19 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: quest.config.messages.gameTitle };
    items10 = [closure_8(tmp2(tmp3[23]).Heading, obj19), ];
    const obj20 = { variant: "text-sm/medium", color: "text-subtle", children: quest.config.messages.gamePublisher };
    items10[1] = closure_8(tmp2(tmp3[23]).Text, obj20);
    items11 = [closure_9(Stack4, obj18), ];
    const obj21 = { accessibilityRole: "button", accessibilityLabel: intl4.string(tmp2(tmp3[24]).t.YsCuyF), onPress: onRestartVideo, children: closure_8(RetryIcon, obj22) };
    const PressableOpacity = tmp2(tmp3[30]).PressableOpacity;
    intl4 = tmp2(tmp3[24]).intl;
    obj22 = { color: require("native").colors.INTERACTIVE_TEXT_DEFAULT };
    RetryIcon = tmp2(tmp3[31]).RetryIcon;
    items11[1] = closure_8(PressableOpacity, obj21);
    items12 = [closure_9(Stack3, obj17), , ];
    let tmp22Result4 = null != memo;
    const tmp31 = closure_7;
    if (tmp22Result4) {
      const obj23 = {
        accessibilityRole: "button",
        accessibilityLabel: intl5.formatToPlainString(tmp2(tmp3[24]).t.r8BzFT, obj24),
        onPress() {
              return closure_1(QuestTypes.QuestContent.VIDEO_MODAL_ICON_END_CARD);
            },
        children: closure_8(require("FastImage"), obj25)
      };
      const PressableOpacity2 = tmp2(tmp3[30]).PressableOpacity;
      intl5 = tmp2(tmp3[24]).intl;
      obj25 = { style: tmp.image, source: obj26, resizeMode: "cover" };
      obj24 = { gameTitle: quest.config.messages.gameTitle };
      obj26 = { uri: memo.url };
      tmp22Result4 = tmp22(PressableOpacity2, obj23);
    }
    items12[1] = tmp22Result4;
    const obj27 = { direction: "horizontal", spacing: require("native").space.PX_16, align: "center", children: items13 };
    const Stack5 = tmp2(tmp3[22]).Stack;
    const obj28 = {
      grow: true,
      variant: "expressive",
      onPress() {
          return closure_1(QuestTypes.QuestContent.VIDEO_MODAL_END_CARD);
        },
      text: tmp2Result8.getExternalCtaLabel(quest)
    };
    const Button2 = tmp2(tmp3[28]).Button;
    tmp2Result8 = tmp2(tmp3[17]);
    items13 = [closure_8(Button2, obj28), ];
    if (isShareableQuestResult) {
      const obj29 = { accessibilityRole: "button", accessibilityLabel: intl6.string(tmp2(tmp3[24]).t.Ej3B3Y), onPress: callback, children: closure_8(ShareIcon, obj30) };
      const PressableOpacity3 = tmp2(tmp3[30]).PressableOpacity;
      intl6 = tmp2(tmp3[24]).intl;
      obj30 = { color: require("native").colors.INTERACTIVE_TEXT_DEFAULT };
      ShareIcon = tmp2(tmp3[34]).ShareIcon;
      isShareableQuestResult = tmp22(PressableOpacity3, obj29);
    }
    items13[1] = isShareableQuestResult;
    items12[2] = closure_9(Stack5, obj27);
    items8[1] = closure_9(tmp31, obj16);
    obj12.children = items8;
    items4[1] = closure_9(tmp23, obj12);
    obj7.children = items4;
    return closure_9(SafeAreaPaddingView, obj7);
  }
  const obj31 = { style: tmp.contentRewards, onLayout: callback1, children: items14 };
  items14 = [closure_8(tmp5(tmp3[27]), { withQuestName: false, withRewardAvailableCopy: false, size: str, withRewardTileAnimation: true }), ];
  const obj32 = { color: "text-strong", style: tmp.contentRewardsCopy, variant: "heading-lg/semibold", children: stringResult };
  const Heading2 = tmp2(tmp3[23]).Heading;
  const intl2 = tmp2(tmp3[24]).intl;
  const string = intl2.string;
  const t = tmp2(tmp3[24]).t;
  const tmp27 = closure_7;
  if (null != claimedAt) {
    stringResult = string(t["EMp8/M"]);
  } else {
    stringResult = string(t.qyKLdg);
  }
  items14[1] = closure_8(Heading2, obj32);
  tmp21Result = tmp21(tmp27, obj31);
});
let result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalContentCompleted.tsx");

export default memoResult;
