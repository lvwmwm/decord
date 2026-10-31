// Module ID: 18748
// Function ID: 18749
// Name: SmartSearchResults
// Dependencies: [19, 17, 13873, 21, 13895, 13893, 18749, 18750, 18757, 2]
// Exports: SmartSearchResults

// Module 18748 (SmartSearchResults)
import react_native from "react-native" /* 17 */;
import SmartSearchConstants from "SmartSearchConstants" /* 13873 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 13893 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 13895 */;
import SmartSearchCitation from "SmartSearchCitation" /* 18750 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let citation;

let metroImportDefault;
let metroRequire;
const View = react_native.View;
const MAX_PRESENTED_CITATIONS = SmartSearchConstants.MAX_PRESENTED_CITATIONS;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchResults.tsx");

export function SmartSearchResults(smartSearchQuery) {
  let items3;
  smartSearchQuery = smartSearchQuery.smartSearchQuery;
  const hasKeywordResults = smartSearchQuery.hasKeywordResults;
  const entry = smartSearchQuery.entry;
  let memo;
  const items = [entry.citations, hasKeywordResults];
  const guildId = smartSearchQuery.guildId;
  memo = memo.useMemo(() => {
    const citations = entry.citations;
    let substr = citations;
    if (hasKeywordResults) {
      substr = citations.slice(0, MAX_PRESENTED_CITATIONS);
    }
    return substr;
  }, items);
  const items1 = [memo];
  const memo1 = memo.useMemo(() => {
    let closure_0 = memo;
    return memo.map((citation, index) => {
      const obj = { citation, isChannelGroupStart: tmp };
      return obj;
    });
  }, items1);
  const items2 = [smartSearchQuery, memo, entry.answerText, hasKeywordResults];
  const effect = memo.useEffect(() => {
    let obj = SmartSearchAnalyticsManagerDefault;
    const obj2 = { smartSearchQuery, answerText: entry.answerText, presentedCitations: memo, hasKeywordResults };
    obj.setAnswer(obj2, SearchSessionAnalyticsManagerDefault);
    return () => {
      const obj = hasKeywordResults(entry[4]);
      obj.setAnswer(null, hasKeywordResults(entry[5]));
    };
  }, items2);
  let obj = { children: items3 };
  let obj2 = { answerText: entry.answerText, citations: memo, guildId };
  items3 = [
    closure_6(hasKeywordResults(entry[6]), obj2),
    memo1.map((citation, index) => {
      citation = citation.citation;
      const obj = { smartSearchQuery, citation, isChannelGroupStart: citation.isChannelGroupStart, index, numCitationsPresented: memo.length };
      return metroRequire(SmartSearchCitation.SmartSearchCitation, obj, citation.messageId);
    }),
    closure_6(smartSearchQuery(entry[8]).SmartSearchFeedback, { smartSearchQuery })
  ];
  return closure_7(View, obj);
}
