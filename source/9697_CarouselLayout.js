// Module ID: 9697
// Function ID: 75411
// Name: CarouselLayout
// Dependencies: []

// Module 9697 (CarouselLayout)
const importDefaultResult = importDefault(dependencyMap[0]);
const StyleSheet = arg1(dependencyMap[1]).StyleSheet;
const jsx = arg1(dependencyMap[2]).jsx;
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
  let obj = ref(dependencyMap[3]);
  const globalState = obj.useGlobalState();
  const props = globalState.props;
  const loop = props.loop;
  ref = loop;
  const autoFillData = props.autoFillData;
  const dependencyMap = autoFillData;
  const dataLength = props.dataLength;
  const rawDataLength = props.rawDataLength;
  const jsx = rawDataLength;
  const width = props.width;
  let closure_4 = width;
  const height = props.height;
  let closure_5 = height;
  const onScrollEnd = props.onScrollEnd;
  let closure_6 = onScrollEnd;
  const onSnapToItem = props.onSnapToItem;
  const onScrollStart = props.onScrollStart;
  ({ testID, data, mode, style, containerStyle, vertical, autoPlay, windowSize, autoPlayReverse, autoPlayInterval, scrollAnimationDuration, withAnimation, fixedDirection, renderItem, onProgressChange, customAnimation, defaultIndex } = props);
  let obj1 = ref(dependencyMap[4]);
  const commonVariables = obj1.useCommonVariables(props);
  const size = commonVariables.size;
  const handlerOffset = commonVariables.handlerOffset;
  const layoutConfig = ref(dependencyMap[5]).useLayoutConfig(Object.assign({}, props, { size }));
  const obj3 = ref(dependencyMap[5]);
  /* worklet (recovered source) */ function pnpm_CarouselLayoutTsx1(){const{size,dataLength,handlerOffset,loop}=this.__closure;const totalSize=size*dataLength;const x=handlerOffset.value%totalSize;if(!loop)return handlerOffset.value;return Number.isNaN(x)?0:x;}
  pnpm_CarouselLayoutTsx1.__closure = { size, dataLength, handlerOffset, loop };
  pnpm_CarouselLayoutTsx1.__workletHash = 8159108397061;
  pnpm_CarouselLayoutTsx1.__initData = closure_4;
  const items = [loop, size, dataLength, handlerOffset];
  const derivedValue = ref(dependencyMap[6]).useDerivedValue(pnpm_CarouselLayoutTsx1, items);
  const obj4 = ref(dependencyMap[6]);
  onProgressChange = ref(dependencyMap[7]).useOnProgressChange({ autoFillData, loop, size, offsetX: derivedValue, rawDataLength, onProgressChange });
  const obj5 = ref(dependencyMap[7]);
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
  const carouselController = ref(dependencyMap[8]).useCarouselController(obj);
  const getSharedIndex = carouselController.getSharedIndex;
  const items1 = [loop, autoFillData, rawDataLength, getSharedIndex, onSnapToItem, onScrollEnd];
  const callback = importDefaultResult.useCallback(() => {
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
  const obj6 = ref(dependencyMap[8]);
  autoPlay = ref(dependencyMap[10]).useAutoPlay({ autoPlay, autoPlayInterval, autoPlayReverse, carouselController });
  const start = autoPlay.start;
  const pause = autoPlay.pause;
  const items2 = [onScrollStart, pause];
  const items3 = [callback, start];
  const callback1 = importDefaultResult.useCallback(() => {
    pause();
    if (null != onScrollStart) {
      onScrollStart();
    }
  }, items2);
  const items4 = [pause];
  const callback2 = importDefaultResult.useCallback(() => {
    start();
    callback();
  }, items3);
  const items5 = [start];
  const callback3 = importDefaultResult.useCallback(pause, items4);
  const callback4 = importDefaultResult.useCallback(start, items5);
  const obj8 = ref(dependencyMap[10]);
  /* worklet (recovered source) */ function pnpm_CarouselLayoutTsx2(){const{width,height}=this.__closure;return{width:width||"100%",height:height||"100%"};}
  pnpm_CarouselLayoutTsx2.__closure = { width, height };
  pnpm_CarouselLayoutTsx2.__workletHash = 9263548792971;
  pnpm_CarouselLayoutTsx2.__initData = closure_5;
  const items6 = [width, height, size, globalState.layout.itemDimensions];
  const animatedStyle = ref(dependencyMap[6]).useAnimatedStyle(pnpm_CarouselLayoutTsx2, items6);
  obj = { style: items7 };
  const items7 = [closure_6.layoutContainer, containerStyle];
  obj1 = { size, translation: handlerOffset, style: items8, testID, onScrollStart: callback1, onScrollEnd: callback2, onTouchBegin: callback3, onTouchEnd: callback4 };
  const items8 = [closure_6.contentContainer, animatedStyle, style, vertical ? closure_6.itemsVertical : closure_6.itemsHorizontal];
  obj1.children = jsx(ref(dependencyMap[13]).ItemRenderer, { data, dataLength, rawDataLength, loop, size, windowSize, autoFillData, offsetX: derivedValue, handlerOffset, layoutConfig, renderItem, customAnimation });
  obj.children = jsx(ref(dependencyMap[12]).ScrollViewGesture, obj1, mode);
  return jsx(ref(dependencyMap[11]).GestureHandlerRootView, obj);
});
