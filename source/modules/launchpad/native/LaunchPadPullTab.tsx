// Module ID: 15513
// Function ID: 118392
// Name: LAUNCH_PAD_PULL_TAB_BORDER_RADIUS
// Dependencies: []

// Module 15513 (LAUNCH_PAD_PULL_TAB_BORDER_RADIUS)
let LAUNCH_PAD_PULL_TAB_BORDER_RADIUS;
let LAUNCH_PAD_PULL_TAB_WIDTH;
const Pressable = arg1(dependencyMap[1]).Pressable;
const tmp2 = arg1(dependencyMap[2]);
({ LAUNCH_PAD_MARGIN: closure_4, LAUNCH_PAD_PULL_TAB_BORDER_RADIUS } = tmp2);
const LAUNCH_PAD_PULL_TAB_HEIGHT = tmp2.LAUNCH_PAD_PULL_TAB_HEIGHT;
({ LAUNCH_PAD_PULL_TAB_HIT_SLOP: closure_7, LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET: closure_8, LAUNCH_PAD_PULL_TAB_SCALE_FACTOR: closure_9, LAUNCH_PAD_PULL_TAB_SCALE_OFFSET: closure_10, LAUNCH_PAD_PULL_TAB_WIDTH, LAUNCH_PAD_SPRING_CONFIG: closure_11 } = tmp2);
const CHAT_INPUT_HEIGHT = arg1(dependencyMap[3]).CHAT_INPUT_HEIGHT;
const jsx = arg1(dependencyMap[4]).jsx;
let obj1 = arg1(dependencyMap[5]);
let obj = {};
obj = { <string:2423925279>: null, <string:2596769915>: null, width: LAUNCH_PAD_PULL_TAB_WIDTH, height: LAUNCH_PAD_PULL_TAB_HEIGHT, borderTopLeftRadius: LAUNCH_PAD_PULL_TAB_BORDER_RADIUS, borderBottomLeftRadius: LAUNCH_PAD_PULL_TAB_BORDER_RADIUS, borderWidth: 1, borderTopWidth: 1, borderColor: "rgba(0, 0, 0, 0.08)" };
const merged = Object.assign(importDefault(dependencyMap[6]).shadows.SHADOW_MOBILE_NAVIGATOR_X);
obj.pullTab = obj;
obj.pullTabButton = { width: LAUNCH_PAD_PULL_TAB_WIDTH, height: LAUNCH_PAD_PULL_TAB_HEIGHT, justifyContent: "center", alignItems: "center" };
obj1 = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW };
obj.pullTabOpened = obj1;
const importAllResult = importAll(dependencyMap[0]);
obj.pullTabClosed = { backgroundColor: importDefault(dependencyMap[6]).colors.MOBILE_FLOATINGBAR_BACKGROUND };
let closure_14 = obj1.createStyles(obj);
let closure_15 = { code: "function LaunchPadPullTabTsx1(){const{keyboardHeight}=this.__closure;return keyboardHeight.get();}" };
let closure_16 = { code: "function LaunchPadPullTabTsx2(keyboardHeight,keyboardHeightPrev){const{launchPadSharedState,updaters,keyboardHeightOpened,launchPadPullTabState,CHAT_INPUT_HEIGHT,LAUNCH_PAD_MARGIN,getWindowDimensionsWorklet,LAUNCH_PAD_PULL_TAB_HEIGHT,LAUNCH_PAD_PULL_TAB_SCALE_OFFSET}=this.__closure;if(launchPadSharedState.get()!==0){updaters.setLaunchPadPullTabMinimized(false);return;}if(keyboardHeightPrev==null||keyboardHeight===keyboardHeightPrev){return;}if(keyboardHeight<keyboardHeightPrev){var _keyboardHeightOpened;if(keyboardHeight===0){updaters.setLaunchPadPullTabMinimized(false);}if(keyboardHeightOpened.get()==null){keyboardHeightOpened.set(keyboardHeightPrev);}const keyboardClosePercent=1-keyboardHeight/((_keyboardHeightOpened=keyboardHeightOpened.get())!==null&&_keyboardHeightOpened!==void 0?_keyboardHeightOpened:keyboardHeightPrev);const keyboardOffsetRetractionAmount=launchPadPullTabState.get().offset*keyboardClosePercent;updaters.setLaunchPadPullTabPosition(launchPadPullTabState.get().position+keyboardOffsetRetractionAmount,launchPadPullTabState.get().offset-keyboardOffsetRetractionAmount);}else{updaters.setLaunchPadPullTabMinimized(true);if(keyboardHeightOpened.get()!=null){keyboardHeightOpened.set(undefined);}const keyboardWithChatInput=keyboardHeight+CHAT_INPUT_HEIGHT+LAUNCH_PAD_MARGIN*2;const spaceUnderPullTab=getWindowDimensionsWorklet({ignoreKeyboard:true}).height-(launchPadPullTabState.get().position+LAUNCH_PAD_PULL_TAB_HEIGHT+LAUNCH_PAD_PULL_TAB_SCALE_OFFSET);const offset=spaceUnderPullTab>keyboardWithChatInput?0:keyboardWithChatInput-spaceUnderPullTab;if(offset>0){updaters.setLaunchPadPullTabPosition(launchPadPullTabState.get().position-offset,launchPadPullTabState.get().offset+offset);}}}" };
let closure_17 = { code: "function LaunchPadPullTabTsx3(){const{isMinimized,gestureState,LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET,interpolate,launchPadSharedState,windowDimensions,launchPadPullTabState,LAUNCH_PAD_PULL_TAB_BORDER_RADIUS,interpolateColor,LAUNCH_PAD_MARGIN,backgroundColorStart,backgroundColorEnd,withSpring,LAUNCH_PAD_SPRING_CONFIG}=this.__closure;let translateX=isMinimized.get()&&!gestureState.get().active?LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET:interpolate(launchPadSharedState.get(),[0,1],[0,-(windowDimensions.get().width-16)]);if(launchPadSharedState.get()>0.9){translateX=-windowDimensions.get().width;}else if(gestureState.get().active){if(gestureState.get().requiresPop){translateX+=gestureState.get().positionOffsetX*0.3;}else{translateX-=4;}}const translateY=launchPadPullTabState.get().position;const borderRadius=launchPadSharedState.get()<=0&&!gestureState.get().active?0:LAUNCH_PAD_PULL_TAB_BORDER_RADIUS;const backgroundColor=interpolateColor(launchPadSharedState.get()*windowDimensions.get().width,[0,LAUNCH_PAD_MARGIN],[backgroundColorStart,backgroundColorEnd]);return{transform:[{translateX:withSpring(translateX,LAUNCH_PAD_SPRING_CONFIG)},{translateY:withSpring(translateY,LAUNCH_PAD_SPRING_CONFIG)},{scale:withSpring(launchPadPullTabState.get().scale,LAUNCH_PAD_SPRING_CONFIG)}],borderTopRightRadius:withSpring(borderRadius,LAUNCH_PAD_SPRING_CONFIG),borderBottomRightRadius:withSpring(borderRadius,LAUNCH_PAD_SPRING_CONFIG),backgroundColor:backgroundColor};}" };
const obj2 = { backgroundColor: importDefault(dependencyMap[6]).colors.MOBILE_FLOATINGBAR_BACKGROUND };
const memoResult = importAllResult.memo(function LaunchPadPullTab(launchPadSharedState) {
  launchPadSharedState = launchPadSharedState.launchPadSharedState;
  const arg1 = launchPadSharedState;
  const launchPadPullTabState = launchPadSharedState.launchPadPullTabState;
  const importDefault = launchPadPullTabState;
  const gestureState = launchPadSharedState.gestureState;
  const dependencyMap = gestureState;
  const updaters = launchPadSharedState.updaters;
  const Pressable = updaters;
  const tmp = callback();
  const tmp2 = importDefault(dependencyMap[9])();
  const backgroundColor = tmp.pullTabClosed.backgroundColor;
  const LAUNCH_PAD_PULL_TAB_BORDER_RADIUS = backgroundColor;
  const backgroundColor2 = tmp.pullTabOpened.backgroundColor;
  const LAUNCH_PAD_PULL_TAB_HEIGHT = backgroundColor2;
  const tmp3 = importDefault(dependencyMap[10])({ launchPadSharedState, launchPadPullTabState });
  let obj = arg1(dependencyMap[8]);
  class U {
    constructor() {
      if (closure_7.get()) {
        tmp = gestureState;
        if (!gestureState.get().active) {
          interpolateResult = closure_8;
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
        tmp19 = closure_4;
        items = [0.229];
        items[1] = closure_4;
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
        tmp23 = closure_11;
        obj1.translateX = obj5.withSpring(tmp6, closure_11);
        items2 = [, , ];
        items2[0] = obj1;
        obj2 = {};
        obj7 = launchPadSharedState(gestureState[11]);
        obj2.translateY = obj7.withSpring(launchPadPullTabState.get().position, closure_11);
        items2[1] = obj2;
        obj3 = {};
        obj9 = launchPadSharedState(gestureState[11]);
        tmp24 = launchPadPullTabState;
        obj3.scale = obj9.withSpring(launchPadPullTabState.get().scale, closure_11);
        items2[2] = obj3;
        obj.transform = items2;
        obj10 = launchPadSharedState(gestureState[11]);
        obj.borderTopRightRadius = obj10.withSpring(num5, closure_11);
        obj11 = launchPadSharedState(gestureState[11]);
        obj.borderBottomRightRadius = obj11.withSpring(num5, closure_11);
        obj.backgroundColor = interpolateColorResult;
        return obj;
      }
      obj = launchPadSharedState(gestureState[8]);
      value1 = launchPadSharedState.get();
      items3 = [0.229];
      items3[1] = -closure_4.get().width - 16;
      interpolateResult = obj.interpolate(value1, [null, null], items3);
      return;
    }
  }
  obj = { isMinimized: tmp3, gestureState, LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET: closure_8, interpolate: arg1(dependencyMap[8]).interpolate, launchPadSharedState, windowDimensions: tmp2, launchPadPullTabState, LAUNCH_PAD_PULL_TAB_BORDER_RADIUS, interpolateColor: arg1(dependencyMap[8]).interpolateColor, LAUNCH_PAD_MARGIN: tmp2, backgroundColorStart: backgroundColor, backgroundColorEnd: backgroundColor2, withSpring: arg1(dependencyMap[11]).withSpring, LAUNCH_PAD_SPRING_CONFIG: closure_11 };
  U.__closure = obj;
  U.__workletHash = 3768918311497;
  U.__initData = closure_17;
  const animatedStyle = obj.useAnimatedStyle(U);
  function useLaunchPadPullTabKeyboardListener(launchPadSharedState) {
    launchPadSharedState = launchPadSharedState.launchPadSharedState;
    const launchPadPullTabState = launchPadSharedState.launchPadPullTabState;
    let updaters = launchPadSharedState.updaters;
    const gestureState = updaters;
    const tmp = launchPadPullTabState(gestureState[7])();
    updaters = tmp;
    let obj = launchPadSharedState(gestureState[8]);
    const sharedValue = obj.useSharedValue(undefined);
    const fn = function _() {
      return tmp.get();
    };
    fn.__closure = { keyboardHeight: tmp };
    fn.__workletHash = 14545769097570;
    fn.__initData = closure_15;
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
              const sum1 = arg0 + closure_12 + 2 * sharedValue;
              let obj = launchPadSharedState(updaters[9]);
              obj = { ignoreKeyboard: true };
              const diff1 = obj.getWindowDimensionsWorklet(obj).height - (launchPadPullTabState.get().position + closure_6 + closure_10);
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
    obj = { launchPadSharedState, updaters, keyboardHeightOpened: sharedValue, launchPadPullTabState, CHAT_INPUT_HEIGHT: closure_12, LAUNCH_PAD_MARGIN: sharedValue, getWindowDimensionsWorklet: launchPadSharedState(gestureState[9]).getWindowDimensionsWorklet, LAUNCH_PAD_PULL_TAB_HEIGHT: backgroundColor2, LAUNCH_PAD_PULL_TAB_SCALE_OFFSET: closure_10 };
    fn2.__closure = obj;
    fn2.__workletHash = 8060927175361;
    fn2.__initData = closure_16;
    const animatedReaction = launchPadSharedState(gestureState[8]).useAnimatedReaction(fn, fn2);
  }({ launchPadSharedState, launchPadPullTabState, updaters });
  obj = { style: items };
  const items = [tmp.pullTab, animatedStyle];
  const obj1 = { accessibilityRole: "button" };
  const intl = arg1(dependencyMap[12]).intl;
  obj1.accessibilityLabel = intl.string(arg1(dependencyMap[12]).t.yTnIfb);
  obj1.hitSlop = tmp3;
  obj1.style = tmp.pullTabButton;
  obj1.onTouchStart = function onTouchStart() {
    const result = updaters.setLaunchPadPullTabScale(closure_9);
  };
  obj1.onPress = importDefault(dependencyMap[13]);
  obj1.children = jsx(arg1(dependencyMap[14]).ChannelListMagnifyingGlassIcon, { size: "xs" });
  obj.children = <Pressable {...obj1} />;
  return jsx(importDefault(dependencyMap[8]).View, obj);
});
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/launchpad/native/LaunchPadPullTab.tsx");

export default memoResult;
