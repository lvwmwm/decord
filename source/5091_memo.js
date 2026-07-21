// Module ID: 5091
// Function ID: 43445
// Name: memo
// Dependencies: []

// Module 5091 (memo)
let memo;
const _module = require(dependencyMap[0]);
({ useMemo: closure_3, memo } = _module);
importDefault(dependencyMap[0]);
const Platform = require(dependencyMap[1]).Platform;
const jsx = require(dependencyMap[2]).jsx;
let closure_6 = { code: "function pnpm_BottomSheetBodyTsx1(){const{Platform,animatedIndex,animatedPosition}=this.__closure;return{opacity:Platform.OS==='android'&&animatedIndex.get()===-1?0:1,transform:[{translateY:animatedPosition.get()}]};}" };
const memoResult = memo(function BottomSheetBodyComponent(children) {
  const style = children.style;
  const require = style;
  let View = children.BodyComponent;
  if (undefined === View) {
    View = importDefault(dependencyMap[3]).View;
  }
  let obj = require(dependencyMap[4]);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  const animatedIndex = bottomSheetInternal.animatedIndex;
  const importDefault = animatedIndex;
  const animatedPosition = bottomSheetInternal.animatedPosition;
  const dependencyMap = animatedPosition;
  /* worklet (recovered source) */ function pnpm_BottomSheetBodyTsx1(){const{Platform,animatedIndex,animatedPosition}=this.__closure;return{opacity:Platform.OS==='android'&&animatedIndex.get()===-1?0:1,transform:[{translateY:animatedPosition.get()}]};}
  obj = { Platform, animatedIndex, animatedPosition };
  pnpm_BottomSheetBodyTsx1.__closure = obj;
  pnpm_BottomSheetBodyTsx1.__workletHash = 5915282482182;
  pnpm_BottomSheetBodyTsx1.__initData = closure_6;
  const items = [animatedPosition, animatedIndex];
  const animatedStyle = require(dependencyMap[3]).useAnimatedStyle(pnpm_BottomSheetBodyTsx1, items);
  const items1 = [style, animatedStyle];
  obj = {
    style: animatedStyle(() => {
      const items = [style, style(animatedPosition[5]).styles.container, animatedStyle];
      return items;
    }, items1),
    collapsable: true,
    children: children.children
  };
  return <View {...obj} />;
});
memoResult.displayName = "BottomSheetBody";

export const BottomSheetBody = memoResult;
