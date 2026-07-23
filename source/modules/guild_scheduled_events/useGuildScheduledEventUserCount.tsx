// Module ID: 8356
// Function ID: 66535
// Name: useGuildScheduledEventUserCount
// Dependencies: [31, 6758, 566, 8357, 2]
// Exports: default

// Module 8356 (useGuildScheduledEventUserCount)
import { useEffect } from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const result = require("initialize").fileFinishedImporting("modules/guild_scheduled_events/useGuildScheduledEventUserCount.tsx");

export default function useGuildScheduledEventUserCount(arg0, arg1, arg2) {
  const _require = arg0;
  let closure_1 = arg1;
  const dependencyMap = arg2;
  let items = [_isNativeReflectConstruct];
  let items1 = [arg1, arg0, arg2];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_4.getUserCount(closure_1, closure_2));
  useEffect(() => {
    let tmp = null != closure_0;
    if (tmp) {
      tmp = null != callback;
    }
    if (tmp) {
      if (null != table) {
        const items = [table];
        let items1 = items;
      } else {
        items1 = [];
      }
      const guildEventUserCounts = callback(table[3]).getGuildEventUserCounts(closure_0, callback, items1);
      const obj = callback(table[3]);
      const tmp5 = closure_0;
      const tmp6 = callback;
    }
  }, items1);
  return stateFromStores;
};
