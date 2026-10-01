// Module ID: 9821
// Function ID: 9822
// Name: EmojiPickerCategoriesUnicodeShortcutItem
// Dependencies: [32, 19, 17, 1074, 21, 4836, 4566, 8853, 5435, 1115, 9810, 2]
// Exports: default

// Module 9821 (EmojiPickerCategoriesUnicodeShortcutItem)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import cheapWorkletShallowEqual2 from "cheapWorkletShallowEqual" /* 8853 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1074 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let NODE_SIZE;
let metroRequire;
let size;
const View = react_native.View;
({ EXPRESSION_FOOTER_HEIGHT: metroRequire, NODE_SIZE } = Constants);
const jsx = Fragment.jsx;
let obj = { itemInner: size, fadedItemOpacity: { opacity: 0.5 } };
size = { justifyContent: "center", alignItems: "center", height: NODE_SIZE, width: NODE_SIZE, borderRadius: NODE_SIZE / 2 };
let closure_8 = createStyles.createStyles(obj);
const __initData = { code: "function EmojiPickerCategoriesUnicodeShortcutItemTsx1(){const{blockRef}=this.__closure;return blockRef.get();}" };
const __initData2 = { code: "function EmojiPickerCategoriesUnicodeShortcutItemTsx2(blockRef,previous){const{cheapWorkletShallowEqual,categoryIndex,EXPRESSION_FOOTER_HEIGHT,unicodeShortcutVisible,runOnJS,setUnicodeShortcutVisible}=this.__closure;if(blockRef==null||cheapWorkletShallowEqual(blockRef,previous!==null&&previous!==void 0?previous:undefined)){return;}const categoryScrollPos=categoryIndex*EXPRESSION_FOOTER_HEIGHT;const categoryUnicodeShortcutVisible=categoryScrollPos>blockRef.end-(unicodeShortcutVisible?0:EXPRESSION_FOOTER_HEIGHT);runOnJS(setUnicodeShortcutVisible)(categoryUnicodeShortcutVisible);}" };
size = size_mod;
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoriesUnicodeShortcutItem.tsx");

export default function EmojiPickerCategoriesUnicodeShortcutItem(blockRef) {
  blockRef = blockRef.blockRef;
  const category = blockRef.category;
  const categoryIndex = blockRef.categoryIndex;
  const onPress = blockRef.onPress;
  let unicodeShortcutVisible;
  const style = blockRef.style;
  let tmp = onPress(unicodeShortcutVisible.useState(false), 2);
  unicodeShortcutVisible = tmp[0];
  let closure_5 = tmp3;
  const tmp4 = blockRef;
  const fn = function f() {
    return blockRef.get();
  };
  fn.__closure = { blockRef };
  fn.__workletHash = 805688584630;
  fn.__initData = __initData;
  const fn2 = function b(end, current) {
    if (null != end) {
      const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
      cheapWorkletShallowEqual2;
      const tmp = current;
      const tmp2 = require;
      if (!cheapWorkletShallowEqual(end, tmp)) {
        let num = 0;
        const result = categoryIndex * metroRequire;
        end = end.end;
        if (!first) {
          num = metroRequire;
        }
        const diff = end - num;
        const tmp2Result = tmp2(4566);
        tmp2Result.runOnJS(closure_5)(result > diff);
      }
    }
  };
  const obj = blockRef(categoryIndex[6]);
  fn2.__closure = { cheapWorkletShallowEqual: blockRef(categoryIndex[7]).cheapWorkletShallowEqual, categoryIndex, EXPRESSION_FOOTER_HEIGHT, unicodeShortcutVisible, runOnJS: blockRef(categoryIndex[6]).runOnJS, setUnicodeShortcutVisible: tmp[1] };
  fn2.__workletHash = 4994136030029;
  fn2.__initData = __initData2;
  ({ cheapWorkletShallowEqual: blockRef(categoryIndex[7]).cheapWorkletShallowEqual, categoryIndex, EXPRESSION_FOOTER_HEIGHT, unicodeShortcutVisible, runOnJS: blockRef(categoryIndex[6]).runOnJS, setUnicodeShortcutVisible: tmp[1] });
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  const items = [categoryIndex, category, onPress];
  let tmp9 = null;
  const tmp7 = closure_8();
  if (unicodeShortcutVisible) {
    const PressableOpacity = tmp4(tmp5[8]).PressableOpacity;
    const intl = tmp4(tmp5[9]).intl;
    const items1 = [, ];
    ({ itemInner: arr2[0], fadedItemOpacity: arr2[1] } = tmp7);
    tmp9 = <PressableOpacity style={style} onPress={tmp8} accessibilityRole="button" accessibilityLabel={intl.string(tmp4(tmp5[9]).t.gg3lOG)}>{null}</PressableOpacity>;
  }
  return tmp9;
};
