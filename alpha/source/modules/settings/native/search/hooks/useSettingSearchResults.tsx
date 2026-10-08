// Module ID: 14785
// Function ID: 14786
// Name: useSettingSearchResults
// Dependencies: [32, 19, 2128, 14777, 14650, 14780, 14651, 558, 576, 504, 14786, 14779, 551, 2]

// Module 14785 (useSettingSearchResults)
import debounceDefault from "debounce" /* 551 */;
import SettingRendererUtils from "SettingRendererUtils" /* 14779 */;
import UserSettingSearchManagerDefault from "UserSettingSearchManager" /* 14786 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2128 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 14777 */;
import SettingBlocklistStore from "SettingBlocklistStore" /* 14650 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, scoredSearchResults, setting;

let react = react_mod;
let closure_8 = [];
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSettingSearchResults() {
  let closure_4;
  let locale;
  let tmp15;
  let tmp17;
  let tmp19;
  let tmp20;
  let tmp23;
  let tmp24;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(13);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [LocaleStore];
    const fn = function o() {
      return locale.locale;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    const self = this;
    const self2 = this;
    const tmp10 = UserSettingSearchManagerDefault;
    const tmpResult2 = tmp(14779);
    const tmp102 = new tmp10(tmpResult2.getSettingSearchableTitles(), stateFromStores);
    cResult[2] = stateFromStores;
    cResult[3] = tmp102;
    tmp8 = tmp102;
  } else {
    tmp8 = cResult[3];
  }
  _require = tmp8;
  [tmp15, importDefault] = react.useState(closure_8);
  _slicedToArray(react.useState(closure_8), 2);
  [tmp17, dependencyMap] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const tmp18 = _slicedToArray(react.useState(10), 2);
  [tmp19, _slicedToArray] = tmp18;
  const obj4 = react;
  if (cResult[4] !== tmp8) {
    const tmp22 = debounceDefault((arg0) => {
      scoredSearchResults = SettingBlocklistStore.getField("blocklist");
      scoredSearchResults = scoredSearchResults.getScoredSearchResults(arg0);
      const found = scoredSearchResults.filter((setting) => {
        setting = setting.setting;
        const obj = closure_2_1(closure_2_2[5]);
        let tmp3 = !obj.isBlocked(setting, closure_0);
        obj.isBlocked(setting, closure_0);
        const tmp = closure_2_2;
        if (tmp3) {
          tmp3 = !scoredSearchResults(tmp[6]).SETTING_RENDERER_CONFIG[setting].unsearchable;
        }
        return tmp3;
      });
      let tmp = importDefault(found);
      _slicedToArray(Math.max(Math.min(found.length, 10), 5));
      let tmp3 = dependencyMap(false);
    }, 350);
    cResult[4] = tmp8;
    cResult[5] = tmp22;
    tmp20 = tmp22;
  } else {
    tmp20 = cResult[5];
  }
  react = tmp20;
  if (cResult[6] !== tmp20) {
    const fn2 = function x() {
      const obj = {
        equalityFn(arg0, arg1) {
          return arg0 === arg1;
        },
        fireImmediately: true
      };
      let closure_0 = UserSettingSearchStore.subscribe((query) => {
        const str = query.query;
        return str.trim();
      }, (arg0) => {
        if ("" === arg0) {
          const cancel = closure_1_4.cancel;
          if (cancel != null) {
            cancel();
          }
          closure_1_1(closure_2_8);
          closure_1_2(false);
        } else {
          closure_1_2(true);
          closure_1_4(arg0);
        }
      }, obj);
      return () => {
        closure_0();
        const cancel = closure_4.cancel;
        if (cancel != null) {
          cancel();
        }
      };
    };
    const items1 = [tmp20];
    cResult[6] = tmp20;
    cResult[7] = fn2;
    cResult[8] = items1;
    tmp24 = items1;
    tmp23 = fn2;
  } else {
    tmp23 = cResult[7];
    tmp24 = cResult[8];
  }
  const effect = obj4.useEffect(tmp23, tmp24);
  if (cResult[9] === tmp17) {
    if (cResult[10] === tmp19) {
      let tmp26;
      if (cResult[11] === tmp15) {
        tmp26 = cResult[12];
      }
      return tmp26;
    }
  }
  const obj2 = { settings: tmp15, isLoading: tmp17, placeholderCount: tmp19 };
  cResult[9] = tmp17;
  cResult[10] = tmp19;
  cResult[11] = tmp15;
  cResult[12] = obj2;
  tmp26 = obj2;
}) : (function useSettingSearchResults() {
  let closure_2;
  let closure_3;
  let closure_4;
  let field;
  let isLoading;
  let memo1;
  let placeholderCount;
  let settings;
  let stateFromStores;
  let obj = stateFromStores(504);
  const items = [memo1];
  stateFromStores = obj.useStateFromStores(items, () => memo1.locale);
  const items1 = [stateFromStores];
  const memo = react.useMemo(() => {
    const tmp = UserSettingSearchManagerDefault;
    const obj = SettingRendererUtils;
    const tmp2 = new tmp(obj.getSettingSearchableTitles(), stateFromStores);
    return tmp2;
  }, items1);
  [settings, dependencyMap] = react.useState(closure_8);
  [isLoading, _slicedToArray] = react.useState(false);
  [placeholderCount, react] = react.useState(10);
  const items2 = [memo];
  memo1 = react.useMemo(() => debounceDefault((arg0) => {
    const field2 = field.getField("blocklist");
    scoredSearchResults = scoredSearchResults.getScoredSearchResults(arg0);
    const found = scoredSearchResults.filter((setting) => {
      setting = setting.setting;
      const obj = scoredSearchResults(closure_2_2[5]);
      let tmp3 = !obj.isBlocked(setting, closure_0);
      obj.isBlocked(setting, closure_0);
      const tmp = closure_2_2;
      if (tmp3) {
        tmp3 = !closure_2_0(tmp[6]).SETTING_RENDERER_CONFIG[setting].unsearchable;
      }
      return tmp3;
    });
    let tmp = closure_1_2(found);
    closure_1_4(Math.max(Math.min(found.length, 10), 5));
    let tmp3 = closure_1_3(false);
  }, 350), items2);
  const items3 = [memo1];
  const effect = react.useEffect(() => {
    const obj = {
      equalityFn(arg0, arg1) {
        return arg0 === arg1;
      },
      fireImmediately: true
    };
    let closure_0 = UserSettingSearchStore.subscribe((query) => {
      const str = query.query;
      return str.trim();
    }, (arg0) => {
      if ("" === arg0) {
        const cancel = memo1.cancel;
        if (cancel != null) {
          cancel();
        }
        closure_1_2(closure_2_8);
        closure_1_3(false);
      } else {
        closure_1_3(true);
        memo1(arg0);
      }
    }, obj);
    return () => {
      closure_0();
      const cancel = memo1.cancel;
      if (cancel != null) {
        cancel();
      }
    };
  }, items3);
  return { settings, isLoading, placeholderCount };
});
const result = size.fileFinishedImporting("modules/settings/native/search/hooks/useSettingSearchResults.tsx");

export const useSettingSearchResults = tmp2;
