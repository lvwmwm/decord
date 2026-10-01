// Module ID: 8915
// Function ID: 8916
// Name: EmbeddedActivityView
// Dependencies: [109, 32, 19, 17, 2044, 2005, 1349, 21, 4836, 8914, 1479, 573, 8916, 8917, 8919, 8912, 504, 8921, 8765, 8922, 8931, 2]

// Module 8915 (EmbeddedActivityView)
import DispatcherDefault from "Dispatcher" /* 573 */;
import ApplicationConstants from "ApplicationConstants" /* 1349 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 8765 */;
import doesOrientationMatchLockStateDefault from "doesOrientationMatchLockState" /* 8916 */;
import WakeLockDefault from "WakeLock" /* 8919 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import Constants from "Constants" /* 2005 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let c10;
let closure_14;
let closure_15;
let map1;
let metroImportAll;
let metroImportDefault;
let unpackModuleId;
function useBaseActivityView(orientationLockState) {
  orientationLockState = orientationLockState.orientationLockState;
  const showLoadingIndicator = orientationLockState.showLoadingIndicator;
  const setShowLoadingStateForLockingOrientation = orientationLockState.setShowLoadingStateForLockingOrientation;
  const application = orientationLockState.application;
  const setOrientationLockState = orientationLockState.setOrientationLockState;
  let isResetting;
  let defaultOrientationLockState;
  let first1;
  let closure_8;
  let isLandscape;
  let obj = defaultOrientationLockState;
  let tmp = isResetting;
  let tmp2 = isResetting(defaultOrientationLockState.useState(false), 2);
  isResetting = tmp2[0];
  const setIsResetting = tmp2[1];
  const obj2 = orientationLockState(setShowLoadingStateForLockingOrientation[9]);
  defaultOrientationLockState = obj2.getDefaultOrientationLockState(application);
  let id;
  const tmp5 = setShowLoadingStateForLockingOrientation;
  if (application != null) {
    id = application.id;
  }
  const tmpResult = tmp(obj.useState(false), 2);
  first1 = tmpResult[0];
  closure_8 = tmpResult[1];
  size = showLoadingIndicator(tmp5[10])();
  isLandscape = size.width > size.height;
  const items = [isLandscape];
  const layoutEffect = obj.useLayoutEffect(() => {
    const tmp2 = isLandscape ? unpackModuleId.LANDSCAPE : unpackModuleId.PORTRAIT;
    const obj = DispatcherDefault;
    obj.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: tmp2 });
  }, items);
  const items1 = [id];
  const layoutEffect1 = obj.useLayoutEffect(() => {
    closure_8(false);
  }, items1);
  const items2 = [defaultOrientationLockState, application, orientationLockState, isLandscape, first1, setShowLoadingStateForLockingOrientation, setOrientationLockState];
  const layoutEffect2 = obj.useLayoutEffect(() => {
    const tmp = first1;
    if (!tmp) {
      if (null == orientationLockState) {
        if (!doesOrientationMatchLockStateDefault(isLandscape, defaultOrientationLockState)) {
          setShowLoadingStateForLockingOrientation(true);
        }
        if (null != application) {
          setOrientationLockState(tmp11, orientationLockState);
        }
      }
    }
    setShowLoadingStateForLockingOrientation(false);
  }, items2);
  const items3 = [orientationLockState, isLandscape, setShowLoadingStateForLockingOrientation];
  const layoutEffect3 = obj.useLayoutEffect(() => {
    if (doesOrientationMatchLockStateDefault(isLandscape, orientationLockState)) {
      setShowLoadingStateForLockingOrientation(false);
    }
  }, items3);
  const items4 = [showLoadingIndicator, isResetting];
  const layoutEffect4 = obj.useLayoutEffect(() => {
    const tmp = showLoadingIndicator || isResetting;
    if (!tmp) {
      closure_8(true);
    }
  }, items4);
  return { isResetting, setIsResetting, isLandscape };
}
class ActivityViewLoadingIndicator {
  constructor() {
    const obj = { style: closure_16().loadingContainer, children: map1(metroImportDefault, { size: "large" }) };
    return map1(metroImportAll, obj);
  }
}
class BaseActivityView {
  constructor(showLoadingIndicator) {
    let items;
    let tmp4;
    if (showLoadingIndicator.showLoadingIndicator) {
      tmp4 = map1(ActivityViewLoadingIndicator, {});
    } else {
      tmp4 = null;
      if (!tmp3) {
        const obj = { children: items };
        const obj2 = { wakeLockKey: tmp2 };
        items = [map1(WakeLockDefault, obj2), tmp];
        tmp4 = closure_15(authStore2, obj);
      }
    }
    return tmp4;
  }
}
let closure_3 = ["ui_density"];
({ ActivityIndicator: metroImportDefault, View: metroImportAll } = react_native);
({ ActivityLayoutMode: c10, ActivityScreenOrientation: unpackModuleId } = Constants);
const set = ApplicationConstants.OBEY_SILENT_HARDWARE_SWITCH_APP_IDS;
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = Fragment);
const authStore3 = createStyles.createStyles({ loadingContainer: { flex: 1, justifyContent: "center" } });
const memoResult = react.memo(function EmbeddedActivityViewInner(portraitSafeAreasConfig) {
  let channel;
  let compositeInstanceId;
  let guild_id3;
  let id;
  let id1;
  let id2;
  let layoutMode;
  let obj3;
  let obj7;
  let tmp2Result;
  let tmp5Result2;
  let tmp8;
  let tmp9;
  ({ channel, layoutMode } = portraitSafeAreasConfig);
  portraitSafeAreasConfig = portraitSafeAreasConfig.portraitSafeAreasConfig;
  let setIsResetting;
  const landscapeSafeAreasConfig = portraitSafeAreasConfig.landscapeSafeAreasConfig;
  const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  const tmp4 = currentEmbeddedActivity(8912)();
  dependencyMap = tmp4;
  let obj = layoutMode(504);
  const items = [EmbeddedActivitiesStore];
  const items1 = [tmp4];
  let obj2 = react;
  const stateFromStores = obj.useStateFromStores(items, () => {
    let orientationLockStateForApp;
    if (null != id) {
      orientationLockStateForApp = EmbeddedActivitiesStore.getOrientationLockStateForApp(tmp.id);
    }
    return orientationLockStateForApp;
  }, items1);
  [tmp8, tmp9] = react.useState(true);
  _slicedToArray(react.useState(true), 2);
  if (null == currentEmbeddedActivity) {
    obj3 = { instance_id: "" };
  } else {
    const tmp5Result = layoutMode(8917);
    const discordEnvQueryParams = tmp5Result.getDiscordEnvQueryParams();
    const ui_density = discordEnvQueryParams.ui_density;
    let launchId = currentEmbeddedActivity.compositeInstanceId;
    const tmp38 = _objectWithoutProperties(discordEnvQueryParams, setIsResetting);
    if (launchId == null) {
      launchId = currentEmbeddedActivity.launchId;
    }
    const obj4 = { instance_id: launchId, location_id: id1, launch_id: currentEmbeddedActivity.launchId };
    let _location = currentEmbeddedActivity.location;
    id1 = undefined;
    if (_location != null) {
      id1 = _location.id;
    }
    const merged = Object.assign(tmp38);
    if (null != currentEmbeddedActivity.proxyTicket) {
      obj4.discord_proxy_ticket = currentEmbeddedActivity.proxyTicket;
    }
    const tmp14 = null != channel && null != channel.id && "" !== channel.id;
    if (tmp14) {
      obj4.channel_id = channel.id;
    }
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    let tmp16 = null != guild_id;
    if (tmp16) {
      let guild_id1;
      if (channel != null) {
        guild_id1 = channel.guild_id;
      }
      tmp16 = "" !== guild_id1;
    }
    obj3 = obj4;
    if (tmp16) {
      let guild_id2;
      if (channel != null) {
        guild_id2 = channel.guild_id;
      }
      obj4.guild_id = guild_id2;
      obj3 = obj4;
    }
  }
  currentEmbeddedActivity(8921)({ connectedEmbeddedActivity: currentEmbeddedActivity });
  const items2 = [layoutMode, currentEmbeddedActivity];
  const layoutEffect = obj2.useLayoutEffect(() => {
    if (null != currentEmbeddedActivity) {
      const obj2 = { type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode, applicationId: tmp.applicationId };
      const obj = DispatcherDefault;
      obj.dispatch(obj2);
    }
  }, items2);
  const items3 = [tmp4, currentEmbeddedActivity];
  const callback = obj2.useCallback(() => {
    let _location;
    const leaveActivity = EmbeddedActivitiesNativeManagerDefault.leaveActivity;
    EmbeddedActivitiesNativeManagerDefault;
    if (currentEmbeddedActivity != null) {
      _location = currentEmbeddedActivity.location;
    }
    const obj = { location: _location, applicationId: id };
    id = undefined;
    if (id != null) {
      id = id.id;
    }
    leaveActivity(obj);
  }, items3);
  if (tmp4 != null) {
    id = tmp4.id;
  }
  let tmp22 = null == currentEmbeddedActivity;
  if (!tmp22) {
    let launchId1;
    if (currentEmbeddedActivity != null) {
      launchId1 = currentEmbeddedActivity.launchId;
    }
    tmp22 = null == launchId1;
  }
  if (!tmp22) {
    tmp22 = tmp8;
  }
  if (!tmp22) {
    tmp22 = null == id;
  }
  if (!tmp22) {
    tmp22 = null == tmp4;
  }
  const obj5 = { orientationLockState: stateFromStores, showLoadingIndicator: tmp22, setShowLoadingStateForLockingOrientation: tmp9, application: tmp4, setOrientationLockState: layoutMode(8914).setOrientationLockState };
  setIsResetting = useBaseActivityView(obj5).setIsResetting;
  let tmp28Result = null;
  useBaseActivityView(obj5);
  if (null != currentEmbeddedActivity) {
    tmp28Result = null;
    if (null != id) {
      const obj6 = { wakeLockKey: "EmbeddedActivities", showLoadingIndicator: tmp22, isResetting: tmp25, children: closure_13(tmp2Result, obj7) };
      obj7 = {
        onActivityCrash() {
              setIsResetting(true);
              const timerId = setTimeout(() => setIsResetting(false), 0);
            },
        applicationId: id,
        channelId: id2,
        guildId: guild_id3,
        activityUrl: currentEmbeddedActivity.url,
        currentEmbeddedActivity,
        activitySessionId: compositeInstanceId,
        queryParams: obj3,
        onLoadError: callback,
        allowPopups: tmp5Result2.allowPopups(tmp4),
        referrerPolicy: "origin",
        isPipOrGridMode: layoutMode === constants.PIP || layoutMode === constants.GRID,
        webViewKey: layoutMode(8765).EMBEDDED_ACTIVITY_WEB_VIEW_KEY,
        safeAreasConfig: portraitSafeAreasConfig,
        ignoreSilentHardwareSwitch: !set.has(id)
      };
      id2 = undefined;
      const tmp29 = BaseActivityView;
      tmp2Result = currentEmbeddedActivity(8922);
      if (channel != null) {
        id2 = channel.id;
      }
      guild_id3 = undefined;
      if (channel != null) {
        guild_id3 = channel.guild_id;
      }
      compositeInstanceId = undefined;
      if (currentEmbeddedActivity != null) {
        compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
      }
      tmp5Result2 = layoutMode(8931);
      if (tmp26) {
        portraitSafeAreasConfig = landscapeSafeAreasConfig;
      }
      tmp28Result = tmp28(tmp29, obj6);
    }
  }
  return tmp28Result;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/activities/native/EmbeddedActivityView.tsx");

export default memoResult;
export { useBaseActivityView };
export { ActivityViewLoadingIndicator };
export { BaseActivityView };
export const EmbeddedActivityView = memoResult;
