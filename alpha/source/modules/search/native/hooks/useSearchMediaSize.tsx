// Module ID: 19097
// Function ID: 19098
// Name: useSearchMediaSize
// Dependencies: [9923, 2]
// Exports: default

// Module 19097 (useSearchMediaSize)
import SearchConstants from "SearchConstants" /* 9923 */;
import size from "module_2" /* 2 */;

let _window;
let c2;
let map;
({ SEARCH_LIST_HORIZONTAL_PADDING: _window, MEDIA_NUM_COLUMNS: map, MEDIA_ITEM_GAP_WIDTH: c2 } = SearchConstants);
const result = size.fileFinishedImporting("modules/search/native/hooks/useSearchMediaSize.tsx");

export default function useSearchMediaSize(arg0) {
  return Math.floor((arg0 - 2 * React - React2 * (map - 1)) / map);
};
