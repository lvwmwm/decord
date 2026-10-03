// Module ID: 16697
// Function ID: 16698
// Name: vibegrationsAgentReaction
// Dependencies: [4523, 1126, 3723, 2]
// Exports: getVibegrationsAgentReactionLabel

// Module 16697 (vibegrationsAgentReaction)
import intl2 from "intl" /* 1126 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4523 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsAgentReaction.tsx");

export const getVibegrationsAgentReactionLabel = function getVibegrationsAgentReactionLabel(agentReaction) {
  if (null != agentReaction) {
    if ("" !== agentReaction) {
      const obj = UnicodeEmojisDefault;
      const result = obj.convertSurrogateToName(agentReaction, false);
      let formatToPlainStringResult = null;
      const tmp = importDefault;
      if ("" !== result) {
        const intl = intl2.intl;
        const obj2 = { emojiName: result };
        formatToPlainStringResult = intl.formatToPlainString(tmp(3723).DrSoFn, obj2);
      }
      return formatToPlainStringResult;
    }
  }
  return null;
};
