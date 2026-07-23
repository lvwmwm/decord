// Module ID: 4553
// Function ID: 39917
// Name: useShineEffectStyles
// Dependencies: [57, 31, 33, 4548, 666, 3976, 3991, 4131, 4130, 2]
// Exports: ButtonShine

// Module 4553 (useShineEffectStyles)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
function useShineEffectStyles(width, variant) {
  const _require = width;
  let obj = _require(4548);
  const buttonTextColorStyles = obj.useButtonTextColorStyles(variant);
  let obj1 = enabled(666)(buttonTextColorStyles.color);
  const hexResult = obj1.alpha(0.1).hex();
  enabled = React.useContext(_require(3976).AccessibilityPreferencesContext).reducedMotion.enabled;
  const alphaResult = obj1.alpha(0.1);
  const fn = function o() {
    if (null == width) {
      let obj = {};
      obj = { translateX: -120 };
      const items = [obj];
      obj.transform = items;
      let tmp5 = obj;
    } else {
      let obj1 = {};
      let obj2 = {};
      if (enabled) {
        obj2.translateX = (width - 56) / 2;
        const items1 = [obj2];
        obj1.transform = items1;
        tmp5 = obj1;
      } else {
        obj = width(outer1_2[6]);
        obj1 = width(outer1_2[6]);
        obj2 = width(outer1_2[7]);
        const obj3 = { duration: 0 };
        let obj4 = width(outer1_2[6]);
        const withTimingResult = obj2.withTiming(-120, obj3, "animate-always");
        obj4 = { duration: 2000 };
        obj2.translateX = obj.withRepeat(obj1.withSequence(withTimingResult, obj4.withDelay(750, width(outer1_2[7]).withTiming(width + 120, obj4, "animate-always"))), -1);
        const items2 = [obj2];
        obj1.transform = items2;
        tmp5 = obj1;
        const obj6 = width(outer1_2[7]);
      }
    }
    return tmp5;
  };
  obj = { width, SHINE_OFFSCREEN_OFFSET: 120, useReducedMotion: enabled, SHINE_WIDTH: 56, withRepeat: _require(3991).withRepeat, withSequence: _require(3991).withSequence, withTiming: _require(4131).withTiming, withDelay: _require(3991).withDelay, SHINE_INITIAL_ANIMATION_DELAY: 750, SHINE_ANIMATION_DURATION: 2000 };
  fn.__closure = obj;
  fn.__workletHash = 15814138938406;
  fn.__initData = closure_6;
  obj = {};
  const animatedStyle = _require(3991).useAnimatedStyle(fn);
  let obj4 = _require(3991);
  obj1 = { width: 56, height: "500%", transform: null, backgroundColor: null, top: "-100%", alignItems: "center" };
  let items = [{ rotate: "30deg" }];
  obj1.transform = items;
  obj1.backgroundColor = hexResult;
  let obj2 = { width: 16, height: "100%", backgroundColor: hexResult };
  obj.shineStyles = _require(4130).createStyles({ shineContainer: { width: "100%", height: "200%", position: "absolute", overflow: "hidden" }, shine: obj1, shineInner: obj2 })();
  obj.shineAnimatedStyle = animatedStyle;
  return obj;
}
let closure_6 = { code: "function ButtonShineNativeTsx1(){const{width,SHINE_OFFSCREEN_OFFSET,useReducedMotion,SHINE_WIDTH,withRepeat,withSequence,withTiming,withDelay,SHINE_INITIAL_ANIMATION_DELAY,SHINE_ANIMATION_DURATION}=this.__closure;if(width==null){return{transform:[{translateX:-SHINE_OFFSCREEN_OFFSET}]};}if(useReducedMotion){const centerOffset=(width-SHINE_WIDTH)/2;return{transform:[{translateX:centerOffset}]};}return{transform:[{translateX:withRepeat(withSequence(withTiming(-SHINE_OFFSCREEN_OFFSET,{duration:0},'animate-always'),withDelay(SHINE_INITIAL_ANIMATION_DELAY,withTiming(width+SHINE_OFFSCREEN_OFFSET,{duration:SHINE_ANIMATION_DURATION},'animate-always'))),-1)}]};}" };
const result = require("jsxProd").fileFinishedImporting("design/components/Button/native/ButtonShine.native.tsx");

export { useShineEffectStyles };
export const ButtonShine = function ButtonShine(variant) {
  const tmp = callback(React.useState(null), 2);
  let closure_0 = tmp[1];
  const tmp2 = useShineEffectStyles(tmp[0], variant.variant);
  const shineStyles = tmp2.shineStyles;
  let obj = {
    onLayout(nativeEvent) {
      return callback(nativeEvent.nativeEvent.layout.width);
    },
    style: items
  };
  items = [shineStyles.shineContainer, tmp2.shineAnimatedStyle];
  obj = { style: shineStyles.shine };
  obj = { style: shineStyles.shineInner };
  obj.children = jsx(importDefault(3991).View, { style: shineStyles.shineInner });
  obj.children = jsx(importDefault(3991).View, { style: shineStyles.shineInner });
  return jsx(importDefault(3991).View, { style: shineStyles.shineInner });
};
