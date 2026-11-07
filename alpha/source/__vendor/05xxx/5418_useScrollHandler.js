// Module ID: 5418
// Function ID: 5419
// Name: useScrollHandler
// Dependencies: [5419, 1652, 5409]
// Exports: useScrollHandler

// Module 5418 (useScrollHandler)
import _mod1652 from "module_1652" /* 1652 */;
import useScrollEventsHandlersDefault2 from "useScrollEventsHandlersDefault" /* 5419 */;

let closure_2 = { code: "(function pnpm_useScrollHandlerTs1(event,context){let[handleOnScroll,onScroll,runOnJS]=this.__closure;handleOnScroll(event,context);if(onScroll){runOnJS(onScroll)({nativeEvent:event});}})" };
let closure_3 = { code: "(function pnpm_useScrollHandlerTs2(event,context){let[handleOnBeginDrag,onScrollBeginDrag,runOnJS]=this.__closure;handleOnBeginDrag(event,context);if(onScrollBeginDrag){runOnJS(onScrollBeginDrag)({nativeEvent:event});}})" };
let closure_4 = { code: "(function pnpm_useScrollHandlerTs3(event,context){let[handleOnEndDrag,onScrollEndDrag,runOnJS]=this.__closure;handleOnEndDrag(event,context);if(onScrollEndDrag){runOnJS(onScrollEndDrag)({nativeEvent:event});}})" };

export const useScrollHandler = () => {
  let pnpm_useScrollHandlerTs1;
  let pnpm_useScrollHandlerTs2;
  let pnpm_useScrollHandlerTs3;
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
  let tmp9;
  let useScrollEventsHandlersDefault = arg0;
  if (arg0 === undefined) {
    const tmp2 = dependencyMap;
    useScrollEventsHandlersDefault = useScrollEventsHandlersDefault2.useScrollEventsHandlersDefault;
  }
  let obj = _mod1652;
  const animatedRef = obj.useAnimatedRef();
  const obj2 = _mod1652;
  const sharedValue = obj2.useSharedValue(0);
  const scrollEventsHandlersDefault = useScrollEventsHandlersDefault(animatedRef, sharedValue, arg4);
  let workletNoop = scrollEventsHandlersDefault.handleOnScroll;
  if (undefined === workletNoop) {
    workletNoop = tmp3(5409).workletNoop;
  }
  let workletNoop2 = scrollEventsHandlersDefault.handleOnBeginDrag;
  if (undefined === workletNoop2) {
    workletNoop2 = tmp3(5409).workletNoop;
  }
  let workletNoop3 = scrollEventsHandlersDefault.handleOnEndDrag;
  if (undefined === workletNoop3) {
    workletNoop3 = tmp3(5409).workletNoop;
  }
  let workletNoop4 = scrollEventsHandlersDefault.handleOnMomentumEnd;
  if (undefined === workletNoop4) {
    workletNoop4 = tmp3(5409).workletNoop;
  }
  let workletNoop5 = scrollEventsHandlersDefault.handleOnMomentumBegin;
  if (undefined === workletNoop5) {
    workletNoop5 = tmp3(5409).workletNoop;
  }
  const items = [closure_2, workletNoop, arg1, ];
  const useAnimatedScrollHandler = _mod1652.useAnimatedScrollHandler;
  items[3] = _mod1652.runOnJS;
  [tmp9, tmp10, tmp11, tmp12] = items;
  const obj3 = { onScroll: pnpm_useScrollHandlerTs1, onBeginDrag: pnpm_useScrollHandlerTs2, onEndDrag: pnpm_useScrollHandlerTs3, onMomentumBegin: workletNoop5, onMomentumEnd: workletNoop4 };
  pnpm_useScrollHandlerTs1 = function pnpm_useScrollHandlerTs1(nativeEvent, arg1) {
    _undefined(nativeEvent, arg1);
    if (c1) {
      const obj = { nativeEvent };
      _undefined2(tmp2)(obj);
    }
  };
  const items1 = [tmp10, tmp11, tmp12];
  pnpm_useScrollHandlerTs1.__closure = items1;
  pnpm_useScrollHandlerTs1.__workletHash = 897671126627;
  pnpm_useScrollHandlerTs1.__initData = tmp9;
  const items2 = [closure_3, workletNoop2, arg2, tmp3(1652).runOnJS];
  [tmp13, tmp14, tmp15, tmp16] = items2;
  pnpm_useScrollHandlerTs2 = function pnpm_useScrollHandlerTs2(nativeEvent, arg1) {
    _undefined(nativeEvent, arg1);
    if (c1) {
      const obj = { nativeEvent };
      _undefined2(tmp2)(obj);
    }
  };
  const items3 = [tmp14, tmp15, tmp16];
  pnpm_useScrollHandlerTs2.__closure = items3;
  pnpm_useScrollHandlerTs2.__workletHash = 15541770117111;
  pnpm_useScrollHandlerTs2.__initData = tmp13;
  const items4 = [closure_4, workletNoop3, arg3, tmp3(1652).runOnJS];
  let c0;
  let c1;
  let c2;
  [tmp17, tmp18, tmp19, tmp20] = items4;
  pnpm_useScrollHandlerTs3 = function pnpm_useScrollHandlerTs3(nativeEvent, arg1) {
    _undefined(nativeEvent, arg1);
    if (c1) {
      const obj = { nativeEvent };
      _undefined2(tmp2)(obj);
    }
  };
  const items5 = [tmp18, tmp19, tmp20];
  pnpm_useScrollHandlerTs3.__closure = items5;
  pnpm_useScrollHandlerTs3.__workletHash = 317489655198;
  pnpm_useScrollHandlerTs3.__initData = tmp17;
  const items6 = [workletNoop, workletNoop2, workletNoop3, workletNoop5, workletNoop4, arg1, arg2, arg3];
  const obj4 = { scrollHandler: useAnimatedScrollHandler(obj3, items6), scrollableRef: animatedRef, scrollableContentOffsetY: sharedValue };
  return obj4;
};
