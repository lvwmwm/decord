// Module ID: 16544
// Function ID: 16545
// Name: useIntelligenceSearchMessages
// Dependencies: [19, 7307, 558, 576, 16454, 11742, 2]

// Module 16544 (useIntelligenceSearchMessages)
import react2 from "react" /* 576 */;
import SearchConstants from "SearchConstants" /* 7307 */;
import useIntelligenceSearchStatus from "useIntelligenceSearchStatus" /* 16454 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const IntelligenceSearchUtils = tmp(11742);
const SearchListItemTypes = SearchConstants.SearchListItemTypes;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let guildId;
  let hasKeywordResults;
  let isKeywordFirstPageLoading;
  let obj3;
  let requestKey;
  let searchContext;
  let status;
  const obj = react2;
  const cResult = obj.c(8);
  ({ searchContext, hasKeywordResults, isKeywordFirstPageLoading } = arg0);
  const obj2 = useIntelligenceSearchStatus;
  const intelligenceSearchStatus = obj2.useIntelligenceSearchStatus(searchContext);
  ({ guildId, requestKey, status } = intelligenceSearchStatus);
  let tmp5 = null;
  if (null != guildId) {
    tmp5 = null;
    if (!isKeywordFirstPageLoading) {
      tmp5 = null;
      const tmpResult = IntelligenceSearchUtils;
      if (tmpResult.isIntelligenceSearchActive(status)) {
        if (cResult[0] === guildId) {
          if (cResult[1] === hasKeywordResults) {
            if (cResult[2] === requestKey) {
              let tmp6;
              if (cResult[3] === searchContext) {
                tmp6 = cResult[4];
              }
              tmp5 = tmp6;
            }
          }
        }
        const element = { type: SearchListItemTypes.INTELLIGENCE_SMART_SEARCH, props: obj3 };
        obj3 = { searchContext, guildId, requestKey, hasKeywordResults };
        cResult[0] = guildId;
        cResult[1] = hasKeywordResults;
        cResult[2] = requestKey;
        cResult[3] = searchContext;
        cResult[4] = element;
        tmp6 = element;
      }
    }
  }
  if (cResult[5] === tmp5) {
    let tmp8;
    if (cResult[6] === status) {
      tmp8 = cResult[7];
    }
    return tmp8;
  }
  const obj4 = { item: tmp5, status };
  cResult[5] = tmp5;
  cResult[6] = status;
  cResult[7] = obj4;
  tmp8 = obj4;
}) : ((searchContext) => {
  let items;
  searchContext = searchContext.searchContext;
  const hasKeywordResults = searchContext.hasKeywordResults;
  const isKeywordFirstPageLoading = searchContext.isKeywordFirstPageLoading;
  let obj = searchContext(hasKeywordResults[4]);
  const intelligenceSearchStatus = obj.useIntelligenceSearchStatus(searchContext);
  const guildId = intelligenceSearchStatus.guildId;
  const requestKey = intelligenceSearchStatus.requestKey;
  const status = intelligenceSearchStatus.status;
  let obj2 = {
    item: isKeywordFirstPageLoading.useMemo(() => {
      let obj2;
      let tmp2 = null;
      if (null != guildId) {
        tmp2 = null;
        if (!isKeywordFirstPageLoading) {
          tmp2 = null;
          const obj = IntelligenceSearchUtils;
          if (obj.isIntelligenceSearchActive(status)) {
            const element = { type: SearchListItemTypes.INTELLIGENCE_SMART_SEARCH, props: obj2 };
            tmp2 = element;
            obj2 = { searchContext, guildId: tmp, requestKey, hasKeywordResults };
          }
        }
      }
      return tmp2;
    }, items),
    status
  };
  items = [status, guildId, hasKeywordResults, isKeywordFirstPageLoading, requestKey, searchContext];
  return obj2;
});
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useIntelligenceSearchMessages.tsx");

export const useIntelligenceSearchMessages = tmp2;
