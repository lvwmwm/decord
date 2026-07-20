// Module ID: 15564
// Function ID: 118778
// Name: useBaseActivityPanelPIPView
// Dependencies: []

// Module 15564 (useBaseActivityPanelPIPView)
function useBaseActivityPanelPIPView() {
  const tmp = importDefault(dependencyMap[15])();
  const arg1 = tmp;
  const items = [tmp.right];
  return {
    landscapeSafeAreasConfig: importAllResult.useMemo(() => {
      let obj = {};
      obj = { disable: false };
      let right;
      if (null != closure_14) {
        right = tmp.right;
      }
      let num = 0;
      if (null != right) {
        num = right;
      }
      obj.override = Math.max(closure_14, num);
      obj.right = obj;
      return obj;
    }, items)
  };
}
class BaseActivityPanelPIPView {
  constructor(arg0) {
    transitionState = global.transitionState;
    arg1 = transitionState;
    transitionCleanUp = global.transitionCleanUp;
    importDefault = transitionCleanUp;
    context = global.context;
    ({ children, pipOrientationLockState, hasActivity } = global);
    tmp = closure_20();
    obj = arg1(dependencyMap[16]);
    items = [];
    items[0] = closure_5;
    stateFromStores = obj.useStateFromStores(items, () => wrapperOffset.useReducedMotion);
    dependencyMap = stateFromStores;
    tmp3 = importDefault(dependencyMap[17])();
    defineProperty = tmp3;
    tmp4 = importDefault(dependencyMap[15])();
    View = tmp4;
    context = defineProperty.useContext(context);
    wrapperOffset = context.wrapperOffset;
    closure_5 = wrapperOffset;
    setMode = context.setMode;
    closure_6 = setMode;
    pipState = context.pipState;
    closure_7 = pipState;
    pipAvoidanceSpecs = context.pipAvoidanceSpecs;
    closure_8 = pipAvoidanceSpecs;
    obj2 = arg1(dependencyMap[18]);
    lockedWebView = obj2.useLockedWebView({ transitionState, context });
    shown = lockedWebView.shown;
    ActivityLayoutMode = shown;
    items1 = [];
    items1[0] = wrapperOffset;
    effect = defineProperty.useEffect(() => {
      transitionCleanUp(stateFromStores[19])(wrapperOffset, { gestureActive: false });
    }, items1);
    tmp8 = closure_6((shouldDisableSafeAreas) => shouldDisableSafeAreas.shouldDisableSafeAreas());
    ACTIVITY_PIP_SIZE = tmp8;
    obj3 = arg1(dependencyMap[20]);
    class J {
      constructor() {
        point = pipState.get();
        x = point.x;
        obj = transitionState(closure_2[21]);
        obj = { pipX: x, pipY: point.y, width: closure_10.width, height: closure_10.height, windowDimensions: closure_3, safeArea: closure_4, bottomAvoidanceRegion: pipAvoidanceSpecs.get().bottom, topAvoidanceRegion: pipAvoidanceSpecs.get().top };
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
          tmp14 = () => {
            function transitionComplete() {
              let flag = arg0;
              if (arg0 === undefined) {
                flag = false;
              }
              if (flag) {
                flag = callback === callback(closure_2[22]).TransitionStates.YEETED;
              }
              if (flag) {
                callback(closure_2[20]).runOnJS(closure_1)();
                const obj = callback(closure_2[20]);
              }
            }
            transitionComplete.__closure = { transitionState: callback, TransitionStates: callback(closure_2[22]).TransitionStates, runOnJS: callback(closure_2[20]).runOnJS, transitionCleanUp: closure_1 };
            transitionComplete.__workletHash = 7625774548373;
            transitionComplete.__initData = closure_22;
            return transitionComplete;
          }();
          obj1 = {};
          tmp15 = closure_2;
          num3 = 1;
          num4 = 1;
          if (closure_2) {
            tmp16 = transitionState;
            tmp17 = closure_2;
            num5 = 23;
            obj4 = transitionState(closure_2[23]);
            tmp18 = shown;
            num6 = 0;
            if (shown.get()) {
              num6 = 1;
            }
            tmp19 = closure_19;
            str = "animate-always";
            tmp20 = obj4;
            tmp21 = num6;
            tmp22 = tmp14;
            num4 = obj4.withTiming(num6, closure_19, "animate-always", tmp14);
          }
          obj1.opacity = num4;
          obj2 = {};
          tmp23 = transitionState;
          tmp24 = closure_2;
          num7 = 24;
          obj6 = transitionState(closure_2[24]);
          tmp25 = wrapperOffset;
          str2 = "animate-always";
          obj2.translateY = obj6.withSpring(point2.y, wrapperOffset.get().gestureActive ? height : closure_13, "animate-always");
          items = [, ];
          items[0] = obj2;
          obj3 = {};
          tmp26 = transitionState;
          tmp27 = closure_2;
          obj8 = transitionState(closure_2[24]);
          tmp28 = wrapperOffset;
          tmp29 = wrapperOffset.get().gestureActive ? height : closure_13;
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
            tmp7 = closure_17;
            sum = closure_3.width + Math.max(closure_4.right, closure_17);
            tmp13 = sum;
          } else {
            num2 = 0;
          }
          tmp9 = closure_10;
          tmp10 = globalThis;
          _Math2 = Math;
          tmp11 = closure_4;
          tmp12 = closure_17;
          sum = -closure_10.width + Math.max(closure_4.right, closure_17);
        }
        return;
      }
    }
    obj = { pipState, getClampedPIPPosition: arg1(dependencyMap[21]).getClampedPIPPosition, ACTIVITY_PIP_SIZE, windowDimensions: tmp3, safeArea: tmp4, pipAvoidanceSpecs, wrapperOffset, disableHorizontalSafeAreas: tmp8, shown, reduceMotion: stateFromStores, PIP_WINDOW_OFFSET, transitionState, TransitionStates: arg1(dependencyMap[22]).TransitionStates, runOnJS: arg1(dependencyMap[20]).runOnJS, transitionCleanUp, withTiming: arg1(dependencyMap[23]).withTiming, REDUCED_MOTION_TIMING: jsx, withSpring: arg1(dependencyMap[24]).withSpring, ACTIVITY_LAYOUT_PHYSICS_GESTURE: ActivityPanelModes, ACTIVITY_LAYOUT_PHYSICS_DEFAULT: ActivityPanelModes };
    J.__closure = obj;
    J.__workletHash = 14326479117867;
    J.__initData = closure_21;
    animatedStyle = obj3.useAnimatedStyle(J);
    obj1 = { pipWidth: ACTIVITY_PIP_SIZE.width, pipHeight: ACTIVITY_PIP_SIZE.height, pipOrientationLockState, isLandscape: context.wrapperDimensions.isLandscape };
    size = importDefault(dependencyMap[25])(obj1);
    width = size.width;
    ActivityPanelModes = width;
    height = size.height;
    ActivityPanelModes = height;
    items2 = [, ];
    items2[0] = width;
    items2[1] = height;
    class W {
      constructor() {
        obj = transitionState(closure_2[20]);
        tmp = obj.runOnJS(setMode)(width.PANEL);
        return;
      }
    }
    obj2 = {};
    memo = defineProperty.useMemo(() => ({ width, height, pointerEvents: "none" }), items2);
    obj2.runOnJS = arg1(dependencyMap[20]).runOnJS;
    obj2.setMode = setMode;
    obj2.ActivityPanelModes = ActivityPanelModes;
    W.__closure = obj2;
    W.__workletHash = 2951177166574;
    W.__initData = closure_23;
    items3 = [];
    items3[0] = setMode;
    callback = defineProperty.useCallback(W, items3);
    obj3 = { panGestureEnabled: true, onTapGestureStart: callback };
    tmp12 = importDefault(dependencyMap[26]);
    obj3.mode = arg1(dependencyMap[26]).MorphablePanelModes.PIP;
    obj3.pipState = pipState;
    obj3.wrapperOffset = wrapperOffset;
    obj3.disableHorizontalSafeAreas = false;
    items4 = [];
    items4[0] = setMode;
    tmp12Result = tmp12(obj3);
    memo1 = defineProperty.useMemo(() => {
      const obj = {};
      const intl = transitionState(stateFromStores[27]).intl;
      obj.accessibilityLabel = intl.string(transitionState(stateFromStores[27]).t.3ejJer);
      const items = [{ name: "activate" }];
      obj.accessibilityActions = items;
      obj.onAccessibilityAction = function onAccessibilityAction() {
        callback(constants.PANEL);
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
    obj5["children"] = tmp18(arg1(dependencyMap[29]).GestureDetector, obj6);
    obj4.children = tmp16(importDefault(dependencyMap[20]).View, obj5);
    return tmp15(arg1(dependencyMap[28]).ThemeContextProvider, obj4);
  }
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const ActivityLayoutMode = arg1(dependencyMap[6]).ActivityLayoutMode;
const tmp2 = arg1(dependencyMap[7]);
const ACTIVITY_PIP_SIZE = tmp2.ACTIVITY_PIP_SIZE;
({ ActivityPanelModes: closure_11, ACTIVITY_LAYOUT_PHYSICS_GESTURE: closure_12, ACTIVITY_LAYOUT_PHYSICS_DEFAULT: closure_13, LANDSCAPE_IFRAME_HORIZONTAL_MARGIN: closure_14 } = tmp2);
let closure_15 = arg1(dependencyMap[8]).DEFAULT_PORTRAIT_LETTERBOX_CONFIG;
const ThemeTypes = arg1(dependencyMap[9]).ThemeTypes;
const PIP_WINDOW_OFFSET = arg1(dependencyMap[10]).PIP_WINDOW_OFFSET;
const jsx = arg1(dependencyMap[11]).jsx;
let closure_19 = { duration: 300 };
let obj1 = arg1(dependencyMap[12]);
const boxShadowStyle = obj1.generateBoxShadowStyle(arg1(dependencyMap[12]).EXPERIMENTAL_HIGH_ELEVATION_SHADOW_PARAMS);
let obj = {};
obj = { borderRadius: importDefault(dependencyMap[14]).radii.lg };
const merged = Object.assign(ACTIVITY_PIP_SIZE);
const merged1 = Object.assign(boxShadowStyle);
obj.wrapper = obj;
obj1 = { borderRadius: importDefault(dependencyMap[14]).radii.lg, backgroundColor: importDefault(dependencyMap[14]).colors.BACKGROUND_BASE_LOW };
const merged2 = Object.assign(ACTIVITY_PIP_SIZE);
obj.mask = obj1;
let closure_20 = arg1(dependencyMap[13]).createStyles(obj);
let closure_21 = { code: "function ActivityPanelPIPViewTsx1(){const{pipState,getClampedPIPPosition,ACTIVITY_PIP_SIZE,windowDimensions,safeArea,pipAvoidanceSpecs,wrapperOffset,disableHorizontalSafeAreas,shown,reduceMotion,PIP_WINDOW_OFFSET,transitionState,TransitionStates,runOnJS,transitionCleanUp,withTiming,REDUCED_MOTION_TIMING,withSpring,ACTIVITY_LAYOUT_PHYSICS_GESTURE,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const{x:pipX,y:pipY}=pipState.get();let{x:x,y:y}=getClampedPIPPosition({pipX:pipX,pipY:pipY,width:ACTIVITY_PIP_SIZE.width,height:ACTIVITY_PIP_SIZE.height,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top,positionOffset:wrapperOffset.get().gestureActive?wrapperOffset.get():undefined,disableHorizontalSafeAreas:disableHorizontalSafeAreas});if(!shown.get()&&!reduceMotion){if(pipX<0.5&&pipX>=0){x=-(ACTIVITY_PIP_SIZE.width+Math.max(safeArea.right,PIP_WINDOW_OFFSET));}else{x=windowDimensions.width+Math.max(safeArea.right,PIP_WINDOW_OFFSET);}}function transitionComplete(finished=false){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}return{opacity:reduceMotion?withTiming(shown.get()?1:0,REDUCED_MOTION_TIMING,'animate-always',transitionComplete):1,transform:[{translateY:withSpring(y,wrapperOffset.get().gestureActive?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always')},{translateX:withSpring(x,wrapperOffset.get().gestureActive?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always',!reduceMotion?transitionComplete:undefined)}]};}" };
let closure_22 = { code: "function transitionComplete_ActivityPanelPIPViewTsx2(finished=false){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}" };
let closure_23 = { code: "function ActivityPanelPIPViewTsx3(){const{runOnJS,setMode,ActivityPanelModes}=this.__closure;runOnJS(setMode)(ActivityPanelModes.PANEL);}" };
const obj3 = arg1(dependencyMap[13]);
const memoResult = importAllResult.memo((transitionState) => {
  let activity;
  transitionState = transitionState.transitionState;
  const arg1 = transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  const importDefault = transitionCleanUp;
  let View;
  let closure_5;
  let closure_6;
  let closure_7;
  const items = [closure_8];
  const stateFromStoresObject = arg1(dependencyMap[16]).useStateFromStoresObject(items, () => {
    const connectedActivityLocation = store.getConnectedActivityLocation();
    const obj = { channelId: transitionState(closure_2[30]).getEmbeddedActivityLocationChannelId(connectedActivityLocation), activity: store.getSelfEmbeddedActivityForLocation(connectedActivityLocation) };
    return obj;
  });
  ({ channelId: closure_2, activity } = stateFromStoresObject);
  let applicationId;
  if (null != activity) {
    applicationId = activity.applicationId;
  }
  View = applicationId;
  const importAllResult = activity;
  const obj = arg1(dependencyMap[16]);
  const items1 = [closure_8];
  const stateFromStores = arg1(dependencyMap[16]).useStateFromStores(items1, () => {
    let pipOrientationLockStateForApp;
    if (null != applicationId) {
      pipOrientationLockStateForApp = store.getPipOrientationLockStateForApp(applicationId);
    }
    return pipOrientationLockStateForApp;
  });
  closure_5 = stateFromStores;
  const obj2 = arg1(dependencyMap[16]);
  const items2 = [closure_7];
  const stateFromStores1 = arg1(dependencyMap[16]).useStateFromStores(items2, () => landscapeSafeAreasConfig.getChannel(closure_2));
  closure_6 = stateFromStores1;
  const landscapeSafeAreasConfig = useBaseActivityPanelPIPView().landscapeSafeAreasConfig;
  closure_7 = landscapeSafeAreasConfig;
  const items3 = [activity, stateFromStores1, landscapeSafeAreasConfig, stateFromStores, transitionCleanUp, transitionState];
  return importAllResult.useMemo(() => {
    let obj = { transitionState, transitionCleanUp, pipOrientationLockState: stateFromStores, hasActivity: null != activity, context: transitionCleanUp(closure_2[31]), children: callback(transitionCleanUp(closure_2[32]), obj) };
    obj = { channel: stateFromStores1, layoutMode: constants.PIP, portraitSafeAreasConfig: closure_15, landscapeSafeAreasConfig };
    return callback(closure_25, obj);
  }, items3);
});
const result = arg1(dependencyMap[33]).fileFinishedImporting("modules/activities/panel/native/ActivityPanelPIPView.tsx");

export default memoResult;
export { useBaseActivityPanelPIPView };
export { BaseActivityPanelPIPView };
