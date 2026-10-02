// Module ID: 16505
// Function ID: 16506
// Name: SmartSearchRow
// Dependencies: [5, 32, 19, 17, 4826, 11739, 11740, 7307, 21, 4837, 588, 558, 576, 8176, 504, 16460, 16506, 11741, 16512, 16513, 16492, 16514, 16516, 2]

// Module 16505 (SmartSearchRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 588 */;
import SearchConstants from "SearchConstants" /* 7307 */;
import MessageSearchResultParserDefault from "MessageSearchResultParser" /* 16506 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore_mod from "AccessibilityStore" /* 4826 */;
import IntelligenceSearchStore from "IntelligenceSearchStore" /* 11739 */;
import IntelligenceSearchConstants from "IntelligenceSearchConstants" /* 11740 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c4, c5, citation, importDefault;

let COLLAPSED_FRAME_HEIGHT;
let c9;
let closure_12;
let obj2;
let obj3;
let unpackModuleId;
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
let AccessibilityStore = AccessibilityStore_mod;
({ MAX_PRESENTED_CITATIONS: c9, COLLAPSED_FRAME_HEIGHT } = IntelligenceSearchConstants);
let closure_10 = SearchConstants.SEARCH_MESSAGES_DEFAULT_LINE_CLAMP;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { collapsedFrame: { height: COLLAPSED_FRAME_HEIGHT }, content: obj2, divider: obj3 };
obj2 = { paddingBottom: nativeDefault.space.PX_40, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = { height: 1, marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_12, marginHorizontal: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_13 = createStyles(obj);
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function(arg0) {
  let closure_4;
  let closure_7;
  let entry;
  let first;
  let flashListContext;
  let guildId;
  let hasKeywordResults;
  let items2;
  let items3;
  let requestKey;
  let searchContext;
  let tmp11;
  let tmp12;
  let tmp5;
  let tmp8;
  const tmp = first;
  let obj = first(flashListContext[12]);
  const cResult = obj.c(53);
  ({ searchContext, guildId, requestKey, hasKeywordResults, entry } = arg0);
  const tmp4 = closure_13();
  if (cResult[0] !== requestKey) {
    const items = [requestKey];
    cResult[0] = requestKey;
    cResult[1] = items;
    tmp5 = items;
  } else {
    tmp5 = cResult[1];
  }
  const tmpResult = tmp(flashListContext[13]);
  [first, tmp8] = tmpResult.useRecyclingState(false, tmp5);
  importDefault = tmp8;
  const tmpResult5 = tmp(flashListContext[13]);
  flashListContext = tmpResult5.useFlashListContext();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [AccessibilityStore];
    class R {
      constructor() {
        return closure_7.useReducedMotion;
      }
    }
    cResult[2] = items1;
    cResult[3] = R;
    tmp12 = R;
    tmp11 = items1;
  } else {
    tmp11 = cResult[2];
    tmp12 = cResult[3];
  }
  const tmpResult6 = tmp(flashListContext[14]);
  const stateFromStores = tmpResult6.useStateFromStores(tmp11, tmp12);
  if (cResult[4] === flashListContext) {
    if (cResult[5] === first) {
      if (cResult[6] === tmp8) {
        let tmp15;
        let tmp19;
        if (cResult[7] === stateFromStores) {
          tmp15 = cResult[8];
        }
        if (cResult[9] !== searchContext) {
          let obj2 = { searchContext };
          class R {
            constructor() {
              return closure_7.useReducedMotion;
            }
          }
          cResult[10] = obj2;
        }
        tmp(flashListContext[15]);
        class R {
          constructor() {
            return closure_7.useReducedMotion;
          }
        }
        _slicedToArray = tmp18;
        if (cResult[11] !== searchContext) {
          let obj3 = { searchContext };
          class R {
            constructor() {
              return closure_7.useReducedMotion;
            }
          }
          cResult[12] = obj3;
          tmp19 = obj3;
        } else {
          tmp19 = cResult[12];
        }
        const tmpResult8 = tmp(flashListContext[15]);
        const onPressConversationCitation = tmpResult8.useOnPressConversationCitation(tmp19);
        if (cResult[13] === onPressConversationCitation) {
          let tmp21;
          let tmp26;
          let tmp28;
          if (cResult[14] === tmp18) {
            tmp21 = cResult[15];
          }
          let closure_6 = tmp21;
          const citations = entry.citations;
          class R {
            constructor() {
              return closure_7.useReducedMotion;
            }
          }
          if (hasKeywordResults) {
            if (cResult[16] !== citations) {
              const substr = citations.slice(0, closure_9);
              class R {
                constructor() {
                  return closure_7.useReducedMotion;
                }
              }
              cResult[16] = citations;
              cResult[17] = substr;
            }
          }
          if (cResult[18] !== arr4) {
            const mapped = arr4.map((citation, index) => {
              const obj = { citation, isChannelGroupStart: tmp };
              return obj;
            });
            class R {
              constructor() {
                return closure_7.useReducedMotion;
              }
            }
            cResult[19] = mapped;
            tmp26 = mapped;
          } else {
            tmp26 = cResult[19];
          }
          if (cResult[20] !== entry.queryText) {
            const self = this;
            class R {
              constructor() {
                return closure_7.useReducedMotion;
              }
            }
            const tmp31 = new require("MessageSearchResultParser")(entry.queryText, lineClamp);
            cResult[20] = entry.queryText;
            cResult[21] = tmp31;
            tmp28 = tmp31;
          } else {
            tmp28 = cResult[21];
          }
          AccessibilityStore = tmp28;
          if (entry.status !== tmp(flashListContext[17]).IntelligenceSearchStatus.LOADING) {
            if (entry.status !== tmp(flashListContext[17]).IntelligenceSearchStatus.LOADED) {
              return null;
            }
          }
          const status = entry.status;
          let collapsedFrame = null;
          const LOADING = tmp(tmp2[17]).IntelligenceSearchStatus.LOADING;
          if (hasKeywordResults && !first) {
            collapsedFrame = tmp4.collapsedFrame;
          }
          if (cResult[22] === tmp4.content) {
            let tmp34;
            if (cResult[23] === collapsedFrame) {
              tmp34 = cResult[24];
            }
            if (cResult[25] === arr4) {
              if (cResult[26] === entry.answerText) {
                if (cResult[27] === tmp26) {
                  if (cResult[28] === guildId) {
                    if (cResult[29] === tmp21) {
                      if (cResult[30] === (hasKeywordResults && !first)) {
                        if (cResult[31] === status === LOADING) {
                          let tmp36;
                          let tmp39;
                          if (cResult[32] === tmp28) {
                            tmp36 = cResult[33];
                          }
                          if (cResult[34] === (hasKeywordResults && !first)) {
                            let tmp38;
                            if (cResult[35] === status === LOADING) {
                              tmp38 = cResult[36];
                            }
                            if (cResult[37] === tmp15) {
                              if (cResult[38] === hasKeywordResults) {
                                if (cResult[39] === first) {
                                  let tmp44;
                                  if (cResult[40] === status === LOADING) {
                                    tmp44 = cResult[41];
                                  }
                                  if (cResult[42] === tmp34) {
                                    if (cResult[43] === tmp36) {
                                      if (cResult[44] === tmp38) {
                                        let tmp46;
                                        if (cResult[45] === tmp44) {
                                          tmp46 = cResult[46];
                                        }
                                        if (cResult[47] === hasKeywordResults) {
                                          let tmp49;
                                          if (cResult[48] === tmp4.divider) {
                                            tmp49 = cResult[49];
                                          }
                                          if (cResult[50] === tmp46) {
                                            let tmp51;
                                            if (cResult[51] === tmp49) {
                                              tmp51 = cResult[52];
                                            }
                                            return tmp51;
                                          }
                                          class R {
                                            constructor() {
                                              return closure_7.useReducedMotion;
                                            }
                                          }
                                          let obj4 = { children: items2 };
                                          items2 = [tmp46, tmp49];
                                          const tmp53 = closure_12(closure_6, obj4);
                                          cResult[50] = tmp46;
                                          cResult[51] = tmp49;
                                          cResult[52] = tmp53;
                                          tmp51 = tmp53;
                                        }
                                        class R {
                                          constructor() {
                                            return closure_7.useReducedMotion;
                                          }
                                        }
                                        cResult[47] = hasKeywordResults;
                                        cResult[48] = tmp4.divider;
                                        cResult[49] = hasKeywordResults;
                                        tmp49 = tmp50;
                                      }
                                    }
                                  }
                                  class R {
                                    constructor() {
                                      return closure_7.useReducedMotion;
                                    }
                                  }
                                  let obj5 = { style: tmp34, children: items3 };
                                  items3 = [tmp36, tmp38, tmp44];
                                  const tmp48 = closure_12(closure_6, obj5);
                                  cResult[42] = tmp34;
                                  cResult[43] = tmp36;
                                  cResult[44] = tmp38;
                                  cResult[45] = tmp44;
                                  cResult[46] = tmp48;
                                  tmp46 = tmp48;
                                }
                              }
                            }
                            class R {
                              constructor() {
                                return closure_7.useReducedMotion;
                              }
                            }
                            cResult[37] = tmp15;
                            cResult[38] = hasKeywordResults;
                            cResult[39] = first;
                            cResult[40] = status === LOADING;
                            cResult[41] = hasKeywordResults && status !== LOADING;
                            tmp44 = tmp45;
                          }
                          if (hasKeywordResults && !first) {
                            tmp39 = closure_11(require("SmartSearchBottomFade"), { height: 72 });
                          } else {
                            tmp39 = null;
                            if (status === LOADING) {
                              tmp39 = closure_11(require("SmartSearchBottomFade"), { height: 120 });
                            }
                          }
                          class R {
                            constructor() {
                              return closure_7.useReducedMotion;
                            }
                          }
                          cResult[34] = hasKeywordResults && !first;
                          cResult[35] = status === LOADING;
                          cResult[36] = tmp39;
                          tmp38 = tmp39;
                        }
                      }
                    }
                  }
                }
              }
            }
            class R {
              constructor() {
                return closure_7.useReducedMotion;
              }
            }
            cResult[25] = arr4;
            cResult[26] = entry.answerText;
            cResult[27] = tmp26;
            cResult[28] = guildId;
            cResult[29] = tmp21;
            cResult[30] = hasKeywordResults && !first;
            cResult[31] = status === LOADING;
            cResult[32] = tmp28;
            cResult[33] = tmp37;
            tmp36 = tmp37;
          }
          const items4 = [collapsedFrame, tmp4.content];
          cResult[22] = tmp4.content;
          cResult[23] = collapsedFrame;
          cResult[24] = items4;
          tmp34 = items4;
        }
        let closure_0 = stateFromStores(function*(arg0, value) {
          let v1;
          let v3;
          closure_0 = arg0;
          if (c5 === 2) {
            c5 = 3;
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
            let c3;
            try {
              c5 = 2;
              if (0 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  let closure_2 = tmp;
                  closure_1 = tmp4;
                  if ("conversation" === closure_0.sourceType) {
                    c3 = 1;
                    c4 = 2;
                    c5 = 1;
                    const obj4 = { value: c5(tmp17), done: false };
                    return obj4;
                  }
                }
              } else if (1 === c4) {
                c3 = 0;
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                c3 = 0;
                c5 = 3;
                const obj = { value: undefined, done: true };
                return obj;
              }
              c4(closure_0.channelId, closure_0.messageId);
              c5 = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp12) {
              if (0 === c3) {
                c5 = 3;
                throw tmp12;
              } else {
                c4 = 1;
              }
            }
          }
        });
        const fn = function() {
          return closure_0(...arguments);
        };
        cResult[13] = onPressConversationCitation;
        cResult[14] = tmp18;
        cResult[15] = fn;
        tmp21 = fn;
      }
    }
  }
  class F {
    constructor() {
      closure_1(!first);
      if (first) {
        const obj = flashListContext;
        if (flashListContext != null) {
          const ref = obj.getRef();
          if (ref != null) {
            const obj2 = { animated: !stateFromStores };
            ref.scrollToTop(obj2);
          }
        }
      }
    }
  }
  cResult[4] = flashListContext;
  cResult[5] = first;
  cResult[6] = tmp8;
  cResult[7] = stateFromStores;
  cResult[8] = F;
  tmp15 = F;
}) : ((entry) => {
  let closure_3;
  let guildId;
  let hasKeywordResults;
  let items7;
  let items8;
  let items9;
  let requestKey;
  let searchContext;
  let tmp14Result;
  let tmp21;
  let tmp22;
  let tmp22Result;
  ({ searchContext, hasKeywordResults } = entry);
  entry = entry.entry;
  let isExpanded;
  let flashListContext;
  let onPressConversationCitation;
  ({ guildId, requestKey } = entry);
  let tmp = closure_13();
  const tmp3 = isExpanded;
  let obj = hasKeywordResults(isExpanded[13]);
  const items = [requestKey];
  const tmp4 = flashListContext(obj.useRecyclingState(false, items), 2);
  isExpanded = tmp4[0];
  _asyncToGenerator = tmp6;
  const tmp2Result = hasKeywordResults(tmp3[13]);
  flashListContext = tmp2Result.useFlashListContext();
  const items1 = [onPressConversationCitation];
  const tmp2Result4 = hasKeywordResults(tmp3[14]);
  const stateFromStores = tmp2Result4.useStateFromStores(items1, () => onPressConversationCitation.useReducedMotion);
  const items2 = [flashListContext, isExpanded, tmp6, stateFromStores];
  const callback = stateFromStores.useCallback(() => {
    closure_3(!first);
    if (first) {
      const obj = flashListContext;
      if (flashListContext != null) {
        const ref = obj.getRef();
        if (ref != null) {
          const obj2 = { animated: !stateFromStores };
          ref.scrollToTop(obj2);
        }
      }
    }
  }, items2);
  const tmp2Result5 = hasKeywordResults(tmp3[15]);
  const onPressMessageItem = tmp2Result5.useOnPressMessageItem({ searchContext });
  const tmp2Result6 = hasKeywordResults(tmp3[15]);
  onPressConversationCitation = tmp2Result6.useOnPressConversationCitation({ searchContext });
  const useCallback = stateFromStores.useCallback;
  let closure_0 = _asyncToGenerator(async (arg0, value) => {
    closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
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
      let c3;
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            if ("conversation" === closure_0.sourceType) {
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj4 = { value: onPressConversationCitation(tmp17), done: false };
              return obj4;
            }
          }
        } else if (1 === c4) {
          c3 = 0;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          c3 = 0;
          c5 = 3;
          const obj = { value: undefined, done: true };
          return obj;
        }
        onPressMessageItem(closure_0.channelId, closure_0.messageId);
        c5 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp12) {
        if (0 === c3) {
          c5 = 3;
          throw tmp12;
        } else {
          c4 = 1;
        }
      }
    }
  });
  const items3 = [onPressMessageItem, onPressConversationCitation];
  let closure_8 = useCallback(function() {
    return closure_0(...arguments);
  }, items3);
  const items4 = [entry.citations, hasKeywordResults];
  const memo = stateFromStores.useMemo(() => {
    const citations = entry.citations;
    let substr = citations;
    if (hasKeywordResults) {
      substr = citations.slice(0, React4);
    }
    return substr;
  }, items4);
  const items5 = [memo];
  const memo1 = stateFromStores.useMemo(() => {
    let closure_0 = memo;
    return memo.map((citation, index) => {
      const obj = { citation, isChannelGroupStart: tmp };
      return obj;
    });
  }, items5);
  const items6 = [entry.queryText];
  const lineClamp = stateFromStores.useMemo(() => {
    const tmp = new MessageSearchResultParserDefault(entry.queryText, closure_10);
    return tmp;
  }, items6);
  if (entry.status !== hasKeywordResults(tmp3[17]).IntelligenceSearchStatus.LOADING) {
    if (entry.status !== hasKeywordResults(tmp3[17]).IntelligenceSearchStatus.LOADED) {
      return null;
    }
  }
  const status = entry.status;
  let collapsedFrame = null;
  const LOADING = tmp2(tmp3[17]).IntelligenceSearchStatus.LOADING;
  if (hasKeywordResults && !isExpanded) {
    collapsedFrame = tmp.collapsedFrame;
  }
  const tmp17 = status === LOADING;
  let obj2 = { style: items7, children: items9 };
  items7 = [collapsedFrame, tmp.content];
  if (tmp17) {
    let obj3 = { isCollapsed: tmp7 };
    tmp14Result = tmp18(tmp19(tmp3[18]), obj3);
    tmp21 = tmp19;
    tmp22 = tmp18;
  } else {
    let obj4 = { children: items8 };
    let obj5 = { answerText: entry.answerText, citations: memo, guildId };
    items8 = [
      closure_11(entry(tmp3[19]), obj5),
      memo1.map((citation) => {
          let HeaderlessMessageRow;
          citation = citation.citation;
          if (citation.isChannelGroupStart) {
            HeaderlessMessageRow = entry(first[20]);
          } else {
            HeaderlessMessageRow = hasKeywordResults(first[20]).HeaderlessMessageRow;
          }
          const obj = {
            message: lineClamp.parse(citation.message),
            onPress() {
              return closure_8(citation);
            },
            lineClamp
          };
          return closure_1_11(HeaderlessMessageRow, obj, citation.messageId);
        })
    ];
    tmp14Result = tmp14(tmp15, obj4);
    tmp21 = tmp19;
    tmp22 = tmp18;
  }
  items9 = [tmp14Result, , ];
  if (hasKeywordResults && !isExpanded) {
    tmp22Result = tmp22(tmp21(tmp3[21]), { height: 72 });
  } else {
    tmp22Result = null;
    if (tmp17) {
      tmp22Result = tmp22(tmp21(tmp3[21]), { height: 120 });
    }
  }
  items9[1] = tmp22Result;
  let tmp22Result2 = hasKeywordResults && !tmp17;
  if (tmp22Result2) {
    const obj6 = { isExpanded, onPress: callback };
    tmp22Result2 = tmp22(tmp21(tmp3[22]), obj6);
  }
  items9[2] = tmp22Result2;
  const children = [tmp14(tmp15, obj2), ];
  if (hasKeywordResults) {
    const obj7 = { style: tmp.divider };
    hasKeywordResults = tmp22(tmp15, obj7);
  }
  children[1] = hasKeywordResults;
  return closure_12(onPressMessageItem, { children });
}));
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let first;
  const obj = guildId(576);
  const cResult = obj.c(8);
  const tmp = guildId;
  guildId = guildId.guildId;
  const requestKey = guildId.requestKey;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [IntelligenceSearchStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guildId) {
    let tmp6;
    let tmp7;
    if (cResult[2] === requestKey) {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
    }
    const tmpResult = tmp(504);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
    let tmp9 = null;
    if (null != stateFromStores) {
      if (cResult[5] === stateFromStores) {
        let tmp10;
        if (cResult[6] === guildId) {
          tmp10 = cResult[7];
        }
        tmp9 = tmp10;
      }
      const obj2 = { entry: stateFromStores };
      const merged = Object.assign(guildId);
      const tmp16 = closure_11(closure_14, obj2);
      cResult[5] = stateFromStores;
      cResult[6] = guildId;
      cResult[7] = tmp16;
      tmp10 = tmp16;
    }
    return tmp9;
  }
  const fn = function s() {
    return IntelligenceSearchStore.getAnswer(guildId, requestKey);
  };
  const items1 = [guildId, requestKey];
  cResult[1] = guildId;
  cResult[2] = requestKey;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp7 = items1;
  tmp6 = fn;
}) : ((guildId) => {
  guildId = guildId.guildId;
  const requestKey = guildId.requestKey;
  const items = [IntelligenceSearchStore];
  const items1 = [guildId, requestKey];
  const obj = guildId(504);
  const stateFromStores = obj.useStateFromStores(items, () => IntelligenceSearchStore.getAnswer(guildId, requestKey), items1);
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { entry: stateFromStores };
    const merged = Object.assign(guildId);
    tmp2 = closure_11(closure_14, obj2);
  }
  return tmp2;
});
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchRow.tsx");

export default tmp6;
