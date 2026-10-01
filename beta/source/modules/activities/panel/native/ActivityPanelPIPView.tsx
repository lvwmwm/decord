// Module ID: 16841
// Function ID: 16842
// Name: ActivityPanelPIPView
// Dependencies: [19, 17, 4825, 8939, 2045, 2044, 2005, 8502, 16842, 1074, 11756, 21, 1177, 4836, 576, 1613, 504, 1479, 16837, 10896, 4566, 16843, 4540, 4837, 5280, 16844, 16845, 1115, 6073, 4458, 16839, 8915, 2]
// Exports: useBaseActivityPanelPIPView

// Module 16841 (ActivityPanelPIPView)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import Constants2 from "Constants" /* 2005 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import spring from "spring" /* 5280 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 10896 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11756 */;
import ActivityPanelStateContextDefault from "ActivityPanelStateContext" /* 16839 */;
import ActivityPanelNativeConstants from "ActivityPanelNativeConstants" /* 16842 */;
import MorphablePanelUtils from "MorphablePanelUtils" /* 16843 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import SafeAreaDisabledStore from "SafeAreaDisabledStore" /* 8939 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 8502 */;
import native from "native" /* 1177 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let closure_12;
let closure_14;
let map1;
let obj2;
let obj3;
let unpackModuleId;
const f106272 = () => {
  let num;
  const _Math = Math;
  if (right != null) {
    num = right.right;
  }
  if (num == null) {
    num = 0;
  }
  const obj = { right: { disable: false, override: max(closure_2_14, num) } };
  ({ disable: false, override: max(closure_2_14, num) });
  return obj;
};
class BaseActivityPanelPIPView {
  constructor(transitionState) {
    let children;
    let hasActivity;
    let pipOrientationLockState;
    transitionState = transitionState.transitionState;
    const transitionCleanUp = transitionState.transitionCleanUp;
    const context = transitionState.context;
    let stateFromStores;
    let wrapperOffset;
    let width;
    let height;
    ({ children, pipOrientationLockState, hasActivity } = transitionState);
    const tmp = closure_20();
    let obj = transitionState(stateFromStores[16]);
    let items = [wrapperOffset];
    stateFromStores = obj.useStateFromStores(items, () => wrapperOffset.useReducedMotion);
    let tmp3 = transitionCleanUp(stateFromStores[17])();
    windowDimensions = tmp3;
    let tmp4 = transitionCleanUp(stateFromStores[15])();
    safeArea = tmp4;
    const context1 = windowDimensions.useContext(context);
    wrapperOffset = context1.wrapperOffset;
    const setMode = context1.setMode;
    const pipState = context1.pipState;
    const pipAvoidanceSpecs = context1.pipAvoidanceSpecs;
    const wrapperDimensions = context1.wrapperDimensions;
    const obj2 = transitionState(stateFromStores[18]);
    const lockedWebView = obj2.useLockedWebView({ transitionState, context });
    const shown = lockedWebView.shown;
    const renderWebView = lockedWebView.renderWebView;
    const items1 = [wrapperOffset];
    const effect = windowDimensions.useEffect(() => {
      updateSharedValueIfChangedDefault(wrapperOffset, { gestureActive: false });
    }, items1);
    let tmp8 = setMode((shouldDisableSafeAreas) => shouldDisableSafeAreas.shouldDisableSafeAreas());
    const ACTIVITY_PIP_SIZE = tmp8;
    let obj3 = transitionState(stateFromStores[20]);
    class J {
      constructor() {
        let items;
        let value;
        const point = pipState.get();
        const x = point.x;
        const y = point.y;
        const tmp3 = MorphablePanelUtils;
        size = { pipX: x, pipY: y, width: ACTIVITY_PIP_SIZE.width, height: ACTIVITY_PIP_SIZE.height, windowDimensions, safeArea, bottomAvoidanceRegion: pipAvoidanceSpecs.get().bottom, topAvoidanceRegion: pipAvoidanceSpecs.get().top, positionOffset: value, disableHorizontalSafeAreas };
        const getClampedPIPPosition = tmp3.getClampedPIPPosition;
        value = undefined;
        const tmp4 = ACTIVITY_PIP_SIZE;
        const tmp5 = windowDimensions;
        if (wrapperOffset.get().gestureActive) {
          value = obj2.get();
        }
        const point2 = getClampedPIPPosition(size);
        let x2 = point2.x;
        const y2 = point2.y;
        const obj3 = shown;
        const tmp8 = shown.get() || stateFromStores;
        if (!tmp8) {
          if (x < 0.5) {
            let sum;
            if (x >= 0) {
              const _Math2 = Math;
              sum = -tmp4.width + Math.max(tmp6.right, PIP_WINDOW_OFFSET);
            }
            x2 = sum;
          }
          const _Math = Math;
          sum = tmp5.width + Math.max(tmp6.right, PIP_WINDOW_OFFSET);
        }
        function transitionComplete() {
          let flag = arg0;
          if (arg0 === undefined) {
            flag = false;
          }
          if (flag) {
            flag = closure_1_0 === transitionState(stateFromStores[22]).TransitionStates.YEETED;
          }
          if (flag) {
            const obj = transitionState(stateFromStores[20]);
            obj.runOnJS(transitionCleanUp)();
          }
        }
        let obj = { transitionState, TransitionStates: tmp(4540).TransitionStates, runOnJS: tmp(4566).runOnJS, transitionCleanUp };
        transitionComplete.__closure = obj;
        transitionComplete.__workletHash = 7625774548373;
        transitionComplete.__initData = __initData;
        let num3 = 1;
        if (stateFromStores) {
          const withTiming = timing.withTiming;
          let num4 = 0;
          const tmpResult = timing;
          if (obj3.get()) {
            num4 = 1;
          }
          num3 = withTiming(num4, REDUCED_MOTION_TIMING, "animate-always", transitionComplete);
        }
        const obj4 = { opacity: num3, transform: items };
        const tmpResult3 = spring;
        items = [{ translateY: tmpResult3.withSpring(y2, wrapperOffset.get().gestureActive ? closure_12 : map1, "animate-always") }, ];
        ({ translateY: tmpResult3.withSpring(y2, wrapperOffset.get().gestureActive ? closure_12 : map1, "animate-always") });
        const withSpring = tmp(5280).withSpring;
        spring;
        let tmp22;
        const tmp21 = wrapperOffset.get().gestureActive ? closure_12 : map1;
        if (!stateFromStores) {
          tmp22 = transitionComplete;
        }
        items[1] = { translateX: withSpring(x2, tmp21, "animate-always", tmp22) };
        ({ translateX: withSpring(x2, tmp21, "animate-always", tmp22) });
        return obj4;
      }
    }
    let obj4 = { pipState, getClampedPIPPosition: transitionState(stateFromStores[21]).getClampedPIPPosition, ACTIVITY_PIP_SIZE, windowDimensions: tmp3, safeArea: tmp4, pipAvoidanceSpecs, wrapperOffset, disableHorizontalSafeAreas: tmp8, shown, reduceMotion: stateFromStores, PIP_WINDOW_OFFSET, transitionState, TransitionStates: transitionState(stateFromStores[22]).TransitionStates, runOnJS: transitionState(stateFromStores[20]).runOnJS, transitionCleanUp, withTiming: transitionState(stateFromStores[23]).withTiming, REDUCED_MOTION_TIMING, withSpring: transitionState(stateFromStores[24]).withSpring, ACTIVITY_LAYOUT_PHYSICS_GESTURE: height, ACTIVITY_LAYOUT_PHYSICS_DEFAULT };
    J.__closure = obj4;
    J.__workletHash = 14326479117867;
    J.__initData = __initData;
    const animatedStyle = obj3.useAnimatedStyle(J);
    const obj5 = { pipWidth: ACTIVITY_PIP_SIZE.width, pipHeight: ACTIVITY_PIP_SIZE.height, pipOrientationLockState, isLandscape: wrapperDimensions.isLandscape };
    size = transitionCleanUp(stateFromStores[25])(obj5);
    width = size.width;
    height = size.height;
    const items2 = [width, height];
    class W {
      constructor() {
        const obj = ReanimatedRexport;
        obj.runOnJS(setMode)(unpackModuleId.PANEL);
      }
    }
    const obj6 = { runOnJS: transitionState(stateFromStores[20]).runOnJS, setMode, ActivityPanelModes: width };
    const memo = windowDimensions.useMemo(() => {
      size = { width, height, pointerEvents: "none" };
      return size;
    }, items2);
    const useCallback = windowDimensions.useCallback;
    W.__closure = obj6;
    W.__workletHash = 2951177166574;
    W.__initData = __initData3;
    const items3 = [setMode];
    const callback = useCallback(W, items3);
    const obj7 = { panGestureEnabled: true, onTapGestureStart: callback, mode: transitionState(stateFromStores[26]).MorphablePanelModes.PIP, pipState, wrapperOffset, disableHorizontalSafeAreas: false };
    const items4 = [setMode];
    const tmp12 = transitionCleanUp(stateFromStores[26]);
    const tmp12Result = tmp12(obj7);
    const memo1 = windowDimensions.useMemo(() => {
      let intl;
      let items;
      const obj = {
        accessible: true,
        accessibilityLabel: intl.string(intl2.t["3ejJer"]),
        accessibilityRole: "button",
        accessibilityActions: items,
        onAccessibilityAction() {
          setMode(width.PANEL);
        }
      };
      intl = intl2.intl;
      items = [{ name: "activate" }];
      return obj;
    }, items4);
    const ThemeContextProvider = transitionState(stateFromStores[22]).ThemeContextProvider;
    const items5 = [tmp.wrapper, animatedStyle];
    const View = transitionCleanUp(stateFromStores[20]).View;
    const merged = Object.assign(memo1);
    let tmp18 = !renderWebView;
    const obj10 = { gesture: tmp12Result, children: null };
    const GestureDetector = transitionState(stateFromStores[28]).GestureDetector;
    const tmp17 = safeArea;
    if (renderWebView) {
      tmp18 = !hasActivity;
    }
    let tmp15Result = !tmp18;
    if (tmp15Result) {
      const obj12 = { style: memo, children };
      tmp15Result = tmp15(tmp17, obj12);
    }
    return <ThemeContextProvider theme={ThemeTypes.DARK}>{null}</ThemeContextProvider>;
  }
}
const View2 = react_native.View;
const ActivityLayoutMode = Constants2.ActivityLayoutMode;
let ACTIVITY_PIP_SIZE = ActivityPanelConstants.ACTIVITY_PIP_SIZE;
({ ActivityPanelModes: unpackModuleId, ACTIVITY_LAYOUT_PHYSICS_GESTURE: closure_12, ACTIVITY_LAYOUT_PHYSICS_DEFAULT: map1, LANDSCAPE_IFRAME_HORIZONTAL_MARGIN: closure_14 } = ActivityPanelConstants);
let closure_15 = ActivityPanelNativeConstants.DEFAULT_PORTRAIT_LETTERBOX_CONFIG;
const ThemeTypes = Constants.ThemeTypes;
const PIP_WINDOW_OFFSET = MorphablePanelConstants.PIP_WINDOW_OFFSET;
const jsx = Fragment.jsx;
const REDUCED_MOTION_TIMING = { duration: 300 };
const boxShadowStyle = native.generateBoxShadowStyle(native.EXPERIMENTAL_HIGH_ELEVATION_SHADOW_PARAMS);
let createStyles = createStyles_mod;
let obj = { wrapper: obj2, mask: obj3 };
obj2 = { borderRadius: nativeDefault.radii.lg };
createStyles = createStyles.createStyles;
let merged = Object.assign(ACTIVITY_PIP_SIZE);
const merged1 = Object.assign(boxShadowStyle);
obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "center", overflow: "hidden", borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const merged2 = Object.assign(ACTIVITY_PIP_SIZE);
let closure_20 = createStyles(obj);
const __initData = { code: "function ActivityPanelPIPViewTsx1(){const{pipState,getClampedPIPPosition,ACTIVITY_PIP_SIZE,windowDimensions,safeArea,pipAvoidanceSpecs,wrapperOffset,disableHorizontalSafeAreas,shown,reduceMotion,PIP_WINDOW_OFFSET,transitionState,TransitionStates,runOnJS,transitionCleanUp,withTiming,REDUCED_MOTION_TIMING,withSpring,ACTIVITY_LAYOUT_PHYSICS_GESTURE,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const{x:pipX,y:pipY}=pipState.get();let{x:x,y:y}=getClampedPIPPosition({pipX:pipX,pipY:pipY,width:ACTIVITY_PIP_SIZE.width,height:ACTIVITY_PIP_SIZE.height,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top,positionOffset:wrapperOffset.get().gestureActive?wrapperOffset.get():undefined,disableHorizontalSafeAreas:disableHorizontalSafeAreas});if(!shown.get()&&!reduceMotion){if(pipX<0.5&&pipX>=0){x=-(ACTIVITY_PIP_SIZE.width+Math.max(safeArea.right,PIP_WINDOW_OFFSET));}else{x=windowDimensions.width+Math.max(safeArea.right,PIP_WINDOW_OFFSET);}}function transitionComplete(finished=false){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}return{opacity:reduceMotion?withTiming(shown.get()?1:0,REDUCED_MOTION_TIMING,'animate-always',transitionComplete):1,transform:[{translateY:withSpring(y,wrapperOffset.get().gestureActive?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always')},{translateX:withSpring(x,wrapperOffset.get().gestureActive?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always',!reduceMotion?transitionComplete:undefined)}]};}" };
const authStore5 = { code: "function transitionComplete_ActivityPanelPIPViewTsx2(finished=false){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}" };
const __initData3 = { code: "function ActivityPanelPIPViewTsx3(){const{runOnJS,setMode,ActivityPanelModes}=this.__closure;runOnJS(setMode)(ActivityPanelModes.PANEL);}" };
const memoResult = react.memo((transitionState) => {
  let _undefined;
  let activity;
  let c2;
  let portraitSafeAreasConfig;
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  dependencyMap = undefined;
  activity = undefined;
  let stateFromStores;
  let stateFromStores1;
  let memo;
  const tmp = transitionState;
  let obj = transitionState(504);
  const items = [EmbeddedActivitiesStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let obj2;
    const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
    const obj = { channelId: obj2.getEmbeddedActivityLocationChannelId(connectedActivityLocation), activity: EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(connectedActivityLocation) };
    obj2 = transitionState(c2[29]);
    return obj;
  });
  ({ channelId: c2, activity } = stateFromStoresObject);
  let applicationId;
  const tmp3 = EmbeddedActivitiesStore;
  if (activity != null) {
    applicationId = activity.applicationId;
  }
  const items1 = [tmp3];
  const tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(items1, () => {
    let pipOrientationLockStateForApp;
    if (null != applicationId) {
      pipOrientationLockStateForApp = EmbeddedActivitiesStore.getPipOrientationLockStateForApp(tmp);
    }
    return pipOrientationLockStateForApp;
  });
  const items2 = [memo];
  const tmpResult2 = tmp(504);
  stateFromStores1 = tmpResult2.useStateFromStores(items2, () => ChannelStore.getChannel(c2));
  const tmp8 = transitionCleanUp(1613)();
  let closure_0 = tmp8;
  const items3 = [tmp8.right];
  memo = activity.useMemo(f106272, items3);
  const items4 = [activity, stateFromStores1, memo, stateFromStores, transitionCleanUp, transitionState];
  return activity.useMemo(() => <BaseActivityPanelPIPView transitionState={transitionState} transitionCleanUp={transitionCleanUp} pipOrientationLockState={stateFromStores} hasActivity={null != activity} context={ActivityPanelStateContextDefault}>{null}</BaseActivityPanelPIPView>, items4);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelPIPView.tsx");

export default memoResult;
export const useBaseActivityPanelPIPView = function useBaseActivityPanelPIPView() {
  let items;
  const tmp = useSafeAreaInsetsDefault();
  let closure_0 = tmp;
  const obj = { landscapeSafeAreasConfig: react.useMemo(f106272, items) };
  items = [tmp.right];
  return obj;
};
export { BaseActivityPanelPIPView };
