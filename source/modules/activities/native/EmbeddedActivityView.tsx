// Module ID: 10590
// Function ID: 82621
// Name: useBaseActivityView
// Dependencies: []

// Module 10590 (useBaseActivityView)
function useBaseActivityView(orientationLockState) {
  orientationLockState = orientationLockState.orientationLockState;
  const arg1 = orientationLockState;
  const showLoadingIndicator = orientationLockState.showLoadingIndicator;
  const importDefault = showLoadingIndicator;
  const setShowLoadingStateForLockingOrientation = orientationLockState.setShowLoadingStateForLockingOrientation;
  const dependencyMap = setShowLoadingStateForLockingOrientation;
  const application = orientationLockState.application;
  const callback = application;
  const setOrientationLockState = orientationLockState.setOrientationLockState;
  let closure_7;
  let closure_8;
  let isLandscape;
  const setIsResetting = callback(importAllResult.useState(false), 2);
  const isResetting = setIsResetting[0];
  const defaultOrientationLockState = arg1(dependencyMap[8]).getDefaultOrientationLockState(application);
  let id;
  if (null != application) {
    id = application.id;
  }
  const tmp5 = callback(setOrientationLockState.useState(false), 2);
  const first1 = tmp5[0];
  closure_7 = first1;
  closure_8 = tmp5[1];
  const size = importDefault(dependencyMap[9])();
  isLandscape = size.width > size.height;
  const items = [isLandscape];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    showLoadingIndicator(setShowLoadingStateForLockingOrientation[10]).dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: isLandscape ? isLandscape.LANDSCAPE : isLandscape.PORTRAIT });
  }, items);
  const items1 = [id];
  const layoutEffect1 = importAllResult.useLayoutEffect(() => {
    callback(false);
  }, items1);
  const items2 = [defaultOrientationLockState, application, orientationLockState, isLandscape, first1, setShowLoadingStateForLockingOrientation, setOrientationLockState];
  const layoutEffect2 = importAllResult.useLayoutEffect(() => {
    if (!first1) {
      if (null == orientationLockState) {
        if (!showLoadingIndicator(setShowLoadingStateForLockingOrientation[11])(isLandscape, defaultOrientationLockState)) {
          setShowLoadingStateForLockingOrientation(true);
        }
        if (null != application) {
          setOrientationLockState(application, orientationLockState);
        }
      }
    }
    setShowLoadingStateForLockingOrientation(false);
  }, items2);
  const items3 = [orientationLockState, isLandscape, setShowLoadingStateForLockingOrientation];
  const layoutEffect3 = importAllResult.useLayoutEffect(() => {
    if (showLoadingIndicator(setShowLoadingStateForLockingOrientation[11])(isLandscape, orientationLockState)) {
      setShowLoadingStateForLockingOrientation(false);
    }
  }, items3);
  const items4 = [showLoadingIndicator, isResetting];
  const layoutEffect4 = importAllResult.useLayoutEffect(() => {
    let tmp = showLoadingIndicator;
    if (!showLoadingIndicator) {
      tmp = isResetting;
    }
    if (!tmp) {
      callback(true);
    }
  }, items4);
  return { isResetting, setIsResetting: setIsResetting[1], isLandscape };
}
class ActivityViewLoadingIndicator {
  constructor() {
    obj = { style: closure_14().loadingContainer, children: jsx(ActivityIndicator, { size: "large" }) };
    return jsx(View, obj);
  }
}
class BaseActivityView {
  constructor(arg0) {
    if (global.showLoadingIndicator) {
      tmp10 = jsx;
      tmp11 = ActivityViewLoadingIndicator;
      tmp4 = jsx(ActivityViewLoadingIndicator, {});
    } else {
      tmp4 = null;
      if (!tmp3) {
        tmp5 = jsxs;
        tmp6 = Fragment;
        obj = {};
        tmp7 = jsx;
        tmp8 = importDefault;
        tmp9 = dependencyMap;
        num = 12;
        obj = {};
        obj.wakeLockKey = tmp2;
        items = [, ];
        items[0] = jsx(importDefault(dependencyMap[12]), obj);
        items[1] = tmp;
        obj.children = items;
        tmp4 = jsxs(Fragment, obj);
      }
    }
    return tmp4;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ ActivityIndicator: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
const tmp2 = arg1(dependencyMap[2]);
({ ActivityLayoutMode: closure_8, ActivityScreenOrientation: closure_9 } = arg1(dependencyMap[4]));
let closure_10 = arg1(dependencyMap[5]).OBEY_SILENT_HARDWARE_SWITCH_APP_IDS;
const tmp3 = arg1(dependencyMap[4]);
({ jsx: closure_11, Fragment: closure_12, jsxs: closure_13 } = arg1(dependencyMap[6]));
const tmp4 = arg1(dependencyMap[6]);
let closure_14 = arg1(dependencyMap[7]).createStyles({ loadingContainer: { markAsSpoilerTitle: null, keyboardAppearance: null } });
const memoResult = importAllResult.memo(function EmbeddedActivityViewInner(portraitSafeAreasConfig) {
  let channel;
  let channel2;
  let currentEmbeddedActivity;
  let layoutMode;
  let tmp7;
  let tmp8;
  ({ channel, layoutMode } = portraitSafeAreasConfig);
  const arg1 = layoutMode;
  let landscapeSafeAreasConfig = portraitSafeAreasConfig.portraitSafeAreasConfig;
  let callback;
  currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
  const importDefault = currentEmbeddedActivity;
  const tmp4 = importDefault(dependencyMap[13])();
  const dependencyMap = tmp4;
  let obj = arg1(dependencyMap[14]);
  const items = [currentEmbeddedActivity];
  const items1 = [tmp4];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let orientationLockStateForApp;
    if (null != tmp4) {
      orientationLockStateForApp = orientationLockStateForApp.getOrientationLockStateForApp(tmp4.id);
    }
    return orientationLockStateForApp;
  }, items1);
  ({ currentEmbeddedActivity, channel: channel2 } = { currentEmbeddedActivity, channel });
  [tmp7, tmp8] = callback(importAllResult.useState(true), 2);
  if (null == currentEmbeddedActivity) {
    obj = { instance_id: "" };
    let tmp14 = obj;
  } else {
    obj = {};
    let launchId = currentEmbeddedActivity.compositeInstanceId;
    if (null == launchId) {
      launchId = currentEmbeddedActivity.launchId;
    }
    obj.instance_id = launchId;
    const _location = currentEmbeddedActivity.location;
    let id;
    if (null != _location) {
      id = _location.id;
    }
    obj.location_id = id;
    obj.launch_id = currentEmbeddedActivity.launchId;
    if (null != currentEmbeddedActivity.proxyTicket) {
      obj.discord_proxy_ticket = currentEmbeddedActivity.proxyTicket;
    }
    let tmp10 = null != channel2 && null != channel2.id;
    if (tmp10) {
      tmp10 = "" !== channel2.id;
    }
    if (tmp10) {
      obj.channel_id = channel2.id;
    }
    let guild_id;
    if (null != channel2) {
      guild_id = channel2.guild_id;
    }
    let tmp12 = null != guild_id;
    if (tmp12) {
      let guild_id1;
      if (null != channel2) {
        guild_id1 = channel2.guild_id;
      }
      tmp12 = "" !== guild_id1;
    }
    tmp14 = obj;
    if (tmp12) {
      let guild_id2;
      if (null != channel2) {
        guild_id2 = channel2.guild_id;
      }
      obj.guild_id = guild_id2;
      tmp14 = obj;
    }
  }
  importDefault(dependencyMap[15])({ connectedEmbeddedActivity: currentEmbeddedActivity });
  const items2 = [layoutMode, currentEmbeddedActivity];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    if (null != currentEmbeddedActivity) {
      let obj = currentEmbeddedActivity(tmp4[10]);
      obj = { type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode, applicationId: currentEmbeddedActivity.applicationId };
      obj.dispatch(obj);
    }
  }, items2);
  const items3 = [tmp4, currentEmbeddedActivity];
  callback = importAllResult.useCallback(() => {
    let obj = currentEmbeddedActivity(tmp4[16]);
    obj = {};
    let _location;
    if (null != currentEmbeddedActivity) {
      _location = currentEmbeddedActivity.location;
    }
    obj.location = _location;
    let id;
    if (null != tmp4) {
      id = tmp4.id;
    }
    obj.applicationId = id;
    obj.leaveActivity(obj);
  }, items3);
  if (null != tmp4) {
    id = tmp4.id;
  }
  let tmp19 = null == currentEmbeddedActivity;
  if (!tmp19) {
    launchId = undefined;
    if (null != currentEmbeddedActivity) {
      launchId = currentEmbeddedActivity.launchId;
    }
    tmp19 = null == launchId;
  }
  if (!tmp19) {
    tmp19 = tmp7;
  }
  if (!tmp19) {
    tmp19 = null == id;
  }
  if (!tmp19) {
    tmp19 = null == tmp4;
  }
  const obj1 = { orientationLockState: stateFromStores, showLoadingIndicator: tmp19, setShowLoadingStateForLockingOrientation: tmp8, application: tmp4, setOrientationLockState: arg1(dependencyMap[8]).setOrientationLockState };
  const tmp2 = importDefault;
  const tmp3 = dependencyMap;
  const tmp6 = callback(importAllResult.useState(true), 2);
  callback = useBaseActivityView(obj1).setIsResetting;
  let tmp25Result = null;
  if (null != currentEmbeddedActivity) {
    tmp25Result = null;
    if (null != id) {
      const obj2 = { wakeLockKey: "EmbeddedActivities", showLoadingIndicator: tmp19, isResetting: tmp22 };
      const obj3 = {
        onActivityCrash() {
              setIsResetting(true);
              const timerId = setTimeout(() => callback(false), 0);
            },
        applicationId: id
      };
      let id1;
      if (null != channel) {
        id1 = channel.id;
      }
      obj3.channelId = id1;
      let guild_id3;
      if (null != channel) {
        guild_id3 = channel.guild_id;
      }
      obj3.guildId = guild_id3;
      obj3.activityUrl = currentEmbeddedActivity.url;
      obj3.currentEmbeddedActivity = currentEmbeddedActivity;
      let compositeInstanceId;
      if (null != currentEmbeddedActivity) {
        compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
      }
      obj3.activitySessionId = compositeInstanceId;
      obj3.queryParams = tmp14;
      obj3.onLoadError = callback;
      const tmp25 = closure_11;
      const tmp26 = BaseActivityView;
      const tmp27 = closure_11;
      const tmp30 = importDefault(dependencyMap[17]);
      obj3.allowPopups = arg1(dependencyMap[18]).allowPopups(tmp4);
      obj3.referrerPolicy = "origin";
      let tmp37 = layoutMode === constants.PIP;
      if (!tmp37) {
        tmp37 = layoutMode === constants.GRID;
      }
      obj3.isPipOrGridMode = tmp37;
      obj3.webViewKey = arg1(dependencyMap[16]).EMBEDDED_ACTIVITY_WEB_VIEW_KEY;
      if (tmp23) {
        landscapeSafeAreasConfig = portraitSafeAreasConfig.landscapeSafeAreasConfig;
      }
      obj3.safeAreasConfig = landscapeSafeAreasConfig;
      obj3.ignoreSilentHardwareSwitch = !set.has(id);
      obj2.children = tmp27(tmp30, obj3);
      tmp25Result = tmp25(tmp26, obj2);
      const obj6 = arg1(dependencyMap[18]);
    }
  }
  return tmp25Result;
});
const obj2 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/activities/native/EmbeddedActivityView.tsx");

export default memoResult;
export { useBaseActivityView };
export { ActivityViewLoadingIndicator };
export { BaseActivityView };
export const EmbeddedActivityView = memoResult;
