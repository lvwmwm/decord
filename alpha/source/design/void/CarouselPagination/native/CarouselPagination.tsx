// Module ID: 16264
// Function ID: 16265
// Name: CarouselPagination
// Dependencies: [19, 17, 21, 5170, 575, 1652, 5400, 16071, 2]
// Exports: default

// Module 16264 (CarouselPagination)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5400 */;
import Easing_Easing from "Easing/Easing" /* 16071 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

let num;

let size;
let tmp10;
const _modDef1652 = tmp10(1652);
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: { position: "relative", top: -16, marginBottom: -16, flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_20, paddingVertical: nativeDefault.space.PX_32 }, dot: size };
createStyles = createStyles.createStyles;
({ position: "relative", top: -16, marginBottom: -16, flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_20, paddingVertical: nativeDefault.space.PX_32 });
size = { width: 8, height: 8, borderRadius: nativeDefault.radii.xs, marginHorizontal: 4, backgroundColor: nativeDefault.colors.ICON_STRONG };
let closure_5 = createStyles(obj);
let closure_6 = { code: "(function CarouselPaginationTsx1(){let[withTiming,active,STANDARD_EASING]=this.__closure;return withTiming(active?1:0,{duration:250,easing:STANDARD_EASING},'animate-always');})" };
let closure_7 = { code: "(function CarouselPaginationTsx2(){let[interpolate,progress,interpolateColor,backgroundColor,brand500]=this.__closure;return{width:interpolate(progress.get(),[0,1],[8,16]),backgroundColor:interpolateColor(progress.get(),[0,1],[backgroundColor,brand500]),opacity:interpolate(progress.get(),[0,1],[0.3,1])};})" };
let closure_8 = react.memo(function Dot(active) {
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  active = active.active;
  let tmp = closure_5();
  let items = [closure_6, , , ];
  const useDerivedValue = _mod1652.useDerivedValue;
  _mod1652;
  items[1] = timing_timing.withTiming;
  items[2] = active;
  items[3] = Easing_Easing.STANDARD_EASING;
  let c0;
  let c1;
  let c2;
  [tmp5, tmp6, tmp7, tmp8] = items;
  class CarouselPaginationTsx1 {
    constructor() {
      num = 0;
      tmp = closure_0;
      if (closure_1) {
        num = 1;
      }
      obj = { duration: 250, easing: closure_2 };
      return tmp(num, obj, "animate-always");
    }
  }
  const items1 = [tmp6, tmp7, tmp8];
  CarouselPaginationTsx1.__closure = items1;
  CarouselPaginationTsx1.__workletHash = 5504332160978;
  CarouselPaginationTsx1.__initData = tmp5;
  const derivedValue = useDerivedValue(CarouselPaginationTsx1);
  const BRAND_500 = nativeDefault.unsafe_rawColors.BRAND_500;
  const backgroundColor = tmp.dot.backgroundColor;
  const items2 = [closure_7, , , , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items2[1] = _mod1652.interpolate;
  items2[2] = derivedValue;
  items2[3] = _mod1652.interpolateColor;
  items2[4] = backgroundColor;
  items2[5] = BRAND_500;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  let c3;
  let c4;
  [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items2;
  class CarouselPaginationTsx2 {
    constructor() {
      obj = { width: closure_0(closure_1.get(), [0, 1], [8, 16]), backgroundColor: null, opacity: closure_0(closure_1.get(), [0, 1], [0.3, 1]) };
      items = [, ];
      items[0] = closure_3;
      items[1] = closure_4;
      obj.backgroundColor = closure_2(closure_1.get(), [0, 1], items);
      return obj;
    }
  }
  const items3 = [tmp13, tmp14, tmp15, tmp16, tmp17];
  CarouselPaginationTsx2.__closure = items3;
  CarouselPaginationTsx2.__workletHash = 9539116065290;
  CarouselPaginationTsx2.__initData = tmp12;
  const animatedStyle = useAnimatedStyle(CarouselPaginationTsx2);
  const items4 = [tmp.dot, animatedStyle];
  return jsx(_modDef1652.View, { style: items4 });
});
size = size_mod;
const result = size.fileFinishedImporting("design/void/CarouselPagination/native/CarouselPagination.tsx");

export default function CarouselPagination(currentIndex) {
  let containerStyle;
  let numberOfItems;
  currentIndex = currentIndex.currentIndex;
  ({ numberOfItems, containerStyle } = currentIndex);
  const items = [closure_5().container, containerStyle];
  return <View style={items} accessible={false} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">{Array.from({ length: numberOfItems }, (arg0, arg1) => <closure_8 key={arg1} active={arg1 === currentIndex} />)}</View>;
};
