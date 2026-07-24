// Module ID: 9978
// Function ID: 77123
// Name: useEmojisForReactionRow
// Dependencies: [31, 1852, 9366, 1450, 3775, 2]
// Exports: useEmojisForReactionRow

// Module 9978 (useEmojisForReactionRow)
import result from "result";
import { EmojiIntention } from "set";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/reactions/native/useEmojisForReactionRow.tsx");

export const useEmojisForReactionRow = function useEmojisForReactionRow(channel, closure_4, arg2) {
  const _require = channel;
  const guildId = channel.getGuildId();
  const frequentlyUsedReactionEmojis = _require(rounded[2]).useFrequentlyUsedReactionEmojis(guildId);
  rounded = Math.floor(Math.min(frequentlyUsedReactionEmojis(rounded[3])().width, closure_4) / arg2);
  const items = [frequentlyUsedReactionEmojis, channel, rounded];
  const memo = React.useMemo(() => {
    let length;
    const found = frequentlyUsedReactionEmojis.filter((emoji) => {
      let obj = frequentlyUsedReactionEmojis(rounded[4]);
      obj = { emoji, channel: outer1_0, intention: outer2_4.REACTION };
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
