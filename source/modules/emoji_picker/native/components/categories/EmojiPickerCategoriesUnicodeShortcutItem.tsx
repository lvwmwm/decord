// Module ID: 9414
// Function ID: 73265
// Name: NODE_SIZE
// Dependencies: []
// Exports: default

// Module 9414 (NODE_SIZE)
let NODE_SIZE;
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ EXPRESSION_FOOTER_HEIGHT: closure_6, NODE_SIZE } = arg1(dependencyMap[3]));
const jsx = arg1(dependencyMap[4]).jsx;
let obj = arg1(dependencyMap[5]);
obj = { "Null": null, "Null": null, height: NODE_SIZE, width: NODE_SIZE, borderRadius: NODE_SIZE / 2 };
let closure_8 = obj.createStyles({ itemInner: obj, fadedItemOpacity: { opacity: 0.5 } });
let closure_9 = { code: "function EmojiPickerCategoriesUnicodeShortcutItemTsx1(){const{blockRef}=this.__closure;return blockRef.get();}" };
let closure_10 = { code: "function EmojiPickerCategoriesUnicodeShortcutItemTsx2(blockRef,previous){const{cheapWorkletShallowEqual,categoryIndex,EXPRESSION_FOOTER_HEIGHT,unicodeShortcutVisible,runOnJS,setUnicodeShortcutVisible}=this.__closure;if(blockRef==null||cheapWorkletShallowEqual(blockRef,previous!==null&&previous!==void 0?previous:undefined)){return;}const categoryScrollPos=categoryIndex*EXPRESSION_FOOTER_HEIGHT;const categoryUnicodeShortcutVisible=categoryScrollPos>blockRef.end-(unicodeShortcutVisible?0:EXPRESSION_FOOTER_HEIGHT);runOnJS(setUnicodeShortcutVisible)(categoryUnicodeShortcutVisible);}" };
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoriesUnicodeShortcutItem.tsx");

export default function EmojiPickerCategoriesUnicodeShortcutItem(blockRef) {
  blockRef = blockRef.blockRef;
  const arg1 = blockRef;
  const category = blockRef.category;
  const importDefault = category;
  const categoryIndex = blockRef.categoryIndex;
  const dependencyMap = categoryIndex;
  const onPress = blockRef.onPress;
  const callback = onPress;
  const tmp = callback(React.useState(false), 2);
  const first = tmp[0];
  const React = first;
  const View = tmp3;
  let obj = arg1(dependencyMap[6]);
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
        const result = categoryIndex * closure_6;
        if (!first) {
          num = closure_6;
        }
        const diff = end.end - num;
        blockRef(categoryIndex[6]).runOnJS(closure_6)(result > diff);
        const obj = blockRef(categoryIndex[6]);
      }
      const obj2 = blockRef(categoryIndex[7]);
    }
  };
  obj = { cheapWorkletShallowEqual: arg1(dependencyMap[7]).cheapWorkletShallowEqual, categoryIndex, EXPRESSION_FOOTER_HEIGHT: closure_6, unicodeShortcutVisible: first, runOnJS: arg1(dependencyMap[6]).runOnJS, setUnicodeShortcutVisible: tmp3 };
  fn2.__closure = obj;
  fn2.__workletHash = 4994136030029;
  fn2.__initData = closure_10;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  const items = [categoryIndex, category, onPress];
  let tmp7 = null;
  if (first) {
    obj = { style: blockRef.style, onPress: tmp6, accessibilityRole: "button" };
    const intl = arg1(dependencyMap[9]).intl;
    obj.accessibilityLabel = intl.string(arg1(dependencyMap[9]).t.gg3lOG);
    const obj1 = {};
    const items1 = [, ];
    ({ itemInner: arr2[0], fadedItemOpacity: arr2[1] } = tmp5);
    obj1.style = items1;
    const obj2 = { id: category.id };
    obj1.children = jsx(importDefault(dependencyMap[10]), obj2);
    obj.children = <View {...obj1} />;
    tmp7 = jsx(arg1(dependencyMap[8]).PressableOpacity, obj);
  }
  return tmp7;
};
