// Module ID: 5704
// Function ID: 5705
// Name: BottomSheetBody
// Dependencies: [19, 17, 21, 1652, 5512, 5705]

// Module 5704 (BottomSheetBody)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react_native2 from "react-native" /* 5705 */;
import react_mod from "react" /* 19 */;

let c3;
let memo;
let react = react_mod;
({ useMemo: c3, memo } = react);
react = react_mod;
const Platform = react_native.Platform;
const jsx = Fragment.jsx;
let closure_6 = { code: "(function pnpm_BottomSheetBodyTsx1(){let[Platform,animatedIndex,animatedPosition]=this.__closure;return{opacity:Platform.OS==='android'&&animatedIndex.get()===-1?0:1,transform:[{translateY:animatedPosition.get()}]};})" };
const memoResult = memo(function BottomSheetBodyComponent(style) {
  let animatedIndex;
  let animatedPosition;
  let animatedStyle;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  style = style.style;
  let View = style.BodyComponent;
  const children = style.children;
  if (View === undefined) {
    View = animatedStyle(1652).View;
  }
  let obj = style(5512);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  ({ animatedIndex, animatedPosition } = bottomSheetInternal);
  const obj2 = style(1652);
  let items = [closure_6, Platform, animatedIndex, animatedPosition];
  let c0;
  let c1;
  let c2;
  [tmp4, tmp5, tmp6, tmp7] = items;
  function pnpm_BottomSheetBodyTsx1() {
    let items;
    let num = 1;
    if ("android" === _undefined.OS) {
      num = 1;
      if (-1 === _undefined2.get()) {
        num = 0;
      }
    }
    const obj = { opacity: num, transform: items };
    items = [{ translateY: _undefined3.get() }];
    ({ translateY: _undefined3.get() });
    return obj;
  }
  const items1 = [tmp5, tmp6, tmp7];
  pnpm_BottomSheetBodyTsx1.__closure = items1;
  pnpm_BottomSheetBodyTsx1.__workletHash = 9021942799135;
  pnpm_BottomSheetBodyTsx1.__initData = tmp4;
  const items2 = [animatedPosition, animatedIndex];
  animatedStyle = obj2.useAnimatedStyle(pnpm_BottomSheetBodyTsx1, items2);
  const items3 = [style, animatedStyle];
  return <View style={closure_3(() => {
    const items = [style, react_native2.styles.container, animatedStyle];
    return items;
  }, items3)} collapsable>{children}</View>;
});
memoResult.displayName = "BottomSheetBody";

export const BottomSheetBody = memoResult;
