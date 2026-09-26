// Module ID: 5715
// Function ID: 5716
// Name: dedupeEmojisByNameOrId
// Dependencies: [4441, 2]
// Exports: default

// Module 5715 (dedupeEmojisByNameOrId)
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4441 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/emojis/utils/dedupeEmojisByNameOrId.tsx");

export default function dedupeEmojisByNameOrId(arg0) {
  const map = new Map();
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
