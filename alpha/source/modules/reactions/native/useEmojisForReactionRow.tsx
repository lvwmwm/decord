// Module ID: 12828
// Function ID: 12829
// Name: useEmojisForReactionRow
// Dependencies: [19, 1393, 558, 576, 9430, 1497, 4768, 2]

// Module 12828 (useEmojisForReactionRow)
import EmojiConstants from "EmojiConstants" /* 1393 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1497 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4768 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const EmojiIntention = EmojiConstants.EmojiIntention;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useEmojisForReactionRow(getGuildId, arg1, arg2) {
  let channel;
  let length;
  let tmp4;
  let tmp7;
  _require = getGuildId;
  let obj = require("react");
  const cResult = obj.c(11);
  const tmp = _require;
  if (cResult[0] !== getGuildId) {
    const guildId = getGuildId.getGuildId();
    cResult[0] = getGuildId;
    cResult[1] = guildId;
    tmp4 = guildId;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult = tmp(9430);
  const frequentlyUsedReactionEmojis = tmpResult.useFrequentlyUsedReactionEmojis(tmp4);
  const rounded = Math.floor(Math.min(useWindowDimensionsDefault().width, arg1) / arg2);
  if (cResult[2] === getGuildId) {
    if (cResult[3] === frequentlyUsedReactionEmojis) {
      let arr2;
      if (cResult[4] === rounded) {
        arr2 = cResult[5];
      }
      if (cResult[8] === arr2) {
        let tmp9;
        if (cResult[9] === rounded) {
          tmp9 = cResult[10];
        }
        return tmp9;
      }
      const substr = arr2.slice(0, rounded - 1);
      cResult[8] = arr2;
      cResult[9] = rounded;
      cResult[10] = substr;
      tmp9 = substr;
    }
  }
  if (cResult[6] !== getGuildId) {
    const fn = function v(emoji) {
      const obj = EmojiUtilsDefault;
      const obj2 = { emoji, channel, intention: EmojiIntention.REACTION };
      return !obj.isEmojiFilteredOrLocked(obj2);
    };
    cResult[6] = getGuildId;
    cResult[7] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[7];
  }
  const found = frequentlyUsedReactionEmojis.filter(tmp7);
  if (found.length < rounded) {
    do {
      let arr = found.push(null);
      length = found.length;
    } while (length < rounded);
  }
  cResult[2] = getGuildId;
  cResult[3] = frequentlyUsedReactionEmojis;
  cResult[4] = rounded;
  cResult[5] = found;
  arr2 = found;
}) : (function useEmojisForReactionRow(getGuildId, arg1, arg2) {
  let rounded;
  _require = getGuildId;
  const guildId = getGuildId.getGuildId();
  let obj = require("EmojiPickerUtils");
  const frequentlyUsedReactionEmojis = obj.useFrequentlyUsedReactionEmojis(guildId);
  rounded = Math.floor(Math.min(frequentlyUsedReactionEmojis(rounded[5])().width, arg1) / arg2);
  const items = [frequentlyUsedReactionEmojis, getGuildId, rounded];
  const memo = react.useMemo(() => {
    let channel;
    let length;
    const found = frequentlyUsedReactionEmojis.filter((emoji) => {
      const obj = frequentlyUsedReactionEmojis(rounded[6]);
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
});
const result = size.fileFinishedImporting("modules/reactions/native/useEmojisForReactionRow.tsx");

export const useEmojisForReactionRow = tmp2;
