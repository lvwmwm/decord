// Module ID: 17002
// Function ID: 17003
// Name: conjureAgentReaction
// Dependencies: [4721, 1126, 3827, 2]
// Exports: getConjureAgentReactionLabel

// Module 17002 (conjureAgentReaction)
import intl2 from "intl" /* 1126 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4721 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/chat/conjureAgentReaction.tsx");

export const getConjureAgentReactionLabel = function getConjureAgentReactionLabel(agentReaction) {
  if (null != agentReaction) {
    if ("" !== agentReaction) {
      const obj = UnicodeEmojisDefault;
      const result = obj.convertSurrogateToName(agentReaction, false);
      let formatToPlainStringResult = null;
      const tmp = importDefault;
      if ("" !== result) {
        const intl = intl2.intl;
        const obj2 = { emojiName: result };
        formatToPlainStringResult = intl.formatToPlainString(tmp(3827).lxXLho, obj2);
      }
      return formatToPlainStringResult;
    }
  }
  return null;
};
