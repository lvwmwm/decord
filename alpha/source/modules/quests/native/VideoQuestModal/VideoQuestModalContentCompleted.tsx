// Module ID: 17381
// Function ID: 17382
// Name: VideoQuestModalContentCompleted
// Dependencies: [32, 19, 17, 21, 5141, 575, 17357, 17352, 9845, 17379, 17348, 14707, 9831, 1652, 5771, 8006, 9076, 9855, 14917, 17320, 8982, 7428, 6162, 5761, 1113, 17373, 17374, 5768, 17343, 7121, 11270, 6919, 5851, 14979, 2]

// Module 17381 (VideoQuestModalContentCompleted)
import nativeDefault from "native" /* 575 */;
import QuestTypes from "QuestTypes" /* 6919 */;
import showShareActionSheet2 from "showShareActionSheet" /* 9076 */;
import AssetUtils from "AssetUtils" /* 9845 */;
import QuestCopyUtils from "QuestCopyUtils" /* 9855 */;
import QuestProgressIndicator from "QuestProgressIndicator" /* 17357 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
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
let closure_10 = { mass: 1.9, damping: 18, stiffness: 80, overshootClamping: false };
let createStyles = createStyles_mod;
let obj = { wrapper: { flexGrow: 1, flexShrink: 1 }, headerContentCopy: { flexGrow: 1, flexShrink: 1 }, closeButton: { opacity: 0.5 }, scroll: { flexGrow: 1, flexShrink: 1 }, scrollContent: { flexGrow: 1 }, content: obj2, contentRewardsAnimatedWrapper: { flexGrow: 1, flexShrink: 0 }, contentRewardsWrapper: obj3, contentRewards: { alignItems: "center" }, contentRewardsCopy: { textAlign: "center" }, contentEndCardHeader: obj4, contentEndCardHeaderCopy: { flexGrow: 1, flexShrink: 1 }, contentEndCard: obj5, image: obj6 };
obj2 = { padding: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexGrow: 1, flexShrink: 0, paddingTop: QuestProgressIndicator.COMPLETION_GLOW_CLEARANCE };
obj4 = { marginBottom: nativeDefault.space.PX_16 };
obj5 = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_STRONG, paddingTop: nativeDefault.space.PX_24, flexShrink: 0 };
obj6 = { height: 210, marginBottom: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.xl };
let closure_11 = createStyles(obj);
let closure_12 = { code: "(function VideoQuestModalContentCompletedTsx1(){let[withDelay,ANIMATION_DELAY,withSpring,isComponentMounted,ANIMATED_CONTENT_SPRING_CONFIG,interpolate,ANIMATED_CONTENT_OFFSET_Y]=this.__closure;return{opacity:withDelay(ANIMATION_DELAY,withSpring(isComponentMounted.get(),ANIMATED_CONTENT_SPRING_CONFIG)),transform:[{translateY:withDelay(ANIMATION_DELAY,withSpring(interpolate(isComponentMounted.get(),[0,1],[ANIMATED_CONTENT_OFFSET_Y,0]),ANIMATED_CONTENT_SPRING_CONFIG))}]};})" };
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
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items5;
  let items7;
  let items8;
  let obj21;
  let obj23;
  let obj24;
  let obj25;
  let obj29;
  let obj9;
  let onClose;
  let quest;
  let sharedValue;
  let sourceQuestContent;
  let stringResult;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp26;
  let tmp2Result8;
  let tmp5Result;
  ({ onClose, sourceQuestContent } = onRestartVideo);
  onRestartVideo = onRestartVideo.onRestartVideo;
  let tmp = closure_11();
  const tmp3 = sharedValue;
  let obj = quest(sharedValue[7]);
  quest = obj.useVideoQuestModalContext().quest;
  let obj2 = react;
  let items = [quest];
  const memo = react.useMemo(() => {
    const obj = AssetUtils;
    return obj.getQuestAsset(quest, AssetUtils.QuestAssetType.VIDEO_PLAYER_THUMBNAIL, undefined, true);
  }, items);
  const obj3 = quest(sharedValue[9]);
  importDefault = obj3.useVideoQuestClickCtaAndMaybeCloseModal({ quest, onClose, sourceQuestContent });
  const obj4 = quest(sharedValue[10]);
  const obj5 = { quest, onSuccess: require("ProductPurchaseSuccessActionCreators").close, sourceQuestContent };
  const questRewardClaimHandler = obj4.useQuestRewardClaimHandler(obj5);
  let isClaiming = questRewardClaimHandler.isClaiming;
  const userStatus = quest.userStatus;
  let claimedAt;
  ({ isLoading, claim } = questRewardClaimHandler);
  if (userStatus != null) {
    claimedAt = userStatus.claimedAt;
  }
  const tmp2Result = quest(tmp3[12]);
  const isQuestAccessSuspended = tmp2Result.useIsQuestAccessSuspended();
  const tmp2Result5 = quest(tmp3[13]);
  sharedValue = tmp2Result5.useSharedValue(0);
  let items1 = [closure_12, , , , , , , ];
  const useAnimatedStyle = tmp2(tmp3[13]).useAnimatedStyle;
  quest(tmp3[13]);
  items1[1] = quest(tmp3[13]).withDelay;
  items1[2] = 125;
  items1[3] = quest(tmp3[14]).withSpring;
  items1[4] = sharedValue;
  items1[5] = closure_10;
  items1[6] = quest(tmp3[13]).interpolate;
  items1[7] = 75;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19] = items1;
  class VideoQuestModalContentCompletedTsx1 {
    constructor() {
      let items;
      let items1;
      const obj = { opacity: _undefined(c1, _undefined2(_undefined3.get(), c4)), transform: items1 };
      const obj2 = { translateY: _undefined(c1, _undefined2(_undefined4(_undefined3.get(), [0, 1], items), c4)) };
      items = [c6, 0];
      items1 = [obj2];
      return obj;
    }
  }
  const items2 = [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19];
  VideoQuestModalContentCompletedTsx1.__closure = items2;
  VideoQuestModalContentCompletedTsx1.__workletHash = 11129747434457;
  VideoQuestModalContentCompletedTsx1.__initData = tmp12;
  const items3 = [sharedValue];
  const animatedStyle = useAnimatedStyle(VideoQuestModalContentCompletedTsx1);
  const effect = obj2.useEffect(() => {
    const result = sharedValue.set(1);
  }, items3);
  const tmp2Result7 = quest(tmp3[15]);
  let isShareableQuestResult = tmp2Result7.isShareableQuest(quest.config);
  _slicedToArray = isShareableQuestResult;
  const items4 = [isShareableQuestResult, quest.id];
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
  }, items4);
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
  [tmp26, react] = obj2.useState(null);
  _slicedToArray(obj2.useState(null), 2);
  const callback1 = obj2.useCallback((nativeEvent) => {
    react(nativeEvent.nativeEvent.layout.height);
  }, []);
  if (tmp26 == null) {
    tmp26 = quest(tmp3[6]).QUEST_PROGRESS_DIAMETER_BY_SIZE[str];
  }
  const sum = tmp26 + tmp2(tmp3[6]).COMPLETION_GLOW_CLEARANCE;
  const sum1 = sum + tmp5(tmp3[5]).space.PX_16;
  const obj6 = { bottom: true, style: tmp.wrapper, children: null };
  const SafeAreaPaddingView = tmp2(tmp3[21]).SafeAreaPaddingView;
  const obj7 = { align: "center", direction: "horizontal", justify: "space-between", style: tmp.content, children: items5 };
  const Stack = tmp2(tmp3[22]).Stack;
  const obj8 = { variant: "heading-xs/semibold", color: "text-subtle", style: tmp.headerContentCopy, children: intl.formatToPlainString(quest(tmp3[24]).t.EAYZAr, obj9) };
  const Heading = tmp2(tmp3[23]).Heading;
  intl = tmp2(tmp3[24]).intl;
  obj9 = { questName: quest.config.messages.questName };
  items5 = [closure_8(Heading, obj8), ];
  const obj10 = { onClose, style: tmp.closeButton };
  items5[1] = closure_8(require("VideoQuestModalCloseButton"), obj10);
  const items6 = [closure_9(Stack, obj7), ];
  const obj11 = { style: tmp.scroll, contentContainerStyle: tmp.scrollContent, showsVerticalScrollIndicator: false, alwaysBounceVertical: false, children: null };
  const obj12 = { style: items7, children: null };
  items7 = [tmp.contentRewardsAnimatedWrapper, { minHeight: sum1 }, animatedStyle];
  const View = tmp5(tmp3[13]).View;
  const obj13 = { align: "center", justify: "center", spacing: require("native").space.PX_24, style: items8, children: null };
  const Stack2 = tmp2(tmp3[22]).Stack;
  items8 = [, ];
  ({ content: arr9[0], contentRewardsWrapper: arr9[1] } = tmp);
  const tmp32 = closure_6;
  if (isLoading) {
    let tmp30Result;
    if (!isClaiming) {
      tmp30Result = tmp31(closure_5, {});
    }
    const items9 = [tmp30Result, ];
    let tmp31Result3 = !tmp8;
    if (tmp31Result3) {
      const obj14 = { grow: true, variant: "secondary", loading: isClaiming, disabled: isClaiming, onPress: claim, text: intl3.string(quest(tmp3[24]).t.cfY4PE), onPressDisabled: tmp5Result };
      const Button = tmp2(tmp3[27]).Button;
      if (!isClaiming) {
        isClaiming = isQuestAccessSuspended;
      }
      intl3 = tmp2(tmp3[24]).intl;
      tmp5Result = undefined;
      if (isQuestAccessSuspended) {
        tmp5Result = tmp5(tmp3[28]);
      }
      tmp31Result3 = tmp31(Button, obj14);
    }
    items9[1] = tmp31Result3;
    obj13.children = items9;
    obj12.children = closure_9(Stack2, obj13);
    const items10 = [closure_8(View, obj12), ];
    const obj15 = { style: items11, children: items14 };
    items11 = [, ];
    ({ content: arr13[0], contentEndCard: arr13[1] } = tmp);
    const obj16 = { direction: "horizontal", justify: "space-between", style: tmp.contentEndCardHeader, children: items13 };
    const Stack3 = tmp2(tmp3[22]).Stack;
    const obj17 = { spacing: require("native").space.PX_4, style: tmp.contentEndCardHeaderCopy, children: items12 };
    const Stack4 = tmp2(tmp3[22]).Stack;
    const obj18 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: quest.config.messages.gameTitle };
    items12 = [closure_8(tmp2(tmp3[23]).Heading, obj18), ];
    const obj19 = { variant: "body-sm/medium", color: "text-subtle", children: quest.config.messages.gamePublisher };
    items12[1] = closure_8(quest(tmp3[23]).Text, obj19);
    items13 = [closure_9(Stack4, obj17), ];
    const obj20 = { accessibilityRole: "button", accessibilityLabel: intl4.string(quest(tmp3[24]).t.YsCuyF), onPress: onRestartVideo, children: closure_8(RetryIcon, obj21) };
    const PressableOpacity = tmp2(tmp3[29]).PressableOpacity;
    intl4 = tmp2(tmp3[24]).intl;
    obj21 = { color: require("native").colors.INTERACTIVE_TEXT_DEFAULT };
    RetryIcon = tmp2(tmp3[30]).RetryIcon;
    items13[1] = closure_8(PressableOpacity, obj20);
    items14 = [closure_9(Stack3, obj16), , ];
    let tmp31Result4 = null != memo;
    const tmp39 = closure_7;
    if (tmp31Result4) {
      const obj22 = {
        accessibilityRole: "button",
        accessibilityLabel: intl5.formatToPlainString(quest(tmp3[24]).t.r8BzFT, obj23),
        onPress() {
              return closure_1(QuestTypes.QuestContent.VIDEO_MODAL_ICON_END_CARD);
            },
        children: closure_8(require("FastImage"), obj24)
      };
      const PressableOpacity2 = tmp2(tmp3[29]).PressableOpacity;
      intl5 = tmp2(tmp3[24]).intl;
      obj24 = { style: tmp.image, source: obj25, resizeMode: "cover" };
      obj23 = { gameTitle: quest.config.messages.gameTitle };
      obj25 = { uri: memo.url };
      tmp31Result4 = tmp31(PressableOpacity2, obj22);
    }
    items14[1] = tmp31Result4;
    const obj26 = { direction: "horizontal", spacing: require("native").space.PX_16, align: "center", children: items15 };
    const Stack5 = tmp2(tmp3[22]).Stack;
    const obj27 = {
      grow: true,
      variant: "expressive",
      onPress() {
          return closure_1(QuestTypes.QuestContent.VIDEO_MODAL_END_CARD);
        },
      text: tmp2Result8.getExternalCtaLabel(quest)
    };
    const Button2 = tmp2(tmp3[27]).Button;
    tmp2Result8 = quest(tmp3[17]);
    items15 = [closure_8(Button2, obj27), ];
    if (isShareableQuestResult) {
      const obj28 = { accessibilityRole: "button", accessibilityLabel: intl6.string(quest(tmp3[24]).t.Ej3B3Y), onPress: callback, children: closure_8(ShareIcon, obj29) };
      const PressableOpacity3 = tmp2(tmp3[29]).PressableOpacity;
      intl6 = tmp2(tmp3[24]).intl;
      obj29 = { color: require("native").colors.INTERACTIVE_TEXT_DEFAULT };
      ShareIcon = tmp2(tmp3[33]).ShareIcon;
      isShareableQuestResult = tmp31(PressableOpacity3, obj28);
    }
    items15[1] = isShareableQuestResult;
    items14[2] = closure_9(Stack5, obj26);
    items10[1] = closure_9(tmp39, obj15);
    obj11.children = items10;
    items6[1] = closure_9(tmp32, obj11);
    class VideoQuestModalContentCompletedTsx1 {
      constructor() {
        let items;
        let items1;
        const obj = { opacity: _undefined(c1, _undefined2(_undefined3.get(), c4)), transform: items1 };
        const obj2 = { translateY: _undefined(c1, _undefined2(_undefined4(_undefined3.get(), [0, 1], items), c4)) };
        items = [c6, 0];
        items1 = [obj2];
        return obj;
      }
    }
    return closure_9(SafeAreaPaddingView, obj6);
  }
  const obj30 = { style: tmp.contentRewards, onLayout: callback1, children: items16 };
  items16 = [closure_8(tmp5(tmp3[26]), { withQuestName: false, withRewardAvailableCopy: false, size: str, withRewardTileAnimation: true }), ];
  const obj31 = { color: "text-strong", style: tmp.contentRewardsCopy, variant: "heading-lg/semibold", children: stringResult };
  const Heading2 = tmp2(tmp3[23]).Heading;
  const intl2 = tmp2(tmp3[24]).intl;
  const string = intl2.string;
  const t = tmp2(tmp3[24]).t;
  const tmp35 = closure_7;
  if (null != claimedAt) {
    stringResult = string(t["EMp8/M"]);
  } else {
    stringResult = string(t.qyKLdg);
  }
  items16[1] = closure_8(Heading2, obj31);
  tmp30Result = tmp30(tmp35, obj30);
});
let result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalContentCompleted.tsx");

export default memoResult;
