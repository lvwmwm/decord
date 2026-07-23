// Module ID: 11264
// Function ID: 87620
// Name: useLaunchingActivityButtonState
// Dependencies: [31, 1347, 10479, 5470, 566, 10482, 8284, 2]
// Exports: default

// Module 11264 (useLaunchingActivityButtonState)
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/app_launcher/utils/useLaunchingActivityButtonState.tsx");

export default function useLaunchingActivityButtonState(applicationId) {
  let importDefault;
  let onSubmissionComplete;
  applicationId = applicationId.applicationId;
  ({ context: importDefault, onSubmissionComplete } = applicationId);
  let stateFromStores1;
  let c4;
  let obj = applicationId(onSubmissionComplete[3]);
  const getOrFetchApplication = obj.useGetOrFetchApplication(applicationId);
  const items = [c4];
  const stateFromStores = applicationId(onSubmissionComplete[4]).useStateFromStores(items, () => {
    let id;
    if ("channel" === closure_1.type) {
      id = closure_1.channel.id;
    }
    return _undefined.getLaunchState(applicationId, id);
  });
  const obj2 = applicationId(onSubmissionComplete[4]);
  const items1 = [_isNativeReflectConstruct];
  stateFromStores1 = applicationId(onSubmissionComplete[4]).useStateFromStores(items1, () => outer1_5.isLaunchingFrame(applicationId));
  if (null == getOrFetchApplication) {
    stateFromStores1 = null != stateFromStores && stateFromStores.isLaunching && stateFromStores.componentId === applicationId.launchingComponentId;
    const tmp6 = null != stateFromStores && stateFromStores.isLaunching && stateFromStores.componentId === applicationId.launchingComponentId;
  } else {
    const obj4 = applicationId(onSubmissionComplete[5]);
  }
  const tmp7 = importDefault(onSubmissionComplete[6])(stateFromStores1);
  c4 = tmp7;
  const items2 = [stateFromStores1, tmp7, onSubmissionComplete];
  const effect = stateFromStores1.useEffect(() => {
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
