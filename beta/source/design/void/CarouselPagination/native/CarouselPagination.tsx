// Module ID: 13671
// Function ID: 13672
// Name: CarouselPagination
// Dependencies: [19, 17, 21, 4836, 576, 4566, 4837, 13662, 2]
// Exports: default

// Module 13671 (CarouselPagination)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let obj2;
let size;
let tmp;
const Easing = tmp(13662);
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, dot: size };
obj2 = { position: "relative", top: -16, marginBottom: -16, flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_20, paddingVertical: nativeDefault.space.PX_32 };
createStyles = createStyles.createStyles;
size = { width: 8, height: 8, borderRadius: nativeDefault.radii.xs, marginHorizontal: 4, backgroundColor: nativeDefault.colors.ICON_STRONG };
let closure_5 = createStyles(obj);
const __initData = { code: "function CarouselPaginationTsx1(){const{withTiming,active,STANDARD_EASING}=this.__closure;return withTiming(active?1:0,{duration:250,easing:STANDARD_EASING},'animate-always');}" };
const __initData2 = { code: "function CarouselPaginationTsx2(){const{interpolate,progress,interpolateColor,backgroundColor,brand500}=this.__closure;return{width:interpolate(progress.get(),[0,1],[8,16]),backgroundColor:interpolateColor(progress.get(),[0,1],[backgroundColor,brand500]),opacity:interpolate(progress.get(),[0,1],[0.3,1])};}" };
let closure_8 = react.memo((active) => {
  active = active.active;
  let BRAND_500;
  let tmp = closure_5();
  let obj = active(BRAND_500[5]);
  const fn = function o() {
    let num = 0;
    const withTiming = timing.withTiming;
    timing;
    if (active) {
      num = 1;
    }
    const obj = { duration: 250, easing: Easing.STANDARD_EASING };
    return withTiming(num, obj, "animate-always");
  };
  let obj2 = { withTiming: active(BRAND_500[6]).withTiming, active, STANDARD_EASING: active(BRAND_500[7]).STANDARD_EASING };
  fn.__closure = obj2;
  fn.__workletHash = 5885711729227;
  fn.__initData = __initData;
  const derivedValue = obj.useDerivedValue(fn);
  BRAND_500 = derivedValue(BRAND_500[4]).unsafe_rawColors.BRAND_500;
  const backgroundColor = tmp.dot.backgroundColor;
  let obj3 = active(BRAND_500[5]);
  const fn2 = function u() {
    let items;
    let obj2;
    let obj3;
    let obj4;
    const obj = { width: obj2.interpolate(derivedValue.get(), [0, 1], [8, 16]), backgroundColor: obj3.interpolateColor(derivedValue.get(), [0, 1], items), opacity: obj4.interpolate(derivedValue.get(), [0, 1], [0.3, 1]) };
    items = [backgroundColor, BRAND_500];
    obj2 = ReanimatedRexport;
    obj3 = ReanimatedRexport;
    obj4 = ReanimatedRexport;
    return obj;
  };
  let obj4 = { interpolate: active(BRAND_500[5]).interpolate, progress: derivedValue, interpolateColor: active(BRAND_500[5]).interpolateColor, backgroundColor, brand500: BRAND_500 };
  fn2.__closure = obj4;
  fn2.__workletHash = 7804335337011;
  fn2.__initData = __initData2;
  const animatedStyle = obj3.useAnimatedStyle(fn2);
  let items = [tmp.dot, animatedStyle];
  return jsx(derivedValue(BRAND_500[5]).View, { style: items });
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
