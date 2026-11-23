// Module ID: 15859
// Function ID: 15860
// Name: useStickyEditFormHeaders
// Dependencies: [19, 1653, 1706, 2]
// Exports: default

// Module 15859 (useStickyEditFormHeaders)
import _mod1653 from "module_1653" /* 1653 */;
import _mod1706 from "module_1706" /* 1706 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let set;

let closure_3 = { code: "(function useStickyEditFormHeadersTsx1(event){let[scrollPosition,onScroll,scheduleOnRN,headerY,headerHiddenOffset,headerHeight]=this.__closure;const maxScrollY=Math.max(0,event.contentSize.height-event.layoutMeasurement.height);const currentY=Math.min(event.contentOffset.y,maxScrollY);const previousY=Math.min(scrollPosition.get(),maxScrollY);scrollPosition.set(event.contentOffset.y);if(onScroll!=null){scheduleOnRN(onScroll,event);}const stickStart=headerY.get();if(currentY<=stickStart){headerHiddenOffset.set(0);return;}const delta=currentY-Math.max(previousY,stickStart);headerHiddenOffset.set(Math.min(Math.max(headerHiddenOffset.get()+delta,0),headerHeight.get()));})" };
let closure_4 = { code: "(function useStickyEditFormHeadersTsx2(){let[scrollPosition,headerY,headerHiddenOffset]=this.__closure;const scrollY=scrollPosition.get();const stickStart=headerY.get();return scrollY>stickStart?scrollY-stickStart-headerHiddenOffset.get():0;})" };
let closure_5 = { code: "(function useStickyEditFormHeadersTsx3(){let[headerTranslateY]=this.__closure;return{transform:[{translateY:headerTranslateY.get()}]};})" };
let closure_6 = { code: "(function useStickyEditFormHeadersTsx4(){let[tabsY,scrollPosition,headerHeight,headerY,headerTranslateY]=this.__closure;const tabsTop=tabsY.get();if(tabsTop<=0){return 0;}const scrollY=scrollPosition.get();const height=headerHeight.get();const headerBottom=height>0?Math.max(0,headerY.get()+headerTranslateY.get()+height-scrollY):0;return Math.max(0,scrollY+headerBottom-tabsTop);})" };
let result = size.fileFinishedImporting("modules/user_profile/native/useStickyEditFormHeaders.tsx");

export default function useStickyEditFormHeaders(arg0, arg1, arg2) {
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp23;
  let tmp24;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let useStickyEditFormHeadersTsx1;
  let closure_0 = arg1;
  let obj = _mod1653;
  const sharedValue = obj.useSharedValue(0);
  const obj2 = _mod1653;
  const sharedValue1 = obj2.useSharedValue(0);
  const obj3 = _mod1653;
  const sharedValue2 = obj3.useSharedValue(0);
  const obj4 = _mod1653;
  const sharedValue3 = obj4.useSharedValue(0);
  const obj5 = _mod1653;
  const sharedValue4 = obj5.useSharedValue(0);
  const ref = react.useRef(null);
  let items = [closure_3, arg0, arg2, , , , ];
  const useAnimatedScrollHandler = _mod1653.useAnimatedScrollHandler;
  items[3] = _mod1706.scheduleOnRN;
  items[4] = sharedValue;
  items[5] = sharedValue2;
  items[6] = sharedValue1;
  let c5;
  [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items;
  const obj7 = { onScroll: useStickyEditFormHeadersTsx1 };
  useStickyEditFormHeadersTsx1 = function useStickyEditFormHeadersTsx1(contentSize) {
    const bound = Math.max(0, contentSize.contentSize.height - contentSize.layoutMeasurement.height);
    const bound1 = Math.min(contentSize.contentOffset.y, bound);
    const bound2 = Math.min(_undefined.get(), bound);
    const result = _undefined.set(contentSize.contentOffset.y);
    if (null != c1) {
      _undefined2(tmp5, contentSize);
    }
    const value = _undefined3.get();
    if (bound1 <= value) {
      const result1 = _undefined4.set(0);
    } else {
      const _Math = Math;
      const _Math2 = Math;
      const _Math3 = Math;
      const diff = bound1 - Math.max(bound2, value);
      set = _undefined4.set;
      const bound3 = Math.max(_undefined4.get() + diff, 0);
      const result2 = set(min(bound3, _undefined5.get()));
    }
  };
  const items1 = [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
  useStickyEditFormHeadersTsx1.__closure = items1;
  useStickyEditFormHeadersTsx1.__workletHash = 3468125991740;
  useStickyEditFormHeadersTsx1.__initData = tmp10;
  const items2 = [closure_4, arg0, sharedValue, sharedValue2];
  [tmp18, tmp19, tmp20, tmp21] = items2;
  function useStickyEditFormHeadersTsx2() {
    const value = _undefined.get();
    const value2 = _undefined2.get();
    let num = 0;
    if (value > value2) {
      const diff = value - value2;
      num = diff - _undefined3.get();
    }
    return num;
  }
  const items3 = [tmp19, tmp20, tmp21];
  useStickyEditFormHeadersTsx2.__closure = items3;
  useStickyEditFormHeadersTsx2.__workletHash = 2869064830561;
  useStickyEditFormHeadersTsx2.__initData = tmp18;
  const animatedScrollHandler = useAnimatedScrollHandler(obj7);
  const tmpResult = _mod1653;
  const derivedValue = tmpResult.useDerivedValue(useStickyEditFormHeadersTsx2);
  const items4 = [closure_5, derivedValue];
  [tmp23, tmp24] = items4;
  function useStickyEditFormHeadersTsx3() {
    let items;
    const obj = { transform: items };
    items = [{ translateY: _undefined.get() }];
    ({ translateY: _undefined.get() });
    return obj;
  }
  const items5 = [tmp24];
  useStickyEditFormHeadersTsx3.__closure = items5;
  useStickyEditFormHeadersTsx3.__workletHash = 13231650278188;
  useStickyEditFormHeadersTsx3.__initData = tmp23;
  const tmpResult3 = _mod1653;
  const animatedStyle = tmpResult3.useAnimatedStyle(useStickyEditFormHeadersTsx3);
  const items6 = [closure_6, sharedValue3, arg0, sharedValue1, sharedValue, derivedValue];
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp26, tmp27, tmp28, tmp29, tmp30, tmp31] = items6;
  function useStickyEditFormHeadersTsx4() {
    const value = _undefined.get();
    if (value <= 0) {
      return 0;
    } else {
      const value4 = _undefined2.get();
      const value5 = _undefined3.get();
      let num = 0;
      if (value5 > 0) {
        const _Math = Math;
        const value6 = _undefined4.get();
        num = max(0, value6 + _undefined5.get() + value5 - value4);
      }
      const _Math2 = Math;
      return Math.max(0, value4 + num - value);
    }
  }
  const items7 = [tmp27, tmp28, tmp29, tmp30, tmp31];
  useStickyEditFormHeadersTsx4.__closure = items7;
  useStickyEditFormHeadersTsx4.__workletHash = 17221813634962;
  useStickyEditFormHeadersTsx4.__initData = tmp26;
  const items8 = [sharedValue, sharedValue1];
  const tmpResult4 = _mod1653;
  const derivedValue1 = tmpResult4.useDerivedValue(useStickyEditFormHeadersTsx4);
  const items9 = [sharedValue4];
  const callback = obj6.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    const height = layout.height;
    const result = sharedValue.set(layout.y);
    const result1 = sharedValue1.set(height);
  }, items8);
  const items10 = [arg1, sharedValue3];
  const callback1 = obj6.useCallback((nativeEvent) => sharedValue4.set(nativeEvent.nativeEvent.layout.height), items9);
  const obj8 = {
    headerStyle: animatedStyle,
    handleHeaderLayout: callback,
    tabsAnchorRef: ref,
    measureTabsY: react.useCallback(() => {
      const current = ref.current;
      let innerViewRef;
      if (current != null) {
        innerViewRef = current.getInnerViewRef();
      }
      if (null != innerViewRef) {
        const current2 = ref.current;
        if (current2 != null) {
          current2.measureLayout(innerViewRef, (arg0, arg1) => sharedValue3.set(arg1));
        }
      }
    }, items10),
    tabsTranslateY: derivedValue1,
    handleTabsBarLayout: callback1,
    tabsBarHeight: sharedValue4,
    scrollHandler: animatedScrollHandler
  };
  return obj8;
};
