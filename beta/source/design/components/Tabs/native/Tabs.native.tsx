// Module ID: 12111
// Function ID: 12112
// Name: Tabs
// Dependencies: [19, 17, 2112, 21, 4566, 4836, 576, 5280, 8853, 12112, 6073, 1364, 2]
// Exports: Tabs

// Module 12111 (Tabs)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4566 */;
import spring from "spring" /* 5280 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6073 */;
import cheapWorkletShallowEqual2 from "cheapWorkletShallowEqual" /* 8853 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const ReanimatedRexport = ReanimatedRexport2;
let count;

let ScrollView;
let closure_4;
let metroImportDefault;
let metroRequire;
function defaultCountFormatter(toLocaleString) {
  return toLocaleString.toLocaleString(LocaleStore.locale);
}
({ View: closure_4, ScrollView } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = ReanimatedRexport.createAnimatedComponent(ScrollView);
let c9 = 0.04;
let closure_10 = { mass: 0.3, damping: 13, stiffness: 100, restDisplacementThreshold: 0.001, overshootClamping: true };
let closure_11 = createStyles.createStyles((gap, arg1) => {
  let TEXT_BRAND;
  const obj = { container: { display: "flex", flexGrow: 1, minWidth: "100%", flexDirection: "row", alignItems: "center", borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1 }, controlsContainer: { marginHorizontal: nativeDefault.space.PX_16, flexDirection: "row", gap }, indicatorContainer: size, indicator: { height: 2, backgroundColor: TEXT_BRAND, borderTopStartRadius: nativeDefault.radii.xs, borderTopEndRadius: nativeDefault.radii.xs } };
  ({ display: "flex", flexGrow: 1, minWidth: "100%", flexDirection: "row", alignItems: "center", borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1 });
  ({ marginHorizontal: nativeDefault.space.PX_16, flexDirection: "row", gap });
  size = { position: "absolute", width: "100%", height: "100%", flexDirection: "row", alignItems: "flex-end", marginLeft: nativeDefault.space.PX_16 };
  if ("overlay" === arg1) {
    TEXT_BRAND = tmp(576).colors.TEXT_STRONG;
  } else {
    TEXT_BRAND = tmp(576).colors.TEXT_BRAND;
  }
  ({ height: 2, backgroundColor: TEXT_BRAND, borderTopStartRadius: nativeDefault.radii.xs, borderTopEndRadius: nativeDefault.radii.xs });
  return obj;
});
let closure_13 = { code: "function TabsNativeTsx1(){const{activeIndex,itemCount}=this.__closure;return Math.round(Math.min(Math.max(activeIndex.get(),0),itemCount-1));}" };
let closure_14 = { code: "function TabsNativeTsx2(){const{itemDimensions,clampedActiveIndex}=this.__closure;const activeItem=itemDimensions.get()[clampedActiveIndex.get()];if(activeItem==null)return 0;return activeItem.width;}" };
let closure_15 = { code: "function TabsNativeTsx3(){const{itemDimensions,clampedActiveIndex}=this.__closure;var _itemDimensions$get$c,_itemDimensions$get$c2;return(_itemDimensions$get$c=(_itemDimensions$get$c2=itemDimensions.get()[clampedActiveIndex.get()])===null||_itemDimensions$get$c2===void 0?void 0:_itemDimensions$get$c2.x)!==null&&_itemDimensions$get$c!==void 0?_itemDimensions$get$c:0;}" };
let closure_16 = { code: "function TabsNativeTsx4(){const{indicatorTranslateX,pressedIndex,clampedActiveIndex,PRESSED_TRANSLATE_AMOUNT,indicatorWidth,scrollOverflow,interpolate,SCROLL_OVERFLOW_UPPER_BOUND,SCROLL_OVERFLOW_MAX_SCALE,withSpring,SELECTED_INDICATOR_SPRING}=this.__closure;let translateX=indicatorTranslateX.get();let scaleX=1;if(pressedIndex.get()>=0){if(pressedIndex.get()<clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX-=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}else if(pressedIndex.get()>clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX+=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}}if(scrollOverflow.get()<0){const scaleFactor=interpolate(scrollOverflow.get(),[-SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=-scaleAmount/2;}else if(scrollOverflow.get()>0){const scaleFactor=interpolate(scrollOverflow.get(),[SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=scaleAmount/2;}return{width:withSpring(indicatorWidth.get(),SELECTED_INDICATOR_SPRING),transform:[{translateX:withSpring(translateX,SELECTED_INDICATOR_SPRING)},{scaleX:withSpring(scaleX,SELECTED_INDICATOR_SPRING)}]};}" };
let __initData = { code: "function TabsNativeTsx5(event){const{scrollOffset,onScrollWorklet}=this.__closure;var _onScrollWorklet;scrollOffset.set(event.contentOffset.x);(_onScrollWorklet=onScrollWorklet)===null||_onScrollWorklet===void 0||_onScrollWorklet(event.contentOffset.x);}" };
let closure_18 = { code: "function TabsNativeTsx6(){const{onEndDrag}=this.__closure;var _onEndDrag;(_onEndDrag=onEndDrag)===null||_onEndDrag===void 0||_onEndDrag();}" };
let closure_19 = { code: "function TabsNativeTsx7(){const{scrollOffset,activeIndex,itemDimensions}=this.__closure;return{scrollOffset:scrollOffset.get(),activeIndex:activeIndex.get(),itemDimensions:itemDimensions.get()};}" };
let closure_20 = { code: "function TabsNativeTsx8(props,prevState){const{cheapWorkletShallowEqual,itemSpacing,pageWidth,runOnJS,scrollToOffset,AUTO_SCROLL_BUFFER}=this.__closure;var _itemDimensions$activ,_itemDimensions$activ2,_itemDimensions$activ3;if(props.activeIndex===(prevState===null||prevState===void 0?void 0:prevState.activeIndex))return;if(cheapWorkletShallowEqual(props,prevState!==null&&prevState!==void 0?prevState:undefined))return;const{scrollOffset:scrollOffset,activeIndex:activeIndex,itemDimensions:itemDimensions}=props;const width=itemDimensions.reduce(function(sum,item){var _item$width;return sum+((_item$width=item===null||item===void 0?void 0:item.width)!==null&&_item$width!==void 0?_item$width:0);},0);const itemOffset=((_itemDimensions$activ=(_itemDimensions$activ2=itemDimensions[activeIndex])===null||_itemDimensions$activ2===void 0?void 0:_itemDimensions$activ2.x)!==null&&_itemDimensions$activ!==void 0?_itemDimensions$activ:0)+(activeIndex-1)*itemSpacing;const itemWidth=(_itemDimensions$activ3=itemDimensions[activeIndex])===null||_itemDimensions$activ3===void 0?void 0:_itemDimensions$activ3.width;if(width===0||itemOffset==null||itemWidth==null)return;if(scrollOffset+pageWidth<itemOffset+itemWidth){runOnJS(scrollToOffset)(itemOffset+AUTO_SCROLL_BUFFER);}else if(itemOffset<scrollOffset){runOnJS(scrollToOffset)(itemOffset-AUTO_SCROLL_BUFFER);}}" };
let size = size_mod;
let result = size.fileFinishedImporting("design/components/Tabs/native/Tabs.native.tsx");

export { defaultCountFormatter };
export const Tabs = function Tabs(state) {
  let controlsContainer;
  let fn2;
  let itemSpacing;
  let items5;
  let items6;
  let obj14;
  let str;
  state = state.state;
  let flag = state.grow;
  if (flag === undefined) {
    flag = true;
  }
  let formatCount = state.formatCount;
  if (formatCount === undefined) {
    formatCount = itemSpacing;
  }
  const simultaneousHandlers = state.simultaneousHandlers;
  const onScrollWorklet = state.onScrollWorklet;
  const onEndDrag = state.onEndDrag;
  const variant = state.variant;
  let derivedValue;
  let derivedValue1;
  let derivedValue2;
  let callback1;
  let activeIndex = state.activeIndex;
  const scrollOffset = state.scrollOffset;
  const scrollOverflow = state.scrollOverflow;
  let items = state.items;
  const itemDimensions = state.itemDimensions;
  itemSpacing = state.itemSpacing;
  const pageWidth = state.pageWidth;
  const pressedIndex = state.pressedIndex;
  const setActiveIndex = state.setActiveIndex;
  const useReducedMotion = state.useReducedMotion;
  let tmp = itemDimensions(itemSpacing, variant);
  __initData = tmp;
  let tmp2 = state;
  let obj = state(formatCount[4]);
  const sharedValue = obj.useSharedValue(pageWidth);
  const length = items.length;
  const ref = simultaneousHandlers.useRef(null);
  const items1 = [sharedValue];
  const callback = simultaneousHandlers.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
  }, items1);
  let obj2 = state(formatCount[4]);
  class C {
    constructor() {
      return Math.round(Math.min(Math.max(activeIndex.get(), 0), length - 1));
    }
  }
  C.__closure = { activeIndex, itemCount: length };
  C.__workletHash = 3447899396126;
  C.__initData = pageWidth;
  derivedValue = obj2.useDerivedValue(C);
  const obj3 = state(formatCount[4]);
  class W {
    constructor() {
      const value = itemDimensions.get();
      const tmp2 = value[derivedValue.get(derivedValue)];
      let num = 0;
      if (null != tmp2) {
        num = tmp2.width;
      }
      return num;
    }
  }
  W.__closure = { itemDimensions, clampedActiveIndex: derivedValue };
  W.__workletHash = 8603255620075;
  W.__initData = pressedIndex;
  derivedValue1 = obj3.useDerivedValue(W);
  let obj4 = state(formatCount[4]);
  class N {
    constructor() {
      const value = itemDimensions.get();
      const tmp2 = value[derivedValue.get(derivedValue)];
      let num;
      if (tmp2 != null) {
        num = tmp2.x;
      }
      if (num == null) {
        num = 0;
      }
      return num;
    }
  }
  N.__closure = { itemDimensions, clampedActiveIndex: derivedValue };
  N.__workletHash = 3224400863644;
  N.__initData = setActiveIndex;
  derivedValue2 = obj4.useDerivedValue(N);
  let obj5 = state(formatCount[4]);
  const fn = function $() {
    let obj10;
    let obj6;
    let obj8;
    let sum;
    const value = derivedValue2.get();
    let num = 1;
    let tmp2 = value;
    if (pressedIndex.get() >= 0) {
      let num2;
      let diff;
      const value3 = obj.get();
      const obj2 = derivedValue;
      if (value3 < derivedValue.get()) {
        num2 = 1 + c9;
        diff = value - 0.02 * derivedValue1.get();
      } else {
        const value4 = obj.get();
        num2 = 1;
        diff = value;
        if (value4 > obj2.get()) {
          num2 = 1 + c9;
          diff = value + 0.02 * derivedValue1.get();
        }
      }
      num = num2;
      tmp2 = diff;
    }
    if (scrollOverflow.get() < 0) {
      const obj4 = ReanimatedRexport2;
      const interpolateResult = obj4.interpolate(scrollOverflow.get(), [-50, 0], [0.9, 1], "clamp");
      sum = tmp2 + -derivedValue1.get() * (1 - interpolateResult) / 2;
      num = interpolateResult;
    } else {
      sum = tmp2;
      if (scrollOverflow.get() > 0) {
        const obj11 = ReanimatedRexport2;
        const interpolateResult1 = obj11.interpolate(scrollOverflow.get(), [50, 0], [0.9, 1], "clamp");
        sum = tmp2 + derivedValue1.get() * (1 - interpolateResult1) / 2;
        num = interpolateResult1;
      }
    }
    const obj5 = { width: obj6.withSpring(derivedValue1.get(), closure_10), transform: items };
    obj6 = spring;
    const obj7 = { translateX: obj8.withSpring(sum, closure_10) };
    items = [obj7, ];
    obj8 = spring;
    const obj9 = { scaleX: obj10.withSpring(num, closure_10) };
    items[1] = obj9;
    obj10 = spring;
    return obj5;
  };
  let obj6 = { indicatorTranslateX: derivedValue2, pressedIndex, clampedActiveIndex: derivedValue, PRESSED_TRANSLATE_AMOUNT: scrollOverflow, indicatorWidth: derivedValue1, scrollOverflow, interpolate: state(formatCount[4]).interpolate, SCROLL_OVERFLOW_UPPER_BOUND: 50, SCROLL_OVERFLOW_MAX_SCALE: 0.9, withSpring: state(formatCount[7]).withSpring, SELECTED_INDICATOR_SPRING: items };
  fn.__closure = obj6;
  fn.__workletHash = 1794186407627;
  fn.__initData = useReducedMotion;
  const animatedStyle = obj5.useAnimatedStyle(fn);
  let obj7 = state(formatCount[4]);
  let obj8 = { onScroll: F, onEndDrag: fn2 };
  class F {
    constructor(contentOffset) {
      const result = scrollOffset.set(contentOffset.contentOffset.x);
      if (onScrollWorklet != null) {
        tmp2(contentOffset.contentOffset.x);
      }
    }
  }
  F.__closure = { scrollOffset, onScrollWorklet };
  F.__workletHash = 1586298483424;
  F.__initData = __initData;
  fn2 = function b() {
    if (onEndDrag != null) {
      tmp();
    }
  };
  fn2.__closure = { onEndDrag };
  fn2.__workletHash = 6364544472149;
  fn2.__initData = sharedValue;
  const items2 = [useReducedMotion];
  const animatedScrollHandler = obj7.useAnimatedScrollHandler(obj8);
  callback1 = simultaneousHandlers.useCallback((x) => {
    const current = ref.current;
    if (current != null) {
      const obj = { x, animated: !useReducedMotion };
      current.scrollTo(obj);
    }
  }, items2);
  let obj9 = state(formatCount[4]);
  class P {
    constructor() {
      const obj = { scrollOffset: scrollOffset.get(), activeIndex: activeIndex.get(), itemDimensions: itemDimensions.get() };
      return obj;
    }
  }
  P.__closure = { scrollOffset, activeIndex, itemDimensions };
  P.__workletHash = 9993285637539;
  P.__initData = length;
  class X {
    constructor(activeIndex, current) {
      let activeIndex2;
      let activeIndex1;
      activeIndex = activeIndex.activeIndex;
      if (current != null) {
        activeIndex1 = tmp.activeIndex;
      }
      if (activeIndex !== activeIndex1) {
        const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
        cheapWorkletShallowEqual2;
        if (!cheapWorkletShallowEqual(activeIndex, current)) {
          ({ scrollOffset, activeIndex: activeIndex2, itemDimensions } = activeIndex);
          let num = 0;
          let num2;
          const reduced = itemDimensions.reduce((acc, width) => {
            let num;
            if (width != null) {
              num = width.width;
            }
            if (num == null) {
              num = 0;
            }
            return acc + num;
          }, 0);
          if (itemDimensions[activeIndex2] != null) {
            num2 = tmp4.x;
          }
          if (num2 == null) {
            num2 = 0;
          }
          const sum = num2 + (activeIndex2 - 1) * itemSpacing;
          let width;
          if (itemDimensions[activeIndex2] != null) {
            width = tmp7.width;
          }
          const tmp9 = 0 !== reduced && true && null != width;
          if (tmp9) {
            if (scrollOffset + pageWidth < sum + width) {
              const tmp15Result = ReanimatedRexport2;
              tmp15Result.runOnJS(callback1)(sum + 16);
            } else if (sum < scrollOffset) {
              const tmp15Result2 = ReanimatedRexport2;
              tmp15Result2.runOnJS(callback1)(sum - 16);
            }
          }
        }
      }
    }
  }
  let obj10 = { cheapWorkletShallowEqual: state(formatCount[8]).cheapWorkletShallowEqual, itemSpacing, pageWidth, runOnJS: state(formatCount[4]).runOnJS, scrollToOffset: callback1, AUTO_SCROLL_BUFFER: 16 };
  X.__closure = obj10;
  X.__workletHash = 15851319414889;
  X.__initData = ref;
  const animatedReaction = obj9.useAnimatedReaction(P, X);
  const items3 = [items, length, formatCount, state, flag, pressedIndex, activeIndex, setActiveIndex, tmp.controlsContainer, variant];
  const items4 = [simultaneousHandlers];
  const memo = simultaneousHandlers.useMemo(() => {
    let grow;
    let itemCount;
    let pressed;
    let obj = {
      style: controlsContainer.controlsContainer,
      children: items.map((count, index) => {
        let id;
        let label;
        let tmp2;
        count = count.count;
        state = index;
        ({ label, id } = count);
        const obj = {
          index,
          itemCount,
          label,
          count: tmp2,
          state,
          grow,
          pressed,
          selected: index === closure_7.get(),
          onPress() {
            setActiveIndex(index);
          },
          onPressIn() {
            const result = pressed.set(index);
          },
          onPressOut() {
            const result = pressed.set(-1);
          },
          variant
        };
        tmp2 = undefined;
        const TabItem = state(formatCount[9]).TabItem;
        const tmp = closure_1_6;
        if (null != count) {
          tmp2 = closure_2(count);
        }
        return tmp(TabItem, obj, id);
      })
    };
    return metroRequire(React3, obj);
  }, items3);
  const memo1 = simultaneousHandlers.useMemo(() => {
    let result = null;
    if (null != simultaneousHandlers) {
      const Gesture = LegacyBaseButton.Gesture;
      const NativeResult = Gesture.Native();
      result = NativeResult.simultaneousWithExternalGesture(tmp);
    }
    return result;
  }, items4);
  let obj11 = { ref, accessibilityRole: str, keyboardShouldPersistTaps: "handled", horizontal: true, onScroll: animatedScrollHandler, scrollEventThrottle: 16, showsHorizontalScrollIndicator: false, contentContainerStyle: tmp.container, bounces: false, children: items6 };
  const tmp17 = scrollOffset;
  str = undefined;
  const obj12 = state(formatCount[11]);
  const tmp16 = activeIndex;
  if (obj12.isIOS()) {
    str = "tabbar";
  }
  const obj13 = { style: tmp.indicatorContainer, onLayout: callback, children: variant(flag(formatCount[4]).View, obj14) };
  obj14 = { style: items5 };
  items5 = [tmp.indicator, animatedStyle];
  items6 = [variant(onScrollWorklet, obj13), memo];
  const tmp16Result = tmp16(tmp17, obj11);
  let tmp18Result = tmp16Result;
  const tmp18 = variant;
  if (null != memo1) {
    const obj15 = { gesture: memo1, children: tmp16Result };
    tmp18Result = tmp18(tmp2(tmp3[10]).GestureDetector, obj15);
  }
  return tmp18Result;
};
