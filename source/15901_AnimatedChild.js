// Module ID: 15901
// Function ID: 122861
// Name: AnimatedChild
// Dependencies: [65, 57, 31, 27, 33, 1582]

// Module 15901 (AnimatedChild)
import _toConsumableArray from "_toConsumableArray";
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { StyleSheet } from "get ActivityIndicator";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = { code: "function pnpm_indexTsx1(){const{index,textWidth,spacing,anim}=this.__closure;return{position:'absolute',left:index*(textWidth.value+spacing),transform:[{translateX:-(anim.value%(textWidth.value+spacing))}]};}" };
function AnimatedChild(children) {
  const index = children.index;
  const anim = children.anim;
  const textWidth = children.textWidth;
  const spacing = children.spacing;
  /* worklet (recovered source) */ function pnpm_indexTsx1(){const{index,textWidth,spacing,anim}=this.__closure;return{position:'absolute',left:index*(textWidth.value+spacing),transform:[{translateX:-(anim.value%(textWidth.value+spacing))}]};}
  pnpm_indexTsx1.__closure = { index, textWidth, spacing, anim };
  pnpm_indexTsx1.__workletHash = 9107973864402;
  pnpm_indexTsx1.__initData = closure_9;
  let items = [index, spacing, textWidth];
  const style = index(textWidth[5]).useAnimatedStyle(pnpm_indexTsx1, items);
  return callback(anim(textWidth[5]).View, { style, children: children.children });
}
let closure_11 = { code: "function pnpm_indexTsx2(){const{anim,speed}=this.__closure;anim.value+=speed;}" };
let closure_12 = { code: "function pnpm_indexTsx3(){const{textWidth,parentWidth}=this.__closure;if(textWidth.value===0||parentWidth.value===0){return 0;}return Math.round(parentWidth.value/textWidth.value)+1;}" };
let closure_13 = { code: "function pnpm_indexTsx4(v){const{runOnJS,setCloneTimes}=this.__closure;if(v===0){return;}runOnJS(setCloneTimes)(v*2);}" };
const styles = StyleSheet.create({ hidden: { opacity: 0, zIndex: -9999 }, row: { flexDirection: "row", overflow: "hidden" } });

export const Marquee = importAllResult.memo((speed) => {
  let tmp4;
  let tmp5;
  speed = speed.speed;
  let num = 1;
  if (undefined !== speed) {
    num = speed;
  }
  const children = speed.children;
  const spacing = speed.spacing;
  let num2 = 0;
  if (undefined !== spacing) {
    num2 = spacing;
  }
  let obj = num(num2[5]);
  const sharedValue = obj.useSharedValue(0);
  let obj1 = num(num2[5]);
  const sharedValue1 = obj1.useSharedValue(0);
  [tmp4, tmp5] = sharedValue1(importAllResult.useState(0), 2);
  let obj2 = num(num2[5]);
  const sharedValue2 = obj2.useSharedValue(0);
  let obj3 = num(num2[5]);
  /* worklet (recovered source) */ function pnpm_indexTsx2(){const{anim,speed}=this.__closure;anim.value+=speed;}
  obj = { anim: sharedValue2, speed: num };
  pnpm_indexTsx2.__closure = obj;
  pnpm_indexTsx2.__workletHash = 5612715942613;
  pnpm_indexTsx2.__initData = closure_11;
  obj3.useFrameCallback(pnpm_indexTsx2, true);
  importAllResult = tmp5;
  const tmp3 = sharedValue1(importAllResult.useState(0), 2);
  /* worklet (recovered source) */ function pnpm_indexTsx3(){const{textWidth,parentWidth}=this.__closure;if(textWidth.value===0||parentWidth.value===0){return 0;}return Math.round(parentWidth.value/textWidth.value)+1;}
  pnpm_indexTsx3.__closure = { textWidth: sharedValue1, parentWidth: sharedValue };
  pnpm_indexTsx3.__workletHash = 4132969599661;
  pnpm_indexTsx3.__initData = closure_12;
  /* worklet (recovered source) */ function pnpm_indexTsx4(v){const{runOnJS,setCloneTimes}=this.__closure;if(v===0){return;}runOnJS(setCloneTimes)(v*2);}
  obj = { runOnJS: num(num2[5]).runOnJS, setCloneTimes: tmp5 };
  pnpm_indexTsx4.__closure = obj;
  pnpm_indexTsx4.__workletHash = 8842395428122;
  pnpm_indexTsx4.__initData = closure_13;
  const animatedReaction = num(num2[5]).useAnimatedReaction(pnpm_indexTsx3, pnpm_indexTsx4, []);
  obj1 = {
    style: speed.style,
    onLayout(nativeEvent) {
      sharedValue.value = nativeEvent.nativeEvent.layout.width;
    },
    pointerEvents: "box-none"
  };
  obj2 = { style: closure_14.row, pointerEvents: "box-none" };
  obj3 = {
    horizontal: true,
    style: closure_14.hidden,
    pointerEvents: "box-none",
    children: callback(sharedValue2, {
      onLayout(nativeEvent) {
        sharedValue1.value = nativeEvent.nativeEvent.layout.width;
      },
      children
    })
  };
  const items = [callback(children(num2[5]).ScrollView, obj3), ];
  let mapped = tmp4 > 0;
  if (mapped) {
    const _Array = Array;
    const ArrayResult = Array(tmp4);
    mapped = sharedValue(Array(tmp4).keys()).map((index) => outer1_7(outer1_10, { index, anim: sharedValue2, textWidth: sharedValue1, spacing: num2, children }, "clone-" + index));
    const arr2 = sharedValue(Array(tmp4).keys());
  }
  items[1] = mapped;
  obj2.children = items;
  obj1.children = closure_8(children(num2[5]).View, obj2);
  return callback(children(num2[5]).View, obj1);
});
