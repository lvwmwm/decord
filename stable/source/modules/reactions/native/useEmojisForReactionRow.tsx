// Module ID: 12013
// Function ID: 12014
// Name: useEmojisForReactionRow
// Dependencies: [19, 1375, 10582, 1478, 4445, 2]
// Exports: useEmojisForReactionRow

// Module 12013 (useEmojisForReactionRow)
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const EmojiIntention = fn(1375).EmojiIntention;
const size = fn(2);
const result = size.fileFinishedImporting("modules/reactions/native/useEmojisForReactionRow.tsx");

export const useEmojisForReactionRow = function useEmojisForReactionRow(channel, arg1, arg2) {
  _require = channel;
  const guildId = channel.getGuildId();
  const frequentlyUsedReactionEmojis = require("EmojiPickerUtils").useFrequentlyUsedReactionEmojis(guildId);
  rounded = Math.floor(Math.min(frequentlyUsedReactionEmojis(rounded[3])().width, arg1) / arg2);
  const items = [frequentlyUsedReactionEmojis, channel, rounded];
  const memo = noop.useMemo(() => {
    let length;
    const found = frequentlyUsedReactionEmojis.filter((emoji) => !frequentlyUsedReactionEmojis(rounded[4]).isEmojiFilteredOrLocked({ emoji, channel, intention: constants.REACTION }));
    if (found.length < rounded) {
      do {
        let arr = found.push(null);
        length = found.length;
      } while (length < rounded);
    }
    return found;
  }, items);
  return memo.slice(0, rounded - 1);
};
