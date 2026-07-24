// Module ID: 14628
// Function ID: 111458
// Name: useSettingSearchResults
// Dependencies: [57, 31, 13603, 13604, 14624, 13608, 14629, 13606, 574, 2]
// Exports: useSettingSearchResults

// Module 14628 (useSettingSearchResults)
import _slicedToArray from "_slicedToArray";
import result from "result";
import zustandStore from "zustandStore";
import closure_6 from "zustandStore";

const require = arg1;
let closure_7 = [];
const result = require("zustandStore").fileFinishedImporting("modules/settings/native/search/hooks/useSettingSearchResults.tsx");

export const useSettingSearchResults = function useSettingSearchResults() {
  const memo = memo1.useMemo(() => {
    let tmp = callback(14629);
    tmp = new tmp(memo(13606).getSettingSearchableTitles());
    return tmp;
  }, []);
  const settings = callback(memo1.useState(closure_7), 2);
  let closure_1 = settings[1];
  const isLoading = callback(memo1.useState(false), 2);
  let closure_2 = isLoading[1];
  const placeholderCount = callback(memo1.useState(10), 2);
  callback = placeholderCount[1];
  const items = [memo];
  memo1 = memo1.useMemo(() => callback(574)((arg0) => {
    const field = outer2_6.getField("blocklist");
    const found = outer1_0.getScoredSearchResults(arg0).filter((setting) => {
      setting = setting.setting;
      let tmp = !callback(14624).isBlocked(setting, closure_0);
      if (tmp) {
        tmp = !memo(13608).SETTING_RENDERER_CONFIG[setting].unsearchable;
      }
      return tmp;
    });
    outer1_1(found);
    outer1_3(Math.max(Math.min(found.length, 10), 5));
    outer1_2(false);
  }, 350), items);
  const items1 = [memo1];
  const effect = memo1.useEffect(() => {
    let closure_0 = outer1_5.subscribe((query) => query.query.trim(), (arg0) => {
      if ("" === arg0) {
        if (null != outer1_4.cancel) {
          outer1_4.cancel();
        }
        outer1_1(outer2_7);
        outer1_2(false);
      } else {
        outer1_2(true);
        outer1_4(arg0);
      }
    }, {
      equalityFn(arg0, arg1) {
        return arg0 === arg1;
      }
    });
    return () => {
      callback();
      if (null != outer1_4.cancel) {
        outer1_4.cancel();
      }
    };
  }, items1);
  return { settings: settings[0], isLoading: isLoading[0], placeholderCount: placeholderCount[0] };
};
