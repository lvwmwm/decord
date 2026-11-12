// Module ID: 18811
// Function ID: 18812
// Name: InterestSearchShadow
// Dependencies: [19, 17, 21, 5170, 575, 5756, 1652, 18810, 1377, 5747, 671, 2]
// Exports: default

// Module 18811 (InterestSearchShadow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import _mod1652 from "module_1652" /* 1652 */;
import LinearGradientDefault from "LinearGradient" /* 5747 */;
import useToken from "useToken" /* 5756 */;
import InterestScrollHeader from "InterestScrollHeader" /* 18810 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
let rect;
let rect1;
let rect2;
let tmp2;
const PlatformUtils = tmp2(1377);
let View = react_native.View;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { backing: rect, shadow: rect1, bar: rect2, barAndroid: { elevation: 0 }, fill: { flex: 1 } };
rect = { position: "absolute", top: 0, left: 0, right: 0, height: nativeDefault.space.PX_26 + nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
rect1 = { position: "absolute", top: nativeDefault.space.PX_26 + nativeDefault.space.PX_16, left: 0, right: 0, height: nativeDefault.space.PX_64 + nativeDefault.space.PX_8 };
rect2 = { position: "absolute", top: 0, left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, height: nativeDefault.space.PX_48 + nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
let closure_7 = createStyles(obj);
let closure_8 = { code: "(function InterestSearchShadowTsx1(){let[interestHeaderElevation,scrollY,collapseOffset]=this.__closure;return{opacity:interestHeaderElevation(scrollY.get(),collapseOffset)};})" };
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestSearchShadow.tsx");

export default function InterestSearchShadow(arg0) {
  let collapseOffset;
  let items4;
  let items5;
  let obj5;
  let scrollY;
  let tmp10;
  let tmp4Result;
  let tmp7;
  let tmp8;
  let tmp9;
  ({ scrollY, collapseOffset } = arg0);
  const tmp = closure_7();
  let obj = useToken;
  const token = obj.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWEST);
  const items = [closure_8, , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items[1] = InterestScrollHeader.interestHeaderElevation;
  items[2] = scrollY;
  items[3] = collapseOffset;
  let c0;
  let c1;
  let c2;
  [tmp7, tmp8, tmp9, tmp10] = items;
  class InterestSearchShadowTsx1 {
    constructor() {
      obj = { opacity: closure_0(closure_1.get(), closure_2) };
      return obj;
    }
  }
  const items1 = [tmp8, tmp9, tmp10];
  InterestSearchShadowTsx1.__closure = items1;
  InterestSearchShadowTsx1.__workletHash = 15648602916327;
  InterestSearchShadowTsx1.__initData = tmp7;
  const animatedStyle = useAnimatedStyle(InterestSearchShadowTsx1);
  const items2 = [, , ];
  const obj2 = { pointerEvents: "none", style: tmp.backing };
  items2[0] = React3(View, obj2);
  const items3 = [tmp.bar, , ];
  View = tmp4(1652).View;
  const tmp2Result = PlatformUtils;
  const obj3 = { children: items2 };
  items3[1] = tmp2Result.isAndroid() && tmp.barAndroid;
  items3[2] = animatedStyle;
  tmp2Result.isAndroid() && tmp.barAndroid;
  items2[1] = React3(View, { pointerEvents: "none", style: items3 });
  const obj4 = { pointerEvents: "none", style: items4, children: React3(tmp4Result, obj5) };
  items4 = [tmp.shadow, animatedStyle];
  const View2 = tmp4(1652).View;
  obj5 = { style: tmp.fill, colors: items5 };
  items5 = [token, ];
  tmp4Result = LinearGradientDefault;
  const obj7 = _modDef671(token);
  const alphaResult = obj7.alpha(0);
  items5[1] = alphaResult.hex();
  items2[2] = React3(View2, obj4);
  return metroRequire(hasOwnProperty, obj3);
};
