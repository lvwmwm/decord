// Module ID: 14256
// Function ID: 14257
// Name: useSettingSearchResults
// Dependencies: [32, 19, 14249, 14141, 14252, 14142, 14257, 14251, 551, 2]
// Exports: useSettingSearchResults

// Module 14256 (useSettingSearchResults)
import debounceDefault from "debounce" /* 551 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 14249 */;
import SettingBlocklistStore from "SettingBlocklistStore" /* 14141 */;
import size from "module_2" /* 2 */;

let scoredSearchResults, setting;

let closure_7 = [];
const result = size.fileFinishedImporting("modules/settings/native/search/hooks/useSettingSearchResults.tsx");

export const useSettingSearchResults = function useSettingSearchResults() {
  let closure_1;
  let closure_2;
  let closure_3;
  let field;
  let isLoading;
  let memo1;
  let placeholderCount;
  let settings;
  const memo = memo1.useMemo(() => {
    const tmp = closure_1(closure_2[6]);
    const obj = memo(closure_2[7]);
    const tmp2 = new tmp(obj.getSettingSearchableTitles());
    return tmp2;
  }, []);
  [settings, closure_1] = memo1.useState(closure_7);
  [isLoading, closure_2] = memo1.useState(false);
  [placeholderCount, _slicedToArray] = memo1.useState(10);
  const items = [memo];
  memo1 = memo1.useMemo(() => debounceDefault((arg0) => {
    const field2 = field.getField("blocklist");
    scoredSearchResults = scoredSearchResults.getScoredSearchResults(arg0);
    const found = scoredSearchResults.filter((setting) => {
      setting = setting.setting;
      const obj = closure_2_1(closure_2_2[4]);
      let tmp3 = !obj.isBlocked(setting, closure_0);
      obj.isBlocked(setting, closure_0);
      const tmp = closure_2_2;
      if (tmp3) {
        tmp3 = !scoredSearchResults(tmp[5]).SETTING_RENDERER_CONFIG[setting].unsearchable;
      }
      return tmp3;
    });
    let tmp = closure_1_1(found);
    closure_1_3(Math.max(Math.min(found.length, 10), 5));
    let tmp3 = closure_1_2(false);
  }, 350), items);
  const items1 = [memo1];
  const effect = memo1.useEffect(() => {
    const obj = {
      equalityFn(arg0, arg1) {
        return arg0 === arg1;
      }
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
        closure_1_1(closure_2_7);
        closure_1_2(false);
      } else {
        closure_1_2(true);
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
  }, items1);
  return { settings, isLoading, placeholderCount };
};
