// Module ID: 16784
// Function ID: 16785
// Name: ToastContainer
// Dependencies: [19, 4825, 16785, 21, 4836, 5753, 4566, 1479, 14620, 1613, 504, 5266, 14629, 5280, 4540, 4541, 16786, 1177, 4528, 2]

// Module 16784 (ToastContainer)
import Fragment from "Fragment" /* 21 */;
import native from "native" /* 1177 */;
import native2 from "native" /* 4540 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4541 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import spring from "spring" /* 5280 */;
import LegacyTokens from "LegacyTokens" /* 5753 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import ToastStore from "ToastStore" /* 16785 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let obj2;
function AnimatedToast(toast) {
  let closure_10;
  let items3;
  let obj7;
  let tmp17;
  let tmp6Result;
  toast = toast.toast;
  const key = toast.key;
  const merged = Object.assign(toast, Object.assign({ key: 0 }));
  const state = toast.state;
  const cleanUp = toast.cleanUp;
  let top;
  OPACITY_SPRING_PHYSICS = undefined;
  let str;
  let sharedValue1;
  let youBarTotalHeight;
  const tmp3 = merged;
  const tmp4 = cleanUp;
  const tmp2 = top();
  let obj = merged(cleanUp[6]);
  const sharedValue = obj.useSharedValue(0);
  size = state(cleanUp[7])();
  const width = size.width;
  const height = size.height;
  let obj2 = merged(cleanUp[8]);
  const mobileQuestDockHeight = obj2.useMobileQuestDockHeight();
  top = state(cleanUp[9])().top;
  obj3 = merged(cleanUp[10]);
  items = [width];
  const stateFromStores = obj3.useStateFromStores(items, () => {
    let flag = AccessibilityStore.useReducedMotion || merged.disableAnimations;
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  const content = merged.content;
  let tmp10 = null != content;
  const obj4 = merged(cleanUp[11]);
  const isScreenReaderEnabled = obj4.useIsScreenReaderEnabled();
  if (tmp10) {
    tmp10 = typeof content === "string";
  }
  OPACITY_SPRING_PHYSICS = tmp10;
  const position = merged.position;
  str = "top";
  if (undefined !== position) {
    str = position;
  }
  const tmp3Result = tmp3(tmp4[6]);
  sharedValue1 = tmp3Result.useSharedValue(stateFromStores ? tmp11.END : tmp11.START);
  const tmp3Result3 = tmp3(tmp4[12]);
  youBarTotalHeight = tmp3Result3.useYouBarTotalHeight(8);
  let fn = function p() {
    let items1;
    let sum;
    let value2;
    let tmp = "top" === str;
    if (tmp) {
      sum = top + 8;
    } else {
      sum = height - sharedValue.get() - mobileQuestDockHeight - 8 - youBarTotalHeight;
    }
    let obj = sharedValue1;
    const interpolate = ReanimatedRexport.interpolate;
    let num3 = -30;
    ReanimatedRexport;
    const value = sharedValue1.get();
    const tmp12 = items;
    if (!tmp) {
      const diff = height - mobileQuestDockHeight;
      num3 = diff - sharedValue.get() - youBarTotalHeight;
    }
    items = [num3, sum];
    const interpolateResult = interpolate(value, tmp12, items);
    if (stateFromStores) {
      value2 = obj.get();
    } else {
      const tmp8Result = spring;
      value2 = tmp8Result.withSpring(obj.get(), OPACITY_SPRING_PHYSICS);
    }
    let withSpringResult = interpolateResult;
    const obj2 = { opacity: value2, transform: items1, maxWidth: width - 32 };
    if (!stateFromStores) {
      const fn = function t(arg0) {
        const tmp = arg0 && state === merged(cleanUp[14]).TransitionStates.YEETED;
        if (tmp) {
          const obj = merged(cleanUp[6]);
          obj.runOnJS(closure_1_2)();
        }
      };
      const tmp8Result2 = spring;
      const withSpring = tmp8Result2.withSpring;
      fn.__closure = { state, TransitionStates: native2.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
      fn.__workletHash = 633151838569;
      fn.__initData = __initData;
      obj3 = { state, TransitionStates: native2.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
      withSpringResult = withSpring(interpolateResult, closure_11, "respect-motion-settings", fn);
    }
    items1 = [{ translateY: withSpringResult }];
    return obj2;
  };
  const tmp3Result4 = tmp3(tmp4[6]);
  fn.__closure = { position: str, safeAreaTop: top, CONTAINER_DISTANCE_VERTICAL: 8, screenHeight: height, toastHeight: sharedValue, bottomTabsHeight: mobileQuestDockHeight, youBarHeight: youBarTotalHeight, interpolate: tmp3(tmp4[6]).interpolate, animationState: sharedValue1, ANIMATION_STATE_INPUT: content, CONTAINER_TOP_POSITION_START: -30, isReducedMotion: stateFromStores, withSpring: tmp3(tmp4[13]).withSpring, OPACITY_SPRING_PHYSICS, TOAST_SPRING_PHYSICS: str, state, TransitionStates: tmp3(tmp4[14]).TransitionStates, runOnJS: tmp3(tmp4[6]).runOnJS, cleanUp, screenWidth: width, CONTAINER_DISTANCE_SIDES: 16 };
  fn.__workletHash = 3455640999355;
  fn.__initData = sharedValue1;
  let items1 = [state, sharedValue1, stateFromStores, cleanUp];
  ({ position: str, safeAreaTop: top, CONTAINER_DISTANCE_VERTICAL: 8, screenHeight: height, toastHeight: sharedValue, bottomTabsHeight: mobileQuestDockHeight, youBarHeight: youBarTotalHeight, interpolate: tmp3(tmp4[6]).interpolate, animationState: sharedValue1, ANIMATION_STATE_INPUT: content, CONTAINER_TOP_POSITION_START: -30, isReducedMotion: stateFromStores, withSpring: tmp3(tmp4[13]).withSpring, OPACITY_SPRING_PHYSICS, TOAST_SPRING_PHYSICS: str, state, TransitionStates: tmp3(tmp4[14]).TransitionStates, runOnJS: tmp3(tmp4[6]).runOnJS, cleanUp, screenWidth: width, CONTAINER_DISTANCE_SIDES: 16 });
  const animatedStyle = tmp3Result4.useAnimatedStyle(fn);
  const effect = sharedValue.useEffect(() => {
    if (state === native2.TransitionStates.YEETED) {
      const result = sharedValue1.set(obj3.START);
      const tmp7 = stateFromStores;
      if (tmp7) {
        cleanUp();
      }
    } else {
      const result1 = sharedValue1.set(obj3.END);
    }
  }, items1);
  const items2 = [tmp10, content];
  const effect1 = sharedValue.useEffect(() => {
    const tmp = closure_10;
    if (tmp) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(content);
    }
  }, items2);
  if (!tmp10) {
    const obj6 = {
      pointerEvents: "none",
      style: items3,
      onLayout(nativeEvent) {
          const result = sharedValue.set(nativeEvent.nativeEvent.layout.height);
        },
      children: mobileQuestDockHeight(tmp6Result, obj7, key)
    };
    items3 = [tmp2.container, animatedStyle];
    const View = tmp6(tmp4[6]).View;
    obj7 = {};
    tmp6Result = state(tmp4[16]);
    const merged1 = Object.assign(merged);
    tmp17 = mobileQuestDockHeight(View, obj6);
  } else {
    tmp17 = null;
  }
  return tmp17;
}
function renderItem(arg0, toast, state, cleanUp) {
  return <AnimatedToast key={arg0} toast={arg1} state={arg2} cleanUp={arg3} />;
}
function getItemKey(key) {
  return key.key;
}
function wrapChildren(children) {
  return jsx(native.NonExpandingOverlayView, { children });
}
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { position: "absolute", alignSelf: "center", flexDirection: "row", justifyContent: "center", shadowColor: LegacyTokens.TOAST_CONTAINER_SHADOW_COLOR };
let closure_7 = createStyles.createStyles(obj);
let obj3 = { START: 0, [0]: "START", END: 1, [1]: "END" };
let items = [, ];
({ START: arr[0], END: arr[1] } = obj3);
let OPACITY_SPRING_PHYSICS = { mass: 0.1, damping: 10, stiffness: 100, overshootClamping: true };
let closure_11 = { mass: 0.35, damping: 15, stiffness: 350, restDisplacementThreshold: 0.1, restSpeedThreshold: 0.1 };
let closure_12 = { code: "function ToastContainerTsx1(){const{position,safeAreaTop,CONTAINER_DISTANCE_VERTICAL,screenHeight,toastHeight,bottomTabsHeight,youBarHeight,interpolate,animationState,ANIMATION_STATE_INPUT,CONTAINER_TOP_POSITION_START,isReducedMotion,withSpring,OPACITY_SPRING_PHYSICS,TOAST_SPRING_PHYSICS,state,TransitionStates,runOnJS,cleanUp,screenWidth,CONTAINER_DISTANCE_SIDES}=this.__closure;const verticalPositionEnd=position==='top'?safeAreaTop+CONTAINER_DISTANCE_VERTICAL:screenHeight-toastHeight.get()-bottomTabsHeight-CONTAINER_DISTANCE_VERTICAL-youBarHeight;const translateY=interpolate(animationState.get(),ANIMATION_STATE_INPUT,[position==='top'?CONTAINER_TOP_POSITION_START:screenHeight-bottomTabsHeight-toastHeight.get()-youBarHeight,verticalPositionEnd]);return{opacity:!isReducedMotion?withSpring(animationState.get(),OPACITY_SPRING_PHYSICS):animationState.get(),transform:[{translateY:!isReducedMotion?withSpring(translateY,TOAST_SPRING_PHYSICS,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}):translateY}],maxWidth:screenWidth-CONTAINER_DISTANCE_SIDES*2};}" };
let closure_13 = { code: "function ToastContainerTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
const memoResult = react.memo(() => {
  let stateFromStoresArray;
  let obj = stateFromStoresArray(504);
  items = [ToastStore];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    content = content.getContent();
    if (null == content) {
      items = [];
    } else {
      items = [content];
    }
    return items;
  });
  const items1 = [stateFromStoresArray];
  const effect = react.useEffect(() => {
    if (0 !== stateFromStoresArray.length) {
      let num = tmp[0].toastDurationMs;
      const _setTimeout = setTimeout;
      if (num == null) {
        num = 2000;
      }
      let closure_0 = _setTimeout(() => {
        const obj = closure_1_1(closure_1_2[18]);
        return obj.close();
      }, num);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  return jsx(stateFromStoresArray(4540).TransitionGroup, { items: stateFromStoresArray, renderItem, getItemKey, wrapChildren });
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/toast/native/ToastContainer.tsx");

export default memoResult;
