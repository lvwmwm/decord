// Module ID: 14527
// Function ID: 14528
// Name: useEmojisForReactionRow
// Dependencies: [19, 1386, 9943, 1491, 4964, 2]
// Exports: useEmojisForReactionRow

// Module 14527 (useEmojisForReactionRow)
import EmojiConstants from "EmojiConstants" /* 1386 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const EmojiIntention = EmojiConstants.EmojiIntention;
const result = size.fileFinishedImporting("modules/reactions/native/useEmojisForReactionRow.tsx");

export function useEmojisForReactionRow(channel, arg1, arg2) {
  let rounded;
  _require = channel;
  const guildId = channel.getGuildId();
  let obj = require("EmojiPickerUtils");
  const frequentlyUsedReactionEmojis = obj.useFrequentlyUsedReactionEmojis(guildId);
  rounded = Math.floor(Math.min(frequentlyUsedReactionEmojis(rounded[3])().width, arg1) / arg2);
  const items = [frequentlyUsedReactionEmojis, channel, rounded];
  const memo = react.useMemo(() => {
    let length;
    const found = frequentlyUsedReactionEmojis.filter((emoji) => {
      const obj = frequentlyUsedReactionEmojis(rounded[4]);
      const obj2 = { emoji, channel, intention: constants.REACTION };
      return !obj.isEmojiFilteredOrLocked(obj2);
    });
    if (found.length < rounded) {
      do {
        let arr = found.push(null);
        length = found.length;
      } while (length < rounded);
    }
    return found;
  }, items);
  return memo.slice(0, rounded - 1);
}
