// Module ID: 10777
// Function ID: 10778
// Name: useCarouselController
// Dependencies: [19, 10769, 1652, 10778, 10762, 10763, 10779, 10765]
// Exports: useCarouselController

// Module 10777 (useCarouselController)
import react2 from "react" /* 19 */;
import convertToSharedIndex from "convertToSharedIndex" /* 10762 */;
import handlerOffsetDirection from "handlerOffsetDirection" /* 10765 */;

const require = globalThis.__r;
let _require;

const useRef = react2.useRef;
let closure_4 = { code: "(function pnpm_useCarouselControllerTsx1(){let[handlerOffset,round,size,dataInfo,convertToSharedIndex,loop,autoFillData]=this.__closure;const handlerOffsetValue=handlerOffset.value;const toInt=round(handlerOffsetValue/size)%dataInfo.length;const isPositive=handlerOffsetValue<=0;const i=isPositive?Math.abs(toInt):Math.abs(toInt>0?dataInfo.length-toInt:0);const newSharedIndexValue=convertToSharedIndex({loop:loop,rawDataLength:dataInfo.originalLength,autoFillData:autoFillData,index:i});return{i:i,newSharedIndexValue:newSharedIndexValue};})" };
let closure_5 = { code: "(function pnpm_useCarouselControllerTsx2({i:i,newSharedIndexValue:newSharedIndexValue}){let[index,runOnJS,setSharedIndex]=this.__closure;index.value=i;runOnJS(setSharedIndex)(newSharedIndexValue);})" };
let closure_6 = { code: "(function pnpm_useCarouselControllerTsx3(isFinished){let[runOnJS,onScrollEnd,onFinished]=this.__closure;if(isFinished){runOnJS(onScrollEnd)();onFinished&&runOnJS(onFinished)();}})" };
let closure_7 = { code: "(function pnpm_useCarouselControllerTsx4(toValue,onFinished){let[_worklet_11535498116530_init_data,runOnJS,onScrollEnd,duration,Easing,dealWithAnimation,withAnimation]=this.__closure;var _withAnimation;const callback=function pnpm_useCarouselControllerTsx3Factory([_worklet_11535498116530_init_data,runOnJS,onScrollEnd,onFinished]){const pnpm_useCarouselControllerTsx3=function(isFinished){if(isFinished){runOnJS(onScrollEnd)();onFinished&&runOnJS(onFinished)();}};pnpm_useCarouselControllerTsx3.__closure=[runOnJS,onScrollEnd,onFinished];pnpm_useCarouselControllerTsx3.__workletHash=11535498116530;pnpm_useCarouselControllerTsx3.__initData=_worklet_11535498116530_init_data;return pnpm_useCarouselControllerTsx3;}([_worklet_11535498116530_init_data,runOnJS,onScrollEnd,onFinished]);const defaultWithAnimation={type:\"timing\",config:{duration:duration,easing:Easing.easeOutQuart}};return dealWithAnimation((_withAnimation=withAnimation)!==null&&_withAnimation!==void 0?_withAnimation:defaultWithAnimation)(toValue,callback);})" };
let closure_8 = { code: "(function pnpm_useCarouselControllerTsx5(opts={}){let[canSliding,loop,index,dataInfo,size,overscrollEnabled,containerSize,onScrollStart,currentFixedPage,handlerOffset,scrollWithTiming]=this.__closure;var _onScrollStart;const{count=1,animated=true,onFinished:onFinished}=opts;if(!canSliding())return;if(!loop&&index.value>=dataInfo.length-1)return;const visibleContentWidth=(dataInfo.length-index.value)*size;if(!overscrollEnabled&&!(visibleContentWidth>containerSize.value.width)){return;}(_onScrollStart=onScrollStart)===null||_onScrollStart===void 0||_onScrollStart();const nextPage=currentFixedPage()+count;index.value=nextPage;if(animated){handlerOffset.value=scrollWithTiming(-nextPage*size,onFinished);}else{handlerOffset.value=-nextPage*size;onFinished===null||onFinished===void 0||onFinished();}})" };

export function useCarouselController(size) {
  let autoFillData;
  let defaultIndex;
  let duration;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
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
  let tmp9;
  let withAnimation;
  _require = size;
  size = size.size;
  const loop = size.loop;
  const dataLength = size.dataLength;
  const handlerOffset = size.handlerOffset;
  ({ withAnimation, defaultIndex } = size);
  let num = 0;
  let ref = size.ref;
  if (undefined !== defaultIndex) {
    num = defaultIndex;
  }
  ({ duration, autoFillData } = size);
  const fixedDirection = size.fixedDirection;
  let tmp = _require;
  let tmp2 = size;
  let obj = require("module_10769");
  const globalState = obj.useGlobalState();
  let obj2 = loop;
  let items = [dataLength];
  const overscrollEnabled = globalState.props.overscrollEnabled;
  const containerSize = globalState.layout.containerSize;
  const memo = loop.useMemo(() => ({ length: dataLength, disable: !dataLength, originalLength: dataLength }), items);
  let obj3 = require("module_1652");
  const sharedValue = obj3.useSharedValue(num);
  let tmp5 = dataLength(num);
  ref = tmp5;
  let items1 = [handlerOffset, memo, size, loop];
  let tmp6 = dataLength(num);
  const callback = loop.useCallback(() => {
    const tmp = loop;
    if (tmp) {
      const _Math4 = Math;
      return -Math.round(handlerOffset.value / size);
    } else {
      let absolute;
      const result = handlerOffset.value / size % memo.length;
      const _Math = Math;
      if (handlerOffset.value <= 0) {
        const _Math3 = Math;
        absolute = Math.abs(result);
      } else {
        let num2 = 0;
        const _Math2 = Math;
        if (result > 0) {
          num2 = arr.length - result;
        }
        absolute = abs(num2);
      }
      return round(absolute);
    }
  }, items1);
  const items2 = [handlerOffset, handlerOffset, , , , , , ];
  const useAnimatedReaction = require("module_1652").useAnimatedReaction;
  const tmp8 = require("module_1652");
  items2[2] = require("log").round;
  items2[3] = size;
  items2[4] = memo;
  items2[5] = require("convertToSharedIndex").convertToSharedIndex;
  items2[6] = loop;
  items2[7] = autoFillData;
  [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items2;
  function pnpm_useCarouselControllerTsx1() {
    let absolute;
    const value = _undefined.value;
    const result = _undefined2(value / c2) % _undefined3.length;
    if (value <= 0) {
      const _Math2 = Math;
      absolute = Math.abs(result);
    } else {
      let num = 0;
      const _Math = Math;
      if (result > 0) {
        num = arr.length - result;
      }
      absolute = abs(num);
    }
    const obj = { i: absolute, newSharedIndexValue: _undefined4(obj2) };
    return obj;
  }
  const items3 = [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
  pnpm_useCarouselControllerTsx1.__closure = items3;
  pnpm_useCarouselControllerTsx1.__workletHash = 10812455195594;
  pnpm_useCarouselControllerTsx1.__initData = tmp9;
  const items4 = [
    autoFillData,
    sharedValue,
    tmp(tmp2[2]).runOnJS,
    function setSharedIndex(current) {
      ref.current = current;
    }
  ];
  [tmp17, tmp18, tmp19, tmp20] = items4;
  function pnpm_useCarouselControllerTsx2(arg0) {
    c0.value = arg0.i;
    _undefined(c2)(arg0.newSharedIndexValue);
  }
  const items5 = [tmp18, tmp19, tmp20];
  pnpm_useCarouselControllerTsx2.__closure = items5;
  pnpm_useCarouselControllerTsx2.__workletHash = 10044128116354;
  pnpm_useCarouselControllerTsx2.__initData = tmp17;
  const items6 = [tmp6, tmp5, size, memo, sharedValue, loop, autoFillData, handlerOffset];
  const animatedReaction = useAnimatedReaction(pnpm_useCarouselControllerTsx1, pnpm_useCarouselControllerTsx2, items6);
  const items7 = [sharedValue, autoFillData, memo, loop];
  const callback1 = obj2.useCallback(() => {
    const obj = convertToSharedIndex;
    const obj2 = { index: sharedValue.value, dataLength: memo.originalLength, loop, autoFillData };
    return obj.computedRealIndexWithAutoFillData(obj2);
  }, items7);
  const items8 = [memo];
  const callback2 = obj2.useCallback(() => !memo.disable, items8);
  const items9 = [size];
  const callback3 = obj2.useCallback(() => {
    const onScrollEnd = size.onScrollEnd;
    if (onScrollEnd != null) {
      onScrollEnd();
    }
  }, items9);
  const items10 = [size];
  const callback4 = obj2.useCallback(() => {
    const onScrollStart = size.onScrollStart;
    if (onScrollStart != null) {
      onScrollStart();
    }
  }, items10);
  const items11 = [memo, fixedDirection, , , , , , ];
  const useCallback = obj2.useCallback;
  items11[2] = tmp(tmp2[2]).runOnJS;
  items11[3] = callback3;
  items11[4] = duration;
  items11[5] = tmp(tmp2[5]).Easing;
  items11[6] = tmp(tmp2[6]).dealWithAnimation;
  items11[7] = withAnimation;
  [tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33] = items11;
  function pnpm_useCarouselControllerTsx4(arg0, arg1) {
    let obj2;
    let tmp;
    let tmp2;
    let tmp3;
    let tmp4;
    const items = [c0, c1, c2, arg1];
    [tmp, tmp2, tmp3, tmp4] = items;
    function pnpm_useCarouselControllerTsx3(arg0) {
      const tmp = arg0;
      if (tmp) {
        closure_1_0(closure_1_1)();
        const tmp2 = closure_1_0;
        if (closure_1_2) {
          tmp2(closure_1_2)();
        }
      }
    }
    const items1 = [tmp2, tmp3, tmp4];
    pnpm_useCarouselControllerTsx3.__closure = items1;
    pnpm_useCarouselControllerTsx3.__workletHash = 11535498116530;
    pnpm_useCarouselControllerTsx3.__initData = tmp;
    const obj = { type: "timing", config: obj2 };
    let tmp6 = c6;
    obj2 = { duration, easing: _undefined.easeOutQuart };
    const tmp5 = c5;
    if (c6 == null) {
      tmp6 = obj;
    }
    return tmp5(tmp6)(arg0, pnpm_useCarouselControllerTsx3);
  }
  const items12 = [tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33];
  pnpm_useCarouselControllerTsx4.__closure = items12;
  pnpm_useCarouselControllerTsx4.__workletHash = 10494355105437;
  pnpm_useCarouselControllerTsx4.__initData = tmp26;
  const items13 = [duration, withAnimation, callback3];
  const callback5 = useCallback(pnpm_useCarouselControllerTsx4, items13);
  const items14 = [sharedValue, callback2, loop, sharedValue, memo, size, overscrollEnabled, containerSize, callback4, callback, handlerOffset, callback5];
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  let c10;
  [tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46] = items14;
  function pnpm_useCarouselControllerTsx5() {
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    const count = obj.count;
    let num = 1;
    if (undefined !== count) {
      num = count;
    }
    const animated = obj.animated;
    const onFinished = obj.onFinished;
    const tmp = undefined === animated || animated;
    if (_undefined()) {
      const tmp2 = c1;
      if (tmp2) {
        const tmp9 = c5;
        if (tmp9) {
          if (_undefined5 != null) {
            _undefined5();
          }
          const sum = _undefined6() + num;
          tmp6.value = sum;
          if (tmp) {
            c9.value = _undefined7(-sum * c4, onFinished);
          } else {
            c9.value = -sum * c4;
            if (onFinished != null) {
              onFinished();
            }
          }
        }
      }
    }
  }
  const items15 = [tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46];
  pnpm_useCarouselControllerTsx5.__closure = items15;
  pnpm_useCarouselControllerTsx5.__workletHash = 16398528283474;
  pnpm_useCarouselControllerTsx5.__initData = tmp35;
  const items16 = [callback2, loop, sharedValue, memo, callback4, handlerOffset, size, callback5, callback];
  const callback6 = obj2.useCallback(pnpm_useCarouselControllerTsx5, items16);
  const items17 = [callback2, loop, sharedValue, callback4, handlerOffset, size, callback5, callback];
  const callback7 = obj2.useCallback(() => {
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    const count = obj.count;
    let num = 1;
    if (undefined !== count) {
      num = count;
    }
    const animated = obj.animated;
    const onFinished = obj.onFinished;
    const tmp = undefined === animated || animated;
    if (callback2()) {
      const tmp2 = loop;
      if (tmp2) {
        if (callback4 != null) {
          callback4();
        }
        const diff = callback() - num;
        sharedValue.value = diff;
        if (tmp) {
          handlerOffset.value = callback5(-diff * size, onFinished);
        } else {
          handlerOffset.value = -diff * size;
          if (onFinished != null) {
            onFinished();
          }
        }
      }
    }
  }, items17);
  const items18 = [size, loop, sharedValue, fixedDirection, handlerOffset, memo.length, callback2, callback4, callback5];
  const callback8 = obj2.useCallback((onFinished) => {
    let animated;
    let i;
    ({ i, animated } = onFinished);
    onFinished = onFinished.onFinished;
    const tmp = undefined !== animated && animated;
    if (i !== sharedValue.value) {
      if (callback2()) {
        if (callback4 != null) {
          callback4();
        }
        const obj = handlerOffsetDirection;
        const result = obj.handlerOffsetDirection(handlerOffset, fixedDirection);
        const result1 = memo.length * size;
        let flag = false;
        const result2 = i * size * result;
        if (loop) {
          const _Math = Math;
          flag = Math.abs(iter.value % result1) / result1 >= 0.5;
        }
        const _Math2 = Math;
        const _Math3 = Math;
        let num2 = 0;
        const rounded = Math.floor(Math.abs(iter.value / result1));
        if (flag) {
          num2 = 1;
        }
        const sum = (rounded + num2) * result1 * result + result2;
        if (tmp) {
          sharedValue.value = i;
          handlerOffset.value = callback5(sum, onFinished);
        } else {
          handlerOffset.value = sum;
          sharedValue.value = i;
          if (onFinished != null) {
            onFinished();
          }
        }
      }
    }
  }, items18);
  const items19 = [callback7, callback6, callback8];
  const callback9 = obj2.useCallback(() => {
    let animated;
    let count;
    let index;
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    ({ index, count, animated } = obj);
    const onFinished = obj.onFinished;
    if (typeof index === "number") {
      if (index > -1) {
        const obj2 = { i: index, animated: undefined !== animated && animated, onFinished };
        callback8(obj2);
      }
    }
    if (count) {
      const _Math = Math;
      const rounded = Math.round(count);
      if (rounded < 0) {
        const _Math2 = Math;
        const obj3 = { count: Math.abs(rounded), animated: undefined !== animated && animated, onFinished };
        callback7(obj3);
      } else {
        const obj4 = { count: rounded, animated: undefined !== animated && animated, onFinished };
        callback6(obj4);
      }
    }
  }, items19);
  const items20 = [callback1, callback6, callback7, callback9];
  const imperativeHandle = obj2.useImperativeHandle(ref, () => ({ next: callback6, prev: callback7, getCurrentIndex: callback1, scrollTo: callback9 }), items20);
  let obj4 = {
    next: callback6,
    prev: callback7,
    scrollTo: callback9,
    getCurrentIndex: callback1,
    getSharedIndex() {
      return ref.current;
    },
    index: sharedValue
  };
  return obj4;
}
