// Module ID: 10289
// Function ID: 10290
// Name: PremiumGiftBackgroundSelect
// Dependencies: [32, 19, 17, 21, 4566, 4836, 576, 1479, 4837, 1177, 10290, 10162, 2]
// Exports: default

// Module 10289 (PremiumGiftBackgroundSelect)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import timing from "timing" /* 4837 */;
import NativeGiftContext from "NativeGiftContext" /* 10162 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let tmp;
const native = tmp(1177);
class GiftBackgroundSelect {
  constructor(withConsistentHeight) {
    let closure_1;
    let first;
    let items2;
    let items3;
    let flag = withConsistentHeight.withConsistentHeight;
    const giftStyle = withConsistentHeight.giftStyle;
    if (flag === undefined) {
      flag = true;
    }
    first = undefined;
    importDefault = undefined;
    let sharedValue;
    let tmp = closure_9();
    const width = require("useWindowDimensions")().width;
    [first, importDefault] = react.useState();
    let obj = first(sharedValue[4]);
    sharedValue = obj.useSharedValue(false);
    const items = [first, sharedValue];
    const effect = react.useEffect(() => {
      const result = sharedValue.set(null != first);
    }, items);
    let obj2 = first(sharedValue[4]);
    class N {
      constructor() {
        let obj2;
        const withTiming = timing.withTiming;
        let num = 0;
        timing;
        if (sharedValue.get()) {
          num = 1;
        }
        const obj = { opacity: withTiming(num, obj2) };
        obj2 = { easing: native.STANDARD_EASING, duration: 100 };
        return obj;
      }
    }
    N.__closure = { STANDARD_EASING: first(sharedValue[9]).STANDARD_EASING, withTiming: first(sharedValue[8]).withTiming, visibility: sharedValue };
    N.__workletHash = 5743780040676;
    N.__initData = __initData;
    ({ STANDARD_EASING: first(sharedValue[9]).STANDARD_EASING, withTiming: first(sharedValue[8]).withTiming, visibility: sharedValue });
    const animatedStyle = obj2.useAnimatedStyle(N);
    const items1 = [closure_5(require("PremiumGiftBackgroundAnimation"), { giftStyle, withConsistentHeight: flag }), ];
    const obj4 = {
      onContentSizeChange(arg0) {
        if (null == first) {
          closure_1(arg0);
        }
      },
      contentContainerStyle: items2,
      style: items3,
      horizontal: true,
      showsHorizontalScrollIndicator: false
    };
    items2 = [tmp.contentContainer, ];
    let obj5 = null != first;
    const tmp10 = closure_8;
    const tmp7 = closure_7;
    const tmp8 = closure_6;
    const tmp9 = closure_5;
    if (obj5) {
      obj5 = first < width;
    }
    if (obj5) {
      obj5 = { flex: 1 };
    }
    const obj6 = { children: items1 };
    items2[1] = obj5;
    items3 = [tmp.scrollView, animatedStyle];
    items1[1] = tmp9(tmp10, obj4);
    return tmp7(tmp8, obj6);
  }
}
const ScrollView = react_native.ScrollView;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = ReanimatedRexport.createAnimatedComponent(ScrollView);
let obj = { scrollView: obj2, contentContainer: { justifyContent: "center" } };
obj2 = { flex: 1, marginTop: nativeDefault.space.PX_24 };
const React4 = createStyles.createStyles(obj);
const authStore = { code: "function PremiumGiftBackgroundSelectTsx1(){const{STANDARD_EASING,withTiming,visibility}=this.__closure;const animationSettings={easing:STANDARD_EASING,duration:100};return{opacity:withTiming(visibility.get()?1:0,animationSettings)};}" };
let result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftBackgroundSelect.tsx");

export default function PremiumGiftBackgroundSelect() {
  const obj = NativeGiftContext;
  const nativeGiftContext = obj.useNativeGiftContext();
  const obj2 = { giftStyle: nativeGiftContext.giftStyle, setGiftStyle: nativeGiftContext.setGiftStyle };
  return hasOwnProperty(GiftBackgroundSelect, obj2);
};
export { GiftBackgroundSelect };
