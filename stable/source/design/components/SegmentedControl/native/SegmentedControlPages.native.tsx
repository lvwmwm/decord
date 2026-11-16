// Module ID: 14464
// Function ID: 14465
// Name: SegmentedControlPages
// Dependencies: [32, 19, 17, 21, 1652, 1705, 14465, 1377, 5452, 6185, 6153, 2]
// Exports: SegmentedControlPages

// Module 14464 (SegmentedControlPages)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import react_native2 from "react-native" /* 6185 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import module_1652 from "module_1652" /* 1652 */;
import size from "module_2" /* 2 */;

let set;

function SegmentedControlPage(reportedPageIndex) {
  let Freeze;
  let first;
  let item;
  let obj4;
  let obj5;
  let pageIndex;
  let scrollTargetPageIndex;
  let str;
  let tmp10;
  let tmp11;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp27;
  let tmp28;
  let tmp31;
  let tmp32;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp39;
  let tmp4;
  let tmp40;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp9;
  const f107765 = () => {
    let tmp2 = index >= activePageRangeStart.get();
    const tmp = index;
    if (tmp2) {
      tmp2 = tmp <= activePageRangeEnd.get();
    }
    return !tmp2;
  };
  reportedPageIndex = reportedPageIndex.reportedPageIndex;
  const index = reportedPageIndex.index;
  const activePageRangeStart = reportedPageIndex.activePageRangeStart;
  const activePageRangeEnd = reportedPageIndex.activePageRangeEnd;
  ({ pageIndex, scrollTargetPageIndex, item } = reportedPageIndex);
  const merged = Object.assign(reportedPageIndex, Object.assign({ reportedPageIndex: 0, pageIndex: 0, scrollTargetPageIndex: 0, index: 0, item: 0, activePageRangeStart: 0, activePageRangeEnd: 0 }));
  let accessibilityElementsHidden;
  let ref;
  let tmp2 = reportedPageIndex;
  let tmp3 = activePageRangeStart;
  let obj = reportedPageIndex(activePageRangeStart[4]);
  let items = [closure_19, pageIndex, index, scrollTargetPageIndex];
  let c0;
  let c1;
  let c2;
  [tmp4, tmp5, tmp6, tmp7] = items;
  class SegmentedControlPagesNativeTsx13 {
    constructor() {
      let tmp2 = Math.floor(_undefined.get()) === c1;
      const obj = _undefined;
      if (!tmp2) {
        const _Math = Math;
        tmp2 = Math.ceil(obj.get()) === tmp;
      }
      if (!tmp2) {
        tmp2 = _undefined2.get() === tmp;
      }
      return tmp2;
    }
  }
  const items1 = [tmp5, tmp6, tmp7];
  SegmentedControlPagesNativeTsx13.__closure = items1;
  SegmentedControlPagesNativeTsx13.__workletHash = 8284708217376;
  SegmentedControlPagesNativeTsx13.__initData = tmp4;
  const derivedValue = obj.useDerivedValue(SegmentedControlPagesNativeTsx13);
  const items2 = [closure_20, reportedPageIndex, index];
  c0 = undefined;
  c1 = undefined;
  [tmp9, tmp10, tmp11] = items2;
  const tmp2Result = tmp2(tmp3[4]);
  class SegmentedControlPagesNativeTsx14 {
    constructor() {
      let pointerEvents = "box-none";
      if (_undefined.get() !== c1) {
        pointerEvents = "none";
      }
      return { pointerEvents };
    }
  }
  const items3 = [tmp10, tmp11];
  SegmentedControlPagesNativeTsx14.__closure = items3;
  SegmentedControlPagesNativeTsx14.__workletHash = 17363978333434;
  SegmentedControlPagesNativeTsx14.__initData = tmp9;
  let obj3 = accessibilityElementsHidden;
  const animatedProps = tmp2Result.useAnimatedProps(SegmentedControlPagesNativeTsx14);
  const tmp14 = activePageRangeEnd(accessibilityElementsHidden.useState(() => reportedPageIndex.get() !== index), 2);
  accessibilityElementsHidden = tmp14[0];
  const items4 = [closure_21, reportedPageIndex, index];
  c0 = undefined;
  c1 = undefined;
  const tmp16 = tmp14[1];
  [tmp18, tmp19, tmp20] = items4;
  const tmp2Result4 = tmp2(tmp3[4]);
  class SegmentedControlPagesNativeTsx15 {
    constructor() {
      return _undefined.get() !== c1;
    }
  }
  const items5 = [tmp19, tmp20];
  SegmentedControlPagesNativeTsx15.__closure = items5;
  SegmentedControlPagesNativeTsx15.__workletHash = 2423172957373;
  SegmentedControlPagesNativeTsx15.__initData = tmp18;
  const items6 = [closure_22, , ];
  const useAnimatedReaction = tmp2Result4.useAnimatedReaction;
  items6[1] = tmp2(tmp3[5]).scheduleOnRN;
  items6[2] = tmp16;
  c0 = undefined;
  c1 = undefined;
  [tmp21, tmp22, tmp23] = items6;
  class SegmentedControlPagesNativeTsx16 {
    constructor(arg0) {
      _undefined(c1, arg0);
    }
  }
  const items7 = [tmp22, tmp23];
  SegmentedControlPagesNativeTsx16.__closure = items7;
  SegmentedControlPagesNativeTsx16.__workletHash = 13860997207969;
  SegmentedControlPagesNativeTsx16.__initData = tmp21;
  const animatedReaction = useAnimatedReaction(SegmentedControlPagesNativeTsx15, SegmentedControlPagesNativeTsx16);
  obj3.useRef(null);
  ref = obj3.useRef(accessibilityElementsHidden);
  const items8 = [accessibilityElementsHidden];
  const effect = obj3.useEffect(() => {
    let current = ref.current;
    const tmp = ref;
    if (current) {
      current = !current;
    }
    tmp.current = current;
    if (current) {
      const obj = PlatformUtils;
      current = obj.isIOS();
    }
    if (current) {
      const obj3 = { ref, delay: 100 };
      const obj2 = react_native2;
      const result = obj2.setAccessibilityFocus(obj3);
    }
  }, items8);
  const items9 = [closure_23, derivedValue];
  c0 = undefined;
  [tmp27, tmp28] = items9;
  const tmp2Result5 = tmp2(tmp3[4]);
  class SegmentedControlPagesNativeTsx17 {
    constructor() {
      let display = "none";
      if (_undefined.get()) {
        display = "flex";
      }
      return { display, flex: 1 };
    }
  }
  const items10 = [tmp28];
  SegmentedControlPagesNativeTsx17.__closure = items10;
  SegmentedControlPagesNativeTsx17.__workletHash = 15945321321692;
  SegmentedControlPagesNativeTsx17.__initData = tmp27;
  const animatedStyle = tmp2Result5.useAnimatedStyle(SegmentedControlPagesNativeTsx17);
  [tmp31, tmp32] = activePageRangeEnd(obj3.useState(f107765), 2);
  activePageRangeEnd(obj3.useState(f107765), 2);
  const items11 = [closure_24, activePageRangeStart, activePageRangeEnd];
  c0 = undefined;
  c1 = undefined;
  [tmp34, tmp35, tmp36] = items11;
  const tmp2Result6 = tmp2(tmp3[4]);
  class SegmentedControlPagesNativeTsx18 {
    constructor() {
      const items = [_undefined.get(), _undefined2.get()];
      return items;
    }
  }
  const items12 = [tmp35, tmp36];
  SegmentedControlPagesNativeTsx18.__closure = items12;
  SegmentedControlPagesNativeTsx18.__workletHash = 10512750394690;
  SegmentedControlPagesNativeTsx18.__initData = tmp34;
  const items13 = [closure_25, index, , ];
  const useAnimatedReaction2 = tmp2Result6.useAnimatedReaction;
  items13[2] = tmp2(tmp3[5]).scheduleOnRN;
  items13[3] = tmp32;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp37, tmp38, tmp39, tmp40] = items13;
  class SegmentedControlPagesNativeTsx19 {
    constructor(arg0) {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      let tmp5 = c0 >= tmp;
      const tmp3 = c1;
      const tmp4 = c2;
      if (tmp5) {
        tmp5 = c0 <= tmp2;
      }
      tmp3(tmp4, !tmp5);
    }
  }
  const items14 = [tmp38, tmp39, tmp40];
  SegmentedControlPagesNativeTsx19.__closure = items14;
  SegmentedControlPagesNativeTsx19.__workletHash = 9520394351574;
  SegmentedControlPagesNativeTsx19.__initData = tmp37;
  const animatedReaction2 = useAnimatedReaction2(SegmentedControlPagesNativeTsx18, SegmentedControlPagesNativeTsx19);
  let obj2 = { ref, animatedProps, importantForAccessibility: str, accessibilityElementsHidden, children: ref(Freeze, obj4) };
  const View = index(tmp3[4]).View;
  const merged1 = Object.assign(merged);
  str = "auto";
  const tmp43 = index;
  if (accessibilityElementsHidden) {
    str = "no-hide-descendants";
  }
  obj4 = { freeze: tmp31, children: ref(tmp43(tmp3[4]).View, obj5) };
  Freeze = tmp2(tmp3[10]).Freeze;
  obj5 = { style: animatedStyle, children: item.page };
  return ref(View, obj2, index);
}
const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
let closure_6 = module_1652.createAnimatedComponent(ScrollView);
let closure_7 = { code: "(function SegmentedControlPagesNativeTsx1(){let[activeIndex]=this.__closure;return activeIndex.get();})" };
let closure_8 = { code: "(function SegmentedControlPagesNativeTsx2(value){let[scheduleOnRN,updateCurrentActiveIndex]=this.__closure;scheduleOnRN(updateCurrentActiveIndex,value);})" };
let closure_9 = { code: "(function SegmentedControlPagesNativeTsx3(){let[pageIndex]=this.__closure;return pageIndex.get();})" };
let closure_10 = { code: "(function SegmentedControlPagesNativeTsx4(value){let[activeIndex]=this.__closure;activeIndex.set(value);})" };
let closure_11 = { code: "(function SegmentedControlPagesNativeTsx5(contentOffset,contentSize){let[pageWidth,pageIndex,roundIfClose,reportedPageIndex,scheduleOnRN,onPageChanged]=this.__closure;if(pageWidth===0){return;}pageIndex.set(Math.min(Math.max(roundIfClose(contentOffset.x/pageWidth,1e-4),0),roundIfClose(contentSize.width/pageWidth,1e-4)-1));const pageFullyVisible=pageIndex.get()%1===0;if(pageFullyVisible&&reportedPageIndex.get()!==pageIndex.get()){reportedPageIndex.set(pageIndex.get());scheduleOnRN(onPageChanged,pageIndex.get());}})" };
let closure_12 = { code: "(function SegmentedControlPagesNativeTsx6(event){let[scrollTarget,onBeginDragWorklet]=this.__closure;var _onBeginDragWorklet;scrollTarget.set(-1);(_onBeginDragWorklet=onBeginDragWorklet)===null||_onBeginDragWorklet===void 0||_onBeginDragWorklet(event);})" };
let closure_13 = { code: "(function SegmentedControlPagesNativeTsx7(event){let[onEndDragWorklet]=this.__closure;var _onEndDragWorklet;(_onEndDragWorklet=onEndDragWorklet)===null||_onEndDragWorklet===void 0||_onEndDragWorklet(event);})" };
let closure_14 = { code: "(function SegmentedControlPagesNativeTsx8({contentOffset:contentOffset,contentSize:contentSize}){let[scrollTarget,roundIfClose,scheduleOnRN,refreshScrollOffset,resolvePageIndex]=this.__closure;if(scrollTarget.get()!==-1){const hasReachedTarget=roundIfClose(contentOffset.x-scrollTarget.get(),1e-4)===0;if(hasReachedTarget){scrollTarget.set(-1);}else{const page=scrollTarget.get();scheduleOnRN(refreshScrollOffset,page);}}resolvePageIndex(contentOffset,contentSize);})" };
let closure_15 = { code: "(function SegmentedControlPagesNativeTsx9(event){let[lastScrollOffsetX,onScrollWorklet,itemCount,pageWidth,activeIndex,scheduleOnRN,refreshScrollOffset,scrollOverflow,scrollTarget,roundIfClose,resolvePageIndex]=this.__closure;var _onScrollWorklet;const{contentOffset:contentOffset,contentSize:contentSize}=event;if(contentSize.width===0){return;}if(lastScrollOffsetX.get()===contentOffset.x){return;}lastScrollOffsetX.set(contentOffset.x);(_onScrollWorklet=onScrollWorklet)===null||_onScrollWorklet===void 0||_onScrollWorklet(event);const expectedContentSize=itemCount*pageWidth;if(Math.round(expectedContentSize)%Math.round(contentSize.width)!==0){const page=activeIndex.get()*pageWidth;scheduleOnRN(refreshScrollOffset,page);return;}if(contentOffset.x<0){scrollOverflow.set(contentOffset.x);}else if(contentOffset.x>contentSize.width-pageWidth){scrollOverflow.set(contentOffset.x-(contentSize.width-pageWidth));}else{scrollOverflow.set(0);}if(scrollTarget.get()!==-1){const hasReachedTarget=roundIfClose(contentOffset.x-scrollTarget.get(),1e-4)===0;if(hasReachedTarget){scrollTarget.set(-1);}else{return;}}resolvePageIndex(contentOffset,contentSize);})" };
let closure_16 = { code: "(function SegmentedControlPagesNativeTsx10(){let[scrollTarget,roundIfClose,pageWidth]=this.__closure;if(scrollTarget.get()===-1){return-1;}return roundIfClose(scrollTarget.get()/pageWidth,1e-4);})" };
let closure_17 = { code: "(function SegmentedControlPagesNativeTsx11(){let[pageIndex,scrollTargetPageIndex]=this.__closure;const idx=pageIndex.get();let lo=Math.floor(idx);let hi=Math.ceil(idx);const target=scrollTargetPageIndex.get();if(target!==-1){lo=Math.min(lo,target);hi=Math.max(hi,target);}return[lo,hi];})" };
let closure_18 = { code: "(function SegmentedControlPagesNativeTsx12(range,prev){let[visiblePageRange]=this.__closure;if(prev==null||prev[0]!==range[0]||prev[1]!==range[1]){visiblePageRange.set(range);}})" };
let closure_19 = { code: "(function SegmentedControlPagesNativeTsx13(){let[pageIndex,index,scrollTargetPageIndex]=this.__closure;if(Math.floor(pageIndex.get())===index||Math.ceil(pageIndex.get())===index){return true;}if(scrollTargetPageIndex.get()===index){return true;}return false;})" };
let closure_20 = { code: "(function SegmentedControlPagesNativeTsx14(){let[reportedPageIndex,index]=this.__closure;const isHidden=reportedPageIndex.get()!==index;return{pointerEvents:isHidden?'none':'box-none'};})" };
let closure_21 = { code: "(function SegmentedControlPagesNativeTsx15(){let[reportedPageIndex,index]=this.__closure;return reportedPageIndex.get()!==index;})" };
let closure_22 = { code: "(function SegmentedControlPagesNativeTsx16(hidden){let[scheduleOnRN,setIsAccessibilityHidden]=this.__closure;scheduleOnRN(setIsAccessibilityHidden,hidden);})" };
let closure_23 = { code: "(function SegmentedControlPagesNativeTsx17(){let[isVisibleOnScreen]=this.__closure;return{display:isVisibleOnScreen.get()?'flex':'none',flex:1};})" };
let closure_24 = { code: "(function SegmentedControlPagesNativeTsx18(){let[activePageRangeStart,activePageRangeEnd]=this.__closure;return[activePageRangeStart.get(),activePageRangeEnd.get()];})" };
let closure_25 = { code: "(function SegmentedControlPagesNativeTsx19([start,end]){let[index,scheduleOnRN,setFreeze]=this.__closure;const isInActiveRange=index>=start&&index<=end;scheduleOnRN(setFreeze,!isInActiveRange);})" };
let closure_27 = { code: "(function SegmentedControlPagesNativeTsx20(min,max){let[activePageRangeStart,activePageRangeEnd]=this.__closure;activePageRangeStart.set(Math.min(activePageRangeStart.get(),min));activePageRangeEnd.set(Math.max(activePageRangeEnd.get(),max));})" };
let closure_28 = { code: "(function SegmentedControlPagesNativeTsx21(){let[activeIndex,pressedIndex]=this.__closure;return{activeIndex:activeIndex.get(),pressedIndex:pressedIndex.get()};})" };
let closure_29 = { code: "(function SegmentedControlPagesNativeTsx22({activeIndex:activeIndex,pressedIndex:pressedIndex}){let[expandActivePageRange]=this.__closure;let min=activeIndex;let max=activeIndex;if(pressedIndex!==-1){min=Math.min(activeIndex,pressedIndex);max=Math.max(activeIndex,pressedIndex);}expandActivePageRange(Math.floor(min),Math.ceil(max));})" };
let result = size.fileFinishedImporting("design/components/SegmentedControl/native/SegmentedControlPages.native.tsx");

export function SegmentedControlPages(arg0) {
  let activeIndex;
  let activePageRangeEnd;
  let activePageRangeStart;
  let bounces;
  let c10;
  let c11;
  let items;
  let items39;
  let nativeGesture;
  let num;
  let onBeginDragWorklet;
  let onEndDragWorklet;
  let onScrollWorklet;
  let pagerRef;
  let pressedIndex;
  let scrollOverflow;
  let state;
  let style;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp39;
  let tmp40;
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
  let tmp52;
  let tmp53;
  let tmp59;
  let tmp60;
  let tmp61;
  let tmp63;
  let tmp64;
  let tmp65;
  let tmp66;
  let tmp67;
  let tmp71;
  let tmp72;
  let tmp73;
  let tmp74;
  let tmp76;
  let tmp77;
  let tmp78;
  let tmp79;
  let tmp8;
  let tmp80;
  let tmp9;
  let visiblePageRange;
  ({ state, nativeGesture } = arg0);
  pagerRef = undefined;
  let callback2;
  let memo;
  c10 = undefined;
  c11 = undefined;
  let derivedValue;
  ({ items, activeIndex, pagerRef } = state);
  const scrollTarget = state.scrollTarget;
  const onPageChangeRef = state.onPageChangeRef;
  const pageWidth = state.pageWidth;
  let tmp = pagerRef;
  const tmp2 = onPageChangeRef;
  ({ style, bounces, onBeginDragWorklet, onEndDragWorklet, onScrollWorklet } = arg0);
  ({ visiblePageRange, scrollOverflow, pressedIndex } = state);
  let obj = pagerRef(onPageChangeRef[4]);
  const sharedValue = obj.useSharedValue(activeIndex.get());
  let obj2 = pagerRef(onPageChangeRef[4]);
  const sharedValue1 = obj2.useSharedValue(activeIndex.get());
  const length = items.length;
  const obj3 = pagerRef(onPageChangeRef[4]);
  const sharedValue2 = obj3.useSharedValue(undefined);
  const ref = sharedValue.useRef(false);
  const ref2 = sharedValue.useRef(activeIndex.get());
  const callback = sharedValue.useCallback((current) => {
    ref2.current = current;
  }, []);
  const items1 = [ref2, activeIndex];
  let c0;
  [tmp8, tmp9] = items1;
  const tmp7 = pagerRef(onPageChangeRef[4]);
  class SegmentedControlPagesNativeTsx1 {
    constructor() {
      return _undefined.get();
    }
  }
  const items2 = [tmp9];
  SegmentedControlPagesNativeTsx1.__closure = items2;
  SegmentedControlPagesNativeTsx1.__workletHash = 10084739164293;
  SegmentedControlPagesNativeTsx1.__initData = tmp8;
  const items3 = [callback2, , ];
  const useAnimatedReaction = tmp7.useAnimatedReaction;
  items3[1] = tmp(tmp2[5]).scheduleOnRN;
  items3[2] = callback;
  c0 = undefined;
  let c1;
  [tmp10, tmp11, tmp12] = items3;
  class SegmentedControlPagesNativeTsx2 {
    constructor(arg0) {
      _undefined(c1, arg0);
    }
  }
  const items4 = [tmp11, tmp12];
  SegmentedControlPagesNativeTsx2.__closure = items4;
  SegmentedControlPagesNativeTsx2.__workletHash = 8813808345172;
  SegmentedControlPagesNativeTsx2.__initData = tmp10;
  const animatedReaction = useAnimatedReaction(SegmentedControlPagesNativeTsx1, SegmentedControlPagesNativeTsx2);
  const items5 = [memo, sharedValue];
  c0 = undefined;
  [tmp14, tmp15] = items5;
  const tmpResult = tmp(tmp2[4]);
  class SegmentedControlPagesNativeTsx3 {
    constructor() {
      return _undefined.get();
    }
  }
  const items6 = [tmp15];
  SegmentedControlPagesNativeTsx3.__closure = items6;
  SegmentedControlPagesNativeTsx3.__workletHash = 6811370282727;
  SegmentedControlPagesNativeTsx3.__initData = tmp14;
  const items7 = [c10, activeIndex];
  c0 = undefined;
  [tmp16, tmp17] = items7;
  class SegmentedControlPagesNativeTsx4 {
    constructor(arg0) {
      const result = _undefined.set(arg0);
    }
  }
  const items8 = [tmp17];
  SegmentedControlPagesNativeTsx4.__closure = items8;
  SegmentedControlPagesNativeTsx4.__workletHash = 6338583262078;
  SegmentedControlPagesNativeTsx4.__initData = tmp16;
  const animatedReaction1 = tmpResult.useAnimatedReaction(SegmentedControlPagesNativeTsx3, SegmentedControlPagesNativeTsx4);
  const items9 = [onPageChangeRef];
  const callback1 = obj4.useCallback((AUTO_DISMISS) => {
    const tmp = onPageChangeRef;
    if (onPageChangeRef != null) {
      const current = tmp.current;
      if (current != null) {
        current(AUTO_DISMISS);
      }
    }
  }, items9);
  const items10 = [pagerRef, scrollTarget];
  callback2 = obj4.useCallback((x) => {
    const result = scrollTarget.set(x);
    if (pagerRef != null) {
      const current = pagerRef.current;
      if (current != null) {
        const obj = { x, animated: false };
        current.scrollTo(obj);
      }
    }
  }, items10);
  const items11 = [pageWidth, callback2];
  const effect = obj4.useEffect(() => {
    if (pageWidth > 0) {
      if (!ref.current) {
        tmp2.current = true;
        if (ref2.current > 0) {
          callback2(ref2.current * tmp);
        }
      }
    }
  }, items11);
  const items12 = [c11, pageWidth, sharedValue, , , , ];
  const useCallback = sharedValue.useCallback;
  items12[3] = tmp(tmp2[6]).roundIfClose;
  items12[4] = sharedValue1;
  items12[5] = tmp(tmp2[5]).scheduleOnRN;
  items12[6] = callback1;
  c0 = undefined;
  c1 = undefined;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28] = items12;
  class SegmentedControlPagesNativeTsx5 {
    constructor(arg0, width) {
      if (0 !== c0) {
        const _Math = Math;
        const _Math2 = Math;
        set = _undefined.set;
        const bound = Math.max(_undefined2(arg0.x / tmp, 0.0001), 0);
        const result = set(min(bound, _undefined2(width.width / tmp, 0.0001) - 1));
        const result1 = _undefined.get() % 1;
        let tmp4 = result1 === 0;
        if (result1 === 0) {
          const value = _undefined3.get();
          tmp4 = value !== obj.get();
        }
        if (tmp4) {
          const result2 = _undefined3.set(obj.get());
          _undefined4(c5, _undefined.get());
        }
      }
    }
  }
  const items13 = [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28];
  SegmentedControlPagesNativeTsx5.__closure = items13;
  SegmentedControlPagesNativeTsx5.__workletHash = 6044712524276;
  SegmentedControlPagesNativeTsx5.__initData = tmp22;
  const items14 = [callback1, sharedValue, pageWidth, sharedValue1];
  const callback3 = useCallback(SegmentedControlPagesNativeTsx5, items14);
  const items15 = [derivedValue, scrollTarget, onBeginDragWorklet];
  c0 = undefined;
  c1 = undefined;
  [tmp31, tmp32, tmp33] = items15;
  const obj5 = { onBeginDrag: SegmentedControlPagesNativeTsx6, onEndDrag: SegmentedControlPagesNativeTsx7, onMomentumEnd: SegmentedControlPagesNativeTsx8, onScroll: SegmentedControlPagesNativeTsx9 };
  const tmpResult8 = tmp(tmp2[4]);
  class SegmentedControlPagesNativeTsx6 {
    constructor(arg0) {
      const result = _undefined.set(-1);
      if (c1 != null) {
        tmp2(arg0);
      }
    }
  }
  const items16 = [tmp32, tmp33];
  SegmentedControlPagesNativeTsx6.__closure = items16;
  SegmentedControlPagesNativeTsx6.__workletHash = 10991210914123;
  SegmentedControlPagesNativeTsx6.__initData = tmp31;
  const items17 = [closure_13, onEndDragWorklet];
  c0 = undefined;
  [tmp34, tmp35] = items17;
  class SegmentedControlPagesNativeTsx7 {
    constructor(arg0) {
      if (c0 != null) {
        tmp(arg0);
      }
    }
  }
  const items18 = [tmp35];
  SegmentedControlPagesNativeTsx7.__closure = items18;
  SegmentedControlPagesNativeTsx7.__workletHash = 10732648958284;
  SegmentedControlPagesNativeTsx7.__initData = tmp34;
  const items19 = [closure_14, scrollTarget, , , , ];
  const useAnimatedScrollHandler = tmpResult8.useAnimatedScrollHandler;
  items19[2] = tmp(tmp2[6]).roundIfClose;
  items19[3] = tmp(tmp2[5]).scheduleOnRN;
  items19[4] = callback2;
  items19[5] = callback3;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp36, tmp37, tmp38, tmp39, tmp40, tmp41] = items19;
  class SegmentedControlPagesNativeTsx8 {
    constructor(contentOffset) {
      contentOffset = contentOffset.contentOffset;
      const contentSize = contentOffset.contentSize;
      if (-1 !== _undefined.get()) {
        if (0 === _undefined2(contentOffset.x - _undefined.get(), 0.0001)) {
          const result = obj.set(-1);
        } else {
          _undefined3(c3, _undefined.get());
        }
      }
      _undefined4(contentOffset, contentSize);
    }
  }
  const items20 = [tmp37, tmp38, tmp39, tmp40, tmp41];
  SegmentedControlPagesNativeTsx8.__closure = items20;
  SegmentedControlPagesNativeTsx8.__workletHash = 1962375899423;
  SegmentedControlPagesNativeTsx8.__initData = tmp36;
  const items21 = [closure_15, sharedValue2, onScrollWorklet, length, pageWidth, activeIndex, tmp(tmp2[5]).scheduleOnRN, callback2, scrollOverflow, scrollTarget, tmp(tmp2[6]).roundIfClose, callback3];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  let c6;
  let c7;
  let c8;
  let c9;
  c10 = undefined;
  [tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53] = items21;
  class SegmentedControlPagesNativeTsx9 {
    constructor(arg0) {
      let contentOffset;
      let contentSize;
      ({ contentOffset, contentSize } = arg0);
      if (0 !== contentSize.width) {
        const obj2 = _undefined;
        if (_undefined.get() !== contentOffset.x) {
          const result = obj2.set(contentOffset.x);
          if (c1 != null) {
            tmp21(arg0);
          }
          const _Math = Math;
          const _Math2 = Math;
          const rounded = Math.round(c2 * c3);
          if (rounded % Math.round(contentSize.width) == 0) {
            if (contentOffset.x < 0) {
              const result1 = _undefined4.set(contentOffset.x);
            } else if (contentOffset.x > contentSize.width - c3) {
              const result2 = _undefined4.set(contentOffset.x - (contentSize.width - tmp4));
            } else {
              const result3 = _undefined4.set(0);
            }
            if (-1 !== _undefined5.get()) {
              if (0 === _undefined6(contentOffset.x - _undefined5.get(), 0.0001)) {
                const result4 = obj.set(-1);
              }
            }
            _undefined7(contentOffset, contentSize);
          } else {
            _undefined3(c6, _undefined2.get() * c3);
          }
        }
      }
    }
  }
  const items22 = [tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53];
  SegmentedControlPagesNativeTsx9.__closure = items22;
  SegmentedControlPagesNativeTsx9.__workletHash = 1723748367859;
  SegmentedControlPagesNativeTsx9.__initData = tmp42;
  const items23 = [pageWidth];
  const animatedScrollHandler = useAnimatedScrollHandler(obj5);
  memo = obj4.useMemo(() => ({ flex: 1, width: pageWidth }), items23);
  const items24 = [sharedValue, pageWidth];
  const memo1 = obj4.useMemo(() => {
    let num = sharedValue.get();
    if (num == null) {
      num = 0;
    }
    const point = { x: num * pageWidth, y: 0 };
    return point;
  }, items24);
  const tmpResult9 = tmp(tmp2[4]);
  const sharedValue3 = tmpResult9.useSharedValue(activeIndex.get());
  const tmpResult10 = tmp(tmp2[4]);
  const sharedValue4 = tmpResult10.useSharedValue(activeIndex.get());
  const items25 = [closure_27, sharedValue3, sharedValue4];
  c0 = undefined;
  c1 = undefined;
  [tmp59, tmp60, tmp61] = items25;
  class SegmentedControlPagesNativeTsx20 {
    constructor(arg0, arg1) {
      const result = _undefined.set(Math.min(_undefined.get(), arg0));
      const result1 = _undefined2.set(Math.max(_undefined2.get(), arg1));
    }
  }
  const items26 = [tmp60, tmp61];
  SegmentedControlPagesNativeTsx20.__closure = items26;
  SegmentedControlPagesNativeTsx20.__workletHash = 14021304354703;
  SegmentedControlPagesNativeTsx20.__initData = tmp59;
  const items27 = [sharedValue4, sharedValue3];
  const callback4 = obj4.useCallback(SegmentedControlPagesNativeTsx20, items27);
  const items28 = [closure_28, activeIndex, pressedIndex];
  c0 = undefined;
  c1 = undefined;
  [tmp63, tmp64, tmp65] = items28;
  const tmpResult11 = tmp(tmp2[4]);
  class SegmentedControlPagesNativeTsx21 {
    constructor() {
      const obj = { activeIndex: _undefined.get(), pressedIndex: _undefined2.get() };
      return obj;
    }
  }
  const items29 = [tmp64, tmp65];
  SegmentedControlPagesNativeTsx21.__closure = items29;
  SegmentedControlPagesNativeTsx21.__workletHash = 12186802847778;
  SegmentedControlPagesNativeTsx21.__initData = tmp63;
  const items30 = [closure_29, callback4];
  c0 = undefined;
  [tmp66, tmp67] = items30;
  class SegmentedControlPagesNativeTsx22 {
    constructor(arg0) {
      let activeIndex;
      let pressedIndex;
      ({ activeIndex, pressedIndex } = arg0);
      let bound1 = activeIndex;
      let bound = activeIndex;
      if (-1 !== pressedIndex) {
        const _Math = Math;
        bound = Math.min(activeIndex, pressedIndex);
        const _Math2 = Math;
        bound1 = Math.max(activeIndex, pressedIndex);
      }
      const rounded = Math.floor(bound);
      _undefined(rounded, Math.ceil(bound1));
    }
  }
  const items31 = [tmp67];
  SegmentedControlPagesNativeTsx22.__closure = items31;
  SegmentedControlPagesNativeTsx22.__workletHash = 3512419339638;
  SegmentedControlPagesNativeTsx22.__initData = tmp66;
  const animatedReaction2 = tmpResult11.useAnimatedReaction(SegmentedControlPagesNativeTsx21, SegmentedControlPagesNativeTsx22);
  const items32 = [sharedValue3, sharedValue4];
  [c10, c11] = pageWidth(items32, 2);
  pageWidth(items32, 2);
  const items33 = [closure_16, scrollTarget, , ];
  const useDerivedValue = tmp(tmp2[4]).useDerivedValue;
  tmp(tmp2[4]);
  items33[2] = tmp(tmp2[6]).roundIfClose;
  items33[3] = pageWidth;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp71, tmp72, tmp73, tmp74] = items33;
  class SegmentedControlPagesNativeTsx10 {
    constructor() {
      let num = -1;
      const obj = _undefined;
      if (-1 !== _undefined.get()) {
        num = _undefined2(obj.get() / c2, 0.0001);
      }
      return num;
    }
  }
  const items34 = [tmp72, tmp73, tmp74];
  SegmentedControlPagesNativeTsx10.__closure = items34;
  SegmentedControlPagesNativeTsx10.__workletHash = 2040972920411;
  SegmentedControlPagesNativeTsx10.__initData = tmp71;
  derivedValue = useDerivedValue(SegmentedControlPagesNativeTsx10);
  const items35 = [closure_17, sharedValue, derivedValue];
  c0 = undefined;
  c1 = undefined;
  [tmp76, tmp77, tmp78] = items35;
  const tmpResult13 = tmp(tmp2[4]);
  class SegmentedControlPagesNativeTsx11 {
    constructor() {
      const value = _undefined.get();
      const rounded = Math.floor(value);
      const rounded1 = Math.ceil(value);
      const value2 = _undefined2.get();
      let bound1 = rounded1;
      let bound = rounded;
      if (-1 !== value2) {
        const _Math = Math;
        bound = Math.min(rounded, value2);
        const _Math2 = Math;
        bound1 = Math.max(rounded1, value2);
      }
      const items = [bound, bound1];
      return items;
    }
  }
  const items36 = [tmp77, tmp78];
  SegmentedControlPagesNativeTsx11.__closure = items36;
  SegmentedControlPagesNativeTsx11.__workletHash = 11724241961838;
  SegmentedControlPagesNativeTsx11.__initData = tmp76;
  const items37 = [closure_18, visiblePageRange];
  c0 = undefined;
  [tmp79, tmp80] = items37;
  class SegmentedControlPagesNativeTsx12 {
    constructor(arg0, arg1) {
      const tmp = null != arg1 && arg1[0] === arg0[0] && arg1[1] === arg0[1];
      if (!tmp) {
        const result = _undefined.set(arg0);
      }
    }
  }
  const items38 = [tmp80];
  SegmentedControlPagesNativeTsx12.__closure = items38;
  SegmentedControlPagesNativeTsx12.__workletHash = 15097469489206;
  SegmentedControlPagesNativeTsx12.__initData = tmp79;
  const animatedReaction3 = tmpResult13.useAnimatedReaction(SegmentedControlPagesNativeTsx11, SegmentedControlPagesNativeTsx12);
  if (0 === pageWidth) {
    return null;
  } else {
    const obj6 = { ref: pagerRef, style: items39, contentOffset: memo1, keyboardShouldPersistTaps: "handled", showsHorizontalScrollIndicator: false, pagingEnabled: true, snapToInterval: pageWidth, snapToAlignment: "center", decelerationRate: "fast", centerContent: true, bounces, horizontal: true, accessibilityRole: "none", onScroll: animatedScrollHandler, disableIntervalMomentum: true, scrollEventThrottle: num, children: items.map((item, index) => <SegmentedControlPage key={arg1} index={arg1} activePageRangeStart={c10} activePageRangeEnd={c11} reportedPageIndex={sharedValue1} pageIndex={sharedValue} scrollTargetPageIndex={derivedValue} style={memo} item={arg0} />) };
    items39 = [memo, style];
    num = undefined;
    const tmp87 = ref;
    const tmpResult14 = tmp(tmp2[7]);
    if (tmpResult14.isIOS()) {
      num = 32;
    }
    const tmp86Result = sharedValue1(tmp87, obj6);
    let tmp86Result2 = tmp86Result;
    if (null != nativeGesture) {
      const obj7 = { gesture: nativeGesture, children: tmp86Result };
      tmp86Result2 = tmp86(tmp(tmp2[8]).GestureDetector, obj7);
    }
    return tmp86Result2;
  }
}
