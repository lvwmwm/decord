// Module ID: 11255
// Function ID: 11256
// Name: EmojiPickerCategoriesItem
// Dependencies: [32, 19, 17, 6909, 1072, 21, 5243, 575, 1652, 5485, 5488, 1705, 7364, 7654, 11256, 8027, 2]

// Module 11255 (EmojiPickerCategoriesItem)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5485 */;
import timingPresets from "timingPresets" /* 5488 */;
import EmojiPickerConstants from "EmojiPickerConstants" /* 6909 */;
import GuildIconDefault from "GuildIcon" /* 7654 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

const _modDef1652 = _mod1652;

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
let tmp2;
const _mod1705 = tmp2(1705);
const Pressables = tmp2(7364);
const GuildIcon = tmp2(7654);
const LockIcon = tmp2(8027);
let View = react_native.View;
const EmojiCategoryTypes = EmojiPickerConstants.EmojiCategoryTypes;
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
let closure_11 = { code: "(function EmojiPickerCategoriesItemTsx1(){let[withTiming,categoryIndexActive,index,timingStandard,styleColorActive,styleColorTransparent]=this.__closure;return{opacity:withTiming(categoryIndexActive.get()===index?1:0.5,timingStandard),backgroundColor:categoryIndexActive.get()===index?styleColorActive:styleColorTransparent};})" };
let closure_12 = { code: "(function EmojiPickerCategoriesItemTsx2(){let[categoryIndexActive,index]=this.__closure;return categoryIndexActive.get()===index;})" };
let closure_13 = { code: "(function EmojiPickerCategoriesItemTsx3(active,prev){let[scheduleOnRN,setIsSelected]=this.__closure;if(active!==prev){scheduleOnRN(setIsSelected,active);}})" };
const memoResult = react.memo(function EmojiPickerCategoriesItem(category) {
  let items7;
  let items8;
  let loadingStyle;
  let name;
  let obj3;
  let obj7;
  let style;
  let tmp10;
  let tmp11;
  let tmp14;
  let tmp15;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp25Result;
  let tmp27;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  const f100612 = () => categoryIndexActive.get() === index;
  category = category.category;
  const categoryIndexActive = category.categoryIndexActive;
  const handlePressCategory = category.handlePressCategory;
  const index = category.index;
  let locked = category.locked;
  ({ loadingStyle, style } = category);
  let tmp = closure_10();
  let tmp2 = require;
  const backgroundColor = tmp.activeItem.backgroundColor;
  const backgroundColor2 = tmp.fadedItem.backgroundColor;
  const items = [closure_11, , , , , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items[1] = timing_timing.withTiming;
  items[2] = categoryIndexActive;
  items[3] = index;
  items[4] = timingPresets.timingStandard;
  items[5] = backgroundColor;
  items[6] = backgroundColor2;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = items;
  class EmojiPickerCategoriesItemTsx1 {
    constructor() {
      let num = 0.5;
      const obj = _undefined;
      const tmp = c0;
      const tmp2 = c2;
      if (_undefined.get() === c2) {
        num = 1;
      }
      const obj2 = { opacity: tmp(num, c3), backgroundColor: obj.get() === tmp2 ? c4 : c5 };
      return obj2;
    }
  }
  const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11];
  EmojiPickerCategoriesItemTsx1.__closure = items1;
  EmojiPickerCategoriesItemTsx1.__workletHash = 13103741049438;
  EmojiPickerCategoriesItemTsx1.__initData = tmp5;
  let obj = react;
  const animatedStyle = useAnimatedStyle(EmojiPickerCategoriesItemTsx1);
  [tmp14, tmp15] = react.useState(f100612);
  _slicedToArray(react.useState(f100612), 2);
  const items2 = [closure_12, categoryIndexActive, index];
  c0 = undefined;
  c1 = undefined;
  [tmp17, tmp18, tmp19] = items2;
  const tmp2Result = _mod1652;
  class EmojiPickerCategoriesItemTsx2 {
    constructor() {
      return _undefined.get() === c1;
    }
  }
  const items3 = [tmp18, tmp19];
  EmojiPickerCategoriesItemTsx2.__closure = items3;
  EmojiPickerCategoriesItemTsx2.__workletHash = 5439677363570;
  EmojiPickerCategoriesItemTsx2.__initData = tmp17;
  const items4 = [closure_13, , ];
  const useAnimatedReaction = tmp2Result.useAnimatedReaction;
  items4[1] = _mod1705.scheduleOnRN;
  items4[2] = tmp15;
  c0 = undefined;
  c1 = undefined;
  [tmp20, tmp21, tmp22] = items4;
  class EmojiPickerCategoriesItemTsx3 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        _undefined(c1, arg0);
      }
    }
  }
  const items5 = [tmp21, tmp22];
  EmojiPickerCategoriesItemTsx3.__closure = items5;
  EmojiPickerCategoriesItemTsx3.__workletHash = 17327361424281;
  EmojiPickerCategoriesItemTsx3.__initData = tmp20;
  const animatedReaction = useAnimatedReaction(EmojiPickerCategoriesItemTsx2, EmojiPickerCategoriesItemTsx3);
  const items6 = [handlePressCategory, index, category];
  const callback = obj.useCallback(() => handlePressCategory(index, category), items6);
  let obj2 = { androidRippleConfig: metroImportDefault, style, onPress: callback, accessibilityRole: "tab", accessibilityLabel: name, accessibilityState: { selected: tmp14 }, children: tmp27(View, obj3) };
  const PressableOpacity = Pressables.PressableOpacity;
  const tmp26 = EmojiCategoryTypes;
  if (category.type === EmojiCategoryTypes.GUILD) {
    name = category.guild.name;
  } else {
    name = category.name;
  }
  obj3 = { style: items7, children: items8 };
  items7 = [tmp.itemInner, animatedStyle];
  View = _modDef1652.View;
  tmp27 = React4;
  if (category.type === tmp26.GUILD) {
    const obj4 = { guild: category.guild, loadingStyle, size: GuildIcon.GuildIconSizes.XSMALL, style: tmp.guildItem };
    const tmp28Result = GuildIconDefault;
    tmp25Result = tmp25(tmp28Result, obj4);
  } else {
    const obj5 = { id: category.id };
    tmp25Result = tmp25(tmp28(11256), obj5);
  }
  items8 = [tmp25Result, ];
  if (locked) {
    const obj6 = { style: tmp.lockContainer, children: metroImportAll(LockIcon.LockIcon, obj7) };
    obj7 = { style: tmp.lock };
    locked = tmp25(View, obj6);
  }
  items8[1] = locked;
  return metroImportAll(PressableOpacity, obj2);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoriesItem.tsx");

export default memoResult;
