// Module ID: 9882
// Function ID: 9883
// Name: StickerPickerCategories
// Dependencies: [32, 19, 17, 2067, 9851, 1074, 1218, 21, 4836, 576, 2021, 5198, 5581, 1241, 5435, 1177, 1397, 5896, 9636, 5409, 4801, 4802, 9819, 9820, 6476, 1115, 9883, 2]
// Exports: default

// Module 9882 (StickerPickerCategories)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1218 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import HapticUtils from "HapticUtils" /* 4801 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4802 */;
import StickersTypes from "StickersTypes" /* 5581 */;
import StickerPickerStore from "StickerPickerStore" /* 9851 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let category, dependencyMap;

let CATEGORY_ICON_SIZE;
let c10;
let c9;
let closure_14;
let closure_15;
let metroImportAll;
let obj2;
let obj3;
let size;
let size1;
let size2;
const View = react_native.View;
let useStickerPickerStore = StickerPickerStore.useStickerPickerStore;
({ AnalyticEvents: metroImportAll, AnalyticsPages: c9, CATEGORY_ICON_RIPPLE_CONFIG: c10, CATEGORY_ICON_SIZE } = Constants);
const EXPRESSION_FOOTER_HEIGHT = Constants.EXPRESSION_FOOTER_HEIGHT;
const NODE_SIZE = Constants.NODE_SIZE;
const ExpressionPickerViewType = ExpressionPickerConstants.ExpressionPickerViewType;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = { list: { flex: 1, height: EXPRESSION_FOOTER_HEIGHT }, item: { height: EXPRESSION_FOOTER_HEIGHT, width: EXPRESSION_FOOTER_HEIGHT, justifyContent: "center", alignItems: "center" }, itemInner: size, fadedItem: { opacity: 0.5 }, activeItem: obj2, guildIcon: { height: CATEGORY_ICON_SIZE, width: CATEGORY_ICON_SIZE, borderRadius: CATEGORY_ICON_SIZE / 2 }, guildItemPlaceholder: obj3, lockContainer: size1, lock: size2 };
size = { justifyContent: "center", alignItems: "center", height: NODE_SIZE, width: NODE_SIZE, borderRadius: NODE_SIZE / 2 };
obj2 = { opacity: 1, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
size1 = { width: 12, height: 12, position: "absolute", bottom: 0, end: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center" };
size2 = { width: 7.5, height: 7.5, tintColor: nativeDefault.colors.TEXT_DEFAULT };
let closure_16 = createStyles(obj);
let closure_17 = react.memo((category) => {
  let isActive;
  let items2;
  let locked;
  let obj3;
  let obj8;
  let tmp10;
  let tmp11;
  let tmp2Result;
  let tmp9Result;
  category = category.category;
  const onPressCategory = category.onPressCategory;
  const index = category.index;
  ({ isActive, locked } = category);
  const tmp = closure_16();
  let tmp2 = category;
  const AnimateStickers = category(index[10]).AnimateStickers;
  const setting = AnimateStickers.useSetting();
  let obj = category(index[11]);
  let shouldAnimateStickerResult = obj.shouldAnimateSticker(setting, false);
  let guild = null;
  if (category.type === category(index[12]).StickerCategoryTypes.GUILD) {
    guild = GuildStore.getGuild(category.id);
  }
  const items = [category, guild, index, onPressCategory];
  const callback = react.useCallback(() => {
    let id;
    let obj2;
    let tmp4 = category.type !== StickersTypes.StickerCategoryTypes.PACK;
    if (tmp4) {
      tmp4 = tmp.type !== StickersTypes.StickerCategoryTypes.GUILD;
    }
    if (!tmp4) {
      const obj = { location: obj2, tab: ExpressionPickerViewType.STICKER, sticker_pack_id: category.id, guild_id: id };
      id = undefined;
      obj2 = { page: constants.EXPRESSION_PICKER };
      const track = AnalyticsUtilsDefault.track;
      const EXPRESSION_PICKER_CATEGORY_SELECTED = metroImportAll.EXPRESSION_PICKER_CATEGORY_SELECTED;
      AnalyticsUtilsDefault;
      if (guild != null) {
        id = guild.id;
      }
      track(EXPRESSION_PICKER_CATEGORY_SELECTED, obj);
    }
    let tmp13Result;
    if (onPressCategory != null) {
      tmp13Result = tmp13(index);
    }
    return tmp13Result;
  }, items);
  let obj2 = { androidRippleConfig, accessibilityRole: "tab", accessibilityLabel: category.name, accessibilityState: { selected: isActive }, disabled: 0 === category.stickers.length, onPress: tmp10, style: tmp.item, children: tmp11(View, obj3) };
  tmp10 = undefined;
  const PressableOpacity = tmp2(tmp3[14]).PressableOpacity;
  if (category.stickers.length > 0) {
    tmp10 = callback;
  }
  const items1 = [tmp.itemInner, ];
  obj3 = { style: items1, children: items2 };
  items1[1] = isActive ? tmp.activeItem : tmp.fadedItem;
  tmp11 = closure_15;
  if (null != category.icon) {
    const obj4 = { style: tmp.guildIcon, disableColor: category.type === tmp2(index[12]).StickerCategoryTypes.PACK, source: tmp2Result.makeSource(category.icon) };
    const Icon = tmp2(tmp3[15]).Icon;
    tmp2Result = tmp2(index[16]);
    tmp9Result = tmp9(Icon, obj4);
  } else if (category.type === tmp2(index[12]).StickerCategoryTypes.GUILD) {
    const obj5 = { guild, loadingStyle: tmp.guildItemPlaceholder, size: tmp2(index[17]).GuildIconSizes.XSMALL, style: tmp.guildIcon };
    const tmp18 = onPressCategory(index[17]);
    tmp9Result = tmp9(tmp18, obj5);
  } else {
    const tmp13 = onPressCategory;
    if ("previewSticker" in category) {
      let previewSticker;
      if (null != category.previewSticker) {
        previewSticker = category.previewSticker;
      }
      const obj6 = { sticker: previewSticker, animated: shouldAnimateStickerResult, size: CATEGORY_ICON_SIZE };
      if (shouldAnimateStickerResult) {
        shouldAnimateStickerResult = isActive;
      }
      tmp9Result = tmp9(tmp14, obj6);
    }
    previewSticker = category.stickers[0];
  }
  items2 = [tmp9Result, ];
  if (locked) {
    const obj7 = { style: tmp.lockContainer, children: closure_14(tmp2(index[19]).LockIcon, obj8) };
    obj8 = { style: tmp.lock };
    locked = tmp9(tmp12, obj7);
  }
  items2[1] = locked;
  return closure_14(PressableOpacity, obj2);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/stickers/native/StickerPickerCategories.tsx");

export default function _default(categories) {
  let Icon;
  let closure_2;
  let closure_7;
  let intl;
  let items10;
  let items9;
  let obj4;
  let obj5;
  categories = categories.categories;
  const categoryIndex = categories.categoryIndex;
  let first;
  const style = categories.style;
  let tmp = closure_16();
  dependencyMap = first.useRef(undefined);
  const ref = first.useRef(null);
  let items = [categories];
  const memo = first.useMemo(() => {
    const items = [categories.length];
    return items;
  }, items);
  let tmp4 = ref(first.useState(null), 2);
  first = tmp4[0];
  let closure_5 = tmp4[1];
  let tmp6 = ref(first.useState(false), 2);
  const first1 = tmp6[0];
  useStickerPickerStore = tmp6[1];
  const tmp8 = useStickerPickerStore((setPackToScrollTo) => setPackToScrollTo.setPackToScrollTo);
  let closure_8 = tmp8;
  const items1 = [categories];
  const effect = first.useEffect(() => {
    const findIndexResult = categories.findIndex((type) => type.type === categories(closure_1_2[12]).StickerCategoryTypes.PACK);
    if (findIndexResult >= 0) {
      closure_5(findIndexResult);
    }
  }, items1);
  const items2 = [categoryIndex];
  const effect1 = first.useEffect(() => {
    if (null != closure_2.current) {
      if (null != ref.current) {
        const result = categoryIndex * EXPRESSION_FOOTER_HEIGHT;
        let tmp6 = result > tmp.current.end;
        const tmp3 = categoryIndex;
        if (!tmp6) {
          tmp6 = result < tmp.current.start;
        }
        if (tmp6) {
          const current = tmp2.current;
          const obj = { section: 0, item: tmp3, animated: false };
          current.scrollToLocation(obj);
        }
      }
    }
  }, items2);
  const items3 = [first, first1];
  const callback = first.useCallback(() => {
    let tmp2 = null != first;
    const tmp = first;
    if (tmp2) {
      tmp2 = null != closure_2.current;
    }
    if (tmp2) {
      let num = 0;
      const result = tmp * EXPRESSION_FOOTER_HEIGHT;
      const end = closure_2.current.end;
      const tmp4 = closure_7;
      if (!first1) {
        num = EXPRESSION_FOOTER_HEIGHT;
      }
      tmp4(result > end - num);
    }
  }, items3);
  const items4 = [callback];
  const items5 = [categories, tmp8];
  const callback1 = first.useCallback((nativeEvent) => {
    closure_2.current = { start: nativeEvent.nativeEvent.contentOffset.x, end: nativeEvent.nativeEvent.contentOffset.x + nativeEvent.nativeEvent.layoutMeasurement.width };
    callback();
  }, items4);
  const callback2 = first.useCallback((arg0) => {
    closure_8(categories[arg0].id);
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
  }, items5);
  const items6 = [first, callback2];
  const items7 = [callback];
  const callback3 = first.useCallback(() => {
    if (null != first) {
      callback2(tmp);
      closure_7(false);
    }
  }, items6);
  const items8 = [categories, categoryIndex, callback2];
  const callback4 = first.useCallback((nativeEvent) => {
    if (null == closure_2.current) {
      const obj = { start: 0, end: nativeEvent.nativeEvent.layout.width };
      tmp.current = obj;
      callback();
    }
  }, items7);
  const callback5 = first.useCallback((arg0, index) => {
    const obj = { category: categories[index], index, isActive: index === categoryIndex, locked: categories[index].isNitroLocked, onPressCategory: callback2 };
    return authStore2(closure_17, obj);
  }, items8);
  let obj = { portalHostName: "expression-footer", style, children: items9 };
  items9 = [, ];
  const obj2 = { estimatedListSize: "windowSize", horizontal: true, itemSize: EXPRESSION_FOOTER_HEIGHT, keyboardShouldPersistTaps: "always", listId: ExpressionPickerViewType.STICKER, onLayout: callback4, onScroll: callback1, placeholderConfig: categoryIndex(9819)(), ref, scrollReporting: "callbacks", sections: memo, renderItem: callback5, showsHorizontalScrollIndicator: false, style: tmp.list };
  const tmp21 = categoryIndex(9820);
  items9[0] = closure_14(categoryIndex(6476), obj2);
  let tmp22Result = null != first && first1;
  const tmp17 = categoryIndex;
  const tmp20 = closure_15;
  if (tmp22Result) {
    const obj3 = { onPress: callback3, accessibilityRole: "button", accessibilityLabel: intl.string(categories(1115).t.rzCcjK), children: closure_14(closure_5, obj4) };
    const PressableOpacity = categories(5435).PressableOpacity;
    intl = categories(1115).intl;
    obj4 = { style: items10, children: closure_14(Icon, obj5) };
    items10 = [, ];
    ({ item: arr11[0], fadedItem: arr11[1] } = tmp);
    obj5 = { style: tmp.guildIcon, source: tmp17(9883) };
    Icon = categories(1177).Icon;
    tmp22Result = tmp22(PressableOpacity, obj3);
  }
  items9[1] = tmp22Result;
  return tmp20(tmp21, obj);
};
