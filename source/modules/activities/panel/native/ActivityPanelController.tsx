// Module ID: 15736
// Function ID: 121306
// Name: BaseActivityPanelController
// Dependencies: [57, 31, 4167, 8337, 10649, 1348, 1347, 4155, 10256, 33, 1916, 15737, 3991, 8347, 15738, 1557, 1450, 15739, 15742, 10629, 10662, 15743, 5093, 10631, 3989, 566, 3748, 10467, 4944, 4138, 15744, 10515, 2]
// Exports: default

// Module 15736 (BaseActivityPanelController)
import _slicedToArray from "_slicedToArray";
import _runPrimaryAppCommandOrJoinEmbeddedActivity from "_runPrimaryAppCommandOrJoinEmbeddedActivity";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import module_8337 from "module_8337";
import module_10649 from "module_10649";
import closure_9 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import items3 from "items3";
import { ActivityPanelModes } from "ActivityPanelModes";
import { jsx } from "jsxProd";
import areArraysShallowlyEqual from "areArraysShallowlyEqual";

let closure_11;
let closure_12;
let closure_13;
const require = arg1;
class BaseActivityPanelController {
  constructor(arg0) {
    ({ orientationLockStateForApp, mode } = global);
    ({ hasConnectedActivity, connectedActivityAppId } = global);
    updateActivityPanelMode = global.updateActivityPanelMode;
    c9 = undefined;
    c10 = undefined;
    useRef = undefined;
    ({ children, context, currentApp } = global);
    tmp = require("useSafeAreaInsets")();
    tmp2 = require("useWindowDimensions")();
    obj = require("module_3991");
    sharedValue = obj.useSharedValue({ x: -1, y: -1 });
    useSharedValue = sharedValue;
    tmp4 = require("usePIPAvoidanceSpecs")(tmp);
    _slicedToArray = tmp4;
    obj2 = require("module_3991");
    sharedValue1 = obj2.useSharedValue(jsx);
    c5 = sharedValue1;
    useRef = c5.useRef(mode);
    tmp6 = require("_createForOfIteratorHelperLoose")();
    c7 = tmp6;
    obj3 = require("getIsTabletActivitySurface");
    isTabletActivitySurface = obj3.getIsTabletActivitySurface();
    c8 = isTabletActivitySurface;
    defaultOrientationLockState = orientationLockStateForApp;
    if (null == orientationLockStateForApp) {
      tmp9 = mode;
      tmp10 = useSharedValue;
      obj4 = require("getIsTabletActivitySurface");
      defaultOrientationLockState = obj4.getDefaultOrientationLockState(currentApp);
    }
    c9 = defaultOrientationLockState;
    tmp11 = f121324(tmp2, tmp.top, defaultOrientationLockState, isTabletActivitySurface);
    c10 = tmp11;
    useRef = c5.useRef(connectedActivityAppId);
    obj5 = require("isVoicePanelEnabled");
    isVoicePanelFullscreen = obj5.useIsVoicePanelFullscreen();
    tmp13 = require("useHandleOAuthNavigation")();
    obj6 = require("useNavigatorBackPressHandler");
    navigatorBackPressHandler = obj6.useNavigatorBackPressHandler(() => {
      let flag = mode === outer1_14.PANEL;
      if (flag) {
        updateActivityPanelMode(outer1_14.PIP);
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
    effect = c5.useEffect(() => {
      if (null != connectedActivityAppId) {
        if (null == ref2.current) {
          if (!connectedActivityAppId(sharedValue[23])(_undefined.isWindowLandscape, defaultOrientationLockState)) {
            if (!isTabletActivitySurface) {
              updateActivityPanelMode(outer1_14.LAUNCHING_WITH_ORIENTATION_CHANGE);
            }
          }
          updateActivityPanelMode(outer1_14.PANEL);
        }
        ref2.current = connectedActivityAppId;
      }
      if (null == connectedActivityAppId) {
        if (null != ref2.current) {
          updateActivityPanelMode(outer1_14.DISCONNECTED);
        }
      }
      let tmp3 = mode === outer1_14.LAUNCHING_WITH_ORIENTATION_CHANGE;
      if (tmp3) {
        tmp3 = connectedActivityAppId(sharedValue[23])(_undefined.isWindowLandscape, defaultOrientationLockState);
      }
      if (tmp3) {
        updateActivityPanelMode(outer1_14.PANEL);
      }
    }, items);
    items1 = [, ];
    items1[0] = mode;
    items1[1] = sharedValue1;
    effect1 = c5.useEffect(() => {
      let tmp = mode === outer1_14.PANEL;
      if (tmp) {
        tmp = ref.current !== outer1_14.PANEL;
      }
      if (tmp) {
        mode(sharedValue[24]).dismissKeyboard();
        const result = sharedValue1.set(outer1_16);
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
    tmp17 = (function useActivityOrientationState(isConnected) {
      isConnected = isConnected.isConnected;
      const selectedMode = isConnected.selectedMode;
      const isVoicePanelFullscreen = isConnected.isVoicePanelFullscreen;
      let UNLOCKED = isConnected.orientationLockStateForApp;
      UNLOCKED = undefined;
      if (null == UNLOCKED) {
        UNLOCKED = ref2.UNLOCKED;
      }
      const items = [isConnected.applicationId, isConnected, selectedMode, UNLOCKED, isVoicePanelFullscreen];
      const layoutEffect = sharedValue1.useLayoutEffect(() => {
        if (!isVoicePanelFullscreen) {
          if (selectedMode === outer2_14.PANEL) {
            if (isConnected) {
              connectedActivityAppId(sharedValue[14])(UNLOCKED);
            }
          }
          const result = mode(sharedValue[13]).restoreDefaultOrientation();
          const obj = mode(sharedValue[13]);
        }
      }, items);
      const layoutEffect1 = sharedValue1.useLayoutEffect(() => () => mode(sharedValue[13]).restoreDefaultOrientation(), []);
    })(obj);
    obj1 = {};
    obj1.isActivityConnected = hasConnectedActivity;
    if (hasConnectedActivity) {
      tmp18 = ActivityPanelModes;
      hasConnectedActivity = mode === ActivityPanelModes.PANEL;
    }
    obj1.isActivityFocused = hasConnectedActivity;
    obj1.isVoicePanelFullscreen = isVoicePanelFullscreen;
    tmp19 = (function useSafeAreaLock(isActivityConnected) {
      isActivityConnected = isActivityConnected.isActivityConnected;
      const isActivityFocused = isActivityConnected.isActivityFocused;
      const isVoicePanelFullscreen = isActivityConnected.isVoicePanelFullscreen;
      const id = sharedValue1.useId();
      const items = [id, isActivityConnected, isActivityFocused, isVoicePanelFullscreen];
      const layoutEffect = sharedValue1.useLayoutEffect(() => {
        if (!isVoicePanelFullscreen) {
          let fn;
          if (isActivityConnected) {
            let state = isTabletActivitySurface.getState();
            const obj = { key: id, lockEnabled: isActivityFocused };
            let safeAreaDisableLock = state.requestSafeAreaDisableLock(obj);
            fn = () => {
              const state = isTabletActivitySurface.getState();
              const safeAreaDisableLock = state.requestSafeAreaDisableLock({ key: outer1_3, lockEnabled: false });
            };
          }
          return fn;
        }
      }, items);
    })(obj1);
    tmp20 = (function useAppFreeze(sharedValue1) {
      let closure_0 = sharedValue1;
      let obj = mode(sharedValue[11]);
      const isActivityPanelFullscreen = obj.useIsActivityPanelFullscreen();
      const tmp2 = tmp4(sharedValue1.useState(false), 2);
      const first = tmp2[0];
      sharedValue = tmp4;
      const id = sharedValue1.useId();
      const fn = function l() {
        return sharedValue1.get().gestureActive;
      };
      fn.__closure = { wrapperOffset: sharedValue1 };
      fn.__workletHash = 5299695936442;
      fn.__initData = outer1_18;
      const fn2 = function s(arg0, arg1) {
        if (arg0 !== arg1) {
          mode(sharedValue[12]).runOnJS(closure_3)(arg0);
          const obj = mode(sharedValue[12]);
        }
      };
      obj = { runOnJS: mode(sharedValue[12]).runOnJS, setWrapperGestureInProgress: tmp4 };
      fn2.__closure = obj;
      fn2.__workletHash = 5831467313798;
      fn2.__initData = outer1_19;
      const animatedReaction = mode(sharedValue[12]).useAnimatedReaction(fn, fn2);
      const items = [isActivityPanelFullscreen, first, id];
      const effect = sharedValue1.useEffect(() => {
        state = state.getState();
        const obj = {};
        let tmp = isActivityPanelFullscreen;
        if (isActivityPanelFullscreen) {
          tmp = first;
        }
        obj.lockEnabled = tmp;
        obj.key = id;
        let freezeLock = state.requestFreezeLock(obj);
        return () => {
          state = state.getState();
          const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: outer1_4 });
        };
      }, items);
    })(sharedValue1);
    items2 = [, , , , , , ];
    items2[0] = mode;
    items2[1] = tmp4;
    items2[2] = sharedValue;
    items2[3] = updateActivityPanelMode;
    items2[4] = tmp6;
    items2[5] = tmp11;
    items2[6] = sharedValue1;
    obj2 = { value: c5.useMemo(() => ({ mode, setMode: updateActivityPanelMode, wrapperDimensions: c10, pipState: sharedValue, pipAvoidanceSpecs: _slicedToArray, wrapperOffset: sharedValue1, useActivityWebViewLock: module_8337 }), items2), children };
    return jsx(context.Provider, obj2);
  }
}
({ OrientationLockState: closure_11, ACTIVITY_PORTRAIT_ASPECT_RATIO: closure_12, ACTIVITY_LANDSCAPE_ASPECT_RATIO: closure_13 } = items3);
let closure_16 = { x: 0, y: 0, gestureActive: false };
let closure_17 = areArraysShallowlyEqual.cachedFunction((arg0, arg1, arg2, arg3) => {
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
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/activities/panel/native/ActivityPanelController.tsx");

export default function ActivityPanelController(children) {
  let connectedActivityAppId;
  let currentApp;
  let hasConnectedActivity;
  let orientationLockStateForApp;
  let obj = mode(566);
  const items = [_createForOfIteratorHelperLoose, _isNativeReflectConstruct];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const activityPanelMode = outer1_10.getActivityPanelMode();
    const connectedActivityLocation = outer1_10.getConnectedActivityLocation();
    const selfEmbeddedActivityForLocation = outer1_10.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
    let applicationId;
    if (null != selfEmbeddedActivityForLocation) {
      applicationId = selfEmbeddedActivityForLocation.applicationId;
    }
    let application;
    if (null != applicationId) {
      application = outer1_6.getApplication(applicationId);
    }
    let obj = mode(outer1_3[26]);
    const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
    obj = { mode: activityPanelMode };
    let tmp8;
    if (null != embeddedActivityLocationChannelId) {
      if (!connectedActivityInTextChannelId(outer1_3[27])(embeddedActivityLocationChannelId)) {
        tmp8 = embeddedActivityLocationChannelId;
      }
    }
    obj.connectedActivityInTextChannelId = tmp8;
    obj.hasConnectedActivity = null != selfEmbeddedActivityForLocation;
    obj.connectedActivityAppId = applicationId;
    obj.currentApp = application;
    let orientationLockStateForApp;
    if (null != applicationId) {
      orientationLockStateForApp = outer1_10.getOrientationLockStateForApp(applicationId);
    }
    obj.orientationLockStateForApp = orientationLockStateForApp;
    return obj;
  }, []);
  mode = stateFromStoresObject.mode;
  const connectedActivityInTextChannelId = stateFromStoresObject.connectedActivityInTextChannelId;
  const items1 = [mode, connectedActivityInTextChannelId];
  ({ hasConnectedActivity, connectedActivityAppId, currentApp, orientationLockStateForApp } = stateFromStoresObject);
  const effect = React.useEffect(() => {
    if (mode === outer1_14.PANEL) {
      const channel = outer1_9.getChannel(connectedActivityInTextChannelId);
      if (undefined !== channel) {
        let obj = connectedActivityInTextChannelId(outer1_3[28]);
        obj = {};
        ({ guild_id: obj2.guildId, id: obj2.channelId } = channel);
        const channel1 = obj.selectChannel(obj);
        mode(outer1_3[29]).transitionToChannel(channel.id);
        const obj3 = mode(outer1_3[29]);
      }
    }
  }, items1);
  obj = { context: connectedActivityInTextChannelId(15744), orientationLockStateForApp, mode, hasConnectedActivity, connectedActivityAppId, currentApp, updateActivityPanelMode: importAll(10515).updateActivityPanelMode, children: children.children };
  return <BaseActivityPanelController context={connectedActivityInTextChannelId(15744)} orientationLockStateForApp={orientationLockStateForApp} mode={mode} hasConnectedActivity={hasConnectedActivity} connectedActivityAppId={connectedActivityAppId} currentApp={currentApp} updateActivityPanelMode={importAll(10515).updateActivityPanelMode}>{arg0.children}</BaseActivityPanelController>;
};
export { BaseActivityPanelController };
