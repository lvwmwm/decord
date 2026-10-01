// Module ID: 11623
// Function ID: 11624
// Name: useLaunchingActivityButtonState
// Dependencies: [19, 2044, 8499, 6589, 504, 8783, 7720, 2]
// Exports: default

// Module 11623 (useLaunchingActivityButtonState)
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import FramesStore from "FramesStore" /* 8499 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const result = size.fileFinishedImporting("modules/app_launcher/utils/useLaunchingActivityButtonState.tsx");

export default function useLaunchingActivityButtonState(applicationId) {
  let onSubmissionComplete;
  applicationId = applicationId.applicationId;
  ({ context: importDefault, onSubmissionComplete } = applicationId);
  let closure_4;
  let tmp2 = onSubmissionComplete;
  const launchingComponentId = applicationId.launchingComponentId;
  let tmp = applicationId;
  const obj = applicationId(onSubmissionComplete[3]);
  const getOrFetchApplication = obj.useGetOrFetchApplication(applicationId);
  const items = [closure_4];
  const obj2 = applicationId(onSubmissionComplete[4]);
  const stateFromStores = obj2.useStateFromStores(items, () => {
    let id;
    const getLaunchState = EmbeddedActivitiesStore.getLaunchState;
    const tmp2 = applicationId;
    if ("channel" === importDefault.type) {
      id = importDefault.channel.id;
    }
    return getLaunchState(tmp2, id);
  });
  const items1 = [FramesStore];
  const obj3 = applicationId(onSubmissionComplete[4]);
  let stateFromStores1 = obj3.useStateFromStores(items1, () => {
    const mainFrame = FramesStore.getMainFrame();
    let state;
    if (mainFrame != null) {
      state = mainFrame.state;
    }
    return "loading" === state && mainFrame.applicationId === applicationId;
  });
  if (null == getOrFetchApplication) {
    stateFromStores1 = null != stateFromStores && stateFromStores.isLaunching && stateFromStores.componentId === launchingComponentId;
  } else {
    tmp(tmp2[5]);
  }
  let tmp7 = require("usePrevious")(stateFromStores1);
  closure_4 = tmp7;
  const items2 = [stateFromStores1, tmp7, onSubmissionComplete];
  const effect = stateFromStores1.useEffect(() => {
    const tmp = !stateFromStores1 && closure_4;
    if (tmp) {
      if (onSubmissionComplete != null) {
        tmp2();
      }
    }
  }, items2);
  const obj4 = { submitting: stateFromStores1, wasSubmitting: tmp7 };
  if (tmp7 == null) {
    tmp7 = null;
  }
  return obj4;
};
