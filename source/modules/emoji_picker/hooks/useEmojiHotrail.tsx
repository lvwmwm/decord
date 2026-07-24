// Module ID: 9371
// Function ID: 73167
// Name: getEmojiHotrail
// Dependencies: [31, 4995, 2]
// Exports: default

// Module 9371 (getEmojiHotrail)
import result from "result";
import { EMOJI_ROW_SIZE } from "EmojiCategoryTypes";

function getEmojiHotrail(arg0) {
  let newlyAddedEmojis;
  let rowSize;
  let topEmojis;
  ({ topEmojis, newlyAddedEmojis, rowSize } = arg0);
  if (rowSize === undefined) {
    rowSize = EMOJI_ROW_SIZE;
  }
  const substr = topEmojis.slice(0, rowSize - newlyAddedEmojis.length);
  return { visibleTopEmojis: substr, visibleNewlyAddedEmojis: newlyAddedEmojis, allEmojis: substr.concat(newlyAddedEmojis) };
}
const result = require("set").fileFinishedImporting("modules/emoji_picker/hooks/useEmojiHotrail.tsx");

export default function useEmojiHotrail(arg0) {
  const React = arg0;
  const items = [arg0];
  return React.useMemo(() => outer1_2(result), items);
};
export { getEmojiHotrail };
