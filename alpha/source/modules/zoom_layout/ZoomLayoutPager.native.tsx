// Module ID: 15126
// Function ID: 15127
// Name: ZoomLayoutPager
// Dependencies: [32, 19, 17, 21, 5877, 1652, 1705, 5876, 5535, 2]

// Module 15126 (ZoomLayoutPager)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _mod1705 from "module_1705" /* 1705 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5535 */;
import springPresets from "springPresets" /* 5877 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

let _Math2, _undefined, _undefined2, _undefined3, diff, failResult, num4, num5, rounded, rounded1, set, sum, tmp11Result, tmp2Result, tmp9Result, value;

let View = react_native.View;
const jsx = Fragment.jsx;
let obj = { stiffness: 100, overshootClamping: true };
let merged = Object.assign(springPresets.springStandard);
let closure_8 = { code: "(function ZoomLayoutPagerNativeTsx1(){let[cancelAnimation,translateX,dragging,onEndDrag,onMomentumEnd,isPaging]=this.__closure;var _onMomentumEnd;cancelAnimation(translateX);if(dragging.get()){var _onEndDrag;dragging.set(false);(_onEndDrag=onEndDrag)===null||_onEndDrag===void 0||_onEndDrag();}(_onMomentumEnd=onMomentumEnd)===null||_onMomentumEnd===void 0||_onMomentumEnd();isPaging.set(false);})" };
let closure_9 = { code: "(function ZoomLayoutPagerNativeTsx2(finished){let[onScroll,page,width,isPaging,onMomentumEnd]=this.__closure;var _onScroll,_onMomentumEnd;if(!finished)return;(_onScroll=onScroll)===null||_onScroll===void 0||_onScroll(page*width);isPaging.set(false);(_onMomentumEnd=onMomentumEnd)===null||_onMomentumEnd===void 0||_onMomentumEnd();})" };
let closure_10 = { code: "(function ZoomLayoutPagerNativeTsx3(index,animated=true,velocity=0){let[stopPaging,pageCount,currentPageShared,scheduleOnRN,updateCurrentPage,isPaging,onMomentumBegin,translateX,withSpring,width,SPRING_CONFIG,_worklet_7743549908746_init_data,onScroll,onMomentumEnd]=this.__closure;stopPaging();const page=Math.max(0,Math.min(pageCount-1,index));currentPageShared.set(page);scheduleOnRN(updateCurrentPage,page);if(animated){var _onMomentumBegin;isPaging.set(true);(_onMomentumBegin=onMomentumBegin)===null||_onMomentumBegin===void 0||_onMomentumBegin();translateX.set(withSpring(-page*width,{...SPRING_CONFIG,velocity:velocity},'respect-motion-settings',function ZoomLayoutPagerNativeTsx2Factory([_worklet_7743549908746_init_data,onScroll,page,width,isPaging,onMomentumEnd]){const ZoomLayoutPagerNativeTsx2=function(finished){if(!finished)return;onScroll===null||onScroll===void 0||onScroll(page*width);isPaging.set(false);onMomentumEnd===null||onMomentumEnd===void 0||onMomentumEnd();};ZoomLayoutPagerNativeTsx2.__closure=[onScroll,page,width,isPaging,onMomentumEnd];ZoomLayoutPagerNativeTsx2.__workletHash=7743549908746;ZoomLayoutPagerNativeTsx2.__initData=_worklet_7743549908746_init_data;return ZoomLayoutPagerNativeTsx2;}([_worklet_7743549908746_init_data,onScroll,page,width,isPaging,onMomentumEnd])));}else{var _onScroll;translateX.set(-page*width);(_onScroll=onScroll)===null||_onScroll===void 0||_onScroll(page*width);}})" };
let closure_11 = { code: "(function ZoomLayoutPagerNativeTsx4(_,manager){let[gestureEnabled]=this.__closure;if(!gestureEnabled.get())manager.fail();})" };
let closure_12 = { code: "(function ZoomLayoutPagerNativeTsx5(){let[stopPaging,savedTranslateX,translateX,dragging,isPaging,onBeginDrag]=this.__closure;var _onBeginDrag;stopPaging();savedTranslateX.set(translateX.get());dragging.set(true);isPaging.set(true);(_onBeginDrag=onBeginDrag)===null||_onBeginDrag===void 0||_onBeginDrag();})" };
let closure_13 = { code: "(function ZoomLayoutPagerNativeTsx6(event){let[savedTranslateX,pageCount,width,translateX]=this.__closure;let position=savedTranslateX.get()+event.translationX;const minimum=-Math.max(0,pageCount-1)*width;if(position>0)position*=0.3;else if(position<minimum)position=minimum+(position-minimum)*0.3;translateX.set(position);})" };
let closure_14 = { code: "(function ZoomLayoutPagerNativeTsx7(event,success){let[translateX,savedTranslateX,width,pageChangeVelocityThreshold,pageChangePositionThreshold,goToPage]=this.__closure;const distance=translateX.get()-savedTranslateX.get();const startPage=Math.round(-savedTranslateX.get()/width);let page=Math.round(-translateX.get()/width);if(success&&Math.abs(event.velocityX)>pageChangeVelocityThreshold){const forward=event.velocityX<0;const reversed=forward?distance>0:distance<0;page=reversed?startPage:startPage+(forward?1:-1);}else if(success&&Math.abs(distance)>pageChangePositionThreshold*width){page=startPage+(distance<0?1:-1);}goToPage(page,true,success?event.velocityX:0);})" };
let closure_15 = { code: "(function ZoomLayoutPagerNativeTsx8(){let[dragging,goToPage,translateX,width]=this.__closure;if(dragging.get())goToPage(Math.round(-translateX.get()/width));})" };
let closure_16 = { code: "(function ZoomLayoutPagerNativeTsx9(){let[translateX]=this.__closure;return translateX.get();})" };
let closure_17 = { code: "(function ZoomLayoutPagerNativeTsx10(position){let[isPaging,onScroll]=this.__closure;var _onScroll;if(isPaging.get())(_onScroll=onScroll)===null||_onScroll===void 0||_onScroll(-position);})" };
let closure_18 = { code: "(function ZoomLayoutPagerNativeTsx11(){let[selectedPage,isPaging]=this.__closure;return{page:selectedPage.get(),paging:isPaging.get()};})" };
let closure_19 = { code: "(function ZoomLayoutPagerNativeTsx12({page:page,paging:paging}){let[currentPageShared,goToPage]=this.__closure;if(!paging&&page!==currentPageShared.get())goToPage(page,false);})" };
let closure_20 = { code: "(function ZoomLayoutPagerNativeTsx13(){let[goToPage,currentPageShared]=this.__closure;return goToPage(currentPageShared.get(),false);})" };
let closure_21 = { code: "(function ZoomLayoutPagerNativeTsx14(){let[translateX,pageCount,width,height]=this.__closure;return{transform:[{translateX:translateX.get()}],width:pageCount*width,height:height};})" };
const memoResult = react.memo(function ZoomLayoutPager(pageCount) {
  let obj7;
  let obj8;
  let onBeginDrag;
  let onCreateGesture;
  let onEndDrag;
  let onMomentumBegin;
  let onMomentumEnd;
  let onPageChanged;
  let onScroll;
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
  let tmp32;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp39;
  let tmp40;
  let tmp42;
  let tmp43;
  let tmp44;
  let tmp45;
  let tmp46;
  let tmp47;
  let tmp52;
  let tmp53;
  let tmp54;
  let tmp55;
  let tmp56;
  pageCount = pageCount.pageCount;
  let num = pageCount.pageChangePositionThreshold;
  const ref = pageCount.ref;
  if (num === undefined) {
    num = 0.3;
  }
  let num2 = pageCount.pageChangeVelocityThreshold;
  if (num2 === undefined) {
    num2 = 500;
  }
  const width = pageCount.width;
  height = pageCount.height;
  const selectedPage = pageCount.selectedPage;
  const isPaging = pageCount.isPaging;
  let num3 = pageCount.renderAheadCount;
  if (num3 === undefined) {
    num3 = 1;
  }
  ({ onRenderPage: closure_8, onPageChanged } = pageCount);
  ({ onScroll, onBeginDrag } = pageCount);
  ({ onEndDrag, onMomentumBegin, onMomentumEnd, onCreateGesture } = pageCount);
  const gestureRef = pageCount.gestureRef;
  const gestureEnabled = pageCount.gestureEnabled;
  let callback1;
  let callback2;
  let memo;
  let closure_23;
  obj = height;
  let tmp = width(height.useState(() => selectedPage.get()), 2);
  const first = tmp[0];
  closure_15 = tmp[1];
  let tmp3 = pageCount;
  let tmp4 = num2;
  let obj2 = pageCount(num2[5]);
  const sharedValue = obj2.useSharedValue(first);
  const obj3 = pageCount(num2[5]);
  const sharedValue1 = obj3.useSharedValue(-first * width);
  const obj4 = pageCount(num2[5]);
  const sharedValue2 = obj4.useSharedValue(-first * width);
  const obj5 = pageCount(num2[5]);
  const sharedValue3 = obj5.useSharedValue(false);
  let items = [onPageChanged];
  const callback = height.useCallback((arg0) => {
    closure_15(arg0);
    if (onPageChanged != null) {
      onPageChanged(arg0);
    }
  }, items);
  let items1 = [closure_8, , , , , , ];
  const useCallback = height.useCallback;
  items1[1] = pageCount(num2[5]).cancelAnimation;
  items1[2] = sharedValue1;
  items1[3] = sharedValue3;
  items1[4] = onEndDrag;
  items1[5] = onMomentumEnd;
  items1[6] = isPaging;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items1;
  class ZoomLayoutPagerNativeTsx1 {
    constructor() {
      _undefined(c1);
      obj = _undefined2;
      if (_undefined2.get()) {
        const result = obj.set(false);
        if (_undefined3 != null) {
          _undefined3();
        }
      }
      if (_undefined4 != null) {
        _undefined4();
      }
      const result1 = _undefined5.set(false);
    }
  }
  let items2 = [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
  ZoomLayoutPagerNativeTsx1.__closure = items2;
  ZoomLayoutPagerNativeTsx1.__workletHash = 7395508593940;
  ZoomLayoutPagerNativeTsx1.__initData = tmp10;
  let items3 = [sharedValue1, sharedValue3, onEndDrag, onMomentumEnd, isPaging];
  callback1 = useCallback(ZoomLayoutPagerNativeTsx1, items3);
  let items4 = [onBeginDrag, callback1, pageCount, sharedValue, , , , , , , , , , , ];
  const useCallback2 = obj.useCallback;
  items4[4] = tmp3(tmp4[6]).scheduleOnRN;
  items4[5] = callback;
  items4[6] = isPaging;
  items4[7] = onMomentumBegin;
  items4[8] = sharedValue1;
  items4[9] = tmp3(tmp4[7]).withSpring;
  items4[10] = width;
  items4[11] = num3;
  items4[12] = onPageChanged;
  items4[13] = onScroll;
  items4[14] = onMomentumEnd;
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
  let c10;
  let c11;
  let c12;
  let c13;
  [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32] = items4;
  class ZoomLayoutPagerNativeTsx3 {
    constructor(arg0) {
      let tmp25;
      let tmp26;
      let tmp27;
      let tmp28;
      let tmp29;
      let tmp30;
      let flag = arg1;
      if (arg1 === undefined) {
        flag = true;
      }
      num = arg2;
      if (arg2 === undefined) {
        num = 0;
      }
      let tmp = _undefined();
      const bound = Math.max(0, Math.min(c1 - 1, arg0));
      let result = _undefined2.set(bound);
      _undefined3(c4, bound);
      if (flag) {
        const result1 = _undefined4.set(true);
        const tmp10 = _undefined4;
        if (_undefined5 != null) {
          _undefined5();
        }
        const result2 = -bound * c9;
        obj = { velocity: num };
        set = _undefined6.set;
        const merged = Object.assign(c10);
        const items = [c11, c12, bound, c9, tmp10, c13];
        _undefined = undefined;
        c1 = undefined;
        _undefined2 = undefined;
        _undefined3 = undefined;
        c4 = undefined;
        [tmp25, tmp26, tmp27, tmp28, tmp29, tmp30] = items;
        const tmp15 = c8;
        class ZoomLayoutPagerNativeTsx2 {
          constructor(arg0) {
            tmp = arg0;
            if (tmp) {
              tmp3 = null;
              if (closure_0 != null) {
                tmp4 = closure_1;
                tmp5 = closure_2;
                tmp2Result = tmp2(closure_1 * closure_2);
              }
              tmp7 = closure_3;
              flag = false;
              result = closure_3.set(false);
              if (closure_4 != null) {
                tmp9Result = tmp9();
              }
            }
            return;
          }
        }
        const items1 = [tmp26, tmp27, tmp28, tmp29, tmp30];
        ZoomLayoutPagerNativeTsx2.__closure = items1;
        ZoomLayoutPagerNativeTsx2.__workletHash = 7743549908746;
        ZoomLayoutPagerNativeTsx2.__initData = tmp25;
        const result3 = set(tmp15(result2, obj, "respect-motion-settings", ZoomLayoutPagerNativeTsx2));
      } else {
        const result4 = _undefined6.set(-bound * c9);
        const tmp9 = null;
        const tmp6 = c9;
        if (c12 != null) {
          tmp8(bound * tmp6);
        }
      }
    }
  }
  let items5 = [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32];
  ZoomLayoutPagerNativeTsx3.__closure = items5;
  ZoomLayoutPagerNativeTsx3.__workletHash = 15580971465797;
  ZoomLayoutPagerNativeTsx3.__initData = tmp18;
  let items6 = [callback1, pageCount, sharedValue, callback, isPaging, onMomentumBegin, sharedValue1, width, onScroll, onMomentumEnd];
  callback2 = useCallback2(ZoomLayoutPagerNativeTsx3, items6);
  let items7 = [gestureRef, gestureEnabled, callback1, sharedValue2, sharedValue1, sharedValue3, isPaging, onBeginDrag, pageCount, width, num, num2, callback2];
  memo = obj.useMemo(() => {
    let tmp;
    let tmp10;
    let tmp11;
    let tmp12;
    let tmp14;
    let tmp15;
    let tmp16;
    let tmp17;
    let tmp18;
    let tmp2;
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
    let tmp6;
    let tmp7;
    let tmp8;
    let tmp9;
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const withRefResult = PanResult.withRef(gestureRef);
    const maxPointersResult = withRefResult.maxPointers(1);
    const items = [closure_11, gestureEnabled];
    let c0;
    [tmp, tmp2] = items;
    const activeOffsetXResult = maxPointersResult.activeOffsetX([-10, 10]);
    const failOffsetYResult = activeOffsetXResult.failOffsetY([-10, 10]);
    class ZoomLayoutPagerNativeTsx4 {
      constructor(arg0, arg1) {
        if (!closure_0.get()) {
          tmp = arg1;
          failResult = arg1.fail();
        }
        return;
      }
    }
    const items1 = [tmp2];
    ZoomLayoutPagerNativeTsx4.__closure = items1;
    ZoomLayoutPagerNativeTsx4.__workletHash = 8449633442098;
    ZoomLayoutPagerNativeTsx4.__initData = tmp;
    const items2 = [closure_12, callback1, , , , , ];
    let tmp3 = sharedValue2;
    items2[2] = sharedValue2;
    items2[3] = sharedValue1;
    items2[4] = sharedValue3;
    items2[5] = isPaging;
    items2[6] = onBeginDrag;
    c0 = undefined;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items2;
    const onTouchesDownResult = failOffsetYResult.onTouchesDown(ZoomLayoutPagerNativeTsx4);
    class ZoomLayoutPagerNativeTsx5 {
      constructor() {
        tmp = closure_0();
        result = closure_1.set(closure_2.get());
        result1 = closure_3.set(true);
        result2 = closure_4.set(true);
        if (closure_5 != null) {
          tmp5 = closure_5();
        }
        return;
      }
    }
    const items3 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
    ZoomLayoutPagerNativeTsx5.__closure = items3;
    ZoomLayoutPagerNativeTsx5.__workletHash = 14265668669150;
    ZoomLayoutPagerNativeTsx5.__initData = tmp6;
    const items4 = [closure_13, tmp3, pageCount, width, tmp4];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    [tmp14, tmp15, tmp16, tmp17, tmp18] = items4;
    const onStartResult = onTouchesDownResult.onStart(ZoomLayoutPagerNativeTsx5);
    const tmp5 = sharedValue3;
    class ZoomLayoutPagerNativeTsx6 {
      constructor(arg0) {
        sum = closure_0.get() + arg0.translationX;
        result = -Math.max(0, closure_1 - 1) * closure_2;
        if (sum > 0) {
          num2 = 0.3;
          result1 = sum * 0.3;
        } else {
          result1 = sum;
          if (sum < result) {
            num = 0.3;
            result1 = result + 0.3 * (sum - result);
          }
        }
        result2 = closure_3.set(result1);
        return;
      }
    }
    const items5 = [tmp15, tmp16, tmp17, tmp18];
    ZoomLayoutPagerNativeTsx6.__closure = items5;
    ZoomLayoutPagerNativeTsx6.__workletHash = 4355817730097;
    ZoomLayoutPagerNativeTsx6.__initData = tmp14;
    const items6 = [closure_14, tmp4, tmp3, width, num2, num, callback2];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26] = items6;
    const onUpdateResult = onStartResult.onUpdate(ZoomLayoutPagerNativeTsx6);
    class ZoomLayoutPagerNativeTsx7 {
      constructor(arg0, arg1) {
        value = closure_0.get();
        diff = value - closure_1.get();
        tmp3 = closure_2;
        rounded = Math.round(-closure_1.get() / closure_2);
        rounded1 = Math.round(-closure_0.get() / closure_2);
        if (arg1) {
          _Math = Math;
          tmp6 = closure_3;
          if (Math.abs(arg0.velocityX) > closure_3) {
            num3 = 0;
            tmp9 = arg0.velocityX < 0;
            sum = rounded;
            if (!(tmp9 ? diff > 0 : diff < 0)) {
              num4 = -1;
              if (tmp9) {
                num4 = 1;
              }
              sum = rounded + num4;
            }
            rounded1 = sum;
          }
          num5 = 0;
          tmp11 = closure_5;
          if (arg1) {
            num5 = arg0.velocityX;
          }
          flag = true;
          tmp11Result = tmp11(rounded1, true, num5);
          return;
        }
        tmp7 = arg1;
        if (tmp7) {
          _Math2 = Math;
          tmp8 = closure_4;
          tmp7 = Math.abs(diff) > closure_4 * tmp3;
        }
        if (tmp7) {
          num = -1;
          num2 = 0;
          if (diff < 0) {
            num = 1;
          }
          rounded1 = rounded + num;
        }
        return;
      }
    }
    const items7 = [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26];
    ZoomLayoutPagerNativeTsx7.__closure = items7;
    ZoomLayoutPagerNativeTsx7.__workletHash = 11667777990278;
    ZoomLayoutPagerNativeTsx7.__initData = tmp20;
    const items8 = [closure_15, tmp5, callback2, tmp4, width];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    [tmp27, tmp28, tmp29, tmp30, tmp31] = items8;
    const onEndResult = onUpdateResult.onEnd(ZoomLayoutPagerNativeTsx7);
    class ZoomLayoutPagerNativeTsx8 {
      constructor() {
        if (closure_0.get()) {
          tmp = closure_1;
          tmp2 = globalThis;
          _Math = Math;
          tmp3 = closure_2;
          tmp4 = closure_3;
          tmp5 = closure_1(Math.round(-closure_2.get() / closure_3));
        }
        return;
      }
    }
    const items9 = [tmp28, tmp29, tmp30, tmp31];
    ZoomLayoutPagerNativeTsx8.__closure = items9;
    ZoomLayoutPagerNativeTsx8.__workletHash = 7231016856330;
    ZoomLayoutPagerNativeTsx8.__initData = tmp27;
    return onEndResult.onFinalize(ZoomLayoutPagerNativeTsx8);
  }, items7);
  let items8 = [onCreateGesture, memo];
  const memo1 = obj.useMemo(() => {
    let tmpResult;
    if (onCreateGesture != null) {
      tmpResult = tmp(memo);
    }
    if (tmpResult == null) {
      tmpResult = memo;
    }
    return tmpResult;
  }, items8);
  let items9 = [sharedValue, sharedValue1];
  c0 = undefined;
  [tmp36, tmp37] = items9;
  const tmp3Result = tmp3(tmp4[5]);
  class ZoomLayoutPagerNativeTsx9 {
    constructor() {
      return _undefined.get();
    }
  }
  const items10 = [tmp37];
  ZoomLayoutPagerNativeTsx9.__closure = items10;
  ZoomLayoutPagerNativeTsx9.__workletHash = 12002625415812;
  ZoomLayoutPagerNativeTsx9.__initData = tmp36;
  const items11 = [sharedValue1, isPaging, onScroll];
  c0 = undefined;
  c1 = undefined;
  [tmp38, tmp39, tmp40] = items11;
  class ZoomLayoutPagerNativeTsx10 {
    constructor(arg0) {
      if (_undefined.get()) {
        if (c1 != null) {
          tmp(-arg0);
        }
      }
    }
  }
  const items12 = [tmp39, tmp40];
  ZoomLayoutPagerNativeTsx10.__closure = items12;
  ZoomLayoutPagerNativeTsx10.__workletHash = 10461805768773;
  ZoomLayoutPagerNativeTsx10.__initData = tmp38;
  const animatedReaction = tmp3Result.useAnimatedReaction(ZoomLayoutPagerNativeTsx9, ZoomLayoutPagerNativeTsx10);
  const items13 = [sharedValue2, selectedPage, isPaging];
  c0 = undefined;
  c1 = undefined;
  [tmp42, tmp43, tmp44] = items13;
  const tmp3Result3 = tmp3(tmp4[5]);
  class ZoomLayoutPagerNativeTsx11 {
    constructor() {
      obj = { page: _undefined.get(), paging: _undefined2.get() };
      return obj;
    }
  }
  const items14 = [tmp43, tmp44];
  ZoomLayoutPagerNativeTsx11.__closure = items14;
  ZoomLayoutPagerNativeTsx11.__workletHash = 12937330645255;
  ZoomLayoutPagerNativeTsx11.__initData = tmp42;
  const items15 = [sharedValue3, sharedValue, callback2];
  c0 = undefined;
  c1 = undefined;
  [tmp45, tmp46, tmp47] = items15;
  class ZoomLayoutPagerNativeTsx12 {
    constructor(arg0) {
      let page;
      let paging;
      ({ page, paging } = arg0);
      if (!paging) {
        paging = page === _undefined.get();
      }
      if (!paging) {
        _undefined2(page, false);
      }
    }
  }
  const items16 = [tmp46, tmp47];
  ZoomLayoutPagerNativeTsx12.__closure = items16;
  ZoomLayoutPagerNativeTsx12.__workletHash = 10042999683418;
  ZoomLayoutPagerNativeTsx12.__initData = tmp45;
  const animatedReaction1 = tmp3Result3.useAnimatedReaction(ZoomLayoutPagerNativeTsx11, ZoomLayoutPagerNativeTsx12);
  const items17 = [width, height, callback2, sharedValue];
  const effect = obj.useEffect(() => {
    let tmp;
    let tmp2;
    let tmp3;
    const items = [closure_20, callback2, sharedValue];
    let c0;
    let c1;
    [tmp, tmp2, tmp3] = items;
    obj = _mod1705;
    class ZoomLayoutPagerNativeTsx13 {
      constructor() {
        return closure_0(closure_1.get(), false);
      }
    }
    const items1 = [tmp2, tmp3];
    ZoomLayoutPagerNativeTsx13.__closure = items1;
    ZoomLayoutPagerNativeTsx13.__workletHash = 9355468723939;
    ZoomLayoutPagerNativeTsx13.__initData = tmp;
    obj.scheduleOnUI(ZoomLayoutPagerNativeTsx13);
  }, items17);
  const imperativeHandle = obj.useImperativeHandle(ref, () => {
    obj = {
      goToPage(arg0) {
        let flag = arg1;
        if (arg1 === undefined) {
          flag = true;
        }
        obj = pageCount(num2[6]);
        return obj.scheduleOnUI(callback2, arg0, flag);
      },
      getCurrentPage() {
        return sharedValue.get();
      }
    };
    return obj;
  });
  const items18 = [first, num3, pageCount];
  const memo2 = obj.useMemo(() => {
    let bound1;
    const items = [];
    let bound = Math.max(0, first - num3);
    if (bound <= Math.min(pageCount - 1, first + num3)) {
      do {
        let arr = items.push(bound);
        bound = bound + 1;
        let _Math = Math;
        bound1 = Math.min(pageCount - 1, first + num3);
      } while (bound <= bound1);
    }
    return items;
  }, items18);
  const items19 = [width, height];
  const items20 = [width, height];
  const memo3 = obj.useMemo(() => {
    size = { overflow: "hidden", width, height };
    return size;
  }, items19);
  closure_23 = obj.useMemo(() => {
    size = { position: "absolute", top: 0, width, height };
    return size;
  }, items20);
  const items21 = [callback2, sharedValue1, pageCount, width, height];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp52, tmp53, tmp54, tmp55, tmp56] = items21;
  const tmp3Result4 = tmp3(tmp4[5]);
  class ZoomLayoutPagerNativeTsx14 {
    constructor() {
      let items;
      size = { transform: items, width: c1 * c2, height };
      items = [{ translateX: _undefined.get() }];
      ({ translateX: _undefined.get() });
      return size;
    }
  }
  const items22 = [tmp53, tmp54, tmp55, tmp56];
  ZoomLayoutPagerNativeTsx14.__closure = items22;
  ZoomLayoutPagerNativeTsx14.__workletHash = 9683182820627;
  ZoomLayoutPagerNativeTsx14.__initData = tmp52;
  const animatedStyle = tmp3Result4.useAnimatedStyle(ZoomLayoutPagerNativeTsx14);
  const obj6 = { gesture: memo1, children: isPaging(selectedPage, obj7) };
  obj7 = { collapsable: false, style: memo3, children: isPaging(View, obj8) };
  const GestureDetector = tmp3(tmp4[8]).GestureDetector;
  obj8 = {
    style: animatedStyle,
    children: memo2.map((item) => {
      let items;
      let str;
      obj = { accessibilityElementsHidden: item !== first, importantForAccessibility: str, style: items, children: closure_8(item) };
      str = "no-hide-descendants";
      const tmp = jsx;
      const tmp2 = View;
      if (item === first) {
        str = "auto";
      }
      items = [closure_23, ];
      const obj2 = { left: item * width };
      items[1] = obj2;
      return tmp(tmp2, obj, item);
    })
  };
  View = num(tmp4[5]).View;
  return isPaging(GestureDetector, obj6);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/zoom_layout/ZoomLayoutPager.native.tsx");

export default memoResult;
