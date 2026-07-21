// Module ID: 15212
// Function ID: 114872
// Name: useSearchMediaSize
// Dependencies: []
// Exports: default

// Module 15212 (useSearchMediaSize)
const _module = require(dependencyMap[0]);
({ SEARCH_LIST_HORIZONTAL_PADDING: closure_0, MEDIA_NUM_COLUMNS: closure_1, MEDIA_ITEM_GAP_WIDTH: closure_2 } = _module);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/search/native/hooks/useSearchMediaSize.tsx");

export default function useSearchMediaSize(arg0) {
  return Math.floor((arg0 - 2 * closure_0 - closure_2 * (closure_1 - 1)) / closure_1);
};
