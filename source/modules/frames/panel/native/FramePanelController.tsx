// Module ID: 16115
// Function ID: 16116
// Name: FramePanelController
// Dependencies: [19, 4341, 10592, 10593, 9759, 21, 589, 10596, 16082, 16116, 2]
// Exports: default

// Module 16115 (FramePanelController)
import noop from "noop";
import addApplication from "addApplication";
import map from "map";
import { asLaunched } from "FrameLayoutModes";
import { ActivityPanelModes } from "ActivityPanelModes";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("map").fileFinishedImporting("modules/frames/panel/native/FramePanelController.tsx");

export default function FramePanelController(children) {
  let connectedActivityAppId;
  let currentApp;
  let mode;
  let orientationLockStateForApp;
  let mainFrameId;
  let obj = mainFrameId(589);
  const items = [map, addApplication];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const tmp = callback(mainFrame.getMainFrame());
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
    let mainFrameId;
    if (tmp != null) {
      mainFrameId = tmp.id;
    }
    return { mainFrameId, mode, connectedActivityAppId, currentApp, orientationLockStateForApp };
  }, []);
  mainFrameId = stateFromStoresObject.mainFrameId;
  const items1 = [mainFrameId];
  ({ mode, connectedActivityAppId, currentApp, orientationLockStateForApp } = stateFromStoresObject);
  const callback = React.useCallback((PIP) => {
    if (null != mainFrameId) {
      outer1_1(outer1_2[7]).updateFramePanelMode(tmp, PIP);
      const obj = outer1_1(outer1_2[7]);
    }
  }, items1);
  obj = { context: null, orientationLockStateForApp: null, mode: null, hasConnectedActivity: null, connectedActivityAppId: null, currentApp: null, updateActivityPanelMode: null, children: null };
  obj[0] = importDefault(16116);
  obj[1] = orientationLockStateForApp;
  obj[2] = mode;
  obj[3] = null != mainFrameId;
  obj[4] = connectedActivityAppId;
  obj[5] = currentApp;
  obj[6] = callback;
  obj[7] = children.children;
  return jsx(mainFrameId(16082).BaseActivityPanelController, { context: null, orientationLockStateForApp: null, mode: null, hasConnectedActivity: null, connectedActivityAppId: null, currentApp: null, updateActivityPanelMode: null, children: null });
};
