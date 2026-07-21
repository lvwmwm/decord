// Module ID: 15268
// Function ID: 115261
// Name: useFileOrLinkImageDimensions
// Dependencies: []
// Exports: useFileOrLinkImageDimensions

// Module 15268 (useFileOrLinkImageDimensions)
let closure_0 = importAll(dependencyMap[0]);
({ FILES_OR_LINKS_GAP_WIDTH: closure_1, FILES_OR_LINKS_NUM_COLUMNS: closure_2, FILE_OR_LINK_IMAGE_RATIO: closure_3, SEARCH_LIST_HORIZONTAL_PADDING: closure_4 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/search/native/hooks/useFileOrLinkImageDimensions.tsx");

export const useFileOrLinkImageDimensions = function useFileOrLinkImageDimensions(width) {
  const diff = (width - 2 * closure_4 - (closure_2 - 1) * result) / closure_2 - 2;
  const React = diff;
  const result = diff * closure_3;
  const items = [result, diff];
  return React.useMemo(() => ({ width: diff, height: result }), items);
};
