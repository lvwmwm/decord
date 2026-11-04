// Module ID: 18985
// Function ID: 18986
// Name: useSearchMediaSize
// Dependencies: [9976, 2]
// Exports: default

// Module 18985 (useSearchMediaSize)
import SearchConstants from "SearchConstants" /* 9976 */;
import size from "module_2" /* 2 */;

let _window;
let c2;
let map;
({ SEARCH_LIST_HORIZONTAL_PADDING: _window, MEDIA_NUM_COLUMNS: map, MEDIA_ITEM_GAP_WIDTH: c2 } = SearchConstants);
const result = size.fileFinishedImporting("modules/search/native/hooks/useSearchMediaSize.tsx");

export default function useSearchMediaSize(arg0) {
  return Math.floor((arg0 - 2 * React - React2 * (map - 1)) / map);
};
