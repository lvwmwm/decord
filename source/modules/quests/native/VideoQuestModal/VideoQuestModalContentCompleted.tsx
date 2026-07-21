// Module ID: 13930
// Function ID: 105858
// Dependencies: []

// Module 13930
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ ActivityIndicator: closure_5, ScrollView: closure_6, View: closure_7 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[3]));
let closure_10 = {};
let obj1 = arg1(dependencyMap[4]);
let obj = { wrapper: {}, headerContentCopy: {}, closeButton: { opacity: 0.5 }, scroll: {}, scrollContent: { flexGrow: 1 } };
obj = { padding: importDefault(dependencyMap[5]).space.PX_16 };
obj.content = obj;
obj.contentRewardsAnimatedWrapper = {};
obj.contentRewardsWrapper = {};
obj.contentRewards = { alignItems: "center" };
obj.contentRewardsCopy = { textAlign: "center" };
obj1 = { marginBottom: importDefault(dependencyMap[5]).space.PX_16 };
obj.contentEndCardHeader = obj1;
obj.contentEndCardHeaderCopy = {};
const tmp3 = arg1(dependencyMap[3]);
obj.contentEndCard = { borderTopWidth: 1, borderTopColor: importDefault(dependencyMap[5]).colors.BORDER_STRONG, paddingTop: importDefault(dependencyMap[5]).space.PX_24, flexShrink: 0 };
const obj2 = { borderTopWidth: 1, borderTopColor: importDefault(dependencyMap[5]).colors.BORDER_STRONG, paddingTop: importDefault(dependencyMap[5]).space.PX_24, flexShrink: 0 };
obj.image = { height: 210, marginBottom: importDefault(dependencyMap[5]).space.PX_24, borderRadius: importDefault(dependencyMap[5]).radii.xl };
const obj3 = { height: 210, marginBottom: importDefault(dependencyMap[5]).space.PX_24, borderRadius: importDefault(dependencyMap[5]).radii.xl };
obj.ctaPrimary = { flexGrow: 0, borderRadius: importDefault(dependencyMap[5]).radii.round };
let closure_11 = obj1.createStyles(obj);
let closure_12 = { code: "function VideoQuestModalContentCompletedTsx1(){const{withDelay,ANIMATION_DELAY,withSpring,isComponentMounted,ANIMATED_CONTENT_SPRING_CONFIG,interpolate,ANIMATED_CONTENT_OFFSET_Y}=this.__closure;return{opacity:withDelay(ANIMATION_DELAY,withSpring(isComponentMounted.get(),ANIMATED_CONTENT_SPRING_CONFIG)),transform:[{translateY:withDelay(ANIMATION_DELAY,withSpring(interpolate(isComponentMounted.get(),[0,1],[ANIMATED_CONTENT_OFFSET_Y,0]),ANIMATED_CONTENT_SPRING_CONFIG))}]};}" };
const obj4 = { flexGrow: 0, borderRadius: importDefault(dependencyMap[5]).radii.round };
const memoResult = importAllResult.memo(function VideoQuestModalContentCompleted(onRestartVideo) {
  let claim;
  let isLoading;
  let onClose;
  let sourceQuestContent;
  ({ onClose, sourceQuestContent } = onRestartVideo);
  const tmp = callback4();
  let obj = arg1(dependencyMap[6]);
  const quest = obj.useVideoQuestModalContext().quest;
  const arg1 = quest;
  const items = [quest];
  const memo = importAllResult.useMemo(() => quest(isShareableQuestResult[7]).getQuestAsset(quest, quest(isShareableQuestResult[7]).QuestAssetType.VIDEO_PLAYER_THUMBNAIL, undefined, true), items);
  let obj1 = arg1(dependencyMap[8]);
  const videoQuestClickCtaAndMaybeCloseModal = obj1.useVideoQuestClickCtaAndMaybeCloseModal({ quest, onClose, sourceQuestContent });
  let obj2 = arg1(dependencyMap[9]);
  obj = { quest, onSuccess: importDefault(dependencyMap[10]).close, sourceQuestContent };
  const questRewardClaimHandler = obj2.useQuestRewardClaimHandler(obj);
  const isClaiming = questRewardClaimHandler.isClaiming;
  const userStatus = quest.userStatus;
  let claimedAt;
  ({ isLoading, claim } = questRewardClaimHandler);
  if (null != userStatus) {
    claimedAt = userStatus.claimedAt;
  }
  let obj4 = arg1(dependencyMap[11]);
  const sharedValue = obj4.useSharedValue(0);
  const importDefault = sharedValue;
  let obj5 = arg1(dependencyMap[11]);
  const fn = function _() {
    let obj = {};
    const obj2 = quest(isShareableQuestResult[11]);
    obj.opacity = obj2.withDelay(125, quest(isShareableQuestResult[12]).withSpring(sharedValue.get(), closure_10));
    obj = {};
    const obj3 = quest(isShareableQuestResult[12]);
    const obj5 = quest(isShareableQuestResult[11]);
    const obj6 = quest(isShareableQuestResult[12]);
    obj.translateY = obj5.withDelay(125, obj6.withSpring(quest(isShareableQuestResult[11]).interpolate(sharedValue.get(), ["Text", "lc"], ["<string:1186004994>", "<string:3663134722>"]), closure_10));
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = { withDelay: arg1(dependencyMap[11]).withDelay, ANIMATION_DELAY: 125, withSpring: arg1(dependencyMap[12]).withSpring, isComponentMounted: sharedValue, ANIMATED_CONTENT_SPRING_CONFIG: closure_10, interpolate: arg1(dependencyMap[11]).interpolate, ANIMATED_CONTENT_OFFSET_Y: 75 };
  fn.__closure = obj;
  fn.__workletHash = 2704439293952;
  fn.__initData = closure_12;
  const items1 = [sharedValue];
  const animatedStyle = obj5.useAnimatedStyle(fn);
  const effect = importAllResult.useEffect(() => {
    const result = sharedValue.set(1);
  }, items1);
  let obj7 = arg1(dependencyMap[13]);
  let isShareableQuestResult = obj7.isShareableQuest(quest.config);
  const dependencyMap = isShareableQuestResult;
  const items2 = [isShareableQuestResult, quest.id];
  let callback = importAllResult.useCallback(() => {
    if (isShareableQuestResult) {
      let obj = quest(isShareableQuestResult[14]);
      obj = { message: quest(isShareableQuestResult[15]).getQuestUrl(quest.id) };
      obj.showShareActionSheet(obj, "Video Quest Modal");
      const obj3 = quest(isShareableQuestResult[15]);
    }
  }, items2);
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    quest(isShareableQuestResult[16]).lockOrientation("PORTRAIT", true);
  }, []);
  const windowDimensions = importAllResult.useContext(arg1(dependencyMap[17]).QuestDockGestureContext).windowDimensions;
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
    first = arg1(dependencyMap[18]).QUEST_PROGRESS_DIAMETER_BY_SIZE[str];
  }
  const sum = first + 2 * importDefault(dependencyMap[5]).space.PX_16;
  obj1 = { bottom: true, style: tmp.wrapper };
  obj2 = { "Bool(false)": "gr", "Bool(false)": null, "Bool(false)": "Outside", style: tmp.content };
  const obj3 = { style: tmp.headerContentCopy };
  const intl = arg1(dependencyMap[22]).intl;
  obj4 = { questName: quest.config.messages.questName };
  obj3.children = intl.formatToPlainString(arg1(dependencyMap[22]).t.EAYZAr, obj4);
  const items3 = [callback2(arg1(dependencyMap[21]).Heading, obj3), ];
  obj5 = { onClose, style: tmp.closeButton };
  items3[1] = callback2(importDefault(dependencyMap[23]), obj5);
  obj2.children = items3;
  const items4 = [callback3(arg1(dependencyMap[20]).Stack, obj2), ];
  const obj6 = { style: tmp.scroll, contentContainerStyle: tmp.scrollContent, showsVerticalScrollIndicator: false, alwaysBounceVertical: false };
  obj7 = { style: items5 };
  const items5 = [tmp.contentRewardsAnimatedWrapper, { minHeight: sum }, animatedStyle];
  const tmp13 = windowDimensions.get().height < 800;
  const tmp21 = callback2;
  const tmp22 = closure_6;
  const obj8 = { addProgressAnimation: null, preventedRoutes: null, spacing: importDefault(dependencyMap[5]).space.PX_24 };
  const items6 = [, ];
  ({ content: arr7[0], contentRewardsWrapper: arr7[1] } = tmp);
  obj8.style = items6;
  if (isLoading) {
    if (!isClaiming) {
      const items7 = [callback2(closure_5, {}), ];
      let tmp31 = !tmp6;
      if (!tmp6) {
        const obj9 = { loading: isClaiming, onPress: claim, style: tmp.ctaPrimary };
        const intl3 = arg1(dependencyMap[22]).intl;
        obj9.text = intl3.string(arg1(dependencyMap[22]).t.cfY4PE);
        obj9.color = arg1(dependencyMap[26]).ButtonColors.GREY;
        tmp31 = callback2(arg1(dependencyMap[26]).ShinyButton, obj9);
      }
      items7[1] = tmp31;
      obj8.children = items7;
      obj7.children = tmp20(arg1(dependencyMap[20]).Stack, obj8);
      const items8 = [tmp21(tmp23, obj7), ];
      const obj10 = {};
      const items9 = [, ];
      ({ content: arr11[0], contentEndCard: arr11[1] } = tmp);
      obj10.style = items9;
      const obj11 = { "Null": true, "Null": "/assets/design/components/Icon/native/redesign/generated/images", style: tmp.contentEndCardHeader };
      const obj12 = { spacing: importDefault(dependencyMap[5]).space.PX_4, style: tmp.contentEndCardHeaderCopy };
      const obj13 = { children: quest.config.messages.gameTitle };
      const items10 = [callback2(arg1(dependencyMap[21]).Heading, obj13), ];
      const obj14 = { children: quest.config.messages.gamePublisher };
      items10[1] = callback2(arg1(dependencyMap[21]).Text, obj14);
      obj12.children = items10;
      const items11 = [callback3(arg1(dependencyMap[20]).Stack, obj12), ];
      const obj15 = { accessibilityRole: "button" };
      const intl4 = arg1(dependencyMap[22]).intl;
      obj15.accessibilityLabel = intl4.string(arg1(dependencyMap[22]).t.YsCuyF);
      obj15.onPress = onRestartVideo.onRestartVideo;
      const obj16 = { color: importDefault(dependencyMap[5]).colors.INTERACTIVE_TEXT_DEFAULT };
      obj15.children = callback2(arg1(dependencyMap[28]).RetryIcon, obj16);
      items11[1] = callback2(arg1(dependencyMap[27]).PressableOpacity, obj15);
      obj11.children = items11;
      const items12 = [callback3(arg1(dependencyMap[20]).Stack, obj11), , ];
      let tmp41 = null != memo;
      if (tmp41) {
        const obj17 = { accessibilityRole: "button" };
        const intl5 = arg1(dependencyMap[22]).intl;
        const obj18 = { gameTitle: quest.config.messages.gameTitle };
        obj17.accessibilityLabel = intl5.formatToPlainString(arg1(dependencyMap[22]).t.r8BzFT, obj18);
        obj17.onPress = videoQuestClickCtaAndMaybeCloseModal;
        const obj19 = { style: tmp.image };
        const obj20 = { uri: memo.url };
        obj19.source = obj20;
        obj19.resizeMode = "cover";
        obj17.children = callback2(importDefault(dependencyMap[29]), obj19);
        tmp41 = callback2(arg1(dependencyMap[27]).PressableOpacity, obj17);
      }
      items12[1] = tmp41;
      const obj21 = { "Bool(true)": 0, "Bool(true)": 1, "Bool(true)": "center", spacing: importDefault(dependencyMap[5]).space.PX_16 };
      const obj22 = { grow: true, onPress: videoQuestClickCtaAndMaybeCloseModal, text: arg1(dependencyMap[15]).getExternalCtaLabel(quest) };
      const items13 = [callback2(arg1(dependencyMap[30]).Button, obj22), ];
      if (isShareableQuestResult) {
        const obj23 = { accessibilityRole: "button" };
        const intl6 = arg1(dependencyMap[22]).intl;
        obj23.accessibilityLabel = intl6.string(arg1(dependencyMap[22]).t.Ej3B3Y);
        obj23.onPress = callback;
        const obj24 = { color: importDefault(dependencyMap[5]).colors.INTERACTIVE_TEXT_DEFAULT };
        obj23.children = callback2(arg1(dependencyMap[31]).ShareIcon, obj24);
        isShareableQuestResult = callback2(arg1(dependencyMap[27]).PressableOpacity, obj23);
      }
      items13[1] = isShareableQuestResult;
      obj21.children = items13;
      items12[2] = callback3(arg1(dependencyMap[20]).Stack, obj21);
      obj10.children = items12;
      items8[1] = callback3(closure_7, obj10);
      obj6.children = items8;
      items4[1] = tmp20(tmp22, obj6);
      obj1.children = items4;
      return tmp20(arg1(dependencyMap[19]).SafeAreaPaddingView, obj1);
    }
  }
  const obj25 = { style: tmp.contentRewards, onLayout: callback1 };
  const obj26 = { ip: "isArray", type: "mode", disabled: "registerAsset", type: "Array", size: str };
  const items14 = [callback2(importDefault(dependencyMap[25]), obj26), ];
  let obj27 = { -9223372036854775808: false, -9223372036854775808: false, 0: false, style: tmp.contentRewardsCopy };
  const intl2 = arg1(dependencyMap[22]).intl;
  const string = intl2.string;
  EMp8/M = arg1(dependencyMap[22]).t;
  if (null != claimedAt) {
    EMp8/M = EMp8_M.EMp8/M;
    let stringResult = string(EMp8_M);
  } else {
    stringResult = string(EMp8_M.qyKLdg);
  }
  obj27.children = stringResult;
  obj27 = callback2(arg1(dependencyMap[21]).Heading, obj27);
  items14[1] = obj27;
  obj25.children = items14;
  callback3(closure_7, obj25);
});
const result = arg1(dependencyMap[32]).fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalContentCompleted.tsx");

export default memoResult;
