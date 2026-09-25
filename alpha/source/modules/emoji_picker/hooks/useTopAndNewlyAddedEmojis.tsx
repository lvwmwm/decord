// Module ID: 9733
// Function ID: 9734
// Name: useTopAndNewlyAddedEmojis
// Dependencies: [5766, 1375, 563, 2]
// Exports: default, getTopAndNewlyAddedEmojis

// Module 9733 (useTopAndNewlyAddedEmojis)
import EmojiStore from "EmojiStore" /* 5766 */;

const require = globalThis.__r;

const require = fn;
const EmojiIntention = fn(1375).EmojiIntention;
let closure_4 = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/emoji_picker/hooks/useTopAndNewlyAddedEmojis.tsx");

export default function useTopAndNewlyAddedEmojis(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const items = [EmojiStore];
  const items1 = [arg0, arg1];
  return require("useStateFromStores").useStateFromStoresObject(items, () => {
    if (EmojiStore !== undefined) {
      if (tmp2 !== EmojiIntention.REACTION) {
        let topEmoji = obj.getTopEmoji(tmp);
      } else {
        topEmoji = closure_4;
      }
      const obj2 = { topEmojis: topEmoji, newlyAddedEmojis: null };
      if (tmp2 !== EmojiIntention.REACTION) {
        let newlyAddedEmoji = obj.getNewlyAddedEmoji(tmp);
      } else {
        newlyAddedEmoji = closure_4;
      }
      obj2.newlyAddedEmojis = newlyAddedEmoji;
      return obj2;
    }
  }, items1);
};
export const getTopAndNewlyAddedEmojis = function getTopAndNewlyAddedEmojis(emojiStoreInstance) {
  emojiStoreInstance = emojiStoreInstance.emojiStoreInstance;
  if (emojiStoreInstance === undefined) {
    emojiStoreInstance = EmojiStore;
  }
  ({ guildId, pickerIntention } = emojiStoreInstance);
  if (pickerIntention !== EmojiIntention.REACTION) {
    let topEmoji = emojiStoreInstance.getTopEmoji(guildId);
  } else {
    topEmoji = closure_4;
  }
  const obj = { topEmojis: topEmoji, newlyAddedEmojis: null };
  if (pickerIntention !== EmojiIntention.REACTION) {
    let newlyAddedEmoji = emojiStoreInstance.getNewlyAddedEmoji(guildId);
  } else {
    newlyAddedEmoji = closure_4;
  }
  obj.newlyAddedEmojis = newlyAddedEmoji;
  return obj;
};
