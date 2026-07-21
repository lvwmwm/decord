// Module ID: 12969
// Function ID: 98647
// Name: CarouselPagination
// Dependencies: []
// Exports: default

// Module 12969 (CarouselPagination)
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
const importAllResult = importAll(dependencyMap[0]);
let obj = { container: {} };
obj = { borderRadius: importDefault(dependencyMap[4]).radii.xs, backgroundColor: importDefault(dependencyMap[4]).colors.ICON_STRONG };
obj.dot = obj;
let closure_5 = arg1(dependencyMap[3]).createStyles(obj);
let closure_6 = { code: "function CarouselPaginationTsx1(){const{withTiming,active,STANDARD_EASING}=this.__closure;return withTiming(active?1:0,{duration:250,easing:STANDARD_EASING},'animate-always');}" };
let closure_7 = { code: "function CarouselPaginationTsx2(){const{interpolate,progress,interpolateColor,backgroundColor,brand500}=this.__closure;return{width:interpolate(progress.get(),[0,1],[8,16]),backgroundColor:interpolateColor(progress.get(),[0,1],[backgroundColor,brand500]),opacity:interpolate(progress.get(),[0,1],[0.3,1])};}" };
let closure_8 = importAllResult.memo((active) => {
  active = active.active;
  const arg1 = active;
  const tmp = callback();
  let obj = arg1(dependencyMap[5]);
  const fn = function o() {
    let obj = active(BRAND_500[6]);
    let num = 0;
    if (active) {
      num = 1;
    }
    obj = { duration: 250, easing: active(BRAND_500[7]).STANDARD_EASING };
    return obj.withTiming(num, obj, "animate-always");
  };
  obj = { withTiming: arg1(dependencyMap[6]).withTiming, active, STANDARD_EASING: arg1(dependencyMap[7]).STANDARD_EASING };
  fn.__closure = obj;
  fn.__workletHash = 5885711729227;
  fn.__initData = closure_6;
  const derivedValue = obj.useDerivedValue(fn);
  const importDefault = derivedValue;
  const BRAND_500 = importDefault(dependencyMap[4]).unsafe_rawColors.BRAND_500;
  const dependencyMap = BRAND_500;
  const backgroundColor = tmp.dot.backgroundColor;
  const View = backgroundColor;
  const fn2 = function c() {
    const obj = { width: active(BRAND_500[5]).interpolate(derivedValue.get(), ["Text", "lc"], []) };
    const obj2 = active(BRAND_500[5]);
    const items = [backgroundColor, BRAND_500];
    obj.backgroundColor = active(BRAND_500[5]).interpolateColor(derivedValue.get(), ["Text", "lc"], items);
    const obj3 = active(BRAND_500[5]);
    obj.opacity = active(BRAND_500[5]).interpolate(derivedValue.get(), ["Text", "lc"], []);
    return obj;
  };
  obj = { interpolate: arg1(dependencyMap[5]).interpolate, progress: derivedValue, interpolateColor: arg1(dependencyMap[5]).interpolateColor, backgroundColor, brand500: BRAND_500 };
  fn2.__closure = obj;
  fn2.__workletHash = 7804335337011;
  fn2.__initData = closure_7;
  const animatedStyle = arg1(dependencyMap[5]).useAnimatedStyle(fn2);
  const style = [tmp.dot, animatedStyle];
  return jsx(importDefault(dependencyMap[5]).View, { style });
});
const obj2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("design/void/CarouselPagination/native/CarouselPagination.tsx");

export default function CarouselPagination(arg0) {
  let containerStyle;
  let currentIndex;
  let numberOfItems;
  ({ numberOfItems, currentIndex, containerStyle } = arg0);
  const tmp2 = <closure_8 />;
  const tmp = callback();
  const items = [tmp.container, containerStyle];
  return <View style={items}>{jsx(arg1(dependencyMap[8]).Pagination, { dotElement: tmp2, inactiveDotElement: tmp2, dotsLength: numberOfItems, activeDotIndex: currentIndex })}</View>;
};
