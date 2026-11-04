// Module ID: 18138
// Function ID: 18139
// Name: CollectiblesProgressiveImage
// Dependencies: [19, 17, 21, 1652, 5851, 5378, 2]
// Exports: CollectiblesProgressiveImage

// Module 18138 (CollectiblesProgressiveImage)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5378 */;
import FastImageDefault from "FastImage" /* 5851 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const _modDef1652 = _mod1652;

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
  let obj = sharedValue(1652);
  sharedValue = obj.useSharedValue(0);
  const items = [closure_5, sharedValue];
  let c0;
  [tmp4, tmp5] = items;
  const obj2 = sharedValue(1652);
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
  const View = _modDef1652.View;
  FastImageDefault;
  const merged1 = Object.assign(merged);
  return <View style={items2}>{null}</View>;
}
