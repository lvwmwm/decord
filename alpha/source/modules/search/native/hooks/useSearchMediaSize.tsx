// Module ID: 17337
// Function ID: 17338
// Name: useSearchMediaSize
// Dependencies: [9312, 2]
// Exports: default

// Module 17337 (useSearchMediaSize)
import SearchConstants from "SearchConstants" /* 9312 */;
import size from "module_2" /* 2 */;

let _window;
let c2;
let map;
({ SEARCH_LIST_HORIZONTAL_PADDING: _window, MEDIA_NUM_COLUMNS: map, MEDIA_ITEM_GAP_WIDTH: c2 } = SearchConstants);
const result = size.fileFinishedImporting("modules/search/native/hooks/useSearchMediaSize.tsx");

export default function useSearchMediaSize(arg0) {
  return Math.floor((arg0 - 2 * React - React2 * (map - 1)) / map);
};
