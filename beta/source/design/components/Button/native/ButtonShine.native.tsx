// Module ID: 5292
// Function ID: 5293
// Name: ButtonShine
// Dependencies: [32, 19, 21, 5287, 672, 4685, 4566, 4837, 4836, 2]
// Exports: ButtonShine

// Module 5292 (ButtonShine)
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const ReanimatedRexportDefault = ReanimatedRexport;
let _require;

function useShineEffectStyles(width, variant) {
  let animatedStyle;
  let enabled;
  let items;
  let obj6;
  let obj7;
  _require = width;
  let obj = require("ButtonHooks");
  const buttonTextColorStyles = obj.useButtonTextColorStyles(variant);
  let obj2 = enabled(672)(buttonTextColorStyles.color);
  const alphaResult = obj2.alpha(0.1);
  const hexResult = alphaResult.hex();
  enabled = react.useContext(require("shared").AccessibilityPreferencesContext).reducedMotion.enabled;
  let obj4 = require("ReanimatedRexport");
  const fn = function o() {
    let items;
    let tmp8;
    if (null == width) {
      const obj3 = { transform: items };
      items = [{ translateX: -120 }];
      tmp8 = obj3;
    } else {
      const obj4 = { transform: null };
      const obj5 = { translateX: null };
      if (enabled) {
        obj5.translateX = (width - 56) / 2;
        const items1 = [obj5];
        obj4.transform = items1;
        tmp8 = obj4;
      } else {
        const withRepeat = ReanimatedRexport.withRepeat;
        ReanimatedRexport;
        const withSequence = ReanimatedRexport.withSequence;
        ReanimatedRexport;
        const obj = timing;
        const withTimingResult = obj.withTiming(-120, { duration: 0 }, "animate-always");
        const withDelay = ReanimatedRexport.withDelay;
        ReanimatedRexport;
        const obj2 = timing;
        obj5.translateX = withRepeat(withSequence(withTimingResult, withDelay(750, obj2.withTiming(width + 120, { duration: 2000 }, "animate-always"))), -1);
        const items2 = [obj5];
        obj4.transform = items2;
        tmp8 = obj4;
      }
    }
    return tmp8;
  };
  let obj3 = { width, SHINE_OFFSCREEN_OFFSET: 120, useReducedMotion: enabled, SHINE_WIDTH: 56, withRepeat: require("ReanimatedRexport").withRepeat, withSequence: require("ReanimatedRexport").withSequence, withTiming: require("timing").withTiming, withDelay: require("ReanimatedRexport").withDelay, SHINE_INITIAL_ANIMATION_DELAY: 750, SHINE_ANIMATION_DURATION: 2000 };
  fn.__closure = obj3;
  fn.__workletHash = 15814138938406;
  fn.__initData = __initData;
  let obj5 = { shineStyles: obj7.createStyles(obj6)(), shineAnimatedStyle: animatedStyle };
  animatedStyle = obj4.useAnimatedStyle(fn);
  obj6 = { shineContainer: { width: "100%", height: "200%", position: "absolute", overflow: "hidden" }, shine: size, shineInner: { width: 16, height: "100%", backgroundColor: hexResult } };
  size = { width: 56, height: "500%", transform: items, backgroundColor: hexResult, top: "-100%", alignItems: "center" };
  items = [{ rotate: "30deg" }];
  obj7 = require("createStyles");
  return obj5;
}
const jsx = Fragment.jsx;
const __initData = { code: "function ButtonShineNativeTsx1(){const{width,SHINE_OFFSCREEN_OFFSET,useReducedMotion,SHINE_WIDTH,withRepeat,withSequence,withTiming,withDelay,SHINE_INITIAL_ANIMATION_DELAY,SHINE_ANIMATION_DURATION}=this.__closure;if(width==null){return{transform:[{translateX:-SHINE_OFFSCREEN_OFFSET}]};}if(useReducedMotion){const centerOffset=(width-SHINE_WIDTH)/2;return{transform:[{translateX:centerOffset}]};}return{transform:[{translateX:withRepeat(withSequence(withTiming(-SHINE_OFFSCREEN_OFFSET,{duration:0},'animate-always'),withDelay(SHINE_INITIAL_ANIMATION_DELAY,withTiming(width+SHINE_OFFSCREEN_OFFSET,{duration:SHINE_ANIMATION_DURATION},'animate-always'))),-1)}]};}" };
let size = size_mod;
const result = size.fileFinishedImporting("design/components/Button/native/ButtonShine.native.tsx");

export { useShineEffectStyles };
export const ButtonShine = function ButtonShine(variant) {
  variant = variant.variant;
  const tmp = _slicedToArray(react.useState(null), 2);
  let closure_0 = tmp[1];
  const tmp2 = useShineEffectStyles(tmp[0], variant);
  const shineStyles = tmp2.shineStyles;
  const items = [shineStyles.shineContainer, tmp2.shineAnimatedStyle];
  const View = ReanimatedRexportDefault.View;
  const View2 = ReanimatedRexportDefault.View;
  return <View onLayout={function onLayout(nativeEvent) {
    return closure_0(nativeEvent.nativeEvent.layout.width);
  }} style={items}>{null}</View>;
};
