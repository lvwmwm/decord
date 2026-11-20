// Module ID: 12735
// Function ID: 12736
// Name: useIsActivitiesAvailableInShelf
// Dependencies: [19, 12736, 12737, 12738, 2]
// Exports: default

// Module 12735 (useIsActivitiesAvailableInShelf)
import fetchShelf from "fetchShelf" /* 12738 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const result = size.fileFinishedImporting("modules/activities/useIsActivitiesAvailableInShelf.tsx");

export default function useIsActivitiesAvailableInShelf(guildId, arg1) {
  let closure_2;
  _require = guildId;
  let obj = require("useIsActivitiesEnabledForCurrentPlatform");
  const isActivitiesEnabledForCurrentPlatform = obj.useIsActivitiesEnabledForCurrentPlatform();
  let tmp3 = null != guildId;
  const tmp2 = isActivitiesEnabledForCurrentPlatform(12737)(arg1);
  if (tmp3) {
    tmp3 = "" !== guildId;
  }
  if (!tmp3) {
    tmp3 = tmp2;
  }
  dependencyMap = tmp3;
  const items = [guildId, isActivitiesEnabledForCurrentPlatform, tmp3];
  const effect = react.useEffect(() => {
    const tmp = closure_2 && isActivitiesEnabledForCurrentPlatform;
    if (tmp) {
      const obj2 = { guildId };
      const obj = fetchShelf;
      const shelf = obj.fetchShelf(obj2);
    }
  }, items);
  if (tmp3) {
    tmp3 = isActivitiesEnabledForCurrentPlatform;
  }
  return tmp3;
};
