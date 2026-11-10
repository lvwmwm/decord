// Module ID: 10824
// Function ID: 10825
// Name: PremiumGiftBackgroundSelect
// Dependencies: [32, 19, 17, 21, 1652, 5142, 575, 1493, 1187, 5372, 10825, 10690, 2]
// Exports: default

// Module 10824 (PremiumGiftBackgroundSelect)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5372 */;
import NativeGiftContext from "NativeGiftContext" /* 10690 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5142 */;
import size from "module_2" /* 2 */;

const module_1652 = _mod1652;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let tmp2;
const PremiumGiftBackgroundAnimationDefault = tmp2(10825);
class GiftBackgroundSelect {
  constructor(withConsistentHeight) {
    let closure_1;
    let first;
    let items4;
    let items5;
    let tmp10;
    let tmp11;
    let tmp12;
    let tmp9;
    let flag = withConsistentHeight.withConsistentHeight;
    const giftStyle = withConsistentHeight.giftStyle;
    if (flag === undefined) {
      flag = true;
    }
    first = undefined;
    closure_1 = undefined;
    let tmp = closure_9();
    const width = useWindowDimensionsDefault().width;
    [first, closure_1] = react.useState();
    let obj = _mod1652;
    const sharedValue = obj.useSharedValue(false);
    const items = [first, sharedValue];
    const effect = react.useEffect(() => {
      const result = sharedValue.set(null != first);
    }, items);
    const items1 = [closure_10, , , ];
    const useAnimatedStyle = _mod1652.useAnimatedStyle;
    _mod1652;
    items1[1] = native.STANDARD_EASING;
    items1[2] = timing_timing.withTiming;
    items1[3] = sharedValue;
    let c0;
    let c1;
    let c2;
    [tmp9, tmp10, tmp11, tmp12] = items1;
    class PremiumGiftBackgroundSelectTsx1 {
      constructor() {
        let num = 0;
        const tmp = c1;
        if (_undefined.get()) {
          num = 1;
        }
        const obj = { opacity: tmp(num, obj2) };
        return obj;
      }
    }
    const items2 = [tmp10, tmp11, tmp12];
    PremiumGiftBackgroundSelectTsx1.__closure = items2;
    PremiumGiftBackgroundSelectTsx1.__workletHash = 9299891037117;
    PremiumGiftBackgroundSelectTsx1.__initData = tmp9;
    const animatedStyle = useAnimatedStyle(PremiumGiftBackgroundSelectTsx1);
    const items3 = [hasOwnProperty(PremiumGiftBackgroundAnimationDefault, { giftStyle, withConsistentHeight: flag }), ];
    const obj2 = {
      onContentSizeChange(arg0) {
        if (null == first) {
          closure_1(arg0);
        }
      },
      contentContainerStyle: items4,
      style: items5,
      horizontal: true,
      showsHorizontalScrollIndicator: false
    };
    items4 = [tmp.contentContainer, ];
    let obj3 = null != first;
    const tmp14 = metroImportDefault;
    const tmp15 = metroRequire;
    const tmp16 = hasOwnProperty;
    const tmp17 = closure_8;
    if (obj3) {
      obj3 = first < width;
    }
    if (obj3) {
      obj3 = { flex: 1 };
    }
    const obj4 = { children: items3 };
    items4[1] = obj3;
    items5 = [tmp.scrollView, animatedStyle];
    items3[1] = tmp16(tmp17, obj2);
    return tmp14(tmp15, obj4);
  }
}
const ScrollView = react_native.ScrollView;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = module_1652.createAnimatedComponent(ScrollView);
let obj = { scrollView: obj2, contentContainer: { justifyContent: "center" } };
obj2 = { flex: 1, marginTop: nativeDefault.space.PX_24 };
const React4 = createStyles.createStyles(obj);
let closure_10 = { code: "(function PremiumGiftBackgroundSelectTsx1(){let[STANDARD_EASING,withTiming,visibility]=this.__closure;const animationSettings={easing:STANDARD_EASING,duration:100};return{opacity:withTiming(visibility.get()?1:0,animationSettings)};})" };
let result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftBackgroundSelect.tsx");

export default function PremiumGiftBackgroundSelect() {
  const obj = NativeGiftContext;
  const nativeGiftContext = obj.useNativeGiftContext();
  const obj2 = { giftStyle: nativeGiftContext.giftStyle, setGiftStyle: nativeGiftContext.setGiftStyle };
  return hasOwnProperty(GiftBackgroundSelect, obj2);
};
export { GiftBackgroundSelect };
