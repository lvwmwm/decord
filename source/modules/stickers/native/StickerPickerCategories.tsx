// Module ID: 9671
// Function ID: 75238
// Name: CATEGORY_ICON_SIZE
// Dependencies: [57, 31, 27, 1838, 9639, 653, 1314, 33, 4130, 689, 3803, 4466, 4799, 675, 4660, 1273, 1392, 5513, 9651, 4099, 4100, 9455, 9456, 9280, 1212, 9672, 2]
// Exports: default

// Module 9671 (CATEGORY_ICON_SIZE)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import closure_6 from "_createForOfIteratorHelperLoose";
import { useStickerPickerStore } from "useStickerPickerStore";
import ME from "ME";
import { ExpressionPickerViewType } from "ExpressionPickerViewType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let CATEGORY_ICON_SIZE;
let closure_10;
let closure_14;
let closure_15;
let closure_8;
let closure_9;
const require = arg1;
({ AnalyticEvents: closure_8, AnalyticsPages: closure_9, CATEGORY_ICON_RIPPLE_CONFIG: closure_10, CATEGORY_ICON_SIZE } = ME);
const EXPRESSION_FOOTER_HEIGHT = ME.EXPRESSION_FOOTER_HEIGHT;
const NODE_SIZE = ME.NODE_SIZE;
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
obj = { list: { flex: 1, height: EXPRESSION_FOOTER_HEIGHT }, item: { height: EXPRESSION_FOOTER_HEIGHT, width: EXPRESSION_FOOTER_HEIGHT, justifyContent: "center", alignItems: "center" }, itemInner: obj, fadedItem: { opacity: 0.5 } };
obj = { justifyContent: "center", alignItems: "center", height: NODE_SIZE, width: NODE_SIZE, borderRadius: NODE_SIZE / 2 };
_createForOfIteratorHelperLoose = { opacity: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_BACKGROUND_ACTIVE };
obj.activeItem = _createForOfIteratorHelperLoose;
obj.guildIcon = { height: CATEGORY_ICON_SIZE, width: CATEGORY_ICON_SIZE, borderRadius: CATEGORY_ICON_SIZE / 2 };
obj.guildItemPlaceholder = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED };
let closure_16 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_17 = importAllResult.memo((category) => {
  category = category.category;
  const onPressCategory = category.onPressCategory;
  const index = category.index;
  const isActive = category.isActive;
  let guild;
  let tmp = callback2();
  const AnimateStickers = category(index[10]).AnimateStickers;
  const setting = AnimateStickers.useSetting();
  let obj = category(index[11]);
  let shouldAnimateStickerResult = obj.shouldAnimateSticker(setting, false);
  guild = null;
  if (category.type === category(index[12]).StickerCategoryTypes.GUILD) {
    guild = guild.getGuild(category.id);
  }
  const items = [category, guild, index, onPressCategory];
  const callback = importAllResult.useCallback(() => {
    let tmp = category.type !== category(index[12]).StickerCategoryTypes.PACK;
    if (tmp) {
      tmp = category.type !== category(index[12]).StickerCategoryTypes.GUILD;
    }
    if (!tmp) {
      let obj = onPressCategory(index[13]);
      obj = {};
      obj = { page: outer1_9.EXPRESSION_PICKER };
      obj.location = obj;
      obj.tab = outer1_13.STICKER;
      obj.sticker_pack_id = category.id;
      let id;
      if (null != guild) {
        id = guild.id;
      }
      obj.guild_id = id;
      obj.track(outer1_8.EXPRESSION_PICKER_CATEGORY_SELECTED, obj);
    }
    let tmp16;
    if (null != onPressCategory) {
      tmp16 = onPressCategory(index);
    }
    return tmp16;
  }, items);
  obj = { androidRippleConfig: closure_10, accessibilityRole: "tab", accessibilityLabel: category.name, accessibilityState: { selected: isActive }, disabled: 0 === category.stickers.length };
  let tmp8;
  if (category.stickers.length > 0) {
    tmp8 = callback;
  }
  obj.onPress = tmp8;
  obj.style = tmp.item;
  obj = { style: items1 };
  items1 = [tmp.itemInner, isActive ? tmp.activeItem : tmp.fadedItem];
  if (null != category.icon) {
    const obj1 = { style: tmp.guildIcon, disableColor: category.type === category(index[12]).StickerCategoryTypes.PACK, source: category(index[16]).makeSource(category.icon) };
    let tmp11Result = callback(category(index[15]).Icon, obj1);
    const obj7 = category(index[16]);
  } else if (category.type === category(index[12]).StickerCategoryTypes.GUILD) {
    const obj2 = { guild, loadingStyle: tmp.guildItemPlaceholder, size: category(index[17]).GuildIconSizes.XSMALL, style: tmp.guildIcon };
    tmp11Result = callback(onPressCategory(index[17]), obj2);
    const tmp20 = onPressCategory(index[17]);
  } else {
    const obj3 = {};
    if ("previewSticker" in category) {
      if (null != category.previewSticker) {
        let previewSticker = category.previewSticker;
      }
      obj3.sticker = previewSticker;
      if (shouldAnimateStickerResult) {
        shouldAnimateStickerResult = isActive;
      }
      obj3.animated = shouldAnimateStickerResult;
      obj3.size = CATEGORY_ICON_SIZE;
      tmp11Result = tmp11(tmp14, obj3);
    }
    previewSticker = category.stickers[0];
    tmp11 = callback;
  }
  obj.children = tmp11Result;
  obj.children = callback(View, obj);
  return callback(category(index[14]).PressableOpacity, obj);
});
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/stickers/native/StickerPickerCategories.tsx");

export default function _default(categories) {
  categories = categories.categories;
  const categoryIndex = categories.categoryIndex;
  let tmp = callback2();
  const dependencyMap = first.useRef(undefined);
  const ref = first.useRef(null);
  let items = [categories];
  const memo = first.useMemo(() => {
    const items = [categories.length];
    return items;
  }, items);
  const tmp4 = ref(first.useState(null), 2);
  first = tmp4[0];
  let closure_5 = tmp4[1];
  let tmp6 = ref(first.useState(false), 2);
  const first1 = tmp6[0];
  const useStickerPickerStore = tmp6[1];
  const tmp8 = useStickerPickerStore((setPackToScrollTo) => setPackToScrollTo.setPackToScrollTo);
  let closure_8 = tmp8;
  const items1 = [categories];
  const effect = first.useEffect(() => {
    const findIndexResult = categories.findIndex((type) => type.type === categories(table[12]).StickerCategoryTypes.PACK);
    if (findIndexResult >= 0) {
      callback(findIndexResult);
    }
  }, items1);
  const items2 = [categoryIndex];
  const effect1 = first.useEffect(() => {
    if (null != closure_2.current) {
      if (null != ref.current) {
        const result = categoryIndex * outer1_12;
        let tmp6 = result > closure_2.current.end;
        if (!tmp6) {
          tmp6 = result < closure_2.current.start;
        }
        if (tmp6) {
          const current = ref.current;
          const obj = { section: 0, item: categoryIndex, animated: false };
          current.scrollToLocation(obj);
        }
      }
    }
  }, items2);
  const items3 = [first, first1];
  const callback = first.useCallback(() => {
    let tmp = null != first;
    if (tmp) {
      tmp = null != closure_2.current;
    }
    if (tmp) {
      let num = 0;
      const result = first * outer1_12;
      if (!first1) {
        num = outer1_12;
      }
      closure_7(result > closure_2.current.end - num);
      const tmp3 = closure_7;
    }
  }, items3);
  const items4 = [callback];
  const items5 = [categories, tmp8];
  const callback1 = first.useCallback((nativeEvent) => {
    closure_2.current = { start: nativeEvent.nativeEvent.contentOffset.x, end: nativeEvent.nativeEvent.contentOffset.x + nativeEvent.nativeEvent.layoutMeasurement.width };
    callback();
  }, items4);
  callback2 = first.useCallback((arg0) => {
    tmp8(categories[arg0].id);
    const result = categories(closure_2[19]).triggerHapticFeedback(categoryIndex(closure_2[20]).IMPACT_LIGHT);
  }, items5);
  const items6 = [first, callback2];
  const items7 = [callback];
  const callback3 = first.useCallback(() => {
    if (null != first) {
      callback2(first);
      callback2(false);
    }
  }, items6);
  const items8 = [categories, categoryIndex, callback2];
  const callback4 = first.useCallback((nativeEvent) => {
    if (null == closure_2.current) {
      const obj = { start: 0, end: nativeEvent.nativeEvent.layout.width };
      closure_2.current = obj;
      callback();
    }
  }, items7);
  const callback5 = first.useCallback((arg0, index) => outer1_14(outer1_17, { category: categories[index], index, isActive: index === categoryIndex, onPressCategory: callback2 }), items8);
  let obj = { portalHostName: "expression-footer", style: categories.style };
  const tmp17 = categoryIndex(9455)();
  const tmp18 = closure_15;
  obj = { estimatedListSize: "windowSize", horizontal: true, itemSize: EXPRESSION_FOOTER_HEIGHT, keyboardShouldPersistTaps: "always", listId: ExpressionPickerViewType.STICKER, onLayout: callback4, onScroll: callback1, placeholderConfig: tmp17, ref, scrollReporting: "callbacks", sections: memo, renderItem: callback5, showsHorizontalScrollIndicator: false, style: tmp.list };
  const items9 = [callback(categoryIndex(9280), obj), ];
  let tmp20 = null != first && first1;
  if (tmp20) {
    obj = { onPress: callback3, accessibilityRole: "button" };
    const intl = categories(1212).intl;
    obj.accessibilityLabel = intl.string(categories(1212).t.rzCcjK);
    const obj1 = {};
    const items10 = [, ];
    ({ item: arr11[0], fadedItem: arr11[1] } = tmp);
    obj1.style = items10;
    const obj2 = { style: tmp.guildIcon, source: categoryIndex(9672) };
    obj1.children = callback(categories(1273).Icon, obj2);
    obj.children = callback(closure_5, obj1);
    tmp20 = callback(categories(4660).PressableOpacity, obj);
  }
  items9[1] = tmp20;
  obj.children = items9;
  return tmp18(categoryIndex(9456), obj);
};
