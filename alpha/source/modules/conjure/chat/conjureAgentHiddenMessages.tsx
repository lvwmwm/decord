// Module ID: 7262
// Function ID: 7263
// Name: conjureAgentHiddenMessages
// Dependencies: [2]
// Exports: isConjureAgentHiddenMessage

// Module 7262 (conjureAgentHiddenMessages)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/chat/conjureAgentHiddenMessages.tsx");

export function isConjureAgentHiddenMessage(content) {
  const trimStartResult = content.trimStart();
  return trimStartResult.startsWith("!!");
}
