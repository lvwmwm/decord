// Module ID: 19630
// Function ID: 19631
// Name: Marquee
// Dependencies: [32, 19, 17, 21, 1652]

// Module 19630 (Marquee)
import react_native from "react-native" /* 17 */;
import _mod1652 from "module_1652" /* 1652 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;

const _modDef1652 = _mod1652;

let metroImportDefault;
let metroRequire;
const StyleSheet = react_native.StyleSheet;
let View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = { code: "(function pnpm_indexTsx1(){let[index,textWidth,spacing,anim]=this.__closure;return{position:'absolute',left:index*(textWidth.value+spacing),transform:[{translateX:-(anim.value%(textWidth.value+spacing))}]};})" };
function AnimatedChild(arg0) {
  let anim;
  let children;
  let index;
  let spacing;
  let textWidth;
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  ({ index, textWidth, spacing } = arg0);
  ({ children, anim } = arg0);
  let obj = _mod1652;
  let items = [closure_8, index, textWidth, spacing, anim];
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp2, tmp3, tmp4, tmp5, tmp6] = items;
  function pnpm_indexTsx1() {
    let items;
    const obj = { position: "absolute", left: c0 * (_undefined.value + c2), transform: items };
    items = [];
    const obj2 = { translateX: -_undefined2.value % (_undefined.value + c2) };
    items[0] = obj2;
    return obj;
  }
  const items1 = [tmp3, tmp4, tmp5, tmp6];
  pnpm_indexTsx1.__closure = items1;
  pnpm_indexTsx1.__workletHash = 15509259112427;
  pnpm_indexTsx1.__initData = tmp2;
  const items2 = [index, spacing, textWidth];
  const style = obj.useAnimatedStyle(pnpm_indexTsx1, items2);
  return metroRequire(_modDef1652.View, { style, children });
}
let closure_10 = { code: "(function pnpm_indexTsx2(){let[anim,speed]=this.__closure;anim.value+=speed;})" };
let closure_11 = { code: "(function pnpm_indexTsx3(){let[textWidth,parentWidth]=this.__closure;if(textWidth.value===0||parentWidth.value===0){return 0;}return Math.round(parentWidth.value/textWidth.value)+1;})" };
let closure_12 = { code: "(function pnpm_indexTsx4(v){let[runOnJS,setCloneTimes]=this.__closure;if(v===0){return;}runOnJS(setCloneTimes)(v*2);})" };
const memoResult = react.memo((speed) => {
  let View2;
  let items6;
  let obj6;
  let obj8;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp23;
  let tmp7;
  let tmp8;
  let num = speed.speed;
  if (num === undefined) {
    num = 1;
  }
  const children = speed.children;
  let num2 = speed.spacing;
  if (num2 === undefined) {
    num2 = 0;
  }
  let sharedValue;
  let sharedValue2;
  const style = speed.style;
  let obj = children(sharedValue[4]);
  sharedValue = obj.useSharedValue(0);
  const obj2 = children(sharedValue[4]);
  const sharedValue1 = obj2.useSharedValue(0);
  [tmp7, tmp8] = sharedValue1(sharedValue2.useState(0), 2);
  sharedValue1(sharedValue2.useState(0), 2);
  const obj3 = children(sharedValue[4]);
  sharedValue2 = obj3.useSharedValue(0);
  const items = [closure_10, sharedValue2, num];
  [tmp10, tmp11, tmp12] = items;
  function pnpm_indexTsx2() {
    _undefined.value = _undefined.value + c1;
  }
  const items1 = [tmp11, tmp12];
  pnpm_indexTsx2.__closure = items1;
  pnpm_indexTsx2.__workletHash = 2177332576652;
  pnpm_indexTsx2.__initData = tmp10;
  const obj4 = children(sharedValue[4]);
  obj4.useFrameCallback(pnpm_indexTsx2, true);
  const items2 = [closure_11, sharedValue1, sharedValue];
  [tmp15, tmp16, tmp17] = items2;
  function pnpm_indexTsx3() {
    let num = 0;
    if (0 !== _undefined.value) {
      num = 0;
      if (0 !== _undefined2.value) {
        const _Math = Math;
        num = Math.round(iter2.value / iter.value) + 1;
      }
    }
    return num;
  }
  const items3 = [tmp16, tmp17];
  pnpm_indexTsx3.__closure = items3;
  pnpm_indexTsx3.__workletHash = 1231095151188;
  pnpm_indexTsx3.__initData = tmp15;
  const items4 = [closure_12, , ];
  const useAnimatedReaction = tmp2(tmp3[4]).useAnimatedReaction;
  children(sharedValue[4]);
  items4[1] = children(sharedValue[4]).runOnJS;
  items4[2] = tmp8;
  let c0;
  let c1;
  [tmp18, tmp19, tmp20] = items4;
  function pnpm_indexTsx4(arg0) {
    if (0 !== arg0) {
      _undefined(c1)(2 * arg0);
    }
  }
  const items5 = [tmp19, tmp20];
  pnpm_indexTsx4.__closure = items5;
  pnpm_indexTsx4.__workletHash = 8115678716387;
  pnpm_indexTsx4.__initData = tmp18;
  const animatedReaction = useAnimatedReaction(pnpm_indexTsx3, pnpm_indexTsx4, []);
  const obj5 = {
    style,
    onLayout(nativeEvent) {
      sharedValue.value = nativeEvent.nativeEvent.layout.width;
    },
    pointerEvents: "box-none",
    children: tmp23(View2, obj6)
  };
  View = num2(tmp3[4]).View;
  obj6 = { style: closure_13.row, pointerEvents: "box-none", children: items6 };
  View2 = num2(tmp3[4]).View;
  const obj7 = { horizontal: true, style: closure_13.hidden, pointerEvents: "box-none", children: closure_6(View, obj8) };
  obj8 = {
    onLayout(nativeEvent) {
      sharedValue1.value = nativeEvent.nativeEvent.layout.width;
    },
    children
  };
  const ScrollView = num2(tmp3[4]).ScrollView;
  items6 = [closure_6(ScrollView, obj7), ];
  let mapped = tmp7 > 0;
  const tmp22 = closure_6;
  tmp23 = closure_7;
  if (mapped) {
    const _Array = Array;
    const items7 = [];
    const ArrayResult = Array(tmp7);
    HermesBuiltin.arraySpread(items7, ArrayResult.keys(), 0);
    mapped = items7.map((item) => {
      const obj = { index: item, anim: sharedValue2, textWidth: sharedValue1, spacing: num2, children };
      return metroRequire(AnimatedChild, obj, "clone-" + item);
    });
  }
  items6[1] = mapped;
  return tmp22(View, obj5);
});
const styles = StyleSheet.create({ hidden: { opacity: 0, zIndex: -9999 }, row: { flexDirection: "row", overflow: "hidden" } });

export const Marquee = memoResult;
