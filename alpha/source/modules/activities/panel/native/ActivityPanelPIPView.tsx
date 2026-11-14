// Module ID: 19927
// Function ID: 19928
// Name: ActivityPanelPIPView
// Dependencies: [19, 17, 5307, 12904, 5155, 5154, 5959, 19778, 1072, 11986, 12706, 21, 1187, 5306, 575, 1630, 504, 1496, 19923, 11989, 1655, 19928, 5377, 1708, 5548, 5939, 19929, 19930, 1113, 5598, 5227, 19925, 12848, 2]
// Exports: useBaseActivityPanelPIPView

// Module 19927 (ActivityPanelPIPView)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11986 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 11989 */;
import Constants2 from "Constants" /* 12706 */;
import ActivityPanelNativeConstants from "ActivityPanelNativeConstants" /* 19778 */;
import ActivityPanelStateContextDefault from "ActivityPanelStateContext" /* 19925 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;
import SafeAreaDisabledStore from "SafeAreaDisabledStore" /* 12904 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 5154 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5959 */;
import native from "native" /* 1187 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let c10;
let closure_12;
let map1;
let obj2;
let obj3;
let unpackModuleId;
const f121650 = () => {
  let num;
  const _Math = Math;
  if (right != null) {
    num = right.right;
  }
  if (num == null) {
    num = 0;
  }
  const obj = { right: { disable: false, override: max(closure_2_13, num) } };
  ({ disable: false, override: max(closure_2_13, num) });
  return obj;
};
class BaseActivityPanelPIPView {
  constructor(arg0) {
    let children;
    let context;
    let hasActivity;
    let pipAvoidanceSpecs;
    let pipOrientationLockState;
    let pipState;
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
    let tmp34;
    let tmp37;
    let tmp38;
    let tmp39;
    let tmp40;
    let transitionCleanUp;
    let transitionState;
    let useReducedMotion;
    let wrapperDimensions;
    ({ transitionState, hasActivity, context } = arg0);
    let wrapperOffset;
    let setMode;
    let width;
    let height;
    ({ children, transitionCleanUp, pipOrientationLockState } = arg0);
    let tmp = closure_20();
    let tmp2 = wrapperOffset;
    let tmp3 = width;
    let obj = wrapperOffset(width[16]);
    let items = [AccessibilityStore];
    const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
    let tmp6 = setMode(width[17])();
    const obj2 = height;
    const tmp7 = setMode(width[15])();
    const context1 = height.useContext(context);
    wrapperOffset = context1.wrapperOffset;
    setMode = context1.setMode;
    ({ pipState, pipAvoidanceSpecs, wrapperDimensions } = context1);
    let obj3 = wrapperOffset(width[18]);
    const lockedWebView = obj3.useLockedWebView({ transitionState, hasActivity, context });
    const renderWebView = lockedWebView.renderWebView;
    let items1 = [wrapperOffset];
    const shown = lockedWebView.shown;
    const effect = height.useEffect(() => {
      updateSharedValueIfChangedDefault(wrapperOffset, { gestureActive: false });
    }, items1);
    const tmp11 = SafeAreaDisabledStore((shouldDisableSafeAreas) => shouldDisableSafeAreas.shouldDisableSafeAreas());
    const tmp12 = wrapperOffset(width[20]);
    let items2 = [closure_22, pipState, , , , , , , , , , , , , , , , , , , , ];
    const useAnimatedStyle = tmp12.useAnimatedStyle;
    items2[2] = wrapperOffset(width[21]).getClampedPIPPosition;
    size = ACTIVITY_PIP_SIZE;
    items2[3] = ACTIVITY_PIP_SIZE;
    items2[4] = tmp6;
    items2[5] = tmp7;
    items2[6] = pipAvoidanceSpecs;
    items2[7] = wrapperOffset;
    items2[8] = tmp11;
    items2[9] = shown;
    items2[10] = stateFromStores;
    items2[11] = PIP_WINDOW_OFFSET;
    items2[12] = closure_21;
    items2[13] = transitionState;
    items2[14] = wrapperOffset(width[22]).TransitionStates;
    items2[15] = wrapperOffset(width[23]).scheduleOnRN;
    items2[16] = transitionCleanUp;
    items2[17] = wrapperOffset(width[24]).withTiming;
    items2[18] = closure_19;
    items2[19] = wrapperOffset(width[25]).withSpring;
    items2[20] = closure_11;
    items2[21] = closure_12;
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
    let c19;
    let c20;
    [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34] = items2;
    class ActivityPanelPIPViewTsx2 {
      constructor() {
        let items2;
        let tmp12;
        let tmp13;
        let tmp14;
        let tmp15;
        let tmp16;
        let value;
        const point = _undefined.get();
        const x = point.x;
        size = { pipX: x, pipY: point.y, width: _undefined2.width, height: _undefined2.height, windowDimensions, safeArea, bottomAvoidanceRegion: _undefined3.get().bottom, topAvoidanceRegion: _undefined3.get().top, positionOffset: value, disableHorizontalSafeAreas };
        value = undefined;
        const tmp = c1;
        const tmp2 = _undefined2;
        const tmp3 = windowDimensions;
        if (_undefined4.get().gestureActive) {
          value = obj2.get();
        }
        const point2 = tmp(size);
        let x2 = point2.x;
        const y = point2.y;
        const obj3 = _undefined5;
        const tmp6 = _undefined5.get() || c9;
        if (!tmp6) {
          if (x < 0.5) {
            let sum;
            if (x >= 0) {
              const _Math2 = Math;
              sum = -tmp2.width + Math.max(tmp4.right, c10);
            }
            x2 = sum;
          }
          const _Math = Math;
          sum = tmp3.width + Math.max(tmp4.right, c10);
        }
        const items = [c11, c12, c13, c14, c15];
        [tmp12, tmp13, tmp14, tmp15, tmp16] = items;
        function transitionComplete() {
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
        }
        const items1 = [tmp13, tmp14, tmp15, tmp16];
        transitionComplete.__closure = items1;
        transitionComplete.__workletHash = 17198390609646;
        transitionComplete.__initData = tmp12;
        let num3 = 1;
        if (c9) {
          let num4 = 0;
          const tmp18 = c16;
          if (obj3.get()) {
            num4 = 1;
          }
          num3 = tmp18(num4, c17, "animate-always", transitionComplete);
        }
        const obj = { opacity: num3, transform: items2 };
        items2 = [{ translateY: _undefined(y, _undefined4.get().gestureActive ? c19 : c20, "animate-always") }, ];
        ({ translateY: _undefined(y, _undefined4.get().gestureActive ? c19 : c20, "animate-always") });
        let tmp24;
        const tmp23 = _undefined4.get().gestureActive ? c19 : c20;
        if (!c9) {
          tmp24 = transitionComplete;
        }
        items2[1] = { translateX: _undefined(x2, tmp23, "animate-always", tmp24) };
        ({ translateX: _undefined(x2, tmp23, "animate-always", tmp24) });
        return obj;
      }
    }
    const items3 = [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34];
    ActivityPanelPIPViewTsx2.__closure = items3;
    ActivityPanelPIPViewTsx2.__workletHash = 9482530480999;
    ActivityPanelPIPViewTsx2.__initData = tmp13;
    const animatedStyle = useAnimatedStyle(ActivityPanelPIPViewTsx2);
    const obj4 = { pipWidth: size.width, pipHeight: size.height, pipOrientationLockState, isLandscape: wrapperDimensions.isLandscape };
    const size2 = tmp5(tmp3[26])(obj4);
    width = size2.width;
    height = size2.height;
    const items4 = [width, height];
    const items5 = [closure_23, , , ];
    const memo = obj2.useMemo(() => {
      size = { width, height, pointerEvents: "none" };
      return size;
    }, items4);
    const useCallback = obj2.useCallback;
    items5[1] = tmp2(tmp3[23]).scheduleOnRN;
    items5[2] = setMode;
    items5[3] = constants;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    [tmp37, tmp38, tmp39, tmp40] = items5;
    class ActivityPanelPIPViewTsx3 {
      constructor() {
        _undefined(c1, _undefined2.PANEL);
      }
    }
    const items6 = [tmp38, tmp39, tmp40];
    ActivityPanelPIPViewTsx3.__closure = items6;
    ActivityPanelPIPViewTsx3.__workletHash = 10897460805018;
    ActivityPanelPIPViewTsx3.__initData = tmp37;
    const items7 = [setMode];
    const callback = useCallback(ActivityPanelPIPViewTsx3, items7);
    const obj5 = { panGestureEnabled: true, onTapGestureStart: callback, mode: tmp2(tmp3[27]).MorphablePanelModes.PIP, pipState, wrapperOffset, disableHorizontalSafeAreas: false };
    const items8 = [setMode];
    const tmp5Result = setMode(tmp3[27]);
    const tmp5ResultResult = tmp5Result(obj5);
    const memo1 = obj2.useMemo(() => {
      let intl;
      let items;
      const obj = {
        accessible: true,
        accessibilityLabel: intl.string(intl2.t["3ejJer"]),
        accessibilityRole: "button",
        accessibilityActions: items,
        onAccessibilityAction() {
          setMode(constants.PANEL);
        }
      };
      intl = intl2.intl;
      items = [{ name: "activate" }];
      return obj;
    }, items8);
    const ThemeContextProvider = tmp2(tmp3[22]).ThemeContextProvider;
    const items9 = [tmp.wrapper, animatedStyle];
    const View = tmp5(tmp3[20]).View;
    const merged = Object.assign(memo1);
    let tmp48 = !renderWebView;
    const obj8 = { gesture: tmp5ResultResult, children: null };
    const GestureDetector = tmp2(tmp3[29]).GestureDetector;
    if (renderWebView) {
      tmp48 = !hasActivity;
    }
    let tmp45Result = !tmp48;
    if (tmp45Result) {
      const obj10 = { style: memo, children };
      tmp45Result = tmp45(tmp47, obj10);
    }
    return <ThemeContextProvider theme={ThemeTypes.DARK}>{null}</ThemeContextProvider>;
  }
}
const View2 = react_native.View;
const ACTIVITY_PIP_SIZE = ActivityPanelConstants.ACTIVITY_PIP_SIZE;
({ ActivityPanelModes: c10, ACTIVITY_LAYOUT_PHYSICS_GESTURE: unpackModuleId, ACTIVITY_LAYOUT_PHYSICS_DEFAULT: closure_12, LANDSCAPE_IFRAME_HORIZONTAL_MARGIN: map1 } = ActivityPanelConstants);
let closure_14 = ActivityPanelNativeConstants.DEFAULT_PORTRAIT_LETTERBOX_CONFIG;
const ThemeTypes = Constants.ThemeTypes;
const PIP_WINDOW_OFFSET = MorphablePanelConstants.PIP_WINDOW_OFFSET;
const ActivityLayoutMode = Constants2.ActivityLayoutMode;
const jsx = Fragment.jsx;
let closure_19 = { duration: 300 };
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
let closure_21 = { code: "(function transitionComplete_ActivityPanelPIPViewTsx1(finished=false){let[transitionState,TransitionStates,scheduleOnRN,transitionCleanUp]=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){scheduleOnRN(transitionCleanUp);}})" };
let closure_22 = { code: "(function ActivityPanelPIPViewTsx2(){let[pipState,getClampedPIPPosition,ACTIVITY_PIP_SIZE,windowDimensions,safeArea,pipAvoidanceSpecs,wrapperOffset,disableHorizontalSafeAreas,shown,reduceMotion,PIP_WINDOW_OFFSET,_worklet_17198390609646_init_data,transitionState,TransitionStates,scheduleOnRN,transitionCleanUp,withTiming,REDUCED_MOTION_TIMING,withSpring,ACTIVITY_LAYOUT_PHYSICS_GESTURE,ACTIVITY_LAYOUT_PHYSICS_DEFAULT]=this.__closure;const{x:pipX,y:pipY}=pipState.get();let{x:x,y:y}=getClampedPIPPosition({pipX:pipX,pipY:pipY,width:ACTIVITY_PIP_SIZE.width,height:ACTIVITY_PIP_SIZE.height,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top,positionOffset:wrapperOffset.get().gestureActive?wrapperOffset.get():undefined,disableHorizontalSafeAreas:disableHorizontalSafeAreas});if(!shown.get()&&!reduceMotion){if(pipX<0.5&&pipX>=0){x=-(ACTIVITY_PIP_SIZE.width+Math.max(safeArea.right,PIP_WINDOW_OFFSET));}else{x=windowDimensions.width+Math.max(safeArea.right,PIP_WINDOW_OFFSET);}}const transitionComplete=function transitionComplete_ActivityPanelPIPViewTsx1Factory([_worklet_17198390609646_init_data,transitionState,TransitionStates,scheduleOnRN,transitionCleanUp]){const transitionComplete=function(finished=false){if(finished&&transitionState===TransitionStates.YEETED){scheduleOnRN(transitionCleanUp);}};transitionComplete.__closure=[transitionState,TransitionStates,scheduleOnRN,transitionCleanUp];transitionComplete.__workletHash=17198390609646;transitionComplete.__initData=_worklet_17198390609646_init_data;return transitionComplete;}([_worklet_17198390609646_init_data,transitionState,TransitionStates,scheduleOnRN,transitionCleanUp]);return{opacity:reduceMotion?withTiming(shown.get()?1:0,REDUCED_MOTION_TIMING,'animate-always',transitionComplete):1,transform:[{translateY:withSpring(y,wrapperOffset.get().gestureActive?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always')},{translateX:withSpring(x,wrapperOffset.get().gestureActive?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always',!reduceMotion?transitionComplete:undefined)}]};})" };
let closure_23 = { code: "(function ActivityPanelPIPViewTsx3(){let[scheduleOnRN,setMode,ActivityPanelModes]=this.__closure;scheduleOnRN(setMode,ActivityPanelModes.PANEL);})" };
const memoResult = react.memo(function ActivityPanelPIPView(transitionState) {
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
    obj2 = transitionState(c2[30]);
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
  const tmp8 = transitionCleanUp(1630)();
  let closure_0 = tmp8;
  const items3 = [tmp8.right];
  memo = activity.useMemo(f121650, items3);
  const items4 = [activity, stateFromStores1, memo, stateFromStores, transitionCleanUp, transitionState];
  return activity.useMemo(() => <BaseActivityPanelPIPView transitionState={transitionState} transitionCleanUp={transitionCleanUp} pipOrientationLockState={stateFromStores} hasActivity={null != activity} context={ActivityPanelStateContextDefault}>{null}</BaseActivityPanelPIPView>, items4);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelPIPView.tsx");

export default memoResult;
export function useBaseActivityPanelPIPView() {
  let items;
  const tmp = useSafeAreaInsetsDefault();
  let closure_0 = tmp;
  const obj = { landscapeSafeAreasConfig: react.useMemo(f121650, items) };
  items = [tmp.right];
  return obj;
}
export { BaseActivityPanelPIPView };
