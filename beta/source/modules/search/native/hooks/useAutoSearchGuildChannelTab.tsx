// Module ID: 16901
// Function ID: 16902
// Name: useAutoSearchGuildChannelTab
// Dependencies: [19, 11977, 558, 576, 11968, 11985, 12, 11966, 2]

// Module 16901 (useAutoSearchGuildChannelTab)
import _mod12 from "module_12" /* 12 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 11966 */;
import SearchUtils from "SearchUtils" /* 11968 */;
import SearchPlatformConstants from "SearchPlatformConstants" /* 11977 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 11985 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let closure_4 = SearchPlatformConstants.SEARCH_TEXT_INPUT_DEBOUNCE_TIME;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let closure_2;
  let tmp2;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("react");
  const cResult = obj.c(14);
  if (cResult[0] !== arg0) {
    const fn = function c(searchQueryString) {
      const obj = SearchUtils;
      const guildIdFromSearchContext = obj.getGuildIdFromSearchContext(closure_0);
      const tmp2 = closure_0;
      if (null != guildIdFromSearchContext) {
        const obj3 = { searchContext: tmp2, searchQueryString, guildId: guildIdFromSearchContext };
        const obj2 = SearchPlatformActionCreatorsDefault;
        const result = obj2.searchGuildChannelTab(obj3);
      }
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  dependencyMap = tmp2;
  if (cResult[2] === arg1) {
    let tmp3;
    let tmp4;
    if (cResult[3] === tmp2) {
      tmp3 = cResult[4];
      tmp4 = cResult[5];
    }
    let obj2 = react;
    const effect = react.useEffect(tmp3, tmp4);
    if (cResult[6] === arg1) {
      if (cResult[7] === tmp2) {
        let tmp6;
        let tmp7;
        let tmp10;
        let tmp9;
        if (cResult[8] === arg0) {
          tmp6 = cResult[9];
          tmp7 = cResult[10];
        }
        const effect1 = obj2.useEffect(tmp6, tmp7);
        if (cResult[11] !== arg0) {
          class C {
            constructor() {
              return () => {
                const obj = closure_1(closure_2[5]);
                const result = obj.cleanupGuildChannelTab(closure_1_0);
              };
            }
          }
          const items = [arg0];
          cResult[11] = arg0;
          cResult[12] = C;
          cResult[13] = items;
          tmp10 = items;
          tmp9 = C;
        } else {
          class C {
            constructor() {
              return () => {
                const obj = closure_1(closure_2[5]);
                const result = obj.cleanupGuildChannelTab(closure_1_0);
              };
            }
          }
          tmp10 = cResult[13];
        }
        const effect2 = obj2.useEffect(tmp9, tmp10);
      }
    }
    const fn3 = function h() {
      if (!closure_1) {
        const obj = _mod12;
        const debounceResult = obj.debounce(closure_2, closure_4);
        const obj2 = SearchPlatformUtilsDefault;
        return obj2.subscribeTextInputValue(closure_0, debounceResult, true);
      }
    };
    const items1 = [arg0, arg1, tmp2];
    cResult[6] = arg1;
    cResult[7] = tmp2;
    cResult[8] = arg0;
    cResult[9] = fn3;
    cResult[10] = items1;
    tmp7 = items1;
    tmp6 = fn3;
  }
  const fn2 = function o() {
    const tmp = closure_1;
    if (!tmp) {
      closure_2("");
    }
  };
  const items2 = [arg1, tmp2];
  cResult[2] = arg1;
  cResult[3] = tmp2;
  cResult[4] = fn2;
  cResult[5] = items2;
  tmp4 = items2;
  tmp3 = fn2;
}) : ((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const items = [arg0];
  const callback = react.useCallback((searchQueryString) => {
    const obj = SearchUtils;
    const guildIdFromSearchContext = obj.getGuildIdFromSearchContext(closure_0);
    const tmp2 = closure_0;
    if (null != guildIdFromSearchContext) {
      const obj3 = { searchContext: tmp2, searchQueryString, guildId: guildIdFromSearchContext };
      const obj2 = SearchPlatformActionCreatorsDefault;
      const result = obj2.searchGuildChannelTab(obj3);
    }
  }, items);
  const items1 = [arg1, callback];
  const effect = react.useEffect(() => {
    const tmp = closure_1;
    if (!tmp) {
      callback("");
    }
  }, items1);
  const items2 = [arg0, arg1, callback];
  const effect1 = react.useEffect(() => {
    if (!closure_1) {
      const obj = _mod12;
      const debounceResult = obj.debounce(callback, closure_4);
      const obj2 = SearchPlatformUtilsDefault;
      return obj2.subscribeTextInputValue(closure_0, debounceResult, true);
    }
  }, items2);
  const items3 = [arg0];
  const effect2 = react.useEffect(() => () => {
    const obj = closure_1(callback[5]);
    const result = obj.cleanupGuildChannelTab(closure_1_0);
  }, items3);
});
let result = size.fileFinishedImporting("modules/search/native/hooks/useAutoSearchGuildChannelTab.tsx");

export const useAutoSearchGuildChannelTab = tmp2;
