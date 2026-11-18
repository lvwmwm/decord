// Module ID: 18794
// Function ID: 18795
// Name: useSearchMediaSize
// Dependencies: [8488, 2]
// Exports: default

// Module 18794 (useSearchMediaSize)
import SearchConstants from "SearchConstants" /* 8488 */;
import size from "module_2" /* 2 */;

let _window;
let c2;
let map;
({ SEARCH_LIST_HORIZONTAL_PADDING: _window, MEDIA_NUM_COLUMNS: map, MEDIA_ITEM_GAP_WIDTH: c2 } = SearchConstants);
const result = size.fileFinishedImporting("modules/search/native/hooks/useSearchMediaSize.tsx");

export default function useSearchMediaSize(arg0) {
  return Math.floor((arg0 - 2 * React - React2 * (map - 1)) / map);
};
