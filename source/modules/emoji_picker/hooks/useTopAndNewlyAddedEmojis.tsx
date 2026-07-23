// Module ID: 9334
// Function ID: 72954
// Name: getTopAndNewlyAddedEmojis
// Dependencies: [4991, 1852, 624, 2]
// Exports: default

// Module 9334 (getTopAndNewlyAddedEmojis)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { EmojiIntention } from "set";

const require = arg1;
function getTopAndNewlyAddedEmojis(emojiStoreInstance) {
  let guildId;
  let pickerIntention;
  emojiStoreInstance = emojiStoreInstance.emojiStoreInstance;
  if (emojiStoreInstance === undefined) {
    emojiStoreInstance = _isNativeReflectConstruct;
  }
  ({ guildId, pickerIntention } = emojiStoreInstance);
  const obj = {};
  if (pickerIntention !== EmojiIntention.REACTION) {
    let topEmoji = emojiStoreInstance.getTopEmoji(guildId);
  } else {
    topEmoji = closure_4;
  }
  obj.topEmojis = topEmoji;
  if (pickerIntention !== EmojiIntention.REACTION) {
    let newlyAddedEmoji = emojiStoreInstance.getNewlyAddedEmoji(guildId);
  } else {
    newlyAddedEmoji = closure_4;
  }
  obj.newlyAddedEmojis = newlyAddedEmoji;
  return obj;
}
let closure_4 = [];
const result = require("defaultAreStatesEqual").fileFinishedImporting("modules/emoji_picker/hooks/useTopAndNewlyAddedEmojis.tsx");

export default function useTopAndNewlyAddedEmojis(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  const items = [_isNativeReflectConstruct];
  const items1 = [arg0, arg1];
  return _require(624).useStateFromStoresObject(items, () => outer1_5({ emojiStoreInstance: outer1_2, guildId: closure_0, pickerIntention: closure_1 }), items1);
};
export { getTopAndNewlyAddedEmojis };
