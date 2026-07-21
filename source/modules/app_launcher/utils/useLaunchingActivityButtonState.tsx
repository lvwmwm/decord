// Module ID: 11253
// Function ID: 87545
// Name: useLaunchingActivityButtonState
// Dependencies: []
// Exports: default

// Module 11253 (useLaunchingActivityButtonState)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/app_launcher/utils/useLaunchingActivityButtonState.tsx");

export default function useLaunchingActivityButtonState(applicationId) {
  let onSubmissionComplete;
  applicationId = applicationId.applicationId;
  const arg1 = applicationId;
  ({ context: closure_1, onSubmissionComplete } = applicationId);
  const dependencyMap = onSubmissionComplete;
  let React;
  let closure_4;
  let obj = arg1(dependencyMap[3]);
  const getOrFetchApplication = obj.useGetOrFetchApplication(applicationId);
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => {
    let id;
    if ("channel" === closure_1.type) {
      id = closure_1.channel.id;
    }
    return tmp7.getLaunchState(applicationId, id);
  });
  const obj2 = arg1(dependencyMap[4]);
  const items1 = [closure_5];
  let stateFromStores1 = arg1(dependencyMap[4]).useStateFromStores(items1, () => launchingFrame.isLaunchingFrame(applicationId));
  if (null == getOrFetchApplication) {
    stateFromStores1 = null != stateFromStores && stateFromStores.isLaunching && stateFromStores.componentId === applicationId.launchingComponentId;
    const tmp6 = null != stateFromStores && stateFromStores.isLaunching && stateFromStores.componentId === applicationId.launchingComponentId;
  } else {
    const obj4 = arg1(dependencyMap[5]);
  }
  React = stateFromStores1;
  const tmp7 = importDefault(dependencyMap[6])(stateFromStores1);
  closure_4 = tmp7;
  const items2 = [stateFromStores1, tmp7, onSubmissionComplete];
  const effect = React.useEffect(() => {
    if (tmp) {
      if (null != onSubmissionComplete) {
        onSubmissionComplete();
      }
    }
  }, items2);
  obj = { submitting: stateFromStores1 };
  let tmp9 = null;
  if (null != tmp7) {
    tmp9 = tmp7;
  }
  obj.wasSubmitting = tmp9;
  return obj;
};
