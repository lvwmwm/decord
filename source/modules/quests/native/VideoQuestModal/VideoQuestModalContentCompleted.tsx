// Module ID: 14054
// Function ID: 108086
// Dependencies: [57, 31, 27, 33, 4130, 689, 14022, 9458, 14052, 14018, 9772, 3991, 4542, 6963, 8332, 9468, 8303, 13995, 14027, 5121, 4541, 4126, 1212, 14045, 7589, 14046, 4543, 4660, 9949, 5085, 12227, 2]

// Module 14054
import _slicedToArray from "_slicedToArray";
import importAllResult from "set";
import get_ActivityIndicator from "PressableBase";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ ActivityIndicator: closure_5, ScrollView: closure_6, View: closure_7 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = { mass: 1.9, damping: 18, stiffness: 80, overshootClamping: false };
let obj = { wrapper: { flexGrow: 1, flexShrink: 1 }, headerContentCopy: { flexGrow: 1, flexShrink: 1 }, closeButton: { opacity: 0.5 }, scroll: { flexGrow: 1, flexShrink: 1 }, scrollContent: { flexGrow: 1 } };
obj = { padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.content = obj;
obj.contentRewardsAnimatedWrapper = { flexGrow: 1, flexShrink: 0 };
obj.contentRewardsWrapper = { flexGrow: 1, flexShrink: 0 };
obj.contentRewards = { alignItems: "center" };
obj.contentRewardsCopy = { textAlign: "center" };
_createForOfIteratorHelperLoose = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.contentEndCardHeader = _createForOfIteratorHelperLoose;
obj.contentEndCardHeaderCopy = { flexGrow: 1, flexShrink: 1 };
obj.contentEndCard = { borderTopWidth: 1, borderTopColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_24, flexShrink: 0 };
let obj2 = { borderTopWidth: 1, borderTopColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_24, flexShrink: 0 };
obj.image = { height: 210, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24, borderRadius: require("_createForOfIteratorHelperLoose").radii.xl };
let closure_11 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_12 = { code: "function VideoQuestModalContentCompletedTsx1(){const{withDelay,ANIMATION_DELAY,withSpring,isComponentMounted,ANIMATED_CONTENT_SPRING_CONFIG,interpolate,ANIMATED_CONTENT_OFFSET_Y}=this.__closure;return{opacity:withDelay(ANIMATION_DELAY,withSpring(isComponentMounted.get(),ANIMATED_CONTENT_SPRING_CONFIG)),transform:[{translateY:withDelay(ANIMATION_DELAY,withSpring(interpolate(isComponentMounted.get(),[0,1],[ANIMATED_CONTENT_OFFSET_Y,0]),ANIMATED_CONTENT_SPRING_CONFIG))}]};}" };
let obj3 = { height: 210, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24, borderRadius: require("_createForOfIteratorHelperLoose").radii.xl };
const memoResult = importAllResult.memo(function VideoQuestModalContentCompleted(onRestartVideo) {
  let claim;
  let isLoading;
  let onClose;
  let sourceQuestContent;
  ({ onClose, sourceQuestContent } = onRestartVideo);
  const tmp = callback4();
  let obj = quest(14022);
  quest = obj.useVideoQuestModalContext().quest;
  let items = [quest];
  const memo = importAllResult.useMemo(() => quest(isShareableQuestResult[7]).getQuestAsset(quest, quest(isShareableQuestResult[7]).QuestAssetType.VIDEO_PLAYER_THUMBNAIL, undefined, true), items);
  let obj1 = quest(14052);
  const videoQuestClickCtaAndMaybeCloseModal = obj1.useVideoQuestClickCtaAndMaybeCloseModal({ quest, onClose, sourceQuestContent });
  let obj2 = quest(14018);
  obj = { quest, onSuccess: sharedValue(9772).close, sourceQuestContent };
  const questRewardClaimHandler = obj2.useQuestRewardClaimHandler(obj);
  const isClaiming = questRewardClaimHandler.isClaiming;
  const userStatus = quest.userStatus;
  let claimedAt;
  ({ isLoading, claim } = questRewardClaimHandler);
  if (null != userStatus) {
    claimedAt = userStatus.claimedAt;
  }
  let obj4 = quest(3991);
  sharedValue = obj4.useSharedValue(0);
  let obj5 = quest(3991);
  const fn = function _() {
    let obj = {};
    const obj2 = quest(isShareableQuestResult[11]);
    obj.opacity = obj2.withDelay(125, quest(isShareableQuestResult[12]).withSpring(sharedValue.get(), outer1_10));
    obj = {};
    const obj3 = quest(isShareableQuestResult[12]);
    const obj5 = quest(isShareableQuestResult[11]);
    const obj6 = quest(isShareableQuestResult[12]);
    obj.translateY = obj5.withDelay(125, obj6.withSpring(quest(isShareableQuestResult[11]).interpolate(sharedValue.get(), [0, 1], [75, 0]), outer1_10));
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = { withDelay: quest(3991).withDelay, ANIMATION_DELAY: 125, withSpring: quest(4542).withSpring, isComponentMounted: sharedValue, ANIMATED_CONTENT_SPRING_CONFIG: closure_10, interpolate: quest(3991).interpolate, ANIMATED_CONTENT_OFFSET_Y: 75 };
  fn.__closure = obj;
  fn.__workletHash = 2704439293952;
  fn.__initData = closure_12;
  const items1 = [sharedValue];
  const animatedStyle = obj5.useAnimatedStyle(fn);
  const effect = importAllResult.useEffect(() => {
    const result = sharedValue.set(1);
  }, items1);
  let obj7 = quest(6963);
  let isShareableQuestResult = obj7.isShareableQuest(quest.config);
  const dependencyMap = isShareableQuestResult;
  const items2 = [isShareableQuestResult, quest.id];
  let callback = importAllResult.useCallback(() => {
    if (closure_2) {
      let obj = quest(isShareableQuestResult[14]);
      obj = { message: quest(isShareableQuestResult[15]).getQuestUrl(quest.id) };
      obj.showShareActionSheet(obj, "Video Quest Modal");
      const obj3 = quest(isShareableQuestResult[15]);
    }
  }, items2);
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    quest(isShareableQuestResult[16]).lockOrientation("PORTRAIT", true);
  }, []);
  const windowDimensions = importAllResult.useContext(quest(13995).QuestDockGestureContext).windowDimensions;
  let str = "md";
  if (windowDimensions.get().height >= 760) {
    let str2 = "lg";
    if (tmp13) {
      str2 = "md-lg";
    }
    str = str2;
  }
  const tmp14 = callback(importAllResult.useState(null), 2);
  let first = tmp14[0];
  callback = tmp14[1];
  const callback1 = importAllResult.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.height);
  }, []);
  if (null == first) {
    first = quest(14027).QUEST_PROGRESS_DIAMETER_BY_SIZE[str];
  }
  const sum = first + 2 * sharedValue(689).space.PX_16;
  obj1 = { bottom: true, style: tmp.wrapper };
  obj2 = { align: "center", direction: "horizontal", justify: "space-between", style: tmp.content };
  let obj3 = { variant: "heading-sm/semibold", color: "text-subtle", style: tmp.headerContentCopy };
  const intl = quest(1212).intl;
  obj4 = { questName: quest.config.messages.questName };
  obj3.children = intl.formatToPlainString(quest(1212).t.EAYZAr, obj4);
  const items3 = [callback2(quest(4126).Heading, obj3), ];
  obj5 = { onClose, style: tmp.closeButton };
  items3[1] = callback2(sharedValue(14045), obj5);
  obj2.children = items3;
  const items4 = [callback3(quest(4541).Stack, obj2), ];
  let obj6 = { style: tmp.scroll, contentContainerStyle: tmp.scrollContent, showsVerticalScrollIndicator: false, alwaysBounceVertical: false };
  obj7 = { style: items5 };
  items5 = [tmp.contentRewardsAnimatedWrapper, { minHeight: sum }, animatedStyle];
  tmp13 = windowDimensions.get().height < 800;
  const tmp21 = callback2;
  const tmp22 = closure_6;
  const obj8 = { align: "center", justify: "center", spacing: sharedValue(689).space.PX_24 };
  const items6 = [, ];
  ({ content: arr7[0], contentRewardsWrapper: arr7[1] } = tmp);
  obj8.style = items6;
  if (isLoading) {
    if (!isClaiming) {
      const items7 = [callback2(closure_5, {}), ];
      let tmp31 = !tmp6;
      if (!tmp6) {
        const obj9 = { grow: true, variant: "secondary", loading: isClaiming, disabled: isClaiming, onPress: claim };
        const intl3 = quest(1212).intl;
        obj9.text = intl3.string(quest(1212).t.cfY4PE);
        tmp31 = callback2(quest(4543).Button, obj9);
      }
      items7[1] = tmp31;
      obj8.children = items7;
      obj7.children = tmp20(quest(4541).Stack, obj8);
      const items8 = [tmp21(tmp23, obj7), ];
      const obj10 = {};
      const items9 = [, ];
      ({ content: arr11[0], contentEndCard: arr11[1] } = tmp);
      obj10.style = items9;
      const obj11 = { direction: "horizontal", justify: "space-between", style: tmp.contentEndCardHeader };
      const obj12 = { spacing: sharedValue(689).space.PX_4, style: tmp.contentEndCardHeaderCopy };
      const obj13 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: quest.config.messages.gameTitle };
      const items10 = [callback2(quest(4126).Heading, obj13), ];
      const obj14 = { variant: "text-sm/medium", color: "text-subtle", children: quest.config.messages.gamePublisher };
      items10[1] = callback2(quest(4126).Text, obj14);
      obj12.children = items10;
      const items11 = [callback3(quest(4541).Stack, obj12), ];
      const obj15 = { accessibilityRole: "button" };
      const intl4 = quest(1212).intl;
      obj15.accessibilityLabel = intl4.string(quest(1212).t.YsCuyF);
      obj15.onPress = onRestartVideo.onRestartVideo;
      const obj16 = { color: sharedValue(689).colors.INTERACTIVE_TEXT_DEFAULT };
      obj15.children = callback2(quest(9949).RetryIcon, obj16);
      items11[1] = callback2(quest(4660).PressableOpacity, obj15);
      obj11.children = items11;
      const items12 = [callback3(quest(4541).Stack, obj11), , ];
      let tmp41 = null != memo;
      if (tmp41) {
        const obj17 = { accessibilityRole: "button" };
        const intl5 = quest(1212).intl;
        const obj18 = { gameTitle: quest.config.messages.gameTitle };
        obj17.accessibilityLabel = intl5.formatToPlainString(quest(1212).t.r8BzFT, obj18);
        obj17.onPress = videoQuestClickCtaAndMaybeCloseModal;
        const obj19 = { style: tmp.image };
        const obj20 = { uri: memo.url };
        obj19.source = obj20;
        obj19.resizeMode = "cover";
        obj17.children = callback2(sharedValue(5085), obj19);
        tmp41 = callback2(quest(4660).PressableOpacity, obj17);
      }
      items12[1] = tmp41;
      const obj21 = { direction: "horizontal", spacing: sharedValue(689).space.PX_16, align: "center" };
      const obj22 = { grow: true, variant: "expressive", onPress: videoQuestClickCtaAndMaybeCloseModal, text: quest(9468).getExternalCtaLabel(quest) };
      const items13 = [callback2(quest(4543).Button, obj22), ];
      if (isShareableQuestResult) {
        const obj23 = { accessibilityRole: "button" };
        const intl6 = quest(1212).intl;
        obj23.accessibilityLabel = intl6.string(quest(1212).t.Ej3B3Y);
        obj23.onPress = callback;
        const obj24 = { color: sharedValue(689).colors.INTERACTIVE_TEXT_DEFAULT };
        obj23.children = callback2(quest(12227).ShareIcon, obj24);
        isShareableQuestResult = callback2(quest(4660).PressableOpacity, obj23);
      }
      items13[1] = isShareableQuestResult;
      obj21.children = items13;
      items12[2] = callback3(quest(4541).Stack, obj21);
      obj10.children = items12;
      items8[1] = callback3(closure_7, obj10);
      obj6.children = items8;
      items4[1] = tmp20(tmp22, obj6);
      obj1.children = items4;
      return tmp20(quest(5121).SafeAreaPaddingView, obj1);
    }
  }
  const obj25 = { style: tmp.contentRewards, onLayout: callback1 };
  const obj26 = { withQuestName: false, withRewardAvailableCopy: false, size: str, withRewardTileAnimation: true };
  const items14 = [callback2(sharedValue(14046), obj26), ];
  let obj27 = { color: "text-strong", style: tmp.contentRewardsCopy, variant: "heading-lg/semibold" };
  const intl2 = quest(1212).intl;
  const string = intl2.string;
  EMp8_M = quest(1212).t;
  if (null != claimedAt) {
    EMp8_M = EMp8_M["EMp8/M"];
    let stringResult = string(EMp8_M);
  } else {
    stringResult = string(EMp8_M.qyKLdg);
  }
  obj27.children = stringResult;
  obj27 = callback2(quest(4126).Heading, obj27);
  items14[1] = obj27;
  obj25.children = items14;
  callback3(closure_7, obj25);
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalContentCompleted.tsx");

export default memoResult;
