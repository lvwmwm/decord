// Module ID: 8782
// Function ID: 69383
// Name: GiftBackgroundSelect
// Dependencies: [57, 31, 27, 33, 3991, 4130, 689, 1450, 4131, 1273, 8783, 8809, 2]
// Exports: default

// Module 8782 (GiftBackgroundSelect)
import _slicedToArray from "_slicedToArray";
import result from "result";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "module_3991";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
class GiftBackgroundSelect {
  constructor(arg0) {
    flag = global.withConsistentHeight;
    if (flag === undefined) {
      flag = true;
    }
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    tmp = c9();
    tmp2 = _slicedToArray(result.useState(), 2);
    first = tmp2[0];
    c0 = first;
    c1 = tmp2[1];
    obj = require("module_3991");
    sharedValue = obj.useSharedValue(false);
    c2 = sharedValue;
    items = [, ];
    items[0] = first;
    items[1] = sharedValue;
    effect = result.useEffect(() => {
      const result = sharedValue.set(null != first);
    }, items);
    obj2 = require("module_3991");
    class N {
      constructor() {
        obj = {};
        obj2 = require("withTiming");
        num = 0;
        if (c2.get()) {
          num = 1;
        }
        obj = { easing: require("Button").STANDARD_EASING, duration: 100 };
        obj.opacity = obj2.withTiming(num, obj);
        return obj;
      }
    }
    obj = { STANDARD_EASING: require("Button").STANDARD_EASING, withTiming: require("withTiming").withTiming, visibility: sharedValue };
    N.__closure = obj;
    N.__workletHash = 5743780040676;
    N.__initData = c10;
    obj1 = {};
    animatedStyle = obj2.useAnimatedStyle(N);
    tmp7 = jsxs;
    tmp8 = Fragment;
    obj2 = { giftStyle: global.giftStyle };
    obj2.withConsistentHeight = flag;
    items1 = [, ];
    items1[0] = jsx(require("PremiumGiftBackgroundAnimation"), obj2);
    obj3 = {
      onContentSizeChange(arg0) {
            if (null == first) {
              callback(arg0);
            }
          }
    };
    items2 = [, ];
    items2[0] = tmp.contentContainer;
    tmp11 = null != first;
    tmp9 = jsx;
    tmp10 = createAnimatedComponent;
    if (tmp11) {
      tmp11 = first < require("useWindowDimensions")().width;
    }
    if (tmp11) {
      obj4 = {};
      obj4.flex = 1;
      tmp11 = obj4;
    }
    items2[1] = tmp11;
    obj3.contentContainerStyle = items2;
    items3 = [, ];
    items3[0] = tmp.scrollView;
    items3[1] = animatedStyle;
    obj3.style = items3;
    obj3.horizontal = true;
    obj3.showsHorizontalScrollIndicator = false;
    items1[1] = tmp9(tmp10, obj3);
    obj1.children = items1;
    return tmp7(tmp8, obj1);
  }
}
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = require("module_3991").createAnimatedComponent(require("get ActivityIndicator").ScrollView);
let obj = {};
obj = { flex: 1, marginTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
obj.scrollView = obj;
obj.contentContainer = { justifyContent: "center" };
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_10 = { code: "function PremiumGiftBackgroundSelectTsx1(){const{STANDARD_EASING,withTiming,visibility}=this.__closure;const animationSettings={easing:STANDARD_EASING,duration:100};return{opacity:withTiming(visibility.get()?1:0,animationSettings)};}" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftBackgroundSelect.tsx");

export default function PremiumGiftBackgroundSelect() {
  let obj = require(8809) /* importDefaultResult1 */;
  const nativeGiftContext = obj.useNativeGiftContext();
  obj = { giftStyle: nativeGiftContext.giftStyle, setGiftStyle: nativeGiftContext.setGiftStyle };
  return callback2(GiftBackgroundSelect, obj);
};
export { GiftBackgroundSelect };
