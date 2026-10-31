// Module ID: 18750
// Function ID: 18751
// Name: SmartSearchCitation
// Dependencies: [5, 19, 9827, 21, 18700, 13895, 13893, 18751, 18731, 2]
// Exports: SmartSearchCitation

// Module 18750 (SmartSearchCitation)
import Fragment from "Fragment" /* 21 */;
import SearchConstants from "SearchConstants" /* 9827 */;
import MessageSearchResultParserDefault from "MessageSearchResultParser" /* 18751 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c3;

let closure_5 = SearchConstants.SEARCH_MESSAGES_DEFAULT_LINE_CLAMP;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchCitation.tsx");

export function SmartSearchCitation(smartSearchQuery) {
  smartSearchQuery = smartSearchQuery.smartSearchQuery;
  let citation = smartSearchQuery.citation;
  let index = smartSearchQuery.index;
  const numCitationsPresented = smartSearchQuery.numCitationsPresented;
  const searchContext = smartSearchQuery.searchContext;
  const isChannelGroupStart = smartSearchQuery.isChannelGroupStart;
  let tmp = smartSearchQuery;
  let obj = smartSearchQuery(index[4]);
  const onPressMessageItem = obj.useOnPressMessageItem({ searchContext });
  let obj2 = smartSearchQuery(index[4]);
  const onPressConversationCitation = obj2.useOnPressConversationCitation({ searchContext });
  const items = [onPressMessageItem, onPressConversationCitation, index, numCitationsPresented, citation, smartSearchQuery];
  const items1 = [smartSearchQuery.queryText];
  const callback = onPressMessageItem.useCallback(numCitationsPresented(function*(arg0, value) {
    let c2;
    let v1;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c3 = 2;
        if (0 === citation) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_0 = tmp;
            const obj4 = { smartSearchQuery, citation, index, numCitationsPresented };
            const obj6 = citation(index[5]);
            const result = obj6.trackSmartSearchCitationOpened(obj4, citation(index[6]));
            if ("conversation" === citation.sourceType) {
              index = 1;
              citation = 2;
              c3 = 1;
              const obj5 = { value: onPressConversationCitation(citation), done: false };
              return obj5;
            }
          }
        } else if (1 === tmp4) {
          index = 0;
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          index = 0;
          c3 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          index = 0;
          c3 = 3;
          const obj = { value: undefined, done: true };
          return obj;
        }
        closure_128_4(closure_128_1.channelId, closure_128_1.messageId);
        c3 = 3;
        return { value: "HermesInternal", done: "HermesInternal" };
      } catch (tmp12) {
        if (0 === index) {
          c3 = 3;
          throw tmp12;
        } else {
          citation = 1;
        }
      }
    }
  }), items);
  const memo = onPressMessageItem.useMemo(() => {
    const tmp = new MessageSearchResultParserDefault(smartSearchQuery.queryText, closure_5);
    return tmp;
  }, items1);
  if (isChannelGroupStart) {
    let HeaderlessMessageRow = citation(tmp2[8]);
  } else {
    HeaderlessMessageRow = tmp(tmp2[8]).HeaderlessMessageRow;
  }
  return <HeaderlessMessageRow key={citation.messageId} message={memo.parse(citation.message)} onPress={callback} lineClamp={onPressConversationCitation} />;
}
