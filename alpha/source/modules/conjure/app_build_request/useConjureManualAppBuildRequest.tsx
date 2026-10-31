// Module ID: 12593
// Function ID: 12594
// Name: useConjureManualAppBuildRequest
// Dependencies: [32, 19, 1113, 3868, 12594, 2]
// Exports: default

// Module 12593 (useConjureManualAppBuildRequest)
import intl2 from "intl" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import ConjureAppBuildRequest from "ConjureAppBuildRequest" /* 12594 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/app_build_request/useConjureManualAppBuildRequest.tsx");

export default function useConjureManualAppBuildRequest(projectId) {
  let callback;
  let tmp2;
  let obj = react;
  [tmp2, importDefault] = callback(react.useState(null), 2);
  const tmp = callback(react.useState(null), 2);
  const ref = react.useRef(null);
  callback = react.useCallback((current) => {
    ref.current = current;
    importDefault(current);
  }, []);
  projectId = undefined;
  if (tmp2 != null) {
    projectId = tmp2.projectId;
  }
  let tmp5 = null;
  if (projectId === projectId) {
    tmp5 = tmp2;
  }
  const items = [projectId, callback];
  const items1 = [callback];
  const open = obj.useCallback((str, clearComposer) => {
    let intl;
    let obj2;
    let trimmed;
    const obj = { projectId, request: obj2, clearComposer };
    obj2 = { id: "manual:" + projectId + ":" + Date.now(), summary: intl.string(_modDef3868["o2++BO"]), prompt: trimmed.slice(0, ConjureAppBuildRequest.CONJURE_APP_BUILD_PROMPT_MAX_LENGTH) };
    intl = intl2.intl;
    trimmed = str.trim();
    return callback(obj);
  }, items);
  const items2 = [callback];
  const close = obj.useCallback(() => callback(null), items1);
  let request;
  const sent = obj.useCallback((arg0) => {
    const current = ref.current;
    let id;
    if (current != null) {
      id = current.request.id;
    }
    if (id === arg0) {
      current.clearComposer();
      callback(null);
    }
  }, items2);
  if (tmp5 != null) {
    request = tmp5.request;
  }
  if (request == null) {
    request = null;
  }
  return { request, open, close, sent };
};
