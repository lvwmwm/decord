// Module ID: 15726
// Function ID: 121256
// Name: FrameView
// Dependencies: [57, 31, 10479, 10480, 4155, 33, 566, 5465, 686, 10489, 10601, 15727, 15728, 10612, 2]

// Module 15726 (FrameView)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { FrameLayoutModes } from "FrameLayoutModes";
import { ActivityPlatform } from "items3";
import { jsx } from "jsxProd";

const require = arg1;
const memoResult = importAllResult.memo(function FrameViewInner(layoutMode) {
  let tmp5;
  let tmp6;
  layoutMode = layoutMode.layoutMode;
  let landscapeSafeAreasConfig = layoutMode.portraitSafeAreasConfig;
  let applicationId1;
  let setIsResetting;
  let obj = layoutMode(applicationId1[6]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getConnectedFrame());
  let obj1 = layoutMode(applicationId1[7]);
  let applicationId;
  if (null != stateFromStores) {
    applicationId = stateFromStores.applicationId;
  }
  const data = obj1.useApplication(applicationId).data;
  let obj2 = layoutMode(applicationId1[6]);
  const items1 = [_isNativeReflectConstruct];
  const items2 = [stateFromStores];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let orientationLockStateForApp;
    if (null != stateFromStores) {
      orientationLockStateForApp = outer1_5.getOrientationLockStateForApp(stateFromStores.applicationId);
    }
    return orientationLockStateForApp;
  }, items2);
  const items3 = [layoutMode];
  [tmp5, tmp6] = setIsResetting(importAllResult.useState(true), 2);
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    if (null != stateFromStores) {
      let obj = stateFromStores(applicationId1[8]);
      obj = { type: "FRAME_UPDATE_LAYOUT_MODE", layoutMode, applicationId: stateFromStores.applicationId };
      obj.dispatch(obj);
    }
  }, items3);
  applicationId1 = undefined;
  if (null != stateFromStores) {
    applicationId1 = stateFromStores.applicationId;
  }
  const items4 = [applicationId1];
  let tmp10 = null == stateFromStores;
  const callback = importAllResult.useCallback(() => {
    if (null != applicationId1) {
      let obj = stateFromStores(applicationId1[9]);
      obj = { applicationId: applicationId1 };
      obj.leaveFrame(obj);
    }
  }, items4);
  if (!tmp10) {
    tmp10 = tmp5;
  }
  if (!tmp10) {
    tmp10 = null == applicationId1;
  }
  if (!tmp10) {
    tmp10 = null == data;
  }
  const tmp4 = setIsResetting(importAllResult.useState(true), 2);
  obj = { orientationLockState: stateFromStores1, showLoadingIndicator: tmp10, setShowLoadingStateForLockingOrientation: tmp6, application: data, setOrientationLockState: layoutMode(applicationId1[11]).setOrientationLockState };
  const baseActivityView = layoutMode(applicationId1[10]).useBaseActivityView(obj);
  setIsResetting = baseActivityView.setIsResetting;
  if (null == stateFromStores) {
    return null;
  } else {
    obj = { instance_id: "example-cl-instance", platform: ActivityPlatform.MOBILE };
    if (null != stateFromStores.proxyTicket) {
      obj.discord_proxy_ticket = stateFromStores.proxyTicket;
    }
    obj1 = { wakeLockKey: "FrameActivities", showLoadingIndicator: tmp10, isResetting: tmp12 };
    obj2 = {
      onActivityCrash() {
          setIsResetting(true);
          const timerId = setTimeout(() => outer1_3(false), 0);
        },
      applicationId: applicationId1,
      activityUrl: stateFromStores.url,
      queryParams: obj,
      onLoadError: callback
    };
    const tmp18 = stateFromStores(applicationId1[12]);
    obj2.allowPopups = layoutMode(applicationId1[13]).allowPopups(data);
    obj2.referrerPolicy = "origin";
    obj2.isPipOrGridMode = layoutMode === FrameLayoutModes.PIP;
    obj2.webViewKey = layoutMode(applicationId1[9]).FRAME_WEB_VIEW_KEY;
    if (tmp13) {
      landscapeSafeAreasConfig = layoutMode.landscapeSafeAreasConfig;
    }
    obj2.safeAreasConfig = landscapeSafeAreasConfig;
    obj1.children = <tmp18 onActivityCrash={function onActivityCrash() {
      setIsResetting(true);
      const timerId = setTimeout(() => outer1_3(false), 0);
    }} applicationId={applicationId1} activityUrl={stateFromStores.url} queryParams={obj} onLoadError={callback} />;
    return jsx(layoutMode(applicationId1[10]).BaseActivityView, { wakeLockKey: "FrameActivities", showLoadingIndicator: tmp10, isResetting: tmp12 });
  }
  const obj4 = layoutMode(applicationId1[10]);
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/frames/native/FrameView.tsx");

export default memoResult;
export const FrameView = memoResult;
