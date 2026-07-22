// Module ID: 15588
// Function ID: 118931
// Name: useBaseActivityPanelFocusedView
// Dependencies: []

// Module 15588 (useBaseActivityPanelFocusedView)
function useBaseActivityPanelFocusedView(context) {
  let importDefault;
  const tmp = importDefault(dependencyMap[13])();
  const arg1 = tmp;
  const wrapperDimensions = importAllResult.useContext(context.context).wrapperDimensions;
  importDefault = tmp3;
  const items = [tmp.right, !wrapperDimensions.isLandscape && wrapperDimensions.isWindowLandscape];
  return {
    portraitSafeAreasConfig: wrapperDimensions.isLandscape && !wrapperDimensions.isWindowLandscape ? closure_12 : closure_11,
    landscapeSafeAreasConfig: importAllResult.useMemo(() => {
      if (tmp3) {
        let obj = closure_13;
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
    arg1 = transitionState;
    transitionCleanUp = global.transitionCleanUp;
    importDefault = transitionCleanUp;
    updateActivityPanelModeToPIP = global.updateActivityPanelModeToPIP;
    dependencyMap = updateActivityPanelModeToPIP;
    context = global.context;
    ({ children, header, hasActivity } = global);
    obj = arg1(dependencyMap[14]);
    items = [];
    items[0] = closure_4;
    stateFromStores = obj.useStateFromStores(items, () => tmp2.useReducedMotion);
    defineProperty = stateFromStores;
    tmp2 = closure_19();
    closure_4 = tmp2;
    tmp3 = importDefault(dependencyMap[15])();
    closure_5 = tmp3;
    tmp4 = importDefault(dependencyMap[13])();
    closure_6 = tmp4;
    context = defineProperty.useContext(context);
    wrapperDimensions = context.wrapperDimensions;
    ActivityLayoutMode = wrapperDimensions;
    wrapperOffset = context.wrapperOffset;
    Object = wrapperOffset;
    obj2 = arg1(dependencyMap[16]);
    lockedWebView = obj2.useLockedWebView({ transitionState, context });
    shown = lockedWebView.shown;
    Object = shown;
    tmp7 = importDefault(dependencyMap[17])();
    ActivityPanelModes = tmp7;
    lg = importDefault(dependencyMap[12]).radii.lg;
    Object = lg;
    obj3 = arg1(dependencyMap[18]);
    fn = function _() {
      let num = 0;
      if (!wrapperDimensions.isWindowLandscape) {
        num = lg;
      }
      let num2 = 0;
      if (closure_15) {
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
      const tmp7 = () => {
        function transitionComplete() {
          let flag = arg0;
          if (arg0 === undefined) {
            flag = false;
          }
          if (flag) {
            flag = callback === callback(closure_2[19]).TransitionStates.YEETED;
          }
          if (flag) {
            callback(closure_2[18]).runOnJS(closure_1)();
            const obj = callback(closure_2[18]);
          }
        }
        transitionComplete.__closure = { transitionState: callback, TransitionStates: callback(closure_2[19]).TransitionStates, runOnJS: callback(closure_2[18]).runOnJS, transitionCleanUp: closure_1 };
        transitionComplete.__workletHash = 16073739070225;
        transitionComplete.__initData = closure_21;
        return transitionComplete;
      }();
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
    obj = { wrapperDimensions, lg, IS_IOS, animatedKeyboardHeight: tmp7, windowDimensions: tmp3, safeArea: tmp4, shown, wrapperOffset, transitionState, TransitionStates: arg1(dependencyMap[19]).TransitionStates, runOnJS: arg1(dependencyMap[18]).runOnJS, transitionCleanUp, reduceMotion: stateFromStores, withTiming: arg1(dependencyMap[20]).withTiming, REDUCED_MOTION_TIMING: jsxs, withSpring: arg1(dependencyMap[21]).withSpring, ACTIVITY_LAYOUT_PHYSICS_GESTURE: Object, ACTIVITY_LAYOUT_PHYSICS_DEFAULT: Object };
    fn.__closure = obj;
    fn.__workletHash = 3642447648301;
    fn.__initData = closure_20;
    animatedStyle = obj3.useAnimatedStyle(fn);
    _ = animatedStyle;
    obj5 = arg1(dependencyMap[18]);
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
        obj2 = transitionState(closure_2[21]);
        obj.opacity = obj2.withSpring(num, shown);
        return obj;
      }
    }
    obj1 = { wrapperOffset, shown, windowDimensions: tmp3, withSpring: arg1(dependencyMap[21]).withSpring, ACTIVITY_LAYOUT_PHYSICS_DEFAULT: Object };
    T.__closure = obj1;
    T.__workletHash = 8351375063373;
    T.__initData = closure_22;
    items1 = [, ];
    items1[0] = animatedStyle;
    items1[1] = tmp2.wrapper;
    animatedStyle1 = obj5.useAnimatedStyle(T);
    memo = defineProperty.useMemo(() => {
      const items = [tmp2.wrapper, animatedStyle];
      return items;
    }, items1);
    obj7 = arg1(dependencyMap[18]);
    class A {
      constructor() {
        num = 0;
        if (closure_15) {
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
    A.__initData = closure_23;
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
    items4[0] = jsx(importDefault(dependencyMap[18]).View, { style: items3, pointerEvents: "none" });
    tmp14 = jsxs;
    obj4 = { 1446733789: null, 1404527196: true, -398372460: "/assets/.cache/intl/bW9kdWxlcy9ndWlsZF9zZXR0aW5ncy9zZXJ2ZXJfbW9uZXRpemF0aW9uL3RhZ3Mvd2Vi" };
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
    items5[0] = tmp15(importDefault(dependencyMap[18]).View, obj5);
    items5[1] = header;
    obj4.children = items5;
    items4[1] = tmp14(arg1(dependencyMap[23]).AccessibilityViewAnimated, obj4);
    obj3.children = items4;
    return tmp13(arg1(dependencyMap[22]).ThemeContextProvider, obj3);
  }
}
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const ActivityLayoutMode = arg1(dependencyMap[5]).ActivityLayoutMode;
({ ACTIVITY_LAYOUT_PHYSICS_GESTURE: closure_8, ACTIVITY_LAYOUT_PHYSICS_DEFAULT: closure_9, ActivityPanelModes: closure_10 } = arg1(dependencyMap[6]));
const tmp2 = arg1(dependencyMap[6]);
({ DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG: closure_11, DEFAULT_PORTRAIT_LETTERBOX_CONFIG: closure_12, DEFAULT_LANDSCAPE_PILLERBOX_CONFIG: closure_13 } = arg1(dependencyMap[7]));
const ThemeTypes = arg1(dependencyMap[8]).ThemeTypes;
const IS_IOS = arg1(dependencyMap[9]).IS_IOS;
const tmp3 = arg1(dependencyMap[7]);
({ jsx: closure_16, jsxs: closure_17 } = arg1(dependencyMap[10]));
let closure_18 = { duration: 300 };
let obj1 = arg1(dependencyMap[11]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_BASE_LOW };
obj.wrapper = obj;
obj1 = {};
const merged = Object.assign(arg1(dependencyMap[1]).StyleSheet.absoluteFillObject);
obj1["backgroundColor"] = importDefault(dependencyMap[12]).colors.BLACK;
obj.shade = obj1;
let closure_19 = obj1.createStyles(obj);
let closure_20 = { code: "function ActivityPanelFocusedViewTsx1(){const{wrapperDimensions,lg,IS_IOS,animatedKeyboardHeight,windowDimensions,safeArea,shown,wrapperOffset,transitionState,TransitionStates,runOnJS,transitionCleanUp,reduceMotion,withTiming,REDUCED_MOTION_TIMING,withSpring,ACTIVITY_LAYOUT_PHYSICS_GESTURE,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const topBorderRadius=!wrapperDimensions.isWindowLandscape?lg:0;const keyboardHeight=IS_IOS?animatedKeyboardHeight.get():0;const width=windowDimensions.width;const height=windowDimensions.height-keyboardHeight-(!wrapperDimensions.isWindowLandscape?safeArea.top:0);const y=shown.get()?wrapperOffset.get().y:windowDimensions.height;function transitionComplete(finished=false){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}const targetOpacity=reduceMotion&&shown.get()?1-wrapperOffset.get().y/windowDimensions.height:0;return{opacity:reduceMotion?withTiming(targetOpacity,REDUCED_MOTION_TIMING,shown.get()&&wrapperOffset.get().gestureActive?'animate-never':'animate-always',transitionComplete):1,transform:[{translateY:!reduceMotion?withSpring(y,wrapperOffset.get().gestureActive&&transitionState!==TransitionStates.YEETED?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always',transitionComplete):0}],top:!wrapperDimensions.isWindowLandscape?safeArea.top:0,width:width,height:height,borderTopStartRadius:topBorderRadius,borderTopEndRadius:topBorderRadius};}" };
let closure_21 = { code: "function transitionComplete_ActivityPanelFocusedViewTsx2(finished=false){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}" };
let closure_22 = { code: "function ActivityPanelFocusedViewTsx3(){const{wrapperOffset,shown,windowDimensions,withSpring,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const opacity=function(){if(!wrapperOffset.get().gestureActive){return shown.get()?1:0;}return 1-wrapperOffset.get().y/windowDimensions.height;}();return{opacity:withSpring(opacity,ACTIVITY_LAYOUT_PHYSICS_DEFAULT)};}" };
let closure_23 = { code: "function ActivityPanelFocusedViewTsx4(){const{IS_IOS,animatedKeyboardHeight,wrapperDimensions}=this.__closure;const keyboardHeight=IS_IOS?animatedKeyboardHeight.get():0;return{width:wrapperDimensions.width,height:wrapperDimensions.height-keyboardHeight};}" };
const tmp4 = arg1(dependencyMap[10]);
const memoResult = importAllResult.memo((transitionState) => {
  transitionState = transitionState.transitionState;
  const arg1 = transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  const importDefault = transitionCleanUp;
  let obj = arg1(dependencyMap[14]);
  const items = [closure_6, closure_5];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const connectedActivityLocation = memo.getConnectedActivityLocation();
    const selfEmbeddedActivityForLocation = memo.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
    let obj = transitionState(channel[24]);
    obj = { channel: landscapeSafeAreasConfig.getChannel(obj.getEmbeddedActivityLocationChannelId(connectedActivityLocation)), hasActivity: null != selfEmbeddedActivityForLocation };
    return obj;
  }, []);
  const channel = stateFromStoresObject.channel;
  const dependencyMap = channel;
  const hasActivity = stateFromStoresObject.hasActivity;
  obj = { context: importDefault(dependencyMap[25]) };
  const tmp2 = useBaseActivityPanelFocusedView(obj);
  const portraitSafeAreasConfig = tmp2.portraitSafeAreasConfig;
  let closure_4 = portraitSafeAreasConfig;
  const landscapeSafeAreasConfig = tmp2.landscapeSafeAreasConfig;
  closure_5 = landscapeSafeAreasConfig;
  const memo = importAllResult.useMemo(() => callback(transitionCleanUp(channel[26]), {}), []);
  closure_6 = memo;
  const callback = importAllResult.useCallback(() => {
    const result = transitionState(channel[27]).updateActivityPanelMode(constants.PIP);
  }, []);
  const ActivityLayoutMode = callback;
  const items1 = [transitionState, transitionCleanUp, callback, hasActivity, memo, channel, portraitSafeAreasConfig, landscapeSafeAreasConfig];
  return hasActivity.useMemo(() => {
    let obj = { transitionState, transitionCleanUp, updateActivityPanelModeToPIP: callback, hasActivity, context: transitionCleanUp(channel[25]), header: memo, children: callback(transitionCleanUp(channel[28]), obj) };
    obj = { channel, layoutMode: callback.FOCUSED, portraitSafeAreasConfig, landscapeSafeAreasConfig };
    return callback(closure_25, obj);
  }, items1);
});
const result = arg1(dependencyMap[29]).fileFinishedImporting("modules/activities/panel/native/ActivityPanelFocusedView.tsx");

export default memoResult;
export { useBaseActivityPanelFocusedView };
export { BaseActivityPanelFocusedView };
