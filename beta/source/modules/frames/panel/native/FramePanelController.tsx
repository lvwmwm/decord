// Module ID: 16864
// Function ID: 16865
// Name: FramePanelController
// Dependencies: [19, 5063, 8499, 8500, 8502, 21, 504, 8760, 16831, 16865, 2]
// Exports: default

// Module 16864 (FramePanelController)
import Fragment from "Fragment" /* 21 */;
import FramesConstants from "FramesConstants" /* 8500 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 8502 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 8760 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 16865 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5063 */;
import FramesStore from "FramesStore" /* 8499 */;
import size from "module_2" /* 2 */;

const asLaunched = FramesConstants.asLaunched;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelController.tsx");

export default function FramePanelController(children) {
  let application;
  let connectedActivityAppId;
  let currentApp;
  let mainFrame;
  let mode;
  let orientationLockStateForApp;
  let mainFrameId;
  children = children.children;
  let obj = mainFrameId(504);
  const items = [FramesStore, ApplicationStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const tmp = asLaunched(mainFrame.getMainFrame());
    let mode;
    if (tmp != null) {
      mode = tmp.data.activityPanelMode;
    }
    if (mode == null) {
      mode = constants.DISCONNECTED;
    }
    let connectedActivityAppId;
    if (tmp != null) {
      connectedActivityAppId = tmp.applicationId;
    }
    let currentApp;
    if (null != connectedActivityAppId) {
      currentApp = application.getApplication(connectedActivityAppId);
    }
    let orientationLockStateForApp;
    if (tmp != null) {
      orientationLockStateForApp = tmp.data.orientationLock;
    }
    mainFrameId = undefined;
    if (tmp != null) {
      mainFrameId = tmp.id;
    }
    return { mainFrameId, mode, connectedActivityAppId, currentApp, orientationLockStateForApp };
  }, []);
  mainFrameId = stateFromStoresObject.mainFrameId;
  const items1 = [mainFrameId];
  ({ mode, connectedActivityAppId, currentApp, orientationLockStateForApp } = stateFromStoresObject);
  const callback = react.useCallback((PIP) => {
    if (null != mainFrameId) {
      const obj = FramesActionCreatorsDefault;
      obj.updateFramePanelMode(tmp, PIP);
    }
  }, items1);
  const BaseActivityPanelController = mainFrameId(16831).BaseActivityPanelController;
  return <BaseActivityPanelController context={FramePanelStateContextDefault} orientationLockStateForApp={orientationLockStateForApp} mode={mode} hasConnectedActivity={null != mainFrameId} connectedActivityAppId={connectedActivityAppId} currentApp={currentApp} updateActivityPanelMode={callback}>{children}</BaseActivityPanelController>;
};
