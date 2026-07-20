// Module ID: 11590
// Function ID: 90099
// Name: useGameServerPowerupStatus
// Dependencies: []
// Exports: default

// Module 11590 (useGameServerPowerupStatus)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/premium/game_server/hooks/useGameServerPowerupStatus.tsx");

export default function useGameServerPowerupStatus(arg0) {
  const arg1 = arg0;
  const items = [closure_4];
  const items1 = [arg0];
  const stateFromStores = arg1(dependencyMap[2]).useStateFromStores(items, () => {
    const stateForGuild = stateForGuild.getStateForGuild(arg0);
    let entitlements;
    if (null != stateForGuild) {
      entitlements = stateForGuild.entitlements;
    }
    return entitlements;
  }, items1);
  const importDefault = stateFromStores;
  const tmp2 = importDefault(dependencyMap[3])(arg0);
  const dependencyMap = tmp2;
  const items2 = [tmp2, stateFromStores];
  return React.useMemo(() => {
    if (0 !== Object.values(null != stateFromStores ? stateFromStores : {}).length) {
      if (tmp2.length > 0) {
        let obj = { type: "expiring", expiringAt: tmp2[0].ends_at };
      } else {
        obj = { type: "active" };
        const intl = arg0(tmp2[4]).intl;
        obj.statusText = intl.string(stateFromStores(arg0[5]).FFLkmx);
      }
      return obj;
    }
  }, items2);
};
