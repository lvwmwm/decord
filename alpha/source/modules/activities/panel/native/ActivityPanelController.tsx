// Module ID: 19527
// Function ID: 19528
// Name: ActivityPanelController
// Dependencies: [32, 19, 2162, 8944, 12020, 4991, 4990, 2142, 5783, 21, 2158, 2143, 19526, 1652, 1705, 8983, 19528, 1627, 1493, 19517, 19529, 11144, 11964, 11335, 19530, 7073, 11967, 5325, 504, 5063, 5804, 6763, 5887, 19531, 11898, 2]
// Exports: default

// Module 19527 (ActivityPanelController)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 2142 */;
import EmbeddedActivityOrientationLockState from "EmbeddedActivityOrientationLockState" /* 2143 */;
import ChatInputUtils from "ChatInputUtils" /* 5325 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5783 */;
import transitionToChannel from "transitionToChannel" /* 5887 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6763 */;
import EmbeddedActivitiesActionCreatorsAll from "EmbeddedActivitiesActionCreators" /* 11898 */;
import doesOrientationMatchLockStateDefault from "doesOrientationMatchLockState" /* 11967 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2162 */;
import AppFreezeStore from "AppFreezeStore" /* 8944 */;
import SafeAreaDisabledStore from "SafeAreaDisabledStore" /* 12020 */;
import ChannelStore from "ChannelStore" /* 4991 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4990 */;
import FunctionUtils from "FunctionUtils" /* 2158 */;
import size_mod from "module_2" /* 2 */;

let application;

class BaseActivityPanelController {
  constructor(updateActivityPanelMode) {
    let children;
    let connectedActivityAppId;
    let context;
    let currentApp;
    let first;
    let hasConnectedActivity;
    let mode;
    let orientationLockStateForApp;
    let pipAvoidanceSpecs;
    let tmp27;
    let tmp30;
    let tmp31;
    let tmp32;
    let tmp33;
    let tmp34;
    ({ orientationLockStateForApp, mode } = updateActivityPanelMode);
    ({ hasConnectedActivity, connectedActivityAppId } = updateActivityPanelMode);
    updateActivityPanelMode = updateActivityPanelMode.updateActivityPanelMode;
    let sharedValue;
    let wrapperDimensions;
    let ref2;
    let tmp2 = sharedValue;
    ({ children, context, currentApp } = updateActivityPanelMode);
    let tmp = connectedActivityAppId;
    let tmp3 = connectedActivityAppId(sharedValue[17])();
    let tmp4 = connectedActivityAppId(sharedValue[18])();
    let obj = mode(sharedValue[13]);
    sharedValue = obj.useSharedValue({ x: -1, y: -1 });
    const tmp7 = connectedActivityAppId(sharedValue[19])(tmp3);
    _slicedToArray = tmp7;
    const obj2 = mode(sharedValue[13]);
    const sharedValue1 = obj2.useSharedValue(closure_14);
    const ref = sharedValue1.useRef(mode);
    const tmp9 = connectedActivityAppId(sharedValue[20])();
    const useActivityWebViewLock = tmp9;
    const tmp10 = !connectedActivityAppId(sharedValue[21])();
    let closure_8 = tmp10;
    let defaultOrientationLockState = orientationLockStateForApp;
    if (orientationLockStateForApp == null) {
      const tmp5Result = mode(tmp2[22]);
      defaultOrientationLockState = tmp5Result.getDefaultOrientationLockState(currentApp);
    }
    const tmp12 = closure_15(tmp4, tmp3.top, defaultOrientationLockState, tmp10);
    wrapperDimensions = tmp12;
    ref2 = obj3.useRef(connectedActivityAppId);
    const tmp5Result5 = mode(tmp2[23]);
    const isVoicePanelFullscreen = tmp5Result5.useIsVoicePanelFullscreen();
    tmp(tmp2[24])();
    const tmp5Result6 = mode(tmp2[25]);
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
            connectedActivityAppId(sharedValue[16])(orientationLockStateForApp);
          }
        }
        const obj = mode(sharedValue[15]);
        const result = obj.restoreDefaultOrientation();
      }
    }, items2);
    const layoutEffect1 = obj3.useLayoutEffect(() => () => {
      const obj = mode(sharedValue[15]);
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
    first = undefined;
    const tmp5Result7 = mode(tmp2[12]);
    const isActivityPanelFullscreen = tmp5Result7.useIsActivityPanelFullscreen();
    [first, tmp27] = obj3.useState(false);
    const id1 = obj3.useId();
    const items4 = [closure_16, sharedValue1];
    let c0;
    [tmp30, tmp31] = items4;
    const tmp5Result8 = mode(tmp2[13]);
    class ActivityPanelControllerTsx1 {
      constructor() {
        return _undefined.get().gestureActive;
      }
    }
    const items5 = [tmp31];
    ActivityPanelControllerTsx1.__closure = items5;
    ActivityPanelControllerTsx1.__workletHash = 5081102168611;
    ActivityPanelControllerTsx1.__initData = tmp30;
    const items6 = [closure_17, , ];
    const useAnimatedReaction = tmp5Result8.useAnimatedReaction;
    items6[1] = mode(tmp2[14]).scheduleOnRN;
    items6[2] = tmp27;
    c0 = undefined;
    let c1;
    [tmp32, tmp33, tmp34] = items6;
    class ActivityPanelControllerTsx2 {
      constructor(arg0, arg1) {
        if (arg0 !== arg1) {
          _undefined(c1, arg0);
        }
      }
    }
    const items7 = [tmp33, tmp34];
    ActivityPanelControllerTsx2.__closure = items7;
    ActivityPanelControllerTsx2.__workletHash = 5317338371282;
    ActivityPanelControllerTsx2.__initData = tmp32;
    const animatedReaction = useAnimatedReaction(ActivityPanelControllerTsx1, ActivityPanelControllerTsx2);
    const items8 = [isActivityPanelFullscreen, first, id1];
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
    }, items8);
    const items9 = [mode, tmp7, sharedValue, updateActivityPanelMode, tmp9, tmp12, sharedValue1];
    return <context.Provider value={sharedValue1.useMemo(() => ({ mode, setMode: updateActivityPanelMode, wrapperDimensions, pipState: sharedValue, pipAvoidanceSpecs, wrapperOffset: sharedValue1, useActivityWebViewLock }), items9)}>{children}</context.Provider>;
  }
}
let _slicedToArray = _slicedToArray_mod;
let closure_11 = Constants.ACTIVITY_LOCKED_ASPECT_RATIO;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const jsx = Fragment.jsx;
let closure_14 = { x: 0, y: 0, gestureActive: false };
const clientStatuses = FunctionUtils.cachedFunction((arg0, arg1, arg2, arg3) => {
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
    const UNLOCKED = tmp2(2143).EmbeddedActivityOrientationLockState.UNLOCKED;
    const size4 = { width, height: diff, isLandscape: width > height, isWindowLandscape: width > height };
    diff = height;
    if (width <= height) {
      diff = height - arg1;
    }
    return size4;
  }
});
let closure_16 = { code: "(function ActivityPanelControllerTsx1(){let[wrapperOffset]=this.__closure;return wrapperOffset.get().gestureActive;})" };
let closure_17 = { code: "(function ActivityPanelControllerTsx2(gestureActive,previous){let[scheduleOnRN,setWrapperGestureInProgress]=this.__closure;if(gestureActive===previous)return;scheduleOnRN(setWrapperGestureInProgress,gestureActive);})" };
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
    const obj2 = mode(dependencyMap[29]);
    const embeddedActivityLocationChannelId = obj2.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
    const obj3 = { mode: activityPanelMode, connectedActivityInTextChannelId: tmp9, hasConnectedActivity: null != selfEmbeddedActivityForLocation, connectedActivityAppId: applicationId, currentApp: application, orientationLockStateForApp };
    tmp9 = undefined;
    const tmp7 = dependencyMap;
    if (null != embeddedActivityLocationChannelId) {
      if (!connectedActivityInTextChannelId(tmp7[30])(embeddedActivityLocationChannelId)) {
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
  return <BaseActivityPanelController context={connectedActivityInTextChannelId(19531)} orientationLockStateForApp={orientationLockStateForApp} mode={mode} hasConnectedActivity={hasConnectedActivity} connectedActivityAppId={connectedActivityAppId} currentApp={currentApp} updateActivityPanelMode={EmbeddedActivitiesActionCreatorsAll.updateActivityPanelMode}>{children}</BaseActivityPanelController>;
};
export { BaseActivityPanelController };
