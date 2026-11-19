// Module ID: 19861
// Function ID: 19862
// Name: useEmojiName
// Dependencies: [6452, 504, 38, 4738, 2]
// Exports: default

// Module 19861 (useEmojiName)
import _modDef38 from "module_38" /* 38 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4738 */;
import EmojiStore from "EmojiStore" /* 6452 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/emojis/useEmojiName.tsx");

export default function useEmojiName(emojiId) {
  let name;
  emojiId = emojiId.emojiId;
  const emojiName = emojiId.emojiName;
  const tmp = dependencyMap;
  const items = [EmojiStore];
  const obj = emojiId(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    let customEmojiById = null;
    if (null != emojiId) {
      customEmojiById = EmojiStore.getCustomEmojiById(tmp);
    }
    return customEmojiById;
  });
  if (null == emojiId) {
    _modDef38(null != emojiName, "emojiName must be defined if emojiId is not defined");
    const obj2 = UnicodeEmojisDefault;
    name = obj2.convertSurrogateToName(emojiName, false);
  } else if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  return name;
};
