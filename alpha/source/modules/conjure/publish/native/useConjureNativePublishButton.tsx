// Module ID: 12397
// Function ID: 12398
// Name: useConjureNativePublishButton
// Dependencies: [19, 6838, 10938, 12398, 5707, 504, 6875, 12399, 5018, 2]
// Exports: default

// Module 12397 (useConjureNativePublishButton)
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5018 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5707 */;
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet" /* 10938 */;
import ConjurePublishDestinationSheetDefault from "ConjurePublishDestinationSheet" /* 12398 */;
import useConjurePublishButtonDefault from "useConjurePublishButton" /* 12399 */;
import react from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let obj = {
  showPublishBlocked: ConjurePublishBlockedSheetDefault,
  promptPublishDestination: ConjurePublishDestinationSheetDefault,
  showError(text) {
    obj = ToastActionCreatorsDefault;
    const obj2 = { text, variant: "critical" };
    return obj.open("CONJURE_PUBLISH_FAILED", obj2);
  }
};
const result = size.fileFinishedImporting("modules/conjure/publish/native/useConjureNativePublishButton.tsx");

export default function useConjureNativePublishButton(arg0, arg1) {
  let closure_0;
  let confirmation;
  let integrationStatusChecked;
  let previewAppId;
  _require = arg0;
  const tmp = dependencyMap;
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
  const tmp3 = require("ApplicationActionCreators");
  const isLoading = useApplication(previewAppId).isLoading;
  let tmp5 = !integrationStatusChecked;
  const tmp4 = useConjurePublishButtonDefault;
  if (integrationStatusChecked) {
    tmp5 = isLoading;
  }
  const tmp4Result = tmp4(arg0, arg1, tmp5, obj);
  importDefault = tmp4Result;
  const items2 = [tmp4Result.confirmation];
  const effect = react.useEffect(() => {
    if (null != confirmation.confirmation) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(tmp.confirmation, "polite");
    }
  }, items2);
  return tmp4Result;
};
