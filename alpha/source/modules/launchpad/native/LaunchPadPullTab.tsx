// Module ID: 19470
// Function ID: 19471
// Name: LaunchPadPullTab
// Dependencies: [19, 17, 11690, 13037, 21, 5142, 575, 12247, 1652, 13042, 19471, 5763, 1113, 19405, 16002, 2]

// Module 19470 (LaunchPadPullTab)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import ChatInputConstants from "ChatInputConstants" /* 13037 */;
import useWindowDimensionsSharedValueDefault from "useWindowDimensionsSharedValue" /* 13042 */;
import useLaunchPadPullTabMinimizedDefault from "useLaunchPadPullTabMinimized" /* 19471 */;
import react from "react" /* 19 */;
import LaunchPadConstants from "LaunchPadConstants" /* 11690 */;
import createStyles_mod from "createStyles" /* 5142 */;
import size_mod from "module_2" /* 2 */;

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
let tmp2;
let unpackModuleId;
const _modDef1652 = tmp2(1652);
const useAnimatedKeyboardHeightDefault = tmp2(12247);
const showLaunchPadDefault = tmp2(19405);
const Pressable = react_native.Pressable;
({ LAUNCH_PAD_MARGIN: closure_4, LAUNCH_PAD_PULL_TAB_BORDER_RADIUS } = LaunchPadConstants);
const LAUNCH_PAD_PULL_TAB_HEIGHT = LaunchPadConstants.LAUNCH_PAD_PULL_TAB_HEIGHT;
({ LAUNCH_PAD_PULL_TAB_HIT_SLOP: metroImportDefault, LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET: metroImportAll, LAUNCH_PAD_PULL_TAB_SCALE_FACTOR: c9, LAUNCH_PAD_PULL_TAB_SCALE_OFFSET: c10, LAUNCH_PAD_PULL_TAB_WIDTH, LAUNCH_PAD_SPRING_CONFIG: unpackModuleId } = LaunchPadConstants);
const CHAT_INPUT_HEIGHT = ChatInputConstants.CHAT_INPUT_HEIGHT;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
const obj = { pullTab: size, pullTabButton: { width: LAUNCH_PAD_PULL_TAB_WIDTH, height: LAUNCH_PAD_PULL_TAB_HEIGHT, justifyContent: "center", alignItems: "center" }, pullTabOpened: obj2, pullTabClosed: obj3 };
size = { position: "absolute", right: 0, width: LAUNCH_PAD_PULL_TAB_WIDTH, height: LAUNCH_PAD_PULL_TAB_HEIGHT, borderTopLeftRadius: LAUNCH_PAD_PULL_TAB_BORDER_RADIUS, borderBottomLeftRadius: LAUNCH_PAD_PULL_TAB_BORDER_RADIUS, borderWidth: 1, borderTopWidth: 1, borderColor: "rgba(0, 0, 0, 0.08)" };
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_MOBILE_NAVIGATOR_X);
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj3 = { backgroundColor: nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND };
let closure_14 = createStyles(obj);
let closure_15 = { code: "(function LaunchPadPullTabTsx1(){let[keyboardHeight]=this.__closure;return keyboardHeight.get();})" };
let closure_16 = { code: "(function LaunchPadPullTabTsx2(keyboardHeight,keyboardHeightPrev){let[launchPadSharedState,updaters,keyboardHeightOpened,launchPadPullTabState,CHAT_INPUT_HEIGHT,LAUNCH_PAD_MARGIN,getWindowDimensionsWorklet,LAUNCH_PAD_PULL_TAB_HEIGHT,LAUNCH_PAD_PULL_TAB_SCALE_OFFSET]=this.__closure;if(launchPadSharedState.get()!==0){updaters.setLaunchPadPullTabMinimized(false);return;}if(keyboardHeightPrev==null||keyboardHeight===keyboardHeightPrev){return;}if(keyboardHeight<keyboardHeightPrev){var _keyboardHeightOpened;if(keyboardHeight===0){updaters.setLaunchPadPullTabMinimized(false);}if(keyboardHeightOpened.get()==null){keyboardHeightOpened.set(keyboardHeightPrev);}const keyboardClosePercent=1-keyboardHeight/((_keyboardHeightOpened=keyboardHeightOpened.get())!==null&&_keyboardHeightOpened!==void 0?_keyboardHeightOpened:keyboardHeightPrev);const keyboardOffsetRetractionAmount=launchPadPullTabState.get().offset*keyboardClosePercent;updaters.setLaunchPadPullTabPosition(launchPadPullTabState.get().position+keyboardOffsetRetractionAmount,launchPadPullTabState.get().offset-keyboardOffsetRetractionAmount);}else{updaters.setLaunchPadPullTabMinimized(true);if(keyboardHeightOpened.get()!=null){keyboardHeightOpened.set(undefined);}const keyboardWithChatInput=keyboardHeight+CHAT_INPUT_HEIGHT+LAUNCH_PAD_MARGIN*2;const spaceUnderPullTab=getWindowDimensionsWorklet({ignoreKeyboard:true}).height-(launchPadPullTabState.get().position+LAUNCH_PAD_PULL_TAB_HEIGHT+LAUNCH_PAD_PULL_TAB_SCALE_OFFSET);const offset=spaceUnderPullTab>keyboardWithChatInput?0:keyboardWithChatInput-spaceUnderPullTab;if(offset>0){updaters.setLaunchPadPullTabPosition(launchPadPullTabState.get().position-offset,launchPadPullTabState.get().offset+offset);}}})" };
let closure_17 = { code: "(function LaunchPadPullTabTsx3(){let[isMinimized,gestureState,LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET,interpolate,launchPadSharedState,windowDimensions,launchPadPullTabState,LAUNCH_PAD_PULL_TAB_BORDER_RADIUS,interpolateColor,LAUNCH_PAD_MARGIN,backgroundColorStart,backgroundColorEnd,withSpring,LAUNCH_PAD_SPRING_CONFIG]=this.__closure;let translateX=isMinimized.get()&&!gestureState.get().active?LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET:interpolate(launchPadSharedState.get(),[0,1],[0,-(windowDimensions.get().width-16)]);if(launchPadSharedState.get()>0.9){translateX=-windowDimensions.get().width;}else if(gestureState.get().active){if(gestureState.get().requiresPop){translateX+=gestureState.get().positionOffsetX*0.3;}else{translateX-=4;}}const translateY=launchPadPullTabState.get().position;const borderRadius=launchPadSharedState.get()<=0&&!gestureState.get().active?0:LAUNCH_PAD_PULL_TAB_BORDER_RADIUS;const backgroundColor=interpolateColor(launchPadSharedState.get()*windowDimensions.get().width,[0,LAUNCH_PAD_MARGIN],[backgroundColorStart,backgroundColorEnd]);return{transform:[{translateX:withSpring(translateX,LAUNCH_PAD_SPRING_CONFIG)},{translateY:withSpring(translateY,LAUNCH_PAD_SPRING_CONFIG)},{scale:withSpring(launchPadPullTabState.get().scale,LAUNCH_PAD_SPRING_CONFIG)}],borderTopRightRadius:withSpring(borderRadius,LAUNCH_PAD_SPRING_CONFIG),borderBottomRightRadius:withSpring(borderRadius,LAUNCH_PAD_SPRING_CONFIG),backgroundColor:backgroundColor};})" };
const memoResult = react.memo(function LaunchPadPullTab(gestureState) {
  let intl;
  let launchPadPullTabState;
  let launchPadSharedState;
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
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp39;
  let tmp9;
  let updaters;
  ({ launchPadSharedState, launchPadPullTabState, updaters } = gestureState);
  gestureState = gestureState.gestureState;
  const tmp = closure_14();
  let tmp2 = importDefault;
  let tmp4 = useWindowDimensionsSharedValueDefault();
  const backgroundColor = tmp.pullTabClosed.backgroundColor;
  const backgroundColor2 = tmp.pullTabOpened.backgroundColor;
  const tmp5 = useLaunchPadPullTabMinimizedDefault({ launchPadSharedState, launchPadPullTabState });
  let items = [closure_17, tmp5, gestureState, closure_8, , , , , , , , , , , ];
  const useAnimatedStyle = updaters(1652).useAnimatedStyle;
  const tmp7 = updaters(1652);
  items[4] = updaters(1652).interpolate;
  items[5] = launchPadSharedState;
  items[6] = tmp4;
  items[7] = launchPadPullTabState;
  items[8] = LAUNCH_PAD_PULL_TAB_BORDER_RADIUS;
  items[9] = updaters(1652).interpolateColor;
  items[10] = closure_4;
  items[11] = backgroundColor;
  items[12] = backgroundColor2;
  items[13] = updaters(5763).withSpring;
  items[14] = closure_11;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  let c10;
  let c11;
  let c12;
  let c13;
  [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23] = items;
  const tmp8 = closure_4;
  class LaunchPadPullTabTsx3 {
    constructor() {
      let items2;
      let tmp14;
      if (_undefined.get()) {
        let tmp2;
        let tmp4;
        let num5;
        if (!_undefined2.get().active) {
          tmp2 = c2;
        }
        if (_undefined4.get() > 0.9) {
          tmp4 = -_undefined5.get().width;
        } else {
          tmp4 = tmp2;
          if (_undefined2.get().active) {
            let sum;
            if (_undefined2.get().requiresPop) {
              sum = tmp2 + 0.3 * obj2.get().positionOffsetX;
            } else {
              sum = tmp2 - 4;
            }
            tmp4 = sum;
          }
        }
        const position = _undefined6.get().position;
        const obj3 = _undefined6;
        if (_undefined4.get() > 0) {
          num5 = c7;
        } else {
          num5 = 0;
        }
        const value = obj.get();
        const items = [0, c9];
        const items1 = [c10, c11];
        const obj4 = { transform: items2, borderTopRightRadius: _undefined8(num5, c13), borderBottomRightRadius: _undefined8(num5, c13), backgroundColor: tmp14 };
        const obj5 = { translateX: _undefined8(tmp4, c13) };
        items2 = [obj5, , ];
        tmp14 = _undefined7(value * _undefined5.get().width, items, items1);
        items2[1] = { translateY: _undefined8(position, c13) };
        const obj6 = { translateY: _undefined8(position, c13) };
        items2[2] = { scale: _undefined8(obj3.get().scale, c13) };
        const obj7 = { scale: _undefined8(obj3.get().scale, c13) };
        return obj4;
      }
      const value2 = _undefined4.get();
      const items3 = [0, -_undefined5.get().width - 16];
      tmp2 = _undefined3(value2, [0, 1], items3);
    }
  }
  let items1 = [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23];
  LaunchPadPullTabTsx3.__closure = items1;
  LaunchPadPullTabTsx3.__workletHash = 9280703221520;
  LaunchPadPullTabTsx3.__initData = tmp9;
  const animatedStyle = useAnimatedStyle(LaunchPadPullTabTsx3);
  const tmp25 = useAnimatedKeyboardHeightDefault();
  const tmp6Result = updaters(1652);
  const sharedValue = tmp6Result.useSharedValue(undefined);
  let items2 = [closure_15, tmp25];
  c0 = undefined;
  [tmp28, tmp29] = items2;
  const tmp6Result2 = updaters(1652);
  class LaunchPadPullTabTsx1 {
    constructor() {
      return _undefined.get();
    }
  }
  let items3 = [tmp29];
  LaunchPadPullTabTsx1.__closure = items3;
  LaunchPadPullTabTsx1.__workletHash = 13083151348443;
  LaunchPadPullTabTsx1.__initData = tmp28;
  const items4 = [closure_16, launchPadSharedState, updaters, sharedValue, launchPadPullTabState, CHAT_INPUT_HEIGHT, tmp8, , , ];
  const useAnimatedReaction = tmp6Result2.useAnimatedReaction;
  items4[7] = updaters(13042).getWindowDimensionsWorklet;
  items4[8] = LAUNCH_PAD_PULL_TAB_HEIGHT;
  items4[9] = closure_10;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  [tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39] = items4;
  class LaunchPadPullTabTsx2 {
    constructor(arg0, arg1) {
      if (0 === _undefined.get()) {
        if (null != arg1) {
          if (arg0 !== arg1) {
            if (arg0 < arg1) {
              if (0 === arg0) {
                const result = _undefined2.setLaunchPadPullTabMinimized(false);
              }
              if (null == _undefined3.get()) {
                const result1 = obj2.set(arg1);
              }
              let value = obj2.get();
              if (value == null) {
                value = arg1;
              }
              const diff = 1 - arg0 / value;
              const result2 = _undefined4.get().offset * diff;
              const setLaunchPadPullTabPosition = _undefined2.setLaunchPadPullTabPosition;
              const sum = _undefined4.get().position + result2;
              const result3 = setLaunchPadPullTabPosition(sum, _undefined4.get().offset - result2);
            } else {
              const result4 = _undefined2.setLaunchPadPullTabMinimized(true);
              const obj3 = _undefined3;
              const tmp24 = _undefined2;
              if (null != _undefined3.get()) {
                const result5 = obj3.set(undefined);
              }
              const sum1 = arg0 + c4 + 2 * c5;
              const diff1 = _undefined5({ ignoreKeyboard: true }).height - (_undefined4.get().position + c7 + c8);
              let num2 = 0;
              if (diff1 <= sum1) {
                num2 = sum1 - diff1;
              }
              if (0 < num2) {
                const setLaunchPadPullTabPosition2 = tmp24.setLaunchPadPullTabPosition;
                const diff2 = obj.get().position - num2;
                const result6 = setLaunchPadPullTabPosition2(diff2, obj.get().offset + num2);
              }
            }
          }
        }
      } else {
        const result7 = _undefined2.setLaunchPadPullTabMinimized(false);
      }
    }
  }
  const items5 = [tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39];
  LaunchPadPullTabTsx2.__closure = items5;
  LaunchPadPullTabTsx2.__workletHash = 14150743699512;
  LaunchPadPullTabTsx2.__initData = tmp30;
  const animatedReaction = useAnimatedReaction(LaunchPadPullTabTsx1, LaunchPadPullTabTsx2);
  const items6 = [tmp.pullTab, animatedStyle];
  const obj2 = {
    accessibilityRole: "button",
    accessibilityLabel: intl.string(tmp6(1113).t.yTnIfb),
    hitSlop,
    style: tmp.pullTabButton,
    onTouchStart() {
      const result = updaters.setLaunchPadPullTabScale(React4);
    },
    onPress: showLaunchPadDefault,
    children: null
  };
  const View = _modDef1652.View;
  intl = tmp6(1113).intl;
  return <View style={items6}>{null}</View>;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadPullTab.tsx");

export default memoResult;
