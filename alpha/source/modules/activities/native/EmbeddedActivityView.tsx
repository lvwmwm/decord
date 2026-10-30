// Module ID: 11756
// Function ID: 11757
// Name: EmbeddedActivityView
// Dependencies: [109, 32, 19, 17, 4857, 2019, 1361, 21, 5009, 11754, 1492, 572, 11757, 11758, 11760, 11783, 11750, 504, 11798, 10907, 11799, 5754, 11801, 2]

// Module 11756 (EmbeddedActivityView)
import DispatcherDefault from "Dispatcher" /* 572 */;
import ApplicationConstants from "ApplicationConstants" /* 1361 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5754 */;
import leaveEmbeddedActivity2 from "leaveEmbeddedActivity" /* 10907 */;
import doesOrientationMatchLockStateDefault from "doesOrientationMatchLockState" /* 11757 */;
import activityWebViewController from "activityWebViewController" /* 11760 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4857 */;
import Constants from "Constants" /* 2019 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let c10;
let closure_14;
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
    const obj = { style: closure_15().loadingContainer, children: map1(metroImportDefault, { size: "large" }) };
    return map1(metroImportAll, obj);
  }
}
class BaseActivityView {
  constructor(showLoadingIndicator) {
    let tmp3;
    if (showLoadingIndicator.showLoadingIndicator) {
      tmp3 = map1(ActivityViewLoadingIndicator, {});
    } else {
      tmp3 = null;
      if (!tmp2) {
        tmp3 = tmp;
      }
    }
    return tmp3;
  }
}
function EmbeddedActivityWebView(applicationId) {
  let iframeId;
  let shellBridgeSecret;
  applicationId = applicationId.applicationId;
  const deepLinkQueryParams = applicationId.deepLinkQueryParams;
  const merged = Object.assign(applicationId, Object.assign({ deepLinkQueryParams: 0, applicationId: 0 }));
  ({ iframeId, shellBridgeSecret } = _slicedToArray(react.useState(() => {
    const obj = activityWebViewController;
    return obj.getOrCreateActivityWebViewController(applicationId);
  }), 1)[0]);
  let obj = { iframeId, shellBridgeSecret, deepLinkQueryParams, applicationId };
  const BaseEmbeddedAppWebView = applicationId(11783).BaseEmbeddedAppWebView;
  const merged1 = Object.assign(merged);
  return closure_13(BaseEmbeddedAppWebView, obj);
}
let closure_3 = ["ui_density"];
({ ActivityIndicator: metroImportDefault, View: metroImportAll } = react_native);
({ ActivityLayoutMode: c10, ActivityScreenOrientation: unpackModuleId } = Constants);
const set = ApplicationConstants.OBEY_SILENT_HARDWARE_SWITCH_APP_IDS;
({ jsx: map1, jsxs: closure_14 } = Fragment);
let closure_15 = createStyles.createStyles({ loadingContainer: { flex: 1, justifyContent: "center" } });
const memoResult = react.memo(function EmbeddedActivityViewInner(channel) {
  let compositeInstanceId;
  let guild_id3;
  let id2;
  let items4;
  let obj3;
  let tmp5Result2;
  let tmp8;
  let tmp9;
  channel = channel.channel;
  const layoutMode = channel.layoutMode;
  let portraitSafeAreasConfig = channel.portraitSafeAreasConfig;
  let id1;
  let setIsResetting;
  const landscapeSafeAreasConfig = channel.landscapeSafeAreasConfig;
  const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  const tmp4 = layoutMode(currentEmbeddedActivity[16])();
  let id = tmp4;
  let obj = channel(currentEmbeddedActivity[17]);
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
  [tmp8, tmp9] = setIsResetting(react.useState(true), 2);
  setIsResetting(react.useState(true), 2);
  if (null == currentEmbeddedActivity) {
    obj3 = { instance_id: "" };
  } else {
    const tmp5Result = channel(currentEmbeddedActivity[13]);
    const discordEnvQueryParams = tmp5Result.getDiscordEnvQueryParams();
    const ui_density = discordEnvQueryParams.ui_density;
    let launchId = currentEmbeddedActivity.compositeInstanceId;
    const tmp39 = id1(discordEnvQueryParams, id);
    if (launchId == null) {
      launchId = currentEmbeddedActivity.launchId;
    }
    const obj4 = { instance_id: launchId, location_id: id, launch_id: currentEmbeddedActivity.launchId };
    let _location = currentEmbeddedActivity.location;
    id = undefined;
    if (_location != null) {
      id = _location.id;
    }
    const merged = Object.assign(tmp39);
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
  layoutMode(currentEmbeddedActivity[18])({ connectedEmbeddedActivity: currentEmbeddedActivity });
  const items2 = [layoutMode, currentEmbeddedActivity];
  const layoutEffect = obj2.useLayoutEffect(() => {
    if (null != currentEmbeddedActivity) {
      const obj2 = { type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode, applicationId: tmp.applicationId };
      const obj = DispatcherDefault;
      obj.dispatch(obj2);
    }
  }, items2);
  const items3 = [tmp4, currentEmbeddedActivity];
  id1 = undefined;
  const callback = obj2.useCallback(() => {
    let _location;
    const leaveEmbeddedActivity = leaveEmbeddedActivity2.leaveEmbeddedActivity;
    leaveEmbeddedActivity2;
    if (currentEmbeddedActivity != null) {
      _location = currentEmbeddedActivity.location;
    }
    const obj = { location: _location, applicationId: id };
    id = undefined;
    if (id != null) {
      id = id.id;
    }
    const result = leaveEmbeddedActivity(obj);
  }, items3);
  if (tmp4 != null) {
    id1 = tmp4.id;
  }
  let tmp23 = null == currentEmbeddedActivity;
  if (!tmp23) {
    let launchId1;
    if (currentEmbeddedActivity != null) {
      launchId1 = currentEmbeddedActivity.launchId;
    }
    tmp23 = null == launchId1;
  }
  if (!tmp23) {
    tmp23 = tmp8;
  }
  if (!tmp23) {
    tmp23 = null == id1;
  }
  if (!tmp23) {
    tmp23 = null == tmp4;
  }
  const obj5 = { orientationLockState: stateFromStores, showLoadingIndicator: tmp23, setShowLoadingStateForLockingOrientation: tmp9, application: tmp4, setOrientationLockState: channel(currentEmbeddedActivity[9]).setOrientationLockState };
  setIsResetting = useBaseActivityView(obj5).setIsResetting;
  useBaseActivityView(obj5);
  if (null != currentEmbeddedActivity) {
    if (null != id1) {
      const obj6 = {};
      if (null != currentEmbeddedActivity.customId) {
        obj6.custom_id = currentEmbeddedActivity.customId;
      }
      if (null != currentEmbeddedActivity.referrerId) {
        obj6.referrer_id = currentEmbeddedActivity.referrerId;
      }
      const obj7 = { showLoadingIndicator: tmp23, isResetting: tmp26, children: items4 };
      items4 = [closure_13(tmp2(tmp3[20]), { wakeLockKey: "EmbeddedActivities" }), ];
      const obj8 = {
        deepLinkQueryParams: obj6,
        onInvalidUrl() {
              id = undefined;
              if (channel != null) {
                id = tmp.id;
              }
              if (null != id) {
                const obj = ChannelRTCActionCreatorsDefault;
                const participant = obj.selectParticipant(tmp.id, null);
              }
              const obj2 = leaveEmbeddedActivity2;
              const obj3 = { location: currentEmbeddedActivity.location, applicationId: id1, showFeedback: false };
              const result = obj2.leaveEmbeddedActivity(obj3);
            },
        onActivityCrash() {
              const obj = activityWebViewController;
              const result = obj.releaseActivityWebView();
              setIsResetting(true);
              const timerId = setTimeout(() => setIsResetting(false), 0);
            },
        applicationId: id1,
        channelId: id2,
        guildId: guild_id3,
        activityUrl: currentEmbeddedActivity.url,
        activitySessionId: compositeInstanceId,
        queryParams: obj3,
        onLoadError: callback,
        allowPopups: tmp5Result2.allowPopups(tmp4),
        referrerPolicy: "origin",
        isPipOrGridMode: layoutMode === constants.PIP || layoutMode === constants.GRID,
        safeAreasConfig: portraitSafeAreasConfig,
        ignoreSilentHardwareSwitch: !set.has(id1)
      };
      id2 = undefined;
      const tmp28 = closure_14;
      const tmp29 = BaseActivityView;
      const tmp30 = closure_13;
      const tmp31 = EmbeddedActivityWebView;
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
      tmp5Result2 = channel(currentEmbeddedActivity[22]);
      if (tmp27) {
        portraitSafeAreasConfig = landscapeSafeAreasConfig;
      }
      items4[1] = tmp30(tmp31, obj8);
      return tmp28(tmp29, obj7);
    }
  }
  return null;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/activities/native/EmbeddedActivityView.tsx");

export default memoResult;
export { useBaseActivityView };
export { ActivityViewLoadingIndicator };
export { BaseActivityView };
export const EmbeddedActivityView = memoResult;
