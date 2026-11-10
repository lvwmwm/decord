// Module ID: 9616
// Function ID: 9617
// Name: useGameProfileCommunitiesLocaleFilter
// Dependencies: [19, 9617, 12, 1379, 2]
// Exports: default

// Module 9616 (useGameProfileCommunitiesLocaleFilter)
import _modDef12 from "module_12" /* 12 */;
import GlobalUtils from "GlobalUtils" /* 1379 */;
import GameProfileCommunitiesLocaleFilterStore from "GameProfileCommunitiesLocaleFilterStore" /* 9617 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_4 = GameProfileCommunitiesLocaleFilterStore.useGameProfileCommunitiesLocaleFilterExclusions;
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileCommunitiesLocaleFilter.tsx");

export default function useGameProfileCommunitiesLocaleFilter(arg0, arg1) {
  let items1;
  let closure_0 = arg1;
  let tmp = closure_4(arg0);
  let closure_1 = tmp;
  let items = [arg1];
  const memo = react.useMemo(() => {
    let items = closure_0;
    const uniq = _modDef12.uniq;
    _modDef12;
    if (closure_0 == null) {
      items = [];
    }
    const mapped = items.map((preferredLocale) => preferredLocale.preferredLocale);
    return uniq(mapped.filter(GlobalUtils.isNotNullish));
  }, items);
  const obj = {
    locales: memo,
    filteredGuilds: react.useMemo(() => {
      let items = closure_0;
      if (closure_0 == null) {
        items = [];
      }
      return items.filter((preferredLocale) => {
        const tmp = null == preferredLocale.preferredLocale || !set.has(preferredLocale.preferredLocale);
        return tmp;
      });
    }, items1),
    showLocaleFilter: memo.length >= 2
  };
  items1 = [arg1, tmp];
  return obj;
};
