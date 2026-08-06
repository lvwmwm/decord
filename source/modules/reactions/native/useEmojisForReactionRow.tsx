// Module ID: 9775
// Function ID: 9776
// Name: useEmojisForReactionRow
// Dependencies: [19, 1906, 8564, 1474, 3929, 2]
// Exports: useEmojisForReactionRow

// Module 9775 (useEmojisForReactionRow)
import noop from "noop";
import { EmojiIntention } from "set";

const require = arg1;
const result = require("initializeSearch").fileFinishedImporting("modules/reactions/native/useEmojisForReactionRow.tsx");

export const useEmojisForReactionRow = function useEmojisForReactionRow(channel, closure_4, arg2) {
  const _require = channel;
  const guildId = channel.getGuildId();
  const frequentlyUsedReactionEmojis = _require(rounded[2]).useFrequentlyUsedReactionEmojis(guildId);
  rounded = Math.floor(Math.min(frequentlyUsedReactionEmojis(rounded[3])().width, closure_4) / arg2);
  const items = [frequentlyUsedReactionEmojis, channel, rounded];
  const memo = React.useMemo(() => {
    let length;
    const found = frequentlyUsedReactionEmojis.filter((emoji) => {
      let obj = outer1_1(outer1_2[4]);
      obj = { emoji, channel: closure_0, intention: outer1_4.REACTION };
      return !obj.isEmojiFilteredOrLocked(obj);
    });
    if (found.length < rounded) {
      do {
        let arr = found.push(null);
        let tmp2 = rounded;
        length = found.length;
      } while (length < rounded);
    }
    return found;
  }, items);
  return memo.slice(0, rounded - 1);
};
