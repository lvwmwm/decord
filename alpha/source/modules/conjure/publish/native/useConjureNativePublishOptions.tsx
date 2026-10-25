// Module ID: 12253
// Function ID: 12254
// Name: useConjureNativePublishOptions
// Dependencies: [19, 6773, 10803, 12254, 5663, 558, 576, 504, 6809, 2]

// Module 12253 (useConjureNativePublishOptions)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5663 */;
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet" /* 10803 */;
import ConjurePublishDestinationSheetDefault from "ConjurePublishDestinationSheet" /* 12254 */;
import react from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6773 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let platform = {
  showPublishBlocked: ConjurePublishBlockedSheetDefault,
  promptPublishDestination: ConjurePublishDestinationSheetDefault,
  showError(text) {
    const obj = ToastActionCreatorsDefault;
    const obj2 = { text, variant: "critical" };
    return obj.open("CONJURE_PUBLISH_FAILED", obj2);
  },
  showConfirmation(intl) {
    const obj = ToastActionCreatorsDefault;
    const obj2 = { text: intl, variant: "success" };
    return obj.open("CONJURE_PUBLISH_SUCCEEDED", obj2);
  }
};
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureNativePublishOptions(arg0, guildId) {
  let closure_0;
  let first;
  let integrationStatusChecked;
  let previewAppId;
  let tmp6;
  let tmp7;
  _require = arg0;
  platform = require("react");
  const cResult = platform.c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function p() {
      let prop;
      const obj = { integrationStatusChecked: null != ConjureProjectStore.getIntegrationStatus(closure_0), previewAppId: prop };
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
  let isLoading = !integrationStatusChecked;
  if (integrationStatusChecked) {
    isLoading = useApplication(previewAppId).isLoading;
  }
  if (cResult[4] === guildId) {
    let tmp10;
    if (cResult[5] === isLoading) {
      tmp10 = cResult[6];
    }
    return tmp10;
  }
  const obj2 = { guildId, platform, busy: isLoading };
  cResult[4] = guildId;
  cResult[5] = isLoading;
  cResult[6] = obj2;
  tmp10 = obj2;
}) : (function useConjureNativePublishOptions(arg0, guildId) {
  let closure_0;
  let integrationStatusChecked;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ConjureProjectStore];
  const items1 = [arg0];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let prop;
    const obj = { integrationStatusChecked: null != ConjureProjectStore.getIntegrationStatus(closure_0), previewAppId: prop };
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
  integrationStatusChecked = stateFromStoresObject.integrationStatusChecked;
  const previewAppId = stateFromStoresObject.previewAppId;
  const useApplication = require("ApplicationActionCreators").useApplication;
  require("ApplicationActionCreators");
  const isLoading = useApplication(previewAppId).isLoading;
  const items2 = [guildId, integrationStatusChecked, isLoading];
  return isLoading.useMemo(() => {
    let tmp;
    platform = { guildId, platform, busy: tmp };
    tmp = !integrationStatusChecked;
    if (integrationStatusChecked) {
      tmp = isLoading;
    }
    return platform;
  }, items2);
});
const result = size.fileFinishedImporting("modules/conjure/publish/native/useConjureNativePublishOptions.tsx");

export default tmp2;
