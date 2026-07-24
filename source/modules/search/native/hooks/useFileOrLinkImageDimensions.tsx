// Module ID: 15440
// Function ID: 117800
// Name: useFileOrLinkImageDimensions
// Dependencies: [31, 9141, 2]
// Exports: useFileOrLinkImageDimensions

// Module 15440 (useFileOrLinkImageDimensions)
import result from "result";
import SearchAutocompleteSelectAnalyticsActions from "SearchAutocompleteSelectAnalyticsActions";

let closure_1;
let closure_2;
let closure_3;
let closure_4;
({ FILES_OR_LINKS_GAP_WIDTH: closure_1, FILES_OR_LINKS_NUM_COLUMNS: closure_2, FILE_OR_LINK_IMAGE_RATIO: closure_3, SEARCH_LIST_HORIZONTAL_PADDING: closure_4 } = SearchAutocompleteSelectAnalyticsActions);
let result = require("set").fileFinishedImporting("modules/search/native/hooks/useFileOrLinkImageDimensions.tsx");

export const useFileOrLinkImageDimensions = function useFileOrLinkImageDimensions(width) {
  const diff = (width - 2 * closure_4 - (closure_2 - 1) * result) / closure_2 - 2;
  result = diff * closure_3;
  const items = [result, diff];
  return diff.useMemo(() => ({ width: result, height: closure_1 }), items);
};
