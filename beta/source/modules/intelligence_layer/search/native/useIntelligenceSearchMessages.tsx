// Module ID: 16542
// Function ID: 16543
// Name: useIntelligenceSearchMessages
// Dependencies: [19, 7303, 16452, 11849, 2]
// Exports: useIntelligenceSearchMessages

// Module 16542 (useIntelligenceSearchMessages)
import SearchConstants from "SearchConstants" /* 7303 */;
import IntelligenceSearchUtils from "IntelligenceSearchUtils" /* 11849 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const SearchListItemTypes = SearchConstants.SearchListItemTypes;
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useIntelligenceSearchMessages.tsx");

export const useIntelligenceSearchMessages = function useIntelligenceSearchMessages(searchContext) {
  let items;
  searchContext = searchContext.searchContext;
  const hasKeywordResults = searchContext.hasKeywordResults;
  const isKeywordFirstPageLoading = searchContext.isKeywordFirstPageLoading;
  let obj = searchContext(hasKeywordResults[2]);
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
};
