// Module ID: 11289
// Function ID: 11290
// Name: EmojiPickerListComponent
// Dependencies: [19, 6969, 6972, 9546, 1228, 21, 5306, 1655, 11290, 5570, 1627, 1708, 5252, 7845, 11278, 2]
// Exports: default

// Module 11289 (EmojiPickerListComponent)
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1228 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 5252 */;
import EmojiPickerConstants from "EmojiPickerConstants" /* 6972 */;
import PortalToNativeViewDefault from "PortalToNativeView" /* 7845 */;
import EmojiPickerListConstants from "EmojiPickerListConstants" /* 9546 */;
import EmojiPickerPremiumSearchUpsell from "EmojiPickerPremiumSearchUpsell" /* 11278 */;
import EmojiPickerNativeComponent2 from "EmojiPickerNativeComponent" /* 11290 */;
import react from "react" /* 19 */;
import EmojiStore from "EmojiStore" /* 6969 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import module_1655 from "module_1655" /* 1655 */;
import BottomSheetModal from "BottomSheetModal" /* 5570 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1627 */;
import size from "module_2" /* 2 */;

const EmojiPickerNativeComponentDefault = EmojiPickerNativeComponent2;
let emojiId;

let c10;
let c9;
let metroImportAll;
const EmojiCategoryTypes = EmojiPickerConstants.EmojiCategoryTypes;
const IMAGE_SIZE = EmojiPickerListConstants.IMAGE_SIZE;
const PADDING_VERTICAL = ExpressionPickerConstants.PADDING_VERTICAL;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles({ container: { flex: 1 } });
const EmojiPickerNativeComponent = module_1655.createAnimatedComponent(EmojiPickerNativeComponentDefault);
let closure_12 = BottomSheetModal.createBottomSheetScrollableComponent(BottomSheetModal.SCROLLABLE_TYPE.SCROLLVIEW, EmojiPickerNativeComponent);
let closure_13 = MetaQuestUtils.isMetaQuest();
let closure_14 = { code: "(function EmojiPickerListComponentAndroidTsx1(){let[bottomSheetIndex]=this.__closure;return bottomSheetIndex.get();})" };
let closure_15 = { code: "(function EmojiPickerListComponentAndroidTsx2(index){let[inPortalKeyboard,IS_META_QUEST,scheduleOnRN,scrollingEnabled]=this.__closure;if(!inPortalKeyboard||index<0||IS_META_QUEST){return;}if(index===0){scheduleOnRN(scrollingEnabled,false);}else if(index===1){scheduleOnRN(scrollingEnabled,true);}})" };
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListComponent.android.tsx");

export default function EmojiPickerListComponent(analyticsLocations) {
  let bottomSheetIndex;
  let inPortalKeyboard;
  let items12;
  let paddingBottom;
  let paddingTop;
  let ref;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp8;
  let tmp9;
  analyticsLocations = analyticsLocations.analyticsLocations;
  const categoryIndexActive = analyticsLocations.categoryIndexActive;
  const data = analyticsLocations.data;
  const animateEmoji = analyticsLocations.animateEmoji;
  const guildId = analyticsLocations.guildId;
  const onPressEmoji = analyticsLocations.onPressEmoji;
  const onLongPressEmoji = analyticsLocations.onLongPressEmoji;
  const onShowNitroUpsell = analyticsLocations.onShowNitroUpsell;
  const useTier0UpsellContent = analyticsLocations.useTier0UpsellContent;
  let callback1;
  ({ bottomSheetIndex, inPortalKeyboard, paddingTop, paddingBottom, ref } = analyticsLocations);
  let obj = animateEmoji;
  let tmp = closure_11();
  const ref1 = animateEmoji.useRef(null);
  const items = [ref1, data];
  const effect = animateEmoji.useEffect(() => {
    let hasGuildData = null != ref1.current;
    const tmp = ref1;
    if (hasGuildData) {
      hasGuildData = data.hasGuildData;
    }
    if (hasGuildData) {
      const Commands = EmojiPickerNativeComponent2.Commands;
      Commands.refreshEmojis(tmp.current);
    }
  }, items);
  const callback = animateEmoji.useCallback((arg0) => {
    if (null != ref1.current) {
      const Commands = EmojiPickerNativeComponent2.Commands;
      Commands.scrollingEnabled(tmp.current, arg0);
    }
  }, []);
  let tmp5 = analyticsLocations;
  const items1 = [closure_14, bottomSheetIndex];
  let c0;
  [tmp8, tmp9] = items1;
  const tmp6 = data;
  const tmp7 = analyticsLocations(data[7]);
  class EmojiPickerListComponentAndroidTsx1 {
    constructor() {
      return _undefined.get();
    }
  }
  const items2 = [tmp9];
  EmojiPickerListComponentAndroidTsx1.__closure = items2;
  EmojiPickerListComponentAndroidTsx1.__workletHash = 7865271848533;
  EmojiPickerListComponentAndroidTsx1.__initData = tmp8;
  const items3 = [closure_15, inPortalKeyboard, closure_13, , ];
  const useAnimatedReaction = tmp7.useAnimatedReaction;
  items3[3] = tmp5(tmp6[11]).scheduleOnRN;
  items3[4] = callback;
  c0 = undefined;
  let c1;
  let c2;
  let c3;
  [tmp10, tmp11, tmp12, tmp13, tmp14] = items3;
  class EmojiPickerListComponentAndroidTsx2 {
    constructor(arg0) {
      let tmp = !c0;
      if (c0) {
        tmp = arg0 < 0;
      }
      if (!tmp) {
        tmp = c1;
      }
      if (!tmp) {
        if (0 === arg0) {
          _undefined(c3, false);
        } else if (1 === arg0) {
          _undefined(c3, true);
        }
      }
    }
  }
  const items4 = [tmp11, tmp12, tmp13, tmp14];
  EmojiPickerListComponentAndroidTsx2.__closure = items4;
  EmojiPickerListComponentAndroidTsx2.__workletHash = 15639036497539;
  EmojiPickerListComponentAndroidTsx2.__initData = tmp10;
  const animatedReaction = useAnimatedReaction(EmojiPickerListComponentAndroidTsx1, EmojiPickerListComponentAndroidTsx2);
  const items5 = [guildId];
  callback1 = obj.useCallback((emojiId) => {
    let byId;
    emojiId = emojiId.emojiId;
    if (null != emojiId) {
      const disambiguatedEmojiContext = EmojiStore.getDisambiguatedEmojiContext(guildId);
      byId = disambiguatedEmojiContext.getById(emojiId);
    } else {
      const obj = UnicodeEmojisDefault;
      byId = obj.getByName(tmp);
    }
    return byId;
  }, items5);
  const items6 = [onPressEmoji, callback1];
  const items7 = [onLongPressEmoji, callback1];
  const callback2 = obj.useCallback((nativeEvent) => {
    const tmp = callback1(nativeEvent.nativeEvent);
    if (null != tmp) {
      onPressEmoji(tmp);
    }
  }, items6);
  const items8 = [categoryIndexActive];
  const callback3 = obj.useCallback((nativeEvent) => {
    const tmp = callback1(nativeEvent.nativeEvent);
    if (null != tmp) {
      onLongPressEmoji(tmp);
    }
  }, items7);
  const items9 = [onShowNitroUpsell];
  const callback4 = obj.useCallback((nativeEvent) => {
    const result = categoryIndexActive.set(nativeEvent.nativeEvent.index);
  }, items8);
  const callback5 = obj.useCallback((nativeEvent) => {
    onShowNitroUpsell(nativeEvent.nativeEvent.showNitroUpsell);
  }, items9);
  const imperativeHandle = obj.useImperativeHandle(ref, () => {
    let ref;
    return {
      scrollToHeaderIndex(animated) {
        let flag = animated.animated;
        const index = animated.index;
        if (flag === undefined) {
          flag = true;
        }
        if (null != ref.current) {
          const Commands = analyticsLocations(data[8]).Commands;
          Commands.scrollToHeaderIndex(tmp.current, index, flag);
        }
      },
      forceUpdate() {

      },
      onStickyHeaderRendered() {

      }
    };
  });
  const items10 = [animateEmoji];
  let obj2 = { config: obj.useMemo(() => ({ animateEmoji, scrollFastOptimizationEnabled: true, scrollFastVelocity: 8000, disableAnimationsOnScroll: true }), items10), emojiData: data, emojiMargin: onShowNitroUpsell, emojiSize: onLongPressEmoji, onPressEmoji: callback2, onLongPressEmoji: callback3, onStickyHeaderRender: callback4, onShowNitroUpsell: callback5, paddingTop, paddingBottom, useTier0UpsellContent, ref: ref1, style: tmp.container };
  const items11 = [guildId, analyticsLocations, useTier0UpsellContent, data.hasSearchUpsell];
  const obj3 = { children: items12 };
  items12 = [useTier0UpsellContent(closure_12, obj2), ];
  useTier0UpsellContent(closure_12, obj2);
  items12[1] = obj.useMemo(() => {
    let obj2;
    let tmp = null;
    if (data.hasSearchUpsell) {
      const obj = { portalId: EmojiCategoryTypes.PREMIUM_UPSELL, children: metroImportAll(EmojiPickerPremiumSearchUpsell.PremiumSearchUpsell, obj2) };
      obj2 = { guildId, analyticsLocations, useTier0UpsellContent };
      const tmp5 = PortalToNativeViewDefault;
      tmp = metroImportAll(tmp5, obj);
    }
    return tmp;
  }, items11);
  return callback1(ref1, obj3);
};
