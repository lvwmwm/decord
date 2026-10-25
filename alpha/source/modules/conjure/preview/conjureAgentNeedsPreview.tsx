// Module ID: 11873
// Function ID: 11874
// Name: conjureAgentNeedsPreview
// Dependencies: [10699, 10762, 558, 576, 504, 2]
// Exports: conjureAgentNeedsPreview

// Module 11873 (conjureAgentNeedsPreview)
import conjurePreviewControlLease from "conjurePreviewControlLease" /* 10762 */;
import ConjureChatStore from "ConjureChatStore" /* 10699 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureAgentNeedsPreview(arg0) {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureChatStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      return ConjureChatStore.isThinking(closure_0);
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
  let stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  const tmpResult2 = require("conjurePreviewControlLease");
  if (!stateFromStores) {
    stateFromStores = tmpResult2.useConjureControlActive(arg0);
  }
  return stateFromStores;
}) : (function useConjureAgentNeedsPreview(arg0) {
  let closure_0;
  _require = arg0;
  const items = [ConjureChatStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  let stateFromStores = obj.useStateFromStores(items, () => ConjureChatStore.isThinking(closure_0), items1);
  const obj2 = require("conjurePreviewControlLease");
  if (!stateFromStores) {
    stateFromStores = obj2.useConjureControlActive(arg0);
  }
  return stateFromStores;
});
const result = size.fileFinishedImporting("modules/conjure/preview/conjureAgentNeedsPreview.tsx");

export const conjureAgentNeedsPreview = function conjureAgentNeedsPreview(projectId) {
  let isThinkingResult = ConjureChatStore.isThinking(projectId);
  if (!isThinkingResult) {
    const obj = conjurePreviewControlLease;
    isThinkingResult = obj.isConjureControlActive(projectId);
  }
  return isThinkingResult;
};
export const useConjureAgentNeedsPreview = tmp2;
