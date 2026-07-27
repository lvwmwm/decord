// Module ID: 10470
// Function ID: 81239
// Name: useIsActivitiesAvailableInShelf
// Dependencies: [31, 10471, 10472, 5668, 2]
// Exports: default

// Module 10470 (useIsActivitiesAvailableInShelf)
import result from "result";

const require = arg1;
const result = require("useIsPrivateChannelWithEnabledActivities").fileFinishedImporting("modules/activities/useIsActivitiesAvailableInShelf.tsx");

export default function useIsActivitiesAvailableInShelf(arg0, arg1) {
  const _require = arg0;
  const isActivitiesEnabledForCurrentPlatform = _require(10471).useIsActivitiesEnabledForCurrentPlatform();
  let tmp3 = null != arg0;
  let obj = _require(10471);
  if (tmp3) {
    tmp3 = "" !== arg0;
  }
  if (!tmp3) {
    tmp3 = tmp2;
  }
  const dependencyMap = tmp3;
  const items = [arg0, isActivitiesEnabledForCurrentPlatform, tmp3];
  const effect = React.useEffect(() => {
    let tmp = tmp3;
    if (tmp3) {
      tmp = isActivitiesEnabledForCurrentPlatform;
    }
    if (tmp) {
      let obj = callback(tmp3[3]);
      obj = { guildId: callback };
      const shelf = obj.fetchShelf(obj);
    }
  }, items);
  if (tmp3) {
    tmp3 = isActivitiesEnabledForCurrentPlatform;
  }
  return tmp3;
};
