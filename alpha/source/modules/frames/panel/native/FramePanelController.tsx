// Module ID: 19076
// Function ID: 19077
// Name: FramePanelController
// Dependencies: [19, 2163, 6504, 6505, 5420, 21, 504, 15624, 10502, 19050, 19077, 2]
// Exports: default

// Module 19076 (FramePanelController)
import Fragment from "Fragment" /* 21 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5420 */;
import FramesConstants from "FramesConstants" /* 6505 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10502 */;
import conjureBackgroundFrames from "conjureBackgroundFrames" /* 15624 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 19077 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2163 */;
import FramesStore from "FramesStore" /* 6504 */;
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
  const BaseActivityPanelController = mainFrameId(19050).BaseActivityPanelController;
  return <BaseActivityPanelController context={FramePanelStateContextDefault} orientationLockStateForApp={orientationLockStateForApp} mode={mode} hasConnectedActivity={null != mainFrameId} connectedActivityAppId={connectedActivityAppId} currentApp={currentApp} updateActivityPanelMode={callback}>{children}</BaseActivityPanelController>;
};
