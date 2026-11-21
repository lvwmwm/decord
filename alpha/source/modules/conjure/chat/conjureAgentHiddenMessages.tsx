// Module ID: 6930
// Function ID: 6931
// Name: conjureAgentHiddenMessages
// Dependencies: [2]
// Exports: isConjureAgentHiddenMessage

// Module 6930 (conjureAgentHiddenMessages)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/chat/conjureAgentHiddenMessages.tsx");

export function isConjureAgentHiddenMessage(content) {
  const trimStartResult = content.trimStart();
  return trimStartResult.startsWith("!!");
}
