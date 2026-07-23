// Module ID: 9422
// Function ID: 73330
// Name: NODE_SIZE
// Dependencies: [57, 31, 27, 653, 33, 4130, 3991, 9423, 4660, 1212, 9408, 2]
// Exports: default

// Module 9422 (NODE_SIZE)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import ME from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let NODE_SIZE;
let closure_6;
const require = arg1;
({ EXPRESSION_FOOTER_HEIGHT: closure_6, NODE_SIZE } = ME);
_createForOfIteratorHelperLoose = { justifyContent: "center", alignItems: "center", height: NODE_SIZE, width: NODE_SIZE, borderRadius: NODE_SIZE / 2 };
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ itemInner: _createForOfIteratorHelperLoose, fadedItemOpacity: { opacity: 0.5 } });
let closure_9 = { code: "function EmojiPickerCategoriesUnicodeShortcutItemTsx1(){const{blockRef}=this.__closure;return blockRef.get();}" };
let closure_10 = { code: "function EmojiPickerCategoriesUnicodeShortcutItemTsx2(blockRef,previous){const{cheapWorkletShallowEqual,categoryIndex,EXPRESSION_FOOTER_HEIGHT,unicodeShortcutVisible,runOnJS,setUnicodeShortcutVisible}=this.__closure;if(blockRef==null||cheapWorkletShallowEqual(blockRef,previous!==null&&previous!==void 0?previous:undefined)){return;}const categoryScrollPos=categoryIndex*EXPRESSION_FOOTER_HEIGHT;const categoryUnicodeShortcutVisible=categoryScrollPos>blockRef.end-(unicodeShortcutVisible?0:EXPRESSION_FOOTER_HEIGHT);runOnJS(setUnicodeShortcutVisible)(categoryUnicodeShortcutVisible);}" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoriesUnicodeShortcutItem.tsx");

export default function EmojiPickerCategoriesUnicodeShortcutItem(blockRef) {
  blockRef = blockRef.blockRef;
  const category = blockRef.category;
  const categoryIndex = blockRef.categoryIndex;
  const onPress = blockRef.onPress;
  let tmp = onPress(first.useState(false), 2);
  first = tmp[0];
  const View = tmp3;
  let obj = blockRef(categoryIndex[6]);
  const fn = function f() {
    return blockRef.get();
  };
  fn.__closure = { blockRef };
  fn.__workletHash = 805688584630;
  fn.__initData = closure_9;
  const fn2 = function b(end, safeAreaState2) {
    if (null != end) {
      let tmp;
      if (null != safeAreaState2) {
        tmp = safeAreaState2;
      }
      if (!obj2.cheapWorkletShallowEqual(end, tmp)) {
        let num = 0;
        const result = categoryIndex * outer1_6;
        if (!first) {
          num = outer1_6;
        }
        const diff = end.end - num;
        blockRef(categoryIndex[6]).runOnJS(closure_5)(result > diff);
        const obj = blockRef(categoryIndex[6]);
      }
      obj2 = blockRef(categoryIndex[7]);
    }
  };
  obj = { cheapWorkletShallowEqual: blockRef(categoryIndex[7]).cheapWorkletShallowEqual, categoryIndex, EXPRESSION_FOOTER_HEIGHT: closure_6, unicodeShortcutVisible: first, runOnJS: blockRef(categoryIndex[6]).runOnJS, setUnicodeShortcutVisible: tmp3 };
  fn2.__closure = obj;
  fn2.__workletHash = 4994136030029;
  fn2.__initData = closure_10;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  const items = [categoryIndex, category, onPress];
  let tmp7 = null;
  if (first) {
    obj = { style: blockRef.style, onPress: tmp6, accessibilityRole: "button" };
    const intl = blockRef(categoryIndex[9]).intl;
    obj.accessibilityLabel = intl.string(blockRef(categoryIndex[9]).t.gg3lOG);
    const obj1 = {};
    const items1 = [, ];
    ({ itemInner: arr2[0], fadedItemOpacity: arr2[1] } = tmp5);
    obj1.style = items1;
    let obj2 = { id: category.id };
    obj1.children = jsx(category(categoryIndex[10]), { id: category.id });
    obj.children = <View />;
    tmp7 = jsx(blockRef(categoryIndex[8]).PressableOpacity, { style: blockRef.style, onPress: tmp6, accessibilityRole: "button" });
  }
  return tmp7;
};
