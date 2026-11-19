// Module ID: 18291
// Function ID: 18292
// Name: conjureAgentNeedsPreview
// Dependencies: [6806, 14642, 504, 2]
// Exports: conjureAgentNeedsPreview, useConjureAgentNeedsPreview

// Module 18291 (conjureAgentNeedsPreview)
import conjurePreviewControlLease from "conjurePreviewControlLease" /* 14642 */;
import ConjureChatStore from "ConjureChatStore" /* 6806 */;
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
