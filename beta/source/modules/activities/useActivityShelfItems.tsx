// Module ID: 11521
// Function ID: 11522
// Name: useActivityShelfItems
// Dependencies: [19, 8320, 504, 11522, 11523, 11524, 2]
// Exports: default

// Module 11521 (useActivityShelfItems)
import react from "react" /* 19 */;
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore" /* 8320 */;
import size from "module_2" /* 2 */;

let dependencyMap, set;

const result = size.fileFinishedImporting("modules/activities/useActivityShelfItems.tsx");

export default function useActivityShelfItems(enableFilter) {
  let closure_2;
  let flag = enableFilter.enableFilter;
  const guildId = enableFilter.guildId;
  if (flag === undefined) {
    flag = false;
  }
  let obj = flag(504);
  let items = [DeveloperActivityShelfStore];
  const filter = obj.useStateFromStoresObject(items, () => {
    const obj = { filter: filter.getFilter() };
    return obj;
  }).filter;
  const obj2 = flag(11522);
  const activityShelfData = obj2.useActivityShelfData(guildId);
  const tmp2 = filter(11523)(activityShelfData);
  dependencyMap = tmp2;
  const obj3 = flag(11524);
  const developerActivityShelfItems = obj3.useDeveloperActivityShelfItems();
  const items1 = [developerActivityShelfItems, flag, filter, tmp2];
  return developerActivityShelfItems.useMemo(() => {
    function shouldKeepShelfItem(application) {
      let tmp = !flag;
      if (flag) {
        let hasItem = "" === filter;
        const str = filter;
        if (!hasItem) {
          const str3 = application.application.name;
          const formatted = str3.toLowerCase();
          hasItem = formatted.includes(str.toLowerCase());
        }
        tmp = hasItem;
      }
      return tmp;
    }
    const items = [...developerActivityShelfItems];
    const found = items.filter(shouldKeepShelfItem);
    set = new Set(found.map((application) => application.application.id));
    for (const item10023 of closure_2) {
      let tmp = item10023;
      let hasItem = set.has(item10023.application.id);
      let shouldKeepShelfItemResult = !hasItem;
      if (shouldKeepShelfItemResult) {
        shouldKeepShelfItemResult = shouldKeepShelfItem(tmp);
      }
      if (shouldKeepShelfItemResult) {
        let arr = found.push(tmp);
      }
      continue;
    }
    return found;
  }, items1);
};
