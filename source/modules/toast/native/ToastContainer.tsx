// Module ID: 15682
// Function ID: 120890
// Name: AnimatedToast
// Dependencies: [31, 4122, 15683, 33, 4130, 4973, 3991, 1450, 14040, 1557, 566, 4528, 14049, 4542, 4476, 3843, 15684, 1273, 3831, 2]

// Module 15682 (AnimatedToast)
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function AnimatedToast(toast) {
  toast = toast.toast;
  let obj = Object.create(null);
  obj.key = 0;
  const merged = Object.assign(toast, obj);
  const state = toast.state;
  const cleanUp = toast.cleanUp;
  let c10;
  let str2;
  let sharedValue1;
  let youBarTotalHeight;
  obj = merged(cleanUp[6]);
  const sharedValue = obj.useSharedValue(0);
  const size = state(cleanUp[7])();
  const width = size.width;
  const height = size.height;
  let obj1 = merged(cleanUp[8]);
  const mobileQuestDockHeight = obj1.useMobileQuestDockHeight();
  const top = state(cleanUp[9])().top;
  let obj2 = merged(cleanUp[10]);
  let items = [width];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    let disableAnimations = width.useReducedMotion;
    if (!disableAnimations) {
      disableAnimations = merged.disableAnimations;
    }
    return null != disableAnimations && disableAnimations;
  });
  const content = merged.content;
  const tmp3 = top();
  let tmp8 = null != content;
  const isScreenReaderEnabled = merged(cleanUp[11]).useIsScreenReaderEnabled();
  if (tmp8) {
    tmp8 = "string" === typeof content;
  }
  c10 = tmp8;
  const position = merged.position;
  str2 = "top";
  if (undefined !== position) {
    str2 = position;
  }
  const obj4 = merged(cleanUp[11]);
  sharedValue1 = merged(cleanUp[6]).useSharedValue(stateFromStores ? tmp9.END : tmp9.START);
  let obj5 = merged(cleanUp[6]);
  youBarTotalHeight = merged(cleanUp[12]).useYouBarTotalHeight(8);
  const obj6 = merged(cleanUp[12]);
  let fn = function p() {
    if ("top" === str2) {
      let sum = top + 8;
    } else {
      sum = height - sharedValue.get() - mobileQuestDockHeight - 8 - youBarTotalHeight;
    }
    let obj = merged(cleanUp[6]);
    let num3 = -30;
    let value = sharedValue1.get();
    if ("top" !== str2) {
      const diff = height - mobileQuestDockHeight;
      num3 = diff - sharedValue.get() - youBarTotalHeight;
    }
    const items = [num3, sum];
    const interpolateResult = obj.interpolate(value, content, items);
    obj = {};
    if (stateFromStores) {
      value = sharedValue1.get();
    } else {
      value = merged(cleanUp[13]).withSpring(sharedValue1.get(), c10);
      const obj3 = merged(cleanUp[13]);
    }
    obj.opacity = value;
    obj = {};
    let withSpringResult = interpolateResult;
    if (!stateFromStores) {
      const obj5 = merged(cleanUp[13]);
      const fn = function t(arg0) {
        let tmp = arg0;
        if (arg0) {
          tmp = outer1_1 === merged(cleanUp[14]).TransitionStates.YEETED;
        }
        if (tmp) {
          merged(cleanUp[6]).runOnJS(outer1_2)();
          const obj = merged(cleanUp[6]);
        }
      };
      const obj1 = { state, TransitionStates: merged(cleanUp[14]).TransitionStates, runOnJS: merged(cleanUp[6]).runOnJS, cleanUp };
      fn.__closure = obj1;
      fn.__workletHash = 633151838569;
      fn.__initData = youBarTotalHeight;
      withSpringResult = obj5.withSpring(interpolateResult, str2, "respect-motion-settings", fn);
    }
    obj.translateY = withSpringResult;
    const items1 = [obj];
    obj.transform = items1;
    obj.maxWidth = width - 32;
    return obj;
  };
  obj = { position: str2, safeAreaTop: top, CONTAINER_DISTANCE_VERTICAL: 8, screenHeight: height, toastHeight: sharedValue, bottomTabsHeight: mobileQuestDockHeight, youBarHeight: youBarTotalHeight, interpolate: merged(cleanUp[6]).interpolate, animationState: sharedValue1, ANIMATION_STATE_INPUT: content, CONTAINER_TOP_POSITION_START: -30, isReducedMotion: stateFromStores, withSpring: merged(cleanUp[13]).withSpring, OPACITY_SPRING_PHYSICS: c10, TOAST_SPRING_PHYSICS: str2, state, TransitionStates: merged(cleanUp[14]).TransitionStates, runOnJS: merged(cleanUp[6]).runOnJS, cleanUp, screenWidth: width, CONTAINER_DISTANCE_SIDES: 16 };
  fn.__closure = obj;
  fn.__workletHash = 3455640999355;
  fn.__initData = sharedValue1;
  let items1 = [state, sharedValue1, stateFromStores, cleanUp];
  const animatedStyle = merged(cleanUp[6]).useAnimatedStyle(fn);
  const effect = sharedValue.useEffect(() => {
    if (state === merged(cleanUp[14]).TransitionStates.YEETED) {
      const result = sharedValue1.set(stateFromStores.START);
      if (stateFromStores) {
        cleanUp();
      }
    } else {
      const result1 = sharedValue1.set(stateFromStores.END);
    }
  }, items1);
  const items2 = [tmp8, content];
  const effect1 = sharedValue.useEffect(() => {
    if (c10) {
      const AccessibilityAnnouncer = merged(cleanUp[15]).AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(content);
    }
  }, items2);
  if (!tmp8) {
    obj1 = { pointerEvents: "none" };
    const items3 = [tmp3.container, animatedStyle];
    obj1.style = items3;
    obj1.onLayout = function onLayout(nativeEvent) {
      const result = sharedValue.set(nativeEvent.nativeEvent.layout.height);
    };
    obj2 = {};
    const merged1 = Object.assign(merged);
    obj1.children = mobileQuestDockHeight(state(cleanUp[16]), obj2, toast.key);
    let tmp15 = mobileQuestDockHeight(state(cleanUp[6]).View, obj1);
    const tmp20 = state(cleanUp[16]);
  } else {
    tmp15 = null;
  }
  return tmp15;
}
function renderItem(arg0, toast, state, cleanUp) {
  return <AnimatedToast key={arg0} toast={arg1} state={arg2} cleanUp={arg3} />;
}
function getItemKey(key) {
  return key.key;
}
function wrapChildren(children) {
  return jsx(require(1273) /* Button */.NonExpandingOverlayView, { children });
}
let obj = {};
obj = { position: "absolute", alignSelf: "center", flexDirection: "row", justifyContent: "center", shadowColor: require("result").TOAST_CONTAINER_SHADOW_COLOR };
obj.container = obj;
let closure_7 = _createForOfIteratorHelperLoose.createStyles(obj);
_createForOfIteratorHelperLoose = { START: 0, [0]: "START", END: 1, [1]: "END" };
let items = [, ];
({ START: arr[0], END: arr[1] } = _createForOfIteratorHelperLoose);
let closure_10 = { mass: 0.1, damping: 10, stiffness: 100, overshootClamping: true };
let closure_11 = { mass: 0.35, damping: 15, stiffness: 350, restDisplacementThreshold: 0.1, restSpeedThreshold: 0.1 };
let closure_12 = { code: "function ToastContainerTsx1(){const{position,safeAreaTop,CONTAINER_DISTANCE_VERTICAL,screenHeight,toastHeight,bottomTabsHeight,youBarHeight,interpolate,animationState,ANIMATION_STATE_INPUT,CONTAINER_TOP_POSITION_START,isReducedMotion,withSpring,OPACITY_SPRING_PHYSICS,TOAST_SPRING_PHYSICS,state,TransitionStates,runOnJS,cleanUp,screenWidth,CONTAINER_DISTANCE_SIDES}=this.__closure;const verticalPositionEnd=position==='top'?safeAreaTop+CONTAINER_DISTANCE_VERTICAL:screenHeight-toastHeight.get()-bottomTabsHeight-CONTAINER_DISTANCE_VERTICAL-youBarHeight;const translateY=interpolate(animationState.get(),ANIMATION_STATE_INPUT,[position==='top'?CONTAINER_TOP_POSITION_START:screenHeight-bottomTabsHeight-toastHeight.get()-youBarHeight,verticalPositionEnd]);return{opacity:!isReducedMotion?withSpring(animationState.get(),OPACITY_SPRING_PHYSICS):animationState.get(),transform:[{translateY:!isReducedMotion?withSpring(translateY,TOAST_SPRING_PHYSICS,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}):translateY}],maxWidth:screenWidth-CONTAINER_DISTANCE_SIDES*2};}" };
let closure_13 = { code: "function ToastContainerTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
const memoResult = importAllResult.memo(() => {
  let obj = stateFromStoresArray(566);
  let items = [closure_5];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const content = outer1_5.getContent();
    if (null == content) {
      let items = [];
    } else {
      items = [content];
    }
    return items;
  });
  const items1 = [stateFromStoresArray];
  const effect = importAllResult.useEffect(() => {
    if (0 !== stateFromStoresArray.length) {
      const toastDurationMs = stateFromStoresArray[0].toastDurationMs;
      let num = 2000;
      if (null != toastDurationMs) {
        num = toastDurationMs;
      }
      stateFromStoresArray = setTimeout(() => outer2_1(outer2_2[18]).close(), num);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  obj = { items: stateFromStoresArray, renderItem, getItemKey, wrapChildren };
  return jsx(stateFromStoresArray(4476).TransitionGroup, { items: stateFromStoresArray, renderItem, getItemKey, wrapChildren });
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/toast/native/ToastContainer.tsx");

export default memoResult;
