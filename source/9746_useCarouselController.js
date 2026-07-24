// Module ID: 9746
// Function ID: 75712
// Name: useCarouselController
// Dependencies: [31, 9738, 1582, 9747, 9731, 9732, 9748, 9734]
// Exports: useCarouselController

// Module 9746 (useCarouselController)
import result from "result";
import { useRef } from "result";

const require = arg1;
let closure_4 = { code: "function pnpm_useCarouselControllerTsx1(){const{handlerOffset,round,size,dataInfo,convertToSharedIndex,loop,autoFillData}=this.__closure;const handlerOffsetValue=handlerOffset.value;const toInt=round(handlerOffsetValue/size)%dataInfo.length;const isPositive=handlerOffsetValue<=0;const i=isPositive?Math.abs(toInt):Math.abs(toInt>0?dataInfo.length-toInt:0);const newSharedIndexValue=convertToSharedIndex({loop:loop,rawDataLength:dataInfo.originalLength,autoFillData:autoFillData,index:i});return{i:i,newSharedIndexValue:newSharedIndexValue};}" };
let closure_5 = { code: "function pnpm_useCarouselControllerTsx2({i:i,newSharedIndexValue:newSharedIndexValue}){const{index,runOnJS,setSharedIndex}=this.__closure;index.value=i;runOnJS(setSharedIndex)(newSharedIndexValue);}" };
let closure_6 = { code: "function pnpm_useCarouselControllerTsx3(toValue,onFinished){const{runOnJS,onScrollEnd,duration,Easing,dealWithAnimation,withAnimation}=this.__closure;var _withAnimation;const callback=function(isFinished){\"worklet\";if(isFinished){runOnJS(onScrollEnd)();onFinished&&runOnJS(onFinished)();}};const defaultWithAnimation={type:\"timing\",config:{duration:duration,easing:Easing.easeOutQuart}};return dealWithAnimation((_withAnimation=withAnimation)!==null&&_withAnimation!==void 0?_withAnimation:defaultWithAnimation)(toValue,callback);}" };
let closure_7 = { code: "function pnpm_useCarouselControllerTsx4(isFinished){const{runOnJS,onScrollEnd,onFinished}=this.__closure;if(isFinished){runOnJS(onScrollEnd)();onFinished&&runOnJS(onFinished)();}}" };
let closure_8 = { code: "function pnpm_useCarouselControllerTsx5(opts={}){const{canSliding,loop,index,dataInfo,size,overscrollEnabled,containerSize,onScrollStart,currentFixedPage,handlerOffset,scrollWithTiming}=this.__closure;var _onScrollStart;const{count=1,animated=true,onFinished:onFinished}=opts;if(!canSliding())return;if(!loop&&index.value>=dataInfo.length-1)return;const visibleContentWidth=(dataInfo.length-index.value)*size;if(!overscrollEnabled&&!(visibleContentWidth>containerSize.value.width)){return;}(_onScrollStart=onScrollStart)===null||_onScrollStart===void 0||_onScrollStart();const nextPage=currentFixedPage()+count;index.value=nextPage;if(animated){handlerOffset.value=scrollWithTiming(-nextPage*size,onFinished);}else{handlerOffset.value=-nextPage*size;onFinished===null||onFinished===void 0||onFinished();}}" };

export const useCarouselController = function useCarouselController(size) {
  const _require = size;
  function setSharedIndex(current) {
    closure_13.current = current;
  }
  size = size.size;
  const loop = size.loop;
  const dataLength = size.dataLength;
  const handlerOffset = size.handlerOffset;
  const withAnimation = size.withAnimation;
  const defaultIndex = size.defaultIndex;
  let num = 0;
  if (undefined !== defaultIndex) {
    num = defaultIndex;
  }
  const duration = size.duration;
  const autoFillData = size.autoFillData;
  const fixedDirection = size.fixedDirection;
  let obj = _require(size[1]);
  const globalState = obj.useGlobalState();
  const overscrollEnabled = globalState.props.overscrollEnabled;
  const containerSize = globalState.layout.containerSize;
  const items = [dataLength];
  const memo = loop.useMemo(() => ({ length: dataLength, disable: !dataLength, originalLength: dataLength }), items);
  let obj1 = _require(size[2]);
  const sharedValue = obj1.useSharedValue(num);
  const tmp3 = dataLength(num);
  let closure_13 = tmp3;
  const items1 = [handlerOffset, memo, size, loop];
  const callback = loop.useCallback(() => {
    if (loop) {
      const _Math2 = Math;
      return -Math.round(handlerOffset.value / size);
    } else {
      const result = handlerOffset.value / size % memo.length;
      if (handlerOffset.value <= 0) {
        const _Math = Math;
        let absolute = Math.abs(result);
      } else {
        let num2 = 0;
        if (result > 0) {
          num2 = memo.length - result;
        }
        absolute = Math.abs(num2);
      }
      return Math.round(absolute);
    }
  }, items1);
  let obj2 = _require(size[2]);
  /* worklet (recovered source) */ function pnpm_useCarouselControllerTsx1(){const{handlerOffset,round,size,dataInfo,convertToSharedIndex,loop,autoFillData}=this.__closure;const handlerOffsetValue=handlerOffset.value;const toInt=round(handlerOffsetValue/size)%dataInfo.length;const isPositive=handlerOffsetValue<=0;const i=isPositive?Math.abs(toInt):Math.abs(toInt>0?dataInfo.length-toInt:0);const newSharedIndexValue=convertToSharedIndex({loop:loop,rawDataLength:dataInfo.originalLength,autoFillData:autoFillData,index:i});return{i:i,newSharedIndexValue:newSharedIndexValue};}
  obj = { handlerOffset, round: _require(size[3]).round, size, dataInfo: memo, convertToSharedIndex: _require(size[4]).convertToSharedIndex, loop, autoFillData };
  pnpm_useCarouselControllerTsx1.__closure = obj;
  pnpm_useCarouselControllerTsx1.__workletHash = 15925793381075;
  pnpm_useCarouselControllerTsx1.__initData = handlerOffset;
  /* worklet (recovered source) */ function pnpm_useCarouselControllerTsx2({i:i,newSharedIndexValue:newSharedIndexValue}){const{index,runOnJS,setSharedIndex}=this.__closure;index.value=i;runOnJS(setSharedIndex)(newSharedIndexValue);}
  obj = { index: sharedValue, runOnJS: _require(size[2]).runOnJS, setSharedIndex };
  pnpm_useCarouselControllerTsx2.__closure = obj;
  pnpm_useCarouselControllerTsx2.__workletHash = 4173925309211;
  pnpm_useCarouselControllerTsx2.__initData = withAnimation;
  const items2 = [dataLength(num), tmp3, size, memo, sharedValue, loop, autoFillData, handlerOffset];
  const animatedReaction = obj2.useAnimatedReaction(pnpm_useCarouselControllerTsx1, pnpm_useCarouselControllerTsx2, items2);
  const items3 = [sharedValue, autoFillData, memo, loop];
  const callback1 = loop.useCallback(() => {
    let obj = size(size[4]);
    obj = { index: sharedValue.value, dataLength: memo.originalLength, loop, autoFillData };
    return obj.computedRealIndexWithAutoFillData(obj);
  }, items3);
  const items4 = [memo];
  const callback2 = loop.useCallback(() => !memo.disable, items4);
  const items5 = [size];
  const callback3 = loop.useCallback(() => {
    if (null != size.onScrollEnd) {
      size.onScrollEnd();
    }
  }, items5);
  const items6 = [size];
  const callback4 = loop.useCallback(() => {
    if (null != size.onScrollStart) {
      size.onScrollStart();
    }
  }, items6);
  /* worklet (recovered source) */ function pnpm_useCarouselControllerTsx3(toValue,onFinished){const{runOnJS,onScrollEnd,duration,Easing,dealWithAnimation,withAnimation}=this.__closure;var _withAnimation;const callback=function(isFinished){"worklet";if(isFinished){runOnJS(onScrollEnd)();onFinished&&runOnJS(onFinished)();}};const defaultWithAnimation={type:"timing",config:{duration:duration,easing:Easing.easeOutQuart}};return dealWithAnimation((_withAnimation=withAnimation)!==null&&_withAnimation!==void 0?_withAnimation:defaultWithAnimation)(toValue,callback);}
  obj1 = { runOnJS: _require(size[2]).runOnJS, onScrollEnd: callback3, duration, Easing: _require(size[5]).Easing, dealWithAnimation: _require(size[6]).dealWithAnimation, withAnimation };
  pnpm_useCarouselControllerTsx3.__closure = obj1;
  pnpm_useCarouselControllerTsx3.__workletHash = 4740828363382;
  pnpm_useCarouselControllerTsx3.__initData = duration;
  const items7 = [duration, withAnimation, callback3];
  const callback5 = loop.useCallback(pnpm_useCarouselControllerTsx3, items7);
  /* worklet (recovered source) */ function pnpm_useCarouselControllerTsx5(opts={}){const{canSliding,loop,index,dataInfo,size,overscrollEnabled,containerSize,onScrollStart,currentFixedPage,handlerOffset,scrollWithTiming}=this.__closure;var _onScrollStart;const{count=1,animated=true,onFinished:onFinished}=opts;if(!canSliding())return;if(!loop&&index.value>=dataInfo.length-1)return;const visibleContentWidth=(dataInfo.length-index.value)*size;if(!overscrollEnabled&&!(visibleContentWidth>containerSize.value.width)){return;}(_onScrollStart=onScrollStart)===null||_onScrollStart===void 0||_onScrollStart();const nextPage=currentFixedPage()+count;index.value=nextPage;if(animated){handlerOffset.value=scrollWithTiming(-nextPage*size,onFinished);}else{handlerOffset.value=-nextPage*size;onFinished===null||onFinished===void 0||onFinished();}}
  pnpm_useCarouselControllerTsx5.__closure = { canSliding: callback2, loop, index: sharedValue, dataInfo: memo, size, overscrollEnabled, containerSize, onScrollStart: callback4, currentFixedPage: callback, handlerOffset, scrollWithTiming: callback5 };
  pnpm_useCarouselControllerTsx5.__workletHash = 4352275578667;
  pnpm_useCarouselControllerTsx5.__initData = fixedDirection;
  const items8 = [callback2, loop, sharedValue, memo, callback4, handlerOffset, size, callback5, callback];
  const callback6 = loop.useCallback(pnpm_useCarouselControllerTsx5, items8);
  const items9 = [callback2, loop, sharedValue, callback4, handlerOffset, size, callback5, callback];
  const callback7 = loop.useCallback(() => {
    if (arguments.length > 0) {
      if (undefined !== arguments[0]) {
        let first = arguments[0];
      }
      const count = first.count;
      let num = 1;
      if (undefined !== count) {
        num = count;
      }
      const animated = first.animated;
      const onFinished = first.onFinished;
      if (callback2()) {
        if (loop) {
          if (null != callback4) {
            callback4();
          }
          const diff = callback() - num;
          sharedValue.value = diff;
          if (tmp) {
            tmp12.value = callback5(tmp13 * size, onFinished);
          } else {
            tmp12.value = tmp13 * size;
            if (null != onFinished) {
              onFinished();
            }
          }
        }
      }
    }
    first = {};
  }, items9);
  const items10 = [size, loop, sharedValue, fixedDirection, handlerOffset, memo.length, callback2, callback4, callback5];
  const callback8 = loop.useCallback((onFinished) => {
    let animated;
    let i;
    ({ i, animated } = onFinished);
    onFinished = onFinished.onFinished;
    if (i !== sharedValue.value) {
      if (callback2()) {
        if (null != callback4) {
          callback4();
        }
        const result = size(size[7]).handlerOffsetDirection(handlerOffset, fixedDirection);
        const result1 = memo.length * size;
        let flag = false;
        const result2 = i * size * result;
        if (loop) {
          const _Math = Math;
          flag = Math.abs(handlerOffset.value % result1) / result1 >= 0.5;
        }
        const _Math2 = Math;
        const _Math3 = Math;
        let num3 = 0;
        const rounded = Math.floor(Math.abs(handlerOffset.value / result1));
        if (flag) {
          num3 = 1;
        }
        const sum = (rounded + num3) * result1 * result + result2;
        if (tmp) {
          sharedValue.value = i;
          handlerOffset.value = callback5(sum, onFinished);
        } else {
          handlerOffset.value = sum;
          sharedValue.value = i;
          if (null != onFinished) {
            onFinished();
          }
        }
        const obj = size(size[7]);
      }
    }
  }, items10);
  const items11 = [callback7, callback6, callback8];
  const callback9 = loop.useCallback(() => {
    let animated;
    let count;
    let index;
    if (arguments.length > 0) {
      if (undefined !== arguments[0]) {
        let first = arguments[0];
      }
      ({ index, count, animated } = first);
      const onFinished = first.onFinished;
      if ("number" === typeof index) {
        if (index > -1) {
          let obj = { i: index, animated: tmp, onFinished };
          callback8(obj);
        }
      }
      if (count) {
        const _Math = Math;
        const rounded = Math.round(count);
        if (rounded < 0) {
          obj = {};
          const _Math2 = Math;
          obj.count = Math.abs(rounded);
          obj.animated = tmp;
          obj.onFinished = onFinished;
          callback7(obj);
        } else {
          const obj1 = { count: rounded, animated: tmp, onFinished };
          callback6(obj1);
        }
      }
    }
    first = {};
  }, items11);
  const items12 = [callback1, callback6, callback7, callback9];
  const imperativeHandle = loop.useImperativeHandle(size.ref, () => ({ next: callback6, prev: callback7, getCurrentIndex: callback1, scrollTo: callback9 }), items12);
  obj2 = {
    next: callback6,
    prev: callback7,
    scrollTo: callback9,
    getCurrentIndex: callback1,
    getSharedIndex() {
      return tmp3.current;
    },
    index: sharedValue
  };
  return obj2;
};
