// Module ID: 9399
// Function ID: 73245
// Name: NODE_SIZE
// Dependencies: []

// Module 9399 (NODE_SIZE)
let CATEGORY_ICON_SIZE;
let NODE_SIZE;
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const EmojiCategoryTypes = arg1(dependencyMap[3]).EmojiCategoryTypes;
({ CATEGORY_ICON_RIPPLE_CONFIG: closure_7, CATEGORY_ICON_SIZE, NODE_SIZE } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
let obj1 = arg1(dependencyMap[6]);
let obj = { itemInner: obj };
obj = { margin: null, backgroundColor: null, height: NODE_SIZE, width: NODE_SIZE, borderRadius: NODE_SIZE / 2 };
obj1 = { backgroundColor: importDefault(dependencyMap[7]).colors.ICON_TRANSPARENT };
obj.fadedItem = obj1;
const tmp3 = arg1(dependencyMap[5]);
obj.activeItem = { backgroundColor: importDefault(dependencyMap[7]).colors.INTERACTIVE_BACKGROUND_ACTIVE };
obj.guildItem = { height: CATEGORY_ICON_SIZE, width: CATEGORY_ICON_SIZE, borderRadius: CATEGORY_ICON_SIZE / 2 };
const obj3 = { <string:1401708816>: 0.000000000000000000000000000000000000000001525050860536844, <string:2085500511>: 0.00000000000000000000000000000000000000000000000000000000000004665176389013498, <string:3635438091>: 141317.275, <string:1330024018>: false, <string:2356957445>: false, <string:80489538>: "isArray", <string:80491008>: "key", <string:1284003840>: "Array", <string:277479363>: "construct", backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW, borderRadius: importDefault(dependencyMap[7]).radii.round };
obj.lockContainer = obj3;
const obj4 = { "Null": null, "Null": 1, tintColor: importDefault(dependencyMap[7]).colors.TEXT_DEFAULT };
obj.lock = obj4;
let closure_10 = obj1.createStyles(obj);
let closure_11 = { code: "function EmojiPickerCategoriesItemTsx1(){const{withTiming,categoryIndexActive,index,timingStandard,styleColorActive,styleColorTransparent}=this.__closure;return{opacity:withTiming(categoryIndexActive.get()===index?1:0.5,timingStandard),backgroundColor:categoryIndexActive.get()===index?styleColorActive:styleColorTransparent};}" };
let closure_12 = { code: "function EmojiPickerCategoriesItemTsx2(){const{categoryIndexActive,index}=this.__closure;return categoryIndexActive.get()===index;}" };
let closure_13 = { code: "function EmojiPickerCategoriesItemTsx3(active,prev){const{runOnJS,setIsSelected}=this.__closure;if(active!==prev){runOnJS(setIsSelected)(active);}}" };
const obj2 = { backgroundColor: importDefault(dependencyMap[7]).colors.INTERACTIVE_BACKGROUND_ACTIVE };
const memoResult = importAllResult.memo(function EmojiPickerCategoriesItem(category) {
  let loadingStyle;
  let style;
  category = category.category;
  const arg1 = category;
  const categoryIndexActive = category.categoryIndexActive;
  const importDefault = categoryIndexActive;
  const handlePressCategory = category.handlePressCategory;
  const dependencyMap = handlePressCategory;
  const index = category.index;
  let callback = index;
  let locked = category.locked;
  ({ loadingStyle, style } = category);
  const tmp = callback3();
  const backgroundColor = tmp.activeItem.backgroundColor;
  const backgroundColor2 = tmp.fadedItem.backgroundColor;
  const View = backgroundColor2;
  let obj = arg1(dependencyMap[8]);
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
  obj = { withTiming: arg1(dependencyMap[9]).withTiming, categoryIndexActive, index, timingStandard: arg1(dependencyMap[10]).timingStandard, styleColorActive: backgroundColor, styleColorTransparent: backgroundColor2 };
  T.__closure = obj;
  T.__workletHash = 3335518235623;
  T.__initData = closure_11;
  const animatedStyle = obj.useAnimatedStyle(T);
  const tmp3 = callback(backgroundColor.useState(() => categoryIndexActive.get() === index), 2);
  const EmojiCategoryTypes = tmp4;
  let obj2 = arg1(dependencyMap[8]);
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
  obj = { runOnJS: arg1(dependencyMap[8]).runOnJS, setIsSelected: tmp4 };
  E.__closure = obj;
  E.__workletHash = 6056273557261;
  E.__initData = closure_13;
  const animatedReaction = obj2.useAnimatedReaction(fn, E);
  const items = [handlePressCategory, index, category];
  callback = importAllResult.useCallback(() => handlePressCategory(index, category), items);
  const obj1 = { androidRippleConfig: closure_7, style, onPress: callback, accessibilityRole: "tab" };
  if (category.type === EmojiCategoryTypes.GUILD) {
    let name = category.guild.name;
  } else {
    name = category.name;
  }
  obj1.accessibilityLabel = name;
  obj1.accessibilityState = { selected: tmp3[0] };
  obj2 = { style: items1 };
  const items1 = [tmp.itemInner, animatedStyle];
  if (category.type === EmojiCategoryTypes.GUILD) {
    const obj3 = { guild: category.guild, loadingStyle, size: arg1(dependencyMap[12]).GuildIconSizes.XSMALL, style: tmp.guildItem };
    let tmp12 = callback2(importDefault(dependencyMap[12]), obj3);
    const tmp16 = importDefault(dependencyMap[12]);
  } else {
    const obj4 = { id: category.id };
    tmp12 = callback2(importDefault(dependencyMap[13]), obj4);
  }
  const items2 = [tmp12, ];
  if (locked) {
    const obj5 = { style: tmp.lockContainer };
    const obj6 = { style: tmp.lock };
    obj5.children = callback2(arg1(dependencyMap[14]).LockIcon, obj6);
    locked = callback2(View, obj5);
  }
  items2[1] = locked;
  obj2.children = items2;
  obj1.children = closure_9(importDefault(dependencyMap[8]).View, obj2);
  return callback2(arg1(dependencyMap[11]).PressableOpacity, obj1);
});
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoriesItem.tsx");

export default memoResult;
