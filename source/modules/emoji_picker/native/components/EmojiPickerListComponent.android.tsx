// Module ID: 9363
// Function ID: 73039
// Dependencies: []

// Module 9363
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const EmojiCategoryTypes = arg1(dependencyMap[2]).EmojiCategoryTypes;
const IMAGE_SIZE = arg1(dependencyMap[3]).IMAGE_SIZE;
const PADDING_VERTICAL = arg1(dependencyMap[4]).PADDING_VERTICAL;
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
let closure_11 = arg1(dependencyMap[6]).createStyles({ container: { flex: 1 } });
const obj2 = arg1(dependencyMap[6]);
const animatedComponent = importDefault(dependencyMap[7]).createAnimatedComponent(importDefault(dependencyMap[8]));
const importDefaultResult = importDefault(dependencyMap[7]);
let closure_12 = arg1(dependencyMap[9]).createBottomSheetScrollableComponent(arg1(dependencyMap[9]).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent);
const obj4 = arg1(dependencyMap[9]);
let closure_13 = arg1(dependencyMap[10]).isMetaQuest();
let closure_14 = { code: "function EmojiPickerListComponentAndroidTsx1(){const{bottomSheetIndex}=this.__closure;return bottomSheetIndex.get();}" };
let closure_15 = { code: "function EmojiPickerListComponentAndroidTsx2(index){const{inPortalKeyboard,IS_META_QUEST,runOnJS,scrollingEnabled}=this.__closure;if(!inPortalKeyboard||index<0||IS_META_QUEST){return;}if(index===0){runOnJS(scrollingEnabled)(false);}else if(index===1){runOnJS(scrollingEnabled)(true);}}" };
const obj5 = arg1(dependencyMap[10]);
const forwardRefResult = importAllResult.forwardRef((analyticsLocations) => {
  let paddingBottom;
  let paddingTop;
  analyticsLocations = analyticsLocations.analyticsLocations;
  const arg1 = analyticsLocations;
  const bottomSheetIndex = analyticsLocations.bottomSheetIndex;
  const importDefault = bottomSheetIndex;
  const categoryIndexActive = analyticsLocations.categoryIndexActive;
  const dependencyMap = categoryIndexActive;
  const data = analyticsLocations.data;
  const animateEmoji = analyticsLocations.animateEmoji;
  let closure_4 = animateEmoji;
  const guildId = analyticsLocations.guildId;
  const EmojiCategoryTypes = guildId;
  const inPortalKeyboard = analyticsLocations.inPortalKeyboard;
  const IMAGE_SIZE = inPortalKeyboard;
  const onPressEmoji = analyticsLocations.onPressEmoji;
  const PADDING_VERTICAL = onPressEmoji;
  const onLongPressEmoji = analyticsLocations.onLongPressEmoji;
  const onShowNitroUpsell = analyticsLocations.onShowNitroUpsell;
  const useTier0UpsellContent = analyticsLocations.useTier0UpsellContent;
  ({ paddingTop, paddingBottom } = analyticsLocations);
  const ref = data.useRef(null);
  let callback = ref;
  const items = [ref, data];
  const effect = importAllResult.useEffect(() => {
    let hasGuildData = null != ref.current;
    if (hasGuildData) {
      hasGuildData = data.hasGuildData;
    }
    if (hasGuildData) {
      const Commands = analyticsLocations(categoryIndexActive[8]).Commands;
      Commands.refreshEmojis(ref.current);
    }
  }, items);
  callback = importAllResult.useCallback((arg0) => {
    if (null != ref.current) {
      const Commands = analyticsLocations(categoryIndexActive[8]).Commands;
      Commands.scrollingEnabled(tmp.current, arg0);
    }
  }, []);
  let closure_12 = callback;
  let obj = arg1(dependencyMap[7]);
  class H {
    constructor() {
      return bottomSheetIndex.get();
    }
  }
  H.__closure = { bottomSheetIndex };
  H.__workletHash = 10656486632396;
  H.__initData = closure_14;
  class D {
    constructor(arg0) {
      tmp = !inPortalKeyboard;
      if (!tmp) {
        num = 0;
        tmp = analyticsLocations < 0;
      }
      if (!tmp) {
        tmp = f73045;
      }
      if (!tmp) {
        num2 = 0;
        if (0 === analyticsLocations) {
          tmp6 = analyticsLocations;
          tmp7 = categoryIndexActive;
          num5 = 7;
          obj2 = analyticsLocations(categoryIndexActive[7]);
          tmp8 = closure_12;
          flag2 = false;
          tmp9 = obj2.runOnJS(closure_12)(false);
        } else {
          num3 = 1;
          if (1 === analyticsLocations) {
            tmp2 = analyticsLocations;
            tmp3 = categoryIndexActive;
            num4 = 7;
            obj = analyticsLocations(categoryIndexActive[7]);
            tmp4 = closure_12;
            flag = true;
            tmp5 = obj.runOnJS(closure_12)(true);
          }
        }
      }
      return;
    }
  }
  obj = { inPortalKeyboard, IS_META_QUEST: closure_13, runOnJS: arg1(dependencyMap[7]).runOnJS, scrollingEnabled: callback };
  D.__closure = obj;
  D.__workletHash = 2460528828147;
  D.__initData = closure_15;
  const animatedReaction = obj.useAnimatedReaction(H, D);
  const items1 = [guildId];
  const callback1 = importAllResult.useCallback((emojiId) => {
    emojiId = emojiId.emojiId;
    if (null != emojiId) {
      const disambiguatedEmojiContext = animateEmoji.getDisambiguatedEmojiContext(guildId);
      let byId = disambiguatedEmojiContext.getById(emojiId);
    } else {
      byId = bottomSheetIndex(categoryIndexActive[11]).getByName(tmp);
      const obj = bottomSheetIndex(categoryIndexActive[11]);
    }
    return byId;
  }, items1);
  closure_13 = callback1;
  const items2 = [onPressEmoji, callback1];
  const items3 = [onLongPressEmoji, callback1];
  const callback2 = importAllResult.useCallback((nativeEvent) => {
    const tmp = callback1(nativeEvent.nativeEvent);
    if (null != tmp) {
      onPressEmoji(tmp);
    }
  }, items2);
  const items4 = [categoryIndexActive];
  const callback3 = importAllResult.useCallback((nativeEvent) => {
    const tmp = callback1(nativeEvent.nativeEvent);
    if (null != tmp) {
      onLongPressEmoji(tmp);
    }
  }, items3);
  const items5 = [onShowNitroUpsell];
  const callback4 = importAllResult.useCallback((nativeEvent) => {
    const result = categoryIndexActive.set(nativeEvent.nativeEvent.index);
  }, items4);
  const callback5 = importAllResult.useCallback((nativeEvent) => {
    onShowNitroUpsell(nativeEvent.nativeEvent.showNitroUpsell);
  }, items5);
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ({
    scrollToHeaderIndex(animated) {
      let flag = animated.animated;
      if (flag === undefined) {
        flag = true;
      }
      if (null != ref.current) {
        const Commands = callback(closure_2[8]).Commands;
        Commands.scrollToHeaderIndex(tmp.current, animated.index, flag);
      }
    },
    forceUpdate() {

    },
    onStickyHeaderRendered() {

    }
  }));
  const items6 = [animateEmoji];
  obj = {
    config: importAllResult.useMemo(() => {
      const obj = { "Null": false, "Null": false, "Null": false, "Null": false, animateEmoji };
      return obj;
    }, items6),
    emojiData: data,
    emojiMargin: PADDING_VERTICAL,
    emojiSize: IMAGE_SIZE,
    onPressEmoji: callback2,
    onLongPressEmoji: callback3,
    onStickyHeaderRender: callback4,
    onShowNitroUpsell: callback5,
    paddingTop,
    paddingBottom,
    useTier0UpsellContent,
    ref,
    style: callback().container
  };
  const items7 = [guildId, analyticsLocations, useTier0UpsellContent, data.hasSearchUpsell];
  const tmp = callback();
  const obj1 = {};
  const items8 = [
    onLongPressEmoji(closure_12, obj),
    data.useMemo(() => {
      let tmp = null;
      if (data.hasSearchUpsell) {
        let obj = { portalId: guildId.PREMIUM_UPSELL };
        obj = { guildId, analyticsLocations, useTier0UpsellContent };
        obj.children = onLongPressEmoji(analyticsLocations(categoryIndexActive[13]).PremiumSearchUpsell, obj);
        tmp = onLongPressEmoji(bottomSheetIndex(categoryIndexActive[12]), obj);
        const tmp5 = bottomSheetIndex(categoryIndexActive[12]);
      }
      return tmp;
    }, items7)
  ];
  obj1.children = items8;
  return useTier0UpsellContent(onShowNitroUpsell, obj1);
});
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListComponent.android.tsx");

export default forwardRefResult;
