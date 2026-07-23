// Module ID: 9407
// Function ID: 73299
// Name: NODE_SIZE
// Dependencies: [57, 31, 27, 4995, 653, 33, 4130, 689, 3991, 4131, 4134, 4660, 5515, 9408, 4652, 2]

// Module 9407 (NODE_SIZE)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import { EmojiCategoryTypes } from "EmojiCategoryTypes";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let CATEGORY_ICON_SIZE;
let NODE_SIZE;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ CATEGORY_ICON_RIPPLE_CONFIG: closure_7, CATEGORY_ICON_SIZE, NODE_SIZE } = ME);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
obj = { itemInner: obj };
obj = { justifyContent: "center", alignItems: "center", height: NODE_SIZE, width: NODE_SIZE, borderRadius: NODE_SIZE / 2 };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.ICON_TRANSPARENT };
obj.fadedItem = _createForOfIteratorHelperLoose;
obj.activeItem = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_BACKGROUND_ACTIVE };
obj.guildItem = { height: CATEGORY_ICON_SIZE, width: CATEGORY_ICON_SIZE, borderRadius: CATEGORY_ICON_SIZE / 2 };
let obj3 = { width: 12, height: 12, position: "absolute", bottom: 0, end: 0, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, alignItems: "center", justifyContent: "center" };
obj.lockContainer = obj3;
let obj4 = { width: 7.5, height: 7.5, tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
obj.lock = obj4;
let closure_10 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_11 = { code: "function EmojiPickerCategoriesItemTsx1(){const{withTiming,categoryIndexActive,index,timingStandard,styleColorActive,styleColorTransparent}=this.__closure;return{opacity:withTiming(categoryIndexActive.get()===index?1:0.5,timingStandard),backgroundColor:categoryIndexActive.get()===index?styleColorActive:styleColorTransparent};}" };
let closure_12 = { code: "function EmojiPickerCategoriesItemTsx2(){const{categoryIndexActive,index}=this.__closure;return categoryIndexActive.get()===index;}" };
let closure_13 = { code: "function EmojiPickerCategoriesItemTsx3(active,prev){const{runOnJS,setIsSelected}=this.__closure;if(active!==prev){runOnJS(setIsSelected)(active);}}" };
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_BACKGROUND_ACTIVE };
const memoResult = importAllResult.memo(function EmojiPickerCategoriesItem(category) {
  let loadingStyle;
  let style;
  category = category.category;
  const categoryIndexActive = category.categoryIndexActive;
  const handlePressCategory = category.handlePressCategory;
  const index = category.index;
  let locked = category.locked;
  ({ loadingStyle, style } = category);
  const tmp = callback2();
  const backgroundColor = tmp.activeItem.backgroundColor;
  const backgroundColor2 = tmp.fadedItem.backgroundColor;
  let obj = category(handlePressCategory[8]);
  class T {
    constructor() {
      obj = {};
      obj2 = category(handlePressCategory[9]);
      num = 0.5;
      if (categoryIndexActive.get() === index) {
        num = 1;
      }
      obj.opacity = obj2.withTiming(num, category(handlePressCategory[10]).timingStandard);
      obj.backgroundColor = categoryIndexActive.get() === index ? backgroundColor : backgroundColor;
      return obj;
    }
  }
  obj = { withTiming: category(handlePressCategory[9]).withTiming, categoryIndexActive, index, timingStandard: category(handlePressCategory[10]).timingStandard, styleColorActive: backgroundColor, styleColorTransparent: backgroundColor2 };
  T.__closure = obj;
  T.__workletHash = 3335518235623;
  T.__initData = closure_11;
  const animatedStyle = obj.useAnimatedStyle(T);
  const tmp3 = index(backgroundColor.useState(() => categoryIndexActive.get() === index), 2);
  const EmojiCategoryTypes = tmp4;
  let obj2 = category(handlePressCategory[8]);
  const fn = function p() {
    return categoryIndexActive.get() === index;
  };
  fn.__closure = { categoryIndexActive, index };
  fn.__workletHash = 12996370114251;
  fn.__initData = closure_12;
  class E {
    constructor(arg0, arg1) {
      if (category !== arg1) {
        tmp = category;
        tmp2 = handlePressCategory;
        num = 8;
        obj = category(handlePressCategory[8]);
        tmp3 = closure_6;
        tmp4 = obj.runOnJS(closure_6)(category);
      }
      return;
    }
  }
  obj = { runOnJS: category(handlePressCategory[8]).runOnJS, setIsSelected: tmp4 };
  E.__closure = obj;
  E.__workletHash = 6056273557261;
  E.__initData = closure_13;
  const animatedReaction = obj2.useAnimatedReaction(fn, E);
  const items = [handlePressCategory, index, category];
  const callback = backgroundColor.useCallback(() => handlePressCategory(index, category), items);
  const obj1 = { androidRippleConfig: closure_7, style, onPress: callback, accessibilityRole: "tab" };
  if (category.type === EmojiCategoryTypes.GUILD) {
    let name = category.guild.name;
  } else {
    name = category.name;
  }
  obj1.accessibilityLabel = name;
  obj1.accessibilityState = { selected: tmp3[0] };
  obj2 = { style: items1 };
  items1 = [tmp.itemInner, animatedStyle];
  if (category.type === EmojiCategoryTypes.GUILD) {
    const obj3 = { guild: category.guild, loadingStyle, size: category(handlePressCategory[12]).GuildIconSizes.XSMALL, style: tmp.guildItem };
    let tmp12 = callback(categoryIndexActive(handlePressCategory[12]), obj3);
    const tmp16 = categoryIndexActive(handlePressCategory[12]);
  } else {
    const obj4 = { id: category.id };
    tmp12 = callback(categoryIndexActive(handlePressCategory[13]), obj4);
  }
  const items2 = [tmp12, ];
  if (locked) {
    const obj5 = { style: tmp.lockContainer };
    const obj6 = { style: tmp.lock };
    obj5.children = callback(category(handlePressCategory[14]).LockIcon, obj6);
    locked = callback(backgroundColor2, obj5);
  }
  items2[1] = locked;
  obj2.children = items2;
  obj1.children = closure_9(categoryIndexActive(handlePressCategory[8]).View, obj2);
  return callback(category(handlePressCategory[11]).PressableOpacity, obj1);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoriesItem.tsx");

export default memoResult;
