// Module ID: 12740
// Function ID: 12741
// Name: ProductDetailsActionSheetSkeleton
// Dependencies: [19, 17, 21, 4836, 576, 5286, 4566, 4837, 2]
// Exports: default

// Module 12740 (ProductDetailsActionSheetSkeleton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import ButtonConstants from "ButtonConstants" /* 5286 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;
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
const __initData = { code: "function ProductDetailsActionSheetSkeletonTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetSkeleton.tsx");

export default function ProductDetailsActionSheetSkeleton() {
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj11;
  const tmp = closure_7();
  let sharedValue;
  let obj = sharedValue(4566);
  sharedValue = obj.useSharedValue(0.3);
  const items = [sharedValue];
  const effect = react.useEffect(() => {
    set = sharedValue.set;
    const withRepeat = ReanimatedRexport.withRepeat;
    ReanimatedRexport;
    const obj = timing;
    const result = set(withRepeat(obj.withTiming(1, { duration: 650 }), -1, true));
  }, items);
  const fn = function o() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 4141895524740;
  fn.__initData = __initData;
  const obj2 = sharedValue(4566);
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj5 = { style: items1 };
  items1 = [, , ];
  const obj3 = { style: tmp.container, children: items7 };
  const obj4 = { style: tmp.scrollArea, children: items2 };
  ({ block: arr2[0], preview: arr2[1] } = tmp);
  items1[2] = animatedStyle;
  items2 = [closure_5(ReanimatedRexportDefault.View, obj5), ];
  const obj7 = { style: items3 };
  items3 = [, , ];
  const obj6 = { style: tmp.info, children: items4 };
  ({ block: arr4[0], title: arr4[1] } = tmp);
  items3[2] = animatedStyle;
  items4 = [closure_5(ReanimatedRexportDefault.View, obj7), , ];
  const obj8 = { style: items5 };
  items5 = [, , ];
  ({ block: arr6[0], description: arr6[1] } = tmp);
  items5[2] = animatedStyle;
  items4[1] = closure_5(ReanimatedRexportDefault.View, obj8);
  const obj9 = { style: items6 };
  items6 = [, , ];
  ({ block: arr7[0], price: arr7[1] } = tmp);
  items6[2] = animatedStyle;
  items4[2] = closure_5(ReanimatedRexportDefault.View, obj9);
  items2[1] = closure_6(View, obj6);
  items7 = [closure_6(View, obj4), ];
  const obj10 = { style: tmp.purchaseSection, children: closure_5(ReanimatedRexportDefault.View, obj11) };
  obj11 = { style: items8 };
  items8 = [, , ];
  ({ block: arr9[0], purchaseButton: arr9[1] } = tmp);
  items8[2] = animatedStyle;
  items7[1] = closure_5(View, obj10);
  return closure_6(View, obj3);
};
