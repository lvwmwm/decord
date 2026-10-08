// Module ID: 17156
// Function ID: 17157
// Name: SmartSearchRow
// Dependencies: [32, 19, 17, 5079, 12057, 21, 5090, 587, 558, 576, 8600, 17157, 12077, 12075, 12058, 17158, 12056, 17170, 17172, 504, 2]

// Module 17156 (SmartSearchRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 12075 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 12077 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5079 */;
import SmartSearchResultsStore from "SmartSearchResultsStore" /* 12057 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, obj1, scrollToTopResult, tmp3;

let c9;
let metroImportAll;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { collapsedFrame: { height: 217, overflow: "hidden" }, expandedContent: obj2, divider: obj3 };
obj2 = { paddingBottom: nativeDefault.space.PX_40 };
createStyles = createStyles.createStyles;
obj3 = { height: 1, marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_12, marginHorizontal: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_10 = createStyles(obj);
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function SmartSearchRowContainer(smartSearchQuery) {
  let closure_2;
  let entry;
  let flashListContext;
  let hasKeywordResults;
  let items1;
  let items2;
  let tmp5;
  let obj = smartSearchQuery(576);
  const cResult = obj.c(31);
  smartSearchQuery = smartSearchQuery.smartSearchQuery;
  ({ hasKeywordResults, entry } = smartSearchQuery);
  const tmp4 = closure_10();
  if (cResult[0] !== smartSearchQuery.requestKey) {
    const items = [smartSearchQuery.requestKey];
    cResult[0] = smartSearchQuery.requestKey;
    cResult[1] = items;
    tmp5 = items;
  } else {
    tmp5 = cResult[1];
  }
  const tmpResult = smartSearchQuery(8600);
  const tmp6 = flashListContext(tmpResult.useRecyclingState(hasKeywordResults, tmp5), 2);
  const isCollapsed = tmp6[0];
  dependencyMap = tmp8;
  const tmpResult4 = smartSearchQuery(17157);
  const smartSearchRowViewability = tmpResult4.useSmartSearchRowViewability();
  const tmpResult5 = smartSearchQuery(8600);
  flashListContext = tmpResult5.useFlashListContext();
  if (cResult[2] === flashListContext) {
    if (cResult[3] === isCollapsed) {
      if (cResult[4] === tmp6[1]) {
        let tmp11;
        if (cResult[5] === smartSearchQuery) {
          tmp11 = cResult[6];
        }
        if (entry.status === smartSearchQuery(12058).SmartSearchStatus.NOT_QUALIFIED) {
          return null;
        } else {
          const tmp12 = isCollapsed ? tmp4.collapsedFrame : tmp4.expandedContent;
          if (cResult[7] === entry) {
            if (cResult[8] === hasKeywordResults) {
              if (cResult[9] === isCollapsed) {
                let tmp13;
                let tmp16;
                if (cResult[10] === smartSearchQuery) {
                  tmp13 = cResult[11];
                }
                if (cResult[12] === entry.status) {
                  if (cResult[13] === isCollapsed) {
                    tmp16 = cResult[14];
                  }
                  if (cResult[15] === entry.status) {
                    if (cResult[16] === tmp11) {
                      if (cResult[17] === hasKeywordResults) {
                        let tmp23;
                        if (cResult[18] === isCollapsed) {
                          tmp23 = cResult[19];
                        }
                        if (cResult[20] === tmp12) {
                          if (cResult[21] === tmp13) {
                            if (cResult[22] === tmp16) {
                              let tmp27;
                              if (cResult[23] === tmp23) {
                                tmp27 = cResult[24];
                              }
                              if (cResult[25] === hasKeywordResults) {
                                let tmp31;
                                if (cResult[26] === tmp4.divider) {
                                  tmp31 = cResult[27];
                                }
                                if (cResult[28] === tmp27) {
                                  let tmp35;
                                  if (cResult[29] === tmp31) {
                                    tmp35 = cResult[30];
                                  }
                                  return tmp35;
                                }
                                let obj2 = { children: items1 };
                                items1 = [tmp27, tmp31];
                                const tmp38 = closure_9(View, obj2);
                                cResult[28] = tmp27;
                                cResult[29] = tmp31;
                                cResult[30] = tmp38;
                                tmp35 = tmp38;
                              }
                              let tmp32 = hasKeywordResults;
                              if (tmp32) {
                                let obj3 = { style: tmp4.divider };
                                tmp32 = closure_8(View, obj3);
                              }
                              cResult[25] = hasKeywordResults;
                              cResult[26] = tmp4.divider;
                              cResult[27] = tmp32;
                              tmp31 = tmp32;
                            }
                          }
                        }
                        let obj4 = { style: tmp12, children: items2 };
                        items2 = [tmp13, tmp16, tmp23];
                        const tmp30 = closure_9(View, obj4);
                        cResult[20] = tmp12;
                        cResult[21] = tmp13;
                        cResult[22] = tmp16;
                        cResult[23] = tmp23;
                        cResult[24] = tmp30;
                        tmp27 = tmp30;
                      }
                    }
                  }
                  let tmp24 = hasKeywordResults && entry.status === tmp(12058).SmartSearchStatus.LOADED;
                  if (tmp24) {
                    const obj5 = { isCollapsed, onPress: tmp11 };
                    tmp24 = closure_8(isCollapsed(17172), obj5);
                  }
                  cResult[15] = entry.status;
                  cResult[16] = tmp11;
                  cResult[17] = hasKeywordResults;
                  cResult[18] = isCollapsed;
                  cResult[19] = tmp24;
                  tmp23 = tmp24;
                }
                if (isCollapsed) {
                  let tmp19;
                  const tmpResult6 = smartSearchQuery(12056);
                  if (!tmpResult6.isSmartSearchEmptyOrErrored(entry.status)) {
                    tmp19 = closure_8(isCollapsed(17170), { height: 72 });
                  }
                  cResult[12] = entry.status;
                  cResult[13] = isCollapsed;
                  cResult[14] = tmp19;
                  tmp16 = tmp19;
                }
                let tmp20 = null;
                if (entry.status === smartSearchQuery(12058).SmartSearchStatus.LOADING) {
                  tmp20 = closure_8(isCollapsed(17170), { height: 120 });
                }
                tmp19 = tmp20;
              }
            }
          }
          const obj6 = { smartSearchQuery, hasKeywordResults, entry, isCollapsed };
          const tmp15 = closure_8(smartSearchQuery(17158).SmartSearchContent, obj6);
          cResult[7] = entry;
          cResult[8] = hasKeywordResults;
          cResult[9] = isCollapsed;
          cResult[10] = smartSearchQuery;
          cResult[11] = tmp15;
          tmp13 = tmp15;
        }
      }
    }
  }
  class E {
    constructor() {
      tmp = !closure_1;
      tmp2 = closure_2(tmp);
      if (!closure_1) {
        obj = closure_3;
        tmp3 = null;
        if (closure_3 != null) {
          ref = obj.getRef();
          if (ref != null) {
            obj1 = { animated: null };
            tmp4 = closure_6;
            obj1.animated = !closure_6.useReducedMotion;
            scrollToTopResult = ref.scrollToTop(obj1);
          }
        }
      }
      obj4 = closure_1(closure_2[12]);
      obj6 = { smartSearchQuery, isCollapsed: tmp };
      result = obj4.trackSmartSearchAnswerToggled(obj6, closure_1(closure_2[13]));
      return;
    }
  }
  cResult[2] = flashListContext;
  cResult[3] = isCollapsed;
  cResult[4] = tmp6[1];
  cResult[5] = smartSearchQuery;
  cResult[6] = E;
  tmp11 = E;
}) : (function SmartSearchRowContainer(smartSearchQuery) {
  let closure_2;
  let entry;
  let hasKeywordResults;
  smartSearchQuery = smartSearchQuery.smartSearchQuery;
  ({ hasKeywordResults, entry } = smartSearchQuery);
  let flashListContext;
  const tmp = closure_10();
  let obj = smartSearchQuery(8600);
  const items = [smartSearchQuery.requestKey];
  const tmp4 = flashListContext(obj.useRecyclingState(hasKeywordResults, items), 2);
  const isCollapsed = tmp4[0];
  dependencyMap = tmp6;
  let obj2 = smartSearchQuery(17157);
  const smartSearchRowViewability = obj2.useSmartSearchRowViewability();
  let obj3 = smartSearchQuery(8600);
  flashListContext = obj3.useFlashListContext();
  const items1 = [flashListContext, isCollapsed, tmp4[1], smartSearchQuery];
  const callback = react.useCallback(() => {
    closure_2(!first);
    if (!first) {
      const obj = flashListContext;
      if (flashListContext != null) {
        const ref = obj.getRef();
        if (ref != null) {
          const obj2 = { animated: !AccessibilityStore.useReducedMotion };
          ref.scrollToTop(obj2);
        }
      }
    }
    const obj3 = { smartSearchQuery, isCollapsed: !first };
    const obj4 = SmartSearchAnalyticsManagerDefault;
    const result = obj4.trackSmartSearchAnswerToggled(obj3, SearchSessionAnalyticsManagerDefault);
  }, items1);
  let tmp19Result = null;
  if (entry.status !== smartSearchQuery(12058).SmartSearchStatus.NOT_QUALIFIED) {
    let obj4 = { style: isCollapsed ? tmp.collapsedFrame : tmp.expandedContent, children: null };
    const obj5 = { smartSearchQuery, hasKeywordResults, entry, isCollapsed };
    const items2 = [closure_8(tmp2(17158).SmartSearchContent, obj5), , ];
    if (isCollapsed) {
      let tmp11Result;
      const tmp2Result = smartSearchQuery(12056);
      if (!tmp2Result.isSmartSearchEmptyOrErrored(entry.status)) {
        tmp11Result = tmp11(isCollapsed(17170), { height: 72 });
      }
      items2[1] = tmp11Result;
      let tmp11Result4 = hasKeywordResults && entry.status === tmp2(12058).SmartSearchStatus.LOADED;
      if (tmp11Result4) {
        const obj6 = { isCollapsed, onPress: callback };
        tmp11Result4 = tmp11(isCollapsed(17172), obj6);
      }
      items2[2] = tmp11Result4;
      obj4.children = items2;
      const items3 = [closure_9(View, obj4), ];
      let tmp11Result5 = hasKeywordResults;
      if (tmp11Result5) {
        const obj7 = { style: tmp.divider };
        tmp11Result5 = tmp11(tmp20, obj7);
      }
      const obj8 = { children: items3 };
      items3[1] = tmp11Result5;
      tmp19Result = tmp19(tmp20, obj8);
    }
    let tmp11Result6 = null;
    if (entry.status === smartSearchQuery(12058).SmartSearchStatus.LOADING) {
      tmp11Result6 = tmp11(isCollapsed(17170), { height: 120 });
    }
    tmp11Result = tmp11Result6;
  }
  return tmp19Result;
}));
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function SmartSearchRowConnected(smartSearchQuery) {
  let first;
  const obj = smartSearchQuery(576);
  const cResult = obj.c(9);
  const tmp = smartSearchQuery;
  smartSearchQuery = smartSearchQuery.smartSearchQuery;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SmartSearchResultsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === smartSearchQuery.guildId) {
    let tmp6;
    let tmp7;
    if (cResult[2] === smartSearchQuery.requestKey) {
      tmp6 = cResult[3];
    }
    if (cResult[4] !== smartSearchQuery) {
      const items1 = [smartSearchQuery];
      cResult[4] = smartSearchQuery;
      cResult[5] = items1;
      tmp7 = items1;
    } else {
      tmp7 = cResult[5];
    }
    const tmpResult = tmp(504);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
    let tmp9 = null;
    if (null != stateFromStores) {
      if (cResult[6] === stateFromStores) {
        let tmp10;
        if (cResult[7] === smartSearchQuery) {
          tmp10 = cResult[8];
        }
        tmp9 = tmp10;
      }
      const obj2 = { entry: stateFromStores };
      const merged = Object.assign(smartSearchQuery);
      const tmp16 = closure_8(closure_11, obj2);
      cResult[6] = stateFromStores;
      cResult[7] = smartSearchQuery;
      cResult[8] = tmp16;
      tmp10 = tmp16;
    }
    return tmp9;
  }
  const fn = function n() {
    return SmartSearchResultsStore.getAnswer(smartSearchQuery.guildId, smartSearchQuery.requestKey);
  };
  cResult[1] = smartSearchQuery.guildId;
  cResult[2] = smartSearchQuery.requestKey;
  cResult[3] = fn;
  tmp6 = fn;
}) : (function SmartSearchRowConnected(smartSearchQuery) {
  smartSearchQuery = smartSearchQuery.smartSearchQuery;
  const items = [SmartSearchResultsStore];
  const items1 = [smartSearchQuery];
  const obj = smartSearchQuery(504);
  const stateFromStores = obj.useStateFromStores(items, () => SmartSearchResultsStore.getAnswer(smartSearchQuery.guildId, smartSearchQuery.requestKey), items1);
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { entry: stateFromStores };
    const merged = Object.assign(smartSearchQuery);
    tmp2 = closure_8(closure_11, obj2);
  }
  return tmp2;
});
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchRow.tsx");

export default tmp5;
