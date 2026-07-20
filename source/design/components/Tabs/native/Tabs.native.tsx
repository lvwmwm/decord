// Module ID: 11631
// Function ID: 90287
// Name: defaultCountFormatter
// Dependencies: []
// Exports: Tabs

// Module 11631 (defaultCountFormatter)
function defaultCountFormatter(toLocaleString) {
  return toLocaleString.toLocaleString(locale.locale);
}
let closure_3 = importAll(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
const View = tmp2.View;
let closure_5 = importDefault(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]).createAnimatedComponent(tmp2.ScrollView);
let closure_9 = {};
const importDefaultResult = importDefault(dependencyMap[4]);
let closure_10 = arg1(dependencyMap[5]).createStyles((gap) => {
  let obj = {};
  obj = { 0: null, 0: null, 0: null, 9223372036854775807: null, 9223372036854775807: null, 9223372036854775807: null, 0: null, borderBottomColor: importDefault(dependencyMap[6]).colors.BORDER_SUBTLE };
  obj.container = obj;
  obj = { marginHorizontal: importDefault(dependencyMap[6]).space.PX_16, flexDirection: "row", gap };
  obj.controlsContainer = obj;
  obj.indicatorContainer = { marginLeft: importDefault(dependencyMap[6]).space.PX_16 };
  const obj2 = { height: 2 };
  if ("gradient-background" === arg1) {
    let TEXT_BRAND = importDefault(dependencyMap[6]).colors.TEXT_STRONG;
  } else {
    TEXT_BRAND = importDefault(dependencyMap[6]).colors.TEXT_BRAND;
  }
  obj2.backgroundColor = TEXT_BRAND;
  obj2.borderTopStartRadius = importDefault(dependencyMap[6]).radii.xs;
  obj2.borderTopEndRadius = importDefault(dependencyMap[6]).radii.xs;
  obj.indicator = obj2;
  return obj;
});
let closure_11 = { code: "function TabsNativeTsx1(){const{activeIndex,itemCount}=this.__closure;return Math.round(Math.min(Math.max(activeIndex.get(),0),itemCount-1));}" };
let closure_12 = { code: "function TabsNativeTsx2(){const{itemDimensions,clampedActiveIndex}=this.__closure;const activeItem=itemDimensions.get()[clampedActiveIndex.get()];if(activeItem==null)return 0;return activeItem.width;}" };
let closure_13 = { code: "function TabsNativeTsx3(){const{itemDimensions,clampedActiveIndex}=this.__closure;var _itemDimensions$get$c,_itemDimensions$get$c2;return(_itemDimensions$get$c=(_itemDimensions$get$c2=itemDimensions.get()[clampedActiveIndex.get()])===null||_itemDimensions$get$c2===void 0?void 0:_itemDimensions$get$c2.x)!==null&&_itemDimensions$get$c!==void 0?_itemDimensions$get$c:0;}" };
let closure_14 = { code: "function TabsNativeTsx4(){const{indicatorTranslateX,pressedIndex,clampedActiveIndex,PRESSED_TRANSLATE_AMOUNT,indicatorWidth,scrollOverflow,interpolate,SCROLL_OVERFLOW_UPPER_BOUND,SCROLL_OVERFLOW_MAX_SCALE,withSpring,SELECTED_INDICATOR_SPRING}=this.__closure;let translateX=indicatorTranslateX.get();let scaleX=1;if(pressedIndex.get()>=0){if(pressedIndex.get()<clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX-=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}else if(pressedIndex.get()>clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX+=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}}if(scrollOverflow.get()<0){const scaleFactor=interpolate(scrollOverflow.get(),[-SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=-scaleAmount/2;}else if(scrollOverflow.get()>0){const scaleFactor=interpolate(scrollOverflow.get(),[SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=scaleAmount/2;}return{width:withSpring(indicatorWidth.get(),SELECTED_INDICATOR_SPRING),transform:[{translateX:withSpring(translateX,SELECTED_INDICATOR_SPRING)},{scaleX:withSpring(scaleX,SELECTED_INDICATOR_SPRING)}]};}" };
let closure_15 = { code: "function TabsNativeTsx5(event){const{scrollOffset,onScrollWorklet}=this.__closure;var _onScrollWorklet;scrollOffset.set(event.contentOffset.x);(_onScrollWorklet=onScrollWorklet)===null||_onScrollWorklet===void 0||_onScrollWorklet(event.contentOffset.x);}" };
let closure_16 = { code: "function TabsNativeTsx6(){const{onEndDrag}=this.__closure;var _onEndDrag;(_onEndDrag=onEndDrag)===null||_onEndDrag===void 0||_onEndDrag();}" };
let closure_17 = { code: "function TabsNativeTsx7(){const{scrollOffset,activeIndex,itemDimensions}=this.__closure;return{scrollOffset:scrollOffset.get(),activeIndex:activeIndex.get(),itemDimensions:itemDimensions.get()};}" };
let closure_18 = { code: "function TabsNativeTsx8(props,prevState){const{cheapWorkletShallowEqual,itemSpacing,pageWidth,runOnJS,scrollToOffset,AUTO_SCROLL_BUFFER}=this.__closure;var _itemDimensions$activ,_itemDimensions$activ2,_itemDimensions$activ3;if(props.activeIndex===(prevState===null||prevState===void 0?void 0:prevState.activeIndex))return;if(cheapWorkletShallowEqual(props,prevState!==null&&prevState!==void 0?prevState:undefined))return;const{scrollOffset:scrollOffset,activeIndex:activeIndex,itemDimensions:itemDimensions}=props;const width=itemDimensions.reduce(function(sum,item){var _item$width;return sum+((_item$width=item===null||item===void 0?void 0:item.width)!==null&&_item$width!==void 0?_item$width:0);},0);const itemOffset=((_itemDimensions$activ=(_itemDimensions$activ2=itemDimensions[activeIndex])===null||_itemDimensions$activ2===void 0?void 0:_itemDimensions$activ2.x)!==null&&_itemDimensions$activ!==void 0?_itemDimensions$activ:0)+(activeIndex-1)*itemSpacing;const itemWidth=(_itemDimensions$activ3=itemDimensions[activeIndex])===null||_itemDimensions$activ3===void 0?void 0:_itemDimensions$activ3.width;if(width===0||itemOffset==null||itemWidth==null)return;if(scrollOffset+pageWidth<itemOffset+itemWidth){runOnJS(scrollToOffset)(itemOffset+AUTO_SCROLL_BUFFER);}else if(itemOffset<scrollOffset){runOnJS(scrollToOffset)(itemOffset-AUTO_SCROLL_BUFFER);}}" };
const obj2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("design/components/Tabs/native/Tabs.native.tsx");

export { defaultCountFormatter };
export const Tabs = function Tabs(state) {
  state = state.state;
  const arg1 = state;
  let flag = state.grow;
  if (flag === undefined) {
    flag = true;
  }
  const importDefault = flag;
  let formatCount = state.formatCount;
  if (formatCount === undefined) {
    formatCount = defaultCountFormatter;
  }
  const dependencyMap = formatCount;
  const React = simultaneousHandlers;
  const onScrollWorklet = state.onScrollWorklet;
  const View = onScrollWorklet;
  const onEndDrag = state.onEndDrag;
  let closure_5 = onEndDrag;
  const variant = state.variant;
  let activeIndex;
  let closure_8;
  let closure_9;
  let callback;
  let closure_11;
  let closure_12;
  let closure_13;
  let closure_14;
  let closure_15;
  let closure_16;
  let closure_17;
  let closure_18;
  let defaultCountFormatter;
  let ref;
  let derivedValue;
  let derivedValue1;
  let derivedValue2;
  let callback1;
  activeIndex = state.activeIndex;
  const scrollOffset = state.scrollOffset;
  closure_8 = scrollOffset;
  const scrollOverflow = state.scrollOverflow;
  closure_9 = scrollOverflow;
  const items = state.items;
  callback = items;
  const itemDimensions = state.itemDimensions;
  closure_11 = itemDimensions;
  const itemSpacing = state.itemSpacing;
  closure_12 = itemSpacing;
  const pageWidth = state.pageWidth;
  closure_13 = pageWidth;
  const pressedIndex = state.pressedIndex;
  closure_14 = pressedIndex;
  const setActiveIndex = state.setActiveIndex;
  closure_15 = setActiveIndex;
  const useReducedMotion = state.useReducedMotion;
  closure_16 = useReducedMotion;
  const tmp = callback(itemSpacing, variant);
  closure_17 = tmp;
  let obj = arg1(dependencyMap[4]);
  const sharedValue = obj.useSharedValue(pageWidth);
  closure_18 = sharedValue;
  defaultCountFormatter = length;
  ref = React.useRef(null);
  const items1 = [sharedValue];
  callback = React.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
  }, items1);
  let obj1 = arg1(dependencyMap[4]);
  class C {
    constructor() {
      return Math.round(Math.min(Math.max(activeIndex.get(), 0), length - 1));
    }
  }
  C.__closure = { activeIndex, itemCount: items.length };
  C.__workletHash = 3447899396126;
  C.__initData = closure_11;
  derivedValue = obj1.useDerivedValue(C);
  let obj2 = arg1(dependencyMap[4]);
  class W {
    constructor() {
      value = itemDimensions.get();
      tmp2 = value[closure_21.get(closure_21)];
      num = 0;
      if (null != tmp2) {
        num = tmp2.width;
      }
      return num;
    }
  }
  W.__closure = { itemDimensions, clampedActiveIndex: derivedValue };
  W.__workletHash = 8603255620075;
  W.__initData = closure_12;
  derivedValue1 = obj2.useDerivedValue(W);
  let obj3 = arg1(dependencyMap[4]);
  class N {
    constructor() {
      value = itemDimensions.get();
      tmp2 = value[closure_21.get(closure_21)];
      x = undefined;
      if (null != tmp2) {
        x = tmp2.x;
      }
      num = 0;
      if (null != x) {
        num = x;
      }
      return num;
    }
  }
  N.__closure = { itemDimensions, clampedActiveIndex: derivedValue };
  N.__workletHash = 3224400863644;
  N.__initData = closure_13;
  derivedValue2 = obj3.useDerivedValue(N);
  let obj4 = arg1(dependencyMap[4]);
  const fn = function $() {
    let value = derivedValue2.get();
    let num = 1;
    if (pressedIndex.get() < 0) {
      if (scrollOverflow.get() < 0) {
        let obj = state(formatCount[4]);
        const items = [-50, 0];
        const interpolateResult = obj.interpolate(scrollOverflow.get(), items, [], "clamp");
        let sum = value + -derivedValue1.get() * (1 - interpolateResult) / 2;
        num = interpolateResult;
      } else {
        sum = value;
        if (scrollOverflow.get() > 0) {
          const obj8 = state(formatCount[4]);
          const interpolateResult1 = obj8.interpolate(scrollOverflow.get(), ["values", "application"], [], "clamp");
          sum = value + derivedValue1.get() * (1 - interpolateResult1) / 2;
          num = interpolateResult1;
        }
      }
      obj = { width: state(formatCount[7]).withSpring(derivedValue1.get(), scrollOverflow) };
      obj = {};
      const obj3 = state(formatCount[7]);
      obj.translateX = state(formatCount[7]).withSpring(sum, scrollOverflow);
      const items1 = [obj, ];
      const obj1 = {};
      const obj5 = state(formatCount[7]);
      obj1.scaleX = state(formatCount[7]).withSpring(num, scrollOverflow);
      items1[1] = obj1;
      obj.transform = items1;
      return obj;
    } else {
      value = pressedIndex.get();
      if (value < derivedValue.get()) {
        let diff = value - 0.02 * derivedValue1.get();
        let num2 = 1.04;
      } else {
        const value1 = pressedIndex.get();
        diff = value;
        num2 = 1;
        if (value1 > derivedValue.get()) {
          diff = value + 0.02 * derivedValue1.get();
          num2 = 1.04;
        }
      }
    }
  };
  obj = { indicatorTranslateX: derivedValue2, pressedIndex, clampedActiveIndex: derivedValue, PRESSED_TRANSLATE_AMOUNT: 0.04, indicatorWidth: derivedValue1, scrollOverflow, interpolate: arg1(dependencyMap[4]).interpolate, SCROLL_OVERFLOW_UPPER_BOUND: 50, SCROLL_OVERFLOW_MAX_SCALE: 0.9, withSpring: arg1(dependencyMap[7]).withSpring, SELECTED_INDICATOR_SPRING: closure_9 };
  fn.__closure = obj;
  fn.__workletHash = 1794186407627;
  fn.__initData = closure_14;
  const animatedStyle = obj4.useAnimatedStyle(fn);
  obj = {};
  class F {
    constructor(arg0) {
      result = scrollOffset.set(state.contentOffset.x);
      if (null != onScrollWorklet) {
        tmp2 = onScrollWorklet;
        tmp3 = onScrollWorklet(state.contentOffset.x);
      }
      return;
    }
  }
  F.__closure = { scrollOffset, onScrollWorklet };
  F.__workletHash = 1586298483424;
  F.__initData = closure_15;
  obj.onScroll = F;
  const fn2 = function b() {
    if (null != onEndDrag) {
      onEndDrag();
    }
  };
  fn2.__closure = { onEndDrag };
  fn2.__workletHash = 6364544472149;
  fn2.__initData = closure_16;
  obj.onEndDrag = fn2;
  const items2 = [useReducedMotion];
  const obj7 = arg1(dependencyMap[4]);
  callback1 = React.useCallback((arg0) => {
    const current = ref.current;
    if (null != current) {
      const obj = { x: arg0, animated: !useReducedMotion };
      current.scrollTo(obj);
    }
  }, items2);
  const animatedScrollHandler = arg1(dependencyMap[4]).useAnimatedScrollHandler(obj);
  const fn3 = function k() {
    return { scrollOffset: scrollOffset.get(), activeIndex: activeIndex.get(), itemDimensions: itemDimensions.get() };
  };
  fn3.__closure = { scrollOffset, activeIndex, itemDimensions };
  fn3.__workletHash = 9993285637539;
  fn3.__initData = closure_17;
  class X {
    constructor(arg0, arg1) {
      activeIndex = undefined;
      if (null != arg1) {
        activeIndex = arg1.activeIndex;
      }
      if (state.activeIndex !== activeIndex) {
        tmp20 = state;
        tmp21 = formatCount;
        num8 = 8;
        obj3 = state(formatCount[8]);
        tmp2 = undefined;
        if (null != arg1) {
          tmp2 = arg1;
        }
        if (!obj3.cheapWorkletShallowEqual(state, tmp2)) {
          ({ scrollOffset, activeIndex, itemDimensions } = state);
          num = 0;
          tmp4 = itemDimensions[activeIndex];
          x = undefined;
          reduced = itemDimensions.reduce((arg0, width) => {
            width = undefined;
            if (null != width) {
              width = width.width;
            }
            let num = 0;
            if (null != width) {
              num = width;
            }
            return arg0 + num;
          }, 0);
          if (null != tmp4) {
            x = tmp4.x;
          }
          num2 = 0;
          if (null != x) {
            num2 = x;
          }
          num3 = 1;
          tmp6 = itemSpacing;
          sum = num2 + (activeIndex - 1) * itemSpacing;
          tmp8 = itemDimensions[activeIndex];
          width = undefined;
          if (null != tmp8) {
            width = tmp8.width;
          }
          tmp10 = 0 !== reduced && null != sum && null != width;
          if (tmp10) {
            tmp11 = pageWidth;
            if (scrollOffset + pageWidth < sum + width) {
              tmp16 = state;
              tmp17 = formatCount;
              num6 = 4;
              obj2 = state(formatCount[4]);
              tmp18 = closure_24;
              num7 = 16;
              tmp19 = obj2.runOnJS(closure_24)(sum + 16);
            } else if (sum < scrollOffset) {
              tmp12 = state;
              tmp13 = formatCount;
              num4 = 4;
              obj = state(formatCount[4]);
              tmp14 = closure_24;
              num5 = 16;
              tmp15 = obj.runOnJS(closure_24)(sum - 16);
            }
          }
        }
      }
      return;
    }
  }
  obj1 = { cheapWorkletShallowEqual: arg1(dependencyMap[8]).cheapWorkletShallowEqual, itemSpacing, pageWidth, runOnJS: arg1(dependencyMap[4]).runOnJS, scrollToOffset: callback1, AUTO_SCROLL_BUFFER: 16 };
  X.__closure = obj1;
  X.__workletHash = 15851319414889;
  X.__initData = closure_18;
  const animatedReaction = arg1(dependencyMap[4]).useAnimatedReaction(fn3, X);
  const items3 = [items, items.length, formatCount, state, flag, pressedIndex, activeIndex, setActiveIndex, tmp.controlsContainer, variant];
  const items4 = [state.simultaneousHandlers];
  const memo = React.useMemo(() => variant(onScrollWorklet, {
    style: tmp.controlsContainer,
    children: items.map((count, index) => {
      let id;
      let label;
      count = count.count;
      ({ label, id } = count);
      const obj = { index, itemCount: closure_19, label };
      let tmp2;
      if (null != count) {
        tmp2 = callback(count);
      }
      obj.count = tmp2;
      obj.state = index;
      obj.grow = closure_1;
      obj.pressed = closure_14;
      obj.selected = index === closure_7.get();
      obj.onPress = function onPress() {
        callback(arg1);
      };
      obj.onPressIn = function onPressIn() {
        const result = store.set(arg1);
      };
      obj.onPressOut = function onPressOut() {
        const result = store.set(-1);
      };
      obj.variant = closure_6;
      return closure_6(index(callback[9]).TabItem, obj, id);
    })
  }), items3);
  const memo1 = React.useMemo(() => {
    let result = null;
    if (null != simultaneousHandlers) {
      const Gesture = state(formatCount[10]).Gesture;
      result = Gesture.Native().simultaneousWithExternalGesture(simultaneousHandlers);
      const NativeResult = Gesture.Native();
    }
    return result;
  }, items4);
  obj2 = { "Bool(true)": "<string:1090584577>", "Bool(true)": "o or\u0103", "Bool(true)": "<string:170017025>", "Bool(true)": "<string:1732313090>", "Bool(true)": "<string:1358955016>", "Bool(true)": "<string:289702746>", "Bool(true)": "<string:3959424030>", ref };
  const obj9 = arg1(dependencyMap[4]);
  const tmp14 = activeIndex;
  const tmp15 = closure_8;
  let str;
  if (obj12.isIOS()) {
    str = "tabbar";
  }
  obj2.accessibilityRole = str;
  obj2.onScroll = animatedScrollHandler;
  obj2.contentContainerStyle = tmp.container;
  obj2.bounces = false;
  obj3 = { style: tmp.indicatorContainer, onLayout: callback, children: variant(importDefault(dependencyMap[4]).View, { style: items5 }) };
  const items5 = [tmp.indicator, animatedStyle];
  const items6 = [variant(View, obj3), memo];
  obj2.children = items6;
  const tmp14Result = tmp14(tmp15, obj2);
  let tmp17 = tmp14Result;
  if (null != memo1) {
    obj4 = { gesture: memo1, children: tmp14Result };
    tmp17 = variant(arg1(dependencyMap[10]).GestureDetector, obj4);
  }
  return tmp17;
};
