// Module ID: 10461
// Function ID: 81010
// Name: useRefocusOrLaunchActivity
// Dependencies: []
// Exports: default

// Module 10461 (useRefocusOrLaunchActivity)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const FrameLayoutModes = arg1(dependencyMap[4]).FrameLayoutModes;
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/activities/utils/useRefocusOrLaunchActivity.tsx");

export default function useRefocusOrLaunchActivity(applicationId) {
  applicationId = applicationId.applicationId;
  const arg1 = applicationId;
  const analyticsLocations = applicationId.analyticsLocations;
  const importDefault = analyticsLocations;
  const runBeforeLaunchAttempt = applicationId.runBeforeLaunchAttempt;
  const dependencyMap = runBeforeLaunchAttempt;
  const runAfterLaunchAttempt = applicationId.runAfterLaunchAttempt;
  const callback = runAfterLaunchAttempt;
  const data = arg1(dependencyMap[5]).useApplication(applicationId).data;
  const React = data;
  const obj = arg1(dependencyMap[5]);
  const items = [closure_6];
  const stateFromStores = arg1(dependencyMap[6]).useStateFromStores(items, () => stateFromStores1.getCurrentEmbeddedActivity());
  let closure_5 = stateFromStores;
  const obj2 = arg1(dependencyMap[6]);
  const items1 = [closure_5];
  const stateFromStores1 = arg1(dependencyMap[6]).useStateFromStores(items1, () => stateFromStores.getConnectedFrame());
  closure_6 = stateFromStores1;
  const obj3 = arg1(dependencyMap[6]);
  const canLaunchFrameResult = arg1(dependencyMap[7]).canLaunchFrame(data);
  const FrameLayoutModes = canLaunchFrameResult;
  // CreateGeneratorClosureLongIndex (0x67)
  const items2 = [analyticsLocations, data, applicationId, canLaunchFrameResult, stateFromStores, stateFromStores1, runAfterLaunchAttempt, runBeforeLaunchAttempt];
  return React.useCallback(callback(tmp), items2);
};
