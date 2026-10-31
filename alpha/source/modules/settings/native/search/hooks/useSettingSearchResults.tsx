// Module ID: 16585
// Function ID: 16586
// Name: useSettingSearchResults
// Dependencies: [32, 19, 2062, 16577, 16425, 16580, 16426, 504, 16586, 16579, 551, 2]
// Exports: useSettingSearchResults

// Module 16585 (useSettingSearchResults)
import debounceDefault from "debounce" /* 551 */;
import SettingRendererUtils from "SettingRendererUtils" /* 16579 */;
import UserSettingSearchManagerDefault from "UserSettingSearchManager" /* 16586 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2062 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 16577 */;
import SettingBlocklistStore from "SettingBlocklistStore" /* 16425 */;
import size from "module_2" /* 2 */;

let scoredSearchResults, setting;

let closure_8 = [];
const result = size.fileFinishedImporting("modules/settings/native/search/hooks/useSettingSearchResults.tsx");

export function useSettingSearchResults() {
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
}
