// Module ID: 15648
// Function ID: 120671
// Name: LAUNCH_PAD_PULL_TAB_BORDER_RADIUS
// Dependencies: [31, 27, 10451, 11105, 33, 4130, 689, 15647, 3991, 14710, 15649, 4542, 1212, 15595, 12852, 2]

// Module 15648 (LAUNCH_PAD_PULL_TAB_BORDER_RADIUS)
import { Pressable } from "get ActivityIndicator";
import LAUNCH_PAD_SPRING_CONFIG from "LAUNCH_PAD_SPRING_CONFIG";
import { CHAT_INPUT_HEIGHT } from "TextAreaCta";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let LAUNCH_PAD_PULL_TAB_BORDER_RADIUS;
let LAUNCH_PAD_PULL_TAB_WIDTH;
let closure_10;
let closure_11;
let closure_4;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ LAUNCH_PAD_MARGIN: closure_4, LAUNCH_PAD_PULL_TAB_BORDER_RADIUS } = LAUNCH_PAD_SPRING_CONFIG);
const LAUNCH_PAD_PULL_TAB_HEIGHT = LAUNCH_PAD_SPRING_CONFIG.LAUNCH_PAD_PULL_TAB_HEIGHT;
({ LAUNCH_PAD_PULL_TAB_HIT_SLOP: closure_7, LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET: closure_8, LAUNCH_PAD_PULL_TAB_SCALE_FACTOR: closure_9, LAUNCH_PAD_PULL_TAB_SCALE_OFFSET: closure_10, LAUNCH_PAD_PULL_TAB_WIDTH, LAUNCH_PAD_SPRING_CONFIG: closure_11 } = LAUNCH_PAD_SPRING_CONFIG);
let obj = {};
obj = { position: "absolute", right: 0, width: LAUNCH_PAD_PULL_TAB_WIDTH, height: LAUNCH_PAD_PULL_TAB_HEIGHT, borderTopLeftRadius: LAUNCH_PAD_PULL_TAB_BORDER_RADIUS, borderBottomLeftRadius: LAUNCH_PAD_PULL_TAB_BORDER_RADIUS, borderWidth: 1, borderTopWidth: 1, borderColor: "rgba(0, 0, 0, 0.08)" };
const merged = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_MOBILE_NAVIGATOR_X);
obj.pullTab = obj;
obj.pullTabButton = { width: LAUNCH_PAD_PULL_TAB_WIDTH, height: LAUNCH_PAD_PULL_TAB_HEIGHT, justifyContent: "center", alignItems: "center" };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
obj.pullTabOpened = _createForOfIteratorHelperLoose;
obj.pullTabClosed = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_FLOATINGBAR_BACKGROUND };
let closure_14 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_15 = { code: "function LaunchPadPullTabTsx1(){const{keyboardHeight}=this.__closure;return keyboardHeight.get();}" };
let closure_16 = { code: "function LaunchPadPullTabTsx2(keyboardHeight,keyboardHeightPrev){const{launchPadSharedState,updaters,keyboardHeightOpened,launchPadPullTabState,CHAT_INPUT_HEIGHT,LAUNCH_PAD_MARGIN,getWindowDimensionsWorklet,LAUNCH_PAD_PULL_TAB_HEIGHT,LAUNCH_PAD_PULL_TAB_SCALE_OFFSET}=this.__closure;if(launchPadSharedState.get()!==0){updaters.setLaunchPadPullTabMinimized(false);return;}if(keyboardHeightPrev==null||keyboardHeight===keyboardHeightPrev){return;}if(keyboardHeight<keyboardHeightPrev){var _keyboardHeightOpened;if(keyboardHeight===0){updaters.setLaunchPadPullTabMinimized(false);}if(keyboardHeightOpened.get()==null){keyboardHeightOpened.set(keyboardHeightPrev);}const keyboardClosePercent=1-keyboardHeight/((_keyboardHeightOpened=keyboardHeightOpened.get())!==null&&_keyboardHeightOpened!==void 0?_keyboardHeightOpened:keyboardHeightPrev);const keyboardOffsetRetractionAmount=launchPadPullTabState.get().offset*keyboardClosePercent;updaters.setLaunchPadPullTabPosition(launchPadPullTabState.get().position+keyboardOffsetRetractionAmount,launchPadPullTabState.get().offset-keyboardOffsetRetractionAmount);}else{updaters.setLaunchPadPullTabMinimized(true);if(keyboardHeightOpened.get()!=null){keyboardHeightOpened.set(undefined);}const keyboardWithChatInput=keyboardHeight+CHAT_INPUT_HEIGHT+LAUNCH_PAD_MARGIN*2;const spaceUnderPullTab=getWindowDimensionsWorklet({ignoreKeyboard:true}).height-(launchPadPullTabState.get().position+LAUNCH_PAD_PULL_TAB_HEIGHT+LAUNCH_PAD_PULL_TAB_SCALE_OFFSET);const offset=spaceUnderPullTab>keyboardWithChatInput?0:keyboardWithChatInput-spaceUnderPullTab;if(offset>0){updaters.setLaunchPadPullTabPosition(launchPadPullTabState.get().position-offset,launchPadPullTabState.get().offset+offset);}}}" };
let closure_17 = { code: "function LaunchPadPullTabTsx3(){const{isMinimized,gestureState,LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET,interpolate,launchPadSharedState,windowDimensions,launchPadPullTabState,LAUNCH_PAD_PULL_TAB_BORDER_RADIUS,interpolateColor,LAUNCH_PAD_MARGIN,backgroundColorStart,backgroundColorEnd,withSpring,LAUNCH_PAD_SPRING_CONFIG}=this.__closure;let translateX=isMinimized.get()&&!gestureState.get().active?LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET:interpolate(launchPadSharedState.get(),[0,1],[0,-(windowDimensions.get().width-16)]);if(launchPadSharedState.get()>0.9){translateX=-windowDimensions.get().width;}else if(gestureState.get().active){if(gestureState.get().requiresPop){translateX+=gestureState.get().positionOffsetX*0.3;}else{translateX-=4;}}const translateY=launchPadPullTabState.get().position;const borderRadius=launchPadSharedState.get()<=0&&!gestureState.get().active?0:LAUNCH_PAD_PULL_TAB_BORDER_RADIUS;const backgroundColor=interpolateColor(launchPadSharedState.get()*windowDimensions.get().width,[0,LAUNCH_PAD_MARGIN],[backgroundColorStart,backgroundColorEnd]);return{transform:[{translateX:withSpring(translateX,LAUNCH_PAD_SPRING_CONFIG)},{translateY:withSpring(translateY,LAUNCH_PAD_SPRING_CONFIG)},{scale:withSpring(launchPadPullTabState.get().scale,LAUNCH_PAD_SPRING_CONFIG)}],borderTopRightRadius:withSpring(borderRadius,LAUNCH_PAD_SPRING_CONFIG),borderBottomRightRadius:withSpring(borderRadius,LAUNCH_PAD_SPRING_CONFIG),backgroundColor:backgroundColor};}" };
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_FLOATINGBAR_BACKGROUND };
const memoResult = importAllResult.memo(function LaunchPadPullTab(launchPadSharedState) {
  launchPadSharedState = launchPadSharedState.launchPadSharedState;
  let launchPadPullTabState = launchPadSharedState.launchPadPullTabState;
  const gestureState = launchPadSharedState.gestureState;
  let updaters = launchPadSharedState.updaters;
  let tmp = callback();
  const tmp2 = launchPadPullTabState(gestureState[9])();
  let closure_4 = tmp2;
  const backgroundColor = tmp.pullTabClosed.backgroundColor;
  const backgroundColor2 = tmp.pullTabOpened.backgroundColor;
  const tmp3 = launchPadPullTabState(gestureState[10])({ launchPadSharedState, launchPadPullTabState });
  let closure_7 = tmp3;
  let obj = launchPadSharedState(gestureState[8]);
  class U {
    constructor() {
      if (closure_7.get()) {
        tmp = gestureState;
        if (!gestureState.get().active) {
          interpolateResult = outer1_8;
        }
        tmp4 = launchPadSharedState;
        num = 0.9;
        if (launchPadSharedState.get() > 0.9) {
          tmp10 = closure_4;
          tmp6 = -closure_4.get().width;
        } else {
          tmp5 = gestureState;
          tmp6 = interpolateResult;
          if (gestureState.get().active) {
            tmp7 = gestureState;
            if (gestureState.get().requiresPop) {
              tmp9 = gestureState;
              num3 = 0.3;
              sum = interpolateResult + 0.3 * gestureState.get().positionOffsetX;
            } else {
              num2 = 4;
              sum = interpolateResult - 4;
            }
            tmp6 = sum;
          }
        }
        tmp11 = launchPadPullTabState;
        tmp12 = launchPadSharedState;
        num4 = 0;
        if (launchPadSharedState.get() > 0) {
          num5 = backgroundColor;
        } else {
          tmp13 = gestureState;
          num5 = 0;
        }
        tmp14 = launchPadSharedState;
        tmp15 = gestureState;
        num6 = 8;
        obj2 = launchPadSharedState(gestureState[8]);
        tmp16 = launchPadSharedState;
        tmp18 = closure_4;
        value = launchPadSharedState.get();
        tmp19 = outer1_4;
        items = [0];
        items[1] = outer1_4;
        tmp20 = backgroundColor;
        items1 = [, ];
        items1[0] = backgroundColor;
        tmp21 = backgroundColor;
        items1[1] = backgroundColor;
        obj = {};
        obj1 = {};
        num7 = 11;
        interpolateColorResult = obj2.interpolateColor(value * closure_4.get().width, items, items1);
        obj5 = launchPadSharedState(gestureState[11]);
        tmp23 = outer1_11;
        obj1.translateX = obj5.withSpring(tmp6, outer1_11);
        items2 = [, , ];
        items2[0] = obj1;
        obj2 = {};
        obj7 = launchPadSharedState(gestureState[11]);
        obj2.translateY = obj7.withSpring(launchPadPullTabState.get().position, outer1_11);
        items2[1] = obj2;
        obj3 = {};
        obj9 = launchPadSharedState(gestureState[11]);
        tmp24 = launchPadPullTabState;
        obj3.scale = obj9.withSpring(launchPadPullTabState.get().scale, outer1_11);
        items2[2] = obj3;
        obj.transform = items2;
        obj10 = launchPadSharedState(gestureState[11]);
        obj.borderTopRightRadius = obj10.withSpring(num5, outer1_11);
        obj11 = launchPadSharedState(gestureState[11]);
        obj.borderBottomRightRadius = obj11.withSpring(num5, outer1_11);
        obj.backgroundColor = interpolateColorResult;
        return obj;
      }
      obj = launchPadSharedState(gestureState[8]);
      value1 = launchPadSharedState.get();
      items3 = [0];
      items3[1] = -closure_4.get().width - 16;
      interpolateResult = obj.interpolate(value1, [0, 1], items3);
      return;
    }
  }
  obj = { isMinimized: tmp3, gestureState, LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET: closure_8, interpolate: launchPadSharedState(gestureState[8]).interpolate, launchPadSharedState, windowDimensions: tmp2, launchPadPullTabState, LAUNCH_PAD_PULL_TAB_BORDER_RADIUS: backgroundColor, interpolateColor: launchPadSharedState(gestureState[8]).interpolateColor, LAUNCH_PAD_MARGIN: closure_4, backgroundColorStart: backgroundColor, backgroundColorEnd: backgroundColor2, withSpring: launchPadSharedState(gestureState[11]).withSpring, LAUNCH_PAD_SPRING_CONFIG: closure_11 };
  U.__closure = obj;
  U.__workletHash = 3768918311497;
  U.__initData = closure_17;
  const animatedStyle = obj.useAnimatedStyle(U);
  (function useLaunchPadPullTabKeyboardListener(launchPadSharedState) {
    launchPadSharedState = launchPadSharedState.launchPadSharedState;
    const launchPadPullTabState = launchPadSharedState.launchPadPullTabState;
    let updaters = launchPadSharedState.updaters;
    let tmp = launchPadPullTabState(gestureState[7])();
    updaters = tmp;
    let obj = launchPadSharedState(gestureState[8]);
    const sharedValue = obj.useSharedValue(undefined);
    const fn = function _() {
      return tmp.get();
    };
    fn.__closure = { keyboardHeight: tmp };
    fn.__workletHash = 14545769097570;
    fn.__initData = outer1_15;
    const fn2 = function s(arg0, arg1) {
      let tmp = arg1;
      if (0 === launchPadSharedState.get()) {
        if (null != tmp) {
          if (arg0 !== tmp) {
            if (arg0 < tmp) {
              if (0 === arg0) {
                const result = updaters.setLaunchPadPullTabMinimized(false);
              }
              if (null == sharedValue.get()) {
                const result1 = sharedValue.set(tmp);
              }
              const value = sharedValue.get();
              if (null != value) {
                tmp = value;
              }
              const diff = 1 - arg0 / tmp;
              const result2 = launchPadPullTabState.get().offset * diff;
              const sum = launchPadPullTabState.get().position + result2;
              const result3 = updaters.setLaunchPadPullTabPosition(sum, launchPadPullTabState.get().offset - result2);
            } else {
              const result4 = updaters.setLaunchPadPullTabMinimized(true);
              if (null != sharedValue.get()) {
                const result5 = sharedValue.set(undefined);
              }
              const sum1 = arg0 + outer2_12 + 2 * closure_4;
              let obj = launchPadSharedState(gestureState[9]);
              obj = { ignoreKeyboard: true };
              const diff1 = obj.getWindowDimensionsWorklet(obj).height - (launchPadPullTabState.get().position + backgroundColor2 + outer2_10);
              let num3 = 0;
              if (diff1 <= sum1) {
                num3 = sum1 - diff1;
              }
              if (num3 > 0) {
                const diff2 = launchPadPullTabState.get().position - num3;
                const result6 = updaters.setLaunchPadPullTabPosition(diff2, launchPadPullTabState.get().offset + num3);
              }
            }
          }
        }
      } else {
        const result7 = updaters.setLaunchPadPullTabMinimized(false);
      }
    };
    obj = { launchPadSharedState, updaters, keyboardHeightOpened: sharedValue, launchPadPullTabState, CHAT_INPUT_HEIGHT: outer1_12, LAUNCH_PAD_MARGIN: closure_4, getWindowDimensionsWorklet: launchPadSharedState(gestureState[9]).getWindowDimensionsWorklet, LAUNCH_PAD_PULL_TAB_HEIGHT: backgroundColor2, LAUNCH_PAD_PULL_TAB_SCALE_OFFSET: outer1_10 };
    fn2.__closure = obj;
    fn2.__workletHash = 8060927175361;
    fn2.__initData = outer1_16;
    const animatedReaction = launchPadSharedState(gestureState[8]).useAnimatedReaction(fn, fn2);
  })({ launchPadSharedState, launchPadPullTabState, updaters });
  obj = { style: items };
  items = [tmp.pullTab, animatedStyle];
  let obj1 = { accessibilityRole: "button" };
  const intl = launchPadSharedState(gestureState[12]).intl;
  obj1.accessibilityLabel = intl.string(launchPadSharedState(gestureState[12]).t.yTnIfb);
  obj1.hitSlop = closure_7;
  obj1.style = tmp.pullTabButton;
  obj1.onTouchStart = function onTouchStart() {
    const result = updaters.setLaunchPadPullTabScale(outer1_9);
  };
  obj1.onPress = launchPadPullTabState(gestureState[13]);
  obj1.children = jsx(launchPadSharedState(gestureState[14]).ChannelListMagnifyingGlassIcon, { size: "xs" });
  obj.children = <updaters accessibilityRole="button" />;
  return jsx(launchPadPullTabState(gestureState[8]).View, { style: items });
});
let result = require("LAUNCH_PAD_SPRING_CONFIG").fileFinishedImporting("modules/launchpad/native/LaunchPadPullTab.tsx");

export default memoResult;
