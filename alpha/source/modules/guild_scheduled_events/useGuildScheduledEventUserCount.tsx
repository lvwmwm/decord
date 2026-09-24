// Module ID: 9962
// Function ID: 9963
// Name: useGuildScheduledEventUserCount
// Dependencies: [19, 7856, 504, 9963, 2]
// Exports: default

// Module 9962 (useGuildScheduledEventUserCount)
import _mod19 from "module_19" /* 19 */;
import GuildScheduledEventManagerDefault from "GuildScheduledEventManager" /* 9963 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7856 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const useEffect = _mod19.useEffect;
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useGuildScheduledEventUserCount.tsx");

export default function useGuildScheduledEventUserCount(arg0, arg1, arg2) {
  _require = arg0;
  closure_1 = arg1;
  dependencyMap = arg2;
  let items = [GuildScheduledEventStore];
  let items1 = [arg1, arg0, arg2];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildScheduledEventStore.getUserCount(closure_1, closure_2));
  useEffect(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = null != closure_1;
    }
    if (tmp2) {
      if (null != closure_2) {
        const items = [tmp7];
        let items1 = items;
      } else {
        items1 = [];
      }
      const guildEventUserCounts = GuildScheduledEventManagerDefault.getGuildEventUserCounts(closure_0, closure_1, items1);
    }
  }, items1);
  return stateFromStores;
};
