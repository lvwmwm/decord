// Module ID: 11634
// Function ID: 11635
// Name: CarouselLayout
// Dependencies: [19, 17, 21, 11633, 11628, 11635, 1652, 11640, 11641, 11626, 11644, 5535, 11645, 11648]

// Module 11634 (CarouselLayout)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _mod1652 from "module_1652" /* 1652 */;
import convertToSharedIndex from "convertToSharedIndex" /* 11626 */;
import react from "react" /* 19 */;

const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
let closure_4 = { code: "(function pnpm_CarouselLayoutTsx1(){let[size,dataLength,handlerOffset,loop]=this.__closure;const totalSize=size*dataLength;const x=handlerOffset.value%totalSize;if(!loop)return handlerOffset.value;return Number.isNaN(x)?0:x;})" };
let closure_5 = { code: "(function pnpm_CarouselLayoutTsx2(){let[width,height]=this.__closure;return{width:width||\"100%\",height:height||\"100%\"};})" };
const forwardRefResult = react.forwardRef((arg0, ref) => {
  let ScrollViewGesture;
  let autoFillData;
  let autoPlay;
  let autoPlayInterval;
  let autoPlayReverse;
  let containerStyle;
  let customAnimation;
  let data;
  let dataLength;
  let defaultIndex;
  let fixedDirection;
  let handlerOffset;
  let height;
  let items11;
  let items12;
  let loop;
  let mode;
  let obj7;
  let onProgressChange;
  let onScrollEnd;
  let rawDataLength;
  let renderItem;
  let scrollAnimationDuration;
  let style;
  let testID;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp8;
  let tmp9;
  let vertical;
  let width;
  let windowSize;
  let withAnimation;
  const tmp = loop;
  let tmp2 = autoFillData;
  let obj = loop(autoFillData[3]);
  const globalState = obj.useGlobalState();
  const props = globalState.props;
  loop = props.loop;
  autoFillData = props.autoFillData;
  ({ dataLength, rawDataLength } = props);
  ({ width, height, onScrollEnd } = props);
  const onSnapToItem = props.onSnapToItem;
  const onScrollStart = props.onScrollStart;
  const itemDimensions = globalState.layout.itemDimensions;
  ({ testID, data, mode, style, containerStyle, vertical, autoPlay, windowSize, autoPlayReverse, autoPlayInterval, scrollAnimationDuration, withAnimation, fixedDirection, renderItem, onProgressChange, customAnimation, defaultIndex } = props);
  let obj2 = loop(autoFillData[4]);
  const commonVariables = obj2.useCommonVariables(props);
  ({ size, handlerOffset } = commonVariables);
  const obj3 = { size };
  const useLayoutConfig = loop(autoFillData[5]).useLayoutConfig;
  loop(autoFillData[5]);
  const merged = Object.assign(props);
  const layoutConfig = useLayoutConfig(obj3);
  const items = [onSnapToItem, size, dataLength, handlerOffset, loop];
  let c2;
  let c3;
  [tmp8, tmp9, tmp10, tmp11, tmp12] = items;
  function pnpm_CarouselLayoutTsx1() {
    let value;
    const result = _undefined.value % (c0 * c1);
    const tmp2 = c3;
    if (tmp2) {
      const _Number = Number;
      let num = 0;
      if (!Number.isNaN(result)) {
        num = result;
      }
      value = num;
    } else {
      value = iter.value;
    }
    return value;
  }
  const items1 = [tmp9, tmp10, tmp11, tmp12];
  pnpm_CarouselLayoutTsx1.__closure = items1;
  pnpm_CarouselLayoutTsx1.__workletHash = 12314304910940;
  pnpm_CarouselLayoutTsx1.__initData = tmp8;
  const items2 = [loop, size, dataLength, handlerOffset];
  const obj4 = loop(autoFillData[6]);
  const derivedValue = obj4.useDerivedValue(pnpm_CarouselLayoutTsx1, items2);
  const tmpResult = tmp(tmp2[7]);
  const onProgressChange1 = tmpResult.useOnProgressChange({ autoFillData, loop, size, offsetX: derivedValue, rawDataLength, onProgressChange });
  const obj5 = {
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
    onScrollEnd() {
      const obj = _mod1652;
      return obj.runOnJS(callback)();
    },
    onScrollStart() {
      let tmp2 = onScrollStart;
      if (tmp2) {
        const obj = _mod1652;
        tmp2 = obj.runOnJS(tmp)();
      }
      return tmp2;
    }
  };
  const tmpResult4 = tmp(tmp2[8]);
  const carouselController = tmpResult4.useCarouselController(obj5);
  const getSharedIndex = carouselController.getSharedIndex;
  const items3 = [loop, autoFillData, rawDataLength, getSharedIndex, onSnapToItem, onScrollEnd];
  const callback = rawDataLength.useCallback(() => {
    const rounded = Math.round(getSharedIndex());
    const obj = convertToSharedIndex;
    const obj2 = { index: rounded, dataLength: rawDataLength, loop, autoFillData };
    const result = obj.computedRealIndexWithAutoFillData(obj2);
    if (onSnapToItem) {
      onSnapToItem(result);
    }
    if (onScrollEnd) {
      onScrollEnd(result);
    }
  }, items3);
  const tmpResult5 = tmp(tmp2[10]);
  const autoPlay1 = tmpResult5.useAutoPlay({ autoPlay, autoPlayInterval, autoPlayReverse, carouselController });
  const start = autoPlay1.start;
  const pause = autoPlay1.pause;
  const items4 = [onScrollStart, pause];
  const items5 = [callback, start];
  const callback1 = rawDataLength.useCallback(() => {
    pause();
    if (onScrollStart != null) {
      onScrollStart();
    }
  }, items4);
  const items6 = [pause];
  const callback2 = rawDataLength.useCallback(() => {
    start();
    callback();
  }, items5);
  const items7 = [start];
  const callback3 = rawDataLength.useCallback(pause, items6);
  const callback4 = rawDataLength.useCallback(start, items7);
  const items8 = [onScrollStart, width, height];
  let c0;
  let c1;
  [tmp22, tmp23, tmp24] = items8;
  function pnpm_CarouselLayoutTsx2() {
    size = { width: c0 || "100%", height: c1 || "100%" };
    return size;
  }
  const items9 = [tmp23, tmp24];
  pnpm_CarouselLayoutTsx2.__closure = items9;
  pnpm_CarouselLayoutTsx2.__workletHash = 2577603405426;
  pnpm_CarouselLayoutTsx2.__initData = tmp22;
  const items10 = [width, height, size, itemDimensions];
  const tmpResult6 = tmp(tmp2[6]);
  const animatedStyle = tmpResult6.useAnimatedStyle(pnpm_CarouselLayoutTsx2, items10);
  const obj6 = { style: items11, children: onScrollEnd(ScrollViewGesture, obj7, mode) };
  items11 = [getSharedIndex.layoutContainer, containerStyle];
  obj7 = { size, translation: handlerOffset, style: items12, testID, onScrollStart: callback1, onScrollEnd: callback2, onTouchBegin: callback3, onTouchEnd: callback4, children: onScrollEnd(tmp(tmp2[13]).ItemRenderer, { data, dataLength, rawDataLength, loop, size, windowSize, autoFillData, offsetX: derivedValue, handlerOffset, layoutConfig, renderItem, customAnimation }) };
  items12 = [getSharedIndex.contentContainer, animatedStyle, style, vertical ? getSharedIndex.itemsVertical : getSharedIndex.itemsHorizontal];
  const GestureHandlerRootView = tmp(tmp2[11]).GestureHandlerRootView;
  ScrollViewGesture = tmp(tmp2[12]).ScrollViewGesture;
  return onScrollEnd(GestureHandlerRootView, obj6);
});
const styles = StyleSheet.create({ layoutContainer: { display: "flex" }, contentContainer: { overflow: "hidden" }, itemsHorizontal: { flexDirection: "row" }, itemsVertical: { flexDirection: "column" } });

export const CarouselLayout = forwardRefResult;
