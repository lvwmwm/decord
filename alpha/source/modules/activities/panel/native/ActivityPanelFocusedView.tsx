// Module ID: 19131
// Function ID: 19132
// Name: ActivityPanelFocusedView
// Dependencies: [19, 17, 5015, 4863, 4862, 5657, 18993, 1072, 11223, 11693, 21, 5014, 575, 1625, 504, 1491, 19122, 12074, 5095, 5080, 5254, 5637, 6018, 4935, 19124, 19132, 11725, 11793, 2]
// Exports: useBaseActivityPanelFocusedView

// Module 19131 (ActivityPanelFocusedView)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1625 */;
import native from "native" /* 5080 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import timing from "timing" /* 5254 */;
import spring from "spring" /* 5637 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11223 */;
import Constants2 from "Constants" /* 11693 */;
import EmbeddedActivityViewDefault from "EmbeddedActivityView" /* 11793 */;
import ActivityPanelStateContextDefault from "ActivityPanelStateContext" /* 19124 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import ChannelStore_mod from "ChannelStore" /* 4863 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4862 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5657 */;
import ActivityPanelNativeConstants from "ActivityPanelNativeConstants" /* 18993 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let importDefault;

let c10;
let c9;
let closure_12;
let closure_16;
let closure_17;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let unpackModuleId;
class BaseActivityPanelFocusedView {
  constructor(transitionState) {
    let children;
    let context;
    let hasActivity;
    let header;
    let items3;
    let items4;
    let items5;
    let styles;
    let tmp15;
    transitionState = transitionState.transitionState;
    const transitionCleanUp = transitionState.transitionCleanUp;
    const updateActivityPanelModeToPIP = transitionState.updateActivityPanelModeToPIP;
    ({ hasActivity, context } = transitionState);
    let closure_4;
    ({ children, header } = transitionState);
    let obj = transitionState(updateActivityPanelModeToPIP[14]);
    let items = [closure_4];
    const stateFromStores = obj.useStateFromStores(items, () => closure_4.useReducedMotion);
    const tmp2 = closure_19();
    closure_4 = tmp2;
    const tmp3 = transitionCleanUp(updateActivityPanelModeToPIP[15])();
    ChannelStore = tmp3;
    const tmp4 = transitionCleanUp(updateActivityPanelModeToPIP[13])();
    let closure_6 = tmp4;
    const context1 = stateFromStores.useContext(context);
    const wrapperDimensions = context1.wrapperDimensions;
    const wrapperOffset = context1.wrapperOffset;
    let obj2 = transitionState(updateActivityPanelModeToPIP[16]);
    const lockedWebView = obj2.useLockedWebView({ transitionState, hasActivity, context });
    const shown = lockedWebView.shown;
    const renderWebView = lockedWebView.renderWebView;
    const tmp7 = transitionCleanUp(updateActivityPanelModeToPIP[17])();
    let closure_10 = tmp7;
    const lg = transitionCleanUp(updateActivityPanelModeToPIP[12]).radii.lg;
    let obj3 = transitionState(updateActivityPanelModeToPIP[18]);
    const fn = function _() {
      let height;
      let items;
      let num8;
      let num = 0;
      if (!wrapperDimensions.isWindowLandscape) {
        num = lg;
      }
      let num2 = 0;
      if (IS_IOS) {
        num2 = closure_10.get();
      }
      let num3 = 0;
      const width = styles.width;
      const diff = styles.height - num2;
      if (!wrapperDimensions.isWindowLandscape) {
        num3 = closure_6.top;
      }
      let obj = shown;
      const diff1 = diff - num3;
      if (shown.get()) {
        height = wrapperOffset.get().y;
      } else {
        height = tmp3.height;
      }
      function transitionComplete() {
        let flag = arg0;
        if (arg0 === undefined) {
          flag = false;
        }
        if (flag) {
          flag = closure_1_0 === transitionState(updateActivityPanelModeToPIP[19]).TransitionStates.YEETED;
        }
        if (flag) {
          const obj = transitionState(updateActivityPanelModeToPIP[18]);
          obj.runOnJS(transitionCleanUp)();
        }
      }
      transitionComplete.__closure = { transitionState, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, transitionCleanUp };
      transitionComplete.__workletHash = 16073739070225;
      transitionComplete.__initData = __initData;
      let num4 = 0;
      ({ transitionState, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, transitionCleanUp });
      const tmp8 = transitionState;
      if (stateFromStores) {
        num4 = 0;
        if (obj.get()) {
          num4 = 1 - wrapperOffset.get().y / tmp3.height;
        }
      }
      let num6 = 1;
      if (stateFromStores) {
        const withTiming = timing.withTiming;
        let str2 = "animate-always";
        const tmp9Result = timing;
        if (obj.get()) {
          str2 = "animate-always";
          if (wrapperOffset.get().gestureActive) {
            str2 = "animate-never";
          }
        }
        num6 = withTiming(num4, tmp14, str2, transitionComplete);
      }
      size = { opacity: num6, transform: items, top: num8, width, height: diff1, borderTopStartRadius: num, borderTopEndRadius: num };
      let num7 = 0;
      if (!stateFromStores) {
        const withSpring = spring.withSpring;
        const tmp9Result2 = spring;
        if (wrapperOffset.get().gestureActive) {
          let tmp23;
          if (tmp8 !== native.TransitionStates.YEETED) {
            tmp23 = metroImportDefault;
          }
          num7 = withSpring(height, tmp23, "animate-always", transitionComplete);
        }
        tmp23 = metroImportAll;
      }
      items = [{ translateY: num7 }];
      num8 = 0;
      if (!wrapperDimensions.isWindowLandscape) {
        num8 = closure_6.top;
      }
      return size;
    };
    fn.__closure = { wrapperDimensions, lg, IS_IOS, animatedKeyboardHeight: tmp7, windowDimensions: tmp3, safeArea: tmp4, shown, wrapperOffset, transitionState, TransitionStates: transitionState(updateActivityPanelModeToPIP[19]).TransitionStates, runOnJS: transitionState(updateActivityPanelModeToPIP[18]).runOnJS, transitionCleanUp, reduceMotion: stateFromStores, withTiming: transitionState(updateActivityPanelModeToPIP[20]).withTiming, REDUCED_MOTION_TIMING, withSpring: transitionState(updateActivityPanelModeToPIP[21]).withSpring, ACTIVITY_LAYOUT_PHYSICS_GESTURE: wrapperDimensions, ACTIVITY_LAYOUT_PHYSICS_DEFAULT: wrapperOffset };
    fn.__workletHash = 3642447648301;
    fn.__initData = __initData;
    ({ wrapperDimensions, lg, IS_IOS, animatedKeyboardHeight: tmp7, windowDimensions: tmp3, safeArea: tmp4, shown, wrapperOffset, transitionState, TransitionStates: transitionState(updateActivityPanelModeToPIP[19]).TransitionStates, runOnJS: transitionState(updateActivityPanelModeToPIP[18]).runOnJS, transitionCleanUp, reduceMotion: stateFromStores, withTiming: transitionState(updateActivityPanelModeToPIP[20]).withTiming, REDUCED_MOTION_TIMING, withSpring: transitionState(updateActivityPanelModeToPIP[21]).withSpring, ACTIVITY_LAYOUT_PHYSICS_GESTURE: wrapperDimensions, ACTIVITY_LAYOUT_PHYSICS_DEFAULT: wrapperOffset });
    const animatedStyle = obj3.useAnimatedStyle(fn);
    const obj5 = transitionState(updateActivityPanelModeToPIP[18]);
    class T {
      constructor() {
        let num;
        let obj3;
        const obj = wrapperOffset;
        if (wrapperOffset.get().gestureActive) {
          num = 1 - obj.get().y / styles.height;
        } else {
          num = 0;
          if (shown.get()) {
            num = 1;
          }
        }
        const obj2 = { opacity: obj3.withSpring(num, metroImportAll) };
        obj3 = spring;
        return obj2;
      }
    }
    T.__closure = { wrapperOffset, shown, windowDimensions: tmp3, withSpring: transitionState(updateActivityPanelModeToPIP[21]).withSpring, ACTIVITY_LAYOUT_PHYSICS_DEFAULT: wrapperOffset };
    T.__workletHash = 8351375063373;
    T.__initData = __initData2;
    const items1 = [animatedStyle, tmp2.wrapper];
    ({ wrapperOffset, shown, windowDimensions: tmp3, withSpring: transitionState(updateActivityPanelModeToPIP[21]).withSpring, ACTIVITY_LAYOUT_PHYSICS_DEFAULT: wrapperOffset });
    const animatedStyle1 = obj5.useAnimatedStyle(T);
    const memo = stateFromStores.useMemo(() => {
      const items = [closure_4.wrapper, animatedStyle];
      return items;
    }, items1);
    const fn2 = function f() {
      let num = 0;
      if (IS_IOS) {
        num = closure_10.get();
      }
      size = { width: wrapperDimensions.width, height: wrapperDimensions.height - num };
      return size;
    };
    fn2.__closure = { IS_IOS, animatedKeyboardHeight: tmp7, wrapperDimensions };
    fn2.__workletHash = 10029372697959;
    fn2.__initData = __initData3;
    const items2 = [updateActivityPanelModeToPIP];
    const obj7 = transitionState(updateActivityPanelModeToPIP[18]);
    const animatedStyle2 = obj7.useAnimatedStyle(fn2);
    const callback = stateFromStores.useCallback(() => {
      updateActivityPanelModeToPIP();
    }, items2);
    const obj8 = { theme: ThemeTypes.DARK, children: items4 };
    const ThemeContextProvider = transitionState(updateActivityPanelModeToPIP[19]).ThemeContextProvider;
    const tmp14 = closure_16;
    const obj9 = { style: items3, pointerEvents: "none" };
    items3 = [tmp2.shade, animatedStyle1];
    items4 = [closure_16(transitionCleanUp(updateActivityPanelModeToPIP[18]).View, obj9), ];
    const obj10 = { style: memo, nativeID: "activity-panel-focused-view", accessibilityViewIsModal: true, onAccessibilityEscape: callback, children: items5 };
    const AccessibilityViewAnimated = transitionState(updateActivityPanelModeToPIP[22]).AccessibilityViewAnimated;
    const obj11 = { style: animatedStyle2, children: tmp15 };
    tmp15 = null;
    const View = transitionCleanUp(updateActivityPanelModeToPIP[18]).View;
    if (renderWebView) {
      tmp15 = null;
      if (hasActivity) {
        tmp15 = children;
      }
    }
    items5 = [tmp14(View, obj11), header];
    items4[1] = closure_17(AccessibilityViewAnimated, obj10);
    return closure_17(ThemeContextProvider, obj8);
  }
}
const StyleSheet = react_native.StyleSheet;
let ChannelStore = ChannelStore_mod;
({ ACTIVITY_LAYOUT_PHYSICS_GESTURE: metroImportDefault, ACTIVITY_LAYOUT_PHYSICS_DEFAULT: metroImportAll, ActivityPanelModes: c9 } = ActivityPanelConstants);
({ DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG: c10, DEFAULT_PORTRAIT_LETTERBOX_CONFIG: unpackModuleId, DEFAULT_LANDSCAPE_PILLERBOX_CONFIG: closure_12 } = ActivityPanelNativeConstants);
const ThemeTypes = Constants.ThemeTypes;
const IS_IOS = VoicePanelConstants.IS_IOS;
const ActivityLayoutMode = Constants2.ActivityLayoutMode;
({ jsx: closure_16, jsxs: closure_17 } = Fragment);
const authStore5 = { duration: 300 };
let createStyles = createStyles_mod;
let obj = { wrapper: obj2, shade: obj3 };
obj2 = { position: "absolute", flexDirection: "row", alignItems: "center", justifyContent: "center", overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BLACK };
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_19 = createStyles(obj);
const __initData = { code: "function ActivityPanelFocusedViewTsx1(){const{wrapperDimensions,lg,IS_IOS,animatedKeyboardHeight,windowDimensions,safeArea,shown,wrapperOffset,transitionState,TransitionStates,runOnJS,transitionCleanUp,reduceMotion,withTiming,REDUCED_MOTION_TIMING,withSpring,ACTIVITY_LAYOUT_PHYSICS_GESTURE,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const topBorderRadius=!wrapperDimensions.isWindowLandscape?lg:0;const keyboardHeight=IS_IOS?animatedKeyboardHeight.get():0;const width=windowDimensions.width;const height=windowDimensions.height-keyboardHeight-(!wrapperDimensions.isWindowLandscape?safeArea.top:0);const y=shown.get()?wrapperOffset.get().y:windowDimensions.height;function transitionComplete(finished=false){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}const targetOpacity=reduceMotion&&shown.get()?1-wrapperOffset.get().y/windowDimensions.height:0;return{opacity:reduceMotion?withTiming(targetOpacity,REDUCED_MOTION_TIMING,shown.get()&&wrapperOffset.get().gestureActive?'animate-never':'animate-always',transitionComplete):1,transform:[{translateY:!reduceMotion?withSpring(y,wrapperOffset.get().gestureActive&&transitionState!==TransitionStates.YEETED?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always',transitionComplete):0}],top:!wrapperDimensions.isWindowLandscape?safeArea.top:0,width:width,height:height,borderTopStartRadius:topBorderRadius,borderTopEndRadius:topBorderRadius};}" };
let closure_21 = { code: "function transitionComplete_ActivityPanelFocusedViewTsx2(finished=false){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}" };
const authStore6 = { code: "function ActivityPanelFocusedViewTsx3(){const{wrapperOffset,shown,windowDimensions,withSpring,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const opacity=function(){if(!wrapperOffset.get().gestureActive){return shown.get()?1:0;}return 1-wrapperOffset.get().y/windowDimensions.height;}();return{opacity:withSpring(opacity,ACTIVITY_LAYOUT_PHYSICS_DEFAULT)};}" };
const __initData3 = { code: "function ActivityPanelFocusedViewTsx4(){const{IS_IOS,animatedKeyboardHeight,wrapperDimensions}=this.__closure;const keyboardHeight=IS_IOS?animatedKeyboardHeight.get():0;return{width:wrapperDimensions.width,height:wrapperDimensions.height-keyboardHeight};}" };
const memoResult = react.memo(function ActivityPanelFocusedView(transitionState) {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  let channel;
  let memo;
  let memo1;
  let obj = transitionState(channel[14]);
  const items = [memo1, memo];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const connectedActivityLocation = memo1.getConnectedActivityLocation();
    const selfEmbeddedActivityForLocation = memo1.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
    const obj = transitionState(channel[23]);
    const obj2 = { channel: memo.getChannel(obj.getEmbeddedActivityLocationChannelId(connectedActivityLocation)), hasActivity: null != selfEmbeddedActivityForLocation };
    return obj2;
  }, []);
  channel = stateFromStoresObject.channel;
  const hasActivity = stateFromStoresObject.hasActivity;
  const tmp2 = transitionCleanUp(channel[24]);
  const tmp3 = transitionCleanUp(channel[13])();
  let closure_0 = tmp3;
  let obj2 = hasActivity;
  const wrapperDimensions = hasActivity.useContext(tmp2).wrapperDimensions;
  let closure_1 = tmp5;
  const tmp6 = wrapperDimensions.isLandscape && !wrapperDimensions.isWindowLandscape ? closure_11 : closure_10;
  const items1 = [tmp3.right, !wrapperDimensions.isLandscape && wrapperDimensions.isWindowLandscape];
  memo = obj2.useMemo(() => {
    let obj;
    let obj2;
    const tmp = closure_1;
    if (tmp) {
      obj = closure_2_12;
    } else {
      obj = { right: obj2 };
      const _Math = Math;
      obj2 = { disable: false, override: Math.max(64, right.right) };
    }
    return obj;
  }, items1);
  const portraitSafeAreasConfig = tmp6;
  memo1 = obj2.useMemo(() => closure_1_16(transitionCleanUp(channel[25]), {}), []);
  const updateActivityPanelModeToPIP = obj2.useCallback(() => {
    const obj = transitionState(channel[26]);
    const result = obj.updateActivityPanelMode(constants.PIP);
  }, []);
  const items2 = [transitionState, transitionCleanUp, updateActivityPanelModeToPIP, hasActivity, memo1, channel, tmp6, memo];
  return obj2.useMemo(() => {
    let obj2;
    const obj = { transitionState, transitionCleanUp, updateActivityPanelModeToPIP, hasActivity, context: ActivityPanelStateContextDefault, header: memo1, children: authStore4(EmbeddedActivityViewDefault, obj2) };
    obj2 = { channel, layoutMode: ActivityLayoutMode.FOCUSED, portraitSafeAreasConfig, landscapeSafeAreasConfig: memo };
    return authStore4(BaseActivityPanelFocusedView, obj);
  }, items2);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelFocusedView.tsx");

export default memoResult;
export function useBaseActivityPanelFocusedView(context) {
  let closure_1;
  let items;
  context = context.context;
  const tmp = useSafeAreaInsetsDefault();
  let closure_0 = tmp;
  const wrapperDimensions = react.useContext(context).wrapperDimensions;
  importDefault = tmp3;
  const obj2 = {
    portraitSafeAreasConfig: wrapperDimensions.isLandscape && !wrapperDimensions.isWindowLandscape ? closure_11 : closure_10,
    landscapeSafeAreasConfig: react.useMemo(() => {
      let obj;
      let obj2;
      const tmp = closure_1;
      if (tmp) {
        obj = closure_2_12;
      } else {
        obj = { right: obj2 };
        const _Math = Math;
        obj2 = { disable: false, override: Math.max(64, right.right) };
      }
      return obj;
    }, items)
  };
  items = [tmp.right, !wrapperDimensions.isLandscape && wrapperDimensions.isWindowLandscape];
  return obj2;
}
export { BaseActivityPanelFocusedView };
