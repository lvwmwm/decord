// Module ID: 15594
// Function ID: 118987
// Name: FramePanelController
// Dependencies: []
// Exports: default

// Module 15594 (FramePanelController)
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/frames/panel/native/FramePanelController.tsx");

export default function FramePanelController(children) {
  let connectedActivityAppId;
  let currentApp;
  let hasConnectedActivity;
  let mode;
  let orientationLockStateForApp;
  let obj = arg1(dependencyMap[4]);
  const items = [closure_4, closure_3];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const activityPanelMode = store.getActivityPanelMode();
    const connectedFrame = store.getConnectedFrame();
    let applicationId;
    if (null != connectedFrame) {
      applicationId = connectedFrame.applicationId;
    }
    const obj = { mode: activityPanelMode, hasConnectedActivity: null != connectedFrame, connectedActivityAppId: applicationId };
    let application;
    if (null != applicationId) {
      application = application.getApplication(applicationId);
    }
    obj.currentApp = application;
    let orientationLockStateForApp;
    if (null != applicationId) {
      orientationLockStateForApp = store.getOrientationLockStateForApp(applicationId);
    }
    obj.orientationLockStateForApp = orientationLockStateForApp;
    return obj;
  }, []);
  ({ mode, hasConnectedActivity, connectedActivityAppId, currentApp, orientationLockStateForApp } = stateFromStoresObject);
  obj = { context: importDefault(dependencyMap[6]), orientationLockStateForApp, mode, hasConnectedActivity, connectedActivityAppId, currentApp, updateActivityPanelMode: importDefault(dependencyMap[7]).updateFramePanelMode, children: children.children };
  return jsx(arg1(dependencyMap[5]).BaseActivityPanelController, obj);
};
