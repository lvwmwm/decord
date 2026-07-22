// Module ID: 9628
// Function ID: 74986
// Name: CATEGORY_ICON_SIZE
// Dependencies: []
// Exports: default

// Module 9628 (CATEGORY_ICON_SIZE)
let CATEGORY_ICON_SIZE;
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
const useStickerPickerStore = arg1(dependencyMap[4]).useStickerPickerStore;
const tmp2 = arg1(dependencyMap[5]);
({ AnalyticEvents: closure_8, AnalyticsPages: closure_9, CATEGORY_ICON_RIPPLE_CONFIG: closure_10, CATEGORY_ICON_SIZE } = tmp2);
const EXPRESSION_FOOTER_HEIGHT = tmp2.EXPRESSION_FOOTER_HEIGHT;
const NODE_SIZE = tmp2.NODE_SIZE;
const ExpressionPickerViewType = arg1(dependencyMap[6]).ExpressionPickerViewType;
({ jsx: closure_14, jsxs: closure_15 } = arg1(dependencyMap[7]));
let obj1 = arg1(dependencyMap[8]);
let obj = { list: { flex: 1, height: EXPRESSION_FOOTER_HEIGHT }, item: { height: EXPRESSION_FOOTER_HEIGHT, width: EXPRESSION_FOOTER_HEIGHT, justifyContent: "center", alignItems: "center" }, itemInner: obj, fadedItem: { opacity: 0.5 } };
obj = { "Bool(false)": null, "Bool(false)": null, height: NODE_SIZE, width: NODE_SIZE, borderRadius: NODE_SIZE / 2 };
obj1 = { opacity: 1, backgroundColor: importDefault(dependencyMap[9]).colors.INTERACTIVE_BACKGROUND_ACTIVE };
obj.activeItem = obj1;
obj.guildIcon = { height: CATEGORY_ICON_SIZE, width: CATEGORY_ICON_SIZE, borderRadius: CATEGORY_ICON_SIZE / 2 };
const tmp3 = arg1(dependencyMap[7]);
obj.guildItemPlaceholder = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_MOD_MUTED };
let closure_16 = obj1.createStyles(obj);
let closure_17 = importAllResult.memo((category) => {
  category = category.category;
  const arg1 = category;
  const onPressCategory = category.onPressCategory;
  const importDefault = onPressCategory;
  const index = category.index;
  const dependencyMap = index;
  const isActive = category.isActive;
  let closure_3;
  const tmp = callback3();
  const AnimateStickers = arg1(dependencyMap[10]).AnimateStickers;
  const setting = AnimateStickers.useSetting();
  let obj = arg1(dependencyMap[11]);
  let shouldAnimateStickerResult = obj.shouldAnimateSticker(setting, false);
  let guild = null;
  if (category.type === arg1(dependencyMap[12]).StickerCategoryTypes.GUILD) {
    guild = guild.getGuild(category.id);
  }
  closure_3 = guild;
  const items = [category, guild, index, onPressCategory];
  const callback = importAllResult.useCallback(() => {
    let tmp = category.type !== category(index[12]).StickerCategoryTypes.PACK;
    if (tmp) {
      tmp = category.type !== category(index[12]).StickerCategoryTypes.GUILD;
    }
    if (!tmp) {
      let obj = onPressCategory(index[13]);
      obj = {};
      obj = { page: constants2.EXPRESSION_PICKER };
      obj.location = obj;
      obj.tab = constants3.STICKER;
      obj.sticker_pack_id = category.id;
      let id;
      if (null != guild) {
        id = guild.id;
      }
      obj.guild_id = id;
      obj.track(constants.EXPRESSION_PICKER_CATEGORY_SELECTED, obj);
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
  const items1 = [tmp.itemInner, isActive ? tmp.activeItem : tmp.fadedItem];
  if (null != category.icon) {
    const obj1 = { style: tmp.guildIcon, disableColor: category.type === arg1(dependencyMap[12]).StickerCategoryTypes.PACK, source: arg1(dependencyMap[16]).makeSource(category.icon) };
    let tmp11Result = callback2(arg1(dependencyMap[15]).Icon, obj1);
    const obj7 = arg1(dependencyMap[16]);
  } else if (category.type === arg1(dependencyMap[12]).StickerCategoryTypes.GUILD) {
    const obj2 = { guild, loadingStyle: tmp.guildItemPlaceholder, size: arg1(dependencyMap[17]).GuildIconSizes.XSMALL, style: tmp.guildIcon };
    tmp11Result = callback2(importDefault(dependencyMap[17]), obj2);
    const tmp20 = importDefault(dependencyMap[17]);
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
    const tmp11 = callback2;
  }
  obj.children = tmp11Result;
  obj.children = callback2(View, obj);
  return callback2(arg1(dependencyMap[14]).PressableOpacity, obj);
});
const obj2 = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_MOD_MUTED };
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/stickers/native/StickerPickerCategories.tsx");

export default function _default(categories) {
  categories = categories.categories;
  const arg1 = categories;
  const categoryIndex = categories.categoryIndex;
  const importDefault = categoryIndex;
  const tmp = callback3();
  let closure_2 = importAllResult.useRef(undefined);
  const ref = importAllResult.useRef(null);
  let callback = ref;
  const items = [categories];
  const memo = importAllResult.useMemo(() => {
    const items = [categories.length];
    return items;
  }, items);
  const tmp4 = callback(importAllResult.useState(null), 2);
  const first = tmp4[0];
  let closure_5 = tmp4[1];
  const tmp6 = callback(first.useState(false), 2);
  const first1 = tmp6[0];
  let closure_6 = first1;
  const useStickerPickerStore = tmp6[1];
  const tmp8 = useStickerPickerStore((setPackToScrollTo) => setPackToScrollTo.setPackToScrollTo);
  const items1 = [categories];
  const effect = importAllResult.useEffect(() => {
    const findIndexResult = categories.findIndex((type) => type.type === callback(closure_2[12]).StickerCategoryTypes.PACK);
    if (findIndexResult >= 0) {
      callback(findIndexResult);
    }
  }, items1);
  const items2 = [categoryIndex];
  const effect1 = importAllResult.useEffect(() => {
    if (null != closure_2.current) {
      if (null != ref.current) {
        const result = categoryIndex * closure_12;
        let tmp6 = result > closure_2.current.end;
        if (!tmp6) {
          tmp6 = result < closure_2.current.start;
        }
        if (tmp6) {
          const current = ref.current;
          const obj = { -9223372036854775808: "decimal-pad", 0: "number-pad", 0: "phone-pad", item: categoryIndex };
          current.scrollToLocation(obj);
        }
      }
    }
  }, items2);
  const items3 = [first, first1];
  callback = importAllResult.useCallback(() => {
    let tmp = null != first;
    if (tmp) {
      tmp = null != closure_2.current;
    }
    if (tmp) {
      let num = 0;
      const result = first * closure_12;
      if (!first1) {
        num = closure_12;
      }
      closure_7(result > closure_2.current.end - num);
      const tmp3 = closure_7;
    }
  }, items3);
  const items4 = [callback];
  const items5 = [categories, tmp8];
  const callback1 = importAllResult.useCallback((nativeEvent) => {
    closure_2.current = { start: nativeEvent.nativeEvent.contentOffset.x, end: nativeEvent.nativeEvent.contentOffset.x + nativeEvent.nativeEvent.layoutMeasurement.width };
    callback();
  }, items4);
  const callback2 = importAllResult.useCallback((arg0) => {
    tmp8(categories[arg0].id);
    const result = categories(closure_2[19]).triggerHapticFeedback(categoryIndex(closure_2[20]).IMPACT_LIGHT);
  }, items5);
  const items6 = [first, callback2];
  const items7 = [callback];
  const callback3 = importAllResult.useCallback(() => {
    if (null != first) {
      callback2(first);
      callback2(false);
    }
  }, items6);
  const items8 = [categories, categoryIndex, callback2];
  const callback4 = importAllResult.useCallback((nativeEvent) => {
    if (null == closure_2.current) {
      const obj = { start: 0, end: nativeEvent.nativeEvent.layout.width };
      closure_2.current = obj;
      callback();
    }
  }, items7);
  const callback5 = importAllResult.useCallback((arg0, index) => callback3(closure_17, { category: categories[index], index, isActive: index === categoryIndex, onPressCategory: callback2 }), items8);
  let obj = { portalHostName: "expression-footer", style: categories.style };
  const tmp17 = importDefault(closure_2[21])();
  const tmp18 = closure_15;
  obj = { "Bool(false)": null, "Bool(false)": "mobile-text-heading-primary", "Bool(false)": 2, "Bool(false)": "inbox", itemSize: EXPRESSION_FOOTER_HEIGHT, listId: ExpressionPickerViewType.STICKER, onLayout: callback4, onScroll: callback1, placeholderConfig: tmp17, ref, scrollReporting: "callbacks", sections: memo, renderItem: callback5, showsHorizontalScrollIndicator: false, style: tmp.list };
  const items9 = [callback2(importDefault(closure_2[23]), obj), ];
  let tmp20 = null != first && first1;
  if (tmp20) {
    obj = { onPress: callback3, accessibilityRole: "button" };
    const intl = arg1(closure_2[24]).intl;
    obj.accessibilityLabel = intl.string(arg1(closure_2[24]).t.rzCcjK);
    const obj1 = {};
    const items10 = [, ];
    ({ item: arr11[0], fadedItem: arr11[1] } = tmp);
    obj1.style = items10;
    const obj2 = { style: tmp.guildIcon, source: importDefault(closure_2[25]) };
    obj1.children = callback2(arg1(closure_2[15]).Icon, obj2);
    obj.children = callback2(closure_5, obj1);
    tmp20 = callback2(arg1(closure_2[14]).PressableOpacity, obj);
  }
  items9[1] = tmp20;
  obj.children = items9;
  return tmp18(importDefault(closure_2[22]), obj);
};
