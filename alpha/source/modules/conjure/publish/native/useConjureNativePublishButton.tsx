// Module ID: 14388
// Function ID: 14389
// Name: useConjureNativePublishButton
// Dependencies: [19, 7025, 14389, 14391, 14401, 6009, 504, 7063, 14402, 5319, 2]
// Exports: default

// Module 14388 (useConjureNativePublishButton)
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5319 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 6009 */;
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet" /* 14389 */;
import ConjureSafetyHoldSheetDefault from "ConjureSafetyHoldSheet" /* 14391 */;
import ConjurePublishDestinationSheetDefault from "ConjurePublishDestinationSheet" /* 14401 */;
import useConjurePublishButtonDefault from "useConjurePublishButton" /* 14402 */;
import react from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 7025 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let obj = {
  showPublishBlocked: ConjurePublishBlockedSheetDefault,
  showSafetyHold: ConjureSafetyHoldSheetDefault,
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
