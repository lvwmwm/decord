// Module ID: 11580
// Function ID: 90003
// Name: useGetExpiringGuildPowerups
// Dependencies: [0, 0]
// Exports: default

// Module 11580 (useGetExpiringGuildPowerups)
import __exportStarResult1 from "__exportStarResult1";
import closure_3 from "__exportStarResult1";

const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/premium/powerups/hooks/useGetExpiringGuildPowerups.tsx");

export default function useGetExpiringGuildPowerups(arg0) {
  const arg1 = arg0;
  const items = [closure_3];
  const stateFromStores = arg1(dependencyMap[2]).useStateFromStores(items, () => stateForGuild.getStateForGuild(arg0));
  const dependencyMap = stateFromStores;
  const items1 = [stateFromStores];
  return React.useMemo(() => {
    if (null == stateFromStores) {
      return [];
    } else {
      const arg0 = stateFromStores.allPowerups;
      const _Object = Object;
      const expiringGuildEntitlements = arg0(stateFromStores[3]).getExpiringGuildEntitlements(Object.values(stateFromStores.unlockedPowerups));
      const mapped = expiringGuildEntitlements.map((arg0) => allPowerups[arg0.sku_id]);
      return mapped.filter(arg0(stateFromStores[4]).isNotNullish);
    }
  }, items1);
};
