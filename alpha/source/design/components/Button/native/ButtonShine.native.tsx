// Module ID: 5770
// Function ID: 5771
// Name: ButtonShine
// Dependencies: [32, 19, 21, 5765, 671, 5147, 1652, 5370, 5140, 2]
// Exports: ButtonShine

// Module 5770 (ButtonShine)
import Fragment from "Fragment" /* 21 */;
import _modDef671 from "module_671" /* 671 */;
import _mod1652 from "module_1652" /* 1652 */;
import shared from "shared" /* 5147 */;
import timing_timing from "timing/timing" /* 5370 */;
import ButtonHooks from "ButtonHooks" /* 5765 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const _modDef1652 = _mod1652;
let num, num2, obj1, obj6, obj7, obj8, str, tmp3, tmp4, tmp5;

let tmp;
const createStyles = tmp(5140);
function useShineEffectStyles(arg0, variant) {
  let animatedStyle;
  let items2;
  let obj4;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let tmpResult;
  let obj = ButtonHooks;
  const buttonTextColorStyles = obj.useButtonTextColorStyles(variant);
  let obj2 = _modDef671(buttonTextColorStyles.color);
  const alphaResult = obj2.alpha(0.1);
  const hexResult = alphaResult.hex();
  const enabled = react.useContext(shared.AccessibilityPreferencesContext).reducedMotion.enabled;
  let items = [closure_6, arg0, 120, enabled, 56, , , , , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  items[5] = _mod1652.withRepeat;
  items[6] = _mod1652.withSequence;
  items[7] = timing_timing.withTiming;
  items[8] = _mod1652.withDelay;
  items[9] = 750;
  items[10] = 2000;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items;
  class ButtonShineNativeTsx1 {
    constructor() {
      tmp = closure_0;
      if (null == closure_0) {
        obj1 = { transform: null };
        obj6 = { translateX: null };
        tmp12 = closure_1;
        obj6.translateX = -closure_1;
        items = [];
        items[0] = obj6;
        obj1.transform = items;
        tmp10 = obj1;
      } else {
        tmp13 = closure_2;
        obj7 = { transform: null };
        obj8 = { translateX: null };
        if (closure_2) {
          tmp11 = closure_3;
          num2 = 2;
          obj8.translateX = (tmp - closure_3) / 2;
          items1 = [];
          items1[0] = obj8;
          obj7.transform = items1;
          tmp10 = obj7;
        } else {
          tmp2 = closure_4;
          tmp3 = closure_5;
          tmp4 = closure_6;
          tmp5 = closure_1;
          str = "animate-always";
          tmp7 = closure_7;
          tmp8 = closure_8;
          obj = { duration: null };
          tmp9 = closure_9;
          obj.duration = closure_9;
          tmp6 = closure_6(-closure_1, { duration: 0 }, "animate-always");
          num = -1;
          obj8.translateX = closure_4(closure_5(tmp6, closure_7(closure_8, closure_6(tmp + closure_1, obj, "animate-always"))), -1);
          items2 = [];
          items2[0] = obj8;
          obj7.transform = items2;
          tmp10 = obj7;
        }
      }
      return tmp10;
    }
  }
  let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
  ButtonShineNativeTsx1.__closure = items1;
  ButtonShineNativeTsx1.__workletHash = 2724629163487;
  ButtonShineNativeTsx1.__initData = tmp6;
  let obj3 = { shineStyles: tmpResult.createStyles(obj4)(), shineAnimatedStyle: animatedStyle };
  animatedStyle = useAnimatedStyle(ButtonShineNativeTsx1);
  obj4 = { shineContainer: { width: "100%", height: "200%", position: "absolute", overflow: "hidden" }, shine: size, shineInner: { width: 16, height: "100%", backgroundColor: hexResult } };
  size = { width: 56, height: "500%", transform: items2, backgroundColor: hexResult, top: "-100%", alignItems: "center" };
  items2 = [{ rotate: "30deg" }];
  tmpResult = createStyles;
  return obj3;
}
const jsx = Fragment.jsx;
let closure_6 = { code: "(function ButtonShineNativeTsx1(){let[width,SHINE_OFFSCREEN_OFFSET,useReducedMotion,SHINE_WIDTH,withRepeat,withSequence,withTiming,withDelay,SHINE_INITIAL_ANIMATION_DELAY,SHINE_ANIMATION_DURATION]=this.__closure;if(width==null){return{transform:[{translateX:-SHINE_OFFSCREEN_OFFSET}]};}if(useReducedMotion){const centerOffset=(width-SHINE_WIDTH)/2;return{transform:[{translateX:centerOffset}]};}return{transform:[{translateX:withRepeat(withSequence(withTiming(-SHINE_OFFSCREEN_OFFSET,{duration:0},'animate-always'),withDelay(SHINE_INITIAL_ANIMATION_DELAY,withTiming(width+SHINE_OFFSCREEN_OFFSET,{duration:SHINE_ANIMATION_DURATION},'animate-always'))),-1)}]};})" };
let size = size_mod;
const result = size.fileFinishedImporting("design/components/Button/native/ButtonShine.native.tsx");

export { useShineEffectStyles };
export function ButtonShine(variant) {
  variant = variant.variant;
  const tmp = _slicedToArray(react.useState(null), 2);
  let closure_0 = tmp[1];
  const tmp2 = useShineEffectStyles(tmp[0], variant);
  const shineStyles = tmp2.shineStyles;
  const items = [shineStyles.shineContainer, tmp2.shineAnimatedStyle];
  const View = _modDef1652.View;
  const View2 = _modDef1652.View;
  return <View onLayout={function onLayout(nativeEvent) {
    return closure_0(nativeEvent.nativeEvent.layout.width);
  }} style={items}>{null}</View>;
}
