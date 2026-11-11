// Module ID: 13056
// Function ID: 13057
// Name: useConjureNativePublishButton
// Dependencies: [19, 6954, 13057, 13059, 13071, 5952, 504, 6992, 13072, 5252, 2]
// Exports: default

// Module 13056 (useConjureNativePublishButton)
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5252 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5952 */;
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet" /* 13057 */;
import ConjureSafetyHoldSheetDefault from "ConjureSafetyHoldSheet" /* 13059 */;
import ConjurePublishDestinationSheetDefault from "ConjurePublishDestinationSheet" /* 13071 */;
import useConjurePublishButtonDefault from "useConjurePublishButton" /* 13072 */;
import react from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6954 */;
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
