// Module ID: 12241
// Function ID: 12242
// Name: useConjureNativePublishButton
// Dependencies: [19, 6831, 10915, 12242, 5701, 558, 576, 504, 6868, 12243, 5014, 2]

// Module 12241 (useConjureNativePublishButton)
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5014 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5701 */;
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet" /* 10915 */;
import ConjurePublishDestinationSheetDefault from "ConjurePublishDestinationSheet" /* 12242 */;
import useConjurePublishButtonDefault from "useConjurePublishButton" /* 12243 */;
import react from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6831 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureNativePublishButton(arg0, arg1) {
  let closure_0;
  let confirmation;
  let first;
  let integrationStatusChecked;
  let previewAppId;
  let tmp13;
  let tmp14;
  let tmp6;
  let tmp7;
  _require = arg0;
  const tmp = _require;
  obj = require("react");
  const cResult = obj.c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
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
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp6, tmp7);
  ({ integrationStatusChecked, previewAppId } = stateFromStoresObject);
  const useApplication = tmp(6868).useApplication;
  tmp(6868);
  const isLoading = useApplication(previewAppId).isLoading;
  let tmp11 = !integrationStatusChecked;
  const tmp10 = useConjurePublishButtonDefault;
  if (integrationStatusChecked) {
    tmp11 = isLoading;
  }
  const tmp10Result = tmp10(arg0, arg1, tmp11, obj);
  importDefault = tmp10Result;
  if (cResult[4] !== tmp10Result.confirmation) {
    const fn2 = function v() {
      if (null != confirmation.confirmation) {
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(tmp.confirmation, "polite");
      }
    };
    const items2 = [tmp10Result.confirmation];
    cResult[4] = tmp10Result.confirmation;
    cResult[5] = fn2;
    cResult[6] = items2;
    tmp14 = items2;
    tmp13 = fn2;
  } else {
    tmp13 = cResult[5];
    tmp14 = cResult[6];
  }
  const effect = react.useEffect(tmp13, tmp14);
  return tmp10Result;
}) : (function useConjureNativePublishButton(arg0, arg1) {
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
});
const result = size.fileFinishedImporting("modules/conjure/publish/native/useConjureNativePublishButton.tsx");

export default tmp2;
