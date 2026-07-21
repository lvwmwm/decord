// Module ID: 15564
// Function ID: 118768
// Name: BaseActivityPanelController
// Dependencies: []
// Exports: default

// Module 15564 (BaseActivityPanelController)
class BaseActivityPanelController {
  constructor(arg0) {
    ({ orientationLockStateForApp, mode } = global);
    arg1 = mode;
    ({ hasConnectedActivity, connectedActivityAppId } = global);
    importDefault = connectedActivityAppId;
    updateActivityPanelMode = global.updateActivityPanelMode;
    importAll = updateActivityPanelMode;
    closure_9 = undefined;
    closure_10 = undefined;
    OrientationLockState = undefined;
    ({ children, context, currentApp } = global);
    tmp = importDefault(dependencyMap[15])();
    tmp2 = importDefault(dependencyMap[16])();
    obj = arg1(dependencyMap[12]);
    sharedValue = obj.useSharedValue({});
    dependencyMap = sharedValue;
    tmp4 = importDefault(dependencyMap[17])(tmp);
    closure_4 = tmp4;
    obj2 = arg1(dependencyMap[12]);
    sharedValue1 = obj2.useSharedValue(jsx);
    closure_5 = sharedValue1;
    closure_6 = closure_5.useRef(mode);
    tmp6 = importDefault(dependencyMap[18])();
    closure_7 = tmp6;
    obj3 = arg1(dependencyMap[19]);
    isTabletActivitySurface = obj3.getIsTabletActivitySurface();
    closure_8 = isTabletActivitySurface;
    defaultOrientationLockState = orientationLockStateForApp;
    if (null == orientationLockStateForApp) {
      tmp9 = arg1;
      tmp10 = dependencyMap;
      obj4 = arg1(dependencyMap[19]);
      defaultOrientationLockState = obj4.getDefaultOrientationLockState(currentApp);
    }
    closure_9 = defaultOrientationLockState;
    tmp11 = f118786(tmp2, tmp.top, defaultOrientationLockState, isTabletActivitySurface);
    closure_10 = tmp11;
    OrientationLockState = closure_5.useRef(connectedActivityAppId);
    obj5 = arg1(dependencyMap[20]);
    isVoicePanelFullscreen = obj5.useIsVoicePanelFullscreen();
    tmp13 = importDefault(dependencyMap[21])();
    obj6 = arg1(dependencyMap[22]);
    navigatorBackPressHandler = obj6.useNavigatorBackPressHandler(() => {
      let flag = mode === constants.PANEL;
      if (flag) {
        updateActivityPanelMode(constants.PIP);
        flag = true;
      }
      return flag;
    });
    items = [, , , , , ];
    items[0] = connectedActivityAppId;
    items[1] = defaultOrientationLockState;
    items[2] = mode;
    items[3] = tmp11.isWindowLandscape;
    items[4] = isTabletActivitySurface;
    items[5] = updateActivityPanelMode;
    effect = closure_5.useEffect(() => {
      if (null != connectedActivityAppId) {
        if (null == ref2.current) {
          if (!connectedActivityAppId(sharedValue[23])(tmp11.isWindowLandscape, defaultOrientationLockState)) {
            if (!isTabletActivitySurface) {
              updateActivityPanelMode(constants.LAUNCHING_WITH_ORIENTATION_CHANGE);
            }
          }
          updateActivityPanelMode(constants.PANEL);
        }
        ref2.current = connectedActivityAppId;
      }
      if (null == connectedActivityAppId) {
        if (null != ref2.current) {
          updateActivityPanelMode(constants.DISCONNECTED);
        }
      }
      let tmp3 = mode === constants.LAUNCHING_WITH_ORIENTATION_CHANGE;
      if (tmp3) {
        tmp3 = connectedActivityAppId(sharedValue[23])(tmp11.isWindowLandscape, defaultOrientationLockState);
      }
      if (tmp3) {
        updateActivityPanelMode(constants.PANEL);
      }
    }, items);
    items1 = [, ];
    items1[0] = mode;
    items1[1] = sharedValue1;
    effect1 = closure_5.useEffect(() => {
      let tmp = mode === constants.PANEL;
      if (tmp) {
        tmp = ref.current !== constants.PANEL;
      }
      if (tmp) {
        mode(sharedValue[24]).dismissKeyboard();
        const result = sharedValue1.set(closure_16);
        const obj = mode(sharedValue[24]);
      }
      ref.current = mode;
    }, items1);
    obj = {};
    obj.isConnected = hasConnectedActivity;
    obj.selectedMode = mode;
    obj.isVoicePanelFullscreen = isVoicePanelFullscreen;
    obj.applicationId = connectedActivityAppId;
    obj.orientationLockStateForApp = orientationLockStateForApp;
    tmp17 = function useActivityOrientationState(isConnected) {
      isConnected = isConnected.isConnected;
      const mode = isConnected;
      const selectedMode = isConnected.selectedMode;
      const connectedActivityAppId = selectedMode;
      const isVoicePanelFullscreen = isConnected.isVoicePanelFullscreen;
      const updateActivityPanelMode = isVoicePanelFullscreen;
      let UNLOCKED = isConnected.orientationLockStateForApp;
      let sharedValue;
      if (null == UNLOCKED) {
        UNLOCKED = ref2.UNLOCKED;
      }
      sharedValue = UNLOCKED;
      const items = [isConnected.applicationId, isConnected, selectedMode, UNLOCKED, isVoicePanelFullscreen];
      const layoutEffect = sharedValue1.useLayoutEffect(() => {
        if (!isVoicePanelFullscreen) {
          if (selectedMode === constants.PANEL) {
            if (isConnected) {
              selectedMode(UNLOCKED[14])(UNLOCKED);
            }
          }
          const result = isConnected(UNLOCKED[13]).restoreDefaultOrientation();
          const obj = isConnected(UNLOCKED[13]);
        }
      }, items);
      const layoutEffect1 = sharedValue1.useLayoutEffect(() => () => callback(closure_3[13]).restoreDefaultOrientation(), []);
    }(obj);
    obj1 = {};
    obj1.isActivityConnected = hasConnectedActivity;
    if (hasConnectedActivity) {
      tmp18 = ActivityPanelModes;
      hasConnectedActivity = mode === ActivityPanelModes.PANEL;
    }
    obj1.isActivityFocused = hasConnectedActivity;
    obj1.isVoicePanelFullscreen = isVoicePanelFullscreen;
    tmp19 = function useSafeAreaLock(isActivityConnected) {
      isActivityConnected = isActivityConnected.isActivityConnected;
      const mode = isActivityConnected;
      const isActivityFocused = isActivityConnected.isActivityFocused;
      const connectedActivityAppId = isActivityFocused;
      const isVoicePanelFullscreen = isActivityConnected.isVoicePanelFullscreen;
      const updateActivityPanelMode = isVoicePanelFullscreen;
      const id = sharedValue1.useId();
      const sharedValue = id;
      const items = [id, isActivityConnected, isActivityFocused, isVoicePanelFullscreen];
      const layoutEffect = sharedValue1.useLayoutEffect(() => {
        if (!isVoicePanelFullscreen) {
          let fn;
          if (isActivityConnected) {
            const state = state.getState();
            const obj = { key: id, lockEnabled: isActivityFocused };
            const safeAreaDisableLock = state.requestSafeAreaDisableLock(obj);
            fn = () => {
              const state = state.getState();
              const safeAreaDisableLock = state.requestSafeAreaDisableLock({ key: closure_3, lockEnabled: false });
            };
          }
          return fn;
        }
      }, items);
    }(obj1);
    tmp20 = function useAppFreeze(sharedValue1) {
      const mode = sharedValue1;
      let obj = mode(sharedValue[11]);
      const isActivityPanelFullscreen = obj.useIsActivityPanelFullscreen();
      const connectedActivityAppId = isActivityPanelFullscreen;
      const tmp2 = tmp4(sharedValue1.useState(false), 2);
      const first = tmp2[0];
      const updateActivityPanelMode = first;
      let tmp4 = tmp2[1];
      const sharedValue = tmp4;
      const id = sharedValue1.useId();
      tmp4 = id;
      const fn = function l() {
        return arg0.get().gestureActive;
      };
      fn.__closure = { wrapperOffset: sharedValue1 };
      fn.__workletHash = 5299695936442;
      fn.__initData = closure_18;
      const fn2 = function s(arg0, arg1) {
        if (arg0 !== arg1) {
          const tmp4 = arg0(tmp4[12]).runOnJS(tmp4)(arg0);
          const obj = arg0(tmp4[12]);
        }
      };
      obj = { runOnJS: mode(sharedValue[12]).runOnJS, setWrapperGestureInProgress: tmp4 };
      fn2.__closure = obj;
      fn2.__workletHash = 5831467313798;
      fn2.__initData = closure_19;
      const animatedReaction = mode(sharedValue[12]).useAnimatedReaction(fn, fn2);
      const items = [isActivityPanelFullscreen, first, id];
      const effect = sharedValue1.useEffect(() => {
        const state = state.getState();
        const obj = {};
        let tmp = isActivityPanelFullscreen;
        if (isActivityPanelFullscreen) {
          tmp = first;
        }
        obj.lockEnabled = tmp;
        obj.key = id;
        const freezeLock = state.requestFreezeLock(obj);
        return () => {
          const state = state.getState();
          const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: closure_4 });
        };
      }, items);
    }(sharedValue1);
    items2 = [, , , , , , ];
    items2[0] = mode;
    items2[1] = tmp4;
    items2[2] = sharedValue;
    items2[3] = updateActivityPanelMode;
    items2[4] = tmp6;
    items2[5] = tmp11;
    items2[6] = sharedValue1;
    obj2 = { value: closure_5.useMemo(() => ({ mode, setMode: updateActivityPanelMode, wrapperDimensions: tmp11, pipState: sharedValue, pipAvoidanceSpecs: tmp4, wrapperOffset: sharedValue1, useActivityWebViewLock: tmp6 }), items2), children };
    return jsx(context.Provider, obj2);
  }
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importAll(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
({ OrientationLockState: closure_11, ACTIVITY_PORTRAIT_ASPECT_RATIO: closure_12, ACTIVITY_LANDSCAPE_ASPECT_RATIO: closure_13 } = arg1(dependencyMap[7]));
const ActivityPanelModes = arg1(dependencyMap[8]).ActivityPanelModes;
const jsx = arg1(dependencyMap[9]).jsx;
let closure_16 = {};
const tmp2 = arg1(dependencyMap[7]);
let closure_17 = arg1(dependencyMap[10]).cachedFunction((arg0, arg1, arg2, arg3) => {
  let height;
  let width;
  ({ width, height } = arg0);
  if (constants.LANDSCAPE === arg2) {
    if (arg3) {
      if (!tmp) {
        let obj = { width, height: width * closure_13 - arg1, isLandscape: true, isWindowLandscape: tmp };
      }
      return obj;
    }
    obj = {};
    const _Math3 = Math;
    obj.width = Math.max(width, height);
    const _Math4 = Math;
    obj.height = Math.min(height, width);
    obj.isLandscape = true;
    obj.isWindowLandscape = true;
  } else if (constants.PORTRAIT === arg2) {
    if (arg3) {
      if (tmp) {
        const obj1 = { width: height * closure_12, height, isLandscape: false, isWindowLandscape: tmp };
        let obj2 = obj1;
      }
      return obj2;
    }
    obj2 = {};
    const _Math = Math;
    obj2.width = Math.min(width, height);
    const _Math2 = Math;
    obj2.height = Math.max(height, width) - arg1;
    obj2.isLandscape = false;
    obj2.isWindowLandscape = false;
  } else {
    const UNLOCKED = constants.UNLOCKED;
    obj = { width };
    let diff = height;
    if (!tmp) {
      diff = height - arg1;
    }
    obj.height = diff;
    obj.isLandscape = tmp;
    obj.isWindowLandscape = tmp;
    return obj;
  }
});
let closure_18 = { code: "function ActivityPanelControllerTsx1(){const{wrapperOffset}=this.__closure;return wrapperOffset.get().gestureActive;}" };
let closure_19 = { code: "function ActivityPanelControllerTsx2(gestureActive,previous){const{runOnJS,setWrapperGestureInProgress}=this.__closure;if(gestureActive===previous)return;runOnJS(setWrapperGestureInProgress)(gestureActive);}" };
const obj = arg1(dependencyMap[10]);
const result = arg1(dependencyMap[32]).fileFinishedImporting("modules/activities/panel/native/ActivityPanelController.tsx");

export default function ActivityPanelController(children) {
  let connectedActivityAppId;
  let currentApp;
  let hasConnectedActivity;
  let orientationLockStateForApp;
  let obj = arg1(dependencyMap[25]);
  const items = [closure_10, closure_6];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const activityPanelMode = store.getActivityPanelMode();
    const connectedActivityLocation = store.getConnectedActivityLocation();
    const selfEmbeddedActivityForLocation = store.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
    let applicationId;
    if (null != selfEmbeddedActivityForLocation) {
      applicationId = selfEmbeddedActivityForLocation.applicationId;
    }
    let application;
    if (null != applicationId) {
      application = application.getApplication(applicationId);
    }
    let obj = mode(closure_3[26]);
    const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
    obj = { mode: activityPanelMode };
    let tmp8;
    if (null != embeddedActivityLocationChannelId) {
      if (!connectedActivityInTextChannelId(closure_3[27])(embeddedActivityLocationChannelId)) {
        tmp8 = embeddedActivityLocationChannelId;
      }
    }
    obj.connectedActivityInTextChannelId = tmp8;
    obj.hasConnectedActivity = null != selfEmbeddedActivityForLocation;
    obj.connectedActivityAppId = applicationId;
    obj.currentApp = application;
    let orientationLockStateForApp;
    if (null != applicationId) {
      orientationLockStateForApp = store.getOrientationLockStateForApp(applicationId);
    }
    obj.orientationLockStateForApp = orientationLockStateForApp;
    return obj;
  }, []);
  const mode = stateFromStoresObject.mode;
  const arg1 = mode;
  const connectedActivityInTextChannelId = stateFromStoresObject.connectedActivityInTextChannelId;
  const importDefault = connectedActivityInTextChannelId;
  const items1 = [mode, connectedActivityInTextChannelId];
  ({ hasConnectedActivity, connectedActivityAppId, currentApp, orientationLockStateForApp } = stateFromStoresObject);
  const effect = React.useEffect(() => {
    if (mode === constants.PANEL) {
      const channel = channel.getChannel(connectedActivityInTextChannelId);
      if (undefined !== channel) {
        let obj = connectedActivityInTextChannelId(closure_3[28]);
        obj = {};
        ({ guild_id: obj2.guildId, id: obj2.channelId } = channel);
        const channel1 = obj.selectChannel(obj);
        mode(closure_3[29]).transitionToChannel(channel.id);
        const obj3 = mode(closure_3[29]);
      }
    }
  }, items1);
  obj = { context: importDefault(dependencyMap[30]), orientationLockStateForApp, mode, hasConnectedActivity, connectedActivityAppId, currentApp, updateActivityPanelMode: importAll(dependencyMap[31]).updateActivityPanelMode, children: children.children };
  return <BaseActivityPanelController {...obj} />;
};
export { BaseActivityPanelController };
