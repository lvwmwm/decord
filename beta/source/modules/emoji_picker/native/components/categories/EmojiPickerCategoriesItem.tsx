// Module ID: 9809
// Function ID: 9810
// Name: EmojiPickerCategoriesItem
// Dependencies: [32, 19, 17, 5775, 1074, 21, 4836, 576, 4566, 4837, 4840, 5435, 5896, 9810, 5409, 2]

// Module 9809 (EmojiPickerCategoriesItem)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import EmojiPickerConstants from "EmojiPickerConstants" /* 5775 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let CATEGORY_ICON_SIZE;
let NODE_SIZE;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let size;
let size1;
let size2;
let tmp;
const timingPresets = tmp(4840);
let View = react_native.View;
let EmojiCategoryTypes = EmojiPickerConstants.EmojiCategoryTypes;
({ CATEGORY_ICON_RIPPLE_CONFIG: metroImportDefault, CATEGORY_ICON_SIZE, NODE_SIZE } = Constants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { itemInner: size, fadedItem: obj2, activeItem: obj3, guildItem: { height: CATEGORY_ICON_SIZE, width: CATEGORY_ICON_SIZE, borderRadius: CATEGORY_ICON_SIZE / 2 }, lockContainer: size1, lock: size2 };
size = { justifyContent: "center", alignItems: "center", height: NODE_SIZE, width: NODE_SIZE, borderRadius: NODE_SIZE / 2 };
obj2 = { backgroundColor: nativeDefault.colors.ICON_TRANSPARENT };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
size1 = { width: 12, height: 12, position: "absolute", bottom: 0, end: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center" };
size2 = { width: 7.5, height: 7.5, tintColor: nativeDefault.colors.TEXT_DEFAULT };
let closure_10 = createStyles(obj);
const __initData = { code: "function EmojiPickerCategoriesItemTsx1(){const{withTiming,categoryIndexActive,index,timingStandard,styleColorActive,styleColorTransparent}=this.__closure;return{opacity:withTiming(categoryIndexActive.get()===index?1:0.5,timingStandard),backgroundColor:categoryIndexActive.get()===index?styleColorActive:styleColorTransparent};}" };
const __initData2 = { code: "function EmojiPickerCategoriesItemTsx2(){const{categoryIndexActive,index}=this.__closure;return categoryIndexActive.get()===index;}" };
const __initData3 = { code: "function EmojiPickerCategoriesItemTsx3(active,prev){const{runOnJS,setIsSelected}=this.__closure;if(active!==prev){runOnJS(setIsSelected)(active);}}" };
const memoResult = react.memo(function EmojiPickerCategoriesItem(category) {
  let closure_6;
  let items1;
  let items2;
  let loadingStyle;
  let name;
  let obj10;
  let obj6;
  let style;
  let tmp10Result;
  let tmp12;
  category = category.category;
  const categoryIndexActive = category.categoryIndexActive;
  const handlePressCategory = category.handlePressCategory;
  const index = category.index;
  let locked = category.locked;
  EmojiCategoryTypes = undefined;
  ({ loadingStyle, style } = category);
  let tmp = closure_10();
  const backgroundColor = tmp.activeItem.backgroundColor;
  const backgroundColor2 = tmp.fadedItem.backgroundColor;
  const tmp3 = handlePressCategory;
  let obj = category(handlePressCategory[8]);
  class T {
    constructor() {
      const withTiming = timing.withTiming;
      let num = 0.5;
      timing;
      const obj = categoryIndexActive;
      const tmp4 = index;
      if (categoryIndexActive.get() === index) {
        num = 1;
      }
      const obj2 = { opacity: withTiming(num, timingPresets.timingStandard), backgroundColor: obj.get() === tmp4 ? backgroundColor : backgroundColor2 };
      return obj2;
    }
  }
  let obj2 = { withTiming: category(handlePressCategory[9]).withTiming, categoryIndexActive, index, timingStandard: category(handlePressCategory[10]).timingStandard, styleColorActive: backgroundColor, styleColorTransparent: backgroundColor2 };
  T.__closure = obj2;
  T.__workletHash = 3335518235623;
  T.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(T);
  const tmp5 = index(backgroundColor.useState(() => categoryIndexActive.get() === index), 2);
  EmojiCategoryTypes = tmp7;
  const first = tmp5[0];
  const fn = function p() {
    return categoryIndexActive.get() === index;
  };
  fn.__closure = { categoryIndexActive, index };
  fn.__workletHash = 12996370114251;
  fn.__initData = __initData2;
  const obj3 = category(handlePressCategory[8]);
  class E {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = ReanimatedRexport;
        obj.runOnJS(closure_6)(arg0);
      }
    }
  }
  E.__closure = { runOnJS: category(handlePressCategory[8]).runOnJS, setIsSelected: tmp5[1] };
  E.__workletHash = 6056273557261;
  E.__initData = __initData3;
  ({ runOnJS: category(handlePressCategory[8]).runOnJS, setIsSelected: tmp5[1] });
  const animatedReaction = obj3.useAnimatedReaction(fn, E);
  const items = [handlePressCategory, index, category];
  const callback = backgroundColor.useCallback(() => handlePressCategory(index, category), items);
  const obj5 = { androidRippleConfig, style, onPress: callback, accessibilityRole: "tab", accessibilityLabel: name, accessibilityState: { selected: first }, children: tmp12(View, obj6) };
  const PressableOpacity = category(handlePressCategory[11]).PressableOpacity;
  const tmp11 = EmojiCategoryTypes;
  if (category.type === EmojiCategoryTypes.GUILD) {
    name = category.guild.name;
  } else {
    name = category.name;
  }
  obj6 = { style: items1, children: items2 };
  items1 = [tmp.itemInner, animatedStyle];
  View = categoryIndexActive(tmp3[8]).View;
  tmp12 = closure_9;
  if (category.type === tmp11.GUILD) {
    const obj7 = { guild: category.guild, loadingStyle, size: category(tmp3[12]).GuildIconSizes.XSMALL, style: tmp.guildItem };
    const tmp13Result = categoryIndexActive(tmp3[12]);
    tmp10Result = tmp10(tmp13Result, obj7);
  } else {
    const obj8 = { id: category.id };
    tmp10Result = tmp10(tmp13(tmp3[13]), obj8);
  }
  items2 = [tmp10Result, ];
  if (locked) {
    const obj9 = { style: tmp.lockContainer, children: closure_8(category(tmp3[14]).LockIcon, obj10) };
    obj10 = { style: tmp.lock };
    locked = tmp10(backgroundColor2, obj9);
  }
  items2[1] = locked;
  return closure_8(PressableOpacity, obj5);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoriesItem.tsx");

export default memoResult;
