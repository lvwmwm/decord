// Module ID: 18465
// Function ID: 18466
// Name: useConjureNativePublishButton
// Dependencies: [6934, 11478, 18466, 18468, 5725, 504, 6971, 18469, 2]
// Exports: default

// Module 18465 (useConjureNativePublishButton)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5725 */;
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet" /* 11478 */;
import ConjureSafetyHoldSheetDefault from "ConjureSafetyHoldSheet" /* 18466 */;
import ConjurePublishDestinationSheetDefault from "ConjurePublishDestinationSheet" /* 18468 */;
import useConjurePublishButtonDefault from "useConjurePublishButton" /* 18469 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6934 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let obj = {
  showPublishBlocked: ConjurePublishBlockedSheetDefault,
  showSafetyHold: ConjureSafetyHoldSheetDefault,
  promptPublishDestination: ConjurePublishDestinationSheetDefault,
  showError(text) {
    obj = ToastActionCreatorsDefault;
    const obj2 = { text, variant: "critical" };
    return obj.open("CONJURE_PUBLISH_FAILED", obj2);
  },
  showConfirmation(intl) {
    obj = ToastActionCreatorsDefault;
    const obj2 = { text: intl, variant: "success" };
    return obj.open("CONJURE_PUBLISH_SUCCEEDED", obj2);
  }
};
const result = size.fileFinishedImporting("modules/conjure/publish/native/useConjureNativePublishButton.tsx");

export default function useConjureNativePublishButton(arg0, arg1) {
  let closure_0;
  let integrationStatusChecked;
  let previewAppId;
  _require = arg0;
  obj = require("get initialized");
  const items = [ConjureProjectStore];
  const items1 = [arg0];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let prop;
    obj = { integrationStatusChecked: null != ConjureProjectStore.getIntegrationStatus(closure_0), previewAppId: prop };
    const project = ConjureProjectStore.getProject(closure_0);
    prop = undefined;
    if (project != null) {
      prop = project.preview_application_id;
    }
    if (prop == null) {
      prop = null;
    }
    return obj;
  }, items1);
  ({ integrationStatusChecked, previewAppId } = stateFromStoresObject);
  const useApplication = require("ApplicationActionCreators").useApplication;
  require("ApplicationActionCreators");
  const isLoading = useApplication(previewAppId).isLoading;
  let tmp5 = !integrationStatusChecked;
  const tmp4 = useConjurePublishButtonDefault;
  if (integrationStatusChecked) {
    tmp5 = isLoading;
  }
  return tmp4(arg0, arg1, tmp5, obj);
};
