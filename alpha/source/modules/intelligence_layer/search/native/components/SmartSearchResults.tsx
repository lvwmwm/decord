// Module ID: 17382
// Function ID: 17383
// Name: SmartSearchResults
// Dependencies: [19, 17, 12036, 21, 558, 576, 12058, 12056, 17383, 17384, 17391, 2]

// Module 17382 (SmartSearchResults)
import react_native from "react-native" /* 17 */;
import SmartSearchConstants from "SmartSearchConstants" /* 12036 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 12056 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 12058 */;
import SmartSearchCitation from "SmartSearchCitation" /* 17384 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
const View = react_native.View;
const MAX_PRESENTED_CITATIONS = SmartSearchConstants.MAX_PRESENTED_CITATIONS;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function SmartSearchResults(smartSearchQuery) {
  let arr3;
  let entry;
  let items;
  let obj = smartSearchQuery(entry[5]);
  const cResult = obj.c(27);
  const tmp = smartSearchQuery;
  smartSearchQuery = smartSearchQuery.smartSearchQuery;
  const hasKeywordResults = smartSearchQuery.hasKeywordResults;
  entry = smartSearchQuery.entry;
  const guildId = smartSearchQuery.guildId;
  const citations = entry.citations;
  let arr2 = citations;
  if (hasKeywordResults) {
    let tmp4;
    if (cResult[0] !== citations) {
      const substr = citations.slice(0, MAX_PRESENTED_CITATIONS);
      cResult[0] = citations;
      cResult[1] = substr;
      tmp4 = substr;
    } else {
      tmp4 = cResult[1];
    }
    arr2 = tmp4;
  }
  if (cResult[2] !== arr2) {
    const mapped = arr2.map((citation, index) => {
      const obj = { citation, isChannelGroupStart: tmp };
      return obj;
    });
    cResult[2] = arr2;
    cResult[3] = mapped;
    arr3 = mapped;
  } else {
    arr3 = cResult[3];
  }
  if (cResult[4] === arr2) {
    if (cResult[5] === entry.answerText) {
      if (cResult[6] === hasKeywordResults) {
        let tmp8;
        let tmp9;
        if (cResult[7] === smartSearchQuery) {
          tmp8 = cResult[8];
          tmp9 = cResult[9];
        }
        const effect = arr2.useEffect(tmp8, tmp9);
        if (cResult[10] === arr2) {
          if (cResult[11] === entry.answerText) {
            let tmp12;
            let tmp16;
            if (cResult[12] === guildId) {
              tmp12 = cResult[13];
            }
            if (cResult[14] === arr2) {
              if (cResult[15] === arr3) {
                let tmp19;
                if (cResult[16] === smartSearchQuery) {
                  tmp16 = cResult[17];
                }
                if (cResult[21] !== smartSearchQuery) {
                  let obj2 = { smartSearchQuery };
                  const tmp21 = closure_6(tmp(entry[10]).SmartSearchFeedback, obj2);
                  cResult[21] = smartSearchQuery;
                  cResult[22] = tmp21;
                  tmp19 = tmp21;
                } else {
                  tmp19 = cResult[22];
                }
                if (cResult[23] === tmp12) {
                  if (cResult[24] === tmp16) {
                    let tmp22;
                    if (cResult[25] === tmp19) {
                      tmp22 = cResult[26];
                    }
                    return tmp22;
                  }
                }
                const obj3 = { children: items };
                items = [tmp12, tmp16, tmp19];
                const tmp25 = closure_7(View, obj3);
                cResult[23] = tmp12;
                cResult[24] = tmp16;
                cResult[25] = tmp19;
                cResult[26] = tmp25;
                tmp22 = tmp25;
              }
            }
            if (cResult[18] === arr2) {
              let tmp17;
              if (cResult[19] === smartSearchQuery) {
                tmp17 = cResult[20];
              }
              const mapped1 = arr3.map(tmp17);
              cResult[14] = arr2;
              cResult[15] = arr3;
              cResult[16] = smartSearchQuery;
              cResult[17] = mapped1;
              tmp16 = mapped1;
            }
            const fn2 = function _(citation, index) {
              citation = citation.citation;
              const obj = { smartSearchQuery, citation, isChannelGroupStart: citation.isChannelGroupStart, index, numCitationsPresented: arr2.length };
              return metroRequire(SmartSearchCitation.SmartSearchCitation, obj, citation.messageId);
            };
            cResult[18] = arr2;
            cResult[19] = smartSearchQuery;
            cResult[20] = fn2;
            tmp17 = fn2;
          }
        }
        const obj4 = { answerText: entry.answerText, citations: arr2, guildId };
        const tmp15 = closure_6(hasKeywordResults(entry[8]), obj4);
        cResult[10] = arr2;
        cResult[11] = entry.answerText;
        cResult[12] = guildId;
        cResult[13] = tmp15;
        tmp12 = tmp15;
      }
    }
  }
  const fn = function f() {
    let obj = SmartSearchAnalyticsManagerDefault;
    const obj2 = { smartSearchQuery, answerText: entry.answerText, presentedCitations: arr2, hasKeywordResults };
    obj.setAnswer(obj2, SearchSessionAnalyticsManagerDefault);
    return () => {
      const obj = hasKeywordResults(entry[6]);
      obj.setAnswer(null, hasKeywordResults(entry[7]));
    };
  };
  const items1 = [smartSearchQuery, arr2, entry.answerText, hasKeywordResults];
  cResult[4] = arr2;
  cResult[5] = entry.answerText;
  cResult[6] = hasKeywordResults;
  cResult[7] = smartSearchQuery;
  cResult[8] = fn;
  cResult[9] = items1;
  tmp9 = items1;
  tmp8 = fn;
}) : (function SmartSearchResults(smartSearchQuery) {
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
      const obj = hasKeywordResults(entry[6]);
      obj.setAnswer(null, hasKeywordResults(entry[7]));
    };
  }, items2);
  let obj = { children: items3 };
  let obj2 = { answerText: entry.answerText, citations: memo, guildId };
  items3 = [
    closure_6(hasKeywordResults(entry[8]), obj2),
    memo1.map((citation, index) => {
      citation = citation.citation;
      const obj = { smartSearchQuery, citation, isChannelGroupStart: citation.isChannelGroupStart, index, numCitationsPresented: memo.length };
      return metroRequire(SmartSearchCitation.SmartSearchCitation, obj, citation.messageId);
    }),
    closure_6(smartSearchQuery(entry[10]).SmartSearchFeedback, { smartSearchQuery })
  ];
  return closure_7(View, obj);
});
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchResults.tsx");

export const SmartSearchResults = tmp3;
