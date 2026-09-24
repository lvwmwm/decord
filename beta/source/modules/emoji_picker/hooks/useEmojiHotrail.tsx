// Module ID: 10484
// Function ID: 10485
// Name: useEmojiHotrail
// Dependencies: [19, 5714, 558, 568, 2]
// Exports: getEmojiHotrail

// Module 10484 (useEmojiHotrail)
import c from "c" /* 568 */;
import noop from "module_19" /* 19 */;

require = fn;
const EMOJI_ROW_SIZE = fn(5714).EMOJI_ROW_SIZE;
const ReactCompilerGating = fn(558);
function getEmojiHotrail(arg0) {
  ({ topEmojis, newlyAddedEmojis, rowSize } = arg0);
  if (rowSize === undefined) {
    rowSize = EMOJI_ROW_SIZE;
  }
  const substr = topEmojis.slice(0, rowSize - newlyAddedEmojis.length);
  return { visibleTopEmojis: substr, visibleNewlyAddedEmojis: newlyAddedEmojis, allEmojis: substr.concat(newlyAddedEmojis) };
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/emoji_picker/hooks/useEmojiHotrail.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(2);
  if (cResult[0] !== arg0) {
    ({ topEmojis, newlyAddedEmojis, rowSize } = arg0);
    if (rowSize === undefined) {
      rowSize = EMOJI_ROW_SIZE;
    }
    const substr = topEmojis.slice(0, rowSize - newlyAddedEmojis.length);
    const obj2 = { visibleTopEmojis: substr, visibleNewlyAddedEmojis: newlyAddedEmojis, allEmojis: substr.concat(newlyAddedEmojis) };
    cResult[0] = arg0;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : ((arg0) => {
  closure_0 = arg0;
  const items = [arg0];
  return noop.useMemo(() => {
    ({ topEmojis, newlyAddedEmojis, rowSize } = closure_0);
    if (rowSize === undefined) {
      rowSize = EMOJI_ROW_SIZE;
    }
    const substr = topEmojis.slice(0, rowSize - newlyAddedEmojis.length);
    return { visibleTopEmojis: substr, visibleNewlyAddedEmojis: newlyAddedEmojis, allEmojis: substr.concat(newlyAddedEmojis) };
  }, items);
});
export { getEmojiHotrail };
