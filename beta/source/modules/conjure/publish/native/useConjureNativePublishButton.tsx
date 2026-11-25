// Module ID: 18257
// Function ID: 18258
// Name: useConjureNativePublishButton
// Dependencies: [6621, 12310, 18258, 18260, 5595, 504, 6659, 18261, 2]
// Exports: default

// Module 18257 (useConjureNativePublishButton)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5595 */;
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet" /* 12310 */;
import ConjureSafetyHoldSheetDefault from "ConjureSafetyHoldSheet" /* 18258 */;
import ConjurePublishDestinationSheetDefault from "ConjurePublishDestinationSheet" /* 18260 */;
import useConjurePublishButtonDefault from "useConjurePublishButton" /* 18261 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6621 */;
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
