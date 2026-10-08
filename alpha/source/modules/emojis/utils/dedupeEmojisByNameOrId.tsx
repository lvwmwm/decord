// Module ID: 5999
// Function ID: 6000
// Name: dedupeEmojisByNameOrId
// Dependencies: [4721, 2]
// Exports: default

// Module 5999 (dedupeEmojisByNameOrId)
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4721 */;
import size from "module_2" /* 2 */;

let map;

let result = size.fileFinishedImporting("modules/emojis/utils/dedupeEmojisByNameOrId.tsx");

export default function dedupeEmojisByNameOrId(arg0) {
  map = new Map();
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (null == nextResult.id) {
      let obj2 = UnicodeEmojisDefault;
      let result = obj2.convertSurrogateToBase(tmp2.surrogates);
      if (result == null) {
        result = nextResult;
      }
      let result1 = map.set(result.name, result);
    } else {
      let result2 = map.set(tmp2.id, tmp2);
    }
    continue;
  }
  return map;
};
