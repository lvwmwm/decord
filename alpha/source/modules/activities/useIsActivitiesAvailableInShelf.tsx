// Module ID: 11718
// Function ID: 11719
// Name: useIsActivitiesAvailableInShelf
// Dependencies: [19, 11719, 11720, 11721, 2]
// Exports: default

// Module 11718 (useIsActivitiesAvailableInShelf)
import fetchShelf from "fetchShelf" /* 11721 */;
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
  const tmp2 = isActivitiesEnabledForCurrentPlatform(11720)(arg1);
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
