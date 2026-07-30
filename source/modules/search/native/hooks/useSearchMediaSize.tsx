// Module ID: 15477
// Function ID: 15478
// Name: useSearchMediaSize
// Dependencies: [9097, 2]
// Exports: default

// Module 15477 (useSearchMediaSize)
import SearchAutocompleteSelectAnalyticsActions from "SearchAutocompleteSelectAnalyticsActions";

let c0;
let closure_1;
let obj1;
({ SEARCH_LIST_HORIZONTAL_PADDING: c0, MEDIA_NUM_COLUMNS: closure_1, MEDIA_ITEM_GAP_WIDTH: obj1 } = SearchAutocompleteSelectAnalyticsActions);
const result = require("set").fileFinishedImporting("modules/search/native/hooks/useSearchMediaSize.tsx");

export default function useSearchMediaSize(arg0) {
  return Math.floor((arg0 - 2 * closure_0 - closure_2 * (closure_1 - 1)) / closure_1);
};
