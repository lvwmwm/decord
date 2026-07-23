// Module ID: 5215
// Function ID: 45151
// Name: useScrollHandler
// Dependencies: [5216, 1582, 5206]

// Module 5215 (useScrollHandler)
let require = arg1;
let dependencyMap = arg6;
let closure_2 = { code: "function pnpm_useScrollHandlerTs1(event,context){const{handleOnScroll,onScroll,runOnJS}=this.__closure;handleOnScroll(event,context);if(onScroll){runOnJS(onScroll)({nativeEvent:event});}}" };
let closure_3 = { code: "function pnpm_useScrollHandlerTs2(event,context){const{handleOnBeginDrag,onScrollBeginDrag,runOnJS}=this.__closure;handleOnBeginDrag(event,context);if(onScrollBeginDrag){runOnJS(onScrollBeginDrag)({nativeEvent:event});}}" };
let closure_4 = { code: "function pnpm_useScrollHandlerTs3(event,context){const{handleOnEndDrag,onScrollEndDrag,runOnJS}=this.__closure;handleOnEndDrag(event,context);if(onScrollEndDrag){runOnJS(onScrollEndDrag)({nativeEvent:event});}}" };
arg5.useScrollHandler = function useScrollHandler(scrollEventsHandlersHook, onScroll, onScrollBeginDrag, onScrollEndDrag, lockableScrollableContentOffsetY) {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let useScrollEventsHandlersDefault = arguments[0];
    }
    let tmp;
    if (arguments.length > 1) {
      tmp = arguments[1];
    }
    const require = tmp;
    let tmp2;
    if (arguments.length > 2) {
      tmp2 = arguments[2];
    }
    const dependencyMap = tmp2;
    let tmp3;
    if (arguments.length > 3) {
      tmp3 = arguments[3];
    }
    let closure_2 = tmp3;
    let tmp4;
    if (arguments.length > 4) {
      tmp4 = arguments[4];
    }
    let obj = require(1582) /* cancelAnimation */;
    const animatedRef = obj.useAnimatedRef();
    let obj1 = require(1582) /* cancelAnimation */;
    const sharedValue = obj1.useSharedValue(0);
    const scrollEventsHandlersDefault = useScrollEventsHandlersDefault(animatedRef, sharedValue, tmp4);
    let workletNoop = scrollEventsHandlersDefault.handleOnScroll;
    if (undefined === workletNoop) {
      workletNoop = require(5206) /* normalizeSnapPoint */.workletNoop;
    }
    let workletNoop2 = scrollEventsHandlersDefault.handleOnBeginDrag;
    if (undefined === workletNoop2) {
      workletNoop2 = require(5206) /* normalizeSnapPoint */.workletNoop;
    }
    let workletNoop3 = scrollEventsHandlersDefault.handleOnEndDrag;
    if (undefined === workletNoop3) {
      workletNoop3 = require(5206) /* normalizeSnapPoint */.workletNoop;
    }
    let workletNoop4 = scrollEventsHandlersDefault.handleOnMomentumEnd;
    if (undefined === workletNoop4) {
      workletNoop4 = require(5206) /* normalizeSnapPoint */.workletNoop;
    }
    let workletNoop5 = scrollEventsHandlersDefault.handleOnMomentumBegin;
    if (undefined === workletNoop5) {
      workletNoop5 = require(5206) /* normalizeSnapPoint */.workletNoop;
    }
    obj = {};
    let obj3 = require(1582) /* cancelAnimation */;
    obj = {};
    /* worklet (recovered source) */ function pnpm_useScrollHandlerTs1(event,context){const{handleOnScroll,onScroll,runOnJS}=this.__closure;handleOnScroll(event,context);if(onScroll){runOnJS(onScroll)({nativeEvent:event});}}
    obj1 = { handleOnScroll: workletNoop, onScroll: tmp, runOnJS: require(1582) /* cancelAnimation */.runOnJS };
    pnpm_useScrollHandlerTs1.__closure = obj1;
    pnpm_useScrollHandlerTs1.__workletHash = 13105350120634;
    pnpm_useScrollHandlerTs1.__initData = closure_2;
    obj.onScroll = pnpm_useScrollHandlerTs1;
    /* worklet (recovered source) */ function pnpm_useScrollHandlerTs2(event,context){const{handleOnBeginDrag,onScrollBeginDrag,runOnJS}=this.__closure;handleOnBeginDrag(event,context);if(onScrollBeginDrag){runOnJS(onScrollBeginDrag)({nativeEvent:event});}}
    const obj2 = { handleOnBeginDrag: workletNoop2, onScrollBeginDrag: tmp2, runOnJS: require(1582) /* cancelAnimation */.runOnJS };
    pnpm_useScrollHandlerTs2.__closure = obj2;
    pnpm_useScrollHandlerTs2.__workletHash = 803385440782;
    pnpm_useScrollHandlerTs2.__initData = workletNoop;
    obj.onBeginDrag = pnpm_useScrollHandlerTs2;
    /* worklet (recovered source) */ function pnpm_useScrollHandlerTs3(event,context){const{handleOnEndDrag,onScrollEndDrag,runOnJS}=this.__closure;handleOnEndDrag(event,context);if(onScrollEndDrag){runOnJS(onScrollEndDrag)({nativeEvent:event});}}
    obj3 = { handleOnEndDrag: workletNoop3, onScrollEndDrag: tmp3, runOnJS: require(1582) /* cancelAnimation */.runOnJS };
    pnpm_useScrollHandlerTs3.__closure = obj3;
    pnpm_useScrollHandlerTs3.__workletHash = 3274737678599;
    pnpm_useScrollHandlerTs3.__initData = workletNoop2;
    obj.onEndDrag = pnpm_useScrollHandlerTs3;
    obj.onMomentumBegin = workletNoop5;
    obj.onMomentumEnd = workletNoop4;
    const items = [workletNoop, workletNoop2, workletNoop3, workletNoop5, workletNoop4, tmp, tmp2, tmp3];
    obj.scrollHandler = obj3.useAnimatedScrollHandler(obj, items);
    obj.scrollableRef = animatedRef;
    obj.scrollableContentOffsetY = sharedValue;
    return obj;
  }
  useScrollEventsHandlersDefault = require(5216) /* useScrollEventsHandlersDefault */.useScrollEventsHandlersDefault;
};
