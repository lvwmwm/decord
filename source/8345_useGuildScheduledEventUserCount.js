// Module ID: 8345
// Function ID: 66463
// Name: useGuildScheduledEventUserCount
// Dependencies: []
// Exports: default

// Module 8345 (useGuildScheduledEventUserCount)
const useEffect = require(dependencyMap[0]).useEffect;
let closure_4 = importDefault(dependencyMap[1]);
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/guild_scheduled_events/useGuildScheduledEventUserCount.tsx");

export default function useGuildScheduledEventUserCount(arg0, arg1, arg2) {
  const require = arg0;
  const importDefault = arg1;
  const dependencyMap = arg2;
  const items = [closure_4];
  const items1 = [arg1, arg0, arg2];
  const stateFromStores = require(dependencyMap[2]).useStateFromStores(items, () => userCount.getUserCount(arg1, arg2));
  useEffect(() => {
    let tmp = null != arg0;
    if (tmp) {
      tmp = null != arg1;
    }
    if (tmp) {
      if (null != arg2) {
        const items = [arg2];
        let items1 = items;
      } else {
        items1 = [];
      }
      const guildEventUserCounts = arg1(arg2[3]).getGuildEventUserCounts(arg0, arg1, items1);
      const obj = arg1(arg2[3]);
      const tmp5 = arg0;
      const tmp6 = arg1;
    }
  }, items1);
  return stateFromStores;
};
