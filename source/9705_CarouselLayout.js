// Module ID: 9705
// Function ID: 75465
// Name: CarouselLayout
// Dependencies: [31, 27, 33, 9704, 9699, 9706, 1582, 9711, 9712, 9697, 9715, 5217, 9716, 9719]

// Module 9705 (CarouselLayout)
import importDefaultResult from "result";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
let closure_4 = { code: "function pnpm_CarouselLayoutTsx1(){const{size,dataLength,handlerOffset,loop}=this.__closure;const totalSize=size*dataLength;const x=handlerOffset.value%totalSize;if(!loop)return handlerOffset.value;return Number.isNaN(x)?0:x;}" };
let closure_5 = { code: "function pnpm_CarouselLayoutTsx2(){const{width,height}=this.__closure;return{width:width||\"100%\",height:height||\"100%\"};}" };
const styles = StyleSheet.create({ layoutContainer: { display: "flex" }, contentContainer: { overflow: "hidden" }, itemsHorizontal: { flexDirection: "row" }, itemsVertical: { flexDirection: "column" } });

export const CarouselLayout = importDefaultResult.forwardRef((arg0, ref) => {
  let autoPlay;
  let autoPlayInterval;
  let autoPlayReverse;
  let containerStyle;
  let customAnimation;
  let data;
  let defaultIndex;
  let fixedDirection;
  let mode;
  let onProgressChange;
  let renderItem;
  let scrollAnimationDuration;
  let style;
  let testID;
  let vertical;
  let windowSize;
  let withAnimation;
  let obj = loop(autoFillData[3]);
  const globalState = obj.useGlobalState();
  const props = globalState.props;
  loop = props.loop;
  autoFillData = props.autoFillData;
  const dataLength = props.dataLength;
  const rawDataLength = props.rawDataLength;
  const width = props.width;
  const height = props.height;
  const onScrollEnd = props.onScrollEnd;
  const onSnapToItem = props.onSnapToItem;
  const onScrollStart = props.onScrollStart;
  ({ testID, data, mode, style, containerStyle, vertical, autoPlay, windowSize, autoPlayReverse, autoPlayInterval, scrollAnimationDuration, withAnimation, fixedDirection, renderItem, onProgressChange, customAnimation, defaultIndex } = props);
  let obj1 = loop(autoFillData[4]);
  const commonVariables = obj1.useCommonVariables(props);
  const size = commonVariables.size;
  const handlerOffset = commonVariables.handlerOffset;
  const layoutConfig = loop(autoFillData[5]).useLayoutConfig(Object.assign({}, props, { size }));
  const obj3 = loop(autoFillData[5]);
  /* worklet (recovered source) */ function pnpm_CarouselLayoutTsx1(){const{size,dataLength,handlerOffset,loop}=this.__closure;const totalSize=size*dataLength;const x=handlerOffset.value%totalSize;if(!loop)return handlerOffset.value;return Number.isNaN(x)?0:x;}
  pnpm_CarouselLayoutTsx1.__closure = { size, dataLength, handlerOffset, loop };
  pnpm_CarouselLayoutTsx1.__workletHash = 8159108397061;
  pnpm_CarouselLayoutTsx1.__initData = width;
  const items = [loop, size, dataLength, handlerOffset];
  const derivedValue = loop(autoFillData[6]).useDerivedValue(pnpm_CarouselLayoutTsx1, items);
  const obj4 = loop(autoFillData[6]);
  onProgressChange = loop(autoFillData[7]).useOnProgressChange({ autoFillData, loop, size, offsetX: derivedValue, rawDataLength, onProgressChange });
  const obj5 = loop(autoFillData[7]);
  obj = {
    ref,
    loop,
    size,
    dataLength,
    autoFillData,
    handlerOffset,
    withAnimation,
    defaultIndex,
    fixedDirection,
    duration: scrollAnimationDuration,
    onScrollEnd(result) {
      return loop(autoFillData[6]).runOnJS(callback)();
    },
    onScrollStart() {
      let tmp2 = !tmp;
      if (!!onScrollStart) {
        tmp2 = loop(autoFillData[6]).runOnJS(onScrollStart)();
        const obj = loop(autoFillData[6]);
      }
      return tmp2;
    }
  };
  const carouselController = loop(autoFillData[8]).useCarouselController(obj);
  const getSharedIndex = carouselController.getSharedIndex;
  const items1 = [loop, autoFillData, rawDataLength, getSharedIndex, onSnapToItem, onScrollEnd];
  const callback = dataLength.useCallback(() => {
    const rounded = Math.round(getSharedIndex());
    let obj = loop(autoFillData[9]);
    obj = { index: rounded, dataLength: rawDataLength, loop, autoFillData };
    const result = obj.computedRealIndexWithAutoFillData(obj);
    if (onSnapToItem) {
      onSnapToItem(result);
    }
    if (onScrollEnd) {
      onScrollEnd(result);
    }
  }, items1);
  const obj6 = loop(autoFillData[8]);
  autoPlay = loop(autoFillData[10]).useAutoPlay({ autoPlay, autoPlayInterval, autoPlayReverse, carouselController });
  const start = autoPlay.start;
  const pause = autoPlay.pause;
  const items2 = [onScrollStart, pause];
  const items3 = [callback, start];
  const callback1 = dataLength.useCallback(() => {
    pause();
    if (null != onScrollStart) {
      onScrollStart();
    }
  }, items2);
  const items4 = [pause];
  const callback2 = dataLength.useCallback(() => {
    start();
    callback();
  }, items3);
  const items5 = [start];
  const callback3 = dataLength.useCallback(pause, items4);
  const callback4 = dataLength.useCallback(start, items5);
  const obj8 = loop(autoFillData[10]);
  /* worklet (recovered source) */ function pnpm_CarouselLayoutTsx2(){const{width,height}=this.__closure;return{width:width||"100%",height:height||"100%"};}
  pnpm_CarouselLayoutTsx2.__closure = { width, height };
  pnpm_CarouselLayoutTsx2.__workletHash = 9263548792971;
  pnpm_CarouselLayoutTsx2.__initData = height;
  const items6 = [width, height, size, globalState.layout.itemDimensions];
  const animatedStyle = loop(autoFillData[6]).useAnimatedStyle(pnpm_CarouselLayoutTsx2, items6);
  obj = { style: items7 };
  items7 = [onScrollEnd.layoutContainer, containerStyle];
  obj1 = { size, translation: handlerOffset, style: items8, testID, onScrollStart: callback1, onScrollEnd: callback2, onTouchBegin: callback3, onTouchEnd: callback4 };
  items8 = [onScrollEnd.contentContainer, animatedStyle, style, vertical ? onScrollEnd.itemsVertical : onScrollEnd.itemsHorizontal];
  obj1.children = rawDataLength(loop(autoFillData[13]).ItemRenderer, { data, dataLength, rawDataLength, loop, size, windowSize, autoFillData, offsetX: derivedValue, handlerOffset, layoutConfig, renderItem, customAnimation });
  obj.children = rawDataLength(loop(autoFillData[12]).ScrollViewGesture, obj1, mode);
  return rawDataLength(loop(autoFillData[11]).GestureHandlerRootView, obj);
});
