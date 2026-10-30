// Module ID: 19071
// Function ID: 19072
// Name: ActivityPanelController
// Dependencies: [32, 19, 2040, 8855, 11809, 4858, 4857, 2019, 5652, 21, 2036, 2021, 19070, 5090, 8894, 19072, 1626, 1492, 19061, 19073, 10986, 11754, 11822, 19074, 6998, 11757, 5202, 504, 4930, 5673, 6700, 5751, 19075, 11688, 2]
// Exports: default

// Module 19071 (ActivityPanelController)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 2019 */;
import EmbeddedActivityOrientationLockState from "EmbeddedActivityOrientationLockState" /* 2021 */;
import ChatInputUtils from "ChatInputUtils" /* 5202 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5652 */;
import transitionToChannel from "transitionToChannel" /* 5751 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6700 */;
import EmbeddedActivitiesActionCreatorsAll from "EmbeddedActivitiesActionCreators" /* 11688 */;
import doesOrientationMatchLockStateDefault from "doesOrientationMatchLockState" /* 11757 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2040 */;
import AppFreezeStore from "AppFreezeStore" /* 8855 */;
import SafeAreaDisabledStore from "SafeAreaDisabledStore" /* 11809 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4857 */;
import FunctionUtils from "FunctionUtils" /* 2036 */;
import size_mod from "module_2" /* 2 */;

let application;

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
    ({ orientationLockStateForApp, mode } = updateActivityPanelMode);
    ({ hasConnectedActivity, connectedActivityAppId } = updateActivityPanelMode);
    updateActivityPanelMode = updateActivityPanelMode.updateActivityPanelMode;
    let sharedValue;
    let wrapperDimensions;
    let ref2;
    let tmp2 = sharedValue;
    ({ children, context, currentApp } = updateActivityPanelMode);
    let tmp = connectedActivityAppId;
    let tmp3 = connectedActivityAppId(sharedValue[16])();
    let tmp4 = connectedActivityAppId(sharedValue[17])();
    let obj = mode(sharedValue[13]);
    sharedValue = obj.useSharedValue({ x: -1, y: -1 });
    const tmp7 = connectedActivityAppId(sharedValue[18])(tmp3);
    _slicedToArray = tmp7;
    const obj2 = mode(sharedValue[13]);
    const sharedValue1 = obj2.useSharedValue(closure_14);
    const ref = sharedValue1.useRef(mode);
    const tmp9 = connectedActivityAppId(sharedValue[19])();
    const useActivityWebViewLock = tmp9;
    const tmp10 = !connectedActivityAppId(sharedValue[20])();
    let closure_8 = tmp10;
    let defaultOrientationLockState = orientationLockStateForApp;
    if (orientationLockStateForApp == null) {
      const tmp5Result = mode(tmp2[21]);
      defaultOrientationLockState = tmp5Result.getDefaultOrientationLockState(currentApp);
    }
    const tmp12 = closure_15(tmp4, tmp3.top, defaultOrientationLockState, tmp10);
    wrapperDimensions = tmp12;
    ref2 = obj3.useRef(connectedActivityAppId);
    const tmp5Result5 = mode(tmp2[22]);
    const isVoicePanelFullscreen = tmp5Result5.useIsVoicePanelFullscreen();
    tmp(tmp2[23])();
    const tmp5Result6 = mode(tmp2[24]);
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
        const result = sharedValue1.set(closure_14);
      }
      ref.current = tmp;
    }, items1);
    orientationLockStateForApp = undefined;
    if (orientationLockStateForApp == null) {
      orientationLockStateForApp = tmp5(tmp2[11]).EmbeddedActivityOrientationLockState.UNLOCKED;
    }
    const items2 = [connectedActivityAppId, hasConnectedActivity, mode, orientationLockStateForApp, isVoicePanelFullscreen];
    const layoutEffect = obj3.useLayoutEffect(() => {
      const tmp = isVoicePanelFullscreen;
      if (!tmp) {
        if (mode === constants.PANEL) {
          const tmp4 = hasConnectedActivity;
          if (tmp4) {
            connectedActivityAppId(sharedValue[15])(orientationLockStateForApp);
          }
        }
        const obj = mode(sharedValue[14]);
        const result = obj.restoreDefaultOrientation();
      }
    }, items2);
    const layoutEffect1 = obj3.useLayoutEffect(() => () => {
      const obj = mode(sharedValue[14]);
      return obj.restoreDefaultOrientation();
    }, []);
    let tmp20 = hasConnectedActivity;
    if (tmp20) {
      tmp20 = mode === ActivityPanelModes.PANEL;
    }
    let closure_1 = tmp20;
    const id = obj3.useId();
    const items3 = [id, hasConnectedActivity, tmp20, isVoicePanelFullscreen];
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
    const tmp5Result7 = mode(tmp2[12]);
    const isActivityPanelFullscreen = tmp5Result7.useIsActivityPanelFullscreen();
    const tmp25 = _slicedToArray(obj3.useState(false), 2);
    const first = tmp25[0];
    let closure_3 = tmp27;
    const id1 = obj3.useId();
    let fn = function l() {
      return sharedValue1.get().gestureActive;
    };
    fn.__closure = { wrapperOffset: sharedValue1 };
    fn.__workletHash = 5299695936442;
    fn.__initData = __initData;
    const fn2 = function s(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = mode(sharedValue[13]);
        obj.runOnJS(closure_3)(arg0);
      }
    };
    const tmp5Result8 = mode(tmp2[13]);
    fn2.__closure = { runOnJS: mode(tmp2[13]).runOnJS, setWrapperGestureInProgress: tmp25[1] };
    fn2.__workletHash = 5831467313798;
    fn2.__initData = __initData2;
    ({ runOnJS: mode(tmp2[13]).runOnJS, setWrapperGestureInProgress: tmp25[1] });
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
let closure_11 = Constants.ACTIVITY_LOCKED_ASPECT_RATIO;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const jsx = Fragment.jsx;
let closure_14 = { x: 0, y: 0, gestureActive: false };
let closure_15 = FunctionUtils.cachedFunction((arg0, arg1, arg2, arg3) => {
  let diff;
  let height;
  let width;
  ({ width, height } = arg0);
  if (EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.LANDSCAPE === arg2) {
    if (arg3) {
      if (width <= height) {
        size = { width, height: width * closure_11 - arg1, isLandscape: true, isWindowLandscape: width > height };
      }
      return size;
    }
    const size1 = { width: Math.max(width, height), height: Math.min(height, width), isLandscape: true, isWindowLandscape: true };
    const _Math3 = Math;
    const _Math4 = Math;
    size = size1;
  } else if (EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.PORTRAIT === arg2) {
    if (arg3) {
      let size3;
      if (width > height) {
        const size2 = { width: height * closure_11, height, isLandscape: false, isWindowLandscape: width > height };
        size3 = size2;
      }
      return size3;
    }
    size3 = { width: Math.min(width, height), height: Math.max(height, width) - arg1, isLandscape: false, isWindowLandscape: false };
    const _Math = Math;
    const _Math2 = Math;
  } else {
    const UNLOCKED = tmp2(2021).EmbeddedActivityOrientationLockState.UNLOCKED;
    const size4 = { width, height: diff, isLandscape: width > height, isWindowLandscape: width > height };
    diff = height;
    if (width <= height) {
      diff = height - arg1;
    }
    return size4;
  }
});
const authStore4 = { code: "function ActivityPanelControllerTsx1(){const{wrapperOffset}=this.__closure;return wrapperOffset.get().gestureActive;}" };
const __initData2 = { code: "function ActivityPanelControllerTsx2(gestureActive,previous){const{runOnJS,setWrapperGestureInProgress}=this.__closure;if(gestureActive===previous)return;runOnJS(setWrapperGestureInProgress)(gestureActive);}" };
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
    const obj2 = mode(dependencyMap[28]);
    const embeddedActivityLocationChannelId = obj2.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
    const obj3 = { mode: activityPanelMode, connectedActivityInTextChannelId: tmp9, hasConnectedActivity: null != selfEmbeddedActivityForLocation, connectedActivityAppId: applicationId, currentApp: application, orientationLockStateForApp };
    tmp9 = undefined;
    const tmp7 = dependencyMap;
    if (null != embeddedActivityLocationChannelId) {
      if (!connectedActivityInTextChannelId(tmp7[29])(embeddedActivityLocationChannelId)) {
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
  return <BaseActivityPanelController context={connectedActivityInTextChannelId(19075)} orientationLockStateForApp={orientationLockStateForApp} mode={mode} hasConnectedActivity={hasConnectedActivity} connectedActivityAppId={connectedActivityAppId} currentApp={currentApp} updateActivityPanelMode={EmbeddedActivitiesActionCreatorsAll.updateActivityPanelMode}>{children}</BaseActivityPanelController>;
};
export { BaseActivityPanelController };
