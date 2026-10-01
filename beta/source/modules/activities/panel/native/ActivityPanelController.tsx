// Module ID: 16831
// Function ID: 16832
// Name: ActivityPanelController
// Dependencies: [32, 19, 5063, 7738, 8939, 2045, 2044, 2005, 8502, 21, 2019, 16832, 4566, 7780, 16833, 1613, 1479, 16834, 16837, 8834, 8914, 8963, 16838, 5942, 8916, 4701, 504, 4458, 8803, 5723, 4847, 16839, 8782, 2]
// Exports: default

// Module 16831 (ActivityPanelController)
import Fragment from "Fragment" /* 21 */;
import ChatInputUtils from "ChatInputUtils" /* 4701 */;
import transitionToChannel from "transitionToChannel" /* 4847 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5723 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 8502 */;
import EmbeddedActivitiesActionCreatorsAll from "EmbeddedActivitiesActionCreators" /* 8782 */;
import doesOrientationMatchLockStateDefault from "doesOrientationMatchLockState" /* 8916 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5063 */;
import AppFreezeStore from "AppFreezeStore" /* 7738 */;
import SafeAreaDisabledStore from "SafeAreaDisabledStore" /* 8939 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import Constants from "Constants" /* 2005 */;
import FunctionUtils from "FunctionUtils" /* 2019 */;
import size_mod from "module_2" /* 2 */;

let application, constants;

let closure_12;
let unpackModuleId;
class BaseActivityPanelController {
  constructor(updateActivityPanelMode) {
    let children;
    let connectedActivityAppId;
    let context;
    let currentApp;
    let hasConnectedActivity;
    let mode;
    let orientationLockStateForApp;
    let pipAvoidanceSpecs;
    let ref2;
    ({ orientationLockStateForApp, mode } = updateActivityPanelMode);
    ({ hasConnectedActivity, connectedActivityAppId } = updateActivityPanelMode);
    updateActivityPanelMode = updateActivityPanelMode.updateActivityPanelMode;
    let sharedValue;
    let wrapperDimensions;
    constants = undefined;
    let tmp2 = sharedValue;
    ({ children, context, currentApp } = updateActivityPanelMode);
    let tmp = connectedActivityAppId;
    let tmp3 = connectedActivityAppId(sharedValue[15])();
    let tmp4 = connectedActivityAppId(sharedValue[16])();
    let obj = mode(sharedValue[12]);
    sharedValue = obj.useSharedValue({ x: -1, y: -1 });
    const tmp7 = connectedActivityAppId(sharedValue[17])(tmp3);
    _slicedToArray = tmp7;
    const obj2 = mode(sharedValue[12]);
    const sharedValue1 = obj2.useSharedValue(closure_15);
    const ref = sharedValue1.useRef(mode);
    const tmp9 = connectedActivityAppId(sharedValue[18])();
    const useActivityWebViewLock = tmp9;
    const tmp10 = !connectedActivityAppId(sharedValue[19])();
    let closure_8 = tmp10;
    let defaultOrientationLockState = orientationLockStateForApp;
    if (orientationLockStateForApp == null) {
      const tmp5Result = mode(tmp2[20]);
      defaultOrientationLockState = tmp5Result.getDefaultOrientationLockState(currentApp);
    }
    const tmp12 = closure_16(tmp4, tmp3.top, defaultOrientationLockState, tmp10);
    wrapperDimensions = tmp12;
    constants = obj3.useRef(connectedActivityAppId);
    const tmp5Result5 = mode(tmp2[21]);
    const isVoicePanelFullscreen = tmp5Result5.useIsVoicePanelFullscreen();
    tmp(tmp2[22])();
    const tmp5Result6 = mode(tmp2[23]);
    tmp5Result6.useNavigatorBackPressHandler(() => {
      let flag = mode === ActivityPanelModes.PANEL;
      if (flag) {
        updateActivityPanelMode(tmp.PIP);
        flag = true;
      }
      return flag;
    });
    const items = [connectedActivityAppId, defaultOrientationLockState, mode, tmp12.isWindowLandscape, tmp10, updateActivityPanelMode];
    const effect = obj3.useEffect(() => {
      if (null != connectedActivityAppId) {
        if (null == ref2.current) {
          if (!doesOrientationMatchLockStateDefault(wrapperDimensions.isWindowLandscape, defaultOrientationLockState)) {
            const tmp19 = closure_8;
            if (!tmp19) {
              updateActivityPanelMode(ActivityPanelModes.LAUNCHING_WITH_ORIENTATION_CHANGE);
            }
          }
          updateActivityPanelMode(ActivityPanelModes.PANEL);
        }
        ref2.current = connectedActivityAppId;
      }
      if (null == connectedActivityAppId) {
        if (null != ref2.current) {
          updateActivityPanelMode(ActivityPanelModes.DISCONNECTED);
        }
      }
      const tmp4 = mode === ActivityPanelModes.LAUNCHING_WITH_ORIENTATION_CHANGE && doesOrientationMatchLockStateDefault(wrapperDimensions.isWindowLandscape, defaultOrientationLockState);
      if (tmp4) {
        updateActivityPanelMode(ActivityPanelModes.PANEL);
      }
    }, items);
    const items1 = [mode, sharedValue1];
    const effect1 = obj3.useEffect(() => {
      let tmp3 = mode === ActivityPanelModes.PANEL;
      const tmp = mode;
      if (tmp3) {
        tmp3 = ref.current !== tmp2.PANEL;
      }
      if (tmp3) {
        const obj = ChatInputUtils;
        obj.dismissKeyboard();
        const result = sharedValue1.set(closure_15);
      }
      ref.current = tmp;
    }, items1);
    orientationLockStateForApp = undefined;
    if (orientationLockStateForApp == null) {
      orientationLockStateForApp = constants.UNLOCKED;
    }
    const items2 = [connectedActivityAppId, hasConnectedActivity, mode, orientationLockStateForApp, isVoicePanelFullscreen];
    const layoutEffect = obj3.useLayoutEffect(() => {
      const tmp = isVoicePanelFullscreen;
      if (!tmp) {
        if (mode === constants.PANEL) {
          const tmp4 = hasConnectedActivity;
          if (tmp4) {
            connectedActivityAppId(sharedValue[14])(orientationLockStateForApp);
          }
        }
        const obj = mode(sharedValue[13]);
        const result = obj.restoreDefaultOrientation();
      }
    }, items2);
    const layoutEffect1 = obj3.useLayoutEffect(() => () => {
      const obj = mode(sharedValue[13]);
      return obj.restoreDefaultOrientation();
    }, []);
    let tmp21 = hasConnectedActivity;
    if (tmp21) {
      tmp21 = mode === ActivityPanelModes.PANEL;
    }
    let closure_1 = tmp21;
    const id = obj3.useId();
    const items3 = [id, hasConnectedActivity, tmp21, isVoicePanelFullscreen];
    const layoutEffect2 = obj3.useLayoutEffect(() => {
      let key;
      if (!isVoicePanelFullscreen) {
        let fn;
        if (hasConnectedActivity) {
          let state = closure_8.getState();
          let obj = { key: id, lockEnabled };
          let safeAreaDisableLock = state.requestSafeAreaDisableLock(obj);
          fn = () => {
            const state = closure_2_8.getState();
            const obj = { key, lockEnabled: false };
            const safeAreaDisableLock = state.requestSafeAreaDisableLock(obj);
          };
        }
        return fn;
      }
    }, items3);
    const tmp5Result7 = mode(tmp2[11]);
    const isActivityPanelFullscreen = tmp5Result7.useIsActivityPanelFullscreen();
    const tmp26 = _slicedToArray(obj3.useState(false), 2);
    const first = tmp26[0];
    let closure_3 = tmp28;
    const id1 = obj3.useId();
    let fn = function l() {
      return sharedValue1.get().gestureActive;
    };
    fn.__closure = { wrapperOffset: sharedValue1 };
    fn.__workletHash = 5299695936442;
    fn.__initData = __initData;
    const fn2 = function s(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = mode(sharedValue[12]);
        obj.runOnJS(closure_3)(arg0);
      }
    };
    const tmp5Result8 = mode(tmp2[12]);
    fn2.__closure = { runOnJS: mode(tmp2[12]).runOnJS, setWrapperGestureInProgress: tmp26[1] };
    fn2.__workletHash = 5831467313798;
    fn2.__initData = __initData2;
    ({ runOnJS: mode(tmp2[12]).runOnJS, setWrapperGestureInProgress: tmp26[1] });
    const animatedReaction = tmp5Result8.useAnimatedReaction(fn, fn2);
    const items4 = [isActivityPanelFullscreen, first, id1];
    const effect2 = obj3.useEffect(() => {
      let key;
      let state = useActivityWebViewLock.getState();
      let tmp2 = isActivityPanelFullscreen;
      const requestFreezeLock = state.requestFreezeLock;
      if (isActivityPanelFullscreen) {
        tmp2 = first;
      }
      let obj = { lockEnabled: tmp2, key: id1 };
      let freezeLock = requestFreezeLock(obj);
      return () => {
        const state = useActivityWebViewLock.getState();
        const obj = { lockEnabled: false, key };
        const freezeLock = state.requestFreezeLock(obj);
      };
    }, items4);
    const items5 = [mode, tmp7, sharedValue, updateActivityPanelMode, tmp9, tmp12, sharedValue1];
    return <context.Provider value={sharedValue1.useMemo(() => ({ mode, setMode: updateActivityPanelMode, wrapperDimensions, pipState: sharedValue, pipAvoidanceSpecs, wrapperOffset: sharedValue1, useActivityWebViewLock }), items5)}>{children}</context.Provider>;
  }
}
let _slicedToArray = _slicedToArray_mod;
({ OrientationLockState: unpackModuleId, ACTIVITY_LOCKED_ASPECT_RATIO: closure_12 } = Constants);
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const jsx = Fragment.jsx;
let closure_15 = { x: 0, y: 0, gestureActive: false };
const authStore3 = FunctionUtils.cachedFunction((arg0, arg1, arg2, arg3) => {
  let diff;
  let height;
  let width;
  ({ width, height } = arg0);
  if (unpackModuleId.LANDSCAPE === arg2) {
    if (arg3) {
      if (width <= height) {
        size = { width, height: width * closure_12 - arg1, isLandscape: true, isWindowLandscape: width > height };
      }
      return size;
    }
    const size1 = { width: Math.max(width, height), height: Math.min(height, width), isLandscape: true, isWindowLandscape: true };
    const _Math3 = Math;
    const _Math4 = Math;
    size = size1;
  } else if (unpackModuleId.PORTRAIT === arg2) {
    if (arg3) {
      let size3;
      if (width > height) {
        const size2 = { width: height * closure_12, height, isLandscape: false, isWindowLandscape: width > height };
        size3 = size2;
      }
      return size3;
    }
    size3 = { width: Math.min(width, height), height: Math.max(height, width) - arg1, isLandscape: false, isWindowLandscape: false };
    const _Math = Math;
    const _Math2 = Math;
  } else {
    const UNLOCKED = tmp2.UNLOCKED;
    const size4 = { width, height: diff, isLandscape: width > height, isWindowLandscape: width > height };
    diff = height;
    if (width <= height) {
      diff = height - arg1;
    }
    return size4;
  }
});
const __initData = { code: "function ActivityPanelControllerTsx1(){const{wrapperOffset}=this.__closure;return wrapperOffset.get().gestureActive;}" };
const authStore4 = { code: "function ActivityPanelControllerTsx2(gestureActive,previous){const{runOnJS,setWrapperGestureInProgress}=this.__closure;if(gestureActive===previous)return;runOnJS(setWrapperGestureInProgress)(gestureActive);}" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelController.tsx");

export default function ActivityPanelController(children) {
  let connectedActivityAppId;
  let currentApp;
  let hasConnectedActivity;
  let orientationLockStateForApp;
  let mode;
  children = children.children;
  let obj = mode(504);
  const items = [EmbeddedActivitiesStore, ApplicationStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let orientationLockStateForApp;
    let tmp9;
    const activityPanelMode = EmbeddedActivitiesStore.getActivityPanelMode();
    const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
    const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
    let applicationId;
    const obj = EmbeddedActivitiesStore;
    if (selfEmbeddedActivityForLocation != null) {
      applicationId = selfEmbeddedActivityForLocation.applicationId;
    }
    application = undefined;
    if (null != applicationId) {
      application = application.getApplication(applicationId);
    }
    const obj2 = mode(dependencyMap[27]);
    const embeddedActivityLocationChannelId = obj2.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
    const obj3 = { mode: activityPanelMode, connectedActivityInTextChannelId: tmp9, hasConnectedActivity: null != selfEmbeddedActivityForLocation, connectedActivityAppId: applicationId, currentApp: application, orientationLockStateForApp };
    tmp9 = undefined;
    const tmp7 = dependencyMap;
    if (null != embeddedActivityLocationChannelId) {
      if (!connectedActivityInTextChannelId(tmp7[28])(embeddedActivityLocationChannelId)) {
        tmp9 = embeddedActivityLocationChannelId;
      }
    }
    orientationLockStateForApp = undefined;
    if (null != applicationId) {
      orientationLockStateForApp = obj.getOrientationLockStateForApp(applicationId);
    }
    return obj3;
  }, []);
  mode = stateFromStoresObject.mode;
  const connectedActivityInTextChannelId = stateFromStoresObject.connectedActivityInTextChannelId;
  const items1 = [mode, connectedActivityInTextChannelId];
  ({ hasConnectedActivity, connectedActivityAppId, currentApp, orientationLockStateForApp } = stateFromStoresObject);
  const effect = react.useEffect(() => {
    if (mode === ActivityPanelModes.PANEL) {
      const channel = ChannelStore.getChannel(connectedActivityInTextChannelId);
      if (undefined !== channel) {
        const obj4 = { guildId: null, channelId: null };
        ({ guild_id: obj2.guildId, id: obj2.channelId } = channel);
        const obj = SelectedChannelActionCreatorsDefault;
        const channel1 = obj.selectChannel(obj4);
        const obj3 = transitionToChannel;
        obj3.transitionToChannel(channel.id);
      }
    }
  }, items1);
  return <BaseActivityPanelController context={connectedActivityInTextChannelId(16839)} orientationLockStateForApp={orientationLockStateForApp} mode={mode} hasConnectedActivity={hasConnectedActivity} connectedActivityAppId={connectedActivityAppId} currentApp={currentApp} updateActivityPanelMode={EmbeddedActivitiesActionCreatorsAll.updateActivityPanelMode}>{children}</BaseActivityPanelController>;
};
export { BaseActivityPanelController };
