// Module ID: 8217
// Function ID: 8218
// Name: useGuildScheduledEventUserCount
// Dependencies: [19, 5779, 589, 8218, 2]
// Exports: default

// Module 8217 (useGuildScheduledEventUserCount)
import { useEffect } from "noop";
import scheduledEventSort from "scheduledEventSort";

const result = require("initialize").fileFinishedImporting("modules/guild_scheduled_events/useGuildScheduledEventUserCount.tsx");

export default function useGuildScheduledEventUserCount(arg0, arg1, arg2) {
  const _require = arg0;
  let closure_1 = arg1;
  const dependencyMap = arg2;
  let items = [scheduledEventSort];
  let items1 = [arg1, arg0, arg2];
  const stateFromStores = _require(589).useStateFromStores(items, () => outer1_4.getUserCount(closure_1, closure_2));
  useEffect(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = null != callback;
    }
    if (tmp2) {
      if (null != table) {
        const items = [tmp7];
        let items1 = items;
      } else {
        items1 = [];
      }
      const guildEventUserCounts = callback(table[3]).getGuildEventUserCounts(closure_0, callback, items1);
      const obj = callback(table[3]);
      const tmp6 = callback;
    }
  }, items1);
  return stateFromStores;
};
