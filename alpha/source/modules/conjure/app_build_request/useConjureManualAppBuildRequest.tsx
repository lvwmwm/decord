// Module ID: 12314
// Function ID: 12315
// Name: useConjureManualAppBuildRequest
// Dependencies: [32, 19, 558, 576, 1128, 3830, 12315, 2]

// Module 12314 (useConjureManualAppBuildRequest)
import intl2 from "intl" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import ConjureAppBuildRequest from "ConjureAppBuildRequest" /* 12315 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureManualAppBuildRequest(projectId) {
  let first;
  let ref;
  let tmp3;
  let tmp7;
  let tmp8;
  let tmp9;
  _require = projectId;
  let obj = require("react");
  const cResult = obj.c(8);
  [tmp3, importDefault] = first(react.useState(null), 2);
  first(react.useState(null), 2);
  dependencyMap = react.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(current) {
      ref.current = current;
      importDefault(current);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  projectId = undefined;
  if (tmp3 != null) {
    projectId = tmp3.projectId;
  }
  let tmp6 = null;
  if (projectId === projectId) {
    tmp6 = tmp3;
  }
  if (cResult[1] !== projectId) {
    const fn2 = function q(str, clearComposer) {
      let intl;
      let obj2;
      let trimmed;
      const obj = { projectId, request: obj2, clearComposer };
      obj2 = { id: "manual:" + projectId + ":" + Date.now(), summary: intl.string(_modDef3830["o2++BO"]), prompt: trimmed.slice(0, ConjureAppBuildRequest.CONJURE_APP_BUILD_PROMPT_MAX_LENGTH) };
      intl = intl2.intl;
      trimmed = str.trim();
      return first(obj);
    };
    cResult[1] = projectId;
    cResult[2] = fn2;
    tmp7 = fn2;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function v() {
      return first(null);
    };
    cResult[3] = fn3;
    tmp8 = fn3;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const fn4 = function j(arg0) {
      const current = ref.current;
      let id;
      if (current != null) {
        id = current.request.id;
      }
      if (id === arg0) {
        current.clearComposer();
        first(null);
      }
    };
    cResult[4] = fn4;
    tmp9 = fn4;
  } else {
    tmp9 = cResult[4];
  }
  let request;
  if (tmp6 != null) {
    request = tmp6.request;
  }
  if (request == null) {
    request = null;
  }
  if (cResult[5] === tmp7) {
    let tmp11;
    if (cResult[6] === request) {
      tmp11 = cResult[7];
    }
    return tmp11;
  }
  let obj2 = { request, open: tmp7, close: tmp8, sent: tmp9 };
  cResult[5] = tmp7;
  cResult[6] = request;
  cResult[7] = obj2;
  tmp11 = obj2;
}) : (function useConjureManualAppBuildRequest(projectId) {
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
    obj2 = { id: "manual:" + projectId + ":" + Date.now(), summary: intl.string(_modDef3830["o2++BO"]), prompt: trimmed.slice(0, ConjureAppBuildRequest.CONJURE_APP_BUILD_PROMPT_MAX_LENGTH) };
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
});
const result = size.fileFinishedImporting("modules/conjure/app_build_request/useConjureManualAppBuildRequest.tsx");

export default tmp2;
