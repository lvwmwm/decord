// Module ID: 9947
// Function ID: 9948
// Name: useTopAndNewlyAddedEmojis
// Dependencies: [6796, 1386, 563, 2]
// Exports: default, getTopAndNewlyAddedEmojis

// Module 9947 (useTopAndNewlyAddedEmojis)
import EmojiConstants from "EmojiConstants" /* 1386 */;
import EmojiStore from "EmojiStore" /* 6796 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const EmojiIntention = EmojiConstants.EmojiIntention;
let closure_4 = [];
const result = size.fileFinishedImporting("modules/emoji_picker/hooks/useTopAndNewlyAddedEmojis.tsx");

export default function useTopAndNewlyAddedEmojis(arg0, arg1) {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  const obj = require("useStateFromStores");
  const items = [EmojiStore];
  const items1 = [arg0, arg1];
  return obj.useStateFromStoresObject(items, () => {
    let newlyAddedEmoji;
    if (EmojiStore !== undefined) {
      let topEmoji;
      const tmp3 = EmojiIntention;
      if (closure_1 !== EmojiIntention.REACTION) {
        topEmoji = obj.getTopEmoji(tmp);
      } else {
        topEmoji = closure_4;
      }
      const obj2 = { topEmojis: topEmoji, newlyAddedEmojis: newlyAddedEmoji };
      if (closure_1 !== tmp3.REACTION) {
        newlyAddedEmoji = obj.getNewlyAddedEmoji(tmp);
      } else {
        newlyAddedEmoji = closure_4;
      }
      return obj2;
    }
  }, items1);
};
export function getTopAndNewlyAddedEmojis(emojiStoreInstance) {
  let guildId;
  let newlyAddedEmoji;
  let pickerIntention;
  let topEmoji;
  emojiStoreInstance = emojiStoreInstance.emojiStoreInstance;
  if (emojiStoreInstance === undefined) {
    emojiStoreInstance = EmojiStore;
  }
  ({ guildId, pickerIntention } = emojiStoreInstance);
  const tmp = EmojiIntention;
  if (pickerIntention !== EmojiIntention.REACTION) {
    topEmoji = emojiStoreInstance.getTopEmoji(guildId);
  } else {
    topEmoji = closure_4;
  }
  const obj = { topEmojis: topEmoji, newlyAddedEmojis: newlyAddedEmoji };
  if (pickerIntention !== tmp.REACTION) {
    newlyAddedEmoji = emojiStoreInstance.getNewlyAddedEmoji(guildId);
  } else {
    newlyAddedEmoji = closure_4;
  }
  return obj;
}
