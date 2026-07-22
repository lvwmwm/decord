// Module ID: 15518
// Function ID: 118395
// Name: AnimatedToast
// Dependencies: [0, 0, 0, 0, 4294967295, 0, 0, 0, 0]

// Module 15518 (AnimatedToast)
import importAllResult from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import closure_5 from "__exportStarResult1";
import { jsx } from "__exportStarResult1";

function AnimatedToast(toast) {
  toast = toast.toast;
  let obj = Object.create(null);
  obj.key = 0;
  const merged = Object.assign(toast, obj);
  const arg1 = merged;
  const state = toast.state;
  const importDefault = state;
  const cleanUp = toast.cleanUp;
  const dependencyMap = cleanUp;
  let closure_10;
  let closure_11;
  let closure_12;
  let closure_13;
  obj = arg1(dependencyMap[6]);
  const sharedValue = obj.useSharedValue(0);
  const size = importDefault(dependencyMap[7])();
  const width = size.width;
  let __exportStarResult1 = width;
  const height = size.height;
  let closure_5 = height;
  let obj1 = arg1(dependencyMap[8]);
  const mobileQuestDockHeight = obj1.useMobileQuestDockHeight();
  const jsx = mobileQuestDockHeight;
  const top = importDefault(dependencyMap[9])().top;
  const callback = top;
  let obj2 = arg1(dependencyMap[10]);
  let items = [__exportStarResult1];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    let disableAnimations = width.useReducedMotion;
    if (!disableAnimations) {
      disableAnimations = merged.disableAnimations;
    }
    return null != disableAnimations && disableAnimations;
  });
  obj1 = stateFromStores;
  const content = merged.content;
  items = content;
  const tmp3 = callback();
  let tmp8 = null != content;
  const isScreenReaderEnabled = arg1(dependencyMap[11]).useIsScreenReaderEnabled();
  if (tmp8) {
    tmp8 = "string" === typeof content;
  }
  closure_10 = tmp8;
  const position = merged.position;
  let str2 = "top";
  if (undefined !== position) {
    str2 = position;
  }
  closure_11 = str2;
  const obj4 = arg1(dependencyMap[11]);
  const sharedValue1 = arg1(dependencyMap[6]).useSharedValue(stateFromStores ? tmp9.END : tmp9.START);
  closure_12 = sharedValue1;
  const obj5 = arg1(dependencyMap[6]);
  const youBarTotalHeight = arg1(dependencyMap[12]).useYouBarTotalHeight(8);
  closure_13 = youBarTotalHeight;
  const obj6 = arg1(dependencyMap[12]);
  const fn = function p() {
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
      value = merged(cleanUp[13]).withSpring(sharedValue1.get(), tmp8);
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
          tmp = closure_1 === callback(closure_2[14]).TransitionStates.YEETED;
        }
        if (tmp) {
          callback(closure_2[6]).runOnJS(closure_2)();
          const obj = callback(closure_2[6]);
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
  obj = { position: str2, safeAreaTop: top, CONTAINER_DISTANCE_VERTICAL: 8, screenHeight: height, toastHeight: sharedValue, bottomTabsHeight: mobileQuestDockHeight, youBarHeight: youBarTotalHeight, interpolate: arg1(dependencyMap[6]).interpolate, animationState: sharedValue1, ANIMATION_STATE_INPUT: items, CONTAINER_TOP_POSITION_START: -30, isReducedMotion: stateFromStores, withSpring: arg1(dependencyMap[13]).withSpring, OPACITY_SPRING_PHYSICS: closure_10, TOAST_SPRING_PHYSICS: closure_11, state, TransitionStates: arg1(dependencyMap[14]).TransitionStates, runOnJS: arg1(dependencyMap[6]).runOnJS, cleanUp, screenWidth: width, CONTAINER_DISTANCE_SIDES: 16 };
  fn.__closure = obj;
  fn.__workletHash = 3455640999355;
  fn.__initData = closure_12;
  const items1 = [state, sharedValue1, stateFromStores, cleanUp];
  const animatedStyle = arg1(dependencyMap[6]).useAnimatedStyle(fn);
  const effect = importAllResult.useEffect(() => {
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
  const effect1 = importAllResult.useEffect(() => {
    if (tmp8) {
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
    obj1.children = jsx(importDefault(dependencyMap[16]), obj2, toast.key);
    let tmp15 = jsx(importDefault(dependencyMap[6]).View, obj1);
    const tmp20 = importDefault(dependencyMap[16]);
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
  return jsx(arg1(dependencyMap[17]).NonExpandingOverlayView, { children });
}
let obj1 = arg1(dependencyMap[4]);
let obj = {};
obj = { shadowColor: require("__exportStarResult1").TOAST_CONTAINER_SHADOW_COLOR };
obj.container = obj;
let closure_7 = obj1.createStyles(obj);
obj1 = { START: 0, [0]: "START", END: 1, [1]: "END" };
const items = [, ];
({ START: arr[0], END: arr[1] } = obj1);
let closure_10 = {};
let closure_11 = { style: 1358954496, blurStyle: 24354124, blurTintRgba: -67108864, android_fallbackColor: -50331649, blurAmount: 33554431 };
let closure_12 = { code: "function ToastContainerTsx1(){const{position,safeAreaTop,CONTAINER_DISTANCE_VERTICAL,screenHeight,toastHeight,bottomTabsHeight,youBarHeight,interpolate,animationState,ANIMATION_STATE_INPUT,CONTAINER_TOP_POSITION_START,isReducedMotion,withSpring,OPACITY_SPRING_PHYSICS,TOAST_SPRING_PHYSICS,state,TransitionStates,runOnJS,cleanUp,screenWidth,CONTAINER_DISTANCE_SIDES}=this.__closure;const verticalPositionEnd=position==='top'?safeAreaTop+CONTAINER_DISTANCE_VERTICAL:screenHeight-toastHeight.get()-bottomTabsHeight-CONTAINER_DISTANCE_VERTICAL-youBarHeight;const translateY=interpolate(animationState.get(),ANIMATION_STATE_INPUT,[position==='top'?CONTAINER_TOP_POSITION_START:screenHeight-bottomTabsHeight-toastHeight.get()-youBarHeight,verticalPositionEnd]);return{opacity:!isReducedMotion?withSpring(animationState.get(),OPACITY_SPRING_PHYSICS):animationState.get(),transform:[{translateY:!isReducedMotion?withSpring(translateY,TOAST_SPRING_PHYSICS,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}):translateY}],maxWidth:screenWidth-CONTAINER_DISTANCE_SIDES*2};}" };
let closure_13 = { code: "function ToastContainerTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
const memoResult = importAllResult.memo(() => {
  let obj = arg1(dependencyMap[10]);
  const items = [closure_5];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const content = content.getContent();
    if (null == content) {
      let items = [];
    } else {
      items = [content];
    }
    return items;
  });
  const arg1 = stateFromStoresArray;
  const items1 = [stateFromStoresArray];
  const effect = importAllResult.useEffect(() => {
    if (0 !== length.length) {
      const toastDurationMs = length[0].toastDurationMs;
      let num = 2000;
      if (null != toastDurationMs) {
        num = toastDurationMs;
      }
      const length = setTimeout(() => callback(closure_2[18]).close(), num);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  obj = { items: stateFromStoresArray, renderItem, getItemKey, wrapChildren };
  return jsx(arg1(dependencyMap[14]).TransitionGroup, obj);
});
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/toast/native/ToastContainer.tsx");

export default memoResult;
