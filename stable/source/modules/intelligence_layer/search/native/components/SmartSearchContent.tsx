// Module ID: 19146
// Function ID: 19147
// Name: SmartSearchContent
// Dependencies: [19, 21, 14157, 19147, 19148, 19092, 2]
// Exports: SmartSearchContent

// Module 19146 (SmartSearchContent)
import Fragment from "Fragment" /* 21 */;
import SmartSearchTypes from "SmartSearchTypes" /* 14157 */;
import SuggestedSearchListDefault from "SuggestedSearchList" /* 19092 */;
import SmartSearchSkeletonDefault from "SmartSearchSkeleton" /* 19147 */;
import SmartSearchResults from "SmartSearchResults" /* 19148 */;
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
      const EMPTY = tmp(14157).SmartSearchStatus.EMPTY;
    }
    return jsx(SuggestedSearchListDefault, { smartSearchQuery, source: "smart_search_row" });
  }
}
