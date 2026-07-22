// Module ID: 9938
// Function ID: 76889
// Name: useEmojisForReactionRow
// Dependencies: [0, 0, 0, 0, 4294967295, 0]
// Exports: useEmojisForReactionRow

// Module 9938 (useEmojisForReactionRow)
import __exportStarResult1 from "__exportStarResult1";
import { EmojiIntention } from "__exportStarResult1";

const result = require("__exportStarResult1").fileFinishedImporting("modules/reactions/native/useEmojisForReactionRow.tsx");

export const useEmojisForReactionRow = function useEmojisForReactionRow(channel, bound, arg2) {
  bound = channel;
  const guildId = channel.getGuildId();
  const frequentlyUsedReactionEmojis = bound(dependencyMap[2]).useFrequentlyUsedReactionEmojis(guildId);
  const importDefault = frequentlyUsedReactionEmojis;
  const rounded = Math.floor(Math.min(importDefault(dependencyMap[3])().width, bound) / arg2);
  const dependencyMap = rounded;
  const items = [frequentlyUsedReactionEmojis, channel, rounded];
  const memo = React.useMemo(() => {
    let length;
    const found = frequentlyUsedReactionEmojis.filter((emoji) => {
      let obj = callback(closure_2[4]);
      obj = { emoji, channel: closure_0, intention: constants.REACTION };
      return !obj.isEmojiFilteredOrLocked(obj);
    });
    if (found.length < rounded) {
      do {
        let arr = found.push(null);
        let tmp2 = closure_2;
        length = found.length;
      } while (length < closure_2);
    }
    return found;
  }, items);
  return memo.slice(0, rounded - 1);
};
