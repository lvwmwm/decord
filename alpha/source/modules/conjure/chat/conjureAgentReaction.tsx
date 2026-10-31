// Module ID: 10855
// Function ID: 10856
// Name: conjureAgentReaction
// Dependencies: [4960, 1113, 3868, 2]
// Exports: agentReactionFromStep, getConjureAgentReactionLabel, sameAgentReaction

// Module 10855 (conjureAgentReaction)
import intl2 from "intl" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4960 */;
import size from "module_2" /* 2 */;

const re3 = /^\d{17,20}$/;
const re4 = /^\w{2,32}$/;
const result = size.fileFinishedImporting("modules/conjure/chat/conjureAgentReaction.tsx");

export function agentReactionFromStep(animated) {
  let emoji;
  let emoji_id;
  ({ emoji, emoji_id } = animated);
  let tmp = null;
  if (null != emoji) {
    tmp = null;
    if ("" !== emoji) {
      let tmp4;
      if (null != emoji_id) {
        let tmp6 = null;
        if (re3.test(emoji_id)) {
          tmp6 = null;
          if (re4.test(emoji)) {
            tmp6 = { emoji, emojiId: emoji_id, animated: true === animated.animated };
            const obj2 = { emoji, emojiId: emoji_id, animated: true === animated.animated };
          }
        }
        tmp4 = tmp6;
      } else {
        tmp4 = null;
        const obj = UnicodeEmojisDefault;
        if ("" !== obj.convertSurrogateToName(emoji, false)) {
          tmp4 = { emoji };
          const obj3 = { emoji };
        }
      }
      tmp = tmp4;
    }
  }
  return tmp;
}
export function sameAgentReaction(agentReaction, reaction) {
  return null != agentReaction && agentReaction.emoji === reaction.emoji && agentReaction.emojiId === reaction.emojiId && agentReaction.animated === reaction.animated;
}
export function getConjureAgentReactionLabel(reaction) {
  let emojiName;
  if (null != reaction.emojiId) {
    const _HermesInternal = HermesInternal;
    emojiName = ":" + reaction.emoji + ":";
  } else {
    const obj = UnicodeEmojisDefault;
    emojiName = obj.convertSurrogateToName(reaction.emoji, false);
  }
  const intl = intl2.intl;
  return intl.formatToPlainString(_modDef3868.lxXLho, { emojiName });
}
