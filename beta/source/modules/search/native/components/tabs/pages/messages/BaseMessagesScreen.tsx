// Module ID: 17174
// Function ID: 17175
// Name: BaseMessagesScreen
// Dependencies: [19, 7525, 12487, 8126, 21, 12506, 558, 568, 12488, 504, 17162, 17175, 12486, 17176, 17177, 17112, 17124, 2]
// Exports: trackMessageItemPress

// Module 17174 (BaseMessagesScreen)
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 12486 */;
import SearchUtils from "SearchUtils" /* 12488 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 12506 */;
import SearchHistoricalIndexingHeaderDefault from "SearchHistoricalIndexingHeader" /* 17176 */;
import noop from "module_19" /* 19 */;
import SearchMessageStore from "SearchMessageStore" /* 7525 */;
import SearchQueryStore from "SearchQueryStore" /* 12487 */;

require = fn;
const constants = fn(8126).SearchResultContentEntityTypes;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/BaseMessagesScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((data) => {
  const cResult = data(tab[7]).c(44);
  data = data.data;
  const searchContext = data.searchContext;
  tab = data.tab;
  const isFocused = data.isFocused;
  ({ isFirstPageLoading, contentContainerStyle, ItemSeparatorComponent, numColumns } = data);
  if (!isFirstPageLoading) {
    isFirstPageLoading = data.isNextPageLoading;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [hasError, isFirstPageLoading];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === searchContext) {
    if (cResult[2] === tab) {
      let tmp7 = cResult[3];
    }
    const stateFromStoresObject = tmp(tmp2[9]).useStateFromStoresObject(first, tmp7);
    const documentsIndexed = stateFromStoresObject.documentsIndexed;
    if (cResult[4] === searchContext) {
      if (cResult[5] === tmp10) {
        if (cResult[6] === tab) {
          let tmp11 = cResult[7];
        }
        const messageSearchErrorScreen = tmp(tmp2[10]).useMessageSearchErrorScreen(tmp11);
        hasError = messageSearchErrorScreen.hasError;
        ({ errorText, isErrorToast } = messageSearchErrorScreen);
        const showErrorToast = messageSearchErrorScreen.showErrorToast;
        const tmpResult3 = tmp(tmp2[10]);
        const searchFetchPendingManager = tmp(tmp2[11]).useSearchFetchPendingManager(searchContext);
        if (cResult[8] === data.length) {
          if (cResult[9] === hasError) {
            if (cResult[10] === isFocused) {
              if (cResult[11] === isFirstPageLoading) {
                if (cResult[12] === searchContext) {
                  if (cResult[13] === searchFetchPendingManager) {
                    if (cResult[14] === tab) {
                      let tmp14 = cResult[15];
                    }
                    if (cResult[16] === isFocused) {
                      if (cResult[17] === isFirstPageLoading) {
                        if (cResult[18] === searchContext) {
                          if (cResult[19] === searchFetchPendingManager) {
                            class Q {
                              constructor() {
                                tmp = isFocused;
                                if (isFocused) {
                                  tmp2 = isNextPageLoading;
                                  tmp = !isNextPageLoading;
                                }
                                if (tmp) {
                                  tmp3 = closure_8;
                                  tmp4 = searchContext;
                                  tmp5 = tab;
                                  flushResult = closure_8.flush(searchContext, tab);
                                }
                                return;
                              }
                            }
                            if (cResult[23] === isErrorToast) {
                              if (cResult[24] === isFocused) {
                                if (cResult[25] === isFirstPageLoading) {
                                  if (cResult[26] === showErrorToast) {
                                    let tmp17 = cResult[27];
                                    let tmp18 = cResult[28];
                                  }
                                  const effect = obj6.useEffect(tmp17, tmp18);
                                  class Q {
                                    constructor() {
                                      tmp = isFocused;
                                      if (isFocused) {
                                        tmp2 = isNextPageLoading;
                                        tmp = !isNextPageLoading;
                                      }
                                      if (tmp) {
                                        tmp3 = closure_8;
                                        tmp4 = searchContext;
                                        tmp5 = tab;
                                        flushResult = closure_8.flush(searchContext, tab);
                                      }
                                      return;
                                    }
                                  }
                                  class B {
                                    constructor() {
                                      tmp = isErrorToast;
                                      if (isErrorToast) {
                                        tmp2 = isNextPageLoading;
                                        tmp = !isNextPageLoading;
                                      }
                                      if (tmp) {
                                        tmp = isFocused;
                                      }
                                      if (tmp) {
                                        tmp3 = showErrorToast;
                                        tmp4 = showErrorToast();
                                      }
                                      return;
                                    }
                                  }
                                  if (tmp9) {
                                    if (cResult[33] !== searchContext) {
                                      class Q {
                                        constructor() {
                                          tmp = isFocused;
                                          if (isFocused) {
                                            tmp2 = isNextPageLoading;
                                            tmp = !isNextPageLoading;
                                          }
                                          if (tmp) {
                                            tmp3 = closure_8;
                                            tmp4 = searchContext;
                                            tmp5 = tab;
                                            flushResult = closure_8.flush(searchContext, tab);
                                          }
                                          return;
                                        }
                                      }
                                      tmp34[0] = searchContext;
                                      class B {
                                        constructor() {
                                          tmp = isErrorToast;
                                          if (isErrorToast) {
                                            tmp2 = isNextPageLoading;
                                            tmp = !isNextPageLoading;
                                          }
                                          if (tmp) {
                                            tmp = isFocused;
                                          }
                                          if (tmp) {
                                            tmp3 = showErrorToast;
                                            tmp4 = showErrorToast();
                                          }
                                          return;
                                        }
                                      }
                                      cResult[33] = searchContext;
                                      cResult[34] = tmp2;
                                    }
                                  } else {
                                    if (messageSearchErrorScreen.isErrorFullscreen) {
                                      if (!isFirstPageLoading) {
                                        if (cResult[35] !== errorText) {
                                          class Q {
                                            constructor() {
                                              tmp = isFocused;
                                              if (isFocused) {
                                                tmp2 = isNextPageLoading;
                                                tmp = !isNextPageLoading;
                                              }
                                              if (tmp) {
                                                tmp3 = closure_8;
                                                tmp4 = searchContext;
                                                tmp5 = tab;
                                                flushResult = closure_8.flush(searchContext, tab);
                                              }
                                              return;
                                            }
                                          }
                                          tmp24[0] = errorText;
                                          class B {
                                            constructor() {
                                              tmp = isErrorToast;
                                              if (isErrorToast) {
                                                tmp2 = isNextPageLoading;
                                                tmp = !isNextPageLoading;
                                              }
                                              if (tmp) {
                                                tmp = isFocused;
                                              }
                                              if (tmp) {
                                                tmp3 = showErrorToast;
                                                tmp4 = showErrorToast();
                                              }
                                              return;
                                            }
                                          }
                                          cResult[35] = errorText;
                                          cResult[36] = tmp25;
                                          let tmp21 = tmp25;
                                        } else {
                                          tmp21 = cResult[36];
                                        }
                                        return tmp21;
                                      }
                                    }
                                    if (cResult[37] === ItemSeparatorComponent) {
                                      if (cResult[38] === tmp20) {
                                        if (cResult[39] === contentContainerStyle) {
                                          if (cResult[40] === data) {
                                            if (cResult[41] === tmp14) {
                                            }
                                          }
                                        }
                                      }
                                    }
                                    class Q {
                                      constructor() {
                                        tmp = isFocused;
                                        if (isFocused) {
                                          tmp2 = isNextPageLoading;
                                          tmp = !isNextPageLoading;
                                        }
                                        if (tmp) {
                                          tmp3 = closure_8;
                                          tmp4 = searchContext;
                                          tmp5 = tab;
                                          flushResult = closure_8.flush(searchContext, tab);
                                        }
                                        return;
                                      }
                                    }
                                    class B {
                                      constructor() {
                                        tmp = isErrorToast;
                                        if (isErrorToast) {
                                          tmp2 = isNextPageLoading;
                                          tmp = !isNextPageLoading;
                                        }
                                        if (tmp) {
                                          tmp = isFocused;
                                        }
                                        if (tmp) {
                                          tmp3 = showErrorToast;
                                          tmp4 = showErrorToast();
                                        }
                                        return;
                                      }
                                    }
                                    tmp28[0] = contentContainerStyle;
                                    tmp28[1] = data;
                                    tmp28[2] = tmp14;
                                    tmp28[3] = tmp20;
                                    tmp28[4] = ItemSeparatorComponent;
                                    tmp28[5] = numColumns;
                                    const tmp29 = showErrorToast(searchContext(tmp2[16]), tmp28);
                                    cResult[37] = ItemSeparatorComponent;
                                    class R {
                                      constructor() {
                                        if (0 !== data.length) {
                                          tmp17 = isNextPageLoading;
                                          if (isNextPageLoading) {
                                            tmp14 = closure_8;
                                            tmp15 = tab;
                                            addResult = closure_8.add(tab);
                                          } else {
                                            tmp = isFocused;
                                            if (isFocused) {
                                              tmp5 = hasError;
                                              if (hasError) {
                                                tmp11 = closure_8;
                                                tmp12 = tab;
                                                addResult1 = closure_8.add(tab);
                                              } else {
                                                tmp6 = closure_1;
                                                tmp7 = closure_2;
                                                obj = closure_1(closure_2[12]);
                                                tmp8 = searchContext;
                                                tmp9 = tab;
                                                nextMessages = obj.fetchNextMessages(searchContext, tab);
                                              }
                                            } else {
                                              tmp2 = closure_8;
                                              tmp3 = tab;
                                              addResult2 = closure_8.add(tab);
                                            }
                                          }
                                        }
                                        return;
                                      }
                                    }
                                    cResult[39] = contentContainerStyle;
                                    cResult[40] = data;
                                    cResult[41] = tmp14;
                                    cResult[42] = numColumns;
                                    cResult[43] = tmp29;
                                  }
                                }
                              }
                            }
                            class B {
                              constructor() {
                                tmp = isErrorToast;
                                if (isErrorToast) {
                                  tmp2 = isNextPageLoading;
                                  tmp = !isNextPageLoading;
                                }
                                if (tmp) {
                                  tmp = isFocused;
                                }
                                if (tmp) {
                                  tmp3 = showErrorToast;
                                  tmp4 = showErrorToast();
                                }
                                return;
                              }
                            }
                            const items1 = [isErrorToast, isFirstPageLoading, isFocused, showErrorToast];
                            cResult[23] = isErrorToast;
                            cResult[24] = isFocused;
                            class R {
                              constructor() {
                                if (0 !== data.length) {
                                  tmp17 = isNextPageLoading;
                                  if (isNextPageLoading) {
                                    tmp14 = closure_8;
                                    tmp15 = tab;
                                    addResult = closure_8.add(tab);
                                  } else {
                                    tmp = isFocused;
                                    if (isFocused) {
                                      tmp5 = hasError;
                                      if (hasError) {
                                        tmp11 = closure_8;
                                        tmp12 = tab;
                                        addResult1 = closure_8.add(tab);
                                      } else {
                                        tmp6 = closure_1;
                                        tmp7 = closure_2;
                                        obj = closure_1(closure_2[12]);
                                        tmp8 = searchContext;
                                        tmp9 = tab;
                                        nextMessages = obj.fetchNextMessages(searchContext, tab);
                                      }
                                    } else {
                                      tmp2 = closure_8;
                                      tmp3 = tab;
                                      addResult2 = closure_8.add(tab);
                                    }
                                  }
                                }
                                return;
                              }
                            }
                            cResult[26] = showErrorToast;
                            cResult[27] = B;
                            cResult[28] = items1;
                            tmp18 = items1;
                            tmp17 = B;
                            obj6 = isFocused;
                          }
                        }
                      }
                    }
                    class Q {
                      constructor() {
                        tmp = isFocused;
                        if (isFocused) {
                          tmp2 = isNextPageLoading;
                          tmp = !isNextPageLoading;
                        }
                        if (tmp) {
                          tmp3 = closure_8;
                          tmp4 = searchContext;
                          tmp5 = tab;
                          flushResult = closure_8.flush(searchContext, tab);
                        }
                        return;
                      }
                    }
                    const items2 = [, isFirstPageLoading, searchContext, searchFetchPendingManager, tab];
                    cResult[16] = isFocused;
                    cResult[17] = isFirstPageLoading;
                    cResult[18] = searchContext;
                    class R {
                      constructor() {
                        if (0 !== data.length) {
                          tmp17 = isNextPageLoading;
                          if (isNextPageLoading) {
                            tmp14 = closure_8;
                            tmp15 = tab;
                            addResult = closure_8.add(tab);
                          } else {
                            tmp = isFocused;
                            if (isFocused) {
                              tmp5 = hasError;
                              if (hasError) {
                                tmp11 = closure_8;
                                tmp12 = tab;
                                addResult1 = closure_8.add(tab);
                              } else {
                                tmp6 = closure_1;
                                tmp7 = closure_2;
                                obj = closure_1(closure_2[12]);
                                tmp8 = searchContext;
                                tmp9 = tab;
                                nextMessages = obj.fetchNextMessages(searchContext, tab);
                              }
                            } else {
                              tmp2 = closure_8;
                              tmp3 = tab;
                              addResult2 = closure_8.add(tab);
                            }
                          }
                        }
                        return;
                      }
                    }
                    cResult[19] = searchFetchPendingManager;
                    cResult[20] = tab;
                    cResult[21] = Q;
                    cResult[22] = items2;
                  }
                }
              }
            }
          }
        }
        class R {
          constructor() {
            if (0 !== data.length) {
              tmp17 = isNextPageLoading;
              if (isNextPageLoading) {
                tmp14 = closure_8;
                tmp15 = tab;
                addResult = closure_8.add(tab);
              } else {
                tmp = isFocused;
                if (isFocused) {
                  tmp5 = hasError;
                  if (hasError) {
                    tmp11 = closure_8;
                    tmp12 = tab;
                    addResult1 = closure_8.add(tab);
                  } else {
                    tmp6 = closure_1;
                    tmp7 = closure_2;
                    obj = closure_1(closure_2[12]);
                    tmp8 = searchContext;
                    tmp9 = tab;
                    nextMessages = obj.fetchNextMessages(searchContext, tab);
                  }
                } else {
                  tmp2 = closure_8;
                  tmp3 = tab;
                  addResult2 = closure_8.add(tab);
                }
              }
            }
            return;
          }
        }
        cResult[8] = data.length;
        cResult[9] = hasError;
        cResult[10] = isFocused;
        cResult[11] = isFirstPageLoading;
        cResult[12] = searchContext;
        cResult[13] = searchFetchPendingManager;
        cResult[14] = tab;
        cResult[15] = R;
        tmp14 = R;
        const tmpResult4 = tmp(tmp2[11]);
      }
    }
    const obj2 = { searchContext, tab, hasListItems: data.length > 0 };
    cResult[4] = searchContext;
    cResult[5] = data.length > 0;
    cResult[6] = tab;
    cResult[7] = obj2;
    tmp11 = obj2;
    const tmpResult = tmp(tmp2[9]);
  }
  const fn = function l() {
    const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(searchContext);
    const searchTabFetchId = SearchUtils.getSearchTabFetchId(searchContext, tab, searchResultsQuery);
    return { isIndexing: SearchMessageStore.getIsIndexing(searchTabFetchId), isHistoricalIndexing: SearchMessageStore.getIsHistoricalIndexing(searchTabFetchId), documentsIndexed: SearchMessageStore.getDocumentsIndexed(searchTabFetchId) };
  };
  cResult[1] = searchContext;
  cResult[2] = tab;
  cResult[3] = fn;
  tmp7 = fn;
}) : ((data) => {
  data = data.data;
  const searchContext = data.searchContext;
  const tab = data.tab;
  const isFocused = data.isFocused;
  let isNextPageLoading;
  let isHistoricalIndexing;
  let documentsIndexed;
  let hasError;
  let isErrorToast;
  let showErrorToast;
  let searchFetchPendingManager;
  ({ contentContainerStyle, ItemSeparatorComponent, numColumns } = data);
  if (!isNextPageLoading) {
    isNextPageLoading = data.isNextPageLoading;
  }
  const items = [isHistoricalIndexing, isNextPageLoading];
  const stateFromStoresObject = data(tab[9]).useStateFromStoresObject(items, () => {
    const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(searchContext);
    const searchTabFetchId = SearchUtils.getSearchTabFetchId(searchContext, tab, searchResultsQuery);
    return { isIndexing: SearchMessageStore.getIsIndexing(searchTabFetchId), isHistoricalIndexing: SearchMessageStore.getIsHistoricalIndexing(searchTabFetchId), documentsIndexed: SearchMessageStore.getDocumentsIndexed(searchTabFetchId) };
  });
  isHistoricalIndexing = stateFromStoresObject.isHistoricalIndexing;
  documentsIndexed = stateFromStoresObject.documentsIndexed;
  let obj = data(tab[9]);
  const messageSearchErrorScreen = data(tab[10]).useMessageSearchErrorScreen({ searchContext, tab, hasListItems: data.length > 0 });
  hasError = messageSearchErrorScreen.hasError;
  isErrorToast = messageSearchErrorScreen.isErrorToast;
  showErrorToast = messageSearchErrorScreen.showErrorToast;
  ({ errorText, isErrorFullscreen } = messageSearchErrorScreen);
  const obj2 = data(tab[10]);
  const obj3 = { searchContext, tab, hasListItems: data.length > 0 };
  searchFetchPendingManager = data(tab[11]).useSearchFetchPendingManager(searchContext);
  const items1 = [data.length, isNextPageLoading, isFocused, hasError, searchContext, tab, searchFetchPendingManager];
  const items2 = [isFocused, isNextPageLoading, searchContext, searchFetchPendingManager, tab];
  const callback = isFocused.useCallback(() => {
    if (0 !== data.length) {
      if (isNextPageLoading) {
        searchFetchPendingManager.add(tab);
      } else if (isFocused) {
        if (hasError) {
          searchFetchPendingManager.add(tab);
        } else {
          const nextMessages = SearchPlatformUtilsDefault.fetchNextMessages(searchContext, tab);
        }
      } else {
        searchFetchPendingManager.add(tab);
      }
    }
  }, items1);
  const effect = isFocused.useEffect(() => {
    let tmp = isFocused;
    if (isFocused) {
      tmp = !isNextPageLoading;
    }
    if (tmp) {
      searchFetchPendingManager.flush(searchContext, tab);
    }
  }, items2);
  const items3 = [isErrorToast, isNextPageLoading, isFocused, showErrorToast];
  const effect1 = isFocused.useEffect(() => {
    let tmp = isErrorToast;
    if (isErrorToast) {
      tmp = !isNextPageLoading;
    }
    if (tmp) {
      tmp = isFocused;
    }
    if (tmp) {
      showErrorToast();
    }
  }, items3);
  const items4 = [documentsIndexed, isHistoricalIndexing, searchContext, tab];
  if (stateFromStoresObject.isIndexing) {
    const obj5 = { searchContext };
    let tmp11 = hasError(searchContext(tmp[14]), obj5);
  } else {
    if (isErrorFullscreen) {
      if (!isNextPageLoading) {
        const obj6 = { text: errorText };
        tmp11 = hasError(searchContext(tmp[15]), obj6);
      }
    }
    const obj7 = { contentContainerStyle, data, onEndReached: callback, ListHeaderComponent: tmp8, ItemSeparatorComponent, numColumns };
    tmp11 = hasError(searchContext(tmp[16]), obj7);
  }
  return tmp11;
});
export const trackMessageItemPress = function trackMessageItemPress(messageId) {
  messageId = messageId.messageId;
  ({ searchContext, channelId, index } = messageId);
  const message = SearchMessageStore.getMessage(messageId);
  const obj2 = { searchContext, channelId, messageId, userId: null, index: null, entityType: null };
  let id;
  if (message != null) {
    const author = message.author;
    if (author != null) {
      id = author.id;
    }
  }
  obj2.userId = id;
  obj2.index = index;
  obj2.entityType = constants.MESSAGE;
  const result = search_tracking_TrackingDefault.trackSearchResultClicked(obj2);
};
