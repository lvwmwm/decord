// Module ID: 15772
// Function ID: 120601
// Name: AnimatedChild
// Dependencies: []

// Module 15772 (AnimatedChild)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const importAllResult = importAll(dependencyMap[2]);
const StyleSheet = arg1(dependencyMap[3]).StyleSheet;
const View = arg1(dependencyMap[3]).View;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let closure_9 = { code: "function pnpm_indexTsx1(){const{index,textWidth,spacing,anim}=this.__closure;return{position:'absolute',left:index*(textWidth.value+spacing),transform:[{translateX:-(anim.value%(textWidth.value+spacing))}]};}" };
function AnimatedChild(children) {
  const index = children.index;
  const arg1 = index;
  const anim = children.anim;
  const importDefault = anim;
  const textWidth = children.textWidth;
  const dependencyMap = textWidth;
  const spacing = children.spacing;
  let closure_3 = spacing;
  /* worklet (recovered source) */ function pnpm_indexTsx1(){const{index,textWidth,spacing,anim}=this.__closure;return{position:'absolute',left:index*(textWidth.value+spacing),transform:[{translateX:-(anim.value%(textWidth.value+spacing))}]};}
  pnpm_indexTsx1.__closure = { index, textWidth, spacing, anim };
  pnpm_indexTsx1.__workletHash = 9107973864402;
  pnpm_indexTsx1.__initData = closure_9;
  const items = [index, spacing, textWidth];
  const style = arg1(dependencyMap[5]).useAnimatedStyle(pnpm_indexTsx1, items);
  return callback3(importDefault(dependencyMap[5]).View, { style, children: children.children });
}
let closure_11 = { code: "function pnpm_indexTsx2(){const{anim,speed}=this.__closure;anim.value+=speed;}" };
let closure_12 = { code: "function pnpm_indexTsx3(){const{textWidth,parentWidth}=this.__closure;if(textWidth.value===0||parentWidth.value===0){return 0;}return Math.round(parentWidth.value/textWidth.value)+1;}" };
let closure_13 = { code: "function pnpm_indexTsx4(v){const{runOnJS,setCloneTimes}=this.__closure;if(v===0){return;}runOnJS(setCloneTimes)(v*2);}" };
const tmp2 = arg1(dependencyMap[4]);
const styles = StyleSheet.create({ hidden: { "Bool(true)": 1358954834, "Bool(true)": -1891485869 }, row: {} });

export const Marquee = importAllResult.memo((speed) => {
  let tmp4;
  let tmp5;
  speed = speed.speed;
  let num = 1;
  if (undefined !== speed) {
    num = speed;
  }
  const arg1 = num;
  const children = speed.children;
  const importDefault = children;
  const spacing = speed.spacing;
  let num2 = 0;
  if (undefined !== spacing) {
    num2 = spacing;
  }
  const dependencyMap = num2;
  let obj = arg1(dependencyMap[5]);
  const sharedValue = obj.useSharedValue(0);
  const callback = sharedValue;
  let obj1 = arg1(dependencyMap[5]);
  const sharedValue1 = obj1.useSharedValue(0);
  const callback2 = sharedValue1;
  [tmp4, tmp5] = callback2(importAllResult.useState(0), 2);
  let obj2 = arg1(dependencyMap[5]);
  const sharedValue2 = obj2.useSharedValue(0);
  const View = sharedValue2;
  let obj3 = arg1(dependencyMap[5]);
  /* worklet (recovered source) */ function pnpm_indexTsx2(){const{anim,speed}=this.__closure;anim.value+=speed;}
  obj = { anim: sharedValue2, speed: num };
  pnpm_indexTsx2.__closure = obj;
  pnpm_indexTsx2.__workletHash = 5612715942613;
  pnpm_indexTsx2.__initData = closure_11;
  obj3.useFrameCallback(pnpm_indexTsx2, true);
  const importAllResult = tmp5;
  const tmp3 = callback2(importAllResult.useState(0), 2);
  /* worklet (recovered source) */ function pnpm_indexTsx3(){const{textWidth,parentWidth}=this.__closure;if(textWidth.value===0||parentWidth.value===0){return 0;}return Math.round(parentWidth.value/textWidth.value)+1;}
  pnpm_indexTsx3.__closure = { textWidth: sharedValue1, parentWidth: sharedValue };
  pnpm_indexTsx3.__workletHash = 4132969599661;
  pnpm_indexTsx3.__initData = closure_12;
  /* worklet (recovered source) */ function pnpm_indexTsx4(v){const{runOnJS,setCloneTimes}=this.__closure;if(v===0){return;}runOnJS(setCloneTimes)(v*2);}
  obj = { runOnJS: arg1(dependencyMap[5]).runOnJS, setCloneTimes: tmp5 };
  pnpm_indexTsx4.__closure = obj;
  pnpm_indexTsx4.__workletHash = 8842395428122;
  pnpm_indexTsx4.__initData = closure_13;
  const animatedReaction = arg1(dependencyMap[5]).useAnimatedReaction(pnpm_indexTsx3, pnpm_indexTsx4, []);
  obj1 = {
    style: speed.style,
    onLayout(nativeEvent) {
      sharedValue.value = nativeEvent.nativeEvent.layout.width;
    },
    pointerEvents: "box-none"
  };
  obj2 = { style: closure_14.row, pointerEvents: "box-none" };
  obj3 = {
    969080836: "r",
    969146372: "`",
    156368900: "Array",
    style: closure_14.hidden,
    children: callback3(View, {
      onLayout(nativeEvent) {
        sharedValue1.value = nativeEvent.nativeEvent.layout.width;
      },
      children
    })
  };
  const items = [callback3(importDefault(dependencyMap[5]).ScrollView, obj3), ];
  let mapped = tmp4 > 0;
  if (mapped) {
    const _Array = Array;
    const ArrayResult = Array(tmp4);
    mapped = callback(Array(tmp4).keys()).map((index) => callback(closure_10, { index, anim: sharedValue2, textWidth: sharedValue1, spacing: num2, children }, "clone-" + index));
    const arr2 = callback(Array(tmp4).keys());
  }
  items[1] = mapped;
  obj2.children = items;
  obj1.children = closure_8(importDefault(dependencyMap[5]).View, obj2);
  return callback3(importDefault(dependencyMap[5]).View, obj1);
});
