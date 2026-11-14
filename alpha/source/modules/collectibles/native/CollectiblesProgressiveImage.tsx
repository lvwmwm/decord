// Module ID: 18538
// Function ID: 18539
// Name: CollectiblesProgressiveImage
// Dependencies: [19, 17, 21, 1655, 6020, 5548, 2]
// Exports: CollectiblesProgressiveImage

// Module 18538 (CollectiblesProgressiveImage)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _mod1655 from "module_1655" /* 1655 */;
import timing_timing from "timing/timing" /* 5548 */;
import FastImageDefault from "FastImage" /* 6020 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const _modDef1655 = _mod1655;

const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
let closure_5 = { code: "(function CollectiblesProgressiveImageTsx1(){let[backgroundImageOpacity]=this.__closure;return{opacity:backgroundImageOpacity.get()};})" };
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesProgressiveImage.tsx");

export function CollectiblesProgressiveImage(arg0) {
  let source;
  let style;
  let tmp4;
  let tmp5;
  ({ source, style } = arg0);
  const merged = Object.assign(arg0, Object.assign({ source: 0, style: 0 }));
  let sharedValue;
  let obj = sharedValue(1655);
  sharedValue = obj.useSharedValue(0);
  const items = [closure_5, sharedValue];
  let c0;
  [tmp4, tmp5] = items;
  const obj2 = sharedValue(1655);
  class CollectiblesProgressiveImageTsx1 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items1 = [tmp5];
  CollectiblesProgressiveImageTsx1.__closure = items1;
  CollectiblesProgressiveImageTsx1.__workletHash = 7073856696811;
  CollectiblesProgressiveImageTsx1.__initData = tmp4;
  const animatedStyle = obj2.useAnimatedStyle(CollectiblesProgressiveImageTsx1);
  const items2 = [style, animatedStyle];
  const View = _modDef1655.View;
  FastImageDefault;
  const merged1 = Object.assign(merged);
  return <View style={items2}>{null}</View>;
}
