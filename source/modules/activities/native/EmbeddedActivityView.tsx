// Module ID: 10601
// Function ID: 82695
// Name: useBaseActivityView
// Dependencies: [57, 31, 27, 1347, 4155, 4156, 33, 4130, 10600, 1450, 686, 10602, 10603, 10598, 566, 10605, 10525, 10606, 10612, 2]

// Module 10601 (useBaseActivityView)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import closure_7 from "_createForOfIteratorHelperLoose";
import items3 from "items3";
import { OBEY_SILENT_HARDWARE_SWITCH_APP_IDS as closure_10 } from "ApplicationTypes";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_13;
let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
function useBaseActivityView(orientationLockState) {
  orientationLockState = orientationLockState.orientationLockState;
  const showLoadingIndicator = orientationLockState.showLoadingIndicator;
  const setShowLoadingStateForLockingOrientation = orientationLockState.setShowLoadingStateForLockingOrientation;
  const application = orientationLockState.application;
  const setOrientationLockState = orientationLockState.setOrientationLockState;
  let first1;
  let closure_8;
  let isLandscape;
  const setIsResetting = application(setOrientationLockState.useState(false), 2);
  const isResetting = setIsResetting[0];
  const defaultOrientationLockState = orientationLockState(setShowLoadingStateForLockingOrientation[8]).getDefaultOrientationLockState(application);
  let id;
  if (null != application) {
    id = application.id;
  }
  const tmp5 = application(setOrientationLockState.useState(false), 2);
  first1 = tmp5[0];
  closure_8 = tmp5[1];
  const size = showLoadingIndicator(setShowLoadingStateForLockingOrientation[9])();
  isLandscape = size.width > size.height;
  const items = [isLandscape];
  const layoutEffect = setOrientationLockState.useLayoutEffect(() => {
    showLoadingIndicator(setShowLoadingStateForLockingOrientation[10]).dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: isLandscape ? isLandscape.LANDSCAPE : isLandscape.PORTRAIT });
  }, items);
  const items1 = [id];
  const layoutEffect1 = setOrientationLockState.useLayoutEffect(() => {
    callback(false);
  }, items1);
  const items2 = [defaultOrientationLockState, application, orientationLockState, isLandscape, first1, setShowLoadingStateForLockingOrientation, setOrientationLockState];
  const layoutEffect2 = setOrientationLockState.useLayoutEffect(() => {
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
  const layoutEffect3 = setOrientationLockState.useLayoutEffect(() => {
    if (showLoadingIndicator(setShowLoadingStateForLockingOrientation[11])(isLandscape, orientationLockState)) {
      setShowLoadingStateForLockingOrientation(false);
    }
  }, items3);
  const items4 = [showLoadingIndicator, isResetting];
  const layoutEffect4 = setOrientationLockState.useLayoutEffect(() => {
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
    obj = { style: c14().loadingContainer, children: jsx(ActivityIndicator, { size: "large" }) };
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
        tmp8 = closure_1;
        tmp9 = closure_2;
        num = 12;
        obj = {};
        obj.wakeLockKey = tmp2;
        items = [, ];
        items[0] = jsx(require("useWakeLock"), obj);
        items[1] = tmp;
        obj.children = items;
        tmp4 = jsxs(Fragment, obj);
      }
    }
    return tmp4;
  }
}
({ ActivityIndicator: closure_5, View: closure_6 } = get_ActivityIndicator);
({ ActivityLayoutMode: closure_8, ActivityScreenOrientation: closure_9 } = items3);
({ jsx: closure_11, Fragment: closure_12, jsxs: closure_13 } = jsxProd);
let closure_14 = _createForOfIteratorHelperLoose.createStyles({ loadingContainer: { flex: 1, justifyContent: "center" } });
const memoResult = importAllResult.memo(function EmbeddedActivityViewInner(portraitSafeAreasConfig) {
  let channel;
  let channel2;
  let currentEmbeddedActivity;
  let layoutMode;
  let tmp7;
  let tmp8;
  ({ channel, layoutMode } = portraitSafeAreasConfig);
  let landscapeSafeAreasConfig = portraitSafeAreasConfig.portraitSafeAreasConfig;
  let setIsResetting;
  currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
  const tmp4 = currentEmbeddedActivity(10598)();
  const dependencyMap = tmp4;
  let obj = layoutMode(566);
  const items = [currentEmbeddedActivity];
  const items1 = [tmp4];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let orientationLockStateForApp;
    if (null != tmp4) {
      orientationLockStateForApp = outer1_7.getOrientationLockStateForApp(tmp4.id);
    }
    return orientationLockStateForApp;
  }, items1);
  ({ currentEmbeddedActivity, channel: channel2 } = { currentEmbeddedActivity, channel });
  [tmp7, tmp8] = setIsResetting(importAllResult.useState(true), 2);
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
    let _location = currentEmbeddedActivity.location;
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
  currentEmbeddedActivity(10605)({ connectedEmbeddedActivity: currentEmbeddedActivity });
  const items2 = [layoutMode, currentEmbeddedActivity];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    if (null != currentEmbeddedActivity) {
      let obj = currentEmbeddedActivity(tmp4[10]);
      obj = { type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode, applicationId: currentEmbeddedActivity.applicationId };
      obj.dispatch(obj);
    }
  }, items2);
  const items3 = [tmp4, currentEmbeddedActivity];
  const callback = importAllResult.useCallback(() => {
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
  const obj1 = { orientationLockState: stateFromStores, showLoadingIndicator: tmp19, setShowLoadingStateForLockingOrientation: tmp8, application: tmp4, setOrientationLockState: layoutMode(10600).setOrientationLockState };
  const tmp2 = currentEmbeddedActivity;
  const tmp6 = setIsResetting(importAllResult.useState(true), 2);
  setIsResetting = useBaseActivityView(obj1).setIsResetting;
  let tmp25Result = null;
  if (null != currentEmbeddedActivity) {
    tmp25Result = null;
    if (null != id) {
      const obj2 = { wakeLockKey: "EmbeddedActivities", showLoadingIndicator: tmp19, isResetting: tmp22 };
      const obj3 = {
        onActivityCrash() {
              setIsResetting(true);
              const timerId = setTimeout(() => outer1_3(false), 0);
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
      const tmp30 = currentEmbeddedActivity(10606);
      obj3.allowPopups = layoutMode(10612).allowPopups(tmp4);
      obj3.referrerPolicy = "origin";
      let tmp37 = layoutMode === constants.PIP;
      if (!tmp37) {
        tmp37 = layoutMode === constants.GRID;
      }
      obj3.isPipOrGridMode = tmp37;
      obj3.webViewKey = layoutMode(10525).EMBEDDED_ACTIVITY_WEB_VIEW_KEY;
      if (tmp23) {
        landscapeSafeAreasConfig = portraitSafeAreasConfig.landscapeSafeAreasConfig;
      }
      obj3.safeAreasConfig = landscapeSafeAreasConfig;
      obj3.ignoreSilentHardwareSwitch = !set.has(id);
      obj2.children = tmp27(tmp30, obj3);
      tmp25Result = tmp25(tmp26, obj2);
      const obj6 = layoutMode(10612);
    }
  }
  return tmp25Result;
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/activities/native/EmbeddedActivityView.tsx");

export default memoResult;
export { useBaseActivityView };
export { ActivityViewLoadingIndicator };
export { BaseActivityView };
export const EmbeddedActivityView = memoResult;
