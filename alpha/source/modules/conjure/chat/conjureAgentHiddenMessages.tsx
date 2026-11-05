// Module ID: 11040
// Function ID: 11041
// Name: conjureAgentHiddenMessages
// Dependencies: [2]
// Exports: isConjureAgentHiddenMessage

// Module 11040 (conjureAgentHiddenMessages)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/chat/conjureAgentHiddenMessages.tsx");

export function isConjureAgentHiddenMessage(content) {
  const trimStartResult = content.trimStart();
  return trimStartResult.startsWith("!!");
}
