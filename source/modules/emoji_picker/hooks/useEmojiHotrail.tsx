// Module ID: 9328
// Function ID: 72917
// Name: getEmojiHotrail
// Dependencies: []
// Exports: default

// Module 9328 (getEmojiHotrail)
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
let closure_0 = importAll(dependencyMap[0]);
const EMOJI_ROW_SIZE = arg1(dependencyMap[1]).EMOJI_ROW_SIZE;
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/emoji_picker/hooks/useEmojiHotrail.tsx");

export default function useEmojiHotrail(arg0) {
  const React = arg0;
  const items = [arg0];
  return React.useMemo(() => callback(arg0), items);
};
export { getEmojiHotrail };
