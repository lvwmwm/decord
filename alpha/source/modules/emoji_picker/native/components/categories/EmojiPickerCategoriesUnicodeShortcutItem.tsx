// Module ID: 11265
// Function ID: 11266
// Name: EmojiPickerCategoriesUnicodeShortcutItem
// Dependencies: [32, 19, 17, 1072, 21, 5243, 1652, 11266, 1705, 7364, 1113, 11250, 2]
// Exports: default

// Module 11265 (EmojiPickerCategoriesUnicodeShortcutItem)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import cheapWorkletShallowEqual from "cheapWorkletShallowEqual" /* 11266 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import createStyles from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

let end, num, tmp, tmp2, tmp5;

let NODE_SIZE;
let metroRequire;
let size;
const View = react_native.View;
({ EXPRESSION_FOOTER_HEIGHT: metroRequire, NODE_SIZE } = Constants);
const jsx = Fragment.jsx;
const obj = { itemInner: size, fadedItemOpacity: { opacity: 0.5 } };
size = { justifyContent: "center", alignItems: "center", height: NODE_SIZE, width: NODE_SIZE, borderRadius: NODE_SIZE / 2 };
let closure_8 = createStyles.createStyles(obj);
let closure_9 = { code: "(function EmojiPickerCategoriesUnicodeShortcutItemTsx1(){let[blockRef]=this.__closure;return blockRef.get();})" };
let closure_10 = { code: "(function EmojiPickerCategoriesUnicodeShortcutItemTsx2(blockRef,previous){let[cheapWorkletShallowEqual,categoryIndex,EXPRESSION_FOOTER_HEIGHT,unicodeShortcutVisible,scheduleOnRN,setUnicodeShortcutVisible]=this.__closure;if(blockRef==null||cheapWorkletShallowEqual(blockRef,previous!==null&&previous!==void 0?previous:undefined)){return;}const categoryScrollPos=categoryIndex*EXPRESSION_FOOTER_HEIGHT;const categoryUnicodeShortcutVisible=categoryScrollPos>blockRef.end-(unicodeShortcutVisible?0:EXPRESSION_FOOTER_HEIGHT);scheduleOnRN(setUnicodeShortcutVisible,categoryUnicodeShortcutVisible);})" };
size = size_mod;
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoriesUnicodeShortcutItem.tsx");

export default function EmojiPickerCategoriesUnicodeShortcutItem(category) {
  let blockRef;
  let first;
  let style;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp3;
  let tmp7;
  let tmp8;
  let tmp9;
  category = category.category;
  const categoryIndex = category.categoryIndex;
  const onPress = category.onPress;
  ({ blockRef, style } = category);
  [first, tmp3] = react.useState(false);
  const items = [closure_9, blockRef];
  let c0;
  [tmp7, tmp8] = items;
  const tmp6 = _mod1652;
  class EmojiPickerCategoriesUnicodeShortcutItemTsx1 {
    constructor() {
      return closure_0.get();
    }
  }
  const items1 = [tmp8];
  EmojiPickerCategoriesUnicodeShortcutItemTsx1.__closure = items1;
  EmojiPickerCategoriesUnicodeShortcutItemTsx1.__workletHash = 6335031605135;
  EmojiPickerCategoriesUnicodeShortcutItemTsx1.__initData = tmp7;
  const items2 = [closure_10, , , , , , ];
  const useAnimatedReaction = tmp6.useAnimatedReaction;
  items2[1] = cheapWorkletShallowEqual.cheapWorkletShallowEqual;
  items2[2] = categoryIndex;
  items2[3] = metroRequire;
  items2[4] = first;
  items2[5] = _mod1705.scheduleOnRN;
  items2[6] = tmp3;
  c0 = undefined;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15] = items2;
  class EmojiPickerCategoriesUnicodeShortcutItemTsx2 {
    constructor(arg0, arg1) {
      if (null != category) {
        tmp = arg1;
        tmp2 = closure_0;
        if (!tmp2(category, tmp)) {
          tmp3 = closure_1;
          tmp5 = closure_3;
          num = 0;
          result = closure_1 * closure_2;
          end = category.end;
          if (!closure_3) {
            num = closure_2;
          }
          tmp6 = closure_4;
          tmp7 = closure_5;
          tmp8 = closure_4(closure_5, result > end - num);
        }
      }
      return;
    }
  }
  const items3 = [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15];
  EmojiPickerCategoriesUnicodeShortcutItemTsx2.__closure = items3;
  EmojiPickerCategoriesUnicodeShortcutItemTsx2.__workletHash = 7076312301625;
  EmojiPickerCategoriesUnicodeShortcutItemTsx2.__initData = tmp9;
  const animatedReaction = useAnimatedReaction(EmojiPickerCategoriesUnicodeShortcutItemTsx1, EmojiPickerCategoriesUnicodeShortcutItemTsx2);
  const items4 = [categoryIndex, category, onPress];
  let tmp19 = null;
  const tmp17 = closure_8();
  if (first) {
    const PressableOpacity = tmp4(7364).PressableOpacity;
    const intl = tmp4(1113).intl;
    const items5 = [, ];
    ({ itemInner: arr6[0], fadedItemOpacity: arr6[1] } = tmp17);
    tmp19 = <PressableOpacity style={style} onPress={tmp18} accessibilityRole="button" accessibilityLabel={intl.string(intl2.t.gg3lOG)}>{null}</PressableOpacity>;
  }
  return tmp19;
};
