// Module ID: 11582
// Function ID: 90033
// Name: useGameServerGetExpiringEntitlements
// Dependencies: []
// Exports: default

// Module 11582 (useGameServerGetExpiringEntitlements)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/premium/game_server/hooks/useGameServerGetExpiringEntitlements.tsx");

export default function useGameServerGetExpiringEntitlements(arg0) {
  const arg1 = arg0;
  let entitlements;
  const items = [closure_3];
  const stateFromStores = arg1(dependencyMap[2]).useStateFromStores(items, () => stateForGuild.getStateForGuild(arg0));
  const dependencyMap = stateFromStores;
  if (null != stateFromStores) {
    entitlements = stateFromStores.entitlements;
  }
  const items1 = [entitlements];
  return React.useMemo(() => {
    let entitlements;
    if (null != stateFromStores) {
      entitlements = stateFromStores.entitlements;
    }
    if (null == entitlements) {
      entitlements = {};
    }
    const values = Object.values(entitlements);
    if (0 === values.length) {
      let items = [];
    } else {
      items = arg0(stateFromStores[3]).getExpiringGuildEntitlements(values);
      const obj2 = arg0(stateFromStores[3]);
    }
    return items;
  }, items1);
};
