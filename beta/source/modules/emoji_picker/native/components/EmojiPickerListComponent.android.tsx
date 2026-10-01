// Module ID: 9784
// Function ID: 9785
// Name: EmojiPickerListComponent
// Dependencies: [19, 5771, 5775, 9753, 1218, 21, 4836, 4566, 9785, 6045, 1610, 4483, 6491, 9773, 2]

// Module 9784 (EmojiPickerListComponent)
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1218 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4483 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4566 */;
import EmojiPickerConstants from "EmojiPickerConstants" /* 5775 */;
import PortalToNativeViewDefault from "PortalToNativeView" /* 6491 */;
import EmojiPickerListConstants from "EmojiPickerListConstants" /* 9753 */;
import EmojiPickerPremiumSearchUpsell from "EmojiPickerPremiumSearchUpsell" /* 9773 */;
import EmojiPickerNativeComponent2 from "EmojiPickerNativeComponent" /* 9785 */;
import react from "react" /* 19 */;
import EmojiStore from "EmojiStore" /* 5771 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import BottomSheetModal from "BottomSheetModal" /* 6045 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1610 */;
import size from "module_2" /* 2 */;

const EmojiPickerNativeComponentDefault = EmojiPickerNativeComponent2;
const ReanimatedRexport = ReanimatedRexport2;
let analyticsLocations, emojiId;

let c10;
let c9;
let metroImportAll;
const EmojiCategoryTypes = EmojiPickerConstants.EmojiCategoryTypes;
const IMAGE_SIZE = EmojiPickerListConstants.IMAGE_SIZE;
const PADDING_VERTICAL = ExpressionPickerConstants.PADDING_VERTICAL;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles({ container: { flex: 1 } });
const EmojiPickerNativeComponent = ReanimatedRexport.createAnimatedComponent(EmojiPickerNativeComponentDefault);
let closure_12 = BottomSheetModal.createBottomSheetScrollableComponent(BottomSheetModal.SCROLLABLE_TYPE.SCROLLVIEW, EmojiPickerNativeComponent);
let closure_13 = MetaQuestUtils.isMetaQuest();
const __initData = { code: "function EmojiPickerListComponentAndroidTsx1(){const{bottomSheetIndex}=this.__closure;return bottomSheetIndex.get();}" };
const __initData2 = { code: "function EmojiPickerListComponentAndroidTsx2(index){const{inPortalKeyboard,IS_META_QUEST,runOnJS,scrollingEnabled}=this.__closure;if(!inPortalKeyboard||index<0||IS_META_QUEST){return;}if(index===0){runOnJS(scrollingEnabled)(false);}else if(index===1){runOnJS(scrollingEnabled)(true);}}" };
const forwardRefResult = react.forwardRef((analyticsLocations, ref) => {
  let items8;
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
  ref = undefined;
  let callback1;
  ({ paddingTop, paddingBottom } = analyticsLocations);
  let tmp = ref();
  ref = data.useRef(null);
  const items = [ref, data];
  const effect = data.useEffect(() => {
    let hasGuildData = null != ref.current;
    const tmp = ref;
    if (hasGuildData) {
      hasGuildData = data.hasGuildData;
    }
    if (hasGuildData) {
      const Commands = EmojiPickerNativeComponent2.Commands;
      Commands.refreshEmojis(tmp.current);
    }
  }, items);
  const scrollingEnabled = data.useCallback((arg0) => {
    if (null != ref.current) {
      const Commands = EmojiPickerNativeComponent2.Commands;
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
  H.__initData = __initData;
  class D {
    constructor(arg0) {
      let tmp = !inPortalKeyboard;
      if (inPortalKeyboard) {
        tmp = arg0 < 0;
      }
      if (!tmp) {
        tmp = closure_13;
      }
      if (!tmp) {
        if (0 === arg0) {
          const obj2 = ReanimatedRexport2;
          obj2.runOnJS(callback)(false);
        } else if (1 === arg0) {
          const obj = ReanimatedRexport2;
          obj.runOnJS(callback)(true);
        }
      }
    }
  }
  let obj2 = { inPortalKeyboard, IS_META_QUEST: callback1, runOnJS: analyticsLocations(categoryIndexActive[7]).runOnJS, scrollingEnabled };
  D.__closure = obj2;
  D.__workletHash = 2460528828147;
  D.__initData = __initData2;
  const animatedReaction = obj.useAnimatedReaction(H, D);
  const items1 = [guildId];
  callback1 = data.useCallback((emojiId) => {
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
  const imperativeHandle = data.useImperativeHandle(ref, () => ({
    scrollToHeaderIndex(animated) {
      let flag = animated.animated;
      const index = animated.index;
      if (flag === undefined) {
        flag = true;
      }
      if (null != ref.current) {
        const Commands = analyticsLocations(categoryIndexActive[8]).Commands;
        Commands.scrollToHeaderIndex(tmp.current, index, flag);
      }
    },
    forceUpdate() {

    },
    onStickyHeaderRendered() {

    }
  }));
  const items6 = [animateEmoji];
  const items7 = [guildId, analyticsLocations, useTier0UpsellContent, data.hasSearchUpsell];
  const obj3 = { config: data.useMemo(() => ({ animateEmoji, scrollFastOptimizationEnabled: true, scrollFastVelocity: 8000, disableAnimationsOnScroll: true }), items6), emojiData: data, emojiMargin: onPressEmoji, emojiSize: inPortalKeyboard, onPressEmoji: callback2, onLongPressEmoji: callback3, onStickyHeaderRender: callback4, onShowNitroUpsell: callback5, paddingTop, paddingBottom, useTier0UpsellContent, ref, style: tmp.container };
  const obj4 = { children: items8 };
  items8 = [onLongPressEmoji(scrollingEnabled, obj3), ];
  onLongPressEmoji(scrollingEnabled, obj3);
  items8[1] = data.useMemo(() => {
    let obj2;
    let tmp = null;
    if (data.hasSearchUpsell) {
      const obj = { portalId: EmojiCategoryTypes.PREMIUM_UPSELL, children: metroImportAll(EmojiPickerPremiumSearchUpsell.PremiumSearchUpsell, obj2) };
      obj2 = { guildId, analyticsLocations, useTier0UpsellContent };
      const tmp5 = PortalToNativeViewDefault;
      tmp = metroImportAll(tmp5, obj);
    }
    return tmp;
  }, items7);
  return useTier0UpsellContent(onShowNitroUpsell, obj4);
});
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListComponent.android.tsx");

export default forwardRefResult;
