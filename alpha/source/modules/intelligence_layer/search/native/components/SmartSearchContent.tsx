// Module ID: 18935
// Function ID: 18936
// Name: SmartSearchContent
// Dependencies: [19, 21, 13239, 18936, 18937, 18879, 2]
// Exports: SmartSearchContent

// Module 18935 (SmartSearchContent)
import Fragment from "Fragment" /* 21 */;
import SmartSearchTypes from "SmartSearchTypes" /* 13239 */;
import SuggestedSearchListDefault from "SuggestedSearchList" /* 18879 */;
import SmartSearchSkeletonDefault from "SmartSearchSkeleton" /* 18936 */;
import SmartSearchResults from "SmartSearchResults" /* 18937 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchContent.tsx");

export function SmartSearchContent(arg0) {
  let entry;
  let hasKeywordResults;
  let isCollapsed;
  let smartSearchQuery;
  ({ smartSearchQuery, entry } = arg0);
  const status = entry.status;
  ({ hasKeywordResults, isCollapsed } = arg0);
  if (SmartSearchTypes.SmartSearchStatus.NOT_QUALIFIED === status) {
    return null;
  } else if (SmartSearchTypes.SmartSearchStatus.LOADING === status) {
    return jsx(SmartSearchSkeletonDefault, { isCollapsed });
  } else if (SmartSearchTypes.SmartSearchStatus.LOADED === status) {
    return jsx(SmartSearchResults.SmartSearchResults, { smartSearchQuery, hasKeywordResults, entry });
  } else {
    if (SmartSearchTypes.SmartSearchStatus.ERROR !== status) {
      const EMPTY = tmp(13239).SmartSearchStatus.EMPTY;
    }
    return jsx(SuggestedSearchListDefault, { smartSearchQuery, source: "smart_search_row" });
  }
}
