// Module ID: 15298
// Function ID: 15299
// Name: ProductDetailsActionSheetSkeleton
// Dependencies: [19, 17, 21, 5170, 575, 5794, 1652, 5400, 2]
// Exports: default

// Module 15298 (ProductDetailsActionSheetSkeleton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5400 */;
import ButtonConstants from "ButtonConstants" /* 5794 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

const _modDef1652 = _mod1652;
let set;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
let size1;
let size2;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, scrollArea: { flex: 1 }, block: obj2, preview: obj3, info: obj4, title: size, description: size1, price: size2, purchaseSection: obj5, purchaseButton: obj6 };
obj2 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_12, marginHorizontal: nativeDefault.space.PX_16, height: 280, borderRadius: nativeDefault.radii.md };
obj4 = { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
size = { height: 24, width: "60%", borderRadius: nativeDefault.radii.xs };
size1 = { height: 16, width: "90%", borderRadius: nativeDefault.radii.xs };
size2 = { marginTop: nativeDefault.space.PX_12, height: 20, width: "30%", borderRadius: nativeDefault.radii.xs };
obj5 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_16 };
obj6 = { height: ButtonConstants.LARGE_BUTTON_HEIGHT, borderRadius: nativeDefault.radii.round };
let closure_7 = createStyles(obj);
let closure_8 = { code: "(function ProductDetailsActionSheetSkeletonTsx1(){let[opacity]=this.__closure;return{opacity:opacity.get()};})" };
size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetSkeleton.tsx");

export default function ProductDetailsActionSheetSkeleton() {
  let items10;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj11;
  let tmp5;
  let tmp6;
  const tmp = closure_7();
  let sharedValue;
  let obj = sharedValue(1652);
  sharedValue = obj.useSharedValue(0.3);
  const items = [sharedValue];
  const effect = react.useEffect(() => {
    set = sharedValue.set;
    const withRepeat = _mod1652.withRepeat;
    _mod1652;
    const obj = timing_timing;
    const result = set(withRepeat(obj.withTiming(1, { duration: 650 }), -1, true));
  }, items);
  const items1 = [closure_8, sharedValue];
  let c0;
  [tmp5, tmp6] = items1;
  const obj2 = sharedValue(1652);
  class ProductDetailsActionSheetSkeletonTsx1 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items2 = [tmp6];
  ProductDetailsActionSheetSkeletonTsx1.__closure = items2;
  ProductDetailsActionSheetSkeletonTsx1.__workletHash = 8439265984765;
  ProductDetailsActionSheetSkeletonTsx1.__initData = tmp5;
  const animatedStyle = obj2.useAnimatedStyle(ProductDetailsActionSheetSkeletonTsx1);
  const obj5 = { style: items3 };
  items3 = [, , ];
  const obj3 = { style: tmp.container, children: items9 };
  const obj4 = { style: tmp.scrollArea, children: items4 };
  ({ block: arr4[0], preview: arr4[1] } = tmp);
  items3[2] = animatedStyle;
  items4 = [closure_5(_modDef1652.View, obj5), ];
  const obj7 = { style: items5 };
  items5 = [, , ];
  const obj6 = { style: tmp.info, children: items6 };
  ({ block: arr6[0], title: arr6[1] } = tmp);
  items5[2] = animatedStyle;
  items6 = [closure_5(_modDef1652.View, obj7), , ];
  const obj8 = { style: items7 };
  items7 = [, , ];
  ({ block: arr8[0], description: arr8[1] } = tmp);
  items7[2] = animatedStyle;
  items6[1] = closure_5(_modDef1652.View, obj8);
  const obj9 = { style: items8 };
  items8 = [, , ];
  ({ block: arr9[0], price: arr9[1] } = tmp);
  items8[2] = animatedStyle;
  items6[2] = closure_5(_modDef1652.View, obj9);
  items4[1] = closure_6(View, obj6);
  items9 = [closure_6(View, obj4), ];
  const obj10 = { style: tmp.purchaseSection, children: closure_5(_modDef1652.View, obj11) };
  obj11 = { style: items10 };
  items10 = [, , ];
  ({ block: arr11[0], purchaseButton: arr11[1] } = tmp);
  items10[2] = animatedStyle;
  items9[1] = closure_5(View, obj10);
  return closure_6(View, obj3);
};
