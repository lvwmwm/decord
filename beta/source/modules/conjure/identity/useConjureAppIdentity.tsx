// Module ID: 11810
// Function ID: 11811
// Name: useConjureAppIdentity
// Dependencies: [6773, 558, 576, 504, 6809, 2]

// Module 11810 (useConjureAppIdentity)
import ConjureProjectStore from "ConjureProjectStore" /* 6773 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureAppIdentity(arg0) {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  let tmp9;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function p() {
      const project = ConjureProjectStore.getProject(closure_0);
      let prop;
      if (project != null) {
        prop = project.preview_application_id;
      }
      return prop;
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
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  const tmpResult2 = require("ApplicationActionCreators");
  const data = tmpResult2.useApplication(stateFromStores).data;
  if (cResult[4] !== data) {
    let iconURL;
    if (data != null) {
      iconURL = data.getIconURL(160);
    }
    if (iconURL == null) {
      iconURL = null;
    }
    cResult[4] = data;
    cResult[5] = iconURL;
    tmp9 = iconURL;
  } else {
    tmp9 = cResult[5];
  }
  let str;
  if (data != null) {
    str = data.description;
  }
  if (str == null) {
    str = "";
  }
  if (cResult[6] === tmp9) {
    let tmp12;
    if (cResult[7] === str) {
      tmp12 = cResult[8];
    }
    return tmp12;
  }
  const obj2 = { iconURL: tmp9, description: str };
  cResult[6] = tmp9;
  cResult[7] = str;
  cResult[8] = obj2;
  tmp12 = obj2;
}) : (function useConjureAppIdentity(arg0) {
  let closure_0;
  let str;
  _require = arg0;
  const items = [ConjureProjectStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    const project = ConjureProjectStore.getProject(closure_0);
    let prop;
    if (project != null) {
      prop = project.preview_application_id;
    }
    return prop;
  }, items1);
  const obj2 = require("ApplicationActionCreators");
  const data = obj2.useApplication(stateFromStores).data;
  let iconURL;
  if (data != null) {
    iconURL = data.getIconURL(160);
  }
  if (iconURL == null) {
    iconURL = null;
  }
  const obj3 = { iconURL, description: str };
  str = undefined;
  if (data != null) {
    str = data.description;
  }
  if (str == null) {
    str = "";
  }
  return obj3;
});
const result = size.fileFinishedImporting("modules/conjure/identity/useConjureAppIdentity.tsx");

export default tmp2;
export const MAX_CONJURE_APP_ICON_BYTES = 2097152;
export const CONJURE_APP_ICON_EXTENSIONS = ["png", "jpg", "jpeg", "gif", "webp"];
