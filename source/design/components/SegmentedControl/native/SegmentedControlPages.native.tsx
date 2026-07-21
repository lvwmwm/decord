// Module ID: 8750
// Function ID: 69149
// Name: SegmentedControlPage
// Dependencies: []
// Exports: SegmentedControlPages

// Module 8750 (SegmentedControlPage)
function SegmentedControlPage(children) {
  const reportedPageIndex = children.reportedPageIndex;
  const arg1 = reportedPageIndex;
  const pageIndex = children.pageIndex;
  const importDefault = pageIndex;
  const scrollTargetPageIndex = children.scrollTargetPageIndex;
  const dependencyMap = scrollTargetPageIndex;
  const index = children.index;
  const callback = index;
  const activePageRangeStart = children.activePageRangeStart;
  const React = activePageRangeStart;
  const activePageRangeEnd = children.activePageRangeEnd;
  const jsx = activePageRangeEnd;
  let obj = { "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null };
  Object.setPrototypeOf(null);
  const merged = Object.assign(children, obj);
  let obj1 = arg1(dependencyMap[4]);
  const fn = function v() {
    let tmp = Math.floor(pageIndex.get()) === index;
    if (!tmp) {
      const _Math = Math;
      tmp = Math.ceil(pageIndex.get()) === index;
    }
    if (!tmp) {
      tmp = scrollTargetPageIndex.get() === index;
    }
    return tmp;
  };
  fn.__closure = { pageIndex, index, scrollTargetPageIndex };
  fn.__workletHash = 6181538518841;
  fn.__initData = closure_19;
  const derivedValue = obj1.useDerivedValue(fn);
  let closure_6 = derivedValue;
  let obj2 = arg1(dependencyMap[4]);
  class S {
    constructor() {
      obj = {};
      str = "box-none";
      if (reportedPageIndex.get() !== index) {
        str = "none";
      }
      obj.pointerEvents = str;
      return obj;
    }
  }
  S.__closure = { reportedPageIndex, index };
  S.__workletHash = 13786543795395;
  S.__initData = closure_20;
  const animatedProps = obj2.useAnimatedProps(S);
  const tmp5 = callback(React.useState(() => reportedPageIndex.get() !== index), 2);
  const first = tmp5[0];
  let closure_7 = first;
  let closure_8 = tmp7;
  let obj3 = arg1(dependencyMap[4]);
  const fn2 = function p() {
    return reportedPageIndex.get() !== index;
  };
  fn2.__closure = { reportedPageIndex, index };
  fn2.__workletHash = 7407561160388;
  fn2.__initData = closure_21;
  class I {
    constructor(arg0) {
      obj = reportedPageIndex(scrollTargetPageIndex[4]);
      tmp = obj.runOnJS(closure_8)(children);
      return;
    }
  }
  obj = { runOnJS: arg1(dependencyMap[4]).runOnJS, setIsAccessibilityHidden: tmp7 };
  I.__closure = obj;
  I.__workletHash = 1716421879381;
  I.__initData = closure_22;
  const animatedReaction = obj3.useAnimatedReaction(fn2, I);
  const ref = React.useRef(null);
  let closure_9 = ref;
  let closure_10 = React.useRef(first);
  const items = [first];
  const effect = React.useEffect(() => {
    let current = ref.current;
    if (current) {
      current = !first;
    }
    ref.current = first;
    if (current) {
      let obj = reportedPageIndex(scrollTargetPageIndex[6]);
      current = obj.isIOS();
    }
    if (current) {
      obj = { ref, delay: 100 };
      const result = reportedPageIndex(scrollTargetPageIndex[8]).setAccessibilityFocus(obj);
      const obj2 = reportedPageIndex(scrollTargetPageIndex[8]);
    }
  }, items);
  class A {
    constructor() {
      obj = {};
      str = "none";
      if (closure_6.get()) {
        str = "flex";
      }
      obj.display = str;
      obj.flex = 1;
      return obj;
    }
  }
  A.__closure = { isVisibleOnScreen: derivedValue };
  A.__workletHash = 10465509086469;
  A.__initData = closure_23;
  const animatedStyle = arg1(dependencyMap[4]).useAnimatedStyle(A);
  const tmp12 = callback(React.useState(() => {
    let tmp = index >= activePageRangeStart.get();
    if (tmp) {
      tmp = index <= activePageRangeEnd.get();
    }
    return !tmp;
  }), 2);
  let closure_11 = tmp13;
  const obj6 = arg1(dependencyMap[4]);
  const fn3 = function y() {
    const items = [activePageRangeStart.get(), activePageRangeEnd.get()];
    return items;
  };
  fn3.__closure = { activePageRangeStart, activePageRangeEnd };
  fn3.__workletHash = 3980327308475;
  fn3.__initData = closure_24;
  class N {
    constructor(arg0) {
      [tmp, tmp2] = children;
      obj = reportedPageIndex(scrollTargetPageIndex[4]);
      tmp4 = index >= tmp;
      runOnJSResult = obj.runOnJS(closure_11);
      if (tmp4) {
        tmp5 = index;
        tmp4 = index <= tmp2;
      }
      tmp3Result = runOnJSResult(!tmp4);
      return;
    }
  }
  obj = { index, runOnJS: arg1(dependencyMap[4]).runOnJS, setFreeze: tmp13 };
  N.__closure = obj;
  N.__workletHash = 16675026816258;
  N.__initData = closure_25;
  const animatedReaction1 = arg1(dependencyMap[4]).useAnimatedReaction(fn3, N);
  obj1 = { ref };
  const merged1 = Object.assign(merged);
  obj1["animatedProps"] = animatedProps;
  let str = "auto";
  if (first) {
    str = "no-hide-descendants";
  }
  obj1["importantForAccessibility"] = str;
  obj1["accessibilityElementsHidden"] = first;
  obj2 = { freeze: tmp12[0] };
  obj3 = { style: animatedStyle, children: children.item.page };
  obj2.children = jsx(importDefault(dependencyMap[4]).View, obj3);
  obj1["children"] = jsx(arg1(dependencyMap[9]).Freeze, obj2);
  return jsx(importDefault(dependencyMap[4]).View, obj1, index);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const jsx = arg1(dependencyMap[3]).jsx;
let closure_6 = importDefault(dependencyMap[4]).createAnimatedComponent(arg1(dependencyMap[2]).ScrollView);
let closure_7 = { code: "function SegmentedControlPagesNativeTsx1(){const{activeIndex}=this.__closure;return activeIndex.get();}" };
let closure_8 = { code: "function SegmentedControlPagesNativeTsx2(value){const{runOnJS,updateCurrentActiveIndex}=this.__closure;runOnJS(updateCurrentActiveIndex)(value);}" };
let closure_9 = { code: "function SegmentedControlPagesNativeTsx3(){const{pageIndex}=this.__closure;return pageIndex.get();}" };
let closure_10 = { code: "function SegmentedControlPagesNativeTsx4(value){const{activeIndex}=this.__closure;activeIndex.set(value);}" };
let closure_11 = { code: "function SegmentedControlPagesNativeTsx5(contentOffset,contentSize){const{pageWidth,pageIndex,roundIfClose,reportedPageIndex,runOnJS,onPageChanged}=this.__closure;if(pageWidth===0){return;}pageIndex.set(Math.min(Math.max(roundIfClose(contentOffset.x/pageWidth,1e-4),0),roundIfClose(contentSize.width/pageWidth,1e-4)-1));const pageFullyVisible=pageIndex.get()%1===0;if(pageFullyVisible&&reportedPageIndex.get()!==pageIndex.get()){reportedPageIndex.set(pageIndex.get());runOnJS(onPageChanged)(pageIndex.get());}}" };
let closure_12 = { code: "function SegmentedControlPagesNativeTsx6(event){const{scrollTarget,onBeginDragWorklet}=this.__closure;var _onBeginDragWorklet;scrollTarget.set(-1);(_onBeginDragWorklet=onBeginDragWorklet)===null||_onBeginDragWorklet===void 0||_onBeginDragWorklet(event);}" };
let closure_13 = { code: "function SegmentedControlPagesNativeTsx7(event){const{onEndDragWorklet}=this.__closure;var _onEndDragWorklet;(_onEndDragWorklet=onEndDragWorklet)===null||_onEndDragWorklet===void 0||_onEndDragWorklet(event);}" };
let closure_14 = { code: "function SegmentedControlPagesNativeTsx8({contentOffset:contentOffset,contentSize:contentSize}){const{scrollTarget,roundIfClose,runOnJS,refreshScrollOffset,resolvePageIndex}=this.__closure;if(scrollTarget.get()!==-1){const hasReachedTarget=roundIfClose(contentOffset.x-scrollTarget.get(),1e-4)===0;if(hasReachedTarget){scrollTarget.set(-1);}else{const page=scrollTarget.get();runOnJS(refreshScrollOffset)(page);}}resolvePageIndex(contentOffset,contentSize);}" };
let closure_15 = { code: "function SegmentedControlPagesNativeTsx9(event){const{lastScrollOffsetX,onScrollWorklet,itemCount,pageWidth,activeIndex,runOnJS,refreshScrollOffset,scrollOverflow,scrollTarget,roundIfClose,resolvePageIndex}=this.__closure;var _onScrollWorklet;const{contentOffset:contentOffset,contentSize:contentSize}=event;if(contentSize.width===0){return;}if(lastScrollOffsetX.get()===contentOffset.x){return;}lastScrollOffsetX.set(contentOffset.x);(_onScrollWorklet=onScrollWorklet)===null||_onScrollWorklet===void 0||_onScrollWorklet(event);const expectedContentSize=itemCount*pageWidth;if(Math.round(expectedContentSize)%Math.round(contentSize.width)!==0){const page=activeIndex.get()*pageWidth;runOnJS(refreshScrollOffset)(page);return;}if(contentOffset.x<0){scrollOverflow.set(contentOffset.x);}else if(contentOffset.x>contentSize.width-pageWidth){scrollOverflow.set(contentOffset.x-(contentSize.width-pageWidth));}else{scrollOverflow.set(0);}if(scrollTarget.get()!==-1){const hasReachedTarget=roundIfClose(contentOffset.x-scrollTarget.get(),1e-4)===0;if(hasReachedTarget){scrollTarget.set(-1);}else{return;}}resolvePageIndex(contentOffset,contentSize);}" };
let closure_16 = { code: "function SegmentedControlPagesNativeTsx10(){const{scrollTarget,roundIfClose,pageWidth}=this.__closure;if(scrollTarget.get()===-1){return-1;}return roundIfClose(scrollTarget.get()/pageWidth,1e-4);}" };
let closure_17 = { code: "function SegmentedControlPagesNativeTsx11(){const{pageIndex,scrollTargetPageIndex}=this.__closure;const idx=pageIndex.get();let lo=Math.floor(idx);let hi=Math.ceil(idx);const target=scrollTargetPageIndex.get();if(target!==-1){lo=Math.min(lo,target);hi=Math.max(hi,target);}return[lo,hi];}" };
let closure_18 = { code: "function SegmentedControlPagesNativeTsx12(range,prev){const{visiblePageRange}=this.__closure;if(prev==null||prev[0]!==range[0]||prev[1]!==range[1]){visiblePageRange.set(range);}}" };
let closure_19 = { code: "function SegmentedControlPagesNativeTsx13(){const{pageIndex,index,scrollTargetPageIndex}=this.__closure;if(Math.floor(pageIndex.get())===index||Math.ceil(pageIndex.get())===index){return true;}if(scrollTargetPageIndex.get()===index){return true;}return false;}" };
let closure_20 = { code: "function SegmentedControlPagesNativeTsx14(){const{reportedPageIndex,index}=this.__closure;const isHidden=reportedPageIndex.get()!==index;return{pointerEvents:isHidden?'none':'box-none'};}" };
let closure_21 = { code: "function SegmentedControlPagesNativeTsx15(){const{reportedPageIndex,index}=this.__closure;return reportedPageIndex.get()!==index;}" };
let closure_22 = { code: "function SegmentedControlPagesNativeTsx16(hidden){const{runOnJS,setIsAccessibilityHidden}=this.__closure;runOnJS(setIsAccessibilityHidden)(hidden);}" };
let closure_23 = { code: "function SegmentedControlPagesNativeTsx17(){const{isVisibleOnScreen}=this.__closure;return{display:isVisibleOnScreen.get()?'flex':'none',flex:1};}" };
let closure_24 = { code: "function SegmentedControlPagesNativeTsx18(){const{activePageRangeStart,activePageRangeEnd}=this.__closure;return[activePageRangeStart.get(),activePageRangeEnd.get()];}" };
let closure_25 = { code: "function SegmentedControlPagesNativeTsx19([start,end]){const{index,runOnJS,setFreeze}=this.__closure;const isInActiveRange=index>=start&&index<=end;runOnJS(setFreeze)(!isInActiveRange);}" };
let closure_26 = { code: "function SegmentedControlPagesNativeTsx20(min,max){const{activePageRangeStart,activePageRangeEnd}=this.__closure;activePageRangeStart.set(Math.min(activePageRangeStart.get(),min));activePageRangeEnd.set(Math.max(activePageRangeEnd.get(),max));}" };
let closure_27 = { code: "function SegmentedControlPagesNativeTsx21(){const{activeIndex,pressedIndex}=this.__closure;return{activeIndex:activeIndex.get(),pressedIndex:pressedIndex.get()};}" };
let closure_28 = { code: "function SegmentedControlPagesNativeTsx22({activeIndex:activeIndex,pressedIndex:pressedIndex}){const{expandActivePageRange}=this.__closure;let min=activeIndex;let max=activeIndex;if(pressedIndex!==-1){min=Math.min(activeIndex,pressedIndex);max=Math.max(activeIndex,pressedIndex);}expandActivePageRange(Math.floor(min),Math.ceil(max));}" };
const importDefaultResult = importDefault(dependencyMap[4]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("design/components/SegmentedControl/native/SegmentedControlPages.native.tsx");

export const SegmentedControlPages = function SegmentedControlPages(onEndDragWorklet) {
  let activeIndex;
  let bounces;
  let items;
  let nativeGesture;
  let onBeginDragWorklet;
  let state;
  let style;
  ({ state, nativeGesture, onBeginDragWorklet } = onEndDragWorklet);
  const arg1 = onBeginDragWorklet;
  onEndDragWorklet = onEndDragWorklet.onEndDragWorklet;
  const importDefault = onEndDragWorklet;
  const onScrollWorklet = onEndDragWorklet.onScrollWorklet;
  const dependencyMap = onScrollWorklet;
  ({ items, activeIndex } = state);
  let callback = activeIndex;
  const visiblePageRange = state.visiblePageRange;
  const React = visiblePageRange;
  const pagerRef = state.pagerRef;
  const jsx = pagerRef;
  const scrollTarget = state.scrollTarget;
  let closure_6 = scrollTarget;
  const scrollOverflow = state.scrollOverflow;
  let closure_7 = scrollOverflow;
  const onPageChangeRef = state.onPageChangeRef;
  let closure_8 = onPageChangeRef;
  const pageWidth = state.pageWidth;
  let closure_9 = pageWidth;
  ({ style, bounces } = onEndDragWorklet);
  let obj = arg1(dependencyMap[4]);
  const sharedValue = obj.useSharedValue(activeIndex.get());
  let closure_10 = sharedValue;
  let obj1 = arg1(dependencyMap[4]);
  const sharedValue1 = obj1.useSharedValue(activeIndex.get());
  let closure_11 = sharedValue1;
  let closure_12 = length;
  let obj2 = arg1(dependencyMap[4]);
  const sharedValue2 = obj2.useSharedValue(undefined);
  let closure_13 = sharedValue2;
  let closure_14 = React.useRef(false);
  let closure_15 = React.useRef(activeIndex.get());
  callback = React.useCallback((current) => {
    closure_15.current = current;
  }, []);
  let closure_16 = callback;
  let obj3 = arg1(dependencyMap[4]);
  class J {
    constructor() {
      return activeIndex.get();
    }
  }
  J.__closure = { activeIndex };
  J.__workletHash = 4275537317596;
  J.__initData = closure_7;
  class W {
    constructor(arg0) {
      obj = onBeginDragWorklet(onScrollWorklet[4]);
      tmp = obj.runOnJS(closure_16)(onEndDragWorklet);
      return;
    }
  }
  obj = { runOnJS: arg1(dependencyMap[4]).runOnJS, updateCurrentActiveIndex: callback };
  W.__closure = obj;
  W.__workletHash = 1219187007872;
  W.__initData = closure_8;
  const animatedReaction = obj3.useAnimatedReaction(J, W);
  let obj5 = arg1(dependencyMap[4]);
  const fn = function z() {
    return sharedValue.get();
  };
  fn.__closure = { pageIndex: sharedValue };
  fn.__workletHash = 3363652844798;
  fn.__initData = closure_9;
  class E {
    constructor(arg0) {
      result = activeIndex.set(onEndDragWorklet);
      return;
    }
  }
  E.__closure = { activeIndex };
  E.__workletHash = 10225590895783;
  E.__initData = closure_10;
  const animatedReaction1 = obj5.useAnimatedReaction(fn, E);
  items = [onPageChangeRef];
  const callback1 = React.useCallback((arg0) => {
    let tmp = null == onPageChangeRef;
    if (!tmp) {
      tmp = null == onPageChangeRef.current;
    }
    if (!tmp) {
      onPageChangeRef.current(arg0);
    }
  }, items);
  let closure_17 = callback1;
  const items1 = [pagerRef, scrollTarget];
  const callback2 = React.useCallback((arg0) => {
    const result = scrollTarget.set(arg0);
    let tmp2 = null == pagerRef;
    if (!tmp2) {
      const current = pagerRef.current;
      tmp2 = null == current;
      let obj = current;
    }
    if (!tmp2) {
      obj = { x: arg0, animated: false };
      obj.scrollTo(obj);
    }
  }, items1);
  let closure_18 = callback2;
  const items2 = [pageWidth, callback2];
  const effect = React.useEffect(() => {
    if (pageWidth > 0) {
      if (!ref.current) {
        ref.current = true;
        if (ref2.current > 0) {
          callback2(ref2.current * pageWidth);
        }
      }
    }
  }, items2);
  function te(arg0, width) {
    if (0 !== pageWidth) {
      const _Math = Math;
      const _Math2 = Math;
      const bound = Math.max(onBeginDragWorklet(onScrollWorklet[5]).roundIfClose(arg0.x / pageWidth, 0.0001), 0);
      const obj2 = onBeginDragWorklet(onScrollWorklet[5]);
      const result = sharedValue.set(Math.min(bound, onBeginDragWorklet(onScrollWorklet[5]).roundIfClose(width.width / pageWidth, 0.0001) - 1));
      let tmp4 = sharedValue.get() % 1 === 0;
      if (tmp4) {
        const value = sharedValue1.get();
        tmp4 = value !== sharedValue.get();
      }
      if (tmp4) {
        const result1 = sharedValue1.set(sharedValue.get());
        const obj = onBeginDragWorklet(onScrollWorklet[4]);
        onBeginDragWorklet(onScrollWorklet[4]).runOnJS(callback1)(sharedValue.get());
        const runOnJSResult = onBeginDragWorklet(onScrollWorklet[4]).runOnJS(callback1);
      }
      const obj3 = onBeginDragWorklet(onScrollWorklet[5]);
    }
  }
  obj = { pageWidth, pageIndex: sharedValue, roundIfClose: arg1(dependencyMap[5]).roundIfClose, reportedPageIndex: sharedValue1, runOnJS: arg1(dependencyMap[4]).runOnJS, onPageChanged: callback1 };
  te.__closure = obj;
  te.__workletHash = 11872880107296;
  te.__initData = closure_11;
  const items3 = [callback1, sharedValue, pageWidth, sharedValue1];
  const callback3 = React.useCallback(te, items3);
  let closure_19 = callback3;
  obj1 = { onBeginDrag: oe, onEndDrag: ae };
  function oe(arg0) {
    const result = scrollTarget.set(-1);
    if (null != onBeginDragWorklet) {
      onBeginDragWorklet(arg0);
    }
  }
  oe.__closure = { scrollTarget, onBeginDragWorklet };
  oe.__workletHash = 3327779393906;
  oe.__initData = closure_12;
  function ae(arg0) {
    if (null != onEndDragWorklet) {
      onEndDragWorklet(arg0);
    }
  }
  ae.__closure = { onEndDragWorklet };
  ae.__workletHash = 14857102500821;
  ae.__initData = closure_13;
  function re(contentOffset) {
    contentOffset = contentOffset.contentOffset;
    if (-1 !== scrollTarget.get()) {
      if (0 === obj2.roundIfClose(contentOffset.x - scrollTarget.get(), 0.0001)) {
        const result = scrollTarget.set(-1);
      } else {
        const value = scrollTarget.get();
        onBeginDragWorklet(onScrollWorklet[4]).runOnJS(callback2)(value);
        const obj = onBeginDragWorklet(onScrollWorklet[4]);
      }
      const obj2 = onBeginDragWorklet(onScrollWorklet[5]);
    }
    callback3(contentOffset, contentOffset.contentSize);
  }
  obj2 = { scrollTarget, roundIfClose: arg1(dependencyMap[5]).roundIfClose, runOnJS: arg1(dependencyMap[4]).runOnJS, refreshScrollOffset: callback2, resolvePageIndex: callback3 };
  re.__closure = obj2;
  re.__workletHash = 10636475595563;
  re.__initData = closure_14;
  obj1.onMomentumEnd = re;
  function ne(arg0) {
    let contentOffset;
    let contentSize;
    ({ contentOffset, contentSize } = arg0);
    if (0 !== contentSize.width) {
      if (sharedValue2.get() !== contentOffset.x) {
        const result = sharedValue2.set(contentOffset.x);
        if (null != onScrollWorklet) {
          onScrollWorklet(arg0);
        }
        const _Math = Math;
        const _Math2 = Math;
        const rounded = Math.round(length * pageWidth);
        if (rounded % Math.round(contentSize.width) == 0) {
          if (contentOffset.x < 0) {
            const result1 = scrollOverflow.set(contentOffset.x);
          } else if (contentOffset.x > contentSize.width - pageWidth) {
            const result2 = scrollOverflow.set(contentOffset.x - (contentSize.width - pageWidth));
          } else {
            const result3 = scrollOverflow.set(0);
          }
          if (-1 !== scrollTarget.get()) {
            if (0 === obj2.roundIfClose(contentOffset.x - scrollTarget.get(), 0.0001)) {
              const result4 = scrollTarget.set(-1);
            }
            const obj2 = onBeginDragWorklet(onScrollWorklet[5]);
          }
          callback3(contentOffset, contentSize);
        } else {
          const result5 = activeIndex.get() * pageWidth;
          onBeginDragWorklet(onScrollWorklet[4]).runOnJS(callback2)(result5);
          const obj = onBeginDragWorklet(onScrollWorklet[4]);
        }
      }
    }
  }
  obj3 = { lastScrollOffsetX: sharedValue2, onScrollWorklet, itemCount: length, pageWidth, activeIndex, runOnJS: arg1(dependencyMap[4]).runOnJS, refreshScrollOffset: callback2, scrollOverflow, scrollTarget, roundIfClose: arg1(dependencyMap[5]).roundIfClose, resolvePageIndex: callback3 };
  ne.__closure = obj3;
  ne.__workletHash = 9933659944135;
  ne.__initData = closure_15;
  obj1.onScroll = ne;
  const items4 = [pageWidth];
  const obj8 = arg1(dependencyMap[4]);
  const memo = React.useMemo(() => ({ flex: 1, width: pageWidth }), items4);
  let closure_20 = memo;
  const items5 = [sharedValue, pageWidth];
  const memo1 = React.useMemo(() => {
    const obj = {};
    const value = sharedValue.get();
    let num = 0;
    if (null != value) {
      num = value;
    }
    obj.x = num * pageWidth;
    obj.y = 0;
    return obj;
  }, items5);
  const tmp14 = callback(function useFrozenPageIndices(activeIndex, pressedIndex) {
    const onBeginDragWorklet = activeIndex;
    const onEndDragWorklet = pressedIndex;
    const sharedValue = onBeginDragWorklet(onScrollWorklet[4]).useSharedValue(activeIndex.get());
    const onScrollWorklet = sharedValue;
    const obj = onBeginDragWorklet(onScrollWorklet[4]);
    const sharedValue1 = onBeginDragWorklet(onScrollWorklet[4]).useSharedValue(activeIndex.get());
    activeIndex = sharedValue1;
    const fn = function u(arg0, arg1) {
      const result = sharedValue.set(Math.min(sharedValue.get(), arg0));
      const result1 = sharedValue1.set(Math.max(sharedValue1.get(), arg1));
    };
    fn.__closure = { activePageRangeStart: sharedValue, activePageRangeEnd: sharedValue1 };
    fn.__workletHash = 2682934677750;
    fn.__initData = closure_26;
    const items = [sharedValue1, sharedValue];
    const React = React.useCallback(fn, items);
    const obj2 = onBeginDragWorklet(onScrollWorklet[4]);
    const obj3 = onBeginDragWorklet(onScrollWorklet[4]);
    const animatedReaction = obj3.useAnimatedReaction(() => {
      class SegmentedControlPagesNativeTsx21 {
        constructor() {
          obj = { activeIndex: closure_0.get(), pressedIndex: closure_1.get() };
          return obj;
        }
      }
      SegmentedControlPagesNativeTsx21.__closure = { activeIndex: arg0, pressedIndex: arg1 };
      SegmentedControlPagesNativeTsx21.__workletHash = 16203677263547;
      SegmentedControlPagesNativeTsx21.__initData = closure_27;
      return SegmentedControlPagesNativeTsx21;
    }(), () => {
      class SegmentedControlPagesNativeTsx22 {
        constructor(arg0) {
          ({ activeIndex, pressedIndex } = arg0);
          bound = activeIndex;
          bound1 = activeIndex;
          if (-1 !== pressedIndex) {
            tmp3 = globalThis;
            _Math = Math;
            bound = Math.min(activeIndex, pressedIndex);
            _Math2 = Math;
            bound1 = Math.max(activeIndex, pressedIndex);
          }
          rounded = Math.floor(bound);
          tmp5 = closure_4(rounded, Math.ceil(bound1));
          return;
        }
      }
      SegmentedControlPagesNativeTsx22.__closure = { expandActivePageRange: closure_4 };
      SegmentedControlPagesNativeTsx22.__workletHash = 4886047206415;
      SegmentedControlPagesNativeTsx22.__initData = closure_28;
      return SegmentedControlPagesNativeTsx22;
    }());
    const items1 = [sharedValue, sharedValue1];
    return items1;
  }(activeIndex, state.pressedIndex), 2);
  let closure_21 = tmp14[0];
  let closure_22 = tmp14[1];
  const animatedScrollHandler = arg1(dependencyMap[4]).useAnimatedScrollHandler(obj1);
  function se() {
    let num = -1;
    if (-1 !== scrollTarget.get()) {
      num = onBeginDragWorklet(onScrollWorklet[5]).roundIfClose(scrollTarget.get() / pageWidth, 0.0001);
      const obj = onBeginDragWorklet(onScrollWorklet[5]);
    }
    return num;
  }
  const obj12 = arg1(dependencyMap[4]);
  se.__closure = { scrollTarget, roundIfClose: arg1(dependencyMap[5]).roundIfClose, pageWidth };
  se.__workletHash = 7742060999778;
  se.__initData = closure_16;
  const derivedValue = obj12.useDerivedValue(se);
  let closure_23 = derivedValue;
  const obj4 = { scrollTarget, roundIfClose: arg1(dependencyMap[5]).roundIfClose, pageWidth };
  function le() {
    let value = sharedValue.get();
    const rounded = Math.floor(value);
    const rounded1 = Math.ceil(value);
    value = derivedValue.get();
    let bound = rounded;
    let bound1 = rounded1;
    if (-1 !== value) {
      const _Math = Math;
      bound = Math.min(rounded, value);
      const _Math2 = Math;
      bound1 = Math.max(rounded1, value);
    }
    const items = [bound, bound1];
    return items;
  }
  le.__closure = { pageIndex: sharedValue, scrollTargetPageIndex: derivedValue };
  le.__workletHash = 9125733538935;
  le.__initData = closure_17;
  function ie(arg0, arg1) {
    let tmp = null != arg1;
    if (tmp) {
      tmp = arg1[0] === arg0[0];
    }
    if (tmp) {
      tmp = arg1[1] === arg0[1];
    }
    if (!tmp) {
      const result = visiblePageRange.set(arg0);
    }
  }
  ie.__closure = { visiblePageRange };
  ie.__workletHash = 14106897948399;
  ie.__initData = closure_18;
  const animatedReaction2 = arg1(dependencyMap[4]).useAnimatedReaction(le, ie);
  if (0 === pageWidth) {
    return null;
  } else {
    obj5 = { ao: true, accessibilityRole: true, __initData: true, Array: true, channel: true, ip: true, ref: pagerRef };
    const items6 = [memo, style];
    obj5.style = items6;
    obj5.contentOffset = memo1;
    obj5.snapToInterval = pageWidth;
    obj5.snapToAlignment = "center";
    obj5.decelerationRate = "fast";
    obj5.centerContent = true;
    obj5.bounces = bounces;
    obj5.horizontal = true;
    obj5.accessibilityRole = "none";
    obj5.onScroll = animatedScrollHandler;
    obj5.disableIntervalMomentum = true;
    let num;
    if (obj17.isIOS()) {
      num = 32;
    }
    obj5.scrollEventThrottle = num;
    obj5.children = items.map((item, index) => pagerRef(closure_29, { index, activePageRangeStart: closure_21, activePageRangeEnd: closure_22, reportedPageIndex: sharedValue1, pageIndex: sharedValue, scrollTargetPageIndex: derivedValue, style: memo, item }, index));
    const tmp24Result = <closure_6 {...obj5} />;
    let tmp19 = tmp24Result;
    if (null != nativeGesture) {
      const obj6 = { gesture: nativeGesture, children: tmp24Result };
      tmp19 = jsx(arg1(dependencyMap[7]).GestureDetector, obj6);
    }
    return tmp19;
  }
  const obj14 = arg1(dependencyMap[4]);
};
