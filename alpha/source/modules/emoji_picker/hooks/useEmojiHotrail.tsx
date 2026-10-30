// Module ID: 9927
// Function ID: 9928
// Name: useEmojiHotrail
// Dependencies: [19, 6793, 2]
// Exports: default, getEmojiHotrail

// Module 9927 (useEmojiHotrail)
import EmojiPickerConstants from "EmojiPickerConstants" /* 6793 */;
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
export function getEmojiHotrail(arg0) {
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
}
