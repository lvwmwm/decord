// Module ID: 15386
// Function ID: 117441
// Name: useSearchMediaSize
// Dependencies: [9141, 2]
// Exports: default

// Module 15386 (useSearchMediaSize)
import SearchAutocompleteSelectAnalyticsActions from "SearchAutocompleteSelectAnalyticsActions";

({ SEARCH_LIST_HORIZONTAL_PADDING: closure_0, MEDIA_NUM_COLUMNS: closure_1, MEDIA_ITEM_GAP_WIDTH: closure_2 } = SearchAutocompleteSelectAnalyticsActions);
const result = require("set").fileFinishedImporting("modules/search/native/hooks/useSearchMediaSize.tsx");

export default function useSearchMediaSize(arg0) {
  return Math.floor((arg0 - 2 * closure_0 - closure_2 * (closure_1 - 1)) / closure_1);
};
