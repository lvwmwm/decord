// Module ID: 15699
// Function ID: 121057
// Name: useBaseActivityPanelPIPView
// Dependencies: [31, 27, 4122, 10620, 1348, 1347, 4155, 10226, 15700, 653, 10016, 33, 1273, 4130, 689, 1557, 566, 1450, 15695, 10019, 3991, 15701, 4476, 4131, 4542, 15702, 15703, 1212, 3842, 5217, 3748, 15697, 10601, 2]

// Module 15699 (useBaseActivityPanelPIPView)
import importAllResult from "useActivityWebViewLock";
import { View } from "getSystemLocale";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import module_10620 from "module_10620";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_createForOfIteratorHelperLoose";
import { ActivityLayoutMode } from "items3";
import ActivityPanelModes from "ActivityPanelModes";
import { DEFAULT_PORTRAIT_LETTERBOX_CONFIG as closure_15 } from "DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG";
import { ThemeTypes } from "ME";
import { PIP_WINDOW_OFFSET } from "MIN_PAN_GESTURE_MOVE";
import { jsx } from "set";
import Button from "Button";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_13;
let closure_14;
let require = arg1;
function useBaseActivityPanelPIPView() {
  const tmp = importDefault(1557)();
  const require = tmp;
  const items = [tmp.right];
  return {
    landscapeSafeAreasConfig: importAllResult.useMemo(() => {
      let obj = {};
      obj = { disable: false };
      let right;
      if (null != outer1_14) {
        right = tmp.right;
      }
      let num = 0;
      if (null != right) {
        num = right;
      }
      obj.override = Math.max(outer1_14, num);
      obj.right = obj;
      return obj;
    }, items)
  };
}
class BaseActivityPanelPIPView {
  constructor(arg0) {
    transitionState = global.transitionState;
    transitionCleanUp = global.transitionCleanUp;
    context = global.context;
    ({ children, pipOrientationLockState, hasActivity } = global);
    tmp = c20();
    obj = require("initialize");
    items = [];
    items[0] = wrapperOffset;
    stateFromStores = obj.useStateFromStores(items, () => wrapperOffset.useReducedMotion);
    closure_2 = stateFromStores;
    tmp3 = require("useWindowDimensions")();
    defineProperty = tmp3;
    tmp4 = require("useSafeAreaInsets")();
    View = tmp4;
    context = defineProperty.useContext(context);
    wrapperOffset = context.wrapperOffset;
    setMode = context.setMode;
    pipState = context.pipState;
    pipAvoidanceSpecs = context.pipAvoidanceSpecs;
    obj2 = require("_createForOfIteratorHelperLoose");
    lockedWebView = obj2.useLockedWebView({ transitionState, context });
    shown = lockedWebView.shown;
    items1 = [];
    items1[0] = wrapperOffset;
    effect = defineProperty.useEffect(() => {
      transitionCleanUp(stateFromStores[19])(wrapperOffset, { gestureActive: false });
    }, items1);
    tmp8 = setMode((shouldDisableSafeAreas) => shouldDisableSafeAreas.shouldDisableSafeAreas());
    ACTIVITY_PIP_SIZE = tmp8;
    obj3 = require("module_3991");
    class J {
      constructor() {
        point = pipState.get();
        x = point.x;
        obj = require("clamp");
        obj = { pipX: x, pipY: point.y, width: outer1_10.width, height: outer1_10.height, windowDimensions: closure_3, safeArea: closure_4, bottomAvoidanceRegion: pipAvoidanceSpecs.get().bottom, topAvoidanceRegion: pipAvoidanceSpecs.get().top };
        value = undefined;
        if (wrapperOffset.get().gestureActive) {
          tmp2 = wrapperOffset;
          value = wrapperOffset.get();
        }
        obj.positionOffset = value;
        obj.disableHorizontalSafeAreas = closure_10;
        point2 = obj.getClampedPIPPosition(obj);
        x2 = point2.x;
        tmp3 = shown.get() || closure_2;
        if (tmp3) {
          tmp14 = (() => {
            function transitionComplete() {
              let flag = arg0;
              if (arg0 === undefined) {
                flag = false;
              }
              if (flag) {
                flag = outer2_0 === transitionState(stateFromStores[22]).TransitionStates.YEETED;
              }
              if (flag) {
                transitionState(stateFromStores[20]).runOnJS(outer2_1)();
                const obj = transitionState(stateFromStores[20]);
              }
            }
            transitionComplete.__closure = { transitionState: outer1_0, TransitionStates: transitionState(stateFromStores[22]).TransitionStates, runOnJS: transitionState(stateFromStores[20]).runOnJS, transitionCleanUp: outer1_1 };
            transitionComplete.__workletHash = 7625774548373;
            transitionComplete.__initData = outer2_22;
            return transitionComplete;
          })();
          obj1 = {};
          tmp15 = closure_2;
          num3 = 1;
          num4 = 1;
          if (closure_2) {
            tmp16 = transitionState;
            tmp17 = outer1_2;
            num5 = 23;
            obj4 = require("withTiming");
            tmp18 = shown;
            num6 = 0;
            if (shown.get()) {
              num6 = 1;
            }
            tmp19 = outer1_19;
            str = "animate-always";
            tmp20 = obj4;
            tmp21 = num6;
            tmp22 = tmp14;
            num4 = obj4.withTiming(num6, outer1_19, "animate-always", tmp14);
          }
          obj1.opacity = num4;
          obj2 = {};
          tmp23 = transitionState;
          tmp24 = outer1_2;
          num7 = 24;
          obj6 = require("withSpring");
          tmp25 = wrapperOffset;
          str2 = "animate-always";
          obj2.translateY = obj6.withSpring(point2.y, wrapperOffset.get().gestureActive ? height : outer1_13, "animate-always");
          items = [, ];
          items[0] = obj2;
          obj3 = {};
          tmp26 = transitionState;
          tmp27 = outer1_2;
          obj8 = require("withSpring");
          tmp28 = wrapperOffset;
          tmp29 = wrapperOffset.get().gestureActive ? height : outer1_13;
          tmp30 = closure_2;
          tmp31 = undefined;
          if (!closure_2) {
            tmp31 = tmp14;
          }
          tmp32 = obj8;
          tmp33 = x2;
          tmp34 = tmp29;
          str3 = "animate-always";
          tmp35 = tmp31;
          obj3.translateX = obj8.withSpring(x2, tmp29, "animate-always", tmp31);
          items[1] = obj3;
          obj1.transform = items;
          return obj1;
        } else {
          num = 0.5;
          if (x >= 0.5) {
            tmp4 = closure_3;
            tmp5 = globalThis;
            _Math = Math;
            tmp6 = closure_4;
            tmp7 = outer1_17;
            sum = closure_3.width + Math.max(closure_4.right, outer1_17);
            tmp13 = sum;
          } else {
            num2 = 0;
          }
          tmp9 = outer1_10;
          tmp10 = globalThis;
          _Math2 = Math;
          tmp11 = closure_4;
          tmp12 = outer1_17;
          sum = -outer1_10.width + Math.max(closure_4.right, outer1_17);
        }
        return;
      }
    }
    obj = { pipState, getClampedPIPPosition: require("clamp").getClampedPIPPosition, ACTIVITY_PIP_SIZE, windowDimensions: tmp3, safeArea: tmp4, pipAvoidanceSpecs, wrapperOffset, disableHorizontalSafeAreas: tmp8, shown, reduceMotion: stateFromStores, PIP_WINDOW_OFFSET, transitionState, TransitionStates: require("_createForOfIteratorHelperLoose").TransitionStates, runOnJS: require("module_3991").runOnJS, transitionCleanUp, withTiming: require("withTiming").withTiming, REDUCED_MOTION_TIMING: jsx, withSpring: require("withSpring").withSpring, ACTIVITY_LAYOUT_PHYSICS_GESTURE: height, ACTIVITY_LAYOUT_PHYSICS_DEFAULT: ActivityPanelModes };
    J.__closure = obj;
    J.__workletHash = 14326479117867;
    J.__initData = c21;
    animatedStyle = obj3.useAnimatedStyle(J);
    obj1 = { pipWidth: ACTIVITY_PIP_SIZE.width, pipHeight: ACTIVITY_PIP_SIZE.height, pipOrientationLockState, isLandscape: context.wrapperDimensions.isLandscape };
    size = require("OrientationLockState")(obj1);
    width = size.width;
    height = size.height;
    items2 = [, ];
    items2[0] = width;
    items2[1] = height;
    class W {
      constructor() {
        obj = require("module_3991");
        tmp = obj.runOnJS(setMode)(width.PANEL);
        return;
      }
    }
    obj2 = {};
    memo = defineProperty.useMemo(() => ({ width, height, pointerEvents: "none" }), items2);
    obj2.runOnJS = require("module_3991").runOnJS;
    obj2.setMode = setMode;
    obj2.ActivityPanelModes = width;
    W.__closure = obj2;
    W.__workletHash = 2951177166574;
    W.__initData = c23;
    items3 = [];
    items3[0] = setMode;
    callback = defineProperty.useCallback(W, items3);
    obj3 = { panGestureEnabled: true, onTapGestureStart: callback };
    tmp12 = require("MorphablePanelModes");
    obj3.mode = require("MorphablePanelModes").MorphablePanelModes.PIP;
    obj3.pipState = pipState;
    obj3.wrapperOffset = wrapperOffset;
    obj3.disableHorizontalSafeAreas = false;
    items4 = [];
    items4[0] = setMode;
    tmp12Result = tmp12(obj3);
    memo1 = defineProperty.useMemo(() => {
      const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "button" };
      const intl = transitionState(stateFromStores[27]).intl;
      obj.accessibilityLabel = intl.string(transitionState(stateFromStores[27]).t["3ejJer"]);
      const items = [{ name: "activate" }];
      obj.accessibilityActions = items;
      obj.onAccessibilityAction = function onAccessibilityAction() {
        outer1_6(width.PANEL);
      };
      return obj;
    }, items4);
    tmp15 = jsx;
    obj4 = { theme: ThemeTypes.DARK };
    tmp16 = jsx;
    obj5 = { style: items5 };
    items5 = [, ];
    items5[0] = tmp.wrapper;
    items5[1] = animatedStyle;
    merged = Object.assign(memo1);
    tmp18 = jsx;
    obj6 = { gesture: tmp12Result };
    obj7 = { style: tmp.mask };
    tmp21 = !lockedWebView.renderWebView;
    tmp19 = jsx;
    tmp20 = View;
    if (!tmp21) {
      tmp21 = !hasActivity;
    }
    tmp22 = !tmp21;
    if (!tmp21) {
      tmp23 = jsx;
      tmp24 = View;
      obj8 = {};
      obj8.style = memo;
      obj8.children = children;
      tmp22 = jsx(View, obj8);
    }
    obj7.children = tmp22;
    obj6.children = tmp19(tmp20, obj7);
    obj5["children"] = tmp18(require("Directions").GestureDetector, obj6);
    obj4.children = tmp16(require("module_3991").View, obj5);
    return tmp15(require("ManaContext").ThemeContextProvider, obj4);
  }
}
let ACTIVITY_PIP_SIZE = ActivityPanelModes.ACTIVITY_PIP_SIZE;
({ ActivityPanelModes: closure_11, ACTIVITY_LAYOUT_PHYSICS_GESTURE: closure_12, ACTIVITY_LAYOUT_PHYSICS_DEFAULT: closure_13, LANDSCAPE_IFRAME_HORIZONTAL_MARGIN: closure_14 } = ActivityPanelModes);
let closure_19 = { duration: 300 };
const boxShadowStyle = Button.generateBoxShadowStyle(require("Button").EXPERIMENTAL_HIGH_ELEVATION_SHADOW_PARAMS);
let obj = {};
obj = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
let merged = Object.assign(ACTIVITY_PIP_SIZE);
const merged1 = Object.assign(boxShadowStyle);
obj.wrapper = obj;
Button = { flexDirection: "row", alignItems: "center", justifyContent: "center", overflow: "hidden", borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
const merged2 = Object.assign(ACTIVITY_PIP_SIZE);
obj.mask = Button;
let closure_20 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_21 = { code: "function ActivityPanelPIPViewTsx1(){const{pipState,getClampedPIPPosition,ACTIVITY_PIP_SIZE,windowDimensions,safeArea,pipAvoidanceSpecs,wrapperOffset,disableHorizontalSafeAreas,shown,reduceMotion,PIP_WINDOW_OFFSET,transitionState,TransitionStates,runOnJS,transitionCleanUp,withTiming,REDUCED_MOTION_TIMING,withSpring,ACTIVITY_LAYOUT_PHYSICS_GESTURE,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const{x:pipX,y:pipY}=pipState.get();let{x:x,y:y}=getClampedPIPPosition({pipX:pipX,pipY:pipY,width:ACTIVITY_PIP_SIZE.width,height:ACTIVITY_PIP_SIZE.height,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top,positionOffset:wrapperOffset.get().gestureActive?wrapperOffset.get():undefined,disableHorizontalSafeAreas:disableHorizontalSafeAreas});if(!shown.get()&&!reduceMotion){if(pipX<0.5&&pipX>=0){x=-(ACTIVITY_PIP_SIZE.width+Math.max(safeArea.right,PIP_WINDOW_OFFSET));}else{x=windowDimensions.width+Math.max(safeArea.right,PIP_WINDOW_OFFSET);}}function transitionComplete(finished=false){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}return{opacity:reduceMotion?withTiming(shown.get()?1:0,REDUCED_MOTION_TIMING,'animate-always',transitionComplete):1,transform:[{translateY:withSpring(y,wrapperOffset.get().gestureActive?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always')},{translateX:withSpring(x,wrapperOffset.get().gestureActive?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always',!reduceMotion?transitionComplete:undefined)}]};}" };
let closure_22 = { code: "function transitionComplete_ActivityPanelPIPViewTsx2(finished=false){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}" };
let closure_23 = { code: "function ActivityPanelPIPViewTsx3(){const{runOnJS,setMode,ActivityPanelModes}=this.__closure;runOnJS(setMode)(ActivityPanelModes.PANEL);}" };
const memoResult = importAllResult.memo((transitionState) => {
  let activity;
  let dependencyMap;
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  let applicationId;
  let stateFromStores;
  let stateFromStores1;
  let landscapeSafeAreasConfig;
  const items = [closure_8];
  const stateFromStoresObject = transitionState(566).useStateFromStoresObject(items, () => {
    const connectedActivityLocation = outer1_8.getConnectedActivityLocation();
    const obj = { channelId: transitionState(outer1_2[30]).getEmbeddedActivityLocationChannelId(connectedActivityLocation), activity: outer1_8.getSelfEmbeddedActivityForLocation(connectedActivityLocation) };
    return obj;
  });
  ({ channelId: dependencyMap, activity } = stateFromStoresObject);
  applicationId = undefined;
  if (null != activity) {
    applicationId = activity.applicationId;
  }
  let obj = transitionState(566);
  const items1 = [closure_8];
  stateFromStores = transitionState(566).useStateFromStores(items1, () => {
    let pipOrientationLockStateForApp;
    if (null != applicationId) {
      pipOrientationLockStateForApp = outer1_8.getPipOrientationLockStateForApp(applicationId);
    }
    return pipOrientationLockStateForApp;
  });
  const obj2 = transitionState(566);
  const items2 = [landscapeSafeAreasConfig];
  stateFromStores1 = transitionState(566).useStateFromStores(items2, () => landscapeSafeAreasConfig.getChannel(closure_2));
  landscapeSafeAreasConfig = useBaseActivityPanelPIPView().landscapeSafeAreasConfig;
  const items3 = [activity, stateFromStores1, landscapeSafeAreasConfig, stateFromStores, transitionCleanUp, transitionState];
  return activity.useMemo(() => {
    obj = { transitionState, transitionCleanUp, pipOrientationLockState: stateFromStores, hasActivity: null != activity, context: transitionCleanUp(outer1_2[31]), children: outer1_18(transitionCleanUp(outer1_2[32]), obj) };
    obj = { channel: stateFromStores1, layoutMode: outer1_9.PIP, portraitSafeAreasConfig: outer1_15, landscapeSafeAreasConfig };
    return outer1_18(outer1_25, obj);
  }, items3);
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/activities/panel/native/ActivityPanelPIPView.tsx");

export default memoResult;
export { useBaseActivityPanelPIPView };
export { BaseActivityPanelPIPView };
