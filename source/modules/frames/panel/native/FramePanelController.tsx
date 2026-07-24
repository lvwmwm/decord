// Module ID: 15769
// Function ID: 121564
// Name: FramePanelController
// Dependencies: [31, 4167, 10508, 33, 566, 15736, 15770, 10512, 2]
// Exports: default

// Module 15769 (FramePanelController)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/frames/panel/native/FramePanelController.tsx");

export default function FramePanelController(children) {
  let connectedActivityAppId;
  let currentApp;
  let hasConnectedActivity;
  let mode;
  let orientationLockStateForApp;
  let obj = require(566) /* initialize */;
  const items = [closure_4, _isNativeReflectConstruct];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const activityPanelMode = outer1_4.getActivityPanelMode();
    const connectedFrame = outer1_4.getConnectedFrame();
    let applicationId;
    if (null != connectedFrame) {
      applicationId = connectedFrame.applicationId;
    }
    const obj = { mode: activityPanelMode, hasConnectedActivity: null != connectedFrame, connectedActivityAppId: applicationId };
    let application;
    if (null != applicationId) {
      application = outer1_3.getApplication(applicationId);
    }
    obj.currentApp = application;
    let orientationLockStateForApp;
    if (null != applicationId) {
      orientationLockStateForApp = outer1_4.getOrientationLockStateForApp(applicationId);
    }
    obj.orientationLockStateForApp = orientationLockStateForApp;
    return obj;
  }, []);
  ({ mode, hasConnectedActivity, connectedActivityAppId, currentApp, orientationLockStateForApp } = stateFromStoresObject);
  obj = { context: importDefault(15770), orientationLockStateForApp, mode, hasConnectedActivity, connectedActivityAppId, currentApp, updateActivityPanelMode: importDefault(10512).updateFramePanelMode, children: children.children };
  return jsx(require(15736) /* BaseActivityPanelController */.BaseActivityPanelController, { context: importDefault(15770), orientationLockStateForApp, mode, hasConnectedActivity, connectedActivityAppId, currentApp, updateActivityPanelMode: importDefault(10512).updateFramePanelMode, children: children.children });
};
