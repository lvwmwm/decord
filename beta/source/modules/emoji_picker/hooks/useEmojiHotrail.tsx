// Module ID: 9745
// Function ID: 9746
// Name: useEmojiHotrail
// Dependencies: [19, 5775, 2]
// Exports: default, getEmojiHotrail

// Module 9745 (useEmojiHotrail)
import EmojiPickerConstants from "EmojiPickerConstants" /* 5775 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let react = react_mod;
const EMOJI_ROW_SIZE = EmojiPickerConstants.EMOJI_ROW_SIZE;
const result = size.fileFinishedImporting("modules/emoji_picker/hooks/useEmojiHotrail.tsx");

export default function useEmojiHotrail(arg0) {
  let closure_0;
  react = arg0;
  const items = [arg0];
  return react.useMemo(() => {
    let newlyAddedEmojis;
    let rowSize;
    let topEmojis;
    ({ topEmojis, newlyAddedEmojis, rowSize } = closure_0);
    if (rowSize === undefined) {
      rowSize = EMOJI_ROW_SIZE;
    }
    const substr = topEmojis.slice(0, rowSize - newlyAddedEmojis.length);
    const obj = { visibleTopEmojis: substr, visibleNewlyAddedEmojis: newlyAddedEmojis, allEmojis: substr.concat(newlyAddedEmojis) };
    return obj;
  }, items);
};
export const getEmojiHotrail = function getEmojiHotrail(arg0) {
  let newlyAddedEmojis;
  let rowSize;
  let topEmojis;
  ({ topEmojis, newlyAddedEmojis, rowSize } = arg0);
  if (rowSize === undefined) {
    rowSize = EMOJI_ROW_SIZE;
  }
  const substr = topEmojis.slice(0, rowSize - newlyAddedEmojis.length);
  const obj = { visibleTopEmojis: substr, visibleNewlyAddedEmojis: newlyAddedEmojis, allEmojis: substr.concat(newlyAddedEmojis) };
  return obj;
};
