// Module ID: 10441
// Function ID: 80968
// Name: useRefocusOrLaunchActivity
// Dependencies: [5, 31, 5658, 1347, 5659, 5463, 566, 10442, 5665, 10443, 10817, 2]
// Exports: default

// Module 10441 (useRefocusOrLaunchActivity)
import fetchApplication from "fetchApplication";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { FrameLayoutModes } from "FrameLayoutModes";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/activities/utils/useRefocusOrLaunchActivity.tsx");

export default function useRefocusOrLaunchActivity(applicationId) {
  applicationId = applicationId.applicationId;
  const analyticsLocations = applicationId.analyticsLocations;
  const runBeforeLaunchAttempt = applicationId.runBeforeLaunchAttempt;
  const runAfterLaunchAttempt = applicationId.runAfterLaunchAttempt;
  const data = applicationId(runBeforeLaunchAttempt[5]).useApplication(applicationId).data;
  const obj = applicationId(runBeforeLaunchAttempt[5]);
  const items = [stateFromStores1];
  const stateFromStores = applicationId(runBeforeLaunchAttempt[6]).useStateFromStores(items, () => stateFromStores1.getCurrentEmbeddedActivity());
  const obj2 = applicationId(runBeforeLaunchAttempt[6]);
  const items1 = [stateFromStores];
  stateFromStores1 = applicationId(runBeforeLaunchAttempt[6]).useStateFromStores(items1, () => stateFromStores.getConnectedFrame());
  const obj3 = applicationId(runBeforeLaunchAttempt[6]);
  const canLaunchFrameResult = applicationId(runBeforeLaunchAttempt[7]).canLaunchFrame(data);
  const FrameLayoutModes = canLaunchFrameResult;
  // CreateGeneratorClosureLongIndex (0x67)
  const items2 = [analyticsLocations, data, applicationId, canLaunchFrameResult, stateFromStores, stateFromStores1, runAfterLaunchAttempt, runBeforeLaunchAttempt];
  return data.useCallback(runAfterLaunchAttempt(tmp), items2);
};
