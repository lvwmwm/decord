// Module ID: 9599
// Function ID: 9600
// Name: useGameProfileCommunitiesLocaleOptions
// Dependencies: [19, 9597, 1114, 2]
// Exports: default

// Module 9599 (useGameProfileCommunitiesLocaleOptions)
import intl3 from "intl" /* 1114 */;
import GameProfileCommunitiesLocaleFilterStore2 from "GameProfileCommunitiesLocaleFilterStore" /* 9597 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

const GameProfileCommunitiesLocaleFilterStore_mod = GameProfileCommunitiesLocaleFilterStore2;
let locale;

let react = react_mod;
let GameProfileCommunitiesLocaleFilterStore = GameProfileCommunitiesLocaleFilterStore_mod;
let closure_4 = GameProfileCommunitiesLocaleFilterStore2.useGameProfileCommunitiesLocaleFilterExclusions;
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileCommunitiesLocaleOptions.tsx");

export default function useGameProfileCommunitiesLocaleOptions(arg0, arg1) {
  let closure_2;
  let closure_3;
  let items1;
  let items2;
  let memo;
  let closure_0 = arg0;
  let closure_1 = arg1;
  const tmp = memo(arg0);
  react = tmp;
  let tmp2 = GameProfileCommunitiesLocaleFilterStore((toggleLocale) => toggleLocale.toggleLocale);
  GameProfileCommunitiesLocaleFilterStore = tmp2;
  const items = [arg1];
  memo = react.useMemo(() => {
    let obj = intl3;
    const availableLocales = obj.getAvailableLocales();
    const mapped = closure_1.map((locale) => {
      let intl2;
      let stringResult;
      closure_0 = locale;
      if ("en-US" === locale) {
        const obj2 = { locale, label: intl2.string(closure_2_0(closure_2_1[2]).t.LQLMGP) };
        intl2 = closure_2_0(closure_2_1[2]).intl;
        return obj2;
      } else {
        const found = closure_0.find((value) => value.value === closure_0);
        const obj = { locale, label: stringResult };
        stringResult = locale;
        if (null != found) {
          const intl = closure_2_0(closure_2_1[2]).intl;
          stringResult = intl.string(found.localizedName);
        }
        return obj;
      }
    });
    return mapped.sort((label, label2) => {
      label = label.label;
      return label.localeCompare(label2.label);
    });
  }, items);
  let obj = {
    options: react.useMemo(() => {
      const length = closure_1.filter((item) => !set.has(item)).length;
      return memo.map((locale) => {
        locale = locale.locale;
        const label = locale.label;
        const hasItem = set.has(locale);
        let tmp2 = !hasItem;
        const obj = { locale, label, checked: tmp2, disabled: tmp2 };
        if (!hasItem) {
          tmp2 = 1 === length;
        }
        return obj;
      });
    }, items1),
    toggleLocale: react.useCallback((arg0) => closure_3(closure_0, arg0), items2)
  };
  items1 = [memo, arg1, tmp];
  items2 = [tmp2, arg0];
  return obj;
};
