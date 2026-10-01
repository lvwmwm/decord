// Module ID: 16796
// Function ID: 16797
// Name: LaunchPadPullTab
// Dependencies: [19, 17, 11002, 11444, 21, 4836, 576, 16269, 4566, 11515, 16797, 5280, 1115, 16734, 13388, 2]

// Module 16796 (LaunchPadPullTab)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import spring from "spring" /* 5280 */;
import ChatInputConstants from "ChatInputConstants" /* 11444 */;
import react from "react" /* 19 */;
import LaunchPadConstants from "LaunchPadConstants" /* 11002 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let hitSlop;

let LAUNCH_PAD_PULL_TAB_BORDER_RADIUS;
let LAUNCH_PAD_PULL_TAB_WIDTH;
let c10;
let c9;
let closure_4;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let size;
let unpackModuleId;
const Pressable = react_native.Pressable;
({ LAUNCH_PAD_MARGIN: closure_4, LAUNCH_PAD_PULL_TAB_BORDER_RADIUS } = LaunchPadConstants);
const LAUNCH_PAD_PULL_TAB_HEIGHT = LaunchPadConstants.LAUNCH_PAD_PULL_TAB_HEIGHT;
({ LAUNCH_PAD_PULL_TAB_HIT_SLOP: metroImportDefault, LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET: metroImportAll, LAUNCH_PAD_PULL_TAB_SCALE_FACTOR: c9, LAUNCH_PAD_PULL_TAB_SCALE_OFFSET: c10, LAUNCH_PAD_PULL_TAB_WIDTH, LAUNCH_PAD_SPRING_CONFIG: unpackModuleId } = LaunchPadConstants);
const CHAT_INPUT_HEIGHT = ChatInputConstants.CHAT_INPUT_HEIGHT;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { pullTab: size, pullTabButton: { width: LAUNCH_PAD_PULL_TAB_WIDTH, height: LAUNCH_PAD_PULL_TAB_HEIGHT, justifyContent: "center", alignItems: "center" }, pullTabOpened: obj2, pullTabClosed: obj3 };
size = { position: "absolute", right: 0, width: LAUNCH_PAD_PULL_TAB_WIDTH, height: LAUNCH_PAD_PULL_TAB_HEIGHT, borderTopLeftRadius: LAUNCH_PAD_PULL_TAB_BORDER_RADIUS, borderBottomLeftRadius: LAUNCH_PAD_PULL_TAB_BORDER_RADIUS, borderWidth: 1, borderTopWidth: 1, borderColor: "rgba(0, 0, 0, 0.08)" };
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_MOBILE_NAVIGATOR_X);
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj3 = { backgroundColor: nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND };
let closure_14 = createStyles(obj);
const __initData = { code: "function LaunchPadPullTabTsx1(){const{keyboardHeight}=this.__closure;return keyboardHeight.get();}" };
const __initData2 = { code: "function LaunchPadPullTabTsx2(keyboardHeight,keyboardHeightPrev){const{launchPadSharedState,updaters,keyboardHeightOpened,launchPadPullTabState,CHAT_INPUT_HEIGHT,LAUNCH_PAD_MARGIN,getWindowDimensionsWorklet,LAUNCH_PAD_PULL_TAB_HEIGHT,LAUNCH_PAD_PULL_TAB_SCALE_OFFSET}=this.__closure;if(launchPadSharedState.get()!==0){updaters.setLaunchPadPullTabMinimized(false);return;}if(keyboardHeightPrev==null||keyboardHeight===keyboardHeightPrev){return;}if(keyboardHeight<keyboardHeightPrev){var _keyboardHeightOpened;if(keyboardHeight===0){updaters.setLaunchPadPullTabMinimized(false);}if(keyboardHeightOpened.get()==null){keyboardHeightOpened.set(keyboardHeightPrev);}const keyboardClosePercent=1-keyboardHeight/((_keyboardHeightOpened=keyboardHeightOpened.get())!==null&&_keyboardHeightOpened!==void 0?_keyboardHeightOpened:keyboardHeightPrev);const keyboardOffsetRetractionAmount=launchPadPullTabState.get().offset*keyboardClosePercent;updaters.setLaunchPadPullTabPosition(launchPadPullTabState.get().position+keyboardOffsetRetractionAmount,launchPadPullTabState.get().offset-keyboardOffsetRetractionAmount);}else{updaters.setLaunchPadPullTabMinimized(true);if(keyboardHeightOpened.get()!=null){keyboardHeightOpened.set(undefined);}const keyboardWithChatInput=keyboardHeight+CHAT_INPUT_HEIGHT+LAUNCH_PAD_MARGIN*2;const spaceUnderPullTab=getWindowDimensionsWorklet({ignoreKeyboard:true}).height-(launchPadPullTabState.get().position+LAUNCH_PAD_PULL_TAB_HEIGHT+LAUNCH_PAD_PULL_TAB_SCALE_OFFSET);const offset=spaceUnderPullTab>keyboardWithChatInput?0:keyboardWithChatInput-spaceUnderPullTab;if(offset>0){updaters.setLaunchPadPullTabPosition(launchPadPullTabState.get().position-offset,launchPadPullTabState.get().offset+offset);}}}" };
const __initData3 = { code: "function LaunchPadPullTabTsx3(){const{isMinimized,gestureState,LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET,interpolate,launchPadSharedState,windowDimensions,launchPadPullTabState,LAUNCH_PAD_PULL_TAB_BORDER_RADIUS,interpolateColor,LAUNCH_PAD_MARGIN,backgroundColorStart,backgroundColorEnd,withSpring,LAUNCH_PAD_SPRING_CONFIG}=this.__closure;let translateX=isMinimized.get()&&!gestureState.get().active?LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET:interpolate(launchPadSharedState.get(),[0,1],[0,-(windowDimensions.get().width-16)]);if(launchPadSharedState.get()>0.9){translateX=-windowDimensions.get().width;}else if(gestureState.get().active){if(gestureState.get().requiresPop){translateX+=gestureState.get().positionOffsetX*0.3;}else{translateX-=4;}}const translateY=launchPadPullTabState.get().position;const borderRadius=launchPadSharedState.get()<=0&&!gestureState.get().active?0:LAUNCH_PAD_PULL_TAB_BORDER_RADIUS;const backgroundColor=interpolateColor(launchPadSharedState.get()*windowDimensions.get().width,[0,LAUNCH_PAD_MARGIN],[backgroundColorStart,backgroundColorEnd]);return{transform:[{translateX:withSpring(translateX,LAUNCH_PAD_SPRING_CONFIG)},{translateY:withSpring(translateY,LAUNCH_PAD_SPRING_CONFIG)},{scale:withSpring(launchPadPullTabState.get().scale,LAUNCH_PAD_SPRING_CONFIG)}],borderTopRightRadius:withSpring(borderRadius,LAUNCH_PAD_SPRING_CONFIG),borderBottomRightRadius:withSpring(borderRadius,LAUNCH_PAD_SPRING_CONFIG),backgroundColor:backgroundColor};}" };
const memoResult = react.memo(function LaunchPadPullTab(launchPadSharedState) {
  let closure_4;
  let closure_7;
  let intl;
  launchPadSharedState = launchPadSharedState.launchPadSharedState;
  const launchPadPullTabState = launchPadSharedState.launchPadPullTabState;
  const gestureState = launchPadSharedState.gestureState;
  const updaters = launchPadSharedState.updaters;
  const tmp = closure_14();
  const tmp2 = launchPadPullTabState(gestureState[9])();
  LAUNCH_PAD_MARGIN = tmp2;
  const backgroundColor = tmp.pullTabClosed.backgroundColor;
  const backgroundColor2 = tmp.pullTabOpened.backgroundColor;
  const tmp3 = launchPadPullTabState(gestureState[10])({ launchPadSharedState, launchPadPullTabState });
  hitSlop = tmp3;
  let obj = launchPadSharedState(gestureState[8]);
  class U {
    constructor() {
      let interpolateColorResult;
      let items2;
      let obj10;
      let obj11;
      let obj12;
      let obj6;
      let obj8;
      if (closure_7.get()) {
        let interpolateResult;
        let tmp5;
        let num5;
        if (!gestureState.get().active) {
          interpolateResult = metroImportAll;
        }
        if (launchPadSharedState.get() > 0.9) {
          tmp5 = -closure_4.get().width;
        } else {
          tmp5 = interpolateResult;
          if (gestureState.get().active) {
            let sum;
            if (gestureState.get().requiresPop) {
              sum = interpolateResult + 0.3 * obj2.get().positionOffsetX;
            } else {
              sum = interpolateResult - 4;
            }
            tmp5 = sum;
          }
        }
        const position = launchPadPullTabState.get().position;
        const obj3 = launchPadPullTabState;
        if (launchPadSharedState.get() > 0) {
          num5 = LAUNCH_PAD_PULL_TAB_BORDER_RADIUS;
        } else {
          num5 = 0;
        }
        const interpolateColor = ReanimatedRexport.interpolateColor;
        ReanimatedRexport;
        const value = obj.get();
        const items = [0, closure_4];
        const items1 = [backgroundColor, backgroundColor2];
        const obj4 = { transform: items2, borderTopRightRadius: obj11.withSpring(num5, unpackModuleId), borderBottomRightRadius: obj12.withSpring(num5, unpackModuleId), backgroundColor: interpolateColorResult };
        const obj5 = { translateX: obj6.withSpring(tmp5, unpackModuleId) };
        interpolateColorResult = interpolateColor(value * closure_4.get().width, items, items1);
        items2 = [obj5, , ];
        obj6 = spring;
        const obj7 = { translateY: obj8.withSpring(position, unpackModuleId) };
        items2[1] = obj7;
        obj8 = spring;
        const obj9 = { scale: obj10.withSpring(obj3.get().scale, unpackModuleId) };
        items2[2] = obj9;
        obj10 = spring;
        obj11 = spring;
        obj12 = spring;
        return obj4;
      }
      const interpolate = ReanimatedRexport.interpolate;
      ReanimatedRexport;
      const value2 = launchPadSharedState.get();
      const items3 = [0, -closure_4.get().width - 16];
      interpolateResult = interpolate(value2, [0, 1], items3);
    }
  }
  const obj2 = { isMinimized: tmp3, gestureState, LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET, interpolate: launchPadSharedState(gestureState[8]).interpolate, launchPadSharedState, windowDimensions: tmp2, launchPadPullTabState, LAUNCH_PAD_PULL_TAB_BORDER_RADIUS: backgroundColor, interpolateColor: launchPadSharedState(gestureState[8]).interpolateColor, LAUNCH_PAD_MARGIN, backgroundColorStart: backgroundColor, backgroundColorEnd: backgroundColor2, withSpring: launchPadSharedState(gestureState[11]).withSpring, LAUNCH_PAD_SPRING_CONFIG };
  U.__closure = obj2;
  U.__workletHash = 3768918311497;
  U.__initData = __initData3;
  const animatedStyle = obj.useAnimatedStyle(U);
  let tmp5 = launchPadPullTabState(gestureState[7])();
  let closure_3 = tmp5;
  let obj3 = launchPadSharedState(gestureState[8]);
  const sharedValue = obj3.useSharedValue(undefined);
  let obj4 = launchPadSharedState(gestureState[8]);
  const fn = function _() {
    return closure_3.get();
  };
  fn.__closure = { keyboardHeight: tmp5 };
  fn.__workletHash = 14545769097570;
  fn.__initData = __initData;
  const fn2 = function s(arg0, arg1) {
    if (0 === launchPadSharedState.get()) {
      if (null != arg1) {
        if (arg0 !== arg1) {
          if (arg0 < arg1) {
            if (0 === arg0) {
              const result = updaters.setLaunchPadPullTabMinimized(false);
            }
            if (null == sharedValue.get()) {
              const result1 = obj3.set(arg1);
            }
            let value = obj3.get();
            if (value == null) {
              value = arg1;
            }
            const diff = 1 - arg0 / value;
            const result2 = launchPadPullTabState.get().offset * diff;
            const setLaunchPadPullTabPosition = updaters.setLaunchPadPullTabPosition;
            const sum = launchPadPullTabState.get().position + result2;
            const result3 = setLaunchPadPullTabPosition(sum, launchPadPullTabState.get().offset - result2);
          } else {
            const result4 = updaters.setLaunchPadPullTabMinimized(true);
            const obj4 = sharedValue;
            const tmp25 = updaters;
            if (null != sharedValue.get()) {
              const result5 = obj4.set(undefined);
            }
            const sum1 = arg0 + CHAT_INPUT_HEIGHT + 2 * closure_4;
            const obj = launchPadSharedState(gestureState[9]);
            const diff1 = obj.getWindowDimensionsWorklet({ ignoreKeyboard: true }).height - (launchPadPullTabState.get().position + backgroundColor2 + LAUNCH_PAD_PULL_TAB_SCALE_OFFSET);
            let num2 = 0;
            if (diff1 <= sum1) {
              num2 = sum1 - diff1;
            }
            if (0 < num2) {
              const setLaunchPadPullTabPosition2 = tmp25.setLaunchPadPullTabPosition;
              const diff2 = obj2.get().position - num2;
              const result6 = setLaunchPadPullTabPosition2(diff2, obj2.get().offset + num2);
            }
          }
        }
      }
    } else {
      const result7 = updaters.setLaunchPadPullTabMinimized(false);
    }
  };
  let obj5 = { launchPadSharedState, updaters, keyboardHeightOpened: sharedValue, launchPadPullTabState, CHAT_INPUT_HEIGHT, LAUNCH_PAD_MARGIN, getWindowDimensionsWorklet: launchPadSharedState(gestureState[9]).getWindowDimensionsWorklet, LAUNCH_PAD_PULL_TAB_HEIGHT: backgroundColor2, LAUNCH_PAD_PULL_TAB_SCALE_OFFSET };
  fn2.__closure = obj5;
  fn2.__workletHash = 8060927175361;
  fn2.__initData = __initData2;
  const animatedReaction = obj4.useAnimatedReaction(fn, fn2);
  let items = [tmp.pullTab, animatedStyle];
  let obj7 = {
    accessibilityRole: "button",
    accessibilityLabel: intl.string(launchPadSharedState(gestureState[12]).t.yTnIfb),
    hitSlop,
    style: tmp.pullTabButton,
    onTouchStart() {
      const result = updaters.setLaunchPadPullTabScale(React4);
    },
    onPress: launchPadPullTabState(gestureState[13]),
    children: null
  };
  const View = launchPadPullTabState(gestureState[8]).View;
  intl = launchPadSharedState(gestureState[12]).intl;
  return <View style={items}>{null}</View>;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadPullTab.tsx");

export default memoResult;
