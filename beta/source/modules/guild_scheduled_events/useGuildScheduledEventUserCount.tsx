// Module ID: 9071
// Function ID: 9072
// Name: useGuildScheduledEventUserCount
// Dependencies: [19, 6946, 504, 9072, 2]
// Exports: default

// Module 9071 (useGuildScheduledEventUserCount)
import react from "react" /* 19 */;
import GuildScheduledEventManagerDefault from "GuildScheduledEventManager" /* 9072 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6946 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const useEffect = react.useEffect;
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useGuildScheduledEventUserCount.tsx");

export default function useGuildScheduledEventUserCount(arg0, arg1, arg2) {
  let closure_0;
  let closure_2;
  _require = arg0;
  let closure_1 = arg1;
  dependencyMap = arg2;
  let items = [GuildScheduledEventStore];
  let items1 = [arg1, arg0, arg2];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => GuildScheduledEventStore.getUserCount(closure_1, closure_2));
  let tmp2 = useEffect(() => {
    let tmp2 = null != closure_0;
    const tmp = closure_0;
    if (tmp2) {
      tmp2 = null != closure_1;
    }
    if (tmp2) {
      let items1;
      const getGuildEventUserCounts = GuildScheduledEventManagerDefault.getGuildEventUserCounts;
      GuildScheduledEventManagerDefault;
      const tmp7 = closure_1;
      if (null != closure_2) {
        const items = [tmp8];
        items1 = items;
      } else {
        items1 = [];
      }
      const guildEventUserCounts = getGuildEventUserCounts(tmp, tmp7, items1);
    }
  }, items1);
  return stateFromStores;
};
