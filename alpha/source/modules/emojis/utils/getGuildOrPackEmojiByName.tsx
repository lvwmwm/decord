// Module ID: 7820
// Function ID: 7821
// Name: getGuildOrPackEmojiByName
// Dependencies: [4958, 2]
// Exports: default

// Module 7820 (getGuildOrPackEmojiByName)
import EmojiTypes from "EmojiTypes" /* 4958 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/emojis/utils/getGuildOrPackEmojiByName.tsx");

export default function getGuildOrPackEmojiByName(getCustomEmoji, arg1) {
  let obj = arg2;
  if (arg2 === undefined) {
    let customEmoji;
    if (getCustomEmoji != null) {
      customEmoji = getCustomEmoji.getCustomEmoji();
    }
    obj = customEmoji;
  }
  let value;
  if (obj != null) {
    value = obj.get(arg1);
  }
  if (null != value) {
    return value;
  } else {
    let byName;
    if (getCustomEmoji != null) {
      byName = getCustomEmoji.getByName(arg1);
    }
    let type;
    if (byName != null) {
      type = byName.type;
    }
    let tmp8;
    if (type === EmojiTypes.EmojiTypes.PACK) {
      tmp8 = byName;
    }
    return tmp8;
  }
};
