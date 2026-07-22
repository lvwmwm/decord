// Module ID: 14465
// Function ID: 108986
// Name: useSettingSearchResults
// Dependencies: [0, 4294967295, 0, 0, 0, 0]
// Exports: useSettingSearchResults

// Module 14465 (useSettingSearchResults)
import __exportStarResult1 from "__exportStarResult1";
import closure_5 from "__exportStarResult1";
import closure_6 from "__exportStarResult1";

let closure_4 = importAll(dependencyMap[1]);
let closure_7 = [];
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/settings/native/search/hooks/useSettingSearchResults.tsx");

export const useSettingSearchResults = function useSettingSearchResults() {
  const memo = React.useMemo(() => {
    let tmp = callback(closure_2[6]);
    tmp = new tmp(memo(closure_2[7]).getSettingSearchableTitles());
    return tmp;
  }, []);
  const arg1 = memo;
  const settings = callback(React.useState(closure_7), 2);
  let closure_1 = settings[1];
  const isLoading = callback(React.useState(false), 2);
  let closure_2 = isLoading[1];
  const placeholderCount = callback(React.useState(10), 2);
  const callback = placeholderCount[1];
  const items = [memo];
  const memo1 = React.useMemo(() => callback(closure_2[8])((arg0) => {
    let scoredSearchResults = field.getField("blocklist");
    scoredSearchResults = scoredSearchResults.getScoredSearchResults(arg0);
    const found = scoredSearchResults.filter((setting) => {
      setting = setting.setting;
      let tmp = !callback2(closure_2[4]).isBlocked(setting, callback);
      if (tmp) {
        tmp = !callback(closure_2[5]).SETTING_RENDERER_CONFIG[setting].unsearchable;
      }
      return tmp;
    });
    callback(found);
    callback3(Math.max(Math.min(found.length, 10), 5));
    callback2(false);
  }, 350), items);
  const React = memo1;
  const items1 = [memo1];
  const effect = React.useEffect(() => {
    let closure_0 = closure_5.subscribe((query) => query.query.trim(), (arg0) => {
      if ("" === arg0) {
        if (null != lib.cancel) {
          lib.cancel();
        }
        callback2(closure_7);
        callback3(false);
      } else {
        callback3(true);
        lib(arg0);
      }
    }, {
      equalityFn(arg0, arg1) {
        return arg0 === arg1;
      }
    });
    return () => {
      callback();
      if (null != lib.cancel) {
        lib.cancel();
      }
    };
  }, items1);
  return { settings: settings[0], isLoading: isLoading[0], placeholderCount: placeholderCount[0] };
};
