// Module ID: 12350
// Function ID: 12351
// Name: Tabs
// Dependencies: [19, 17, 2186, 21, 1652, 5142, 575, 5763, 10216, 1705, 12351, 5422, 1377, 2]
// Exports: Tabs

// Module 12350 (Tabs)
import nativeDefault from "native" /* 575 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5422 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LocaleStore from "LocaleStore" /* 2186 */;
import Fragment from "Fragment" /* 21 */;
import module_1652 from "module_1652" /* 1652 */;
import createStyles from "createStyles" /* 5142 */;
import size_mod from "module_2" /* 2 */;

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
let closure_8 = module_1652.createAnimatedComponent(ScrollView);
let closure_9 = { mass: 0.3, damping: 13, stiffness: 100, overshootClamping: true };
let closure_10 = createStyles.createStyles((gap, arg1) => {
  let TEXT_BRAND;
  const obj = { container: { display: "flex", flexGrow: 1, minWidth: "100%", flexDirection: "row", alignItems: "center", borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1 }, controlsContainer: { marginHorizontal: nativeDefault.space.PX_16, flexDirection: "row", gap }, indicatorContainer: size, indicator: { height: 2, backgroundColor: TEXT_BRAND, borderTopStartRadius: nativeDefault.radii.xs, borderTopEndRadius: nativeDefault.radii.xs } };
  ({ display: "flex", flexGrow: 1, minWidth: "100%", flexDirection: "row", alignItems: "center", borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1 });
  ({ marginHorizontal: nativeDefault.space.PX_16, flexDirection: "row", gap });
  size = { position: "absolute", width: "100%", height: "100%", flexDirection: "row", alignItems: "flex-end", marginLeft: nativeDefault.space.PX_16 };
  if ("overlay" === arg1) {
    TEXT_BRAND = tmp(575).colors.TEXT_STRONG;
  } else {
    TEXT_BRAND = tmp(575).colors.TEXT_BRAND;
  }
  ({ height: 2, backgroundColor: TEXT_BRAND, borderTopStartRadius: nativeDefault.radii.xs, borderTopEndRadius: nativeDefault.radii.xs });
  return obj;
});
let closure_12 = { code: "(function TabsNativeTsx1(){let[activeIndex,itemCount]=this.__closure;return Math.round(Math.min(Math.max(activeIndex.get(),0),itemCount-1));})" };
let closure_13 = { code: "(function TabsNativeTsx2(){let[itemDimensions,clampedActiveIndex]=this.__closure;const activeItem=itemDimensions.get()[clampedActiveIndex.get()];if(activeItem==null)return 0;return activeItem.width;})" };
let closure_14 = { code: "(function TabsNativeTsx3(){let[itemDimensions,clampedActiveIndex]=this.__closure;var _itemDimensions$get$c,_itemDimensions$get$c2;return(_itemDimensions$get$c=(_itemDimensions$get$c2=itemDimensions.get()[clampedActiveIndex.get()])===null||_itemDimensions$get$c2===void 0?void 0:_itemDimensions$get$c2.x)!==null&&_itemDimensions$get$c!==void 0?_itemDimensions$get$c:0;})" };
let closure_15 = { code: "(function TabsNativeTsx4(){let[indicatorTranslateX,pressedIndex,clampedActiveIndex,PRESSED_TRANSLATE_AMOUNT,indicatorWidth,scrollOverflow,interpolate,SCROLL_OVERFLOW_UPPER_BOUND,SCROLL_OVERFLOW_MAX_SCALE,withSpring,SELECTED_INDICATOR_SPRING]=this.__closure;let translateX=indicatorTranslateX.get();let scaleX=1;if(pressedIndex.get()>=0){if(pressedIndex.get()<clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX-=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}else if(pressedIndex.get()>clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX+=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}}if(scrollOverflow.get()<0){const scaleFactor=interpolate(scrollOverflow.get(),[-SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=-scaleAmount/2;}else if(scrollOverflow.get()>0){const scaleFactor=interpolate(scrollOverflow.get(),[SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=scaleAmount/2;}return{width:withSpring(indicatorWidth.get(),SELECTED_INDICATOR_SPRING),transform:[{translateX:withSpring(translateX,SELECTED_INDICATOR_SPRING)},{scaleX:withSpring(scaleX,SELECTED_INDICATOR_SPRING)}]};})" };
let closure_16 = { code: "(function TabsNativeTsx5(event){let[scrollOffset,onScrollWorklet]=this.__closure;var _onScrollWorklet;scrollOffset.set(event.contentOffset.x);(_onScrollWorklet=onScrollWorklet)===null||_onScrollWorklet===void 0||_onScrollWorklet(event.contentOffset.x);})" };
let closure_17 = { code: "(function TabsNativeTsx6(){let[onEndDrag]=this.__closure;var _onEndDrag;(_onEndDrag=onEndDrag)===null||_onEndDrag===void 0||_onEndDrag();})" };
let closure_18 = { code: "(function TabsNativeTsx7(){let[scrollOffset,activeIndex,itemDimensions]=this.__closure;return{scrollOffset:scrollOffset.get(),activeIndex:activeIndex.get(),itemDimensions:itemDimensions.get()};})" };
let closure_19 = { code: "(function TabsNativeTsx8(props,prevState){let[cheapWorkletShallowEqual,itemSpacing,pageWidth,scheduleOnRN,scrollToOffset,AUTO_SCROLL_BUFFER]=this.__closure;var _itemDimensions$activ,_itemDimensions$activ2,_itemDimensions$activ3;if(props.activeIndex===(prevState===null||prevState===void 0?void 0:prevState.activeIndex))return;if(cheapWorkletShallowEqual(props,prevState!==null&&prevState!==void 0?prevState:undefined))return;const{scrollOffset:scrollOffset,activeIndex:activeIndex,itemDimensions:itemDimensions}=props;const width=itemDimensions.reduce(function(sum,item){var _item$width;return sum+((_item$width=item===null||item===void 0?void 0:item.width)!==null&&_item$width!==void 0?_item$width:0);},0);const itemOffset=((_itemDimensions$activ=(_itemDimensions$activ2=itemDimensions[activeIndex])===null||_itemDimensions$activ2===void 0?void 0:_itemDimensions$activ2.x)!==null&&_itemDimensions$activ!==void 0?_itemDimensions$activ:0)+(activeIndex-1)*itemSpacing;const itemWidth=(_itemDimensions$activ3=itemDimensions[activeIndex])===null||_itemDimensions$activ3===void 0?void 0:_itemDimensions$activ3.width;if(width===0||itemOffset==null||itemWidth==null)return;if(scrollOffset+pageWidth<itemOffset+itemWidth){scheduleOnRN(scrollToOffset,itemOffset+AUTO_SCROLL_BUFFER);}else if(itemOffset<scrollOffset){scheduleOnRN(scrollToOffset,itemOffset-AUTO_SCROLL_BUFFER);}})" };
let size = size_mod;
let result = size.fileFinishedImporting("design/components/Tabs/native/Tabs.native.tsx");

export { defaultCountFormatter };
export function Tabs(state) {
  let itemDimensions;
  let itemSpacing;
  let items;
  let items21;
  let items22;
  let obj7;
  let onEndDrag;
  let onScrollWorklet;
  let pageWidth;
  let pressedIndex;
  let scrollOffset;
  let sharedValue;
  let str;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp41;
  let tmp42;
  let tmp43;
  let tmp44;
  let tmp45;
  let tmp46;
  let tmp47;
  let tmp48;
  let tmp49;
  let tmp50;
  let tmp51;
  let tmp7;
  let tmp8;
  let tmp9;
  state = state.state;
  let flag = state.grow;
  if (flag === undefined) {
    flag = true;
  }
  let formatCount = state.formatCount;
  if (formatCount === undefined) {
    formatCount = sharedValue;
  }
  const simultaneousHandlers = state.simultaneousHandlers;
  const variant = state.variant;
  items = undefined;
  pressedIndex = undefined;
  let controlsContainer;
  let activeIndex = state.activeIndex;
  ({ scrollOffset, items } = state);
  ({ itemDimensions, itemSpacing, pageWidth, pressedIndex } = state);
  const setActiveIndex = state.setActiveIndex;
  const useReducedMotion = state.useReducedMotion;
  ({ onScrollWorklet, onEndDrag } = state);
  const scrollOverflow = state.scrollOverflow;
  let tmp = controlsContainer(itemSpacing, variant);
  controlsContainer = tmp;
  let tmp2 = state;
  let obj = state(formatCount[4]);
  sharedValue = obj.useSharedValue(pageWidth);
  const length = items.length;
  let obj2 = simultaneousHandlers;
  const ref = simultaneousHandlers.useRef(null);
  let items1 = [sharedValue];
  const callback = simultaneousHandlers.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
  }, items1);
  let items2 = [length, activeIndex, length];
  let c0;
  let c1;
  [tmp7, tmp8, tmp9] = items2;
  const obj3 = state(formatCount[4]);
  class TabsNativeTsx1 {
    constructor() {
      return Math.round(Math.min(Math.max(_undefined.get(), 0), c1 - 1));
    }
  }
  let items3 = [tmp8, tmp9];
  TabsNativeTsx1.__closure = items3;
  TabsNativeTsx1.__workletHash = 9107573448935;
  TabsNativeTsx1.__initData = tmp7;
  const derivedValue = obj3.useDerivedValue(TabsNativeTsx1);
  let items4 = [ref, itemDimensions, derivedValue];
  c0 = undefined;
  c1 = undefined;
  [tmp11, tmp12, tmp13] = items4;
  const tmp2Result = tmp2(formatCount[4]);
  class TabsNativeTsx2 {
    constructor() {
      const value = _undefined.get();
      const tmp2 = value[_undefined2.get(_undefined2)];
      let num = 0;
      if (null != tmp2) {
        num = tmp2.width;
      }
      return num;
    }
  }
  const items5 = [tmp12, tmp13];
  TabsNativeTsx2.__closure = items5;
  TabsNativeTsx2.__workletHash = 5186637785842;
  TabsNativeTsx2.__initData = tmp11;
  const derivedValue1 = tmp2Result.useDerivedValue(TabsNativeTsx2);
  const items6 = [closure_14, itemDimensions, derivedValue];
  c0 = undefined;
  c1 = undefined;
  [tmp15, tmp16, tmp17] = items6;
  const tmp2Result6 = tmp2(formatCount[4]);
  class TabsNativeTsx3 {
    constructor() {
      const value = _undefined.get();
      const tmp2 = value[_undefined2.get(_undefined2)];
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
  const items7 = [tmp16, tmp17];
  TabsNativeTsx3.__closure = items7;
  TabsNativeTsx3.__workletHash = 1444207560709;
  TabsNativeTsx3.__initData = tmp15;
  const derivedValue2 = tmp2Result6.useDerivedValue(TabsNativeTsx3);
  const items8 = [closure_15, derivedValue2, pressedIndex, derivedValue, 0.04, derivedValue1, scrollOverflow, , , , , ];
  const useAnimatedStyle = tmp2(tmp3[4]).useAnimatedStyle;
  tmp2(formatCount[4]);
  items8[7] = tmp2(formatCount[4]).interpolate;
  items8[8] = 50;
  items8[9] = 0.9;
  items8[10] = tmp2(formatCount[7]).withSpring;
  items8[11] = useReducedMotion;
  c0 = undefined;
  c1 = undefined;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  let c10;
  [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31] = items8;
  class TabsNativeTsx4 {
    constructor() {
      let items4;
      let sum;
      const value = _undefined.get();
      let num = 1;
      let tmp2 = value;
      if (_undefined2.get() >= 0) {
        let num2;
        let diff;
        const value3 = obj.get();
        const obj2 = _undefined3;
        if (value3 < _undefined3.get()) {
          num2 = 1 + c3;
          diff = value - _undefined4.get() * (c3 / 2);
        } else {
          const value4 = obj.get();
          num2 = 1;
          diff = value;
          if (value4 > obj2.get()) {
            num2 = 1 + c3;
            diff = value + _undefined4.get() * (c3 / 2);
          }
        }
        num = num2;
        tmp2 = diff;
      }
      if (_undefined5.get() < 0) {
        items = [-c7, 0];
        const items1 = [c8, 1];
        const tmp16 = _undefined6(_undefined5.get(), items, items1, "clamp");
        sum = tmp2 + -_undefined4.get() * (1 - tmp16) / 2;
        num = tmp16;
      } else {
        sum = tmp2;
        if (_undefined5.get() > 0) {
          const items2 = [c7, 0];
          const items3 = [c8, 1];
          const tmp23 = _undefined6(_undefined5.get(), items2, items3, "clamp");
          sum = tmp2 + _undefined4.get() * (1 - tmp23) / 2;
          num = tmp23;
        }
      }
      const obj4 = { width: _undefined7(_undefined4.get(), c10), transform: items4 };
      items4 = [{ translateX: _undefined7(sum, c10) }, ];
      ({ translateX: _undefined7(sum, c10) });
      items4[1] = { scaleX: _undefined7(num, c10) };
      ({ scaleX: _undefined7(num, c10) });
      return obj4;
    }
  }
  const items9 = [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31];
  TabsNativeTsx4.__closure = items9;
  TabsNativeTsx4.__workletHash = 9859194654578;
  TabsNativeTsx4.__initData = tmp20;
  const animatedStyle = useAnimatedStyle(TabsNativeTsx4);
  const items10 = [closure_16, scrollOffset, onScrollWorklet];
  c0 = undefined;
  c1 = undefined;
  [tmp33, tmp34, tmp35] = items10;
  let obj4 = { onScroll: TabsNativeTsx5, onEndDrag: TabsNativeTsx6 };
  const tmp2Result8 = tmp2(formatCount[4]);
  class TabsNativeTsx5 {
    constructor(contentOffset) {
      const result = _undefined.set(contentOffset.contentOffset.x);
      if (c1 != null) {
        tmp2(contentOffset.contentOffset.x);
      }
    }
  }
  const items11 = [tmp34, tmp35];
  TabsNativeTsx5.__closure = items11;
  TabsNativeTsx5.__workletHash = 13274284011801;
  TabsNativeTsx5.__initData = tmp33;
  const items12 = [closure_17, onEndDrag];
  c0 = undefined;
  [tmp36, tmp37] = items12;
  class TabsNativeTsx6 {
    constructor() {
      if (c0 != null) {
        tmp();
      }
    }
  }
  const items13 = [tmp37];
  TabsNativeTsx6.__closure = items13;
  TabsNativeTsx6.__workletHash = 12887492277932;
  TabsNativeTsx6.__initData = tmp36;
  const items14 = [useReducedMotion];
  const animatedScrollHandler = tmp2Result8.useAnimatedScrollHandler(obj4);
  const callback1 = obj2.useCallback((x) => {
    const current = ref.current;
    if (current != null) {
      const obj = { x, animated: !useReducedMotion };
      current.scrollTo(obj);
    }
  }, items14);
  const items15 = [closure_18, scrollOffset, activeIndex, itemDimensions];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp41, tmp42, tmp43, tmp44] = items15;
  const tmp2Result9 = tmp2(formatCount[4]);
  class TabsNativeTsx7 {
    constructor() {
      const obj = { scrollOffset: _undefined.get(), activeIndex: _undefined2.get(), itemDimensions: _undefined3.get() };
      return obj;
    }
  }
  const items16 = [tmp42, tmp43, tmp44];
  TabsNativeTsx7.__closure = items16;
  TabsNativeTsx7.__workletHash = 16238996091738;
  TabsNativeTsx7.__initData = tmp41;
  const items17 = [closure_19, , , , , , ];
  const useAnimatedReaction = tmp2Result9.useAnimatedReaction;
  items17[1] = tmp2(formatCount[8]).cheapWorkletShallowEqual;
  items17[2] = itemSpacing;
  items17[3] = pageWidth;
  items17[4] = tmp2(formatCount[9]).scheduleOnRN;
  items17[5] = callback1;
  items17[6] = 16;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51] = items17;
  class TabsNativeTsx8 {
    constructor(activeIndex, arg1) {
      let activeIndex2;
      let itemDimensions;
      let scrollOffset;
      let activeIndex1;
      activeIndex = activeIndex.activeIndex;
      if (arg1 != null) {
        activeIndex1 = tmp.activeIndex;
      }
      if (activeIndex !== activeIndex1) {
        const tmp19 = c0;
        if (!tmp19(activeIndex, arg1)) {
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
          const sum = num2 + (activeIndex2 - 1) * c1;
          let width;
          if (itemDimensions[activeIndex2] != null) {
            width = tmp7.width;
          }
          const tmp9 = 0 !== reduced && true && null != width;
          if (tmp9) {
            if (scrollOffset + c2 < sum + width) {
              _undefined(c4, sum + c5);
            } else if (sum < scrollOffset) {
              _undefined(c4, sum - c5);
            }
          }
        }
      }
    }
  }
  const items18 = [tmp46, tmp47, tmp48, tmp49, tmp50, tmp51];
  TabsNativeTsx8.__closure = items18;
  TabsNativeTsx8.__workletHash = 332745523033;
  TabsNativeTsx8.__initData = tmp45;
  const animatedReaction = useAnimatedReaction(TabsNativeTsx7, TabsNativeTsx8);
  const items19 = [items, length, formatCount, state, flag, pressedIndex, activeIndex, setActiveIndex, tmp.controlsContainer, variant];
  const items20 = [simultaneousHandlers];
  const memo = obj2.useMemo(() => {
    let grow;
    let itemCount;
    let pressed;
    let obj = {
      style: controlsContainer.controlsContainer,
      children: items.map((count, index) => {
        let id;
        let indicatorDot;
        let label;
        let tmp2;
        count = count.count;
        state = index;
        ({ label, indicatorDot, id } = count);
        const obj = {
          index,
          itemCount,
          label,
          count: tmp2,
          indicatorDot,
          state,
          grow,
          pressed,
          selected: index === closure_5.get(),
          onPress: function handlePress() {
            setActiveIndex(index);
          },
          onPressIn: function handlePressIn() {
            const result = pressed.set(index);
          },
          onPressOut: function handlePressOut() {
            const result = pressed.set(-1);
          },
          variant
        };
        tmp2 = undefined;
        const TabItem = state(formatCount[10]).TabItem;
        const tmp = items;
        if (null != count) {
          tmp2 = closure_2(count);
        }
        return tmp(TabItem, obj, id);
      })
    };
    return metroRequire(React3, obj);
  }, items19);
  const memo1 = obj2.useMemo(() => {
    let result = null;
    if (null != simultaneousHandlers) {
      const Gesture = LegacyBaseButton.Gesture;
      const NativeResult = Gesture.Native();
      result = NativeResult.simultaneousWithExternalGesture(tmp);
    }
    return result;
  }, items20);
  const obj5 = { ref, accessibilityRole: str, keyboardShouldPersistTaps: "handled", horizontal: true, onScroll: animatedScrollHandler, scrollEventThrottle: 16, showsHorizontalScrollIndicator: false, contentContainerStyle: tmp.container, bounces: false, children: items22 };
  str = undefined;
  const tmp2Result10 = tmp2(formatCount[12]);
  const tmp55 = pressedIndex;
  const tmp56 = setActiveIndex;
  if (tmp2Result10.isIOS()) {
    str = "tabbar";
  }
  const obj6 = { style: tmp.indicatorContainer, onLayout: callback, children: items(flag(tmp3[4]).View, obj7) };
  obj7 = { style: items21 };
  items21 = [tmp.indicator, animatedStyle];
  items22 = [items(variant, obj6), memo];
  const tmp55Result = tmp55(tmp56, obj5);
  let tmp57Result = tmp55Result;
  const tmp57 = items;
  if (null != memo1) {
    const obj8 = { gesture: memo1, children: tmp55Result };
    tmp57Result = tmp57(tmp2(tmp3[11]).GestureDetector, obj8);
  }
  return tmp57Result;
}
