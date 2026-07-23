// Module ID: 5315
// Function ID: 45834
// Name: memo
// Dependencies: [31, 27, 33, 1582, 5194, 5316]

// Module 5315 (memo)
import result from "result";
import "result";
import { Platform } from "get ActivityIndicator";
import { jsx } from "jsxProd";

let closure_3;
let memo;
({ useMemo: closure_3, memo } = result);
let closure_6 = { code: "function pnpm_BottomSheetBodyTsx1(){const{Platform,animatedIndex,animatedPosition}=this.__closure;return{opacity:Platform.OS==='android'&&animatedIndex.get()===-1?0:1,transform:[{translateY:animatedPosition.get()}]};}" };
const memoResult = memo(function BottomSheetBodyComponent(children) {
  const style = children.style;
  let View = children.BodyComponent;
  if (undefined === View) {
    View = animatedIndex(animatedPosition[3]).View;
  }
  let obj = style(animatedPosition[4]);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  animatedIndex = bottomSheetInternal.animatedIndex;
  animatedPosition = bottomSheetInternal.animatedPosition;
  /* worklet (recovered source) */ function pnpm_BottomSheetBodyTsx1(){const{Platform,animatedIndex,animatedPosition}=this.__closure;return{opacity:Platform.OS==='android'&&animatedIndex.get()===-1?0:1,transform:[{translateY:animatedPosition.get()}]};}
  obj = { Platform, animatedIndex, animatedPosition };
  pnpm_BottomSheetBodyTsx1.__closure = obj;
  pnpm_BottomSheetBodyTsx1.__workletHash = 5915282482182;
  pnpm_BottomSheetBodyTsx1.__initData = closure_6;
  let items = [animatedPosition, animatedIndex];
  const animatedStyle = style(animatedPosition[3]).useAnimatedStyle(pnpm_BottomSheetBodyTsx1, items);
  const items1 = [style, animatedStyle];
  obj = {
    style: animatedStyle(() => {
      const items = [style, style(animatedPosition[5]).styles.container, animatedStyle];
      return items;
    }, items1),
    collapsable: true,
    children: children.children
  };
  return <View style={animatedStyle(() => {
    const items = [style, style(animatedPosition[5]).styles.container, animatedStyle];
    return items;
  }, items1)} collapsable>{arg0.children}</View>;
});
memoResult.displayName = "BottomSheetBody";

export const BottomSheetBody = memoResult;
