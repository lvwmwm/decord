// Module ID: 12294
// Function ID: 12295
// Name: conjureAgentNeedsPreview
// Dependencies: [11035, 11111, 504, 2]
// Exports: conjureAgentNeedsPreview, useConjureAgentNeedsPreview

// Module 12294 (conjureAgentNeedsPreview)
import conjurePreviewControlLease from "conjurePreviewControlLease" /* 11111 */;
import ConjureChatStore from "ConjureChatStore" /* 11035 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/conjure/preview/conjureAgentNeedsPreview.tsx");

export function conjureAgentNeedsPreview(id) {
  let isThinkingResult = ConjureChatStore.isThinking(id);
  if (!isThinkingResult) {
    const obj = conjurePreviewControlLease;
    isThinkingResult = obj.isConjureControlActive(id);
  }
  return isThinkingResult;
}
export function useConjureAgentNeedsPreview(projectId) {
  _require = projectId;
  const items = [ConjureChatStore];
  const items1 = [projectId];
  const obj = require("get initialized");
  let stateFromStores = obj.useStateFromStores(items, () => ConjureChatStore.isThinking(projectId), items1);
  const obj2 = require("conjurePreviewControlLease");
  if (!stateFromStores) {
    stateFromStores = obj2.useConjureControlActive(projectId);
  }
  return stateFromStores;
}
