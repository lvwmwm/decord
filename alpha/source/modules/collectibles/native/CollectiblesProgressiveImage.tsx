// Module ID: 16165
// Function ID: 16166
// Name: CollectiblesProgressiveImage
// Dependencies: [109, 19, 17, 21, 558, 576, 4811, 5092, 6163, 2]

// Module 16165 (CollectiblesProgressiveImage)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import timing from "timing" /* 5092 */;
import FastImageDefault from "FastImage" /* 6163 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;
let set;

let closure_3 = ["source", "style"];
const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
const __initData = { code: "function CollectiblesProgressiveImageTsx1(){const{backgroundImageOpacity}=this.__closure;return{opacity:backgroundImageOpacity.get()};}" };
const __initData2 = { code: "function CollectiblesProgressiveImageTsx2(){const{backgroundImageOpacity}=this.__closure;return{opacity:backgroundImageOpacity.get()};}" };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function CollectiblesProgressiveImage(arg0) {
  let sharedValue;
  let source;
  let style;
  let tmp12;
  let tmp4;
  let tmp5;
  const tmp = sharedValue;
  let obj = sharedValue(576);
  const cResult = obj.c(16);
  if (cResult[0] !== arg0) {
    ({ source, style } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = tmp9;
    cResult[2] = source;
    cResult[3] = style;
    class I {
      constructor() {
        const obj = { opacity: sharedValue.get() };
        return obj;
      }
    }
    tmp5 = source;
    tmp4 = tmp9;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const tmpResult = tmp(4811);
  sharedValue = tmpResult.useSharedValue(0);
  const tmpResult2 = tmp(4811);
  class I {
    constructor() {
      const obj = { opacity: sharedValue.get() };
      return obj;
    }
  }
  I.__closure = { backgroundImageOpacity: sharedValue };
  I.__workletHash = 14095099553650;
  I.__initData = __initData;
  const animatedStyle = tmpResult2.useAnimatedStyle(I);
  if (cResult[4] !== sharedValue) {
    function handleImageLoad() {
      let Easing;
      set = sharedValue.set;
      const obj = { duration: 500, easing: Easing.inOut(ReanimatedRexport.Easing.ease) };
      const withTiming = timing.withTiming;
      timing;
      Easing = ReanimatedRexport.Easing;
      const result = set(withTiming(1, obj));
    }
    cResult[4] = sharedValue;
    cResult[5] = handleImageLoad;
    tmp12 = handleImageLoad;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === animatedStyle) {
    let tmp13;
    if (cResult[7] === tmp6) {
      tmp13 = cResult[8];
    }
    if (cResult[9] === tmp12) {
      if (cResult[10] === tmp4) {
        let tmp14;
        if (cResult[11] === tmp5) {
          tmp14 = cResult[12];
        }
        if (cResult[13] === tmp13) {
          let tmp23;
          if (cResult[14] === tmp14) {
            tmp23 = cResult[15];
          }
          return tmp23;
        }
        cResult[13] = tmp13;
        cResult[14] = tmp14;
        const tmp26 = jsx(ReanimatedRexportDefault.View, { style: tmp13, children: tmp14 });
        class I {
          constructor() {
            const obj = { opacity: sharedValue.get() };
            return obj;
          }
        }
        tmp23 = tmp26;
      }
    }
    FastImageDefault;
    const merged = Object.assign(tmp4);
    class I {
      constructor() {
        const obj = { opacity: sharedValue.get() };
        return obj;
      }
    }
    const tmp22 = <tmp17 source={tmp5} style={StyleSheet.absoluteFill} fadeDuration={0} />;
    cResult[9] = tmp12;
    cResult[10] = tmp4;
    cResult[11] = tmp5;
    cResult[12] = tmp22;
    tmp14 = tmp22;
  }
  const items = [tmp6, animatedStyle];
  cResult[6] = animatedStyle;
  cResult[7] = tmp6;
  cResult[8] = items;
  tmp13 = items;
}) : (function CollectiblesProgressiveImage(arg0) {
  let source;
  let style;
  ({ source, style } = arg0);
  let sharedValue;
  const merged = Object.assign(arg0, Object.assign({ source: 0, style: 0 }));
  let obj = sharedValue(4811);
  sharedValue = obj.useSharedValue(0);
  const fn = function u() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn.__closure = { backgroundImageOpacity: sharedValue };
  fn.__workletHash = 13501599736881;
  fn.__initData = __initData2;
  const obj2 = sharedValue(4811);
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const items = [style, animatedStyle];
  const View = ReanimatedRexportDefault.View;
  FastImageDefault;
  const merged1 = Object.assign(merged);
  return <View style={items}>{null}</View>;
});
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesProgressiveImage.tsx");

export const CollectiblesProgressiveImage = tmp3;
