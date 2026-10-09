// Module ID: 17312
// Function ID: 17313
// Name: SmartSearchCitation
// Dependencies: [5, 19, 9285, 21, 558, 576, 17262, 12014, 12012, 17313, 17293, 2]

// Module 17312 (SmartSearchCitation)
import Fragment from "Fragment" /* 21 */;
import SearchConstants from "SearchConstants" /* 9285 */;
import MessageSearchResultParserDefault from "MessageSearchResultParser" /* 17313 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;

let closure_5 = SearchConstants.SEARCH_MESSAGES_DEFAULT_LINE_CLAMP;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function SmartSearchCitation(smartSearchQuery) {
  let index;
  let tmp4;
  let tmp6;
  const tmp = smartSearchQuery;
  let obj = smartSearchQuery(index[5]);
  const cResult = obj.c(21);
  smartSearchQuery = smartSearchQuery.smartSearchQuery;
  let citation = smartSearchQuery.citation;
  index = smartSearchQuery.index;
  let numCitationsPresented = smartSearchQuery.numCitationsPresented;
  const searchContext = smartSearchQuery.searchContext;
  const isChannelGroupStart = smartSearchQuery.isChannelGroupStart;
  if (cResult[0] !== searchContext) {
    let obj2 = { searchContext };
    cResult[0] = searchContext;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult = tmp(index[6]);
  const onPressMessageItem = tmpResult.useOnPressMessageItem(tmp4);
  if (cResult[2] !== searchContext) {
    let obj3 = { searchContext };
    cResult[2] = searchContext;
    cResult[3] = obj3;
    tmp6 = obj3;
  } else {
    tmp6 = cResult[3];
  }
  const tmpResult2 = tmp(index[6]);
  const onPressConversationCitation = tmpResult2.useOnPressConversationCitation(tmp6);
  if (cResult[4] === citation) {
    if (cResult[5] === index) {
      if (cResult[6] === numCitationsPresented) {
        if (cResult[7] === onPressConversationCitation) {
          if (cResult[8] === onPressMessageItem) {
            let tmp8;
            let obj6;
            let HeaderlessMessageRow;
            if (cResult[9] === smartSearchQuery) {
              tmp8 = cResult[10];
            }
            if (cResult[11] !== smartSearchQuery.queryText) {
              const self = this;
              const self2 = this;
              const tmp11 = new citation(index[9])(smartSearchQuery.queryText, onPressConversationCitation);
              const tmp12 = tmp11;
              cResult[11] = smartSearchQuery.queryText;
              cResult[12] = tmp11;
              obj6 = tmp11;
            } else {
              obj6 = cResult[12];
            }
            if (isChannelGroupStart) {
              HeaderlessMessageRow = citation(tmp2[10]);
            } else {
              HeaderlessMessageRow = tmp(tmp2[10]).HeaderlessMessageRow;
            }
            if (cResult[13] === citation.message) {
              let tmp15;
              if (cResult[14] === obj6) {
                tmp15 = cResult[15];
              }
              if (cResult[16] === HeaderlessMessageRow) {
                if (cResult[17] === citation.messageId) {
                  if (cResult[18] === tmp8) {
                    let tmp17;
                    if (cResult[19] === tmp15) {
                      tmp17 = cResult[20];
                    }
                    return tmp17;
                  }
                }
              }
              const tmp20 = <HeaderlessMessageRow key={tmp14} message={tmp15} onPress={tmp8} lineClamp={onPressConversationCitation} />;
              cResult[16] = HeaderlessMessageRow;
              cResult[17] = citation.messageId;
              cResult[18] = tmp8;
              cResult[19] = tmp15;
              cResult[20] = tmp20;
              tmp17 = tmp20;
            }
            const parsed = obj6.parse(citation.message);
            cResult[13] = citation.message;
            cResult[14] = obj6;
            cResult[15] = parsed;
            tmp15 = parsed;
          }
        }
      }
    }
  }
  let closure_0 = numCitationsPresented(function*(arg0, value) {
    if (numCitationsPresented === 2) {
      numCitationsPresented = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        numCitationsPresented = 2;
        if (0 === citation) {
          if (arg0 === 1) {
            numCitationsPresented = 3;
            throw value;
          } else if (arg0 === 2) {
            numCitationsPresented = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            smartSearchQuery = tmp;
            const obj4 = { smartSearchQuery, citation, index, numCitationsPresented };
            const obj6 = citation(index[7]);
            const result = obj6.trackSmartSearchCitationOpened(obj4, citation(index[8]));
            if ("conversation" === citation.sourceType) {
              index = 1;
              citation = 2;
              numCitationsPresented = 1;
              const obj5 = { value: onPressConversationCitation(citation), done: false };
              return obj5;
            }
          }
        } else if (1 === tmp4) {
          index = 0;
        } else if (arg0 === 1) {
          numCitationsPresented = 3;
          throw value;
        } else if (arg0 === 2) {
          index = 0;
          numCitationsPresented = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          index = 0;
          numCitationsPresented = 3;
          const obj = { value: undefined, done: true };
          return obj;
        }
        onPressMessageItem(citation.channelId, citation.messageId);
        numCitationsPresented = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp12) {
        if (0 === index) {
          numCitationsPresented = 3;
          throw tmp12;
        } else {
          citation = 1;
        }
      }
    }
  });
  function t3() {
    return closure_0(...arguments);
  }
  cResult[4] = citation;
  cResult[5] = index;
  cResult[6] = numCitationsPresented;
  cResult[7] = onPressConversationCitation;
  cResult[8] = onPressMessageItem;
  cResult[9] = smartSearchQuery;
  cResult[10] = t3;
  tmp8 = t3;
}) : (function SmartSearchCitation(smartSearchQuery) {
  smartSearchQuery = smartSearchQuery.smartSearchQuery;
  let citation = smartSearchQuery.citation;
  let index = smartSearchQuery.index;
  const numCitationsPresented = smartSearchQuery.numCitationsPresented;
  const searchContext = smartSearchQuery.searchContext;
  const isChannelGroupStart = smartSearchQuery.isChannelGroupStart;
  let tmp = smartSearchQuery;
  let obj = smartSearchQuery(index[6]);
  const onPressMessageItem = obj.useOnPressMessageItem({ searchContext });
  let obj2 = smartSearchQuery(index[6]);
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
        return { value: "IconComponent", done: null };
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
            const obj6 = citation(index[7]);
            const result = obj6.trackSmartSearchCitationOpened(obj4, citation(index[8]));
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
        return { value: "IconComponent", done: null };
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
    let HeaderlessMessageRow = citation(tmp2[10]);
  } else {
    HeaderlessMessageRow = tmp(tmp2[10]).HeaderlessMessageRow;
  }
  return <HeaderlessMessageRow key={citation.messageId} message={memo.parse(citation.message)} onPress={callback} lineClamp={onPressConversationCitation} />;
});
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchCitation.tsx");

export const SmartSearchCitation = tmp2;
