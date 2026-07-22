// Module ID: 15609
// Function ID: 119083
// Name: FrameView
// Dependencies: []

// Module 15609 (FrameView)
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const FrameLayoutModes = arg1(dependencyMap[3]).FrameLayoutModes;
const ActivityPlatform = arg1(dependencyMap[4]).ActivityPlatform;
const jsx = arg1(dependencyMap[5]).jsx;
const memoResult = importAllResult.memo(function FrameViewInner(layoutMode) {
  let tmp5;
  let tmp6;
  layoutMode = layoutMode.layoutMode;
  const arg1 = layoutMode;
  let landscapeSafeAreasConfig = layoutMode.portraitSafeAreasConfig;
  let dependencyMap;
  let callback;
  let obj = arg1(dependencyMap[6]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => store.getConnectedFrame());
  const importDefault = stateFromStores;
  let obj1 = arg1(dependencyMap[7]);
  let applicationId;
  if (null != stateFromStores) {
    applicationId = stateFromStores.applicationId;
  }
  const data = obj1.useApplication(applicationId).data;
  let obj2 = arg1(dependencyMap[6]);
  const items1 = [closure_5];
  const items2 = [stateFromStores];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let orientationLockStateForApp;
    if (null != stateFromStores) {
      orientationLockStateForApp = store.getOrientationLockStateForApp(stateFromStores.applicationId);
    }
    return orientationLockStateForApp;
  }, items2);
  const items3 = [layoutMode];
  [tmp5, tmp6] = callback(importAllResult.useState(true), 2);
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    if (null != stateFromStores) {
      let obj = stateFromStores(applicationId1[8]);
      obj = { type: "FRAME_UPDATE_LAYOUT_MODE", layoutMode, applicationId: stateFromStores.applicationId };
      obj.dispatch(obj);
    }
  }, items3);
  let applicationId1;
  if (null != stateFromStores) {
    applicationId1 = stateFromStores.applicationId;
  }
  dependencyMap = applicationId1;
  const items4 = [applicationId1];
  let tmp10 = null == stateFromStores;
  callback = importAllResult.useCallback(() => {
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
  const tmp4 = callback(importAllResult.useState(true), 2);
  obj = { orientationLockState: stateFromStores1, showLoadingIndicator: tmp10, setShowLoadingStateForLockingOrientation: tmp6, application: data, setOrientationLockState: arg1(dependencyMap[11]).setOrientationLockState };
  const baseActivityView = arg1(dependencyMap[10]).useBaseActivityView(obj);
  callback = baseActivityView.setIsResetting;
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
          const timerId = setTimeout(() => callback(false), 0);
        },
      applicationId: applicationId1,
      activityUrl: stateFromStores.url,
      queryParams: obj,
      onLoadError: callback
    };
    const tmp18 = importDefault(dependencyMap[12]);
    obj2.allowPopups = arg1(dependencyMap[13]).allowPopups(data);
    obj2.referrerPolicy = "origin";
    obj2.isPipOrGridMode = layoutMode === FrameLayoutModes.PIP;
    obj2.webViewKey = arg1(dependencyMap[9]).FRAME_WEB_VIEW_KEY;
    if (tmp13) {
      landscapeSafeAreasConfig = layoutMode.landscapeSafeAreasConfig;
    }
    obj2.safeAreasConfig = landscapeSafeAreasConfig;
    obj1.children = <tmp18 {...obj2} />;
    return jsx(arg1(dependencyMap[10]).BaseActivityView, obj1);
  }
  const obj4 = arg1(dependencyMap[10]);
});
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/frames/native/FrameView.tsx");

export default memoResult;
export const FrameView = memoResult;
