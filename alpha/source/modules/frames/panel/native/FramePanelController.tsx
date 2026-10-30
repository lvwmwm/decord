// Module ID: 19098
// Function ID: 19099
// Name: FramePanelController
// Dependencies: [19, 2040, 6840, 6841, 5652, 21, 504, 18620, 10903, 19071, 19099, 2]
// Exports: default

// Module 19098 (FramePanelController)
import Fragment from "Fragment" /* 21 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5652 */;
import FramesConstants from "FramesConstants" /* 6841 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10903 */;
import conjureBackgroundFrames from "conjureBackgroundFrames" /* 18620 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 19099 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2040 */;
import FramesStore from "FramesStore" /* 6840 */;
import size from "module_2" /* 2 */;

const asLaunched = FramesConstants.asLaunched;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelController.tsx");

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
      const frame = FramesStore.getFrame(tmp);
      let result = PIP === ActivityPanelModes.PANEL && null != frame;
      if (result) {
        const obj = conjureBackgroundFrames;
        result = obj.returnToConjureFrameSurface(frame);
      }
      if (!result) {
        const obj2 = FramesActionCreatorsDefault;
        obj2.updateFramePanelMode(mainFrameId, PIP);
      }
    }
  }, items1);
  const BaseActivityPanelController = mainFrameId(19071).BaseActivityPanelController;
  return <BaseActivityPanelController context={FramePanelStateContextDefault} orientationLockStateForApp={orientationLockStateForApp} mode={mode} hasConnectedActivity={null != mainFrameId} connectedActivityAppId={connectedActivityAppId} currentApp={currentApp} updateActivityPanelMode={callback}>{children}</BaseActivityPanelController>;
};
