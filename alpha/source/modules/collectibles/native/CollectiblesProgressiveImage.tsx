// Module ID: 17828
// Function ID: 17829
// Name: CollectiblesProgressiveImage
// Dependencies: [19, 17, 21, 5090, 5712, 5249, 2]
// Exports: CollectiblesProgressiveImage

// Module 17828 (CollectiblesProgressiveImage)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import timing from "timing" /* 5249 */;
import FastImageDefault from "FastImage" /* 5712 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;

const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
const __initData = { code: "function CollectiblesProgressiveImageTsx1(){const{backgroundImageOpacity}=this.__closure;return{opacity:backgroundImageOpacity.get()};}" };
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesProgressiveImage.tsx");

export function CollectiblesProgressiveImage(arg0) {
  let source;
  let style;
  ({ source, style } = arg0);
  let sharedValue;
  const merged = Object.assign(arg0, Object.assign({ source: 0, style: 0 }));
  let obj = sharedValue(5090);
  sharedValue = obj.useSharedValue(0);
  const fn = function u() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn.__closure = { backgroundImageOpacity: sharedValue };
  fn.__workletHash = 14095099553650;
  fn.__initData = __initData;
  const obj2 = sharedValue(5090);
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const items = [style, animatedStyle];
  const View = ReanimatedRexportDefault.View;
  FastImageDefault;
  const merged1 = Object.assign(merged);
  return <View style={items}>{null}</View>;
}
