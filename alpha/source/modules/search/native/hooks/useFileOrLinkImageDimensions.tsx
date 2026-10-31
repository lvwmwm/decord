// Module ID: 18780
// Function ID: 18781
// Name: useFileOrLinkImageDimensions
// Dependencies: [19, 9827, 2]
// Exports: useFileOrLinkImageDimensions

// Module 18780 (useFileOrLinkImageDimensions)
import react from "react" /* 19 */;
import SearchConstants from "SearchConstants" /* 9827 */;
import size_mod from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
let map;
({ FILES_OR_LINKS_GAP_WIDTH: map, FILES_OR_LINKS_NUM_COLUMNS: c2, FILE_OR_LINK_IMAGE_RATIO: c3, SEARCH_LIST_HORIZONTAL_PADDING: closure_4 } = SearchConstants);
let size = size_mod;
let result = size.fileFinishedImporting("modules/search/native/hooks/useFileOrLinkImageDimensions.tsx");

export function useFileOrLinkImageDimensions(width) {
  const diff = (width - 2 * React3 - (React2 - 1) * map) / React2 - 2;
  const result = diff * _false;
  const items = [result, diff];
  return react.useMemo(() => {
    size = { width: diff, height: result };
    return size;
  }, items);
}
