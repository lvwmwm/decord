// Module ID: 10856
// Function ID: 10857
// Name: conjureAgentHiddenMessages
// Dependencies: [2]
// Exports: isConjureAgentHiddenMessage

// Module 10856 (conjureAgentHiddenMessages)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/chat/conjureAgentHiddenMessages.tsx");

export function isConjureAgentHiddenMessage(content) {
  const trimStartResult = content.trimStart();
  return trimStartResult.startsWith("!!");
}
