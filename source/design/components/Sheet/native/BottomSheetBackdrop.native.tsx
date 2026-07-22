// Module ID: 5444
// Function ID: 46557
// Name: BottomSheetBackdrop
// Dependencies: []

// Module 5444 (BottomSheetBackdrop)
const importAllResult = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let closure_4 = arg1(dependencyMap[2]).createStyles({ container: { flex: 1 } });
let closure_5 = { code: "function BottomSheetBackdropNativeTsx1(){const{runOnJS,handleOnPress}=this.__closure;runOnJS(handleOnPress)();}" };
let closure_6 = { code: "function BottomSheetBackdropNativeTsx2(){const{interpolate,animatedIndex,disappearsOnIndex,appearsOnIndex,opacity}=this.__closure;return{opacity:interpolate(animatedIndex.get(),[-1,disappearsOnIndex,appearsOnIndex],[0,0,opacity])};}" };
const obj2 = arg1(dependencyMap[2]);
const memoResult = importAllResult.memo((animatedIndex) => {
  animatedIndex = animatedIndex.animatedIndex;
  const arg1 = animatedIndex;
  let num = animatedIndex.opacity;
  if (num === undefined) {
    num = 1;
  }
  const dependencyMap = num;
  let num2 = animatedIndex.appearsOnIndex;
  if (num2 === undefined) {
    num2 = 0;
  }
  let num3 = animatedIndex.disappearsOnIndex;
  if (num3 === undefined) {
    num3 = -1;
  }
  const jsx = num3;
  let str = animatedIndex.pressBehavior;
  if (str === undefined) {
    str = "close";
  }
  let callback = str;
  const onPress = animatedIndex.onPress;
  let closure_5 = onPress;
  const style = animatedIndex.style;
  let closure_6 = style;
  let tmp;
  let snapToIndex;
  let close;
  callback = undefined;
  let animatedStyle;
  tmp = callback();
  let obj = arg1(dependencyMap[3]);
  const bottomSheet = obj.useBottomSheet();
  snapToIndex = bottomSheet.snapToIndex;
  close = bottomSheet.close;
  const items = [snapToIndex, close, num3, str, onPress];
  callback = importAllResult.useCallback(() => {
    if (null != onPress) {
      onPress();
    }
    if ("close" === str) {
      close();
    } else if ("collapse" === "collapse") {
      snapToIndex(num3);
    } else if ("number" === typeof str) {
      snapToIndex(str);
    }
  }, items);
  const Gesture = arg1(dependencyMap[4]).Gesture;
  class I {
    constructor() {
      obj = animatedIndex(closure_1[5]);
      tmp = obj.runOnJS(useCallback)();
      return;
    }
  }
  obj = { runOnJS: arg1(dependencyMap[5]).runOnJS, handleOnPress: callback };
  I.__closure = obj;
  I.__workletHash = 3995467602852;
  I.__initData = closure_5;
  const TapResult = Gesture.Tap();
  const onEndResult = Gesture.Tap().onEnd(I);
  class S {
    constructor() {
      obj = {};
      obj2 = animatedIndex(closure_1[5]);
      items = [, , ];
      items[0] = -1;
      items[1] = closure_3;
      items[2] = closure_2;
      items1 = ["placeholder", "aria-label"];
      items1[2] = closure_1;
      obj.opacity = obj2.interpolate(animatedIndex.get(), items, items1);
      return obj;
    }
  }
  obj = { interpolate: arg1(dependencyMap[5]).interpolate, animatedIndex, disappearsOnIndex: num3, appearsOnIndex: num2, opacity: num };
  S.__closure = obj;
  S.__workletHash = 1140766381376;
  S.__initData = closure_6;
  animatedStyle = arg1(dependencyMap[5]).useAnimatedStyle(S);
  const items1 = [tmp.container, style, animatedStyle];
  const memo = importAllResult.useMemo(() => {
    const items = [tmp.container, style, animatedStyle];
    return items;
  }, items1);
  const tmp7 = jsx(arg1(dependencyMap[6]).Backdrop, { blur: "none", style: memo, onDismiss: callback, aria-hidden: true });
  let tmp8 = tmp7;
  if ("none" !== str) {
    const obj1 = { gesture: onEndResult, children: tmp7 };
    tmp8 = jsx(arg1(dependencyMap[4]).GestureDetector, obj1);
  }
  return tmp8;
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("design/components/Sheet/native/BottomSheetBackdrop.native.tsx");

export const BottomSheetBackdrop = memoResult;
