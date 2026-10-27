// Module ID: 12149
// Function ID: 12150
// Name: useConjureNativePublishButton
// Dependencies: [6774, 10806, 12150, 5664, 558, 576, 504, 6811, 12151, 2]

// Module 12149 (useConjureNativePublishButton)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5664 */;
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet" /* 10806 */;
import ConjurePublishDestinationSheetDefault from "ConjurePublishDestinationSheet" /* 12150 */;
import useConjurePublishButtonDefault from "useConjurePublishButton" /* 12151 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6774 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

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
  let first;
  let integrationStatusChecked;
  let previewAppId;
  let tmp6;
  let tmp7;
  _require = arg0;
  obj = require("react");
  const cResult = obj.c(4);
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
  const tmpResult = require("get initialized");
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp6, tmp7);
  ({ integrationStatusChecked, previewAppId } = stateFromStoresObject);
  const useApplication = require("ApplicationActionCreators").useApplication;
  require("ApplicationActionCreators");
  const isLoading = useApplication(previewAppId).isLoading;
  let tmp11 = !integrationStatusChecked;
  const tmp10 = useConjurePublishButtonDefault;
  if (integrationStatusChecked) {
    tmp11 = isLoading;
  }
  return tmp10(arg0, arg1, tmp11, obj);
}) : (function useConjureNativePublishButton(arg0, arg1) {
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
});
const result = size.fileFinishedImporting("modules/conjure/publish/native/useConjureNativePublishButton.tsx");

export default tmp2;
