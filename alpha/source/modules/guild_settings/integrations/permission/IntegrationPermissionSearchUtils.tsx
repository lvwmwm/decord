// Module ID: 20084
// Function ID: 20085
// Name: fuzzysearch
// Dependencies: [6988, 2]
// Exports: filterPermissionSearchItems

// Module 20084 (fuzzysearch)
import fuzzysearchDefault from "fuzzysearch" /* 6988 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/integrations/permission/IntegrationPermissionSearchUtils.tsx");

export function filterPermissionSearchItems(memo, channelTerms, substr) {
  if ("" === substr) {
    return memo;
  } else {
    let closure_0 = substr.toLowerCase();
    const items = [];
    const iter = memo[Symbol.iterator]();
    let tmp = memo;
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = nextResult;
      let tmp5 = channelTerms(nextResult);
      let names = tmp5.names;
      if (tmp5.id === substr) {
        let items1 = [tmp4];
        iter.return();
        return items1;
      } else {
        if (names.some((item) => {
          const tmp = fuzzysearchDefault;
          return tmp(closure_0, item.toLowerCase());
        })) {
          let arr = items.push(tmp4);
        }
        continue;
      }
    }
    return items;
  }
}
