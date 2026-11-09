// Module ID: 12277
// Function ID: 12278
// Name: useConjureAppIdentity
// Dependencies: [6899, 504, 6936, 2]
// Exports: default

// Module 12277 (useConjureAppIdentity)
import ConjureProjectStore from "ConjureProjectStore" /* 6899 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/conjure/identity/useConjureAppIdentity.tsx");

export default function useConjureAppIdentity(arg0) {
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
};
export const MAX_CONJURE_APP_ICON_BYTES = 2097152;
export const CONJURE_APP_ICON_EXTENSIONS = ["png", "jpg", "jpeg", "gif", "webp"];
