// Module ID: 16005
// Function ID: 16006
// Name: FramePanelController
// Dependencies: [19, 4322, 10509, 10510, 9676, 21, 589, 15972, 16006, 10513, 2]
// Exports: default

// Module 16005 (FramePanelController)
import "noop";
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
  let hasConnectedActivity;
  let mode;
  let orientationLockStateForApp;
  let obj = require(589) /* initialize */;
  const items = [map, addApplication];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const tmp = callback(mainFrame.getMainFrame());
    let activityPanelMode;
    if (tmp != null) {
      activityPanelMode = tmp.data.activityPanelMode;
    }
    if (activityPanelMode == null) {
      activityPanelMode = constants.DISCONNECTED;
    }
    let applicationId;
    if (tmp != null) {
      applicationId = tmp.applicationId;
    }
    const obj = { mode: activityPanelMode, hasConnectedActivity: null != tmp, connectedActivityAppId: applicationId, currentApp: null, orientationLockStateForApp: null };
    let application;
    if (null != applicationId) {
      application = application.getApplication(applicationId);
    }
    obj[3] = application;
    let orientationLock;
    if (tmp != null) {
      orientationLock = tmp.data.orientationLock;
    }
    obj[4] = orientationLock;
    return obj;
  }, []);
  ({ mode, hasConnectedActivity, connectedActivityAppId, currentApp, orientationLockStateForApp } = stateFromStoresObject);
  obj = { context: null, orientationLockStateForApp: null, mode: null, hasConnectedActivity: null, connectedActivityAppId: null, currentApp: null, updateActivityPanelMode: null, children: null };
  obj[0] = importDefault(16006);
  obj[1] = orientationLockStateForApp;
  obj[2] = mode;
  obj[3] = hasConnectedActivity;
  obj[4] = connectedActivityAppId;
  obj[5] = currentApp;
  obj[6] = importDefault(10513).updateFramePanelMode;
  obj[7] = children.children;
  return jsx(require(15972) /* BaseActivityPanelController */.BaseActivityPanelController, { context: null, orientationLockStateForApp: null, mode: null, hasConnectedActivity: null, connectedActivityAppId: null, currentApp: null, updateActivityPanelMode: null, children: null });
};
