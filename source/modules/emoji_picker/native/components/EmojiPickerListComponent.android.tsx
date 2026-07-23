// Module ID: 9375
// Function ID: 73118
// Dependencies: [31, 4991, 4995, 9329, 1314, 33, 4130, 3991, 9376, 5189, 1553, 3771, 9258, 9367, 2]

// Module 9375
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { EmojiCategoryTypes } from "EmojiCategoryTypes";
import { IMAGE_SIZE } from "IMAGE_SIZE";
import { PADDING_VERTICAL } from "ExpressionPickerViewType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import animatedComponent from "__INTERNAL_VIEW_CONFIG";
import BottomSheetModal from "BottomSheetModal";
import isMetaQuest from "isMetaQuest";
import importDefaultResult from "module_3991";

let closure_10;
let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
let closure_11 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1 } });
let closure_12 = BottomSheetModal.createBottomSheetScrollableComponent(require("BottomSheetModal").SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent);
isMetaQuest = isMetaQuest.isMetaQuest();
let closure_14 = { code: "function EmojiPickerListComponentAndroidTsx1(){const{bottomSheetIndex}=this.__closure;return bottomSheetIndex.get();}" };
let closure_15 = { code: "function EmojiPickerListComponentAndroidTsx2(index){const{inPortalKeyboard,IS_META_QUEST,runOnJS,scrollingEnabled}=this.__closure;if(!inPortalKeyboard||index<0||IS_META_QUEST){return;}if(index===0){runOnJS(scrollingEnabled)(false);}else if(index===1){runOnJS(scrollingEnabled)(true);}}" };
const forwardRefResult = importAllResult.forwardRef((analyticsLocations) => {
  let paddingBottom;
  let paddingTop;
  analyticsLocations = analyticsLocations.analyticsLocations;
  const bottomSheetIndex = analyticsLocations.bottomSheetIndex;
  const categoryIndexActive = analyticsLocations.categoryIndexActive;
  const data = analyticsLocations.data;
  const animateEmoji = analyticsLocations.animateEmoji;
  const guildId = analyticsLocations.guildId;
  const inPortalKeyboard = analyticsLocations.inPortalKeyboard;
  const onPressEmoji = analyticsLocations.onPressEmoji;
  const onLongPressEmoji = analyticsLocations.onLongPressEmoji;
  const onShowNitroUpsell = analyticsLocations.onShowNitroUpsell;
  const useTier0UpsellContent = analyticsLocations.useTier0UpsellContent;
  ({ paddingTop, paddingBottom } = analyticsLocations);
  const ref = data.useRef(null);
  const items = [ref, data];
  const effect = data.useEffect(() => {
    let hasGuildData = null != ref.current;
    if (hasGuildData) {
      hasGuildData = data.hasGuildData;
    }
    if (hasGuildData) {
      const Commands = analyticsLocations(categoryIndexActive[8]).Commands;
      Commands.refreshEmojis(ref.current);
    }
  }, items);
  const callback = data.useCallback((arg0) => {
    if (null != ref.current) {
      const Commands = analyticsLocations(categoryIndexActive[8]).Commands;
      Commands.scrollingEnabled(tmp.current, arg0);
    }
  }, []);
  let obj = analyticsLocations(categoryIndexActive[7]);
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
        tmp = f73124;
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
  obj = { inPortalKeyboard, IS_META_QUEST: callback1, runOnJS: analyticsLocations(categoryIndexActive[7]).runOnJS, scrollingEnabled: callback };
  D.__closure = obj;
  D.__workletHash = 2460528828147;
  D.__initData = closure_15;
  const animatedReaction = obj.useAnimatedReaction(H, D);
  const items1 = [guildId];
  callback1 = data.useCallback((emojiId) => {
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
  const items2 = [onPressEmoji, callback1];
  const items3 = [onLongPressEmoji, callback1];
  const callback2 = data.useCallback((nativeEvent) => {
    const tmp = callback1(nativeEvent.nativeEvent);
    if (null != tmp) {
      onPressEmoji(tmp);
    }
  }, items2);
  const items4 = [categoryIndexActive];
  const callback3 = data.useCallback((nativeEvent) => {
    const tmp = callback1(nativeEvent.nativeEvent);
    if (null != tmp) {
      onLongPressEmoji(tmp);
    }
  }, items3);
  const items5 = [onShowNitroUpsell];
  const callback4 = data.useCallback((nativeEvent) => {
    const result = categoryIndexActive.set(nativeEvent.nativeEvent.index);
  }, items4);
  const callback5 = data.useCallback((nativeEvent) => {
    onShowNitroUpsell(nativeEvent.nativeEvent.showNitroUpsell);
  }, items5);
  const imperativeHandle = data.useImperativeHandle(arg1, () => ({
    scrollToHeaderIndex(animated) {
      let flag = animated.animated;
      if (flag === undefined) {
        flag = true;
      }
      if (null != outer1_11.current) {
        const Commands = analyticsLocations(categoryIndexActive[8]).Commands;
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
    config: data.useMemo(() => {
      const obj = { animateEmoji, scrollFastOptimizationEnabled: true, scrollFastVelocity: 8000, disableAnimationsOnScroll: true };
      return obj;
    }, items6),
    emojiData: data,
    emojiMargin: onPressEmoji,
    emojiSize: inPortalKeyboard,
    onPressEmoji: callback2,
    onLongPressEmoji: callback3,
    onStickyHeaderRender: callback4,
    onShowNitroUpsell: callback5,
    paddingTop,
    paddingBottom,
    useTier0UpsellContent,
    ref,
    style: ref().container
  };
  const items7 = [guildId, analyticsLocations, useTier0UpsellContent, data.hasSearchUpsell];
  let tmp = ref();
  const obj1 = {};
  const items8 = [
    onLongPressEmoji(callback, obj),
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
let result = require("EmojiCategoryTypes").fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListComponent.android.tsx");

export default forwardRefResult;
