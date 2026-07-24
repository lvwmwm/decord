// Module ID: 15752
// Function ID: 121426
// Name: useBaseActivityPanelFocusedView
// Dependencies: [31, 27, 4122, 1348, 1347, 4155, 10256, 15747, 653, 10047, 33, 4130, 689, 1557, 566, 1450, 15742, 15694, 3991, 4476, 4131, 4542, 3842, 4525, 3748, 15744, 15753, 10515, 10630, 2]

// Module 15752 (useBaseActivityPanelFocusedView)
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_createForOfIteratorHelperLoose";
import { ActivityLayoutMode } from "items3";
import ActivityPanelModes from "ActivityPanelModes";
import DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG from "DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG";
import { ThemeTypes } from "ME";
import { IS_IOS } from "VoicePanelModes";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_16;
let closure_17;
let closure_8;
let closure_9;
let require = arg1;
function useBaseActivityPanelFocusedView(context) {
  let importDefault;
  const tmp = importDefault(1557)();
  const require = tmp;
  const wrapperDimensions = importAllResult.useContext(context.context).wrapperDimensions;
  importDefault = tmp3;
  const items = [tmp.right, !wrapperDimensions.isLandscape && wrapperDimensions.isWindowLandscape];
  return {
    portraitSafeAreasConfig: wrapperDimensions.isLandscape && !wrapperDimensions.isWindowLandscape ? closure_12 : closure_11,
    landscapeSafeAreasConfig: importAllResult.useMemo(() => {
      if (c1) {
        let obj = outer1_13;
      } else {
        obj = {};
        obj = { disable: false };
        const _Math = Math;
        obj.override = Math.max(64, globalThis.right);
        obj.right = obj;
      }
      return obj;
    }, items)
  };
}
class BaseActivityPanelFocusedView {
  constructor(arg0) {
    transitionState = global.transitionState;
    transitionCleanUp = global.transitionCleanUp;
    updateActivityPanelModeToPIP = global.updateActivityPanelModeToPIP;
    closure_2 = updateActivityPanelModeToPIP;
    context = global.context;
    ({ children, header, hasActivity } = global);
    obj = require("initialize");
    items = [];
    items[0] = c4;
    stateFromStores = obj.useStateFromStores(items, () => tmp2.useReducedMotion);
    defineProperty = stateFromStores;
    tmp2 = c19();
    c4 = tmp2;
    tmp3 = require("useWindowDimensions")();
    c5 = tmp3;
    tmp4 = require("useSafeAreaInsets")();
    c6 = tmp4;
    context = defineProperty.useContext(context);
    wrapperDimensions = context.wrapperDimensions;
    wrapperOffset = context.wrapperOffset;
    obj2 = require("_createForOfIteratorHelperLoose");
    lockedWebView = obj2.useLockedWebView({ transitionState, context });
    shown = lockedWebView.shown;
    tmp7 = require("useAnimatedKeyboardHeight")();
    ActivityPanelModes = tmp7;
    lg = require("_createForOfIteratorHelperLoose").radii.lg;
    obj3 = require("module_3991");
    fn = function _() {
      let num = 0;
      if (!wrapperDimensions.isWindowLandscape) {
        num = lg;
      }
      let num2 = 0;
      if (outer1_15) {
        num2 = tmp7.get();
      }
      let num3 = 0;
      const diff = tmp3.height - num2;
      if (!wrapperDimensions.isWindowLandscape) {
        num3 = tmp4.top;
      }
      const diff1 = diff - num3;
      if (shown.get()) {
        let height = wrapperOffset.get().y;
      } else {
        height = tmp3.height;
      }
      tmp7 = (() => {
        function transitionComplete() {
          let flag = arg0;
          if (arg0 === undefined) {
            flag = false;
          }
          if (flag) {
            flag = outer2_0 === transitionState(updateActivityPanelModeToPIP[19]).TransitionStates.YEETED;
          }
          if (flag) {
            transitionState(updateActivityPanelModeToPIP[18]).runOnJS(outer2_1)();
            const obj = transitionState(updateActivityPanelModeToPIP[18]);
          }
        }
        transitionComplete.__closure = { transitionState: outer1_0, TransitionStates: transitionState(updateActivityPanelModeToPIP[19]).TransitionStates, runOnJS: transitionState(updateActivityPanelModeToPIP[18]).runOnJS, transitionCleanUp: outer1_1 };
        transitionComplete.__workletHash = 16073739070225;
        transitionComplete.__initData = outer2_21;
        return transitionComplete;
      })();
      let num4 = 0;
      if (stateFromStores) {
        num4 = 0;
        if (shown.get()) {
          num4 = 1 - wrapperOffset.get().y / tmp3.height;
        }
      }
      let obj = {};
      let num6 = 1;
      if (stateFromStores) {
        const obj2 = transitionState(updateActivityPanelModeToPIP[20]);
        let str2 = "animate-always";
        if (shown.get()) {
          str2 = "animate-always";
          if (wrapperOffset.get().gestureActive) {
            str2 = "animate-never";
          }
        }
        num6 = obj2.withTiming(num4, tmp13, str2, tmp7);
      }
      obj.opacity = num6;
      obj = {};
      if (stateFromStores) {
        obj.translateY = 0;
        const items = [obj];
        obj.transform = items;
        let num10 = 0;
        if (!wrapperDimensions.isWindowLandscape) {
          num10 = tmp4.top;
        }
        obj.top = num10;
        obj.width = tmp3.width;
        obj.height = diff1;
        obj.borderTopStartRadius = num;
        obj.borderTopEndRadius = num;
        return obj;
      } else {
        const obj4 = transitionState(updateActivityPanelModeToPIP[21]);
        if (!wrapperOffset.get().gestureActive) {
          let tmp27 = shown;
          obj4.withSpring(height, tmp27, "animate-always", tmp7);
        }
        tmp27 = wrapperOffset;
      }
    };
    obj = { wrapperDimensions, lg, IS_IOS, animatedKeyboardHeight: tmp7, windowDimensions: tmp3, safeArea: tmp4, shown, wrapperOffset, transitionState, TransitionStates: require("_createForOfIteratorHelperLoose").TransitionStates, runOnJS: require("module_3991").runOnJS, transitionCleanUp, reduceMotion: stateFromStores, withTiming: require("withTiming").withTiming, REDUCED_MOTION_TIMING: jsxs, withSpring: require("withSpring").withSpring, ACTIVITY_LAYOUT_PHYSICS_GESTURE: wrapperOffset, ACTIVITY_LAYOUT_PHYSICS_DEFAULT: shown };
    fn.__closure = obj;
    fn.__workletHash = 3642447648301;
    fn.__initData = c20;
    animatedStyle = obj3.useAnimatedStyle(fn);
    _ = animatedStyle;
    obj5 = require("module_3991");
    class T {
      constructor() {
        if (wrapperOffset.get().gestureActive) {
          tmp2 = wrapperOffset;
          tmp3 = closure_5;
          num2 = 1;
          num = 1 - wrapperOffset.get().y / closure_5.height;
        } else {
          tmp = shown;
          num = 0;
          if (shown.get()) {
            num = 1;
          }
        }
        obj = {};
        obj2 = require("withSpring");
        obj.opacity = obj2.withSpring(num, shown);
        return obj;
      }
    }
    obj1 = { wrapperOffset, shown, windowDimensions: tmp3, withSpring: require("withSpring").withSpring, ACTIVITY_LAYOUT_PHYSICS_DEFAULT: shown };
    T.__closure = obj1;
    T.__workletHash = 8351375063373;
    T.__initData = c22;
    items1 = [, ];
    items1[0] = animatedStyle;
    items1[1] = tmp2.wrapper;
    animatedStyle1 = obj5.useAnimatedStyle(T);
    memo = defineProperty.useMemo(() => {
      const items = [tmp2.wrapper, animatedStyle];
      return items;
    }, items1);
    obj7 = require("module_3991");
    class A {
      constructor() {
        num = 0;
        if (outer1_15) {
          tmp = closure_10;
          num = closure_10.get();
        }
        obj = { width: wrapperDimensions.width };
        obj.height = wrapperDimensions.height - num;
        return obj;
      }
    }
    obj2 = { IS_IOS, animatedKeyboardHeight: tmp7, wrapperDimensions };
    A.__closure = obj2;
    A.__workletHash = 10029372697959;
    A.__initData = c23;
    items2 = [];
    items2[0] = updateActivityPanelModeToPIP;
    animatedStyle2 = obj7.useAnimatedStyle(A);
    callback = defineProperty.useCallback(() => {
      updateActivityPanelModeToPIP();
    }, items2);
    tmp13 = jsxs;
    obj3 = { theme: ThemeTypes.DARK };
    items3 = [, ];
    items3[0] = tmp2.shade;
    items3[1] = animatedStyle1;
    items4 = [, ];
    items4[0] = jsx(require("module_3991").View, { style: items3, pointerEvents: "none" });
    tmp14 = jsxs;
    obj4 = { style: null, nativeID: "activity-panel-focused-view", accessibilityViewIsModal: true };
    obj4.style = memo;
    obj4.onAccessibilityEscape = callback;
    tmp15 = jsx;
    obj5 = { style: animatedStyle2 };
    tmp16 = null;
    if (lockedWebView.renderWebView) {
      tmp16 = null;
      if (hasActivity) {
        tmp16 = children;
      }
    }
    obj5.children = tmp16;
    items5 = [, ];
    items5[0] = tmp15(require("module_3991").View, obj5);
    items5[1] = header;
    obj4.children = items5;
    items4[1] = tmp14(require("AccessibilityView").AccessibilityViewAnimated, obj4);
    obj3.children = items4;
    return tmp13(require("ManaContext").ThemeContextProvider, obj3);
  }
}
({ ACTIVITY_LAYOUT_PHYSICS_GESTURE: closure_8, ACTIVITY_LAYOUT_PHYSICS_DEFAULT: closure_9, ActivityPanelModes: closure_10 } = ActivityPanelModes);
({ DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG: closure_11, DEFAULT_PORTRAIT_LETTERBOX_CONFIG: closure_12, DEFAULT_LANDSCAPE_PILLERBOX_CONFIG: closure_13 } = DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
let closure_18 = { duration: 300 };
let obj = {};
obj = { position: "absolute", flexDirection: "row", alignItems: "center", justifyContent: "center", overflow: "hidden", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
obj.wrapper = obj;
_createForOfIteratorHelperLoose = {};
const merged = Object.assign(require("_runPrimaryAppCommandOrJoinEmbeddedActivity").StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose["backgroundColor"] = require("_createForOfIteratorHelperLoose").colors.BLACK;
obj.shade = _createForOfIteratorHelperLoose;
let closure_19 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_20 = { code: "function ActivityPanelFocusedViewTsx1(){const{wrapperDimensions,lg,IS_IOS,animatedKeyboardHeight,windowDimensions,safeArea,shown,wrapperOffset,transitionState,TransitionStates,runOnJS,transitionCleanUp,reduceMotion,withTiming,REDUCED_MOTION_TIMING,withSpring,ACTIVITY_LAYOUT_PHYSICS_GESTURE,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const topBorderRadius=!wrapperDimensions.isWindowLandscape?lg:0;const keyboardHeight=IS_IOS?animatedKeyboardHeight.get():0;const width=windowDimensions.width;const height=windowDimensions.height-keyboardHeight-(!wrapperDimensions.isWindowLandscape?safeArea.top:0);const y=shown.get()?wrapperOffset.get().y:windowDimensions.height;function transitionComplete(finished=false){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}const targetOpacity=reduceMotion&&shown.get()?1-wrapperOffset.get().y/windowDimensions.height:0;return{opacity:reduceMotion?withTiming(targetOpacity,REDUCED_MOTION_TIMING,shown.get()&&wrapperOffset.get().gestureActive?'animate-never':'animate-always',transitionComplete):1,transform:[{translateY:!reduceMotion?withSpring(y,wrapperOffset.get().gestureActive&&transitionState!==TransitionStates.YEETED?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always',transitionComplete):0}],top:!wrapperDimensions.isWindowLandscape?safeArea.top:0,width:width,height:height,borderTopStartRadius:topBorderRadius,borderTopEndRadius:topBorderRadius};}" };
let closure_21 = { code: "function transitionComplete_ActivityPanelFocusedViewTsx2(finished=false){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}" };
let closure_22 = { code: "function ActivityPanelFocusedViewTsx3(){const{wrapperOffset,shown,windowDimensions,withSpring,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const opacity=function(){if(!wrapperOffset.get().gestureActive){return shown.get()?1:0;}return 1-wrapperOffset.get().y/windowDimensions.height;}();return{opacity:withSpring(opacity,ACTIVITY_LAYOUT_PHYSICS_DEFAULT)};}" };
let closure_23 = { code: "function ActivityPanelFocusedViewTsx4(){const{IS_IOS,animatedKeyboardHeight,wrapperDimensions}=this.__closure;const keyboardHeight=IS_IOS?animatedKeyboardHeight.get():0;return{width:wrapperDimensions.width,height:wrapperDimensions.height-keyboardHeight};}" };
const memoResult = importAllResult.memo((transitionState) => {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  let obj = transitionState(channel[14]);
  const items = [memo, landscapeSafeAreasConfig];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const connectedActivityLocation = memo.getConnectedActivityLocation();
    const selfEmbeddedActivityForLocation = memo.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
    let obj = transitionState(channel[24]);
    obj = { channel: landscapeSafeAreasConfig.getChannel(obj.getEmbeddedActivityLocationChannelId(connectedActivityLocation)), hasActivity: null != selfEmbeddedActivityForLocation };
    return obj;
  }, []);
  channel = stateFromStoresObject.channel;
  const hasActivity = stateFromStoresObject.hasActivity;
  obj = { context: transitionCleanUp(channel[25]) };
  const tmp2 = useBaseActivityPanelFocusedView(obj);
  const portraitSafeAreasConfig = tmp2.portraitSafeAreasConfig;
  landscapeSafeAreasConfig = tmp2.landscapeSafeAreasConfig;
  memo = hasActivity.useMemo(() => outer1_16(transitionCleanUp(channel[26]), {}), []);
  const callback = hasActivity.useCallback(() => {
    const result = transitionState(channel[27]).updateActivityPanelMode(outer1_10.PIP);
  }, []);
  const items1 = [transitionState, transitionCleanUp, callback, hasActivity, memo, channel, portraitSafeAreasConfig, landscapeSafeAreasConfig];
  return hasActivity.useMemo(() => {
    obj = { transitionState, transitionCleanUp, updateActivityPanelModeToPIP: callback, hasActivity, context: transitionCleanUp(channel[25]), header: memo, children: outer1_16(transitionCleanUp(channel[28]), obj) };
    obj = { channel, layoutMode: callback.FOCUSED, portraitSafeAreasConfig, landscapeSafeAreasConfig };
    return outer1_16(outer1_25, obj);
  }, items1);
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/activities/panel/native/ActivityPanelFocusedView.tsx");

export default memoResult;
export { useBaseActivityPanelFocusedView };
export { BaseActivityPanelFocusedView };
