// Module ID: 19496
// Function ID: 19497
// Name: ActivityPanelFocusedView
// Dependencies: [19, 17, 5141, 4989, 4988, 5781, 19357, 1072, 11363, 11855, 21, 5140, 575, 1627, 504, 1493, 19487, 12238, 1652, 5199, 1705, 5370, 5761, 6150, 5061, 19489, 19497, 11889, 11957, 2]
// Exports: useBaseActivityPanelFocusedView

// Module 19496 (ActivityPanelFocusedView)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11363 */;
import Constants2 from "Constants" /* 11855 */;
import EmbeddedActivityViewDefault from "EmbeddedActivityView" /* 11957 */;
import ActivityPanelStateContextDefault from "ActivityPanelStateContext" /* 19489 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5141 */;
import ChannelStore from "ChannelStore" /* 4989 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4988 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5781 */;
import ActivityPanelNativeConstants from "ActivityPanelNativeConstants" /* 19357 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let diff, diff1, importDefault, num2, num3, num4, num5, num6, num7, num8, str, str2, str3, tmp8, tmp9;

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
  constructor(arg0) {
    let children;
    let context;
    let hasActivity;
    let header;
    let items10;
    let items11;
    let items9;
    let renderWebView;
    let shown;
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
    let tmp24;
    let tmp25;
    let tmp26;
    let tmp27;
    let tmp28;
    let tmp29;
    let tmp30;
    let tmp31;
    let tmp32;
    let tmp33;
    let tmp36;
    let tmp37;
    let tmp38;
    let tmp39;
    let tmp40;
    let tmp41;
    let tmp44;
    let tmp45;
    let tmp46;
    let tmp47;
    let tmp52;
    let transitionCleanUp;
    let transitionState;
    let updateActivityPanelModeToPIP;
    let useReducedMotion;
    let wrapper;
    let wrapperDimensions;
    let wrapperOffset;
    ({ transitionState, updateActivityPanelModeToPIP } = arg0);
    ({ hasActivity, context } = arg0);
    let animatedStyle;
    const tmp = updateActivityPanelModeToPIP;
    const tmp2 = animatedStyle;
    ({ children, header, transitionCleanUp } = arg0);
    let obj = updateActivityPanelModeToPIP(animatedStyle[14]);
    let items = [AccessibilityStore];
    const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
    const tmp4 = closure_19();
    importDefault = tmp4;
    const tmp5 = importDefault;
    const tmp6 = require("useWindowDimensions")();
    let obj2 = react;
    const tmp7 = require("useSafeAreaInsets")();
    const context1 = react.useContext(context);
    ({ wrapperDimensions, wrapperOffset } = context1);
    const obj3 = updateActivityPanelModeToPIP(animatedStyle[16]);
    const lockedWebView = obj3.useLockedWebView({ transitionState, hasActivity, context });
    ({ shown, renderWebView } = lockedWebView);
    const tmp10 = require("useAnimatedKeyboardHeight")();
    const lg = require("native").radii.lg;
    const tmp11 = updateActivityPanelModeToPIP(animatedStyle[18]);
    let items1 = [closure_21, wrapperDimensions, lg, IS_IOS, tmp10, tmp6, tmp7, shown, wrapperOffset, closure_20, transitionState, , , , , , , , , ];
    const useAnimatedStyle = tmp11.useAnimatedStyle;
    const tmp12 = IS_IOS;
    items1[11] = updateActivityPanelModeToPIP(animatedStyle[19]).TransitionStates;
    items1[12] = updateActivityPanelModeToPIP(animatedStyle[20]).scheduleOnRN;
    items1[13] = transitionCleanUp;
    items1[14] = stateFromStores;
    items1[15] = updateActivityPanelModeToPIP(animatedStyle[21]).withTiming;
    items1[16] = closure_18;
    items1[17] = updateActivityPanelModeToPIP(animatedStyle[22]).withSpring;
    items1[18] = closure_7;
    items1[19] = closure_8;
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
    let c14;
    let c15;
    let c16;
    let c17;
    let c18;
    [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33] = items1;
    class ActivityPanelFocusedViewTsx2 {
      constructor() {
        tmp = closure_0;
        num = 0;
        if (!closure_0.isWindowLandscape) {
          num = closure_1;
        }
        num2 = 0;
        if (closure_2) {
          tmp2 = closure_3;
          num2 = closure_3.get();
        }
        tmp3 = closure_4;
        num3 = 0;
        width = closure_4.width;
        diff = closure_4.height - num2;
        if (!tmp.isWindowLandscape) {
          tmp5 = closure_5;
          num3 = closure_5.top;
        }
        obj = closure_6;
        diff1 = diff - num3;
        if (closure_6.get()) {
          tmp7 = closure_7;
          height = closure_7.get().y;
        } else {
          height = tmp3.height;
        }
        items = [, , , , ];
        items[0] = closure_8;
        items[1] = closure_9;
        items[2] = closure_10;
        items[3] = closure_11;
        items[4] = closure_12;
        [tmp10, tmp11, tmp12, tmp13, tmp14] = items;
        transitionComplete = function transitionComplete() {
          let flag = arg0;
          if (arg0 === undefined) {
            flag = false;
          }
          if (flag) {
            flag = closure_1_0 === constants.YEETED;
          }
          if (flag) {
            closure_1_2(closure_1_3);
          }
        };
        items1 = [, , , ];
        items1[0] = tmp11;
        items1[1] = tmp12;
        items1[2] = tmp13;
        items1[3] = tmp14;
        transitionComplete.__closure = items1;
        transitionComplete.__workletHash = 7132668688042;
        transitionComplete.__initData = tmp10;
        tmp15 = closure_13;
        num4 = 0;
        tmp8 = closure_9;
        tmp9 = closure_10;
        if (closure_13) {
          num4 = 0;
          if (obj.get()) {
            tmp16 = closure_7;
            num5 = 1;
            num4 = 1 - closure_7.get().y / tmp3.height;
          }
        }
        num6 = 1;
        if (tmp15) {
          tmp18 = closure_15;
          tmp17 = closure_14;
          str = "animate-always";
          str2 = "animate-always";
          if (obj.get()) {
            tmp19 = closure_7;
            str2 = "animate-always";
            if (closure_7.get().gestureActive) {
              str2 = "animate-never";
            }
          }
          tmp20 = num4;
          tmp21 = tmp18;
          tmp22 = str2;
          tmp23 = transitionComplete;
          num6 = tmp17(num4, tmp18, str2, transitionComplete);
        }
        size = { opacity: num6, transform: null, top: null, width: null, height: null, borderTopStartRadius: null, borderTopEndRadius: null };
        num7 = 0;
        if (!tmp15) {
          tmp25 = closure_7;
          tmp24 = closure_16;
          if (closure_7.get().gestureActive) {
            if (tmp8 !== tmp9.YEETED) {
              tmp26 = closure_17;
            }
            str3 = "animate-always";
            tmp27 = height;
            tmp28 = tmp26;
            tmp29 = transitionComplete;
            num7 = tmp24(height, tmp26, "animate-always", transitionComplete);
          }
          tmp26 = closure_18;
        }
        items2 = [];
        items2[0] = { translateY: num7 };
        size.transform = items2;
        num8 = 0;
        if (!tmp.isWindowLandscape) {
          tmp30 = closure_5;
          num8 = closure_5.top;
        }
        size.top = num8;
        size.width = width;
        size.height = diff1;
        size.borderTopStartRadius = num;
        size.borderTopEndRadius = num;
        return size;
      }
    }
    let items2 = [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33];
    ActivityPanelFocusedViewTsx2.__closure = items2;
    ActivityPanelFocusedViewTsx2.__workletHash = 7761703212669;
    ActivityPanelFocusedViewTsx2.__initData = tmp14;
    const tmp13 = closure_8;
    animatedStyle = useAnimatedStyle(ActivityPanelFocusedViewTsx2);
    const items3 = [closure_22, wrapperOffset, shown, tmp6, , ];
    const useAnimatedStyle2 = tmp(tmp2[18]).useAnimatedStyle;
    tmp(tmp2[18]);
    items3[4] = tmp(tmp2[22]).withSpring;
    items3[5] = tmp13;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    [tmp36, tmp37, tmp38, tmp39, tmp40, tmp41] = items3;
    class ActivityPanelFocusedViewTsx3 {
      constructor() {
        let num;
        const obj = _undefined;
        if (_undefined.get().gestureActive) {
          num = 1 - obj.get().y / _undefined3.height;
        } else {
          num = 0;
          if (_undefined2.get()) {
            num = 1;
          }
        }
        const obj2 = { opacity: _undefined4(num, c4) };
        return obj2;
      }
    }
    const items4 = [tmp37, tmp38, tmp39, tmp40, tmp41];
    ActivityPanelFocusedViewTsx3.__closure = items4;
    ActivityPanelFocusedViewTsx3.__workletHash = 3768147706260;
    ActivityPanelFocusedViewTsx3.__initData = tmp36;
    const items5 = [animatedStyle, tmp4.wrapper];
    const animatedStyle2 = useAnimatedStyle2(ActivityPanelFocusedViewTsx3);
    const memo = obj2.useMemo(() => {
      const items = [wrapper.wrapper, animatedStyle];
      return items;
    }, items5);
    const items6 = [closure_23, tmp12, tmp10, wrapperDimensions];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    [tmp44, tmp45, tmp46, tmp47] = items6;
    const tmpResult2 = tmp(tmp2[18]);
    class ActivityPanelFocusedViewTsx4 {
      constructor() {
        let num = 0;
        if (c0) {
          num = _undefined.get();
        }
        size = { width: _undefined2.width, height: _undefined2.height - num };
        return size;
      }
    }
    const items7 = [tmp45, tmp46, tmp47];
    ActivityPanelFocusedViewTsx4.__closure = items7;
    ActivityPanelFocusedViewTsx4.__workletHash = 13360956680222;
    ActivityPanelFocusedViewTsx4.__initData = tmp44;
    const items8 = [updateActivityPanelModeToPIP];
    const animatedStyle1 = tmpResult2.useAnimatedStyle(ActivityPanelFocusedViewTsx4);
    const callback = obj2.useCallback(() => {
      updateActivityPanelModeToPIP();
    }, items8);
    const obj4 = { theme: ThemeTypes.DARK, children: items10 };
    const ThemeContextProvider = tmp(tmp2[19]).ThemeContextProvider;
    const obj5 = { style: items9, pointerEvents: "none" };
    items9 = [tmp4.shade, animatedStyle2];
    items10 = [closure_16(tmp5(tmp2[18]).View, obj5), ];
    const obj6 = { style: memo, nativeID: "activity-panel-focused-view", accessibilityViewIsModal: true, onAccessibilityEscape: callback, children: items11 };
    const AccessibilityViewAnimated = tmp(tmp2[23]).AccessibilityViewAnimated;
    const obj7 = { style: animatedStyle1, children: tmp52 };
    tmp52 = null;
    const View = tmp5(tmp2[18]).View;
    const tmp51 = closure_16;
    if (renderWebView) {
      tmp52 = null;
      if (hasActivity) {
        tmp52 = children;
      }
    }
    items11 = [tmp51(View, obj7), header];
    items10[1] = closure_17(AccessibilityViewAnimated, obj6);
    return closure_17(ThemeContextProvider, obj4);
  }
}
const StyleSheet = react_native.StyleSheet;
({ ACTIVITY_LAYOUT_PHYSICS_GESTURE: metroImportDefault, ACTIVITY_LAYOUT_PHYSICS_DEFAULT: metroImportAll, ActivityPanelModes: c9 } = ActivityPanelConstants);
({ DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG: c10, DEFAULT_PORTRAIT_LETTERBOX_CONFIG: unpackModuleId, DEFAULT_LANDSCAPE_PILLERBOX_CONFIG: closure_12 } = ActivityPanelNativeConstants);
const ThemeTypes = Constants.ThemeTypes;
const IS_IOS = VoicePanelConstants.IS_IOS;
const ActivityLayoutMode = Constants2.ActivityLayoutMode;
({ jsx: closure_16, jsxs: closure_17 } = Fragment);
let closure_18 = { duration: 300 };
let createStyles = createStyles_mod;
let obj = { wrapper: obj2, shade: obj3 };
obj2 = { position: "absolute", flexDirection: "row", alignItems: "center", justifyContent: "center", overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BLACK };
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_19 = createStyles(obj);
let closure_20 = { code: "(function transitionComplete_ActivityPanelFocusedViewTsx1(finished=false){let[transitionState,TransitionStates,scheduleOnRN,transitionCleanUp]=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){scheduleOnRN(transitionCleanUp);}})" };
let closure_21 = { code: "(function ActivityPanelFocusedViewTsx2(){let[wrapperDimensions,lg,IS_IOS,animatedKeyboardHeight,windowDimensions,safeArea,shown,wrapperOffset,_worklet_7132668688042_init_data,transitionState,TransitionStates,scheduleOnRN,transitionCleanUp,reduceMotion,withTiming,REDUCED_MOTION_TIMING,withSpring,ACTIVITY_LAYOUT_PHYSICS_GESTURE,ACTIVITY_LAYOUT_PHYSICS_DEFAULT]=this.__closure;const topBorderRadius=!wrapperDimensions.isWindowLandscape?lg:0;const keyboardHeight=IS_IOS?animatedKeyboardHeight.get():0;const width=windowDimensions.width;const height=windowDimensions.height-keyboardHeight-(!wrapperDimensions.isWindowLandscape?safeArea.top:0);const y=shown.get()?wrapperOffset.get().y:windowDimensions.height;const transitionComplete=function transitionComplete_ActivityPanelFocusedViewTsx1Factory([_worklet_7132668688042_init_data,transitionState,TransitionStates,scheduleOnRN,transitionCleanUp]){const transitionComplete=function(finished=false){if(finished&&transitionState===TransitionStates.YEETED){scheduleOnRN(transitionCleanUp);}};transitionComplete.__closure=[transitionState,TransitionStates,scheduleOnRN,transitionCleanUp];transitionComplete.__workletHash=7132668688042;transitionComplete.__initData=_worklet_7132668688042_init_data;return transitionComplete;}([_worklet_7132668688042_init_data,transitionState,TransitionStates,scheduleOnRN,transitionCleanUp]);const targetOpacity=reduceMotion&&shown.get()?1-wrapperOffset.get().y/windowDimensions.height:0;return{opacity:reduceMotion?withTiming(targetOpacity,REDUCED_MOTION_TIMING,shown.get()&&wrapperOffset.get().gestureActive?'animate-never':'animate-always',transitionComplete):1,transform:[{translateY:!reduceMotion?withSpring(y,wrapperOffset.get().gestureActive&&transitionState!==TransitionStates.YEETED?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always',transitionComplete):0}],top:!wrapperDimensions.isWindowLandscape?safeArea.top:0,width:width,height:height,borderTopStartRadius:topBorderRadius,borderTopEndRadius:topBorderRadius};})" };
let closure_22 = { code: "(function ActivityPanelFocusedViewTsx3(){let[wrapperOffset,shown,windowDimensions,withSpring,ACTIVITY_LAYOUT_PHYSICS_DEFAULT]=this.__closure;const opacity=function(){if(!wrapperOffset.get().gestureActive){return shown.get()?1:0;}return 1-wrapperOffset.get().y/windowDimensions.height;}();return{opacity:withSpring(opacity,ACTIVITY_LAYOUT_PHYSICS_DEFAULT)};})" };
let closure_23 = { code: "(function ActivityPanelFocusedViewTsx4(){let[IS_IOS,animatedKeyboardHeight,wrapperDimensions]=this.__closure;const keyboardHeight=IS_IOS?animatedKeyboardHeight.get():0;return{width:wrapperDimensions.width,height:wrapperDimensions.height-keyboardHeight};})" };
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
    const obj = transitionState(channel[24]);
    const obj2 = { channel: memo.getChannel(obj.getEmbeddedActivityLocationChannelId(connectedActivityLocation)), hasActivity: null != selfEmbeddedActivityForLocation };
    return obj2;
  }, []);
  channel = stateFromStoresObject.channel;
  const hasActivity = stateFromStoresObject.hasActivity;
  const tmp2 = transitionCleanUp(channel[25]);
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
  memo1 = obj2.useMemo(() => closure_1_16(transitionCleanUp(channel[26]), {}), []);
  const updateActivityPanelModeToPIP = obj2.useCallback(() => {
    const obj = transitionState(channel[27]);
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
